// Módulo de Cognados — módulo independiente, 22 reglas de conversión español-inglés.
// Este archivo es autónomo: no toca ni depende del motor del curso principal (motor.js),
// salvo por las funciones compartidas speakHidden() y practicaAnswerMatches() ya definidas ahí.
// Arrancamos con las Reglas 1-3 completas; las demás se agregan de la misma forma.

REGLA1_PALABRAS = [
      {es:"nación", en:"nation"},
      {es:"información", en:"information"},
      {es:"comunicación", en:"communication"},
      {es:"conversación", en:"conversation"},
      {es:"explicación", en:"explanation"},
      {es:"traducción", en:"translation"},
      {es:"pronunciación", en:"pronunciation"},
      {es:"declaración", en:"declaration"},
      {es:"descripción", en:"description"},
      {es:"interpretación", en:"interpretation"},
      {es:"narración", en:"narration"},
      {es:"afirmación", en:"affirmation"},
      {es:"negación", en:"negation"},
      {es:"mención", en:"mention"},
      {es:"expresión", en:"expression"},
      {es:"organización", en:"organization"},
      {es:"operación", en:"operation"},
      {es:"administración", en:"administration"},
      {es:"presentación", en:"presentation"},
      {es:"negociación", en:"negotiation"},
      {es:"confirmación", en:"confirmation"},
      {es:"evaluación", en:"evaluation"},
      {es:"cooperación", en:"cooperation"},
      {es:"invención", en:"invention"},
      {es:"cotización", en:"quotation"},
      {es:"distribución", en:"distribution"},
      {es:"producción", en:"production"},
      {es:"exportación", en:"exportation"},
      {es:"importación", en:"importation"},
      {es:"recomendación", en:"recommendation"},
      {es:"aplicación", en:"application"},
      {es:"clasificación", en:"classification"},
      {es:"compensación", en:"compensation"},
      {es:"promoción", en:"promotion"},
      {es:"regulación", en:"regulation"},
      {es:"transacción", en:"transaction"},
      {es:"suscripción", en:"subscription"},
      {es:"adquisición", en:"acquisition"},
      {es:"educación", en:"education"},
      {es:"situación", en:"situation"},
      {es:"población", en:"population"},
      {es:"preparación", en:"preparation"},
      {es:"participación", en:"participation"},
      {es:"generación", en:"generation"},
      {es:"motivación", en:"motivation"},
      {es:"publicación", en:"publication"},
      {es:"investigación", en:"investigation"},
      {es:"observación", en:"observation"},
      {es:"consideración", en:"consideration"},
      {es:"acumulación", en:"accumulation"},
      {es:"graduación", en:"graduation"},
      {es:"instrucción", en:"instruction"},
      {es:"institución", en:"institution"},
      {es:"formación", en:"formation"},
      {es:"orientación", en:"orientation"},
      {es:"calificación", en:"qualification"},
      {es:"certificación", en:"certification"},
      {es:"verificación", en:"verification"},
      {es:"determinación", en:"determination"},
      {es:"dedicación", en:"dedication"},
      {es:"innovación", en:"innovation"},
      {es:"transformación", en:"transformation"},
      {es:"configuración", en:"configuration"},
      {es:"instalación", en:"installation"},
      {es:"automatización", en:"automation"},
      {es:"digitalización", en:"digitalization"},
      {es:"codificación", en:"codification"},
      {es:"conexión", en:"connection"},
      {es:"notificación", en:"notification"},
      {es:"autenticación", en:"authentication"},
      {es:"navegación", en:"navigation"},
      {es:"simulación", en:"simulation"},
      {es:"optimización", en:"optimization"},
      {es:"integración", en:"integration"},
      {es:"celebración", en:"celebration"},
      {es:"invitación", en:"invitation"},
      {es:"reputación", en:"reputation"},
      {es:"admiración", en:"admiration"},
      {es:"inspiración", en:"inspiration"},
      {es:"frustración", en:"frustration"},
      {es:"satisfacción", en:"satisfaction"},
      {es:"adoración", en:"adoration"},
      {es:"tentación", en:"temptation"},
      {es:"emoción", en:"emotion"},
      {es:"sensación", en:"sensation"},
      {es:"imaginación", en:"imagination"},
      {es:"intención", en:"intention"},
      {es:"dirección", en:"direction"},
      {es:"atención", en:"attention"},
      {es:"relación", en:"relation"},
      {es:"condición", en:"condition"},
      {es:"posición", en:"position"},
      {es:"acción", en:"action"},
      {es:"reacción", en:"reaction"},
      {es:"interacción", en:"interaction"},
      {es:"infección", en:"infection"},
      {es:"inyección", en:"injection"},
      {es:"vacunación", en:"vaccination"},
      {es:"respiración", en:"respiration"},
      {es:"digestión", en:"digestion"},
      {es:"circulación", en:"circulation"},
      {es:"radiación", en:"radiation"},
      {es:"mutación", en:"mutation"},
      {es:"evolución", en:"evolution"},
      {es:"revolución", en:"revolution"},
      {es:"solución", en:"solution"},
      {es:"contaminación", en:"contamination"},
      {es:"purificación", en:"purification"},
      {es:"hidratación", en:"hydration"},
      {es:"estación", en:"station"},
      {es:"función", en:"function"},
      {es:"porción", en:"portion"},
      {es:"colección", en:"collection"},
      {es:"selección", en:"selection"},
      {es:"sección", en:"section"},
      {es:"fracción", en:"fraction"},
      {es:"perfección", en:"perfection"},
      {es:"protección", en:"protection"},
      {es:"corrección", en:"correction"},
      {es:"construcción", en:"construction"},
      {es:"destrucción", en:"destruction"},
      {es:"introducción", en:"introduction"},
      {es:"reducción", en:"reduction"},
      {es:"deducción", en:"deduction"},
      {es:"seducción", en:"seduction"},
      {es:"legislación", en:"legislation"},
      {es:"jurisdicción", en:"jurisdiction"},
      {es:"constitución", en:"constitution"},
      {es:"elección", en:"election"},
      {es:"delegación", en:"delegation"},
      {es:"deportación", en:"deportation"},
      {es:"extradición", en:"extradition"},
      {es:"revocación", en:"revocation"},
      {es:"ratificación", en:"ratification"},
      {es:"inauguración", en:"inauguration"},
      {es:"abolición", en:"abolition"},
      {es:"ejecución", en:"execution"},
      {es:"sanción", en:"sanction"},
      {es:"moción", en:"motion"},
      {es:"liquidación", en:"liquidation"},
      {es:"cancelación", en:"cancellation"},
      {es:"renovación", en:"renovation"},
      {es:"restauración", en:"restoration"},
      {es:"restitución", en:"restitution"},
      {es:"autorización", en:"authorization"},
      {es:"reservación", en:"reservation"},
      {es:"especulación", en:"speculation"},
      {es:"consolidación", en:"consolidation"},
      {es:"diversificación", en:"diversification"},
      {es:"capitalización", en:"capitalization"},
      {es:"especialización", en:"specialization"},
      {es:"industrialización", en:"industrialization"},
      {es:"globalización", en:"globalization"},
      {es:"urbanización", en:"urbanization"},
      {es:"personalización", en:"personalization"},
      {es:"socialización", en:"socialization"},
      {es:"civilización", en:"civilization"},
      {es:"colonización", en:"colonization"},
      {es:"realización", en:"realization"},
      {es:"utilización", en:"utilization"},
      {es:"fabricación", en:"fabrication"},
      {es:"fermentación", en:"fermentation"},
      {es:"evaporación", en:"evaporation"},
      {es:"condensación", en:"condensation"},
      {es:"cristalización", en:"crystallization"},
      {es:"oxidación", en:"oxidation"},
      {es:"fertilización", en:"fertilization"},
      {es:"germinación", en:"germination"},
      {es:"incubación", en:"incubation"},
      {es:"decoración", en:"decoration"},
      {es:"demostración", en:"demonstration"},
      {es:"conservación", en:"conservation"},
      {es:"preservación", en:"preservation"},
      {es:"alteración", en:"alteration"},
      {es:"modificación", en:"modification"},
      {es:"sustitución", en:"substitution"},
      {es:"restricción", en:"restriction"},
      {es:"discriminación", en:"discrimination"},
      {es:"migración", en:"migration"},
      {es:"inmigración", en:"immigration"},
      {es:"emigración", en:"emigration"},
      {es:"puntuación", en:"punctuation"},
      {es:"saturación", en:"saturation"},
      {es:"adaptación", en:"adaptation"},
      {es:"manifestación", en:"manifestation"},
      {es:"fijación", en:"fixation"},
      {es:"alucinación", en:"hallucination"},
      {es:"meditación", en:"meditation"},
      {es:"relajación", en:"relaxation"},
      {es:"concentración", en:"concentration"},
      {es:"indignación", en:"indignation"},
      {es:"veneración", en:"veneration"},
      {es:"contemplación", en:"contemplation"},
      {es:"separación", en:"separation"},
      {es:"reconciliación", en:"reconciliation"},
      {es:"asociación", en:"association"},
      {es:"afiliación", en:"affiliation"},
      {es:"federación", en:"federation"},
      {es:"coalición", en:"coalition"},
      {es:"elevación", en:"elevation"},
      {es:"inclinación", en:"inclination"},
      {es:"localización", en:"localization"},
      {es:"reparación", en:"reparation"},
      {es:"abdicación", en:"abdication"},
      {es:"aclamación", en:"acclamation"},
      {es:"agitación", en:"agitation"},
      {es:"aglomeración", en:"agglomeration"},
      {es:"alegación", en:"allegation"},
      {es:"animación", en:"animation"},
      {es:"anticipación", en:"anticipation"},
      {es:"asimilación", en:"assimilation"},
      {es:"colaboración", en:"collaboration"},
      {es:"combinación", en:"combination"},
      {es:"conmemoración", en:"commemoration"},
      {es:"compilación", en:"compilation"},
      {es:"condenación", en:"condemnation"},
      {es:"confiscación", en:"confiscation"},
      {es:"congregación", en:"congregation"},
      {es:"constelación", en:"constellation"},
      {es:"consternación", en:"consternation"},
      {es:"continuación", en:"continuation"},
      {es:"coronación", en:"coronation"},
      {es:"corporación", en:"corporation"},
      {es:"correlación", en:"correlation"},
      {es:"corroboración", en:"corroboration"},
      {es:"creación", en:"creation"},
      {es:"degeneración", en:"degeneration"},
      {es:"degradación", en:"degradation"},
      {es:"aviación", en:"aviation"},
      {es:"atracción", en:"attraction"},
      {es:"ficción", en:"fiction"}
    ];

REGLA1_EXCEPCIONES = [
      {es:"facturación", nota:"invoicing (no termina en -tion)"},
      {es:"programación", nota:"programming (no termina en -tion)"},
      {es:"actualización", nota:"update (no termina en -tion)"},
      {es:"conducción", nota:"driving en tránsito, o conduction en física — dos significados"},
      {es:"asesinato", nota:"assassination (NO usa -ción — el sustantivo español para \"asesinar\" es irregular)"},
      {es:"enfrentamiento", nota:"confrontation (NO usa -ción — el español prefiere \"enfrentamiento\")"},
      {es:"consuelo", nota:"consolation (NO usa -ción como palabra común — \"consolación\" existe pero es formal/religiosa)"},
      {es:"cultivo", nota:"cultivation (NO usa -ción como palabra común — \"cultivación\" casi no se usa)"},
      {es:"felicitación", nota:"congratulation (SÍ es -ción→-tion en la forma, pero la palabra común en inglés es \"congratulation\", no \"felicitation\" — esta última existe mas es rarísima)"}
    ];

REGLA2_PALABRAS = [
      {es:"universidad", en:"university"},
      {es:"actividad", en:"activity"},
      {es:"curiosidad", en:"curiosity"},
      {es:"oportunidad", en:"opportunity"},
      {es:"capacidad", en:"capacity"},
      {es:"comunidad", en:"community"},
      {es:"responsabilidad", en:"responsibility"},
      {es:"identidad", en:"identity"},
      {es:"seguridad", en:"security"},
      {es:"dificultad", en:"difficulty"},
      {es:"realidad", en:"reality"},
      {es:"personalidad", en:"personality"},
      {es:"prioridad", en:"priority"},
      {es:"diversidad", en:"diversity"},
      {es:"flexibilidad", en:"flexibility"},
      {es:"cantidad", en:"quantity"},
      {es:"calidad", en:"quality"},
      {es:"variedad", en:"variety"},
      {es:"autoridad", en:"authority"},
      {es:"mayoridad", en:"majority"},
      {es:"libertad", en:"liberty"},
      {es:"velocidad", en:"velocity"},
      {es:"sociedad", en:"society"},
      {es:"igualdad", en:"equality"},
      {es:"formalidad", en:"formality"},
      {es:"electricidad", en:"electricity"},
      {es:"humedad", en:"humidity"},
      {es:"densidad", en:"density"},
      {es:"gravedad", en:"gravity"},
      {es:"intensidad", en:"intensity"},
      {es:"elasticidad", en:"elasticity"},
      {es:"capilaridad", en:"capillarity"},
      {es:"radioactividad", en:"radioactivity"},
      {es:"conductividad", en:"conductivity"},
      {es:"visibilidad", en:"visibility"},
      {es:"estabilidad", en:"stability"},
      {es:"compatibilidad", en:"compatibility"},
      {es:"funcionalidad", en:"functionality"},
      {es:"productividad", en:"productivity"},
      {es:"creatividad", en:"creativity"},
      {es:"accesibilidad", en:"accessibility"},
      {es:"disponibilidad", en:"availability"},
      {es:"solidaridad", en:"solidarity"},
      {es:"fraternidad", en:"fraternity"},
      {es:"hospitalidad", en:"hospitality"},
      {es:"popularidad", en:"popularity"},
      {es:"celebridad", en:"celebrity"},
      {es:"nacionalidad", en:"nationality"},
      {es:"humanidad", en:"humanity"},
      {es:"municipalidad", en:"municipality"},
      {es:"honestidad", en:"honesty"},
      {es:"sinceridad", en:"sincerity"},
      {es:"generosidad", en:"generosity"},
      {es:"puntualidad", en:"punctuality"},
      {es:"vanidad", en:"vanity"},
      {es:"dignidad", en:"dignity"},
      {es:"humildad", en:"humility"},
      {es:"brevedad", en:"brevity"},
      {es:"severidad", en:"severity"},
      {es:"sensibilidad", en:"sensitivity"},
      {es:"posibilidad", en:"possibility"},
      {es:"habilidad", en:"ability"},
      {es:"necesidad", en:"necessity"},
      {es:"rentabilidad", en:"profitability"},
      {es:"viabilidad", en:"viability"},
      {es:"credibilidad", en:"credibility"},
      {es:"confidencialidad", en:"confidentiality"},
      {es:"legalidad", en:"legality"},
      {es:"propiedad", en:"property"},
      {es:"especialidad", en:"specialty"},
      {es:"modalidad", en:"modality"},
      {es:"totalidad", en:"totality"},
      {es:"finalidad", en:"finality"},
      {es:"originalidad", en:"originality"},
      {es:"normalidad", en:"normality"},
      {es:"neutralidad", en:"neutrality"},
      {es:"moralidad", en:"morality"},
      {es:"mortalidad", en:"mortality"},
      {es:"obesidad", en:"obesity"},
      {es:"discapacidad", en:"disability"},
      {es:"fertilidad", en:"fertility"},
      {es:"inmunidad", en:"immunity"},
      {es:"longevidad", en:"longevity"},
      {es:"ansiedad", en:"anxiety"},
      {es:"paternidad", en:"paternity"},
      {es:"maternidad", en:"maternity"},
      {es:"unidad", en:"unity"},
      {es:"facultad", en:"faculty"},
      {es:"lealtad", en:"loyalty"}
    ];

REGLA2_EXCEPCIONES = [
      {es:"ciudadanía", nota:"citizenship — cambia de forma"},
      {es:"vecindad", nota:"vicinity — cambia de forma"},
      {es:"amabilidad", nota:"kindness — no cognado directo"},
      {es:"madurez", nota:"maturity — cambia de forma"},
      {es:"estupidez", nota:"stupidity — cambia de forma"},
      {es:"timidez", nota:"shyness — no cognado directo"},
      {es:"cortesía", nota:"courtesy — cambia de forma"},
      {es:"natalidad", nota:"natality — rara en inglés, birth rate más común"},
      {es:"enfermedad", nota:"illness — no cognado directo"},
      {es:"ciudad", nota:"city — cambia de forma, más corta"},
      {es:"edad", nota:"age — cambia de forma"},
      {es:"verdad", nota:"truth — no cognado directo"},
      {es:"bondad", nota:"goodness — no cognado directo"},
      {es:"mitad", nota:"half — no cognado directo"},
      {es:"amistad", nota:"friendship (NO \"amity\" en el uso común — esa palabra existe en inglés pero es rarísima y formal)"},
      {es:"enemistad", nota:"enmity (SÍ es cognado, pero \"enmity\" es una palabra poco común en inglés cotidiano)"},
      {es:"voluntad", nota:"will / willpower (NO tiene cognado directo)"}
    ];

REGLA3_PALABRAS = [
      {es:"rápidamente", en:"rapidly"},
      {es:"directamente", en:"directly"},
      {es:"específicamente", en:"specifically"},
      {es:"exactamente", en:"exactly"},
      {es:"finalmente", en:"finally"},
      {es:"generalmente", en:"generally"},
      {es:"probablemente", en:"probably"},
      {es:"realmente", en:"really"},
      {es:"completamente", en:"completely"},
      {es:"normalmente", en:"normally"},
      {es:"fácilmente", en:"easily"},
      {es:"claramente", en:"clearly"},
      {es:"inmediatamente", en:"immediately"},
      {es:"personalmente", en:"personally"},
      {es:"seriamente", en:"seriously"},
      {es:"totalmente", en:"totally"},
      {es:"actualmente", en:"currently"},
      {es:"únicamente", en:"uniquely"},
      {es:"frecuentemente", en:"frequently"},
      {es:"naturalmente", en:"naturally"},
      {es:"particularmente", en:"particularly"},
      {es:"absolutamente", en:"absolutely"},
      {es:"constantemente", en:"constantly"},
      {es:"eventualmente", en:"eventually"},
      {es:"cuidadosamente", en:"carefully"},
      {es:"oficialmente", en:"officially"},
      {es:"legalmente", en:"legally"},
      {es:"financieramente", en:"financially"},
      {es:"económicamente", en:"economically"},
      {es:"profesionalmente", en:"professionally"},
      {es:"efectivamente", en:"effectively"},
      {es:"eficientemente", en:"efficiently"},
      {es:"significativamente", en:"significantly"},
      {es:"considerablemente", en:"considerably"},
      {es:"relativamente", en:"relatively"},
      {es:"aproximadamente", en:"approximately"},
      {es:"regularmente", en:"regularly"},
      {es:"ocasionalmente", en:"occasionally"},
      {es:"temporalmente", en:"temporarily"},
      {es:"permanentemente", en:"permanently"},
      {es:"gradualmente", en:"gradually"},
      {es:"progresivamente", en:"progressively"},
      {es:"amablemente", en:"kindly"},
      {es:"honestamente", en:"honestly"},
      {es:"sinceramente", en:"sincerely"},
      {es:"felizmente", en:"happily"},
      {es:"tristemente", en:"sadly"},
      {es:"pacientemente", en:"patiently"},
      {es:"calmadamente", en:"calmly"},
      {es:"nerviosamente", en:"nervously"},
      {es:"agresivamente", en:"aggressively"},
      {es:"violentamente", en:"violently"},
      {es:"dulcemente", en:"sweetly"},
      {es:"elegantemente", en:"elegantly"},
      {es:"cortésmente", en:"courteously"},
      {es:"extremadamente", en:"extremely"},
      {es:"increíblemente", en:"incredibly"},
      {es:"sorprendentemente", en:"surprisingly"},
      {es:"enormemente", en:"enormously"},
      {es:"altamente", en:"highly"},
      {es:"profundamente", en:"profoundly"},
      {es:"intensamente", en:"intensely"},
      {es:"moderadamente", en:"moderately"},
      {es:"extraordinariamente", en:"extraordinarily"},
      {es:"excepcionalmente", en:"exceptionally"},
      {es:"recientemente", en:"recently"},
      {es:"simultáneamente", en:"simultaneously"},
      {es:"automáticamente", en:"automatically"},
      {es:"instantáneamente", en:"instantly"},
      {es:"básicamente", en:"basically"},
      {es:"simplemente", en:"simply"},
      {es:"obviamente", en:"obviously"},
      {es:"evidentemente", en:"evidently"},
      {es:"aparentemente", en:"apparently"},
      {es:"supuestamente", en:"supposedly"},
      {es:"literalmente", en:"literally"},
      {es:"técnicamente", en:"technically"},
      {es:"teóricamente", en:"theoretically"},
      {es:"prácticamente", en:"practically"},
      {es:"mentalmente", en:"mentally"},
      {es:"físicamente", en:"physically"},
      {es:"emocionalmente", en:"emotionally"},
      {es:"socialmente", en:"socially"},
      {es:"culturalmente", en:"culturally"},
      {es:"políticamente", en:"politically"},
      {es:"moralmente", en:"morally"},
      {es:"espiritualmente", en:"spiritually"},
      {es:"mutuamente", en:"mutually"},
      {es:"voluntariamente", en:"voluntarily"},
      {es:"deliberadamente", en:"deliberately"},
      {es:"accidentalmente", en:"accidentally"},
      {es:"intencionalmente", en:"intentionally"},
      {es:"continuamente", en:"continuously"},
      {es:"visiblemente", en:"visibly"},
      {es:"audiblemente", en:"audibly"},
      {es:"abruptamente", en:"abruptly"}
    ];

REGLA3_EXCEPCIONES = [
      {es:"tranquilamente", nota:"calmly — comparte traducción con calmadamente"},
      {es:"suavemente", nota:"softly — no cognado directo"},
      {es:"educadamente", nota:"politely — no cognado directo"},
      {es:"levemente", nota:"slightly — no cognado directo"},
      {es:"ligeramente", nota:"slightly — no cognado directo"},
      {es:"anteriormente", nota:"previously — no cognado directo"},
      {es:"posteriormente", nota:"subsequently — no cognado directo"},
      {es:"verdaderamente", nota:"truly — cambia de forma"},
      {es:"solamente", nota:"solely — cambia de forma"},
      {es:"mayormente", nota:"mostly — no cognado directo"}
    ];

const cognados = {
  reglas: [
    { id:1, nombre:"Regla 1", patron:"-ción → -tion", disponible:true,
      explicacion:"Una de las reglas más fiables del inglés. Casi cualquier palabra española terminada en -ción tiene su gemela directa en inglés terminada en -tion. Se pronuncia como \"shion\", no como se lee en español.",
      palabras: REGLA1_PALABRAS, excepciones: REGLA1_EXCEPCIONES },
    { id:2, nombre:"Regla 2", patron:"-dad → -ty", disponible:true,
      explicacion:"Muy fiable, con pocas excepciones. Las palabras españolas terminadas en -dad casi siempre se convierten en -ty en inglés. Un grupo pequeño usa \"-tad\" en vez de \"-dad\" (libertad→liberty, lealtad→loyalty).",
      palabras: REGLA2_PALABRAS, excepciones: REGLA2_EXCEPCIONES },
    { id:3, nombre:"Regla 3", patron:"-mente → -ly", disponible:true,
      explicacion:"100% mecánica: se toma el adjetivo en inglés y se le agrega -ly, igual que en español se agrega -mente al adjetivo. Se agrega a la forma FEMENINA del adjetivo (claramente, no claromente).",
      palabras: REGLA3_PALABRAS, excepciones: REGLA3_EXCEPCIONES },
    { id:4, nombre:"Regla 4", patron:"-ico/-ica → -ic / -ical", disponible:false },
    { id:5, nombre:"Regla 5", patron:"-oso/-osa → -ous", disponible:false },
    { id:6, nombre:"Regla 6", patron:"-ismo → -ism", disponible:false },
    { id:7, nombre:"Regla 7", patron:"-ista → -ist", disponible:false },
    { id:8, nombre:"Regla 8", patron:"-ivo/-iva → -ive", disponible:false },
    { id:9, nombre:"Regla 9", patron:"-ancia/-encia → -ance/-ence", disponible:false },
    { id:10, nombre:"Regla 10", patron:"-tud → -tude", disponible:false },
    { id:11, nombre:"Regla 11", patron:"-ente/-ante → -ent/-ant", disponible:false },
    { id:12, nombre:"Regla 12", patron:"-al → -al (idéntica)", disponible:false },
    { id:13, nombre:"Regla 13", patron:"-ario/-aria → -ary", disponible:false },
    { id:14, nombre:"Regla 14", patron:"-orio/-oria → -ory", disponible:false },
    { id:15, nombre:"Regla 15", patron:"-sión → -sion", disponible:false },
    { id:16, nombre:"Regla 16", patron:"-logía → -logy", disponible:false },
    { id:17, nombre:"Regla 17", patron:"-cional → -tional", disponible:false },
    { id:18, nombre:"Regla 18", patron:"-ar → to -ate (verbos)", disponible:false },
    { id:19, nombre:"Regla 19", patron:"-izar → to -ize (verbos)", disponible:false },
    { id:20, nombre:"Regla 20", patron:"-ificar → to -ify (verbos)", disponible:false },
    { id:21, nombre:"Regla 21", patron:"-formar → to -form (verbos)", disponible:false },
    { id:22, nombre:"Regla 22", patron:"-der/-dir/-tir → -sión (verbo+sustantivo)", disponible:false }
  ]
};

// ================= Controlador de pantallas (independiente del motor principal) =================
(function(){
  let currentReglaId = null;
  let practicaItems = [], practicaIdx = 0, practicaOk = 0, practicaGraded = 0;

  function el(id){ return document.getElementById(id); }

  function openModule(){
    el('home').style.display='none';
    el('cognadosModulo').style.display='block';
    renderReglaList();
    showView('reglas');
  }
  function closeModule(){
    el('cognadosModulo').style.display='none';
    el('home').style.display='block';
  }
  function showView(view){
    el('cgReglaList').style.display = view==='reglas' ? 'block' : 'none';
    el('cgReglaDetalle').style.display = view==='detalle' ? 'block' : 'none';
    el('cgPracticaView').style.display = view==='practica' ? 'block' : 'none';
  }

  function renderReglaList(){
    const box = el('cgReglaList');
    box.innerHTML='';
    cognados.reglas.forEach(regla=>{
      const card = document.createElement('div');
      card.className='cg-regla-card';
      const infoTxt = regla.disponible ? (regla.palabras.length+' palabras · '+regla.excepciones.length+' excepciones') : 'Próximamente';
      card.innerHTML = '<div class="cg-regla-num">'+regla.id+'</div>'
        +'<div class="cg-regla-info"><b>'+regla.nombre+' — '+regla.patron+'</b><p>'+infoTxt+'</p></div>'
        +'<div class="cg-regla-arrow">'+(regla.disponible?'▶':'🔒')+'</div>';
      if(regla.disponible){
        card.onclick=()=>{ currentReglaId=regla.id; renderReglaDetalle(regla.id); showView('detalle'); };
      } else {
        card.style.opacity='0.5'; card.style.cursor='default';
      }
      box.appendChild(card);
    });
  }

  function renderReglaDetalle(reglaId){
    const regla = cognados.reglas.find(r=>r.id===reglaId);
    el('cgDetalleTitulo').textContent = regla.nombre+' — '+regla.patron;
    el('cgDetalleExplicacion').textContent = regla.explicacion;

    let html = '<table class="cg-tabla"><tr><th>Español</th><th>Inglés</th></tr>';
    regla.palabras.forEach(p=>{
      html += '<tr><td>'+p.es+'</td><td><b>'+p.en+'</b></td></tr>';
    });
    html += '</table>';
    el('cgPalabrasBox').innerHTML = html;

    if(regla.excepciones.length){
      let excHtml = '<div class="cg-exc-titulo">Excepciones — palabras que parecen seguir la regla pero NO la siguen:</div>';
      regla.excepciones.forEach(e=>{
        excHtml += '<div class="cg-exc-item"><b>'+e.es+':</b> '+e.nota+'</div>';
      });
      el('cgExcepcionesBox').innerHTML = excHtml;
    } else {
      el('cgExcepcionesBox').innerHTML = '';
    }
  }

  // ================= Modo práctica =================
  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  function openPractica(){
    const regla = cognados.reglas.find(r=>r.id===currentReglaId);
    const pool = shuffle(regla.palabras).slice(0, Math.min(15, regla.palabras.length));
    practicaItems = pool;
    practicaIdx=0; practicaOk=0; practicaGraded=0;
    el('cgPracticaTitulo').textContent = 'Práctica — '+regla.nombre;
    el('cgPracticaHint').textContent = pool.length+' palabras de esta regla. Escribí el equivalente en inglés.';
    showView('practica');
    showPracticaItem();
  }

  function showPracticaItem(){
    if(practicaIdx>=practicaItems.length){ showPracticaResumen(); return; }
    const item = practicaItems[practicaIdx];
    el('cgPracticaInput').value='';
    el('cgPracticaFeedback').style.display='none';
    el('cgPracticaNextRow').style.display='none';
    el('cgPracticaPrompt').innerHTML = '<div class="cg-es-grande">'+item.es+'</div>';
    el('cgPracticaInput').placeholder='Escribí el equivalente en inglés...';
    el('cgPracticaInput').focus();
  }

  function submitPracticaAnswer(){
    const said = el('cgPracticaInput').value.trim();
    if(!said) return;
    const item = practicaItems[practicaIdx];
    const box = el('cgPracticaFeedback');
    box.style.display='block';
    const isRight = practicaAnswerMatches(said, item.en, true);
    practicaGraded++; if(isRight) practicaOk++;
    box.className='cg-practica-feedback '+(isRight?'ok':'retry');
    box.textContent = (isRight?'✓ ¡Correcto! ':'✗ Casi — la respuesta correcta era: ')+'"'+item.en+'"';
    el('cgPracticaNextRow').style.display='flex';
    el('cgPracticaNextBtn').textContent = (practicaIdx+1<practicaItems.length) ? 'Siguiente →' : 'Ver resultado →';
  }

  function showPracticaResumen(){
    el('cgPracticaPrompt').innerHTML = '<b>Resultado: '+practicaOk+' de '+practicaGraded+'</b><br><span style="color:var(--muted);font-size:13px;">Podés repetir esta práctica cuantas veces quieras.</span>';
    el('cgPracticaInput').style.display='none';
    el('cgPracticaSendBtn').style.display='none';
    el('cgPracticaFeedback').style.display='none';
    el('cgPracticaNextRow').style.display='flex';
    el('cgPracticaNextBtn').textContent='🔁 Repetir esta práctica';
    el('cgPracticaNextBtn').onclick = ()=>{
      el('cgPracticaInput').style.display='';
      el('cgPracticaSendBtn').style.display='inline-flex';
      openPractica();
    };
  }

  window.addEventListener('DOMContentLoaded', ()=>{
    el('cgEntryBtn').onclick = openModule;
    el('cgBackBtn').onclick = closeModule;
    el('cgBackToReglasBtn').onclick = ()=>{ showView('reglas'); renderReglaList(); };
    el('cgPracticaBtn').onclick = openPractica;
    el('cgBackFromPracticaBtn').onclick = ()=>{ showView('detalle'); };
    el('cgPracticaSendBtn').onclick = submitPracticaAnswer;
    el('cgPracticaInput').addEventListener('keydown', e=>{ if(e.key==='Enter') submitPracticaAnswer(); });
    el('cgPracticaNextBtn').onclick = ()=>{ practicaIdx++; showPracticaItem(); };
  });
})();

