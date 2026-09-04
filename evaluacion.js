const evaluacion = {
  vocabulario: [
    {nivel:"basico", en:"Hello", opciones:["Adiós", "Hola", "Gracias", "Por favor"], correcta:1},
    {nivel:"basico", en:"Thank you", opciones:["Por favor", "De nada", "Gracias", "Hola"], correcta:2},
    {nivel:"basico", en:"Wife", opciones:["Esposo", "Esposa", "Hijo", "Hermano"], correcta:1},
    {nivel:"basico", en:"I understand", opciones:["No entiendo", "Entiendo", "No sé", "Está bien"], correcta:1},
    {nivel:"intermedio", en:"Warranty", opciones:["Reparación", "Reemplazo", "Garantía", "Talla"], correcta:2},
    {nivel:"intermedio", en:"Fitting room", opciones:["Sala de espera", "Probador", "Vestidor de gimnasio", "Armario"], correcta:1},
    {nivel:"intermedio", en:"Too big", opciones:["Muy chico", "Perfecto", "Muy grande", "Regular"], correcta:2},
    {nivel:"intermedio", en:"Covered", opciones:["Descubierto", "Cubierto", "Tapado con tela", "Roto"], correcta:1},
    {nivel:"avanzado", en:"Cover letter", opciones:["Carta de recomendación", "Currículum", "Carta de presentación", "Contrato"], correcta:2},
    {nivel:"avanzado", en:"Interest rate", opciones:["Tasa de interés", "Cuenta de ahorros", "Préstamo", "Puntaje crediticio"], correcta:0},
    {nivel:"avanzado", en:"Landlord", opciones:["Inquilino", "Propietario", "Agente inmobiliario", "Vecino"], correcta:1},
    {nivel:"avanzado", en:"Scholarship", opciones:["Matrícula", "Título universitario", "Beca", "Curso en línea"], correcta:2}
  ],

  gramatica: [
    {nivel:"basico", frase:"I ___ help with this.", opciones:["need", "needs", "needing", "to need"], correcta:0},
    {nivel:"basico", frase:"My name ___ Carlos.", opciones:["am", "are", "is", "be"], correcta:2},
    {nivel:"basico", frase:"I am ___ Colombia.", opciones:["from", "in", "at", "of"], correcta:0},
    {nivel:"basico", frase:"___ practice! Practice makes perfect.", opciones:["Let's", "We", "Lets's", "Letting"], correcta:0},
    {nivel:"intermedio", frase:"This is ___ by the warranty.", opciones:["cover", "covers", "covered", "covering"], correcta:2},
    {nivel:"intermedio", frase:"We ___ credit cards and cash.", opciones:["accept", "accepts", "accepting", "accepted"], correcta:0},
    {nivel:"intermedio", frase:"This is too ___ — I need a smaller size.", opciones:["small", "big", "medium", "perfect"], correcta:1},
    {nivel:"intermedio", frase:"I ___ this plan — it looks good.", opciones:["approve", "approves", "approving", "approved"], correcta:0},
    {nivel:"avanzado", frase:"I have ___ in customer service.", opciones:["experience", "experienced", "experiencing", "experiences"], correcta:0},
    {nivel:"avanzado", frase:"I am responsible ___ this project.", opciones:["of", "for", "with", "to"], correcta:1},
    {nivel:"avanzado", frase:"I am looking to ___ an apartment downtown.", opciones:["rent", "rents", "renting", "rented"], correcta:0},
    {nivel:"avanzado", frase:"I trust my team ___ finish this on time.", opciones:["finish", "finishing", "to", "for"], correcta:2}
  ],

  lectura: {
    basico: {texto:"My name is Ana. I am from Medellín. I work at a small store downtown. I sell clothes and shoes. My husband works at a bank. We have two children, a son and a daughter. In the morning, I say good morning to my customers. In the afternoon, I say good afternoon. I am always happy to help. Thank you for reading!", preguntas:[
      {pregunta:"Where is Ana from?", opciones:["Bogotá", "Medellín", "Cali"], correcta:1},
      {pregunta:"What does Ana sell?", opciones:["Food", "Clothes and shoes", "Books"], correcta:1},
      {pregunta:"Where does her husband work?", opciones:["A store", "A bank", "A school"], correcta:1},
      {pregunta:"How many children do they have?", opciones:["One", "Two", "Three"], correcta:1}
    ]},
    intermedio: {texto:"Last week, I went shopping for a new jacket. I tried it on in the fitting room, but it was too big. The sales assistant helped me find a medium size instead. It fit perfectly! I paid with my credit card, and I asked about the warranty. The store said the jacket was covered for one year. If anything is not covered, I can bring it back for a repair or a replacement.", preguntas:[
      {pregunta:"What did the person try to buy?", opciones:["Pants", "A jacket", "A dress"], correcta:1},
      {pregunta:"Why didn't the first size work?", opciones:["Too small", "Wrong color", "Too big"], correcta:2},
      {pregunta:"How did they pay?", opciones:["Cash", "Credit card", "Check"], correcta:1},
      {pregunta:"How long is the warranty?", opciones:["Six months", "One year", "Two years"], correcta:1}
    ]},
    avanzado: {texto:"Maria recently applied for a new job. She sent her resume and a cover letter, highlighting her strengths in public speaking and customer service. During the interview, she explained her salary expectations and her experience managing a team. The interviewer was impressed by her confidence. A week later, Maria received a job offer. She also needed to rent a new apartment closer to the office, so she contacted a landlord about a one-bedroom unit downtown.", preguntas:[
      {pregunta:"What did Maria send to apply?", opciones:["Only her resume", "A resume and a cover letter", "A video"], correcta:1},
      {pregunta:"What skills did she highlight?", opciones:["Public speaking and customer service", "Accounting", "Cooking"], correcta:0},
      {pregunta:"What did the interviewer think of her?", opciones:["Unprepared", "Confident", "Late"], correcta:1},
      {pregunta:"What did Maria need after getting the job?", opciones:["A new car", "A new apartment", "A new phone"], correcta:1}
    ]}
  },

  escritura: {
    basico: {consigna:"Escribí 3-4 oraciones presentándote: tu nombre, de dónde sos, y qué trabajo hacés.", palabrasClave:["name", "from", "work"], minPalabrasClave:2, minPalabras:15},
    intermedio: {consigna:"Escribí 3-4 oraciones sobre una compra reciente que hiciste (ropa, algo con garantía, etc).", palabrasClave:["warranty", "size", "covered", "fitting room", "credit card"], minPalabrasClave:2, minPalabras:20},
    avanzado: {consigna:"Escribí un párrafo corto (4-5 oraciones) describiendo tu experiencia laboral y tus planes futuros.", palabrasClave:["experience", "responsible", "rent", "invest", "confident"], minPalabrasClave:2, minPalabras:30}
  }
};

// ================= Controlador de la Evaluación de 4 Fases =================
(function(){
  function el(id){ return document.getElementById(id); }
  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  let modo = 'inicial'; // 'inicial' o 'final'
  let fase = 1;
  let vocabItems=[], vocabIdx=0, vocabCorrect=0;
  let gramItems=[], gramIdx=0, gramCorrect=0;
  let nivelCalibrado='basico';
  let lecturaPreguntaIdx=0, lecturaCorrect=0;
  let escrituraAprobada=false;

  function iniciarEvaluacion(modoElegido){
    modo = modoElegido || 'inicial';
    fase = 1;
    vocabItems = shuffle(evaluacion.vocabulario);
    vocabIdx=0; vocabCorrect=0;
    gramItems = shuffle(evaluacion.gramatica);
    gramIdx=0; gramCorrect=0;
    lecturaCorrect=0; lecturaPreguntaIdx=0;
    escrituraAprobada=false;

    el('home').style.display='none';
    el('evaluacionModulo').style.display='block';
    el('evTituloModo').textContent = modo==='final' ? 'Examen final del curso' : 'Evaluación de nivel inicial';
    mostrarFaseIntro();
  }

  function mostrarFaseIntro(){
    const nombres = {1:'Vocabulario', 2:'Gramática', 3:'Comprensión de lectura', 4:'Escritura guiada'};
    const iconos = {1:'📚', 2:'🧩', 3:'📖', 4:'✍️'};
    el('evFaseBox').style.display='none';
    el('evIntroBox').style.display='block';
    el('evIntroTitulo').textContent = iconos[fase]+' Fase '+fase+' de 4 — '+nombres[fase];
    const descripciones = {
      1: 'Vas a ver 12 palabras en inglés. Elegí su significado correcto en español.',
      2: 'Vas a ver 12 oraciones incompletas. Elegí la palabra correcta para completarlas.',
      3: 'Vas a leer un texto corto en inglés, y responder preguntas sobre lo que leíste.',
      4: 'Vas a escribir un texto corto en inglés, siguiendo una consigna — esta fase se revisa distinto a las demás.'
    };
    el('evIntroDesc').textContent = descripciones[fase];
    el('evIntroBtn').onclick = ()=>{
      el('evIntroBox').style.display='none';
      el('evFaseBox').style.display='block';
      if(fase===1) renderVocabPregunta();
      else if(fase===2) renderGramaticaPregunta();
      else if(fase===3) renderLecturaIntro();
      else if(fase===4) renderEscritura();
    };
  }

  function renderProgreso(actual, total){
    el('evFaseProgreso').textContent = 'Fase '+fase+' de 4 · pregunta '+actual+' de '+total;
  }

  // ---------- FASE 1: Vocabulario ----------
  function renderVocabPregunta(){
    if(vocabIdx>=vocabItems.length){ fase=2; mostrarFaseIntro(); return; }
    const item = vocabItems[vocabIdx];
    renderProgreso(vocabIdx+1, vocabItems.length);
    el('evPregunta').innerHTML = '¿Qué significa <b>"'+item.en+'"</b>?';
    const opcBox = el('evOpciones');
    opcBox.innerHTML='';
    item.opciones.forEach((op,i)=>{
      const btn = document.createElement('button');
      btn.className='ghost'; btn.style.cssText='display:block; width:100%; text-align:left; margin-bottom:8px;';
      btn.textContent = op;
      btn.onclick = ()=>{
        if(i===item.correcta) vocabCorrect++;
        opcBox.querySelectorAll('button').forEach(b=>b.disabled=true);
        btn.style.borderColor = i===item.correcta ? 'var(--ok)' : 'var(--warn)';
        setTimeout(()=>{ vocabIdx++; renderVocabPregunta(); }, 500);
      };
      opcBox.appendChild(btn);
    });
  }

  // ---------- FASE 2: Gramática ----------
  function renderGramaticaPregunta(){
    if(gramIdx>=gramItems.length){
      // Calibrar nivel según score combinado de fases 1 y 2
      const total = vocabItems.length + gramItems.length;
      const correctas = vocabCorrect + gramCorrect;
      const ratio = correctas/total;
      nivelCalibrado = ratio >= 0.75 ? 'avanzado' : ratio >= 0.4 ? 'intermedio' : 'basico';
      fase=3; mostrarFaseIntro(); return;
    }
    const item = gramItems[gramIdx];
    renderProgreso(gramIdx+1, gramItems.length);
    el('evPregunta').innerHTML = 'Completá: <br><span style="font-size:19px; color:var(--en);">'+item.frase.replace('___','<b style="color:var(--warn);">___</b>')+'</span>';
    const opcBox = el('evOpciones');
    opcBox.innerHTML='';
    item.opciones.forEach((op,i)=>{
      const btn = document.createElement('button');
      btn.className='ghost'; btn.style.cssText='display:block; width:100%; text-align:left; margin-bottom:8px;';
      btn.textContent = op;
      btn.onclick = ()=>{
        if(i===item.correcta) gramCorrect++;
        opcBox.querySelectorAll('button').forEach(b=>b.disabled=true);
        btn.style.borderColor = i===item.correcta ? 'var(--ok)' : 'var(--warn)';
        setTimeout(()=>{ gramIdx++; renderGramaticaPregunta(); }, 500);
      };
      opcBox.appendChild(btn);
    });
  }

  // ---------- FASE 3: Comprensión de lectura ----------
  function renderLecturaIntro(){
    const datos = evaluacion.lectura[nivelCalibrado];
    el('evPregunta').innerHTML = '<div class="dn-review-prompt" style="text-align:left; line-height:1.6;">'+datos.texto+'</div>';
    el('evOpciones').innerHTML='';
    const cont = document.createElement('button');
    cont.className='primary'; cont.style.marginTop='14px';
    cont.textContent='Ya leí el texto, empezar las preguntas →';
    cont.onclick = ()=>{ lecturaPreguntaIdx=0; renderLecturaPregunta(); };
    el('evOpciones').appendChild(cont);
    el('evFaseProgreso').textContent = 'Fase 3 de 4 · Comprensión de lectura ('+nivelCalibrado+')';
  }
  function renderLecturaPregunta(){
    const datos = evaluacion.lectura[nivelCalibrado];
    if(lecturaPreguntaIdx>=datos.preguntas.length){ fase=4; mostrarFaseIntro(); return; }
    const p = datos.preguntas[lecturaPreguntaIdx];
    renderProgreso(lecturaPreguntaIdx+1, datos.preguntas.length);
    el('evPregunta').innerHTML = p.pregunta;
    const opcBox = el('evOpciones');
    opcBox.innerHTML='';
    p.opciones.forEach((op,i)=>{
      const btn = document.createElement('button');
      btn.className='ghost'; btn.style.cssText='display:block; width:100%; text-align:left; margin-bottom:8px;';
      btn.textContent = op;
      btn.onclick = ()=>{
        if(i===p.correcta) lecturaCorrect++;
        opcBox.querySelectorAll('button').forEach(b=>b.disabled=true);
        btn.style.borderColor = i===p.correcta ? 'var(--ok)' : 'var(--warn)';
        setTimeout(()=>{ lecturaPreguntaIdx++; renderLecturaPregunta(); }, 500);
      };
      opcBox.appendChild(btn);
    });
  }

  // ---------- FASE 4: Escritura guiada ----------
  function renderEscritura(){
    const datos = evaluacion.escritura[nivelCalibrado];
    el('evFaseProgreso').textContent = 'Fase 4 de 4 · Escritura guiada ('+nivelCalibrado+')';
    el('evPregunta').innerHTML = '<b>Consigna:</b> '+datos.consigna+'<br><span style="font-size:13px; color:var(--muted);">Intentá usar al menos '+datos.minPalabrasClave+' de estas palabras: '+datos.palabrasClave.join(', ')+'. Mínimo '+datos.minPalabras+' palabras en total.</span>';
    const opcBox = el('evOpciones');
    opcBox.innerHTML='';
    const textarea = document.createElement('textarea');
    textarea.id='evEscrituraInput';
    textarea.style.cssText='width:100%; min-height:120px; padding:12px; border-radius:10px; border:1px solid var(--border); background:var(--bg-panel); color:var(--text); font-family:inherit; font-size:15px;';
    textarea.placeholder='Escribí acá tu respuesta en inglés...';
    opcBox.appendChild(textarea);
    const sendBtn = document.createElement('button');
    sendBtn.className='primary'; sendBtn.style.marginTop='12px';
    sendBtn.textContent='Enviar mi respuesta';
    sendBtn.onclick = ()=>{
      const texto = textarea.value.trim();
      const palabras = texto.split(/\s+/).filter(Boolean);
      const clavesUsadas = datos.palabrasClave.filter(k => texto.toLowerCase().includes(k.toLowerCase()));
      const cumpleLargo = palabras.length >= datos.minPalabras;
      const cumpleClaves = clavesUsadas.length >= datos.minPalabrasClave;
      escrituraAprobada = cumpleLargo && cumpleClaves;
      const fb = document.createElement('div');
      fb.style.cssText='margin-top:10px; padding:10px; border-radius:8px; font-size:13px;';
      if(escrituraAprobada){
        fb.style.background='rgba(90,200,140,.12)'; fb.style.color='var(--ok)';
        fb.textContent = '✓ Bien — usaste '+palabras.length+' palabras, y '+clavesUsadas.length+' palabras clave ('+clavesUsadas.join(', ')+').';
      } else {
        fb.style.background='rgba(230,160,60,.12)'; fb.style.color='var(--warn)';
        fb.textContent = 'Casi — escribiste '+palabras.length+' palabras (mínimo '+datos.minPalabras+'), y usaste '+clavesUsadas.length+' palabras clave (mínimo '+datos.minPalabrasClave+'). Igual seguimos.';
      }
      opcBox.appendChild(fb);
      sendBtn.style.display='none';
      const seguirBtn = document.createElement('button');
      seguirBtn.className='primary'; seguirBtn.style.marginTop='10px';
      seguirBtn.textContent='Ver mi resultado final →';
      seguirBtn.onclick = mostrarResultadoFinal;
      opcBox.appendChild(seguirBtn);
    };
    opcBox.appendChild(sendBtn);
  }

  // ---------- Resultado final ----------
  function mostrarResultadoFinal(){
    el('evFaseBox').style.display='none';
    el('evResultBox').style.display='block';

    const vocabPct = Math.round((vocabCorrect/vocabItems.length)*100);
    const gramPct = Math.round((gramCorrect/gramItems.length)*100);
    const datos = evaluacion.lectura[nivelCalibrado];
    const lecturaPct = Math.round((lecturaCorrect/datos.preguntas.length)*100);
    const escrituraPct = escrituraAprobada ? 100 : 50;
    const promedioFinal = Math.round((vocabPct+gramPct+lecturaPct+escrituraPct)/4);

    el('evResumenTabla').innerHTML =
      '<div class="ev-resumen-fila"><span>📚 Vocabulario</span><b>'+vocabCorrect+'/'+vocabItems.length+' ('+vocabPct+'%)</b></div>'+
      '<div class="ev-resumen-fila"><span>🧩 Gramática</span><b>'+gramCorrect+'/'+gramItems.length+' ('+gramPct+'%)</b></div>'+
      '<div class="ev-resumen-fila"><span>📖 Lectura ('+nivelCalibrado+')</span><b>'+lecturaCorrect+'/'+datos.preguntas.length+' ('+lecturaPct+'%)</b></div>'+
      '<div class="ev-resumen-fila"><span>✍️ Escritura ('+nivelCalibrado+')</span><b>'+(escrituraAprobada?'Aprobada':'A seguir practicando')+'</b></div>'+
      '<div class="ev-resumen-fila ev-resumen-total"><span>Promedio general</span><b>'+promedioFinal+'%</b></div>';

    if(modo==='final'){
      el('evResultTexto').textContent = promedioFinal>=70
        ? '¡Felicitaciones! Con un '+promedioFinal+'% completaste el curso con un nivel sólido. Este es tu resultado de cierre.'
        : 'Terminaste el curso con un '+promedioFinal+'%. Te recomendamos repasar las unidades donde tuviste más dificultad antes de considerarlo cerrado del todo.';
      el('evGoBtn').textContent = 'Volver al inicio';
      el('evGoBtn').onclick = ()=>{ el('evaluacionModulo').style.display='none'; el('home').style.display='block'; };
      el('evSkipBtn').style.display='none';
    } else {
      let recommendedDay = nivelCalibrado==='avanzado' ? Math.round(curriculum.length*0.7) : nivelCalibrado==='intermedio' ? Math.round(curriculum.length*0.35) : 1;
      recommendedDay = Math.max(1, Math.min(curriculum.length, recommendedDay));
      el('evResultTexto').textContent = 'Con un '+promedioFinal+'% general, tu nivel calibrado es "'+nivelCalibrado+'". Te recomendamos empezar en el Día '+recommendedDay+' — los días anteriores quedan desbloqueados igual, por si querés repasarlos primero.';
      el('evGoBtn').textContent = 'Empezar en el Día '+recommendedDay;
      el('evGoBtn').onclick = ()=>{
        saveMeta({placementDone:true, unlockedThrough:recommendedDay});
        el('evaluacionModulo').style.display='none';
        startDay(recommendedDay);
      };
      el('evSkipBtn').style.display='inline-flex';
      el('evSkipBtn').onclick = ()=>{
        saveMeta({placementDone:true, unlockedThrough:recommendedDay});
        el('evaluacionModulo').style.display='none';
        startDay(1);
      };
    }
  }

  window.iniciarEvaluacion = iniciarEvaluacion;

  window.addEventListener('DOMContentLoaded', ()=>{
    el('evCerrarBtn').onclick = ()=>{ el('evaluacionModulo').style.display='none'; el('home').style.display='block'; };
  });
})();
