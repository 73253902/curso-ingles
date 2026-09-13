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
    {nivel:"avanzado", en:"Scholarship", opciones:["Matrícula", "Título universitario", "Beca", "Curso en línea"], correcta:2},
    {nivel:"basico", en:"Good morning", opciones:["Buenas noches", "Buenos días", "Buenas tardes", "Buen provecho"], correcta:1},
    {nivel:"basico", en:"Please", opciones:["Gracias", "De nada", "Por favor", "Disculpe"], correcta:2},
    {nivel:"basico", en:"Excuse me", opciones:["Con permiso", "Lo siento", "De nada", "Hola"], correcta:0},
    {nivel:"basico", en:"Sorry", opciones:["Gracias", "Lo siento", "Por favor", "De nada"], correcta:1},
    {nivel:"basico", en:"Husband", opciones:["Esposa", "Hermano", "Esposo", "Hijo"], correcta:2},
    {nivel:"basico", en:"Daughter", opciones:["Hija", "Hijo", "Hermana", "Madre"], correcta:0},
    {nivel:"basico", en:"Tomorrow", opciones:["Ayer", "Hoy", "Mañana", "Ahora"], correcta:2},
    {nivel:"basico", en:"I don't know", opciones:["No entiendo", "No sé", "Está bien", "No puedo"], correcta:1},
    {nivel:"intermedio", en:"Receipt", opciones:["Factura de servicios", "Recibo de compra", "Contrato", "Presupuesto"], correcta:1},
    {nivel:"intermedio", en:"Refund", opciones:["Descuento", "Reembolso", "Cambio de producto", "Garantía"], correcta:1},
    {nivel:"intermedio", en:"Discount", opciones:["Descuento", "Recibo", "Impuesto", "Propina"], correcta:0},
    {nivel:"intermedio", en:"Exchange (a product)", opciones:["Devolver el dinero", "Cambiar por otro", "Reparar", "Regalar"], correcta:1},
    {nivel:"intermedio", en:"Cash", opciones:["Tarjeta de crédito", "Cheque", "Efectivo", "Transferencia"], correcta:2},
    {nivel:"intermedio", en:"Customer service", opciones:["Ventas", "Servicio al cliente", "Recursos humanos", "Contabilidad"], correcta:1},
    {nivel:"intermedio", en:"Available", opciones:["Agotado", "Disponible", "Reservado", "Dañado"], correcta:1},
    {nivel:"intermedio", en:"Out of stock", opciones:["Disponible", "En oferta", "Agotado", "Reservado"], correcta:2},
    {nivel:"avanzado", en:"Deadline", opciones:["Presupuesto", "Fecha límite", "Reunión", "Contrato"], correcta:1},
    {nivel:"avanzado", en:"Negotiate", opciones:["Firmar", "Negociar", "Cancelar", "Aprobar"], correcta:1},
    {nivel:"avanzado", en:"Contract", opciones:["Contrato", "Presupuesto", "Factura", "Currículum"], correcta:0},
    {nivel:"avanzado", en:"Investment", opciones:["Ahorro", "Préstamo", "Inversión", "Deuda"], correcta:2},
    {nivel:"avanzado", en:"Promotion (at work)", opciones:["Renuncia", "Ascenso", "Despido", "Vacaciones"], correcta:1},
    {nivel:"avanzado", en:"Budget", opciones:["Presupuesto", "Salario", "Impuesto", "Factura"], correcta:0},
    {nivel:"avanzado", en:"Colleague", opciones:["Jefe", "Cliente", "Colega", "Proveedor"], correcta:2},
    {nivel:"avanzado", en:"Salary", opciones:["Bono", "Salario", "Ahorro", "Presupuesto"], correcta:1}
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
    {nivel:"avanzado", frase:"I trust my team ___ finish this on time.", opciones:["finish", "finishing", "to", "for"], correcta:2},
    {nivel:"basico", frase:"She ___ from Bogotá.", opciones:["am", "is", "are", "be"], correcta:1},
    {nivel:"basico", frase:"They ___ two children.", opciones:["has", "have", "having", "is"], correcta:1},
    {nivel:"basico", frase:"This is ___ apple.", opciones:["a", "an", "the", "some"], correcta:1},
    {nivel:"basico", frase:"He ___ like coffee.", opciones:["don't", "doesn't", "not", "isn't"], correcta:1},
    {nivel:"basico", frase:"___ you speak English?", opciones:["Do", "Does", "Are", "Is"], correcta:0},
    {nivel:"basico", frase:"I ___ two brothers.", opciones:["am", "have", "has", "do"], correcta:1},
    {nivel:"basico", frase:"We ___ at home right now.", opciones:["is", "am", "are", "be"], correcta:2},
    {nivel:"basico", frase:"What ___ your name?", opciones:["is", "are", "do", "does"], correcta:0},
    {nivel:"intermedio", frase:"I have ___ finished the report yet.", opciones:["already", "yet", "not", "still"], correcta:2},
    {nivel:"intermedio", frase:"She ___ to the store yesterday.", opciones:["go", "goes", "went", "going"], correcta:2},
    {nivel:"intermedio", frase:"This jacket is ___ than that one.", opciones:["cheap", "cheaper", "cheapest", "more cheap"], correcta:1},
    {nivel:"intermedio", frase:"You ___ call before you visit.", opciones:["should", "are", "do", "did"], correcta:0},
    {nivel:"intermedio", frase:"The store ___ open until 9pm.", opciones:["are", "is", "be", "being"], correcta:1},
    {nivel:"intermedio", frase:"I ___ never been to that store.", opciones:["have", "has", "had", "having"], correcta:0},
    {nivel:"intermedio", frase:"Can you ___ me with this, please?", opciones:["helps", "helping", "help", "helped"], correcta:2},
    {nivel:"intermedio", frase:"We ___ to finish this by Friday.", opciones:["need", "needs", "needing", "needed"], correcta:0},
    {nivel:"avanzado", frase:"If I ___ more time, I would finish it today.", opciones:["have", "had", "having", "has"], correcta:1},
    {nivel:"avanzado", frase:"She said she ___ call me back later.", opciones:["will", "would", "is", "was"], correcta:1},
    {nivel:"avanzado", frase:"The report ___ by the manager before it was sent.", opciones:["reviewed", "was reviewed", "reviews", "is reviewing"], correcta:1},
    {nivel:"avanzado", frase:"I look forward ___ from you soon.", opciones:["to hear", "hearing", "to hearing", "hear"], correcta:2},
    {nivel:"avanzado", frase:"The client, ___ office is downtown, called this morning.", opciones:["who", "which", "whose", "that"], correcta:2},
    {nivel:"avanzado", frase:"By next year, we ___ the new system.", opciones:["will implement", "will have implemented", "implement", "implemented"], correcta:1},
    {nivel:"avanzado", frase:"He suggested ___ the meeting until Monday.", opciones:["postpone", "to postpone", "postponing", "postponed"], correcta:2},
    {nivel:"avanzado", frase:"Despite ___ tired, she finished the project.", opciones:["be", "being", "been", "to be"], correcta:1}
  ],

  lectura: {
    basico: [ {texto:"My name is Ana. I am from Medellín. I work at a small store downtown. I sell clothes and shoes. My husband works at a bank. We have two children, a son and a daughter. In the morning, I say good morning to my customers. In the afternoon, I say good afternoon. I am always happy to help. Thank you for reading!", preguntas:[
      {pregunta:"Where is Ana from?", opciones:["Bogotá", "Medellín", "Cali"], correcta:1},
      {pregunta:"What does Ana sell?", opciones:["Food", "Clothes and shoes", "Books"], correcta:1},
      {pregunta:"Where does her husband work?", opciones:["A store", "A bank", "A school"], correcta:1},
      {pregunta:"How many children do they have?", opciones:["One", "Two", "Three"], correcta:1}
    ]},
    {texto:"My name is Luis. I am a taxi driver in Bogotá. I start work at six in the morning. I drive many people to their jobs every day. At noon, I eat lunch with my coworkers. In the evening, I go home to my family. I have one daughter. She is seven years old. I love my job because I meet new people every day.", preguntas:[
      {pregunta:"What is Luis's job?", opciones:["Bus driver", "Taxi driver", "Mechanic"], correcta:1},
      {pregunta:"What time does he start work?", opciones:["Six in the morning", "Noon", "Seven at night"], correcta:0},
      {pregunta:"How old is his daughter?", opciones:["Six", "Seven", "Ten"], correcta:1},
      {pregunta:"Why does he love his job?", opciones:["It pays well", "He meets new people", "It's easy"], correcta:1}
    ]},
    {texto:"Today is Saturday. My family and I go to the park together. My son plays soccer with his friends. My wife and I sit and talk. We bring sandwiches and juice for lunch. After the park, we go to the supermarket to buy food for the week. At night, we watch a movie at home. Saturdays are my favorite day.", preguntas:[
      {pregunta:"What day is it?", opciones:["Sunday", "Saturday", "Friday"], correcta:1},
      {pregunta:"What does the son do at the park?", opciones:["Plays soccer", "Reads a book", "Rides a bike"], correcta:0},
      {pregunta:"Where do they go after the park?", opciones:["Home", "The supermarket", "A restaurant"], correcta:1},
      {pregunta:"What do they do at night?", opciones:["Watch a movie", "Go dancing", "Visit friends"], correcta:0}
    ]}],
    intermedio: [ {texto:"Last week, I went shopping for a new jacket. I tried it on in the fitting room, but it was too big. The sales assistant helped me find a medium size instead. It fit perfectly! I paid with my credit card, and I asked about the warranty. The store said the jacket was covered for one year. If anything is not covered, I can bring it back for a repair or a replacement.", preguntas:[
      {pregunta:"What did the person try to buy?", opciones:["Pants", "A jacket", "A dress"], correcta:1},
      {pregunta:"Why didn't the first size work?", opciones:["Too small", "Wrong color", "Too big"], correcta:2},
      {pregunta:"How did they pay?", opciones:["Cash", "Credit card", "Check"], correcta:1},
      {pregunta:"How long is the warranty?", opciones:["Six months", "One year", "Two years"], correcta:1}
    ]},
    {texto:"Last month, I moved to a new apartment. I needed to set up internet and cable service. I called the company and scheduled an appointment. The technician arrived on time and installed everything in two hours. He explained how to use the new router. Before he left, I signed a contract for twelve months. Now I have fast internet at home.", preguntas:[
      {pregunta:"What did the person set up?", opciones:["Only cable", "Internet and cable", "Only internet"], correcta:1},
      {pregunta:"How long did the technician take?", opciones:["One hour", "Two hours", "Three hours"], correcta:1},
      {pregunta:"What did the person sign?", opciones:["A receipt", "A contract", "A warranty"], correcta:1},
      {pregunta:"How long is the contract?", opciones:["Six months", "Twelve months", "Two years"], correcta:1}
    ]},
    {texto:"I recently had a problem with my car. It made a strange noise when I started the engine. I took it to a mechanic near my house. He checked the engine and found a broken part. He ordered a new part and it arrived the next day. The repair took three hours and cost two hundred dollars. Now my car works perfectly again.", preguntas:[
      {pregunta:"What was the problem?", opciones:["Flat tire", "Strange noise in the engine", "Broken window"], correcta:1},
      {pregunta:"Where did he take the car?", opciones:["A mechanic", "A dealership", "A gas station"], correcta:0},
      {pregunta:"How long did the repair take?", opciones:["One hour", "Three hours", "A full day"], correcta:1},
      {pregunta:"How much did it cost?", opciones:["One hundred dollars", "Two hundred dollars", "Three hundred dollars"], correcta:1}
    ]}],
    avanzado: [ {texto:"Maria recently applied for a new job. She sent her resume and a cover letter, highlighting her strengths in public speaking and customer service. During the interview, she explained her salary expectations and her experience managing a team. The interviewer was impressed by her confidence. A week later, Maria received a job offer. She also needed to rent a new apartment closer to the office, so she contacted a landlord about a one-bedroom unit downtown.", preguntas:[
      {pregunta:"What did Maria send to apply?", opciones:["Only her resume", "A resume and a cover letter", "A video"], correcta:1},
      {pregunta:"What skills did she highlight?", opciones:["Public speaking and customer service", "Accounting", "Cooking"], correcta:0},
      {pregunta:"What did the interviewer think of her?", opciones:["Unprepared", "Confident", "Late"], correcta:1},
      {pregunta:"What did Maria need after getting the job?", opciones:["A new car", "A new apartment", "A new phone"], correcta:1}
    ]},
    {texto:"Our company is planning to expand into a new market next year. The board of directors approved a budget increase to support this initiative. We need to hire additional staff, including sales representatives and a marketing coordinator. The CEO emphasized the importance of building strong relationships with local partners. We are optimistic about the growth potential, although we recognize the risks involved.", preguntas:[
      {pregunta:"What is the company planning?", opciones:["Close a branch", "Expand into a new market", "Merge with another company"], correcta:1},
      {pregunta:"Who approved the budget increase?", opciones:["The CEO alone", "The board of directors", "The marketing team"], correcta:1},
      {pregunta:"What roles do they need to hire?", opciones:["Sales reps and a marketing coordinator", "Engineers", "Accountants"], correcta:0},
      {pregunta:"What did the CEO emphasize?", opciones:["Cutting costs", "Building relationships with local partners", "Reducing staff"], correcta:1}
    ]},
    {texto:"During the annual performance review, my supervisor discussed my achievements over the past year. She mentioned that I successfully led two major projects and improved efficiency in our department. However, she also suggested I develop stronger public speaking skills. We agreed on a professional development plan, including a communication workshop and a mentorship program. I feel motivated to grow in my career.", preguntas:[
      {pregunta:"What did the supervisor discuss?", opciones:["Salary increase", "Achievements over the past year", "Vacation days"], correcta:1},
      {pregunta:"How many major projects did the person lead?", opciones:["One", "Two", "Three"], correcta:1},
      {pregunta:"What skill does the person need to improve?", opciones:["Writing", "Public speaking", "Time management"], correcta:1},
      {pregunta:"What did they agree on?", opciones:["A raise", "A professional development plan", "A new job title"], correcta:1}
    ]}]
  },

  escritura: {
    basico: [
      {consigna:"Escribe 3-4 oraciones presentándote: tu nombre, de dónde eres, y qué trabajo haces.", palabrasClave:["name", "from", "work"], minPalabrasClave:2, minPalabras:15},
      {consigna:"Escribe 3-4 oraciones sobre tu familia: cuántos son, y qué hace cada uno.", palabrasClave:["family", "brother", "sister", "mother", "father"], minPalabrasClave:2, minPalabras:15},
      {consigna:"Escribe 3-4 oraciones sobre tu rutina diaria: a qué hora te levantas, y qué haces en la mañana.", palabrasClave:["wake up", "morning", "breakfast", "work"], minPalabrasClave:2, minPalabras:15}
    ],
    intermedio: [
      {consigna:"Escribe 3-4 oraciones sobre una compra reciente que hiciste (ropa, algo con garantía, etc).", palabrasClave:["warranty", "size", "covered", "fitting room", "credit card"], minPalabrasClave:2, minPalabras:20},
      {consigna:"Escribe 3-4 oraciones sobre una vez que llamaste a servicio al cliente por un problema.", palabrasClave:["customer service", "problem", "refund", "receipt"], minPalabrasClave:2, minPalabras:20},
      {consigna:"Escribe 3-4 oraciones sobre cómo planificarías un viaje: adónde, cuándo, y qué necesitas reservar.", palabrasClave:["travel", "book", "hotel", "flight"], minPalabrasClave:2, minPalabras:20}
    ],
    avanzado: [
      {consigna:"Escribe un párrafo corto (4-5 oraciones) describiendo tu experiencia laboral y tus planes futuros.", palabrasClave:["experience", "responsible", "rent", "invest", "confident"], minPalabrasClave:2, minPalabras:30},
      {consigna:"Escribe un párrafo describiendo un proyecto de trabajo importante en el que participaste.", palabrasClave:["project", "deadline", "team", "achieve"], minPalabrasClave:2, minPalabras:30},
      {consigna:"Escribe un párrafo sobre tus metas profesionales para los próximos cinco años.", palabrasClave:["goal", "career", "improve", "opportunity"], minPalabrasClave:2, minPalabras:30}
    ]
  },

  escucha: {
    basico: [
    {
      partes: [
        {t:"My name is "}, {blank:"Diego"}, {t:". I live in "}, {blank:"Medellín"}, {t:". I have a wife and one "}, {blank:"son"}, {t:". I go to work by "}, {blank:"bus"}, {t:" at "}, {blank:"seven"}, {t:" o'clock. Thank you for listening!"}
      ]
    },
    {
      partes: [
        {t:"On "}, {blank:"Sunday"}, {t:" "}, {blank:"morning"}, {t:", I clean my house. Then I cook lunch for my family. My "}, {blank:"mother"}, {t:" visits us every week. We eat together at "}, {blank:"noon"}, {t:". In the afternoon, I rest and watch "}, {blank:"television"}, {t:"."}
      ]
    },
    {
      partes: [
        {t:"My name is "}, {blank:"Sofia"}, {t:". I study at "}, {blank:"night"}, {t:". I work during the day at a "}, {blank:"hospital"}, {t:". I am a "}, {blank:"nurse"}, {t:". I help many "}, {blank:"patients"}, {t:" every day. I am proud of my job."}
      ]
    }
    ],
    intermedio: [
    {
      partes: [
        {t:"Yesterday, I called customer service about my new "}, {blank:"phone"}, {t:". It stopped working after "}, {blank:"two"}, {t:" days. The representative asked for my "}, {blank:"receipt"}, {t:" and the date of purchase. She said it was still covered by the "}, {blank:"warranty"}, {t:", and I will receive a "}, {blank:"replacement"}, {t:" next week."}
      ]
    },
    {
      partes: [
        {t:"Last week, I booked a "}, {blank:"hotel"}, {t:" room online. When I arrived, the room was not "}, {blank:"ready"}, {t:". The front desk apologized and gave me a free "}, {blank:"breakfast"}, {t:". I stayed for "}, {blank:"three"}, {t:" nights. Overall, it was a good "}, {blank:"experience"}, {t:"."}
      ]
    },
    {
      partes: [
        {t:"I bought a "}, {blank:"laptop"}, {t:" last month, but it stopped working yesterday. I called the store to ask about my "}, {blank:"warranty"}, {t:". They asked me to bring the "}, {blank:"invoice"}, {t:" and the original box. The "}, {blank:"manager"}, {t:" promised a full "}, {blank:"refund"}, {t:" within a week."}
      ]
    }
    ],
    avanzado: [
    {
      partes: [
        {t:"During the meeting, the manager announced a new project "}, {blank:"deadline"}, {t:". She explained that the team needed to increase "}, {blank:"productivity"}, {t:" and improve "}, {blank:"communication"}, {t:" between departments. Everyone agreed to schedule "}, {blank:"weekly"}, {t:" progress reports, and stay within "}, {blank:"budget"}, {t:"."}
      ]
    },
    {
      partes: [
        {t:"During the "}, {blank:"negotiation"}, {t:", both companies discussed the terms of the contract. The "}, {blank:"lawyer"}, {t:" suggested a few changes to protect our interests. After several hours, we reached an "}, {blank:"agreement"}, {t:" that satisfied everyone. The "}, {blank:"deal"}, {t:" will be signed next "}, {blank:"Monday"}, {t:"."}
      ]
    },
    {
      partes: [
        {t:"The "}, {blank:"conference"}, {t:" began with a "}, {blank:"keynote"}, {t:" speech about innovation. Several speakers shared their "}, {blank:"research"}, {t:" and experience. During the "}, {blank:"networking"}, {t:" session, I met potential business partners. It was a valuable "}, {blank:"opportunity"}, {t:" for my career."}
      ]
    }
    ]
  }
};

// ================= Controlador de la Evaluación de 5 Fases =================
(function(){
  function el(id){ return document.getElementById(id); }
  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  let modo = 'inicial'; // 'inicial' o 'final'
  let fase = 1;
  let vocabItems=[], vocabIdx=0, vocabCorrect=0, vocabNoSe=0;
  let gramItems=[], gramIdx=0, gramCorrect=0, gramNoSe=0;
  let nivelCalibrado='basico';
  let lecturaPreguntaIdx=0, lecturaCorrect=0, lecturaTextoIdx=0;
  let escuchaCorrect=0, escuchaTotal=0, escuchaHistoriaIdx=0;
  let escrituraAprobadasCount=0, escrituraIntentos=0, escrituraConsignaIdx=0;

  function iniciarEvaluacion(modoElegido){
    modo = modoElegido || 'inicial';
    fase = 1;
    vocabItems = shuffle(evaluacion.vocabulario);
    vocabIdx=0; vocabCorrect=0; vocabNoSe=0;
    gramItems = shuffle(evaluacion.gramatica);
    gramIdx=0; gramCorrect=0; gramNoSe=0;
    lecturaCorrect=0; lecturaPreguntaIdx=0; lecturaTextoIdx=0;
    escuchaCorrect=0; escuchaTotal=0; escuchaHistoriaIdx=0;
    escrituraAprobadasCount=0; escrituraIntentos=0; escrituraConsignaIdx=0;

    el('home').style.display='none';
    el('evaluacionModulo').style.display='block';
    el('evTituloModo').textContent = modo==='final' ? 'Examen final del curso' : 'Evaluación de nivel inicial';
    mostrarFaseIntro();
  }

  function mostrarFaseIntro(){
    const nombres = {1:'Vocabulario', 2:'Gramática', 3:'Comprensión de lectura', 4:'Comprensión auditiva', 5:'Escritura guiada'};
    const iconos = {1:'📚', 2:'🧩', 3:'📖', 4:'🎧', 5:'✍️'};
    el('evFaseBox').style.display='none';
    el('evIntroBox').style.display='block';
    el('evIntroTitulo').textContent = iconos[fase]+' Fase '+fase+' de 5 — '+nombres[fase];
    const descripciones = {
      1: 'Vas a ver 36 palabras en inglés. Elige su significado correcto en español.',
      2: 'Vas a ver 36 oraciones incompletas. Elige la palabra correcta para completarlas.',
      3: 'Vas a leer un texto corto en inglés, y responder preguntas sobre lo que leíste.',
      4: 'Vas a escuchar una historia corta en inglés (puedes repetirla las veces que quieras), y completar las palabras que faltan.',
      5: 'Vas a escribir un texto corto en inglés, siguiendo una consigna — esta fase se revisa distinto a las demás.'
    };
    el('evIntroDesc').textContent = descripciones[fase];
    el('evIntroBtn').onclick = ()=>{
      el('evIntroBox').style.display='none';
      el('evFaseBox').style.display='block';
      if(fase===1) renderVocabPregunta();
      else if(fase===2) renderGramaticaPregunta();
      else if(fase===3) renderLecturaIntro();
      else if(fase===4) renderEscucha();
      else if(fase===5) renderEscritura();
    };
  }

  function renderProgreso(actual, total){
    el('evFaseProgreso').textContent = 'Fase '+fase+' de 5 · pregunta '+actual+' de '+total;
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
    const noSeBtn = document.createElement('button');
    noSeBtn.className='ghost'; noSeBtn.style.cssText='display:block; width:100%; text-align:left; margin-top:6px; color:var(--muted); font-style:italic;';
    noSeBtn.textContent='No sé';
    noSeBtn.onclick = ()=>{
      vocabNoSe++;
      opcBox.querySelectorAll('button').forEach(b=>b.disabled=true);
      noSeBtn.style.borderColor = 'var(--muted)';
      setTimeout(()=>{ vocabIdx++; renderVocabPregunta(); }, 500);
    };
    opcBox.appendChild(noSeBtn);
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
    el('evPregunta').innerHTML = 'Completa: <br><span style="font-size:19px; color:var(--en);">'+item.frase.replace('___','<b style="color:var(--warn);">___</b>')+'</span>';
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
    const noSeBtn = document.createElement('button');
    noSeBtn.className='ghost'; noSeBtn.style.cssText='display:block; width:100%; text-align:left; margin-top:6px; color:var(--muted); font-style:italic;';
    noSeBtn.textContent='No sé';
    noSeBtn.onclick = ()=>{
      gramNoSe++;
      opcBox.querySelectorAll('button').forEach(b=>b.disabled=true);
      noSeBtn.style.borderColor = 'var(--muted)';
      setTimeout(()=>{ gramIdx++; renderGramaticaPregunta(); }, 500);
    };
    opcBox.appendChild(noSeBtn);
  }

  // ---------- FASE 3: Comprensión de lectura ----------
  function renderLecturaIntro(){
    const datos = evaluacion.lectura[nivelCalibrado][lecturaTextoIdx];
    el('evPregunta').innerHTML = '<div class="dn-review-prompt" style="text-align:left; line-height:1.6;">'+datos.texto+'</div>';
    el('evOpciones').innerHTML='';
    const cont = document.createElement('button');
    cont.className='primary'; cont.style.marginTop='14px';
    cont.textContent='Ya leí el texto, empezar las preguntas →';
    cont.onclick = ()=>{ lecturaPreguntaIdx=0; renderLecturaPregunta(); };
    el('evOpciones').appendChild(cont);
    el('evFaseProgreso').textContent = 'Fase 3 de 5 · Comprensión de lectura ('+nivelCalibrado+') · texto '+(lecturaTextoIdx+1)+' de '+evaluacion.lectura[nivelCalibrado].length;
  }
  function renderLecturaPregunta(){
    const datos = evaluacion.lectura[nivelCalibrado][lecturaTextoIdx];
    if(lecturaPreguntaIdx>=datos.preguntas.length){
      if(lecturaTextoIdx+1 < evaluacion.lectura[nivelCalibrado].length){
        lecturaTextoIdx++;
        renderLecturaIntro();
      } else {
        fase=4; mostrarFaseIntro();
      }
      return;
    }
    const p = datos.preguntas[lecturaPreguntaIdx];
    el('evFaseProgreso').textContent = 'Fase 3 de 5 · texto '+(lecturaTextoIdx+1)+' de '+evaluacion.lectura[nivelCalibrado].length+' · pregunta '+(lecturaPreguntaIdx+1)+' de '+datos.preguntas.length;
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

  // ---------- FASE 4: Comprensión auditiva ----------
  let escuchaInputs = [];
  function renderEscucha(){
    const datos = evaluacion.escucha[nivelCalibrado][escuchaHistoriaIdx];
    const totalHistorias = evaluacion.escucha[nivelCalibrado].length;
    el('evFaseProgreso').textContent = 'Fase 4 de 5 · Comprensión auditiva ('+nivelCalibrado+') · historia '+(escuchaHistoriaIdx+1)+' de '+totalHistorias;
    escuchaInputs = [];

    const textoCompleto = datos.partes.map(p => p.t !== undefined ? p.t : p.blank).join('');

    const box = document.createElement('div');
    box.innerHTML = '<p style="margin-bottom:10px;">Escucha la historia (repítela las veces que quieras), y completa las palabras que faltan:</p>';

    const listenBtn = document.createElement('button');
    listenBtn.className='primary'; listenBtn.style.marginBottom='14px';
    listenBtn.textContent='🔊 Escuchar la historia';
    listenBtn.onclick = async ()=>{
      listenBtn.disabled=true;
      try{
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(textoCompleto);
        u.lang='en-US';
        await new Promise(res=>{ u.onend=res; u.onerror=res; speechSynthesis.speak(u); });
      } catch(e){}
      listenBtn.disabled=false;
    };
    box.appendChild(listenBtn);

    const textoBox = document.createElement('div');
    textoBox.className='dn-review-prompt';
    textoBox.style.cssText='text-align:left; line-height:2.2;';
    datos.partes.forEach(p=>{
      if(p.t !== undefined){
        textoBox.appendChild(document.createTextNode(p.t));
      } else {
        const input = document.createElement('input');
        input.type='text';
        input.style.cssText='width:110px; margin:0 4px; background:var(--bg-panel-2); border:1px solid var(--border); border-radius:6px; padding:4px 8px; color:var(--ink); font-family:inherit; font-size:15px; text-align:center;';
        escuchaInputs.push({input, correcta:p.blank});
        textoBox.appendChild(input);
      }
    });
    box.appendChild(textoBox);

    const sendBtn = document.createElement('button');
    sendBtn.className='primary'; sendBtn.style.marginTop='14px';
    sendBtn.textContent='Revisar mis respuestas';
    sendBtn.onclick = ()=>{
      let correctas = 0;
      escuchaInputs.forEach(item=>{
        const escrito = item.input.value.trim();
        const ok = escrito.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'') === item.correcta.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
        item.input.style.borderColor = ok ? 'var(--ok)' : 'var(--warn)';
        if(ok) correctas++;
      });
      escuchaCorrect += correctas;
      escuchaTotal += escuchaInputs.length;
      sendBtn.style.display='none';
      const seguirBtn = document.createElement('button');
      seguirBtn.className='primary'; seguirBtn.style.marginTop='10px';
      const hayMasHistorias = escuchaHistoriaIdx+1 < totalHistorias;
      seguirBtn.textContent = correctas+' de '+escuchaInputs.length+' correctas — '+(hayMasHistorias?'Siguiente historia →':'Continuar →');
      seguirBtn.onclick = ()=>{
        if(hayMasHistorias){ escuchaHistoriaIdx++; renderEscucha(); }
        else { fase=5; mostrarFaseIntro(); }
      };
      box.appendChild(seguirBtn);
    };
    box.appendChild(sendBtn);

    el('evPregunta').innerHTML='';
    el('evPregunta').appendChild(box);
    el('evOpciones').innerHTML='';
  }

  // ---------- FASE 5: Escritura guiada ----------
  function renderEscritura(){
    const datos = evaluacion.escritura[nivelCalibrado][escrituraConsignaIdx];
    const totalConsignas = evaluacion.escritura[nivelCalibrado].length;
    el('evFaseProgreso').textContent = 'Fase 5 de 5 · Escritura guiada ('+nivelCalibrado+') · consigna '+(escrituraConsignaIdx+1)+' de '+totalConsignas;
    el('evPregunta').innerHTML = '<b>Consigna:</b> '+datos.consigna+'<br><span style="font-size:13px; color:var(--muted);">Intenta usar al menos '+datos.minPalabrasClave+' de estas palabras: '+datos.palabrasClave.join(', ')+'. Mínimo '+datos.minPalabras+' palabras en total.</span>';
    const opcBox = el('evOpciones');
    opcBox.innerHTML='';
    const textarea = document.createElement('textarea');
    textarea.id='evEscrituraInput';
    textarea.style.cssText='width:100%; min-height:120px; padding:12px; border-radius:10px; border:1px solid var(--border); background:var(--bg-panel); color:var(--text); font-family:inherit; font-size:15px;';
    textarea.placeholder='Escribe acá tu respuesta en inglés...';
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
      const aprobadaEsta = cumpleLargo && cumpleClaves;
      if(aprobadaEsta) escrituraAprobadasCount++;
      escrituraIntentos++;
      const fb = document.createElement('div');
      fb.style.cssText='margin-top:10px; padding:10px; border-radius:8px; font-size:13px;';
      if(aprobadaEsta){
        fb.style.background='rgba(90,200,140,.12)'; fb.style.color='var(--ok)';
        fb.textContent = '✓ Bien — usaste '+palabras.length+' palabras, y '+clavesUsadas.length+' palabras clave ('+clavesUsadas.join(', ')+').';
      } else {
        fb.style.background='rgba(230,160,60,.12)'; fb.style.color='var(--warn)';
        fb.textContent = 'Casi — escribiste '+palabras.length+' palabras (mínimo '+datos.minPalabras+'), y usaste '+clavesUsadas.length+' palabras clave (mínimo '+datos.minPalabrasClave+'). Igual seguimos.';
      }
      opcBox.appendChild(fb);
      sendBtn.style.display='none';
      const hayMasConsignas = escrituraConsignaIdx+1 < totalConsignas;
      const seguirBtn = document.createElement('button');
      seguirBtn.className='primary'; seguirBtn.style.marginTop='10px';
      seguirBtn.textContent = hayMasConsignas ? 'Siguiente consigna →' : 'Ver mi resultado final →';
      seguirBtn.onclick = ()=>{
        if(hayMasConsignas){ escrituraConsignaIdx++; renderEscritura(); }
        else { mostrarResultadoFinal(); }
      };
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
    const datosLectura = evaluacion.lectura[nivelCalibrado];
    const lecturaTotalPreguntas = datosLectura.reduce((sum,t)=>sum+t.preguntas.length, 0);
    const lecturaPct = Math.round((lecturaCorrect/lecturaTotalPreguntas)*100);
    const escuchaPct = escuchaTotal>0 ? Math.round((escuchaCorrect/escuchaTotal)*100) : 0;
    const escrituraPct = escrituraIntentos>0 ? Math.round((escrituraAprobadasCount/escrituraIntentos)*100) : 0;
    const promedioFinal = Math.round((vocabPct+gramPct+lecturaPct+escuchaPct+escrituraPct)/5);

    el('evResumenTabla').innerHTML =
      '<div class="ev-resumen-fila"><span>📚 Vocabulario</span><b>'+vocabCorrect+'/'+vocabItems.length+' ('+vocabPct+'%)'+(vocabNoSe>0?' · '+vocabNoSe+' "no sé"':'')+'</b></div>'+
      '<div class="ev-resumen-fila"><span>🧩 Gramática</span><b>'+gramCorrect+'/'+gramItems.length+' ('+gramPct+'%)'+(gramNoSe>0?' · '+gramNoSe+' "no sé"':'')+'</b></div>'+
      '<div class="ev-resumen-fila"><span>📖 Lectura ('+nivelCalibrado+')</span><b>'+lecturaCorrect+'/'+lecturaTotalPreguntas+' ('+lecturaPct+'%)</b></div>'+
      '<div class="ev-resumen-fila"><span>🎧 Comprensión auditiva ('+nivelCalibrado+')</span><b>'+escuchaCorrect+'/'+escuchaTotal+' ('+escuchaPct+'%)</b></div>'+
      '<div class="ev-resumen-fila"><span>✍️ Escritura ('+nivelCalibrado+')</span><b>'+escrituraAprobadasCount+'/'+escrituraIntentos+' aprobadas ('+escrituraPct+'%)</b></div>'+
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
      el('evResultTexto').textContent = 'Con un '+promedioFinal+'% general, tu nivel calibrado es "'+nivelCalibrado+'". Te recomendamos empezar en el Día '+recommendedDay+' — los días anteriores quedan desbloqueados igual, por si quieres repasarlos primero.';
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
