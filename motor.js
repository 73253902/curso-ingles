// ================================================================
// CURRÍCULO — cada entrada es un día. Por ahora solo existe el Día 1;
// los siguientes días se suman acá mismo en lotes (misma estructura).
// ================================================================
// El currículo completo se arma juntando cada archivo de unidad (unidad1.js ... unidad7.js).
// Para sumar una unidad nueva: crear unidadN.js con el mismo formato, sumar su <script src>
// en el HTML, y agregar ...curriculumUnidadN acá abajo.
const curriculum = [
  ...curriculumUnidad1,
  ...curriculumUnidad2,
  ...curriculumUnidad3,
  ...curriculumUnidad4,
  ...curriculumUnidad5,
  ...curriculumUnidad6,
  ...curriculumUnidad7,
  ...curriculumUnidad8,
  ...curriculumUnidad9,
  ...curriculumUnidad10,
  ...curriculumUnidad11,
  ...curriculumUnidad12,
  ...curriculumUnidad13,
  ...curriculumUnidad14,
  ...curriculumUnidad15
];
const TOTAL_DAYS = 180; // el mapa completo; el resto de los días se muestran "próximamente" hasta que se agreguen

// ================================================================
// MEMORIA DE PROGRESO (persiste en este navegador entre sesiones)
// ================================================================
const STORAGE_KEY = 'curso_ingles_progreso_v1';
function loadProgress(){ try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }catch(e){ return {}; } }
function saveProgress(all){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); }catch(e){}
  // Sincronización con la nube: no bloquea el guardado local si falla o tarda.
  if(typeof pushProgressToSupabase === 'function' && typeof currentUser !== 'undefined' && currentUser){
    pushProgressToSupabase(all).catch(()=>{});
  }
}
function saveDayResult(dayNum, data){
  const all = loadProgress();
  all[dayNum] = data;
  saveProgress(all);
}
function getCompletedDays(){
  const all = loadProgress();
  return Object.keys(all).filter(k=>all[k].completed).map(Number);
}
function getCrossDayReviewWords(excludeDay, limit){
  const all = loadProgress();
  let pool=[];
  Object.keys(all).forEach(k=>{
    if(Number(k)===excludeDay) return;
    const d=all[k];
    if(d.weakWords) pool = pool.concat(d.weakWords);
  });
  // de-duplicar por 'en'
  const seen=new Set(); const out=[];
  pool.reverse().forEach(w=>{ if(!seen.has(w.en)){ seen.add(w.en); out.push(w); } });
  return out.slice(0, limit||6);
}

function getMeta(){ const all=loadProgress(); return all._meta || {placementDone:false, unlockedThrough:1}; }
function saveMeta(meta){ const all=loadProgress(); all._meta=meta; saveProgress(all); }

// ================================================================
// MODO ADMINISTRADOR — acceso directo a cualquier día durante la construcción
// Para activarlo: abrir la URL agregando ?admin=robinson2026 al final, una sola vez.
// El navegador lo recuerda después; para desactivarlo, tocar "Salir del modo admin".
// ================================================================
const ADMIN_PASSCODE = 'robinson2026';
const ADMIN_KEY = 'curso_ingles_admin_v1';
(function checkAdminUrl(){
  const params = new URLSearchParams(window.location.search);
  if(params.get('admin') === ADMIN_PASSCODE){ localStorage.setItem(ADMIN_KEY, '1'); }
})();
function isAdmin(){ return localStorage.getItem(ADMIN_KEY) === '1'; }
document.getElementById('exitAdminLink').addEventListener('click', ()=>{
  localStorage.removeItem(ADMIN_KEY);
  renderHome();
});
document.getElementById('adminGoBtn').addEventListener('click', ()=>{
  const n = parseInt(document.getElementById('adminDayInput').value, 10);
  const exists = curriculum.some(d=>d.day===n);
  if(!exists){ alert('Ese día todavía no tiene contenido cargado (hay '+curriculum.length+' días disponibles por ahora).'); return; }
  startDay(n);
});
document.getElementById('adminCompleteBtn').addEventListener('click', ()=>{
  const n = parseInt(document.getElementById('adminDayInput').value, 10);
  const day = curriculum.find(d=>d.day===n);
  if(!day){ alert('Ese día todavía no tiene contenido cargado (hay '+curriculum.length+' días disponibles por ahora).'); return; }
  saveDayResult(n, {
    completed:true, date:new Date().toISOString(),
    learnedWords: day.words, weakWords: [],
    score:{good:day.words.length, total:day.words.length, pct:100}
  });
  renderHome();
  alert('Día '+n+' marcado como completado (sin jugar). Ya puedes entrar a revisarlo o seguir al siguiente.');
});
document.getElementById('adminCompleteAllBtn').addEventListener('click', ()=>{
  curriculum.forEach(day=>{
    saveDayResult(day.day, {
      completed:true, date:new Date().toISOString(),
      learnedWords: day.words, weakWords: [],
      score:{good:day.words.length, total:day.words.length, pct:100}
    });
  });
  renderHome();
  alert('Los '+curriculum.length+' días cargados quedaron marcados como completados. Ahora puedes entrar a cualquiera libremente para revisarlo.');
});

// ================================================================
// PANTALLA DE INICIO: dibujar el selector de días
// ================================================================
function renderHome(){
  const progress = loadProgress();
  const meta = getMeta();
  const completed = getCompletedDays();
  const admin = isAdmin();

  const esTester = typeof currentProfile !== 'undefined' && currentProfile && currentProfile.is_tester;

  document.getElementById('placementCard').style.display = 'flex';
  if(esTester){
    document.getElementById('placementCardTitulo').textContent = '🧪 Eres parte del equipo de prueba — ¡gracias!';
    document.getElementById('placementCardTexto').textContent = 'Tienes acceso completo y permanente al curso, sin límite de tiempo. Si encuentras algún problema mientras lo pruebas, avísale a Robinson.';
    document.getElementById('startPlacementBtn').textContent = 'Auto-evaluarme';
    document.getElementById('skipPlacementBtn').style.display = 'none';
  } else if(meta.placementDone){
    document.getElementById('placementCardTitulo').textContent = '¿Quieres volver a evaluarte?';
    document.getElementById('placementCardTexto').textContent = 'Ya hiciste esta evaluación antes. Puedes repetirla cuando quieras — por ejemplo, al terminar el curso, para ver cuánto avanzaste.';
    document.getElementById('startPlacementBtn').textContent = 'Auto-evaluarme de nuevo';
    document.getElementById('skipPlacementBtn').style.display = 'none';
  } else {
    document.getElementById('placementCardTitulo').textContent = '¿Ya sabes algo de inglés?';
    document.getElementById('placementCardTexto').textContent = 'Una evaluación real de 4 fases (vocabulario, gramática, lectura y escritura) para empezar en el día que te corresponde, en vez de repetir lo que ya sabes.';
    document.getElementById('startPlacementBtn').textContent = 'Auto-evaluarme';
    document.getElementById('skipPlacementBtn').style.display = 'inline-flex';
  }
  document.getElementById('adminBox').style.display = admin ? 'flex' : 'none';

  document.getElementById('progressSummary').innerHTML =
    '<div>Días completados: <b>'+completed.length+' / '+TOTAL_DAYS+'</b></div>' +
    '<div>Palabras aprendidas: <b>'+completed.reduce((sum,d)=>sum+((progress[d].learnedWords||[]).length),0)+'</b></div>';

  const container = document.getElementById('unitsContainer');
  container.innerHTML='';
  const byUnit = {};
  curriculum.forEach(d=>{ (byUnit[d.unit] = byUnit[d.unit]||[]).push(d); });

  Object.keys(byUnit).forEach(unitKey=>{
    const days = byUnit[unitKey];
    const um = unitMeta[unitKey] || {icon:'📘', color:'#8891A3', name:days[0].theme, desc:''};
    const unitDone = days.every(d=>progress[d.day] && progress[d.day].completed);
    const unitStarted = days.some(d=>progress[d.day] && progress[d.day].completed);

    const block = document.createElement('div'); block.className='unit-chapter';
    block.style.setProperty('--uc', um.color);
    block.innerHTML =
      '<div class="uc-head">'+
        '<div class="uc-icon">'+um.icon+'</div>'+
        '<div class="uc-titles">'+
          '<div class="uc-eyebrow">Unidad '+unitKey+' · '+days[0].unitTitle.split('·')[1].trim()+(unitDone?' · completa ✅':'')+'</div>'+
          '<div class="uc-name">'+um.name+'</div>'+
          '<div class="uc-desc">'+um.desc+'</div>'+
        '</div>'+
      '</div>';
    if(String(unitKey)==='1' && typeof mostrarFoneticaBasico==='function'){
      const fnBtn = document.createElement('button');
      fnBtn.className='ghost'; fnBtn.style.cssText='width:100%; margin:10px 0 4px;';
      fnBtn.textContent='🗣️ Fonética — Mi Inicio';
      fnBtn.title='Repasa las vocales y las combinaciones básicas antes de arrancar';
      fnBtn.onclick = ()=>mostrarFoneticaBasico(true);
      block.appendChild(fnBtn);
    }
    if(String(unitKey)==='15' && typeof iniciarEvaluacion==='function'){
      const examBtn = document.createElement('button');
      examBtn.className='primary'; examBtn.style.cssText='width:100%; margin:10px 0 4px;';
      examBtn.textContent='🏆 Examen final del curso';
      examBtn.title='La misma evaluación de 4 fases, con nivel de cierre — certifica tu progreso';
      examBtn.onclick = ()=>iniciarEvaluacion('final');
      block.appendChild(examBtn);
    }
    const grid = document.createElement('div'); grid.className='day-grid';
    days.forEach(d=>{
      const card=document.createElement('div');
      const isDone = progress[d.day] && progress[d.day].completed;
      const unlockedByPlacement = d.day <= (meta.unlockedThrough||1);
      const isLocked = !admin && d.day>1 && !unlockedByPlacement && !(progress[d.day-1] && progress[d.day-1].completed) && !isDone;
      const necesitaPago = !admin && typeof diaEstaDesbloqueado==='function' && !diaEstaDesbloqueado(d.day, typeof currentProfile!=='undefined'?currentProfile:null);
      card.className='day-card '+(isDone?'done':(isLocked||necesitaPago)?'locked':'available');
      card.title = necesitaPago ? 'Necesitas el pago único para desbloquear esta lección' : d.theme;
      card.innerHTML = '<div class="n">Día '+d.day+'</div><div class="st">'+(isDone?'✅':necesitaPago?'💳':isLocked?'🔒':'▶️')+'</div><div class="dt">'+d.theme.split('/')[0].trim()+'</div>';
      if(necesitaPago){
        card.addEventListener('click', ()=>{ if(typeof mostrarPantallaPago==='function') mostrarPantallaPago(typeof currentProfile!=='undefined'?currentProfile:null); });
      } else if(!isLocked){
        card.addEventListener('click', ()=>startDay(d.day));
      }
      grid.appendChild(card);
    });
    block.appendChild(grid);
    container.appendChild(block);
  });

  if(curriculum.length < TOTAL_DAYS){
    const soon=document.createElement('div'); soon.className='unit-chapter'; soon.style.setProperty('--uc', '#8891A3');
    soon.innerHTML = '<div class="uc-head"><div class="uc-icon">🔜</div><div class="uc-titles"><div class="uc-eyebrow">Próximamente</div><div class="uc-name">Más unidades en camino</div><div class="uc-desc">Los Días '+(curriculum.length+1)+' a '+TOTAL_DAYS+' se van sumando por lotes de 2 semanas a medida que avanzamos.</div></div></div>';
    container.appendChild(soon);
  }

  renderSyllabus();
}
function renderSyllabus(){
  const box = document.getElementById('syllabusBox');
  if(!box) return;
  const byUnit = {};
  curriculum.forEach(d=>{ (byUnit[d.unit] = byUnit[d.unit]||[]).push(d); });
  box.innerHTML = Object.keys(byUnit).map(unitKey=>{
    const days = byUnit[unitKey];
    const um = unitMeta[unitKey] || {icon:'📘', color:'#8891A3', name:days[0].theme};
    const rows = days.map(d=>'<div class="syl-day"><span class="syl-n">Día '+d.day+'</span><span class="syl-t">'+d.theme+'</span></div>').join('');
    return '<div class="syl-unit" style="--uc:'+um.color+'"><div class="syl-unit-head">'+um.icon+' <b>Unidad '+unitKey+' — '+um.name+'</b></div>'+rows+'</div>';
  }).join('');
}
document.getElementById('syllabusToggleBtn').addEventListener('click', ()=>{
  const box = document.getElementById('syllabusBox');
  const btn = document.getElementById('syllabusToggleBtn');
  const showing = box.style.display !== 'none';
  box.style.display = showing ? 'none' : 'block';
  btn.textContent = showing ? '📖 Ver el programa completo — las 15 unidades y sus 180 días' : '📖 Ocultar el programa completo';
});
document.getElementById('skipPlacementBtn').addEventListener('click', ()=>{
  saveMeta({placementDone:true, unlockedThrough:1});
  renderHome();
});
document.getElementById('startPlacementBtn').addEventListener('click', ()=>iniciarEvaluacion('inicial'));
let resetArmed=false;
document.getElementById('resetLink').addEventListener('click', ()=>{
  const el=document.getElementById('resetLink');
  if(!resetArmed){
    resetArmed=true;
    el.textContent='¿Seguro? Toca de nuevo para confirmar';
    el.style.color='var(--warn)';
    setTimeout(()=>{ resetArmed=false; el.textContent='Borrar todo mi progreso guardado'; el.style.color=''; }, 4000);
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('foneticaBasicoVisto');
  resetArmed=false;
  el.textContent='✓ Progreso borrado';
  el.style.color='var(--ok)';
  setTimeout(()=>{ el.textContent='Borrar todo mi progreso guardado'; el.style.color=''; }, 1500);
  renderHome();
});
document.getElementById('homeBtn').addEventListener('click', ()=>{ showHome(); });
document.getElementById('backHomeBtn').addEventListener('click', ()=>{ showHome(); });
document.getElementById('saveProgressBtn').addEventListener('click', ()=>{
  const ok = saveMidProgress();
  const btn = document.getElementById('saveProgressBtn');
  const original = btn.textContent;
  btn.textContent = ok ? '✓ Guardado' : '✗ No se pudo guardar';
  setTimeout(()=>{ btn.textContent = original; }, 1800);
});
document.getElementById('restartDayBtn').addEventListener('click', ()=>{
  if(!currentDay) return;
  clearMidProgress(currentDay.day);
  startDay(currentDay.day);
});
function showHome(){
  document.getElementById('home').style.display='block';
  document.getElementById('session').style.display='none';
  speechSynthesis.cancel();
  renderHome();
}

// ================================================================
// ARRANCAR UN DÍA
// ================================================================
let currentDay=null, wordBank=[], script=[];

const introTemplates = [
  w => [{t:'Aprendamos algo nuevo: ',lang:'es'},{t:w.en,lang:'en'},{t:'. Significa "'+w.es+'".',lang:'es'}],
  w => [{t:'Ahora una palabra útil: ',lang:'es'},{t:w.en,lang:'en'},{t:', que significa "'+w.es+'".',lang:'es'}],
  w => [{t:'Sumemos: ',lang:'es'},{t:w.en,lang:'en'},{t:'. En español es "'+w.es+'".',lang:'es'}],
  w => [{t:'Una más: ',lang:'es'},{t:w.en,lang:'en'},{t:' — "'+w.es+'" en español.',lang:'es'}]
];
const comboIntro = [{t:'Ahora repitamos juntos, una por una, las últimas palabras que aprendiste. Yo digo una, la repites, la escribes, y seguimos con la siguiente.',lang:'es'}];
const reviewIntro = [{t:'Antes de seguir, un mini repaso: vamos a repetir y escribir dos palabras de antes, una por una.',lang:'es'}];
const contrastIntro = [{t:'Fíjate estas dos frases. Suenan parecido, pero no son lo mismo. Escúchalas, repítelas y escríbelas — con el tiempo, la diferencia se te va a hacer natural sola, sin que nadie te la explique.',lang:'es'}];
// Banco de pares de contraste: estructuras del idioma mostradas una al lado de la otra,
// sin explicar la regla — el alumno las adquiere por exposición repetida, como un chico.
const contrastBank = [
  { a:{en:'I have lived here for 10 years.', es:'vivo acá desde hace 10 años (todavía es así)', pron:'ái jav livd jíar for ten íars.'}, b:{en:'I lived here for 10 years.', es:'viví acá 10 años (ya no)', pron:'ái livd jíar for ten íars.'} },
  { a:{en:"I'm going to call him.", es:'voy a llamarlo (plan ya decidido)', pron:'áim góing tu col jim.'}, b:{en:'I will call him.', es:'lo voy a llamar (decisión del momento)', pron:'ái uíl col jim.'} },
  { a:{en:'I used to smoke.', es:'antes fumaba (ya no)', pron:'ái iúsd tu smóuk.'}, b:{en:'I smoked yesterday.', es:'fumé ayer (un momento puntual)', pron:'ái smóukt iésterdei.'} },
  { a:{en:'I have some money.', es:'tengo algo de dinero', pron:'ái jav sam máni.'}, b:{en:"I don't have any money.", es:'no tengo nada de dinero', pron:"ái dont jav éni máni."} },
  { a:{en:"She's taller than him.", es:'ella es más alta que él', pron:'shis tóler dan jim.'}, b:{en:"She's the tallest in the class.", es:'ella es la más alta de la clase', pron:'shis de tólest in de clas.'} },
  { a:{en:'I must finish this today.', es:'tengo que terminar esto hoy (urgencia propia)', pron:'ái mast fínish dis tudéi.'}, b:{en:'I have to finish this today.', es:'tengo que terminar esto hoy (obligación normal)', pron:'ái jav tu fínish dis tudéi.'} },
  { a:{en:'Can I help you?', es:'te puedo ayudar (directo)', pron:'can ái jelp iú?'}, b:{en:'Could I help you?', es:'podría ayudarte (más formal)', pron:'cud ái jelp iú?'} },
  { a:{en:"I'm meeting him tomorrow.", es:'me reúno con él mañana (ya está organizado)', pron:'áim míiting jim tumórou.'}, b:{en:'I will meet him tomorrow.', es:'me voy a reunir con él mañana (más espontáneo)', pron:'ái uíl míit jim tumórou.'} },
  { a:{en:"I've never been to Mexico.", es:'nunca estuve en México (experiencia de vida)', pron:'áiv néver bin tu Méxicou.'}, b:{en:"I didn't go to Mexico last year.", es:'no fui a México el año pasado (momento específico)', pron:"ái dídent góu tu Méxicou last íar."} },
  { a:{en:'There is a book on the table.', es:'hay un libro en la mesa', pron:'dér is a buk on de téibol.'}, b:{en:'There are books on the table.', es:'hay libros en la mesa', pron:'dér ar buks on de téibol.'} },
  { a:{en:'He is working right now.', es:'él está trabajando ahora mismo', pron:'ji is uórking ráit náu.'}, b:{en:'He works here.', es:'él trabaja acá (siempre, de costumbre)', pron:'ji uorks jíar.'} },
  { a:{en:'If I have time, I will call you.', es:'si tengo tiempo, te llamo (posible)', pron:'if ái jav táim, ái uíl col iú.'}, b:{en:'If I had time, I would call you.', es:'si tuviera tiempo, te llamaría (poco probable)', pron:'if ái jad táim, ái uud col iú.'} },
  { a:{en:'This is my house.', es:'esta es mi casa (todavía)', pron:'dis is mái jáus.'}, b:{en:'This was my house.', es:'esta era mi casa (ya no)', pron:'dis uas mái jáus.'} },
  { a:{en:'I already finished.', es:'ya terminé (con énfasis)', pron:'ái olrédi fínisht.'}, b:{en:'I just finished.', es:'recién terminé (hace un momento)', pron:'ái yast fínisht.'} },
  { a:{en:'A few people came.', es:'vino alguna gente (algunos, positivo)', pron:'a fiú pípol kéim.'}, b:{en:'Few people came.', es:'vino poca gente (casi nadie)', pron:'fiú pípol kéim.'} }
];
// Rephrasing: una frase simple y su versión más elegante, mismo significado —
// se adquiere por exposición repetida, igual que los pares de contraste.
const rephraseIntro = [{t:'Ahora un "rephrasing": la misma idea, dicha de una forma más elegante. Escucha primero la versión simple, después la versión más pulida — repite y escribe las dos.',lang:'es'}];
const rephraseBank = [
  { simple:{en:'I like it.', es:'me gusta (simple)', pron:'ái láik it.'}, elegant:{en:'I really appreciate it.', es:'lo aprecio mucho (más elegante)', pron:'ái ríili apríshieit it.'} },
  { simple:{en:'Can you help me?', es:'¿me puedes ayudar? (simple)', pron:'can iú jelp mi?'}, elegant:{en:'Would you be able to assist me?', es:'¿serías capaz de asistirme? (más formal)', pron:'uud iú bi éibol tu asíst mi?'} },
  { simple:{en:"I don't know.", es:'no sé (simple)', pron:"ái dont nóu."}, elegant:{en:"I'm not entirely sure.", es:'no estoy del todo seguro (más suave)', pron:"áim nat entáierli shúr."} },
  { simple:{en:"It's expensive.", es:'es caro (simple)', pron:"its expénsiv."}, elegant:{en:"It's quite costly.", es:'resulta bastante costoso (más elegante)', pron:"its cuáit cóstli."} },
  { simple:{en:'I want to buy this.', es:'quiero comprar esto (simple)', pron:'ái uánt tu bái dis.'}, elegant:{en:"I'd like to purchase this.", es:'me gustaría adquirir esto (más formal)', pron:"áid láik tu pérchas dis."} },
  { simple:{en:'Call me later.', es:'llamame después (simple)', pron:'col mi léiter.'}, elegant:{en:'Please give me a call at your convenience.', es:'por favor llamame cuando te sea posible (más cortés)', pron:'plíis guiv mi a col at iór canvíniens.'} },
  { simple:{en:"That's a good idea.", es:'es una buena idea (simple)', pron:"dats a gud aidía."}, elegant:{en:'That sounds like an excellent idea.', es:'suena como una excelente idea (más entusiasta)', pron:'dat sáunds láik an éxcelent aidía.'} },
  { simple:{en:'I need more time.', es:'necesito más tiempo (simple)', pron:'ái níid mor táim.'}, elegant:{en:'I could use a bit more time, if possible.', es:'me vendría bien un poco más de tiempo, si es posible (más suave)', pron:'ái cud iús a bit mor táim, if pásibol.'} },
  { simple:{en:'Send me the file.', es:'mandame el archivo (simple)', pron:'send mi de fáil.'}, elegant:{en:'Could you please send over the file?', es:'¿podrías enviarme el archivo, por favor? (más cortés)', pron:'cud iú plíis send óuver de fáil?'} },
  { simple:{en:"It's not working.", es:'no funciona (simple)', pron:"its nat uórking."}, elegant:{en:"It doesn't seem to be working properly.", es:'parece que no está funcionando bien (más matizado)', pron:"it dásent síim tu bi uórking próperli."} },
  { simple:{en:"I'm busy today.", es:'estoy ocupado hoy (simple)', pron:"áim bísi tudéi."}, elegant:{en:'I have a full schedule today.', es:'tengo la agenda completa hoy (más profesional)', pron:'ái jav a ful squéyul tudéi.'} },
  { simple:{en:'Thanks for your help.', es:'gracias por tu ayuda (simple)', pron:'zenks for iór jelp.'}, elegant:{en:'I really appreciate your assistance.', es:'aprecio mucho tu asistencia (más formal)', pron:'ái ríili apríshieit iór asístans.'} },
  { simple:{en:'I agree.', es:'estoy de acuerdo (simple)', pron:'ái agríi.'}, elegant:{en:'I completely agree with that.', es:'estoy completamente de acuerdo con eso (más enfático)', pron:'ái camplítli agríi uid dat.'} },
  { simple:{en:'Sorry, I was late.', es:'perdón, llegué tarde (simple)', pron:'sórri, ái uas léit.'}, elegant:{en:'I apologize for the delay.', es:'me disculpo por la demora (más formal)', pron:'ái apáloyáis for de diléi.'} },
  { simple:{en:'This is a problem.', es:'esto es un problema (simple)', pron:'dis is a práblem.'}, elegant:{en:'This presents a bit of a challenge.', es:'esto presenta un pequeño desafío (más diplomático)', pron:'dis présents a bit of a chálench.'} }
];
// Historias semanales: repasan en una mini-historia todo lo visto en los últimos 6 días de estudio.
// Lecturas de repaso de cierre de unidad — SOLO escuchar y leer, sin ejercicios de hablar/escribir.
// Identidad visual de cada unidad — color, ícono y nombre corto, sintetizados de los temas reales de sus días.
const unitMeta = {
  1:{icon:'🌱', color:'#6FCF97', name:'Primeros pasos', desc:'Saludos, presentarte, tu empresa y lo básico para arrancar'},
  2:{icon:'🏠', color:'#4FB6E8', name:'Tu día a día', desc:'Rutina, tu oficina, y la vida cotidiana en el trabajo'},
  3:{icon:'💰', color:'#E8A33D', name:'Números y tiempo', desc:'Precios, horarios, fechas y todo lo que se mide'},
  4:{icon:'🍽️', color:'#E8956A', name:'Comida y reuniones', desc:'Restaurantes, presentaciones y reuniones de trabajo'},
  5:{icon:'🛍️', color:'#E86A5C', name:'Compras y facturas', desc:'Comprar, devolver, pagar, y reclamar cuando algo sale mal'},
  6:{icon:'🚚', color:'#5B8DEF', name:'Rutas y envíos', desc:'Direcciones, transporte, aduana y logística'},
  7:{icon:'✈️', color:'#4FD1E8', name:'Viajes y tecnología', desc:'Hoteles, clima, y herramientas digitales de oficina'},
  8:{icon:'💼', color:'#A66FE8', name:'Tu carrera', desc:'Entrevistas, networking, contratos y negociación avanzada'},
  9:{icon:'📊', color:'#6FCFAF', name:'Gestión y operaciones', desc:'Proyectos, calidad, crisis, ventas y comercio exterior'},
  10:{icon:'🏥', color:'#4FB6C8', name:'Vida profesional', desc:'Salud, propiedades, seguros, y trámites del día a día'},
  11:{icon:'🚀', color:'#C77DE8', name:'Estrategia de marca', desc:'Marketing, fusiones, comercio electrónico y startups'},
  12:{icon:'🎪', color:'#E86AA8', name:'Industrias y eventos', desc:'Relaciones públicas, retail, turismo y energía'},
  13:{icon:'🏗️', color:'#C99A5B', name:'Industrias especializadas', desc:'Construcción, automotriz, aviación, moda y más'},
  14:{icon:'🌐', color:'#5BC9A0', name:'Sectores emergentes', desc:'Farmacéutica, videojuegos, trabajo remoto y sostenibilidad'},
  15:{icon:'🎓', color:'#E8C33D', name:'La cima', desc:'Marca personal, el futuro del trabajo, y tu graduación'}
};
// Diálogo de refuerzo entre Maestro y Alumno, al inicio de cada unidad — repasa TODA la unidad anterior. Solo refuerzo, no examina, no bloquea.
// Conversación corta al final de cada día (a partir del Día 2), usando el vocabulario de ESE día.
// Se agrega día a día; los días sin entrada acá simplemente no muestran este turno todavía.
const dailyMiniDialogue = {
  2: [
    {speaker:'maestro', en:'My name is Roberto — what\'s your name?', es:'Me llamo Roberto — ¿cómo te llamas?', pron:'mái néim is Robérto — uáts iór néim?'},
    {speaker:'alumno', en:'Nice to meet you! I am from Medellín, and this is our team.', es:'¡Mucho gusto! Soy de Medellín, y este es nuestro equipo.', pron:'náis tu míit iú! ái am fram medeyín, and dis is áur tíim.'},
    {speaker:'maestro', en:'I work at Dosting Toys — I\'m the manager here, welcome!', es:'Trabajo en Dosting Toys — soy el gerente acá, ¡bienvenido!', pron:'ái uork at Dósting Tóis — áim de mánayer jíar, uélcam!'},
    {speaker:'alumno', en:'Come in, please — have a seat. The pleasure is mine.', es:'Pasa, por favor — toma asiento. El gusto es mío.', pron:'cam in, plíis — jav a síit. de pléshur is máin.'},
    {speaker:'maestro', en:'Here\'s my business card, with my phone number and address.', es:'Acá está mi tarjeta de presentación, con mi número de teléfono y dirección.', pron:'jírs mái bísnes card, uid mái fóun námber and adrés.'},
    {speaker:'alumno', en:'You can also check our website for contact information.', es:'También puedes revisar nuestro sitio web para información de contacto.', pron:'iú can ólsou chek áur uébsait for cántact informéishion.'},
    {speaker:'maestro', en:'Who\'s the owner of this company, if I may ask?', es:'¿Quién es el dueño de esta empresa, si puedo preguntar?', pron:'jus de óuner of dis cámpani, if ái méi ask?'},
    {speaker:'alumno', en:'That\'s me! I\'m both the owner and the manager here.', es:'¡Ese soy yo! Soy el dueño y el gerente acá.', pron:'dats mi! áim bóuz de óuner and de mánayer jíar.'}
  ],
  3: [
    {speaker:'maestro', en:'What country and city are you from?', es:'¿De qué país y ciudad eres?', pron:'uát cántri and síti ar iú fram?'},
    {speaker:'alumno', en:'I\'m from Colombia, from Medellín — our company name is Dosting Toys, since 2015.', es:'Soy de Colombia, de Medellín — el nombre de nuestra empresa es Dosting Toys, desde 2015.', pron:'áim fram Colómbia, fram medeyín — áur cámpani néim is Dósting Tóis, sins tuenti fiftíin.'},
    {speaker:'maestro', en:'What do you sell, and what do you provide?', es:'¿Qué venden, y qué ofrecen?', pron:'uát du iú sel, and uát du iú prov áid?'},
    {speaker:'alumno', en:'We sell products, and we provide services to customers across the market.', es:'Vendemos productos, y ofrecemos servicios a clientes en todo el mercado.', pron:'uí sel prádacts, and uí prov áid sérvisis tu cástomers acrós de márket.'},
    {speaker:'maestro', en:'How\'s the quality, and the price?', es:'¿Cómo es la calidad, y el precio?', pron:'jáus de cuáliti, and de práis?'},
    {speaker:'alumno', en:'Good quality, fair price — and we offer a discount for our loyal customers.', es:'Buena calidad, precio justo — y ofrecemos un descuento para nuestros clientes fieles.', pron:'gud cuáliti, fer práis — and uí áfer a discáunt for áur lóial cástomers.'},
    {speaker:'maestro', en:'What about delivery, and your suppliers?', es:'¿Y qué tal la entrega, y tus proveedores?', pron:'uát abáut delíveri, and iór sapláiers?'},
    {speaker:'alumno', en:'We have a warehouse, reliable suppliers, and fast delivery — our brand is trusted.', es:'Tenemos una bodega, proveedores confiables, y entrega rápida — nuestra marca es confiable.', pron:'uí jav a uérjaus, riláiabol sapláiers, and fast delíveri — áur brand is trástid.'}
  ],
  4: [
    {speaker:'maestro', en:'Tell me about your family — do you have a wife or husband?', es:'Cuéntame sobre tu familia — ¿tienes esposa o esposo?', pron:'tel mi abáut iór fámili — du iú jav a uáif or jásband?'},
    {speaker:'alumno', en:'I have a wife, a son, and a daughter — two children in total.', es:'Tengo esposa, un hijo, y una hija — dos hijos en total.', pron:'ái jav a uáif, a san, and a dóter — tú children in tóutal.'},
    {speaker:'maestro', en:'Any brother or sister?', es:'¿Algún hermano o hermana?', pron:'éni bráder or síster?'},
    {speaker:'alumno', en:'Yes, one brother and one sister. Now, at work, I am the owner of this company.', es:'Sí, un hermano y una hermana. Ahora, en el trabajo, soy el dueño de esta empresa.', pron:'iés, uán bráder and uán síster. náu, at uork, ái am de óuner of dis cámpani.'},
    {speaker:'maestro', en:'What are you in charge of exactly?', es:'¿De qué estás a cargo exactamente?', pron:'uát ar iú in charch of exáctli?'},
    {speaker:'alumno', en:'I am in charge of the sales department, logistics, and accounting.', es:'Estoy a cargo del departamento de ventas, logística, y contabilidad.', pron:'ái am in charch of de séils dipártment, loyístics, and acáunting.'},
    {speaker:'maestro', en:'Are you the boss of everyone here?', es:'¿Eres el jefe de todos acá?', pron:'ar iú de bos of évriuan jíar?'},
    {speaker:'alumno', en:'Well, I work with my team leader, and every employee and colleague here.', es:'Bueno, trabajo con mi líder de equipo, y cada empleado y colega acá.', pron:'uél, ái uork uid mái tíim líider, and évri emplóii and cólig jíar.'}
  ],
  5: [
    {speaker:'maestro', en:'How many units do you need for this order?', es:'¿Cuántas unidades necesitas para este pedido?', pron:'jáu méni iúnits du iú níid for dis órder?'},
    {speaker:'alumno', en:'We have one box with ten units ready — that\'s almost a dozen.', es:'Tenemos una caja con diez unidades listas — eso es casi una docena.', pron:'uí jav uán bax uid ten iúnits rédi — dats ólmoust a dázen.'},
    {speaker:'maestro', en:'What\'s the total quantity for all products, from one to nine?', es:'¿Cuál es la cantidad total para todos los productos, de uno a nueve?', pron:'uáts de tóutal cuántiti for ol prádacts, fram uán tu náin?'},
    {speaker:'alumno', en:'Let\'s see: two, three, four, five, six, seven, eight, nine — plus the ten units, that\'s the total.', es:'A ver: dos, tres, cuatro, cinco, seis, siete, ocho, nueve — más las diez unidades, ese es el total.', pron:'lets síi: tú, zríi, fóar, fáiv, six, séven, éit, náin — plas de ten iúnits, dats de tóutal.'},
    {speaker:'maestro', en:'I\'ll prepare the invoice for this order then.', es:'Voy a preparar la factura para este pedido entonces.', pron:'áil pripér de ínvois for dis órder den.'},
    {speaker:'alumno', en:'Perfect, thank you — please confirm the quantity before sending it.', es:'Perfecto, gracias — por favor confirma la cantidad antes de enviarla.', pron:'pérfect, zenk iú — plíis canférm de cuántiti bifór séndin it.'}
  ],
  6: [
    {speaker:'maestro', en:'What does your schedule look like this week?', es:'¿Cómo se ve tu agenda esta semana?', pron:'uát das iór squédiul luk láik dis uíik?'},
    {speaker:'alumno', en:'I am available on Monday, Tuesday, and Wednesday, but busy on Thursday and Friday.', es:'Estoy disponible el lunes, martes, y miércoles, pero ocupado el jueves y viernes.', pron:'ái am aveilábol on mándei, tiúsdei, and uénsdei, bat bísi on zérsdei and fráidei.'},
    {speaker:'maestro', en:'What about Saturday or Sunday?', es:'¿Y qué tal el sábado o domingo?', pron:'uát abáut sáturdei or sándei?'},
    {speaker:'alumno', en:'No, I don\'t work on Saturday or Sunday — check my calendar for the appointment.', es:'No, no trabajo los sábados o domingos — revisa mi calendario para la cita.', pron:'nóu, ái dont uork on sáturdei or sándei — chek mái cálendar for de apóintment.'},
    {speaker:'maestro', en:'Can you confirm the meeting, or do we need to reschedule?', es:'¿Puedes confirmar la reunión, o necesitamos reprogramarla?', pron:'can iú canférm de míiting, or du uí níid tu risquédiul?'},
    {speaker:'alumno', en:'Let\'s confirm it — I want to be on time before the deadline.', es:'Confirmémosla — quiero estar a tiempo antes de la fecha límite.', pron:'lets canférm it — ái uánt tu bi on táim bifór de dédláin.'}
  ],
  7: [
    {speaker:'maestro', en:'How are you doing today?', es:'¿Cómo estás hoy?', pron:'jáu ar iú dúing tudéi?'},
    {speaker:'alumno', en:'I\'m fine, thanks — and you?', es:'Estoy bien, gracias — ¿y tú?', pron:'áim fáin, zenks — and iú?'},
    {speaker:'maestro', en:'Great! Have a good day, and take care.', es:'¡Genial! Que tengas un buen día, y cuídate.', pron:'gréit! jav a gud déi, and téik ker.'},
    {speaker:'alumno', en:'No problem, of course! Sure, let\'s go right now.', es:'No hay problema, ¡por supuesto! Claro, vamos ahora mismo.', pron:'nóu práblem, of cors! shur, lets góu ráit náu.'},
    {speaker:'maestro', en:'Give me one moment, please.', es:'Dame un momento, por favor.', pron:'giv mi uán móument, plíis.'},
    {speaker:'alumno', en:'Of course — see you Monday then!', es:'Por supuesto — ¡nos vemos el lunes entonces!', pron:'of cors — síi iú mándei den!'}
  ],
  8: [
    {speaker:'maestro', en:'How\'s business going today? Business is great, I hope?', es:'¿Cómo va el negocio hoy? ¿El negocio va genial, espero?', pron:'jáus bísnes góing tudéi? bísnes is gréit, ái jóup?'},
    {speaker:'alumno', en:'I\'m great, thanks! And you — so-so, or good?', es:'Estoy genial, gracias! ¿Y tú — más o menos, o bien?', pron:'áim gréit, zenks! and iú — sóu-sóu, or gud?'},
    {speaker:'maestro', en:'I\'m doing well, as always. Is everything ok on your end?', es:'Estoy bien, como siempre. ¿Está todo bien de tu lado?', pron:'áim dúing uél, as ólueis. is évrizin okéi on iór end?'},
    {speaker:'alumno', en:'Yes, everything ok — I understand you had a busy week.', es:'Sí, todo bien — entiendo que tuviste una semana ocupada.', pron:'iés, évrizin okéi — ái anderstánd iú jad a bísi uíik.'},
    {speaker:'maestro', en:'Glad to hear that! Let me check something right away.', es:'¡Qué bueno escuchar eso! Déjame revisar algo de inmediato.', pron:'glad tu jíar dat! let mi chek sámzin ráit auéi.'},
    {speaker:'alumno', en:'Sounds good — perfect, exactly what we needed.', es:'Suena bien — perfecto, exactamente lo que necesitábamos.', pron:'sáunds gud — pérfect, exáctli uát uí níided.'}
  ],
  9: [
    {speaker:'maestro', en:'Thanks for calling today, and thanks for your time.', es:'Gracias por llamar hoy, y gracias por tu tiempo.', pron:'zenks for cóling tudéi, and zenks for iór táim.'},
    {speaker:'alumno', en:'It was a pleasure! Let\'s stay in touch.', es:'¡Fue un placer! Mantengámonos en contacto.', pron:'it uás a pléshur! lets stéi in tach.'},
    {speaker:'maestro', en:'I will email you the details — I\'ll email you today, and I\'ll call you back tomorrow.', es:'Te voy a enviar los detalles por correo — te escribo hoy, y te llamo mañana.', pron:'ái uil ímeil iú de dítéils — áil ímeil iú tudéi, and áil col iú bak tumórou.'},
    {speaker:'alumno', en:'Perfect — best regards, and I\'m looking forward to it.', es:'Perfecto — saludos cordiales, y espero eso con ganas.', pron:'pérfect — best rigárds, and áim lúking fórward tu it.'},
    {speaker:'maestro', en:'See you soon, or see you next week!', es:'¡Nos vemos pronto, o nos vemos la próxima semana!', pron:'síi iú súun, or síi iú next uíik!'},
    {speaker:'alumno', en:'Talk to you later — until next time!', es:'Hablamos luego — ¡hasta la próxima!', pron:'tok tu iú léiter — antíl next táim!'}
  ],
  10: [
    {speaker:'maestro', en:'I have a question — can you help me?', es:'Tengo una pregunta — ¿puedes ayudarme?', pron:'ái jav a cuéschion — can iú jelp mi?'},
    {speaker:'alumno', en:'Of course, I can help! What, who, where, when, why, or how — ask me anything.', es:'¡Por supuesto, puedo ayudar! Qué, quién, dónde, cuándo, por qué, o cómo — pregúntame lo que sea.', pron:'of cors, ái can jelp! uát, jú, uér, uén, uái, or jáu — ask mi énizin.'},
    {speaker:'maestro', en:'Which one is available — is it ready yet?', es:'¿Cuál está disponible — ya está listo?', pron:'uích uán is aveilábol — is it rédi iét?'},
    {speaker:'alumno', en:'Let me check... yes, when will it arrive? Tomorrow morning.', es:'Déjame revisar... sí, ¿cuándo va a llegar? Mañana por la mañana.', pron:'let mi chek... iés, uén uil it aráiv? tumórou mórning.'},
    {speaker:'maestro', en:'Do you have stock, and what\'s the price?', es:'¿Tienes stock, y cuál es el precio?', pron:'du iú jav stak, and uáts de práis?'},
    {speaker:'alumno', en:'Yes we do — can you explain what you need exactly, and I\'ll quote it.', es:'Sí tenemos — ¿puedes explicar qué necesitas exactamente, y te cotizo.', pron:'iés uí du — can iú expléin uát iú níid exáctli, and áil cuóut it.'}
  ],
  11: [
    {speaker:'maestro', en:'What color is this product — red, blue, green, or yellow?', es:'¿De qué color es este producto — rojo, azul, verde, o amarillo?', pron:'uát cálor is dis prádact — red, blu, grin, or iélou?'},
    {speaker:'alumno', en:'It\'s black and white, actually — big or small, depending on the size.', es:'Es negro y blanco, en realidad — grande o chico, dependiendo del tamaño.', pron:'its blak and uáit, áctiuali — big or smol, dipénding on de sáis.'},
    {speaker:'maestro', en:'Is it new, and how strong is the material?', es:'¿Es nuevo, y qué tan fuerte es el material?', pron:'is it niú, and jáu strong is de matírial?'},
    {speaker:'alumno', en:'It is new, and it is durable — strong, heavy, made of plastic and metal.', es:'Es nuevo, y es duradero — fuerte, pesado, hecho de plástico y metal.', pron:'it is niú, and it is diúrabol — strong, jévi, méid of plástic and métal.'}
  ],
  12: [
    {speaker:'maestro', en:'Let\'s begin this final review together.', es:'Empecemos juntos este repaso final.', pron:'lets bigín dis fáinal riviú tugéder.'},
    {speaker:'alumno', en:'Let\'s finish strong! Well done so far.', es:'¡Terminemos fuerte! Bien hecho hasta ahora.', pron:'lets fínish strong! uél dan sóu far.'},
    {speaker:'maestro', en:'Great job — you did it! Practice makes perfect.', es:'Buen trabajo — ¡lo lograste! La práctica hace al maestro.', pron:'gréit yab — iú did it! práctis méiks pérfect.'},
    {speaker:'alumno', en:'Keep going — we\'re almost done with this unit.', es:'Sigue adelante — ya casi terminamos esta unidad.', pron:'kíip góing — uír ólmoust dan uid dis iúnit.'},
    {speaker:'maestro', en:'Congratulations! See you in the next unit.', es:'¡Felicitaciones! Nos vemos en la próxima unidad.', pron:'cangrachuléishions! síi iú in de next iúnit.'}
  ],
  13: [
    {speaker:'maestro', en:'Welcome to my new house! There is a kitchen, a living room, and a bedroom.', es:'¡Bienvenido a mi casa nueva! Hay una cocina, una sala, y un dormitorio.', pron:'uélcam tu mái niú jáus! der is a kíchen, a líving rúum, and a bédrum.'},
    {speaker:'alumno', en:'There is also a garden, with a door and a window right there.', es:'También hay un jardín, con una puerta y una ventana justo ahí.', pron:'der is ólsou a gárden, uid a dor and a uíndou ráit der.'},
    {speaker:'maestro', en:'And this must be your office — is there a desk and a chair?', es:'Y esta debe ser tu oficina — ¿hay un escritorio y una silla?', pron:'and dis mast bi iór áfis — is der a desk and a chér?'},
    {speaker:'alumno', en:'Yes, there is a desk, with a computer, a printer, and a shelf for my books.', es:'Sí, hay un escritorio, con una computadora, una impresora, y un estante para mis libros.', pron:'iés, der is a desk, uid a campiúter, a prínter, and a shelf for mái buks.'},
    {speaker:'maestro', en:'Do you have the key for the roof? I\'d love to see the view.', es:'¿Tienes la llave del techo? Me encantaría ver la vista.', pron:'du iú jav de kíi for de rúuf? áid lav tu síi de viú.'},
    {speaker:'alumno', en:'Of course — let\'s check the table first, and then we\'ll go up to the roof.', es:'Por supuesto — revisemos la mesa primero, y después subimos al techo.', pron:'of cors — lets chek de téibol ferst, and den uíl góu ap tu de rúuf.'}
  ],
  14: [
    {speaker:'maestro', en:'What time do you wake up, and what time do you get up?', es:'¿A qué hora te despiertas, y a qué hora te levantas?', pron:'uát táim du iú uéik ap, and uát táim du iú get ap?'},
    {speaker:'alumno', en:'I wake up at six, and I get up right away — I have breakfast at seven.', es:'Me despierto a las seis, y me levanto enseguida — desayuno a las siete.', pron:'ái uéik ap at six, and ái get ap ráit auéi — ái jav brékfast at séven.'},
    {speaker:'maestro', en:'When do you go to work, and when do you start work?', es:'¿Cuándo vas al trabajo, y cuándo empiezas a trabajar?', pron:'uén du iú góu tu uork, and uén du iú start uork?'},
    {speaker:'alumno', en:'I go to work at eight, and I start work at nine — with a short break for lunch.', es:'Voy al trabajo a las ocho, y empiezo a trabajar a las nueve — con una pausa corta para el almuerzo.', pron:'ái góu tu uork at éit, and ái start uork at náin — uid a short bréik for lanch.'},
    {speaker:'maestro', en:'What about dinner, and your shift?', es:'¿Y qué tal la cena, y tu turno?', pron:'uát abáut díner, and iór shift?'},
    {speaker:'alumno', en:'I finish work at six, have dinner at seven — my shift includes some overtime today.', es:'Termino de trabajar a las seis, ceno a las siete — mi turno incluye algunas horas extra hoy.', pron:'ái fínish uork at six, jav díner at séven — mái shift inclúuds sam óvertaim tudéi.'},
    {speaker:'maestro', en:'Do you get a day off, or are you tired?', es:'¿Tienes un día libre, o estás cansado?', pron:'du iú get a déi of, or ar iú táiard?'},
    {speaker:'alumno', en:'Tomorrow is my day off — I\'m tired now, but I\'m always punctual, and I need to rest.', es:'Mañana es mi día libre — estoy cansado ahora, pero siempre soy puntual, y necesito descansar.', pron:'tumórou is mái déi of — áim táiard náu, bat áim ólueis pánchual, and ái níid tu rest.'}
  ],
  15: [
    {speaker:'maestro', en:'What do you need to do today — to walk, to drive, or to organize your desk?', es:'¿Qué necesitas hacer hoy — caminar, manejar, u organizar tu escritorio?', pron:'uát du iú níid tu du tudéi — tu uók, tu dráiv, or tu órganais iór desk?'},
    {speaker:'alumno', en:'I have to eat first, then I have to drink some coffee — I need to check my emails, and to talk to my team.', es:'Tengo que comer primero, después tengo que tomar café — necesito revisar mis correos, y hablar con mi equipo.', pron:'ái jav tu íit ferst, den ái jav tu drink sam cáfi — ái níid tu chek mái íimeils, and tu tok tu mái tíim.'},
    {speaker:'maestro', en:'Do you have to write anything, or to read something important?', es:'¿Tienes que escribir algo, o leer algo importante?', pron:'du iú jav tu ráit énizin, or tu ríid sámzin impórtant?'},
    {speaker:'alumno', en:'I have to write a report, and I have to read a few messages too.', es:'Tengo que escribir un reporte, y también tengo que leer algunos mensajes.', pron:'ái jav tu ráit a ripórt, and ái jav tu ríid a fiú mésachis tu.'},
    {speaker:'maestro', en:'What about calling clients, or sending something?', es:'¿Y qué tal llamar a clientes, o enviar algo?', pron:'uát abáut cóling cláients, or séndin sámzin?'},
    {speaker:'alumno', en:'I have to call a client, and to send an invoice — then I have to receive their payment.', es:'Tengo que llamar a un cliente, y enviar una factura — después tengo que recibir su pago.', pron:'ái jav tu col a cláient, and tu send an ínvois — den ái jav tu risíiv der péiment.'},
    {speaker:'maestro', en:'Anything to fix, or to deliver today?', es:'¿Algo para arreglar, o entregar hoy?', pron:'énizin tu fix, or tu delíver tudéi?'},
    {speaker:'alumno', en:'Yes, I have to fix a small problem, and to finish and deliver the package before five.', es:'Sí, tengo que arreglar un problema pequeño, y terminar y entregar el paquete antes de las cinco.', pron:'iés, ái jav tu fix a smol práblem, and tu fínish and delíver de páquich bifór fáiv.'}
  ],
  16: [
    {speaker:'maestro', en:'Can I borrow the hammer, and any tool you have? I need to fix this shelf.', es:'¿Me prestas el martillo, y cualquier herramienta que tengas? Necesito arreglar este estante.', pron:'can ái bárou de jámer, and éni túul iú jav? ái níid tu fix dis shelf.'},
    {speaker:'alumno', en:'Sure — here\'s the hammer, and a screwdriver too, if you need one.', es:'Claro — acá está el martillo, y un destornillador también, si necesitas uno.', pron:'shur — jírs de jámer, and a scrúdraiver tu, if iú níid uán.'},
    {speaker:'maestro', en:'Do you have a ladder? I need to paint that wall.', es:'¿Tienes una escalera? Necesito pintar esa pared.', pron:'du iú jav a láder? ái níid tu péint dat uól.'},
    {speaker:'alumno', en:'Yes, there\'s a ladder, some paint, and a lamp in the storage room.', es:'Sí, hay una escalera, algo de pintura, y una lámpara en el depósito.', pron:'iés, ders a láder, sam péint, and a lamp in de stórich rúum.'},
    {speaker:'maestro', en:'Can I borrow the broom, and the bucket?', es:'¿Me prestas la escoba, y el balde?', pron:'can ái bárou de brúum, and de báket?'},
    {speaker:'alumno', en:'Of course — and here\'s a pen and paper if you need to write something down.', es:'Por supuesto — y acá está una lapicera y papel si necesitas anotar algo.', pron:'of cors — and jírs a pen and péiper if iú níid tu ráit sámzin dáun.'},
    {speaker:'maestro', en:'What about a stapler, or a folder?', es:'¿Y qué tal una engrapadora, o una carpeta?', pron:'uát abáut a stéipler, or a fólder?'},
    {speaker:'alumno', en:'There\'s a stapler, a folder, some tape, scissors, and a cart in the office.', es:'Hay una engrapadora, una carpeta, algo de cinta, tijeras, y un carrito en la oficina.', pron:'ders a stéipler, a fólder, sam téip, sísors, and a cart in de áfis.'}
  ],
  17: [
    {speaker:'maestro', en:'Do you have a pet — a dog, a cat, or a bird?', es:'¿Tienes una mascota — un perro, un gato, o un pájaro?', pron:'du iú jav a pet — a dog, a cat, or a berd?'},
    {speaker:'alumno', en:'I have a dog, and I have to feed him every morning.', es:'Tengo un perro, y tengo que darle de comer cada mañana.', pron:'ái jav a dog, and ái jav tu fíid jim évri mórning.'},
    {speaker:'maestro', en:'What are your company\'s values?', es:'¿Cuáles son los valores de tu empresa?', pron:'uát ar iór cámpanis váliuz?'},
    {speaker:'alumno', en:'Our values are teamwork, respect, and honesty — with a strong commitment to growth.', es:'Nuestros valores son trabajo en equipo, respeto, y honestidad — con un fuerte compromiso con el crecimiento.', pron:'áur váliuz ar tíimuork, rispéct, and ánesti — uid a strong camítment tu gróuz.'},
    {speaker:'maestro', en:'Do you have trust in your team?', es:'¿Tienes confianza en tu equipo?', pron:'du iú jav trast in iór tíim?'},
    {speaker:'alumno', en:'Yes, I have trust in them — that\'s part of our teamwork and respect too.', es:'Sí, tengo confianza en ellos — eso también es parte de nuestro trabajo en equipo y respeto.', pron:'iés, ái jav trast in dem — dats part of áur tíimuork and rispéct tu.'},
    {speaker:'maestro', en:'That sounds like a great company culture.', es:'Eso suena como una gran cultura empresarial.', pron:'dat sáunds láik a gréit cámpani cálcher.'},
    {speaker:'alumno', en:'It is! Our mission and vision focus on growth, honesty, and commitment every day.', es:'¡Así es! Nuestra misión y visión se enfocan en el crecimiento, la honestidad, y el compromiso cada día.', pron:'it is! áur míshion and víshion fóucas on gróuz, ánesti, and camítment évri déi.'}
  ],
  18: [
    {speaker:'maestro', en:'Do you know your neighbors well? What\'s your neighborhood like?', es:'¿Conoces bien a tus vecinos? ¿Cómo es tu barrio?', pron:'du iú nóu iór néibors uél? uáts iór néiborjud láik?'},
    {speaker:'alumno', en:'Yes, I have a friendly community — my neighbors are wonderful.', es:'Sí, tengo una comunidad amigable — mis vecinos son maravillosos.', pron:'iés, ái jav a fréndli camiúniti — mái néibors ar uánderful.'},
    {speaker:'maestro', en:'Are your customers loyal, or just regular customers?', es:'¿Tus clientes son leales, o solo clientes habituales?', pron:'ar iór cástomers lóial, or yast réguiular cástomers?'},
    {speaker:'alumno', en:'Most are loyal customers, with a long-term relationship built on trust.', es:'La mayoría son clientes leales, con una relación a largo plazo construida sobre la confianza.', pron:'móust ar lóial cástomers, uid a long-term riléishionship bilt on trast.'},
    {speaker:'maestro', en:'I like to recommend this business — they\'re very reliable, and their loyalty program is great.', es:'Me gusta recomendar este negocio — son muy confiables, y su programa de lealtad es genial.', pron:'ái láik tu récomend dis bísnes — der véri riláiabol, and der lóialti prógram is gréit.'},
    {speaker:'alumno', en:'Thank you! I recommend asking for a referral if you liked our service.', es:'¡Gracias! Recomiendo pedir una referencia si te gustó nuestro servicio.', pron:'zenk iú! ái récomend ásking for a riférol if iú láikd áur sérvis.'},
    {speaker:'maestro', en:'Any feedback, or a complaint you\'d like to share?', es:'¿Algún comentario, o una queja que quieras compartir?', pron:'éni fíidbak, or a campléint iúd láik tu sher?'},
    {speaker:'alumno', en:'No complaint — I\'m satisfied! I just have some feedback, actually — a small solution to suggest.', es:'Ninguna queja — ¡estoy satisfecho! Solo tengo algo de retroalimentación, en realidad — una pequeña solución para sugerir.', pron:'nóu campléint — áim sátisfaid! ái yast jav sam fíidbak, áctiuali — a smol saliúshion tu sayést.'}
  ],
  19: [
    {speaker:'maestro', en:'By the way, are you almost done with that report?', es:'Por cierto, ¿ya casi terminas ese reporte?', pron:'bái de uéi, ar iú ólmoust dan uid dat ripórt?'},
    {speaker:'alumno', en:'Actually, I\'m still working on it — no rush, though.', es:'En realidad, todavía estoy trabajando en eso — sin apuro, igual.', pron:'áctiuali, áim stil uórking on it — nóu rash, dóu.'},
    {speaker:'maestro', en:'For example, in general, it\'s coming along well.', es:'Por ejemplo, en general, va saliendo bien.', pron:'for exámpol, in yéneral, its cáming alóng uél.'},
    {speaker:'alumno', en:'As usual, don\'t worry — it\'s fine, take your time.', es:'Como siempre, no te preocupes — está bien, tómate tu tiempo.', pron:'as iúshual, dont uóri — its fáin, téik iór táim.'},
    {speaker:'maestro', en:'Is it already finished, or still in progress?', es:'¿Ya está terminado, o todavía en progreso?', pron:'is it olrédi fínisht, or stil in prógres?'},
    {speaker:'alumno', en:'By the way, it\'s almost ready — just a little more.', es:'Por cierto, ya casi está listo — solo un poco más.', pron:'bái de uéi, its ólmoust rédi — yast a lítol mor.'}
  ],
  20: [
    {speaker:'maestro', en:'Let\'s have lunch! I would like rice, chicken, vegetables, and some fruit.', es:'¡Almorcemos! Quisiera arroz, pollo, vegetales, y algo de fruta.', pron:'lets jav lanch! ái uud láik ráis, chíken, véchtabols, and sam frúut.'},
    {speaker:'alumno', en:'I\'m hungry too — I would like meat with bread and soup instead.', es:'Yo también tengo hambre — quisiera carne con pan y sopa en cambio.', pron:'áim jángri tu — ái uud láik míit uid bred and súup instéd.'},
    {speaker:'maestro', en:'This salad looks delicious — a table for two, please.', es:'Esta ensalada se ve deliciosa — una mesa para dos, por favor.', pron:'dis sálad luks delíshius — a téibol for tú, plíis.'},
    {speaker:'alumno', en:'Perfect, let\'s ask the waiter for a menu, and maybe a reservation next time.', es:'Perfecto, pidámosle al mesero un menú, y tal vez una reserva la próxima vez.', pron:'pérfect, lets ask de uéiter for a méniu, and méibi a reservéishion next táim.'},
    {speaker:'maestro', en:'The check please! This was delicious.', es:'¡La cuenta por favor! Esto estuvo delicioso.', pron:'de chek plíis! dis uás delíshius.'},
    {speaker:'alumno', en:'I would like to come back soon — let\'s have lunch here again.', es:'Me gustaría volver pronto — almorcemos acá de nuevo.', pron:'ái uud láik tu cam bak súun — lets jav lanch jíar aguén.'}
  ],
  21: [
    {speaker:'maestro', en:'I need to clean this office — it\'s very dirty today.', es:'Necesito limpiar esta oficina — está muy sucia hoy.', pron:'ái níid tu clíin dis áfis — its véri dérti tudéi.'},
    {speaker:'alumno', en:'I need to wash the floor, and to sweep the storage room too.', es:'Necesito lavar el piso, y barrer el depósito también.', pron:'ái níid tu uásh de flor, and tu suíip de stórich rúum tu.'},
    {speaker:'maestro', en:'I need to update the inventory, and put things in order.', es:'Necesito actualizar el inventario, y poner las cosas en orden.', pron:'ái níid tu apdéit de ínventori, and put zings in órder.'},
    {speaker:'alumno', en:'Sure — I need to count everything, and check every label carefully.', es:'Claro — necesito contar todo, y revisar cada etiqueta con cuidado.', pron:'shur — ái níid tu cáunt évrizin, and chek évri léibol kérfuli.'},
    {speaker:'maestro', en:'Is anything missing, or damaged?', es:'¿Falta algo, o está dañado?', pron:'is énizin mísing, or dámachd?'},
    {speaker:'alumno', en:'Yes, one box is damaged — I need to return it, and take out the trash.', es:'Sí, una caja está dañada — necesito devolverla, y sacar la basura.', pron:'iés, uán bax is dámachd — ái níid tu ritérn it, and téik áut de trash.'},
    {speaker:'maestro', en:'Once it\'s clean again, I need to update the storage records.', es:'Una vez que esté limpio de nuevo, necesito actualizar los registros del depósito.', pron:'uáns its clíin aguén, ái níid tu apdéit de stórich récords.'},
    {speaker:'alumno', en:'Perfect, let\'s finish this together.', es:'Perfecto, terminemos esto juntos.', pron:'pérfect, lets fínish dis tugéder.'}
  ],
  22: [
    {speaker:'maestro', en:'Do you have plans for the weekend, or a vacation coming up?', es:'¿Tienes planes para el fin de semana, o unas vacaciones próximas?', pron:'du iú jav plans for de uíikend, or a vakéishion cáming ap?'},
    {speaker:'alumno', en:'I want to relax, to enjoy some free time, and to travel somewhere.', es:'Quiero relajarme, disfrutar algo de tiempo libre, y viajar a algún lado.', pron:'ái uánt tu riláx, tu enyói sam fríi táim, and tu trável sámuér.'},
    {speaker:'maestro', en:'Is there a holiday next week?', es:'¿Hay un feriado la próxima semana?', pron:'is der a jálidei next uíik?'},
    {speaker:'alumno', en:'Yes! I can request permission for a sick leave too, if I need to.', es:'¡Sí! También puedo pedir permiso para una licencia por enfermedad, si lo necesito.', pron:'iés! ái can ricuést permíshion for a sik líiv tu, if ái níid tu.'},
    {speaker:'maestro', en:'Can you approve my time off? I need to request it, and you need to approve it.', es:'¿Puedes aprobar mi tiempo libre? Necesito pedirlo, y tú necesitas aprobarlo.', pron:'can iú apruúv mái táim of? ái níid tu ricuést it, and iú níid tu apruúv it.'},
    {speaker:'alumno', en:'I can approve it — but who will cover for me while I\'m gone?', es:'Puedo aprobarlo — ¿pero quién me cubre mientras no estoy?', pron:'ái can apruúv it — bat jú uil cáver for mi uáil áim gon?'},
    {speaker:'maestro', en:'I need to plan everything before I leave, don\'t worry — I know how to return to work on time.', es:'Necesito planear todo antes de irme, no te preocupes — sé cómo volver al trabajo a tiempo.', pron:'ái níid tu plan évrizin bifór ái líiv, dont uóri — ái nóu jáu tu ritérn tu uork on táim.'},
    {speaker:'alumno', en:'Great, enjoy your time, and I\'ll see you when you return to work.', es:'Genial, disfruta tu tiempo, y nos vemos cuando vuelvas al trabajo.', pron:'gréit, enyói iór táim, and áil síi iú uén iú ritérn tu uork.'}
  ],
  23: [
    {speaker:'maestro', en:'This is a new supplier, more expensive than the old one — is it better?', es:'Este es un proveedor nuevo, más caro que el anterior — ¿es mejor?', pron:'dis is a niú sapláier, mor expénsiv dan de óuld uán — is it béter?'},
    {speaker:'alumno', en:'Actually, it\'s cheaper, but the quality seems worse.', es:'En realidad, es más barato, pero la calidad parece peor.', pron:'áctiuali, its chíiper, bat de cuáliti síims uérs.'},
    {speaker:'maestro', en:'Let\'s try to compare both options before we decide.', es:'Tratemos de comparar ambas opciones antes de decidir.', pron:'lets trái tu campér bóuz ápshions bifór uí disáid.'},
    {speaker:'alumno', en:'I already tried to compare them — this deal looks like the best offer.', es:'Ya traté de compararlas — este trato parece la mejor oferta.', pron:'ái olrédi tráid tu campér dem — dis díil luks láik de best áfer.'},
    {speaker:'maestro', en:'Is this contract different from the other agreement?', es:'¿Este contrato es diferente del otro acuerdo?', pron:'is dis cántract díferent fram de áder agríiment?'},
    {speaker:'alumno', en:'It\'s basically the same, but let\'s try to negotiate the price a little more.', es:'Es básicamente lo mismo, pero tratemos de negociar el precio un poco más.', pron:'its béisicli de séim, bat lets trái tu nigóushieit de práis a lítol mor.'},
    {speaker:'maestro', en:'I\'d like to choose the better option, even if it costs more — I need to decide soon.', es:'Me gustaría elegir la mejor opción, aunque cueste más — necesito decidir pronto.', pron:'áid láik tu chúus de béter ápshion, íven if it costs mor — ái níid tu disáid súun.'},
    {speaker:'alumno', en:'Agreed — let\'s finalize this deal together.', es:'De acuerdo — finalicemos este trato juntos.', pron:'agríid — lets fáinaláiz dis díil tugéder.'}
  ],
  24: [
    {speaker:'maestro', en:'Welcome to unit two, review time! What did you learn this unit?', es:'¡Bienvenido a la Unidad Dos, hora de repaso! ¿Qué aprendiste en esta unidad?', pron:'uélcam tu iúnit tú, riviú táim! uát did iú lern dis iúnit?'},
    {speaker:'alumno', en:'I remember everything — well, I forgot one small thing.', es:'Recuerdo todo — bueno, olvidé una cosa pequeña.', pron:'ái rimémber évrizin — uél, ái forgát uán smol zing.'},
    {speaker:'maestro', en:'Let\'s practice one more time, just to be sure.', es:'Practiquemos una vez más, solo para estar seguros.', pron:'lets práctis uán mor táim, yast tu bi shur.'},
    {speaker:'alumno', en:'Good idea — you\'re improving with each practice.', es:'Buena idea — estás mejorando con cada práctica.', pron:'gud aidía — iór imprúuving uid íich práctis.'},
    {speaker:'maestro', en:'You\'re halfway there already!', es:'¡Ya vas por la mitad!', pron:'iór jáfuei der olrédi!'},
    {speaker:'alumno', en:'That\'s great — see you in the next unit!', es:'¡Eso es genial — nos vemos en la próxima unidad!', pron:'dats gréit — síi iú in de next iúnit!'}
  ],
  25: [
    {speaker:'maestro', en:'What\'s the budget for this order — eleven, twelve, or thirteen units?', es:'¿Cuál es el presupuesto para este pedido — once, doce, o trece unidades?', pron:'uáts de báchet for dis órder — iléven, tuélv, or zértíin iúnits?'},
    {speaker:'alumno', en:'Let\'s see: fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, or twenty — how many do you need?', es:'A ver: catorce, quince, dieciséis, diecisiete, dieciocho, diecinueve, o veinte — ¿cuántas necesitas?', pron:'lets síi: fórtíin, fiftíin, síkstíin, séventíin, éitíin, náintíin, or tuénti — jáu méni du iú níid?'},
    {speaker:'maestro', en:'This item is going to cost approximately two hundred dollars, but that\'s expensive for us.', es:'Este artículo va a costar aproximadamente doscientos dólares, pero eso es caro para nosotros.', pron:'dis áitem is góing tu cost aprócsimatli tú jándred dálars, bat dats expénsiv for as.'},
    {speaker:'alumno', en:'We need something cheap — what\'s the final price after the discount?', es:'Necesitamos algo barato — ¿cuál es el precio final después del descuento?', pron:'uí níid sámzin chíip — uáts de fáinal práis áfter de discáunt?'}
  ],
  26: [
    {speaker:'maestro', en:'Can you give me a quote for thirty, forty, or fifty units?', es:'¿Puedes darme una cotización para treinta, cuarenta, o cincuenta unidades?', pron:'can iú guiv mi a cuóut for zérti, fórti, or fífti iúnits?'},
    {speaker:'alumno', en:'Sure — sixty, seventy, eighty, or ninety, plus a hundred more if you need them.', es:'Claro — sesenta, setenta, ochenta, o noventa, más cien más si las necesitas.', pron:'shur — síksti, séventi, éiti, or náinti, plas a jándred mor if iú níid dem.'},
    {speaker:'maestro', en:'What about the subtotal, tax, and shipping cost?', es:'¿Y qué tal el subtotal, el impuesto, y el costo de envío?', pron:'uát abáut de sábtoutal, tax, and shíping cost?'},
    {speaker:'alumno', en:'The grand total should add up to about a thousand dollars — I need to add up everything correctly.', es:'El total general debería sumar cerca de mil dólares — necesito sumar todo correctamente.', pron:'de grand tóutal shud ad ap tu abáut a záusand dálars — ái níid tu ad ap évrizin coréctli.'}
  ],
  27: [
    {speaker:'maestro', en:'What time is it right now — is it three o\'clock?', es:'¿Qué hora es ahora mismo — son las tres en punto?', pron:'uát táim is it ráit náu — is it zríi oclák?'},
    {speaker:'alumno', en:'It\'s half past three, actually — quarter past would be three fifteen, and quarter to four means almost an hour, or one minute before four.', es:'Son las tres y media, en realidad — y cuarto serían las tres y cuarto, y cuarto para las cuatro significa casi una hora, o un minuto antes de las cuatro.', pron:'its jaf past zríi, áctiuali — cuórter past uud bi zríi fiftíin, and cuórter tu fóar míins ólmoust an áur, or uán mínit bifór fóar.'},
    {speaker:'maestro', en:'What are your business hours, and what time does the store open?', es:'¿Cuál es tu horario comercial, y a qué hora abre la tienda?', pron:'uát ar iór bísnes áurs, and uát táim das de stor óupen?'},
    {speaker:'alumno', en:'It opens at nine, and it closes at six — delivery time is usually within 24 hours, same day if you\'re lucky, or next day otherwise.', es:'Abre a las nueve, y cierra a las seis — el tiempo de entrega suele ser dentro de 24 horas, el mismo día si tienes suerte, o al día siguiente si no.', pron:'it óupens at náin, and it clóuzes at six — delíveri táim is iúshuali uidín tuénti fóar áurs, séim déi if iór láki, or next déi áderuáis.'}
  ],
  28: [
    {speaker:'maestro', en:'Do you prefer meetings in the morning, in the afternoon, in the evening, or at night?', es:'¿Prefieres las reuniones en la mañana, en la tarde, en el anochecer, o en la noche?', pron:'du iú prifér míitings in de mórning, in de áfternúun, in de ívning, or at náit?'},
    {speaker:'alumno', en:'I prefer early morning meetings — I don\'t like being late.', es:'Prefiero las reuniones temprano en la mañana — no me gusta llegar tarde.', pron:'ái prifér érli mórning míitings — ái dont láik bíing léit.'},
    {speaker:'maestro', en:'Is the package delayed, or will it arrive around the estimated time?', es:'¿El paquete está demorado, o va a llegar cerca de la hora estimada?', pron:'is de páquich diléid, or uil it aráiv aráund de éstimeited táim?'},
    {speaker:'alumno', en:'The estimated arrival is around five, before or as soon as possible after that — check the tracking number for updates.', es:'La llegada estimada es cerca de las cinco, antes o lo antes posible después de eso — revisa el número de rastreo para actualizaciones.', pron:'de éstimeited aráival is aráund fáiv, bifór or as súun as pásibol áfter dat — chek de tráking námber for apdéits.'}
  ],
  29: [
    {speaker:'maestro', en:'When is the due date for this invoice — January, February, or March?', es:'¿Cuándo es la fecha de vencimiento de esta factura — enero, febrero, o marzo?', pron:'uén is de diú déit for dis ínvois — yániuari, fébruari, or march?'},
    {speaker:'alumno', en:'It\'s actually in April, May, or June — let me check the calendar.', es:'En realidad es en abril, mayo, o junio — déjame revisar el calendario.', pron:'its áctiuali in éipril, méi, or yun — let mi chek de cálendar.'},
    {speaker:'maestro', en:'Is it overdue already? What about July, August, or September?', es:'¿Ya está vencida? ¿Y qué tal julio, agosto, o septiembre?', pron:'is it óverdiú olrédi? uát abáut yulái, ógost, or septémber?'},
    {speaker:'alumno', en:'No, it\'s fine — the due date is October, or maybe November or December at the latest.', es:'No, está bien — la fecha de vencimiento es octubre, o tal vez noviembre o diciembre como muy tarde.', pron:'nóu, its fáin — de diú déit is octóuber, or méibi novémber or disémber at de léitest.'}
  ],
  30: [
    {speaker:'maestro', en:'What\'s the date? What\'s today\'s date? I need to know the payment terms.', es:'¿Cuál es la fecha? ¿Cuál es la fecha de hoy? Necesito saber las condiciones de pago.', pron:'uáts de déit? uáts tudéis déit? ái níid tu nóu de péiment terms.'},
    {speaker:'alumno', en:'The payment terms are net 30 — do you prefer an upfront payment, or an installment plan?', es:'Las condiciones de pago son treinta días netos — ¿prefieres un pago adelantado, o un plan de cuotas?', pron:'de péiment terms ar net zérti — du iú prifér an apfránt péiment, or an instólment plan?'},
    {speaker:'maestro', en:'What if there\'s a balance due at the end of the year or month?', es:'¿Y si hay un saldo pendiente al final del año o mes?', pron:'uát if ders a bálans diú at de end of de íar or manz?'},
    {speaker:'alumno', en:'It needs to be paid in full, but we can offer an extension, or a grace period if needed.', es:'Necesita pagarse por completo, pero podemos ofrecer una extensión, o un período de gracia si hace falta.', pron:'it níids tu bi péid in fúl, bat uí can áfer an exténshion, or a gréis píriod if níided.'}
  ],
  31: [
    {speaker:'maestro', en:'Let me see... hold on, give me a second to think about this.', es:'Déjame ver... espera, dame un segundo para pensar esto.', pron:'let mi síi... jóuld on, guiv mi a sécond tu zink abáut dis.'},
    {speaker:'alumno', en:'That works for me, or that doesn\'t work at all — which is it for you?', es:'Eso me funciona, o eso no funciona para nada — ¿cuál es para ti?', pron:'dat uorks for mi, or dat dásnt uork at ol — uích is it for iú?'},
    {speaker:'maestro', en:'It makes sense to me — I agree with most of it.', es:'Tiene sentido para mí — estoy de acuerdo con la mayoría.', pron:'it méiks sens tu mi — ái agríi uid móust of it.'},
    {speaker:'alumno', en:'Maybe, or probably — I definitely think it\'s a good idea, though I disagree a little with the price.', es:'Tal vez, o probablemente — definitivamente pienso que es una buena idea, aunque no estoy de acuerdo un poco con el precio.', pron:'méibi, or prábabli — définitli zink its a gud aidía, dóu ái disagríi a lítol uid de práis.'}
  ],
  32: [
    {speaker:'maestro', en:'Is this the first, second, third, or fourth item on the list?', es:'¿Es este el primero, segundo, tercero, o cuarto artículo de la lista?', pron:'is dis de ferst, sécond, zerd, or fórz áitem on de list?'},
    {speaker:'alumno', en:'It\'s actually the fifth, and it\'s next — right before the last one.', es:'En realidad es el quinto, y es el siguiente — justo antes del último.', pron:'its áctiuali de fifz, and its next — ráit bifór de last uán.'},
    {speaker:'maestro', en:'What\'s our top priority, and where does this rank?', es:'¿Cuál es nuestra prioridad principal, y dónde se ubica esto?', pron:'uáts áur top praióriti, and uér das dis rank?'},
    {speaker:'alumno', en:'This is urgent — check the ranking, our best seller, and our preferred supplier before the waiting list grows.', es:'Esto es urgente — revisa el ranking, nuestro más vendido, y nuestro proveedor preferido antes de que crezca la lista de espera.', pron:'dis is éryent — chek de ránking, áur best séler, and áur prifér sapláier bifór de uéiting list gróus.'}
  ],
  33: [
    {speaker:'maestro', en:'How much money do you have — cash, or just a credit card?', es:'¿Cuánto dinero tienes — efectivo, o solo una tarjeta de crédito?', pron:'jáu mach máni du iú jav — cash, or yast a crédit card?'},
    {speaker:'alumno', en:'I have a debit card, and I can write a check, or do a bank transfer or wire transfer too — how do you want to pay, and how much will you charge?', es:'Tengo una tarjeta de débito, y puedo escribir un cheque, o hacer una transferencia bancaria o transferencia electrónica también — ¿cómo quieres pagar, y cuánto vas a cobrar?', pron:'ái jav a débit card, and ái can ráit a chek, or du a bank tránsfer or uáier tránsfer tu — jáu du iú uánt tu péi, and jáu mach uil iú charch?'},
    {speaker:'maestro', en:'Do you have the receipt, and what\'s the exchange rate for this currency?', es:'¿Tienes el recibo, y cuál es la tasa de cambio para esta moneda?', pron:'du iú jav de risíit, and uáts de exchéinch réit for dis cárensi?'},
    {speaker:'alumno', en:'I will pay by card — you need to charge it, and give me the change afterward, or a refund if needed?', es:'Voy a pagar con tarjeta — necesitas cobrarlo, y darme el cambio después, ¿o un reembolso si hace falta?', pron:'ái uil péi bái card — iú níid tu charch it, and guiv mi de chéinch áfteruórd, or a rífand if níided?'}
  ],
  34: [
    {speaker:'maestro', en:'Do you want to buy, or to sell today? I need to purchase in bulk.', es:'¿Quieres comprar, o vender hoy? Necesito comprar al por mayor.', pron:'du iú uánt tu bái, or tu sel tudéi? ái níid tu pérchas in balk.'},
    {speaker:'alumno', en:'For a bulk order, we offer wholesale prices — the lowest price is much better than retail.', es:'Para un pedido al por mayor, ofrecemos precios de mayoreo — el precio más bajo es mucho mejor que al por menor.', pron:'for a balk órder, uí áfer jóulseil práisis — de lóuest práis is mach béter dan rítail.'},
    {speaker:'maestro', en:'What\'s our profit margin, and are we close to a loss, or break even?', es:'¿Cuál es nuestro margen de ganancia, y estamos cerca de una pérdida, o de solo cubrir gastos?', pron:'uáts áur práfit márchin, and ar uí clóus tu a los, or bréik íven?'},
    {speaker:'alumno', en:'I need to negotiate the price — let\'s make a final offer, and get the deal closed today.', es:'Necesito negociar el precio — hagamos una oferta final, y cerremos el trato hoy.', pron:'ái níid tu nigóushieit de práis — lets méik a fáinal áfer, and get de díil clóusd tudéi.'}
  ],
  35: [
    {speaker:'maestro', en:'What\'s the weight — how much does this weigh, one kilogram, or five hundred gram?', es:'¿Cuál es el peso — cuánto pesa esto, un kilogramo, o quinientos gramos?', pron:'uáts de uéit — jáu mach das dis uéi, uán quílougram, or fáiv jándred gram?'},
    {speaker:'alumno', en:'It\'s actually measured in liter, since it\'s a liquid — about two liters total.', es:'En realidad se mide en litros, ya que es un líquido — cerca de dos litros en total.', pron:'its áctiuali méshurd in líiter, sins its a líquid — abáut tú líiters tóutal.'},
    {speaker:'maestro', en:'What\'s the length, width, and height of this pack?', es:'¿Cuál es el largo, ancho, y alto de este paquete?', pron:'uáts de lenz, uidz, and jáit of dis pak?'},
    {speaker:'alumno', en:'Let me check — it\'s about one meter, or forty centimeter, and we measure the volume before loading the pallet, in inch or pound too.', es:'Déjame revisar — es cerca de un metro, o cuarenta centímetros, y medimos el volumen antes de cargar la tarima, en pulgadas o libras también.', pron:'let mi chek — its abáut uán míter, or fórti séntimiter, and uí méshur de váliun bifór lóuding de pálet, in inch or páund tu.'}
  ],
  36: [
    {speaker:'maestro', en:'Welcome to unit three, review time! Are you ready for the final challenge?', es:'¡Bienvenido a la Unidad Tres, hora de repaso! ¿Estás listo para el desafío final?', pron:'uélcam tu iúnit zríi, riviú táim! ar iú rédi for de fáinal chálench?'},
    {speaker:'alumno', en:'Yes! I made strong progress this unit — I feel well earned and proud of you too.', es:'¡Sí! Hice un progreso fuerte esta unidad — me siento bien merecido y orgulloso de ti también.', pron:'iés! ái méid strong prógres dis iúnit — ái fíil uél érnd and práud of iú tu.'},
    {speaker:'maestro', en:'Let\'s finish this together, one more time.', es:'Terminemos esto juntos, una vez más.', pron:'lets fínish dis tugéder, uán mor táim.'},
    {speaker:'alumno', en:'That\'s the spirit — see you in unit four, next unit!', es:'Ese es el espíritu — ¡nos vemos en la Unidad Cuatro, la próxima unidad!', pron:'dats de spírit — síi iú in iúnit fóar, next iúnit!'}
  ],
  37: [
    {speaker:'maestro', en:'Are you ready to order? I would like to know what\'s your main course.', es:'¿Estás listo para pedir? Quisiera saber cuál es tu plato principal.', pron:'ar iú rédi tu órder? ái uud láik tu nóu uáts iór méin cors.'},
    {speaker:'alumno', en:'I\'ll have the chicken please, and an appetizer to start — something spicy would be great.', es:'Voy a pedir el pollo por favor, y una entrada para empezar — algo picante estaría genial.', pron:'áil jav de chíken plíis, and an ápetaiser tu start — sámzin spáisi uud bi gréit.'},
    {speaker:'maestro', en:'Do you want anything sweet or salty for dessert?', es:'¿Quieres algo dulce o salado de postre?', pron:'du iú uánt énizin suíit or sólti for disért?'},
    {speaker:'alumno', en:'The cake looked tasty — but first, I need to schedule a meeting to discuss the agenda.', es:'La torta se veía sabrosa — pero primero, necesito programar una reunión para discutir la agenda.', pron:'de kéik lukt téisti — bat ferst, ái níid tu squédiul a míiting tu discás de áyenda.'},
    {speaker:'maestro', en:'Who are the attendees, and can we book a conference room?', es:'¿Quiénes son los asistentes, y podemos reservar una sala de conferencias?', pron:'jú ar de aténdis, and can uí buk a cánferens rúum?'},
    {speaker:'alumno', en:'Yes, let\'s find a good time slot for everyone this week — I need to book the conference room too.', es:'Sí, busquemos un buen horario para todos esta semana — también necesito reservar la sala de conferencias.', pron:'iés, lets fáind a gud táim slot for évriuan dis uíik — ái níid tu buk de cánferens rúum tu.'}
  ],
  38: [
    {speaker:'maestro', en:'What do you like, or what don\'t you like on the menu?', es:'¿Qué te gusta, o qué no te gusta del menú?', pron:'uát du iú láik, or uát dont iú láik on de méniu?'},
    {speaker:'alumno', en:'I like spicy food, and I don\'t like plain food — I love it, actually, and I need to prefer something milder today, my favorite is spicy, but I like to try new things.', es:'Me gusta la comida picante, y no me gusta la comida simple — me encanta en realidad, y necesito preferir algo más suave hoy, mi favorito es lo picante, pero me gusta probar cosas nuevas.', pron:'ái láik spáisi fúud, and ái dont láik pléin fúud — ái lav it, áctiuali, and ái níid tu prifér sámzin máilder tudéi, mái féivorit is spáisi, bat ái láik tu trái niú zings.'},
    {speaker:'maestro', en:'Can you try this dish? I want to know the taste.', es:'¿Puedes probar este plato? Quiero saber el sabor.', pron:'can iú trái dis dish? ái uánt tu nóu de téist.'},
    {speaker:'alumno', en:'I am allergic to shellfish, so I can\'t try that one, sorry.', es:'Soy alérgico a los mariscos, así que no puedo probar ese, disculpa.', pron:'ái am aléryic tu shélfish, sóu ái cant trái dat uán, sóri.'},
    {speaker:'maestro', en:'Can you confirm attendance for tomorrow\'s meeting? I\'ll be there for sure.', es:'¿Puedes confirmar tu asistencia para la reunión de mañana? Yo voy a estar seguro.', pron:'can iú canférm aténdans for tumórous míiting? áil bi der for shur.'},
    {speaker:'alumno', en:'I can\'t attend — there\'s a schedule conflict. Should I decline the invite, or accept it anyway? I need to confirm attendance soon, and I need to accept or to decline before Friday.', es:'No puedo asistir — hay un conflicto de horario. ¿Debería rechazar la invitación, o aceptarla igual? Necesito confirmar mi asistencia pronto, y necesito aceptar o rechazar antes del viernes.', pron:'ái cant aténd — ders a squédiul cánflict. shud ái dicláin de inváit, or acsépt it éniuei? ái níid tu canférm aténdans súun, and ái níid tu acsépt or tu dicláin bifór fráidei.'}
  ],
  39: [
    {speaker:'maestro', en:'Should we split the bill, or is this a reservation for the group?', es:'¿Dividimos la cuenta, o esta es una reserva para el grupo?', pron:'shud uí split de bil, or is dis a reservéishion for de grup?'},
    {speaker:'alumno', en:'Let\'s split it — and don\'t forget the tip. Dine in or take out today?', es:'Dividámosla — y no olvides la propina. ¿Comemos acá o para llevar hoy?', pron:'lets split it — and dont forguét de tip. dáin in or téik áut tudéi?'},
    {speaker:'maestro', en:'What\'s the first agenda item, and which topic do we need to discuss?', es:'¿Cuál es el primer tema de la agenda, y qué tema necesitamos discutir?', pron:'uáts de ferst áyenda áitem, and uích tápic du uí níid tu discás?'},
    {speaker:'alumno', en:'Let\'s discuss the budget first — that\'s an important action item.', es:'Discutamos el presupuesto primero — eso es un punto de acción importante.', pron:'lets discás de báchet ferst — dats an impórtant ákshion áitem.'},
    {speaker:'maestro', en:'What are the next steps, and can you follow up after the meeting?', es:'¿Cuáles son los próximos pasos, y puedes hacer seguimiento después de la reunión?', pron:'uát ar de next steps, and can iú fálou ap áfter de míiting?'},
    {speaker:'alumno', en:'Sure — check the meeting minutes, and I need to summarize before we wrap up.', es:'Claro — revisa la minuta de la reunión, y necesito resumir antes de cerrar.', pron:'shur — chek de míiting mínits, and ái níid tu sámaráis bifór uí rap ap.'}
  ],
  40: [
    {speaker:'maestro', en:'I need to cook dinner tonight — do you have a good recipe?', es:'Necesito cocinar la cena esta noche — ¿tienes una buena receta?', pron:'ái níid tu cuk díner tunáit — du iú jav a gud résipi?'},
    {speaker:'alumno', en:'Yes! First, I need to cut the ingredients, then to boil the water, and to fry or to bake the rest — turn on the oven and the stove.', es:'¡Sí! Primero, necesito cortar los ingredientes, después hervir el agua, y freír u hornear el resto — enciende el horno y la cocina.', pron:'iés! ferst, ái níid tu cat de ingriídients, den tu bóil de uóter, and tu frái or tu béik de rest — tern on de áven and de stóuv.'},
    {speaker:'maestro', en:'I need to prepare the slides for tomorrow\'s presentation too.', es:'También necesito preparar las diapositivas para la presentación de mañana.', pron:'ái níid tu pripér de sláids for tumórous presentéishion tu.'},
    {speaker:'alumno', en:'I need to rehearse it too — let\'s do it together, and I\'ll help you prepare the handout as well.', es:'También necesito ensayarla — hagámoslo juntos, y te ayudo a preparar el folleto también.', pron:'ái níid tu rijérs it tu — lets du it tugéder, and áil jelp iú pripér de jándaut as uél.'}
  ],
  41: [
    {speaker:'maestro', en:'Would you like some juice, soda, tea, beer, or wine with dinner?', es:'¿Quieres jugo, gaseosa, té, cerveza, o vino con la cena?', pron:'uud iú láik sam yús, sóuda, tíi, bíar, or uáin uid díner?'},
    {speaker:'alumno', en:'Just tea for me, thanks. Can you hear me on this video call? Here\'s the link to join.', es:'Solo té para mí, gracias. ¿Me escuchas en esta videollamada? Acá está el enlace para unirte.', pron:'yast tíi for mi, zenks. can iú jíar mi on dis vídiou col? jírs de link tu yóin.'},
    {speaker:'maestro', en:'Your camera on button seems off — can you turn it on, and check the connection?', es:'Tu botón de cámara encendida parece apagado — ¿puedes encenderla, y revisar la conexión?', pron:'iór cámera on báton síims of — can iú tern it on, and chek de canékshion?'},
    {speaker:'alumno', en:'Sure, I need to sign in again — I can screen share with you once I mute my microphone (I need to mute it now), and I need to sign off when we finish.', es:'Claro, necesito iniciar sesión de nuevo — puedo compartir pantalla contigo una vez que silencie mi micrófono (necesito silenciarlo ahora), y necesito cerrar sesión cuando terminemos.', pron:'shur, ái níid tu sáin in aguén — ái can scríin sher uid iú uáns ái miút mái máicrofoun (ái níid tu miút it náu), and ái níid tu sáin of uén uí fínish.'}
  ],
  42: [
    {speaker:'maestro', en:'What did you have for breakfast — eggs, toast, or cereal?', es:'¿Qué desayunaste — huevos, tostadas, o cereal?', pron:'uát did iú jav for brékfast — egs, tóust, or síirial?'},
    {speaker:'alumno', en:'I had a sandwich instead, and a snack later — I had to skip a meal yesterday, though.', es:'Comí un sándwich en cambio, y una merienda después — aunque ayer tuve que saltarme una comida.', pron:'ái jad a sánduich instéd, and a snak léiter — ái jad tu skip a míil iésterdei, dóu.'},
    {speaker:'maestro', en:'Let\'s do a follow-up meeting for a status update on the project.', es:'Hagamos una reunión de seguimiento para una actualización del estado del proyecto.', pron:'lets du a fálou-ap míiting for a stéitas apdéit on de práchect.'},
    {speaker:'alumno', en:'Sure — we are on track, and making good progress, though one milestone is still pending, and slightly behind schedule.', es:'Claro — vamos bien encaminados, y haciendo buen progreso, aunque un hito todavía está pendiente, y un poco atrasados según lo planeado.', pron:'shur — uí ar on trak, and méiking gud prógres, dóu uán máilstoun is stil pénding, and sláitli bijáind squédiul.'}
  ],
  43: [
    {speaker:'maestro', en:'Can you repeat that? What do you mean exactly?', es:'¿Puedes repetir eso? ¿Qué quieres decir exactamente?', pron:'can iú ripíit dat? uát du iú míin exáctli?'},
    {speaker:'alumno', en:'Oh, I see — got it now, no worries.', es:'Ah, ya veo — entendido ahora, no hay problema.', pron:'óu, ái síi — gat it náu, nóu uóris.'},
    {speaker:'maestro', en:'Same here, either way — in that case, let\'s continue.', es:'Lo mismo digo, de cualquier manera — en ese caso, continuemos.', pron:'séim jíar, íder uéi — in dat kéis, lets cantíniu.'},
    {speaker:'alumno', en:'Just in case, let\'s do this as needed, anyway.', es:'Por las dudas, hagamos esto según haga falta, de todos modos.', pron:'yast in kéis, lets du dis as níided, éniuei.'}
  ],
  44: [
    {speaker:'maestro', en:'Do you have any allergy — nuts, shellfish, or something else?', es:'¿Tienes alguna alergia — nueces, mariscos, o algo más?', pron:'du iú jav éni álery — nats, shélfish, or sámzin els?'},
    {speaker:'alumno', en:'I need gluten-free food, and I\'m lactose intolerant too — what\'s safe to eat here?', es:'Necesito comida sin gluten, y también soy intolerante a la lactosa — ¿qué es seguro comer acá?', pron:'ái níid glúten-fríi fúud, and áim láctous intólerant tu — uáts séif tu íit jíar?'},
    {speaker:'maestro', en:'We need to avoid those ingredients then. Can you take notes for the meeting? I need to take notes too.', es:'Entonces necesitamos evitar esos ingredientes. ¿Puedes tomar notas para la reunión? Yo también necesito tomar notas.', pron:'uí níid tu avóid dóus ingriídients den. can iú téik nóuts for de míiting? ái níid tu téik nóuts tu.'},
    {speaker:'alumno', en:'Sure — I\'ll write the minutes of the meeting, note the decision, and the responsible person, plus attach the attachment.', es:'Claro — voy a escribir la minuta de la reunión, anotar la decisión, y la persona responsable, además de adjuntar el archivo adjunto.', pron:'shur — áil ráit de mínits of de míiting, nóut de disíshion, and de rispánsibol pérson, plas atách de atáchment.'}
  ],
  45: [
    {speaker:'maestro', en:'Would you like some cake, a cookie, or ice cream? I have a sweet tooth.', es:'¿Quieres torta, una galleta, o helado? Soy goloso.', pron:'uud iú láik sam kéik, a cúki, or áis críim? ái jav a suíit túuz.'},
    {speaker:'alumno', en:'Chocolate or candy sounds great too! In conclusion, thank you all for coming.', es:'¡Chocolate o caramelos también suena genial! En conclusión, gracias a todos por venir.', pron:'chácolet or cándi sáunds gréit tu! in canclúshion, zenk iú ol for cáming.'},
    {speaker:'maestro', en:'Before we finish, any questions?', es:'Antes de terminar, ¿alguna pregunta?', pron:'bifór uí fínish, éni cuéstions?'},
    {speaker:'alumno', en:'Let\'s plan for the same time next week — here\'s our action plan.', es:'Planeemos para la misma hora la próxima semana — acá está nuestro plan de acción.', pron:'lets plan for de séim táim next uíik — jírs áur ákshion plan.'}
  ],
  46: [
    {speaker:'maestro', en:'I need to buy groceries at the supermarket — do you have the shopping list?', es:'Necesito comprar víveres en el supermercado — ¿tienes la lista de compras?', pron:'ái níid tu bái gróuseris at de súupermárket — du iú jav de sháping list?'},
    {speaker:'alumno', en:'Yes, check aisle three — grab a basket, and let\'s go through the cashier at checkout.', es:'Sí, revisa el pasillo tres — toma una canasta, y pasemos por la cajera al pagar.', pron:'iés, chek áil zríi — grab a básket, and lets góu zru de cashíar at chékáut.'},
    {speaker:'maestro', en:'Is the fish fresh, or is it frozen?', es:'¿El pescado está fresco, o está congelado?', pron:'is de fish fresh, or is it fróuzen?'},
    {speaker:'alumno', en:'It\'s fresh! Now let\'s prepare for the supplier meeting — bring a sample and the catalog.', es:'¡Está fresco! Ahora preparémonos para la reunión con el proveedor — trae una muestra y el catálogo.', pron:'its fresh! náu lets pripér for de sapláier míiting — bring a sámpol and de cátalog.'},
    {speaker:'maestro', en:'What are the terms and conditions for this partnership?', es:'¿Cuáles son los términos y condiciones para esta sociedad?', pron:'uát ar de terms and candíshions for dis pártnership?'},
    {speaker:'alumno', en:'Let\'s review them together before we sign anything.', es:'Revisémoslos juntos antes de firmar algo.', pron:'lets riviú dem tugéder bifór uí sáin énizin.'}
  ],
  47: [
    {speaker:'maestro', en:'Do we have enough budget approval for this — a little, or a lot?', es:'¿Tenemos suficiente aprobación de presupuesto para esto — un poco, o mucho?', pron:'du uí jav ináf báchet apruúval for dis — a lítol, or a lat?'},
    {speaker:'alumno', en:'We have enough resources, but not too much extra — some funds, but definitely none for luxury.', es:'Tenemos suficientes recursos, pero no demasiado extra — algo de fondos, pero definitivamente nada para lujo.', pron:'uí jav ináf risórsis, bat nat tu mach éxtra — sam fands, bat définitli nan for lákshuri.'},
    {speaker:'maestro', en:'How do we allocate the investment then? We need to allocate it carefully.', es:'¿Cómo asignamos la inversión entonces? Necesitamos asignarla con cuidado.', pron:'jáu du uí álokeit de invéstment den? uí níid tu álokeit it kérfuli.'},
    {speaker:'alumno', en:'We might need to cut costs somewhere to make this work.', es:'Podríamos necesitar recortar gastos en algún lado para que esto funcione.', pron:'uí máit níid tu cat costs sámuér tu méik dis uork.'}
  ],
  48: [
    {speaker:'maestro', en:'Welcome to unit four, final review! We\'re one third done already.', es:'¡Bienvenido a la Unidad Cuatro, repaso final! Ya llevamos un tercio hecho.', pron:'uélcam tu iúnit fóar, fáinal riviú! uír uán zerd dan olrédi.'},
    {speaker:'alumno', en:'Keep learning — great effort so far, you\'re on track!', es:'Sigue aprendiendo — gran esfuerzo hasta ahora, ¡vas bien encaminado!', pron:'kíip lérning — gréit éfort sóu far, iór on trak!'},
    {speaker:'maestro', en:'I\'m on track to finish this unit strong.', es:'Voy bien encaminado para terminar esta unidad con fuerza.', pron:'áim on trak tu fínish dis iúnit strong.'},
    {speaker:'alumno', en:'See you in unit five, next unit!', es:'¡Nos vemos en la Unidad Cinco, la próxima unidad!', pron:'síi iú in iúnit fáiv, next iúnit!'}
  ],
  49: [
    {speaker:'maestro', en:'I\'d like to try on this shirt — what size do you have?', es:'Quisiera probarme esta camisa — ¿qué talle tienes?', pron:'áid láik tu trái on dis shert — uát sáis du iú jav?'},
    {speaker:'alumno', en:'Sure, the fitting room is right there. Does it fit? It\'s too tight, maybe.', es:'Claro, el probador está ahí. ¿Te queda bien? Tal vez está muy ajustada.', pron:'shur, de fíting rúum is ráit der. das it fit? its tu táit, méibi.'},
    {speaker:'maestro', en:'It\'s too big, actually — too small won\'t work either, let me try a smaller size.', es:'En realidad me queda grande — muy chica tampoco funciona, déjame probar un talle más chico.', pron:'its tu big, áctiuali — tu smol uónt uork íider, let mi trái a smóler sáis.'},
    {speaker:'alumno', en:'The sales assistant at the store can help you find the right one.', es:'El vendedor de la tienda puede ayudarte a encontrar la talla correcta.', pron:'de séils asístant at de stor can jelp iú fáind de ráit uán.'},
    {speaker:'maestro', en:'By the way, did you send that formal quote yet?', es:'Por cierto, ¿ya enviaste esa cotización formal?', pron:'bái de uéi, did iú send dat fórmal cuóut iét?'},
    {speaker:'alumno', en:'Yes, the proposal is attached to the email — it\'s valid until Friday.', es:'Sí, la propuesta está adjunta en el correo — es válida hasta el viernes.', pron:'iés, de propóusal is atáchd tu de íimeil — its válid antíl fráidei.'},
    {speaker:'maestro', en:'Perfect, I\'ll review it today.', es:'Perfecto, la reviso hoy.', pron:'pérfect, áil riviú it tudéi.'},
    {speaker:'alumno', en:'Let me know if anything doesn\'t fit right, or if you need help.', es:'Avisame si algo no te queda bien, o si necesitas ayuda.', pron:'let mi nóu if énizin dásnt fit ráit, or if iú níid jelp.'}
  ],
  50: [
    {speaker:'maestro', en:'I\'d like to bargain a little — can you lower the price on this?', es:'Me gustaría regatear un poco — ¿puedes bajar el precio de esto?', pron:'áid láik tu bárguein a lítol — can iú lóuer de práis on dis?'},
    {speaker:'alumno', en:'Let me check — is this from the clearance section, or the regular sale?', es:'Déjame revisar — ¿esto es de la sección de liquidación, o de la oferta regular?', pron:'let mi chek — is dis fram de clírans sékshion, or de réguiular séil?'},
    {speaker:'maestro', en:'It\'s regular price, but what percentage off could you offer?', es:'Es precio regular, pero ¿qué porcentaje de descuento podrías ofrecer?', pron:'its réguiular práis, bat uát persénteich of cud iú áfer?'},
    {speaker:'alumno', en:'I need to negotiate terms — here\'s my best offer for now.', es:'Necesito negociar los términos — acá está mi mejor oferta por ahora.', pron:'ái níid tu nigóushieit terms — jírs mái best áfer for náu.'},
    {speaker:'maestro', en:'Can I make a counteroffer instead?', es:'¿Puedo hacer una contraoferta en cambio?', pron:'can ái méik a cáunteráfer instéd?'},
    {speaker:'alumno', en:'Sure, I\'m flexible — unless it\'s a fixed price item.', es:'Claro, soy flexible — a menos que sea un artículo de precio fijo.', pron:'shur, áim fléxibol — anlés its a fixd práis áitem.'},
    {speaker:'maestro', en:'What\'s the minimum order to get a better deal?', es:'¿Cuál es el pedido mínimo para conseguir un mejor trato?', pron:'uáts de mínimum órder tu get a béter díil?'},
    {speaker:'alumno', en:'Let\'s negotiate terms based on your minimum order size.', es:'Negociemos los términos según el tamaño de tu pedido mínimo.', pron:'lets nigóushieit terms béisd on iór mínimum órder sáis.'}
  ],
  51: [
    {speaker:'maestro', en:'I need to return this item — do you have a refund policy?', es:'Necesito devolver este artículo — ¿tienen política de reembolso?', pron:'ái níid tu ritérn dis áitem — du iú jav a rífand pálisi?'},
    {speaker:'alumno', en:'Sure, do you want a refund, or an exchange instead?', es:'Claro, ¿quieres un reembolso, o un cambio en su lugar?', pron:'shur, du iú uánt a rífand, or an exchéinch instéd?'},
    {speaker:'maestro', en:'The product is defective — actually, it\'s broken.', es:'El producto está defectuoso — en realidad, está roto.', pron:'de prádact is diféctiv — áctiuali, its bróuken.'},
    {speaker:'alumno', en:'Do you have your proof of purchase with you?', es:'¿Tienes tu comprobante de compra contigo?', pron:'du iú jav iór prúuf of pérchas uid iú?'},
    {speaker:'maestro', en:'Yes, right here. Also, I need to issue an invoice for the exchange, and I need to get this sorted out.', es:'Sí, acá está. También, necesito emitir una factura para el cambio, y necesito resolver esto.', pron:'iés, ráit jíar. ólsou, ái níid tu íshu an ínvois for de exchéinch, and ái níid tu get dis sórtid áut.'},
    {speaker:'alumno', en:'Of course — what\'s the invoice number you need reissued?', es:'Por supuesto — ¿cuál es el número de factura que necesitas reemitir?', pron:'of cors — uáts de ínvois námber iú níid riíshud?'},
    {speaker:'maestro', en:'I\'ll also need your billing address and tax ID.', es:'También voy a necesitar tu dirección de facturación y NIT.', pron:'áil ólsou níid iór bíling adrés and tax ái-dí.'},
    {speaker:'alumno', en:'No problem — is the payment due upon receipt, or later?', es:'No hay problema — ¿el pago vence al recibirlo, o después?', pron:'nóu práblem — is de péiment diú apán risíit, or léiter?'}
  ],
  52: [
    {speaker:'maestro', en:'Is this warranty still valid? Is it covered, or not covered?', es:'¿Esta garantía todavía es válida? ¿Está cubierta, o no cubierta?', pron:'is dis uáranti stil válid? is it cáverd, or nat cáverd?'},
    {speaker:'alumno', en:'Let me check — this is covered by the warranty, a full repair is covered, but a replacement might not be.', es:'Déjame revisar — esto está cubierto por la garantía, una reparación completa está cubierta, pero un reemplazo tal vez no.', pron:'let mi chek — dis is cáverd bái de uáranti, a fúl ripér is cáverd, bat a riplésment máit nat bi.'},
    {speaker:'maestro', en:'What about withholding tax on this invoice?', es:'¿Y qué tal la retención de impuestos en esta factura?', pron:'uát abáut uidjóulding tax on dis ínvois?'},
    {speaker:'alumno', en:'The withholding tax and VAT are both included in the terms of sale.', es:'La retención de impuestos y el IVA están incluidos en los términos de venta.', pron:'de uidjóulding tax and vi-éi-tí ar bóuz inclúudid in de terms of séil.'},
    {speaker:'maestro', en:'Is there a late fee if I pay after the due date?', es:'¿Hay un recargo por mora si pago después de la fecha de vencimiento?', pron:'is der a léit fíi if ái péi áfter de diú déit?'},
    {speaker:'alumno', en:'Yes, there\'s a late fee — but the net amount stays the same.', es:'Sí, hay un recargo por mora — pero el monto neto sigue igual.', pron:'iés, ders a léit fíi — bat de net amáunt stéis de séim.'},
    {speaker:'maestro', en:'Got it, I\'ll pay before the due date then.', es:'Entendido, voy a pagar antes de la fecha de vencimiento entonces.', pron:'gat it, áil péi bifór de diú déit den.'},
    {speaker:'alumno', en:'Good idea — that way you avoid the late fee completely.', es:'Buena idea — así evitas el recargo por mora por completo.', pron:'gud aidía — dat uéi iú avóid de léit fíi camplíitli.'}
  ],
  53: [
    {speaker:'maestro', en:'Do you accept cards, or is it cash only?', es:'¿Aceptan tarjetas, o es solo efectivo?', pron:'du iú accépt cards, or is it cash óunli?'},
    {speaker:'alumno', en:'We accept cards — you can swipe the card, or insert the card.', es:'Aceptamos tarjetas — puedes deslizar la tarjeta, o insertarla.', pron:'uí accépt cards — iú can suáip de card, or insért de card.'},
    {speaker:'maestro', en:'Can I pay contactless instead?', es:'¿Puedo pagar sin contacto en cambio?', pron:'can ái péi cántactles instéd?'},
    {speaker:'alumno', en:'Sure, just enter your PIN if it asks, or tap for contactless.', es:'Claro, solo ingresa tu clave si lo pide, o acerca la tarjeta para pago sin contacto.', pron:'shur, yast énter iór pin if it asks, or tap for cántactles.'},
    {speaker:'maestro', en:'Can you help me to record a payment for this transaction?', es:'¿Puedes ayudarme a registrar un pago para esta transacción?', pron:'can iú jelp mi tu ricórd a péiment for dis transákshion?'},
    {speaker:'alumno', en:'Of course — I\'ll record a payment, payment received, and here\'s your transaction ID.', es:'Por supuesto — voy a registrar un pago, pago recibido, y acá está tu número de transacción.', pron:'of cors — áil ricórd a péiment, péiment risíivd, and jírs iór transákshion ái-dí.'},
    {speaker:'maestro', en:'Is this a partial payment, or the full amount?', es:'¿Este es un pago parcial, o el monto completo?', pron:'is dis a párshal péiment, or de fúl amáunt?'},
    {speaker:'alumno', en:'This is a partial payment — we\'ll record the rest later.', es:'Este es un pago parcial — vamos a registrar el resto después.', pron:'dis is a párshal péiment — uíl ricórd de rest léiter.'}
  ],
  54: [
    {speaker:'maestro', en:'I\'m shopping at an online store — can you help me check out?', es:'Estoy comprando en una tienda en línea — ¿puedes ayudarme a pagar?', pron:'áim sháping at an ónláin stor — can iú jelp mi chek áut?'},
    {speaker:'alumno', en:'Sure, add to cart, add it to your shopping cart, and confirm your shipping address.', es:'Claro, agrégalo al carrito, agrégalo a tu carrito de compras, y confirma tu dirección de envío.', pron:'shur, ad tu cart, ad it tu iór sháping cart, and canférm iór shíping adrés.'},
    {speaker:'maestro', en:'I need to enter my card number now, right?', es:'Necesito ingresar mi número de tarjeta ahora, ¿verdad?', pron:'ái níid tu énter mái card námber náu, ráit?'},
    {speaker:'alumno', en:'Yes, and the security code too — it\'s a remote payment.', es:'Sí, y el código de seguridad también — es un pago a distancia.', pron:'iés, and de sikiúriti kóud tu — its a rimóut péiment.'},
    {speaker:'maestro', en:'Is this a secure payment, though?', es:'¿Pero esto es un pago seguro?', pron:'is dis a sikiúr péiment, dóu?'},
    {speaker:'alumno', en:'Yes, completely — the online store uses a secure payment system.', es:'Sí, completamente — la tienda en línea usa un sistema de pago seguro.', pron:'iés, camplíitli — de ónláin stor iúsis a sikiúr péiment sístem.'},
    {speaker:'maestro', en:'Perfect, let me finish adding to my cart then.', es:'Perfecto, déjame terminar de agregar cosas a mi carrito entonces.', pron:'pérfect, let mi fínish áding tu mái cart den.'},
    {speaker:'alumno', en:'Take your time — the shopping cart saves your items automatically.', es:'Tómate tu tiempo — el carrito de compras guarda tus artículos automáticamente.', pron:'téik iór táim — de sháping cart séivs iór áitems ótomáticli.'}
  ],
  55: [
    {speaker:'maestro', en:'As far as I know, this deal is still open — is that right?', es:'Que yo sepa, este trato todavía está abierto — ¿es correcto?', pron:'as far as ái nóu, dis díil is stil óupen — is dat ráit?'},
    {speaker:'alumno', en:'To be honest, I\'m not completely sure yet.', es:'Para ser honesto, todavía no estoy completamente seguro.', pron:'tu bi ánest, áim nat camplíitli shur iét.'},
    {speaker:'maestro', en:'On the other hand, in other words, we could wait a bit longer.', es:'Por otro lado, en otras palabras, podríamos esperar un poco más.', pron:'on de áder jand, in áder uords, uí cud uéit a bit lónguer.'},
    {speaker:'alumno', en:'Not yet, but from now on, let\'s check every week.', es:'Todavía no, pero de ahora en adelante, revisemos cada semana.', pron:'nat iét, bat fram náu on, lets chek évri uíik.'},
    {speaker:'maestro', en:'Once again, little by little, we\'re making progress.', es:'Una vez más, poco a poco, estamos avanzando.', pron:'uáns aguén, lítol bái lítol, uír méiking prógres.'},
    {speaker:'alumno', en:'Agreed — little by little is better than not at all.', es:'De acuerdo — poco a poco es mejor que nada.', pron:'agríid — lítol bái lítol is béter dan nat at ol.'}
  ],
  56: [
    {speaker:'maestro', en:'I\'m looking for a shirt, some pants, or maybe a jacket.', es:'Estoy buscando una camisa, unos pantalones, o tal vez una chaqueta.', pron:'áim lúking for a shert, sam pants, or méibi a yáket.'},
    {speaker:'alumno', en:'This dress comes in medium, or large — which do you prefer?', es:'Este vestido viene en mediano, o grande — ¿cuál prefieres?', pron:'dis dres cams in míidiam, or larch — uích du iú prifér?'},
    {speaker:'maestro', en:'Actually, this is too small for me.', es:'En realidad, esto me queda muy chico.', pron:'áctiuali, dis is tu smol for mi.'},
    {speaker:'alumno', en:'Let me get you a different size then. By the way, about the payment reminder —', es:'Déjame traerte otra talla entonces. Por cierto, sobre el recordatorio de pago —', pron:'let mi guet iú a díferent sáis den. bái de uéi, abáut de péiment rimáinder —'},
    {speaker:'maestro', en:'Right, is there an outstanding balance on my account?', es:'Cierto, ¿hay un saldo pendiente en mi cuenta?', pron:'ráit, is der an áutstanding bálans on mái acáunt?'},
    {speaker:'alumno', en:'Yes, we kindly remind you it\'s due as agreed last month.', es:'Sí, te recordamos amablemente que vence como se acordó el mes pasado.', pron:'iés, uí káindli rimáind iú its diú as agríid last manz.'},
    {speaker:'maestro', en:'I\'ll take care of it today, along with the pants.', es:'Me voy a encargar de eso hoy, junto con los pantalones.', pron:'áil téik ker of it tudéi, alóng uid de pants.'},
    {speaker:'alumno', en:'Perfect, and let\'s find the right jacket size too.', es:'Perfecto, y busquemos la talla correcta de chaqueta también.', pron:'pérfect, and lets fáind de ráit yáket sáis tu.'}
  ],
  57: [
    {speaker:'maestro', en:'I need new shoes, maybe some boots, and a belt too.', es:'Necesito zapatos nuevos, tal vez unas botas, y un cinturón también.', pron:'ái níid niú shúus, méibi sam búuts, and a belt tu.'},
    {speaker:'alumno', en:'This hat and bag would go well with those boots.', es:'Este sombrero y bolso combinarían bien con esas botas.', pron:'dis jat and bag uud góu uél uid dóus búuts.'},
    {speaker:'maestro', en:'Can we also approve a quote today?', es:'¿Podemos también aprobar una cotización hoy?', pron:'can uí ólsou apruúv a cuóut tudéi?'},
    {speaker:'alumno', en:'Sure, is it approved already, or still pending approval? I need to approve a quote for you.', es:'Claro, ¿ya está aprobada, o todavía pendiente de aprobación? Necesito aprobar una cotización por ti.', pron:'shur, is it apruúvd olrédi, or stil pénding aprúval? ái níid tu apruúv a cuóut for iú.'},
    {speaker:'maestro', en:'It\'s pending approval — can you give the go ahead?', es:'Está pendiente de aprobación — ¿puedes dar el visto bueno?', pron:'its pénding aprúval — can iú guiv de góu ajéd?'},
    {speaker:'alumno', en:'I approve it, and I can sign off on it right now, actually.', es:'Lo apruebo, y puedo firmarlo ahora mismo, en realidad.', pron:'ái apruúv it, and ái can sáin of on it ráit náu, áctiuali.'},
    {speaker:'maestro', en:'Great, and I\'ll take the shoes and the belt as well.', es:'Genial, y también me llevo los zapatos y el cinturón.', pron:'gréit, and áil téik de shúus and de belt as uél.'},
    {speaker:'alumno', en:'Perfect — let me ring that up for you.', es:'Perfecto — déjame cobrarte eso.', pron:'pérfect — let mi ring dat ap for iú.'}
  ],
  58: [
    {speaker:'maestro', en:'Let\'s do a price comparison before deciding.', es:'Hagamos una comparación de precios antes de decidir.', pron:'lets du a práis campárison bifór disáiding.'},
    {speaker:'alumno', en:'Sure — which supplier is the cheapest, and which is the most expensive?', es:'Claro — ¿qué proveedor es el más barato, y cuál es el más caro?', pron:'shur — uích sapláier is de chíipest, and uích is de móust expénsiv?'},
    {speaker:'maestro', en:'Is the expensive one actually worth it?', es:'¿El caro realmente vale la pena?', pron:'is de expénsiv uán áctiuali uorz it?'},
    {speaker:'alumno', en:'It is worth it — it could be a good bargain if the quality matches the price.', es:'Vale la pena — podría ser una buena oferta si la calidad coincide con el precio.', pron:'it is uorz it — it cud bi a gud bárguein if de cuáliti mátches de práis.'},
    {speaker:'maestro', en:'Should we shop around a bit more first?', es:'¿Deberíamos comparar precios un poco más primero?', pron:'shud uí shap aráund a bit mor ferst?'},
    {speaker:'alumno', en:'Yes, let\'s do a full supplier comparison, including lead time.', es:'Sí, hagamos una comparación completa de proveedores, incluyendo el tiempo de entrega.', pron:'iés, lets du a fúl sapláier campárison, inclúding líid táim.'},
    {speaker:'maestro', en:'What matters most — best value, or fastest lead time?', es:'¿Qué importa más — mejor valor, o el tiempo de entrega más rápido?', pron:'uát máters móust — best váliu, or fástest líid táim?'},
    {speaker:'alumno', en:'Best value, definitely — let\'s make the final decision based on that.', es:'Mejor valor, definitivamente — tomemos la decisión final en base a eso.', pron:'best váliu, définitli — lets méik de fáinal disíshion béisd on dat.'}
  ],
  59: [
    {speaker:'maestro', en:'I want to complain about this order — this doesn\'t work at all.', es:'Quiero quejarme de este pedido — esto no funciona para nada.', pron:'ái uánt tu campléin abáut dis órder — dis dásnt uork at ol.'},
    {speaker:'alumno', en:'I\'m sorry to hear that — I want to help resolve this, to resolve it for you.', es:'Lamento escuchar eso — quiero ayudar a resolver esto, resolverlo por ti.', pron:'áim sóri tu jíar dat — ái uánt tu jelp risólv dis, tu risólv it for iú.'},
    {speaker:'maestro', en:'This is a faulty product, and I want a refund.', es:'Este es un producto defectuoso, y quiero un reembolso.', pron:'dis is a fólti prádact, and ái uánt a rífand.'},
    {speaker:'alumno', en:'Let me connect you with customer service right away.', es:'Déjame conectarte con servicio al cliente de inmediato.', pron:'let mi canéct iú uid cástomer sérvis ráit auéi.'},
    {speaker:'maestro', en:'I also need to dispute a charge — there was a billing error.', es:'También necesito disputar un cargo — hubo un error de facturación.', pron:'ái ólsou níid tu dispiút a charch — der uás a bíling érror.'},
    {speaker:'alumno', en:'I understand, please accept our apology for the inconvenience.', es:'Entiendo, por favor acepta nuestras disculpas por el inconveniente.', pron:'ái anderstánd, plíis accépt áur apáloyi for de inconvíniens.'},
    {speaker:'maestro', en:'What\'s my case number for this issue?', es:'¿Cuál es mi número de caso para este problema?', pron:'uáts mái kéis námber for dis íshu?'},
    {speaker:'alumno', en:'Here\'s your case number — we\'ll resolve it as soon as possible.', es:'Acá está tu número de caso — lo vamos a resolver lo antes posible.', pron:'jírs iór kéis námber — uíl risólv it as súun as pásibol.'}
  ],
  60: [
    {speaker:'maestro', en:'Welcome to unit five, review time!', es:'¡Bienvenido a la Unidad Cinco, hora de repaso!', pron:'uélcam tu iúnit fáiv, riviú táim!'},
    {speaker:'alumno', en:'I made steady progress on everything this unit.', es:'Hice un progreso constante en todo en esta unidad.', pron:'ái méid stédi prógres on évrizin dis iúnit.'},
    {speaker:'maestro', en:'Don\'t give up — you\'re almost at unit six.', es:'No te rindas — ya casi llegas a la Unidad Seis.', pron:'dont guiv ap — iór ólmoust at iúnit six.'},
    {speaker:'alumno', en:'Thank you, I won\'t give up now.', es:'Gracias, no me voy a rendir ahora.', pron:'zenk iú, ái uónt guiv ap náu.'},
    {speaker:'maestro', en:'This was a great unit overall.', es:'Esta fue una gran unidad en general.', pron:'dis uás a gréit iúnit óverol.'},
    {speaker:'alumno', en:'See you in the next unit!', es:'¡Nos vemos en la próxima unidad!', pron:'síi iú in de next iúnit!'}
  ],
  61: [
    {speaker:'maestro', en:'Excuse me, how do I get to the post office? Where is it — I need to get to it.', es:'Disculpa, ¿cómo llego al correo? ¿Dónde está — necesito llegar ahí.', pron:'exquiús mi, jáu du ái guet tu de póust áfis? uér is it — ái níid tu guet tu it.'},
    {speaker:'alumno', en:'Turn left at the corner, then go straight — it\'s near the next block.', es:'Dobla a la izquierda en la esquina, después sigue derecho — está cerca de la próxima cuadra.', pron:'tern left at de córner, den góu stréit — its níar de next blak.'},
    {speaker:'maestro', en:'Is it far, or close by? It\'s far from here, actually.', es:'¿Está lejos, o cerca? En realidad está lejos de acá.', pron:'is it far, or clóus bái? its far fram jíar, áctiuali.'},
    {speaker:'alumno', en:'It\'s near — just turn right at the second corner.', es:'Está cerca — solo dobla a la derecha en la segunda esquina.', pron:'its níar — yast tern ráit at de sécond córner.'},
    {speaker:'maestro', en:'By the way, I need to coordinate a shipment today.', es:'Por cierto, necesito coordinar un envío hoy.', pron:'bái de uéi, ái níid tu coórdineit a shípment tudéi.'},
    {speaker:'alumno', en:'Sure, who\'s the carrier, and when\'s the pickup?', es:'Claro, ¿quién es el transportista, y cuándo es la recogida?', pron:'shur, jus de cárier, and uéns de píkap?'},
    {speaker:'maestro', en:'The pickup is this afternoon — can the carrier confirm the time?', es:'La recogida es esta tarde — ¿puede el transportista confirmar la hora?', pron:'de píkap is dis áfternúun — can de cárier canférm de táim?'},
    {speaker:'alumno', en:'Let me check with the carrier and coordinate a shipment time with you.', es:'Déjame consultar con el transportista y coordinar un horario de envío contigo.', pron:'let mi chek uid de cárier and coórdineit a shípment táim uid iú.'}
  ],
  62: [
    {speaker:'maestro', en:'Go straight ahead, and the bank is across from the pharmacy.', es:'Ve derecho, y el banco está enfrente de la farmacia.', pron:'góu stréit ajéd, and de bank is acrós fram de fármasi.'},
    {speaker:'alumno', en:'Is it next to the park, or behind it, or between two buildings?', es:'¿Está al lado del parque, o detrás de él, o entre dos edificios?', pron:'is it next tu de park, or bijáind it, or bituíin tú bíldings?'},
    {speaker:'maestro', en:'It\'s between the bakery and the bank, right next to the traffic light.', es:'Está entre la panadería y el banco, justo al lado del semáforo.', pron:'its bituíin de béikeri and de bank, ráit next tu de tráfic láit.'},
    {speaker:'alumno', en:'I see it now, right past the crosswalk.', es:'Ya lo veo, justo pasando el cruce peatonal.', pron:'ái síi it náu, ráit past de crósuok.'},
    {speaker:'maestro', en:'Can you help me to track an order too?', es:'¿Puedes ayudarme a rastrear un pedido también?', pron:'can iú jelp mi tu trak an órder tu?'},
    {speaker:'alumno', en:'Sure, here\'s the tracking link — it says the package is in transit.', es:'Claro, acá está el enlace de rastreo — dice que el paquete está en tránsito.', pron:'shur, jírs de tráking link — it séis de páquich is in tránsit.'},
    {speaker:'maestro', en:'Is it out for delivery yet, or already delivered?', es:'¿Ya está en reparto, o ya fue entregado?', pron:'is it áut for delíveri iét, or olrédi delíverd?'},
    {speaker:'alumno', en:'It\'s out for delivery now — should be delivered by tonight.', es:'Ya está en reparto ahora — debería ser entregado esta noche.', pron:'its áut for delíveri náu — shud bi delíverd bái tunáit.'}
  ],
  63: [
    {speaker:'maestro', en:'Should I take the bus, a taxi, or the train?', es:'¿Debería tomar el bus, un taxi, o el tren?', pron:'shud ái téik de bas, a táxi, or de tréin?'},
    {speaker:'alumno', en:'The subway might be faster, or even a motorcycle if you\'re in a hurry.', es:'El metro podría ser más rápido, o hasta una moto si tienes prisa.', pron:'de sábuei máit bi fáster, or íven a mótorsaicol if iór in a jári.'},
    {speaker:'maestro', en:'What about sending this by truck instead?', es:'¿Y qué tal enviar esto en camión en cambio?', pron:'uát abáut sénding dis bái trak instéd?'},
    {speaker:'alumno', en:'I will choose the truck — it\'s better for this size of shipment.', es:'Voy a elegir el camión — es mejor para este tamaño de envío.', pron:'ái uil chúus de trak — its béter for dis sáis of shípment.'},
    {speaker:'maestro', en:'I need to choose a carrier for our shipping company too.', es:'Necesito elegir un transportista para nuestra empresa de envíos también.', pron:'ái níid tu chúus a cárier for áur shíping cámpani tu.'},
    {speaker:'alumno', en:'What\'s the rate, and does it include insurance?', es:'¿Cuál es la tarifa, y incluye seguro?', pron:'uáts de réit, and das it inclúud inshúrans?'},
    {speaker:'maestro', en:'The rate covers freight and insurance both.', es:'La tarifa cubre carga y seguro, ambos.', pron:'de réit cávers fréit and inshúrans bóuz.'},
    {speaker:'alumno', en:'Perfect, I will choose that shipping company then.', es:'Perfecto, voy a elegir esa empresa de envíos entonces.', pron:'pérfect, ái uil chúus dat shíping cámpani den.'}
  ],
  64: [
    {speaker:'maestro', en:'I\'m at the airport — where\'s my flight, and where\'s my boarding pass?', es:'Estoy en el aeropuerto — ¿dónde está mi vuelo, y dónde está mi pase de abordar?', pron:'áim at de érport — uérs mái fláit, and uérs mái bórding pas?'},
    {speaker:'alumno', en:'Check the gate first, and don\'t forget your luggage.', es:'Revisa la puerta primero, y no te olvides de tu equipaje.', pron:'chek de guéit ferst, and dont forguét iór lágüich.'},
    {speaker:'maestro', en:'I also need to go through customs.', es:'También necesito pasar por aduana.', pron:'ái ólsou níid tu góu zru cástoms.'},
    {speaker:'alumno', en:'Do you have anything to declare?', es:'¿Tienes algo para declarar?', pron:'du iú jav énizin tu diclér?'},
    {speaker:'maestro', en:'I need to declare a few gifts I\'m bringing to import.', es:'Necesito declarar unos regalos que traigo para importar.', pron:'ái níid tu diclér a fiú guifts áim bríngin tu impórt.'},
    {speaker:'alumno', en:'And are you here to export anything as well?', es:'¿Y estás acá para exportar algo también?', pron:'and ar iú jíar tu expórt énizin as uél?'},
    {speaker:'maestro', en:'No, but I do have the customs declaration and the country of origin form.', es:'No, pero sí tengo la declaración de aduana y el formulario de país de origen.', pron:'nóu, bat ái du jav de cástoms declaréishion and de cántri of óriyin form.'},
    {speaker:'alumno', en:'Good — is there a tariff for what you\'re importing?', es:'Bien — ¿hay un arancel para lo que estás importando?', pron:'gud — is der a táriff for uát iór impórting?'}
  ],
  65: [
    {speaker:'maestro', en:'What time is my train — do you have the ticket and the platform number?', es:'¿A qué hora es mi tren — tienes el boleto y el número de andén?', pron:'uát táim is mái tréin — du iú jav de tíket and de plátform námber?'},
    {speaker:'alumno', en:'Check the schedule — there might be a delay before departure.', es:'Revisa el horario — podría haber una demora antes de la salida.', pron:'chek de squédiul — der máit bi a diléi bifór dipárchur.'},
    {speaker:'maestro', en:'Is there a delay for the arrival too?', es:'¿Hay una demora para la llegada también?', pron:'is der a diléi for de aráival tu?'},
    {speaker:'alumno', en:'Not for arrival, just departure. By the way, I have the shipping guide ready.', es:'No para la llegada, solo la salida. Por cierto, tengo la guía de envío lista.', pron:'nat for aráival, yast dipárchur. bái de uéi, ái jav de shíping gáid rédi.'},
    {speaker:'maestro', en:'Do you also have the commercial invoice, and the packing list?', es:'¿También tienes la factura comercial, y la lista de empaque?', pron:'du iú ólsou jav de camérshial ínvois, and de páking list?'},
    {speaker:'alumno', en:'Yes, I have the commercial invoice and the packing list both.', es:'Sí, tengo la factura comercial y la lista de empaque, ambas.', pron:'iés, ái jav de camérshial ínvois and de páking list bóuz.'},
    {speaker:'maestro', en:'Perfect — did the customs broker review everything?', es:'Perfecto — ¿el agente de aduanas revisó todo?', pron:'pérfect — did de cástoms bróuker riviú évrizin?'},
    {speaker:'alumno', en:'The customs broker already reviewed the shipping guide and the invoice.', es:'El agente de aduanas ya revisó la guía de envío y la factura.', pron:'de cástoms bróuker olrédi riviúd de shíping gáid and de ínvois.'}
  ],
  66: [
    {speaker:'maestro', en:'Is there a landmark near here, like the main street or an avenue?', es:'¿Hay un punto de referencia cerca de acá, como la calle principal o una avenida?', pron:'is der a lándmark níar jíar, láik de méin strit or an ávenu?'},
    {speaker:'alumno', en:'Yes, near the roundabout, right past the bridge into that district.', es:'Sí, cerca de la rotonda, justo pasando el puente hacia ese distrito.', pron:'iés, níar de ráundabáut, ráit past de brich íntu dat dístrict.'},
    {speaker:'maestro', en:'Does the delivery zone cover this district?', es:'¿La zona de reparto cubre este distrito?', pron:'das de delíveri sóun cáver dis dístrict?'},
    {speaker:'alumno', en:'The delivery zone covers most of downtown, and part of the coverage area beyond.', es:'La zona de reparto cubre la mayor parte del centro, y parte de la zona de cobertura más allá.', pron:'de delíveri sóun cávers móust of dáuntaun, and part of de cáverich éria bijónd.'},
    {speaker:'maestro', en:'What about a remote area outside the city?', es:'¿Y qué tal una zona remota fuera de la ciudad?', pron:'uát abáut a rimóut éria áutsáid de síti?'},
    {speaker:'alumno', en:'That might need a special route — same-day delivery isn\'t guaranteed there.', es:'Eso podría necesitar una ruta especial — la entrega el mismo día no está garantizada ahí.', pron:'dat máit níid a spéshal rúut — séim-déi delíveri ísnt gáranteed der.'},
    {speaker:'maestro', en:'Is the coverage area the same for every route?', es:'¿La zona de cobertura es la misma para cada ruta?', pron:'is de cáverich éria de séim for évri rúut?'},
    {speaker:'alumno', en:'Not always — some routes reach even remote areas with same-day delivery.', es:'No siempre — algunas rutas llegan hasta zonas remotas con entrega el mismo día.', pron:'nat ólueis — sam rúuts ríich íven rimóut érias uid séim-déi delíveri.'}
  ],
  67: [
    {speaker:'maestro', en:'Is the store over there, or right here?', es:'¿La tienda está allá, o justo acá?', pron:'is de stor óver der, or ráit jíar?'},
    {speaker:'alumno', en:'It\'s right here — actually, you passed it already.', es:'Está justo acá — en realidad, ya la pasaste.', pron:'its ráit jíar — áctiuali, iú pásd it olrédi.'},
    {speaker:'maestro', en:'How long does it take to walk back?', es:'¿Cuánto tarda en caminar de vuelta?', pron:'jáu long das it téik tu uók bak?'},
    {speaker:'alumno', en:'It takes about two minutes, not far from here.', es:'Tarda unos dos minutos, no lejos de acá.', pron:'it téiks abáut tú mínits, nat far fram jíar.'},
    {speaker:'maestro', en:'Is it close to the corner?', es:'¿Está cerca de la esquina?', pron:'is it clóus tu de córner?'},
    {speaker:'alumno', en:'Yes, it\'s just around the corner from here — you\'re close now.', es:'Sí, está justo a la vuelta de la esquina desde acá — ya estás cerca.', pron:'iés, its yast aráund de córner fram jíar — iór clóus náu.'},
    {speaker:'maestro', en:'Just follow the signs and you\'ll find it.', es:'Solo sigue las señales y la vas a encontrar.', pron:'yast fálou de sáins and iúl fáind it.'},
    {speaker:'alumno', en:'Perfect, I\'ll follow the signs from here.', es:'Perfecto, voy a seguir las señales desde acá.', pron:'pérfect, áil fálou de sáins fram jíar.'}
  ],
  68: [
    {speaker:'maestro', en:'There\'s a traffic jam right now — is it rush hour already?', es:'Hay un embotellamiento ahora mismo — ¿ya es hora pico?', pron:'ders a tráfic yam ráit náu — is it rash áuar olrédi?'},
    {speaker:'alumno', en:'Yes, how long does it take to get through this?', es:'Sí, ¿cuánto tarda en pasar esto?', pron:'iés, jáu long das it téik tu guet zru dis?'},
    {speaker:'maestro', en:'Is there a shortcut, or a detour we could take?', es:'¿Hay un atajo, o un desvío que podamos tomar?', pron:'is der a shórtcat, or a dítuar uí cud téik?'},
    {speaker:'alumno', en:'Let\'s try the detour — it might save time.', es:'Probemos el desvío — podría ahorrar tiempo.', pron:'lets trái de dítuar — it máit séiv táim.'},
    {speaker:'maestro', en:'By the way, how\'s our supply chain doing today?', es:'Por cierto, ¿cómo va nuestra cadena de suministro hoy?', pron:'bái de uéi, jáus áur saplái chéin dúing tudéi?'},
    {speaker:'alumno', en:'Not great — the shipment is delayed, it is a delayed shipment.', es:'No muy bien — el envío está demorado, es un envío demorado.', pron:'nat gréit — de shípment is diléid, it is a diléid shípment.'},
    {speaker:'maestro', en:'Is anything on backorder, or out of stock?', es:'¿Algo está pendiente de entrega, o agotado?', pron:'is énizin on bákorder, or áut of stak?'},
    {speaker:'alumno', en:'Yes, a few items are out of stock — there\'s a bottleneck in the supply chain.', es:'Sí, algunos artículos están agotados — hay un cuello de botella en la cadena de suministro.', pron:'iés, a fiú áitems ar áut of stak — ders a bátolnek in de saplái chéin.'}
  ],
  69: [
    {speaker:'maestro', en:'I\'d like to rent a car — do you need my driver\'s license?', es:'Me gustaría alquilar un auto — ¿necesitas mi licencia de conducir?', pron:'áid láik tu rent a car — du iú níid mái dráivers láisens?'},
    {speaker:'alumno', en:'Yes, and we\'ll need a deposit too. Do you want a full tank?', es:'Sí, y también vamos a necesitar un depósito. ¿Quieres el tanque lleno?', pron:'iés, and uíl níid a dipázit tu. du iú uánt a fúl tank?'},
    {speaker:'maestro', en:'What about the mileage — is there a limit?', es:'¿Y qué tal el kilometraje — hay un límite?', pron:'uát abáut de máilich — is der a límit?'},
    {speaker:'alumno', en:'No limit on mileage. Now, about the shipment — I want to hire a carrier.', es:'Sin límite de kilometraje. Ahora, sobre el envío — quiero contratar un transportista.', pron:'nóu límit on máilich. náu, abáut de shípment — ái uánt tu jáier a cárier.'},
    {speaker:'maestro', en:'Sure, do you have a service agreement with them already?', es:'Claro, ¿ya tienes un acuerdo de servicio con ellos?', pron:'shur, du iú jav a sérvis agríiment uid dem olrédi?'},
    {speaker:'alumno', en:'Not yet, but their on-time delivery rate looks great.', es:'Todavía no, pero su tasa de entrega a tiempo se ve genial.', pron:'nat iét, bat der on-táim delíveri réit luks gréit.'},
    {speaker:'maestro', en:'What about their capacity — is their fleet big enough?', es:'¿Y qué tal su capacidad — su flota es lo suficientemente grande?', pron:'uát abáut der capásiti — is der flit big ináf?'},
    {speaker:'alumno', en:'Their fleet has plenty of capacity for what we need.', es:'Su flota tiene mucha capacidad para lo que necesitamos.', pron:'der flit jas plénti of capásiti for uát uí níid.'}
  ],
  70: [
    {speaker:'maestro', en:'Did you see that stop sign, and the no entry sign back there?', es:'¿Viste esa señal de pare, y la señal de no entrar allá atrás?', pron:'did iú síi dat stap sáin, and de nóu éntri sáin bak der?'},
    {speaker:'alumno', en:'Yes, and it\'s a one way street too, with a strict speed limit.', es:'Sí, y también es una calle de un solo sentido, con un límite de velocidad estricto.', pron:'iés, and its a uán uéi strit tu, uid a strict spíid límit.'},
    {speaker:'maestro', en:'Is this package fragile? It says handle with care.', es:'¿Este paquete es frágil? Dice manejar con cuidado.', pron:'is dis páquich fráyil? it séis jándol uid ker.'},
    {speaker:'alumno', en:'This package is fragile — and look, it says this side up.', es:'Este paquete es frágil — y mira, dice este lado hacia arriba.', pron:'dis páquich is fráyil — and luk, it séis dis sáid ap.'},
    {speaker:'maestro', en:'Should we stack these boxes, or not?', es:'¿Deberíamos apilar estas cajas, o no?', pron:'shud uí stak díis báxis, or nat?'},
    {speaker:'alumno', en:'Do not stack them — some are hazardous material.', es:'No las apiles — algunas son material peligroso.', pron:'du nat stak dem — sam ar jazárdas matírial.'},
    {speaker:'maestro', en:'Where do we unload them then?', es:'¿Dónde las descargamos entonces?', pron:'uér du uí anlóud dem den?'},
    {speaker:'alumno', en:'Take them to the loading dock over there.', es:'Llévalas al muelle de carga que está allá.', pron:'téik dem tu de lóuding dak óver der.'}
  ],
  71: [
    {speaker:'maestro', en:'Should we go north, south, east, or west from here?', es:'¿Deberíamos ir al norte, sur, este, u oeste desde acá?', pron:'shud uí góu norz, sáuz, ist, or uést fram jíar?'},
    {speaker:'alumno', en:'Let\'s head north, toward downtown, not the outskirts.', es:'Vayamos al norte, hacia el centro, no las afueras.', pron:'lets jed norz, tuórd dáuntaun, nat de áutskerts.'},
    {speaker:'maestro', en:'What\'s our delivery route today?', es:'¿Cuál es nuestra ruta de entrega hoy?', pron:'uáts áur delíveri rúut tudéi?'},
    {speaker:'alumno', en:'The optimal route goes through downtown first, then the outskirts.', es:'La ruta óptima va por el centro primero, después las afueras.', pron:'de áptimal rúut góus zru dáuntaun ferst, den de áutskerts.'},
    {speaker:'maestro', en:'How many stops do we have?', es:'¿Cuántas paradas tenemos?', pron:'jáu méni staps du uí jav?'},
    {speaker:'alumno', en:'Multiple stops today — dispatch already sent the full route.', es:'Múltiples paradas hoy — despacho ya envió la ruta completa.', pron:'máltipol staps tudéi — díspach olrédi sent de fúl rúut.'},
    {speaker:'maestro', en:'Did dispatch confirm the optimal route?', es:'¿Despacho confirmó la ruta óptima?', pron:'did díspach canférm de áptimal rúut?'},
    {speaker:'alumno', en:'Yes, dispatch confirmed it — the optimal route goes north first.', es:'Sí, despacho lo confirmó — la ruta óptima va al norte primero.', pron:'iés, díspach canférmd it — de áptimal rúut góus norz ferst.'}
  ],
  72: [
    {speaker:'maestro', en:'Welcome to unit six, review time!', es:'¡Bienvenido a la Unidad Seis, hora de repaso!', pron:'uélcam tu iúnit six, riviú táim!'},
    {speaker:'alumno', en:'Great job so far — you\'re doing great this unit.', es:'Buen trabajo hasta ahora — lo estás haciendo genial en esta unidad.', pron:'gréit yab sóu far — iór dúing gréit dis iúnit.'},
    {speaker:'maestro', en:'Keep pushing — you\'re more than a third done now.', es:'Sigue adelante — ya llevas más de un tercio hecho.', pron:'kíip púshing — iór mor dan a zerd dan náu.'},
    {speaker:'alumno', en:'I\'m staying consistent with my practice every day.', es:'Me mantengo constante con mi práctica todos los días.', pron:'áim stéing cansístent uid mái práctis évri déi.'},
    {speaker:'maestro', en:'That\'s the key — stay consistent, and you\'ll get there.', es:'Esa es la clave — mantente constante, y vas a llegar.', pron:'dats de kíi — stéi cansístent, and iúl guet der.'},
    {speaker:'alumno', en:'See you in unit seven, next unit!', es:'¡Nos vemos en la Unidad Siete, la próxima unidad!', pron:'síi iú in iúnit séven, next iúnit!'}
  ],
  73: [
    {speaker:'maestro', en:'Welcome to our hotel! I have a reservation for two nights.', es:'¡Bienvenido a nuestro hotel! Tengo una reserva para dos noches.', pron:'uélcam tu áur jóutel! ái jav a reservéishion for tú náits.'},
    {speaker:'alumno', en:'Let me check the front desk system — can I have your name for check-in?', es:'Déjame revisar el sistema de recepción — ¿me da su nombre para el registro de entrada?', pron:'let mi chek de frant desk sístem — can ái jav iór néim for chek-in?'},
    {speaker:'maestro', en:'Sure, I want to book a room — a single room, but I\'d prefer a double room actually.', es:'Claro, quiero reservar una habitación — sencilla, pero en realidad preferiría una doble.', pron:'shur, ái uánt tu buk a rúum — a síngol rúum, bat áid prifér a dábol rúum áctiuali.'},
    {speaker:'alumno', en:'The receptionist can help with that — do you need a suite instead?', es:'El recepcionista puede ayudar con eso — ¿necesita una suite en cambio?', pron:'de risépshionist can jelp uid dat — du iú níid a suíit instéd?'},
    {speaker:'maestro', en:'No, a double room is fine. What time is check-out?', es:'No, una habitación doble está bien. ¿A qué hora es el registro de salida?', pron:'nóu, a dábol rúum is fáin. uát táim is chek-áut?'},
    {speaker:'alumno', en:'Check-out is at noon. Here\'s your room key for your business trip.', es:'El registro de salida es al mediodía. Acá está la llave de su habitación para su viaje de negocios.', pron:'chek-áut is at núun. jírs iór rúum kíi for iór bísnes trip.'},
    {speaker:'maestro', en:'By the way, do you offer a corporate rate?', es:'Por cierto, ¿ofrecen una tarifa corporativa?', pron:'bái de uéi, du iú áfer a córporeit réit?'},
    {speaker:'alumno', en:'Yes, we do — and we\'ll send the invoice for stay to your company.', es:'Sí — y le enviaremos la factura de estadía a su empresa.', pron:'iés, uí du — and uíl send de ínvois for stéi tu iór cámpani.'}
  ],
  74: [
    {speaker:'maestro', en:'I need extra towels in my room, and a pillow too.', es:'Necesito toallas extra en mi habitación, y una almohada también.', pron:'ái níid éxtra táuols in mái rúum, and a pílou tu.'},
    {speaker:'alumno', en:'Sure, I\'ll ask housekeeping to bring those, along with a fresh bed sheet.', es:'Claro, le pido a servicio de limpieza que traiga eso, junto con una sábana fresca.', pron:'shur, áil ask jáuskiiping tu bring dóus, alóng uid a fresh bed shíit.'},
    {speaker:'maestro', en:'Does the room have air conditioning, and what\'s the wifi password?', es:'¿La habitación tiene aire acondicionado, y cuál es la contraseña del wifi?', pron:'das de rúum jav er candíshioning, and uáts de uáifai pásuord?'},
    {speaker:'alumno', en:'Yes, air conditioning is included — the wifi password is on the desk.', es:'Sí, el aire acondicionado está incluido — la contraseña del wifi está en el escritorio.', pron:'iés, er candíshioning is inclúudid — de uáifai pásuord is on de desk.'},
    {speaker:'maestro', en:'Can I get room service tonight?', es:'¿Puedo pedir servicio a la habitación esta noche?', pron:'can ái guet rúum sérvis tunáit?'},
    {speaker:'alumno', en:'Of course — just put the "do not disturb" sign away when you\'re ready.', es:'Por supuesto — solo quite el cartel de "no molestar" cuando esté listo.', pron:'of cors — yast put de "du nat distérb" sáin auéi uén iór rédi.'},
    {speaker:'maestro', en:'Is there a business center, or meeting facilities here?', es:'¿Hay un centro de negocios, o instalaciones para reuniones acá?', pron:'is der a bísnes sénter, or míiting facílitis jíar?'},
    {speaker:'alumno', en:'Yes, both — and we also offer a laundry service and a minibar.', es:'Sí, ambos — y también ofrecemos servicio de lavandería y un minibar.', pron:'iés, bóuz — and uí ólsou áfer a lóndri sérvis and a mínibar.'}
  ],
  75: [
    {speaker:'maestro', en:'This is an emergency — I need an ambulance, help me please!', es:'Esto es una emergencia — ¡necesito una ambulancia, ayúdenme por favor!', pron:'dis is an emérgensi — ái níid an ámbiulans, jelp mi plíis!'},
    {speaker:'alumno', en:'Stay calm, I\'m calling the hospital now. Where\'s the pain?', es:'Mantén la calma, estoy llamando al hospital ahora. ¿Dónde está el dolor?', pron:'stéi calm, áim cóling de jáspital náu. uérs de péin?'},
    {speaker:'maestro', en:'I have severe pain, and I think I have a fever too.', es:'Tengo un dolor fuerte, y creo que también tengo fiebre.', pron:'ái jav sivíir péin, and ái zink ái jav a fíver tu.'},
    {speaker:'alumno', en:'Was there an accident? A doctor and a nurse are on their way.', es:'¿Hubo un accidente? Un doctor y una enfermera están en camino.', pron:'uás der an áccident? a dóctor and a ners ar on der uéi.'},
    {speaker:'maestro', en:'Do you have travel insurance for this?', es:'¿Tienes seguro de viaje para esto?', pron:'du iú jav trável inshúrans for dis?'},
    {speaker:'alumno', en:'Yes, I have travel insurance with medical coverage.', es:'Sí, tengo seguro de viaje con cobertura médica.', pron:'iés, ái jav trável inshúrans uid médical cáverich.'},
    {speaker:'maestro', en:'What\'s your policy number, for the claim?', es:'¿Cuál es tu número de póliza, para el reclamo?', pron:'uáts iór pálisi námber, for de cléim?'},
    {speaker:'alumno', en:'Here\'s my policy number — please file the claim as soon as possible.', es:'Acá está mi número de póliza — por favor presenta el reclamo lo antes posible.', pron:'jírs mái pálisi námber — plíis fáil de cléim as súun as pásibol.'}
  ],
  76: [
    {speaker:'maestro', en:'I need to go to the pharmacy — I have a headache and a stomachache.', es:'Necesito ir a la farmacia — tengo dolor de cabeza y de estómago.', pron:'ái níid tu góu tu de fármasi — ái jav a jédeik and a stámakeik.'},
    {speaker:'alumno', en:'Let me get you some medicine, or maybe allergy medicine if needed.', es:'Déjame conseguirte algo de medicina, o tal vez medicina para alergias si hace falta.', pron:'let mi guet iú sam médisin, or méibi álerchi médisin if níided.'},
    {speaker:'maestro', en:'I also have a cough — do I need a prescription for that?', es:'También tengo tos — ¿necesito una receta para eso?', pron:'ái ólsou jav a cof — du ái níid a priscrípshion for dat?'},
    {speaker:'alumno', en:'No prescription needed, just follow the dose based on your symptoms.', es:'No hace falta receta, solo sigue la dosis según tus síntomas.', pron:'nóu priscrípshion níided, yast fálou de dóus béisd on iór símptoms.'},
    {speaker:'maestro', en:'I also need a medical certificate to be fit to travel.', es:'También necesito un certificado médico para estar apto para viajar.', pron:'ái ólsou níid a médical certíficet tu bi fit tu trável.'},
    {speaker:'alumno', en:'Sure, we\'ll check your vaccination too before issuing that.', es:'Claro, también vamos a revisar tu vacunación antes de emitir eso.', pron:'shur, uíl chek iór vaccinéishion tu bifór íshuing dat.'},
    {speaker:'maestro', en:'Is the medical certificate ready today?', es:'¿El certificado médico está listo hoy?', pron:'is de médical certíficet rédi tudéi?'},
    {speaker:'alumno', en:'Yes, once we confirm you\'re fit to travel, it\'s ready.', es:'Sí, una vez que confirmemos que estás apto para viajar, está listo.', pron:'iés, uáns uí canférm iór fit tu trável, its rédi.'}
  ],
  77: [
    {speaker:'maestro', en:'What\'s the weather like today — is it sunny, or rainy?', es:'¿Cómo está el clima hoy — está soleado, o lluvioso?', pron:'uáts de uéder láik tudéi — is it sáni, or réini?'},
    {speaker:'alumno', en:'It\'s cloudy and windy right now, but not too hot or cold.', es:'Está nublado y con viento ahora mismo, pero no muy caliente ni frío.', pron:'its cláudi and uíndi ráit náu, bat nat tu jat or cóuld.'},
    {speaker:'maestro', en:'What season is best for traveling here?', es:'¿Qué estación es mejor para viajar acá?', pron:'uát síizon is best for trávoling jíar?'},
    {speaker:'alumno', en:'Summer, or maybe winter — depends on the forecast.', es:'Verano, o tal vez invierno — depende del pronóstico.', pron:'sámer, or méibi uínter — dipénds on de fórkast.'},
    {speaker:'maestro', en:'Does the forecast say anything about tomorrow?', es:'¿El pronóstico dice algo sobre mañana?', pron:'das de fórkast séi énizin abáut tumórou?'},
    {speaker:'alumno', en:'It says we may need to reschedule due to weather.', es:'Dice que tal vez necesitemos reprogramar debido al clima.', pron:'it séis uí méi níid tu risquédiul diú tu uéder.'},
    {speaker:'maestro', en:'Should we reschedule due to weather then?', es:'¿Deberíamos reprogramar debido al clima entonces?', pron:'shud uí risquédiul diú tu uéder den?'},
    {speaker:'alumno', en:'Yes, let\'s reschedule due to weather to be safe.', es:'Sí, reprogramemos debido al clima para estar seguros.', pron:'iés, lets risquédiul diú tu uéder tu bi séif.'}
  ],
  78: [
    {speaker:'maestro', en:'Honestly, this project has been challenging.', es:'Honestamente, este proyecto ha sido desafiante.', pron:'ánestli, dis práchect jas bin chálenying.'},
    {speaker:'alumno', en:'In fact, more or less everyone feels that way.', es:'De hecho, más o menos todos se sienten así.', pron:'in fact, mor or les évriuan fíils dat uéi.'},
    {speaker:'maestro', en:'To be precise, it\'s kind of stressful, by all means.', es:'Para ser precisos, es medio estresante, sin duda.', pron:'tu bi prisáis, its káind of strésful, bái ol míins.'},
    {speaker:'alumno', en:'No matter what, we\'ll finish it without a doubt.', es:'Pase lo que pase, lo vamos a terminar sin duda.', pron:'nóu máter uát, uíl fínish it uidáut a dáut.'},
    {speaker:'maestro', en:'Anyway, we finished just in time.', es:'De todas formas, terminamos justo a tiempo.', pron:'éniuei, uí fínisht yast in táim.'},
    {speaker:'alumno', en:'Honestly, I\'m proud of the whole team.', es:'Honestamente, estoy orgulloso de todo el equipo.', pron:'ánestli, áim práud of de jóul tíim.'}
  ],
  79: [
    {speaker:'maestro', en:'I need to download some software for my laptop.', es:'Necesito descargar un software para mi laptop.', pron:'ái níid tu dáunlóud sam sóftuer for mái láptap.'},
    {speaker:'alumno', en:'Sure, do you also need a new mouse or keyboard?', es:'Claro, ¿también necesitas un mouse o teclado nuevo?', pron:'shur, du iú ólsou níid a niú máus or kíibord?'},
    {speaker:'maestro', en:'Actually, my screen is fine — I just need to install this app.', es:'En realidad, mi pantalla está bien — solo necesito instalar esta app.', pron:'áctiuali, mái scríin is fáin — ái yast níid tu instól dis ap.'},
    {speaker:'alumno', en:'Once installed, don\'t forget to save the file to cloud storage.', es:'Una vez instalado, no te olvides de guardar el archivo en el almacenamiento en la nube.', pron:'uáns instóld, dont forguét tu séiv de fáil tu cláud stórich.'},
    {speaker:'maestro', en:'Can I open that spreadsheet document too?', es:'¿Puedo abrir esa hoja de cálculo también?', pron:'can ái óupen dat sprédshiit dókiument tu?'},
    {speaker:'alumno', en:'Yes, and remember to save the file after every change.', es:'Sí, y recuerda guardar el archivo después de cada cambio.', pron:'iés, and rimémber tu séiv de fáil áfter évri chéinch.'},
    {speaker:'maestro', en:'Where should I save the file — locally, or in the cloud?', es:'¿Dónde debería guardar el archivo — localmente, o en la nube?', pron:'uér shud ái séiv de fáil — lóucali, or in de cláud?'},
    {speaker:'alumno', en:'Save the file to cloud storage — it\'s safer that way.', es:'Guarda el archivo en el almacenamiento en la nube — es más seguro así.', pron:'séiv de fáil tu cláud stórich — its séifer dat uéi.'}
  ],
  80: [
    {speaker:'maestro', en:'The internet and wifi seem slow — what\'s our connection speed?', es:'El internet y el wifi se sienten lentos — ¿cuál es nuestra velocidad de conexión?', pron:'de ínternet and uáifai síim slóu — uáts áur canéxion spíid?'},
    {speaker:'alumno', en:'Let me check. First, you need to log in with your username and password.', es:'Déjame revisar. Primero, necesitas iniciar sesión con tu nombre de usuario y contraseña.', pron:'let mi chek. ferst, iú níid tu log in uid iór iúsernéim and pásuord.'},
    {speaker:'maestro', en:'I can join the video conference now, actually.', es:'En realidad, ya puedo unirme a la videoconferencia ahora.', pron:'ái can yóin de vídiou cánferens náu, áctiuali.'},
    {speaker:'alumno', en:'Great — remember to mute yourself until it\'s your turn to talk.', es:'Genial — recuerda silenciarte hasta que sea tu turno de hablar.', pron:'gréit — rimémber tu miút iórself antíl its iór tern tu tok.'},
    {speaker:'maestro', en:'Can I share screen during the meeting?', es:'¿Puedo compartir pantalla durante la reunión?', pron:'can ái sher scríin dúring de míiting?'},
    {speaker:'alumno', en:'Yes, you can share screen anytime — there\'s also a breakout room option.', es:'Sí, puedes compartir pantalla en cualquier momento — también hay una opción de sala de grupos.', pron:'iés, iú can sher scríin énitaim — ders ólsou a bréikáut rúum ápshion.'},
    {speaker:'maestro', en:'Is this being recorded?', es:'¿Esto se está grabando?', pron:'is dis bíing ricórdid?'},
    {speaker:'alumno', en:'Yes, there\'s a recording, and you can also use the chat box.', es:'Sí, hay una grabación, y también puedes usar el cuadro de chat.', pron:'iés, ders a ricórding, and iú can ólsou iús de chat bax.'}
  ],
  81: [
    {speaker:'maestro', en:'I posted something on social media today — did you see it?', es:'Publiqué algo en redes sociales hoy — ¿lo viste?', pron:'ái póustid sámzin on sóshial mídia tudéi — did iú síi it?'},
    {speaker:'alumno', en:'Yes! I saw your post, and I already gave it a like.', es:'¡Sí! Vi tu publicación, y ya le di un me gusta.', pron:'iés! ái so iór póust, and ái olrédi guéiv it a láik.'},
    {speaker:'maestro', en:'Can you share it, or leave a comment too?', es:'¿Puedes compartirla, o dejar un comentario también?', pron:'can iú sher it, or líiv a cáment tu?'},
    {speaker:'alumno', en:'Sure, I\'ll share it and add a comment with a good hashtag.', es:'Claro, la voy a compartir y agregar un comentario con un buen hashtag.', pron:'shur, áil sher it and ad a cáment uid a gud jáshtag.'},
    {speaker:'maestro', en:'How\'s our digital marketing campaign going?', es:'¿Cómo va nuestra campaña de marketing digital?', pron:'jáus áur díchital márketing campéin góing?'},
    {speaker:'alumno', en:'This is getting more attention — engagement from our target audience is up.', es:'Esto está recibiendo más atención — la interacción de nuestro público objetivo está subiendo.', pron:'dis is guéting mor aténshion — enguéichment fram áur tárguet ódiens is ap.'},
    {speaker:'maestro', en:'Did we run an advertisement for more followers?', es:'¿Pusimos un anuncio para conseguir más seguidores?', pron:'did uí ran an advertáisment for mor fálouers?'},
    {speaker:'alumno', en:'Yes, the advertisement helped grow our follower and engagement numbers.', es:'Sí, el anuncio ayudó a crecer nuestros números de seguidores e interacción.', pron:'iés, de advertáisment jelpd gróu áur fálouer and enguéichment námbers.'}
  ],
  82: [
    {speaker:'maestro', en:'I need to update the management software today.', es:'Necesito actualizar el software de gestión hoy.', pron:'ái níid tu apdéit de mánechment sóftuer tudéi.'},
    {speaker:'alumno', en:'Sure, check your account settings first, and confirm your subscription.', es:'Claro, revisa primero la configuración de tu cuenta, y confirma tu suscripción.', pron:'shur, chek iór acáunt sétings ferst, and canférm iór sabscrípshion.'},
    {speaker:'maestro', en:'Is there a notification about the update?', es:'¿Hay una notificación sobre la actualización?', pron:'is der a noutificéishion abáut de apdéit?'},
    {speaker:'alumno', en:'Yes, there\'s a notification — also check the inventory system after.', es:'Sí, hay una notificación — también revisa el sistema de inventario después.', pron:'iés, ders a noutificéishion — ólsou chek de ínventori sístem áfter.'},
    {speaker:'maestro', en:'Can you generate a report from the dashboard?', es:'¿Puedes generar un reporte desde el tablero?', pron:'can iú yénereit a ripórt fram de dáshbord?'},
    {speaker:'alumno', en:'Of course, I need to generate a report right now from the dashboard.', es:'Por supuesto, necesito generar un reporte ahora mismo desde el tablero.', pron:'of cors, ái níid tu yénereit a ripórt ráit náu fram de dáshbord.'},
    {speaker:'maestro', en:'Do I have the right user permissions for that?', es:'¿Tengo los permisos de usuario correctos para eso?', pron:'du ái jav de ráit iúser permíshions for dat?'},
    {speaker:'alumno', en:'Let me check your user permissions before you generate a report.', es:'Déjame revisar tus permisos de usuario antes de que generes un reporte.', pron:'let mi chek iór iúser permíshions bifór iú yénereit a ripórt.'}
  ],
  83: [
    {speaker:'maestro', en:'I have a technical problem — it\'s not working at all.', es:'Tengo un problema técnico — no funciona para nada.', pron:'ái jav a técnical práblem — its nat uórking at ol.'},
    {speaker:'alumno', en:'Did you try to restart it first?', es:'¿Intentaste reiniciarlo primero?', pron:'did iú trái tu ristárt it ferst?'},
    {speaker:'maestro', en:'Yes, but I still get an error message every time.', es:'Sí, pero todavía me sale un mensaje de error cada vez.', pron:'iés, bat ái stil guet an érror méssich évri táim.'},
    {speaker:'alumno', en:'Let\'s contact technical support to troubleshoot this.', es:'Contactemos al soporte técnico para solucionar esto.', pron:'lets cántact técnical sapórt tu tráblshut dis.'},
    {speaker:'maestro', en:'Can they help fix a bug like this?', es:'¿Pueden ayudar a arreglar un error como este?', pron:'can déi jelp fix a bag láik dis?'},
    {speaker:'alumno', en:'Yes, just open a support ticket, and they\'ll work to fix a bug quickly.', es:'Sí, solo abre un ticket de soporte, y van a trabajar para arreglar el error rápido.', pron:'iés, yast óupen a sapórt tíket, and déil uork tu fix a bag cuíckli.'},
    {speaker:'maestro', en:'What\'s the response time for a support ticket?', es:'¿Cuál es el tiempo de respuesta para un ticket de soporte?', pron:'uáts de rispáns táim for a sapórt tíket?'},
    {speaker:'alumno', en:'It\'s usually fast, but we can decide to escalate it if needed. This is working now, actually.', es:'Normalmente es rápido, pero podemos decidir escalarlo si hace falta. En realidad, esto ya está funcionando.', pron:'its iúshuali fast, bat uí can disáid tu éscaleit it if níided. dis is uórking náu, áctiuali.'}
  ],
  84: [
    {speaker:'maestro', en:'Welcome to unit seven, final review!', es:'¡Bienvenido a la Unidad Siete, repaso final!', pron:'uélcam tu iúnit séven, fáinal riviú!'},
    {speaker:'alumno', en:'We\'re almost half done with the whole course.', es:'Ya casi vamos por la mitad de todo el curso.', pron:'uír ólmoust jaf dan uid de jóul cors.'},
    {speaker:'maestro', en:'Keep going — well done so far.', es:'Sigue adelante — bien hecho hasta ahora.', pron:'kíip góing — uél dan sóu far.'},
    {speaker:'alumno', en:'Thank you, this was a great final review.', es:'Gracias, este fue un gran repaso final.', pron:'zenk iú, dis uás a gréit fáinal riviú.'},
    {speaker:'maestro', en:'I\'m proud of your progress on everything this unit.', es:'Estoy orgulloso de tu progreso en todo en esta unidad.', pron:'áim práud of iór prógres on évrizin dis iúnit.'},
    {speaker:'alumno', en:'See you in unit eight, next unit!', es:'¡Nos vemos en la Unidad Ocho, la próxima unidad!', pron:'síi iú in iúnit éit, next iúnit!'}
  ],
  85: [
    {speaker:'maestro', en:'I\'d like to apply for a job here — here\'s my resume and cover letter.', es:'Me gustaría postularme a un trabajo acá — acá está mi currículum y mi carta de presentación.', pron:'áid láik tu aplái for a yab jíar — jírs mái résume and cáver léter.'},
    {speaker:'alumno', en:'Thank you! Let\'s schedule a job interview soon.', es:'¡Gracias! Programemos una entrevista de trabajo pronto.', pron:'zenk iú! lets squédiul a yab ínterviu súun.'},
    {speaker:'maestro', en:'What are my strengths, and my weaknesses, if I may ask?', es:'¿Cuáles son mis fortalezas, y mis debilidades, si puedo preguntar?', pron:'uát ar mái strengzs, and mái uíknesis, if ái méi ask?'},
    {speaker:'alumno', en:'We\'ll discuss that in the interview. What are your salary expectations?', es:'Vamos a discutir eso en la entrevista. ¿Cuáles son tus expectativas salariales?', pron:'uíl discás dat in de ínterviu. uát ar iór sálari expectéishions?'},
    {speaker:'maestro', en:'I have experience in customer service, actually.', es:'En realidad, tengo experiencia en servicio al cliente.', pron:'ái jav expíriens in cástomer sérvis, áctiuali.'},
    {speaker:'alumno', en:'Good — what\'s your availability, and do you have references?', es:'Bien — ¿cuál es tu disponibilidad, y tienes referencias?', pron:'gud — uáts iór aveilabíliti, and du iú jav réferensis?'},
    {speaker:'maestro', en:'Yes, I have references ready, and I\'m available immediately.', es:'Sí, tengo referencias listas, y estoy disponible de inmediato.', pron:'iés, ái jav réferensis rédi, and áim aveilábol imídiatli.'},
    {speaker:'alumno', en:'Perfect — if we decide to hire you, expect a job offer this week. You\'re a strong candidate.', es:'Perfecto — si decidimos contratarte, espera una oferta de trabajo esta semana. Eres un candidato fuerte.', pron:'pérfect — if uí disáid tu jáier iú, expéct a yab áfer dis uíik. iór a strong candídeit.'}
  ],
  86: [
    {speaker:'maestro', en:'Tell me about yourself, and your previous experience.', es:'Cuéntame sobre ti, y tu experiencia previa.', pron:'tel mi abáut iórself, and iór prívias expíriens.'},
    {speaker:'alumno', en:'I have previous experience in sales — I am responsible for clear responsibilities and achievements.', es:'Tengo experiencia previa en ventas — soy responsable de responsabilidades y logros claros.', pron:'ái jav prívias expíriens in séils — ái am rispánsibol for clíar rispansibílitis and achíivments.'},
    {speaker:'maestro', en:'Why do you want this job?', es:'¿Por qué quieres este trabajo?', pron:'uái du iú uánt dis yab?'},
    {speaker:'alumno', en:'I\'m a team player, deadline-driven, with good problem-solving skills.', es:'Soy una persona de equipo, orientada a plazos, con buenas habilidades para resolver problemas.', pron:'áim a tíim pléier, dédláin-dríven, uid gud práblem-sálving skils.'},
    {speaker:'maestro', en:'Do you have leadership skills too?', es:'¿También tienes habilidades de liderazgo?', pron:'du iú jav líidership skils tu?'},
    {speaker:'alumno', en:'Yes — I\'ve led small teams before, with strong leadership skills.', es:'Sí — he liderado equipos pequeños antes, con fuertes habilidades de liderazgo.', pron:'iés — áiv led smol tíims bifór, uid strong líidership skils.'},
    {speaker:'maestro', en:'Would you like to negotiate salary now, or later?', es:'¿Te gustaría negociar el salario ahora, o después?', pron:'uud iú láik tu nigóushieit sálari náu, or léiter?'},
    {speaker:'alumno', en:'I\'d like to negotiate salary once we agree on responsibilities and achievements.', es:'Me gustaría negociar el salario una vez que acordemos las responsabilidades y logros.', pron:'áid láik tu nigóushieit sálari uáns uí agríi on rispansibílitis and achíivments.'}
  ],
  87: [
    {speaker:'maestro', en:'Welcome to the networking event! Let\'s do a business card exchange.', es:'¡Bienvenido al evento de networking! Hagamos un intercambio de tarjetas de presentación.', pron:'uélcam tu de nétuorking ivént! lets du a bísnes card exchéinch.'},
    {speaker:'alumno', en:'Sure! You need to introduce yourself, or let me introduce myself first — either way, nice to meet you.', es:'¡Claro! Necesitas presentarte, o déjame presentarme primero — de cualquier manera, un gusto conocerte.', pron:'shur! iú níid tu introdiús iórself, or let mi introdiús máiself ferst — íder uéi, náis tu míit iú.'},
    {speaker:'maestro', en:'Go ahead, give me your elevator pitch.', es:'Adelante, dame tu discurso de presentación rápida.', pron:'góu ajéd, guiv mi iór élevéitor pitch.'},
    {speaker:'alumno', en:'I work in the tech industry, building connections and opportunities.', es:'Trabajo en la industria tecnológica, construyendo conexiones y oportunidades.', pron:'ái uork in de tec índastri, bílding canéxions and oportiúnitis.'},
    {speaker:'maestro', en:'I would like to connect with you on LinkedIn.', es:'Me gustaría conectar contigo en LinkedIn.', pron:'ái uud láik tu canéct uid iú on línkdin.'},
    {speaker:'alumno', en:'Perfect, check my LinkedIn profile — let\'s send a follow-up email too.', es:'Perfecto, revisa mi perfil de LinkedIn — enviemos un correo de seguimiento también.', pron:'pérfect, chek mái línkdin próufail — lets send a fálou-ap íimeil tu.'},
    {speaker:'maestro', en:'This could be a good professional relationship.', es:'Esto podría ser una buena relación profesional.', pron:'dis cud bi a gud proféshional riléishionship.'},
    {speaker:'alumno', en:'Agreed — every networking event brings a new opportunity.', es:'De acuerdo — cada evento de networking trae una nueva oportunidad.', pron:'agríid — évri nétuorking ivént brings a niú oportiúniti.'}
  ],
  88: [
    {speaker:'maestro', en:'I\'m nervous about this public speaking event.', es:'Estoy nervioso por este evento de hablar en público.', pron:'áim nérvos abáut dis páblic spíiking ivént.'},
    {speaker:'alumno', en:'Don\'t worry — just prepare your opening statement, and you\'ll be fine.', es:'No te preocupes — solo prepara tu declaración de apertura, y vas a estar bien.', pron:'dont uóri — yast pripér iór óupening stéitment, and iúl bi fáin.'},
    {speaker:'maestro', en:'What about the audience — how do I engage the audience?', es:'¿Y qué tal el público — cómo involucro al público?', pron:'uát abáut de ódiens — jáu du ái enguéich de ódiens?'},
    {speaker:'alumno', en:'Use visual aids, and try to engage the audience with your key points.', es:'Usa ayudas visuales, y trata de involucrar al público con tus puntos clave.', pron:'iús víshual éids, and trái tu enguéich de ódiens uid iór kíi póints.'},
    {speaker:'maestro', en:'Should I expect a Q&A session after?', es:'¿Debería esperar una sesión de preguntas y respuestas después?', pron:'shud ái expéct a kiú-and-éi séshion áfter?'},
    {speaker:'alumno', en:'Yes, prepare for a Q&A session, then give your closing remarks.', es:'Sí, prepárate para una sesión de preguntas y respuestas, después da tus comentarios finales.', pron:'iés, pripér for a kiú-and-éi séshion, den guiv iór clóusing rimárks.'},
    {speaker:'maestro', en:'I am confident about the opening, but nervous about the Q&A session.', es:'Estoy seguro sobre la apertura, pero nervioso por la sesión de preguntas y respuestas.', pron:'ái am cánfident abáut de óupening, bat nérvos abáut de kiú-and-éi séshion.'},
    {speaker:'alumno', en:'You\'ll do great — just stay confident until the closing remarks.', es:'Lo vas a hacer genial — solo mantente seguro hasta los comentarios finales.', pron:'iúl du gréit — yast stéi cánfident antíl de clóusing rimárks.'}
  ],
  89: [
    {speaker:'maestro', en:'I need to sign this contract — where\'s my signature needed?', es:'Necesito firmar este contrato — ¿dónde se necesita mi firma?', pron:'ái níid tu sáin dis cántract — uérs mái sígnachur níided?'},
    {speaker:'alumno', en:'Right here, after you review the terms and conditions.', es:'Justo acá, después de que revises los términos y condiciones.', pron:'ráit jíar, áfter iú riviú de terms and candíshions.'},
    {speaker:'maestro', en:'Is there a confidential clause in this contract?', es:'¿Hay una cláusula confidencial en este contrato?', pron:'is der a cánfidenshial cloz in dis cántract?'},
    {speaker:'alumno', en:'Yes, one clause is confidential — please read it carefully.', es:'Sí, una cláusula es confidencial — por favor léela con cuidado.', pron:'iés, uán cloz is cánfidenshial — plíis ríid it kérfuli.'},
    {speaker:'maestro', en:'What about liability if we breach a contract?', es:'¿Qué pasa con la responsabilidad si incumplimos un contrato?', pron:'uát abáut láiabíliti if uí bríich a cántract?'},
    {speaker:'alumno', en:'That\'s covered too — you don\'t want to breach a contract, this is a binding agreement either way.', es:'Eso también está cubierto — no quieres incumplir un contrato, esto es un acuerdo vinculante de cualquier manera.', pron:'dats cáverd tu — iú dont uánt tu bríich a cántract, dis is a báinding agríiment íder uéi.'},
    {speaker:'maestro', en:'Should I ask a legal advisor before I sign?', es:'¿Debería consultar a un asesor legal antes de firmar?', pron:'shud ái ask a líigal advaísor bifór ái sáin?'},
    {speaker:'alumno', en:'That\'s a good idea — a legal advisor can review the clause first.', es:'Esa es una buena idea — un asesor legal puede revisar la cláusula primero.', pron:'dats a gud aidía — a líigal advaísor can riviú de cloz ferst.'}
  ],
  90: [
    {speaker:'maestro', en:'How\'s the office culture here — is it strict about punctuality?', es:'¿Cómo es la cultura de oficina acá — es estricta con la puntualidad?', pron:'jáus de áfis cálchur jíar — is it strict abáut panctiualíti?'},
    {speaker:'alumno', en:'In my culture, we value work-life balance more than a strict dress code.', es:'En mi cultura, valoramos el equilibrio entre trabajo y vida personal más que un código de vestimenta estricto.', pron:'in mái cálchur, uí váliu uork-láif bálans mor dan a strict dres kóud.'},
    {speaker:'maestro', en:'Is small talk common before meetings?', es:'¿La charla informal es común antes de las reuniones?', pron:'is smol tok cámon bifór míitings?'},
    {speaker:'alumno', en:'Yes, small talk is normal, though some prefer direct communication instead.', es:'Sí, la charla informal es normal, aunque algunos prefieren la comunicación directa en cambio.', pron:'iés, smol tok is nórmal, dóu sam prifér diréct camunikéishion instéd.'},
    {speaker:'maestro', en:'What about hierarchy — is it very formal?', es:'¿Y qué tal la jerarquía — es muy formal?', pron:'uát abáut jáierarki — is it véri fórmal?'},
    {speaker:'alumno', en:'Not too formal — we have a strong feedback culture here.', es:'No muy formal — tenemos una fuerte cultura de retroalimentación acá.', pron:'nat tu fórmal — uí jav a strong fíidbak cálchur jíar.'},
    {speaker:'maestro', en:'Do you allow remote work, or flexible hours?', es:'¿Permiten trabajo remoto, u horarios flexibles?', pron:'du iú alaú rimóut uork, or fléxibol áuars?'},
    {speaker:'alumno', en:'Both — remote work and flexible hours are part of our office culture.', es:'Ambos — el trabajo remoto y los horarios flexibles son parte de nuestra cultura de oficina.', pron:'bóuz — rimóut uork and fléxibol áuars ar part of áur áfis cálchur.'}
  ],
  91: [
    {speaker:'maestro', en:'As a matter of fact, this quarter went well, to sum up.', es:'De hecho, este trimestre salió bien, para resumir.', pron:'as a máter of fact, dis cuórter uént uél, tu sam ap.'},
    {speaker:'alumno', en:'On top of that, either way, we hit our targets.', es:'Además de eso, de cualquier manera, alcanzamos nuestras metas.', pron:'on tap of dat, íder uéi, uí jit áur tárguets.'},
    {speaker:'maestro', en:'Needless to say, all things considered, it was a good quarter.', es:'No hace falta decir, considerando todo, que fue un buen trimestre.', pron:'nídles tu séi, ol zings cansíderd, it uás a gud cuórter.'},
    {speaker:'alumno', en:'At the end of the day, for the most part, the team did great.', es:'Al final del día, en su mayor parte, el equipo hizo un gran trabajo.', pron:'at de end of de déi, for de móust part, de tíim did gréit.'},
    {speaker:'maestro', en:'As a matter of fact, I\'m proud of everyone.', es:'De hecho, estoy orgulloso de todos.', pron:'as a máter of fact, áim práud of évriuan.'},
    {speaker:'alumno', en:'For the most part, so am I — well done, team.', es:'En su mayor parte, yo también — bien hecho, equipo.', pron:'for de móust part, sóu am ái — uél dan, tíim.'}
  ],
  92: [
    {speaker:'maestro', en:'I need a loan — what\'s the interest rate right now?', es:'Necesito un préstamo — ¿cuál es la tasa de interés ahora mismo?', pron:'ái níid a lóun — uáts de ínterest réit ráit náu?'},
    {speaker:'alumno', en:'It depends on your credit score. Do you have a savings account with us?', es:'Depende de tu puntaje crediticio. ¿Tienes una cuenta de ahorros con nosotros?', pron:'it dipénds on iór crédit scor. du iú jav a séivings acáunt uid as?'},
    {speaker:'maestro', en:'Yes, and a checking account too. I want to transfer funds between them.', es:'Sí, y una cuenta corriente también. Quiero transferir fondos entre ellas.', pron:'iés, and a chéking acáunt tu. ái uánt tu tránsfer fands bituíin dem.'},
    {speaker:'alumno', en:'Sure, I can help with that. Would you like to speak with a financial advisor?', es:'Claro, puedo ayudar con eso. ¿Te gustaría hablar con un asesor financiero?', pron:'shur, ái can jelp uid dat. uud iú láik tu spíik uid a fainánshial advaísor?'},
    {speaker:'maestro', en:'I want to invest in the stock market, actually.', es:'En realidad, quiero invertir en el mercado de valores.', pron:'ái uánt tu invést in de stak márket, áctiuali.'},
    {speaker:'alumno', en:'A financial advisor can help with budget planning and investing too.', es:'Un asesor financiero puede ayudar con la planificación de presupuesto e inversión también.', pron:'a fainánshial advaísor can jelp uid báchet pláning and invésting tu.'},
    {speaker:'maestro', en:'Is now a good time to invest in stocks?', es:'¿Es un buen momento ahora para invertir en acciones?', pron:'is náu a gud táim tu invést in stacs?'},
    {speaker:'alumno', en:'Let\'s review your budget planning first, then decide together.', es:'Revisemos primero tu planificación de presupuesto, después decidimos juntos.', pron:'lets riviú iór báchet pláning ferst, den disáid tugéder.'}
  ],
  93: [
    {speaker:'maestro', en:'I need to file taxes before the end of the fiscal year.', es:'Necesito presentar impuestos antes del fin del año fiscal.', pron:'ái níid tu fáil táxis bifór de end of de físcal íar.'},
    {speaker:'alumno', en:'Our accountant is reviewing your tax return now.', es:'Nuestro contador está revisando tu declaración de impuestos ahora.', pron:'áur acáuntant is riviúing iór tax ritérn náu.'},
    {speaker:'maestro', en:'What about our revenue and expenses this year?', es:'¿Qué tal nuestros ingresos y gastos este año?', pron:'uát abáut áur révenu and expénsis dis íar?'},
    {speaker:'alumno', en:'Revenue is up, but expenses grew too — the profit margin is still healthy.', es:'Los ingresos subieron, pero los gastos también crecieron — el margen de ganancia sigue siendo saludable.', pron:'révenu is ap, bat expénsis gru tu — de práfit márchin is stil jélzi.'},
    {speaker:'maestro', en:'Will there be an audit this year?', es:'¿Habrá una auditoría este año?', pron:'uil der bi an ódit dis íar?'},
    {speaker:'alumno', en:'Possibly — keep every receipt in case of an audit.', es:'Posiblemente — guarda cada recibo por si hay una auditoría.', pron:'pásibli — kíip évri risíit in kéis of an ódit.'},
    {speaker:'maestro', en:'Is this expense deductible?', es:'¿Este gasto es deducible?', pron:'is dis expéns didáctibol?'},
    {speaker:'alumno', en:'Yes, that one is deductible — I\'ve already noted it for the tax return.', es:'Sí, ese es deducible — ya lo anoté para la declaración de impuestos.', pron:'iés, dat uán is didáctibol — áiv olrédi nóutid it for de tax ritérn.'}
  ],
  94: [
    {speaker:'maestro', en:'We need to compromise to reach a win-win situation.', es:'Necesitamos ceder para llegar a una situación de beneficio mutuo.', pron:'uí níid tu cámpromáis tu ríich a uín-uín situéishion.'},
    {speaker:'alumno', en:'I understand, but what\'s our leverage in this deal?', es:'Entiendo, pero ¿cuál es nuestra ventaja en este trato?', pron:'ái anderstánd, bat uáts áur léverich in dis díil?'},
    {speaker:'maestro', en:'What\'s the bottom line for you?', es:'¿Cuál es lo esencial para ti?', pron:'uáts de bátom láin for iú?'},
    {speaker:'alumno', en:'The bottom line is fair pricing — I am willing to compromise a little.', es:'Lo esencial es un precio justo — estoy dispuesto a ceder un poco.', pron:'de bátom láin is fer práising — ái am uíling tu cámpromáis a lítol.'},
    {speaker:'maestro', en:'Can you concede on the delivery date at least?', es:'¿Puedes ceder en la fecha de entrega al menos?', pron:'can iú cansíid on de delíveri déit at líist?'},
    {speaker:'alumno', en:'I can concede, to concede that for mutual benefit, yes.', es:'Puedo ceder, ceder eso por beneficio mutuo, sí.', pron:'ái can cansíid, tu cansíid dat for miúchual bénefit, iés.'},
    {speaker:'maestro', en:'Let\'s go back to the negotiation table then.', es:'Volvamos a la mesa de negociación entonces.', pron:'lets góu bak tu de nigoushiéishion téibol den.'},
    {speaker:'alumno', en:'Agreed — with a counterproposal, we should be able to reach an agreement soon.', es:'De acuerdo — con una contrapropuesta, deberíamos poder llegar a un acuerdo pronto.', pron:'agríid — uid a cáunterpropóusal, uí shud bi éibol tu ríich an agríiment súun.'}
  ],
  95: [
    {speaker:'maestro', en:'There\'s a conflict — let\'s try to resolve this together.', es:'Hay un conflicto — tratemos de resolver esto juntos.', pron:'ders a cánflict — lets trái tu risólv dis tugéder.'},
    {speaker:'alumno', en:'We might need a mediator to find common ground.', es:'Podríamos necesitar un mediador para encontrar un punto en común.', pron:'uí máit níid a mídieitor tu fáind cámon gráund.'},
    {speaker:'maestro', en:'Let\'s try to listen actively, and use a respectful tone.', es:'Tratemos de escuchar activamente, y usemos un tono respetuoso.', pron:'lets trái tu lísen áctivli, and iús a rispéctful tóun.'},
    {speaker:'alumno', en:'Agreed — we need to clarify things, so we can move forward.', es:'De acuerdo — necesitamos aclarar las cosas, para poder avanzar.', pron:'agríid — uí níid tu clárifái zings, sóu uí can múuv fórward.'},
    {speaker:'maestro', en:'Is the conflict resolved now?', es:'¿El conflicto está resuelto ahora?', pron:'is de cánflict risólvd náu?'},
    {speaker:'alumno', en:'Almost — let\'s try to resolve this fully before we try to move forward.', es:'Casi — tratemos de resolver esto por completo antes de tratar de avanzar.', pron:'ólmoust — lets trái tu risólv dis fúli bifór uí trái tu múuv fórward.'},
    {speaker:'maestro', en:'Thank you for helping us find common ground.', es:'Gracias por ayudarnos a encontrar un punto en común.', pron:'zenk iú for jélping as fáind cámon gráund.'},
    {speaker:'alumno', en:'Of course — a respectful tone always helps to resolve things.', es:'Por supuesto — un tono respetuoso siempre ayuda a resolver las cosas.', pron:'of cors — a rispéctful tóun ólueis jelps tu risólv zings.'}
  ],
  96: [
    {speaker:'maestro', en:'Unit eight is done — more than half done now!', es:'La Unidad Ocho está lista — ¡ya más de la mitad hecha!', pron:'iúnit éit is dan — mor dan jaf dan náu!'},
    {speaker:'alumno', en:'Keep pushing — this progress was well earned.', es:'Sigue adelante — este progreso fue bien merecido.', pron:'kíip púshing — dis prógres uás uél érnd.'},
    {speaker:'maestro', en:'You\'re in the final stretch now.', es:'Ya estás en el tramo final ahora.', pron:'iór in de fáinal strech náu.'},
    {speaker:'alumno', en:'I know — this progress was well earned after so much practice.', es:'Lo sé — este progreso fue bien merecido después de tanta práctica.', pron:'ái nóu — dis prógres uás uél érnd áfter sóu mach práctis.'},
    {speaker:'maestro', en:'See you in unit nine, next unit!', es:'¡Nos vemos en la Unidad Nueve, la próxima unidad!', pron:'síi iú in iúnit náin, next iúnit!'},
    {speaker:'alumno', en:'Thanks — see you in unit nine!', es:'¡Gracias — nos vemos en la Unidad Nueve!', pron:'zenks — síi iú in iúnit náin!'}
  ],
  97: [
    {speaker:'maestro', en:'I am writing to follow up on our meeting — this is about email etiquette, check the subject line for details.', es:'Te escribo para dar seguimiento a nuestra reunión — esto es sobre etiqueta de correo electrónico, revisa el asunto para más detalles.', pron:'ái am ráiting tu fálou ap on áur míiting — dis is abáut íimeil étiket, chek de sábyect láin for ditéils.'},
    {speaker:'alumno', en:'Sure, I see it, along with the CC and BCC on this email.', es:'Claro, lo veo, junto con el CC y CCO en este correo.', pron:'shur, ái síi it, alóng uid de síi-síi and bíi-síi-síi on dis íimeil.'},
    {speaker:'maestro', en:'Is there an attachment I should review?', es:'¿Hay un adjunto que debería revisar?', pron:'is der an atáchment ái shud riviú?'},
    {speaker:'alumno', en:'Yes, please open the attachment before I send my reply.', es:'Sí, por favor abre el adjunto antes de que envíe mi respuesta.', pron:'iés, plíis óupen de atáchment bifór ái send mái riplái.'},
    {speaker:'maestro', en:'Did you use a formal greeting and formal closing?', es:'¿Usaste un saludo formal y un cierre formal?', pron:'did iú iús a fórmal gríiting and fórmal clóusing?'},
    {speaker:'alumno', en:'Of course — I always try to draft carefully and to proofread before sending.', es:'Por supuesto — siempre trato de redactar con cuidado y corregir antes de enviar.', pron:'of cors — ái ólueis trái tu draft kérfuli and tu prúufriid bifór sénding.'},
    {speaker:'maestro', en:'What about the tone — is it too casual?', es:'¿Y qué tal el tono — es demasiado casual?', pron:'uát abáut de tóun — is it tu cáshual?'},
    {speaker:'alumno', en:'No, the tone is professional. Should I reply all, or just to you?', es:'No, el tono es profesional. ¿Debería responder a todos, o solo a ti?', pron:'nóu, de tóun is proféshional. shud ái riplái ol, or yast tu iú?'}
  ],
  98: [
    {speaker:'maestro', en:'What\'s our first task for this project, and what\'s the deliverable?', es:'¿Cuál es nuestra primera tarea para este proyecto, y cuál es el entregable?', pron:'uáts áur ferst task for dis práchect, and uáts de dilíverabol?'},
    {speaker:'alumno', en:'Let\'s define the scope first, and identify every stakeholder.', es:'Definamos el alcance primero, e identifiquemos a cada interesado.', pron:'lets difáin de scóup ferst, and aidéntifái évri stéikjolder.'},
    {speaker:'maestro', en:'Did we have the kickoff meeting yet?', es:'¿Ya tuvimos la reunión de arranque?', pron:'did uí jav de kíkof míiting iét?'},
    {speaker:'alumno', en:'Yes, and the timeline is set, with resource allocation confirmed.', es:'Sí, y el cronograma está fijado, con la asignación de recursos confirmada.', pron:'iés, and de táimláin is set, uid risórs alokéishion canférmd.'},
    {speaker:'maestro', en:'Who\'s the project manager for this?', es:'¿Quién es el gerente de proyecto para esto?', pron:'jus de práchect mánayer for dis?'},
    {speaker:'alumno', en:'I am — and I\'ve already flagged a few risks and one dependency.', es:'Soy yo — y ya señalé algunos riesgos y una dependencia.', pron:'ái am — and áiv olrédi flágd a fiú risks and uán dipéndensi.'},
    {speaker:'maestro', en:'The project is on track then?', es:'¿El proyecto va bien encaminado entonces?', pron:'de práchect is on trak den?'},
    {speaker:'alumno', en:'The project is on track, yes — no major risk right now.', es:'El proyecto va bien encaminado, sí — sin riesgo mayor por ahora.', pron:'de práchect is on trak, iés — nóu méijor risk ráit náu.'}
  ],
  99: [
    {speaker:'maestro', en:'Does this product meet our quality control standard?', es:'¿Este producto cumple con nuestro estándar de control de calidad?', pron:'das dis prádact míit áur cuáliti cantról stándard?'},
    {speaker:'alumno', en:'Let\'s do an inspection first, to check for any defect.', es:'Hagamos una inspección primero, para revisar si hay algún defecto.', pron:'lets du an inspékshion ferst, tu chek for éni dífect.'},
    {speaker:'maestro', en:'Is it in compliance with the certification requirements?', es:'¿Está en cumplimiento con los requisitos de certificación?', pron:'is it in campláiens uid de sertifikéishion ricuáirments?'},
    {speaker:'alumno', en:'Yes, quality assurance confirmed it meets standards completely.', es:'Sí, aseguramiento de calidad confirmó que cumple con los estándares por completo.', pron:'iés, cuáliti ashúrans canférmd it míits stándards camplíitli.'},
    {speaker:'maestro', en:'Did we follow the checklist during the approval process?', es:'¿Seguimos la lista de verificación durante el proceso de aprobación?', pron:'did uí fálou de chéklist dúring de aprúval práses?'},
    {speaker:'alumno', en:'Yes, the checklist was followed step by step.', es:'Sí, la lista de verificación se siguió paso a paso.', pron:'iés, de chéklist uás fáloud step bái step.'},
    {speaker:'maestro', en:'So does it manage to meet standards fully?', es:'¿Entonces logra cumplir con los estándares por completo?', pron:'sóu das it mánach tu míit stándards fúli?'},
    {speaker:'alumno', en:'This meets every requirement — approval process complete.', es:'Esto cumple con cada requisito — proceso de aprobación completo.', pron:'dis míits évri ricuáirment — aprúval práses camplíit.'}
  ],
  100: [
    {speaker:'maestro', en:'A customer is unhappy — how\'s our complaint handling for this?', es:'Un cliente no está contento — ¿cómo es nuestro manejo de quejas para esto?', pron:'a cástomer is anjápi — jáus áur campléint jándling for dis?'},
    {speaker:'alumno', en:'Let\'s use service recovery — we will make this right.', es:'Usemos recuperación de servicio — vamos a arreglar esto.', pron:'lets iús sérvis rikáveri — uí uil méik dis ráit.'},
    {speaker:'maestro', en:'Should we mention our loyalty program too?', es:'¿Deberíamos mencionar nuestro programa de lealtad también?', pron:'shud uí ménshion áur lóialti prógram tu?'},
    {speaker:'alumno', en:'Yes, and let\'s think about the whole customer journey, with empathy.', es:'Sí, y pensemos en todo el recorrido del cliente, con empatía.', pron:'iés, and lets zink abáut de jóul cástomer yérni, uid émpazi.'},
    {speaker:'maestro', en:'Is there an escalation path for serious complaints?', es:'¿Hay un camino de escalamiento para quejas serias?', pron:'is der an escaléishion paz for síirias campléints?'},
    {speaker:'alumno', en:'Yes, and we always send a satisfaction survey after.', es:'Sí, y siempre enviamos una encuesta de satisfacción después.', pron:'iés, and uí ólueis send a satisfákshion sérvei áfter.'},
    {speaker:'maestro', en:'Does this help with customer retention?', es:'¿Esto ayuda con la retención de clientes?', pron:'das dis jelp uid cástomer riténshion?'},
    {speaker:'alumno', en:'Definitely — personalized service builds real customer satisfaction and retention.', es:'Definitivamente — el servicio personalizado genera verdadera satisfacción y retención de clientes.', pron:'définitli — pérsonalaizd sérvis bilds ríal cástomer satisfákshion and riténshion.'}
  ],
  101: [
    {speaker:'maestro', en:'We need a crisis management plan — do we have a contingency plan ready?', es:'Necesitamos un plan de gestión de crisis — ¿tenemos un plan de contingencia listo?', pron:'uí níid a cráisis mánechment plan — du uí jav a cantínyensi plan rédi?'},
    {speaker:'alumno', en:'Yes, and we\'ve assigned a spokesperson for the press release.', es:'Sí, y ya asignamos un vocero para el comunicado de prensa.', pron:'iés, and uív asáind a spóukspersan for de pres rilíis.'},
    {speaker:'maestro', en:'Is this about damage control, or full transparency?', es:'¿Esto es sobre control de daños, o transparencia total?', pron:'is dis abáut dámich cantról, or fúl transpárensi?'},
    {speaker:'alumno', en:'Both — stakeholder communication needs full transparency.', es:'Ambos — la comunicación con los interesados necesita transparencia total.', pron:'bóuz — stéikjolder camiunikéishion níids fúl transpárensi.'},
    {speaker:'maestro', en:'What\'s our emergency response plan?', es:'¿Cuál es nuestro plan de respuesta de emergencia?', pron:'uáts áur emérgensi rispáns plan?'},
    {speaker:'alumno', en:'It\'s ready — we are committed to protecting our reputation, and we want to reassure everyone.', es:'Está listo — estamos comprometidos a proteger nuestra reputación, y queremos tranquilizar a todos.', pron:'its rédi — uí ar camítid tu pratécting áur repiutéishion, and uí uánt tu riashúr évriuan.'},
    {speaker:'maestro', en:'Should the spokesperson reassure the public directly?', es:'¿El vocero debería tranquilizar al público directamente?', pron:'shud de spóukspersan riashúr de páblic diréctli?'},
    {speaker:'alumno', en:'Yes, the spokesperson will try to reassure them in the press release.', es:'Sí, el vocero va a tratar de tranquilizarlos en el comunicado de prensa.', pron:'iés, de spóukspersan uil trái tu riashúr dem in de pres rilíis.'}
  ],
  102: [
    {speaker:'maestro', en:'We\'re trying to reduce our carbon footprint through innovation.', es:'Estamos tratando de reducir nuestra huella de carbono a través de la innovación.', pron:'uír tráing tu ridiús áur cárbon fútprint zru inovéishion.'},
    {speaker:'alumno', en:'That\'s great for sustainability — are we using renewable energy too?', es:'Eso es genial para la sostenibilidad — ¿también estamos usando energía renovable?', pron:'dats gréit for sastéinabíliti — ar uí iúsing rinúabol énerchi tu?'},
    {speaker:'maestro', en:'Yes, and we started an eco-friendly recycling program.', es:'Sí, y comenzamos un programa de reciclaje ecológico.', pron:'iés, and uí stártid an íco-fréndli risáikling prógram.'},
    {speaker:'alumno', en:'Is this part of our corporate responsibility plan?', es:'¿Esto es parte de nuestro plan de responsabilidad corporativa?', pron:'is dis part of áur córporeit rispansibíliti plan?'},
    {speaker:'maestro', en:'Exactly — it\'s a green initiative with real long-term impact.', es:'Exacto — es una iniciativa verde con un impacto real a largo plazo.', pron:'exáctli — its a gríin inísheitiv uid ríal long-term ímpact.'},
    {speaker:'alumno', en:'We are trying to reduce waste across every department.', es:'Estamos tratando de reducir los desechos en todos los departamentos.', pron:'uí ar tráing tu ridiús uéist acrós évri dipártment.'},
    {speaker:'maestro', en:'That\'s impressive — sustainability and innovation go together well.', es:'Eso es impresionante — la sostenibilidad y la innovación van bien juntas.', pron:'dats imprésiv — sastéinabíliti and inovéishion góu tugéder uél.'},
    {speaker:'alumno', en:'I agree — this green initiative will have a long-term impact.', es:'Estoy de acuerdo — esta iniciativa verde va a tener un impacto a largo plazo.', pron:'ái agríi — dis gríin inísheitiv uil jav a long-term ímpact.'}
  ],
  103: [
    {speaker:'maestro', en:'To put it simply, this week went well.', es:'Para decirlo simple, esta semana salió bien.', pron:'tu put it símpli, dis uíik uént uél.'},
    {speaker:'alumno', en:'In short, above all, the team stayed focused.', es:'En resumen, sobre todo, el equipo se mantuvo enfocado.', pron:'in short, abáv ol, de tíim stéid fóucasd.'},
    {speaker:'maestro', en:'First and foremost, we hit our deadline.', es:'Ante todo, cumplimos con nuestra fecha límite.', pron:'ferst and fórmoust, uí jit áur dédláin.'},
    {speaker:'alumno', en:'Last but not least, on the whole, everyone helped.', es:'Por último pero no menos importante, en general, todos ayudaron.', pron:'last bat nat líist, on de jóul, évriuan jelpd.'},
    {speaker:'maestro', en:'Generally speaking, when it comes down to it, we did great.', es:'En términos generales, cuando se trata de eso, lo hicimos genial.', pron:'yéneráli spíiking, uén it cams dáun tu it, uí did gréit.'},
    {speaker:'alumno', en:'To put it simply, I\'m happy with this week.', es:'Para decirlo simple, estoy contento con esta semana.', pron:'tu put it símpli, áim jápi uid dis uíik.'}
  ],
  104: [
    {speaker:'maestro', en:'This shipment requires an export license before it can leave.', es:'Este envío requiere una licencia de exportación antes de poder salir.', pron:'dis shípment ricuáirs an expórt láisens bifór it can líiv.'},
    {speaker:'alumno', en:'Right, and we also need to pay the import duty on arrival.', es:'Correcto, y también necesitamos pagar el arancel de importación a la llegada.', pron:'ráit, and uí ólsou níid tu péi de impórt diúti on aráival.'},
    {speaker:'maestro', en:'Is customs clearance ready for this bill of lading?', es:'¿El despacho de aduana está listo para este conocimiento de embarque?', pron:'is cástoms clírans rédi for dis bil of léiding?'},
    {speaker:'alumno', en:'Yes, along with the letter of credit and the incoterms.', es:'Sí, junto con la carta de crédito y los incoterms.', pron:'iés, alóng uid de léter of crédit and de íncoterms.'},
    {speaker:'maestro', en:'Do we need a freight forwarder for this trade agreement?', es:'¿Necesitamos un agente de carga para este acuerdo comercial?', pron:'du uí níid a fréit fóruarder for dis tréid agríiment?'},
    {speaker:'alumno', en:'Yes, and confirm the country of destination too.', es:'Sí, y confirma el país de destino también.', pron:'iés, and canférm de cántri of destinéishion tu.'},
    {speaker:'maestro', en:'What about cargo insurance for this shipment?', es:'¿Y qué tal el seguro de carga para este envío?', pron:'uát abáut cárgo inshúrans for dis shípment?'},
    {speaker:'alumno', en:'This shipment requires cargo insurance — already added to the paperwork.', es:'Este envío requiere seguro de carga — ya se agregó a los documentos.', pron:'dis shípment ricuáirs cárgo inshúrans — olrédi ádid tu de péiperuork.'}
  ],
  105: [
    {speaker:'maestro', en:'How\'s the production line today — is it running smoothly?', es:'¿Cómo va la línea de producción hoy — está funcionando sin problemas?', pron:'jáus de pradákshion láin tudéi — is it ráning smúzli?'},
    {speaker:'alumno', en:'The production line is working well, with plenty of raw materials.', es:'La línea de producción está funcionando bien, con muchos materiales crudos.', pron:'de pradákshion láin is uórking uél, uid plénti of ro matírials.'},
    {speaker:'maestro', en:'What about the assembly process at the manufacturing plant?', es:'¿Y qué tal el proceso de ensamblaje en la planta de manufactura?', pron:'uát abáut de asémbli práses at de manyufáchuring plant?'},
    {speaker:'alumno', en:'Output is high, thanks to automation and good machinery.', es:'La producción es alta, gracias a la automatización y buena maquinaria.', pron:'áutput is jái, zenks tu otoméishion and gud mashínari.'},
    {speaker:'maestro', en:'Any downtime today?', es:'¿Algún tiempo de inactividad hoy?', pron:'éni dáuntaim tudéi?'},
    {speaker:'alumno', en:'No downtime — efficiency has been great across the whole line.', es:'Sin tiempo de inactividad — la eficiencia ha sido genial en toda la línea.', pron:'nóu dáuntaim — efíshiensi jas bin gréit acrós de jóul láin.'},
    {speaker:'maestro', en:'Good, the production line is producing at full capacity then.', es:'Bien, la línea de producción está produciendo a máxima capacidad entonces.', pron:'gud, de pradákshion láin is pradiúsing at fúl capásiti den.'},
    {speaker:'alumno', en:'Exactly — the production line is performing excellently today.', es:'Exacto — la línea de producción está rindiendo excelentemente hoy.', pron:'exáctli — de pradákshion láin is perfórming éxelentli tudéi.'}
  ],
  106: [
    {speaker:'maestro', en:'I would like to apply for a transfer within human resources.', es:'Me gustaría solicitar un traslado dentro de recursos humanos.', pron:'ái uud láik tu aplái for a tránsfer uidín jiúman risórsis.'},
    {speaker:'alumno', en:'Sure, let\'s talk about employee benefits and the onboarding process too.', es:'Claro, hablemos de los beneficios de los empleados y del proceso de incorporación también.', pron:'shur, lets tok abáut emplóii bénefits and de anbórding práses tu.'},
    {speaker:'maestro', en:'Is there a performance review before that?', es:'¿Hay una evaluación de desempeño antes de eso?', pron:'is der a perfórmans riviú bifór dat?'},
    {speaker:'alumno', en:'Yes, and there\'s also a training program available.', es:'Sí, y también hay un programa de capacitación disponible.', pron:'iés, and ders ólsou a tréining prógram aveilábol.'},
    {speaker:'maestro', en:'What about a promotion instead of a transfer?', es:'¿Y qué tal un ascenso en vez de un traslado?', pron:'uát abáut a pramóushion instéd of a tránsfer?'},
    {speaker:'alumno', en:'That\'s possible — human resources can look into a promotion.', es:'Eso es posible — recursos humanos puede investigar un ascenso.', pron:'dats pásibol — jiúman risórsis can luk íntu a pramóushion.'},
    {speaker:'maestro', en:'Is there a workplace policy about resignation, or termination?', es:'¿Hay una política laboral sobre renuncia, o despido?', pron:'is der a uórkpleis pálisi abáut resignéishion, or terminéishion?'},
    {speaker:'alumno', en:'Yes, and we also value diversity and inclusion in every decision.', es:'Sí, y también valoramos la diversidad e inclusión en cada decisión.', pron:'iés, and uí ólsou váliu daivérsiti and inclúshion in évri disíshion.'}
  ],
  107: [
    {speaker:'maestro', en:'I\'m working on my sales pitch for tomorrow\'s cold call.', es:'Estoy trabajando en mi discurso de venta para la llamada en frío de mañana.', pron:'áim uórking on mái séils pitch for tumórous cóuld col.'},
    {speaker:'alumno', en:'Good — remember lead generation is key for the sales funnel.', es:'Bien — recuerda que la generación de leads es clave para el embudo de ventas.', pron:'gud — rimémber líid yeneréishion is kíi for de séils fánel.'},
    {speaker:'maestro', en:'Do you think you can close this deal, or try to close a deal like this?', es:'¿Crees que puedes cerrar este trato, o intentar cerrar un trato como este?', pron:'du iú zink iú can clóus dis díil, or trái tu clóus a díil láik dis?'},
    {speaker:'alumno', en:'I can close this deal, yes — I\'m confident about my quota.', es:'Puedo cerrar este trato, sí — estoy seguro sobre mi cuota.', pron:'ái can clóus dis díil, iés — áim cánfident abáut mái cuóuta.'},
    {speaker:'maestro', en:'What about commission on this sale?', es:'¿Y qué tal la comisión en esta venta?', pron:'uát abáut camíshion on dis séil?'},
    {speaker:'alumno', en:'Commission looks good, and we should try to cross-sell too.', es:'La comisión se ve bien, y deberíamos tratar de hacer venta cruzada también.', pron:'camíshion luks gud, and uí shud trái tu cros-sel tu.'},
    {speaker:'maestro', en:'Did you hit your sales target this month?', es:'¿Alcanzaste tu meta de ventas este mes?', pron:'did iú jit iór séils tárguet dis manz?'},
    {speaker:'alumno', en:'Almost — I can close this deal and hit my sales target today.', es:'Casi — puedo cerrar este trato y alcanzar mi meta de ventas hoy.', pron:'ólmoust — ái can clóus dis díil and jit mái séils tárguet tudéi.'}
  ],
  108: [
    {speaker:'maestro', en:'Welcome to unit nine — two thirds done!', es:'¡Bienvenido a la Unidad Nueve — dos tercios hecho!', pron:'uélcam tu iúnit náin — tú zerds dan!'},
    {speaker:'alumno', en:'We\'re staying strong through this whole course.', es:'Nos mantenemos fuertes a lo largo de todo este curso.', pron:'uír stéing strong zru dis jóul cors.'},
    {speaker:'maestro', en:'I\'m proud of you for getting this far.', es:'Estoy orgulloso de ti por llegar hasta acá.', pron:'áim práud of iú for guéting dis far.'},
    {speaker:'alumno', en:'Thank you — this feels like halfway to mastery.', es:'Gracias — esto se siente como a mitad de camino hacia el dominio.', pron:'zenk iú — dis fíils láik jáfuei tu mástri.'},
    {speaker:'maestro', en:'See you in unit ten, next unit!', es:'¡Nos vemos en la Unidad Diez, la próxima unidad!', pron:'síi iú in iúnit ten, next iúnit!'},
    {speaker:'alumno', en:'Thanks, see you in unit ten!', es:'¡Gracias, nos vemos en la Unidad Diez!', pron:'zenks, síi iú in iúnit ten!'}
  ],
  109: [
    {speaker:'maestro', en:'I\'m interested in real estate — I am looking to rent an apartment downtown.', es:'Estoy interesado en bienes raíces — estoy buscando alquilar un apartamento en el centro.', pron:'áim íntrestid in ríal estéit — ái am lúking tu rent an apártment dáuntaun.'},
    {speaker:'alumno', en:'Would you like to lease it, or do you prefer to rent month to month?', es:'¿Te gustaría arrendarlo, o prefieres alquilar mes a mes?', pron:'uud iú láik tu líis it, or du iú prifér tu rent manz tu manz?'},
    {speaker:'maestro', en:'What\'s the security deposit for this place?', es:'¿Cuál es el depósito de garantía para este lugar?', pron:'uáts de sikiúriti dipázit for dis pléis?'},
    {speaker:'alumno', en:'It\'s one month\'s rent, and the landlord requires a mortgage-free tenant history.', es:'Es el alquiler de un mes, y el propietario requiere un historial de inquilino sin hipoteca.', pron:'its uán manzs rent, and de lándlord ricuáiars a mórguich-fríi ténant jístori.'},
    {speaker:'maestro', en:'What about the property value — is it going up?', es:'¿Y qué tal el valor de la propiedad — está subiendo?', pron:'uát abáut de práperti váliu — is it góing ap?'},
    {speaker:'alumno', en:'Yes, property value here has been rising steadily.', es:'Sí, el valor de la propiedad acá ha estado subiendo constantemente.', pron:'iés, práperti váliu jíar jas bin ráising stédili.'},
    {speaker:'maestro', en:'Do I need a down payment if I decide to buy instead?', es:'¿Necesito una cuota inicial si decido comprar en cambio?', pron:'du ái níid a dáun péiment if ái disáid tu bái instéd?'},
    {speaker:'alumno', en:'Yes, and a real estate agent can help you with that down payment.', es:'Sí, y un agente de bienes raíces puede ayudarte con esa cuota inicial.', pron:'iés, and a ríal estéit éichent can jelp iú uid dat dáun péiment.'}
  ],
  110: [
    {speaker:'maestro', en:'I need to file a claim on my insurance policy.', es:'Necesito presentar un reclamo en mi póliza de seguro.', pron:'ái níid tu fáil a cléim on mái inshúrans pálisi.'},
    {speaker:'alumno', en:'Sure, is this covered under your coverage limit?', es:'Claro, ¿esto está cubierto bajo tu límite de cobertura?', pron:'shur, is dis cáverd ánder iór cáverich límit?'},
    {speaker:'maestro', en:'What\'s my premium payment for this month?', es:'¿Cuál es mi pago de prima para este mes?', pron:'uáts mái prímium péiment for dis manz?'},
    {speaker:'alumno', en:'This is covered under your current premium — no extra charge.', es:'Esto está cubierto bajo tu prima actual — sin cargo extra.', pron:'dis is cáverd ánder iór cárent prímium — nóu éxtra charch.'},
    {speaker:'maestro', en:'Who\'s the beneficiary on this policy?', es:'¿Quién es el beneficiario en esta póliza?', pron:'jus de benefíshiari on dis pálisi?'},
    {speaker:'alumno', en:'You are the policyholder, so you can name any beneficiary.', es:'Tú eres el titular de la póliza, así que puedes nombrar a cualquier beneficiario.', pron:'iú ar de pálisijóulder, sóu iú can néim éni benefíshiari.'},
    {speaker:'maestro', en:'Does my insurance agent need to review the risk assessment first?', es:'¿Mi agente de seguros necesita revisar la evaluación de riesgo primero?', pron:'das mái inshúrans éichent níid tu riviú de risk asésment ferst?'},
    {speaker:'alumno', en:'Yes, unless there\'s an exclusion that applies to this claim.', es:'Sí, a menos que haya una exclusión que aplique a este reclamo.', pron:'iés, anlés ders an exclúshion dat apláis tu dis cléim.'}
  ],
  111: [
    {speaker:'maestro', en:'I have an appointment with a specialist today.', es:'Tengo una cita con un especialista hoy.', pron:'ái jav an apóintment uid a spéshalist tudéi.'},
    {speaker:'alumno', en:'Do you need a referral from your primary care physician first?', es:'¿Necesitas una referencia de tu médico de cabecera primero?', pron:'du iú níid a riféral fram iór práimeri ker físishian ferst?'},
    {speaker:'maestro', en:'Yes, and I want to check my health insurance copay too.', es:'Sí, y también quiero revisar el copago de mi seguro médico.', pron:'iés, and ái uánt tu chek mái jelz inshúrans cóupei tu.'},
    {speaker:'alumno', en:'The copay is small — did you get a diagnosis yet?', es:'El copago es pequeño — ¿ya tienes un diagnóstico?', pron:'de cóupei is smol — did iú guet a daiagnóusis iét?'},
    {speaker:'maestro', en:'Not yet, but we discussed a treatment plan already.', es:'Todavía no, pero ya discutimos un plan de tratamiento.', pron:'nat iét, bat uí discást a tríitment plan olrédi.'},
    {speaker:'alumno', en:'Good, let\'s schedule a follow-up visit then.', es:'Bien, programemos una visita de seguimiento entonces.', pron:'gud, lets squédiul a fálou-ap vísit den.'},
    {speaker:'maestro', en:'Should I go to urgent care instead if it gets worse?', es:'¿Debería ir a atención urgente en cambio si empeora?', pron:'shud ái góu tu érchent ker instéd if it guets uérs?'},
    {speaker:'alumno', en:'Yes, urgent care is available if you can\'t wait for the appointment.', es:'Sí, atención urgente está disponible si no puedes esperar la cita.', pron:'iés, érchent ker is aveilábol if iú cant uéit for de apóintment.'}
  ],
  112: [
    {speaker:'maestro', en:'I am enrolled in a certificate program this semester.', es:'Estoy inscrito en un programa de certificado este semestre.', pron:'ái am enróuld in a certíficat prógram dis siméster.'},
    {speaker:'alumno', en:'That\'s great — does the tuition include the full curriculum?', es:'Eso es genial — ¿la matrícula incluye el plan de estudios completo?', pron:'dats gréit — das de tiúshion inclúud de fúl kariculam?'},
    {speaker:'maestro', en:'Yes, and I even got a scholarship for it.', es:'Sí, y hasta conseguí una beca para eso.', pron:'iés, and ái íven gat a scálarship for it.'},
    {speaker:'alumno', en:'Are you also taking an online course for continuing education?', es:'¿También estás tomando un curso en línea para educación continua?', pron:'ar iú ólsou téiking an ónláin cors for cantíniuing edyukéishion?'},
    {speaker:'maestro', en:'Yes, it\'s part of my professional development plan.', es:'Sí, es parte de mi plan de desarrollo profesional.', pron:'iés, its part of mái proféshional divélopment plan.'},
    {speaker:'alumno', en:'Will you get a certificate of completion after?', es:'¿Vas a recibir un certificado de finalización después?', pron:'uil iú guet a certíficat of camplíshion áfter?'},
    {speaker:'maestro', en:'Yes, once enrollment ends and I finish the degree requirements.', es:'Sí, una vez que termine la inscripción y complete los requisitos del título.', pron:'iés, uáns enróulment ends and ái fínish de digríi ricuáirments.'},
    {speaker:'alumno', en:'Congratulations on your enrollment then!', es:'¡Felicitaciones por tu inscripción entonces!', pron:'cangrachuléishions on iór enróulment den!'},
    {speaker:'maestro', en:'Thank you — I\'m excited to finish this degree program.', es:'Gracias — estoy emocionado de terminar este programa de título.', pron:'zenk iú — áim exsáitid tu fínish dis digríi prógram.'}
  ],
  113: [
    {speaker:'maestro', en:'I need to renew my license at the government office.', es:'Necesito renovar mi licencia en la oficina de gobierno.', pron:'ái níid tu riniú mái láisens at de gávernment áfis.'},
    {speaker:'alumno', en:'Do you have the application form ready?', es:'¿Tienes el formulario de solicitud listo?', pron:'du iú jav de aplikéishion form rédi?'},
    {speaker:'maestro', en:'Yes, and my identification document too.', es:'Sí, y también mi documento de identificación.', pron:'iés, and mái aidentifikéishion dókiument tu.'},
    {speaker:'alumno', en:'What\'s the processing time for a license renewal?', es:'¿Cuál es el tiempo de procesamiento para una renovación de licencia?', pron:'uáts de práchesing táim for a láisens riniúal?'},
    {speaker:'maestro', en:'It varies — you might need an in-person appointment.', es:'Varía — podrías necesitar una cita en persona.', pron:'it véris — iú máit níid an in-pérson apóintment.'},
    {speaker:'alumno', en:'Can I do this through the online portal instead?', es:'¿Puedo hacer esto a través del portal en línea en cambio?', pron:'can ái du dis zru de ónláin pórtal instéd?'},
    {speaker:'maestro', en:'Yes, the online portal works for most permit renewals.', es:'Sí, el portal en línea funciona para la mayoría de las renovaciones de permisos.', pron:'iés, de ónláin pórtal uorks for móust pérmit riniúals.'},
    {speaker:'alumno', en:'Is there a fee payment required?', es:'¿Se requiere un pago de tarifa?', pron:'is der a fíi péiment ricuáird?'},
    {speaker:'maestro', en:'Yes, and you\'ll receive an approval letter once it\'s processed.', es:'Sí, y vas a recibir una carta de aprobación una vez que se procese.', pron:'iés, and iúl risíiv an aprúval léter uáns its prásest.'}
  ],
  114: [
    {speaker:'maestro', en:'As far as that goes, this project turned out well.', es:'En lo que respecta a eso, este proyecto salió bien.', pron:'as far as dat góus, dis práchect ternd áut uél.'},
    {speaker:'alumno', en:'Come to think of it, we did better than expected.', es:'Pensándolo bien, lo hicimos mejor de lo esperado.', pron:'cam tu zink of it, uí did béter dan expéctid.'},
    {speaker:'maestro', en:'Mind you, there were a few challenges along the way.', es:'Eso sí, hubo algunos desafíos en el camino.', pron:'máind iú, der uér a fiú chálenyis alóng de uéi.'},
    {speaker:'alumno', en:'That being said, at any rate, we finished on time.', es:'Dicho esto, de todas formas, terminamos a tiempo.', pron:'dat bíing sed, at éni réit, uí fínisht on táim.'},
    {speaker:'maestro', en:'For what it\'s worth, I think we did our best.', es:'Para lo que vale, creo que hicimos lo mejor que pudimos.', pron:'for uát its uorz, ái zink uí did áur best.'},
    {speaker:'alumno', en:'To make matters worse, if anything, we learned a lot too.', es:'Para colmo, si acaso, también aprendimos mucho.', pron:'tu méik máters uérs, if énizin, uí lernd a lat tu.'}
  ],
  115: [
    {speaker:'maestro', en:'Welcome to our car dealership! Would you like a test drive?', es:'¡Bienvenido a nuestra concesionaria de autos! ¿Te gustaría una prueba de manejo?', pron:'uélcam tu áur car díilership! uud iú láik a test dráiv?'},
    {speaker:'alumno', en:'Sure! Do you accept a trade-in for my old car?', es:'¡Claro! ¿Aceptan mi auto viejo como parte de pago?', pron:'shur! du iú accépt a tréid-in for mái óuld car?'},
    {speaker:'maestro', en:'Yes, and we have great financing options too.', es:'Sí, y también tenemos excelentes opciones de financiamiento.', pron:'iés, and uí jav gréit fainánsing ápshions tu.'},
    {speaker:'alumno', en:'What about the warranty, and the mileage on this one?', es:'¿Y qué tal la garantía, y el kilometraje de este?', pron:'uát abáut de uáranti, and de máilich on dis uán?'},
    {speaker:'maestro', en:'Low mileage, and a solid warranty included.', es:'Poco kilometraje, y una garantía sólida incluida.', pron:'lóu máilich, and a sálid uáranti inclúudid.'},
    {speaker:'alumno', en:'What would my monthly payment look like?', es:'¿Cómo se vería mi pago mensual?', pron:'uát uud mái mánzli péiment luk láik?'},
    {speaker:'maestro', en:'Let me calculate that after the vehicle inspection.', es:'Déjame calcular eso después de la inspección del vehículo.', pron:'let mi cálkiuleit dat áfter de víjicol inspékshion.'},
    {speaker:'alumno', en:'Perfect — I\'ll speak with your sales representative for the details.', es:'Perfecto — voy a hablar con tu representante de ventas para los detalles.', pron:'pérfect — áil spíik uid iór séils riprisentativ for de ditéils.'}
  ],
  116: [
    {speaker:'maestro', en:'We are moving to a new city next month.', es:'Nos mudamos a una ciudad nueva el próximo mes.', pron:'uí ar múuving tu a niú síti next manz.'},
    {speaker:'alumno', en:'Have you hired a moving company yet?', es:'¿Ya contrataste una empresa de mudanzas?', pron:'jav iú jáierd a múuving cámpani iét?'},
    {speaker:'maestro', en:'Yes, and we\'re already packing everything for the moving truck.', es:'Sí, y ya estamos empacando todo para el camión de mudanza.', pron:'iés, and uír olrédi páking évrizin for de múuving trak.'},
    {speaker:'alumno', en:'Do you need a storage unit for anything?', es:'¿Necesitas una unidad de almacenamiento para algo?', pron:'du iú níid a stórich iúnit for énizin?'},
    {speaker:'maestro', en:'Just for a few items — plus we need a change of address.', es:'Solo para algunos artículos — además necesitamos un cambio de dirección.', pron:'yast for a fiú áitems — plas uí níid a chéinch of adrés.'},
    {speaker:'alumno', en:'Don\'t forget the utility setup before the moving date.', es:'No te olvides de la instalación de servicios antes de la fecha de mudanza.', pron:'dont forguét de iútiliti sétap bifór de múuving déit.'},
    {speaker:'maestro', en:'What\'s the delivery window for our things?', es:'¿Cuál es la ventana de entrega para nuestras cosas?', pron:'uáts de delíveri uíndou for áur zings?'},
    {speaker:'alumno', en:'They gave us an inventory list, and a delivery window for next week.', es:'Nos dieron una lista de inventario, y una ventana de entrega para la próxima semana.', pron:'déi guéiv as an ínventori list, and a delíveri uíndou for next uíik.'}
  ],
  117: [
    {speaker:'maestro', en:'We\'re planning a formal event — should we consider fine dining?', es:'Estamos planeando un evento formal — ¿deberíamos considerar alta cocina?', pron:'uír pláning a fórmal ivént — shud uí cansíder fáin dáining?'},
    {speaker:'alumno', en:'Yes, and we\'ll need catering for the guest list too.', es:'Sí, y también vamos a necesitar servicio de banquetes para la lista de invitados.', pron:'iés, and uíl níid kétering for de guest list tu.'},
    {speaker:'maestro', en:'What about the seating arrangement?', es:'¿Y qué tal la disposición de los asientos?', pron:'uát abáut de síiting aréinchment?'},
    {speaker:'alumno', en:'I\'ll handle that, along with inviting a keynote speaker.', es:'Yo me encargo de eso, junto con invitar a un orador principal.', pron:'áil jándol dat, alóng uid inváiting a kíinóut spíiker.'},
    {speaker:'maestro', en:'Is this a corporate dinner, or something more casual?', es:'¿Esto es una cena corporativa, o algo más casual?', pron:'is dis a córporeit díner, or sámzin mor cáshual?'},
    {speaker:'alumno', en:'It\'s a corporate dinner — please RSVP by Friday.', es:'Es una cena corporativa — por favor confirma asistencia para el viernes.', pron:'its a córporeit díner — plíis ar-es-vi-pi bái fráidei.'},
    {speaker:'maestro', en:'What\'s the dress code for the venue?', es:'¿Cuál es el código de vestimenta para el lugar del evento?', pron:'uáts de dres kóud for de vénu?'},
    {speaker:'alumno', en:'Formal — the venue requires a strict dress code.', es:'Formal — el lugar del evento requiere un código de vestimenta estricto.', pron:'fórmal — de vénu ricuáiars a strict dres kóud.'}
  ],
  118: [
    {speaker:'maestro', en:'This app is powered by artificial intelligence and machine learning.', es:'Esta aplicación funciona con inteligencia artificial y aprendizaje automático.', pron:'dis ap is páuerd bái artifíshal intéliyens and mashín lérning.'},
    {speaker:'alumno', en:'Impressive — does it help with data analysis too?', es:'Impresionante — ¿también ayuda con el análisis de datos?', pron:'imprésiv — das it jelp uid déita análysis tu?'},
    {speaker:'maestro', en:'Yes, the algorithm handles data analysis as part of our digital transformation.', es:'Sí, el algoritmo maneja el análisis de datos como parte de nuestra transformación digital.', pron:'iés, de álgoritm jándols déita análysis as part of áur díchital transforméishion.'},
    {speaker:'alumno', en:'Is there a chatbot involved as well?', es:'¿También hay un chatbot involucrado?', pron:'is der a chátbat invólvd as uél?'},
    {speaker:'maestro', en:'Yes, and we\'ve improved cybersecurity through cloud computing.', es:'Sí, y hemos mejorado la ciberseguridad a través de la computación en la nube.', pron:'iés, and uív imprúuvd sáibersikiúriti zru cláud campiúting.'},
    {speaker:'alumno', en:'What\'s the latest tech trend in this space?', es:'¿Cuál es la última tendencia tecnológica en este espacio?', pron:'uáts de léitest tec trend in dis spéis?'},
    {speaker:'maestro', en:'Automation is the biggest tech trend right now.', es:'La automatización es la tendencia tecnológica más grande ahora mismo.', pron:'otoméishion is de bíguest tec trend ráit náu.'},
    {speaker:'alumno', en:'This is powered by some serious automation then.', es:'Esto funciona con automatización seria entonces.', pron:'dis is páuerd bái sam síirias otoméishion den.'},
    {speaker:'maestro', en:'Exactly — this is powered by cutting-edge automation and AI.', es:'Exacto — esto funciona con automatización de punta e inteligencia artificial.', pron:'exáctli — dis is páuerd bái cáting-ech otoméishion and éi-ái.'}
  ],
  119: [
    {speaker:'maestro', en:'What\'s your leadership style — do you believe in delegation?', es:'¿Cuál es tu estilo de liderazgo — crees en la delegación?', pron:'uáts iór líidership stáil — du iú bilíiv in delegéishion?'},
    {speaker:'alumno', en:'Yes, delegation helps with team motivation.', es:'Sí, la delegación ayuda con la motivación del equipo.', pron:'iés, delegéishion jelps uid tíim moutivéishion.'},
    {speaker:'maestro', en:'How do you track performance metrics?', es:'¿Cómo haces seguimiento de las métricas de desempeño?', pron:'jáu du iú trak perfórmans métrics?'},
    {speaker:'alumno', en:'Through regular one-on-one meetings, and employee engagement surveys.', es:'A través de reuniones individuales regulares, y encuestas de compromiso de empleados.', pron:'zru réguiular uán-on-uán míitings, and emplóii enguéichment sérveis.'},
    {speaker:'maestro', en:'Do you offer mentorship for growth?', es:'¿Ofreces mentoría para el crecimiento?', pron:'du iú áfer méntorship for gróuz?'},
    {speaker:'alumno', en:'Yes, mentorship is key to our succession planning.', es:'Sí, la mentoría es clave para nuestra planificación de sucesión.', pron:'iés, méntorship is kíi tu áur sacséshion pláning.'},
    {speaker:'maestro', en:'How would you describe your work culture?', es:'¿Cómo describirías tu cultura laboral?', pron:'jáu uud iú discráib iór uork cálchur?'},
    {speaker:'alumno', en:'Very collaborative — decision-making involves the whole team.', es:'Muy colaborativa — la toma de decisiones involucra a todo el equipo.', pron:'véri caláborativ — disíshion-méiking invólvs de jóul tíim.'},
    {speaker:'maestro', en:'I trust my team to make good decisions.', es:'Confío en que mi equipo tome buenas decisiones.', pron:'ái trast mái tíim tu méik gud disíshions.'},
    {speaker:'alumno', en:'That\'s a great leadership style — I trust my team the same way.', es:'Ese es un gran estilo de liderazgo — confío en mi equipo de la misma manera.', pron:'dats a gréit líidership stáil — ái trast mái tíim de séim uéi.'}
  ],
  120: [
    {speaker:'maestro', en:'Welcome to unit ten, review time!', es:'¡Bienvenido a la Unidad Diez, hora de repaso!', pron:'uélcam tu iúnit ten, riviú táim!'},
    {speaker:'alumno', en:'Two thirds done, with one third remaining.', es:'Dos tercios hecho, con un tercio restante.', pron:'tú zerds dan, uid uán zerd riméining.'},
    {speaker:'maestro', en:'Keep going — a real milestone reached today.', es:'Sigue adelante — un verdadero hito alcanzado hoy.', pron:'kíip góing — a ríal máilstoun ríichd tudéi.'},
    {speaker:'alumno', en:'Thank you, this milestone reached feels great.', es:'Gracias, este hito alcanzado se siente genial.', pron:'zenk iú, dis máilstoun ríichd fíils gréit.'},
    {speaker:'maestro', en:'See you in unit eleven, next unit!', es:'¡Nos vemos en la Unidad Once, la próxima unidad!', pron:'síi iú in iúnit iléven, next iúnit!'},
    {speaker:'alumno', en:'Thanks, see you in unit eleven!', es:'¡Gracias, nos vemos en la Unidad Once!', pron:'zenks, síi iú in iúnit iléven!'}
  ],
  121: [
    {speaker:'maestro', en:'We need to touch base on this project — I want to follow through on the plan.', es:'Necesitamos ponernos en contacto sobre este proyecto — quiero dar seguimiento al plan.', pron:'uí níid tu tach béis on dis práchect — ái uánt tu fálou zru on de plan.'},
    {speaker:'alumno', en:'Sure, we need to think outside the box to get the ball rolling.', es:'Claro, necesitamos pensar fuera de la caja para poner las cosas en marcha.', pron:'shur, uí níid tu zink áutsáid de bax tu guet de bol róuling.'},
    {speaker:'maestro', en:'It helps to be on the same page about the budget.', es:'Ayuda estar en la misma sintonía sobre el presupuesto.', pron:'it jelps tu bi on de séim péich abáut de báchet.'},
    {speaker:'alumno', en:'Yes, and we should try not to cut corners this time.', es:'Sí, y deberíamos tratar de no tomar atajos esta vez.', pron:'iés, and uí shud trái nat tu cat córners dis táim.'},
    {speaker:'maestro', en:'I always try to go the extra mile — I like to keep someone in the loop.', es:'Siempre trato de dar un esfuerzo extra — me gusta mantener a alguien al tanto.', pron:'ái ólueis trái tu góu de éxtra máil — ái láik tu kíip sámuan in de lup.'},
    {speaker:'alumno', en:'What do you bring to the table for this deal? I like to bring to the table real value.', es:'¿Qué aportas a este trato? Me gusta aportar valor real.', pron:'uát du iú bring tu de téibol for dis díil? ái láik tu bring tu de téibol ríal váliu.'},
    {speaker:'maestro', en:'I bring years of experience — we need to circle back tomorrow with more details.', es:'Aporto años de experiencia — necesitamos retomar esto mañana con más detalles.', pron:'ái bring íars of expíriens — uí níid tu sércol bak tumórou uid mor ditéils.'},
    {speaker:'alumno', en:'Sounds good, let\'s circle back then.', es:'Suena bien, retomemos entonces.', pron:'sáunds gud, lets sércol bak den.'}
  ],
  122: [
    {speaker:'maestro', en:'I need to learn more about cultural sensitivity before this trip.', es:'Necesito aprender más sobre sensibilidad cultural antes de este viaje.', pron:'ái níid tu lern mor abáut cálchural sensitíviti bifór dis trip.'},
    {speaker:'alumno', en:'Business etiquette varies a lot — greeting customs especially.', es:'La etiqueta de negocios varía mucho — las costumbres de saludo especialmente.', pron:'bísnes étiket véris a lat — gríiting cástams espéshali.'},
    {speaker:'maestro', en:'What about gift giving — is it expected?', es:'¿Y qué tal el intercambio de regalos — se espera?', pron:'uát abáut guift guíving — is it expéctid?'},
    {speaker:'alumno', en:'Yes, and punctuality expectations matter too.', es:'Sí, y las expectativas de puntualidad también importan.', pron:'iés, and panctiualíti expectéishions máter tu.'},
    {speaker:'maestro', en:'Should I be careful with dining etiquette?', es:'¿Debería tener cuidado con la etiqueta en la mesa?', pron:'shud ái bi kérful uid dáining étiket?'},
    {speaker:'alumno', en:'Definitely — and stick to appropriate topics, watch your body language.', es:'Definitivamente — y quédate en temas apropiados, cuida tu lenguaje corporal.', pron:'définitli — and stik tu apróupriet tápics, uách iór bádi lánguich.'},
    {speaker:'maestro', en:'Would an interpreter help during meetings?', es:'¿Un intérprete ayudaría durante las reuniones?', pron:'uud an intérpreter jelp dúring míitings?'},
    {speaker:'alumno', en:'Yes, and cross-cultural training would help even more.', es:'Sí, y el entrenamiento intercultural ayudaría todavía más.', pron:'iés, and cros-cálchural tréining uud jelp íven mor.'}
  ],
  123: [
    {speaker:'maestro', en:'We\'re considering a merger with that company.', es:'Estamos considerando una fusión con esa empresa.', pron:'uír cansídering a mércher uid dat cámpani.'},
    {speaker:'alumno', en:'Is this an acquisition, or a true merger?', es:'¿Esto es una adquisición, o una verdadera fusión?', pron:'is dis an acuisíshion, or a tru mércher?'},
    {speaker:'maestro', en:'We need due diligence, and a fair valuation first.', es:'Necesitamos la debida diligencia, y una valoración justa primero.', pron:'uí níid diú díliyens, and a fer valiuéishion ferst.'},
    {speaker:'alumno', en:'Are the shareholders on board with this?', es:'¿Los accionistas están de acuerdo con esto?', pron:'ar de shérjolders on bord uid dis?'},
    {speaker:'maestro', en:'It\'s not a hostile takeover — there\'s real synergy here.', es:'No es una adquisición hostil — hay sinergia real acá.', pron:'its nat a jástail téikóver — ders ríal sínerchi jíar.'},
    {speaker:'alumno', en:'What about the integration process afterward?', es:'¿Y qué tal el proceso de integración después?', pron:'uát abáut de integréishion práses áfteruord?'},
    {speaker:'maestro', en:'We\'ll sign a letter of intent, pending antitrust review.', es:'Vamos a firmar una carta de intención, pendiente de revisión antimonopolio.', pron:'uíl sáin a léter of inténd, pénding ántitrast riviú.'},
    {speaker:'alumno', en:'Sounds like a solid plan for this merger.', es:'Suena como un plan sólido para esta fusión.', pron:'sáunds láik a sálid plan for dis mércher.'}
  ],
  124: [
    {speaker:'maestro', en:'Our marketing strategy needs better brand positioning.', es:'Nuestra estrategia de marketing necesita mejor posicionamiento de marca.', pron:'áur márketing stráteyi níids béter brand posíshioning.'},
    {speaker:'alumno', en:'Have we done market segmentation and competitive analysis?', es:'¿Hicimos la segmentación de mercado y el análisis competitivo?', pron:'jav uí dan márket segmentéishion and campétitiv análysis?'},
    {speaker:'maestro', en:'Yes, and we found our unique selling proposition.', es:'Sí, y encontramos nuestra propuesta de venta única.', pron:'iés, and uí fáund áur iuník séling proposíshion.'},
    {speaker:'alumno', en:'How do we build more brand awareness?', es:'¿Cómo construimos más reconocimiento de marca?', pron:'jáu du uí bild mor brand auérnes?'},
    {speaker:'maestro', en:'Through our marketing mix, and understanding our customer persona.', es:'A través de nuestra mezcla de marketing, y entendiendo nuestro perfil de cliente.', pron:'zru áur márketing mix, and anderstánding áur cástomer pérsona.'},
    {speaker:'alumno', en:'What\'s our positioning statement then?', es:'¿Cuál es nuestra declaración de posicionamiento entonces?', pron:'uáts áur posíshioning stéitment den?'},
    {speaker:'maestro', en:'We\'re finalizing that, along with our go-to-market strategy.', es:'Estamos finalizando eso, junto con nuestra estrategia de lanzamiento al mercado.', pron:'uír fáinalaising dat, alóng uid áur góu-tu-márket stráteyi.'},
    {speaker:'alumno', en:'Perfect, this marketing strategy is coming together.', es:'Perfecto, esta estrategia de marketing se está armando bien.', pron:'pérfect, dis márketing stráteyi is cáming tugéder.'}
  ],
  125: [
    {speaker:'maestro', en:'Our brand identity needs a new logo design.', es:'Nuestra identidad de marca necesita un nuevo diseño de logo.', pron:'áur brand aidéntiti níids a niú lóugo disáin.'},
    {speaker:'alumno', en:'What about our brand voice — does it match?', es:'¿Y qué tal nuestra voz de marca — coincide?', pron:'uát abáut áur brand vóis — das it match?'},
    {speaker:'maestro', en:'We updated the brand guidelines, and even the tagline.', es:'Actualizamos las pautas de marca, y hasta el eslogan.', pron:'uí apdéitid de brand gáidláins, and íven de tágláin.'},
    {speaker:'alumno', en:'Has our brand equity grown this year?', es:'¿Nuestro valor de marca creció este año?', pron:'jas áur brand écuiti gróun dis íar?'},
    {speaker:'maestro', en:'Yes, thanks to a stronger visual identity.', es:'Sí, gracias a una identidad visual más fuerte.', pron:'iés, zenks tu a strónguer víshual aidéntiti.'},
    {speaker:'alumno', en:'Are we rebranding completely, or just refreshing?', es:'¿Estamos renovando la marca por completo, o solo refrescando?', pron:'ar uí ribránding camplíitli, or yast rifréshing?'},
    {speaker:'maestro', en:'Just refreshing — we don\'t want to lose brand loyalty.', es:'Solo refrescando — no queremos perder la lealtad de marca.', pron:'yast rifréshing — uí dont uánt tu lus brand lóialti.'},
    {speaker:'alumno', en:'Good thinking, that brand loyalty took years to build.', es:'Buena idea, esa lealtad de marca tomó años en construirse.', pron:'gud zínking, dat brand lóialti tuk íars tu bild.'}
  ],
  126: [
    {speaker:'maestro', en:'Our e-commerce platform needs improvements.', es:'Nuestra plataforma de comercio electrónico necesita mejoras.', pron:'áur i-cámers plátform níids imprúuvments.'},
    {speaker:'alumno', en:'What about the online storefront design?', es:'¿Y qué tal el diseño de la tienda en línea?', pron:'uát abáut de ónláin stórfront disáin?'},
    {speaker:'maestro', en:'We\'re fixing shopping cart abandonment issues first.', es:'Estamos arreglando primero los problemas de abandono del carrito de compras.', pron:'uír fíxing sháping cart abándonment íshus ferst.'},
    {speaker:'alumno', en:'Is the checkout process too complicated?', es:'¿El proceso de pago es demasiado complicado?', pron:'is de chékáut práses tu cámplikeited?'},
    {speaker:'maestro', en:'Yes, and we need a better payment gateway too.', es:'Sí, y también necesitamos una mejor pasarela de pago.', pron:'iés, and uí níid a béter péiment guéituei tu.'},
    {speaker:'alumno', en:'What about our product listing quality?', es:'¿Y qué tal la calidad de nuestro listado de productos?', pron:'uát abáut áur prádact lísting cuáliti?'},
    {speaker:'maestro', en:'We\'re improving that, plus customer reviews visibility.', es:'Estamos mejorando eso, más la visibilidad de las reseñas de clientes.', pron:'uír imprúuving dat, plas cástomer riviús visibíliti.'},
    {speaker:'alumno', en:'Our return policy and order fulfillment affect conversion rate too.', es:'Nuestra política de devoluciones y cumplimiento de pedidos también afectan la tasa de conversión.', pron:'áur ritérn pálisi and órder fulfílment aféct canvérshion réit tu.'}
  ],
  127: [
    {speaker:'maestro', en:'That comment really seemed to hit the nail on the head.', es:'Ese comentario realmente pareció darle en el clavo.', pron:'dat cáment ríali símd tu jit de néil on de jed.'},
    {speaker:'alumno', en:'Yes, we tend to see eye to eye on this issue.', es:'Sí, tendemos a estar de acuerdo en este tema.', pron:'iés, uí tend tu síi ái tu ái on dis íshu.'},
    {speaker:'maestro', en:'It helps to think on your feet when things change.', es:'Ayuda pensar rápido cuando las cosas cambian.', pron:'it jelps tu zink on iór fíit uén zings chéinch.'},
    {speaker:'alumno', en:'Sure, or we need to go back to the drawing board.', es:'Claro, o necesitamos volver a empezar de cero.', pron:'shur, or uí níid tu góu bak tu de dróing bord.'},
    {speaker:'maestro', en:'Try to read between the lines in this email.', es:'Trata de leer entre líneas en este correo.', pron:'trái tu ríid bituíin de láins in dis íimeil.'},
    {speaker:'alumno', en:'I will, but it helps to keep your options open too.', es:'Lo haré, pero también ayuda mantener las opciones abiertas.', pron:'ái uil, bat it jelps tu kíip iór ápshions óupen tu.'},
    {speaker:'maestro', en:'It\'s smart to take it with a grain of salt for now.', es:'Es inteligente tomarlo con pinzas por ahora.', pron:'its smart tu téik it uid a gréin of solt for náu.'},
    {speaker:'alumno', en:'We\'re all in the same boat here — nice to be in the same boat with you.', es:'Estamos todos en el mismo barco acá — que bueno estar en el mismo barco contigo.', pron:'uír ol in de séim bóut jíar — náis tu bi in de séim bóut uid iú.'}
  ],
  128: [
    {speaker:'maestro', en:'Our subscription model needs adjustment.', es:'Nuestro modelo de suscripción necesita ajuste.', pron:'áur sabscrípshion mádel níids ayástment.'},
    {speaker:'alumno', en:'Is recurring revenue growing this quarter?', es:'¿Los ingresos recurrentes están creciendo este trimestre?', pron:'is rikéring révenu gróuing dis cuórter?'},
    {speaker:'maestro', en:'Yes, but our churn rate increased slightly.', es:'Sí, pero nuestra tasa de cancelación aumentó un poco.', pron:'iés, bat áur chern réit incrísd sláitli.'},
    {speaker:'alumno', en:'What about customer lifetime value?', es:'¿Y qué tal el valor de vida del cliente?', pron:'uát abáut cástomer láiftaim váliu?'},
    {speaker:'maestro', en:'It\'s improving, especially after the free trial period.', es:'Está mejorando, especialmente después del período de prueba gratuita.', pron:'its imprúuving, espéshali áfter de fríi tráial píriod.'},
    {speaker:'alumno', en:'Should we add a new subscription tier?', es:'¿Deberíamos agregar un nuevo nivel de suscripción?', pron:'shud uí ad a niú sabscrípshion tíar?'},
    {speaker:'maestro', en:'Maybe, with better auto-renewal and cancellation policy options.', es:'Tal vez, con mejores opciones de renovación automática y política de cancelación.', pron:'méibi, uid béter óto-riniúal and canseléishion pálisi ápshions.'},
    {speaker:'alumno', en:'What about an upsell opportunity in our pricing plan?', es:'¿Y qué tal una oportunidad de venta adicional en nuestro plan de precios?', pron:'uát abáut an ápsel oportiúniti in áur práising plan?'}
  ],
  129: [
    {speaker:'maestro', en:'We\'re considering opening a new franchise.', es:'Estamos considerando abrir una nueva franquicia.', pron:'uír cansídering óupening a niú fránchais.'},
    {speaker:'alumno', en:'Would you be the franchisee, or the franchisor?', es:'¿Serías el franquiciado, o el franquiciante?', pron:'uud iú bi de fránchaisíi, or de fránchaisor?'},
    {speaker:'maestro', en:'I\'d be the franchisee, under a licensing agreement.', es:'Sería el franquiciado, bajo un acuerdo de licencia.', pron:'áid bi de fránchaisíi, ánder a láisensing agríiment.'},
    {speaker:'alumno', en:'What\'s the royalty fee for this franchise?', es:'¿Cuál es la regalía para esta franquicia?', pron:'uáts de róialti fíi for dis fránchais?'},
    {speaker:'maestro', en:'It\'s reasonable, and it follows strict brand standards.', es:'Es razonable, y sigue estándares de marca estrictos.', pron:'its ríizonabol, and it fálous strict brand stándards.'},
    {speaker:'alumno', en:'Do you get exclusive territory rights?', es:'¿Obtienes derechos territoriales exclusivos?', pron:'du iú guet exclúsiv térritori ráits?'},
    {speaker:'maestro', en:'Yes, and all intellectual property stays protected.', es:'Sí, y toda la propiedad intelectual queda protegida.', pron:'iés, and ol inteléctual práperti stéis pratéctid.'},
    {speaker:'alumno', en:'Even the trademark is fully covered then.', es:'Hasta la marca registrada queda totalmente cubierta entonces.', pron:'íven de tréidmark is fúli cáverd den.'}
  ],
  130: [
    {speaker:'maestro', en:'Our startup needs more venture capital.', es:'Nuestra startup necesita más capital de riesgo.', pron:'áur stártap níids mor vénchur cápital.'},
    {speaker:'alumno', en:'Have you finished the pitch deck yet?', es:'¿Ya terminaste la presentación para inversores?', pron:'jav iú fínisht de pitch dek iét?'},
    {speaker:'maestro', en:'Almost — we\'re also seeking seed funding.', es:'Casi — también estamos buscando financiamiento inicial.', pron:'ólmoust — uír ólsou síiking síid fánding.'},
    {speaker:'alumno', en:'Is the minimum viable product ready?', es:'¿El producto mínimo viable está listo?', pron:'is de mínimum váiabol prádact rédi?'},
    {speaker:'maestro', en:'Yes, and we\'re testing its scalability now.', es:'Sí, y estamos probando su escalabilidad ahora.', pron:'iés, and uír tésting its skéilabíliti náu.'},
    {speaker:'alumno', en:'Should we pivot our business model?', es:'¿Deberíamos cambiar de rumbo nuestro modelo de negocio?', pron:'shud uí pívat áur bísnes mádel?'},
    {speaker:'maestro', en:'Maybe, if it improves our exit strategy.', es:'Tal vez, si mejora nuestra estrategia de salida.', pron:'méibi, if it imprúuvs áur éxit stráteyi.'},
    {speaker:'alumno', en:'Every entrepreneur faces that decision eventually.', es:'Cada emprendedor enfrenta esa decisión eventualmente.', pron:'évri antreprenúr féisis dat disíshion ivénchuali.'}
  ],
  131: [
    {speaker:'maestro', en:'Our company values strong business ethics.', es:'Nuestra empresa valora una ética empresarial fuerte.', pron:'áur cámpani váliuz strong bísnes ézics.'},
    {speaker:'alumno', en:'How\'s our corporate governance structure?', es:'¿Cómo está nuestra estructura de gobernanza corporativa?', pron:'jáus áur córporeit gávernans strákchur?'},
    {speaker:'maestro', en:'Solid — everyone follows our code of conduct.', es:'Sólida — todos siguen nuestro código de conducta.', pron:'sálid — évriuan fálous áur kóud of cándact.'},
    {speaker:'alumno', en:'What if someone is a whistleblower?', es:'¿Qué pasa si alguien es un denunciante?', pron:'uát if sámuan is a uísolblóuer?'},
    {speaker:'maestro', en:'We protect them, and address any conflict of interest.', es:'Los protegemos, y abordamos cualquier conflicto de interés.', pron:'uí pratéct dem, and adrés éni cánflict of íntrest.'},
    {speaker:'alumno', en:'Is transparency a priority here?', es:'¿La transparencia es una prioridad acá?', pron:'is transpárensi a priáriti jíar?'},
    {speaker:'maestro', en:'Absolutely, along with real accountability.', es:'Absolutamente, junto con una verdadera rendición de cuentas.', pron:'ábsoliutli, alóng uid ríal acauntabíliti.'},
    {speaker:'alumno', en:'The board of directors and compliance officer both agree.', es:'La junta directiva y el oficial de cumplimiento están de acuerdo, ambos.', pron:'de bord of diréctors and campláians áfiser bóuz agríi.'}
  ],
  132: [
    {speaker:'maestro', en:'Welcome to unit eleven, review time!', es:'¡Bienvenido a la Unidad Once, hora de repaso!', pron:'uélcam tu iúnit iléven, riviú táim!'},
    {speaker:'alumno', en:'Almost three quarters done with the whole course.', es:'Ya casi tres cuartos de todo el curso.', pron:'ólmoust zríi cuórters dan uid de jóul cors.'},
    {speaker:'maestro', en:'Staying focused really pays off.', es:'Mantenerse enfocado realmente vale la pena.', pron:'stéing fóucasd ríali péis of.'},
    {speaker:'alumno', en:'Well done — you\'ve made it to the final third.', es:'Bien hecho — llegaste al tercio final.', pron:'uél dan — iúv méid it tu de fáinal zerd.'},
    {speaker:'maestro', en:'I\'m proud of this progress.', es:'Estoy orgulloso de este progreso.', pron:'áim práud of dis prógres.'},
    {speaker:'alumno', en:'See you in unit twelve, next unit!', es:'¡Nos vemos en la Unidad Doce, la próxima unidad!', pron:'síi iú in iúnit tuélv, next iúnit!'}
  ],
  133: [
    {speaker:'maestro', en:'Our public relations team needs to manage media relations today.', es:'Nuestro equipo de relaciones públicas necesita manejar las relaciones con los medios hoy.', pron:'áur páblic riléishions tíim níids tu mánach mídia riléishions tudéi.'},
    {speaker:'alumno', en:'Is our public image at risk after that news story?', es:'¿Nuestra imagen pública está en riesgo después de esa noticia?', pron:'is áur páblic ímich at risk áfter dat niús stóri?'},
    {speaker:'maestro', en:'We\'re preparing for a press conference tomorrow.', es:'Nos estamos preparando para una conferencia de prensa mañana.', pron:'uír pripéring for a pres cánferens tumórou.'},
    {speaker:'alumno', en:'Good, is the media kit ready with talking points?', es:'Bien, ¿el kit de prensa está listo con los puntos clave?', pron:'gud, is de mídia kit rédi uid tóking póints?'},
    {speaker:'maestro', en:'Yes, and we\'re focused on crisis communication.', es:'Sí, y estamos enfocados en la comunicación de crisis.', pron:'iés, and uír fóucasd on cráisis camiunikéishion.'},
    {speaker:'alumno', en:'How\'s our media coverage looking so far?', es:'¿Cómo se ve nuestra cobertura mediática hasta ahora?', pron:'jáus áur mídia cáverich lúking sóu far?'},
    {speaker:'maestro', en:'Positive — this PR campaign really builds thought leadership.', es:'Positiva — esta campaña de relaciones públicas realmente construye liderazgo de pensamiento.', pron:'pázitiv — dis pi-ar campéin ríali bilds zot líidership.'},
    {speaker:'alumno', en:'That\'s great news for the whole team.', es:'Esa es una gran noticia para todo el equipo.', pron:'dats gréit niús for de jóul tíim.'}
  ],
  134: [
    {speaker:'maestro', en:'I\'m working on event planning for next month.', es:'Estoy trabajando en la planificación de eventos para el próximo mes.', pron:'áim uórking on ivént pláning for next manz.'},
    {speaker:'alumno', en:'Are you the event coordinator for this one?', es:'¿Eres el coordinador de eventos para este?', pron:'ar iú de ivént coórdineitor for dis uán?'},
    {speaker:'maestro', en:'Yes, and I\'m reviewing the budget breakdown now.', es:'Sí, y estoy revisando el desglose del presupuesto ahora.', pron:'iés, and áim riviúing de báchet bréikdáun náu.'},
    {speaker:'alumno', en:'What about vendor management and the event timeline?', es:'¿Y qué tal la gestión de proveedores y el cronograma del evento?', pron:'uát abáut véndor mánechment and de ivént táimláin?'},
    {speaker:'maestro', en:'Both are on track — I have the run of show ready too.', es:'Ambos van bien encaminados — también tengo listo el guion del evento.', pron:'bóuz ar on trak — ái jav de ran of shóu rédi tu.'},
    {speaker:'alumno', en:'How\'s event logistics going overall?', es:'¿Cómo va la logística del evento en general?', pron:'jáus ivént loyístics góing óverol?'},
    {speaker:'maestro', en:'Smooth so far — attendee registration opened this week.', es:'Sin problemas hasta ahora — el registro de asistentes abrió esta semana.', pron:'smúuz sóu far — aténdíi rechistréishion óupend dis uíik.'},
    {speaker:'alumno', en:'Don\'t forget the event theme, and a post-event survey after.', es:'No te olvides del tema del evento, y una encuesta posterior después.', pron:'dont forguét de ivént zíim, and a póust-ivént sérvei áfter.'}
  ],
  135: [
    {speaker:'maestro', en:'Retail management is getting harder this season.', es:'La gestión minorista se está poniendo más difícil esta temporada.', pron:'ríiteil mánechment is guéting járder dis síizon.'},
    {speaker:'alumno', en:'What about inventory turnover — is it improving?', es:'¿Y qué tal la rotación de inventario — está mejorando?', pron:'uát abáut ínventori térnóver — is it imprúuving?'},
    {speaker:'maestro', en:'Yes, and point of sale data looks better too.', es:'Sí, y los datos del punto de venta también se ven mejor.', pron:'iés, and póint of séil déita luks béter tu.'},
    {speaker:'alumno', en:'Is foot traffic up in the store?', es:'¿El tráfico de personas está subiendo en la tienda?', pron:'is fut tráfic ap in de stor?'},
    {speaker:'maestro', en:'A little, thanks to new visual merchandising.', es:'Un poco, gracias al nuevo merchandising visual.', pron:'a lítol, zenks tu niú víshual merchándaising.'},
    {speaker:'alumno', en:'How are seasonal sales performing?', es:'¿Cómo están rindiendo las ventas de temporada?', pron:'jáu ar síizonal séils perfórming?'},
    {speaker:'maestro', en:'Good — we changed the store layout for loss prevention.', es:'Bien — cambiamos la disposición de la tienda para la prevención de pérdidas.', pron:'gud — uí chéinchd de stor léiaut for los privénshion.'},
    {speaker:'alumno', en:'Customer footfall and retail analytics both confirm it\'s working.', es:'El flujo de clientes y el análisis minorista, ambos confirman que está funcionando.', pron:'cástomer fútfol and ríiteil análytics bóuz canférm its uórking.'}
  ],
  136: [
    {speaker:'maestro', en:'The hospitality industry depends on great service.', es:'La industria de la hospitalidad depende de un gran servicio.', pron:'de jaspitáliti índastri dipénds on gréit sérvis.'},
    {speaker:'alumno', en:'How\'s guest experience at this hotel?', es:'¿Cómo es la experiencia del huésped en este hotel?', pron:'jáus guest expíriens at dis jóutel?'},
    {speaker:'maestro', en:'Excellent — the concierge service is outstanding.', es:'Excelente — el servicio de conserjería es sobresaliente.', pron:'éxelent — de cánsierch sérvis is áutstánding.'},
    {speaker:'alumno', en:'Does the tourism board recommend this travel package?', es:'¿La junta de turismo recomienda este paquete de viaje?', pron:'das de túrism bord récomend dis trável páquich?'},
    {speaker:'maestro', en:'Yes, especially for group booking discounts.', es:'Sí, especialmente por los descuentos de reserva grupal.', pron:'iés, espéshali for grup búking díscáunts.'},
    {speaker:'alumno', en:'What about the amenities here?', es:'¿Y qué tal las comodidades acá?', pron:'uát abáut de aménitis jíar?'},
    {speaker:'maestro', en:'Very good, and the occupancy rate stays high.', es:'Muy buenas, y la tasa de ocupación se mantiene alta.', pron:'véri gud, and de ocupánsi réit stéis jái.'},
    {speaker:'alumno', en:'Our tour operator says this is a top destination.', es:'Nuestro operador turístico dice que este es un destino de primera.', pron:'áur túr áporeitor séis dis is a tap destinéishion.'}
  ],
  137: [
    {speaker:'maestro', en:'The entertainment industry keeps growing fast.', es:'La industria del entretenimiento sigue creciendo rápido.', pron:'de entertéinment índastri kíips gróuing fast.'},
    {speaker:'alumno', en:'Did the talent agency sign a new client?', es:'¿La agencia de talento firmó a un cliente nuevo?', pron:'did de tálent éichensi sáin a niú cláient?'},
    {speaker:'maestro', en:'Yes, and they\'re negotiating royalties now.', es:'Sí, y están negociando las regalías ahora.', pron:'iés, and déir nigóushieiting róialtis náu.'},
    {speaker:'alumno', en:'How did box office numbers look this weekend?', es:'¿Cómo se vieron los números de taquilla este fin de semana?', pron:'jáu did bax áfis námbers luk dis uíikend?'},
    {speaker:'maestro', en:'Strong, plus streaming rights added more revenue.', es:'Fuertes, además los derechos de transmisión agregaron más ingresos.', pron:'strong, plas stríiming ráits ádid mor révenu.'},
    {speaker:'alumno', en:'Is the production company hiring?', es:'¿La productora está contratando?', pron:'is de pradákshion cámpani jáiring?'},
    {speaker:'maestro', en:'Yes, they need a new creative director.', es:'Sí, necesitan un nuevo director creativo.', pron:'iés, déi níid a niú criéitiv diréctor.'},
    {speaker:'alumno', en:'Content licensing really boosts audience engagement.', es:'La licencia de contenido realmente impulsa el compromiso de la audiencia.', pron:'cántent láisensing ríali busts ódiens enguéichment.'}
  ],
  138: [
    {speaker:'maestro', en:'Government relations require careful planning.', es:'Las relaciones gubernamentales requieren una planificación cuidadosa.', pron:'gávernment riléishions ricuáiar kérful pláning.'},
    {speaker:'alumno', en:'Is lobbying part of your job now?', es:'¿El cabildeo es parte de tu trabajo ahora?', pron:'is lábiing part of iór yab náu?'},
    {speaker:'maestro', en:'Yes, mostly around public policy issues.', es:'Sí, mayormente en torno a temas de política pública.', pron:'iés, móustli aráund páblic pálisi íshus.'},
    {speaker:'alumno', en:'What about regulatory affairs at your company?', es:'¿Y qué tal los asuntos regulatorios en tu empresa?', pron:'uát abáut réguiulatori afférs at iór cámpani?'},
    {speaker:'maestro', en:'We work closely with an advocacy group there.', es:'Trabajamos de cerca con un grupo de defensa ahí.', pron:'uí uork clóusli uid an ádvocasi grup der.'},
    {speaker:'alumno', en:'Did new legislation pass this year?', es:'¿Se aprobó nueva legislación este año?', pron:'did niú lechisléishion pas dis íar?'},
    {speaker:'maestro', en:'Not yet, but there was a public hearing.', es:'Todavía no, pero hubo una audiencia pública.', pron:'nat iét, bat der uás a páblic jíaring.'},
    {speaker:'alumno', en:'Every policy maker listens to a grassroots campaign eventually, since the political landscape keeps shifting.', es:'Cada responsable de políticas escucha a una campaña de base eventualmente, ya que el panorama político sigue cambiando.', pron:'évri pálisi méiker lísens tu a grásruts campéin ivénchuali, sins de palítical lándskeip kíips shífting.'}
  ],
  139: [
    {speaker:'maestro', en:'Sometimes you just have to bite the bullet.', es:'A veces solo tienes que afrontar la situación.', pron:'sámtaims iú yast jav tu báit de búlet.'},
    {speaker:'alumno', en:'Are we going to jump on the bandwagon too?', es:'¿También vamos a subirnos a la moda?', pron:'ar uí góing tu yamp on de bánduagon tu?'},
    {speaker:'maestro', en:'This new product could be a game changer — it deserves to be a game changer for us.', es:'Este producto nuevo podría cambiarlo todo — se merece ser algo que lo cambie todo para nosotros.', pron:'dis niú prádact cud bi a guéim chéinyer — it disérvs tu bi a guéim chéinyer for as.'},
    {speaker:'alumno', en:'We need to raise the bar for everyone.', es:'Necesitamos subir la vara para todos.', pron:'uí níid tu réis de bar for évriuan.'},
    {speaker:'maestro', en:'Let\'s leave no stone unturned on this project — we plan to leave no stone unturned.', es:'No dejemos nada sin revisar en este proyecto — planeamos no dejar nada sin revisar.', pron:'lets líiv nóu stóun antérnd on dis práchect — uí plan tu líiv nóu stóun antérnd.'},
    {speaker:'alumno', en:'Can we hit the ground running tomorrow? I want to hit the ground running.', es:'¿Podemos arrancar con todo mañana? Quiero arrancar con todo desde el principio.', pron:'can uí jit de gráund ráning tumórou? ái uánt tu jit de gráund ráning.'},
    {speaker:'maestro', en:'You\'re in the driver\'s seat on this decision — nice to be in the driver\'s seat.', es:'Estás al mando en esta decisión — que bueno estar al mando.', pron:'iór in de dráivers síit on dis disíshion — náis tu bi in de dráivers síit.'},
    {speaker:'alumno', en:'That means you get to call the shots.', es:'Eso significa que tú decides.', pron:'dat míins iú guet tu col de shats.'}
  ],
  140: [
    {speaker:'maestro', en:'Our global supply chain needs a review.', es:'Nuestra cadena de suministro global necesita una revisión.', pron:'áur glóubal saplái chéin níids a riviú.'},
    {speaker:'alumno', en:'How\'s our supplier relationship going?', es:'¿Cómo va nuestra relación con proveedores?', pron:'jáus áur sapláier riléishionship góing?'},
    {speaker:'maestro', en:'Strong, and procurement costs are down.', es:'Fuerte, y los costos de adquisición bajaron.', pron:'strong, and procúrment costs ar dáun.'},
    {speaker:'alumno', en:'What about inventory optimization?', es:'¿Y qué tal la optimización de inventario?', pron:'uát abáut ínventori optimizéishion?'},
    {speaker:'maestro', en:'We improved that with just-in-time delivery.', es:'Mejoramos eso con la entrega justo a tiempo.', pron:'uí imprúuvd dat uid yast-in-táim delíveri.'},
    {speaker:'alumno', en:'Is our logistics network reliable?', es:'¿Nuestra red logística es confiable?', pron:'is áur loyístics nétuork riláiabol?'},
    {speaker:'maestro', en:'Yes, especially the distribution center.', es:'Sí, especialmente el centro de distribución.', pron:'iés, espéshali de distribiúshion sénter.'},
    {speaker:'alumno', en:'Supply chain disruption led to new vendor negotiation and sourcing strategy.', es:'La interrupción de la cadena de suministro llevó a una nueva negociación con proveedores y estrategia de abastecimiento.', pron:'saplái chéin disrápshion led tu niú véndor nigoushiéishion and sórsing stráteyi.'}
  ],
  141: [
    {speaker:'maestro', en:'The energy sector is changing fast.', es:'El sector energético está cambiando rápido.', pron:'de énerchi séctor is chéinying fast.'},
    {speaker:'alumno', en:'Are natural resources still the main focus?', es:'¿Los recursos naturales siguen siendo el enfoque principal?', pron:'ar náchural risórsis stil de méin fóucas?'},
    {speaker:'maestro', en:'Yes, especially oil and gas for now.', es:'Sí, especialmente el petróleo y el gas por ahora.', pron:'iés, espéshali óil and gas for náu.'},
    {speaker:'alumno', en:'What about the mining industry?', es:'¿Y qué tal la industria minera?', pron:'uát abáut de máining índastri?'},
    {speaker:'maestro', en:'Growing too, alongside renewable resources.', es:'También creciendo, junto con los recursos renovables.', pron:'gróuing tu, alóngsáid rinúabol risórsis.'},
    {speaker:'alumno', en:'Is the extraction process improving?', es:'¿El proceso de extracción está mejorando?', pron:'is de extrákshion práses imprúuving?'},
    {speaker:'maestro', en:'Somewhat, with better energy efficiency.', es:'Un poco, con mejor eficiencia energética.', pron:'sámuát, uid béter énerchi efíshiensi.'},
    {speaker:'alumno', en:'Good resource management reduces environmental impact.', es:'Una buena gestión de recursos reduce el impacto ambiental.', pron:'gud risórs mánechment ridiúses environméntal ímpact.'}
  ],
  142: [
    {speaker:'maestro', en:'Consumer goods sales are up this quarter.', es:'Las ventas de bienes de consumo subieron este trimestre.', pron:'cansiúmer guds séils ar ap dis cuórter.'},
    {speaker:'alumno', en:'How\'s our brand portfolio performing?', es:'¿Cómo está rindiendo nuestra cartera de marcas?', pron:'jáus áur brand pórtfoulio perfórming?'},
    {speaker:'maestro', en:'Well, across every product lifecycle stage.', es:'Bien, en cada etapa del ciclo de vida del producto.', pron:'uél, acrós évri prádact láifsaicol stéich.'},
    {speaker:'alumno', en:'Are we planning market expansion?', es:'¿Estamos planeando una expansión de mercado?', pron:'ar uí pláning márket expánshion?'},
    {speaker:'maestro', en:'Yes, through international distribution.', es:'Sí, a través de distribución internacional.', pron:'iés, zru internáshional distribiúshion.'},
    {speaker:'alumno', en:'What about import regulations abroad?', es:'¿Y qué tal las regulaciones de importación en el extranjero?', pron:'uát abáut ímport reguleishions abród?'},
    {speaker:'maestro', en:'We\'re studying local market adaptation now.', es:'Estamos estudiando la adaptación al mercado local ahora.', pron:'uír stádiing lóucal márket adaptéishion náu.'},
    {speaker:'alumno', en:'Our global brand strategy needs more shelf space.', es:'Nuestra estrategia de marca global necesita más espacio en las estanterías.', pron:'áur glóubal brand stráteyi níids mor shelf spéis.'}
  ],
  143: [
    {speaker:'maestro', en:'Telecommunications keeps evolving quickly.', es:'Las telecomunicaciones siguen evolucionando rápido.', pron:'telecamiunikéishions kíips ivólving cuíckli.'},
    {speaker:'alumno', en:'Is our network infrastructure ready?', es:'¿Nuestra infraestructura de red está lista?', pron:'is áur nétuork infraestrákchur rédi?'},
    {speaker:'maestro', en:'Mostly, though bandwidth is still limited.', es:'Mayormente, aunque el ancho de banda todavía es limitado.', pron:'móustli, dóu bánduidz is stil límitid.'},
    {speaker:'alumno', en:'Which service provider do we use?', es:'¿Qué proveedor de servicio usamos?', pron:'uích sérvis prováider du uí iús?'},
    {speaker:'maestro', en:'A reliable one, with a good data plan.', es:'Uno confiable, con un buen plan de datos.', pron:'a riláiabol uán, uid a gud déita plan.'},
    {speaker:'alumno', en:'Is signal coverage strong in rural areas?', es:'¿La cobertura de señal es fuerte en zonas rurales?', pron:'is sígnal cáverich strong in rúral érias?'},
    {speaker:'maestro', en:'Improving, thanks to new telecom regulation.', es:'Mejorando, gracias a la nueva regulación de telecomunicaciones.', pron:'imprúuving, zenks tu niú télecam reguleishion.'},
    {speaker:'alumno', en:'Fiber optic expansion depends on our mobile carrier too.', es:'La expansión de fibra óptica también depende de nuestro operador móvil.', pron:'fáiber áptic expánshion dipénds on áur móubail cárier tu.'}
  ],
  144: [
    {speaker:'maestro', en:'Welcome to unit twelve, review time!', es:'¡Bienvenido a la Unidad Doce, hora de repaso!', pron:'uélcam tu iúnit tuélv, riviú táim!'},
    {speaker:'alumno', en:'Four fifths done — almost there.', es:'Cuatro quintos hecho — ya casi llegamos.', pron:'for fifzs dan — ólmoust der.'},
    {speaker:'maestro', en:'Just one fifth remaining now.', es:'Solo un quinto restante ahora.', pron:'yast uán fifz riméining náu.'},
    {speaker:'alumno', en:'You are truly unstoppable at this point.', es:'Eres verdaderamente imparable a esta altura.', pron:'iú ar trúli anstápabol at dis póint.'},
    {speaker:'maestro', en:'The final stretch begins today.', es:'El tramo final empieza hoy.', pron:'de fáinal strech biguíns tudéi.'},
    {speaker:'alumno', en:'See you in unit thirteen, next unit!', es:'¡Nos vemos en la Unidad Trece, la próxima unidad!', pron:'síi iú in iúnit zertíin, next iúnit!'}
  ],
  145: [
    {speaker:'maestro', en:'I renewed my gym membership this week.', es:'Renové mi membresía del gimnasio esta semana.', pron:'ái riniúd mái yim mémbership dis uíik.'},
    {speaker:'alumno', en:'Are you working with a personal trainer now?', es:'¿Estás trabajando con un entrenador personal ahora?', pron:'ar iú uórking uid a pérsonal tréiner náu?'},
    {speaker:'maestro', en:'Yes, my workout routine includes more cardio.', es:'Sí, mi rutina de ejercicio incluye más cardio.', pron:'iés, mái uórkáut rutíin inclúuds mor cárdio.'},
    {speaker:'alumno', en:'Do you also do strength training?', es:'¿También haces entrenamiento de fuerza?', pron:'du iú ólsou du strengz tréining?'},
    {speaker:'maestro', en:'Every week — I\'m training for our sports team tournament.', es:'Cada semana — me estoy entrenando para el torneo de nuestro equipo deportivo.', pron:'évri uíik — áim tréining for áur sports tíim túrnament.'},
    {speaker:'alumno', en:'Is your teammate a professional athlete?', es:'¿Tu compañero de equipo es un atleta profesional?', pron:'is iór tíimméit a proféshional ázlit?'},
    {speaker:'maestro', en:'Almost — she just signed a sponsorship deal.', es:'Casi — ella acaba de firmar un contrato de patrocinio.', pron:'ólmoust — shi yast sáind a spánsorship díil.'},
    {speaker:'alumno', en:'That\'s amazing for improving her fitness career too.', es:'Eso es increíble para mejorar también su carrera en el estado físico.', pron:'dats amézing for imprúuving jer fítnes karíir tu.'}
  ],
  146: [
    {speaker:'maestro', en:'We\'re planning our wedding for next spring.', es:'Estamos planeando nuestra boda para la próxima primavera.', pron:'uír pláning áur uéding for next spring.'},
    {speaker:'alumno', en:'Who\'s the wedding planner helping you?', es:'¿Quién es el organizador de bodas que te está ayudando?', pron:'jus de uéding pláner jélping iú?'},
    {speaker:'maestro', en:'A great one — she organized my sister\'s wedding too.', es:'Uno excelente — ella también organizó la boda de mi hermana.', pron:'a gréit uán — shi órganaisd mái sísters uéding tu.'},
    {speaker:'alumno', en:'Have you chosen the groom and bride\'s outfits yet?', es:'¿Ya elegiste los atuendos del novio y la novia?', pron:'jav iú chóusen de grum and bráids áutfits iét?'},
    {speaker:'maestro', en:'Almost, and we\'re writing our wedding vows now.', es:'Casi, y estamos escribiendo nuestros votos matrimoniales ahora.', pron:'ólmoust, and uír ráiting áur uéding vóus náu.'},
    {speaker:'alumno', en:'Who\'s the guest of honor at the reception?', es:'¿Quién es el invitado de honor en la recepción?', pron:'jus de guest of ánor at de riséption?'},
    {speaker:'maestro', en:'My grandmother — it\'s also her anniversary that week.', es:'Mi abuela — también es su aniversario esa semana.', pron:'mái grándmader — its ólsou jer aniversari dat uíik.'},
    {speaker:'alumno', en:'Let\'s make sure the celebration budget covers everything.', es:'Asegurémonos de que el presupuesto de celebración cubra todo.', pron:'lets méik shur de selebréishion báchet cávers évrizin.'}
  ],
  147: [
    {speaker:'maestro', en:'I have to go to court next week.', es:'Tengo que ir al tribunal la próxima semana.', pron:'ái jav tu góu tu cort next uíik.'},
    {speaker:'alumno', en:'Is the judge assigned to your case yet?', es:'¿Ya está asignado el juez a tu caso?', pron:'is de yach asáind tu iór kéis iét?'},
    {speaker:'maestro', en:'Yes, and my lawyer is preparing the lawsuit.', es:'Sí, y mi abogado está preparando la demanda.', pron:'iés, and mái lóier is pripéring de lósut.'},
    {speaker:'alumno', en:'Will there be a jury for this?', es:'¿Va a haber un jurado para esto?', pron:'uil der bi a yúri for dis?'},
    {speaker:'maestro', en:'Probably, and I need to prepare my testimony.', es:'Probablemente, y necesito preparar mi testimonio.', pron:'prábabli, and ái níid tu pripér mái téstimoni.'},
    {speaker:'alumno', en:'What outcome do you expect from the verdict?', es:'¿Qué resultado esperas del veredicto?', pron:'uát áutcam du iú expéct fram de vérdict?'},
    {speaker:'maestro', en:'Hopefully fair — these legal proceedings take time.', es:'Espero que sea justo — estos procesos legales toman tiempo.', pron:'jóupfuli fer — díis líigal prosíidings téik táim.'},
    {speaker:'alumno', en:'Could this end in a settlement instead of trial for the plaintiff?', es:'¿Esto podría terminar en un acuerdo en vez de juicio para el demandante?', pron:'cud dis end in a sétolment instéd of tráial for de pléintif?'}
  ],
  148: [
    {speaker:'maestro', en:'I need to visit the bank branch today.', es:'Necesito visitar la sucursal del banco hoy.', pron:'ái níid tu vísit de bank branch tudéi.'},
    {speaker:'alumno', en:'Can the teller help you with an overdraft issue?', es:'¿El cajero puede ayudarte con un problema de sobregiro?', pron:'can de téler jelp iú uid an óverdraft íshu?'},
    {speaker:'maestro', en:'Yes, and I need my account statement too.', es:'Sí, y también necesito mi extracto de cuenta.', pron:'iés, and ái níid mái acáunt stéitment tu.'},
    {speaker:'alumno', en:'Did you set up direct deposit already?', es:'¿Ya configuraste el depósito directo?', pron:'did iú set ap diréct dipázit olrédi?'},
    {speaker:'maestro', en:'Yes, and I found the nearest ATM for online banking help.', es:'Sí, y encontré el cajero automático más cercano para ayuda con la banca en línea.', pron:'iés, and ái fáund de níarest éi-tí-em for ónláin bánking jelp.'},
    {speaker:'alumno', en:'Is there a bank hold on your account?', es:'¿Hay una retención bancaria en tu cuenta?', pron:'is der a bank jóuld on iór acáunt?'},
    {speaker:'maestro', en:'No, but I\'m below the minimum balance.', es:'No, pero estoy por debajo del saldo mínimo.', pron:'nóu, bat áim bilóu de mínimum bálans.'},
    {speaker:'alumno', en:'Don\'t forget to check your safe deposit box while you\'re there.', es:'No te olvides de revisar tu caja de seguridad mientras estás ahí.', pron:'dont forguét tu chek iór séif dipázit bax uáil iór der.'}
  ],
  149: [
    {speaker:'maestro', en:'Agriculture is central to this region\'s economy.', es:'La agricultura es central para la economía de esta región.', pron:'ágricalchur is séntral tu dis rícheons ecánomi.'},
    {speaker:'alumno', en:'How was this year\'s crop and harvest?', es:'¿Cómo estuvo el cultivo y la cosecha de este año?', pron:'jáu uás dis íars crap and járvest?'},
    {speaker:'maestro', en:'Good, thanks to better irrigation systems.', es:'Bien, gracias a mejores sistemas de riego.', pron:'gud, zenks tu béter irrigéishion sístems.'},
    {speaker:'alumno', en:'Does the farmer also raise livestock?', es:'¿El agricultor también cría ganado?', pron:'das de fármer ólsou réis láivstok?'},
    {speaker:'maestro', en:'Yes, alongside some organic farming too.', es:'Sí, junto con algo de agricultura orgánica también.', pron:'iés, alóngsáid sam organic fárming tu.'},
    {speaker:'alumno', en:'Is agricultural export growing this year?', es:'¿La exportación agrícola está creciendo este año?', pron:'is agricúlchural éxport gróuing dis íar?'},
    {speaker:'maestro', en:'Yes, especially with strong food safety standards.', es:'Sí, especialmente con fuertes estándares de seguridad alimentaria.', pron:'iés, espéshali uid strong fud séifti stándards.'},
    {speaker:'alumno', en:'The crop yield really improved this season.', es:'El rendimiento de cultivo realmente mejoró esta temporada.', pron:'de crap iíld ríali imprúuvd dis síizon.'}
  ],
  150: [
    {speaker:'maestro', en:'Let\'s try to keep it under wraps for now.', es:'Tratemos de mantenerlo en secreto por ahora.', pron:'lets trái tu kíip it ánder raps for náu.'},
    {speaker:'alumno', en:'Should we try to go above and beyond on this project?', es:'¿Deberíamos tratar de hacer un esfuerzo extra en este proyecto?', pron:'shud uí trái tu góu abáv and bijánd on dis práchect?'},
    {speaker:'maestro', en:'I need to be on the fence about the deadline still.', es:'Todavía necesito estar indeciso sobre la fecha límite.', pron:'ái níid tu bi on de fens abáut de dédláin stil.'},
    {speaker:'alumno', en:'Let\'s try to get down to business then.', es:'Tratemos de ponernos a trabajar en serio entonces.', pron:'lets trái tu guet dáun tu bísnes den.'},
    {speaker:'maestro', en:'I have to have a lot on your plate handled already, I know.', es:'Tengo que tener manejado ya lo que tienes encima, lo sé.', pron:'ái jav tu jav a lat on iór pléit jándeld olrédi, ái nóu.'},
    {speaker:'alumno', en:'Are you starting to be in over your head with this workload?', es:'¿Estás empezando a estar sobrepasado con esta carga de trabajo?', pron:'ar iú stárting tu bi in óver iór jed uid dis uórklóud?'},
    {speaker:'maestro', en:'Let\'s just try to play it by ear for today.', es:'Tratemos solo de improvisar sobre la marcha por hoy.', pron:'lets yast trái tu pléi it bái íar for tudéi.'},
    {speaker:'alumno', en:'You should try to take the lead on the next meeting.', es:'Deberías tratar de tomar la delantera en la próxima reunión.', pron:'iú shud trái tu téik de líid on de next míiting.'}
  ],
  151: [
    {speaker:'maestro', en:'I visited the construction site today.', es:'Visité el sitio de construcción hoy.', pron:'ái vísitid de canstrákshion sáit tudéi.'},
    {speaker:'alumno', en:'Did the contractor bring the blueprint?', es:'¿El contratista trajo el plano?', pron:'did de cántractor bring de blúprint?'},
    {speaker:'maestro', en:'Yes, and we already have the building permit.', es:'Sí, y ya tenemos el permiso de construcción.', pron:'iés, and uí olrédi jav de bílding pérmit.'},
    {speaker:'alumno', en:'Is the scaffolding safe up there?', es:'¿El andamio está seguro allá arriba?', pron:'is de skáfolding séif ap der?'},
    {speaker:'maestro', en:'The structural engineer checked it this morning.', es:'El ingeniero estructural lo revisó esta mañana.', pron:'de strákchural enyinír chekt it dis mórning.'},
    {speaker:'alumno', en:'How\'s the construction crew doing overall?', es:'¿Cómo está el equipo de construcción en general?', pron:'jáus de canstrákshion cru dúing óverol?'},
    {speaker:'maestro', en:'Good, they just passed a safety inspection.', es:'Bien, acaban de pasar una inspección de seguridad.', pron:'gud, déi yast pásd a séifti inspékshion.'},
    {speaker:'alumno', en:'We ordered more building materials before the project deadline.', es:'Pedimos más materiales de construcción antes de la fecha límite del proyecto.', pron:'uí órderd mor bílding matírials bifór de práchect dédláin.'}
  ],
  152: [
    {speaker:'maestro', en:'The automotive industry is very competitive now.', es:'La industria automotriz es muy competitiva ahora.', pron:'de otomótiv índastri is véri campétitiv náu.'},
    {speaker:'alumno', en:'Is the assembly line running smoothly?', es:'¿La línea de ensamblaje está funcionando sin problemas?', pron:'is de asémbli láin ráning smúzli?'},
    {speaker:'maestro', en:'Yes, and the vehicle design looks great.', es:'Sí, y el diseño del vehículo se ve genial.', pron:'iés, and de víjicol disáin luks gréit.'},
    {speaker:'alumno', en:'Did the new prototype pass the crash test?', es:'¿El nuevo prototipo pasó la prueba de choque?', pron:'did de niú próutotáip pas de crash test?'},
    {speaker:'maestro', en:'Yes, and fuel efficiency improved a lot.', es:'Sí, y la eficiencia de combustible mejoró mucho.', pron:'iés, and fiúel efíshiensi imprúuvd a lat.'},
    {speaker:'alumno', en:'Are you building an electric vehicle too?', es:'¿También están construyendo un vehículo eléctrico?', pron:'ar iú bílding an iléctric víjicol tu?'},
    {speaker:'maestro', en:'We are, working closely with our automotive supplier.', es:'Sí, trabajando de cerca con nuestro proveedor automotriz.', pron:'uí ar, uórking clóusli uid áur otomótiv sapláier.'},
    {speaker:'alumno', en:'There was a small manufacturing defect, so we issued a recall.', es:'Hubo un pequeño defecto de fabricación, así que emitimos un retiro del mercado.', pron:'der uás a smol manyufáchuring dífect, sóu uí íshud a rikól.'}
  ],
  153: [
    {speaker:'maestro', en:'The airline industry faced challenges this year.', es:'La industria aérea enfrentó desafíos este año.', pron:'de érláin índastri féisd chálenyis dis íar.'},
    {speaker:'alumno', en:'Is the flight crew fully trained?', es:'¿La tripulación de vuelo está totalmente entrenada?', pron:'is de fláit cru fúli tréind?'},
    {speaker:'maestro', en:'Yes, and air traffic control confirmed our schedule.', es:'Sí, y el control de tráfico aéreo confirmó nuestro horario.', pron:'iés, and er tráfic cantról canférmd áur squédiul.'},
    {speaker:'alumno', en:'Did aircraft maintenance finish on time?', es:'¿El mantenimiento de aeronaves terminó a tiempo?', pron:'did érkraft méintenans fínish on táim?'},
    {speaker:'maestro', en:'Almost, right before the boarding procedure started.', es:'Casi, justo antes de que empezara el procedimiento de embarque.', pron:'ólmoust, ráit bifór de bórding prosíyur stártid.'},
    {speaker:'alumno', en:'Is there a cargo plane departing today too?', es:'¿También hay un avión de carga saliendo hoy?', pron:'is der a cárgo pléin dipárting tudéi tu?'},
    {speaker:'maestro', en:'Yes, after pilot training wraps up this week.', es:'Sí, después de que termine el entrenamiento de pilotos esta semana.', pron:'iés, áfter páilat tréining raps ap dis uíik.'},
    {speaker:'alumno', en:'Aviation safety matters more than any flight delay at airport operations.', es:'La seguridad de aviación importa más que cualquier demora de vuelo en las operaciones del aeropuerto.', pron:'éiviéishion séifti máters mor dan éni fláit diléi at érport aperéishions.'}
  ],
  154: [
    {speaker:'maestro', en:'The shipping industry moves a lot of goods, including every cargo ship.', es:'La industria naviera mueve muchos bienes, incluido cada buque de carga.', pron:'de shíping índastri múuvs a lat of guds, inclúuding évri cárgo ship.'},
    {speaker:'alumno', en:'Did the port authority approve the schedule?', es:'¿La autoridad portuaria aprobó el horario?', pron:'did de port ozóriti apruúv de squédiul?'},
    {speaker:'maestro', en:'Yes, and the container terminal is ready.', es:'Sí, y la terminal de contenedores está lista.', pron:'iés, and de cantéiner términal is rédi.'},
    {speaker:'alumno', en:'Does maritime law apply to this route?', es:'¿La ley marítima aplica a esta ruta?', pron:'das máritaim lo aplái tu dis rúut?'},
    {speaker:'maestro', en:'Yes, and vessel capacity looks good this month.', es:'Sí, y la capacidad del buque se ve bien este mes.', pron:'iés, and vésel capásiti luks gud dis manz.'},
    {speaker:'alumno', en:'Is the shipping route safe right now?', es:'¿La ruta de envío es segura ahora mismo?', pron:'is de shíping rúut séif ráit náu?'},
    {speaker:'maestro', en:'Mostly, though a dock worker mentioned a delay.', es:'Mayormente, aunque un trabajador portuario mencionó una demora.', pron:'móustli, dóu a dak uórker ménshond a diléi.'},
    {speaker:'alumno', en:'Customs inspection and marine insurance are both confirmed.', es:'La inspección de aduana y el seguro marítimo, ambos están confirmados.', pron:'cástoms inspékshion and marín inshúrans ar bóuz canférmd.'}
  ],
  155: [
    {speaker:'maestro', en:'The fashion industry moves incredibly fast.', es:'La industria de la moda se mueve increíblemente rápido.', pron:'de fáshion índastri múuvs incrédibli fast.'},
    {speaker:'alumno', en:'Is the fashion designer ready for the show?', es:'¿El diseñador de moda está listo para el desfile?', pron:'is de fáshion disáiner rédi for de shóu?'},
    {speaker:'maestro', en:'Yes, the runway show starts tonight.', es:'Sí, el desfile empieza esta noche.', pron:'iés, de ránuei shóu starts tunáit.'},
    {speaker:'alumno', en:'What textile are they using this season?', es:'¿Qué textil están usando esta temporada?', pron:'uát téxtail ar déi iúsing dis síizon?'},
    {speaker:'maestro', en:'A new one, based on this year\'s fashion trend.', es:'Uno nuevo, basado en la tendencia de moda de este año.', pron:'a niú uán, béisd on dis íars fáshion trend.'},
    {speaker:'alumno', en:'How\'s apparel manufacturing keeping up?', es:'¿Cómo se está manteniendo al día la fabricación de prendas?', pron:'jáus apárel manyufáchuring kíiping ap?'},
    {speaker:'maestro', en:'Well, though retail fashion demands more speed.', es:'Bien, aunque la moda al por menor exige más velocidad.', pron:'uél, dóu ríiteil fáshion dimánds mor spíid.'},
    {speaker:'alumno', en:'Everyone\'s excited for fashion week and every new garment.', es:'Todos están emocionados por la semana de la moda y cada prenda nueva.', pron:'évriuáns exsáitid for fáshion uíik and évri niú gárment.'}
  ],
  156: [
    {speaker:'maestro', en:'Welcome to unit thirteen, review time!', es:'¡Bienvenido a la Unidad Trece, hora de repaso!', pron:'uélcam tu iúnit zertíin, riviú táim!'},
    {speaker:'alumno', en:'Five sixths done — almost there.', es:'Cinco sextos hecho — ya casi llegamos.', pron:'fáiv sixzs dan — ólmoust der.'},
    {speaker:'maestro', en:'Just one sixth to go now.', es:'Solo un sexto por recorrer ahora.', pron:'yast uán sixz tu góu náu.'},
    {speaker:'alumno', en:'Keep the momentum going strong.', es:'Mantén el impulso fuerte.', pron:'kíip de moméntam góing strong.'},
    {speaker:'maestro', en:'This has been an amazing unit.', es:'Esta ha sido una unidad increíble.', pron:'dis jas bin an amézing iúnit.'},
    {speaker:'alumno', en:'See you in unit fourteen, next unit!', es:'¡Nos vemos en la Unidad Catorce, la próxima unidad!', pron:'síi iú in iúnit fórtíin, next iúnit!'}
  ],
  157: [
    {speaker:'maestro', en:'The pharmaceutical industry moves very carefully.', es:'La industria farmacéutica se mueve con mucho cuidado.', pron:'de fármasiútical índastri múuvs véri kérfuli.'},
    {speaker:'alumno', en:'Is this drug still in clinical trial?', es:'¿Este medicamento todavía está en ensayo clínico?', pron:'is dis drag stil in clínical tráial?'},
    {speaker:'maestro', en:'Yes, waiting for final drug approval.', es:'Sí, esperando la aprobación final del medicamento.', pron:'iés, uéiting for fáinal drag apruúval.'},
    {speaker:'alumno', en:'Will there be a generic drug version later?', es:'¿Va a haber una versión genérica después?', pron:'uil der bi a yenéric drag vérshion léiter?'},
    {speaker:'maestro', en:'Probably, after patent expiration next year.', es:'Probablemente, después del vencimiento de la patente el próximo año.', pron:'prábabli, áfter pátent expiréishion next íar.'},
    {speaker:'alumno', en:'Are the dosage instructions clear on the label?', es:'¿Las instrucciones de dosis están claras en la etiqueta?', pron:'ar de dóusich instrákshions clíar on de léibol?'},
    {speaker:'maestro', en:'Yes, and it lists possible side effects too.', es:'Sí, y también lista posibles efectos secundarios.', pron:'iés, and it lists pásibol sáid ifécts tu.'},
    {speaker:'alumno', en:'Is this a prescription drug, or over-the-counter for pharmaceutical research?', es:'¿Este es un medicamento con receta, o de venta libre para investigación farmacéutica?', pron:'is dis a priscrípshion drag, or óver-de-cáunter for fármasiútical risérch?'}
  ],
  158: [
    {speaker:'maestro', en:'The gaming industry keeps surprising everyone.', es:'La industria de videojuegos sigue sorprendiendo a todos.', pron:'de guéiming índastri kíips serpráising évriuan.'},
    {speaker:'alumno', en:'Is the game developer announcing a new title?', es:'¿El desarrollador de videojuegos está anunciando un título nuevo?', pron:'is de guéim divéloper anáunsing a niú táitol?'},
    {speaker:'maestro', en:'Yes, for the next video game console.', es:'Sí, para la próxima consola de videojuegos.', pron:'iés, for de next vídio guéim cánsoul.'},
    {speaker:'alumno', en:'Will there be in-game purchases again?', es:'¿Va a haber compras dentro del juego otra vez?', pron:'uil der bi in-guéim pérchasis aguén?'},
    {speaker:'maestro', en:'Probably, along with fresh game design ideas.', es:'Probablemente, junto con ideas frescas de diseño de juego.', pron:'prábabli, alóng uid fresh guéim disáin aidías.'},
    {speaker:'alumno', en:'How\'s the esports scene doing this year?', es:'¿Cómo está la escena de deportes electrónicos este año?', pron:'jáus de i-sports síin dúing dis íar?'},
    {speaker:'maestro', en:'Growing fast, thanks to a powerful game engine.', es:'Creciendo rápido, gracias a un motor de juego potente.', pron:'gróuing fast, zenks tu a páuerful guéim énchin.'},
    {speaker:'alumno', en:'We\'re still beta testing before releasing downloadable content to the gaming community.', es:'Todavía estamos en pruebas beta antes de lanzar contenido descargable a la comunidad de jugadores.', pron:'uír stil béita tésting bifór rilísing dáunlóudabol cántent tu de guéiming camiúniti.'}
  ],
  159: [
    {speaker:'maestro', en:'I volunteer for a non-profit organization on weekends.', es:'Soy voluntario en una organización sin fines de lucro los fines de semana.', pron:'ái váluntíar for a nan-práfit orgánaiséishion on uíikends.'},
    {speaker:'alumno', en:'Is it a charity, or something else?', es:'¿Es una obra benéfica, o algo más?', pron:'is it a chériti, or sámzin els?'},
    {speaker:'maestro', en:'A charity — we just finished a fundraising campaign.', es:'Una obra benéfica — acabamos de terminar una campaña de recaudación de fondos.', pron:'a chériti — uí yast fínisht a fándréising campéin.'},
    {speaker:'alumno', en:'Are there many donor contributions this year?', es:'¿Hay muchas contribuciones de donantes este año?', pron:'ar der méni dóunor cantribiúshions dis íar?'},
    {speaker:'maestro', en:'Yes, plus new grant funding came through.', es:'Sí, además llegó nuevo financiamiento por subvención.', pron:'iés, plas niú grant fánding kéim zru.'},
    {speaker:'alumno', en:'What social impact does your work have?', es:'¿Qué impacto social tiene tu trabajo?', pron:'uát sóushal ímpact das iór uork jav?'},
    {speaker:'maestro', en:'A big one, especially through community outreach.', es:'Uno grande, especialmente a través del alcance comunitario.', pron:'a big uán, espéshali zru camiúniti áutrich.'},
    {speaker:'alumno', en:'Do you keep your tax-exempt status every year?', es:'¿Mantienen su estatus exento de impuestos cada año?', pron:'du iú kíip iór tax-ixémpt stétus évri íar?'}
  ],
  160: [
    {speaker:'maestro', en:'The publishing industry is changing fast.', es:'La industria editorial está cambiando rápido.', pron:'de páblishing índastri is chéinying fast.'},
    {speaker:'alumno', en:'Did you finish your manuscript yet?', es:'¿Ya terminaste tu manuscrito?', pron:'did iú fínish iór mánuscrit iét?'},
    {speaker:'maestro', en:'Almost, then I\'ll contact a literary agent.', es:'Casi, después voy a contactar a un agente literario.', pron:'ólmoust, den áil cántact a líterari éichent.'},
    {speaker:'alumno', en:'Are you hoping for a big book deal?', es:'¿Esperas conseguir un gran contrato de libro?', pron:'ar iú jóuping for a big buk díil?'},
    {speaker:'maestro', en:'Yes, and I\'m already talking with an editor.', es:'Sí, y ya estoy hablando con un editor.', pron:'iés, and áim olrédi tóking uid an éditor.'},
    {speaker:'alumno', en:'What about the print run size?', es:'¿Y qué tal el tamaño de la tirada impresa?', pron:'uát abáut de print ran sáis?'},
    {speaker:'maestro', en:'Small at first, plus an ebook format release.', es:'Pequeña al principio, más un lanzamiento en formato de libro electrónico.', pron:'smol at ferst, plas an íibuk fórmat rilís.'},
    {speaker:'alumno', en:'We\'re planning the book launch, and I\'ll track the royalty statement closely.', es:'Estamos planeando el lanzamiento del libro, y voy a seguir de cerca la declaración de regalías.', pron:'uír pláning de buk lonch, and áil trak de róialti stéitment clóusli.'}
  ],
  161: [
    {speaker:'maestro', en:'The security industry relies on strong systems.', es:'La industria de seguridad depende de sistemas fuertes.', pron:'de sikiúriti índastri riláis on strong sístems.'},
    {speaker:'alumno', en:'Is the surveillance system fully updated?', es:'¿El sistema de vigilancia está totalmente actualizado?', pron:'is de servéilans sístem fúli apdéitid?'},
    {speaker:'maestro', en:'Yes, as part of our risk management plan.', es:'Sí, como parte de nuestro plan de gestión de riesgos.', pron:'iés, as part of áur risk mánechment plan.'},
    {speaker:'alumno', en:'Did everyone pass a background check?', es:'¿Todos pasaron una verificación de antecedentes?', pron:'did évriuan pas a bákgráund chek?'},
    {speaker:'maestro', en:'Yes, and access control is strict here.', es:'Sí, y el control de acceso es estricto acá.', pron:'iés, and áccess cantról is strict jíar.'},
    {speaker:'alumno', en:'How\'s physical security at this building?', es:'¿Cómo es la seguridad física en este edificio?', pron:'jáus fízical sikiúriti at dis bílding?'},
    {speaker:'maestro', en:'Solid, based on a recent threat assessment.', es:'Sólida, basada en una evaluación de amenazas reciente.', pron:'sálid, béisd on a ríisent zret asésment.'},
    {speaker:'alumno', en:'Do you need special security clearance for this emergency protocol?', es:'¿Necesitas autorización de seguridad especial para este protocolo de emergencia?', pron:'du iú níid spéshal sikiúriti clírans for dis emérgensi próutocal?'}
  ],
  162: [
    {speaker:'maestro', en:'Let\'s try to break the ice before the meeting starts.', es:'Tratemos de romper el hielo antes de que empiece la reunión.', pron:'lets trái tu bréik de áis bifór de míiting starts.'},
    {speaker:'alumno', en:'We need to cross that bridge when we come to it.', es:'Necesitamos cruzar ese puente cuando lleguemos a él.', pron:'uí níid tu cros dat brich uén uí cam tu it.'},
    {speaker:'maestro', en:'Try to keep your eye on the ball during this project.', es:'Trata de mantener el ojo en la pelota durante este proyecto.', pron:'trái tu kíip iór ái on de bol dúring dis práchect.'},
    {speaker:'alumno', en:'Don\'t try to turn the tables on me now.', es:'No trates de voltear la situación contra mí ahora.', pron:'dont trái tu tern de téibols on mi náu.'},
    {speaker:'maestro', en:'Should we try to pull the plug on this idea?', es:'¿Deberíamos tratar de desconectar esta idea?', pron:'shud uí trái tu pul de plag on dis aidía?'},
    {speaker:'alumno', en:'We seem to be back to square one again.', es:'Parece que estamos de vuelta al punto de partida otra vez.', pron:'uí síim tu bi bak tu scuér uán aguén.'},
    {speaker:'maestro', en:'Please try to give someone the benefit of the doubt here.', es:'Por favor trata de darle a alguien el beneficio de la duda acá.', pron:'plíis trái tu guiv sámuan de bénefit of de dáut jíar.'},
    {speaker:'alumno', en:'This situation really seems to hit close to home for me.', es:'Esta situación realmente parece tocarme muy de cerca.', pron:'dis situéishion ríali síims tu jit clóus tu jóum for mi.'}
  ],
  163: [
    {speaker:'maestro', en:'Urban planning is a big topic in this city.', es:'La planificación urbana es un tema importante en esta ciudad.', pron:'érban pláning is a big tápic in dis síti.'},
    {speaker:'alumno', en:'Are the current zoning laws outdated?', es:'¿Las leyes de zonificación actuales están desactualizadas?', pron:'ar de cárent sóuning los áutdeitid?'},
    {speaker:'maestro', en:'Somewhat, especially for infrastructure development.', es:'Un poco, especialmente para el desarrollo de infraestructura.', pron:'sámuát, espéshali for infraestrákchur divélopment.'},
    {speaker:'alumno', en:'Is public transportation improving downtown?', es:'¿El transporte público está mejorando en el centro?', pron:'is páblic transportéishion imprúuving dáuntaun?'},
    {speaker:'maestro', en:'Yes, and city council approved more funding.', es:'Sí, y el concejo municipal aprobó más financiamiento.', pron:'iés, and síti cáunsil apruúvd mor fánding.'},
    {speaker:'alumno', en:'How\'s land use handled for urban development?', es:'¿Cómo se maneja el uso del suelo para el desarrollo urbano?', pron:'jáus land iús jándeld for érban divélopment?'},
    {speaker:'maestro', en:'Carefully, with better traffic management now.', es:'Con cuidado, con mejor gestión del tráfico ahora.', pron:'kérfuli, uid béter tráfic mánechment náu.'},
    {speaker:'alumno', en:'This city wants more public space, and to become a sustainable city.', es:'Esta ciudad quiere más espacio público, y convertirse en una ciudad sostenible.', pron:'dis síti uánts mor páblic spéis, and tu bicám a sastéinabol síti.'}
  ],
  164: [
    {speaker:'maestro', en:'Mental health matters more at work now.', es:'La salud mental importa más en el trabajo ahora.', pron:'méntal jelz máters mor at uork náu.'},
    {speaker:'alumno', en:'Does your company offer a wellness program?', es:'¿Tu empresa ofrece un programa de bienestar?', pron:'das iór cámpani áfer a uélnes prógram?'},
    {speaker:'maestro', en:'Yes, focused on stress management too.', es:'Sí, también enfocado en el manejo del estrés.', pron:'iés, fóucasd on stres mánechment tu.'},
    {speaker:'alumno', en:'What about work-life integration?', es:'¿Y qué tal la integración entre trabajo y vida?', pron:'uát abáut uork-láif integréishion?'},
    {speaker:'maestro', en:'Better lately, thanks to our employee assistance program.', es:'Mejor últimamente, gracias a nuestro programa de asistencia al empleado.', pron:'béter léitli, zenks tu áur emplóii asístans prógram.'},
    {speaker:'alumno', en:'Do you practice mindfulness at all?', es:'¿Practicas atención plena de alguna forma?', pron:'du iú práctis máindfulnes at ol?'},
    {speaker:'maestro', en:'Sometimes, mostly for burnout prevention.', es:'A veces, principalmente para prevenir el agotamiento.', pron:'sámtaims, móustli for bérnáut privénshion.'},
    {speaker:'alumno', en:'There\'s more mental health awareness now, plus counseling services and a self-care routine.', es:'Hay más conciencia sobre la salud mental ahora, más servicios de consejería y una rutina de autocuidado.', pron:'ders mor méntal jelz auérnes náu, plas cáunseling sérvisis and a self-ker rutíin.'}
  ],
  165: [
    {speaker:'maestro', en:'Our remote team meets differently now.', es:'Nuestro equipo remoto se reúne de forma distinta ahora.', pron:'áur rimóut tíim míits díferentli náu.'},
    {speaker:'alumno', en:'Is virtual collaboration working well?', es:'¿La colaboración virtual está funcionando bien?', pron:'is vérchual calaboréishion uórking uél?'},
    {speaker:'maestro', en:'Yes, especially with asynchronous work.', es:'Sí, especialmente con el trabajo asincrónico.', pron:'iés, espéshali uid eisínkronas uork.'},
    {speaker:'alumno', en:'Are you living as a digital nomad?', es:'¿Estás viviendo como nómada digital?', pron:'ar iú líving as a díchital nóumad?'},
    {speaker:'maestro', en:'Sort of, with a proper home office setup.', es:'Más o menos, con una configuración adecuada de oficina en casa.', pron:'sort of, uid a práper jóum áfis sétap.'},
    {speaker:'alumno', en:'How\'s remote onboarding for new hires?', es:'¿Cómo es la incorporación remota para nuevas contrataciones?', pron:'jáus rimóut anbórding for niú jáiers?'},
    {speaker:'maestro', en:'Smooth, despite time zone coordination challenges.', es:'Sin problemas, a pesar de los desafíos de coordinación de zonas horarias.', pron:'smúuz, dispáit táim sóun coórdineishion chálenyis.'},
    {speaker:'alumno', en:'We even created a virtual water cooler for remote productivity in this hybrid work model.', es:'Hasta creamos un espacio virtual de charla informal para la productividad remota en este modelo de trabajo híbrido.', pron:'uí íven críeitid a vérchual uóter cúler for rimóut pradáctiviti in dis jáibrid uork mádel.'}
  ],
  166: [
    {speaker:'maestro', en:'The food and beverage industry never stops changing.', es:'La industria de alimentos y bebidas nunca deja de cambiar.', pron:'de fud and béverich índastri néver stops chéinying.'},
    {speaker:'alumno', en:'Is menu development your job now?', es:'¿El desarrollo del menú es tu trabajo ahora?', pron:'is méniu divélopment iór yab náu?'},
    {speaker:'maestro', en:'Yes, based on the latest food trends.', es:'Sí, basado en las últimas tendencias alimentarias.', pron:'iés, béisd on de léitest fud trends.'},
    {speaker:'alumno', en:'Does culinary innovation drive your restaurant chain?', es:'¿La innovación culinaria impulsa tu cadena de restaurantes?', pron:'das cúlineri inovéishion dráiv iór réstorant chéin?'},
    {speaker:'maestro', en:'Definitely, along with better food distribution.', es:'Definitivamente, junto con mejor distribución de alimentos.', pron:'définitli, alóng uid béter fud distribiúshion.'},
    {speaker:'alumno', en:'Are you working with a new beverage company?', es:'¿Estás trabajando con una nueva empresa de bebidas?', pron:'ar iú uórking uid a niú béverich cámpani?'},
    {speaker:'maestro', en:'Yes, focused on sustainable sourcing too.', es:'Sí, también enfocada en abastecimiento sostenible.', pron:'iés, fóucasd on sastéinabol sórsing tu.'},
    {speaker:'alumno', en:'We just finished a full round of taste testing this week.', es:'Acabamos de terminar una ronda completa de degustación esta semana.', pron:'uí yast fínisht a fúl ráund of téist tésting dis uíik.'}
  ],
  167: [
    {speaker:'maestro', en:'Waste management needs constant attention.', es:'La gestión de residuos necesita atención constante.', pron:'uéist mánechment níids cánstant aténshion.'},
    {speaker:'alumno', en:'Is the recycling program working well?', es:'¿El programa de reciclaje está funcionando bien?', pron:'is de risáikling prógram uórking uél?'},
    {speaker:'maestro', en:'Yes, thanks to our local utility company.', es:'Sí, gracias a nuestra empresa local de servicios públicos.', pron:'iés, zenks tu áur lóucal iutíliti cámpani.'},
    {speaker:'alumno', en:'What about water treatment nearby?', es:'¿Y qué tal el tratamiento de agua cerca?', pron:'uát abáut uóter tríitment níarbái?'},
    {speaker:'maestro', en:'Solid, and the energy grid stays stable.', es:'Sólido, y la red eléctrica se mantiene estable.', pron:'sálid, and de énerchi grid stéis stéibol.'},
    {speaker:'alumno', en:'Are we improving waste reduction efforts?', es:'¿Estamos mejorando los esfuerzos de reducción de residuos?', pron:'ar uí imprúuving uéist ridákshion éforts?'},
    {speaker:'maestro', en:'Yes, and public utilities support that too.', es:'Sí, y los servicios públicos también apoyan eso.', pron:'iés, and páblic iutílitis sapórt dat tu.'},
    {speaker:'alumno', en:'Sanitation services and infrastructure maintenance both follow strict environmental regulation.', es:'Los servicios de saneamiento y el mantenimiento de infraestructura, ambos siguen una regulación ambiental estricta.', pron:'sanitéishion sérvisis and infraestrákchur méintenans bóuz fálou strict environméntal reguleishion.'}
  ],
  168: [
    {speaker:'maestro', en:'Welcome to unit fourteen, almost there!', es:'¡Bienvenido a la Unidad Catorce, ya casi llegamos!', pron:'uélcam tu iúnit fórtíin, ólmoust der!'},
    {speaker:'alumno', en:'Only twelve days left now.', es:'Solo faltan doce días ahora.', pron:'óunli tuélv déis left náu.'},
    {speaker:'maestro', en:'The final unit ahead feels exciting.', es:'La unidad final que viene se siente emocionante.', pron:'de fáinal iúnit ajéd fíils exsáiting.'},
    {speaker:'alumno', en:'We are so close to finishing.', es:'Estamos tan cerca de terminar.', pron:'uí ar sóu clóus tu fínishing.'},
    {speaker:'maestro', en:'See you in unit fifteen, the last unit!', es:'¡Nos vemos en la Unidad Quince, la última unidad!', pron:'síi iú in iúnit fiftíin, de last iúnit!'},
    {speaker:'alumno', en:'Thanks, see you in the last unit!', es:'¡Gracias, nos vemos en la última unidad!', pron:'zenks, síi iú in de last iúnit!'}
  ],
  169: [
    {speaker:'maestro', en:'This trade summit brings many countries together.', es:'Esta cumbre comercial reúne a muchos países.', pron:'dis tréid sámit brings méni cántris tugéder.'},
    {speaker:'alumno', en:'Are diplomatic relations improving this year?', es:'¿Las relaciones diplomáticas están mejorando este año?', pron:'ar diplomátic riléishions imprúuving dis íar?'},
    {speaker:'maestro', en:'Yes, especially after that bilateral agreement.', es:'Sí, especialmente después de ese acuerdo bilateral.', pron:'iés, espéshali áfter dat bailáteral agríiment.'},
    {speaker:'alumno', en:'Is our delegation ready for the talks?', es:'¿Nuestra delegación está lista para las conversaciones?', pron:'is áur delegéishion rédi for de toks?'},
    {speaker:'maestro', en:'Yes, focused on international cooperation.', es:'Sí, enfocada en la cooperación internacional.', pron:'iés, fóucasd on internáshional cooperéishion.'},
    {speaker:'alumno', en:'What about the economic partnership discussion?', es:'¿Y qué tal la discusión sobre la asociación económica?', pron:'uát abáut de ecanámic pártnership discáshion?'},
    {speaker:'maestro', en:'It\'s part of the treaty negotiation happening now.', es:'Es parte de la negociación de tratados que está pasando ahora.', pron:'its part of de tríti nigoushiéishion jápening náu.'},
    {speaker:'alumno', en:'This cultural exchange helps the global economy, and it\'s right on the summit agenda.', es:'Este intercambio cultural ayuda a la economía global, y está justo en la agenda de la cumbre.', pron:'dis cálchural exchéinch jelps de glóubal ecánomi, and its ráit on de sámit ayénda.'}
  ],
  170: [
    {speaker:'maestro', en:'Our team announced a scientific breakthrough today, after years of research and development.', es:'Nuestro equipo anunció un avance científico hoy, después de años de investigación y desarrollo.', pron:'áur tíim anáunsd a sáientific bréikzru tudéi, áfter íars of risérch and divélopment.'},
    {speaker:'alumno', en:'Did this come from the university laboratory?', es:'¿Esto vino del laboratorio universitario?', pron:'did dis cam fram de iunivérsiti láboratori?'},
    {speaker:'maestro', en:'Yes, after a thorough peer review process.', es:'Sí, después de un proceso de revisión por pares exhaustivo.', pron:'iés, áfter a zórou píar riviú práses.'},
    {speaker:'alumno', en:'Was this funded by a research grant?', es:'¿Esto fue financiado por una subvención de investigación?', pron:'uás dis fánded bái a risérch grant?'},
    {speaker:'maestro', en:'Partly, plus support from our innovation lab.', es:'En parte, más apoyo de nuestro laboratorio de innovación.', pron:'pártli, plas sapórt fram áur inovéishion lab.'},
    {speaker:'alumno', en:'Are you filing a patent application soon?', es:'¿Van a presentar una solicitud de patente pronto?', pron:'ar iú fáiling a pátent aplikéishion súun?'},
    {speaker:'maestro', en:'Yes, thanks to strong scientific collaboration.', es:'Sí, gracias a una fuerte colaboración científica.', pron:'iés, zenks tu strong sáientific colaboréishion.'},
    {speaker:'alumno', en:'These research findings could lead to real technology transfer.', es:'Estos hallazgos de investigación podrían llevar a una verdadera transferencia de tecnología.', pron:'díis risérch fáindings cud líid tu ríal teknáloyi tránsfer.'}
  ],
  171: [
    {speaker:'maestro', en:'Our family believes strongly in philanthropy.', es:'Nuestra familia cree firmemente en la filantropía.', pron:'áur fámili bilíivs strongli in filántropi.'},
    {speaker:'alumno', en:'Do you want to build a lasting legacy?', es:'¿Quieres construir un legado duradero?', pron:'du iú uánt tu bild a lásting légasi?'},
    {speaker:'maestro', en:'Yes, through our charitable foundation.', es:'Sí, a través de nuestra fundación benéfica.', pron:'iés, zru áur chéritabol fáundeishion.'},
    {speaker:'alumno', en:'Did you set up an endowment fund?', es:'¿Establecieron un fondo de dotación?', pron:'did iú set ap an indáument fand?'},
    {speaker:'maestro', en:'Yes, focused on philanthropic giving long term.', es:'Sí, enfocado en la donación filantrópica a largo plazo.', pron:'iés, fóucasd on filantrópic guíving long term.'},
    {speaker:'alumno', en:'Is social responsibility part of your values?', es:'¿La responsabilidad social es parte de sus valores?', pron:'is sóushal risponsibíliti part of iór váliuz?'},
    {speaker:'maestro', en:'Absolutely, especially community investment.', es:'Absolutamente, especialmente la inversión en la comunidad.', pron:'ábsoliutli, espéshali camiúniti invéstment.'},
    {speaker:'alumno', en:'This is really about legacy planning, and giving back to others.', es:'Esto realmente se trata de la planificación del legado, y retribuir a otros.', pron:'dis is ríali abáut légasi pláning, and guíving bak tu áders.'}
  ],
  172: [
    {speaker:'maestro', en:'I started retirement planning last year.', es:'Empecé la planificación de jubilación el año pasado.', pron:'ái stártid ritáierment pláning last íar.'},
    {speaker:'alumno', en:'Do you contribute to a pension fund?', es:'¿Contribuyes a un fondo de pensiones?', pron:'du iú cantríbiut tu a pénshion fand?'},
    {speaker:'maestro', en:'Yes, along with personal retirement savings.', es:'Sí, junto con ahorros personales de jubilación.', pron:'iés, alóng uid pérsonal ritáierment séivings.'},
    {speaker:'alumno', en:'Is financial independence your main goal?', es:'¿La independencia financiera es tu meta principal?', pron:'is fainánshial independéns iór méin góul?'},
    {speaker:'maestro', en:'Yes, well before typical retirement age.', es:'Sí, mucho antes de la edad de jubilación típica.', pron:'iés, uél bifór típical ritáierment éich.'},
    {speaker:'alumno', en:'Are you also doing estate planning?', es:'¿También estás haciendo planificación patrimonial?', pron:'ar iú ólsou dúing estéit pláning?'},
    {speaker:'maestro', en:'Yes, to protect my future retirement lifestyle.', es:'Sí, para proteger mi futuro estilo de vida de jubilación.', pron:'iés, tu pratéct mái fiúchur ritáierment láifstáil.'},
    {speaker:'alumno', en:'I\'m building a solid nest egg in my retirement account.', es:'Estoy construyendo un buen ahorro en mi cuenta de retiro.', pron:'áim bílding a sálid nest eg in mái ritáierment acáunt.'}
  ],
  173: [
    {speaker:'maestro', en:'You will try to leave a lasting impression here.', es:'Vas a tratar de dejar una impresión duradera acá.', pron:'iú uil trái tu líiv a lásting impréshion jíar.'},
    {speaker:'alumno', en:'It feels like we\'re starting to come full circle.', es:'Se siente como que estamos empezando a cerrar el círculo.', pron:'it fíils láik uír stárting tu cam fúl sércol.'},
    {speaker:'maestro', en:'This idea will try to stand the test of time.', es:'Esta idea va a tratar de resistir el paso del tiempo.', pron:'dis aidía uil trái tu stand de test of táim.'},
    {speaker:'alumno', en:'You really try to pave the way for others.', es:'Realmente tratas de abrir el camino para otros.', pron:'iú ríali trái tu péiv de uéi for áders.'},
    {speaker:'maestro', en:'You will get to reap what you sow in the end.', es:'Vas a llegar a cosechar lo que siembras al final.', pron:'iú uil guet tu ríip uát iú sóu in de end.'},
    {speaker:'alumno', en:'Did you try to rise to the occasion today?', es:'¿Trataste de estar a la altura de las circunstancias hoy?', pron:'did iú trái tu ráis tu de akéishion tudéi?'},
    {speaker:'maestro', en:'I want to leave your mark on this project.', es:'Quiero que dejes tu huella en este proyecto.', pron:'ái uánt tu líiv iór mark on dis práchect.'},
    {speaker:'alumno', en:'Let\'s try to go the distance together.', es:'Tratemos de llegar hasta el final juntos.', pron:'lets trái tu góu de dístans tugéder.'}
  ],
  174: [
    {speaker:'maestro', en:'I\'m working on my personal branding this year.', es:'Estoy trabajando en mi marca personal este año.', pron:'áim uórking on mái pérsonal bránding dis íar.'},
    {speaker:'alumno', en:'Is your professional reputation improving?', es:'¿Tu reputación profesional está mejorando?', pron:'is iór proféshional repiutéishion imprúuving?'},
    {speaker:'maestro', en:'Yes, especially with a stronger online presence.', es:'Sí, especialmente con una presencia en línea más fuerte.', pron:'iés, espéshali uid a strónguer ónláin prézens.'},
    {speaker:'alumno', en:'Did you update your personal website?', es:'¿Actualizaste tu sitio web personal?', pron:'did iú apdéit iór pérsonal uébsait?'},
    {speaker:'maestro', en:'Yes, along with my career narrative.', es:'Sí, junto con mi narrativa de carrera.', pron:'iés, alóng uid mái karíir nárativ.'},
    {speaker:'alumno', en:'What about your networking profile?', es:'¿Y qué tal tu perfil de networking?', pron:'uát abáut iór nétuorking próufail?'},
    {speaker:'maestro', en:'Refreshed, with a clear personal values statement.', es:'Renovado, con una declaración clara de valores personales.', pron:'rifréshd, uid a clíar pérsonal váliuz stéitment.'},
    {speaker:'alumno', en:'Reputation management, career milestones, and professional legacy all matter now.', es:'La gestión de la reputación, los hitos de carrera, y el legado profesional, todo importa ahora.', pron:'repiutéishion mánechment, karíir máilstouns, and proféshional légasi ol máter náu.'}
  ],
  175: [
    {speaker:'maestro', en:'The future of work keeps changing fast.', es:'El futuro del trabajo sigue cambiando rápido.', pron:'de fiúchur of uork kíips chéinying fast.'},
    {speaker:'alumno', en:'Is workplace automation affecting your job?', es:'¿La automatización laboral está afectando tu trabajo?', pron:'is uórkpleis otoméishion aféckting iór yab?'},
    {speaker:'maestro', en:'Somewhat, especially given the skills gap.', es:'Un poco, especialmente dada la brecha de habilidades.', pron:'sámuát, espéshali guíven de skils gap.'},
    {speaker:'alumno', en:'Are you focused on lifelong learning now?', es:'¿Estás enfocado en el aprendizaje continuo ahora?', pron:'ar iú fóucasd on láiflong lérning náu?'},
    {speaker:'maestro', en:'Yes, to stay part of an adaptive workforce.', es:'Sí, para seguir siendo parte de una fuerza laboral adaptable.', pron:'iés, tu stéi part of an adáptiv uórkfors.'},
    {speaker:'alumno', en:'What about emerging careers in your field?', es:'¿Y qué tal las carreras emergentes en tu campo?', pron:'uát abáut iméryin karíirs in iór fíild?'},
    {speaker:'maestro', en:'Growing, despite technological disruption everywhere.', es:'Creciendo, a pesar de la disrupción tecnológica en todos lados.', pron:'gróuing, dispáit teknáloyical disrápshion évriuér.'},
    {speaker:'alumno', en:'Workforce planning, upskilling, and career resilience matter more than ever.', es:'La planificación de la fuerza laboral, la mejora de habilidades, y la resiliencia profesional importan más que nunca.', pron:'uórkfors pláning, ápskiling, and karíir risíliens máter mor dan éver.'}
  ],
  176: [
    {speaker:'maestro', en:'Real business acumen takes years to develop.', es:'La verdadera perspicacia empresarial toma años en desarrollarse.', pron:'ríal bísnes ákiuman téiks íars tu divélop.'},
    {speaker:'alumno', en:'Is strategic thinking part of your daily work?', es:'¿El pensamiento estratégico es parte de tu trabajo diario?', pron:'is stratéyic zínking part of iór déili uork?'},
    {speaker:'maestro', en:'Yes, especially in cross-functional collaboration.', es:'Sí, especialmente en la colaboración interfuncional.', pron:'iés, espéshali in cros-fánkshional calaboréishion.'},
    {speaker:'alumno', en:'Does executive presence matter in meetings?', es:'¿La presencia ejecutiva importa en las reuniones?', pron:'das ecsékiutiv prézens máter in míitings?'},
    {speaker:'maestro', en:'Definitely, along with a clear decision framework.', es:'Definitivamente, junto con un marco de decisión claro.', pron:'définitli, alóng uid a clíar disíshion fréimuork.'},
    {speaker:'alumno', en:'How\'s your stakeholder management improving?', es:'¿Cómo está mejorando tu gestión de las partes interesadas?', pron:'jáus iór stéikjolder mánechment imprúuving?'},
    {speaker:'maestro', en:'Better, thanks to growing business fluency.', es:'Mejor, gracias a la creciente fluidez de negocios.', pron:'béter, zenks tu gróuing bísnes flúensi.'},
    {speaker:'alumno', en:'This comprehensive review really shows your professional growth toward mastery.', es:'Este repaso integral realmente muestra tu crecimiento profesional hacia el dominio.', pron:'dis camprijénsiv riviú ríali shóus iór proféshional gróuz tuórd mástri.'}
  ],
  177: [
    {speaker:'maestro', en:'Good intercultural communication takes real effort.', es:'La buena comunicación intercultural toma verdadero esfuerzo.', pron:'gud intercálchural camiunikéishion téiks ríal éfort.'},
    {speaker:'alumno', en:'Do you have a global mindset now?', es:'¿Tienes una mentalidad global ahora?', pron:'du iú jav a glóubal máindset náu?'},
    {speaker:'maestro', en:'Yes, built through real cultural competence.', es:'Sí, construida a través de verdadera competencia cultural.', pron:'iés, bilt zru ríal cálchural cámpitens.'},
    {speaker:'alumno', en:'Are diverse perspectives welcome on your team?', es:'¿Las perspectivas diversas son bienvenidas en tu equipo?', pron:'ar daivérs perspéctivs uélcam on iór tíim?'},
    {speaker:'maestro', en:'Always, thanks to inclusive leadership.', es:'Siempre, gracias al liderazgo inclusivo.', pron:'ólueis, zenks tu inclúsiv líidership.'},
    {speaker:'alumno', en:'How\'s your communication style adapting?', es:'¿Cómo se está adaptando tu estilo de comunicación?', pron:'jáus iór camiunikéishion stáil adápting?'},
    {speaker:'maestro', en:'Well, especially working with a global team.', es:'Bien, especialmente trabajando con un equipo global.', pron:'uél, espéshali uórking uid a glóubal tíim.'},
    {speaker:'alumno', en:'Cultural adaptability and respectful dialogue create unity in diversity.', es:'La adaptabilidad cultural y el diálogo respetuoso crean unidad en la diversidad.', pron:'cálchural adaptabíliti and rispéctful dáialog críeit iúniti in daivérsiti.'}
  ],
  178: [
    {speaker:'maestro', en:'Tonight is our achievement celebration.', es:'Esta noche es nuestra celebración de logro.', pron:'tunáit is áur achíivment selebréishion.'},
    {speaker:'alumno', en:'Is there a recognition ceremony too?', es:'¿También hay una ceremonia de reconocimiento?', pron:'is der a recognísion sériimoni tu?'},
    {speaker:'maestro', en:'Yes, with a special award for everyone.', es:'Sí, con un premio especial para todos.', pron:'iés, uid a spéshal auórd for évriuan.'},
    {speaker:'alumno', en:'This feels like a real milestone celebration.', es:'Esto se siente como una verdadera celebración de hito.', pron:'dis fíils láik a ríal máilstoun selebréishion.'},
    {speaker:'maestro', en:'I\'m filled with gratitude for this accomplishment.', es:'Estoy lleno de gratitud por este logro.', pron:'áim fild uid grátitiud for dis acámplishment.'},
    {speaker:'alumno', en:'This is truly a proud moment for all of us.', es:'Este es verdaderamente un momento de orgullo para todos nosotros.', pron:'dis is trúli a práud móument for ol of as.'},
    {speaker:'maestro', en:'This hard-earned success marks our journey\'s end.', es:'Este éxito bien merecido marca el final de nuestro viaje.', pron:'dis jard-érnd sacsés marks áur yérnis end.'}
  ],
  179: [
    {speaker:'maestro', en:'Tonight is our final review together.', es:'Esta noche es nuestro repaso final juntos.', pron:'tunáit is áur fáinal riviú tugéder.'},
    {speaker:'alumno', en:'We\'re almost done with this whole course.', es:'Ya casi terminamos todo este curso.', pron:'uír ólmoust dan uid dis jóul cors.'},
    {speaker:'maestro', en:'Just one day left now.', es:'Solo queda un día ahora.', pron:'yast uán déi left náu.'},
    {speaker:'alumno', en:'I am so proud of you.', es:'Estoy muy orgulloso de ti.', pron:'ái am sóu práud of iú.'},
    {speaker:'maestro', en:'This has been an incredible journey.', es:'Este ha sido un viaje increíble.', pron:'dis jas bin an incrédibol yérni.'},
    {speaker:'alumno', en:'It was truly an unforgettable experience.', es:'Fue verdaderamente una experiencia inolvidable.', pron:'it uás trúli an anforguétabol expíriens.'},
    {speaker:'maestro', en:'Are you ready for anything tomorrow?', es:'¿Estás listo para cualquier cosa mañana?', pron:'ar iú rédi for énizin tumórou?'},
    {speaker:'alumno', en:'Yes, bring on the last lesson!', es:'¡Sí, que llegue la última lección!', pron:'iés, bring on de last léson!'}
  ],
  180: [
    {speaker:'maestro', en:'Congratulations! You did it — course complete!', es:'¡Felicitaciones! Lo lograste — ¡curso completo!', pron:'cangrachuléishions! iú did it — cors camplíit!'},
    {speaker:'alumno', en:'I feel truly fluent now.', es:'Me siento verdaderamente fluido ahora.', pron:'ái fíil trúli flúent náu.'},
    {speaker:'maestro', en:'You are a confident speaker of English.', es:'Eres un hablante seguro de inglés.', pron:'iú ar a cánfident spíiker of ínglish.'},
    {speaker:'alumno', en:'I am a real English user finally.', es:'Finalmente soy un usuario real del inglés.', pron:'ái am a ríal ínglish iúser fáinali.'},
    {speaker:'maestro', en:'This is a lifelong skill I\'ll always have.', es:'Esta es una habilidad de por vida que siempre voy a tener.', pron:'dis is a láiflong skil áil ólueis jav.'},
    {speaker:'alumno', en:'Let\'s celebrate this new chapter beginning.', es:'Celebremos este nuevo capítulo que empieza.', pron:'lets sélebreit dis niú cháper biguíning.'},
    {speaker:'maestro', en:'Welcome, dragon graduate — you earned this!', es:'Bienvenido, graduado dragón — ¡te ganaste esto!', pron:'uélcam, drágon gráchueit — iú érnd dis!'}
  ]
};

const unitDialogueReinforcement = {
  169: [
    {speaker:'maestro', en:'Let\'s review unit fourteen — starting with pharmaceutical industry.', es:'Repasemos la Unidad Catorce — empezando con la industria farmacéutica.', pron:'lets riviú iúnit fórtíin — stárting uid fármasiútical índastri.'},
    {speaker:'alumno', en:'Sure, remember clinical trial and drug approval steps.', es:'Claro, recuerda los pasos del ensayo clínico y la aprobación de medicamentos.', pron:'shur, rimémber clínical tráial and drag apruúval steps.'},
    {speaker:'maestro', en:'A generic drug appears after patent expiration.', es:'Un medicamento genérico aparece después del vencimiento de la patente.', pron:'a yenéric drag apíars áfter pátent expiréishion.'},
    {speaker:'alumno', en:'Always follow dosage instructions, watching for side effects.', es:'Siempre sigue las instrucciones de dosis, atento a los efectos secundarios.', pron:'ólueis fálou dóusich instrákshions, uáching for sáid ifécts.'},
    {speaker:'maestro', en:'Some are prescription drug, others over-the-counter, thanks to pharmaceutical research.', es:'Algunos son medicamentos con receta, otros de venta libre, gracias a la investigación farmacéutica.', pron:'sam ar priscrípshion drag, áders óver-de-cáunter, zenks tu fármasiútical risérch.'},
    {speaker:'alumno', en:'Now gaming industry — the game developer and video game console.', es:'Ahora industria de videojuegos — el desarrollador de videojuegos y la consola de videojuegos.', pron:'náu guéiming índastri — de guéim divéloper and vídio guéim cánsoul.'},
    {speaker:'maestro', en:'In-game purchases connect to game design and esports.', es:'Las compras dentro del juego se conectan al diseño de juego y a los deportes electrónicos.', pron:'in-guéim pérchasis canéct tu guéim disáin and i-sports.'},
    {speaker:'alumno', en:'The game engine needs beta testing before the gaming community gets downloadable content.', es:'El motor de juego necesita pruebas beta antes de que la comunidad de jugadores reciba contenido descargable.', pron:'de guéim énchin níids béita tésting bifór de guéiming camiúniti guets dáunlóudabol cántent.'},
    {speaker:'maestro', en:'For non-profit organization — a charity runs a fundraising campaign.', es:'Para organización sin fines de lucro — una obra benéfica dirige una campaña de recaudación de fondos.', pron:'for nan-práfit orgánaiséishion — a chériti rans a fándréising campéin.'},
    {speaker:'alumno', en:'A volunteer and donor both support grant funding for social impact.', es:'Un voluntario y un donante, ambos apoyan el financiamiento por subvención para impacto social.', pron:'a váluntíar and dóunor bóuz sapórt grant fánding for sóushal ímpact.'},
    {speaker:'maestro', en:'Community outreach helps maintain tax-exempt status.', es:'El alcance comunitario ayuda a mantener el estatus exento de impuestos.', pron:'camiúniti áutrich jelps méintein tax-ixémpt stétus.'},
    {speaker:'alumno', en:'Now publishing industry — the manuscript and literary agent.', es:'Ahora industria editorial — el manuscrito y el agente literario.', pron:'náu páblishing índastri — de mánuscrit and líterari éichent.'},
    {speaker:'maestro', en:'A book deal involves the editor, print run, and ebook format.', es:'Un contrato de libro involucra al editor, la tirada impresa, y el formato de libro electrónico.', pron:'a buk díil invólvs de éditor, print ran, and íibuk fórmat.'},
    {speaker:'alumno', en:'The book launch depends on the royalty statement.', es:'El lanzamiento del libro depende de la declaración de regalías.', pron:'de buk lonch dipénds on de róialti stéitment.'},
    {speaker:'maestro', en:'For security industry — the surveillance system and risk management.', es:'Para industria de seguridad — el sistema de vigilancia y la gestión de riesgos.', pron:'for sikiúriti índastri — de servéilans sístem and risk mánechment.'},
    {speaker:'alumno', en:'A background check supports access control and physical security.', es:'Una verificación de antecedentes apoya el control de acceso y la seguridad física.', pron:'a bákgráund chek sapórts áccess cantról and fízical sikiúriti.'},
    {speaker:'maestro', en:'A threat assessment requires security clearance for the emergency protocol.', es:'Una evaluación de amenazas requiere autorización de seguridad para el protocolo de emergencia.', pron:'a zret asésment ricuáiars sikiúriti clírans for de emérgensi próutocal.'},
    {speaker:'alumno', en:'Some idioms now — let\'s try to break the ice today.', es:'Algunos modismos ahora — tratemos de romper el hielo hoy.', pron:'sam ídioms náu — lets trái tu bréik de áis tudéi.'},
    {speaker:'maestro', en:'We\'ll try to cross that bridge when we come to it.', es:'Vamos a tratar de cruzar ese puente cuando lleguemos a él.', pron:'uíl trái tu cros dat brich uén uí cam tu it.'},
    {speaker:'alumno', en:'Try to keep your eye on the ball, don\'t try to turn the tables.', es:'Trata de mantener el ojo en la pelota, no trates de voltear la situación.', pron:'trái tu kíip iór ái on de bol, dont trái tu tern de téibols.'},
    {speaker:'maestro', en:'Should we try to pull the plug, or did we try to be back to square one?', es:'¿Deberíamos tratar de desconectar esto, o tratamos de volver al punto de partida?', pron:'shud uí trái tu pul de plag, or did uí trái tu bi bak tu scuér uán?'},
    {speaker:'alumno', en:'Try to give someone the benefit of the doubt if it seems to hit close to home.', es:'Trata de darle a alguien el beneficio de la duda si parece tocarte muy de cerca.', pron:'trái tu guiv sámuan de bénefit of de dáut if it síims tu jit clóus tu jóum.'},
    {speaker:'maestro', en:'For urban planning — zoning laws and infrastructure development.', es:'Para planificación urbana — leyes de zonificación y desarrollo de infraestructura.', pron:'for érban pláning — sóuning los and infraestrákchur divélopment.'},
    {speaker:'alumno', en:'Public transportation depends on the city council\'s land use decisions.', es:'El transporte público depende de las decisiones del concejo municipal sobre el uso del suelo.', pron:'páblic transportéishion dipénds on de síti cáunsils land iús disíshions.'},
    {speaker:'maestro', en:'Urban development needs traffic management for public space.', es:'El desarrollo urbano necesita gestión del tráfico para el espacio público.', pron:'érban divélopment níids tráfic mánechment for páblic spéis.'},
    {speaker:'alumno', en:'This makes a truly sustainable city.', es:'Esto hace una ciudad verdaderamente sostenible.', pron:'dis méiks a trúli sastéinabol síti.'},
    {speaker:'maestro', en:'Now mental health — a wellness program helps stress management.', es:'Ahora salud mental — un programa de bienestar ayuda con el manejo del estrés.', pron:'náu méntal jelz — a uélnes prógram jelps stres mánechment.'},
    {speaker:'alumno', en:'Work-life integration improves with an employee assistance program.', es:'La integración entre trabajo y vida mejora con un programa de asistencia al empleado.', pron:'uork-láif integréishion imprúuvs uid an emplóii asístans prógram.'},
    {speaker:'maestro', en:'Mindfulness supports burnout prevention and mental health awareness.', es:'La atención plena apoya la prevención del agotamiento y la conciencia sobre la salud mental.', pron:'máindfulnes sapórts bérnáut privénshion and méntal jelz auérnes.'},
    {speaker:'alumno', en:'Counseling services and a self-care routine matter too.', es:'Los servicios de consejería y una rutina de autocuidado también importan.', pron:'cáunseling sérvisis and a self-ker rutíin máter tu.'},
    {speaker:'maestro', en:'For remote team — virtual collaboration and asynchronous work.', es:'Para equipo remoto — colaboración virtual y trabajo asincrónico.', pron:'for rimóut tíim — vérchual calaboréishion and eisínkronas uork.'},
    {speaker:'alumno', en:'A digital nomad needs a good home office setup.', es:'Un nómada digital necesita una buena configuración de oficina en casa.', pron:'a díchital nóumad níids a gud jóum áfis sétap.'},
    {speaker:'maestro', en:'Remote onboarding requires time zone coordination.', es:'La incorporación remota requiere coordinación de zonas horarias.', pron:'rimóut anbórding ricuáiars táim sóun coórdineishion.'},
    {speaker:'alumno', en:'A virtual water cooler boosts remote productivity in a hybrid work model.', es:'Un espacio virtual de charla informal impulsa la productividad remota en un modelo de trabajo híbrido.', pron:'a vérchual uóter cúler busts rimóut pradáctiviti in a jáibrid uork mádel.'},
    {speaker:'maestro', en:'Now food and beverage industry — menu development follows food trends.', es:'Ahora industria de alimentos y bebidas — el desarrollo del menú sigue las tendencias alimentarias.', pron:'náu fud and béverich índastri — méniu divélopment fálous fud trends.'},
    {speaker:'alumno', en:'Culinary innovation drives every restaurant chain.', es:'La innovación culinaria impulsa cada cadena de restaurantes.', pron:'cúlineri inovéishion dráivs évri réstorant chéin.'},
    {speaker:'maestro', en:'Food distribution works with a beverage company on sustainable sourcing.', es:'La distribución de alimentos trabaja con una empresa de bebidas en abastecimiento sostenible.', pron:'fud distribiúshion uorks uid a béverich cámpani on sastéinabol sórsing.'},
    {speaker:'alumno', en:'Everything gets confirmed through taste testing.', es:'Todo se confirma a través de la degustación.', pron:'évrizin guets canférmd zru téist tésting.'},
    {speaker:'maestro', en:'For waste management — the recycling program and utility company.', es:'Para gestión de residuos — el programa de reciclaje y la empresa de servicios públicos.', pron:'for uéist mánechment — de risáikling prógram and iutíliti cámpani.'},
    {speaker:'alumno', en:'Water treatment and the energy grid support waste reduction.', es:'El tratamiento de agua y la red eléctrica apoyan la reducción de residuos.', pron:'uóter tríitment and de énerchi grid sapórt uéist ridákshion.'},
    {speaker:'maestro', en:'Public utilities and sanitation services need infrastructure maintenance.', es:'Los servicios públicos y los servicios de saneamiento necesitan mantenimiento de infraestructura.', pron:'páblic iutílitis and sanitéishion sérvisis níid infraestrákchur méintenans.'},
    {speaker:'alumno', en:'All of this follows strict environmental regulation.', es:'Todo esto sigue una regulación ambiental estricta.', pron:'ol of dis fálous strict environméntal reguleishion.'},
    {speaker:'maestro', en:'Unit fourteen is done — almost there!', es:'¡La Unidad Catorce está lista — ya casi llegamos!', pron:'iúnit fórtíin is dan — ólmoust der!'},
    {speaker:'alumno', en:'Only twelve days left, with the final unit ahead.', es:'Solo faltan doce días, con la unidad final por delante.', pron:'óunli tuélv déis left, uid de fáinal iúnit ajéd.'},
    {speaker:'maestro', en:'So close now — see you in unit fifteen, the last unit!', es:'Tan cerca ahora — ¡nos vemos en la Unidad Quince, la última unidad!', pron:'sóu clóus náu — síi iú in iúnit fiftíin, de last iúnit!'}
  ],
  157: [
    {speaker:'maestro', en:'Let\'s review unit thirteen — starting with fitness.', es:'Repasemos la Unidad Trece — empezando con el estado físico.', pron:'lets riviú iúnit zertíin — stárting uid fítnes.'},
    {speaker:'alumno', en:'Sure, my gym membership includes a personal trainer now.', es:'Claro, mi membresía del gimnasio incluye un entrenador personal ahora.', pron:'shur, mái yim mémbership inclúuds a pérsonal tréiner náu.'},
    {speaker:'maestro', en:'My workout routine mixes cardio and strength training.', es:'Mi rutina de ejercicio combina cardio y entrenamiento de fuerza.', pron:'mái uórkáut rutíin míxis cárdio and strengz tréining.'},
    {speaker:'alumno', en:'Our sports team is preparing for a tournament.', es:'Nuestro equipo deportivo se está preparando para un torneo.', pron:'áur sports tíim is pripéring for a túrnament.'},
    {speaker:'maestro', en:'That athlete just signed a sponsorship deal.', es:'Ese atleta acaba de firmar un contrato de patrocinio.', pron:'dat ázlit yast sáind a spánsorship díil.'},
    {speaker:'alumno', en:'Now, weddings — remember the groom and bride\'s plans?', es:'Ahora, bodas — ¿recuerdas los planes del novio y la novia?', pron:'náu, uédings — rimémber de grum and bráids plans?'},
    {speaker:'maestro', en:'Yes, the wedding planner arranged the guest of honor\'s seat.', es:'Sí, el organizador de bodas arregló el asiento del invitado de honor.', pron:'iés, de uéding pláner aréinchd de guest of ánors síit.'},
    {speaker:'alumno', en:'The wedding vows were beautiful at the reception.', es:'Los votos matrimoniales fueron hermosos en la recepción.', pron:'de uéding vóus uér biútiful at de riséption.'},
    {speaker:'maestro', en:'It was also their anniversary — the celebration budget covered everything.', es:'También era su aniversario — el presupuesto de celebración cubrió todo.', pron:'it uás ólsou der aniversari — de selebréishion báchet cáverd évrizin.'},
    {speaker:'alumno', en:'For court — the judge, lawyer, and lawsuit matter most.', es:'Para el tribunal — el juez, el abogado, y la demanda importan más.', pron:'for cort — de yach, de lóier, and de lósut máter móust.'},
    {speaker:'maestro', en:'Testimony leads to a verdict, decided by the jury.', es:'El testimonio lleva a un veredicto, decidido por el jurado.', pron:'téstimoni líids tu a vérdict, disáidid bái de yúri.'},
    {speaker:'alumno', en:'These legal proceedings might end in a settlement for the plaintiff.', es:'Estos procesos legales podrían terminar en un acuerdo para el demandante.', pron:'díis líigal prosíidings máit end in a sétolment for de pléintif.'},
    {speaker:'maestro', en:'Now bank branch — remember the teller and overdraft issues.', es:'Ahora sucursal del banco — recuerda al cajero y los problemas de sobregiro.', pron:'náu bank branch — rimémber de téler and óverdraft íshus.'},
    {speaker:'alumno', en:'Check your account statement, and set up direct deposit.', es:'Revisa tu extracto de cuenta, y configura el depósito directo.', pron:'chek iór acáunt stéitment, and set ap diréct dipázit.'},
    {speaker:'maestro', en:'Find the nearest ATM for online banking, watch for any bank hold.', es:'Encuentra el cajero automático más cercano para la banca en línea, cuidado con cualquier retención bancaria.', pron:'fáind de níarest éi-tí-em for ónláin bánking, uách for éni bank jóuld.'},
    {speaker:'alumno', en:'Stay above the minimum balance, and use your safe deposit box.', es:'Mantente por encima del saldo mínimo, y usa tu caja de seguridad.', pron:'stéi abáv de mínimum bálans, and iús iór séif dipázit bax.'},
    {speaker:'maestro', en:'For agriculture — crop, harvest, and the farmer\'s irrigation system.', es:'Para agricultura — cultivo, cosecha, y el sistema de riego del agricultor.', pron:'for ágricalchur — crap, járvest, and de fármers irrigéishion sístem.'},
    {speaker:'alumno', en:'Livestock and organic farming support agricultural export.', es:'El ganado y la agricultura orgánica apoyan la exportación agrícola.', pron:'láivstok and organic fárming sapórt agricúlchural éxport.'},
    {speaker:'maestro', en:'Food safety improves crop yield significantly.', es:'La seguridad alimentaria mejora significativamente el rendimiento de cultivo.', pron:'fud séifti imprúuvs crap iíld sígnificantli.'},
    {speaker:'alumno', en:'Some idioms now — let\'s try to keep it under wraps for today.', es:'Algunos modismos ahora — tratemos de mantenerlo en secreto por hoy.', pron:'sam ídioms náu — lets trái tu kíip it ánder raps for tudéi.'},
    {speaker:'maestro', en:'Let\'s try to go above and beyond, even if you try to be on the fence.', es:'Tratemos de hacer un esfuerzo extra, aunque trates de estar indeciso.', pron:'lets trái tu góu abáv and bijánd, íven if iú trái tu bi on de fens.'},
    {speaker:'alumno', en:'Let\'s try to get down to business — I know you seem to have a lot on your plate.', es:'Tratemos de ponernos a trabajar en serio — sé que parece que tienes mucho encima.', pron:'lets trái tu guet dáun tu bísnes — ái nóu iú síim tu jav a lat on iór pléit.'},
    {speaker:'maestro', en:'Are you starting to be in over your head? Let\'s try to play it by ear, and you try to take the lead.', es:'¿Estás empezando a estar sobrepasado? Tratemos de improvisar sobre la marcha, y tú trata de tomar la delantera.', pron:'ar iú stárting tu bi in óver iór jed? lets trái tu pléi it bái íar, and iú trái tu téik de líid.'},
    {speaker:'alumno', en:'Now construction site — remember the blueprint and contractor.', es:'Ahora sitio de construcción — recuerda el plano y el contratista.', pron:'náu canstrákshion sáit — rimémber de blúprint and de cántractor.'},
    {speaker:'maestro', en:'A building permit and scaffolding matter, plus a structural engineer.', es:'Un permiso de construcción y el andamio importan, más un ingeniero estructural.', pron:'a bílding pérmit and skáfolding máter, plas a strákchural enyinír.'},
    {speaker:'alumno', en:'The construction crew passed a safety inspection.', es:'El equipo de construcción pasó una inspección de seguridad.', pron:'de canstrákshion cru pásd a séifti inspékshion.'},
    {speaker:'maestro', en:'Building materials arrived before the project deadline.', es:'Los materiales de construcción llegaron antes de la fecha límite del proyecto.', pron:'bílding matírials aráivd bifór de práchect dédláin.'},
    {speaker:'alumno', en:'For automotive industry — the assembly line and vehicle design.', es:'Para la industria automotriz — la línea de ensamblaje y el diseño del vehículo.', pron:'for otomótiv índastri — de asémbli láin and víjicol disáin.'},
    {speaker:'maestro', en:'A new prototype passed the crash test, improving fuel efficiency.', es:'Un nuevo prototipo pasó la prueba de choque, mejorando la eficiencia de combustible.', pron:'a niú próutotáip pásd de crash test, imprúuving fiúel efíshiensi.'},
    {speaker:'alumno', en:'This electric vehicle came from our automotive supplier.', es:'Este vehículo eléctrico vino de nuestro proveedor automotriz.', pron:'dis iléctric víjicol kéim fram áur otomótiv sapláier.'},
    {speaker:'maestro', en:'A manufacturing defect led to a recall.', es:'Un defecto de fabricación llevó a un retiro del mercado.', pron:'a manyufáchuring dífect led tu a rikól.'},
    {speaker:'alumno', en:'Now airline industry — the flight crew and air traffic control.', es:'Ahora industria aérea — la tripulación de vuelo y el control de tráfico aéreo.', pron:'náu érláin índastri — de fláit cru and er tráfic cantról.'},
    {speaker:'maestro', en:'Aircraft maintenance matters before the boarding procedure.', es:'El mantenimiento de aeronaves importa antes del procedimiento de embarque.', pron:'érkraft méintenans máters bifór de bórding prosíyur.'},
    {speaker:'alumno', en:'A cargo plane departed after pilot training finished.', es:'Un avión de carga partió después de que terminara el entrenamiento de pilotos.', pron:'a cárgo pléin dipártid áfter páilat tréining fínisht.'},
    {speaker:'maestro', en:'Aviation safety avoided a flight delay in airport operations.', es:'La seguridad de aviación evitó una demora de vuelo en las operaciones del aeropuerto.', pron:'éiviéishion séifti avóided a fláit diléi in érport aperéishions.'},
    {speaker:'alumno', en:'For shipping industry — the cargo ship and port authority.', es:'Para la industria naviera — el buque de carga y la autoridad portuaria.', pron:'for shíping índastri — de cárgo ship and de port ozóriti.'},
    {speaker:'maestro', en:'The container terminal follows maritime law for vessel capacity.', es:'La terminal de contenedores sigue la ley marítima para la capacidad del buque.', pron:'de cantéiner términal fálous máritaim lo for vésel capásiti.'},
    {speaker:'alumno', en:'This shipping route needs a dock worker for customs inspection.', es:'Esta ruta de envío necesita un trabajador portuario para la inspección de aduana.', pron:'dis shíping rúut níids a dak uórker for cástoms inspékshion.'},
    {speaker:'maestro', en:'Marine insurance covers everything.', es:'El seguro marítimo cubre todo.', pron:'marín inshúrans cávers évrizin.'},
    {speaker:'alumno', en:'Now fashion industry — the fashion designer and runway show.', es:'Ahora industria de la moda — el diseñador de moda y el desfile.', pron:'náu fáshion índastri — de fáshion disáiner and de ránuei shóu.'},
    {speaker:'maestro', en:'This textile follows the latest fashion trend.', es:'Este textil sigue la última tendencia de moda.', pron:'dis téxtail fálous de léitest fáshion trend.'},
    {speaker:'alumno', en:'Apparel manufacturing drives retail fashion during fashion week for every garment.', es:'La fabricación de prendas impulsa la moda al por menor durante la semana de la moda para cada prenda.', pron:'apárel manyufáchuring dráivs ríiteil fáshion dúring fáshion uíik for évri gárment.'},
    {speaker:'maestro', en:'Unit thirteen is done — five sixths done, almost there!', es:'¡La Unidad Trece está lista — cinco sextos hecho, ya casi llegamos!', pron:'iúnit zertíin is dan — fáiv sixzs dan, ólmoust der!'},
    {speaker:'alumno', en:'Just one sixth to go — keep the momentum strong.', es:'Solo un sexto por recorrer — mantén el impulso fuerte.', pron:'yast uán sixz tu góu — kíip de moméntam strong.'},
    {speaker:'maestro', en:'See you in unit fourteen, next unit!', es:'¡Nos vemos en la Unidad Catorce, la próxima unidad!', pron:'síi iú in iúnit fórtíin, next iúnit!'}
  ],
  145: [
    {speaker:'maestro', en:'Let\'s review unit twelve — starting with public relations.', es:'Repasemos la Unidad Doce — empezando con relaciones públicas.', pron:'lets riviú iúnit tuélv — stárting uid páblic riléishions.'},
    {speaker:'alumno', en:'Sure, media relations matter a lot for our public image.', es:'Claro, las relaciones con los medios importan mucho para nuestra imagen pública.', pron:'shur, mídia riléishions máter a lat for áur páblic ímich.'},
    {speaker:'maestro', en:'Especially before a press conference — did we prepare the media kit?', es:'Especialmente antes de una conferencia de prensa — ¿preparamos el kit de prensa?', pron:'espéshali bifór a pres cánferens — did uí pripér de mídia kit?'},
    {speaker:'alumno', en:'Yes, with talking points ready for any crisis communication.', es:'Sí, con puntos clave listos para cualquier comunicación de crisis.', pron:'iés, uid tóking póints rédi for éni cráisis camiunikéishion.'},
    {speaker:'maestro', en:'Our media coverage looks strong thanks to this PR campaign, and real thought leadership.', es:'Nuestra cobertura mediática se ve fuerte gracias a esta campaña de relaciones públicas, y verdadero liderazgo de pensamiento.', pron:'áur mídia cáverich luks strong zenks tu dis pi-ar campéin, and ríal zot líidership.'},
    {speaker:'alumno', en:'Now, event planning — remember the event coordinator\'s budget breakdown.', es:'Ahora, planificación de eventos — recuerda el desglose del presupuesto del coordinador de eventos.', pron:'náu, ivént pláning — rimémber de ivént coórdineitors báchet bréikdáun.'},
    {speaker:'maestro', en:'Right, plus vendor management and the event timeline.', es:'Correcto, más gestión de proveedores y el cronograma del evento.', pron:'ráit, plas véndor mánechment and de ivént táimláin.'},
    {speaker:'alumno', en:'Don\'t forget the run of show, event logistics, and attendee registration.', es:'No olvides el guion del evento, la logística del evento, y el registro de asistentes.', pron:'dont forguét de ran of shóu, ivént loyístics, and aténdíi rechistréishion.'},
    {speaker:'maestro', en:'The event theme mattered too, along with the post-event survey.', es:'El tema del evento también importó, junto con la encuesta posterior al evento.', pron:'de ivént zíim mátterd tu, alóng uid de póust-ivént sérvei.'},
    {speaker:'alumno', en:'Now retail management — inventory turnover and point of sale come first.', es:'Ahora gestión minorista — la rotación de inventario y el punto de venta van primero.', pron:'náu ríiteil mánechment — ínventori térnóver and póint of séil cam ferst.'},
    {speaker:'maestro', en:'Foot traffic depends on visual merchandising, especially during seasonal sales.', es:'El tráfico de personas depende del merchandising visual, especialmente durante las ventas de temporada.', pron:'fut tráfic dipénds on víshual merchándaising, espéshali dúring síizonal séils.'},
    {speaker:'alumno', en:'We changed the store layout for loss prevention, tracking customer footfall through retail analytics.', es:'Cambiamos la disposición de la tienda para prevención de pérdidas, rastreando el flujo de clientes con análisis minorista.', pron:'uí chéinchd de stor léiaut for los privénshion, tráking cástomer fútfol zru ríiteil análytics.'},
    {speaker:'maestro', en:'For hospitality industry — guest experience and concierge service matter most.', es:'Para la industria de la hospitalidad — la experiencia del huésped y el servicio de conserjería importan más.', pron:'for jaspitáliti índastri — guest expíriens and cánsierch sérvis máter móust.'},
    {speaker:'alumno', en:'The tourism board recommended our travel package, especially for group booking.', es:'La junta de turismo recomendó nuestro paquete de viaje, especialmente para reserva grupal.', pron:'de túrism bord récomended áur trável páquich, espéshali for grup búking.'},
    {speaker:'maestro', en:'Don\'t forget the amenities, the occupancy rate, and our tour operator.', es:'No olvides las comodidades, la tasa de ocupación, y nuestro operador turístico.', pron:'dont forguét de aménitis, de ocupánsi réit, and áur túr áporeitor.'},
    {speaker:'alumno', en:'Now entertainment industry — talent agency deals and royalties.', es:'Ahora industria del entretenimiento — tratos de agencias de talento y regalías.', pron:'náu entertéinment índastri — tálent éichensi díils and róialtis.'},
    {speaker:'maestro', en:'Box office numbers, streaming rights, and the production company\'s creative director.', es:'Números de taquilla, derechos de transmisión, y el director creativo de la productora.', pron:'bax áfis námbers, stríiming ráits, and de pradákshion cámpanis criéitiv diréctor.'},
    {speaker:'alumno', en:'Content licensing really drives audience engagement.', es:'La licencia de contenido realmente impulsa el compromiso de la audiencia.', pron:'cántent láisensing ríali dráivs ódiens enguéichment.'},
    {speaker:'maestro', en:'For government relations — lobbying and public policy come up often.', es:'Para relaciones gubernamentales — el cabildeo y la política pública aparecen seguido.', pron:'for gávernment riléishions — lábiing and páblic pálisi cam ap áften.'},
    {speaker:'alumno', en:'Regulatory affairs work with an advocacy group on new legislation.', es:'Los asuntos regulatorios trabajan con un grupo de defensa en nueva legislación.', pron:'réguiulatori afférs uork uid an ádvocasi grup on niú lechisléishion.'},
    {speaker:'maestro', en:'There was a public hearing too — every policy maker follows a grassroots campaign, watching the political landscape.', es:'También hubo una audiencia pública — cada responsable de políticas sigue una campaña de base, observando el panorama político.', pron:'der uás a páblic jíaring tu — évri pálisi méiker fálous a grásruts campéin, uáching de palítical lándskeip.'},
    {speaker:'alumno', en:'Some idioms now — sometimes you have to bite the bullet.', es:'Algunos modismos ahora — a veces tienes que afrontar la situación.', pron:'sam ídioms náu — sámtaims iú jav tu báit de búlet.'},
    {speaker:'maestro', en:'Don\'t just try to jump on the bandwagon — this could try to be a game changer.', es:'No solo trates de subirte a la moda — esto podría tratar de cambiarlo todo.', pron:'dont yast trái tu yamp on de bánduagon — dis cud trái tu bi a guéim chéinyer.'},
    {speaker:'alumno', en:'Let\'s try to raise the bar, and try to leave no stone unturned.', es:'Tratemos de subir la vara, y de no dejar nada sin revisar.', pron:'lets trái tu réis de bar, and trái tu líiv nóu stóun antérnd.'},
    {speaker:'maestro', en:'Try to hit the ground running — you get to be in the driver\'s seat, so you get to call the shots.', es:'Trata de arrancar con todo — llegas a estar al mando, así que llegas a decidir.', pron:'trái tu jit de gráund ráning — iú guet tu bi in de dráivers síit, sóu iú guet tu col de shats.'},
    {speaker:'alumno', en:'Now global supply chain — supplier relationship and procurement matter.', es:'Ahora cadena de suministro global — la relación con proveedores y la adquisición importan.', pron:'náu glóubal saplái chéin — sapláier riléishionship and procúrment máter.'},
    {speaker:'maestro', en:'Inventory optimization improved with just-in-time delivery.', es:'La optimización de inventario mejoró con la entrega justo a tiempo.', pron:'ínventori optimizéishion imprúuvd uid yast-in-táim delíveri.'},
    {speaker:'alumno', en:'Our logistics network relies on the distribution center.', es:'Nuestra red logística depende del centro de distribución.', pron:'áur loyístics nétuork riláis on de distribiúshion sénter.'},
    {speaker:'maestro', en:'Supply chain disruption led to new vendor negotiation and sourcing strategy.', es:'La interrupción de la cadena de suministro llevó a una nueva negociación con proveedores y estrategia de abastecimiento.', pron:'saplái chéin disrápshion led tu niú véndor nigoushiéishion and sórsing stráteyi.'},
    {speaker:'alumno', en:'For energy sector — natural resources like oil and gas.', es:'Para el sector energético — recursos naturales como el petróleo y el gas.', pron:'for énerchi séctor — náchural risórsis láik óil and gas.'},
    {speaker:'maestro', en:'The mining industry is shifting toward renewable resources.', es:'La industria minera se está moviendo hacia recursos renovables.', pron:'de máining índastri is shífting tuórd rinúabol risórsis.'},
    {speaker:'alumno', en:'The extraction process needs better energy efficiency.', es:'El proceso de extracción necesita mejor eficiencia energética.', pron:'de extrákshion práses níids béter énerchi efíshiensi.'},
    {speaker:'maestro', en:'Good resource management reduces environmental impact.', es:'Una buena gestión de recursos reduce el impacto ambiental.', pron:'gud risórs mánechment ridiúses environméntal ímpact.'},
    {speaker:'alumno', en:'Now consumer goods — brand portfolio and product lifecycle.', es:'Ahora bienes de consumo — cartera de marcas y ciclo de vida del producto.', pron:'náu cansiúmer guds — brand pórtfoulio and prádact láifsaicol.'},
    {speaker:'maestro', en:'Market expansion depends on international distribution.', es:'La expansión de mercado depende de la distribución internacional.', pron:'márket expánshion dipénds on internáshional distribiúshion.'},
    {speaker:'alumno', en:'Import regulations require local market adaptation.', es:'Las regulaciones de importación requieren adaptación al mercado local.', pron:'ímport reguleishions ricuáiar lóucal márket adaptéishion.'},
    {speaker:'maestro', en:'Our global brand strategy needs more shelf space.', es:'Nuestra estrategia de marca global necesita más espacio en las estanterías.', pron:'áur glóubal brand stráteyi níids mor shelf spéis.'},
    {speaker:'alumno', en:'For telecommunications — network infrastructure and bandwidth.', es:'Para telecomunicaciones — infraestructura de red y ancho de banda.', pron:'for telecamiunikéishions — nétuork infraestrákchur and bánduidz.'},
    {speaker:'maestro', en:'Which service provider offers the best data plan?', es:'¿Qué proveedor de servicio ofrece el mejor plan de datos?', pron:'uích sérvis prováider áfers de best déita plan?'},
    {speaker:'alumno', en:'Signal coverage improved thanks to telecom regulation.', es:'La cobertura de señal mejoró gracias a la regulación de telecomunicaciones.', pron:'sígnal cáverich imprúuvd zenks tu télecam reguleishion.'},
    {speaker:'maestro', en:'Fiber optic expansion depends on our mobile carrier.', es:'La expansión de fibra óptica depende de nuestro operador móvil.', pron:'fáiber áptic expánshion dipénds on áur móubail cárier.'},
    {speaker:'alumno', en:'Unit twelve is done — four fifths done now!', es:'¡La Unidad Doce está lista — cuatro quintos hecho ahora!', pron:'iúnit tuélv is dan — for fifzs dan náu!'},
    {speaker:'maestro', en:'Just one fifth remaining — you are truly unstoppable.', es:'Solo un quinto restante — eres verdaderamente imparable.', pron:'yast uán fifz riméining — iú ar trúli anstápabol.'},
    {speaker:'alumno', en:'The final stretch begins — see you in unit thirteen, next unit!', es:'El tramo final empieza — ¡nos vemos en la Unidad Trece, la próxima unidad!', pron:'de fáinal strech biguíns — síi iú in iúnit zertíin, next iúnit!'}
  ],
  133: [
    {speaker:'maestro', en:'Let\'s review unit eleven together — we need to touch base on everything.', es:'Repasemos juntos la Unidad Once — necesitamos ponernos en contacto sobre todo.', pron:'lets riviú iúnit iléven tugéder — uí níid tu tach béis on évrizin.'},
    {speaker:'alumno', en:'Sure, we need to follow through and try to think outside the box to get the ball rolling.', es:'Claro, necesitamos dar seguimiento y tratar de pensar fuera de la caja para poner las cosas en marcha.', pron:'shur, uí níid tu fálou zru and trái tu zink áutsáid de bax tu guet de bol róuling.'},
    {speaker:'maestro', en:'First, do we need to be on the same page, understanding not to cut corners, and to go the extra mile?', es:'Primero, ¿necesitamos estar en la misma sintonía, entendiendo no tomar atajos, y dar un esfuerzo extra?', pron:'ferst, du uí níid tu bi on de séim péich, anderstánding nat tu cat córners, and tu góu de éxtra máil?'},
    {speaker:'alumno', en:'Yes — I like to keep someone in the loop, and to bring to the table real value before we try to circle back.', es:'Sí — me gusta mantener a alguien al tanto, y aportar valor real antes de tratar de retomar el tema.', pron:'iés — ái láik tu kíip sámuan in de lup, and tu bring tu de téibol ríal váliu bifór uí trái tu sércol bak.'},
    {speaker:'maestro', en:'Now, cultural sensitivity and business etiquette — do you remember greeting customs?', es:'Ahora, sensibilidad cultural y etiqueta de negocios — ¿recuerdas las costumbres de saludo?', pron:'náu, cálchural sensitíviti and bísnes étiket — du iú rimémber gríiting cástams?'},
    {speaker:'alumno', en:'Yes, and gift giving, plus punctuality expectations and dining etiquette too.', es:'Sí, y el intercambio de regalos, más las expectativas de puntualidad y la etiqueta en la mesa también.', pron:'iés, and guift guíving, plas panctiualíti expectéishions and dáining étiket tu.'},
    {speaker:'maestro', en:'Don\'t forget appropriate topics, body language, using an interpreter, and cross-cultural training.', es:'No olvides los temas apropiados, el lenguaje corporal, usar un intérprete, y el entrenamiento intercultural.', pron:'dont forguét apróupriet tápics, bádi lánguich, iúsing an intérpreter, and cros-cálchural tréining.'},
    {speaker:'alumno', en:'Got it. Now, a merger and acquisition require due diligence and a fair valuation.', es:'Entendido. Ahora, una fusión y adquisición requieren debida diligencia y una valoración justa.', pron:'gat it. náu, a mércher and acuisíshion ricuáiar diú díliyens and a fer valiuéishion.'},
    {speaker:'maestro', en:'Right, and shareholders worry about a hostile takeover instead of real synergy.', es:'Correcto, y los accionistas se preocupan por una adquisición hostil en vez de sinergia real.', pron:'ráit, and shérjolders uóri abáut a jástail téikóver instéd of ríal sínerchi.'},
    {speaker:'alumno', en:'The integration process starts with a letter of intent, pending antitrust review.', es:'El proceso de integración empieza con una carta de intención, pendiente de revisión antimonopolio.', pron:'de integréishion práses starts uid a léter of inténd, pénding ántitrast riviú.'},
    {speaker:'maestro', en:'Next, marketing strategy — brand positioning, market segmentation, and competitive analysis.', es:'Después, estrategia de marketing — posicionamiento de marca, segmentación de mercado, y análisis competitivo.', pron:'next, márketing stráteyi — brand posíshioning, márket segmentéishion, and campétitiv análysis.'},
    {speaker:'alumno', en:'Plus our unique selling proposition, brand awareness, the marketing mix, and customer persona.', es:'Además nuestra propuesta de venta única, reconocimiento de marca, la mezcla de marketing, y perfil de cliente.', pron:'plas áur iuník séling proposíshion, brand auérnes, de márketing mix, and cástomer pérsona.'},
    {speaker:'maestro', en:'And a positioning statement guides our go-to-market strategy.', es:'Y una declaración de posicionamiento guía nuestra estrategia de lanzamiento al mercado.', pron:'and a posíshioning stéitment gáids áur góu-tu-márket stráteyi.'},
    {speaker:'alumno', en:'Now brand identity — logo design, brand voice, and brand guidelines.', es:'Ahora identidad de marca — diseño de logo, voz de marca, y pautas de marca.', pron:'náu brand aidéntiti — lóugo disáin, brand vóis, and brand gáidláins.'},
    {speaker:'maestro', en:'Don\'t forget the tagline, brand equity, rebranding, visual identity, and brand loyalty.', es:'No olvides el eslogan, valor de marca, renovación de marca, identidad visual, y lealtad de marca.', pron:'dont forguét de tágláin, brand écuiti, ribránding, víshual aidéntiti, and brand lóialti.'},
    {speaker:'alumno', en:'For e-commerce platform, remember online storefront and shopping cart abandonment.', es:'Para plataforma de comercio electrónico, recuerda tienda en línea y abandono del carrito de compras.', pron:'for i-cámers plátform, rimémber ónláin stórfront and sháping cart abándonment.'},
    {speaker:'maestro', en:'Also the checkout process, payment gateway, product listing, and customer reviews.', es:'También el proceso de pago, pasarela de pago, listado de productos, y reseñas de clientes.', pron:'ólsou de chékáut práses, péiment guéituei, prádact lísting, and cástomer riviús.'},
    {speaker:'alumno', en:'Plus return policy, order fulfillment, and conversion rate.', es:'Además política de devoluciones, cumplimiento de pedidos, y tasa de conversión.', pron:'plas ritérn pálisi, órder fulfílment, and canvérshion réit.'},
    {speaker:'maestro', en:'Some idioms now — to hit the nail on the head, and to see eye to eye.', es:'Algunos modismos ahora — darle en el clavo, y estar de acuerdo.', pron:'sam ídioms náu — tu jit de néil on de jed, and tu síi ái tu ái.'},
    {speaker:'alumno', en:'Also to think on your feet, or to go back to the drawing board.', es:'También pensar rápido, o volver a empezar de cero.', pron:'ólsou tu zink on iór fíit, or tu góu bak tu de dróing bord.'},
    {speaker:'maestro', en:'Don\'t forget to read between the lines, and to keep your options open.', es:'No olvides leer entre líneas, y mantener las opciones abiertas.', pron:'dont forguét tu ríid bituíin de láins, and tu kíip iór ápshions óupen.'},
    {speaker:'alumno', en:'Try to take it with a grain of salt — we\'re all trying to be in the same boat.', es:'Trata de tomarlo con pinzas — todos tratamos de estar en el mismo barco.', pron:'trái tu téik it uid a gréin of solt — uír ol tráing tu bi in de séim bóut.'},
    {speaker:'maestro', en:'For subscription model — recurring revenue, churn rate, and customer lifetime value.', es:'Para modelo de suscripción — ingresos recurrentes, tasa de cancelación, y valor de vida del cliente.', pron:'for sabscrípshion mádel — rikéring révenu, chern réit, and cástomer láiftaim váliu.'},
    {speaker:'alumno', en:'Plus free trial, subscription tier, auto-renewal, and cancellation policy.', es:'Además prueba gratuita, nivel de suscripción, renovación automática, y política de cancelación.', pron:'plas fríi tráial, sabscrípshion tíar, óto-riniúal, and canseléishion pálisi.'},
    {speaker:'maestro', en:'Don\'t forget upsell opportunity and pricing plan.', es:'No olvides oportunidad de venta adicional y plan de precios.', pron:'dont forguét ápsel oportiúniti and práising plan.'},
    {speaker:'alumno', en:'Now franchise — franchisee, franchisor, and licensing agreement.', es:'Ahora franquicia — franquiciado, franquiciante, y acuerdo de licencia.', pron:'náu fránchais — fránchaisíi, fránchaisor, and láisensing agríiment.'},
    {speaker:'maestro', en:'Plus royalty fee, brand standards, territory rights, intellectual property, and trademark.', es:'Además regalía, estándares de marca, derechos territoriales, propiedad intelectual, y marca registrada.', pron:'plas róialti fíi, brand stándards, térritori ráits, inteléctual práperti, and tréidmark.'},
    {speaker:'alumno', en:'For startup — entrepreneur, venture capital, and pitch deck.', es:'Para startup — emprendedor, capital de riesgo, y presentación para inversores.', pron:'for stártap — antreprenúr, vénchur cápital, and pitch dek.'},
    {speaker:'maestro', en:'Also seed funding, minimum viable product, scalability, pivot, and exit strategy.', es:'También financiamiento inicial, producto mínimo viable, escalabilidad, cambio de rumbo, y estrategia de salida.', pron:'ólsou síid fánding, mínimum váiabol prádact, skéilabíliti, pívat, and éxit stráteyi.'},
    {speaker:'alumno', en:'Business ethics now — corporate governance and code of conduct.', es:'Ética empresarial ahora — gobernanza corporativa y código de conducta.', pron:'bísnes ézics náu — córporeit gávernans and kóud of cándact.'},
    {speaker:'maestro', en:'Plus a whistleblower, conflict of interest, transparency, and accountability.', es:'Además un denunciante, conflicto de interés, transparencia, y rendición de cuentas.', pron:'plas a uísolblóuer, cánflict of íntrest, transpárensi, and acauntabíliti.'},
    {speaker:'alumno', en:'Don\'t forget the board of directors and compliance officer.', es:'No olvides la junta directiva y el oficial de cumplimiento.', pron:'dont forguét de bord of diréctors and campláians áfiser.'},
    {speaker:'maestro', en:'Unit eleven is done — almost three quarters through the whole course!', es:'¡La Unidad Once está lista — ya casi tres cuartos de todo el curso!', pron:'iúnit iléven is dan — ólmoust zríi cuórters zru de jóul cors!'},
    {speaker:'alumno', en:'Staying focused really paid off — well done, you reached the final third.', es:'Mantenerse enfocado realmente valió la pena — bien hecho, llegaste al tercio final.', pron:'stéing fóucasd ríali péid of — uél dan, iú ríichd de fáinal zerd.'},
    {speaker:'maestro', en:'See you in unit twelve, next unit!', es:'¡Nos vemos en la Unidad Doce, la próxima unidad!', pron:'síi iú in iúnit tuélv, next iúnit!'}
  ],
  121: [
    {speaker:'alumno', en:'I am looking to rent a new place — should I rent, or lease, to lease? What\'s the landlord\'s policy for a tenant like me?', es:'Estoy buscando alquilar un lugar nuevo — ¿debería alquilar, o arrendar? ¿Cuál es la política del propietario para un inquilino como yo?', pron:'ái am lúking tu rent a niú pléis — shud ái rent, or líis, tu líis? uáts de lándlords pálisi for a ténant láik mi?'},
    {speaker:'maestro', en:'I\'ll need a security deposit, and I should check the property value first. Maybe I should get a mortgage instead, with a down payment. Let me call a real estate agent.', es:'Voy a necesitar un depósito de seguridad, y debería revisar primero el valor de la propiedad. Tal vez debería conseguir una hipoteca en cambio, con un pago inicial. Déjame llamar a un agente inmobiliario.', pron:'áil níid a sekiúriti dipázit, and ái shud chek de práperti váliu ferst. méibi ái shud get a mórguich instéd, uid a dáun péiment. let mi col a ríil estéit éiyent.'},
    {speaker:'alumno', en:'This is covered under my insurance policy — what\'s the premium, and the coverage limit? I need to file a claim.', es:'Esto está cubierto por mi póliza de seguro — ¿cuál es la prima, y el límite de cobertura? Necesito presentar un reclamo.', pron:'dis is cávard ánder mái inshúrans pálisi — uáts de prímium, and de cáverach límit? ái níid tu fáil a kléim.'},
    {speaker:'maestro', en:'As the beneficiary, I\'ll talk to my insurance agent for a risk assessment. As the policyholder, I want to know about any exclusion, and my premium payment.', es:'Como el beneficiario, voy a hablar con mi agente de seguros para una evaluación de riesgo. Como el titular de la póliza, quiero saber sobre cualquier exclusión, y mi pago de prima.', pron:'as de benefíshiari, áil tok tu mái inshúrans éiyent for a risk asésment. as de pálisijóulder, ái uánt tu nóu abáut éni exclúshion, and mái prímium péiment.'},
    {speaker:'alumno', en:'Do you have health insurance? What\'s the copay? I need to see a specialist — can I get a referral?', es:'¿Tienes seguro de salud? ¿Cuál es el copago? Necesito ver a un especialista — ¿me puedo conseguir una remisión?', pron:'du iú jav jelz inshúrans? uáts de cóupei? ái níid tu síi a spéshalist — can ái get a réferol?'},
    {speaker:'maestro', en:'After the diagnosis, we need a treatment plan, and a follow-up visit. Is this urgent care, or should I see my primary care physician? I have an appointment with the doctor.', es:'Después del diagnóstico, necesitamos un plan de tratamiento, y una visita de seguimiento. ¿Esto es atención urgente, o debería ver a mi médico de cabecera? Tengo una cita con el médico.', pron:'áfter de daiagnóusis, uí níid a tríitment plan, and a fálou-ap vísit. is dis éryent ker, or shud ái síi mái práimeri ker fisíshan? ái jav an apóintment uid de dáctor.'},
    {speaker:'alumno', en:'I am enrolled in a new degree, or maybe a certificate program — what\'s the tuition? Is there a scholarship?', es:'Estoy inscrito en un título nuevo, o tal vez un programa de certificación — ¿cuál es la matrícula? ¿Hay una beca?', pron:'ái am inróuld in a niú digríi, or méibi a certífikeit prógram — uáts de tiúshion? is der a scálarship?'},
    {speaker:'maestro', en:'Let\'s check the curriculum for this online course — it\'s part of continuing education, for my professional development. I\'ll get a certificate of completion after enrollment.', es:'Revisemos el plan de estudios de este curso en línea — es parte de la educación continua, para mi desarrollo profesional. Voy a conseguir un certificado de finalización después de la inscripción.', pron:'lets chek de curículum for dis ánlain cors — its part of cantíniuing edyukéishion, for mái proféshional divélopment. áil get a certífikeit of camplíishion áfter enrólment.'},
    {speaker:'alumno', en:'I need to renew my permit, my license renewal, at this government office — here\'s the application form. What\'s the processing time?', es:'Necesito renovar mi permiso, mi renovación de licencia, en esta oficina gubernamental — acá está el formulario de solicitud. ¿Cuál es el tiempo de procesamiento?', pron:'ái níid tu riniú mái pérmit, mái láisens riniúal, at dis gávernment áfis — jírs de aplikéishion form. uáts de prásesing táim?'},
    {speaker:'maestro', en:'I have an in-person appointment, but is there an online portal? I need my identification document, and to make a fee payment, to get the approval letter.', es:'Tengo una cita en persona, ¿pero hay un portal en línea? Necesito mi documento de identificación, y hacer un pago de tarifa, para obtener la carta de aprobación.', pron:'ái jav an in-pérson apóintment, bat is der an ánlain pórtal? ái níid mái aidentifikéishion dákiument, and tu méik a fíi péiment, tu get de aprúval léter.'},
    {speaker:'alumno', en:'As far as that goes, come to think of it, mind you, that being said, at any rate, for what it\'s worth, to make matters worse, if anything, this is complicated.', es:'En cuanto a eso, ahora que lo pienso, ojo, dicho esto, de cualquier manera, para que conste, para empeorar las cosas, si acaso, esto es complicado.', pron:'as far as dat góus, cam tu zink of it, máind iú, dat bíing sed, at éni réit, for uát its uérz, tu méik máters uérs, if énizin, dis is cámplikeited.'},
    {speaker:'maestro', en:'Let\'s go to the car dealership for a test drive — do you accept a trade-in? What are the financing options?', es:'Vayamos a la concesionaria para una prueba de manejo — ¿aceptan un vehículo de parte de pago? ¿Cuáles son las opciones de financiamiento?', pron:'lets góu tu de car díilership for a test dráiv — du iú acsépt a tréid-in? uát ar de faináncing ápshions?'},
    {speaker:'alumno', en:'Check the warranty, and the mileage — what\'s the monthly payment? I need a vehicle inspection first. Let me talk to the sales representative.', es:'Revisa la garantía, y el kilometraje — ¿cuál es el pago mensual? Necesito una inspección del vehículo primero. Déjame hablar con el representante de ventas.', pron:'chek de uáranti, and de máilich — uáts de mánzli péiment? ái níid a víjicol inspékshion ferst. let mi tok tu de séils reprisentativ.'},
    {speaker:'maestro', en:'We are moving to a new house — I hired a moving company for the packing, and rented a moving truck.', es:'Nos estamos mudando a una casa nueva — contraté una empresa de mudanzas para el empaque, y alquilé un camión de mudanza.', pron:'uí ar múving tu a niú jáus — ái jáierd a múving cámpani for de páking, and réntid a múving trak.'},
    {speaker:'alumno', en:'I also need a storage unit, and I have to file a change of address. Let\'s set up the utility setup before the moving date — check the inventory list, and the delivery window.', es:'También necesito una unidad de almacenamiento, y tengo que registrar un cambio de dirección. Configuremos los servicios antes de la fecha de mudanza — revisa la lista de inventario, y la ventana de entrega.', pron:'ái ólsou níid a stórich iúnit, and ái jav tu fáil a chéinch of adrés. lets set ap de iutíliti sétap bifór de múving déit — chek de ínventori list, and de delíveri uíndou.'},
    {speaker:'maestro', en:'Let\'s plan a fine dining experience for this formal event — we need catering, and a guest list.', es:'Planeemos una experiencia de alta cocina para este evento formal — necesitamos catering, y una lista de invitados.', pron:'lets plan a fáin dáining ixpíriens for dis fórmal ivént — uí níid cátering, and a guest list.'},
    {speaker:'alumno', en:'Check the seating arrangement for the keynote speaker at this corporate dinner. Please RSVP, and confirm the venue and the dress code.', es:'Revisa la distribución de asientos para el orador principal en esta cena corporativa. Por favor confirma tu asistencia, y confirma el lugar y el código de vestimenta.', pron:'chek de síiting arréinchment for de kíinóut spíiker at dis córporeit díner. plíis ar-es-ví-pi, and canférm de véniu and de dres kóud.'},
    {speaker:'maestro', en:'This is powered by artificial intelligence, and machine learning — great for data analysis, thanks to a smart algorithm.', es:'Esto funciona con inteligencia artificial, y aprendizaje automático — genial para el análisis de datos, gracias a un algoritmo inteligente.', pron:'dis is páuerd bái ártifíshal intéliyens, and machín lérning — gréit for déita análisis, zenks tu a smart álgoritm.'},
    {speaker:'alumno', en:'This digital transformation includes a chatbot, better cybersecurity, and cloud computing. That\'s the new tech trend — automation is everywhere.', es:'Esta transformación digital incluye un chatbot, mejor ciberseguridad, y computación en la nube. Esa es la nueva tendencia tecnológica — la automatización está en todos lados.', pron:'dis díyital transforméishion inclúuds a chátbat, béter sáibersekiúriti, and cláud campiúting. dats de niú tek trend — otoméishion is évriuér.'},
    {speaker:'maestro', en:'What\'s your leadership style? I believe in delegation, and team motivation.', es:'¿Cuál es tu estilo de liderazgo? Creo en la delegación, y la motivación del equipo.', pron:'uáts iór líidership stáil? ái bilíiv in delegéishion, and tíim moutivéishion.'},
    {speaker:'alumno', en:'Let\'s check our performance metrics in our one-on-one meeting. I trust my team to improve employee engagement, through mentorship, succession planning, a good work culture, and smart decision-making.', es:'Revisemos nuestras métricas de desempeño en nuestra reunión individual. Confío en que mi equipo mejore el compromiso de los empleados, a través de la tutoría, la planificación de sucesión, una buena cultura de trabajo, y una toma de decisiones inteligente.', pron:'lets chek áur perfórmans métrics in áur uán-on-uán míiting. ái trast mái tíim tu imprúuv emplóii engéichment, zru méntorship, sacséshion pláning, a gud uork cálcher, and smart disíshion-méiking.'},
    {speaker:'maestro', en:'Great! Unit ten is done — two thirds done, one third remaining! Keep going, a milestone reached!', es:'¡Genial! La Unidad Diez está lista — ¡dos tercios hechos, un tercio restante! Sigue adelante, ¡un hito alcanzado!', pron:'gréit! iúnit ten is dan — tú zerds dan, uán zerd rimééining! kíip góing, a máilstóun ríichd!'},
    {speaker:'alumno', en:'See you in unit eleven, next unit!', es:'¡Nos vemos en la Unidad Once, la próxima unidad!', pron:'síi iú in iúnit iléven, next iúnit!'}
  ],
  109: [
    {speaker:'maestro', en:'I am writing to follow up on email etiquette — check the subject line, and use CC and BCC correctly. Did you see the attachment?', es:'Te escribo para hacer seguimiento sobre las normas de correo electrónico — revisa el asunto, y usa CC y CCO correctamente. ¿Viste el adjunto?', pron:'ái am ráiting tu fálou ap on íimeil étikuet — chek de sábyect láin, and iús síi-síi and bíi-síi-síi coréctli. did iú síi de atáchment?'},
    {speaker:'alumno', en:'Use a formal greeting, and a formal closing. I need to draft this, then to proofread it — watch your tone. Should we reply all?', es:'Usa un saludo formal, y un cierre formal. Necesito redactar un borrador de esto, y después revisar el texto — cuida el tono. ¿Deberíamos responder a todos?', pron:'iús a fórmal gríiting, and a fórmal clóusing. ái níid tu draft dis, den tu prúufriid it — uách iór tóun. shud uí riplái ol?'},
    {speaker:'maestro', en:'The project is on track — here\'s the task, the deliverable, and the scope for our stakeholder.', es:'El proyecto va según lo planeado — acá está la tarea, el entregable, y el alcance para nuestro interesado.', pron:'de práchect is on trak — jírs de task, de delíverabol, and de skóup for áur stéikjóulder.'},
    {speaker:'alumno', en:'Let\'s plan the kickoff meeting, the timeline, and resource allocation. As project manager, I\'m tracking the risk, and every dependency.', es:'Planeemos la reunión de inicio, el cronograma, y la asignación de recursos. Como gerente de proyecto, estoy rastreando el riesgo, y cada dependencia.', pron:'lets plan de kíkof míiting, de táimláin, and risórs alokéishion. as práchect mánayer, áim tráking de risk, and évri dipéndensi.'},
    {speaker:'maestro', en:'This meets our quality control standard — after the inspection, we found no defect. Compliance and certification look good.', es:'Esto cumple con nuestro estándar de control de calidad — después de la inspección, no encontramos ningún defecto. El cumplimiento normativo y la certificación se ven bien.', pron:'dis míits áur cuáliti cantról stándard — áfter de inspékshion, uí fáund nóu dífect. camplaiáns and certifikéishion luk gud.'},
    {speaker:'alumno', en:'Our quality assurance team works hard to meet standards — here\'s the checklist for the approval process.', es:'Nuestro equipo de aseguramiento de calidad trabaja duro para cumplir los estándares — acá está la lista de verificación para el proceso de aprobación.', pron:'áur cuáliti asiúrans tíim uorks jard tu míit stándards — jírs de chéklist for de aprúval práses.'},
    {speaker:'maestro', en:'We will make this right — customer satisfaction matters. Let\'s improve complaint handling, and offer service recovery.', es:'Vamos a solucionar esto — la satisfacción del cliente importa. Mejoremos el manejo de quejas, y ofrezcamos recuperación del servicio.', pron:'uí uil méik dis ráit — cástomer satisfákshion máters. lets imprúuv campléint jándling, and áfer sérvis rikáveri.'},
    {speaker:'alumno', en:'Think about the loyalty program, and the customer journey — show empathy, and use the escalation path if needed. Check the satisfaction survey, focus on retention, and give personalized service.', es:'Pensemos en el programa de lealtad, y el recorrido del cliente — mostremos empatía, y usemos la vía de escalamiento si hace falta. Revisemos la encuesta de satisfacción, enfoquémonos en la retención, y demos un servicio personalizado.', pron:'zink abáut de lóialti prógram, and de cástomer yérni — shóu émpazi, and iús de escaléishion paz if níided. chek de satisfákshion sérvei, fóucas on riténshion, and giv pérsonalaisd sérvis.'},
    {speaker:'maestro', en:'We are committed to good crisis management — here\'s our contingency plan.', es:'Estamos comprometidos con un buen manejo de crisis — acá está nuestro plan de contingencia.', pron:'uí ar camítid tu gud cráisis mánechment — jírs áur cantínyensi plan.'},
    {speaker:'alumno', en:'The spokesperson will handle the press release, and damage control, with full transparency. Stakeholder communication and our emergency response protect our reputation — we need to reassure everyone.', es:'El vocero va a manejar el comunicado de prensa, y el control de daños, con total transparencia. La comunicación con los interesados y nuestra respuesta de emergencia protegen nuestra reputación — necesitamos tranquilizar a todos.', pron:'de spóukspérson uil jándol de pres rilíis, and dámich cantról, uid ful transpárensi. stéikjóulder camiunikéishion and áur eméryensi rispáns protéct áur repiuéishion — uí níid tu riashúr évriuan.'},
    {speaker:'maestro', en:'We are trying to reduce our impact — innovation and sustainability matter. We use eco-friendly practices, and renewable energy.', es:'Estamos tratando de reducir nuestro impacto — la innovación y la sostenibilidad importan. Usamos prácticas ecológicas, y energía renovable.', pron:'uí ar tráing tu ridiús áur ímpact — inovéishion and sasteinabíliti máter. uí iús íco-fréndli práctisis, and riniúabol énerchi.'},
    {speaker:'alumno', en:'We track our carbon footprint, do recycling, and take corporate responsibility. This green initiative helps to reduce waste, with long-term impact.', es:'Rastreamos nuestra huella de carbono, hacemos reciclaje, y asumimos responsabilidad corporativa. Esta iniciativa verde ayuda a reducir los residuos, con impacto a largo plazo.', pron:'uí trak áur cárbon fútprint, du risáikling, and téik córporeit rispánsabíliti. dis gríin inísheitiv jelps tu ridiús uéist, uid long-term ímpact.'},
    {speaker:'maestro', en:'To put it simply, in short, above all, first and foremost, last but not least, on the whole, generally speaking, when it comes down to it, we care.', es:'Para decirlo simple, en resumen, sobre todo, primero y principal, por último pero no menos importante, en general, hablando en términos generales, cuando se trata de eso, nos importa.', pron:'tu put it símpli, in short, abáv ol, ferst and fórmoust, last bat nat líist, on de jóul, yénerali spíiking, uén it cams dáun tu it, uí ker.'},
    {speaker:'alumno', en:'This shipment requires an export license, and we need to pay the import duty for customs clearance.', es:'Este envío requiere una licencia de exportación, y necesitamos pagar el arancel de importación para el despacho aduanero.', pron:'dis shípment riquáiars an éxport láisens, and uí níid tu péi de ímport diúti for cástams clírans.'},
    {speaker:'maestro', en:'Check the bill of lading, the letter of credit, and the incoterms. Our freight forwarder follows the trade agreement, for the country of destination — don\'t forget cargo insurance.', es:'Revisa el conocimiento de embarque, la carta de crédito, y los incoterms. Nuestro agente de carga sigue el acuerdo comercial, para el país de destino — no te olvides del seguro de carga.', pron:'chek de bil of léiding, de léter of crédit, and de íncoterms. áur fréit fóruarder fálous de tréid agríiment, for de cántri of destinéishion — dont forguét cárgou inshúrans.'},
    {speaker:'alumno', en:'The production line is running well — we have enough raw materials for assembly at the manufacturing plant.', es:'La línea de producción está funcionando bien — tenemos suficientes materias primas para el ensamblaje en la planta de fabricación.', pron:'de pradákshion láin is ráning uél — uí jav ináf ro matíriols for asémbli at de mániufácturing plant.'},
    {speaker:'maestro', en:'Our output and efficiency are up, thanks to automation. Check the machinery — is there any downtime?', es:'Nuestra producción y eficiencia están mejorando, gracias a la automatización. Revisa la maquinaria — ¿hay algún tiempo de inactividad?', pron:'áur áutput and efíshiensi ar ap, zenks tu otoméishion. chek de mashínari — is der éni dáuntaim?'},
    {speaker:'alumno', en:'I would like to apply for a role in human resources — tell me about onboarding, the training program, and employee benefits.', es:'Me gustaría postularme para un puesto en recursos humanos — cuéntame sobre la incorporación, el programa de capacitación, y los beneficios para empleados.', pron:'ái uud láik tu aplái for a róul in jiúman risórsis — tel mi abáut ónbording, de tréining prógram, and emplóii bénefits.'},
    {speaker:'maestro', en:'After my performance review, I\'m hoping for a promotion — not a resignation, or a termination! What\'s the workplace policy on diversity and inclusion?', es:'Después de mi evaluación de desempeño, espero un ascenso — ¡no una renuncia, o un despido! ¿Cuál es la política del lugar de trabajo sobre diversidad e inclusión?', pron:'áfter mái perfórmans riviú, áim jóuping for a promóushion — nat a resignéishion, or a terminéishion! uáts de uórkpleis pálisi on daivérsiti and inclúshion?'},
    {speaker:'alumno', en:'I can close this deal — let me give you my sales pitch after this cold call.', es:'Puedo cerrar este trato — déjame darte mi discurso de ventas después de esta llamada en frío.', pron:'ái can clóus dis díil — let mi giv iú mái séils pich áfter dis cóuld col.'},
    {speaker:'maestro', en:'Our lead generation is strong, and the sales funnel looks good. I\'m about to close a deal — I\'m close to my quota, thanks to commission and a good cross-sell. We\'ll hit our sales target.', es:'Nuestra generación de contactos es fuerte, y el embudo de ventas se ve bien. Estoy a punto de cerrar un trato — estoy cerca de mi cuota, gracias a la comisión y una buena venta cruzada. Vamos a alcanzar nuestra meta de ventas.', pron:'áur líid yeneréishion is strong, and de séils fánel luks gud. áim abáut tu clóus a díil — áim clóus tu mái cuóuta, zenks tu camíshion and a gud crós-sel. uíl jit áur séils tárguet.'},
    {speaker:'alumno', en:'Great! Unit nine is done — two thirds done now! Keep staying strong, I\'m proud of you — halfway to mastery!', es:'¡Genial! La Unidad Nueve está lista — ¡ya dos tercios hechos! Sigue manteniéndote fuerte, estoy orgulloso de ti — ¡a mitad de camino hacia el dominio!', pron:'gréit! iúnit náin is dan — tú zerds dan náu! kíip stéiing strong, áim práud of iú — jáfuei tu mástery!'},
    {speaker:'maestro', en:'See you in unit ten, next unit!', es:'¡Nos vemos en la Unidad Diez, la próxima unidad!', pron:'síi iú in iúnit ten, next iúnit!'}
  ],
  97: [
    {speaker:'maestro', en:'Thank you for sending your resume and cover letter — welcome to this job interview. What are your strengths and weaknesses?', es:'Gracias por enviar tu currículum y carta de presentación — bienvenido a esta entrevista de trabajo. ¿Cuáles son tus fortalezas y debilidades?', pron:'zenk iú for séndin iór resumé and cáver léter — uélcam tu dis yab íntervyu. uát ar iór strengzs and uíknesis?'},
    {speaker:'alumno', en:'I have experience in this field. My salary expectations are flexible, and my availability is immediate. I can provide references.', es:'Tengo experiencia en este campo. Mis expectativas salariales son flexibles, y mi disponibilidad es inmediata. Puedo dar referencias.', pron:'ái jav expíriens in dis fíild. mái sálari expectéishions ar fléxibol, and mái aveilabíliti is imídiat. ái can pravaíd réferenses.'},
    {speaker:'maestro', en:'Why did you decide to apply for a job here? Are you hoping for a job offer? We\'re looking to hire the right candidate.', es:'¿Por qué decidiste postularte a un trabajo acá? ¿Esperas una oferta de trabajo? Estamos buscando contratar al candidato correcto.', pron:'uái did iú disáid tu aplái for a yab jíar? ar iú jóuping for a yab áfer? uír lúking tu jáier de ráit candídeit.'},
    {speaker:'alumno', en:'Tell me about your previous experience, and your responsibilities. What are your achievements?', es:'Cuéntame sobre tu experiencia previa, y tus responsabilidades. ¿Cuáles son tus logros?', pron:'tel mi abáut iór prívias expíriens, and iór rispansabílitis. uát ar iór achíivments?'},
    {speaker:'maestro', en:'Why do you want this job? Tell me about yourself.', es:'¿Por qué quieres este trabajo? Cuéntame sobre ti mismo.', pron:'uái du iú uánt dis yab? tel mi abáut iórself.'},
    {speaker:'alumno', en:'I am responsible for many projects — I\'m a team player, deadline-driven, and good at problem-solving. I also have strong leadership skills.', es:'Soy responsable de muchos proyectos — soy bueno trabajando en equipo, orientado a plazos, y bueno resolviendo problemas. También tengo fuertes habilidades de liderazgo.', pron:'ái am rispánsibol for méni práchects — áim a tíim pléier, dédláin-drívan, and gud at práblem-sálving. ái ólsou jav strong líidership skils.'},
    {speaker:'maestro', en:'Would you like to negotiate salary now, or later?', es:'¿Te gustaría negociar el salario ahora, o después?', pron:'uud iú láik tu nigóushieit sálari náu, or léiter?'},
    {speaker:'alumno', en:'I would like to connect with you at this networking event — let\'s start with a business card exchange.', es:'Me gustaría conectar contigo en este evento de networking — empecemos con un intercambio de tarjetas de presentación.', pron:'ái uud láik tu canéct uid iú at dis nétuorking ivént — lets start uid a bísnes card ixchéinch.'},
    {speaker:'maestro', en:'Can I give you my elevator pitch? Let me show you how to introduce yourself — I work in this industry, and I have many connections.', es:'¿Te puedo dar mi discurso rápido de presentación? Dejame mostrarte cómo presentarte — trabajo en esta industria, y tengo muchas conexiones.', pron:'can ái giv iú mái élevéitor pich? let mi shóu iú jáu tu intradiús iórself — ái uork in dis índastri, and ái jav méni canékshions.'},
    {speaker:'alumno', en:'I\'ll send a follow-up email — do you have a LinkedIn profile? I want to build a professional relationship, and find an opportunity.', es:'Voy a enviar un correo de seguimiento — ¿tienes un perfil de LinkedIn? Quiero construir una relación profesional, y encontrar una oportunidad.', pron:'áil send a fálou-ap íimeil — du iú jav a línkdín próufail? ái uánt tu bild a proféshional riléishionship, and fáind an apórtiuniti.'},
    {speaker:'maestro', en:'I am confident about public speaking — the audience is ready for my opening statement, and my key points, with visual aids.', es:'Estoy confiado sobre hablar en público — la audiencia está lista para mi declaración de apertura, y mis puntos clave, con ayudas visuales.', pron:'ái am cánfident abáut páblic spíiking — de áudians is rédi for mái óupening stéitment, and mái kíi póints, uid víshual éids.'},
    {speaker:'alumno', en:'I want to engage the audience, and leave time for a Q&A session before my closing remarks. I\'m a little nervous, but confident.', es:'Quiero involucrar a la audiencia, y dejar tiempo para una sesión de preguntas y respuestas antes de mis palabras finales. Estoy un poco nervioso, pero confiado.', pron:'ái uánt tu engéich de áudians, and líiv táim for a quíu and éi séshion bifór mái clóusing rimárks. áim a lítol nérvas, bat cánfident.'},
    {speaker:'maestro', en:'I need to sign this contract — please check my signature, and the terms and conditions, including this clause.', es:'Necesito firmar este contrato — por favor revisa mi firma, y los términos y condiciones, incluyendo esta cláusula.', pron:'ái níid tu sáin dis cántract — plíis chek mái sígnacher, and de terms and candíshions, inclúuding dis clóus.'},
    {speaker:'alumno', en:'Should I sign now, or ask a legal advisor first? This is confidential, and there\'s some liability. We should never try to breach a contract — this is a binding agreement.', es:'¿Debería firmar ahora, o preguntarle primero a un asesor legal? Esto es confidencial, y hay algo de responsabilidad legal. Nunca deberíamos intentar violar un contrato — este es un acuerdo vinculante.', pron:'shud ái sáin náu, or ask a líigal advaízer ferst? dis is cánfidenshal, and ders sam laiabíliti. uí shud néver trái tu bríich a cántract — dis is a báinding agríiment.'},
    {speaker:'maestro', en:'In my culture, we value office culture, and a good work-life balance — punctuality, and following the dress code matter too.', es:'En mi cultura, valoramos la cultura de oficina, y un buen equilibrio entre trabajo y vida personal — la puntualidad, y seguir el código de vestimenta también importan.', pron:'in mái cálcher, uí váliu áfis cálcher, and a gud uork-láif bálans — panctiuáliti, and fálouing de dres kóud máter tu.'},
    {speaker:'alumno', en:'We also value small talk, but sometimes we prefer direct communication. What about hierarchy, feedback culture, remote work, and flexible hours in your culture?', es:'También valoramos la charla informal, pero a veces preferimos la comunicación directa. ¿Qué tal la jerarquía, la cultura de retroalimentación, el trabajo remoto, y las horas flexibles en tu cultura?', pron:'uí ólsou váliu smol tok, bat sámtaims uí prifér diréct camiunikéishion. uát abáut jáierarki, fíidbak cálcher, rimóut uork, and fléxibol áurs in iór cálcher?'},
    {speaker:'maestro', en:'As a matter of fact, to sum up, on top of that, either way, needless to say, all things considered, at the end of the day, for the most part, we agree.', es:'De hecho, para resumir, además de eso, de cualquier manera, no hace falta decir, considerando todo, al final del día, en su mayor parte, estamos de acuerdo.', pron:'as a máter of fact, tu sam ap, on tap of dat, íder uéi, nídles tu séi, ol zings cansíderd, at de end of de déi, for de móust part, uí agríi.'},
    {speaker:'alumno', en:'I need a loan — what\'s the interest rate? Check my credit score first.', es:'Necesito un préstamo — ¿cuál es la tasa de interés? Revisa mi puntaje crediticio primero.', pron:'ái níid a lóun — uáts de íntrest réit? chek mái crédit scor ferst.'},
    {speaker:'maestro', en:'I have a savings account and a checking account — I need to transfer funds. Let me talk to my financial advisor.', es:'Tengo una cuenta de ahorros y una cuenta corriente — necesito transferir fondos. Déjame hablar con mi asesor financiero.', pron:'ái jav a séivings acáunt and a chéking acáunt — ái níid tu tránsfer fands. let mi tok tu mái faináncial advaízer.'},
    {speaker:'alumno', en:'I want to invest in the stock market — help me with budget planning.', es:'Quiero invertir en la bolsa de valores — ayúdame con la planificación del presupuesto.', pron:'ái uánt tu invést in de stak márket — jelp mi uid báchet pláning.'},
    {speaker:'maestro', en:'I need to file taxes, to file my tax return — can my accountant help before the end of the fiscal year?', es:'Necesito presentar impuestos, presentar mi declaración de impuestos — ¿me puede ayudar mi contador antes del final del año fiscal?', pron:'ái níid tu fáil táxis, tu fáil mái tax ritérn — can mái acáuntant jelp bifór de end of de físcal íar?'},
    {speaker:'alumno', en:'Let\'s review the revenue, and the expenses, to calculate the profit margin. There might be an audit — keep every receipt, and check what\'s deductible.', es:'Revisemos los ingresos, y los gastos, para calcular el margen de ganancia. Podría haber una auditoría — guarda cada recibo, y revisa qué es deducible.', pron:'lets riviú de révenu, and de expénsis, tu cálkiuleit de práfit márchin. der máit bi an ódit — kíip évri risíit, and chek uáts dedáctibol.'},
    {speaker:'maestro', en:'I am willing to compromise — let\'s find a win-win situation. What\'s your leverage, and what\'s your bottom line?', es:'Estoy dispuesto a ceder — busquemos una situación en la que todos ganen. ¿Cuál es tu ventaja, y cuál es tu límite mínimo?', pron:'ái am uíling tu cámpramais — lets fáind a uín-uín sichuéishion. uáts iór líverach, and uáts iór bátom láin?'},
    {speaker:'alumno', en:'I am willing to concede a little, for mutual benefit. Let\'s go back to the negotiation table, and try to reach an agreement — here\'s my counterproposal.', es:'Estoy dispuesto a ceder un poco, por beneficio mutuo. Volvamos a la mesa de negociación, y tratemos de llegar a un acuerdo — acá está mi contrapropuesta.', pron:'ái am uíling tu cansíid a lítol, for miúchual bénefit. lets góu bak tu de nigóushieishion téibol, and trái tu ríich an agríiment — jírs mái cáunterpropóusal.'},
    {speaker:'maestro', en:'There\'s a conflict — we need to resolve this. Should we bring in a mediator, and find common ground?', es:'Hay un conflicto — necesitamos resolver esto. ¿Deberíamos traer a un mediador, y encontrar un punto en común?', pron:'ders a cánflict — uí níid tu risólv dis. shud uí bring in a mídieitor, and fáind cámon gráund?'},
    {speaker:'alumno', en:'Let\'s try to listen actively, use a respectful tone, and try to clarify things — we need to move forward.', es:'Tratemos de escuchar activamente, usar un tono respetuoso, y tratar de aclarar las cosas — necesitamos avanzar.', pron:'lets trái tu lísen áctivli, iús a rispéctful tóun, and trái tu clárifái zings — uí níid tu múuv fórward.'},
    {speaker:'maestro', en:'Great! Unit eight is done — more than half done now! Keep pushing, this was well earned — you\'re in the final stretch!', es:'¡Genial! La Unidad Ocho está lista — ¡ya más de la mitad hecha! Sigue adelante, esto fue bien merecido — ¡estás en el tramo final!', pron:'gréit! iúnit éit is dan — mor dan jaf dan náu! kíip púshing, dis uás uél érnd — iór in de fáinal strech!'},
    {speaker:'alumno', en:'See you in unit nine, next unit!', es:'¡Nos vemos en la Unidad Nueve, la próxima unidad!', pron:'síi iú in iúnit náin, next iúnit!'}
  ],
  85: [
    {speaker:'maestro', en:'I have a reservation for tonight at this hotel — I needed to book a room, and I\'m here for check-in. What time is check-out?', es:'Tengo una reserva para esta noche en este hotel — necesitaba reservar una habitación, y estoy acá para hacer el check-in. ¿A qué hora es el check-out?', pron:'ái jav a reservéishion for tunáit at dis jóutel — ái níided tu buk a rúum, and áim jíar for chek-in. uát táim is chek-áut?'},
    {speaker:'alumno', en:'Welcome! Please go to the front desk — the receptionist will give you your room key. Would you like a single room, a double room, or a suite?', es:'¡Bienvenido! Por favor vaya a la recepción — el recepcionista le va a dar la llave de su habitación. ¿Quiere una habitación individual, doble, o una suite?', pron:'uélcam! plíis góu tu de frant desk — de risépshionist uil giv iú iór rúum kíi. uud iú láik a síngol rúum, a dábol rúum, or a suíit?'},
    {speaker:'maestro', en:'I booked a room for this business trip — do you offer a corporate rate? I need the invoice for stay.', es:'Reservé una habitación para este viaje de negocios — ¿ofrecen una tarifa corporativa? Necesito la factura de la estadía.', pron:'ái bukt a rúum for dis bísnes trip — du iú áfer a córporeit réit? ái níid de ínvois for stéi.'},
    {speaker:'alumno', en:'I need a bed with a pillow, and a towel in my room. Is the air conditioning working? What\'s the wifi password?', es:'Necesito una cama con una almohada, y una toalla en mi habitación. ¿Está funcionando el aire acondicionado? ¿Cuál es la contraseña del wifi?', pron:'ái níid a bed uid a pílou, and a táuel in mái rúum. is de er candíshioning uérking? uáts de uáifái pásuord?'},
    {speaker:'maestro', en:'I\'d like room service, and please check the minibar too, but tell housekeeping to skip today — do not disturb. Is there laundry service, a business center, and meeting facilities?', es:'Quisiera servicio a la habitación, y por favor revise el minibar también, pero dígale a limpieza que se salte hoy — no molestar. ¿Hay servicio de lavandería, un centro de negocios, y salas de reuniones?', pron:'áid láik rúum sérvis, and plíis chek de mínibar tu, bat tel jáuskíiping tu skip tudéi — du nat distérb. is der lándri sérvis, a bísnes sénter, and míiting facílitis?'},
    {speaker:'alumno', en:'This is an emergency! I need a hospital, an ambulance, a doctor, or a nurse. I\'m in a lot of pain, and I have a fever — there was an accident. Help me please!', es:'¡Esto es una emergencia! Necesito un hospital, una ambulancia, un médico, o una enfermera. Tengo mucho dolor, y tengo fiebre — hubo un accidente. ¡Ayúdenme por favor!', pron:'dis is an iméryensi! ái níid a jáspital, an ámbiulans, a dáctor, or a ners. áim in a lat of péin, and ái jav a fíver — der uás an áksident. jelp mi plíis!'},
    {speaker:'maestro', en:'Do you have travel insurance? What\'s your medical coverage? I need to file a claim — here\'s my policy number.', es:'¿Tienes seguro de viaje? ¿Cuál es tu cobertura médica? Necesito presentar un reclamo — acá está mi número de póliza.', pron:'du iú jav trável inshúrans? uáts iór médical cáverach? ái níid tu fáil a kléim — jírs mái pálisi námber.'},
    {speaker:'alumno', en:'I need to go to the pharmacy for some medicine — I have a headache, a stomachache, and a cough. Is there allergy medicine here?', es:'Necesito ir a la farmacia por un medicamento — tengo dolor de cabeza, dolor de estómago, y tos. ¿Hay medicamento para la alergia acá?', pron:'ái níid tu góu tu de fármasi for sam médisin — ái jav a jédeik, a stámakeik, and a caf. is der álery médisin jíar?'},
    {speaker:'maestro', en:'I have a prescription, but what\'s the dose? These symptoms are getting worse.', es:'Tengo una receta, ¿pero cuál es la dosis? Estos síntomas están empeorando.', pron:'ái jav a priscrípshion, bat uáts de dóus? díis símptams ar guéting uérs.'},
    {speaker:'alumno', en:'I need a medical certificate to be fit to travel, and proof of vaccination.', es:'Necesito un certificado médico de aptitud para viajar, y comprobante de vacunación.', pron:'ái níid a médical certífikeit tu bi fit tu trável, and prúuf of vaksinéishion.'},
    {speaker:'maestro', en:'What\'s the weather like today? It is sunny, or rainy, or cloudy, or windy — it is hot, or maybe it is cold.', es:'¿Cómo está el clima hoy? Está soleado, o lluvioso, o nublado, o ventoso — hace calor, o tal vez hace frío.', pron:'uáts de uéder láik tudéi? it is sáni, or réini, or cláudi, or uíndi — it is jat, or méibi it is cóuld.'},
    {speaker:'alumno', en:'It depends on the season — summer or winter. Check the forecast — we may need to reschedule due to weather.', es:'Depende de la estación — verano o invierno. Revisa el pronóstico — puede que necesitemos reprogramar por el clima.', pron:'it dipénds on de síson — sámer or uínter. chek de fórkast — uí méi níid tu risquédiul diú tu uéder.'},
    {speaker:'maestro', en:'Honestly, in fact, to be precise, this is more or less a problem, kind of a big one.', es:'Honestamente, de hecho, para ser preciso, esto es más o menos un problema, uno bastante grande.', pron:'ánestli, in fact, tu bi presáis, dis is mor or les a práblem, káind of a big uán.'},
    {speaker:'alumno', en:'By all means, no matter what, without a doubt, we\'ll fix this — anyway, we arrived just in time.', es:'Por supuesto, pase lo que pase, sin duda, vamos a arreglar esto — de todos modos, llegamos justo a tiempo.', pron:'bái ol míins, nóu máter uát, uidáut a dáut, uíl fix dis — éniuei, uí aráivd yast in táim.'},
    {speaker:'maestro', en:'I need my laptop, a mouse, a keyboard, and a screen. I need to download some software, and an app.', es:'Necesito mi laptop, un mouse, un teclado, y una pantalla. Necesito descargar un software, y una aplicación.', pron:'ái níid mái láptap, a máus, a kíbord, and a scríin. ái níid tu dáunlóud sam sóftuer, and an ap.'},
    {speaker:'alumno', en:'I need to install this program, and use cloud storage for the spreadsheet and the document. I need to save the file now.', es:'Necesito instalar este programa, y usar almacenamiento en la nube para la hoja de cálculo y el documento. Necesito guardar el archivo ahora.', pron:'ái níid tu instól dis prógram, and iús cláud stórich for de sprédshíit and de dákiument. ái níid tu séiv de fáil náu.'},
    {speaker:'maestro', en:'Is there internet, and wifi here? What\'s the connection speed? I need to log in with my password and username.', es:'¿Hay internet, y wifi acá? ¿Cuál es la velocidad de conexión? Necesito iniciar sesión con mi contraseña y usuario.', pron:'is der ínternet, and uáifái jíar? uáts de canékshion spíid? ái níid tu log in uid mái pásuord and iúserneim.'},
    {speaker:'alumno', en:'I can join the video conference — please mute yourself, and I\'ll share screen. Is there a breakout room, a recording, and a chat box?', es:'Me puedo unir a la videoconferencia — por favor silénciate, y voy a compartir pantalla. ¿Hay una sala de grupo pequeño, una grabación, y un cuadro de chat?', pron:'ái can yóin de vídiou cánferens — plíis miút iórself, and áil sher scríin. is der a bréikáut rúum, a rikórding, and a chat baks?'},
    {speaker:'maestro', en:'Let\'s check social media — can you post, like, share, or comment? How many followers do we have with this hashtag?', es:'Revisemos las redes sociales — ¿puedes publicar, dar me gusta, compartir, o comentar? ¿Cuántos seguidores tenemos con este hashtag?', pron:'lets chek sóushal mídia — can iú póust, láik, sher, or cáment? jáu méni fálouers du uí jav uid dis jáshtag?'},
    {speaker:'alumno', en:'This is getting complicated — our digital marketing campaign, the advertisement, and the target audience need better engagement.', es:'Esto se está poniendo complicado — nuestra campaña de marketing digital, el anuncio, y el público objetivo necesitan mejor participación.', pron:'dis is guéting cámplikeited — áur díyital márketing campéin, de advertáisment, and de tárguet áudians níid béter engéichment.'},
    {speaker:'maestro', en:'I need to update the app — check the notification, and the settings on your account. Is the subscription active?', es:'Necesito actualizar la aplicación — revisa la notificación, y la configuración de tu cuenta. ¿Está activa la suscripción?', pron:'ái níid tu apdéit de ap — chek de noutifikéishion, and de sétings on iór acáunt. is de sabscrípshion áctiv?'},
    {speaker:'alumno', en:'Our management software has an inventory system with a dashboard, and I need to generate a report. Can you check the user permissions?', es:'Nuestro software de gestión tiene un sistema de inventario con un panel de control, y necesito generar un reporte. ¿Puedes revisar los permisos de usuario?', pron:'áur mánechment sóftuer jas an ínventori sístem uid a dáshbord, and ái níid tu yéneréit a ripórt. can iú chek de iúser permíshions?'},
    {speaker:'maestro', en:'There\'s a technical problem — it\'s not working! Try to restart it — I\'m getting an error message.', es:'Hay un problema técnico — ¡no está funcionando! Trata de reiniciarlo — me está saliendo un mensaje de error.', pron:'ders a técnical práblem — its nat uérking! trái tu ristárt it — áim guéting an érror mésach.'},
    {speaker:'alumno', en:'This is working now! Let\'s contact technical support to troubleshoot and to fix a bug — I\'ll open a support ticket.', es:'¡Esto ya está funcionando! Contactemos al soporte técnico para resolver el problema y arreglar un error — voy a abrir un ticket de soporte.', pron:'dis is uérking náu! lets cántact técnical sapórt tu tráblshut and tu fix a bag — áil óupen a sapórt tíket.'},
    {speaker:'maestro', en:'What\'s the response time? If needed, we need to escalate this.', es:'¿Cuál es el tiempo de respuesta? Si hace falta, necesitamos escalar esto.', pron:'uáts de rispáns táim? if níided, uí níid tu éscaleit dis.'},
    {speaker:'alumno', en:'Great news — unit seven is done, and we\'re almost half done with the whole course! Keep going, well done!', es:'Buenas noticias — ¡la Unidad Siete está lista, y ya vamos casi por la mitad de todo el curso! Sigue adelante, ¡bien hecho!', pron:'gréit niús — iúnit séven is dan, and uír ólmoust jaf dan uid de jóul cors! kíip góing, uél dan!'},
    {speaker:'maestro', en:'This was our final review — I\'m proud of your progress! See you in unit eight, next unit!', es:'Este fue nuestro repaso final — ¡estoy orgulloso de tu progreso! ¡Nos vemos en la Unidad Ocho, la próxima unidad!', pron:'dis uás áur fáinal riviú — áim práud of iór prógres! síi iú in iúnit éit, next iúnit!'}
  ],
  73: [
    {speaker:'maestro', en:'Excuse me, where is the office? How do I get to this address? I need to get to this address.', es:'Disculpa, ¿dónde está la oficina? ¿Cómo llego a esta dirección? Necesito llegar a esta dirección.', pron:'exquiús mi, uér is de áfis? jáu du ái get tu dis adrés? ái níid tu get tu dis adrés.'},
    {speaker:'alumno', en:'Turn left, then turn right, and go straight — it\'s near, it\'s not far — actually, it\'s far from here. Just one block, on the corner.', es:'Dobla a la izquierda, después dobla a la derecha, y sigue derecho — está cerca, no está lejos — en realidad, está lejos de acá. Solo una cuadra, en la esquina.', pron:'tern left, den tern ráit, and góu stréit — its níar, its nat far — áctiuali, its far fram jíar. yast uán blak, on de córner.'},
    {speaker:'maestro', en:'I also need to coordinate a shipment — can you arrange the pickup with the carrier?', es:'También necesito coordinar un envío — ¿puedes organizar la recolección con el transportista?', pron:'ái ólsou níid tu coórdineit a shípment — can iú aránch de píkap uid de kárier?'},
    {speaker:'alumno', en:'Go straight ahead — it\'s across from the bank, next to the pharmacy, between two buildings, behind the traffic light and the crosswalk.', es:'Ve derecho — está enfrente del banco, al lado de la farmacia, entre dos edificios, detrás del semáforo y del cruce peatonal.', pron:'góu stréit ajéd — its acrós fram de bank, next tu de fármasi, bituíin tú bíldings, bijáind de tráfic láit and de crósuok.'},
    {speaker:'maestro', en:'I want to track an order — can you send me the tracking link? Is it in transit, out for delivery, or already delivered?', es:'Quiero rastrear un pedido — ¿puedes enviarme el enlace de rastreo? ¿Está en tránsito, en camino de entrega, o ya entregado?', pron:'ái uánt tu trak an órder — can iú send mi de tráking link? is it in tránsit, áut for delíveri, or olrédi delíverd?'},
    {speaker:'alumno', en:'Should I take the bus, a taxi, the train, the subway, a motorcycle, or a truck? I need to choose a carrier.', es:'¿Debería tomar el autobús, un taxi, el tren, el subte, una moto, o un camión? Necesito elegir un transportista.', pron:'shud ái téik de bas, a táxi, de tréin, de sábuei, a móutorsaicol, or a trak? ái níid tu chúus a kárier.'},
    {speaker:'maestro', en:'I will choose a carrier — which shipping company has the best freight rate and insurance?', es:'Voy a elegir un transportista — ¿qué empresa de envíos tiene la mejor tarifa de carga y seguro?', pron:'ái uil chúus a kárier — uích shíping cámpani jas de best fréit réit and inshúrans?'},
    {speaker:'alumno', en:'I\'m at the airport — my flight leaves soon, here\'s my boarding pass and my luggage. What gate is it?', es:'Estoy en el aeropuerto — mi vuelo sale pronto, acá está mi pase de abordar y mi equipaje. ¿Qué puerta es?', pron:'áim at de érport — mái fláit líivs súun, jírs mái bórding pas and mái láguich. uát guéit is it?'},
    {speaker:'maestro', en:'I need to declare something at customs — I have goods to import and to export, with a tariff, a customs declaration, and a country of origin.', es:'Necesito declarar algo en aduana — tengo mercancía para importar y exportar, con un arancel, una declaración aduanera, y un país de origen.', pron:'ái níid tu diklér sámzin at cástams — ái jav guds tu impórt and tu expórt, uid a tárif, a cástams declaréishion, and a cántri of óriyin.'},
    {speaker:'alumno', en:'I have the ticket for the platform — check the schedule for any delay, the departure, and the arrival time.', es:'Tengo el boleto para el andén — revisa el horario por si hay algún retraso, la salida, y la hora de llegada.', pron:'ái jav de tíket for de plátform — chek de squédiul for éni diléi, de dipárcher, and de aráival táim.'},
    {speaker:'maestro', en:'I have the document — here\'s the shipping guide, the commercial invoice, the packing list, and our customs broker\'s contact.', es:'Tengo el documento — acá está la guía de envío, la factura comercial, la lista de empaque, y el contacto de nuestro agente aduanero.', pron:'ái jav de dákiument — jírs de shíping gáid, de camérshial ínvois, de páking list, and áur cástams bróuker\'s cántact.'},
    {speaker:'alumno', en:'Look for the landmark on Main Street, near the avenue, past the roundabout, over the bridge, in that district.', es:'Busca el punto de referencia en la Calle Principal, cerca de la avenida, pasando la rotonda, cruzando el puente, en ese distrito.', pron:'luk for de lándmark on méin stríit, níar de áveniu, past de ráundabaut, óuver de brich, in dat dístrict.'},
    {speaker:'maestro', en:'What\'s the delivery zone, and the coverage area? What\'s the best route for a remote area — can we offer same-day delivery?', es:'¿Cuál es la zona de entrega, y el área de cobertura? ¿Cuál es la mejor ruta para una zona remota — podemos ofrecer entrega el mismo día?', pron:'uáts de delíveri zóun, and de cáveraich éria? uáts de best rúut for a rimóut éria — can uí áfer séim-déi delíveri?'},
    {speaker:'alumno', en:'It\'s over there, right here actually — you\'re close, but you passed it. It takes about ten minutes, not far from here, just around the corner. Follow the signs!', es:'Está allá, en realidad acá mismo — estás cerca, pero ya pasaste. Toma unos diez minutos, no está lejos de acá, justo a la vuelta de la esquina. ¡Sigue las señales!', pron:'its óuver der, ráit jíar áctiuali — iór clóus, bat iú past it. it téiks abáut ten mínits, nat far fram jíar, yast aráund de córner. fálou de sáins!'},
    {speaker:'maestro', en:'There\'s a traffic jam, and it\'s rush hour — how long does it take? Let\'s find a shortcut, or take a detour.', es:'Hay un embotellamiento, y es la hora pico — ¿cuánto tiempo toma? Busquemos un atajo, o tomemos un desvío.', pron:'ders a tráfic yam, and its rash áur — jáu long das it téik? lets fáind a shórtcat, or téik a dítur.'},
    {speaker:'alumno', en:'There\'s a problem with the supply chain — we have a delayed shipment, we have a backorder, it\'s out of stock, and there\'s a bottleneck.', es:'Hay un problema con la cadena de suministro — tenemos un envío retrasado, tenemos un pedido pendiente, está agotado, y hay un cuello de botella.', pron:'ders a práblem uid de sapláy chéin — uí jav a diléid shípment, uí jav a bákorder, its áut of stak, and ders a bátolnek.'},
    {speaker:'maestro', en:'The shipment is on its way now, though.', es:'El envío ya está en camino ahora, igual.', pron:'de shípment is on its uéi náu, dóu.'},
    {speaker:'alumno', en:'I want to hire a carrier — I need to rent a car first, with a driver\'s license, a deposit, a full tank, and low mileage.', es:'Quiero contratar un transportista — necesito alquilar un auto primero, con licencia de conducir, un depósito, el tanque lleno, y poco kilometraje.', pron:'ái uánt tu jáier a kárier — ái níid tu rent a car ferst, uid a dráivers láisens, a dipázit, a ful tank, and lóu máilich.'},
    {speaker:'maestro', en:'Let\'s sign a service agreement — what\'s your on-time delivery rate, your capacity, and the size of your fleet?', es:'Firmemos un acuerdo de servicio — ¿cuál es tu tasa de entrega a tiempo, tu capacidad, y el tamaño de tu flota?', pron:'lets sáin a sérvis agríiment — uáts iór on-táim delíveri réit, iór capásiti, and de sáis of iór flíit?'},
    {speaker:'alumno', en:'Watch for the stop sign, the no entry sign, the one way street, and the speed limit.', es:'Fíjate en la señal de pare, la señal de no entrar, la calle de un solo sentido, y el límite de velocidad.', pron:'uách for de stap sáin, de nóu éntri sáin, de uán uéi stríit, and de spíid límit.'},
    {speaker:'maestro', en:'This package is fragile — handle with care, this side up, do not stack, and it might be hazardous. Take it to the loading dock.', es:'Este paquete es frágil — manéjalo con cuidado, este lado hacia arriba, no apilar, y podría ser peligroso. Llévalo al muelle de carga.', pron:'dis pákich is fráyil — jándol uid ker, dis sáid ap, du nat stak, and it máit bi jasárdas. téik it tu de lóuding dak.'},
    {speaker:'alumno', en:'Which direction — north, south, east, or west? Are we going downtown, or to the outskirts?', es:'¿Qué dirección — norte, sur, este, u oeste? ¿Vamos al centro, o a las afueras?', pron:'uích diréckshion — norz, sáuz, íist, or uést? ar uí góing dáuntáun, or tu de áutskerts?'},
    {speaker:'maestro', en:'Let\'s plan the delivery route — what\'s the optimal route for multiple stops? Time to dispatch the truck.', es:'Planeemos la ruta de entrega — ¿cuál es la ruta óptima para múltiples paradas? Hora de despachar el camión.', pron:'lets plan de delíveri rúut — uáts de áptimal rúut for máltipol staps? táim tu dispách de trak.'},
    {speaker:'alumno', en:'Great job so far — unit six is done! Keep pushing, you\'re doing great — more than a third done, stay consistent!', es:'Buen trabajo hasta ahora — ¡la Unidad Seis está lista! Sigue adelante, lo estás haciendo genial — más de un tercio hecho, mantente constante!', pron:'gréit yab sóu far — iúnit six is dan! kíip púshing, iór dúing gréit — mor dan a zerd dan, stéi cansístent!'},
    {speaker:'maestro', en:'See you in unit seven, next unit!', es:'¡Nos vemos en la Unidad Siete, la próxima unidad!', pron:'síi iú in iúnit séven, next iúnit!'}
  ],
  61: [
    {speaker:'maestro', en:'I\'d like to try on this shirt. What size do you have? Is there a fitting room?', es:'Quisiera probarme esta camisa. ¿Qué talle tienes? ¿Hay un probador?', pron:'áid láik tu trái on dis shert. uát sáis du iú jav? is der a fíting rúum?'},
    {speaker:'alumno', en:'Does it fit? It looks too big — or maybe too small. Let me ask the sales assistant at this store.', es:'¿Te queda bien? Se ve demasiado grande — o tal vez demasiado chico. Déjame preguntarle al vendedor de esta tienda.', pron:'das it fit? it luks tu big — or méibi tu smol. let mi ask de séils asístant at dis stor.'},
    {speaker:'maestro', en:'I also sent you a formal quote — please see the attached proposal, valid until Friday.', es:'También te envié una cotización formal — por favor mira la propuesta adjunta, válida hasta el viernes.', pron:'ái ólsou sent iú a fórmal cuóut — plíis síi de atáchd propóusal, válid antíl fráidei.'},
    {speaker:'alumno', en:'I\'d like to bargain a little. Can you lower the price? What\'s your best offer?', es:'Me gustaría regatear un poco. ¿Puedes bajar el precio? ¿Cuál es tu mejor oferta?', pron:'áid láik tu bárguein a lítol. can iú lóuer de práis? uáts iór best áfer?'},
    {speaker:'maestro', en:'Is there a sale, or a clearance section? Can I get a percentage off?', es:'¿Hay una oferta, o una sección de liquidación? ¿Puedo obtener un porcentaje de descuento?', pron:'is der a séil, or a clírans sékshion? can ái get a persénteich of?'},
    {speaker:'alumno', en:'I want to negotiate terms — here\'s my counteroffer. Are you flexible, or is this a fixed price? What\'s the minimum order?', es:'Quiero negociar los términos — acá está mi contraoferta. ¿Eres flexible, o este es un precio fijo? ¿Cuál es el pedido mínimo?', pron:'ái uánt tu nigóushieit terms — jírs mái cáunteráfer. ar iú fléxibol, or dis is a fixd práis? uáts de mínimum órder?'},
    {speaker:'maestro', en:'I need to return this item — can I exchange it? What\'s your refund policy?', es:'Necesito devolver este artículo — ¿puedo cambiarlo? ¿Cuál es tu política de reembolso?', pron:'ái níid tu ritérn dis áitem — can ái exchéinch it? uáts iór rífand pálisi?'},
    {speaker:'alumno', en:'It\'s defective, actually broken — here\'s my proof of purchase.', es:'Está defectuoso, en realidad roto — acá está mi comprobante de compra.', pron:'its diféctiv, áctiuali bróuken — jírs mái prúuf of pérchase.'},
    {speaker:'maestro', en:'I need to get an invoice — could you please issue an invoice with the invoice number, billing address, and tax ID? It\'s due upon receipt.', es:'Necesito conseguir una factura — ¿podrías emitir una factura con el número de factura, dirección de facturación, y número de identificación fiscal? Vence al recibirla.', pron:'ái níid tu get an ínvois — cud iú plíis íshu an ínvois uid de ínvois námber, bíling adrés, and tax áidi? its diú apán risíit.'},
    {speaker:'alumno', en:'This is covered by the warranty — is this covered, or is it not covered? Can I get a repair, or a replacement?', es:'Esto está cubierto por la garantía — ¿esto está cubierto, o no está cubierto? ¿Puedo obtener una reparación, o un reemplazo?', pron:'dis is cávard bái de uáranti — is dis cávard, or is it nat cávard? can ái get a ripér, or a ripléisment?'},
    {speaker:'maestro', en:'There\'s a withholding tax and VAT — check the terms of sale, and watch out for the late fee on the net amount.', es:'Hay una retención de impuestos y un IVA — revisa los términos de venta, y ten cuidado con el recargo por atraso en el monto neto.', pron:'ders a uidjóulding tax and vi-éi-tíi — chek de terms of séil, and uách áut for de léit fíi on de net amáunt.'},
    {speaker:'alumno', en:'We accept cards — please swipe the card, or insert the card, and enter your PIN. We also take contactless, but some places are cash only.', es:'Aceptamos tarjetas — por favor pasa la tarjeta, o inserta la tarjeta, e ingresa tu PIN. También aceptamos sin contacto, pero algunos lugares son solo efectivo.', pron:'uí acsépt cards — plíis suáip de card, or insért de card, and énter iór pin. uí ólsou téik cántactles, bat sam pléises ar cash óunli.'},
    {speaker:'maestro', en:'Do you accept cards here? I need to record a payment — payment received, even if it\'s a partial payment. Here\'s the transaction ID.', es:'¿Acepta tarjetas acá? Necesito registrar un pago — pago recibido, incluso si es un pago parcial. Acá está el número de transacción.', pron:'du iú acsépt cards jíar? ái níid tu ricórd a péiment — péiment risíivd, íven if its a párshial péiment. jírs de transákshion áidi.'},
    {speaker:'alumno', en:'I bought this from your online store — I need to add to cart, so let me add it to my shopping cart. I need to enter my shipping address.', es:'Compré esto en tu tienda en línea — necesito agregar al carrito, así que déjame agregarlo a mi carrito de compras. Necesito ingresar mi dirección de envío.', pron:'ái bot dis fram iór ánlain stor — ái níid tu ad tu cart, sóu let mi ad it tu mái sháping cart. ái níid tu énter mái shíping adrés.'},
    {speaker:'maestro', en:'I need to enter my card number and my security code for this remote payment — is it a secure payment?', es:'Necesito ingresar mi número de tarjeta y mi código de seguridad para este pago remoto — ¿es un pago seguro?', pron:'ái níid tu énter mái card námber and mái sekiúriti kóud for dis rimóut péiment — is it a sekiúr péiment?'},
    {speaker:'alumno', en:'As far as I know, this should work. To be honest, not yet — I\'m not sure. On the other hand, in other words, we\'re not there yet.', es:'Que yo sepa, esto debería funcionar. Para ser honesto, todavía no — no estoy seguro. Por otro lado, en otras palabras, todavía no llegamos.', pron:'as far as ái nóu, dis shud uork. tu bi ánest, nat iét — áim nat shur. on de áder jand, in áder uords, uír nat der iét.'},
    {speaker:'maestro', en:'From now on, let\'s check this once again, little by little.', es:'De ahora en adelante, revisemos esto una vez más, poco a poco.', pron:'fram náu on, lets chek dis uáns aguén, lítol bái lítol.'},
    {speaker:'alumno', en:'I need pants, a jacket, and a dress, please — in medium or large.', es:'Necesito pantalones, una chaqueta, y un vestido, por favor — en talle mediano o grande.', pron:'ái níid pants, a yáket, and a dres, plíis — in mídium or larch.'},
    {speaker:'maestro', en:'This is a payment reminder — you have an outstanding balance. I kindly remind you, as agreed, to pay soon.', es:'Este es un recordatorio de pago — tienes un saldo pendiente. Te recuerdo amablemente, como acordamos, que pagues pronto.', pron:'dis is a péiment rimáinder — iú jav an áutstanding bálans. ái káindli rimáind iú, as agríid, tu péi súun.'},
    {speaker:'alumno', en:'I also need shoes, boots, a belt, and a hat — and maybe a bag too.', es:'También necesito zapatos, botas, un cinturón, y un sombrero — y tal vez una cartera también.', pron:'ái ólsou níid shúus, búuts, a belt, and a jat — and méibi a bag tu.'},
    {speaker:'maestro', en:'Could you please approve a quote for me? I approve this one — is it approved yet, or still pending approval? Go ahead and sign off on it.', es:'¿Podrías aprobar una cotización para mí? Apruebo esta — ¿ya está aprobada, o todavía está pendiente de aprobación? Adelante, firma la aprobación.', pron:'cud iú plíis apruúv a cuóut for mi? ái apruúv dis uán — is it apruúvd iét, or stil péndin aprúval? góu ajéd and sáin of on it.'},
    {speaker:'alumno', en:'This is too expensive — let\'s do a price comparison. What\'s the cheapest option, and what\'s the most expensive? Is it a good bargain?', es:'Esto es demasiado caro — hagamos una comparación de precios. ¿Cuál es la opción más barata, y cuál es la más cara? ¿Es una buena oferta?', pron:'dis is tu expénsiv — lets du a práis campérison. uáts de chípest ápshion, and uáts de móust expénsiv? is it a gud bárguein?'},
    {speaker:'maestro', en:'It is worth it — is it worth it? Let\'s shop around first, and do a supplier comparison. What\'s the lead time?', es:'Vale la pena — ¿vale la pena? Comparemos precios primero, y hagamos una comparación de proveedores. ¿Cuál es el tiempo de entrega?', pron:'it is uérz it — is it uérz it? lets shap aráund ferst, and du a sapláier campérison. uáts de líid táim?'},
    {speaker:'alumno', en:'This is the best value — let\'s make a final decision.', es:'Esta es la mejor relación calidad-precio — tomemos una decisión final.', pron:'dis is de best váliu — lets méik a fáinal disíshion.'},
    {speaker:'maestro', en:'I want to complain — this doesn\'t work! I want a refund for this faulty product.', es:'Quiero quejarme — ¡esto no funciona! Quiero un reembolso por este producto defectuoso.', pron:'ái uánt tu campléin — dis dásnt uork! ái uánt a rífand for dis fólti prádact.'},
    {speaker:'alumno', en:'Let me call customer service to dispute a charge — there was a billing error.', es:'Déjame llamar al servicio al cliente para disputar un cargo — hubo un error de facturación.', pron:'let mi col cástomer sérvis tu dispiút a charch — der uás a bíling érror.'},
    {speaker:'maestro', en:'We need to resolve this — I\'d like an apology, and here\'s the case number.', es:'Necesitamos resolver esto — me gustaría una disculpa, y acá está el número de caso.', pron:'uí níid tu risólv dis — áid láik an apáloyi, and jírs de kéis námber.'},
    {speaker:'alumno', en:'Great! Unit five is done — steady progress! Don\'t give up, you\'re almost at unit six!', es:'¡Genial! La Unidad Cinco está lista — ¡progreso constante! No te rindas, ¡ya casi llegas a la Unidad Seis!', pron:'gréit! iúnit fáiv is dan — stédi prógres! dont giv ap, iór ólmoust at iúnit six!'},
    {speaker:'maestro', en:'See you in the next unit!', es:'¡Nos vemos en la próxima unidad!', pron:'síi iú in de next iúnit!'}
  ],
  49: [
    {speaker:'maestro', en:'I\'ll have the appetizer — I would like to order. What\'s your favorite main course, and dessert?', es:'Voy a pedir la entrada — quisiera ordenar. ¿Cuál es tu plato principal y postre favorito?', pron:'áil jav de apítaiser — ái uud láik tu órder. uáts iór féivorit méin cors, and disért?'},
    {speaker:'alumno', en:'I like the appetizer, but I don\'t like spicy food — I love sweet or salty dishes. I like to prefer this taste over that one. Is it tasty?', es:'Me gusta la entrada, pero no me gusta la comida picante — amo los platos dulces o salados. Prefiero este sabor sobre ese. ¿Es sabroso?', pron:'ái láik de apítaiser, bat ái dont láik spáisi fúud — ái lav suíit or sólti díshes. ái láik tu préfer dis téist óuver dat uán. is it téisti?'},
    {speaker:'maestro', en:'Let\'s try it — I want to try this recipe before deciding.', es:'Probémoslo — quiero probar esta receta antes de decidir.', pron:'lets trái it — ái uánt tu trái dis résipi bifór disáiding.'},
    {speaker:'alumno', en:'I am allergic to shellfish, so let me check the ingredients first.', es:'Soy alérgico a los mariscos, así que déjame revisar los ingredientes primero.', pron:'ái am aléryic tu shélfish, sóu let mi chek de inguridients ferst.'},
    {speaker:'maestro', en:'Let\'s schedule a meeting — I need to schedule a meeting. What\'s on the agenda, and who are the attendees?', es:'Programemos una reunión — necesito programar una reunión. ¿Qué hay en la agenda, y quiénes son los asistentes?', pron:'lets squédiul a míiting — ái níid tu squédiul a míiting. uáts on de ayénda, and jú ar de aténdiis?'},
    {speaker:'alumno', en:'I need to book a conference room for that time slot.', es:'Necesito reservar una sala de conferencias para ese horario.', pron:'ái níid tu buk a cánferens rúum for dat táim slat.'},
    {speaker:'maestro', en:'Can you confirm attendance? I\'ll be there, but John says: I can\'t attend — he has a schedule conflict, so please try to confirm attendance for the rest.', es:'¿Puedes confirmar tu asistencia? Yo voy a estar, pero John dice: no puedo asistir — tiene un conflicto de horario, así que por favor trata de confirmar la asistencia del resto.', pron:'can iú canférm aténdans? áil bi der, bat Yan séis: ái cant aténd — ji jas a squédiul cánflict, sóu plíis trái tu canférm aténdans for de rest.'},
    {speaker:'alumno', en:'Let me send the invite. Will you accept it, or would you rather decline it? I need to accept or to decline soon.', es:'Déjame enviar la invitación. ¿Vas a aceptarla, o prefieres rechazarla? Necesito aceptar o rechazar pronto.', pron:'let mi send de inváit. uil iú acsépt it, or uud iú ráder disláin it? ái níid tu acsépt or tu disláin súun.'},
    {speaker:'maestro', en:'Should we split the bill, or is this a reservation for the company? I prefer dine in, not take out.', es:'¿Dividimos la cuenta, o esta es una reserva para la empresa? Prefiero comer acá, no para llevar.', pron:'shud uí split de bil, or is dis a reservéishion for de cámpani? ái préfer dáin in, nat téik áut.'},
    {speaker:'alumno', en:'Don\'t forget the tip! Now, what\'s the first topic on the agenda?', es:'¡No te olvides de la propina! Ahora, ¿cuál es el primer tema de la agenda?', pron:'dont forguét de tip! náu, uáts de ferst tápic on de ayénda?'},
    {speaker:'maestro', en:'Let\'s discuss this agenda item — I want to discuss the next steps and the action items.', es:'Discutamos este punto de la agenda — quiero discutir los próximos pasos y las tareas pendientes.', pron:'lets discás dis ayénda áitem — ái uánt tu discás de next steps and de ákshion áitems.'},
    {speaker:'alumno', en:'I\'ll follow up after the meeting minutes are ready. Let me try to summarize before we wrap up.', es:'Voy a hacer seguimiento después de que la minuta esté lista. Déjame tratar de resumir antes de terminar.', pron:'áil fólou ap áfter de míiting mínits ar rédi. let mi trái tu sámaraiz bifór uí rap ap.'},
    {speaker:'maestro', en:'Do you like to cook at home? What\'s your favorite recipe?', es:'¿Te gusta cocinar en casa? ¿Cuál es tu receta favorita?', pron:'du iú láik tu cuk at jóum? uáts iór féivorit résipi?'},
    {speaker:'alumno', en:'I like to boil, to fry, and to bake — the oven and the stove are my favorite tools. I need to cut the vegetables first.', es:'Me gusta hervir, freír, y hornear — el horno y la cocina son mis herramientas favoritas. Necesito cortar las verduras primero.', pron:'ái láik tu bóil, tu frái, and tu béik — de áven and de stóuv ar mái féivorit túuls. ái níid tu cat de véchtabols ferst.'},
    {speaker:'maestro', en:'Can you help me prepare — I need to prepare the slides for the presentation? I need a handout too.', es:'¿Me puedes ayudar a preparar — necesito preparar las diapositivas para la presentación? También necesito un folleto.', pron:'can iú jelp mi pripér — ái níid tu pripér de sláids for de presentéishion? ái níid a jándaut tu.'},
    {speaker:'alumno', en:'Let\'s rehearse — I want to rehearse before the real presentation.', es:'Ensayemos — quiero ensayar antes de la presentación real.', pron:'lets rijérs — ái uánt tu rijérs bifór de ríil presentéishion.'},
    {speaker:'maestro', en:'Would you like some juice, soda, tea, beer, or wine with your meal?', es:'¿Quieres jugo, gaseosa, té, cerveza, o vino con tu comida?', pron:'uud iú láik sam yúus, sóuda, tíi, bíar, or uáin uid iór míil?'},
    {speaker:'alumno', en:'I can send you the video call link. Is your camera on? Can you hear me?', es:'Te puedo enviar el enlace de la videollamada. ¿Tienes la cámara encendida? ¿Me escuchas?', pron:'ái can send iú de vídiou col link. is iór cámera on? can iú jíar mi?'},
    {speaker:'maestro', en:'I need to mute this for now, and let\'s screen share the connection.', es:'Necesito silenciar esto por ahora, y compartamos la pantalla de la conexión.', pron:'ái níid tu miút dis for náu, and lets scríin sher de canékshion.'},
    {speaker:'alumno', en:'Please remember to sign in for the meeting, and to sign off when you\'re done.', es:'Por favor acuérdate de iniciar sesión para la reunión, y de cerrar sesión cuando termines.', pron:'plíis rimémber tu sáin in for de míiting, and tu sáin of uén iór dan.'},
    {speaker:'maestro', en:'For breakfast, I usually have eggs, toast, or cereal — sometimes just a sandwich or a snack.', es:'Para el desayuno, normalmente como huevos, tostadas, o cereal — a veces solo un sándwich o una merienda.', pron:'for brékfast, ái iúshuali jav egs, tóust, or síriol — sámtaims yast a sánduich or a snak.'},
    {speaker:'alumno', en:'I try not to skip a meal, even when I\'m busy.', es:'Trato de no saltarme una comida, incluso cuando estoy ocupado.', pron:'ái trái nat tu skip a míil, íven uén áim bísi.'},
    {speaker:'maestro', en:'This is a follow-up meeting — can you give a status update on our progress?', es:'Esta es una reunión de seguimiento — ¿puedes dar una actualización del estado de nuestro progreso?', pron:'dis is a fálou-ap míiting — can iú giv a stéitus apdéit on áur prógres?'},
    {speaker:'alumno', en:'We are on track, but this other project is behind schedule — we already hit our first milestone though.', es:'Vamos según lo planeado, pero este otro proyecto está atrasado — igual ya alcanzamos nuestro primer hito.', pron:'uí ar on trak, bat dis áder práchect is bijáind squédiul — uí olrédi jit áur ferst máilstóun dóu.'},
    {speaker:'maestro', en:'Can you repeat that? What do you mean?', es:'¿Puedes repetir eso? ¿Qué quieres decir?', pron:'can iú ripíit dat? uát du iú míin?'},
    {speaker:'alumno', en:'I see, got it — no worries, same here.', es:'Ya veo, entendido — no hay problema, lo mismo digo.', pron:'ái síi, gat it — nóu uóris, séim jíar.'},
    {speaker:'maestro', en:'Either way, in that case, let\'s proceed just in case, and follow up as needed. Anyway, let\'s continue.', es:'De cualquier manera, en ese caso, sigamos adelante por las dudas, y hagamos seguimiento según haga falta. De todos modos, sigamos.', pron:'íder uéi, in dat kéis, lets prosíid yast in kéis, and fálou ap as níided. éniuei, lets cantíniu.'},
    {speaker:'alumno', en:'Do you have any allergy? Are you gluten-free, or lactose intolerant?', es:'¿Tienes alguna alergia? ¿Eres libre de gluten, o intolerante a la lactosa?', pron:'du iú jav éni áleryi? ar iú glúten-fríi, or láctous intálerant?'},
    {speaker:'maestro', en:'I try to avoid nuts and shellfish — is this safe to eat?', es:'Trato de evitar los frutos secos y los mariscos — ¿esto es seguro para comer?', pron:'ái trái tu avóid nats and shélfish — is dis séif tu íit?'},
    {speaker:'alumno', en:'I am allergic to nuts, actually. Can you take notes about that?', es:'Soy alérgico a los frutos secos, en realidad. ¿Puedes tomar nota de eso?', pron:'ái am aléryic tu nats, áctiuali. can iú téik nóuts abáut dat?'},
    {speaker:'maestro', en:'Please take notes, remember to take notes carefully, and add it to the minutes of the meeting — who is the responsible person for this decision? I\'ll add an attachment too.', es:'Por favor toma nota, acuérdate de tomar nota con cuidado, y agrégalo a la minuta de la reunión — ¿quién es el responsable de esta decisión? Voy a agregar un adjunto también.', pron:'plíis téik nóuts, rimémber tu téik nóuts kérfuli, and ad it tu de mínits of de míiting — jú is de rispánsibol pérson for dis disíshion? áil ad an atáchment tu.'},
    {speaker:'alumno', en:'Would you like some cake, a cookie, ice cream, chocolate, or candy? I have a sweet tooth!', es:'¿Quieres torta, una galleta, helado, chocolate, o caramelos? ¡Soy goloso!', pron:'uud iú láik sam kéik, a cúki, áis críim, chácolet, or cándi? ái jav a suíit túuz!'},
    {speaker:'maestro', en:'In conclusion, thank you all for coming. Before we finish, any questions?', es:'En conclusión, gracias a todos por venir. Antes de terminar, ¿alguna pregunta?', pron:'in canclúshion, zenk iú ol for cáming. bifór uí fínish, éni cuéstions?'},
    {speaker:'alumno', en:'Let\'s meet again at the same time next week — here\'s our action plan.', es:'Reunámonos de nuevo a la misma hora la próxima semana — acá está nuestro plan de acción.', pron:'lets míit aguén at de séim táim next uíik — jírs áur ákshion plan.'},
    {speaker:'maestro', en:'I need to go to the supermarket — do you have a shopping list?', es:'Necesito ir al supermercado — ¿tienes una lista de compras?', pron:'ái níid tu góu tu de súupermárket — du iú jav a sháping list?'},
    {speaker:'alumno', en:'I\'ll check every aisle, put it in the basket, and pay at checkout with the cashier.', es:'Voy a revisar cada pasillo, ponerlo en la canasta, y pagar en la caja con el cajero.', pron:'áil chek évri áil, put it in de básket, and péi at chékaut uid de cashíer.'},
    {speaker:'maestro', en:'I want fresh food, not frozen. Also, I have a supplier meeting later — I need a sample and a catalog.', es:'Quiero comida fresca, no congelada. Además, tengo una reunión con un proveedor más tarde — necesito una muestra y un catálogo.', pron:'ái uánt fresh fúud, nat fróusen. ólsou, ái jav a sapláier míiting léiter — ái níid a sámpol and a cátalog.'},
    {speaker:'alumno', en:'Let\'s review the terms and conditions for the new partnership.', es:'Revisemos los términos y condiciones de la nueva sociedad.', pron:'lets riviú de terms and candíshions for de niú pártnership.'},
    {speaker:'maestro', en:'How much food do we need — a little, a lot, or just enough? Not too much, though.', es:'¿Cuánta comida necesitamos — un poco, mucho, o solo suficiente? No demasiado, igual.', pron:'jáu mach fúud du uí níid — a lítol, a lat, or yast ináf? nat tu mach, dóu.'},
    {speaker:'alumno', en:'I need to buy some extra supplies — we have enough of some things, but none of others.', es:'Necesito comprar algunos suministros extra — tenemos suficiente de algunas cosas, pero ninguna de otras.', pron:'ái níid tu bái sam extra sapláis — uí jav ináf of sam zings, bat nan of áders.'},
    {speaker:'maestro', en:'Let\'s check the resources and get budget approval. We need to allocate funds, or maybe to cut costs, depending on the investment.', es:'Revisemos los recursos y consigamos la aprobación del presupuesto. Necesitamos asignar fondos, o tal vez recortar costos, dependiendo de la inversión.', pron:'lets chek de risórses and get báchet aprúval. uí níid tu álokeit fands, or méibi tu cat costs, dipénding on de invéstment.'},
    {speaker:'alumno', en:'Great! Unit four is done — one third done already! Keep learning, great effort — you\'re on track!', es:'¡Genial! La Unidad Cuatro está lista — ¡ya un tercio hecho! Sigue aprendiendo, gran esfuerzo — ¡vas bien encaminado!', pron:'gréit! iúnit fóar is dan — uán zerd dan olrédi! kíip lérning, gréit éfort — iór on trak!'},
    {speaker:'maestro', en:'This was our final review. See you in unit five, next unit!', es:'Este fue nuestro repaso final. ¡Nos vemos en la Unidad Cinco, la próxima unidad!', pron:'dis uás áur fáinal riviú. síi iú in iúnit fáiv, next iúnit!'}
  ],
  37: [
    {speaker:'maestro', en:'I\'d like eleven of these, please. What\'s the price?', es:'Quisiera once de estos, por favor. ¿Cuál es el precio?', pron:'áid láik iléven of díis, plíis. uáts de práis?'},
    {speaker:'alumno', en:'Let me check the cost — eleven units, actually twelve would fit your budget better. It costs approximately fifty dollars, and it\'s not expensive at all — quite cheap for the quality!', es:'Déjame revisar el costo — once unidades, en realidad doce le vendría mejor a tu presupuesto. Cuesta aproximadamente cincuenta dólares, y no es nada caro — bastante barato para la calidad.', pron:'let mi chek de cost — iléven iúnits, áctiuali tuélv uud fit iór báchet béter. it costs aproximeitli fífti dálars, and its nat expénsiv at ol — cuáit chíip for de cuáliti!'},
    {speaker:'maestro', en:'What about thirteen, fourteen, or fifteen units? Is there a better final price?', es:'¿Y qué tal trece, catorce, o quince unidades? ¿Hay un mejor precio final?', pron:'uát abáut zértiin, fórtiin, or fíftiin iúnits? is der a béter fáinal práis?'},
    {speaker:'alumno', en:'For sixteen, seventeen, eighteen, nineteen, or twenty units, the price gets even better!', es:'Para dieciséis, diecisiete, dieciocho, diecinueve, o veinte unidades, ¡el precio mejora aún más!', pron:'for síkstiin, séventiin, éitiin, náintiin, or tuénti iúnits, de práis gets íven béter!'},
    {speaker:'maestro', en:'What if I order thirty, forty, or fifty?', es:'¿Y si pido treinta, cuarenta, o cincuenta?', pron:'uát if ái órder zérti, fórti, or fífti?'},
    {speaker:'alumno', en:'For sixty, seventy, eighty, ninety, or even a hundred or a thousand units, I\'ll send you a full quote — with the subtotal, the tax, and the shipping cost. It\'s time to add up the numbers for the grand total.', es:'Para sesenta, setenta, ochenta, noventa, o incluso cien o mil unidades, te voy a enviar una cotización completa — con el subtotal, el impuesto, y el costo de envío. Es hora de sumar los números para el total general.', pron:'for síksti, séventi, éiti, náinti, or íven a jándred or a záusand iúnits, áil send iú a ful cuóut — uid de sábtoutal, de tax, and de shíping cost. its táim tu ad ap de námbers for de grand tóutal.'},
    {speaker:'maestro', en:'What time is it? I need to cost this out and know your business hours.', es:'¿Qué hora es? Necesito calcular esto y saber tus horarios de atención.', pron:'uát táim is it? ái níid tu cost dis áut and nóu iór bísnes áurs.'},
    {speaker:'alumno', en:'It\'s about half past nine, just a minute past — it opens around nine o\'clock and it closes around quarter past five. Actually, quarter to five is closer!', es:'Son cerca de las nueve y media, apenas un minuto pasado — abre alrededor de las nueve en punto y cierra alrededor de las cinco y cuarto. ¡En realidad, un cuarto para las cinco está más cerca!', pron:'its abáut jaf past náin, yast a mínit past — it óupens aráund náin oclók and it clóuses aráund cuórter past fáiv. áctiuali, cuórter tu fáiv is clóuser!'},
    {speaker:'maestro', en:'What\'s your delivery time?', es:'¿Cuál es tu tiempo de entrega?', pron:'uáts iór delíveri táim?'},
    {speaker:'alumno', en:'We deliver within 24 hours, same day if you order early, or next day if it\'s later.', es:'Entregamos dentro de 24 horas, el mismo día si pides temprano, o al día siguiente si es más tarde.', pron:'uí delíver uidín tuénti-fóar áurs, séim déi if iú órder érli, or next déi if its léiter.'},
    {speaker:'alumno', en:'In the morning we\'re fastest, but in the afternoon or in the evening, or at night, deliveries can be a little late or delayed.', es:'Por la mañana somos más rápidos, pero por la tarde o por la noche, o de madrugada, las entregas pueden llegar un poco tarde o demoradas.', pron:'in de mórning uír fástest, bat in de áfternúun or in de ívning, or at náit, delíveris can bi a lítol léit or diléid.'},
    {speaker:'alumno', en:'We try to arrive early, around the estimated arrival time, before or after your preferred window — and we\'ll give you a tracking number as soon as possible.', es:'Tratamos de llegar temprano, alrededor de la hora estimada de llegada, antes o después de tu horario preferido — y te vamos a dar un número de rastreo lo antes posible.', pron:'uí trái tu aráiv érli, aráund de éstimeited aráival táim, bifór or áfter iór preférd uíndou — and uíl giv iú a tráking námber as súun as pásibol.'},
    {speaker:'maestro', en:'What\'s today\'s date? I need to know the due date for this invoice.', es:'¿Cuál es la fecha de hoy? Necesito saber la fecha de vencimiento de esta factura.', pron:'uáts tudéis déit? ái níid tu nóu de diú déit for dis ínvois.'},
    {speaker:'alumno', en:'What\'s the date, what\'s today\'s date? Let\'s see — in January, February, March, April, May, or June, our busiest months are usually — actually, in July, August, September, October, November, or December too, the due date is the fifteenth of each month. If it\'s overdue, we charge a small fee.', es:'¿Cuál es la fecha, cuál es la fecha de hoy? A ver — en enero, febrero, marzo, abril, mayo, o junio, nuestros meses más ocupados suelen ser — en realidad, en julio, agosto, septiembre, octubre, noviembre, o diciembre también, la fecha de vencimiento es el quince de cada mes. Si está vencido, cobramos una pequeña multa.', pron:'uáts de déit, uáts tudéis déit? lets síi — in yániueri, fébrueri, march, éiprol, méi, or yun, áur bísiest manzs ar iúshuali — áctiuali, in yulái, ágast, septémber, actóuber, novémber, or disémber tu, de diú déit is de fíftiinz of íich manz. if its ouverdiú, uí charch a smol fíi.'},
    {speaker:'maestro', en:'What are your payment terms?', es:'¿Cuáles son tus condiciones de pago?', pron:'uát ar iór péiment terms?'},
    {speaker:'alumno', en:'This year, we offer net 30, but we also accept an upfront payment, an installment plan, or the full balance due, so the invoice is paid in full. If you need more time, we can offer an extension or a grace period.', es:'Este año, ofrecemos treinta días netos, pero también aceptamos un pago adelantado, un plan de cuotas, o el saldo completo pendiente, así la factura queda pagada por completo. Si necesitas más tiempo, podemos ofrecer una extensión o un período de gracia.', pron:'dis íar, uí áfer net zérti, bat uí ólsou acsépt an apfránt péiment, an instólment plan, or de fúl bálans diú, sóu de ínvois is péid in fúl. if iú níid mor táim, uí can áfer an exténshion or a gréis píriod.'},
    {speaker:'maestro', en:'Let me see — hold on, give me a second to think about this.', es:'Déjame ver — espera, dame un segundo para pensarlo.', pron:'let mi síi — jóuld on, giv mi a sécond tu zink abáut dis.'},
    {speaker:'alumno', en:'Sure, take your time. That works for you, right? Or that doesn\'t work for you?', es:'Claro, tómate tu tiempo. Eso te funciona, ¿verdad? ¿O eso no te funciona?', pron:'shúar, téik iór táim. dat uorks for iú, ráit? or dat dásnt uork for iú?'},
    {speaker:'maestro', en:'That makes sense — I agree with the terms.', es:'Eso tiene sentido — estoy de acuerdo con las condiciones.', pron:'dat méiks sens — ái agríi uid de terms.'},
    {speaker:'alumno', en:'I disagree with one small thing, but maybe, or probably, we can find a middle ground. Definitely worth discussing.', es:'No estoy de acuerdo con una pequeña cosa, pero tal vez, o probablemente, podamos encontrar un punto medio. Definitivamente vale la pena hablarlo.', pron:'ái disagríi uid uán smol zing, bat méibi, or prábabli, uí can fáind a mídol gráund. définitli uérz discásing.'},
    {speaker:'maestro', en:'Which item is your first choice? What about your second, third, fourth, or fifth pick?', es:'¿Cuál artículo es tu primera opción? ¿Y tu segunda, tercera, cuarta, o quinta elección?', pron:'uích áitem is iór ferst chóis? uát abáut iór sécond, zerd, fórz, or fifz pik?'},
    {speaker:'alumno', en:'This is our top priority item — urgent and on the ranking list — and that is our best seller! These are on our preferred supplier list, and those are still on the waiting list — next in line, but not last.', es:'Este es nuestro artículo de máxima prioridad — urgente y en la lista de ranking — ¡y ese es nuestro más vendido! Estos están en nuestra lista de proveedores preferidos, y esos todavía están en la lista de espera — siguientes en la fila, pero no últimos.', pron:'dis is áur tap práioriti áitem — érchent and on de ránking list — and dat is áur best séler! díis ar on áur preférd sapláier list, and dóus ar stil on de uéiting list — next in láin, bat nat last.'},
    {speaker:'maestro', en:'How would you like to pay?', es:'¿Cómo te gustaría pagar?', pron:'jáu uud iú láik tu péi?'},
    {speaker:'alumno', en:'I will pay by bank transfer, or maybe cash money, credit card, debit card, or a check. Please give me the receipt, and check if there\'s any change money left over.', es:'Voy a pagar por transferencia bancaria, o tal vez efectivo, tarjeta de crédito, tarjeta de débito, o cheque. Por favor dame el recibo, y revisa si sobra algo de vuelto.', pron:'ái uil péi bái bank tránsfer, or méibi cash máni, crédit card, débit card, or a chek. plíis giv mi de risíit, and chek if ders éni chéinch máni left óuver.'},
    {speaker:'maestro', en:'What\'s the currency, and what\'s the exchange rate today?', es:'¿Cuál es la moneda, y cuál es el tipo de cambio hoy?', pron:'uáts de kérensi, and uáts de exchéinch réit tudéi?'},
    {speaker:'alumno', en:'I need to pay first, then I\'ll ask you to charge my card, and I\'ll get my change. If there\'s a problem, we\'ll process a refund, or use a wire transfer instead.', es:'Necesito pagar primero, después te voy a pedir que cobres mi tarjeta, y voy a recibir mi vuelto. Si hay un problema, vamos a procesar un reembolso, o usar una transferencia bancaria en su lugar.', pron:'ái níid tu péi ferst, den áil ask iú tu charch mái card, and áil get mái chéinch. if ders a práblem, uíl práses a rífand, or iús a uáier tránsfer instéd.'},
    {speaker:'maestro', en:'I want to buy in bulk, or maybe to purchase and sell later — what\'s your lowest price for a bulk order at wholesale, to sell at retail?', es:'Quiero comprar al por mayor, o tal vez comprar y vender después — ¿cuál es tu precio más bajo para un pedido grande al por mayor, para vender al por menor?', pron:'ái uánt tu bái in balk, or méibi tu pérchase and sel léiter — uáts iór lóuest práis for a balk órder at jóulseil, tu sel at ríiteil?'},
    {speaker:'alumno', en:'I need to negotiate this with my supplier. Between wholesale and retail, our profit margin is small — we\'re trying to avoid a loss and just break even. This is my final offer!', es:'Necesito negociar esto con mi proveedor. Entre mayorista y minorista, nuestro margen de ganancia es chico — estamos tratando de evitar una pérdida y solo cubrir gastos. ¡Esta es mi oferta final!', pron:'ái níid tu nigóushieit dis uid mái sapláier. bituíin jóulseil and ríiteil, áur práfit márchin is smol — uír tráing tu avóid a los and yast bréik íven. dis is mái fáinal áfer!'},
    {speaker:'alumno', en:'Deal closed! Let\'s purchase this order now.', es:'¡Trato cerrado! Compremos este pedido ahora.', pron:'díil clóusd! lets pérchase dis órder náu.'},
    {speaker:'maestro', en:'How much does it weigh? I need the weight in kilograms or grams.', es:'¿Cuánto pesa? Necesito el peso en kilogramos o gramos.', pron:'jáu mach das it uéi? ái níid de uéit in kílogramz or gramz.'},
    {speaker:'alumno', en:'It weighs about one kilogram, or maybe one liter, and it\'s one meter long, or about forty centimeters — around sixteen inches. Its weight in pounds, length, width, and height all fit on one pallet.', es:'Pesa cerca de un kilogramo, o tal vez un litro, y mide un metro de largo, o unos cuarenta centímetros — alrededor de dieciséis pulgadas. Su peso en libras, largo, ancho, y alto entran todos en un palet.', pron:'it uéis abáut uán kílogram, or méibi uán líiter, and its uán míiter long, or abáut fórti séntimiiters — aráund síkstiin ínches. its uéit in páunds, lenz, uídz, and jáit ol fit on uán pálet.'},
    {speaker:'alumno', en:'We measure the volume of each pack carefully before shipping.', es:'Medimos el volumen de cada paquete con cuidado antes de enviarlo.', pron:'uí méshur de vóliúm of íich pak kérfuli bifór shíping.'},
    {speaker:'maestro', en:'So, unit three is done — strong progress! Review time: what was your final challenge?', es:'Entonces, la Unidad Tres está terminada — ¡buen progreso! Hora de repaso: ¿cuál fue tu desafío final?', pron:'sóu, iúnit zríi is dan — strong prógres! riviú táim: uát uás iór fáinal chálench?'},
    {speaker:'alumno', en:'I\'m proud of you — that was well earned! I remember everything.', es:'Estoy orgulloso de ti — ¡eso fue bien merecido! Recuerdo todo.', pron:'áim práud of iú — dat uás uél érnd! ái rimémber évrizin.'},
    {speaker:'maestro', en:'See you in unit four, next unit!', es:'¡Nos vemos en la Unidad Cuatro, la próxima unidad!', pron:'síi iú in iúnit fóar, next iúnit!'}
  ],
  25: [
    {speaker:'maestro', en:'Let\'s visit your new place — what\'s it like?', es:'Visitemos tu lugar nuevo — ¿cómo es?', pron:'lets vísit iór niú pléis — uáts it láik?'},
    {speaker:'alumno', en:'Wow, this is a great new house! There is a kitchen, a living room, and a bedroom, with a door, a window, and a chair!', es:'¡Guau, esta es una gran casa nueva! Hay una cocina, una sala, y un dormitorio, con una puerta, una ventana, y una silla!', pron:'uáu, dis is a gréit niú jáus! der is a kíchen, a líving rúum, and a bédrum, uid a dor, a uíndou, and a chér!'},
    {speaker:'alumno', en:'There is also a garden, and a desk with a computer in my new office.', es:'También hay un jardín, y un escritorio con una computadora en mi oficina nueva.', pron:'der is ólsou a gárden, and a desk uid a campiúter in mái niú áfis.'},
    {speaker:'maestro', en:'Tell me about your daily routine.', es:'Contame sobre tu rutina diaria.', pron:'tel mi abáut iór déili rutíin.'},
    {speaker:'alumno', en:'I wake up early, and I get up right away. I have breakfast, and then I go to work.', es:'Me despierto temprano, y me levanto enseguida. Desayuno, y después voy al trabajo.', pron:'ái uéik ap érli, and ái get ap ráit auéi. ái jav brékfast, and den ái góu tu uork.'},
    {speaker:'alumno', en:'I start work at eight, and I take a break for lunch and dinner. My shift is long, sometimes with overtime.', es:'Empiezo a trabajar a las ocho, y hago una pausa para el almuerzo y la cena. Mi turno es largo, a veces con horas extra.', pron:'ái start uork at éit, and ái téik a bréik for lanch and díner. mái shift is long, sámtaims uid óvertaim.'},
    {speaker:'alumno', en:'I am tired, but tomorrow is my day off — I can finally rest. I am always punctual, and I finish work at six!', es:'Estoy cansado, pero mañana es mi día libre — por fin puedo descansar. Siempre soy puntual, ¡y termino de trabajar a las seis!', pron:'ái am táierd, bat tumórou is mái déi of — ái can fáinali rest. ái am ólueis pánctual, and ái fínish uork at six!'},
    {speaker:'maestro', en:'What do you usually do at work?', es:'¿Qué haces normalmente en el trabajo?', pron:'uát du iú iúshuali du at uork?'},
    {speaker:'alumno', en:'Every day, I try to eat well, to drink coffee, to walk a little, and to drive carefully.', es:'Todos los días, trato de comer bien, tomar café, caminar un poco, y manejar con cuidado.', pron:'évri déi, ái trái tu íit uél, tu drínk cáfi, tu uók a lítol, and tu dráiv kérfuli.'},
    {speaker:'alumno', en:'I like to talk to my team, to write emails, and to read every message.', es:'Me gusta hablar con mi equipo, escribir correos, y leer cada mensaje.', pron:'ái láik tu tok tu mái tíim, tu ráit íimeils, and tu ríid évri mésach.'},
    {speaker:'alumno', en:'It\'s important to send reports, to receive feedback, and to call my clients to organize the schedule.', es:'Es importante enviar reportes, recibir comentarios, y llamar a mis clientes para organizar la agenda.', pron:'its impórtant tu send ripórts, tu risíiv fíidbak, and tu col mái cláients tu órganais de squédiul.'},
    {speaker:'alumno', en:'I try to check everything twice, to finish my tasks, to fix small problems, and to deliver on time.', es:'Trato de revisar todo dos veces, terminar mis tareas, arreglar problemas pequeños, y entregar a tiempo.', pron:'ái trái tu chek évrizin tuáis, tu fínish mái tasks, tu fix smol práblems, and tu delíver on táim.'},
    {speaker:'maestro', en:'What\'s in your office?', es:'¿Qué hay en tu oficina?', pron:'uáts in iór áfis?'},
    {speaker:'alumno', en:'There is a desk, an office, a printer, and a shelf — everything I need! Do you have the key for the roof?', es:'Hay un escritorio, una oficina, una impresora, y un estante — ¡todo lo que necesito! ¿Tienes la llave del techo?', pron:'der is a desk, an áfis, a prínter, and a shelf — évrizin ái níid! du iú jav de kíi for de rúuf?'},
    {speaker:'maestro', en:'Do you have the tools you need?', es:'¿Tienes las herramientas que necesitas?', pron:'du iú jav de túuls iú níid?'},
    {speaker:'alumno', en:'I have a tool box: a hammer, a screwdriver, a ladder, some paint, and a lamp.', es:'Tengo una caja de herramientas: un martillo, un destornillador, una escalera, pintura, y una lámpara.', pron:'ái jav a túul bax: a jámer, a scrúdraiver, a láder, sam péint, and a lamp.'},
    {speaker:'alumno', en:'I also have a broom, a bucket, a pen, some paper, and tape.', es:'También tengo una escoba, un balde, una lapicera, papel, y cinta.', pron:'ái ólsou jav a brúum, a báket, a pen, sam péiper, and téip.'},
    {speaker:'alumno', en:'I have a stapler, a folder, scissors, and a cart for the office too.', es:'Tengo una engrapadora, una carpeta, tijeras, y un carrito para la oficina también.', pron:'ái jav a stéipler, a fólder, sísors, and a cart for de áfis tu.'},
    {speaker:'maestro', en:'Do you have any pets?', es:'¿Tienes mascotas?', pron:'du iú jav éni pets?'},
    {speaker:'alumno', en:'I have a dog, a cat, and a bird — my pets help me relax after work! I love to feed them every morning.', es:'Tengo un perro, un gato, y un pájaro — ¡mis mascotas me ayudan a relajarme después del trabajo! Me encanta darles de comer cada mañana.', pron:'ái jav a dog, a cat, and a berd — mái pets jelp mi riláx áfter uork! ái lav tu fíid dem évri mórning.'},
    {speaker:'maestro', en:'What are your company\'s values?', es:'¿Cuáles son los valores de tu empresa?', pron:'uát ar iór cámpanis váliuz?'},
    {speaker:'alumno', en:'Our company mission and vision are clear: our values are teamwork, respect, honesty, commitment, and growth.', es:'La misión y visión de nuestra empresa son claras: nuestros valores son trabajo en equipo, respeto, honestidad, compromiso, y crecimiento.', pron:'áur cámpani míshion and víshion ar clíar: áur váliuz ar tíimuork, rispéct, ánesti, camítment, and gróuz.'},
    {speaker:'alumno', en:'We also believe in trust — I recommend this company to my friendly neighbors in our neighborhood, and they became loyal customers.', es:'También creemos en la confianza — recomiendo esta empresa a mis vecinos amigables en nuestro barrio, y se volvieron clientes leales.', pron:'uí ólsou bilíiv in trast — ái récomend dis cámpani tu mái fréndli néibors in áur néiborjud, and déi bikéim lóial cástomers.'},
    {speaker:'alumno', en:'This is a regular customer with a long-term relationship — reliable and satisfied, always. It\'s easy to recommend someone like this.', es:'Este es un cliente habitual con una relación a largo plazo — confiable y satisfecho, siempre. Es fácil recomendar a alguien así.', pron:'dis is a réguiular cástomer uid a long-term riléishionship — riláiabol and sátisfaid, ólueis. its ísi tu récomend sámuan láik dis.'},
    {speaker:'maestro', en:'How do you treat your customers?', es:'¿Cómo tratas a tus clientes?', pron:'jáu du iú tríit iór cástomers?'},
    {speaker:'alumno', en:'We recommend asking for a referral — that builds loyalty over time.', es:'Recomendamos pedir una referencia — eso construye lealtad con el tiempo.', pron:'uí récomend ásking for a riférol — dat bilds lóialti óuver táim.'},
    {speaker:'alumno', en:'If there is a complaint, we always find a solution together, as a community.', es:'Si hay una queja, siempre encontramos una solución juntos, como comunidad.', pron:'if der is a campléint, uí ólueis fáind a saliúshion tugéder, as a camiúniti.'},
    {speaker:'maestro', en:'Are you hungry? Should we eat?', es:'¿Tienes hambre? ¿Comemos?', pron:'ar iú jángri? shud uí íit?'},
    {speaker:'alumno', en:'By the way, are you hungry? For example, we could have lunch right now, in general.', es:'Por cierto, ¿tienes hambre? Por ejemplo, podríamos almorzar ahora mismo, en general.', pron:'bái de uéi, ar iú jángri? for exámpol, uí cud jav lanch ráit náu, in yéneral.'},
    {speaker:'maestro', en:'As usual, don\'t worry — it\'s fine, no rush, take your time. We\'re almost there, and the food is already coming, still hot.', es:'Como siempre, no te preocupes — está bien, sin apuro, tomate tu tiempo. Ya casi llegamos, y la comida ya viene, todavía caliente.', pron:'as iúshual, dont uóri — its fáin, nóu rash, téik iór táim. uír ólmoust der, and de fúud is olrédi cáming, stil jot.'},
    {speaker:'alumno', en:'Let\'s have lunch! I would like rice, chicken, meat, vegetables, and fruit, please. And some bread and soup too.', es:'¡Almorcemos! Quisiera arroz, pollo, carne, vegetales, y fruta, por favor. Y pan y sopa también.', pron:'lets jav lanch! ái uud láik ráis, chíken, míit, véchtabols, and frúut, plíis. and sam bred and súup tu.'},
    {speaker:'alumno', en:'I\'m hungry! The salad looks delicious — a table for two, please, with a menu, a waiter, and a reservation.', es:'¡Tengo hambre! La ensalada se ve deliciosa — una mesa para dos, por favor, con un menú, un mozo, y una reserva.', pron:'áim jángri! de sálad luks delíshius — a téibol for tú, plíis, uid a méniu, a uéiter, and a reservéishion.'},
    {speaker:'maestro', en:'What about cleaning up?', es:'¿Y qué tal la limpieza?', pron:'uát abáut clíining ap?'},
    {speaker:'alumno', en:'The check please! Actually, let me try to clean the kitchen first — I need to wash the dishes.', es:'¡La cuenta por favor! De hecho, dejame tratar de limpiar la cocina primero — necesito lavar los platos.', pron:'de chek plíis! áctiuali, let mi trái tu clíin de kíchen ferst — ái níid tu uásh de díshes.'},
    {speaker:'alumno', en:'I need to sweep, to put things in order, and to take out the trash — everything was dirty, now it\'s clean.', es:'Necesito barrer, poner las cosas en orden, y sacar la basura — todo estaba sucio, ahora está limpio.', pron:'ái níid tu suíip, tu put zings in órder, and tu téik áut de trash — évrizin uás dérti, náu its clíin.'},
    {speaker:'alumno', en:'Let\'s clean it and make it shine! I need to count the inventory, and check the label on each box.', es:'¡Limpiemos y hagamos que brille! Necesito contar el inventario, y revisar la etiqueta de cada caja.', pron:'lets clíin it and méik it sháin! ái níid tu cáunt de ínventori, and chek de léibol on íich box.'},
    {speaker:'alumno', en:'Is anything missing or damaged? If so, let\'s return it and try to update the storage records.', es:'¿Falta algo o está dañado? Si es así, devolvámoslo y tratemos de actualizar los registros del depósito.', pron:'is énizin mísing or dámachd? if sóu, lets ritérn it and trái tu apdéit de stórach récords.'},
    {speaker:'maestro', en:'Any plans for the weekend?', es:'¿Algún plan para el fin de semana?', pron:'éni plans for de uíikend?'},
    {speaker:'alumno', en:'This weekend, I would like to relax, to travel, and to enjoy some free time on my vacation or holiday.', es:'Este fin de semana, quisiera relajarme, viajar, y disfrutar algo de tiempo libre en mis vacaciones o feriado.', pron:'dis uíikend, ái uud láik tu riláx, tu trável, and tu enyói sam fríi táim on mái vakéishion or jálidei.'},
    {speaker:'alumno', en:'I can try to request a sick leave with permission, and my coworker can cover for me.', es:'Puedo tratar de pedir una licencia por enfermedad con permiso, y mi compañero puede cubrirme.', pron:'ái can trái tu ricuést a sik líiv uid permíshion, and mái cóuorker can cáver for mi.'},
    {speaker:'alumno', en:'I can try to plan a trip for next week, once my manager tries to approve my time off, and I try to return to work after.', es:'Puedo tratar de planear un viaje para la próxima semana, una vez que mi jefe trate de aprobar mi tiempo libre, y trato de volver al trabajo después.', pron:'ái can trái tu plan a trip for next uíik, uáns mái mánayer tráis tu apruúv mái táim of, and ái trái tu ritérn tu uork áfter.'},
    {speaker:'maestro', en:'What about the new supplier?', es:'¿Y qué tal el proveedor nuevo?', pron:'uát abáut de niú sapláier?'},
    {speaker:'alumno', en:'This new supplier is cheaper than the old one, but is it better, or worse?', es:'Este proveedor nuevo es más barato que el anterior, ¿pero es mejor, o peor?', pron:'dis niú sapláier is chíiper dan de óuld uán, bat is it béter, or uérs?'},
    {speaker:'alumno', en:'Actually, it\'s the same — let\'s try to compare and to choose. Is this the best option, or is there a different deal?', es:'En realidad, es lo mismo — tratemos de comparar y elegir. ¿Es esta la mejor opción, o hay una oferta diferente?', pron:'áctiuali, its de séim — lets trái tu campér and tu chúus. is dis de best ápshion, or is der a díferent díil?'},
    {speaker:'alumno', en:'This is more expensive than the other offer — let\'s try to negotiate the contract, and to decide on an agreement.', es:'Esto es más caro que la otra oferta — tratemos de negociar el contrato, y decidir un acuerdo.', pron:'dis is mor expénsiv dan de áder áfer — lets trái tu nigóushieit de cántract, and tu disáid on an agríiment.'},
    {speaker:'maestro', en:'So, what did you learn this unit?', es:'Entonces, ¿qué aprendiste en esta unidad?', pron:'sóu, uát did iú lern dis iúnit?'},
    {speaker:'alumno', en:'Welcome to unit two, review time! What did you learn? I remember everything, and I forgot nothing.', es:'¡Bienvenido a la Unidad Dos, hora de repaso! ¿Qué aprendiste? Recuerdo todo, y no olvidé nada.', pron:'uélcam tu iúnit tú, riviú táim! uát did iú lern? ái rimémber évrizin, and ái forgát názin.'},
    {speaker:'maestro', en:'Let\'s practice one more time — you\'re improving, and you\'re halfway there. See you in the next unit!', es:'Practiquemos una vez más — estás mejorando, y ya vas por la mitad. ¡Nos vemos en la próxima unidad!', pron:'lets práctis uán mor táim — iór imprúuving, and iór jáfuei der. síi iú in de next iúnit!'}
  ],
  13: [
    {speaker:'maestro', en:'Welcome! How are you doing?', es:'¡Bienvenido! ¿Cómo estás?', pron:'uélcam! jáu ar iú dúing?', blanks:['How','are','you']},
    {speaker:'alumno', en:'I\'m fine, thanks! And you?', es:'¡Estoy bien, gracias! ¿Y tú?', pron:'áim fáin, zenks! and iú?', blanks:['fine','thanks','you']},
    {speaker:'maestro', en:'I\'m fine, thanks! Are you ready for the mission?', es:'¡Estoy bien, gracias! ¿Estás listo para la misión?', pron:'áim fáin, zenks! ar iú rédi for de míshion?', blanks:['ready']},
    {speaker:'alumno', en:'I\'m ready! I\'m tired, but no problem!', es:'¡Estoy listo! Estoy cansado, ¡pero no hay problema!', pron:'áim rédi! áim táierd, bat nóu práblem!', blanks:['ready','tired','no','problem']},
    {speaker:'maestro', en:'Of course! Sure! Let\'s go right now! One moment, please... Are you busy?', es:'¡Por supuesto! ¡Claro! ¡Vamos ahora mismo! Un momento, por favor... ¿Estás ocupado?', pron:'of cors! shúar! lets góu ráit náu! uán móument, plíis... ar iú bísi?', blanks:['Of','course','right','now','One','moment','busy']},
    {speaker:'alumno', en:'I\'m busy, but let me check. I can help you!', es:'Estoy ocupado, pero déjame revisar. ¡Te puedo ayudar!', pron:'áim bísi, bat let mi chek. ái can jelp iú!', blanks:['busy','let','me','check','can','help','you']},
    {speaker:'maestro', en:'Look! A crystal ball call! Thanks for calling through the crystal ball, and thanks for your time, great wizard!', es:'¡Mira! ¡Una llamada por la bola de cristal! Gracias por llamar a través de la bola de cristal, y gracias por tu tiempo, ¡gran mago!', pron:'luk! a crístal bol col! zenks for cóling zrú de crístal bol, and zenks for iór táim, gréit uísard!', blanks:['Thanks','for','thanks','for','your','time']},
    {speaker:'alumno', en:'It was a pleasure! Let\'s stay in touch across a thousand dimensions. I will confirm it!', es:'¡Fue un placer! Mantengamos el contacto a través de mil dimensiones. ¡Lo voy a confirmar!', pron:'it uás a pléyer! lets stéi in tach acrós a záusand daménshions. ái uil canférm it!', blanks:['pleasure','stay','in','touch','will','confirm','it']},
    {speaker:'maestro', en:'I\'ll email you a flying letter, and I\'ll call you back with a thunderstorm! I will stay in touch!', es:'Te voy a enviar una carta voladora, y te voy a devolver la llamada con una tormenta de truenos! ¡Voy a mantenerme en contacto!', pron:'áil íimeil iú a fláing léter, and áil col iú bak uid a zánderstorm! ái uil stéi in tach!', blanks:['email','call','you','back','stay','in','touch']},
    {speaker:'alumno', en:'See you soon, or see you next week, whichever comes first through time! Have a good day! Take care!', es:'¡Nos vemos pronto, o nos vemos la próxima semana, lo que llegue primero a través del tiempo! ¡Que tengas un buen día! ¡Cuídate!', pron:'síi iú súun, or síi iú next uíik, uícheven cams ferst zrú táim! jav a gud déi! téik ker!', blanks:['See','you','soon','see','you','next','week','good','day','Take','care']},
    {speaker:'maestro', en:'Best regards, looking forward to it. Until next time, brave traveler! Talk to you later!', es:'Saludos cordiales, con muchas ganas de eso. ¡Hasta la próxima, valiente viajero! ¡Hablamos luego!', pron:'best rigárds, lúking forúord tu it. antíl next táim, bréiv trávoler! tok tu iú léiter!', blanks:['Best','regards','Until','next','time','Talk','to','you','later']},
    {speaker:'alumno', en:'I have a question, dragon: what, who, where, when, why, and how did the treasure disappear?', es:'Tengo una pregunta, dragón: ¿qué, quién, dónde, cuándo, por qué, y cómo desapareció el tesoro?', pron:'ái jav a cuéstion, drágon: uát, ju, uér, uén, uái, and jáu did de tréshur disapír?', blanks:['have','question','what','who','where','when','why','how']},
    {speaker:'maestro', en:'I can explain it! Can you help me, robot detective? Can you explain this mystery?', es:'¡Lo puedo explicar! ¿Me puedes ayudar, robot detective? ¿Puedes explicar este misterio?', pron:'ái can expléin it! can iú jelp mi, róubat ditéctiv? can iú expléin dis místeri?', blanks:['can','explain','it']},
    {speaker:'alumno', en:'Which one is ready — the gold coins or the diamond eggs? And when will the pirates arrive?', es:'¿Cuál está listo — las monedas de oro o los huevos de diamante? ¿Y cuándo llegan los piratas?', pron:'uích uán is rédi — de góuld cóins or de dáiamand egs? and uén uil de páirats aráiv?', blanks:['Which','one','when']},
    {speaker:'maestro', en:'Do you have stock of magic beans, and what\'s the price for a thousand?', es:'¿Tienes stock de frijoles mágicos, y cuál es el precio por mil?', pron:'du iú jav stak of máyic bíins, and uáts de práis for a záusand?', blanks:['have','stock','what\'s','the','price']},
    {speaker:'alumno', en:'I can check the price, and I can confirm the stock right away! Let\'s count the crystals: one, two, three, four, five, six, seven, eight, nine, ten!', es:'¡Puedo revisar el precio, y puedo confirmar el stock enseguida! Contemos los cristales: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez!', pron:'ái can chek de práis, and ái can canférm de stak ráit auéi! lets cáunt de crístals: uán, tú, zríi, fóar, fáiv, six, séven, éit, náin, ten!', blanks:['check','confirm','one','two','three','four','five','six','seven','eight','nine','ten']},
    {speaker:'maestro', en:'Is it ready? When will it arrive?', es:'¿Está listo? ¿Cuándo llegará?', pron:'is it rédi? uén uil it aráiv?', blanks:['it','ready','When']},
    {speaker:'alumno', en:'It is ready! How\'s business today?', es:'¡Está listo! ¿Cómo va el negocio hoy?', pron:'it is rédi! jáus bísnes tudéi?', blanks:['ready','business']},
    {speaker:'maestro', en:'Business is good! Business is great! Business is perfect! As always!', es:'¡El negocio va bien! ¡El negocio va muy bien! ¡El negocio va perfecto! ¡Como siempre!', pron:'bísnes is gud! bísnes is gréit! bísnes is pérfect! as ólueis!', blanks:['good','great','perfect']},
    {speaker:'alumno', en:'Glad to hear that! So-so... sometimes business is slow, but today everything ok! I understand! Sounds good!', es:'¡Me alegra oír eso! Así así... a veces el negocio va lento, ¡pero hoy todo está bien! ¡Entiendo! ¡Suena bien!', pron:'glad tu jíar dat! sóu-sóu... sámtaims bísnes is slóu, bat tudéi évrizin ok! ái ánderstand! sáunds gud!', blanks:['Glad','slow','everything','understand','Sounds']},
    {speaker:'maestro', en:'Perfect! Exactly!', es:'¡Perfecto! ¡Exactamente!', pron:'pérfect! exáctli!', blanks:['Perfect','Exactly']},
    {speaker:'maestro', en:'Do you want your castle in red, blue, green, or yellow, dragon?', es:'¿Quieres tu castillo en rojo, azul, verde, o amarillo, dragón?', pron:'du iú uánt iór cásol in red, blú, gríin, or iélou, drágon?', blanks:['red','blue','green','yellow']},
    {speaker:'alumno', en:'We also have black and white castles, in a size as big as a mountain or as small as a pebble!', es:'¡También tenemos castillos negros y blancos, en un tamaño tan grande como una montaña o tan pequeño como una piedrita!', pron:'uí ólsou jav blak and uáit cásols, in a sáis as big as a máuntain or as smol as a pébol!', blanks:['black','white','size','big','small']},
    {speaker:'maestro', en:'It is red! It is big and strong! Is it new?', es:'¡Es rojo! ¡Es grande y fuerte! ¿Es nuevo?', pron:'it is red! it is big and strong! is it niú?', blanks:['big','strong','new']},
    {speaker:'alumno', en:'This new castle material is stronger than a thousand elephants and it will last forever! It is durable!', es:'¡Este nuevo material de castillo es más fuerte que mil elefantes y va a durar para siempre! ¡Es durable!', pron:'dis niú cásol matírial is stránguer dan a záusand élefants and it uil last foréver! it is diúrabol!', blanks:['new','stronger','durable']},
    {speaker:'maestro', en:'It\'s incredibly heavy because it\'s made of solid metal, not paper-thin plastic!', es:'¡Es increíblemente pesado porque está hecho de metal sólido, no de plástico delgado como el papel!', pron:'its incrédibli jévi bicós its méid of sálid métal, nat péiper-zin plástic!', blanks:['metal','plastic']},
    {speaker:'alumno', en:'It is made of metal, heavy, big, and strong!', es:'¡Está hecho de metal, pesado, grande, y fuerte!', pron:'it is méid of métal, jévi, big, and strong!', blanks:['metal','heavy','big','strong']},
    {speaker:'maestro', en:'Let\'s begin the final spell! And now, let\'s finish this magical quest! Let\'s practice!', es:'¡Empecemos el hechizo final! Y ahora, ¡terminemos esta misión mágica! ¡Practiquemos!', pron:'lets bigín de fáinal spel! and náu, lets fínish dis máyical cuest! lets práctis!', blanks:['begin','finish','practice']},
    {speaker:'alumno', en:'Let\'s go! Well done, brave hero, great job — you defeated the vocabulary dragon and you did it!', es:'¡Vamos! Bien hecho, valiente héroe, gran trabajo — ¡venciste al dragón del vocabulario y lo lograste!', pron:'lets góu! uél dan, bréiv jírou, gréit chab — iú difíted de vocábiuleri drágon and iú did it!', blanks:['go','Well','done','great','job','you','did','it']},
    {speaker:'maestro', en:'Practice makes perfect, so keep going on your legendary journey! We\'re almost done with this level.', es:'La práctica hace al maestro, ¡así que sigue en tu viaje legendario! Ya casi terminamos este nivel.', pron:'práctis méiks pérfect, sóu kíip góing on iór léyendari yérni! uír ólmoust dan uid dis lével.', blanks:['makes','perfect','keep','going','almost','done']},
    {speaker:'alumno', en:'Congratulations on finishing Unit 1, Champion!', es:'¡Felicitaciones por terminar la Unidad 1, campeón!', pron:'congrachuléishons on fínishing iúnit uán, chámpion!', blanks:['Congratulations']},
    {speaker:'maestro', en:'See you in the next unit, where even bigger adventures await! See you Monday!', es:'¡Nos vemos en la próxima unidad, donde te esperan aventuras aún más grandes! ¡Nos vemos el lunes!', pron:'síi iú in de next iúnit, uér íven bíguer advénchurs auéit! síi iú mándei!', blanks:['See','you','Monday']},
    {speaker:'maestro', en:'Look! A new outpost! Let\'s introduce ourselves. What\'s your name, dragon?', es:'¡Mira! ¡Un puesto nuevo! Presentémonos. ¿Cuál es tu nombre, dragón?', pron:'luk! a niú áutpost! lets intradiús aursélvs. uáts iór néim, drágon?', blanks:['introduce','ourselves','name']},
    {speaker:'alumno', en:'My name is Blaze, and I am from the Floating City! Nice to meet you!', es:'¡Me llamo Blaze, y soy de la Ciudad Flotante! ¡Mucho gusto!', pron:'mái néim is Bléis, and ái am fram de flóuting síti! náis tu míit iú!', blanks:['name','is','from','Nice','to']},
    {speaker:'maestro', en:'Welcome! Come in! Have a seat. This is our trading manager. Please contact us anytime.', es:'¡Bienvenido! ¡Pasa! Toma asiento. Este es nuestro gerente de comercio. Por favor contactanos cuando quieras.', pron:'uélcam! cam in! jav a síit. dis is áur tréiding mánayer. plíis cántact as énitaim.', blanks:['seat','manager','contact']},
    {speaker:'alumno', en:'The pleasure is mine! I work at a shop in the Floating City. Here is my business card, with my phone number and address, and our website.', es:'¡El placer es mío! Trabajo en una tienda en la Ciudad Flotante. Aquí está mi tarjeta de presentación, con mi número de teléfono y dirección, y nuestro sitio web.', pron:'de pléyer is máin! ái uork at a shap in de flóuting síti. jír is mái bísnes card, uid mái fóun námber and adrés, and áur uébsait.', blanks:['pleasure','work','at','business','card','phone','number','address','website']},
    {speaker:'maestro', en:'What is your company name? What country and city are you from, and since when?', es:'¿Cuál es el nombre de tu empresa? ¿De qué país y ciudad eres, y desde cuándo?', pron:'uát is iór cámpani néim? uát cántri and síti ar iú fram, and sins uén?', blanks:['company','name','country','city','since','when']},
    {speaker:'alumno', en:'Our team is from Colombia, from the city of Medellín, since last year! We sell magical toys, and we provide the best quality services and products.', es:'¡Nuestro equipo es de Colombia, de la ciudad de Medellín, desde el año pasado! Vendemos juguetes mágicos, y ofrecemos los mejores servicios y productos de calidad.', pron:'áur tíim is fram Colómbia, fram de síti of Medeyín, sins last íar! uí sel máyical tóis, and uí prováid de best cuáliti sérvises and prádacts.', blanks:['from','since','sell','provide']},
    {speaker:'maestro', en:'What about the price? Do you offer a discount for suppliers?', es:'¿Y el precio? ¿Ofrecen descuento a proveedores?', pron:'uát abáut de práis? du iú áfer a díscaunt for sapláiers?', blanks:['price','discount']},
    {speaker:'alumno', en:'Yes! Our customers love our prices, and delivery is fast — right from our warehouse to the market! Our brand is well known here.', es:'¡Sí! Nuestros clientes aman nuestros precios, y la entrega es rápida — directo desde nuestro depósito al mercado! Nuestra marca es bien conocida acá.', pron:'iés! áur cástomers lav áur práises, and delíveri is fast — ráit fram áur uérjaus tu de márket! áur brand is uél nóun jír.', blanks:['customers','delivery','warehouse','brand']},
    {speaker:'maestro', en:'Is this shop just you, or is it a family business?', es:'¿Esta tienda eres solo tú, o es un negocio familiar?', pron:'is dis shap yast iú, or is it a fámili bísnes?', blanks:['family','business']},
    {speaker:'alumno', en:'I am the owner, but I am in charge of much more than sales! My wife and my husband both work in logistics, my son works in accounting, and my daughter is our team leader!', es:'Soy el dueño, ¡pero estoy a cargo de mucho más que ventas! Mi esposa y mi esposo trabajan los dos en logística, mi hijo trabaja en contabilidad, y mi hija es nuestra líder de equipo!', pron:'ái am de óuner, bat ái am in chárch of mach mor dan séils! mái uáif and mái jásband bóuz uork in loyístics, mái san uorks in acáunting, and mái dóter is áur tíim líder!', blanks:['owner','charge','of','logistics','accounting','leader']},
    {speaker:'maestro', en:'What about your brother, your sister, and your children?', es:'¿Y tu hermano, tu hermana, y tus hijos?', pron:'uát abáut iór bráder, iór síster, and iór chíldren?', blanks:['brother','sister','children']},
    {speaker:'alumno', en:'My brother is an employee in our sales department, my sister is a colleague of my boss in a different outpost, and my children help us on weekends!', es:'Mi hermano es empleado en nuestro departamento de ventas, mi hermana es colega de mi jefe en otro puesto, ¡y mis hijos nos ayudan los fines de semana!', pron:'mái bráder is an emplói in áur séils dipártment, mái síster is a cálig of mái bos in a díferent áutpost, and mái chíldren jelp as on uíikends!', blanks:['brother','department','sister','children']},
    {speaker:'maestro', en:'Great! Welcome to our market, Blaze!', es:'¡Genial! ¡Bienvenido a nuestro mercado, Blaze!', pron:'gréit! uélcam tu áur márket, Bléis!', blanks:['Great','market']}
  ]
};
const unitReviewStories = {
  12: [
    {en:'Good morning! Blaze opens his shop with a warm smile.', es:'¡Buenos días! Blaze abre su tienda con una sonrisa cálida.', pron:'gud mórning! Bléis óupens jis shap uid a uórm smáil.'},
    {en:'"Welcome! Come in!" he tells the first customer. "I need help finding a gift," she says.', es:'"¡Bienvenido! ¡Pasa!", le dice al primer cliente. "Necesito ayuda para encontrar un regalo", dice ella.', pron:'uélcam! cam in! ji tels de ferst cástomer. ái níid jelp fáinding a gift, shi séis.'},
    {en:'"I can help you!" Blaze replies happily.', es:'"¡Te puedo ayudar!", responde Blaze con alegría.', pron:'ái can jelp iú! Bléis riplís jápili.'},
    {en:'"My name is Blaze, and I am from the Floating City," he says, shaking her hand.', es:'"Me llamo Blaze, y soy de la Ciudad Flotante", dice, dándole la mano.', pron:'mái néim is Bléis, and ái am fram de flóuting síti, ji séis, shéiking jer jand.'},
    {en:'"I am the owner of this shop, and I am in charge of everything here — from the prices to the deliveries."', es:'"Soy el dueño de esta tienda, y estoy a cargo de todo acá — desde los precios hasta las entregas."', pron:'ái am de óuner of dis shap, and ái am in chárch of évrizin jír — fram de práises tu de delíveris.'},
    {en:'"I work at it with my whole family."', es:'"Trabajo en ella con toda mi familia."', pron:'ái uork at it uid mái jóul fámili.'},
    {en:'His wife checks the calendar, his son counts the boxes, his daughter writes the invoice — the whole team, together.', es:'Su esposa revisa el calendario, su hijo cuenta las cajas, su hija escribe la factura — todo el equipo, juntos.', pron:'jis uáif cheks de cálendar, jis san cáunts de báxes, jis dóter ráits de ínvois — de jóul tíim, tugéder.'},
    {en:'"We sell magical toys, and we provide the best service in the kingdom," he explains proudly.', es:'"Vendemos juguetes mágicos, y ofrecemos el mejor servicio del reino", explica orgulloso.', pron:'uí sel máyical tóis, and uí prováid de best sérvis in de kíngdom, ji explains práudli.'},
    {en:'"We have ten boxes and five units in stock," he says, "and everything is ready to go."', es:'"Tenemos diez cajas y cinco unidades en stock", dice, "y todo está listo."', pron:'uí jav ten báxes and fáiv iúnits in stak, ji séis, and évrizing is rédi tu góu.'},
    {en:'"I am available on Friday, if you need a meeting," he adds, checking his schedule.', es:'"Estoy disponible el viernes, si necesitas una reunión", agrega, revisando su agenda.', pron:'ái am avéilabol on Fráidei, if iú níid a míiting, ji ads, chéking jis squédiul.'},
    {en:'By afternoon, he feels tired. "I\'m tired," he admits quietly — but he keeps going.', es:'Por la tarde, se siente cansado. "Estoy cansado", admite en voz baja — pero sigue adelante.', pron:'bái áfternúun, ji fíils táierd. áim táierd, ji admíts cuáietli — bat ji kíips góing.'},
    {en:'"How\'s business today?" his wife asks. "Business is slow," he sighs — then smiles — "but I have hope."', es:'"¿Cómo va el negocio hoy?", pregunta su esposa. "El negocio va lento", suspira — y después sonríe — "pero tengo esperanza."', pron:'jáus bísnes tudéi? jis uáif asks. bísnes is slóu, ji sáis — den smáils — bat ái jav jóup.'},
    {en:'A worried customer calls. "I will call you back on Monday," Blaze promises, "and I will make things right."', es:'Llama un cliente preocupado. "Te voy a devolver la llamada el lunes", promete Blaze, "y voy a arreglar las cosas."', pron:'a uórid cástomer cols. ái uil col iú bak on Mándei, Bléis prámises, and ái uil méik zings ráit.'},
    {en:'"See you soon," he adds warmly.', es:'"Nos vemos pronto", agrega con calidez.', pron:'síi iú súun, ji ads uórmli.'},
    {en:'A curious kid runs in. "How many? What color? Is it ready?" Questions everywhere!', es:'Entra corriendo un niño curioso. "¿Cuántos? ¿Qué color? ¿Está listo?" ¡Preguntas por todos lados!', pron:'a kiúrias kid rans in. jáu méni? uát cálor? is it rédi? cuéstions évriuér!'},
    {en:'"It is red, it is big, and it is made of strong metal," Blaze answers patiently, one question at a time.', es:'"Es rojo, es grande, y está hecho de metal fuerte", responde Blaze con paciencia, una pregunta a la vez.', pron:'it is red, it is big, and it is méid of strong métal, Bléis ánsers péishentli, uán cuéstion at a táim.'},
    {en:'By evening, exhausted but happy, Blaze looks at his family. "We did it. Well done, everyone. Great job."', es:'Al anochecer, agotado pero feliz, Blaze mira a su familia. "Lo logramos. Bien hecho, todos. Gran trabajo."', pron:'bái ívning, exóstid bat jápi, Bléis luks at jis fámili. uí did it. uél dan, évriuan. gréit chab.'},
    {en:'"Congratulations on finishing Unit One," he whispers to himself, eyes shining with pride.', es:'"Felicitaciones por terminar la Unidad Uno", se susurra a sí mismo, con los ojos brillando de orgullo.', pron:'congrachuléishons on fínishing iúnit uán, ji uíspers tu jimsélf, áis sháining uid práid.'},
    {en:'Tomorrow, a new day begins — but tonight, "let\'s practice" one more time together, and then "let\'s finish" with a smile.', es:'Mañana, empieza un nuevo día — pero esta noche, "practiquemos" una vez más juntos, y después "terminemos" con una sonrisa.', pron:'tumórou, a niú déi bigíns — bat tunáit, lets práctis uán mor táim tugéder, and den lets fínish uid a smáil.'}
  ],
  24: [
    {en:'Blaze wakes up at seven and starts work at eight — a new day in his growing shop.', es:'Blaze se despierta a las siete y empieza a trabajar a las ocho — un nuevo día en su tienda que crece.', pron:'Bléis uéiks ap at séven and starts uork at éit — a niú déi in jis gróuing shap.'},
    {en:'There is a computer on his desk, and there is a window with a view of the whole kingdom.', es:'Hay una computadora en su escritorio, y hay una ventana con vista a todo el reino.', pron:'der is a campiúter on jis desk, and der is a uíndou uid a viú of de jóul kíngdom.'},
    {en:'"I have a dog," says Blaze, "and my dog helps me organize the shop every morning!"', es:'"Tengo un perro", dice Blaze, "¡y mi perro me ayuda a organizar la tienda todas las mañanas!"', pron:'ái jav a dog, séis Bléis, and mái dog jelps mi órganáis de shap évri mórnin!'},
    {en:'A loyal customer walks in. "I recommend your shop to everyone," she says. "I would like to order more toys, please."', es:'Entra una clienta fiel. "Recomiendo tu tienda a todo el mundo", dice. "Quisiera pedir más juguetes, por favor."', pron:'a lóial cástomer uóks in. ái récomend iór shap tu évriuan, shi séis. ái uud láik tu órder mor tóis, plíis.'},
    {en:'"This is cheaper than the other shop, and better too!" she laughs. Blaze smiles proudly.', es:'"¡Este es más barato que la otra tienda, y también mejor!", se ríe. Blaze sonríe orgulloso.', pron:'dis is chíiper dan de áder shap, and béter tú! shi lafs. Bléis smáils práudli.'},
    {en:'"Can I take a day off tomorrow?" asks Blaze\'s wife. "Of course you can!" he replies.', es:'"¿Puedo tomarme un día libre mañana?", pregunta la esposa de Blaze. "¡Claro que puedes!", responde.', pron:"can ái téik a déi of tumórou? asks Bléis uáifs. of cors iú can! ji riplái."},
    {en:'Halfway there! What did you learn in Unit Two? Let\'s practice one more time.', es:'¡Vamos a la mitad! ¿Qué aprendiste en la Unidad Dos? Practiquemos una vez más.', pron:"jaf-uéi der! uát did iú lern in iúnit tú? lets práctis uán mor táim."},
    {en:"You're improving every single day. Congratulations, brave dragon — the next unit is waiting for you!", es:'Estás mejorando cada día. Felicitaciones, valiente dragón — ¡la próxima unidad te está esperando!', pron:"iór improúving évri síngol déi. congrachuléishons, bréiv drágon — de next iúnit is uéiting for iú!"}
  ],
  36: [
    {en:'Blaze checks the price list. "It costs twenty dollars," he tells a new customer.', es:'Blaze revisa la lista de precios. "Cuesta veinte dólares", le dice a un cliente nuevo.', pron:'Bléis cheks de práis list. it casts tuénti dálars, ji tels a niú cástomer.'},
    {en:'"What time does the shop open?" asks the customer. "It opens at nine, and it closes at six," Blaze answers.', es:'"¿A qué hora abre la tienda?", pregunta el cliente. "Abre a las nueve, y cierra a las seis", responde Blaze.', pron:'uát táim das de shap óupen? asks de cástomer. it óupens at náin, and it clóuses at siks, Bléis ánsers.'},
    {en:'"The due date is January fifth," Blaze writes on the invoice, "so please don\'t forget!"', es:'"La fecha de vencimiento es el cinco de enero", escribe Blaze en la factura, "¡así que por favor no te olvides!"', pron:"de diú déit is chánuari fifz, Bléis ráits on de ínvois, sóu plíis dont forguét!"},
    {en:'"This is the first option, and that is the second one," Blaze explains, showing two boxes.', es:'"Esta es la primera opción, y esa es la segunda", explica Blaze, mostrando dos cajas.', pron:'dis is de ferst ápshion, and dat is de sécond uán, Bléis explains, shóuing tú báxes.'},
    {en:'"I will pay by credit card," says the customer. "Perfect!" Blaze smiles.', es:'"Voy a pagar con tarjeta de crédito", dice el cliente. "¡Perfecto!", sonríe Blaze.', pron:'ái uil péi bái crédit card, séis de cástomer. pérfect! Bléis smáils.'},
    {en:'"I need to negotiate the price a little," the customer adds. "It weighs ten kilograms, after all!"', es:'"Necesito negociar el precio un poco", agrega el cliente. "¡Pesa diez kilogramos, después de todo!"', pron:'ái níid tu negóushieit de práis a lítol, de cástomer ads. it uéis ten kílograms, áfter ol!'},
    {en:'Blaze laughs. "Deal! This has been strong progress for both of us."', es:'Blaze se ríe. "¡Trato hecho! Esto ha sido un gran progreso para los dos."', pron:'Bléis lafs. díil! dis jas bíin strong prógres for bóuz of as.'},
    {en:"Well earned, dragon — you're proud of this final challenge. See you in Unit Four!", es:'Bien merecido, dragón — estás orgulloso de este desafío final. ¡Nos vemos en la Unidad Cuatro!', pron:"uél érnd, drágon — iór práud of dis fáinal chálench. síi iú in iúnit for!"}
  ],
  48: [
    {en:"At the restaurant, Blaze looks at the menu. \"I'll have the pasta,\" he says.", es:'En el restaurante, Blaze mira el menú. "Voy a pedir la pasta", dice.', pron:"at de réstorant, Bléis luks at de méniu. áil jav de pasta, ji séis."},
    {en:'"I like spicy food," he tells the waiter, "but I don\'t like it too salty."', es:'"Me gusta la comida picante", le dice al mesero, "pero no me gusta muy salada."', pron:"ái láik spáisi fúud, ji tels de uéiter, bat ái dont láik it tú sólti."},
    {en:'After lunch, back at the office: "Let\'s discuss the agenda for today\'s meeting," Blaze says.', es:'Después del almuerzo, de vuelta en la oficina: "Discutamos la agenda de la reunión de hoy", dice Blaze.', pron:"áfter lanch, bak at de áfis: lets discás de áyenda for tudéis míiting, Bléis séis."},
    {en:'On the video call, his supplier asks, "Can you hear me?" "Yes, I can hear you perfectly," Blaze replies.', es:'En la videollamada, su proveedor pregunta, "¿Me escuchas?" "Sí, te escucho perfecto", responde Blaze.', pron:"on de vídiou col, jis sapláier asks, can iú jíar mi? iés, ái can jíar iú pérfectli, Bléis riplís."},
    {en:'"We are on track with this order," Blaze reports, checking his notes.', es:'"Vamos bien encaminados con este pedido", informa Blaze, revisando sus notas.', pron:"uí ar on trak uid dis órder, Bléis ripórts, chéking jis nóuts."},
    {en:'"I am allergic to shellfish, by the way," he adds, laughing, "so no seafood at the next lunch meeting!"', es:'"Soy alérgico a los mariscos, por cierto", agrega, riéndose, "¡así que nada de mariscos en el próximo almuerzo de trabajo!"', pron:"ái am alérchic tu shélfish, bái de uéi, ji ads, láfing, sóu nóu síifúud at de next lanch míiting!"},
    {en:'"I need to buy office supplies today," Blaze remembers. "We have enough budget for that this month."', es:'"Necesito comprar insumos de oficina hoy", recuerda Blaze. "Tenemos suficiente presupuesto para eso este mes."', pron:"ái níid tu bái áfis sapláis tudéi, Bléis rimémbers. uí jav ináf báyet for dat dis manz."},
    {en:"One third done, dragon! Great effort — you're on track. See you in Unit Five!", es:'¡Un tercio del camino, dragón! Gran esfuerzo — vas bien encaminado. ¡Nos vemos en la Unidad Cinco!', pron:"uán zerd dan, drágon! gréit éfort — iór on trak. síi iú in iúnit fáiv!"}
  ],
  60: [
    {en:'Back at the shop, a customer needs to get a refund for a broken toy.', es:'De vuelta en la tienda, un cliente necesita obtener un reembolso por un juguete roto.', pron:'bak at de shap, a cástomer níids tu guét a rífand for a bróuken tói.'},
    {en:'"This is covered by the warranty," Blaze explains. "We accept cards, cash, or even partial payment."', es:'"Esto está cubierto por la garantía", explica Blaze. "Aceptamos tarjetas, efectivo, o hasta pago parcial."', pron:'dis is cávard bái de uáranti, Bléis explains. uí accépt cards, cash, or íven párshial péiment.'},
    {en:'Online, another customer needs to enter her shipping address before checkout.', es:'En línea, otra clienta necesita ingresar su dirección de envío antes de pagar.', pron:'ánlain, anáder cástomer níids tu énter jer shíping adrés bifór chékaut.'},
    {en:'"This shirt is too big for me," says a third customer. "Let\'s find a smaller size!" Blaze smiles.', es:'"Esta camisa me queda muy grande", dice un tercer cliente. "¡Busquemos un talle más chico!", sonríe Blaze.', pron:"dis shert is tú big for mi, séis a zerd cástomer. lets fáind a smóler sáis! Bléis smáils."},
    {en:'The supplier calls: "I approve this quote," he says. "It is worth it — steady progress for both of us!"', es:'El proveedor llama: "Apruebo esta cotización", dice. "¡Vale la pena — progreso constante para los dos!"', pron:'de sapláier cols: ái aprúuv dis cuóut, ji séis. it is uérz it — stédi prágres for bóuz of as!'},
    {en:'One unhappy customer says, "I want a refund for this faulty product!" Blaze listens carefully and helps.', es:'Un cliente insatisfecho dice, "¡Quiero un reembolso por este producto defectuoso!" Blaze escucha con atención y ayuda.', pron:'uán anjápi cástomer séis, ái uánt a rífand for dis fólti prádact! Bléis lísens kérfuli and jelps.'},
    {en:"Unit five, done! Don't give up — you're almost at unit six.", es:'¡Unidad cinco, lista! No te rindas — ya casi llegas a la unidad seis.', pron:"iúnit fáiv, dan! dont guiv ap — iór ólmoust at iúnit siks."},
    {en:'Steady progress, brave dragon. See you in the next unit!', es:'Progreso constante, valiente dragón. ¡Nos vemos en la próxima unidad!', pron:'stédi prágres, bréiv drágon. síi iú in de next iúnit!'}
  ],
  72: [
    {en:'Blaze needs to get to the warehouse early — a big shipment is arriving today.', es:'Blaze necesita llegar temprano al depósito — hoy llega un envío grande.', pron:'Bléis níids tu guét tu de uérjaus érli — a big shípment is aráiving tudéi.'},
    {en:'"It\'s next to the main road," he tells the new driver, "right across from the gas station."', es:'"Está al lado del camino principal", le dice al conductor nuevo, "justo enfrente de la estación de servicio."', pron:'its next tu de méin róud, ji tels de niú dráiver, ráit acrós fram de gas stéishion.'},
    {en:'"I will choose this carrier for the next shipment," Blaze decides, checking the rates.', es:'"Voy a elegir este transportista para el próximo envío", decide Blaze, revisando las tarifas.', pron:'ái uil chúus dis cárier for de next shípment, Bléis dicáids, chéking de réits.'},
    {en:'At customs, "I need to declare this item," he says, showing the invoice. "I have the shipping guide too."', es:'En la aduana, "necesito declarar este artículo", dice, mostrando la factura. "También tengo la guía de envío."', pron:'at cástams, ái níid tu diclér dis áitem, ji séis, shóuing de ínvois. ái jav de shíping gáid tú.'},
    {en:'"The shipment is delayed," warns his assistant. "There\'s a traffic jam on the main route."', es:'"El envío está retrasado", advierte su asistente. "Hay un embotellamiento en la ruta principal."', pron:'de shípment is diléid, uórns jis asístant. ders a tráfic yam on de méin rúut.'},
    {en:'"I want to hire a bigger fleet," Blaze says. "This package is fragile — handle it with care!"', es:'"Quiero contratar una flota más grande", dice Blaze. "¡Este paquete es frágil — manejalo con cuidado!"', pron:'ái uánt tu jáier a bígger flíit, Bléis séis. dis pákech is fráyail — jándol it uid ker!'},
    {en:"Unit six, done! Keep pushing — you're doing great, more than a third of the way there.", es:'¡Unidad seis, lista! Sigue adelante — lo estás haciendo genial, ya llevas más de un tercio del camino.', pron:"iúnit siks, dan! kíip púshing — iór dúing gréit, mor dan a zerd of de uéi der."},
    {en:'Stay consistent, brave dragon. See you in unit seven!', es:'Mantén la constancia, valiente dragón. ¡Nos vemos en la unidad siete!', pron:'stéi cansístent, bréiv drágon. síi iú in iúnit séven!'}
  ],
  84: [
    {en:'Blaze arrives at the hotel for a business trip. "I have a reservation for two nights," he tells the receptionist.', es:'Blaze llega al hotel para un viaje de negocios. "Tengo una reserva para dos noches", le dice a la recepcionista.', pron:'Bléis aráivs at de hóutel for a bísnes trip. ái jav a reservéishion for tú náits, ji tels de risépshionist.'},
    {en:'"I need more towels in my room, please," he adds, tired from the flight.', es:'"Necesito más toallas en mi habitación, por favor", agrega, cansado del vuelo.', pron:'ái níid mor táuels in mái rúum, plíis, ji ads, táierd fram de fláit.'},
    {en:'The next morning, "I have a headache," Blaze says. "It is very cold outside too."', es:'A la mañana siguiente, "tengo dolor de cabeza", dice Blaze. "También hace mucho frío afuera."', pron:'de next mórning, ái jav a jédeik, Bléis séis. it is véri cóuld áutsáid tú.'},
    {en:'Back online, "I need to download this software before the meeting," he remembers.', es:'De vuelta en línea, "necesito descargar este software antes de la reunión", recuerda.', pron:'bak ánlain, ái níid tu dáunlóud dis sáftuer bifór de míiting, ji rimémbers.'},
    {en:'"I can log in now," he says with relief, joining the video call just in time.', es:'"Ya puedo iniciar sesión", dice aliviado, uniéndose a la videollamada justo a tiempo.', pron:'ái can log in náu, ji séis uid rilíif, chóining de vídiou col yast in táim.'},
    {en:'"This post about our new toys is getting a lot of likes!" his daughter shows him, smiling.', es:'"¡Esta publicación sobre nuestros juguetes nuevos está consiguiendo muchos likes!", le muestra su hija, sonriendo.', pron:'dis póust abáut áur niú tóis is guéting a lat of láiks! jis dóter shóus jim, smáiling.'},
    {en:'Later, a technical problem appears — but "this is working now," Blaze confirms, relieved.', es:'Más tarde, aparece un problema técnico — pero "esto ya está funcionando", confirma Blaze, aliviado.', pron:'léiter, a técnical práblem apírs — bat dis is uérking náu, Bléis canférms, rilíivd.'},
    {en:"Unit seven, done — almost half done! Well done, dragon. See you in unit eight!", es:'¡Unidad siete, lista — casi a la mitad! Bien hecho, dragón. ¡Nos vemos en la unidad ocho!', pron:"iúnit séven, dan — ólmoust jaf dan! uél dan, drágon. síi iú in iúnit éit!"}
  ],
  96: [
    {en:"Blaze's business is growing, so he decides to hire someone new. \"I have experience in sales,\" says the candidate.", es:'El negocio de Blaze está creciendo, así que decide contratar a alguien nuevo. "Tengo experiencia en ventas", dice el candidato.', pron:'Bléis bísnes is góuing, sóu ji dicáids tu jáier sámuan niú. ái jav expírians in séils, séis de candídeit.'},
    {en:'"I am responsible for the sales team at my current job," he explains with confidence.', es:'"Soy responsable del equipo de ventas en mi trabajo actual", explica con confianza.', pron:'ái am rispánsibol for de séils tíim at mái cárent chab, ji explains uid cánfidens.'},
    {en:'Later, at a networking event, "I would like to connect with you," Blaze tells another business owner.', es:'Más tarde, en un evento de networking, "me gustaría conectar contigo", le dice Blaze a otro empresario.', pron:'léiter, at a nétuorking ivént, ái uud láik tu canéct uid iú, Bléis tels anáder bísnes óuner.'},
    {en:'Before his big presentation, "I am confident about this," he tells himself, taking a deep breath.', es:'Antes de su gran presentación, "estoy seguro de esto", se dice a sí mismo, respirando profundo.', pron:'bifór jis big presentéishion, ái am cánfident abáut dis, ji tels jimsélf, téiking a díip breez.'},
    {en:'Back at the office, "I need to sign this contract today," he remembers, checking his calendar.', es:'De vuelta en la oficina, "necesito firmar este contrato hoy", recuerda, revisando su calendario.', pron:'bak at de áfis, ái níid tu sáin dis cántract tudéi, ji rimémbers, chéking jis cálendar.'},
    {en:'"In my culture, we take our time to build trust," he tells his new international partner.', es:'"En mi cultura, nos tomamos nuestro tiempo para construir confianza", le dice a su nuevo socio internacional.', pron:'in mái cálchur, uí téik áur táim tu bild trast, ji tels jis niú internáshional pártner.'},
    {en:'At the bank, "I want to invest in my business," Blaze says, reviewing his savings account.', es:'En el banco, "quiero invertir en mi negocio", dice Blaze, revisando su cuenta de ahorros.', pron:'at de bank, ái uánt tu invést in mái bísnes, Bléis séis, riviúing jis séivings acáunt.'},
    {en:'During a negotiation, "I am willing to compromise," he says calmly — and reaches a fair deal.', es:'Durante una negociación, "estoy dispuesto a ceder", dice con calma — y llega a un trato justo.', pron:'diúring a nigóushieishion, ái am uíling tu cámpramais, ji séis cámli — and ríchis a fer díil.'},
    {en:"Unit eight, done — more than half done! Keep pushing, dragon. See you in unit nine!", es:'¡Unidad ocho, lista — ya más de la mitad! Sigue adelante, dragón. ¡Nos vemos en la unidad nueve!', pron:"iúnit éit, dan — mor dan jaf dan! kíip púshing, drágon. síi iú in iúnit náin!"}
  ],
  108: [
    {en:'Blaze opens his laptop. "I am writing to confirm the meeting," he types, careful with his tone.', es:'Blaze abre su laptop. "Le escribo para confirmar la reunión", escribe, cuidando su tono.', pron:'Bléis óupens jis láptap. ái am ráiting tu canférm de míiting, ji táips, kérful uid jis tóun.'},
    {en:'He checks his project board. "The project is on schedule," he notes with relief.', es:'Revisa su tablero de proyecto. "El proyecto va según lo planeado", anota con alivio.', pron:'ji cheks jis práchect bord. de práchect is on squédiul, ji nóuts uid rilíif.'},
    {en:'An inspector arrives at the warehouse. "This meets the quality standard," she confirms, nodding.', es:'Llega un inspector al depósito. "Esto cumple con el estándar de calidad", confirma, asintiendo.', pron:'an inspéctor aráivs at de uérjaus. dis míits de cuáliti stándard, shi canférms, náding.'},
    {en:'A customer calls, upset. "We will make this right," Blaze promises, staying calm.', es:'Un cliente llama, molesto. "Vamos a solucionar esto", promete Blaze, manteniendo la calma.', pron:'a cástomer cols, apsét. uí uil méik dis ráit, Bléis prámises, stéiing calm.'},
    {en:'To the press, he says: "We are committed to transparency, always."', es:'A la prensa, dice: "Estamos comprometidos con la transparencia, siempre."', pron:'tu de pres, ji séis: uí ar camítid tu transpárensi, ólueis.'},
    {en:'At the factory, "we are trying to reduce waste," he tells his team, pointing at the new bins.', es:'En la fábrica, "estamos tratando de reducir los residuos", le dice a su equipo, señalando los nuevos contenedores.', pron:'at de fáctori, uí ar tráing tu ridiús uéist, ji tels jis tíim, póinting at de niú bins.'},
    {en:'A big shipment is ready. "This shipment requires an export license," he remembers just in time.', es:'Un envío grande está listo. "Este envío requiere una licencia de exportación", recuerda justo a tiempo.', pron:'a big shípment is rédi. dis shípment riquáirs an éxport láisens, ji rimémbers yast in táim.'},
    {en:'"The production line is running smoothly," the plant manager reports, smiling.', es:'"La línea de producción está funcionando sin problemas", informa el gerente de planta, sonriendo.', pron:'de pradákshion láin is ráning smúzli, de plant mánayer ripórts, smáiling.'},
    {en:'His daughter walks in. "I would like to apply for the summer program," she says, proud.', es:'Entra su hija. "Me gustaría postularme para el programa de verano", dice, orgullosa.', pron:'jis dóter uóks in. ái uud láik tu apláy for de sámer prógram, shi séis, práud.'},
    {en:'One last call: "I can close this deal today," Blaze says with a confident smile.', es:'Una última llamada: "puedo cerrar este trato hoy", dice Blaze con una sonrisa confiada.', pron:'uán last col: ái can clóus dis díil tudéi, Bléis séis uid a cánfident smáil.'},
    {en:"Unit nine, done — two thirds of the journey behind you! Staying strong, dragon.", es:'¡Unidad nueve, lista — dos tercios del camino ya recorridos! Manteniéndote fuerte, dragón.', pron:"iúnit náin, dan — tú zerds of de yérni bijáind iú! stéiing strong, drágon."},
    {en:"Proud of you — halfway to mastery. See you in unit ten!", es:'Orgulloso de ti — a mitad de camino hacia el dominio. ¡Nos vemos en la unidad diez!', pron:"práud of iú — jafuéi tu mástery. síi iú in iúnit ten!"}
  ],
  120: [
    {en:'Blaze visits an agent. "I am looking to rent office space," he explains, checking the listings.', es:'Blaze visita a un agente. "Estoy buscando arrendar un espacio de oficina", explica, revisando los listados.', pron:'Bléis vísits an éiyent. ái am lúking tu rent áfis spéis, ji explains, chéking de lístings.'},
    {en:'"This is covered under my policy," the insurance agent confirms, reviewing the paperwork.', es:'"Esto está cubierto por mi póliza", confirma el agente de seguros, revisando los papeles.', pron:'dis is cávard ánder mái pálisi, de inshúrans éiyent canférms, riviúing de péiperuork.'},
    {en:'"I have an appointment with a specialist," he tells the receptionist, checking his watch.', es:'"Tengo una cita con un especialista", le dice a la recepcionista, mirando su reloj.', pron:'ái jav an apóintment uid a spéshalist, ji tels de risépshionist, chéking jis uách.'},
    {en:'His son shares good news. "I am enrolled in an online course!" he says, excited.', es:'Su hijo comparte buenas noticias. "¡Estoy inscrito en un curso en línea!", dice, emocionado.', pron:'jis san shérs gud niús. ái am inróuld in an ánlain cors! ji séis, exsáited.'},
    {en:'At the government office, "I need to renew my license," Blaze says, taking a number.', es:'En la oficina del gobierno, "necesito renovar mi licencia", dice Blaze, tomando un número.', pron:'at de gávernment áfis, ái níid tu riniú mái láisens, Bléis séis, téiking a námber.'},
    {en:'"We are moving to a bigger office next month," he announces to the whole team, smiling.', es:'"Nos estamos mudando a una oficina más grande el próximo mes", anuncia a todo el equipo, sonriendo.', pron:'uí ar múving tu a bíguer áfis next manz, ji anáunses tu de jóul tíim, smáiling.'},
    {en:'He shows off a new tool. "This is powered by artificial intelligence!" he says proudly.', es:'Muestra una nueva herramienta. "¡Esto funciona con inteligencia artificial!", dice orgulloso.', pron:'ji shóus of a niú túul. dis is páuerd bái ártifíshal intéliyens! ji séis práudli.'},
    {en:'At the team meeting, "I trust my team to make good decisions," Blaze says, looking around the room.', es:'En la reunión de equipo, "confío en que mi equipo tome buenas decisiones", dice Blaze, mirando la sala.', pron:'at de tíim míiting, ái trast mái tíim tu méik gud disíshions, Bléis séis, lúking aráund de rúum.'},
    {en:"Unit ten, done — two thirds done, one third remaining!", es:'¡Unidad diez, lista — dos tercios hechos, un tercio restante!', pron:"iúnit ten, dan — tú zerds dan, uán zerd rimééining!"},
    {en:"Keep going, dragon — a milestone has been reached. See you in unit eleven!", es:'Sigue adelante, dragón — se alcanzó un hito. ¡Nos vemos en la unidad once!', pron:"kíip góing, drágon — a máilstóun jas bin ríichd. síi iú in iúnit iléven!"}
  ]
};
const weeklyStories = {
  6: [
    {en:'Good morning! My name is Captain Thunder, and I work at the floating dragon company.', es:'¡Buenos días! Me llamo Capitán Trueno, y trabajo en la empresa flotante de dragones.', pron:'gud mórnin! mái néim is cáptin zánder, and ái uork at de flóuting drágon cámpani.'},
    {en:'Welcome, tiny human! Come in and have a seat on this giant mushroom.', es:'¡Bienvenido, humanito! Pasa y toma asiento en este hongo gigante.', pron:'uélcam, táini jiúman! cam in and jav a síit on dis yáiant máshrum.'},
    {en:'We are from the Kingdom of Clouds, and we sell magic potions to a thousand customers.', es:'Somos del Reino de las Nubes, y vendemos pociones mágicas a mil clientes.', pron:'uí ar fram de kíngdom of cláuds, and uí sel máyic póushons tu a záusand cástomers.'},
    {en:'My flying wife is the sales manager, and my fire-breathing son works in logistics.', es:'Mi esposa voladora es la gerente de ventas, y mi hijo que respira fuego trabaja en logística.', pron:'mái fláing uáif is de séils mánayer, and mái fáiar brízing san uorks in loyístics.'},
    {en:'How many dragon eggs do you need for this order? Ten boxes, or a whole dozen?', es:'¿Cuántos huevos de dragón necesitas para este pedido? ¿Diez cajas, o toda una docena?', pron:'jáu méni drágon egs du iú níid for dis órder? ten báxes, or a jóul dázen?'},
    {en:"Are you available on Monday, in the year 3000? Let's schedule an appointment!", es:'¿Estás disponible el lunes, en el año 3000? ¡Agendemos una cita!', pron:"ar iú avéilabol on mándei, in de íar zríi záusand? lets squéyul an apóintment!"},
    {en:'Thank you, and see you soon in the clouds. Goodbye!', es:'Gracias, y nos vemos pronto en las nubes. ¡Adiós!', pron:'zenk iú, and síi iú súun in de cláuds. gudbái!'}
  ],
  18: [
    {en:'Welcome to my floating house — the kitchen is inside a volcano!', es:'¡Bienvenido a mi casa flotante — la cocina está dentro de un volcán!', pron:'uélcam tu mái flóuting jáus — de quítchen is insáid a valkéinou!'},
    {en:'I wake up when the sun explodes, and I go to work by teleporting.', es:'Me despierto cuando el sol explota, y voy al trabajo teletransportándome.', pron:'ái uéik ap uén de san explóuds, and ái góu tu uork bái télipórting.'},
    {en:'My robot can walk across oceans, write with lasers, and fix anything instantly.', es:'Mi robot puede caminar por océanos, escribir con láseres, y arreglar cualquier cosa al instante.', pron:'mái róubot can uók acrós óushons, ráit uid léisers, and fix énizin ínstantli.'},
    {en:'In my magic toolbox, a hammer can crack open the moon!', es:'En mi caja de herramientas mágica, ¡un martillo puede partir la luna!', pron:'in mái máyic túulbax, a jámer can crak óupen de múun!'},
    {en:'My pet dragon and I share the same values: honesty, respect, and teamwork.', es:'Mi dragón mascota y yo compartimos los mismos valores: honestidad, respeto y trabajo en equipo.', pron:'mái pet drágon and ái shér de séim váliuus: ánesti, rispéct, and tíimuork.'},
    {en:'Our loyal customer, the thousand-year-old turtle, always returns and recommends us to the whole ocean!', es:'Nuestra clienta fiel, la tortuga de mil años, ¡siempre vuelve y nos recomienda a todo el océano!', pron:'áur lóial cástomer, de záusand íar óuld tértol, ólueis ritérns and recoménds as tu de jóul óushon!'}
  ],
  24: [
    {en:'By the way, this castle feast has a mountain of rice and an ocean of meat!', es:'A propósito, ¡este banquete del castillo tiene una montaña de arroz y un océano de carne!', pron:'bái de uéi, dis cásol fíist jas a máuntain of ráis and an óushon of míit!'},
    {en:'The cleaning robot can wash an entire ocean and count a million stars before breakfast.', es:'El robot de limpieza puede lavar un océano entero y contar un millón de estrellas antes del desayuno.', pron:'de clíining róubot can uásh an entáier óushon and cáunt a mílion stars bifór brékfast.'},
    {en:"Even dragons need vacation — I'm traveling to a floating island this weekend!", es:'¡Hasta los dragones necesitan vacaciones — viajo a una isla flotante este fin de semana!', pron:"íven drágons níid veiquéishon — áim tráveling tu a flóuting áiland dis uíikend!"},
    {en:"This dragon egg is cheaper, but let's compare every option before we negotiate the deal.", es:'Este huevo de dragón es más barato, pero comparemos cada opción antes de negociar el trato.', pron:"dis drágon eg is chíiper, bat lets campér évri ápshon bifór uí nigóushieit de díil."},
    {en:"Well done, brave hero! You remember everything from Unit Two. Congratulations, you're halfway there!", es:'¡Bien hecho, valiente héroe! Te acuerdas de todo de la Unidad Dos. ¡Felicitaciones, vas a mitad de camino!', pron:"uél dan, bréiv jírou! iú rimémber évrizin fram iúnit tú. congrachuléishons, iór jáfuei dér!"}
  ],
  30: [
    {en:'Our budget was twenty gold coins, but the flying castle final price was approximately one thousand!', es:'Nuestro presupuesto era veinte monedas de oro, ¡pero el precio final del castillo volador fue aproximadamente mil!', pron:'áur báchet uas tuénti góuld cóins, bat de fláing cásols fáinal práis uas apráximetli uán záusand!'},
    {en:'The grand total, with tax and shipping cost, was bigger than a hundred dragons!', es:'¡El total general, con impuesto y costo de envío, fue más grande que cien dragones!', pron:'de grand tóutal, uid tax and shíping cost, uas bíguer dan a jándred drágons!'},
    {en:'What time is it? Half past the dragon hour — the delivery arrives within 24 hours, even at midnight!', es:'¿Qué hora es? Media hora después de la hora del dragón — ¡la entrega llega dentro de 24 horas, hasta a medianoche!', pron:'uát táim is it? jaf past de drágon áuar — de delíveri aráivs uidín tuenti fóar áuars, íven at mídnait!'},
    {en:'In the morning, it was early; by night, it was delayed by a black hole, but still, the estimated arrival came true.', es:'De mañana, era temprano; para la noche, se retrasó por un agujero negro, pero aun así, la llegada estimada se cumplió.', pron:'in de mórning, it uas érli; bái náit, it uas diléid bái a blak jóul, bat stil, de éstimeited aráival kéim trú.'},
    {en:'In January, we agreed on payment terms — an upfront payment, then installments, until the due date, paid in full!', es:'En enero, acordamos las condiciones de pago — un pago por adelantado, luego cuotas, hasta la fecha de vencimiento, ¡pagado en su totalidad!', pron:'in yánueri, uí agríid on péiment terms — an apfrónt péiment, den instólments, antíl de diú déit, péid in ful!'}
  ],
  36: [
    {en:'That works! I agree with the dragon, but that does not work for the wizard.', es:'¡Eso funciona! Estoy de acuerdo con el dragón, pero eso no funciona para el mago.', pron:'dat uorks! ái agríi uid de drágon, bat dat das nat uork for de uísard.'},
    {en:'The first place went to a flying whale, and our best seller has a waiting list of thirty thousand dragons!', es:'El primer lugar fue para una ballena voladora, ¡y nuestro más vendido tiene una lista de espera de treinta mil dragones!', pron:'de ferst pléis uént tu a fláing uéil, and áur best séler jas a uéiting list of zérti záusand drágons!'},
    {en:'Do you accept bank transfer, or only ancient magic checks? Here is your change — a star coin!', es:'¿Aceptan transferencia bancaria, o solo cheques mágicos antiguos? Acá tu vuelto — ¡una moneda de estrella!', pron:'du iú axépt bank tránsfer, or óunli éinshent máyic cheks? jíar is iór chéinch — a star cóin!'},
    {en:'I want to buy in bulk, wholesale, for the lowest price — this is my final offer, deal closed!', es:'Quiero comprar al por mayor, para el precio más bajo — ¡esta es mi oferta final, trato cerrado!', pron:'ái uánt tu bái in balk, jóulseil, for de lóuest práis — dis is mái fáinal áfer, díil clóusd!'},
    {en:'This dragon egg weighs a hundred kilograms, and the castle height reaches the clouds!', es:'Este huevo de dragón pesa cien kilogramos, ¡y la altura del castillo llega hasta las nubes!', pron:'dis drágon eg uéis a jándred kílograms, and de cásol jáit ríiches de cláuds!'},
    {en:'Well earned, champion — strong progress! See you in unit four!', es:'¡Bien merecido, campeón — buen progreso! ¡Nos vemos en la unidad cuatro!', pron:'uél érnd, chámpion — strong prágres! síi iú in iúnit fóar!'}
  ],
  42: [
    {en:'I would like to order the roasted volcano appetizer — the meeting starts in a floating conference room!', es:'Quisiera pedir la entrada de volcán asado — ¡la reunión empieza en una sala de reuniones flotante!', pron:'ái uud láik tu órder de róusted valkéinou ápetaiser — de míiting starts in a flóuting cánferens rúum!'},
    {en:'I love dragon eggs, but I am allergic to flying broccoli — please confirm attendance!', es:'Me encantan los huevos de dragón, pero soy alérgico al brócoli volador — ¡confirma tu asistencia!', pron:'ái lav drágon egs, bat ái am alérchic tu fláing brácoli — plíis confírm aténdans!'},
    {en:"Let's split the bill, take meeting minutes, and follow up before the castle disappears.", es:'Dividamos la cuenta, tomemos la minuta, y hagamos seguimiento antes de que el castillo desaparezca.', pron:"lets split de bil, téik míiting mínits, and fálou ap bifór de cásol disapírs."},
    {en:"The dragon's secret recipe needs boiling lava and a magic oven — prepare the presentation slides too!", es:'La receta secreta del dragón necesita lava hirviendo y un horno mágico — ¡preparemos también las diapositivas de la presentación!', pron:"de drágons sícret résipi níids bóiling láva and a máyic áven — pripér de presentéishon sláids tú!"},
    {en:"Camera on, mute your roar, and let's screen share the treasure map on our video call!", es:'Cámara encendida, silencia tu rugido, ¡y compartamos pantalla con el mapa del tesoro en la videollamada!', pron:"cámera on, miút iór rór, and lets scríin shér de tréshur map on áur vídio col!"},
    {en:'For breakfast, a thousand eggs — and in our follow-up meeting, the milestone is finally on track!', es:'De desayuno, mil huevos — ¡y en nuestra reunión de seguimiento, el hito por fin va bien encaminado!', pron:'for brékfast, a záusand egs — and in áur fálou ap míiting, de máilstoun is fáinali on trak!'}
  ],
  48: [
    {en:"Can you repeat that? Got it, no worries — either way, let's continue!", es:'¿Puedes repetir eso? Entendido, no hay problema — de cualquier forma, ¡sigamos!', pron:"can iú ripít dat? gát it, nóu uéris — íder uéi, lets cantíniu!"},
    {en:"The wizard's potions are gluten-free, and the responsible person took notes for the minutes.", es:'Las pociones del mago son sin gluten, y la persona responsable tomó notas para la minuta.', pron:"de uísards póushons ar glúten fríi, and de rispánsibol pérson tuk nóuts for de mínits."},
    {en:'The giant baked a cake as tall as a castle — in conclusion, here is our action plan!', es:'El gigante horneó una torta tan alta como un castillo — ¡en conclusión, acá está nuestro plan de acción!', pron:'de yáiant béikt a quéik as tol as a cásol — in canclúshon, jíar is áur ákshon plan!'},
    {en:'At the giant supermarket, we had a supplier meeting with fresh dragon fruit and a magic catalog.', es:'En el supermercado gigante, tuvimos una reunión con el proveedor con fruta de dragón fresca y un catálogo mágico.', pron:'at de yáiant súpermarket, uí jad a sapláier míiting uid fresh drágon frúut and a máyic cátalog.'},
    {en:'A little water, a lot of gold — we got budget approval for the biggest investment yet!', es:'Un poco de agua, mucho oro — ¡conseguimos la aprobación de presupuesto para la inversión más grande hasta ahora!', pron:'a lítol uáter, a lat of góuld — uí gat báchet apruvol for de bíguest invéstment iét!'},
    {en:'One third of the journey is done — keep learning, hero, see you in unit five!', es:'Un tercio del viaje está hecho — ¡sigue aprendiendo, héroe, nos vemos en la unidad cinco!', pron:'uán zerd of de yérni is dan — kíip lérning, jírou, síi iú in iúnit fáiv!'}
  ],
  54: [
    {en:'Let me try on this magic armor — does it fit, or is it too big?', es:'Dejame probarme esta armadura mágica — ¿me queda bien, o es muy grande?', pron:'let mi trái on dis máyic ármor — das it fit, or is it tu big?'},
    {en:"Can you lower the price, dragon? Let's bargain and negotiate terms!", es:'¿Puedes bajar el precio, dragón? ¡Regateemos y negociemos los términos!', pron:'can iú lóuar de práis, drágon? lets bárguen and nigóushieit terms!'},
    {en:'I want to return this broken dragon egg — please issue an invoice today.', es:'Quiero devolver este huevo de dragón roto — por favor emitan una factura hoy.', pron:'ái uánt tu ritérn dis bróuken drágon eg — plíis íshu an ínvois tudéi.'},
    {en:'Is this covered by warranty, or is there a late fee?', es:'¿Esto está cubierto por la garantía, o hay un recargo por mora?', pron:'is dis cávard bái uáranti, or is dér a léit fíi?'},
    {en:'Swipe the card, or pay cash only — the transaction ID is written in the stars.', es:'Desliza la tarjeta, o paga solo en efectivo — el número de transacción está escrito en las estrellas.', pron:'suáip de card, or péi cash óunli — de transácshon ái díi is ríten in de stars.'},
    {en:'Add to cart, and enjoy this completely secure payment!', es:'Agrega al carrito, ¡y disfruta este pago completamente seguro!', pron:'ad tu cart, and enyói dis camplítli sekiúr péiment!'}
  ],
  60: [
    {en:'As far as I know, to be honest, this shirt is too small for a dragon!', es:'Que yo sepa, para ser honesto, ¡esta camisa es muy chica para un dragón!', pron:'as far as ái nóu, tu bi ánest, dis shert is tu smol for a drágon!'},
    {en:'We need to approve a quote for new boots, and sign off on the paperwork.', es:'Necesitamos aprobar una cotización para botas nuevas, y dar el visto bueno al papeleo.', pron:'uí níid tu apruv a cuóut for niú búuts, and sáin of on de péiperuork.'},
    {en:"Let's do a price comparison — which supplier has the best value?", es:'Hagamos una comparación de precios — ¿qué proveedor tiene la mejor relación calidad-precio?', pron:'lets du a práis campárison — uích sapláier jas de best váliu?'},
    {en:'I want to complain — this doesn\'t work, please resolve it!', es:'Quiero quejarme — esto no funciona, ¡por favor resuélvanlo!', pron:'ái uánt tu compléin — dis dásent uork, plíis risálv it!'},
    {en:"Steady progress, brave hero — don't give up, you're almost at unit six!", es:'Progreso constante, valiente héroe — ¡no te rindas, ya casi estás en la unidad seis!', pron:'stédi prágres, bréiv jírou — dont guiv ap, iór ólmoust at iúnit six!'}
  ],
  66: [
    {en:'Excuse me, how do I get to the post office? Turn left at the volcano!', es:'Disculpe, ¿cómo llego al correo? ¡Dobla a la izquierda en el volcán!', pron:'exquiúsmi, jáu du ái guét tu de póust áfis? tern left at de valkéinou!'},
    {en:"Let's track an order — it's in transit, and out for delivery!", es:'Rastreemos un pedido — ¡está en tránsito, y en reparto!', pron:'lets trak an órder — its in tránsit, and áut for delíveri!'},
    {en:'Should we take the train, or choose a flying carrier instead?', es:'¿Tomamos el tren, o elegimos un transportista volador en su lugar?', pron:'shud uí téik de tréin, or chúus a fláing cárier instéd?'},
    {en:'At the airport, customs asked about the country of origin.', es:'En el aeropuerto, la aduana preguntó sobre el país de origen.', pron:'at de érport, cástoms askt abáut de cántri of óriyin.'},
    {en:'The shipping guide and the customs broker are both ready at the station.', es:'La guía de envío y el agente aduanal están listos en la estación.', pron:'de shíping gáid and de cástoms bróuker ar bóuz rédi at de stéishon.'},
    {en:'Even the most remote landmark gets same-day delivery in our coverage area!', es:'¡Hasta el punto de referencia más alejado tiene entrega el mismo día en nuestra área de cobertura!', pron:'íven de móust rimóut lándmark guéts séim déi delíveri in áur cáverich éria!'}
  ],
  72: [
    {en:"Just follow the signs — you can't miss it, even during rush hour!", es:'Solo sigue las señales — no te lo vas a perder, ¡ni siquiera en hora pico!', pron:'yast fálou de sáins — iú cant mis it, íven dúring rash áuar!'},
    {en:'The supply chain is back on track — no more backorders!', es:'La cadena de suministro está de nuevo en marcha — ¡no más pedidos pendientes!', pron:'de sapláichéin is bak on trak — nóu mor bákorders!'},
    {en:'I rented a car with a full tank, and hired the best carrier in the kingdom.', es:'Alquilé un auto con el tanque lleno, y contraté al mejor transportista del reino.', pron:'ái réntid a car uid a ful tank, and jáiard de best cárier in de kíngdom.'},
    {en:'Fragile! Handle with care, and send it straight to the loading dock.', es:'¡Frágil! Manejar con cuidado, y enviarlo directo al muelle de carga.', pron:'fráyail! jándol uid quér, and send it stréit tu de lóuding dak.'},
    {en:'Fly north or south, follow the optimal route, and dispatch to the whole kingdom!', es:'Vuela al norte o al sur, sigue la ruta óptima, ¡y despacha a todo el reino!', pron:'flái norz or sáuz, fálou de áptimal rúut, and díspach tu de jóul kíngdom!'},
    {en:'Great job so far — more than a third done. See you in the next unit!', es:'Muy buen trabajo hasta ahora — más de un tercio hecho. ¡Nos vemos en la próxima unidad!', pron:'gréit yab sóu far — mor dan a zerd dan. síi iú in de next iúnit!'}
  ]
};
const storyIntro = [{t:'Ahora contemos todo lo de hoy como una pequeña historia, no palabras sueltas. Escucha cada frase, repítela, y escríbela — así ves el idioma funcionando de verdad, en contexto.',lang:'es'}];
const weeklyStoryIntro = [{t:'Antes de terminar, una historia más larga con todo lo que repasaste esta semana de estudio.',lang:'es'}];
const jingleIntro = [{t:'Para cerrar, un jinglecito pegajoso con lo de hoy — como una publicidad que se te queda en la cabeza. Escúchalo, repítelo, y si quieres, grábate "cantándolo" a tu manera.',lang:'es'}];
const milestoneIntro = [{t:'¡Llegaste a un hito! Antes de cerrar este bloque de 24 días, un repaso más exigente — combinando lo que aprendiste en todo este mes de estudio, no solo hoy.',lang:'es'}];
// Toma una palabra representativa de cada uno de los 24 días del bloque que termina en dayNumber, para el examen de hito.
function sampleMilestoneWords(dayNumber){
  const startDay = dayNumber - 23;
  const days = curriculum.filter(d=>d.day>=startDay && d.day<=dayNumber);
  const sample = [];
  days.forEach(d=>{
    if(d.words && d.words.length){
      sample.push(d.words[Math.floor(d.words.length/2)]);
    }
  });
  return sample;
}
const crossDayIntro = [{t:'Antes de lo nuevo de hoy, repasemos rápido algo que te costó en un día anterior.',lang:'es'}];

// Mostrar el botón "Continuar" y asegurarnos de que quede a la vista — cuando se
// esconde el cuadro de escribir/grabar justo antes, la pantalla puede correrse y
// el primer toque en el botón puede fallar si el usuario no lo ve bien.
function mostrarNextControls(){
  nextControls.style.display='flex';
  if(typeof nextControls.scrollIntoView === 'function'){
    setTimeout(()=>{ nextControls.scrollIntoView({behavior:'smooth', block:'nearest'}); }, 30);
  }
}

function buildScript(bank, crossDayWords, dayNumber, theme, dayStory, dayJingle, dayStructures, dayAuxiliary){
  const scr = [{ kind:'free', segs:[{t:'¡Hola! Bienvenido a tu sesión de hoy. ',lang:'es'},{t:'Antes de empezar, contame: ¿cómo estás?',lang:'es'}], emoji:'🧑‍🤝‍🧑' }];
  if(unitDialogueReinforcement[dayNumber]){
    scr.push({ kind:'dialogueReinforcement', lines: unitDialogueReinforcement[dayNumber] });
    scr.push({ kind:'fillBlankDialogue', lines: unitDialogueReinforcement[dayNumber], mode:'maestro' });
    scr.push({ kind:'fillBlankDialogue', lines: unitDialogueReinforcement[dayNumber], mode:'alumno' });
  }
  if(crossDayWords && crossDayWords.length){
    scr.push({ kind:'sequence', segs:crossDayIntro, emoji:'🔁', words:crossDayWords, crossDay:true });
  }
  if(dayNumber >= 3){
    const pair = contrastBank[(dayNumber-3) % contrastBank.length];
    scr.push({ kind:'sequence', segs:contrastIntro, emoji:'🔬', words:[pair.a, pair.b], contrastPair:true });
  }
  if(dayNumber >= 5){
    const rp = rephraseBank[(dayNumber-5) % rephraseBank.length];
    scr.push({ kind:'sequence', segs:rephraseIntro, emoji:'✨', words:[rp.simple, rp.elegant], isRephrase:true });
  }
  let recent = [];
  bank.forEach((w,i)=>{
    const tmpl = introTemplates[i % introTemplates.length];
    scr.push({ kind:'single', segs:tmpl(w), emoji:w.emoji, newWord:w });
    recent.push(w);
    if(recent.length >= 6){
      scr.push({ kind:'sequence', segs:comboIntro, emoji:'🎯', words:recent.slice() });
      recent = [];
    }
    if((i+1) % 8 === 0 && i+1 < bank.length){
      const w1 = bank[Math.max(0,i-6)], w2 = bank[Math.max(0,i-2)];
      scr.push({ kind:'sequence', segs:reviewIntro, emoji:'🔁', words:[w1,w2] });
    }
  });
  if(dayStructures && dayStructures.length){
    dayStructures.forEach(s=>{
      const intro = [{t:'Hoy vamos a ver esta estructura, muy usada en el idioma y en la vida diaria: "'+s.pattern+'". Vas a poder combinarla con muchas palabras distintas, como en estos ejemplos:',lang:'es'}];
      scr.push({ kind:'sequence', segs:intro, emoji:'🧩', words:s.examples, isStructureIntro:true });
    });
  }
  if(dayAuxiliary && dayAuxiliary.length){
    dayAuxiliary.forEach(screen=>{
      const intro = [{t:screen.intro,lang:'es'}];
      scr.push({ kind:'sequence', segs:intro, emoji:'🧠', words:screen.examples, isAuxiliaryTeaching:true, screenTitle:screen.title });
    });
  }
  if(dayStory && dayStory.length){
    scr.push({ kind:'sequence', segs:storyIntro, emoji:'📖', words:dayStory, isStory:true, isDailyStory:true });
    const dictLine = dayStory[dayStory.length-1];
    scr.push({ kind:'dictation', dictEn:dictLine.en, dictEs:dictLine.es });
  }
  if(dayJingle && dayJingle.length){
    scr.push({ kind:'sequence', segs:jingleIntro, emoji:'🎵', words:dayJingle, isStory:true, isJingle:true });
  }
  if(weeklyStories[dayNumber]){
    scr.push({ kind:'sequence', segs:weeklyStoryIntro, emoji:'📚', words:weeklyStories[dayNumber], isStory:true, isWeeklyStory:true });
  }
  if(unitReviewStories[dayNumber]){
    scr.push({ kind:'readAlong', lines:unitReviewStories[dayNumber] });
  }
  scr.push({ kind:'task', theme:theme, exampleLines: (dayStory && dayStory.length) ? dayStory.slice(0, Math.min(2, dayStory.length)) : [], dayStructures: dayStructures||[] });
  if(dayNumber % 24 === 0){
    const milestoneWords = sampleMilestoneWords(dayNumber);
    if(milestoneWords.length){
      scr.push({ kind:'sequence', segs:milestoneIntro, emoji:'🏆', words:milestoneWords, isMilestone:true });
      scr.push({ kind:'task', theme:'hito', isMilestoneTask:true });
    }
  }
  if(typeof practicasProgreso !== 'undefined' && practicasProgreso[dayNumber]){
    scr.push({ kind:'practica', day:dayNumber, data:practicasProgreso[dayNumber] });
  }
  if(dailyMiniDialogue[dayNumber]){
    scr.push({ kind:'dialogueReinforcement', lines: dailyMiniDialogue[dayNumber], isDailyMini:true });
  }
  scr.push({ kind:'end' });
  return scr;
}

function startDay(dayNum){
  if(!isAdmin() && typeof diaEstaDesbloqueado==='function' && !diaEstaDesbloqueado(dayNum, typeof currentProfile!=='undefined'?currentProfile:null)){
    if(typeof mostrarPantallaPago==='function') mostrarPantallaPago(typeof currentProfile!=='undefined'?currentProfile:null);
    return;
  }
  if(dayNum===1 && !localStorage.getItem('foneticaBasicoVisto') && typeof mostrarFoneticaBasico==='function'){
    mostrarFoneticaBasico(); return;
  }
  currentDay = curriculum.find(d=>d.day===dayNum);
  if(!currentDay) return;
  wordBank = currentDay.words;
  const crossWords = getCrossDayReviewWords(dayNum, 6);
  script = buildScript(wordBank, crossWords, dayNum, currentDay.theme, currentDay.story, currentDay.jingle, currentDay.structures, currentDay.auxiliaryTeaching);
  idx=0; learnedWords=[]; weakWords=[]; wordQueue=[]; wqIndex=0; evalMode=false; reviewing=false; resumeSnapshot=null;
  updateLiveScore();
  const prog = loadProgress();
  alreadyCompletedView = !!(prog[dayNum] && prog[dayNum].completed);
  document.getElementById('dayBadge').textContent = 'Día '+dayNum+' · '+currentDay.theme;
  document.getElementById('wordList').innerHTML = '<div class="empty">Todavía no aparece ninguna.</div>';
  document.getElementById('transcript').innerHTML='';
  document.getElementById('doneScreen').classList.remove('show');
  document.getElementById('home').style.display='none';
  document.getElementById('session').style.display='block';
  if(micGranted){ enterDayContent(); return; }
  if(localStorage.getItem('mic_ever_granted')==='1' && navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({audio:true}).then(stream=>{
      stream.getTracks().forEach(t=>t.stop());
      micGranted=true; setMicStatus('on','Micrófono: activo');
      enterDayContent();
    }).catch(()=>{ document.getElementById('gate').classList.add('show'); });
    return;
  }
  document.getElementById('gate').classList.add('show');
}
function midKey(dayNum){ return 'curso_inprogress_day'+dayNum; }
function saveMidProgress(){
  if(!currentDay) return;
  const data = { idx, learnedWords, weakWords, wordQueue, wqIndex, evalMode, savedAt:new Date().toISOString() };
  try{ localStorage.setItem(midKey(currentDay.day), JSON.stringify(data)); return true; }catch(e){ return false; }
}
function loadMidProgress(dayNum){
  try{ const raw = localStorage.getItem(midKey(dayNum)); return raw ? JSON.parse(raw) : null; }catch(e){ return null; }
}
function clearMidProgress(dayNum){
  try{ localStorage.removeItem(midKey(dayNum)); }catch(e){}
}
function formatSavedAt(iso){
  try{
    const d = new Date(iso);
    return d.toLocaleDateString('es-CO',{day:'numeric',month:'short'})+' a las '+d.toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'});
  }catch(e){ return ''; }
}
function enterDayContent(){
  const saved = loadMidProgress(currentDay.day);
  const resumeBanner = document.getElementById('resumeBanner');
  if(saved && saved.idx > 0 && saved.idx < script.length){
    idx = saved.idx; learnedWords = saved.learnedWords||[]; weakWords = saved.weakWords||[];
    wordQueue = saved.wordQueue||[]; wqIndex = saved.wqIndex||0; evalMode = !!saved.evalMode;
    updateLiveScore();
    document.getElementById('wordList').innerHTML='';
    learnedWords.forEach(w=>{ const perfect = w.pronCredit===1 && w.writeCredit===1; addWordCard(w, !perfect); });
    document.getElementById('resumeBannerText').textContent = '📍 Retomaste donde quedaste — guardado el '+formatSavedAt(saved.savedAt)+'.';
    resumeBanner.style.display='flex';
  } else {
    resumeBanner.style.display='none';
  }
  loadTurn();
}

// ================= Permiso de micrófono =================
let micGranted=false, alreadyCompletedView=false;
const gate=document.getElementById('gate'), gateBtn=document.getElementById('gateBtn'), gateStatus=document.getElementById('gateStatus');
gateBtn.addEventListener('click', async ()=>{
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
    gateStatus.textContent='Tu navegador no soporta micrófono aquí. Puedes escribir tus respuestas.';
    micGranted=false; setTimeout(()=>{gate.classList.remove('show'); enterDayContent();},1400); return;
  }
  gateStatus.textContent='Pidiendo permiso...';
  try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:true});
    stream.getTracks().forEach(t=>t.stop());
    micGranted=true; gateStatus.textContent='✓ Micrófono activado.';
    localStorage.setItem('mic_ever_granted','1');
    setMicStatus('on','Micrófono: activo'); setTimeout(()=>{gate.classList.remove('show'); enterDayContent();},500);
  }catch(err){
    micGranted=false; gateStatus.textContent='No se concedió el permiso. Puedes escribir tus respuestas.';
    setMicStatus('off','Micrófono: sin permiso (usa texto)'); setTimeout(()=>{gate.classList.remove('show'); enterDayContent();},1800);
  }
});
function setMicStatus(cls,text){const el=document.getElementById('micStatus'),t=document.getElementById('micStatusText'); el.className='mic-status '+cls; t.textContent=text;}

// ================= Referencias DOM =================
const lineEl=document.getElementById('line'), illusEl=document.getElementById('illus'), hintEl=document.getElementById('hint'), replayWordBtn=document.getElementById('replayWordBtn'), slowWordBtn=document.getElementById('slowWordBtn'), peekBtn=document.getElementById('peekBtn'), peekBox=document.getElementById('peekBox'), finishTalkingBtn=document.getElementById('finishTalkingBtn'), recordBtn=document.getElementById('recordBtn'), recordPlayback=document.getElementById('recordPlayback'), reRecordBtn=document.getElementById('reRecordBtn');
const recordPanelTrueHomeParent = recordBtn.parentNode, recordPanelTrueHomeNext = recordBtn.nextSibling;
function restoreRecordPanelIfStray(){
  if(recordPanelTrueHomeParent && recordBtn.parentNode !== recordPanelTrueHomeParent){
    recordPanelTrueHomeParent.insertBefore(recordBtn, recordPanelTrueHomeNext);
    recordPanelTrueHomeParent.insertBefore(recordPlayback, recordPanelTrueHomeNext);
    recordPanelTrueHomeParent.insertBefore(reRecordBtn, recordPanelTrueHomeNext);
  }
}
const playBtn=document.getElementById('playBtn'), replayBtn=document.getElementById('replayBtn');
const appControls=document.getElementById('appControls'), userControls=document.getElementById('userControls');
const micBtn=document.getElementById('micBtn'), skipBtn=document.getElementById('skipBtn');
const typeRow=document.getElementById('typeRow'), typeInput=document.getElementById('typeInput'), sendBtn=document.getElementById('sendBtn');
const feedback=document.getElementById('feedback'), nextControls=document.getElementById('nextControls'), nextBtn=document.getElementById('nextBtn');
const wordListEl=document.getElementById('wordList'), transcriptEl=document.getElementById('transcript'), progressEl=document.getElementById('progress');
const liveScoreBadge=document.getElementById('liveScoreBadge');
function computeScorePct(){
  const total = learnedWords.length;
  let pronPoints=0, writePoints=0;
  learnedWords.forEach(w=>{ pronPoints += (w.pronCredit||0); writePoints += (w.writeCredit||0); });
  const points = pronPoints + writePoints;
  const pct = total ? Math.round((points/(total*2))*100) : 0;
  const pronPct = total ? Math.round((pronPoints/total)*100) : 0;
  const writePct = total ? Math.round((writePoints/total)*100) : 0;
  return { pct, points, totalPoints: total*2, total, pronPct, writePct };
}
function updateLiveScore(){
  const pct = computeScorePct().pct;
  const total = learnedWords.length;
  liveScoreBadge.textContent = '✓ '+pct+'%';
  if(total===0){ liveScoreBadge.style.borderColor='var(--muted)'; liveScoreBadge.style.color='var(--muted)'; }
  else if(pct>=92){ liveScoreBadge.style.borderColor='var(--ok)'; liveScoreBadge.style.color='var(--ok)'; }
  else { liveScoreBadge.style.borderColor='var(--warn)'; liveScoreBadge.style.color='var(--warn)'; }
}
const doneScreen=document.getElementById('doneScreen'), doneCount=document.getElementById('doneCount'), scoreText=document.getElementById('scoreText');
const weakList=document.getElementById('weakList'), weakItems=document.getElementById('weakItems');
const retryScreen=document.getElementById('retryScreen'), retryScoreText=document.getElementById('retryScoreText'), retryWeakItems=document.getElementById('retryWeakItems'), retryBtn=document.getElementById('retryBtn');
const modeChip=document.getElementById('modeChip'), speakerLabel=document.getElementById('speakerLabel'), crossTag=document.getElementById('crossTag');
const reviewBanner=document.getElementById('reviewBanner'), backToLessonBtn=document.getElementById('backToLessonBtn');

let idx=0, learnedWords=[], weakWords=[], wordQueue=[], wqIndex=0, evalMode=false, reviewing=false, resumeSnapshot=null, spokenAttempts=0, currentTurnIsStory=false;

function buildProgress(){
  progressEl.innerHTML='';
  script.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='seg'+(i<idx?' done':i===idx?' now':'');
    if(alreadyCompletedView || i<idx){ d.className+=' done'; d.addEventListener('click',()=>jumpToTurn(i)); }
    progressEl.appendChild(d);
  });
}
function jumpToTurn(i){
  reviewBanner.classList.remove('show'); reviewing=false; resumeSnapshot=null;
  idx = i;
  loadTurn();
}
function setSegs(container, segs){
  container.innerHTML='';
  segs.forEach((seg)=>{const span=document.createElement('span');span.className='seg '+seg.lang;span.textContent=seg.t;container.appendChild(span);});
}
function addTranscript(who,text,cls){const div=document.createElement('div');div.className='t-line '+cls;div.innerHTML='<span class="who">'+who+'</span>'+text;transcriptEl.appendChild(div);transcriptEl.scrollTop=transcriptEl.scrollHeight;}
function addWordCard(w, isWeak){
  const empty=wordListEl.querySelector('.empty'); if(empty) empty.remove();
  let card = wordListEl.querySelector('[data-en="'+CSS.escape(w.en)+'"]');
  if(!card){ card=document.createElement('div'); card.setAttribute('data-en', w.en); wordListEl.appendChild(card); }
  card.className='word-card'+(isWeak?' weak':'');
  card.innerHTML='<b>'+w.en+'</b><span>'+w.es+'</span>';
}

// ================= Voz =================
let cachedVoices = null;
function ensureVoices(){
  return new Promise(resolve=>{
    let voices=speechSynthesis.getVoices();
    if(voices.length){ cachedVoices=voices; resolve(voices); return; }
    speechSynthesis.onvoiceschanged=()=>{ voices=speechSynthesis.getVoices(); cachedVoices=voices; resolve(voices); };
  });
}
// Nombres de voces femeninas conocidas en los navegadores/sistemas más comunes (Chrome, Safari, Windows, Android).
// Se busca primero acá; si ninguna coincide, se cae a cualquier voz del idioma pedido.
const FEMALE_VOICE_HINTS = ['female','samantha','victoria','karen','moira','tessa','fiona','susan','zira','aria','jenny','sonia','emma','ava','allison','ava','salli','joanna','kimberly','kendra','ivy','paulina','mónica','monica','helena','sabina','lucia','elvira','google us english','google español','google uk english female'];
function pickVoice(voices,lang){
  const matches = voices.filter(v=>v.lang&&v.lang.toLowerCase().startsWith(lang));
  if(!matches.length) return null;
  const female = matches.find(v=>{
    const n=(v.name||'').toLowerCase();
    return FEMALE_VOICE_HINTS.some(hint=>n.includes(hint));
  });
  return female || matches[0];
}
async function speakSegs(segs, targetContainer, rate){
  rate = rate || 0.95;
  const voices=await ensureVoices();
  setSegs(targetContainer, segs);
  const spans=[...targetContainer.querySelectorAll('.seg')];
  illusEl.classList.add('talking');
  for(let i=0;i<segs.length;i++){
    const seg=segs[i], span=spans[i];
    await new Promise(resolve=>{
      const u=new SpeechSynthesisUtterance(seg.t);
      u.lang=seg.lang==='en'?'en-US':'es-CO';
      const v=pickVoice(voices,seg.lang==='en'?'en':'es'); if(v)u.voice=v;
      u.rate=rate;
      u.onstart=()=>span.classList.add('active');
      u.onend=()=>{span.classList.remove('active');span.classList.add('spoken');resolve();};
      u.onerror=()=>resolve();
      speechSynthesis.speak(u);
    });
  }
  illusEl.classList.remove('talking');
}

// ================= Reconocimiento de voz =================
let recognition=null, micSupported=false;
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
if(SR){micSupported=true;recognition=new SR();recognition.lang='en-US';recognition.interimResults=false;recognition.maxAlternatives=1;}
function normalize(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z\s]/g,'').replace(/\s+/g,' ').trim();}
function saidMatches(target, said){const t=normalize(target), s=normalize(said); if(!t) return true; return t.split(' ').every(w=>s.includes(w));}

// ================= Motor principal =================
function hideStrayUI(){
  document.getElementById('taskExampleBox').style.display='none';
  const dlb = document.getElementById('dictListenBtn');
  if(dlb) dlb.style.display='none';
  doneScreen.classList.remove('show');
  retryScreen.classList.remove('show');
  const rap = document.getElementById('readAlongPlayer');
  if(rap) rap.style.display='none';
  const dgp = document.getElementById('dialoguePlayer');
  if(dgp) dgp.style.display='none';
  const fbp = document.getElementById('fillBlankPlayer');
  if(fbp) fbp.style.display='none';
  restoreRecordPanelIfStray();
}
function loadTurn(){
  buildProgress();
  const turn=script[idx];
  reviewBanner.classList.remove('show');
  hideStrayUI();
  if(turn.kind==='end'){ startEvaluation(); return; }
  if(turn.kind==='dictation'){ runDictation(turn); return; }
  if(turn.kind==='practica'){ runPractica(turn); return; }
  if(turn.kind==='readAlong'){ runReadAlong(turn); return; }
  if(turn.kind==='dialogueReinforcement'){ runDialogueReinforcement(turn); return; }
  if(turn.kind==='fillBlankDialogue'){ runFillBlankDialogue(turn); return; }
  if(turn.kind==='task' && !turn.segs){
    if(turn.isMilestoneTask){
      turn.segs = [{t:'Desafío de hito: arma 2 o 3 frases propias combinando varias palabras que aprendiste en este mes completo (no solo de hoy), como si le estuvieras contando a alguien todo lo que sabes ahora. Primero hablada, después escrita.',lang:'es'}];
      turn.emoji = '🏆';
    } else {
      turn.segs = [{t:'Ahora te toca a ti: mira el ejemplo de abajo, y después arma tu propia frase combinando al menos tres palabras diferentes de las que aprendiste hoy — no tienen que ser las mismas del ejemplo. Primero hablada, después escrita.',lang:'es'}];
      turn.emoji = '🎯';
    }
  }
  if(turn.crossDay){ crossTag.style.display='block'; crossTag.textContent='🔁 REPASO DE UN DÍA ANTERIOR'; }
  else if(turn.contrastPair){ crossTag.style.display='block'; crossTag.textContent='🔬 PATRÓN DEL IDIOMA'; }
  else if(turn.isRephrase){ crossTag.style.display='block'; crossTag.textContent='✨ DICHO DE FORMA MÁS ELEGANTE'; }
  else if(turn.isJingle){ crossTag.style.display='block'; crossTag.textContent='🎵 JINGLE DEL DÍA'; }
  else if(turn.isDailyStory){ crossTag.style.display='block'; crossTag.textContent='📖 HISTORIA — TODO EN CONTEXTO'; }
  else if(turn.isWeeklyStory){ crossTag.style.display='block'; crossTag.textContent='📚 HISTORIA DE LA SEMANA'; }
  else if(turn.isMilestone){ crossTag.style.display='block'; crossTag.textContent='🏆 EXAMEN DE HITO — 24 DÍAS'; }
  else if(turn.isStructureIntro){ crossTag.style.display='block'; crossTag.textContent='🧩 ESTRUCTURA DEL DÍA — MUY USADA EN LA VIDA REAL'; }
  else if(turn.isAuxiliaryTeaching){ crossTag.style.display='block'; crossTag.textContent='🧠 GRAMÁTICA CLAVE — '+turn.screenTitle.toUpperCase(); }
  else { crossTag.style.display='none'; }
  const songPlayer=document.getElementById('songPlayer'), songPlayerLabel=document.getElementById('songPlayerLabel'), songAudio=document.getElementById('songAudio'), songLyrics=document.getElementById('songLyrics');
  const songFile = turn.isJingle ? (currentDay && currentDay.songJingle) : (turn.isDailyStory ? (currentDay && currentDay.songStory) : null);
  const realLyrics = turn.isJingle ? (currentDay && currentDay.songJingleLyrics) : (turn.isDailyStory ? (currentDay && currentDay.songStoryLyrics) : null);
  if(songFile){
    songPlayer.style.display='block';
    songPlayerLabel.textContent = turn.isJingle ? '🎶 Escucha el jingle real, cantado — sigue la letra' : '🎶 Escucha la historia real, cantada — sigue la letra';
    if(songAudio.getAttribute('src') !== songFile){ songAudio.src = songFile; }
    let lyricCount;
    if(realLyrics && realLyrics.length){
      lyricCount = realLyrics.length;
      songLyrics.innerHTML = realLyrics.map((line,i)=>{
        if(typeof line === 'string'){
          return '<div class="lyric-line" data-i="'+i+'"><div class="lyric-en">'+line+'</div></div>';
        }
        const enHTML = line.en ? '<div class="lyric-en">'+line.en+'</div>' : '';
        const pronHTML = line.pron ? '<div class="lyric-pron">'+line.pron+'</div>' : '';
        const esHTML = line.es ? '<div class="lyric-es">'+line.es+'</div>' : '';
        return '<div class="lyric-line" data-i="'+i+'">'+enHTML+pronHTML+esHTML+'</div>';
      }).join('');
    } else {
      const lyricLines = turn.words || [];
      lyricCount = lyricLines.length;
      songLyrics.innerHTML = lyricLines.map((l,i)=>{
        const pronHTML = l.pron ? '<div class="lyric-pron">'+l.pron+'</div>' : '';
        return '<div class="lyric-line" data-i="'+i+'"><div class="lyric-en">'+l.en+'</div>'+pronHTML+'<div class="lyric-es">'+l.es+'</div></div>';
      }).join('');
    }
    songAudio.ontimeupdate = ()=>{
      if(!songAudio.duration || !lyricCount) return;
      const activeIdx = Math.min(lyricCount-1, Math.floor((songAudio.currentTime/songAudio.duration)*lyricCount));
      songLyrics.querySelectorAll('.lyric-line').forEach((el,i)=>{ el.classList.toggle('current', i===activeIdx); });
    };
  } else {
    songPlayer.style.display='none';
    songAudio.pause(); songAudio.removeAttribute('src'); songAudio.load();
    songLyrics.innerHTML='';
  }
  speakerLabel.textContent='TU TUTOR'; modeChip.style.display='none'; hintEl.textContent=''; replayWordBtn.style.display='none'; slowWordBtn.style.display='none'; peekBtn.style.display='none'; peekBox.style.display='none'; resetRecordingPanel(); finishTalkingBtn.style.display='none'; document.getElementById('phraseSelectionPanel').style.display='none'; document.getElementById('taskExampleBox').style.display='none'; wordSelectStart=null;
  appControls.style.display='flex'; playBtn.style.display=''; userControls.style.display='none'; typeRow.style.display='none'; nextControls.style.display='none';
  feedback.classList.remove('show'); playBtn.disabled=false;
  illusEl.textContent=turn.emoji||'💬';
  setSegs(lineEl, turn.segs);
  playBtn.onclick=async ()=>{
    playBtn.disabled=true; replayBtn.disabled=true;
    addTranscript('TUTOR', turn.segs.map(s=>s.t).join(''), 'app');
    await speakSegs(turn.segs, lineEl);
    playBtn.disabled=false; replayBtn.disabled=false;
    afterIntro(turn);
  };
  replayBtn.onclick=async ()=>{ await speakSegs(turn.segs, lineEl); };
}
function afterIntro(turn){
  appControls.style.display='none';
  if(turn.kind==='free'){
    userControls.style.display='flex';
    micBtn.onclick=()=>startListening(res=>{ addTranscript('TÚ', res.said, 'user'); mostrarNextControls(); userControls.style.display='none'; });
    skipBtn.onclick=()=>{typeRow.style.display='flex'; typeInput.focus();};
    sendBtn.onclick=()=>{ if(!typeInput.value.trim())return; addTranscript('TÚ', typeInput.value.trim(), 'user'); typeInput.value=''; typeRow.style.display='none'; mostrarNextControls(); };
    nextBtn.onclick=()=>{ idx++; loadTurn(); };
    return;
  }
  if(turn.kind==='task'){
    speakerLabel.textContent = turn.isMilestoneTask ? 'DESAFÍO DE HITO' : 'TAREA LIVIANA';
    const exBox=document.getElementById('taskExampleBox'), exContent=document.getElementById('taskExampleContent');
    if(turn.exampleLines && turn.exampleLines.length){
      exContent.innerHTML = turn.exampleLines.map(l=>
        '<div class="ex-line"><div class="ex-en">"'+l.en+'"</div><div class="ex-es">'+l.es+'</div></div>'
      ).join('');
      exBox.style.display='block';
    } else {
      exBox.style.display='none';
    }
    let spokenDone=false;
    userControls.style.display='flex';
    micBtn.onclick=()=>startListening(res=>{
      addTranscript('TÚ (hablado)', res.said, 'user');
      spokenDone=true;
      userControls.style.display='none';
      typeRow.style.display='flex'; typeInput.placeholder='Ahora escribe esa misma frase...'; typeInput.focus();
      feedback.classList.add('show','ok'); feedback.textContent='¡Buenísimo! Ahora escríbela.';
    });
    skipBtn.onclick=()=>{typeRow.style.display='flex'; typeInput.placeholder='Escribe tu frase acá...'; typeInput.focus();};
    sendBtn.onclick=()=>{
      if(!typeInput.value.trim())return;
      addTranscript('TÚ (escrito)', typeInput.value.trim(), 'user');
      typeInput.value=''; typeRow.style.display='none';
      feedback.classList.add('show','ok'); feedback.textContent='✓ Excelente. Esto es usar el idioma de verdad, no solo repetirlo.';
      mostrarNextControls();
      const items = buildTransformItems(turn.dayStructures);
      if(items.length){
        nextBtn.textContent='Practiquemos transformaciones →';
        nextBtn.onclick=()=>{ runTransformDrills(items, 0, ()=>{ idx++; loadTurn(); }); };
      } else {
        nextBtn.textContent='Continuar →';
        nextBtn.onclick=()=>{ idx++; loadTurn(); };
      }
    };
    nextBtn.onclick=()=>{ idx++; loadTurn(); };
    return;
  }
  wordQueue = turn.kind==='single' ? [turn.newWord] : turn.words.slice();
  wqIndex=0; evalMode=false;
  currentTurnIsStory = !!turn.isStory;
  runWordChallenge();
}
// ================= Transformaciones: negativa, pregunta, respuestas, futuro =================
function buildTransformItems(structures){
  const items = [];
  (structures||[]).forEach(s=>{
    if(!s.transformations) return;
    const baseEx = s.examples[0].en || s.examples[0];
    if(s.transformations.negative){
      items.push({base:baseEx, askType:'negativa', target:s.transformations.negative.en, es:s.transformations.negative.es});
    }
    if(s.transformations.question){
      items.push({base:baseEx, askType:'pregunta', target:s.transformations.question.en, es:s.transformations.question.es});
    }
  });
  return items;
}
function runTransformDrills(items, i, onDone){
  if(i>=items.length){ onDone(); return; }
  const item = items[i];
  speakerLabel.textContent='TRANSFORMÁ LA FRASE'; modeChip.style.display='none'; crossTag.style.display='block'; crossTag.textContent='🔄 PRACTICANDO CON LO DE HOY';
  illusEl.textContent='🔄';
  appControls.style.display='none'; userControls.style.display='none'; nextControls.style.display='none';
  feedback.classList.remove('show');
  setSegs(lineEl, [{t:'Frase base: "'+item.base+'"', lang:'en'}]);
  hintEl.textContent='Ejercicio '+(i+1)+' de '+items.length+' — Escríbela en forma '+item.askType+'.';
  typeRow.style.display='flex'; typeInput.value=''; typeInput.placeholder='Escribe la frase transformada...'; typeInput.focus();
  sendBtn.onclick=()=>{
    const typed=typeInput.value.trim(); if(!typed) return;
    const correct = normalize(typed)===normalize(item.target);
    addTranscript('TÚ (escrito)', typed, 'user');
    typeRow.style.display='none';
    feedback.classList.add('show', correct?'ok':'retry');
    feedback.textContent = correct ? '✓ ¡Perfecto!' : '✗ Se escribe: "'+item.target+'"';
    mostrarNextControls();
    nextBtn.textContent = (i+1<items.length) ? 'Siguiente →' : 'Continuar →';
    nextBtn.onclick=()=>{ runTransformDrills(items, i+1, onDone); };
  };
}

// ================= Dictado: se escucha, sin ver el texto, y se escribe a ciegas =================
async function speakHidden(text, shouldAbort){
  await ensureVoices();
  if(shouldAbort && shouldAbort()) return;
  return new Promise(resolve=>{
    speechSynthesis.cancel();
    if(shouldAbort && shouldAbort()){ resolve(); return; }
    const u=new SpeechSynthesisUtterance(text);
    u.lang='en-US';
    if(cachedVoices){ const v=pickVoice(cachedVoices,'en'); if(v) u.voice=v; }
    u.onend=()=>resolve(); u.onerror=()=>resolve();
    speechSynthesis.speak(u);
  });
}
async function speakHiddenVoiced(text, pitch, rate, shouldAbort){
  await ensureVoices();
  if(shouldAbort && shouldAbort()) return;
  return new Promise(resolve=>{
    speechSynthesis.cancel();
    if(shouldAbort && shouldAbort()){ resolve(); return; }
    const u=new SpeechSynthesisUtterance(text);
    u.lang='en-US';
    u.pitch=pitch; u.rate=rate;
    if(cachedVoices){ const v=pickVoice(cachedVoices,'en'); if(v) u.voice=v; }
    u.onend=()=>resolve(); u.onerror=()=>resolve();
    speechSynthesis.speak(u);
  });
}
function buildBlankTokens(en, blanksList){
  const tokens = en.split(/(\s+)/);
  let blankIdx = 0;
  return tokens.map(tok=>{
    if(/^\s+$/.test(tok) || tok===''){ return {type:'space', text:tok}; }
    const stripped = tok.replace(/^["“]+/,'').replace(/[.,!?;:"”]+$/,'');
    if(blankIdx < blanksList.length && stripped.toLowerCase() === blanksList[blankIdx].toLowerCase()){
      const startIdx = tok.indexOf(stripped);
      const before = tok.slice(0, startIdx);
      const after = tok.slice(startIdx + stripped.length);
      blankIdx++;
      return {type:'blank', answer:stripped, before, after};
    }
    return {type:'word', text:tok};
  });
}
function runFillBlankDialogue(turn){
  hideStrayUI();
  const modeLabel = turn.mode==='maestro' ? '🎓 Profesor' : '🐉 Alumno';
  crossTag.style.display='block'; crossTag.textContent='✍️ COMPLETÁ LO QUE DICE EL '+(turn.mode==='maestro'?'PROFESOR':'ALUMNO');
  speakerLabel.textContent='REFUERZO ESCRITO'; modeChip.style.display='none';
  appControls.style.display='none'; userControls.style.display='none'; typeRow.style.display='none'; nextControls.style.display='none'; feedback.classList.remove('show');
  peekBtn.style.display='none'; peekBox.style.display='none'; resetRecordingPanel(); finishTalkingBtn.style.display='none';
  document.getElementById('phraseSelectionPanel').style.display='none';
  document.getElementById('songPlayer').style.display='none';
  document.getElementById('readAlongPlayer').style.display='none';
  document.getElementById('dialoguePlayer').style.display='none';

  illusEl.textContent='✍️';
  setSegs(lineEl,[{t:'Ahora completa lo que dice el '+(turn.mode==='maestro'?'Profesor':'Alumno')+', usando lo que recuerdas del diálogo.',lang:'es'}]);
  hintEl.textContent='Puedes escuchar la pronunciación de cualquier palabra que falta, las veces que quieras — no resta nada.';

  const fbPlayer=document.getElementById('fillBlankPlayer'), fbTitle=document.getElementById('fillBlankTitle'), transcript=document.getElementById('fillBlankTranscript'), current=document.getElementById('fillBlankCurrent');
  fbPlayer.style.display='block';
  fbTitle.textContent = turn.mode==='maestro' ? '✍️ Guion del Profesor — completa sus líneas, leyendo las del Alumno como contexto' : '✍️ Guion del Alumno — completa tus líneas, leyendo las del Profesor como contexto';
  transcript.innerHTML=''; current.innerHTML='';

  const lines = turn.lines;
  let idxLine = 0;

  function addContextLine(line){
    const div=document.createElement('div');
    div.className='fb-line context';
    div.innerHTML = '<div class="fb-who">'+(line.speaker==='maestro'?'🎓 Profesor':'🐉 Alumno')+' (lectura)</div><div>'+line.en+'</div><div class="dlg-pron">'+line.pron+'</div><div class="dlg-es">'+line.es+'</div><button class="ghost" style="margin-top:6px; font-size:12px; padding:4px 10px;">🔊 Escuchar de nuevo</button>';
    const replayBtn = div.querySelector('button');
    replayBtn.onclick = ()=>{ speakHidden(line.en); };
    transcript.appendChild(div);
    transcript.scrollTop = transcript.scrollHeight;
  }
  function addCompletedLine(line, respuestas){
    const div=document.createElement('div');
    div.className='fb-line active';
    div.innerHTML = '<div class="fb-who">'+(line.speaker==='maestro'?'🎓 Profesor':'🐉 Alumno')+'</div><div>'+line.en+'</div><div class="dlg-pron">'+line.pron+'</div><div class="dlg-es">'+line.es+'</div><button class="ghost" style="margin-top:6px; font-size:12px; padding:4px 10px;">🔊 Escuchar de nuevo</button>';
    const replayBtn = div.querySelector('button');
    replayBtn.onclick = ()=>{ speakHidden(line.en); };
    transcript.appendChild(div);
    transcript.scrollTop = transcript.scrollHeight;
  }

  function renderNext(){
    if(idxLine >= lines.length){
      current.innerHTML='';
      mostrarNextControls();
      nextBtn.textContent='Continuar →';
      nextBtn.onclick=()=>{ fbPlayer.style.display='none'; idx++; loadTurn(); };
      return;
    }
    const line = lines[idxLine];
    if(line.speaker !== turn.mode){
      addContextLine(line);
      idxLine++;
      renderNext();
      return;
    }
    const tokens = buildBlankTokens(line.en, line.blanks);
    const box = document.createElement('div');
    box.className='fb-line active';
    const who = document.createElement('div'); who.className='fb-who'; who.textContent = (line.speaker==='maestro'?'🎓 Profesor':'🐉 Alumno')+' — te toca completar';
    const sentence = document.createElement('div'); sentence.className='fb-sentence';
    const inputs = [];
    tokens.forEach(tok=>{
      if(tok.type==='space'){ sentence.appendChild(document.createTextNode(tok.text)); }
      else if(tok.type==='word'){ sentence.appendChild(document.createTextNode(tok.text)); }
      else{
        const wrap=document.createElement('span'); wrap.className='fb-blank';
        wrap.appendChild(document.createTextNode(tok.before));
        const inp=document.createElement('input'); inp.type='text'; inp.autocomplete='off'; inp.spellcheck=false;
        inputs.push({inp, answer:tok.answer});
        wrap.appendChild(inp);
        const hintBtn=document.createElement('button'); hintBtn.className='fb-hint'; hintBtn.type='button'; hintBtn.textContent='🔊';
        hintBtn.onclick=()=>{ speakHidden(tok.answer); };
        wrap.appendChild(hintBtn);
        wrap.appendChild(document.createTextNode(tok.after));
        sentence.appendChild(wrap);
      }
    });
    box.appendChild(who); box.appendChild(sentence);

    const checkBtn=document.createElement('button'); checkBtn.className='mic'; checkBtn.style.marginTop='10px'; checkBtn.textContent='Revisar esta línea';
    checkBtn.onclick=()=>{
      inputs.forEach(({inp, answer})=>{
        const val = normalize(inp.value.trim());
        const ok = val === normalize(answer);
        inp.classList.remove('correct','incorrect');
        inp.classList.add(ok?'correct':'incorrect');
      });
      checkBtn.textContent='Siguiente →';
      checkBtn.onclick=()=>{
        addCompletedLine(line, inputs.map(x=>x.inp.value));
        idxLine++;
        renderNext();
      };
    };
    box.appendChild(checkBtn);
    current.innerHTML='';
    current.appendChild(box);
    if(inputs[0]) inputs[0].inp.focus();
  }

  renderNext();
}
function runDialogueReinforcement(turn){
  hideStrayUI();
  if(turn.isDailyMini){
    crossTag.style.display='block'; crossTag.textContent='🎭 CONVERSACIÓN DEL DÍA — MAESTRO Y ALUMNO';
    speakerLabel.textContent='PRÁCTICA DE HOY'; modeChip.style.display='none';
  } else {
    crossTag.style.display='block'; crossTag.textContent='🎭 DIÁLOGO DE REPASO — MAESTRO Y ALUMNO';
    speakerLabel.textContent='REFUERZO DE LA UNIDAD'; modeChip.style.display='none';
  }
  appControls.style.display='none'; userControls.style.display='none'; typeRow.style.display='none'; nextControls.style.display='none'; feedback.classList.remove('show');
  peekBtn.style.display='none'; peekBox.style.display='none'; resetRecordingPanel(); finishTalkingBtn.style.display='none';
  document.getElementById('phraseSelectionPanel').style.display='none';
  document.getElementById('songPlayer').style.display='none';
  document.getElementById('readAlongPlayer').style.display='none';

  illusEl.textContent='🎭';

  const dlgPlayer=document.getElementById('dialoguePlayer'), transcript=document.getElementById('dialogueTranscript'), turnBox=document.getElementById('dialogueCurrentTurn');
  const playAllBtn=document.getElementById('dialoguePlayAllBtn'), pauseBtn=document.getElementById('dialoguePauseBtn');
  dlgPlayer.style.display='block';
  transcript.innerHTML=''; turnBox.innerHTML='';
  playAllBtn.style.display='none'; pauseBtn.style.display='none';

  const lines = turn.lines;
  let idxLine = 0, autoPlaying=false, playToken = 0, myRole = null, activeGateWatcher = null;
  function clearActiveGateWatcher(){ if(activeGateWatcher){ clearInterval(activeGateWatcher); activeGateWatcher=null; } }

  function speakerMeta(sp){
    return sp==='maestro'
      ? { label:'🎓 Profesor', pitch:0.75, rate:0.95 }
      : { label:'🐉 Alumno', pitch:1.25, rate:1.05 };
  }

  async function speakWithTimeout(text, pitch, rate, shouldAbort){
    const maxMs = Math.max(2500, text.length*90);
    return Promise.race([
      speakHiddenVoiced(text, pitch, rate, shouldAbort),
      new Promise(resolve=>setTimeout(resolve, maxMs))
    ]);
  }

  function appendToTranscript(line, lineIndex){
    const div=document.createElement('div');
    div.className='dlg-line '+line.speaker;
    const meta = speakerMeta(line.speaker);
    const esMiTurno = line.speaker===myRole;
    div.innerHTML = '<div class="dlg-who">'+meta.label+(esMiTurno?' — tu turno':'')+'</div><div class="dlg-en" id="dlgEn'+lineIndex+'"></div><div class="dlg-pron">'+line.pron+'</div><div class="dlg-es">'+line.es+'</div><button class="ghost" style="margin-top:6px; font-size:12px; padding:4px 10px;">🔊 Escuchar de nuevo</button>';
    transcript.appendChild(div);
    renderStoryLine(document.getElementById('dlgEn'+lineIndex), line.en);
    const replayBtn = div.querySelector('button');
    replayBtn.onclick = ()=>{ speakHiddenVoiced(line.en, meta.pitch, meta.rate); };
    transcript.scrollTop = transcript.scrollHeight;
  }

  // ===== Paso 1: elegir con qué personaje practicas =====
  function showRoleSelector(){
    setSegs(lineEl,[{t:'Antes de arrancar esta unidad, repasemos toda la anterior con un diálogo entre el Profesor y el Alumno dragón.',lang:'es'}]);
    hintEl.textContent='Elige con cuál de los dos personajes quieres practicar hablando. Vas a escuchar las líneas del otro personaje como contexto, y vas a grabar las tuyas.';
    turnBox.innerHTML='';
    const wrap = document.createElement('div'); wrap.style.cssText='display:flex; flex-direction:column; gap:10px; align-items:center;';
    const title = document.createElement('div'); title.style.cssText='font-size:14px; color:var(--muted); margin-bottom:4px;';
    title.textContent='¿Con qué personaje quieres practicar hoy?';
    const btnMaestro = document.createElement('button'); btnMaestro.className='mic dlg-turn-btn maestro'; btnMaestro.textContent='🎓 Practicar como Profesor';
    const btnAlumno = document.createElement('button'); btnAlumno.className='mic dlg-turn-btn alumno'; btnAlumno.textContent='🐉 Practicar como Alumno';
    btnMaestro.onclick=()=>{ myRole='maestro'; startDialogue(); };
    btnAlumno.onclick=()=>{ myRole='alumno'; startDialogue(); };
    wrap.appendChild(title); wrap.appendChild(btnMaestro); wrap.appendChild(btnAlumno);
    turnBox.appendChild(wrap);
  }

  function startDialogue(){
    const meta = speakerMeta(myRole);
    setSegs(lineEl,[{t:'Estás practicando como '+meta.label+'. Escucha cada línea — cuando sea tu turno, graba tu respuesta antes de seguir.',lang:'es'}]);
    hintEl.textContent='Puedes escuchar tu grabación las veces que quieras. Si no te convence, bórrala y grábala de nuevo antes de guardar y avanzar.';
    playAllBtn.style.display='inline-flex'; pauseBtn.style.display='inline-flex'; pauseBtn.textContent='⏹ Detener audio';
    renderTurnButton();
  }

  // ===== Paso 2: recorrer el diálogo línea por línea =====
  function renderTurnButton(){
    clearActiveGateWatcher();
    if(idxLine >= lines.length){
      turnBox.innerHTML='';
      resetRecordingPanel();
      mostrarNextControls();
      nextBtn.textContent='Continuar →';
      nextBtn.onclick=()=>{ playToken++; try{ speechSynthesis.cancel(); }catch(e){} restoreRecordPanelIfStray(); resetRecordingPanel(); dlgPlayer.style.display='none'; idx++; loadTurn(); };
      return;
    }
    const line = lines[idxLine];
    const meta = speakerMeta(line.speaker);
    const esMiTurno = line.speaker===myRole;

    turnBox.innerHTML='';
    appendToTranscript(line, idxLine);

    const label = document.createElement('div');
    label.style.cssText='text-align:center; font-size:13px; color:var(--muted); margin-bottom:8px;';
    label.textContent = esMiTurno ? '👉 Ahora te toca hablar a ti, como '+meta.label : 'Turno de '+meta.label+' — leelo y escuchalo';
    turnBox.appendChild(label);

    const lineBoxId = 'dlgTurnEn'+idxLine;
    const lineBox = document.createElement('div');
    lineBox.className = 'dlg-line '+line.speaker;
    lineBox.innerHTML = '<div class="dlg-who">'+meta.label+(esMiTurno?' — repite esta línea':'')+'</div><div class="dlg-en" id="'+lineBoxId+'"></div><div class="dlg-pron">'+line.pron+'</div><div class="dlg-es">'+line.es+'</div>';
    turnBox.appendChild(lineBox);
    renderStoryLine(document.getElementById(lineBoxId), line.en);

    const listenBtn = document.createElement('button');
    listenBtn.className = 'ghost'; listenBtn.style.marginTop='8px';
    listenBtn.textContent = '🔊 Escuchar: '+meta.label;
    listenBtn.onclick = ()=>{
      const myToken = playToken;
      speakWithTimeout(line.en, meta.pitch, meta.rate, ()=>myToken!==playToken);
    };
    turnBox.appendChild(listenBtn);

    if(esMiTurno){
      showRecordPanel(line, meta);
    } else {
      const advBtn = document.createElement('button');
      advBtn.className='mic'; advBtn.style.marginTop='10px'; advBtn.style.display='block';
      advBtn.textContent='Siguiente →';
      advBtn.onclick=()=>{ idxLine++; renderTurnButton(); };
      turnBox.appendChild(advBtn);
    }
  }

  function showRecordPanel(line, meta){
    const note = document.createElement('div');
    note.style.cssText='margin:10px 0; font-size:13px; color:var(--muted); text-align:center;';
    note.textContent='Graba tu respuesta acá abajo, escúchala, y decide: guardarla y seguir, o borrarla y grabar de nuevo.';
    turnBox.appendChild(note);

    const panel = document.createElement('div'); panel.className='record-panel';
    const dlgRecordBtn = document.createElement('button'); dlgRecordBtn.className='ghost'; dlgRecordBtn.textContent='🎙️ Ahora graba tu respuesta';
    const dlgPlayback = document.createElement('audio'); dlgPlayback.controls=true; dlgPlayback.style.display='none';
    const dlgReRecordBtn = document.createElement('button'); dlgReRecordBtn.className='ghost'; dlgReRecordBtn.style.display='none'; dlgReRecordBtn.textContent='🔁 Borrar y grabar de nuevo';
    panel.appendChild(dlgRecordBtn); panel.appendChild(dlgPlayback); panel.appendChild(dlgReRecordBtn);
    turnBox.appendChild(panel);

    dlgRecordBtn.onclick = async ()=>{
      if(recIsRecording){
        if(recMediaRecorder && recMediaRecorder.state!=='inactive') recMediaRecorder.stop();
        return;
      }
      try{
        if(!recStream){ recStream = await navigator.mediaDevices.getUserMedia({audio:true}); }
      }catch(e){
        alert('No se pudo acceder al micrófono para grabar tu voz.');
        return;
      }
      recChunks=[];
      recMediaRecorder = new MediaRecorder(recStream);
      recMediaRecorder.ondataavailable = (e)=>{ if(e.data && e.data.size>0) recChunks.push(e.data); };
      recMediaRecorder.onstop = ()=>{
        recIsRecording=false;
        dlgRecordBtn.textContent='🎙️ Ahora graba tu respuesta';
        const blob = new Blob(recChunks, {type: recMediaRecorder.mimeType || 'audio/webm'});
        const url = URL.createObjectURL(blob);
        dlgPlayback.src = url;
        dlgPlayback.style.display='block';
        dlgReRecordBtn.style.display='inline-flex';
        dlgRecordBtn.style.display='none';
      };
      recMediaRecorder.start();
      recIsRecording=true;
      dlgRecordBtn.textContent='⏹ Detener mi grabación';
    };
    dlgReRecordBtn.onclick = ()=>{
      dlgPlayback.style.display='none'; dlgPlayback.removeAttribute('src');
      dlgReRecordBtn.style.display='none';
      dlgRecordBtn.style.display='inline-flex'; dlgRecordBtn.textContent='🎙️ Ahora graba tu respuesta';
    };

    const advBtn = document.createElement('button');
    advBtn.className='mic'; advBtn.style.marginTop='10px'; advBtn.style.display='none';
    advBtn.textContent='💾 Guardar esta grabación y seguir →';
    advBtn.onclick=()=>{
      clearActiveGateWatcher();
      idxLine++;
      renderTurnButton();
    };
    const skipWrap = document.createElement('div'); skipWrap.style.marginTop='6px';
    const skipBtn = document.createElement('button');
    skipBtn.className='ghost'; skipBtn.style.fontSize='12px'; skipBtn.style.padding='4px 10px';
    skipBtn.textContent='Saltar esta línea sin grabar';
    skipBtn.onclick=()=>{ clearActiveGateWatcher(); idxLine++; renderTurnButton(); };
    skipWrap.appendChild(skipBtn);
    turnBox.appendChild(advBtn);
    turnBox.appendChild(skipWrap);
    activeGateWatcher = setInterval(()=>{
      const grabado = dlgPlayback.style.display==='block' && dlgPlayback.getAttribute('src');
      advBtn.style.display = grabado ? 'inline-flex' : 'none';
    }, 300);
  }

  playAllBtn.onclick = async ()=>{
    if(autoPlaying) return;
    autoPlaying=true;
    const myToken = ++playToken;
    playAllBtn.disabled=true;
    while(idxLine < lines.length && myToken===playToken){
      const line = lines[idxLine];
      const meta = speakerMeta(line.speaker);
      appendToTranscript(line, idxLine);
      await speakWithTimeout(line.en, meta.pitch, meta.rate, ()=>myToken!==playToken);
      if(myToken!==playToken) break;
      idxLine++;
      await new Promise(r=>setTimeout(r, 350));
      if(myToken!==playToken) break;
    }
    if(myToken===playToken){
      autoPlaying=false;
      playAllBtn.disabled=false;
      renderTurnButton();
    }
  };
  pauseBtn.onclick = ()=>{
    playToken++;
    try{ speechSynthesis.cancel(); }catch(e){}
    autoPlaying=false;
    playAllBtn.disabled=false;
    if(idxLine < lines.length) renderTurnButton();
  };

  showRoleSelector();
}
function runReadAlong(turn){
  hideStrayUI();
  crossTag.style.display='block'; crossTag.textContent='📖 LECTURA DE REPASO — SOLO ESCUCHAR Y LEER';
  speakerLabel.textContent='LECTURA DE REPASO'; modeChip.style.display='none';
  appControls.style.display='none'; userControls.style.display='none'; typeRow.style.display='none'; nextControls.style.display='none'; feedback.classList.remove('show');
  peekBtn.style.display='none'; peekBox.style.display='none'; resetRecordingPanel(); finishTalkingBtn.style.display='none';
  document.getElementById('phraseSelectionPanel').style.display='none';
  document.getElementById('songPlayer').style.display='none';

  illusEl.textContent='📖';
  lineEl.innerHTML=''; setSegs(lineEl,[{t:'Cerremos con una lectura completa de repaso — escucha y sigue el texto, sin ejercicios.',lang:'es'}]);
  hintEl.textContent='Encuentras acá las estructuras, palabras y frases que aprendiste en esta lección, todas juntas en una sola historia.';

  const readAlongPlayer=document.getElementById('readAlongPlayer'), readAlongBox=document.getElementById('readAlongBox');
  const playBtn2=document.getElementById('readAlongPlayBtn'), stopBtn2=document.getElementById('readAlongStopBtn');
  if(!readAlongPlayer || !readAlongBox || !playBtn2 || !stopBtn2){
    hintEl.textContent='⚠️ Falta actualizar index.html — subí la versión más reciente junto con motor.js.';
    mostrarNextControls();
    nextBtn.textContent='Continuar →';
    nextBtn.onclick=()=>{ idx++; loadTurn(); };
    return;
  }
  readAlongPlayer.style.display='block';
  readAlongBox.innerHTML = turn.lines.map((l,i)=>
    '<div class="ra-line" data-i="'+i+'"><div class="ra-en" id="raEn'+i+'"></div><div class="ra-pron">'+(l.pron||'')+'</div><div class="ra-es">'+l.es+'</div></div>'
  ).join('');
  turn.lines.forEach((l,i)=>{ renderStoryLine(document.getElementById('raEn'+i), l.en); });

  // Mismo panel de auto-grabación que ya usa el resto del curso — acá para grabarse leyendo la historia completa.
  recordBtn.style.display='inline-flex'; recordBtn.textContent='🎙️ Grabarme leyendo esta historia';

  let playing=false, playToken2=0;
  playBtn2.textContent='▶ Escuchar la historia completa';
  playBtn2.disabled=false;
  playBtn2.onclick=async ()=>{
    if(playing) return;
    playing=true;
    const myToken = ++playToken2;
    playBtn2.textContent='⏸ Reproduciendo...'; playBtn2.disabled=true;
    for(let i=0;i<turn.lines.length;i++){
      if(myToken!==playToken2) break;
      readAlongBox.querySelectorAll('.ra-line').forEach((el,j)=>el.classList.toggle('current', j===i));
      const current = readAlongBox.querySelector('[data-i="'+i+'"]');
      if(current) current.scrollIntoView({behavior:'smooth', block:'center'});
      const maxMs = Math.max(2500, turn.lines[i].en.length*90);
      await Promise.race([ speakHidden(turn.lines[i].en, ()=>myToken!==playToken2), new Promise(r=>setTimeout(r, maxMs)) ]);
      if(myToken!==playToken2) break;
    }
    if(myToken===playToken2){
      readAlongBox.querySelectorAll('.ra-line').forEach(el=>el.classList.remove('current'));
      playing=false; playBtn2.textContent='▶ Escuchar la historia completa'; playBtn2.disabled=false;
    }
  };
  stopBtn2.onclick=()=>{
    playToken2++;
    try{ speechSynthesis.cancel(); }catch(e){}
    playing=false; playBtn2.textContent='▶ Escuchar la historia completa'; playBtn2.disabled=false;
    readAlongBox.querySelectorAll('.ra-line').forEach(el=>el.classList.remove('current'));
  };

  mostrarNextControls();
  nextBtn.textContent='Continuar →';
  nextBtn.onclick=()=>{
    cancelled=true; try{ speechSynthesis.cancel(); }catch(e){}
    readAlongPlayer.style.display='none';
    idx++; loadTurn();
  };
}
function runDictation(turn){
  crossTag.style.display='block'; crossTag.textContent='🎧 DICTADO — ESCRIBÍ LO QUE ESCUCHÁS';
  speakerLabel.textContent='DICTADO'; modeChip.style.display='none';
  document.getElementById('taskExampleBox').style.display='none';
  document.getElementById('phraseSelectionPanel').style.display='none';
  document.getElementById('songPlayer').style.display='none';
  peekBtn.style.display='none'; peekBox.style.display='none'; resetRecordingPanel(); finishTalkingBtn.style.display='none';
  illusEl.textContent='🎧';
  hintEl.textContent='No hay pista visual esta vez — escucha con atención, las veces que necesites, y escribe exactamente lo que entendiste.';
  lineEl.innerHTML=''; lineEl.textContent='🔒 El texto está oculto hasta que respondas.';
  appControls.style.display='none'; userControls.style.display='none'; nextControls.style.display='none'; feedback.classList.remove('show');
  typeRow.style.display='flex'; typeInput.value=''; typeInput.placeholder='Escribe en inglés lo que escuchaste...'; typeInput.focus();
  playBtn.style.display='none';
  let listenBtn = document.getElementById('dictListenBtn');
  if(!listenBtn){
    listenBtn = document.createElement('button');
    listenBtn.className='mic'; listenBtn.id='dictListenBtn';
    typeRow.parentNode.insertBefore(listenBtn, typeRow);
  }
  listenBtn.textContent='🔊 Escuchar la frase';
  listenBtn.style.display='inline-flex';
  listenBtn.onclick=async ()=>{ listenBtn.disabled=true; await speakHidden(turn.dictEn); listenBtn.disabled=false; };
  sendBtn.onclick=()=>{
    const said = typeInput.value.trim();
    if(!said) return;
    addTranscript('TÚ (dictado)', said, 'user');
    const correct = normalize(said)===normalize(turn.dictEn);
    typeRow.style.display='none'; listenBtn.style.display='none';
    lineEl.innerHTML=''; setSegs(lineEl, [{t:turn.dictEn, lang:'en'}]);
    hintEl.textContent='Significa: "'+turn.dictEs+'"';
    feedback.classList.add('show', correct?'ok':'retry');
    feedback.textContent = correct ? '✓ ¡Perfecto, coincide exactamente!' : '✗ No coincidió del todo — mira arriba cómo era realmente, y compara con lo que escribiste.';
    mostrarNextControls();
  };
  nextBtn.onclick=()=>{ idx++; loadTurn(); };
}

// ================= Práctica de Progreso (cada 14 días) =================
const CONTRACTIONS_MAP = {
  "i'm":"i am","you're":"you are","he's":"he is","she's":"she is","it's":"it is",
  "we're":"we are","they're":"they are","isn't":"is not","aren't":"are not",
  "don't":"do not","doesn't":"does not","didn't":"did not","can't":"cannot",
  "won't":"will not","wouldn't":"would not","couldn't":"could not","shouldn't":"should not",
  "haven't":"have not","hasn't":"has not","hadn't":"had not","i've":"i have",
  "you've":"you have","we've":"we have","they've":"they have","i'll":"i will",
  "you'll":"you will","we'll":"we will","they'll":"they will","he'll":"he will",
  "she'll":"she will","that's":"that is","there's":"there is","what's":"what is",
  "who's":"who is","let's":"let us","here's":"here is","how's":"how is",
  "where's":"where is","when's":"when is","why's":"why is","everything's":"everything is",
  "everyone's":"everyone is","everybody's":"everybody is","someone's":"someone is",
  "somebody's":"somebody is","nothing's":"nothing is","that'd":"that would",
  "i'd":"i would","you'd":"you would","he'd":"he would","she'd":"she would",
  "we'd":"we would","they'd":"they would"
};
function expandContractions(s){
  let out=s.toLowerCase();
  for(const c in CONTRACTIONS_MAP){ out=out.split(c).join(CONTRACTIONS_MAP[c]); }
  return out;
}
function practicaAnswerMatches(said, correct, flexible){
  if(flexible){ return normalize(expandContractions(said))===normalize(expandContractions(correct)); }
  return normalize(said)===normalize(correct);
}
function downloadPracticaSummary(turn, results, score, total, msg){
  const rows = results.map((r,n)=>{
    if(r.correct===null){
      return '<div class="item"><b>#'+(n+1)+' — Pregunta:</b> '+r.prompt+'<br><i>Tu respuesta:</i> '+r.answer+'</div>';
    }
    const icon = r.correct ? '✅' : '❌';
    return '<div class="item">'+icon+' <b>#'+(n+1)+':</b> '+r.prompt+'<br><i>Tu respuesta:</i> '+r.answer+(r.correct?'':'<br><i>Respuesta correcta:</i> '+r.correctAnswer)+'</div>';
  }).join('');
  const html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Práctica de Progreso — Día '+turn.day+'</title>'
    +'<style>body{font-family:Georgia,serif;max-width:700px;margin:40px auto;color:#2b2b2b;padding:0 16px;}h1{color:#1F3A5F;}h2{color:#B08D57;font-weight:normal;}'
    +'.item{margin-bottom:14px;padding:10px 14px;border-left:3px solid #B08D57;background:#F2EFE9;border-radius:4px;}'
    +'.score{font-size:22px;font-weight:bold;color:#1F3A5F;}</style></head><body>'
    +'<h1>El Dragón del Lenguaje</h1><h2>Práctica de Progreso — Día '+turn.day+'</h2>'
    +'<p class="score">Resultado: '+score+' de '+total+'</p>'
    +'<p>'+msg+'</p><hr>'+rows+'</body></html>';
  const blob = new Blob([html], {type:'text/html'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href=url; a.download='practica-dia'+turn.day+'.html';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function runPractica(turn){
  const data = turn.data;
  const flexible = turn.day < 91;
  const items = [];
  data.palabras.forEach(p=>items.push({type:'palabra', es:p.es, en:p.en}));
  data.preguntas.forEach(q=>items.push({type:'pregunta', question:q}));
  data.frases.forEach(f=>items.push({type:'frase', es:f.es, en:f.en}));
  let i=0;
  const results=[];

  crossTag.style.display='block'; crossTag.textContent='📘 PRÁCTICA DE PROGRESO — DÍA '+turn.day;
  speakerLabel.textContent='PRÁCTICA DE PROGRESO'; modeChip.style.display='none';
  document.getElementById('taskExampleBox').style.display='none';
  document.getElementById('phraseSelectionPanel').style.display='none';
  document.getElementById('songPlayer').style.display='none';
  peekBtn.style.display='none'; peekBox.style.display='none'; resetRecordingPanel(); finishTalkingBtn.style.display='none';
  playBtn.style.display='none';

  const repeatBtn0 = document.getElementById('practicaRepeatBtn');
  const continueBtn0 = document.getElementById('practicaContinueBtn');
  const listenBtn0 = document.getElementById('practicaListenBtn');
  if(repeatBtn0) repeatBtn0.style.display='none';
  if(continueBtn0) continueBtn0.style.display='none';
  if(listenBtn0) listenBtn0.style.display='none';

  function showIntro(){
    illusEl.textContent='📘';
    lineEl.innerHTML=''; setSegs(lineEl,[{t:'Práctica de Progreso — Día '+turn.day, lang:'es'}]);
    hintEl.textContent='35 ejercicios: 15 palabras, 10 preguntas abiertas, y 10 frases para traducir. La puedes repetir todas las veces que quieras, cuando quieras.';
    appControls.style.display='flex'; userControls.style.display='none'; typeRow.style.display='none';
    mostrarNextControls(); feedback.classList.remove('show');
    nextBtn.textContent='Empezar →';
    nextBtn.onclick=()=>{ showItem(); };
  }

  function showItem(){
    if(i>=items.length){ showSummary(); return; }
    const item=items[i];
    appControls.style.display='none'; userControls.style.display='flex'; nextControls.style.display='none';
    feedback.classList.remove('show'); typeRow.style.display='none';
    illusEl.textContent = item.type==='pregunta' ? '❓' : '✍️';
    lineEl.innerHTML='';
    let speakText;
    if(item.type==='palabra'){
      setSegs(lineEl,[{t:item.es, lang:'es'}]);
      hintEl.textContent='Ejercicio '+(i+1)+' de 35 — Toca el botón si quieres escuchar la pronunciación, y traduce esta palabra o frase al inglés.';
      speakText = item.en;
    } else if(item.type==='pregunta'){
      setSegs(lineEl,[{t:item.question, lang:'en'}]);
      hintEl.textContent='Ejercicio '+(i+1)+' de 35 — Toca el botón si quieres escuchar la pronunciación, y responde con tus propias palabras (esta parte no se califica).';
      speakText = item.question;
    } else {
      setSegs(lineEl,[{t:item.es, lang:'es'}]);
      hintEl.textContent='Ejercicio '+(i+1)+' de 35 — Toca el botón si quieres escuchar la pronunciación, y traduce esta frase completa al inglés.';
      speakText = item.en;
    }
    let listenBtn = document.getElementById('practicaListenBtn');
    if(!listenBtn){
      listenBtn = document.createElement('button');
      listenBtn.className='mic'; listenBtn.id='practicaListenBtn';
      userControls.parentNode.insertBefore(listenBtn, userControls);
    }
    listenBtn.textContent='🔊 Escuchar pronunciación';
    listenBtn.style.display='inline-flex';
    listenBtn.onclick=async ()=>{ listenBtn.disabled=true; await speakHidden(speakText); listenBtn.disabled=false; };
    micBtn.onclick=()=>startListening(res=>{
      addTranscript('TÚ (hablado)', res.said, 'user');
      userControls.style.display='none';
      typeRow.style.display='flex'; typeInput.value=''; typeInput.placeholder='Ahora escribe tu respuesta...'; typeInput.focus();
    }, {longForm:true});
    skipBtn.onclick=()=>{ typeRow.style.display='flex'; typeInput.value=''; typeInput.placeholder='Escribe tu respuesta acá...'; typeInput.focus(); };
    sendBtn.onclick=()=>{
      const said=typeInput.value.trim();
      if(!said) return;
      addTranscript('TÚ (escrito)', said, 'user');
      typeRow.style.display='none';
      if(item.type==='pregunta'){
        results.push({type:'pregunta', prompt:item.question, answer:said, correct:null});
        feedback.classList.add('show','ok');
        feedback.textContent='✓ Respuesta registrada — esta parte no se califica, es para practicar comprensión real.';
      } else {
        const target=item.en;
        const isRight=practicaAnswerMatches(said, target, flexible);
        results.push({type:item.type, prompt:item.es, answer:said, correct:isRight, correctAnswer:target});
        lineEl.innerHTML=''; setSegs(lineEl,[{t:target, lang:'en'}]);
        feedback.classList.add('show', isRight?'ok':'retry');
        feedback.textContent = isRight ? '✓ ¡Correcto!' : '✗ La respuesta correcta era: "'+target+'"';
      }
      mostrarNextControls();
      nextBtn.textContent = (i+1<items.length) ? 'Siguiente →' : 'Ver resultado →';
      nextBtn.onclick=()=>{ i++; showItem(); };
    };
  }

  function showSummary(){
    const graded=results.filter(r=>r.correct!==null);
    const score=graded.filter(r=>r.correct).length;
    const total=graded.length;
    appControls.style.display='none'; userControls.style.display='none'; typeRow.style.display='none';
    const listenBtnEnd = document.getElementById('practicaListenBtn');
    if(listenBtnEnd) listenBtnEnd.style.display='none';
    illusEl.textContent='🏆';
    lineEl.innerHTML=''; setSegs(lineEl,[{t:'Resultado: '+score+' de '+total, lang:'es'}]);
    let msg;
    if(score>=total*0.85) msg='¡Excelente progreso! Estás muy bien preparado para el examen de hito.';
    else if(score>=total*0.57) msg='Vas por buen camino. Repasa especialmente lo que falló, y repite esta práctica cuando quieras.';
    else msg='Cada intento te acerca más — repasa con calma, y vuelve a intentarlo las veces que necesites.';
    if(turn.day===168) msg += ' Este fue tu último repaso antes del examen de hito — ¡confía en todo lo que aprendiste!';
    hintEl.textContent=msg+' Puedes repetir esta práctica cuantas veces quieras.';
    feedback.classList.remove('show');
    mostrarNextControls();
    nextBtn.textContent='📥 Descargar mi práctica';
    nextBtn.onclick=()=>{ downloadPracticaSummary(turn, results, score, total, msg); };
    let repeatBtn=document.getElementById('practicaRepeatBtn');
    if(!repeatBtn){ repeatBtn=document.createElement('button'); repeatBtn.className='ghost'; repeatBtn.id='practicaRepeatBtn'; nextControls.appendChild(repeatBtn); }
    repeatBtn.textContent='🔁 Repetir esta práctica'; repeatBtn.style.display='inline-flex';
    repeatBtn.onclick=()=>{ i=0; results.length=0; showIntro(); };
    let continueBtn=document.getElementById('practicaContinueBtn');
    if(!continueBtn){ continueBtn=document.createElement('button'); continueBtn.className='mic'; continueBtn.id='practicaContinueBtn'; nextControls.appendChild(continueBtn); }
    continueBtn.textContent='Continuar la lección →'; continueBtn.style.display='inline-flex';
    continueBtn.onclick=()=>{ repeatBtn.style.display='none'; continueBtn.style.display='none'; idx++; loadTurn(); };
  }

  showIntro();
}

function runWordChallenge(){
  if(wqIndex >= wordQueue.length){
    if(evalMode){ finishEvaluation(); return; }
    mostrarNextControls();
    nextBtn.onclick=()=>{ idx++; loadTurn(); };
    return;
  }
  const w = wordQueue[wqIndex];
  if(!w || !w.en || !w.en.trim()){
    // Protección: una línea sin texto en inglés no se puede practicar — la salteamos sola.
    wqIndex++;
    runWordChallenge();
    return;
  }
  document.getElementById('taskExampleBox').style.display='none';
  const dlb2 = document.getElementById('dictListenBtn');
  if(dlb2) dlb2.style.display='none';
  spokenAttempts = 0;
  // Reseteo defensivo: si la palabra anterior dejó el micrófono a medio escuchar
  // (por ejemplo, si el watchdog no llegó a dispararse a tiempo), esto asegura que
  // cada palabra nueva arranque con el botón de micrófono en su estado normal.
  try{ recognition.onresult=null; recognition.onend=null; recognition.onerror=null; recognition.abort(); }catch(e){}
  releaseMicButton();
  modeChip.style.display='inline-block'; modeChip.className='mode-chip speak'; modeChip.textContent='🎙 HABLAR';
  speakerLabel.textContent = evalMode ? 'DIÁLOGO' : (currentTurnIsStory ? 'FRASE DE LA HISTORIA' : 'PRACTICA ESTA PALABRA');
  hintEl.innerHTML='Significa: "'+w.es+'"' + (w.pron ? ' <span class="pron-hint">· se pronuncia: "'+w.pron+'"</span>' : '') + (currentTurnIsStory ? ' <span class="pron-hint">· toca cualquier palabra para reescucharla sola</span>' : '');
  const segs = [{t:w.en,lang:'en'}]; // siempre una sola frase completa, para que la voz salga fluida
  illusEl.textContent='💬';
  appControls.style.display='flex'; playBtn.style.display=''; userControls.style.display='none'; typeRow.style.display='none'; nextControls.style.display='none';
  feedback.classList.remove('show'); playBtn.disabled=false;
  if(currentTurnIsStory){ renderStoryLine(lineEl, w.en); } else { setSegs(lineEl, segs); }
  playBtn.onclick=async ()=>{
    playBtn.disabled=true; replayBtn.disabled=true;
    await speakSegs(segs, lineEl);
    if(currentTurnIsStory) renderStoryLine(lineEl, w.en);
    playBtn.disabled=false; replayBtn.disabled=false;
    appControls.style.display='none'; userControls.style.display='flex';
    replayWordBtn.style.display='inline-flex';
    slowWordBtn.style.display='inline-flex';
    recordBtn.style.display='inline-flex';
    replayWordBtn.onclick=async ()=>{ replayWordBtn.disabled=true; await speakSegs(segs, lineEl); if(currentTurnIsStory) renderStoryLine(lineEl, w.en); replayWordBtn.disabled=false; };
    slowWordBtn.onclick=async ()=>{ slowWordBtn.disabled=true; await speakSegs(segs, lineEl, 0.5); if(currentTurnIsStory) renderStoryLine(lineEl, w.en); slowWordBtn.disabled=false; };
  };
  replayBtn.onclick=async ()=>{ await speakSegs(segs, lineEl); if(currentTurnIsStory) renderStoryLine(lineEl, w.en); };
  micBtn.onclick=()=>startListening(res=>handleSpokenResult(w,res), {longForm:currentTurnIsStory});
  skipBtn.onclick=()=>{typeRow.style.display='flex'; typeInput.placeholder='Escribe lo que ibas a decir...'; typeInput.focus();};
  sendBtn.onclick=()=>{ if(!typeInput.value.trim())return; const said=typeInput.value.trim(); typeInput.value=''; typeRow.style.display='none'; handleSpokenResult(w,{said,confidence:null}); };
}
// Muestra la frase de la historia como palabras individuales, tocables, CON espacios correctos entre ellas.
// Se usa solo para la visualización — la voz (speakSegs) siempre lee la frase completa de un tirón, fluida.
function renderStoryLine(container, sentence){
  container.innerHTML='';
  const words = sentence.split(' ');
  words.forEach((word,i)=>{
    const span=document.createElement('span');
    span.className='seg en';
    span.textContent = word + (i<words.length-1 ? ' ' : '');
    container.appendChild(span);
  });
  const wordSegs = words.map(word=>({t:word, lang:'en'}));
  attachWordClicks(container, wordSegs);
}
let wordSelectStart = null;
function attachWordClicks(container, segs){
  const spans=[...container.querySelectorAll('.seg')];
  wordSelectStart = null;
  document.getElementById('phraseSelectionPanel').style.display='none';
  spans.forEach((span,i)=>{
    span.style.cursor='pointer';
    span.title='Toca una palabra para escucharla sola. Toca otra palabra después para escuchar toda la frase entre las dos.';
    span.onclick=(e)=>{
      e.stopPropagation();
      if(wordSelectStart===null){
        spans.forEach(s=>s.classList.remove('selected'));
        wordSelectStart = i;
        span.classList.add('selecting');
        speechSynthesis.cancel();
        const u=new SpeechSynthesisUtterance(segs[i].t);
        u.lang='en-US'; u.rate=0.9;
        if(cachedVoices){ const v=pickVoice(cachedVoices,'en'); if(v) u.voice=v; }
        speechSynthesis.speak(u);
      } else {
        const a=Math.min(wordSelectStart,i), b=Math.max(wordSelectStart,i);
        spans.forEach(s=>s.classList.remove('selecting'));
        spans.forEach((s,idx)=>{ if(idx>=a && idx<=b) s.classList.add('selected'); else s.classList.remove('selected'); });
        const phrase = segs.slice(a,b+1).map(s=>s.t).join(' ');
        playSelectedPhrase(phrase);
        wordSelectStart = null;
      }
    };
  });
}
function playSelectedPhrase(phrase){
  const panel=document.getElementById('phraseSelectionPanel');
  const textEl=document.getElementById('phraseSelectionText');
  const replayBtn2=document.getElementById('replaySelectionBtn');
  const clearBtn=document.getElementById('clearSelectionBtn');
  panel.style.display='flex';
  textEl.textContent='"'+phrase+'"';
  const speak=()=>{ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(phrase); u.lang='en-US'; u.rate=0.9; if(cachedVoices){ const v=pickVoice(cachedVoices,'en'); if(v) u.voice=v; } speechSynthesis.speak(u); };
  speak();
  replayBtn2.onclick=speak;
  clearBtn.onclick=()=>{
    panel.style.display='none';
    [...lineEl.querySelectorAll('.seg')].forEach(s=>s.classList.remove('selected','selecting'));
    wordSelectStart=null;
  };
}
function handleSpokenResult(w, res){
  spokenAttempts++;
  const ok = saidMatches(w.en, res.said);
  const pronTag = (res.confidence!==null) ? '<span class="pron-tag '+(res.confidence>=0.92?'high':'low')+'">pronunciación '+Math.round(res.confidence*100)+'%</span>' : '';
  addTranscript('TÚ', res.said+pronTag, 'user');
  feedback.classList.add('show');
  userControls.style.display='none'; typeRow.style.display='none';
  const passedClear = ok && (res.confidence===null || res.confidence>=0.92);
  if(passedClear){
    const credit = spokenAttempts===1 ? 1 : 0.5;
    feedback.className='feedback show ok';
    feedback.textContent = spokenAttempts===1
      ? '✓ Muy bien, se entendió claro (92%+). Ahora escríbela.'
      : '✓ Ahora sí se entendió claro. Ahora escríbela.';
    goToWriteStep(w, credit);
    return;
  }
  if(spokenAttempts>=2){
    feedback.className='feedback show retry';
    feedback.textContent = ok
      ? 'No llegamos al 92% de claridad, pero la palabra estuvo bien. Sigamos — quedó anotada para repasar.'
      : 'No pasa nada, sigamos — quedó anotada para repasar más adelante.';
    goToWriteStep(w, 0);
    return;
  }
  if(ok){
    feedback.className='feedback show retry'; feedback.textContent='Dijiste bien la palabra, pero sonó poco clara (necesitas 92%). Repítela una vez más.';
  } else {
    feedback.className='feedback show retry'; feedback.textContent='Casi — prueba repetirla de nuevo, tú puedes.';
  }
  userControls.style.display='flex';
}
function goToWriteStep(w, pronCredit){
  modeChip.className='mode-chip write'; modeChip.textContent='✏️ ESCRIBIR';
  speakerLabel.textContent = evalMode ? 'DIÁLOGO' : 'AHORA ESCRÍBELA';
  illusEl.textContent='✏️'; replayWordBtn.style.display='none'; slowWordBtn.style.display='none'; resetRecordingPanel(); finishTalkingBtn.style.display='none'; document.getElementById('phraseSelectionPanel').style.display='none'; wordSelectStart=null;
  setSegs(lineEl, [{t:'¿Cómo se escribe "'+w.es+'" en inglés?',lang:'es'}]);
  hintEl.textContent='Pista: empieza con "'+w.en[0].toUpperCase()+'"';
  appControls.style.display='none'; userControls.style.display='none'; nextControls.style.display='none';
  feedback.classList.remove('show');
  typeRow.style.display='flex'; typeInput.placeholder='Escribe la palabra en inglés...'; typeInput.value=''; typeInput.focus();
  peekBtn.style.display='inline-flex'; peekBox.style.display='none';
  let writeCredit = 0;
  let attempts = 0;
  let peeked = false;
  peekBtn.onclick=()=>{
    peeked = true;
    peekBox.textContent = w.en;
    peekBox.style.display='block';
    peekBox.style.animation='none';
    void peekBox.offsetWidth; // reinicia la animación si se toca varias veces seguidas
    peekBox.style.animation='peekfade 3s ease-in-out forwards';
    setTimeout(()=>{ peekBox.style.display='none'; }, 3000);
  };
  function finalize(){
    typeRow.style.display='none';
    peekBtn.style.display='none'; peekBox.style.display='none';
    if(peeked) writeCredit = 0; // ver la pista no cuenta como haberla escrito de memoria
    const existing = learnedWords.find(x=>normalize(x.en)===normalize(w.en));
    if(!existing){
      learnedWords.push(Object.assign({}, w, {pronCredit, writeCredit}));
    } else {
      const newTotal = pronCredit + writeCredit;
      const oldTotal = (existing.pronCredit||0) + (existing.writeCredit||0);
      if(newTotal > oldTotal){ existing.pronCredit = pronCredit; existing.writeCredit = writeCredit; }
    }
    const rec = existing || learnedWords[learnedWords.length-1];
    const finalPerfect = rec.pronCredit===1 && rec.writeCredit===1;
    addWordCard(w, !finalPerfect);
    if(finalPerfect){ weakWords = weakWords.filter(x=>normalize(x.en)!==normalize(w.en)); }
    else if(!weakWordsHas(w)){ weakWords.push(w); }
    updateLiveScore();
    mostrarNextControls();
    nextBtn.textContent = evalMode ? 'Continuar →' : 'Continuar →';
    nextBtn.onclick=()=>{ wqIndex++; runWordChallenge(); };
  }
  sendBtn.onclick=()=>{
    const typed=typeInput.value.trim(); if(!typed) return;
    attempts++;
    const correct = normalize(typed)===normalize(w.en);
    addTranscript('TÚ (escrito)', typed, 'user');
    feedback.classList.add('show');
    if(correct){
      writeCredit = attempts===1 ? 1 : 0.5;
      feedback.className='feedback show ok';
      feedback.textContent = attempts===1 ? '✓ ¡Perfecto! Bien escrito.' : '✓ ¡Bien! La escribiste bien en el segundo intento.';
      finalize();
    } else {
      feedback.className='feedback show retry';
      feedback.textContent = attempts>=2
        ? 'Se escribe "'+w.en+'". Quedó anotada para repasar.'
        : 'No es así todavía. Fíjate bien y prueba de nuevo, o toca "Ver respuesta" si prefieres seguir.';
      typeInput.value=''; typeInput.focus();
      mostrarNextControls();
      nextBtn.textContent='Ver respuesta y continuar';
      nextBtn.onclick=()=>{ writeCredit=0; finalize(); };
      if(attempts>=2){ writeCredit=0; finalize(); }
    }
  };
}
function learnedWordsHas(w){ return learnedWords.some(x=>normalize(x.en)===normalize(w.en)); }
function weakWordsHas(w){ return weakWords.some(x=>normalize(x.en)===normalize(w.en)); }

// ================= Autograbación: el alumno se graba, se escucha y regraba las veces que quiera =================
let recMediaRecorder=null, recChunks=[], recStream=null, recIsRecording=false;
recordBtn.addEventListener('click', async ()=>{
  if(recIsRecording){
    if(recMediaRecorder && recMediaRecorder.state!=='inactive') recMediaRecorder.stop();
    return;
  }
  try{
    if(!recStream){ recStream = await navigator.mediaDevices.getUserMedia({audio:true}); }
  }catch(e){
    alert('No se pudo acceder al micrófono para grabar tu voz.');
    return;
  }
  recChunks=[];
  recMediaRecorder = new MediaRecorder(recStream);
  recMediaRecorder.ondataavailable = (e)=>{ if(e.data && e.data.size>0) recChunks.push(e.data); };
  recMediaRecorder.onstop = ()=>{
    recIsRecording=false;
    recordBtn.textContent='🎙️ Grabar mi voz y escuchar';
    const blob = new Blob(recChunks, {type: recMediaRecorder.mimeType || 'audio/webm'});
    const url = URL.createObjectURL(blob);
    recordPlayback.src = url;
    recordPlayback.style.display='block';
    reRecordBtn.style.display='inline-flex';
    recordBtn.style.display='none';
  };
  recMediaRecorder.start();
  recIsRecording=true;
  recordBtn.textContent='⏹ Detener mi grabación';
});
reRecordBtn.addEventListener('click', ()=>{
  recordPlayback.style.display='none'; recordPlayback.removeAttribute('src');
  reRecordBtn.style.display='none';
  recordBtn.style.display='inline-flex'; recordBtn.textContent='🎙️ Grabar mi voz y escuchar';
});
function resetRecordingPanel(){
  recordBtn.style.display='none'; recordBtn.textContent='🎙️ Grabar mi voz y escuchar';
  recordPlayback.style.display='none'; recordPlayback.removeAttribute('src');
  reRecordBtn.style.display='none';
}

let micWatchdog = null;
function clearMicWatchdog(){ if(micWatchdog){ clearTimeout(micWatchdog); micWatchdog=null; } }
function releaseMicButton(){
  micBtn.classList.remove('listening'); micBtn.textContent='🎙 Hablar mi respuesta'; setMicStatus('on','Micrófono: activo');
  finishTalkingBtn.style.display='none';
  clearMicWatchdog();
}
function startListening(onResult, opts){
  opts = opts || {};
  if(!micSupported||!micGranted){ typeRow.style.display='flex'; typeInput.placeholder='Escribe lo que ibas a decir...'; typeInput.focus(); return; }
  // Desconectamos cualquier manejador de una llamada anterior ANTES de tocar nada más,
  // así un abort() de una sesión vieja no dispara callbacks viejos sobre el estado nuevo.
  recognition.onresult=null; recognition.onend=null; recognition.onerror=null;
  try{ recognition.abort(); }catch(e){}
  recognition.continuous = !!opts.longForm;
  let collected = [];
  let singleResultGiven = false;
  let started = false;
  // Asignamos los manejadores de ESTA llamada antes de intentar arrancar.
  recognition.onresult=(e)=>{
    if(opts.longForm){
      for(let i=e.resultIndex; i<e.results.length; i++){
        if(e.results[i].isFinal){ collected.push(e.results[i][0].transcript); }
      }
      return;
    }
    clearMicWatchdog();
    const result=e.results[0][0];
    const confidence=(typeof result.confidence==='number'&&result.confidence>0)?result.confidence:null;
    singleResultGiven = true;
    micBtn.classList.remove('listening'); micBtn.textContent='🎙 Hablar mi respuesta'; setMicStatus('on','Micrófono: activo');
    onResult({said:result.transcript, confidence});
  };
  recognition.onend=()=>{
    clearMicWatchdog();
    finishTalkingBtn.style.display='none';
    if(!opts.longForm){
      micBtn.classList.remove('listening'); micBtn.textContent='🎙 Hablar mi respuesta'; setMicStatus('on','Micrófono: activo');
      if(!singleResultGiven){
        // El reconocimiento terminó solo, sin detectar nada — no lo dejamos en silencio:
        // avisamos y dejamos abierta la opción de reintentar o escribir.
        feedback.classList.add('show','retry');
        feedback.textContent = 'No te escuché — puede pasar. Toca el micrófono de nuevo, o escribe tu respuesta.';
        typeRow.style.display='flex'; typeInput.placeholder='Escribe lo que ibas a decir...';
      }
      return;
    }
    micBtn.classList.remove('listening'); micBtn.textContent='🎙 Hablar mi respuesta'; setMicStatus('on','Micrófono: activo');
    const said = collected.join(' ').trim();
    onResult({said: said || '(no se detectó audio, prueba de nuevo)', confidence:null});
  };
  recognition.onerror=(e)=>{
    clearMicWatchdog();
    micBtn.classList.remove('listening'); micBtn.textContent='🎙 Hablar mi respuesta'; setMicStatus('on','Micrófono: activo');
    finishTalkingBtn.style.display='none';
    feedback.classList.add('show','retry');
    feedback.textContent=(e.error==='not-allowed'||e.error==='service-not-allowed')?'El navegador bloqueó el micrófono. Revisa permisos o escribe tu respuesta.':'No pude escucharte bien. Prueba de nuevo o escribe.';
    typeRow.style.display='flex'; typeInput.placeholder='Escribe lo que ibas a decir...';
  };
  // Recién ahora tocamos la interfaz y arrancamos de verdad.
  micBtn.classList.add('listening'); setMicStatus('listening','Micrófono: escuchando ahora');
  finishTalkingBtn.style.display='inline-flex';
  finishTalkingBtn.onclick = ()=>{ try{ recognition.stop(); }catch(e){} };
  if(opts.longForm){
    micBtn.textContent = '🎙 Escuchando... (toca "Terminé" cuando acabes)';
  } else {
    micBtn.textContent = '🎙 Escuchando... (o toca "Terminé")';
  }
  clearMicWatchdog();
  const watchdogMs = opts.longForm ? 45000 : 12000;
  micWatchdog = setTimeout(()=>{
    try{ recognition.abort(); }catch(e){}
    releaseMicButton();
    feedback.classList.add('show','retry');
    feedback.textContent = 'No te escuché a tiempo (puede haber sido un problema de conexión). Prueba de nuevo, o escribe tu respuesta.';
    typeRow.style.display='flex'; typeInput.placeholder='Escribe lo que ibas a decir...';
  }, watchdogMs);
  function tryStart(attemptsLeft){
    try{
      recognition.start();
      started = true;
    }catch(e){
      if(attemptsLeft > 0){
        setTimeout(()=>tryStart(attemptsLeft-1), 300);
      } else {
        clearMicWatchdog();
        releaseMicButton();
        feedback.classList.add('show','retry');
        feedback.textContent = 'No pude activar el micrófono. Prueba de nuevo, o escribe tu respuesta.';
        typeRow.style.display='flex'; typeInput.placeholder='Escribe lo que ibas a decir...';
      }
    }
  }
  tryStart(2);
}

// ================= Evaluación final =================
function startEvaluation(){
  hideStrayUI();
  speakerLabel.textContent='DIÁLOGO FINAL'; modeChip.style.display='none'; crossTag.style.display='none';
  appControls.style.display='none'; userControls.style.display='none'; typeRow.style.display='none'; feedback.classList.remove('show');
  illusEl.textContent='💬';
  setSegs(lineEl, [{t:'¡Ya casi terminamos! Cerremos con un diálogo: te voy a preguntar por cada cosa que aprendiste hoy — la dices y la escribes, como en una charla real.',lang:'es'}]);
  hintEl.textContent='Para aprobar la lección necesitas al menos 92% correcto.';
  mostrarNextControls();
  nextBtn.textContent='Empezar el diálogo';
  nextBtn.onclick=()=>{
    nextBtn.textContent='Continuar →';
    wordQueue = learnedWords.slice(); wqIndex=0; evalMode=true;
    if(wordQueue.length===0){
      setSegs(lineEl, [{t:'Parece que todavía no completaste palabras hoy como para armar el diálogo. Vuelve al mapa de días y haz la lección completa desde el principio.',lang:'es'}]);
      hintEl.textContent='';
      mostrarNextControls();
      nextBtn.textContent='Entendido';
      nextBtn.onclick=()=>{ idx++; loadTurn(); };
      return;
    }
    runWordChallenge();
  };
}
function finishEvaluation(){
  const scorePct = computeScorePct().pct;
  completeDay(scorePct);
}
function showRetryGate(scorePct){
  hideStrayUI();
  appControls.style.display='none'; userControls.style.display='none'; typeRow.style.display='none'; nextControls.style.display='none'; feedback.classList.remove('show');
  crossTag.style.display='none';
  retryScreen.classList.add('show');
  retryScoreText.textContent = 'Tu puntaje de hoy: '+scorePct+'% (mínimo para pasar: 92%)';
  retryWeakItems.innerHTML='';
  weakWords.forEach(w=>{ const div=document.createElement('div'); div.className='item'; div.innerHTML='<b>'+w.en+'</b> <span>— '+w.es+'</span>'; retryWeakItems.appendChild(div); });
  retryBtn.onclick=()=>{
    retryScreen.classList.remove('show');
    wordQueue = weakWords.slice();
    weakWords = [];
    wqIndex=0; evalMode=true;
    runWordChallenge();
  };
}
function completeDay(scorePct){
  const s = computeScorePct();
  appControls.style.display='none'; userControls.style.display='none'; typeRow.style.display='none'; nextControls.style.display='none'; feedback.classList.remove('show');
  doneScreen.classList.add('show');
  doneCount.textContent = s.total;
  scoreText.innerHTML = 'Tu resultado de hoy: <b>'+scorePct+'%</b><br>🗣️ Pronunciación: '+s.pronPct+'% &nbsp;·&nbsp; ✏️ Escritura: '+s.writePct+'%';
  if(weakWords.length>0){
    weakList.style.display='block'; weakItems.innerHTML='';
    weakWords.forEach(w=>{ const div=document.createElement('div'); div.className='item'; div.innerHTML='<b>'+w.en+'</b> <span>— '+w.es+'</span>'; weakItems.appendChild(div); });
  } else { weakList.style.display='none'; }

  try{
    if(currentDay && typeof currentDay.day !== 'undefined'){
      saveDayResult(currentDay.day, {
        completed:true, date:new Date().toISOString(),
        learnedWords: learnedWords, weakWords: weakWords,
        score:{points:s.points, totalPoints:s.totalPoints, total:s.total, pct:scorePct, pronPct:s.pronPct, writePct:s.writePct}
      });
      clearMidProgress(currentDay.day);
    }
  }catch(e){
    // Guardar el resultado no debe poder tumbar la pantalla de cierre, que ya se mostró arriba.
  }
}

// ================= Modo repaso (dentro de la misma sesión) =================
function enterReview(i){
  if(reviewing) return;
  reviewing=true;
  resumeSnapshot={idx, wqIndex, wordQueue:wordQueue.slice(), evalMode};
  reviewBanner.classList.add('show');
  const turn=script[i];
  if(turn.kind==='task' && !turn.segs){
    if(turn.isMilestoneTask){
      turn.segs = [{t:'Desafío de hito: arma 2 o 3 frases propias combinando varias palabras que aprendiste en este mes completo (no solo de hoy), como si le estuvieras contando a alguien todo lo que sabes ahora. Primero hablada, después escrita.',lang:'es'}];
      turn.emoji = '🏆';
    } else {
      turn.segs = [{t:'Ahora te toca a ti: mira el ejemplo de abajo, y después arma tu propia frase combinando al menos tres palabras diferentes de las que aprendiste hoy — no tienen que ser las mismas del ejemplo. Primero hablada, después escrita.',lang:'es'}];
      turn.emoji = '🎯';
    }
  }
  if(turn.kind==='end' && !turn.segs){
    turn.segs = [{t:'Este es el cierre de la lección: acá se hace la evaluación final con todo el vocabulario del día. No hay nada más para repasar en este punto — elige otro segmento de la barra.',lang:'es'}];
    turn.emoji = '🏁';
  }
  speakerLabel.textContent='REPASO'; modeChip.style.display='none';
  illusEl.textContent=turn.emoji||'💬';
  appControls.style.display='flex'; playBtn.style.display=''; userControls.style.display='none'; typeRow.style.display='none'; nextControls.style.display='none'; feedback.classList.remove('show');
  setSegs(lineEl, turn.segs);
  hintEl.textContent = turn.kind==='single' ? ('Palabra: '+turn.newWord.en+' — '+turn.newWord.es) : (turn.kind==='sequence' ? ('Palabras: '+turn.words.map(w=>w.en).join(', ')) : '');
  playBtn.onclick=async ()=>{ await speakSegs(turn.segs, lineEl); };
  replayBtn.onclick=async ()=>{ await speakSegs(turn.segs, lineEl); };
}
backToLessonBtn.addEventListener('click', ()=>{
  reviewing=false; reviewBanner.classList.remove('show');
  if(resumeSnapshot){
    idx=resumeSnapshot.idx; wqIndex=resumeSnapshot.wqIndex; wordQueue=resumeSnapshot.wordQueue; evalMode=resumeSnapshot.evalMode;
    if(script[idx] && script[idx].kind!=='end' && wordQueue.length){ runWordChallenge(); } else { loadTurn(); }
  } else { loadTurn(); }
});

// ================= Arranque =================
ensureVoices();
if(typeof iniciarApp === 'function'){ iniciarApp(); } else { showHome(); }
