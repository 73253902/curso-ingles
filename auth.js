// ================================================================
// AUTENTICACIÓN Y SINCRONIZACIÓN — El Dragón del Lenguaje
// Conecta con Supabase para: registro/login, control de prueba gratuita
// de 7 días, control de pago único, y sincronización de progreso
// entre dispositivos.
// ================================================================

const SUPABASE_URL = 'https://waclgxxqjtrgxqsqklky.supabase.co';
const SUPABASE_KEY = 'sb_publishable_RZfjr7f9iqYFPoHkGQjo_Q_mL67PtJ5';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const DIAS_PRUEBA_GRATIS = 7;

let currentUser = null;
let currentProfile = null;

// ================================================================
// Registro y login
// ================================================================
async function signUp(email, password){
  const { data, error } = await supabaseClient.auth.signUp({ email, password });
  return { data, error };
}

async function signIn(email, password){
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function signOut(){
  await supabaseClient.auth.signOut();
  currentUser = null;
  currentProfile = null;
}

// ================================================================
// Chequeo de sesión al cargar la app
// ================================================================
async function checkSession(){
  const { data: { session } } = await supabaseClient.auth.getSession();
  if(session && session.user){
    currentUser = session.user;
    return true;
  }
  return false;
}

// ================================================================
// Perfil: prueba gratuita y estado de pago
// ================================================================
async function loadProfile(){
  if(!currentUser) return null;
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', currentUser.id)
    .single();
  if(error){ console.error('Error cargando perfil:', error); return null; }
  currentProfile = data;
  return data;
}

function diasRestantesDePrueba(profile){
  if(!profile) return 0;
  const inicio = new Date(profile.trial_started_at);
  const ahora = new Date();
  const diasPasados = Math.floor((ahora - inicio) / (1000*60*60*24));
  return Math.max(0, DIAS_PRUEBA_GRATIS - diasPasados);
}

function tieneAcceso(profile){
  if(!profile) return false;
  if(profile.paid) return true;
  return diasRestantesDePrueba(profile) > 0;
}

// ================================================================
// Sincronización de progreso con Supabase
// ================================================================
async function pullProgressFromSupabase(){
  if(!currentUser) return null;
  const { data, error } = await supabaseClient
    .from('progress')
    .select('data')
    .eq('user_id', currentUser.id)
    .single();
  if(error){ console.error('Error trayendo progreso:', error); return null; }
  return data ? data.data : null;
}

async function pushProgressToSupabase(progressData){
  if(!currentUser) return;
  const { error } = await supabaseClient
    .from('progress')
    .update({ data: progressData, updated_at: new Date().toISOString() })
    .eq('user_id', currentUser.id);
  if(error) console.error('Error guardando progreso en la nube:', error);
}

// ================================================================
// Flujo de arranque de la app
// ================================================================
async function iniciarApp(){
  const el = id => document.getElementById(id);
  const haySesion = await checkSession();

  if(!haySesion){
    mostrarPantallaLogin();
    return;
  }

  const profile = await loadProfile();
  if(!profile){
    mostrarPantallaLogin();
    return;
  }

  if(!tieneAcceso(profile)){
    mostrarPantallaPago(profile);
    return;
  }

  // Tiene acceso: traer el progreso de la nube antes de mostrar la app
  const progresoNube = await pullProgressFromSupabase();
  if(progresoNube && Object.keys(progresoNube).length){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progresoNube));
  }

  el('authGate').style.display='none';
  showHome();
}

// ================================================================
// Pantalla de login / registro
// ================================================================
function mostrarPantallaLogin(){
  const el = id => document.getElementById(id);
  el('home').style.display='none';
  el('authGate').style.display='block';
  el('authLoginBox').style.display='block';
  el('authPagoBox').style.display='none';

  el('authError').textContent='';
  el('authSubmitBtn').onclick = async ()=>{
    const email = el('authEmail').value.trim();
    const password = el('authPassword').value;
    if(!email || !password){ el('authError').textContent='Completa email y contraseña.'; return; }

    el('authSubmitBtn').disabled = true;
    const modoRegistro = el('authModoRegistro').checked;
    let resultado;
    if(modoRegistro){
      resultado = await signUp(email, password);
    } else {
      resultado = await signIn(email, password);
    }
    el('authSubmitBtn').disabled = false;

    if(resultado.error){
      el('authError').textContent = resultado.error.message;
      return;
    }
    if(modoRegistro && resultado.data && !resultado.data.session){
      el('authError').textContent = '¡Cuenta creada! Revisa tu correo para confirmar tu cuenta, y luego inicia sesión.';
      return;
    }
    iniciarApp();
  };
}

// ================================================================
// Pantalla de prueba vencida / pago requerido
// ================================================================
function mostrarPantallaPago(profile){
  const el = id => document.getElementById(id);
  el('home').style.display='none';
  el('authGate').style.display='block';
  el('authLoginBox').style.display='none';
  el('authPagoBox').style.display='block';
  el('authPagoTexto').textContent = 'Tu prueba gratuita de '+DIAS_PRUEBA_GRATIS+' días ya terminó. Para seguir usando el curso, necesitas hacer el pago único.';
  el('authCerrarSesionBtn').onclick = async ()=>{ await signOut(); mostrarPantallaLogin(); };
  el('authPagarBtn').onclick = iniciarPagoWompi;
}

// ================================================================
// Pago con Wompi — abre el widget de pago con los datos generados
// de forma segura por la función crear-pago (Supabase Edge Function)
// ================================================================
async function iniciarPagoWompi(){
  const el = id => document.getElementById(id);
  el('authPagarBtn').disabled = true;
  el('authPagarBtn').textContent = 'Preparando el pago...';

  try{
    const { data: sesionData } = await supabaseClient.auth.getSession();
    const token = sesionData.session.access_token;

    const resp = await fetch(SUPABASE_URL + '/functions/v1/crear-pago', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const datosDePago = await resp.json();

    if(datosDePago.error){
      alert('No se pudo iniciar el pago: ' + datosDePago.error);
      el('authPagarBtn').disabled = false;
      el('authPagarBtn').textContent = 'Pagar ahora';
      return;
    }

    const checkout = new WidgetCheckout({
      currency: datosDePago.currency,
      amountInCents: datosDePago.amountInCents,
      reference: datosDePago.reference,
      publicKey: datosDePago.publicKey,
      signature: { integrity: datosDePago.signature },
      redirectUrl: window.location.href
    });

    checkout.open(async function(result){
      el('authPagarBtn').disabled = false;
      el('authPagarBtn').textContent = 'Pagar ahora';
      const transaction = result.transaction;
      if(transaction && transaction.status === 'APPROVED'){
        // El webhook ya debería haber marcado el pago — recargamos para confirmar acceso
        alert('¡Pago aprobado! Cargando tu curso...');
        iniciarApp();
      } else {
        alert('El pago no se completó (estado: ' + (transaction ? transaction.status : 'desconocido') + '). Puedes intentar de nuevo.');
      }
    });
  } catch(e){
    alert('Ocurrió un error al iniciar el pago: ' + e.message);
    el('authPagarBtn').disabled = false;
    el('authPagarBtn').textContent = 'Pagar ahora';
  }
}
