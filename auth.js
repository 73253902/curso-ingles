// ================================================================
// AUTENTICACIÓN Y SINCRONIZACIÓN — El Dragón del Lenguaje
// Conecta con Supabase para: registro/login, control de acceso por
// contenido (primeras 7 lecciones gratis, el resto requiere pago
// único), y sincronización de progreso entre dispositivos.
// ================================================================

const SUPABASE_URL = 'https://waclgxxqjtrgxqsqklky.supabase.co';
const SUPABASE_KEY = 'sb_publishable_RZfjr7f9iqYFPoHkGQjo_Q_mL67PtJ5';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const LECCIONES_GRATIS = 7;

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
// Perfil: estado de pago y de tester
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

// ¿Puede entrar a este día del curso principal? Las primeras LECCIONES_GRATIS
// siempre están disponibles para cualquiera; el resto necesita pago (o ser tester).
function diaEstaDesbloqueado(dayNum, profile){
  if(dayNum <= LECCIONES_GRATIS) return true;
  if(!profile) return false;
  if(profile.paid) return true;
  if(profile.is_tester) return true;
  return false;
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

  // El modo admin es independiente del sistema de cuentas — si ya estás en modo
  // admin (por la URL ?admin=..., recordada en localStorage), entrás directo,
  // sin necesidad de registrarte ni iniciar sesión.
  if(typeof isAdmin === 'function' && isAdmin()){
    el('authGate').style.display='none';
    showHome();
    return;
  }

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

  // Ya no hay bloqueo por tiempo: cualquiera que inició sesión entra a la app.
  // El bloqueo por lección (día 8 en adelante) se chequea al abrir cada día,
  // no acá en el arranque general.
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
// Pantalla de pago requerido — se muestra al intentar abrir un día
// bloqueado (8 en adelante), no al arrancar la app.
// ================================================================
function mostrarPantallaPago(profile){
  const el = id => document.getElementById(id);
  el('home').style.display='none';
  el('authGate').style.display='block';
  el('authLoginBox').style.display='none';
  el('authPagoBox').style.display='block';
  el('authPagoTexto').textContent = 'Ya usaste las '+LECCIONES_GRATIS+' lecciones gratis. Para seguir con el resto del curso, necesitas hacer el pago único.';
  el('authCerrarSesionBtn').onclick = ()=>{ el('authGate').style.display='none'; showHome(); };
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
        // El webhook ya debería haber marcado el pago — recargamos el perfil para confirmar acceso
        alert('¡Pago aprobado! Cargando tu curso...');
        await loadProfile();
        el('authGate').style.display='none';
        showHome();
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
