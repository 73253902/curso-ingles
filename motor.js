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
function saveProgress(all){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); }catch(e){} }
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

  document.getElementById('placementCard').style.display = admin ? 'none' : 'flex';
  if(meta.placementDone){
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
      fnBtn.title='Repasá las vocales y las combinaciones básicas antes de arrancar';
      fnBtn.onclick = ()=>mostrarFoneticaBasico(true);
      block.appendChild(fnBtn);
    }
    if(String(unitKey)==='15' && typeof iniciarEvaluacion==='function'){
      const examBtn = document.createElement('button');
      examBtn.className='primary'; examBtn.style.cssText='width:100%; margin:10px 0 4px;';
      examBtn.textContent='🏆 Examen final del curso';
      examBtn.title='La misma evaluación de 4 fases, con nivel de cierre — certificá tu progreso';
      examBtn.onclick = ()=>iniciarEvaluacion('final');
      block.appendChild(examBtn);
    }
    const grid = document.createElement('div'); grid.className='day-grid';
    days.forEach(d=>{
      const card=document.createElement('div');
      const isDone = progress[d.day] && progress[d.day].completed;
      const unlockedByPlacement = d.day <= (meta.unlockedThrough||1);
      const isLocked = !admin && d.day>1 && !unlockedByPlacement && !(progress[d.day-1] && progress[d.day-1].completed) && !isDone;
      card.className='day-card '+(isDone?'done':isLocked?'locked':'available');
      card.title = d.theme;
      card.innerHTML = '<div class="n">Día '+d.day+'</div><div class="st">'+(isDone?'✅':isLocked?'🔒':'▶️')+'</div><div class="dt">'+d.theme.split('/')[0].trim()+'</div>';
      if(!isLocked){ card.addEventListener('click', ()=>startDay(d.day)); }
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
    el.textContent='¿Seguro? Tocá de nuevo para confirmar';
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
const contrastIntro = [{t:'Fijate estas dos frases. Suenan parecido, pero no son lo mismo. Escuchalas, repetilas y escribilas — con el tiempo, la diferencia se te va a hacer natural sola, sin que nadie te la explique.',lang:'es'}];
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
const unitDialogueReinforcement = {
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
    {speaker:'alumno', en:'I have the ticket for the platform — check the schedule for any delay, the departure, and the arrival time.', es:'Tengo el boleto para el andén — revisá el horario por si hay algún retraso, la salida, y la hora de llegada.', pron:'ái jav de tíket for de plátform — chek de squédiul for éni diléi, de dipárcher, and de aráival táim.'},
    {speaker:'maestro', en:'I have the document — here\'s the shipping guide, the commercial invoice, the packing list, and our customs broker\'s contact.', es:'Tengo el documento — acá está la guía de envío, la factura comercial, la lista de empaque, y el contacto de nuestro agente aduanero.', pron:'ái jav de dákiument — jírs de shíping gáid, de camérshial ínvois, de páking list, and áur cástams bróuker\'s cántact.'},
    {speaker:'alumno', en:'Look for the landmark on Main Street, near the avenue, past the roundabout, over the bridge, in that district.', es:'Buscá el punto de referencia en la Calle Principal, cerca de la avenida, pasando la rotonda, cruzando el puente, en ese distrito.', pron:'luk for de lándmark on méin stríit, níar de áveniu, past de ráundabaut, óuver de brich, in dat dístrict.'},
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
    {speaker:'alumno', en:'Let me send the invite. Will you accept it, or would you rather decline it? I need to accept or to decline soon.', es:'Déjame enviar la invitación. ¿Vas a aceptarla, o preferís rechazarla? Necesito aceptar o rechazar pronto.', pron:'let mi send de inváit. uil iú acsépt it, or uud iú ráder disláin it? ái níid tu acsépt or tu disláin súun.'},
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
    {speaker:'maestro', en:'Welcome! Come in! Have a seat. This is our trading manager. Please contact us anytime.', es:'¡Bienvenido! ¡Pasá! Tomá asiento. Este es nuestro gerente de comercio. Por favor contactanos cuando quieras.', pron:'uélcam! cam in! jav a síit. dis is áur tréiding mánayer. plíis cántact as énitaim.', blanks:['seat','manager','contact']},
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
    {en:'"Welcome! Come in!" he tells the first customer. "I need help finding a gift," she says.', es:'"¡Bienvenido! ¡Pasá!", le dice al primer cliente. "Necesito ayuda para encontrar un regalo", dice ella.', pron:'uélcam! cam in! ji tels de ferst cástomer. ái níid jelp fáinding a gift, shi séis.'},
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
    {en:'Stay consistent, brave dragon. See you in unit seven!', es:'Mantené la constancia, valiente dragón. ¡Nos vemos en la unidad siete!', pron:'stéi cansístent, bréiv drágon. síi iú in iúnit séven!'}
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
    {en:'Welcome, tiny human! Come in and have a seat on this giant mushroom.', es:'¡Bienvenido, humanito! Pasá y tomá asiento en este hongo gigante.', pron:'uélcam, táini jiúman! cam in and jav a síit on dis yáiant máshrum.'},
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
    {en:'I love dragon eggs, but I am allergic to flying broccoli — please confirm attendance!', es:'Me encantan los huevos de dragón, pero soy alérgico al brócoli volador — ¡confirmá tu asistencia!', pron:'ái lav drágon egs, bat ái am alérchic tu fláing brácoli — plíis confírm aténdans!'},
    {en:"Let's split the bill, take meeting minutes, and follow up before the castle disappears.", es:'Dividamos la cuenta, tomemos la minuta, y hagamos seguimiento antes de que el castillo desaparezca.', pron:"lets split de bil, téik míiting mínits, and fálou ap bifór de cásol disapírs."},
    {en:"The dragon's secret recipe needs boiling lava and a magic oven — prepare the presentation slides too!", es:'La receta secreta del dragón necesita lava hirviendo y un horno mágico — ¡preparemos también las diapositivas de la presentación!', pron:"de drágons sícret résipi níids bóiling láva and a máyic áven — pripér de presentéishon sláids tú!"},
    {en:"Camera on, mute your roar, and let's screen share the treasure map on our video call!", es:'Cámara encendida, silenciá tu rugido, ¡y compartamos pantalla con el mapa del tesoro en la videollamada!', pron:"cámera on, miút iór rór, and lets scríin shér de tréshur map on áur vídio col!"},
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
    {en:'Swipe the card, or pay cash only — the transaction ID is written in the stars.', es:'Deslizá la tarjeta, o pagá solo en efectivo — el número de transacción está escrito en las estrellas.', pron:'suáip de card, or péi cash óunli — de transácshon ái díi is ríten in de stars.'},
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
const storyIntro = [{t:'Ahora contemos todo lo de hoy como una pequeña historia, no palabras sueltas. Escuchá cada frase, repetila, y escribila — así ves el idioma funcionando de verdad, en contexto.',lang:'es'}];
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
  scr.push({ kind:'end' });
  return scr;
}

function startDay(dayNum){
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
    setMicStatus('off','Micrófono: sin permiso (usá texto)'); setTimeout(()=>{gate.classList.remove('show'); enterDayContent();},1800);
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
if(SR){micSupported=true;recognition=new SR();recognition.lang='es-CO';recognition.interimResults=false;recognition.maxAlternatives=1;}
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
      turn.segs = [{t:'Desafío de hito: armá 2 o 3 frases propias combinando varias palabras que aprendiste en este mes completo (no solo de hoy), como si le estuvieras contando a alguien todo lo que sabes ahora. Primero hablada, después escrita.',lang:'es'}];
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
    songPlayerLabel.textContent = turn.isJingle ? '🎶 Escuchá el jingle real, cantado — seguí la letra' : '🎶 Escuchá la historia real, cantada — seguí la letra';
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
    micBtn.onclick=()=>startListening(res=>{ addTranscript('VOS', res.said, 'user'); nextControls.style.display='flex'; userControls.style.display='none'; });
    skipBtn.onclick=()=>{typeRow.style.display='flex'; typeInput.focus();};
    sendBtn.onclick=()=>{ if(!typeInput.value.trim())return; addTranscript('VOS', typeInput.value.trim(), 'user'); typeInput.value=''; typeRow.style.display='none'; nextControls.style.display='flex'; };
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
      addTranscript('VOS (hablado)', res.said, 'user');
      spokenDone=true;
      userControls.style.display='none';
      typeRow.style.display='flex'; typeInput.placeholder='Ahora escribe esa misma frase...'; typeInput.focus();
      feedback.classList.add('show','ok'); feedback.textContent='¡Buenísimo! Ahora escribila.';
    });
    skipBtn.onclick=()=>{typeRow.style.display='flex'; typeInput.placeholder='Escribí tu frase acá...'; typeInput.focus();};
    sendBtn.onclick=()=>{
      if(!typeInput.value.trim())return;
      addTranscript('VOS (escrito)', typeInput.value.trim(), 'user');
      typeInput.value=''; typeRow.style.display='none';
      feedback.classList.add('show','ok'); feedback.textContent='✓ Excelente. Esto es usar el idioma de verdad, no solo repetirlo.';
      nextControls.style.display='flex';
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
  hintEl.textContent='Ejercicio '+(i+1)+' de '+items.length+' — Escribila en forma '+item.askType+'.';
  typeRow.style.display='flex'; typeInput.value=''; typeInput.placeholder='Escribí la frase transformada...'; typeInput.focus();
  sendBtn.onclick=()=>{
    const typed=typeInput.value.trim(); if(!typed) return;
    const correct = normalize(typed)===normalize(item.target);
    addTranscript('VOS (escrito)', typed, 'user');
    typeRow.style.display='none';
    feedback.classList.add('show', correct?'ok':'retry');
    feedback.textContent = correct ? '✓ ¡Perfecto!' : '✗ Se escribe: "'+item.target+'"';
    nextControls.style.display='flex';
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
  setSegs(lineEl,[{t:'Ahora completá lo que dice el '+(turn.mode==='maestro'?'Profesor':'Alumno')+', usando lo que recordás del diálogo.',lang:'es'}]);
  hintEl.textContent='Puedes escuchar la pronunciación de cualquier palabra que falta, las veces que quieras — no resta nada.';

  const fbPlayer=document.getElementById('fillBlankPlayer'), fbTitle=document.getElementById('fillBlankTitle'), transcript=document.getElementById('fillBlankTranscript'), current=document.getElementById('fillBlankCurrent');
  fbPlayer.style.display='block';
  fbTitle.textContent = turn.mode==='maestro' ? '✍️ Guion del Profesor — completá sus líneas, leyendo las del Alumno como contexto' : '✍️ Guion del Alumno — completá tus líneas, leyendo las del Profesor como contexto';
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
      nextControls.style.display='flex';
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
  crossTag.style.display='block'; crossTag.textContent='🎭 DIÁLOGO DE REPASO — MAESTRO Y ALUMNO';
  speakerLabel.textContent='REFUERZO DE LA UNIDAD'; modeChip.style.display='none';
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

  // ===== Paso 1: elegir con qué personaje practicás =====
  function showRoleSelector(){
    setSegs(lineEl,[{t:'Antes de arrancar esta unidad, repasemos toda la anterior con un diálogo entre el Profesor y el Alumno dragón.',lang:'es'}]);
    hintEl.textContent='Elegí con cuál de los dos personajes quieres practicar hablando. Vas a escuchar las líneas del otro personaje como contexto, y vas a grabar las tuyas.';
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
    setSegs(lineEl,[{t:'Estás practicando como '+meta.label+'. Escuchá cada línea — cuando sea tu turno, grabá tu respuesta antes de seguir.',lang:'es'}]);
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
      nextControls.style.display='flex';
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
    lineBox.innerHTML = '<div class="dlg-who">'+meta.label+(esMiTurno?' — repetí esta línea':'')+'</div><div class="dlg-en" id="'+lineBoxId+'"></div><div class="dlg-pron">'+line.pron+'</div><div class="dlg-es">'+line.es+'</div>';
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
    note.textContent='Grabá tu respuesta acá abajo, escuchala, y decidí: guardarla y seguir, o borrarla y grabar de nuevo.';
    turnBox.appendChild(note);

    const panel = document.createElement('div'); panel.className='record-panel';
    const dlgRecordBtn = document.createElement('button'); dlgRecordBtn.className='ghost'; dlgRecordBtn.textContent='🎙️ Ahora grabá tu respuesta';
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
        dlgRecordBtn.textContent='🎙️ Ahora grabá tu respuesta';
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
      dlgRecordBtn.style.display='inline-flex'; dlgRecordBtn.textContent='🎙️ Ahora grabá tu respuesta';
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
  hintEl.textContent='Encontrás acá las estructuras, palabras y frases que aprendiste en esta lección, todas juntas en una sola historia.';

  const readAlongPlayer=document.getElementById('readAlongPlayer'), readAlongBox=document.getElementById('readAlongBox');
  const playBtn2=document.getElementById('readAlongPlayBtn'), stopBtn2=document.getElementById('readAlongStopBtn');
  if(!readAlongPlayer || !readAlongBox || !playBtn2 || !stopBtn2){
    hintEl.textContent='⚠️ Falta actualizar index.html — subí la versión más reciente junto con motor.js.';
    nextControls.style.display='flex';
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

  nextControls.style.display='flex';
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
  typeRow.style.display='flex'; typeInput.value=''; typeInput.placeholder='Escribí en inglés lo que escuchaste...'; typeInput.focus();
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
    addTranscript('VOS (dictado)', said, 'user');
    const correct = normalize(said)===normalize(turn.dictEn);
    typeRow.style.display='none'; listenBtn.style.display='none';
    lineEl.innerHTML=''; setSegs(lineEl, [{t:turn.dictEn, lang:'en'}]);
    hintEl.textContent='Significa: "'+turn.dictEs+'"';
    feedback.classList.add('show', correct?'ok':'retry');
    feedback.textContent = correct ? '✓ ¡Perfecto, coincide exactamente!' : '✗ No coincidió del todo — mirá arriba cómo era realmente, y compará con lo que escribiste.';
    nextControls.style.display='flex';
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
    nextControls.style.display='flex'; feedback.classList.remove('show');
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
      addTranscript('VOS (hablado)', res.said, 'user');
      userControls.style.display='none';
      typeRow.style.display='flex'; typeInput.value=''; typeInput.placeholder='Ahora escribe tu respuesta...'; typeInput.focus();
    }, {longForm:true});
    skipBtn.onclick=()=>{ typeRow.style.display='flex'; typeInput.value=''; typeInput.placeholder='Escribí tu respuesta acá...'; typeInput.focus(); };
    sendBtn.onclick=()=>{
      const said=typeInput.value.trim();
      if(!said) return;
      addTranscript('VOS (escrito)', said, 'user');
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
      nextControls.style.display='flex';
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
    else if(score>=total*0.57) msg='Vas por buen camino. Repasá especialmente lo que falló, y repetí esta práctica cuando quieras.';
    else msg='Cada intento te acerca más — repasá con calma, y volvé a intentarlo las veces que necesites.';
    if(turn.day===168) msg += ' Este fue tu último repaso antes del examen de hito — ¡confiá en todo lo que aprendiste!';
    hintEl.textContent=msg+' Puedes repetir esta práctica cuantas veces quieras.';
    feedback.classList.remove('show');
    nextControls.style.display='flex';
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
    nextControls.style.display='flex';
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
  modeChip.style.display='inline-block'; modeChip.className='mode-chip speak'; modeChip.textContent='🎙 HABLAR';
  speakerLabel.textContent = evalMode ? 'DIÁLOGO' : (currentTurnIsStory ? 'FRASE DE LA HISTORIA' : 'PRACTICÁ ESTA PALABRA');
  hintEl.innerHTML='Significa: "'+w.es+'"' + (w.pron ? ' <span class="pron-hint">· se pronuncia: "'+w.pron+'"</span>' : '') + (currentTurnIsStory ? ' <span class="pron-hint">· tocá cualquier palabra para reescucharla sola</span>' : '');
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
  skipBtn.onclick=()=>{typeRow.style.display='flex'; typeInput.placeholder='Escribí lo que ibas a decir...'; typeInput.focus();};
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
    span.title='Tocá una palabra para escucharla sola. Tocá otra palabra después para escuchar toda la frase entre las dos.';
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
  addTranscript('VOS', res.said+pronTag, 'user');
  feedback.classList.add('show');
  userControls.style.display='none'; typeRow.style.display='none';
  const passedClear = ok && (res.confidence===null || res.confidence>=0.92);
  if(passedClear){
    const credit = spokenAttempts===1 ? 1 : 0.5;
    feedback.className='feedback show ok';
    feedback.textContent = spokenAttempts===1
      ? '✓ Muy bien, se entendió claro (92%+). Ahora escribila.'
      : '✓ Ahora sí se entendió claro. Ahora escribila.';
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
    feedback.className='feedback show retry'; feedback.textContent='Dijiste bien la palabra, pero sonó poco clara (necesitás 92%). Repetila una vez más.';
  } else {
    feedback.className='feedback show retry'; feedback.textContent='Casi — prueba repetirla de nuevo, tú puedes.';
  }
  userControls.style.display='flex';
}
function goToWriteStep(w, pronCredit){
  modeChip.className='mode-chip write'; modeChip.textContent='✏️ ESCRIBIR';
  speakerLabel.textContent = evalMode ? 'DIÁLOGO' : 'AHORA ESCRIBILA';
  illusEl.textContent='✏️'; replayWordBtn.style.display='none'; slowWordBtn.style.display='none'; resetRecordingPanel(); finishTalkingBtn.style.display='none'; document.getElementById('phraseSelectionPanel').style.display='none'; wordSelectStart=null;
  setSegs(lineEl, [{t:'¿Cómo se escribe "'+w.es+'" en inglés?',lang:'es'}]);
  hintEl.textContent='Pista: empieza con "'+w.en[0].toUpperCase()+'"';
  appControls.style.display='none'; userControls.style.display='none'; nextControls.style.display='none';
  feedback.classList.remove('show');
  typeRow.style.display='flex'; typeInput.placeholder='Escribí la palabra en inglés...'; typeInput.value=''; typeInput.focus();
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
    nextControls.style.display='flex';
    nextBtn.textContent = evalMode ? 'Continuar →' : 'Continuar →';
    nextBtn.onclick=()=>{ wqIndex++; runWordChallenge(); };
  }
  sendBtn.onclick=()=>{
    const typed=typeInput.value.trim(); if(!typed) return;
    attempts++;
    const correct = normalize(typed)===normalize(w.en);
    addTranscript('VOS (escrito)', typed, 'user');
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
        : 'No es así todavía. Fijate bien y probá de nuevo, o tocá "Ver respuesta" si preferís seguir.';
      typeInput.value=''; typeInput.focus();
      nextControls.style.display='flex';
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
  if(!micSupported||!micGranted){ typeRow.style.display='flex'; typeInput.placeholder='Escribí lo que ibas a decir...'; typeInput.focus(); return; }
  // Desconectamos cualquier manejador de una llamada anterior ANTES de tocar nada más,
  // así un abort() de una sesión vieja no dispara callbacks viejos sobre el estado nuevo.
  recognition.onresult=null; recognition.onend=null; recognition.onerror=null;
  try{ recognition.abort(); }catch(e){}
  recognition.continuous = !!opts.longForm;
  let collected = [];
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
    micBtn.classList.remove('listening'); micBtn.textContent='🎙 Hablar mi respuesta'; setMicStatus('on','Micrófono: activo');
    onResult({said:result.transcript, confidence});
  };
  recognition.onend=()=>{
    clearMicWatchdog();
    if(!opts.longForm){
      if(micBtn.classList.contains('listening')){
        micBtn.classList.remove('listening'); micBtn.textContent='🎙 Hablar mi respuesta'; setMicStatus('on','Micrófono: activo');
      }
      return;
    }
    micBtn.classList.remove('listening'); micBtn.textContent='🎙 Hablar mi respuesta'; setMicStatus('on','Micrófono: activo');
    finishTalkingBtn.style.display='none';
    const said = collected.join(' ').trim();
    onResult({said: said || '(no se detectó audio, probá de nuevo)', confidence:null});
  };
  recognition.onerror=(e)=>{
    clearMicWatchdog();
    micBtn.classList.remove('listening'); micBtn.textContent='🎙 Hablar mi respuesta'; setMicStatus('on','Micrófono: activo');
    finishTalkingBtn.style.display='none';
    feedback.classList.add('show','retry');
    feedback.textContent=(e.error==='not-allowed'||e.error==='service-not-allowed')?'El navegador bloqueó el micrófono. Revisa permisos o escribe tu respuesta.':'No pude escucharte bien. Probá de nuevo o escribí.';
    typeRow.style.display='flex'; typeInput.placeholder='Escribí lo que ibas a decir...';
  };
  // Recién ahora tocamos la interfaz y arrancamos de verdad.
  micBtn.classList.add('listening'); setMicStatus('listening','Micrófono: escuchando ahora');
  if(opts.longForm){
    micBtn.textContent = '🎙 Escuchando... (tocá "Terminé" cuando acabes)';
    finishTalkingBtn.style.display='inline-flex';
    finishTalkingBtn.onclick = ()=>{ try{ recognition.stop(); }catch(e){} };
  } else {
    micBtn.textContent = '🎙 Escuchando...';
  }
  clearMicWatchdog();
  const watchdogMs = opts.longForm ? 45000 : 12000;
  micWatchdog = setTimeout(()=>{
    try{ recognition.abort(); }catch(e){}
    releaseMicButton();
    feedback.classList.add('show','retry');
    feedback.textContent = 'No te escuché a tiempo (puede haber sido un problema de conexión). Prueba de nuevo, o escribe tu respuesta.';
    typeRow.style.display='flex'; typeInput.placeholder='Escribí lo que ibas a decir...';
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
        typeRow.style.display='flex'; typeInput.placeholder='Escribí lo que ibas a decir...';
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
  hintEl.textContent='Para aprobar la lección necesitás al menos 92% correcto.';
  nextControls.style.display='flex';
  nextBtn.textContent='Empezar el diálogo';
  nextBtn.onclick=()=>{
    nextBtn.textContent='Continuar →';
    wordQueue = learnedWords.slice(); wqIndex=0; evalMode=true;
    if(wordQueue.length===0){
      setSegs(lineEl, [{t:'Parece que todavía no completaste palabras hoy como para armar el diálogo. Volvé al mapa de días y hacé la lección completa desde el principio.',lang:'es'}]);
      hintEl.textContent='';
      nextControls.style.display='flex';
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
      turn.segs = [{t:'Desafío de hito: armá 2 o 3 frases propias combinando varias palabras que aprendiste en este mes completo (no solo de hoy), como si le estuvieras contando a alguien todo lo que sabes ahora. Primero hablada, después escrita.',lang:'es'}];
      turn.emoji = '🏆';
    } else {
      turn.segs = [{t:'Ahora te toca a ti: mira el ejemplo de abajo, y después arma tu propia frase combinando al menos tres palabras diferentes de las que aprendiste hoy — no tienen que ser las mismas del ejemplo. Primero hablada, después escrita.',lang:'es'}];
      turn.emoji = '🎯';
    }
  }
  if(turn.kind==='end' && !turn.segs){
    turn.segs = [{t:'Este es el cierre de la lección: acá se hace la evaluación final con todo el vocabulario del día. No hay nada más para repasar en este punto — elegí otro segmento de la barra.',lang:'es'}];
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
showHome();
