// ================================================================
// AUTENTICACIÓN Y SINCRONIZACIÓN — El Dragón del Lenguaje
// Conecta con Supabase para: registro/login, control de acceso por
// contenido (primeras 7 lecciones gratis, el resto requiere pago
// único), y sincronización de progreso entre dispositivos.
// ================================================================

const SUPABASE_URL = 'https://waclgxxqjtrgxqsqklky.supabase.co';
const SUPABASE_KEY = 'sb_publishable_RZfjr7f9iqYFPoHkGQjo_Q_mL67PtJ5';
// Se lee ANTES de crear el cliente: al abrir el enlace del correo de recuperación,
// la dirección trae "type=recovery" (o un error si el enlace venció) y Supabase la limpia después.
const VIENE_DE_RECUPERACION = /type=recovery/.test(window.location.hash);
let ENLACE_VENCIDO = /error_code=otp_expired|error=access_denied/.test(window.location.hash + window.location.search);
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
// Mensajes de error de Supabase, en español y con qué hacer
// ================================================================
function traducirErrorAuth(error){
  const m = (error && (error.message || String(error))) || '';
  if(/Invalid login credentials/i.test(m)) return 'Correo o contraseña incorrectos. Si no recuerdas tu contraseña, toca "¿Olvidaste tu contraseña?".';
  if(/already registered|already been registered/i.test(m)) return 'Ya existe una cuenta con este correo. Quita el chulito de "Es la primera vez" e inicia sesión.';
  if(/Email not confirmed/i.test(m)) return 'Todavía no confirmas tu correo. Busca el mensaje de confirmación en tu bandeja (y en Spam) y toca el enlace.';
  if(/at least 6 characters|Password should be/i.test(m)) return 'La contraseña debe tener al menos 6 caracteres.';
  if(/should be different from the old/i.test(m)) return 'La nueva contraseña debe ser diferente a la anterior.';
  if(/invalid format|Unable to validate email/i.test(m)) return 'Ese correo no parece válido. Revísalo.';
  if(/rate limit|For security purposes|too many/i.test(m)) return 'Hiciste varios intentos seguidos. Espera unos minutos y vuelve a intentarlo.';
  if(/session missing|expired|invalid.*(token|link)/i.test(m)) return 'El enlace ya no es válido. Pide uno nuevo con "¿Olvidaste tu contraseña?".';
  if(/network|Failed to fetch/i.test(m)) return 'No hay conexión. Revisa tu internet e inténtalo de nuevo.';
  return m;
}

// ================================================================
// ¿Olvidaste tu contraseña? — envía un correo con un enlace para crear una nueva
// ================================================================
async function enviarCorreoRecuperacion(email){
  const volverA = window.location.origin + window.location.pathname;
  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo: volverA });
  return { error };
}

// Pantalla para escribir la contraseña nueva (al llegar desde el enlace del correo)
function mostrarPantallaNuevaClave(){
  const el = id => document.getElementById(id);
  el('home').style.display='none';
  el('authGate').style.display='block';
  el('authLoginBox').style.display='none';
  el('authPagoBox').style.display='none';
  el('authNuevaClaveBox').style.display='block';
  el('authNuevaClaveError').textContent='';
  el('authNuevaClaveBtn').onclick = async ()=>{
    const c1 = el('authNuevaClave1').value, c2 = el('authNuevaClave2').value;
    const err = el('authNuevaClaveError');
    err.style.color = 'var(--warn)';
    if(c1.length < 6){ err.textContent = 'La contraseña debe tener al menos 6 caracteres.'; return; }
    if(c1 !== c2){ err.textContent = 'Las dos contraseñas no coinciden. Escríbelas otra vez.'; return; }
    el('authNuevaClaveBtn').disabled = true;
    const { error } = await supabaseClient.auth.updateUser({ password: c1 });
    el('authNuevaClaveBtn').disabled = false;
    if(error){ err.textContent = traducirErrorAuth(error); return; }
    err.style.color = 'var(--ok)';
    err.textContent = '✓ ¡Listo! Tu contraseña quedó cambiada. Entrando al curso...';
    try{ history.replaceState(null, '', window.location.pathname + window.location.search); }catch(e){}
    setTimeout(()=>{ el('authNuevaClaveBox').style.display='none'; iniciarApp(); }, 1500);
  };
}
let recuperacionPendiente = VIENE_DE_RECUPERACION;
let recuperacionAtendida = false; // la pantalla de contraseña nueva se muestra una sola vez
supabaseClient.auth.onAuthStateChange((evento)=>{
  if(evento === 'PASSWORD_RECOVERY' && !recuperacionAtendida){
    recuperacionAtendida = true;
    recuperacionPendiente = false;
    if(document.getElementById('authNuevaClaveBox')) mostrarPantallaNuevaClave();
  }
});

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

  // Llegó desde el enlace del correo "¿Olvidaste tu contraseña?": primero la contraseña nueva
  if(recuperacionPendiente && !recuperacionAtendida){
    recuperacionPendiente = false;
    recuperacionAtendida = true;
    mostrarPantallaNuevaClave();
    return;
  }

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
  if(el('cerrarSesionLink')){
    el('cerrarSesionLink').style.display='inline-block';
    el('cerrarSesionLink').onclick = async ()=>{
      if(!confirm('¿Cerrar sesión en este dispositivo?')) return;
      await signOut();
      window.location.reload();
    };
  }
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

  if(el('authNuevaClaveBox')) el('authNuevaClaveBox').style.display='none';
  el('authError').style.color='var(--warn)';
  el('authError').textContent = ENLACE_VENCIDO
    ? 'Ese enlace de recuperación ya venció o ya se usó. Escribe tu correo y toca "¿Olvidaste tu contraseña?" para recibir uno nuevo.'
    : '';
  ENLACE_VENCIDO = false;

  el('authOlvideBtn').onclick = async ()=>{
    const email = el('authEmail').value.trim();
    const aviso = el('authError');
    if(!email){ aviso.style.color='var(--warn)'; aviso.textContent='Escribe arriba el correo de tu cuenta y vuelve a tocar "¿Olvidaste tu contraseña?".'; el('authEmail').focus(); return; }
    el('authOlvideBtn').style.pointerEvents='none';
    aviso.style.color='var(--muted)'; aviso.textContent='Enviando el correo...';
    const { error } = await enviarCorreoRecuperacion(email);
    el('authOlvideBtn').style.pointerEvents='';
    if(error && /rate limit|For security purposes|too many|invalid format|Unable to validate/i.test(error.message||'')){
      aviso.style.color='var(--warn)'; aviso.textContent = traducirErrorAuth(error); return;
    }
    // Mismo mensaje exista o no la cuenta, para no revelar qué correos están registrados
    aviso.style.color='var(--ok)';
    aviso.textContent='📧 Si hay una cuenta con '+email+', te enviamos un enlace para crear una contraseña nueva. Revisa tu bandeja y la carpeta de Spam.';
  };

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
      el('authError').style.color='var(--warn)';
      el('authError').textContent = traducirErrorAuth(resultado.error);
      return;
    }
    if(modoRegistro && resultado.data && !resultado.data.session){
      el('authError').textContent = '¡Cuenta creada! Revisa tu correo para confirmar tu cuenta, y luego inicia sesión.';
      return;
    }
    if(modoRegistro){
      const codigoReferido = el('authCodigoReferido') ? el('authCodigoReferido').value.trim() : '';
      if(codigoReferido){
        try{ await supabaseClient.rpc('registrar_referido', { p_codigo: codigoReferido }); }
        catch(e){ /* código inválido — no bloqueamos el registro por esto */ }
      }
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

// ================= Referidos =================
async function mostrarReferidos(){
  const el = id => document.getElementById(id);
  el('home').style.display='none';
  el('referidosModulo').style.display='block';
  const box = el('referidosBox');
  box.innerHTML = '<h2>🎁 Referí y ganá</h2><p class="sub">Cargando tu código...</p>';

  if(!currentUser || !currentProfile){
    box.innerHTML = '<h2>🎁 Referí y ganá</h2><p class="sub">Necesitas iniciar sesión para ver tu código.</p>';
    const volverBtnError = document.createElement('button');
    volverBtnError.className='ghost'; volverBtnError.style.marginTop='16px';
    volverBtnError.textContent='← Volver al inicio';
    volverBtnError.onclick = ()=>{ el('referidosModulo').style.display='none'; el('home').style.display='block'; };
    box.appendChild(volverBtnError);
    return;
  }

  try{
    const { data: perfilActualizado } = await supabaseClient
      .from('profiles').select('referral_code').eq('id', currentUser.id).maybeSingle();
    const codigo = perfilActualizado ? perfilActualizado.referral_code : '';

    const { data: ganancias } = await supabaseClient
      .from('referral_earnings').select('*').eq('referrer_id', currentUser.id).order('created_at',{ascending:false});

    const total = (ganancias||[]).reduce((s,g)=>s+Number(g.amount),0);
    const pendiente = (ganancias||[]).filter(g=>!g.paid).reduce((s,g)=>s+Number(g.amount),0);

    box.innerHTML =
      '<h2>🎁 Referí y ganá</h2>'+
      '<p class="sub">Compartí tu código con un amigo. Cuando se inscriba usándolo y pague el curso, ganás el 10% de esa venta.</p>'+
      '<div style="background:var(--bg-panel-2); border-radius:12px; padding:16px; text-align:center; margin:16px 0;">'+
        '<p style="font-size:12px; color:var(--muted); margin:0 0 6px;">Tu código</p>'+
        '<p style="font-size:24px; font-weight:700; letter-spacing:2px; margin:0;">'+(codigo||'—')+'</p>'+
      '</div>'+
      '<div style="display:flex; gap:10px; margin-bottom:16px;">'+
        '<div style="flex:1; background:var(--bg-panel-2); border-radius:10px; padding:12px; text-align:center;">'+
          '<p style="font-size:12px; color:var(--muted); margin:0;">Ganado en total</p>'+
          '<p style="font-size:18px; font-weight:700; margin:2px 0 0;">$'+total.toLocaleString('es-CO')+'</p>'+
        '</div>'+
        '<div style="flex:1; background:var(--bg-panel-2); border-radius:10px; padding:12px; text-align:center;">'+
          '<p style="font-size:12px; color:var(--muted); margin:0;">Pendiente de pago</p>'+
          '<p style="font-size:18px; font-weight:700; margin:2px 0 0; color:var(--ok);">$'+pendiente.toLocaleString('es-CO')+'</p>'+
        '</div>'+
      '</div>';

    if(ganancias && ganancias.length){
      const lista = document.createElement('div');
      ganancias.forEach(g=>{
        const fila = document.createElement('div');
        fila.style.cssText='display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border); font-size:13px;';
        fila.innerHTML = '<span>'+new Date(g.created_at).toLocaleDateString('es-CO')+'</span><span>$'+Number(g.amount).toLocaleString('es-CO')+' '+(g.paid?'✅ pagado':'⏳ pendiente')+'</span>';
        lista.appendChild(fila);
      });
      box.appendChild(lista);
    }
  } catch(e){
    box.innerHTML = '<h2>🎁 Referí y ganá</h2><p class="sub">Hubo un problema cargando tus datos. Probá de nuevo en un momento.</p>';
  }

  const volverBtn = document.createElement('button');
  volverBtn.className='ghost'; volverBtn.style.marginTop='16px';
  volverBtn.textContent='← Volver al inicio';
  volverBtn.onclick = ()=>{ el('referidosModulo').style.display='none'; el('home').style.display='block'; };
  box.appendChild(volverBtn);
}
window.mostrarReferidos = mostrarReferidos;
