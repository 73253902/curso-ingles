// Módulo de Fonética — módulo independiente, 5 capítulos sobre pronunciación.
// Autónomo: no depende de motor.js salvo por speakHidden() y practicaAnswerMatches() ya definidas ahí.
// El Capítulo 1 está completo; los Capítulos 2-5 se agregan de la misma forma.
// Además define mostrarFoneticaBasico(), enganchada desde motor.js en startDay() para mostrar
// una pantalla básica de fonética antes del Día 1 (una sola vez, se puede saltear).

CAP1_JS = {
    id:1, nombre:"Capítulo 1", titulo:"Las vocales tienen varias formas", disponible:true,
    intro:"La pronunciación en inglés empieza con las vocales, no con el abecedario. Aunque muchas consonantes suenan parecido al español, las vocales cambian radicalmente y son la base de una buena pronunciación.",
    hacks: [
      {letra:"A", titulo:"Hack 1: La vocal \"A\" tiene varias formas", ejemplos:[{en:"late", pron:"leit", nota:"A suena como EI"}, {en:"want", pron:"uont", nota:"A suena como O"}, {en:"cat", pron:"cat", nota:"A suena como A española"}]},
      {letra:"E", titulo:"Hack 2: La \"E\" cambia mucho", ejemplos:[{en:"be", pron:"bi", nota:"E suena como I"}, {en:"bed", pron:"bed", nota:"E suena parecido al español"}, {en:"name", pron:"neim", nota:"la E final es muda"}]},
      {letra:"I", titulo:"Hack 3: La \"I\" también sorprende", ejemplos:[{en:"fine", pron:"fain", nota:"I suena como AI"}, {en:"bit", pron:"bet", nota:"I suena como E"}, {en:"police", pron:"polís", nota:"I suena como I española"}]},
      {letra:"O", titulo:"Hack 4: La \"O\" tiene varios trucos", ejemplos:[{en:"go", pron:"góu", nota:"O suena como OU"}, {en:"to", pron:"tu", nota:"O suena como U"}, {en:"lost", pron:"lost", nota:"O suena parecido al español"}, {en:"stop", pron:"estap", nota:"O suena como A"}]},
      {letra:"U", titulo:"Hack 5: La \"U\" es camaleónica", ejemplos:[{en:"use", pron:"iús", nota:"U suena como IU"}, {en:"true", pron:"tru", nota:"U suena como U española"}, {en:"up", pron:"ap", nota:"U suena como A"}, {en:"busy", pron:"bísi", nota:"U suena como I"}]}
    ],
    miniGuia: [{regla:"H suena como J", ejemplo:"hello → jélou"}, {regla:"J suena como una Y suave", ejemplo:"July → yulái"}, {regla:"No existe la letra Ñ en inglés", ejemplo:""}, {regla:"R se pronuncia sin tocar el paladar", ejemplo:"ready, no “redi”"}],
    conclusion:"Para pronunciar bien el inglés, las vocales son la clave. Estas reglas no cubren todas las excepciones, pero te permiten pronunciar correctamente miles de palabras desde el principio.",
    practicaEscrita: [
      {en:"late", pron:"leit"},
      {en:"want", pron:"uont"},
      {en:"cat", pron:"cat"},
      {en:"be", pron:"bi"},
      {en:"bed", pron:"bed"},
      {en:"name", pron:"neim"},
      {en:"fine", pron:"fain"},
      {en:"bit", pron:"bet"},
      {en:"police", pron:"polís"},
      {en:"go", pron:"góu"},
      {en:"to", pron:"tu"},
      {en:"lost", pron:"lost"},
      {en:"stop", pron:"estap"},
      {en:"use", pron:"iús"},
      {en:"true", pron:"tru"},
      {en:"up", pron:"ap"},
      {en:"busy", pron:"bísi"},
      {en:"hello", pron:"jélou"},
      {en:"July", pron:"yulái"},
      {en:"ready", pron:"rédi"}
    ]
  };

const BASICO_JS = {
  titulo:"Fonética esencial — antes de empezar",
  intro:"Antes de tu primer día, vamos a practicar las 5 vocales del inglés y sus sonidos principales. Podés escuchar cada palabra, y grabarte diciéndola, para arrancar el Día 1 con el oído ya entrenado. Podés saltear esto y volver después, pero te va a servir desde la primera palabra.",
  grupos: [
    {titulo:"Vocal A", ejemplos:[{en:"late", pron:"leit", nota:"A suena como EI"}, {en:"want", pron:"uont", nota:"A suena como O"}, {en:"cat", pron:"cat", nota:"A suena como A española"}]},
    {titulo:"Vocal E", ejemplos:[{en:"be", pron:"bi", nota:"E suena como I"}, {en:"bed", pron:"bed", nota:"E suena parecido al español"}, {en:"name", pron:"neim", nota:"la E final es muda"}]},
    {titulo:"Vocal I", ejemplos:[{en:"fine", pron:"fain", nota:"I suena como AI"}, {en:"bit", pron:"bet", nota:"I suena como E"}, {en:"police", pron:"polís", nota:"I suena como I española"}]},
    {titulo:"Vocal O", ejemplos:[{en:"go", pron:"góu", nota:"O suena como OU"}, {en:"to", pron:"tu", nota:"O suena como U"}, {en:"stop", pron:"estap", nota:"O suena como A"}]},
    {titulo:"Vocal U", ejemplos:[{en:"use", pron:"iús", nota:"U suena como IU"}, {en:"true", pron:"tru", nota:"U suena como U española"}, {en:"up", pron:"ap", nota:"U suena como A"}]},
    {titulo:"Combinación EE (dos vocales juntas)", ejemplos:[{en:"see", pron:"si", nota:"EE suena como I"}, {en:"feet", pron:"fit", nota:"EE suena como I"}]},
    {titulo:"Combinación OO (tiene dos sonidos posibles)", ejemplos:[{en:"moon", pron:"mun", nota:"sonido largo"}, {en:"book", pron:"buk", nota:"sonido corto"}]},
    {titulo:"Combinación EA (la más común, aunque tiene más de un sonido)", ejemplos:[{en:"tea", pron:"ti", nota:"sonido más común: como I"}, {en:"read", pron:"rid", nota:"sonido más común: como I"}, {en:"bread", pron:"bred", nota:"a veces suena como E corta"}]},
    {titulo:"Combinación AI (muy frecuente)", ejemplos:[{en:"rain", pron:"réin", nota:"AI suena como EI"}, {en:"wait", pron:"uéit", nota:"AI suena como EI"}]},
    {titulo:"Combinación OU (frecuente, pero con varios sonidos)", ejemplos:[{en:"about", pron:"abáut", nota:"sonido más común: como AU"}, {en:"house", pron:"jáus", nota:"sonido más común: como AU"}]},
    {titulo:"Combinación OW (frecuente, tiene dos sonidos)", ejemplos:[{en:"now", pron:"náu", nota:"como AU"}, {en:"snow", pron:"esnóu", nota:"como O larga — el otro sonido posible"}]}
  ],
  cierre:"¡Muy bien! Ya tenés lo básico para defenderte — avanzá al Día 1 con confianza. Y si en algún momento querés ir mucho más profundo en la pronunciación, el módulo de Fonética te está esperando, con sus 5 capítulos completos y mucha más práctica escrita y hablada, para seguir mejorando cuando quieras."
};

const CAP2_JS = {
    id:2, nombre:"Capítulo 2", titulo:"Combinaciones de un solo sonido consistente", disponible:true,
    intro:"Estas combinaciones de letras casi siempre suenan igual, sin importar en qué palabra aparezcan. Son las más fáciles de aprender, porque una vez que sabés el patrón, funciona casi siempre.",
    hacks: [
      {letra:"EE", titulo:"Hack 1: Doble \"EE\" → suena como \"I\"", ejemplos:[{en:"see", pron:"si", nota:"ver"}, {en:"street", pron:"estrít", nota:"calle"}, {en:"feet", pron:"fit", nota:"pies"}, {en:"tree", pron:"tri", nota:"árbol"}, {en:"green", pron:"grin", nota:"verde"}]},
      {letra:"OA", titulo:"Hack 2: \"OA\" → suena como \"OU\"", ejemplos:[{en:"boat", pron:"bóut", nota:"bote"}, {en:"coat", pron:"cóut", nota:"abrigo"}, {en:"road", pron:"róud", nota:"camino"}, {en:"soap", pron:"sóup", nota:"jabón"}]},
      {letra:"AI/AY", titulo:"Hack 3: \"AI\" o \"AY\" → suena como \"EI\"", ejemplos:[{en:"rain", pron:"réin", nota:"lluvia"}, {en:"day", pron:"déi", nota:"día"}, {en:"play", pron:"pléi", nota:"jugar"}, {en:"wait", pron:"uéit", nota:"esperar"}, {en:"say", pron:"séi", nota:"decir"}]},
      {letra:"AU/AW", titulo:"Hack 4: \"AU\" o \"AW\" → suena como \"O\" abierta", ejemplos:[{en:"saw", pron:"so", nota:"sierra / vio"}, {en:"draw", pron:"dro", nota:"dibujar"}, {en:"law", pron:"lo", nota:"ley"}, {en:"August", pron:"ógost", nota:"agosto"}]},
      {letra:"IGH", titulo:"Hack 5: \"IGH\" → suena como \"AI\"", ejemplos:[{en:"night", pron:"náit", nota:"noche"}, {en:"light", pron:"láit", nota:"luz"}, {en:"right", pron:"ráit", nota:"derecha / correcto"}, {en:"high", pron:"jái", nota:"alto"}]}
    ],
    miniGuia: [{regla:"Regla de posición: AI/AU/OI van en el MEDIO, AY/AW/OY van al FINAL de la palabra", ejemplo:"pain-pay, Paul-paw, boil-boy — el sonido es el mismo, solo cambia la posición"}],
    conclusion:"Estas combinaciones son de las más confiables del inglés. Memorizarlas te desbloquea cientos de palabras de una sola vez.",
    practicaEscrita: [
      {en:"see", pron:"si"},
      {en:"street", pron:"estrít"},
      {en:"feet", pron:"fit"},
      {en:"tree", pron:"tri"},
      {en:"boat", pron:"bóut"},
      {en:"coat", pron:"cóut"},
      {en:"road", pron:"róud"},
      {en:"rain", pron:"réin"},
      {en:"day", pron:"déi"},
      {en:"play", pron:"pléi"},
      {en:"wait", pron:"uéit"},
      {en:"saw", pron:"so"},
      {en:"draw", pron:"dro"},
      {en:"law", pron:"lo"},
      {en:"night", pron:"náit"},
      {en:"light", pron:"láit"},
      {en:"right", pron:"ráit"},
      {en:"high", pron:"jái"},
      {en:"pay", pron:"péi"},
      {en:"boy", pron:"bói"}
    ]
  };

const CAP3_JS = {
    id:3, nombre:"Capítulo 3", titulo:"Combinaciones con dos o más sonidos", disponible:true,
    intro:"Estas combinaciones se ven exactamente igual siempre, pero NO suenan igual siempre. No hay una regla fija para saber cuál de los sonidos usar — se aprende con la práctica y la exposición. Este es el capítulo más importante para no confundirte con palabras nuevas.",
    hacks: [
      {letra:"OO", titulo:"Hack 1: \"OO\" tiene DOS sonidos", ejemplos:[{en:"moon", pron:"mun", nota:"sonido largo"}, {en:"food", pron:"fud", nota:"sonido largo"}, {en:"book", pron:"buk", nota:"sonido corto"}, {en:"good", pron:"gud", nota:"sonido corto"}]},
      {letra:"EA", titulo:"Hack 2: \"EA\" tiene TRES sonidos", ejemplos:[{en:"eat", pron:"it", nota:"como I"}, {en:"tea", pron:"ti", nota:"como I"}, {en:"bread", pron:"bred", nota:"como E corta"}, {en:"head", pron:"jed", nota:"como E corta"}, {en:"steak", pron:"estéik", nota:"como EI (excepción a memorizar)"}, {en:"break", pron:"bréik", nota:"como EI (excepción a memorizar)"}]},
      {letra:"OW", titulo:"Hack 3: \"OW\" tiene DOS sonidos", ejemplos:[{en:"cow", pron:"cáu", nota:"como AU"}, {en:"how", pron:"jáu", nota:"como AU"}, {en:"snow", pron:"esnóu", nota:"como OU (O larga)"}, {en:"grow", pron:"gróu", nota:"como OU (O larga)"}]},
      {letra:"EI/EY", titulo:"Hack 4: \"EI\" o \"EY\" tiene DOS sonidos", ejemplos:[{en:"they", pron:"déi", nota:"como EI"}, {en:"grey", pron:"gréi", nota:"como EI"}, {en:"receive", pron:"risív", nota:"como I larga"}, {en:"ceiling", pron:"sílin", nota:"como I larga"}]},
      {letra:"IE", titulo:"Hack 5: \"IE\" tiene DOS sonidos", ejemplos:[{en:"pie", pron:"pái", nota:"como AI"}, {en:"tie", pron:"tái", nota:"como AI"}, {en:"believe", pron:"bilív", nota:"como I española"}, {en:"field", pron:"fild", nota:"como I española"}]},
      {letra:"UI", titulo:"Hack 6: \"UI\" tiene DOS sonidos, sin regla clara", ejemplos:[{en:"fruit", pron:"frut", nota:"como U"}, {en:"suit", pron:"sut", nota:"como U"}, {en:"build", pron:"bild", nota:"como I"}]},
      {letra:"EW", titulo:"Hack 7: \"EW\" tiene DOS sonidos (sutiles)", ejemplos:[{en:"few", pron:"fiú", nota:"con toque de Y"}, {en:"new", pron:"niú", nota:"con toque de Y"}, {en:"grew", pron:"gru", nota:"sin ese toque"}, {en:"chew", pron:"chu", nota:"sin ese toque"}]},
      {letra:"OU", titulo:"Hack 8: \"OU\" es la más impredecible — hasta 6 sonidos distintos", ejemplos:[{en:"count", pron:"cáunt", nota:"sonido 1: AU"}, {en:"sound", pron:"sáund", nota:"sonido 1: AU"}, {en:"soup", pron:"sup", nota:"sonido 2: U larga"}, {en:"touch", pron:"tach", nota:"sonido 3: A corta"}, {en:"though", pron:"dóu", nota:"sonido 4: O larga"}, {en:"thought", pron:"zot", nota:"sonido 5: como AW"}, {en:"could", pron:"cud", nota:"sonido 6: U corta"}]}
    ],
    miniGuia: [],
    conclusion:"No te frustres si estas combinaciones te cuestan más — hasta los angloparlantes nativos a veces dudan con \"OU\" y \"EA\". La clave es la exposición: cuanto más las escuches y practiques, más natural se vuelve reconocer cuál sonido usar.",
    practicaEscrita: [
      {en:"moon", pron:"mun"},
      {en:"book", pron:"buk"},
      {en:"food", pron:"fud"},
      {en:"good", pron:"gud"},
      {en:"eat", pron:"it"},
      {en:"bread", pron:"bred"},
      {en:"steak", pron:"estéik"},
      {en:"great", pron:"gréit"},
      {en:"cow", pron:"cáu"},
      {en:"snow", pron:"esnóu"},
      {en:"grow", pron:"gróu"},
      {en:"they", pron:"déi"},
      {en:"receive", pron:"risív"},
      {en:"pie", pron:"pái"},
      {en:"believe", pron:"bilív"},
      {en:"fruit", pron:"frut"},
      {en:"build", pron:"bild"},
      {en:"new", pron:"niú"},
      {en:"grew", pron:"gru"},
      {en:"count", pron:"cáunt"},
      {en:"soup", pron:"sup"},
      {en:"touch", pron:"tach"},
      {en:"though", pron:"dóu"},
      {en:"could", pron:"cud"}
    ]
  };

const CAP4_JS = {
    id:4, nombre:"Capítulo 4", titulo:"Vocal + R", disponible:true,
    intro:"Cuando una vocal (o combinación de vocales) va seguida de la letra R, el sonido cambia de nuevo — es un capítulo aparte porque tiene su propia lógica. Hay 3 grupos principales, y con ellos vas a resolver la gran mayoría de estas palabras.",
    hacks: [
      {letra:"Grupo 1", titulo:"Grupo \"cerca\" — EAR, EER, IER, ERE (sonido \"íar\")", ejemplos:[{en:"year", pron:"íar", nota:"año"}, {en:"beer", pron:"bíar", nota:"cerveza"}, {en:"here", pron:"jíar", nota:"acá"}, {en:"clear", pron:"clíar", nota:"claro"}, {en:"near", pron:"níar", nota:"cerca"}]},
      {letra:"Grupo 2", titulo:"Grupo \"silla\" — AIR, ARE, EIR, y algunos EAR (sonido \"er\" abierto)", ejemplos:[{en:"hair", pron:"jer", nota:"pelo"}, {en:"care", pron:"ker", nota:"cuidado"}, {en:"their", pron:"der", nota:"su/de ellos"}, {en:"bear", pron:"ber", nota:"oso"}, {en:"wear", pron:"uér", nota:"usar/vestir"}]},
      {letra:"Grupo 3", titulo:"Grupo raro — EAR + RL (sonido distinto, como \"er\" de motor)", ejemplos:[{en:"pearl", pron:"perl", nota:"perla"}, {en:"early", pron:"érli", nota:"temprano"}, {en:"earn", pron:"ern", nota:"ganar (dinero)"}, {en:"learn", pron:"lern", nota:"aprender"}, {en:"earth", pron:"erz", nota:"tierra"}, {en:"heard", pron:"jerd", nota:"pasado de \"oír\""}]}
    ],
    miniGuia: [{regla:"Ojo con este par: \"heart\" (corazón) se pronuncia \"jart\", pero \"heard\" (oí) se pronuncia \"jerd\"", ejemplo:"se escriben parecido, pero suenan distinto — no los confundas"}],
    conclusion:"Si no estás seguro de cuál grupo usar con una palabra nueva, el Grupo 1 (\"íar\") es la apuesta más segura — es el más común de los tres.",
    practicaEscrita: [
      {en:"year", pron:"íar"},
      {en:"beer", pron:"bíar"},
      {en:"here", pron:"jíar"},
      {en:"clear", pron:"clíar"},
      {en:"near", pron:"níar"},
      {en:"hair", pron:"jer"},
      {en:"care", pron:"ker"},
      {en:"their", pron:"der"},
      {en:"bear", pron:"ber"},
      {en:"wear", pron:"uér"},
      {en:"pearl", pron:"perl"},
      {en:"early", pron:"érli"},
      {en:"earn", pron:"ern"},
      {en:"learn", pron:"lern"},
      {en:"earth", pron:"erz"},
      {en:"heard", pron:"jerd"},
      {en:"heart", pron:"jart"},
      {en:"where", pron:"uér"}
    ]
  };

const CAP5_JS = {
    id:5, nombre:"Capítulo 5", titulo:"Consonantes especiales", disponible:true,
    intro:"No solo las vocales cambian — algunas consonantes en inglés también se comportan distinto a como esperarías desde el español. Estos son los casos más importantes para que tu pronunciación suene natural.",
    hacks: [
      {letra:"H", titulo:"Hack 1: La \"H\" suena como nuestra \"J\"", ejemplos:[{en:"hello", pron:"jélou", nota:"hola"}, {en:"house", pron:"jáus", nota:"casa"}, {en:"hot", pron:"jat", nota:"caliente"}, {en:"happy", pron:"jápi", nota:"feliz"}]},
      {letra:"J", titulo:"Hack 2: La \"J\" suena parecido a nuestra \"Y\" con \"D\" adelante", ejemplos:[{en:"July", pron:"yulái", nota:"julio"}, {en:"jump", pron:"yamp", nota:"saltar"}, {en:"jacket", pron:"yáket", nota:"campera"}]},
      {letra:"TH", titulo:"Hack 3: La \"TH\" tiene DOS sonidos, y ninguno existe en español", ejemplos:[{en:"this", pron:"dis (con la lengua entre los dientes)", nota:"sonido suave/vibrado"}, {en:"think", pron:"zink (con la lengua entre los dientes)", nota:"sonido sordo, como \"z\" española"}, {en:"the", pron:"de", nota:"sonido suave"}, {en:"three", pron:"zri", nota:"sonido sordo"}]},
      {letra:"Ñ", titulo:"Hack 4: No existe la letra Ñ en inglés", ejemplos:[], notaExtra:"Cuando el inglés necesita ese sonido, lo arma con otras letras — como \"ny\" o \"ni\"."},
      {letra:"R", titulo:"Hack 5: La \"R\" no toca el paladar — nunca se vibra", ejemplos:[{en:"ready", pron:"rédi", nota:"listo"}, {en:"very", pron:"véri", nota:"muy"}, {en:"sorry", pron:"sóri", nota:"perdón"}, {en:"red", pron:"red", nota:"rojo"}]},
      {letra:"Silenciosas", titulo:"Hack 6: Letras que se escriben pero no se pronuncian", ejemplos:[{en:"know", pron:"nóu", nota:"la K es muda"}, {en:"write", pron:"ráit", nota:"la W es muda"}, {en:"island", pron:"áiland", nota:"la S es muda"}, {en:"honest", pron:"ónest", nota:"la H es muda acá (excepción a la regla del Hack 1)"}]}
    ],
    miniGuia: [{regla:"La W no es como la \"u\" española sola — es un sonido propio, más redondeado", ejemplo:"water→uóter, well→uél, want→uont"}],
    conclusion:"Estas consonantes son las que más delatan el acento cuando alguien recién está aprendiendo — practicarlas conscientemente acelera mucho que tu inglés suene natural.",
    practicaEscrita: [
      {en:"hello", pron:"jélou"},
      {en:"house", pron:"jáus"},
      {en:"hot", pron:"jat"},
      {en:"happy", pron:"jápi"},
      {en:"July", pron:"yulái"},
      {en:"jump", pron:"yamp"},
      {en:"jacket", pron:"yáket"},
      {en:"this", pron:"dis"},
      {en:"think", pron:"zink"},
      {en:"the", pron:"de"},
      {en:"three", pron:"zri"},
      {en:"ready", pron:"rédi"},
      {en:"very", pron:"véri"},
      {en:"sorry", pron:"sóri"},
      {en:"know", pron:"nóu"},
      {en:"write", pron:"ráit"},
      {en:"island", pron:"áiland"},
      {en:"water", pron:"uóter"},
      {en:"well", pron:"uél"},
      {en:"want", pron:"uont"}
    ]
  };

const fonetica = {
  capitulos: [
    CAP1_JS,
    CAP2_JS,
    CAP3_JS,
    CAP4_JS,
    CAP5_JS
  ]
};

// ================= Controlador de pantallas (independiente del motor principal) =================
(function(){
  let currentCapId = null;
  let practicaItems = [], practicaIdx = 0, practicaOk = 0, practicaGraded = 0;

  function el(id){ return document.getElementById(id); }

  function openModule(){
    el('home').style.display='none';
    el('foneticaModulo').style.display='block';
    renderCapList();
    showView('capitulos');
  }
  function closeModule(){
    el('foneticaModulo').style.display='none';
    el('home').style.display='block';
  }
  function showView(view){
    el('fnCapList').style.display = view==='capitulos' ? 'block' : 'none';
    el('fnCapDetalle').style.display = view==='detalle' ? 'block' : 'none';
    el('fnPracticaEscritaView').style.display = view==='practicaEscrita' ? 'block' : 'none';
    el('fnPracticaHabladaView').style.display = view==='practicaHablada' ? 'block' : 'none';
  }

  function renderCapList(){
    const box = el('fnCapList');
    box.innerHTML='';
    fonetica.capitulos.forEach(cap=>{
      const card = document.createElement('div');
      card.className='cg-regla-card';
      const infoTxt = cap.disponible ? (cap.hacks.length+' hacks · '+cap.practicaEscrita.length+' palabras de práctica') : 'Próximamente';
      card.innerHTML = '<div class="cg-regla-num">'+cap.id+'</div>'
        +'<div class="cg-regla-info"><b>'+cap.nombre+' — '+cap.titulo+'</b><p>'+infoTxt+'</p></div>'
        +'<div class="cg-regla-arrow">'+(cap.disponible?'▶':'🔒')+'</div>';
      if(cap.disponible){
        card.onclick=()=>{ currentCapId=cap.id; renderCapDetalle(cap.id); showView('detalle'); };
      } else {
        card.style.opacity='0.5'; card.style.cursor='default';
      }
      box.appendChild(card);
    });
  }

  function renderCapDetalle(capId){
    const cap = fonetica.capitulos.find(c=>c.id===capId);
    el('fnDetalleTitulo').textContent = cap.nombre+' — '+cap.titulo;
    el('fnDetalleIntro').textContent = cap.intro;

    let html = '';
    cap.hacks.forEach(h=>{
      html += '<div class="fn-hack-titulo">'+h.titulo+'</div>';
      if(h.ejemplos && h.ejemplos.length){
        html += '<table class="cg-tabla"><tr><th>Inglés</th><th>Se pronuncia</th><th>Nota</th></tr>';
        h.ejemplos.forEach(e=>{
          html += '<tr><td><b>'+e.en+'</b></td><td>'+e.pron+'</td><td style="color:var(--muted); font-size:12px;">'+e.nota+'</td></tr>';
        });
        html += '</table>';
      }
      if(h.notaExtra){
        html += '<div class="cg-exc-item">'+h.notaExtra+'</div>';
      }
    });
    if(cap.miniGuia && cap.miniGuia.length){
      html += '<div class="fn-hack-titulo">🧠 Mini guía extra</div>';
      cap.miniGuia.forEach(m=>{
        html += '<div class="cg-exc-item"><b>'+m.regla+'</b>'+(m.ejemplo?' — '+m.ejemplo:'')+'</div>';
      });
    }
    el('fnHacksBox').innerHTML = html;
    el('fnConclusionBox').textContent = cap.conclusion || '';
  }

  // ================= Práctica escrita =================
  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  function openPracticaEscrita(){
    const cap = fonetica.capitulos.find(c=>c.id===currentCapId);
    practicaItems = shuffle(cap.practicaEscrita);
    practicaIdx=0; practicaOk=0; practicaGraded=0;
    el('fnPracticaEscritaTitulo').textContent = 'Práctica escrita — '+cap.nombre;
    el('fnPracticaEscritaHint').textContent = practicaItems.length+' palabras. Escribí cómo se pronuncia cada una (fonéticamente, no en inglés).';
    showView('practicaEscrita');
    showPracticaEscritaItem();
  }

  function showPracticaEscritaItem(){
    if(practicaIdx>=practicaItems.length){ showPracticaEscritaResumen(); return; }
    const item = practicaItems[practicaIdx];
    el('fnPracticaEscritaInput').value='';
    el('fnPracticaEscritaFeedback').style.display='none';
    el('fnPracticaEscritaNextRow').style.display='none';
    el('fnPracticaEscritaPrompt').innerHTML = '<div class="cg-es-grande">'+item.en+'</div>';
    el('fnPracticaEscritaInput').placeholder='¿Cómo se pronuncia?';
    el('fnPracticaEscritaInput').focus();
  }

  function submitPracticaEscrita(){
    const said = el('fnPracticaEscritaInput').value.trim();
    if(!said) return;
    const item = practicaItems[practicaIdx];
    const box = el('fnPracticaEscritaFeedback');
    box.style.display='block';
    const isRight = practicaAnswerMatches(said, item.pron, true);
    practicaGraded++; if(isRight) practicaOk++;
    box.className='cg-practica-feedback '+(isRight?'ok':'retry');
    box.textContent = (isRight?'✓ ¡Correcto! ':'✗ Casi — se pronuncia: ')+'"'+item.pron+'"';
    el('fnPracticaEscritaNextRow').style.display='flex';
    el('fnPracticaEscritaNextBtn').textContent = (practicaIdx+1<practicaItems.length) ? 'Siguiente →' : 'Ver resultado →';
  }

  function showPracticaEscritaResumen(){
    el('fnPracticaEscritaPrompt').innerHTML = '<b>Resultado: '+practicaOk+' de '+practicaGraded+'</b>';
    el('fnPracticaEscritaInput').style.display='none';
    el('fnPracticaEscritaSendBtn').style.display='none';
    el('fnPracticaEscritaFeedback').style.display='none';
    el('fnPracticaEscritaNextRow').style.display='flex';
    el('fnPracticaEscritaNextBtn').textContent='🔁 Repetir esta práctica';
    el('fnPracticaEscritaNextBtn').onclick = ()=>{
      el('fnPracticaEscritaInput').style.display='';
      el('fnPracticaEscritaSendBtn').style.display='inline-flex';
      openPracticaEscrita();
    };
  }

  // ================= Práctica hablada (grabador propio, no comparte el del curso principal) =================
  let recStream=null, recMediaRecorder=null, recChunks=[], recIsRecording=false;

  function openPracticaHablada(){
    const cap = fonetica.capitulos.find(c=>c.id===currentCapId);
    practicaItems = shuffle(cap.practicaEscrita);
    practicaIdx=0;
    el('fnPracticaHabladaTitulo').textContent = 'Práctica hablada — '+cap.nombre;
    el('fnPracticaHabladaHint').textContent = practicaItems.length+' palabras. Escuchá, grabate diciéndola, y compará.';
    showView('practicaHablada');
    showPracticaHabladaItem();
  }

  function showPracticaHabladaItem(){
    if(practicaIdx>=practicaItems.length){
      el('fnPracticaHabladaBox').innerHTML = '<b>¡Terminaste esta práctica!</b><br><span style="color:var(--muted); font-size:13px;">Podés repetirla cuantas veces quieras.</span>';
      el('fnPracticaHabladaNextRow').style.display='flex';
      el('fnPracticaHabladaNextBtn').textContent='🔁 Repetir esta práctica';
      el('fnPracticaHabladaNextBtn').onclick = openPracticaHablada;
      return;
    }
    const item = practicaItems[practicaIdx];
    const box = el('fnPracticaHabladaBox');
    box.innerHTML = '';

    const palabra = document.createElement('div');
    palabra.className='cg-es-grande';
    palabra.textContent = item.en;
    box.appendChild(palabra);

    const pronHint = document.createElement('div');
    pronHint.style.cssText='color:var(--muted); font-size:14px; margin:6px 0 14px;';
    pronHint.textContent = 'se pronuncia: "'+item.pron+'"';
    box.appendChild(pronHint);

    const listenBtn = document.createElement('button');
    listenBtn.className='mic';
    listenBtn.textContent='🔊 Escuchar pronunciación';
    listenBtn.onclick = async ()=>{
      listenBtn.disabled=true;
      await speakHidden(item.en);
      listenBtn.disabled=false;
    };
    box.appendChild(listenBtn);

    const panel = document.createElement('div'); panel.className='record-panel'; panel.style.marginTop='14px';
    const fnRecordBtn = document.createElement('button'); fnRecordBtn.className='ghost'; fnRecordBtn.textContent='🎙️ Grabame diciendo esta palabra';
    const fnPlayback = document.createElement('audio'); fnPlayback.controls=true; fnPlayback.style.display='none';
    const fnReRecordBtn = document.createElement('button'); fnReRecordBtn.className='ghost'; fnReRecordBtn.style.display='none'; fnReRecordBtn.textContent='🔁 Borrar y grabar de nuevo';
    panel.appendChild(fnRecordBtn); panel.appendChild(fnPlayback); panel.appendChild(fnReRecordBtn);
    box.appendChild(panel);

    fnRecordBtn.onclick = async ()=>{
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
        fnRecordBtn.textContent='🎙️ Grabame diciendo esta palabra';
        const blob = new Blob(recChunks, {type: recMediaRecorder.mimeType || 'audio/webm'});
        const url = URL.createObjectURL(blob);
        fnPlayback.src = url;
        fnPlayback.style.display='block';
        fnReRecordBtn.style.display='inline-flex';
        fnRecordBtn.style.display='none';
      };
      recMediaRecorder.start();
      recIsRecording=true;
      fnRecordBtn.textContent='⏹ Detener mi grabación';
    };
    fnReRecordBtn.onclick = ()=>{
      fnPlayback.style.display='none'; fnPlayback.removeAttribute('src');
      fnReRecordBtn.style.display='none';
      fnRecordBtn.style.display='inline-flex'; fnRecordBtn.textContent='🎙️ Grabame diciendo esta palabra';
    };

    el('fnPracticaHabladaNextRow').style.display='flex';
    el('fnPracticaHabladaNextBtn').textContent = (practicaIdx+1<practicaItems.length) ? 'Siguiente →' : 'Ver resultado →';
    el('fnPracticaHabladaNextBtn').onclick = ()=>{ practicaIdx++; showPracticaHabladaItem(); };
  }

  window.addEventListener('DOMContentLoaded', ()=>{
    el('fnEntryBtn').onclick = openModule;
    el('fnBackBtn').onclick = closeModule;
    el('fnBackToCapsBtn').onclick = ()=>{ showView('capitulos'); renderCapList(); };
    el('fnPracticaEscritaBtn').onclick = openPracticaEscrita;
    el('fnPracticaHabladaBtn').onclick = openPracticaHablada;
    el('fnBackFromPracticaEscritaBtn').onclick = ()=>{ showView('detalle'); };
    el('fnBackFromPracticaHabladaBtn').onclick = ()=>{ showView('detalle'); };
    el('fnPracticaEscritaSendBtn').onclick = submitPracticaEscrita;
    el('fnPracticaEscritaInput').addEventListener('keydown', e=>{ if(e.key==='Enter') submitPracticaEscrita(); });
    el('fnPracticaEscritaNextBtn').onclick = ()=>{ practicaIdx++; showPracticaEscritaItem(); };
  });
})();

// ================= Pantalla básica antes del Día 1 =================
function mostrarFoneticaBasico(){
  const el = id=>document.getElementById(id);
  el('home').style.display='none';
  el('foneticaBasico').style.display='block';

  const b = BASICO_JS;
  el('fbTitulo').textContent = b.titulo;
  el('fbIntro').textContent = b.intro;

  let fbRecStream=null;

  function crearFilaPalabra(item){
    const fila = document.createElement('div');
    fila.className='fb-palabra-fila';

    const info = document.createElement('div');
    info.className='fb-palabra-info';
    info.innerHTML = '<b>'+item.en+'</b><span class="fb-palabra-pron">'+item.pron+(item.nota?' — '+item.nota:'')+'</span>';
    fila.appendChild(info);

    const acciones = document.createElement('div');
    acciones.className='fb-palabra-acciones';

    const listenBtn = document.createElement('button');
    listenBtn.className='mic'; listenBtn.textContent='🔊';
    listenBtn.title='Escuchar pronunciación';
    listenBtn.onclick = async ()=>{
      listenBtn.disabled=true;
      await speakHidden(item.en);
      listenBtn.disabled=false;
    };
    acciones.appendChild(listenBtn);

    const recordBtn = document.createElement('button');
    recordBtn.className='mic'; recordBtn.textContent='🎙️';
    recordBtn.title='Grabate diciendo esta palabra';
    const playback = document.createElement('audio');
    playback.controls=true; playback.style.display='none'; playback.className='fb-playback';
    let isRecording=false, mediaRecorder=null, chunks=[];
    recordBtn.onclick = async ()=>{
      if(isRecording){
        if(mediaRecorder && mediaRecorder.state!=='inactive') mediaRecorder.stop();
        return;
      }
      try{
        if(!fbRecStream){ fbRecStream = await navigator.mediaDevices.getUserMedia({audio:true}); }
      }catch(e){
        alert('No se pudo acceder al micrófono para grabar tu voz.');
        return;
      }
      chunks=[];
      mediaRecorder = new MediaRecorder(fbRecStream);
      mediaRecorder.ondataavailable = (e)=>{ if(e.data && e.data.size>0) chunks.push(e.data); };
      mediaRecorder.onstop = ()=>{
        isRecording=false; recordBtn.textContent='🎙️';
        const blob = new Blob(chunks, {type: mediaRecorder.mimeType || 'audio/webm'});
        playback.src = URL.createObjectURL(blob);
        playback.style.display='inline-block';
      };
      mediaRecorder.start();
      isRecording=true; recordBtn.textContent='⏹';
    };
    acciones.appendChild(recordBtn);
    acciones.appendChild(playback);
    fila.appendChild(acciones);
    return fila;
  }

  const box = el('fbPuntosBox');
  box.innerHTML='';
  b.grupos.forEach(g=>{
    const titulo = document.createElement('div');
    titulo.className='fn-hack-titulo';
    titulo.textContent = g.titulo;
    box.appendChild(titulo);
    g.ejemplos.forEach(item=> box.appendChild(crearFilaPalabra(item)) );
  });
  el('fbCierre').textContent = b.cierre;

  el('fbContinuarBtn').onclick = ()=>{
    localStorage.setItem('foneticaBasicoVisto','1');
    el('foneticaBasico').style.display='none';
    startDay(1);
  };
  el('fbSaltarBtn').onclick = ()=>{
    localStorage.setItem('foneticaBasicoVisto','1');
    el('foneticaBasico').style.display='none';
    startDay(1);
  };
}
