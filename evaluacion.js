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


// ================================================================
// EXAMEN FINAL — banco de preguntas APARTE del de nivelación,
// construido con vocabulario y estructuras REALES de las 15 unidades
// del curso (180 días), para medir de verdad lo que el alumno aprendió.
// NOTA: lectura/escucha/escritura todavía usan contenido temporal
// (se reemplaza por historias/textos reales del curso próximamente).
// ================================================================
const examenFinal = {
  vocabulario: [
    {en:"Deadline-driven", opciones:["Desorganizado", "Sin experiencia", "Orientado a plazos", "Poco confiable"], correcta:2},
    {en:"Elevator pitch", opciones:["Presentación breve y persuasiva", "Entrevista larga", "Carta de renuncia", "Queja formal"], correcta:0},
    {en:"Binding agreement", opciones:["Propuesta informal", "Acuerdo vinculante", "Borrador sin firmar", "Contrato vencido"], correcta:1},
    {en:"To breach a contract", opciones:["Traducir un contrato", "Renovar un contrato", "Firmar un contrato", "Incumplir un contrato"], correcta:3},
    {en:"Liability", opciones:["Vacaciones pagas", "Responsabilidad legal", "Beneficio anual", "Bono de productividad"], correcta:1},
    {en:"Leverage (negotiation)", opciones:["Documento firmado", "Reunión cancelada", "Influencia o ventaja", "Pérdida total"], correcta:2},
    {en:"Counterproposal", opciones:["Aprobación final", "Copia del contrato", "Rechazo total", "Contrapropuesta"], correcta:3},
    {en:"Fiscal year", opciones:["Día de pago", "Año fiscal", "Semana laboral", "Mes de vacaciones"], correcta:1},
    {en:"Profit margin", opciones:["Deuda total", "Tasa de interés", "Margen de ganancia", "Presupuesto anual"], correcta:2},
    {en:"To concede (in a negotiation)", opciones:["Ganar todo", "Rechazar de plano", "Cancelar la reunión", "Ceder un punto"], correcta:3},
    {en:"Common ground", opciones:["Plazo vencido", "Punto en común", "Desacuerdo total", "Oferta final"], correcta:1},
    {en:"Win-win situation", opciones:["Ventaja injusta", "Situación sin solución", "Pérdida para ambos", "Situación en que todos ganan"], correcta:3},
    {en:"Mediator", opciones:["Acusado", "Testigo", "Mediador", "Demandante"], correcta:2},
    {en:"Bottom line", opciones:["Primera línea del contrato", "Firma digital", "Resultado final, lo esencial", "Fecha de vencimiento"], correcta:2},
    {en:"Stakeholder", opciones:["Empleado nuevo", "Proveedor externo", "Cliente moroso", "Parte interesada"], correcta:3},
    {en:"Deliverable", opciones:["Entregable", "Presupuesto anual", "Queja formal", "Vacante laboral"], correcta:0},
    {en:"Resource allocation", opciones:["Asignación de recursos", "Devolución de producto", "Renuncia voluntaria", "Auditoría externa"], correcta:0},
    {en:"Compliance", opciones:["Pérdida operativa", "Cumplimiento normativo", "Rechazo total", "Ganancia neta"], correcta:1},
    {en:"Escalation path", opciones:["Programa de descuentos", "Vía de escalamiento", "Plan de jubilación", "Ruta de envío"], correcta:1},
    {en:"Contingency plan", opciones:["Carta de renuncia", "Contrato vencido", "Informe anual", "Plan de contingencia"], correcta:3},
    {en:"Damage control", opciones:["Control de daños", "Reducción de personal", "Aumento de ventas", "Auditoría interna"], correcta:0},
    {en:"Carbon footprint", opciones:["Margen de ganancia", "Huella de carbono", "Cuota mensual", "Tasa de interés"], correcta:1},
    {en:"Bill of lading", opciones:["Póliza de seguro", "Factura de venta", "Contrato laboral", "Conocimiento de embarque"], correcta:3},
    {en:"Freight forwarder", opciones:["Auditor externo", "Agente de carga", "Gerente de recursos humanos", "Vendedor minorista"], correcta:1},
    {en:"Downtime", opciones:["Turno nocturno", "Tiempo de inactividad", "Horario extendido", "Día de pago"], correcta:1},
    {en:"Onboarding", opciones:["Renovación de contrato", "Proceso de despido", "Evaluación anual", "Proceso de incorporación"], correcta:3},
    {en:"Sales funnel", opciones:["Embudo de ventas", "Catálogo de productos", "Devolución de producto", "Recibo de compra"], correcta:0},
    {en:"Coverage limit", opciones:["Límite de cobertura", "Fecha de vencimiento", "Tasa de interés", "Cuota inicial"], correcta:0},
    {en:"Policyholder", opciones:["Inquilino moroso", "Agente inmobiliario", "Vendedor de seguros", "Titular de la póliza"], correcta:3},
    {en:"Risk assessment", opciones:["Reembolso total", "Evaluación de riesgo", "Firma de contrato", "Renovación de licencia"], correcta:1},
    {en:"Primary care physician", opciones:["Farmacéutico", "Especialista quirúrgico", "Enfermero de turno", "Médico de cabecera"], correcta:3},
    {en:"Continuing education", opciones:["Educación continua", "Educación a distancia únicamente", "Educación básica", "Educación gratuita"], correcta:0},
    {en:"Succession planning", opciones:["Contratación urgente", "Renuncia inmediata", "Planificación de sucesión", "Evaluación de desempeño"], correcta:2},
    {en:"Employee engagement", opciones:["Despido del empleado", "Sanción disciplinaria", "Compromiso del empleado", "Ausencia laboral"], correcta:2},
    {en:"Decision-making", opciones:["Renuncia voluntaria", "Evaluación médica", "Toma de decisiones", "Firma de garantía"], correcta:2},
    {en:"Trade-in (vehicle)", opciones:["Vehículo de alquiler", "Vehículo importado", "Vehículo de parte de pago", "Vehículo dañado"], correcta:2},
    {en:"Data analysis", opciones:["Análisis de datos", "Reunión de directorio", "Copia de seguridad", "Auditoría fiscal"], correcta:0},
    {en:"Cybersecurity", opciones:["Marketing en línea", "Contabilidad digital", "Comercio electrónico", "Ciberseguridad"], correcta:3},
    {en:"To make matters worse", opciones:["Para colmo", "Para resumir", "Sin lugar a dudas", "Por si acaso"], correcta:0},
    {en:"As far as that goes", opciones:["En cuanto a eso", "Desde el principio", "Hasta el final", "Nunca más"], correcta:0},
    {en:"Mentorship", opciones:["Mentoría", "Ascenso automático", "Despido", "Sanción laboral"], correcta:0},
    {en:"To go the extra mile", opciones:["Rendirse rápido", "Llegar tarde siempre", "Esforzarse más de lo esperado", "Hacer lo mínimo posible"], correcta:2},
    {en:"To keep someone in the loop", opciones:["Despedir a alguien", "Confundir a alguien", "Mantener a alguien informado", "Excluir a alguien de todo"], correcta:2},
    {en:"Due diligence", opciones:["Renuncia inmediata", "Contrato vencido", "Debida diligencia (investigación exhaustiva)", "Firma rápida sin revisar"], correcta:2},
    {en:"Hostile takeover", opciones:["Toma de control hostil", "Contrato renovado", "Sociedad voluntaria", "Fusión amistosa"], correcta:0},
    {en:"Unique selling proposition", opciones:["Descuento por volumen", "Precio más bajo del mercado", "Garantía extendida", "Propuesta única de venta"], correcta:3},
    {en:"Go-to-market strategy", opciones:["Estrategia de lanzamiento al mercado", "Estrategia de despido", "Estrategia de jubilación", "Estrategia de auditoría"], correcta:0},
    {en:"Rebranding", opciones:["Venta de la marca", "Cambio de imagen de marca", "Copia de otra marca", "Cierre definitivo de marca"], correcta:1},
    {en:"Shopping cart abandonment", opciones:["Abandono del carrito de compras", "Robo en tienda", "Devolución aprobada", "Compra exitosa"], correcta:0},
    {en:"To hit the nail on the head", opciones:["Dar en el clavo", "Empezar de cero", "Fallar por completo", "Perder el tiempo"], correcta:0},
    {en:"To go back to the drawing board", opciones:["Ignorar el problema", "Firmar de inmediato", "Terminar con éxito", "Volver a empezar de cero"], correcta:3},
    {en:"Churn rate", opciones:["Tasa de crecimiento", "Tasa de interés", "Tasa de cambio", "Tasa de cancelación"], correcta:3},
    {en:"Customer lifetime value", opciones:["Costo de producción", "Valor de vida del cliente", "Margen bruto", "Precio de lista"], correcta:1},
    {en:"Minimum viable product", opciones:["Producto descontinuado", "Producto importado", "Producto de lujo", "Producto mínimo viable"], correcta:3},
    {en:"Exit strategy", opciones:["Estrategia de contratación", "Estrategia de expansión", "Estrategia de precios", "Estrategia de salida"], correcta:3},
    {en:"Whistleblower", opciones:["Auditor externo", "Gerente general", "Accionista mayoritario", "Denunciante"], correcta:3},
    {en:"Conflict of interest", opciones:["Ganancia compartida", "Acuerdo mutuo", "Renuncia voluntaria", "Conflicto de interés"], correcta:3},
    {en:"Thought leadership", opciones:["Liderazgo de pensamiento", "Liderazgo temporal", "Falta de liderazgo", "Liderazgo autoritario"], correcta:0},
    {en:"Loss prevention", opciones:["Prevención de pérdidas", "Aumento de precios", "Expansión de tienda", "Reducción de personal"], correcta:0},
    {en:"Occupancy rate", opciones:["Tasa de interés", "Tasa de cambio", "Tasa de ocupación", "Tasa de cancelación"], correcta:2},
    {en:"Grassroots campaign", opciones:["Campaña de base", "Campaña electoral fallida", "Campaña publicitaria costosa", "Campaña internacional"], correcta:0},
    {en:"To leave no stone unturned", opciones:["Rendirse fácilmente", "No dejar nada sin revisar", "Ignorar los detalles", "Actuar sin pensar"], correcta:1},
    {en:"To hit the ground running", opciones:["Detenerse a mitad de camino", "Posponer indefinidamente", "Arrancar con todo desde el inicio", "Empezar muy lento"], correcta:2},
    {en:"Just-in-time delivery", opciones:["Entrega sin seguimiento", "Entrega justo a tiempo", "Entrega retrasada siempre", "Entrega gratuita"], correcta:1},
    {en:"Supply chain disruption", opciones:["Expansión de la cadena de suministro", "Mejora de la cadena de suministro", "Auditoría de la cadena de suministro", "Interrupción de la cadena de suministro"], correcta:3},
    {en:"Extraction process", opciones:["Proceso de facturación", "Proceso de extracción", "Proceso de contratación", "Proceso de fabricación textil"], correcta:1},
    {en:"Shelf space", opciones:["Espacio de oficina", "Espacio en la góndola", "Espacio publicitario en línea", "Espacio de almacenamiento externo"], correcta:1},
    {en:"Bandwidth (telecom)", opciones:["Ancho de banda", "Ancho de tela", "Ancho de puerta", "Ancho de camino"], correcta:0},
    {en:"Advocacy group", opciones:["Grupo de accionistas", "Grupo de defensa", "Grupo de proveedores", "Grupo de auditoría"], correcta:1},
    {en:"Political landscape", opciones:["Paisaje natural", "Panorama político", "Plano arquitectónico", "Mapa comercial"], correcta:1},
    {en:"Procurement", opciones:["Renuncias", "Auditorías", "Adquisiciones", "Devoluciones"], correcta:2},
    {en:"Legal proceedings", opciones:["Recibo de pago", "Carta de renuncia", "Proceso legal", "Contrato simple"], correcta:2},
    {en:"Settlement (legal)", opciones:["Veredicto final", "Acuerdo extrajudicial", "Demanda rechazada", "Testimonio falso"], correcta:1},
    {en:"Overdraft", opciones:["Retención bancaria", "Saldo mínimo", "Depósito directo", "Sobregiro"], correcta:3},
    {en:"To be in over your head", opciones:["Sentirse aburrido", "Sentirse tranquilo", "Sentirse superado", "Sentirse orgulloso"], correcta:2},
    {en:"To get down to business", opciones:["Ponerse manos a la obra", "Posponer todo", "Cancelar la reunión", "Tomarse vacaciones"], correcta:0},
    {en:"Structural engineer", opciones:["Contador público", "Asesor legal", "Ingeniero estructural", "Agente inmobiliario"], correcta:2},
    {en:"Manufacturing defect", opciones:["Descuento especial", "Ganancia inesperada", "Ascenso laboral", "Defecto de fabricación"], correcta:3},
    {en:"Aircraft maintenance", opciones:["Registro de pasajeros", "Mantenimiento de aeronaves", "Servicio a bordo", "Venta de boletos"], correcta:1},
    {en:"Vessel capacity", opciones:["Capacidad de almacenamiento en oficina", "Capacidad del buque", "Capacidad de producción textil", "Capacidad hotelera"], correcta:1},
    {en:"Maritime law", opciones:["Derecho marítimo", "Derecho laboral", "Derecho penal", "Derecho tributario"], correcta:0},
    {en:"To play it by ear", opciones:["Seguir un plan estricto", "Memorizar el guion", "Rechazar toda propuesta", "Improvisar sobre la marcha"], correcta:3},
    {en:"Crop yield", opciones:["Ganancia bancaria", "Rendimiento del cultivo", "Producción industrial", "Valor de la propiedad"], correcta:1},
    {en:"Dock worker", opciones:["Trabajador agrícola", "Trabajador de oficina", "Trabajador portuario", "Trabajador de fábrica"], correcta:2},
    {en:"Patent expiration", opciones:["Registro de marca", "Renovación de licencia", "Vencimiento de patente", "Aprobación de medicamento"], correcta:2},
    {en:"Clinical trial", opciones:["Consulta de rutina", "Ensayo clínico", "Auditoría médica", "Certificado de salud"], correcta:1},
    {en:"Grant funding", opciones:["Inversión privada", "Deuda acumulada", "Financiamiento por subvención", "Préstamo bancario"], correcta:2},
    {en:"Tax-exempt status", opciones:["Estatus laboral temporal", "Estatus migratorio", "Estatus de residencia", "Estatus de exención de impuestos"], correcta:3},
    {en:"Royalty statement", opciones:["Estado de regalías", "Estado de salud", "Estado civil", "Estado de cuenta bancaria"], correcta:0},
    {en:"Threat assessment", opciones:["Evaluación de desempeño", "Evaluación crediticia", "Evaluación de amenazas", "Evaluación médica"], correcta:2},
    {en:"To pull the plug", opciones:["Continuar sin cambios", "Aprobar de inmediato", "Postergar indefinidamente", "Cancelar algo por completo"], correcta:3},
    {en:"To be back to square one", opciones:["Avanzar más rápido de lo esperado", "Volver a empezar de cero", "Terminar antes de tiempo", "Llegar a la meta final"], correcta:1},
    {en:"Zoning laws", opciones:["Leyes de tránsito", "Leyes fiscales", "Leyes de zonificación", "Leyes laborales"], correcta:2},
    {en:"Burnout prevention", opciones:["Prevención de fraude", "Prevención del agotamiento", "Prevención de robos", "Prevención de accidentes"], correcta:1},
    {en:"Asynchronous work", opciones:["Trabajo asincrónico", "Trabajo bajo supervisión constante", "Trabajo presencial obligatorio", "Trabajo por turnos rotativos"], correcta:0},
    {en:"Sustainable sourcing", opciones:["Abastecimiento importado", "Abastecimiento local exclusivo", "Abastecimiento sostenible", "Abastecimiento urgente"], correcta:2},
    {en:"Infrastructure maintenance", opciones:["Mantenimiento de infraestructura", "Mantenimiento de vehículos", "Mantenimiento de software únicamente", "Mantenimiento de personal"], correcta:0},
    {en:"Bilateral agreement", opciones:["Acuerdo cancelado", "Acuerdo bilateral", "Acuerdo verbal informal", "Acuerdo unilateral"], correcta:1},
    {en:"Peer review", opciones:["Revisión de contrato", "Revisión financiera", "Revisión anual de desempeño", "Revisión por pares"], correcta:3},
    {en:"Endowment", opciones:["Préstamo bancario", "Multa fiscal", "Salario base", "Dotación, fondo patrimonial"], correcta:3},
    {en:"Estate planning", opciones:["Planificación de marketing", "Planificación patrimonial", "Planificación de producción", "Planificación de eventos"], correcta:1},
    {en:"To reap what you sow", opciones:["Rendirse antes de tiempo", "Evitar toda responsabilidad", "Empezar de cero", "Cosechar lo que se siembra"], correcta:3},
    {en:"To rise to the occasion", opciones:["Rendirse ante la dificultad", "Posponer la decisión", "Ignorar el problema", "Estar a la altura de las circunstancias"], correcta:3},
    {en:"Reputation management", opciones:["Gestión de nómina", "Gestión de flotas", "Gestión de la reputación", "Gestión de inventario"], correcta:2},
    {en:"Skills gap", opciones:["Brecha generacional", "Brecha salarial", "Brecha de género", "Brecha de habilidades"], correcta:3},
    {en:"Executive presence", opciones:["Presencia en redes sociales", "Presencia física obligatoria", "Presencia en el mercado", "Presencia ejecutiva"], correcta:3},
    {en:"Cross-functional collaboration", opciones:["Colaboración externa únicamente", "Colaboración multifuncional", "Colaboración temporal", "Colaboración forzada"], correcta:1},
    {en:"Cultural competence", opciones:["Competencia cultural", "Competencia académica", "Competencia deportiva", "Competencia comercial"], correcta:0},
    {en:"Business acumen", opciones:["Visión de negocios", "Rutina de negocios", "Fracaso de negocios", "Deuda de negocios"], correcta:0},
    {en:"Customs inspection", opciones:["Inspección de seguridad laboral", "Inspección aduanera", "Inspección de calidad de producto", "Inspección médica"], correcta:1}
  ],
  gramatica: [
    {frase:"I am responsible ___ the sales team.", opciones:["for", "of", "at", "with"], correcta:0},
    {frase:"I would like ___ connect with you on LinkedIn.", opciones:["connect", "to connect", "connecting", "connected"], correcta:1},
    {frase:"I need ___ sign the contract before Friday.", opciones:["sign", "to sign", "signing", "signed"], correcta:1},
    {frase:"We might need a mediator to find common ___.", opciones:["ground", "floor", "base", "field"], correcta:0},
    {frase:"I am writing ___ confirm the meeting.", opciones:["for", "to", "and", "at"], correcta:1},
    {frase:"This task is a top ___.", opciones:["priority", "priorities", "prioritize", "prioritized"], correcta:0},
    {frase:"This meets ___ standard we agreed on.", opciones:["a", "an", "the", "some"], correcta:2},
    {frase:"We are committed ___ transparency in every report.", opciones:["for", "to", "at", "on"], correcta:1},
    {frase:"Let's listen actively, and use a respectful ___.", opciones:["tone", "tones", "toning", "toned"], correcta:0},
    {frase:"I am looking ___ rent an apartment near downtown.", opciones:["to", "for to", "at", "on"], correcta:0},
    {frase:"This procedure is ___ under your insurance policy.", opciones:["cover", "covers", "covered", "covering"], correcta:2},
    {frase:"I have an appointment ___ a specialist tomorrow.", opciones:["with", "to", "for", "at"], correcta:0},
    {frase:"I am enrolled ___ an online certification program.", opciones:["at", "on", "in", "for"], correcta:2},
    {frase:"I need to renew my ___ before it expires.", opciones:["license", "licenses", "licensing", "licensed"], correcta:0},
    {frase:"We need to conduct due diligence ___ this merger.", opciones:["on", "for", "at", "of"], correcta:0},
    {frase:"Our marketing strategy focuses ___ brand positioning.", opciones:["at", "on", "for", "with"], correcta:1},
    {frase:"Is this a hostile takeover, or based ___ synergy?", opciones:["at", "in", "on", "for"], correcta:2},
    {frase:"The integration process starts once we ___ the letter of intent.", opciones:["sign", "signs", "signing", "signed"], correcta:0},
    {frase:"You need to think ___ your feet, or go back to the drawing board.", opciones:["at", "on", "in", "with"], correcta:1},
    {frase:"The franchisee pays a royalty fee ___ the franchisor.", opciones:["for", "at", "to", "of"], correcta:2},
    {frase:"Our retail management focuses ___ inventory turnover.", opciones:["at", "on", "for", "with"], correcta:1},
    {frase:"The hospitality industry ___ on great guest experience.", opciones:["depend", "depends", "depending", "depended"], correcta:1},
    {frase:"We need to bite the bullet, not jump ___ the bandwagon.", opciones:["at", "in", "on", "for"], correcta:2},
    {frase:"You're in the driver's seat now — you get ___ call the shots.", opciones:["call", "to call", "calling", "called"], correcta:1},
    {frase:"Our global supply chain relies ___ strong supplier relationships.", opciones:["at", "in", "on", "for"], correcta:2},
    {frase:"The judge will review the testimony before the lawsuit ___.", opciones:["continue", "continues", "continuing", "continued"], correcta:1},
    {frase:"This farmer relies ___ a good harvest every year.", opciones:["at", "in", "on", "for"], correcta:2},
    {frase:"I need to visit the bank branch ___ speak with a teller.", opciones:["for", "to", "and", "at"], correcta:1},
    {frase:"You seem to have a lot ___ your plate this week.", opciones:["at", "in", "on", "for"], correcta:2},
    {frase:"This drug needs approval before it ___ sold.", opciones:["is", "are", "be", "being"], correcta:0},
    {frase:"This non-profit organization ___ a fundraising campaign every year.", opciones:["run", "runs", "running", "ran"], correcta:1},
    {frase:"This manuscript needs a literary agent before ___ the publishing industry.", opciones:["enter", "entering", "entered", "enters"], correcta:1},
    {frase:"The security industry relies ___ a strong surveillance system.", opciones:["at", "in", "on", "for"], correcta:2},
    {frase:"This trade summit ___ economic partnerships between countries.", opciones:["strengthen", "strengthens", "strengthening", "strengthened"], correcta:1},
    {frase:"Retirement planning ___ a solid pension fund.", opciones:["require", "requires", "requiring", "required"], correcta:1},
    {frase:"This scientific breakthrough came ___ years of research.", opciones:["from", "for", "at", "by"], correcta:0},
    {frase:"You'll leave a lasting impression — this has come full ___.", opciones:["circle", "circles", "circled", "circling"], correcta:0}
  ],
  lectura: { basico: [
    {texto:"Two years ago, our company began a merger with a competitor after months of due diligence. The board of directors reviewed the valuation carefully before approving the acquisition. Some shareholders worried this could become a hostile takeover, but both companies found strong synergy. After signing the letter of intent, the integration process began, pending antitrust review. Meanwhile, our marketing team focused on brand positioning for the newly combined company. They conducted market segmentation and a competitive analysis to define our unique selling proposition. A rebranding effort followed, including a new logo design and updated brand guidelines. The transition was not always easy. At one point, a whistleblower raised a conflict of interest concern, which the compliance officer investigated immediately. The board emphasized transparency and accountability throughout the process. Eventually, the merger strengthened our market position and created long-term value for everyone involved.", preguntas:[
        {pregunta:"What did the company begin two years ago?", opciones:["A bankruptcy", "A merger", "A relocation"], correcta:1},
        {pregunta:"What did the board review before approving the acquisition?", opciones:["The vacation policy", "The office lease", "The valuation"], correcta:2},
        {pregunta:"What were some shareholders worried about?", opciones:["A tax increase", "A product recall", "A hostile takeover"], correcta:2},
        {pregunta:"What did both companies find, despite the concerns?", opciones:["A legal loophole", "A hidden debt", "Strong synergy"], correcta:2},
        {pregunta:"What did the integration process depend on?", opciones:["A public vote", "Antitrust review", "A new office building"], correcta:1},
        {pregunta:"What did the marketing team focus on?", opciones:["Brand positioning", "Employee vacations", "Office relocation"], correcta:0},
        {pregunta:"What did they define through market segmentation?", opciones:["Their tax bracket", "Their delivery schedule", "Their unique selling proposition"], correcta:2},
        {pregunta:"What did the rebranding effort include?", opciones:["A new headquarters", "A new CEO", "A new logo design"], correcta:2},
        {pregunta:"Who raised a conflict of interest concern?", opciones:["A customer", "A journalist", "A whistleblower"], correcta:2},
        {pregunta:"What did the merger eventually create?", opciones:["Immediate losses", "Long-term value", "A legal dispute"], correcta:1}
    ]},
    {texto:"Maria owns three franchise locations of a popular restaurant chain. As a franchisee, she pays a royalty fee to the franchisor every month, according to their licensing agreement. In exchange, she benefits from brand standards that customers already trust, and clear territory rights that protect her business from nearby competitors. Recently, one of her restaurants faced a public relations challenge when a customer complaint went viral online. Maria's crisis communication training helped her respond quickly. She prepared talking points, contacted a local reporter, and issued a clear, honest statement before the story spread further. The media coverage that followed was surprisingly positive, largely because of her transparency. Maria's franchisor praised her thought leadership during a company-wide conference call. Her restaurant's public image recovered within weeks, and customer loyalty actually increased. Maria now trains other franchisees on crisis communication, believing that transparency always builds a stronger public image in the long run.", preguntas:[
        {pregunta:"What does Maria own?", opciones:["Three franchise locations", "A single food truck", "A catering company"], correcta:0},
        {pregunta:"What does Maria pay the franchisor?", opciones:["A hiring bonus", "A rental deposit", "A royalty fee"], correcta:2},
        {pregunta:"What protects her business from nearby competitors?", opciones:["Territory rights", "A government subsidy", "A supplier contract"], correcta:0},
        {pregunta:"What kind of challenge did she face?", opciones:["A tax audit", "A labor strike", "A public relations challenge"], correcta:2},
        {pregunta:"What helped Maria respond quickly?", opciones:["Her crisis communication training", "Her accounting background", "Her legal team"], correcta:0},
        {pregunta:"What did Maria prepare before speaking to media?", opciones:["Talking points", "A new menu", "A resignation letter"], correcta:0},
        {pregunta:"How was the media coverage, in the end?", opciones:["Extremely negative", "Completely ignored", "Surprisingly positive"], correcta:2},
        {pregunta:"What did the franchisor praise?", opciones:["Her long hours", "Her thought leadership", "Her low prices"], correcta:1},
        {pregunta:"What happened to customer loyalty?", opciones:["It stayed exactly the same", "It disappeared", "It increased"], correcta:2},
        {pregunta:"What does Maria now do for other franchisees?", opciones:["Manages their taxes", "Lends them money", "Trains them on crisis communication"], correcta:2}
    ]},
    {texto:"After twenty years in corporate leadership, James decided to focus on philanthropy and legacy planning. He established a charitable foundation dedicated to education in underserved communities. His financial advisor helped him structure an endowment that would generate reliable philanthropic giving for decades. James believes strongly in social responsibility, and he wanted his community investment to reflect genuine care, not just tax benefits. As part of his legacy planning, he also began mentoring young entrepreneurs, sharing lessons from his business acumen and strategic thinking. He often reminded them that professional growth requires both resilience and an inclusive leadership style. James also emphasized the importance of cross-functional collaboration, explaining that even brilliant ideas fail without teamwork. At a recognition ceremony honoring his contributions, James received an award for lifelong achievement. He gave an emotional speech about giving back, describing it as one of the most meaningful decisions of his life. His foundation continues to grow, guided by the values he built throughout his career.", preguntas:[
        {pregunta:"What did James decide to focus on after twenty years?", opciones:["Philanthropy and legacy planning", "Starting a new corporation", "Early retirement travel"], correcta:0},
        {pregunta:"What did he establish?", opciones:["A political campaign", "A new restaurant chain", "A charitable foundation"], correcta:2},
        {pregunta:"What did his financial advisor help him structure?", opciones:["A loan", "An endowment", "A franchise agreement"], correcta:1},
        {pregunta:"What did James want his community investment to reflect?", opciones:["Personal fame", "Genuine care, not just tax benefits", "Maximum profit"], correcta:1},
        {pregunta:"What did James begin doing as part of his legacy planning?", opciones:["Mentoring young entrepreneurs", "Writing a novel", "Running for office"], correcta:0},
        {pregunta:"What leadership style did James recommend?", opciones:["Inclusive leadership", "Authoritarian leadership", "No leadership at all"], correcta:0},
        {pregunta:"What did James say even brilliant ideas need?", opciones:["A large budget", "Cross-functional collaboration", "Government approval"], correcta:1},
        {pregunta:"What did James receive at the ceremony?", opciones:["A cash bonus", "An award for lifelong achievement", "A new job offer"], correcta:1},
        {pregunta:"How did James describe giving back?", opciones:["A waste of time", "A legal obligation", "One of the most meaningful decisions of his life"], correcta:2},
        {pregunta:"What continues to guide his foundation?", opciones:["A rigid five-year plan", "The values he built throughout his career", "Government regulation"], correcta:1}
    ]}
  ], intermedio: [
    {texto:"Two years ago, our company began a merger with a competitor after months of due diligence. The board of directors reviewed the valuation carefully before approving the acquisition. Some shareholders worried this could become a hostile takeover, but both companies found strong synergy. After signing the letter of intent, the integration process began, pending antitrust review. Meanwhile, our marketing team focused on brand positioning for the newly combined company. They conducted market segmentation and a competitive analysis to define our unique selling proposition. A rebranding effort followed, including a new logo design and updated brand guidelines. The transition was not always easy. At one point, a whistleblower raised a conflict of interest concern, which the compliance officer investigated immediately. The board emphasized transparency and accountability throughout the process. Eventually, the merger strengthened our market position and created long-term value for everyone involved.", preguntas:[
        {pregunta:"What did the company begin two years ago?", opciones:["A bankruptcy", "A merger", "A relocation"], correcta:1},
        {pregunta:"What did the board review before approving the acquisition?", opciones:["The vacation policy", "The office lease", "The valuation"], correcta:2},
        {pregunta:"What were some shareholders worried about?", opciones:["A tax increase", "A product recall", "A hostile takeover"], correcta:2},
        {pregunta:"What did both companies find, despite the concerns?", opciones:["A legal loophole", "A hidden debt", "Strong synergy"], correcta:2},
        {pregunta:"What did the integration process depend on?", opciones:["A public vote", "Antitrust review", "A new office building"], correcta:1},
        {pregunta:"What did the marketing team focus on?", opciones:["Brand positioning", "Employee vacations", "Office relocation"], correcta:0},
        {pregunta:"What did they define through market segmentation?", opciones:["Their tax bracket", "Their delivery schedule", "Their unique selling proposition"], correcta:2},
        {pregunta:"What did the rebranding effort include?", opciones:["A new headquarters", "A new CEO", "A new logo design"], correcta:2},
        {pregunta:"Who raised a conflict of interest concern?", opciones:["A customer", "A journalist", "A whistleblower"], correcta:2},
        {pregunta:"What did the merger eventually create?", opciones:["Immediate losses", "Long-term value", "A legal dispute"], correcta:1}
    ]},
    {texto:"Maria owns three franchise locations of a popular restaurant chain. As a franchisee, she pays a royalty fee to the franchisor every month, according to their licensing agreement. In exchange, she benefits from brand standards that customers already trust, and clear territory rights that protect her business from nearby competitors. Recently, one of her restaurants faced a public relations challenge when a customer complaint went viral online. Maria's crisis communication training helped her respond quickly. She prepared talking points, contacted a local reporter, and issued a clear, honest statement before the story spread further. The media coverage that followed was surprisingly positive, largely because of her transparency. Maria's franchisor praised her thought leadership during a company-wide conference call. Her restaurant's public image recovered within weeks, and customer loyalty actually increased. Maria now trains other franchisees on crisis communication, believing that transparency always builds a stronger public image in the long run.", preguntas:[
        {pregunta:"What does Maria own?", opciones:["Three franchise locations", "A single food truck", "A catering company"], correcta:0},
        {pregunta:"What does Maria pay the franchisor?", opciones:["A hiring bonus", "A rental deposit", "A royalty fee"], correcta:2},
        {pregunta:"What protects her business from nearby competitors?", opciones:["Territory rights", "A government subsidy", "A supplier contract"], correcta:0},
        {pregunta:"What kind of challenge did she face?", opciones:["A tax audit", "A labor strike", "A public relations challenge"], correcta:2},
        {pregunta:"What helped Maria respond quickly?", opciones:["Her crisis communication training", "Her accounting background", "Her legal team"], correcta:0},
        {pregunta:"What did Maria prepare before speaking to media?", opciones:["Talking points", "A new menu", "A resignation letter"], correcta:0},
        {pregunta:"How was the media coverage, in the end?", opciones:["Extremely negative", "Completely ignored", "Surprisingly positive"], correcta:2},
        {pregunta:"What did the franchisor praise?", opciones:["Her long hours", "Her thought leadership", "Her low prices"], correcta:1},
        {pregunta:"What happened to customer loyalty?", opciones:["It stayed exactly the same", "It disappeared", "It increased"], correcta:2},
        {pregunta:"What does Maria now do for other franchisees?", opciones:["Manages their taxes", "Lends them money", "Trains them on crisis communication"], correcta:2}
    ]},
    {texto:"After twenty years in corporate leadership, James decided to focus on philanthropy and legacy planning. He established a charitable foundation dedicated to education in underserved communities. His financial advisor helped him structure an endowment that would generate reliable philanthropic giving for decades. James believes strongly in social responsibility, and he wanted his community investment to reflect genuine care, not just tax benefits. As part of his legacy planning, he also began mentoring young entrepreneurs, sharing lessons from his business acumen and strategic thinking. He often reminded them that professional growth requires both resilience and an inclusive leadership style. James also emphasized the importance of cross-functional collaboration, explaining that even brilliant ideas fail without teamwork. At a recognition ceremony honoring his contributions, James received an award for lifelong achievement. He gave an emotional speech about giving back, describing it as one of the most meaningful decisions of his life. His foundation continues to grow, guided by the values he built throughout his career.", preguntas:[
        {pregunta:"What did James decide to focus on after twenty years?", opciones:["Philanthropy and legacy planning", "Starting a new corporation", "Early retirement travel"], correcta:0},
        {pregunta:"What did he establish?", opciones:["A political campaign", "A new restaurant chain", "A charitable foundation"], correcta:2},
        {pregunta:"What did his financial advisor help him structure?", opciones:["A loan", "An endowment", "A franchise agreement"], correcta:1},
        {pregunta:"What did James want his community investment to reflect?", opciones:["Personal fame", "Genuine care, not just tax benefits", "Maximum profit"], correcta:1},
        {pregunta:"What did James begin doing as part of his legacy planning?", opciones:["Mentoring young entrepreneurs", "Writing a novel", "Running for office"], correcta:0},
        {pregunta:"What leadership style did James recommend?", opciones:["Inclusive leadership", "Authoritarian leadership", "No leadership at all"], correcta:0},
        {pregunta:"What did James say even brilliant ideas need?", opciones:["A large budget", "Cross-functional collaboration", "Government approval"], correcta:1},
        {pregunta:"What did James receive at the ceremony?", opciones:["A cash bonus", "An award for lifelong achievement", "A new job offer"], correcta:1},
        {pregunta:"How did James describe giving back?", opciones:["A waste of time", "A legal obligation", "One of the most meaningful decisions of his life"], correcta:2},
        {pregunta:"What continues to guide his foundation?", opciones:["A rigid five-year plan", "The values he built throughout his career", "Government regulation"], correcta:1}
    ]}
  ], avanzado: [
    {texto:"Two years ago, our company began a merger with a competitor after months of due diligence. The board of directors reviewed the valuation carefully before approving the acquisition. Some shareholders worried this could become a hostile takeover, but both companies found strong synergy. After signing the letter of intent, the integration process began, pending antitrust review. Meanwhile, our marketing team focused on brand positioning for the newly combined company. They conducted market segmentation and a competitive analysis to define our unique selling proposition. A rebranding effort followed, including a new logo design and updated brand guidelines. The transition was not always easy. At one point, a whistleblower raised a conflict of interest concern, which the compliance officer investigated immediately. The board emphasized transparency and accountability throughout the process. Eventually, the merger strengthened our market position and created long-term value for everyone involved.", preguntas:[
        {pregunta:"What did the company begin two years ago?", opciones:["A bankruptcy", "A merger", "A relocation"], correcta:1},
        {pregunta:"What did the board review before approving the acquisition?", opciones:["The vacation policy", "The office lease", "The valuation"], correcta:2},
        {pregunta:"What were some shareholders worried about?", opciones:["A tax increase", "A product recall", "A hostile takeover"], correcta:2},
        {pregunta:"What did both companies find, despite the concerns?", opciones:["A legal loophole", "A hidden debt", "Strong synergy"], correcta:2},
        {pregunta:"What did the integration process depend on?", opciones:["A public vote", "Antitrust review", "A new office building"], correcta:1},
        {pregunta:"What did the marketing team focus on?", opciones:["Brand positioning", "Employee vacations", "Office relocation"], correcta:0},
        {pregunta:"What did they define through market segmentation?", opciones:["Their tax bracket", "Their delivery schedule", "Their unique selling proposition"], correcta:2},
        {pregunta:"What did the rebranding effort include?", opciones:["A new headquarters", "A new CEO", "A new logo design"], correcta:2},
        {pregunta:"Who raised a conflict of interest concern?", opciones:["A customer", "A journalist", "A whistleblower"], correcta:2},
        {pregunta:"What did the merger eventually create?", opciones:["Immediate losses", "Long-term value", "A legal dispute"], correcta:1}
    ]},
    {texto:"Maria owns three franchise locations of a popular restaurant chain. As a franchisee, she pays a royalty fee to the franchisor every month, according to their licensing agreement. In exchange, she benefits from brand standards that customers already trust, and clear territory rights that protect her business from nearby competitors. Recently, one of her restaurants faced a public relations challenge when a customer complaint went viral online. Maria's crisis communication training helped her respond quickly. She prepared talking points, contacted a local reporter, and issued a clear, honest statement before the story spread further. The media coverage that followed was surprisingly positive, largely because of her transparency. Maria's franchisor praised her thought leadership during a company-wide conference call. Her restaurant's public image recovered within weeks, and customer loyalty actually increased. Maria now trains other franchisees on crisis communication, believing that transparency always builds a stronger public image in the long run.", preguntas:[
        {pregunta:"What does Maria own?", opciones:["Three franchise locations", "A single food truck", "A catering company"], correcta:0},
        {pregunta:"What does Maria pay the franchisor?", opciones:["A hiring bonus", "A rental deposit", "A royalty fee"], correcta:2},
        {pregunta:"What protects her business from nearby competitors?", opciones:["Territory rights", "A government subsidy", "A supplier contract"], correcta:0},
        {pregunta:"What kind of challenge did she face?", opciones:["A tax audit", "A labor strike", "A public relations challenge"], correcta:2},
        {pregunta:"What helped Maria respond quickly?", opciones:["Her crisis communication training", "Her accounting background", "Her legal team"], correcta:0},
        {pregunta:"What did Maria prepare before speaking to media?", opciones:["Talking points", "A new menu", "A resignation letter"], correcta:0},
        {pregunta:"How was the media coverage, in the end?", opciones:["Extremely negative", "Completely ignored", "Surprisingly positive"], correcta:2},
        {pregunta:"What did the franchisor praise?", opciones:["Her long hours", "Her thought leadership", "Her low prices"], correcta:1},
        {pregunta:"What happened to customer loyalty?", opciones:["It stayed exactly the same", "It disappeared", "It increased"], correcta:2},
        {pregunta:"What does Maria now do for other franchisees?", opciones:["Manages their taxes", "Lends them money", "Trains them on crisis communication"], correcta:2}
    ]},
    {texto:"After twenty years in corporate leadership, James decided to focus on philanthropy and legacy planning. He established a charitable foundation dedicated to education in underserved communities. His financial advisor helped him structure an endowment that would generate reliable philanthropic giving for decades. James believes strongly in social responsibility, and he wanted his community investment to reflect genuine care, not just tax benefits. As part of his legacy planning, he also began mentoring young entrepreneurs, sharing lessons from his business acumen and strategic thinking. He often reminded them that professional growth requires both resilience and an inclusive leadership style. James also emphasized the importance of cross-functional collaboration, explaining that even brilliant ideas fail without teamwork. At a recognition ceremony honoring his contributions, James received an award for lifelong achievement. He gave an emotional speech about giving back, describing it as one of the most meaningful decisions of his life. His foundation continues to grow, guided by the values he built throughout his career.", preguntas:[
        {pregunta:"What did James decide to focus on after twenty years?", opciones:["Philanthropy and legacy planning", "Starting a new corporation", "Early retirement travel"], correcta:0},
        {pregunta:"What did he establish?", opciones:["A political campaign", "A new restaurant chain", "A charitable foundation"], correcta:2},
        {pregunta:"What did his financial advisor help him structure?", opciones:["A loan", "An endowment", "A franchise agreement"], correcta:1},
        {pregunta:"What did James want his community investment to reflect?", opciones:["Personal fame", "Genuine care, not just tax benefits", "Maximum profit"], correcta:1},
        {pregunta:"What did James begin doing as part of his legacy planning?", opciones:["Mentoring young entrepreneurs", "Writing a novel", "Running for office"], correcta:0},
        {pregunta:"What leadership style did James recommend?", opciones:["Inclusive leadership", "Authoritarian leadership", "No leadership at all"], correcta:0},
        {pregunta:"What did James say even brilliant ideas need?", opciones:["A large budget", "Cross-functional collaboration", "Government approval"], correcta:1},
        {pregunta:"What did James receive at the ceremony?", opciones:["A cash bonus", "An award for lifelong achievement", "A new job offer"], correcta:1},
        {pregunta:"How did James describe giving back?", opciones:["A waste of time", "A legal obligation", "One of the most meaningful decisions of his life"], correcta:2},
        {pregunta:"What continues to guide his foundation?", opciones:["A rigid five-year plan", "The values he built throughout his career", "Government regulation"], correcta:1}
    ]}
  ] },
  escucha: evaluacion.escucha,
  escritura: { basico: [
    {consigna:"Describe una situación de crisis o desafío en el trabajo (un problema con un cliente, un error de producción, una mala noticia que tuviste que comunicar) y cómo la resolviste usando buena comunicación. Escribe un texto de media página como mínimo (250 palabras).", palabrasClave:["crisis", "communication", "transparency", "reputation", "solution", "reassure"], minPalabrasClave:3, minPalabras:250},
    {consigna:"Describe una decisión de negocios importante (una fusión, una expansión, una nueva estrategia de marca, o abrir una franquicia) y explica los pros, los contras, y el resultado. Escribe un texto de media página como mínimo (250 palabras).", palabrasClave:["strategy", "agreement", "opportunity", "risk", "decision", "growth"], minPalabrasClave:3, minPalabras:250},
    {consigna:"Escribe sobre tu marca personal y el legado profesional que quieres dejar: tus valores, tus logros más importantes, y cómo quieres que te recuerden en tu carrera. Escribe un texto de media página como mínimo (250 palabras).", palabrasClave:["legacy", "reputation", "career", "achievement", "values", "growth"], minPalabrasClave:3, minPalabras:250}
  ], intermedio: [
    {consigna:"Describe una situación de crisis o desafío en el trabajo (un problema con un cliente, un error de producción, una mala noticia que tuviste que comunicar) y cómo la resolviste usando buena comunicación. Escribe un texto de media página como mínimo (250 palabras).", palabrasClave:["crisis", "communication", "transparency", "reputation", "solution", "reassure"], minPalabrasClave:3, minPalabras:250},
    {consigna:"Describe una decisión de negocios importante (una fusión, una expansión, una nueva estrategia de marca, o abrir una franquicia) y explica los pros, los contras, y el resultado. Escribe un texto de media página como mínimo (250 palabras).", palabrasClave:["strategy", "agreement", "opportunity", "risk", "decision", "growth"], minPalabrasClave:3, minPalabras:250},
    {consigna:"Escribe sobre tu marca personal y el legado profesional que quieres dejar: tus valores, tus logros más importantes, y cómo quieres que te recuerden en tu carrera. Escribe un texto de media página como mínimo (250 palabras).", palabrasClave:["legacy", "reputation", "career", "achievement", "values", "growth"], minPalabrasClave:3, minPalabras:250}
  ], avanzado: [
    {consigna:"Describe una situación de crisis o desafío en el trabajo (un problema con un cliente, un error de producción, una mala noticia que tuviste que comunicar) y cómo la resolviste usando buena comunicación. Escribe un texto de media página como mínimo (250 palabras).", palabrasClave:["crisis", "communication", "transparency", "reputation", "solution", "reassure"], minPalabrasClave:3, minPalabras:250},
    {consigna:"Describe una decisión de negocios importante (una fusión, una expansión, una nueva estrategia de marca, o abrir una franquicia) y explica los pros, los contras, y el resultado. Escribe un texto de media página como mínimo (250 palabras).", palabrasClave:["strategy", "agreement", "opportunity", "risk", "decision", "growth"], minPalabrasClave:3, minPalabras:250},
    {consigna:"Escribe sobre tu marca personal y el legado profesional que quieres dejar: tus valores, tus logros más importantes, y cómo quieres que te recuerden en tu carrera. Escribe un texto de media página como mínimo (250 palabras).", palabrasClave:["legacy", "reputation", "career", "achievement", "values", "growth"], minPalabrasClave:3, minPalabras:250}
  ] },
  escuchaDialogo: {
    segmentos: [
    { hablante:"David", partes:[{t:"Good morning, Laura. Thank you for "}, {blank:"joining"}, {t:" this meeting on such short notice."}] },
    { hablante:"Laura", partes:[{t:"Good morning, David. Of course, I know we need to "}, {blank:"discuss"}, {t:" the project deadline."}] },
    { hablante:"David", partes:[{t:"Yes, exactly. I wanted to touch "}, {blank:"base"}, {t:" with you about our progress with the new client. Can you tell me about the current status of the "}, {blank:"shipment"}, {t:"?"}] },
    { hablante:"Laura", partes:[{t:"The shipment is scheduled to arrive next week. We "}, {blank:"coordinated"}, {t:" everything with the carrier, and I already drafted the "}, {blank:"warranty"}, {t:" documents for approval."}] },
    { hablante:"David", partes:[{t:"Excellent work. I also wanted to ask about the marketing "}, {blank:"strategy"}, {t:" for this quarter. Have you scheduled a meeting with that team?"}] },
    { hablante:"Laura", partes:[{t:"Yes, our strategy focuses on brand "}, {blank:"positioning"}, {t:", and I have a meeting with them tomorrow to discuss the "}, {blank:"budget"}, {t:"."}] },
    { hablante:"David", partes:[{t:"Good. By the way, did we finish the negotiation with the new supplier? I know their "}, {blank:"proposal"}, {t:" included a discount for bulk orders."}] },
    { hablante:"Laura", partes:[{t:"Yes, we reached an "}, {blank:"agreement"}, {t:" last week. Their sales representative confirmed the terms, and we signed the "}, {blank:"contract"}, {t:" yesterday afternoon."}] },
    { hablante:"David", partes:[{t:"Perfect. That should help us improve our "}, {blank:"inventory"}, {t:" turnover this quarter. What about the job interviews for the open position?"}] },
    { hablante:"Laura", partes:[{t:"We interviewed three candidates. One of them has strong "}, {blank:"experience"}, {t:" in customer service and excellent references."}] },
    { hablante:"David", partes:[{t:"That sounds promising. Please send me her resume, and let's move forward with a job "}, {blank:"offer"}, {t:" if everyone agrees."}] },
    { hablante:"Laura", partes:[{t:"I will send it today. One more thing — I need you to "}, {blank:"sign"}, {t:" a few documents before the end of the day."}] },
    { hablante:"David", partes:[{t:"No problem, just leave them on my desk. I need you to prepare a "}, {blank:"report"}, {t:" about customer service feedback by Friday too."}] },
    { hablante:"Laura", partes:[{t:"I will have it ready. I am "}, {blank:"confident"}, {t:" it will show good results, and I look forward to our continued "}, {blank:"success"}, {t:" together."}] }
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
  let banco = evaluacion; // el banco de preguntas a usar — 'evaluacion' (nivelación) o 'examenFinal' (contenido real del curso)
  let fase = 1;
  let vocabItems=[], vocabIdx=0, vocabCorrect=0, vocabNoSe=0;
  let gramItems=[], gramIdx=0, gramCorrect=0, gramNoSe=0;
  let nivelCalibrado='basico';
  let lecturaPreguntaIdx=0, lecturaCorrect=0, lecturaTextoIdx=0;
  let escuchaCorrect=0, escuchaTotal=0, escuchaHistoriaIdx=0;
  let escrituraAprobadasCount=0, escrituraIntentos=0, escrituraConsignaIdx=0;

  function iniciarEvaluacion(modoElegido){
    modo = modoElegido || 'inicial';
    banco = modo==='final' ? examenFinal : evaluacion;
    fase = 1;
    vocabItems = shuffle(banco.vocabulario);
    vocabIdx=0; vocabCorrect=0; vocabNoSe=0;
    gramItems = shuffle(banco.gramatica);
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
      1: 'Vas a ver '+banco.vocabulario.length+' palabras en inglés. Elige su significado correcto en español.',
      2: 'Vas a ver 36 oraciones incompletas. Elige la palabra correcta para completarlas.',
      3: 'Vas a leer un texto corto en inglés, y responder preguntas sobre lo que leíste.',
      4: modo==='final'
        ? 'Vas a escuchar un diálogo largo en inglés, dividido en varias partes — podés reproducir, pausar, y volver a escuchar cada parte las veces que quieras, antes de completar las palabras que faltan.'
        : 'Vas a escuchar una historia corta en inglés (puedes repetirla las veces que quieras), y completar las palabras que faltan.',
      5: 'Vas a escribir un texto en inglés, siguiendo una consigna — esta fase se revisa distinto a las demás.'
    };
    el('evIntroDesc').textContent = descripciones[fase];
    el('evIntroBtn').onclick = ()=>{
      el('evIntroBox').style.display='none';
      el('evFaseBox').style.display='block';
      if(fase===1) renderVocabPregunta();
      else if(fase===2) renderGramaticaPregunta();
      else if(fase===3) renderLecturaIntro();
      else if(fase===4) { if(modo==='final') renderEscuchaDialogoFinal(); else renderEscucha(); }
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
    const datos = banco.lectura[nivelCalibrado][lecturaTextoIdx];
    el('evPregunta').innerHTML = '<div class="dn-review-prompt" style="text-align:left; line-height:1.6;">'+datos.texto+'</div>';
    el('evOpciones').innerHTML='';
    const cont = document.createElement('button');
    cont.className='primary'; cont.style.marginTop='14px';
    cont.textContent='Ya leí el texto, empezar las preguntas →';
    cont.onclick = ()=>{ lecturaPreguntaIdx=0; renderLecturaPregunta(); };
    el('evOpciones').appendChild(cont);
    el('evFaseProgreso').textContent = 'Fase 3 de 5 · Comprensión de lectura ('+nivelCalibrado+') · texto '+(lecturaTextoIdx+1)+' de '+banco.lectura[nivelCalibrado].length;
  }
  function renderLecturaPregunta(){
    const datos = banco.lectura[nivelCalibrado][lecturaTextoIdx];
    if(lecturaPreguntaIdx>=datos.preguntas.length){
      if(lecturaTextoIdx+1 < banco.lectura[nivelCalibrado].length){
        lecturaTextoIdx++;
        renderLecturaIntro();
      } else {
        fase=4; mostrarFaseIntro();
      }
      return;
    }
    const p = datos.preguntas[lecturaPreguntaIdx];
    el('evFaseProgreso').textContent = 'Fase 3 de 5 · texto '+(lecturaTextoIdx+1)+' de '+banco.lectura[nivelCalibrado].length+' · pregunta '+(lecturaPreguntaIdx+1)+' de '+datos.preguntas.length;
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
    const datos = banco.escucha[nivelCalibrado][escuchaHistoriaIdx];
    const totalHistorias = banco.escucha[nivelCalibrado].length;
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

  // ---------- FASE 4 (examen final): Diálogo largo con reproducción por segmento ----------
  function renderEscuchaDialogoFinal(){
    const dialogo = examenFinal.escuchaDialogo;
    el('evFaseProgreso').textContent = 'Fase 4 de 5 · Comprensión auditiva — diálogo completo';
    escuchaInputs = [];

    const box = document.createElement('div');
    box.innerHTML = '<p style="margin-bottom:10px;">Escuchá cada parte del diálogo (podés pausar, volver atrás, y repetir las que quieras), y después completá las palabras que faltan en todo el texto:</p>';

    const detenerBtn = document.createElement('button');
    detenerBtn.className='ghost'; detenerBtn.style.marginBottom='14px';
    detenerBtn.textContent='⏹ Detener audio';
    detenerBtn.onclick = ()=>{ try{ speechSynthesis.cancel(); }catch(e){} };
    box.appendChild(detenerBtn);

    const segmentosBox = document.createElement('div');
    segmentosBox.style.cssText='margin-bottom:16px;';
    dialogo.segmentos.forEach((seg, idx)=>{
      const textoSeg = seg.partes.map(p => p.t !== undefined ? p.t : p.blank).join('');
      const fila = document.createElement('div');
      fila.style.cssText='display:flex; align-items:center; gap:10px; padding:6px 0; border-bottom:1px solid var(--border);';
      const label = document.createElement('span');
      label.style.cssText='flex:1; font-size:13px; color:var(--muted);';
      label.textContent = (idx+1)+'. '+seg.hablante;
      const playBtn = document.createElement('button');
      playBtn.className='mic'; playBtn.style.cssText='min-height:36px; padding:6px 14px; font-size:13px;';
      playBtn.textContent='🔊 Reproducir';
      playBtn.onclick = async ()=>{
        try{
          speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(textoSeg);
          u.lang='en-US';
          u.rate=0.85; // más lento que el resto de la app, a pedido
          playBtn.disabled=true;
          await new Promise(res=>{ u.onend=res; u.onerror=res; speechSynthesis.speak(u); });
        } catch(e){}
        playBtn.disabled=false;
      };
      fila.appendChild(label);
      fila.appendChild(playBtn);
      segmentosBox.appendChild(fila);
    });
    box.appendChild(segmentosBox);

    const textoBox = document.createElement('div');
    textoBox.className='dn-review-prompt';
    textoBox.style.cssText='text-align:left; line-height:2.4;';
    dialogo.segmentos.forEach(seg=>{
      const linea = document.createElement('div');
      linea.style.marginBottom='8px';
      const nombre = document.createElement('b');
      nombre.style.color='var(--en)';
      nombre.textContent = seg.hablante+': ';
      linea.appendChild(nombre);
      seg.partes.forEach(p=>{
        if(p.t !== undefined){
          linea.appendChild(document.createTextNode(p.t));
        } else {
          const input = document.createElement('input');
          input.type='text';
          input.style.cssText='width:110px; margin:0 3px; background:var(--bg-panel-2); border:1px solid var(--border); border-radius:6px; padding:3px 6px; color:var(--ink); font-family:inherit; font-size:14px; text-align:center;';
          escuchaInputs.push({input, correcta:p.blank});
          linea.appendChild(input);
        }
      });
      textoBox.appendChild(linea);
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
      escuchaCorrect = correctas;
      escuchaTotal = escuchaInputs.length;
      sendBtn.style.display='none';
      const seguirBtn = document.createElement('button');
      seguirBtn.className='primary'; seguirBtn.style.marginTop='10px';
      seguirBtn.textContent = correctas+' de '+escuchaInputs.length+' correctas — Continuar →';
      seguirBtn.onclick = ()=>{ fase=5; mostrarFaseIntro(); };
      box.appendChild(seguirBtn);
    };
    box.appendChild(sendBtn);

    el('evPregunta').innerHTML='';
    el('evPregunta').appendChild(box);
    el('evOpciones').innerHTML='';
  }

  // ---------- FASE 5: Escritura guiada ----------
  function renderEscritura(){
    const datos = banco.escritura[nivelCalibrado][escrituraConsignaIdx];
    const totalConsignas = banco.escritura[nivelCalibrado].length;
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
    const datosLectura = banco.lectura[nivelCalibrado];
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
