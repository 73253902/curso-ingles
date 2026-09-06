// Unidad 8 del curso — Días 85 a 96
// Este archivo se puede editar o reemplazar solo, sin tocar el resto del curso.
const curriculumUnidad8 = [
{
    day:85, unit:8, unitTitle:'Unidad 8 · Semanas 17-18', theme:'Buscar trabajo / Entrevista de trabajo',
    structures:[
      {id:'S063', pattern:"I have experience in + [X]", examples:[
        {en:'I have experience in sales.', es:'Tengo experiencia en ventas.', pron:'ái jav expírians in séils.'},
        {en:'I have experience in management.', es:'Tengo experiencia en gestión.', pron:'ái jav expírians in mánechment.'},
        {en:'I have five years of experience.', es:'Tengo cinco años de experiencia.', pron:'ái jav fáiv íars of expírians.'},
        {en:"I don't have experience in this field yet.", es:'Todavía no tengo experiencia en este campo.', pron:"ái dont jav expírians in dis fíild iét."}
      ], function:'hablar de tu experiencia en una entrevista', stage:2,
        transformations:{
          negative:{en:"I don't have experience in sales.", es:'No tengo experiencia en ventas.'},
          question:{en:'Do you have experience in sales?', es:'¿Tenés experiencia en ventas?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'resume', es:'currículum', pron:'réziumei', emoji:'📄'},
      {en:'cover letter', es:'carta de presentación', pron:'cáver léter', emoji:'✉️'},
      {en:'job interview', es:'entrevista de trabajo', pron:'yab ínterviu', emoji:'🎤'},
      {en:'strengths', es:'fortalezas', pron:'strenz', emoji:'💪'},
      {en:'weaknesses', es:'debilidades', pron:'uíknesses', emoji:'⚠️'},
      {en:'salary expectations', es:'expectativas salariales', pron:'sálari expectéishons', emoji:'💲'},
      {en:'availability', es:'disponibilidad', pron:'aveilabíliti', emoji:'📅'},
      {en:'references', es:'referencias', pron:'réferenses', emoji:'📋'},
      {en:'to apply for a job', es:'postularse a un trabajo', pron:'tu aplái for a yab', emoji:'📝'},
      {en:'job offer', es:'oferta de trabajo', pron:'yab áfer', emoji:'🤝'},
      {en:'to hire', es:'contratar', pron:'tu jáiar', emoji:'✅'},
      {en:'candidate', es:'candidato', pron:'cándideit', emoji:'🧑‍💼'}
    ],
    story:[
      {en:'I would like to apply for a job at the Dragon Company — here is my resume and cover letter!', es:'Quisiera postularme a un trabajo en la Empresa Dragón — ¡acá está mi currículum y carta de presentación!', pron:'ái uud láik tu aplái for a yab at de drágon cámpani — jíar is mái réziumei and cáver léter!'},
      {en:'What are your strengths and weaknesses, candidate?', es:'¿Cuáles son tus fortalezas y debilidades, candidato?', pron:'uát ar iór strenz and uíknesses, cándideit?'},
      {en:'My strength is breathing fire efficiently, and my weakness is I sleep for a hundred years.', es:'Mi fortaleza es respirar fuego eficientemente, y mi debilidad es que duermo cien años.', pron:'mái strenz is bríizing fáiar efíshentli, and mái uíknes is ái slíip for a jándred íars.'},
      {en:'What are your salary expectations, and what is your availability?', es:'¿Cuáles son tus expectativas salariales, y cuál es tu disponibilidad?', pron:'uát ar iór sálari expectéishons, and uát is iór aveilabíliti?'},
      {en:'Do you have references? Congratulations — we would like to hire you, here is the job offer!', es:'¿Tenés referencias? ¡Felicitaciones — nos gustaría contratarte, acá está la oferta de trabajo!', pron:'du iú jav réferenses? congrachuléishons — uí uud láik tu jáiar iú, jíar is de yab áfer!'}
    ],
    jingle:[
      {en:'Resume, cover letter too!', es:'Currículum, ¡carta de presentación también!', pron:'réziumei, cáver léter tú!'},
      {en:"Job interview, I'm ready for you!", es:'Entrevista de trabajo, ¡estoy listo para ti!', pron:"yab ínterviu, áim rédi for iú!"},
      {en:'Strengths and weaknesses, references clear!', es:'Fortalezas y debilidades, ¡referencias claras!', pron:'strenz and uíknesses, réferenses clíar!'},
      {en:'Job offer, candidate, welcome here!', es:'Oferta de trabajo, candidato, ¡bienvenido acá!', pron:'yab áfer, cándideit, uélcam jíar!'}
    ]
  },
{
    day:86, unit:8, unitTitle:'Unidad 8 · Semanas 17-18', theme:'Preguntas de entrevista / Hablar de tu experiencia',
    structures:[
      {id:'S064', pattern:"I am responsible for + [X]", examples:[
        {en:'I am responsible for the sales team.', es:'Soy responsable del equipo de ventas.', pron:'ái am rispánsibol for de séils tíim.'},
        {en:'I am responsible for client relations.', es:'Soy responsable de las relaciones con clientes.', pron:'ái am rispánsibol for cláient riléishions.'},
        {en:'I am responsible for the budget.', es:'Soy responsable del presupuesto.', pron:'ái am rispánsibol for de báyet.'},
        {en:'I am not responsible for that department.', es:'No soy responsable de ese departamento.', pron:'ái am nat rispánsibol for dat dipártment.'}
      ], function:'decir de qué eres responsable', stage:2,
        transformations:{
          negative:{en:'I am not responsible for the sales team.', es:'No soy responsable del equipo de ventas.'},
          question:{en:'Are you responsible for the sales team?', es:'¿Sos responsable del equipo de ventas?'},
          yesAnswer:{en:'Yes, I am.', es:'Sí.'},
          noAnswer:{en:"No, I'm not.", es:'No.'}
        }}
    ],
    words:[
      {en:'previous experience', es:'experiencia previa', pron:'príivios expíriens', emoji:'📂'},
      {en:'responsibilities', es:'responsabilidades', pron:'rispansibílitis', emoji:'📋'},
      {en:'achievements', es:'logros', pron:'achíivments', emoji:'🏆'},
      {en:'why do you want this job', es:'por qué quieres este trabajo', pron:'uái du iú uánt dis yab', emoji:'❓'},
      {en:'tell me about yourself', es:'cuéntame sobre ti', pron:'tel mi abáut iorsélf', emoji:'🗣️'},
      {en:'team player', es:'trabaja bien en equipo', pron:'tíim pléyer', emoji:'🤝'},
      {en:'deadline-driven', es:'orientado a plazos', pron:'dédlain dríven', emoji:'⏰'},
      {en:'problem-solving', es:'resolución de problemas', pron:'práblem sálving', emoji:'🧩'},
      {en:'leadership skills', es:'habilidades de liderazgo', pron:'líidership skils', emoji:'🧭'},
      {en:'to negotiate salary', es:'negociar el salario', pron:'tu nigóushieit sálari', emoji:'💲'}
    ],
    story:[
      {en:'Tell me about yourself, dragon — what is your previous experience?', es:'Cuéntame sobre ti, dragón — ¿cuál es tu experiencia previa?', pron:'tel mi abáut iorsélf, drágon — uát is iór príivios expíriens?'},
      {en:'My responsibilities included guarding treasure and my achievements include saving the kingdom twice!', es:'Mis responsabilidades incluían cuidar el tesoro y mis logros incluyen salvar el reino dos veces.', pron:'mái rispansibílitis inclúudid gárding tréshur and mái achíivments inclúud séiving de kíngdom tuáis!'},
      {en:'Why do you want this job? Because I am a team player, and very deadline-driven!', es:'¿Por qué quieres este trabajo? ¡Porque trabajo bien en equipo, y estoy muy orientado a plazos!', pron:'uái du iú uánt dis yab? bicós ái am a tíim pléyer, and véri dédlain dríven!'},
      {en:'I have excellent problem-solving and leadership skills — just ask the other dragons!', es:'¡Tengo excelentes habilidades de resolución de problemas y liderazgo — preguntale a los otros dragones!', pron:'ái jav éxcelent práblem sálving and líidership skils — yast ask de áder drágons!'},
      {en:"Now, let's negotiate salary — I only accept payment in gold!", es:'Ahora, negociemos el salario — ¡solo acepto pago en oro!', pron:"náu, lets nigóushieit sálari — ái óunli axépt péiment in góuld!"}
    ],
    jingle:[
      {en:'Previous experience, responsibilities too!', es:'Experiencia previa, ¡responsabilidades también!', pron:'príivios expíriens, rispansibílitis tú!'},
      {en:"Achievements and team player, that's me and you!", es:'Logros y trabajo en equipo, ¡eso somos tú y yo!', pron:"achíivments and tíim pléyer, dats mi and iú!"},
      {en:'Deadline-driven, problem-solving fast!', es:'Orientado a plazos, ¡resolución de problemas rápida!', pron:'dédlain dríven, práblem sálving fast!'},
      {en:'Leadership skills, negotiate at last!', es:'Habilidades de liderazgo, ¡negociá por fin!', pron:'líidership skils, nigóushieit at last!'}
    ]
  },
{
    day:87, unit:8, unitTitle:'Unidad 8 · Semanas 17-18', theme:'Networking / Eventos de negocios',
    structures:[
      {id:'S065', pattern:"I would like to connect with + [X]", examples:[
        {en:'I would like to connect with you.', es:'Me gustaría conectar contigo.', pron:'ái uud láik tu canéct uid iú.'},
        {en:'I would like to exchange business cards.', es:'Me gustaría intercambiar tarjetas.', pron:'ái uud láik tu extchéinch bísnes cards.'},
        {en:'I would like to follow up next week.', es:'Me gustaría hacer seguimiento la próxima semana.', pron:'ái uud láik tu fólou ap next uíik.'},
        {en:'I would like to learn more about your company.', es:'Me gustaría saber más de tu empresa.', pron:'ái uud láik tu lern mor abáut iór cámpani.'}
      ], function:'proponer conectar con alguien', stage:2,
        transformations:{
          question:{en:'Would you like to connect?', es:'¿Te gustaría conectar?'},
          yesAnswer:{en:'Yes, I would.', es:'Sí, me gustaría.'},
          noAnswer:{en:'No, thank you.', es:'No, gracias.'}
        }}
    ],
    words:[
      {en:'networking event', es:'evento de networking', pron:'nétuorking ivént', emoji:'🎪'},
      {en:'business card exchange', es:'intercambio de tarjetas', pron:'bísnes card exchéinch', emoji:'🪪'},
      {en:'elevator pitch', es:'presentación breve', pron:'élevéitor pich', emoji:'🎙️'},
      {en:'to introduce yourself', es:'presentarte', pron:'tu introdiús iorsélf', emoji:'👋'},
      {en:'industry', es:'industria', pron:'índastri', emoji:'🏭'},
      {en:'connections', es:'contactos', pron:'canécshons', emoji:'🔗'},
      {en:'follow-up email', es:'correo de seguimiento', pron:'fálou ap íimeil', emoji:'📧'},
      {en:'LinkedIn profile', es:'perfil de LinkedIn', pron:'línktin próufail', emoji:'💼'},
      {en:'professional relationship', es:'relación profesional', pron:'proféshonal riléishonship', emoji:'🤝'},
      {en:'opportunity', es:'oportunidad', pron:'aportiúniti', emoji:'🌟'}
    ],
    story:[
      {en:"Welcome to the networking event! Let's do a business card exchange.", es:'¡Bienvenido al evento de networking! Hagamos un intercambio de tarjetas.', pron:"uélcam tu de nétuorking ivént! lets du a bísnes card exchéinch."},
      {en:'Let me introduce myself with my elevator pitch: I am a dragon in the treasure industry!', es:'Dejame presentarme con mi presentación breve: ¡soy un dragón de la industria del tesoro!', pron:'let mi introdiús maisélf uid mái élevéitor pich: ái am a drágon in de tréshur índastri!'},
      {en:'I love making connections — send me a follow-up email, and check my LinkedIn profile!', es:'¡Me encanta hacer contactos — mandame un correo de seguimiento, y revisá mi perfil de LinkedIn!', pron:'ái lav méiking canécshons — send mi a fálou ap íimeil, and chek mái línktin próufail!'},
      {en:'This could be the start of a wonderful professional relationship!', es:'¡Esto podría ser el comienzo de una relación profesional maravillosa!', pron:'dis cud bi de start of a uánderful proféshonal riléishonship!'},
      {en:'What an opportunity — a thousand dragons at one networking event!', es:'¡Qué oportunidad — mil dragones en un solo evento de networking!', pron:'uát an aportiúniti — a záusand drágons at uán nétuorking ivént!'}
    ],
    jingle:[
      {en:'Networking event, business card too!', es:'Evento de networking, ¡tarjeta también!', pron:'nétuorking ivént, bísnes card tú!'},
      {en:'Elevator pitch, introduce you!', es:'Presentación breve, ¡presentate!', pron:'élevéitor pich, introdiús iú!'},
      {en:"Industry, connections, follow-up mail!", es:'Industria, contactos, ¡correo de seguimiento!', pron:"índastri, canécshons, fálou ap méil!"},
      {en:"LinkedIn profile, opportunity won't fail!", es:'Perfil de LinkedIn, ¡la oportunidad no va a fallar!', pron:"línktin próufail, aportiúniti uónt féil!"}
    ]
  },
{
    day:88, unit:8, unitTitle:'Unidad 8 · Semanas 17-18', theme:'Presentaciones formales / Hablar en público',
    structures:[
      {id:'S066', pattern:"I am confident about + [X]", examples:[
        {en:'I am confident about this presentation.', es:'Estoy seguro de esta presentación.', pron:'ái am cánfident abáut dis presentéishion.'},
        {en:'I am nervous about the Q&A.', es:'Estoy nervioso por la sesión de preguntas.', pron:'ái am nérvas abáut de kiú and éi.'},
        {en:'I am not confident about the numbers.', es:'No estoy seguro de los números.', pron:'ái am nat cánfident abáut de námbers.'},
        {en:'I am ready for the audience.', es:'Estoy listo para el público.', pron:'ái am rédi for de ódiens.'}
      ], function:'expresar cómo te sentís antes de presentar', stage:2,
        transformations:{
          negative:{en:'I am not confident about this presentation.', es:'No estoy seguro de esta presentación.'},
          question:{en:'Are you confident about this presentation?', es:'¿Estás seguro de esta presentación?'},
          yesAnswer:{en:'Yes, I am.', es:'Sí.'},
          noAnswer:{en:"No, I'm not.", es:'No.'}
        }}
    ],
    words:[
      {en:'public speaking', es:'hablar en público', pron:'páblic spíiking', emoji:'🎤'},
      {en:'audience', es:'público', pron:'ódiens', emoji:'👥'},
      {en:'opening statement', es:'declaración de apertura', pron:'óupening stéitment', emoji:'📢'},
      {en:'key points', es:'puntos clave', pron:'kíi póints', emoji:'🔑'},
      {en:'visual aids', es:'ayudas visuales', pron:'víshual éids', emoji:'📊'},
      {en:'to engage the audience', es:'captar la atención del público', pron:'tu ingéich de ódiens', emoji:'✨'},
      {en:'Q&A session', es:'sesión de preguntas y respuestas', pron:'kiú and éi séshon', emoji:'❓'},
      {en:'closing remarks', es:'palabras de cierre', pron:'clóusing rimárks', emoji:'🏁'},
      {en:'nervous', es:'nervioso', pron:'nérvos', emoji:'😰'},
      {en:'confident', es:'seguro de sí mismo', pron:'cánfident', emoji:'😎'}
    ],
    story:[
      {en:'Public speaking in front of a thousand dragons? I am so nervous!', es:'¿Hablar en público frente a mil dragones? ¡Estoy tan nervioso!', pron:'páblic spíiking in frant of a záusand drágons? ái am sóu nérvos!'},
      {en:'Look at the audience, breathe, and start with a strong opening statement!', es:'Mirá al público, respirá, ¡y empezá con una declaración de apertura fuerte!', pron:'luk at de ódiens, bríiz, and start uid a strong óupening stéitment!'},
      {en:'Cover the key points, use visual aids, and engage the audience with fire tricks!', es:'Cubrí los puntos clave, usá ayudas visuales, ¡y captá la atención del público con trucos de fuego!', pron:'cáver de kíi póints, iús víshual éids, and ingéich de ódiens uid fáiar triks!'},
      {en:"Now it's time for the Q&A session — ask me anything about dragons!", es:'Ahora es momento de la sesión de preguntas — ¡preguntame cualquier cosa sobre dragones!', pron:"náu its táim for de kiú and éi séshon — ask mi énizin abáut drágons!"},
      {en:'My closing remarks: thank you, and now I feel confident!', es:'Mis palabras de cierre: gracias, ¡y ahora me siento seguro de mí mismo!', pron:'mái clóusing rimárks: zenk iú, and náu ái fíil cánfident!'}
    ],
    jingle:[
      {en:'Public speaking, audience too!', es:'Hablar en público, ¡público también!', pron:'páblic spíiking, ódiens tú!'},
      {en:'Opening statement, key points for you!', es:'Declaración de apertura, ¡puntos clave para ti!', pron:'óupening stéitment, kíi póints for iú!'},
      {en:'Visual aids, engage them right!', es:'Ayudas visuales, ¡captalos bien!', pron:'víshual éids, ingéich dem ráit!'},
      {en:'Q&A, closing, confident and bright!', es:'Preguntas y respuestas, cierre, ¡seguro y brillante!', pron:'kiú and éi, clóusing, cánfident and bráit!'}
    ]
  },
{
    day:89, unit:8, unitTitle:'Unidad 8 · Semanas 17-18', theme:'Contratos básicos / Términos legales simples',
    structures:[
      {id:'S067', pattern:"I need to sign + [X]", examples:[
        {en:'I need to sign the contract.', es:'Necesito firmar el contrato.', pron:'ái níid tu sáin de cántract.'},
        {en:'I need to sign the agreement.', es:'Necesito firmar el acuerdo.', pron:'ái níid tu sáin de agríiment.'},
        {en:'I need to review the terms first.', es:'Necesito revisar los términos primero.', pron:'ái níid tu riviú de terms ferst.'},
        {en:"I don't need to sign anything yet.", es:'Todavía no necesito firmar nada.', pron:"ái dont níid tu sáin énizin iét."}
      ], function:'hablar de firmar documentos', stage:2,
        transformations:{
          negative:{en:"I don't need to sign the contract.", es:'No necesito firmar el contrato.'},
          question:{en:'Do you need to sign the contract?', es:'¿Necesitás firmar el contrato?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'contract', es:'contrato', pron:'cántract', emoji:'📜'},
      {en:'signature', es:'firma', pron:'sígnicher', emoji:'✍️'},
      {en:'terms and conditions', es:'términos y condiciones', pron:'terms and candíshons', emoji:'📃'},
      {en:'clause', es:'cláusula', pron:'clos', emoji:'📌'},
      {en:'to sign', es:'firmar', pron:'tu sáin', emoji:'✒️'},
      {en:'legal advisor', es:'asesor legal', pron:'líigal advaisor', emoji:'⚖️'},
      {en:'confidential', es:'confidencial', pron:'canfidénshal', emoji:'🔒'},
      {en:'liability', es:'responsabilidad legal', pron:'laiabíliti', emoji:'⚠️'},
      {en:'to breach a contract', es:'incumplir un contrato', pron:'tu bríich a cántract', emoji:'❌'},
      {en:'binding agreement', es:'acuerdo vinculante', pron:'báinding agríiment', emoji:'🤝'}
    ],
    story:[
      {en:'Please read the contract carefully before you sign, dragon.', es:'Por favor leé el contrato con cuidado antes de firmar, dragón.', pron:'plíis ríid de cántract quérfuli bifór iú sáin, drágon.'},
      {en:'Your signature goes here, right below the terms and conditions.', es:'Tu firma va acá, justo debajo de los términos y condiciones.', pron:'iór sígnicher góus jíar, ráit bilóu de terms and candíshons.'},
      {en:'This clause is confidential — only the legal advisor can read it!', es:'¡Esta cláusula es confidencial — solo el asesor legal puede leerla!', pron:'dis clos is canfidénshal — óunli de líigal advaisor can ríid it!'},
      {en:'If a dragon breaches a contract, the liability is one mountain of gold!', es:'¡Si un dragón incumple un contrato, la responsabilidad legal es una montaña de oro!', pron:'if a drágon bríiches a cántract, de laiabíliti is uán máuntain of góuld!'},
      {en:'This is now a binding agreement — welcome to the partnership!', es:'Esto ahora es un acuerdo vinculante — ¡bienvenido a la sociedad!', pron:'dis is náu a báinding agríiment — uélcam tu de pártnership!'}
    ],
    jingle:[
      {en:'Contract, signature, terms too!', es:'Contrato, firma, ¡términos también!', pron:'cántract, sígnicher, terms tú!'},
      {en:'Clause and conditions, all for you!', es:'Cláusula y condiciones, ¡todo para ti!', pron:'clos and candíshons, ol for iú!'},
      {en:'Legal advisor, confidential and true!', es:'Asesor legal, ¡confidencial y verdadero!', pron:'líigal advaisor, canfidénshal and trú!'},
      {en:'Binding agreement, me and you!', es:'Acuerdo vinculante, ¡tú y yo!', pron:'báinding agríiment, mi and iú!'}
    ]
  },
{
    day:90, unit:8, unitTitle:'Unidad 8 · Semanas 17-18', theme:'Cultura de oficina / Diferencias culturales',
    structures:[
      {id:'S068', pattern:"In my culture, we + [VERB]", examples:[
        {en:'In my culture, we shake hands.', es:'En mi cultura, nos damos la mano.', pron:'in mái cálchur, uí shéik jands.'},
        {en:'In my culture, we arrive on time.', es:'En mi cultura, llegamos a tiempo.', pron:'in mái cálchur, uí aráiv on táim.'},
        {en:"In my culture, we don't do much small talk.", es:'En mi cultura, no hacemos mucha charla informal.', pron:"in mái cálchur, uí dont du mach smol tok."},
        {en:'In my culture, feedback is direct.', es:'En mi cultura, la retroalimentación es directa.', pron:'in mái cálchur, fíidbak is dairéct.'}
      ], function:'comparar costumbres de trabajo', stage:2,
        transformations:{
          negative:{en:"In my culture, we don't shake hands.", es:'En mi cultura, no nos damos la mano.'},
          question:{en:'Do you shake hands in your culture?', es:'¿En tu cultura se dan la mano?'},
          yesAnswer:{en:'Yes, we do.', es:'Sí.'},
          noAnswer:{en:"No, we don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'office culture', es:'cultura de oficina', pron:'áfis cálcher', emoji:'🏢'},
      {en:'work-life balance', es:'equilibrio entre trabajo y vida', pron:'uork láif bálans', emoji:'⚖️'},
      {en:'punctuality', es:'puntualidad', pron:'panctualíti', emoji:'⏰'},
      {en:'dress code', es:'código de vestimenta', pron:'dres cóud', emoji:'👔'},
      {en:'small talk', es:'charla informal', pron:'smol tok', emoji:'💬'},
      {en:'direct communication', es:'comunicación directa', pron:'diréct camiunikéishon', emoji:'🗣️'},
      {en:'hierarchy', es:'jerarquía', pron:'jáiararki', emoji:'📶'},
      {en:'feedback culture', es:'cultura de retroalimentación', pron:'fíidbak cálcher', emoji:'🔁'},
      {en:'remote work', es:'trabajo remoto', pron:'rimóut uork', emoji:'🏠'},
      {en:'flexible hours', es:'horario flexible', pron:'fléxibol áuars', emoji:'🕐'}
    ],
    story:[
      {en:'Our office culture values work-life balance — even dragons need rest!', es:'¡Nuestra cultura de oficina valora el equilibrio entre trabajo y vida — hasta los dragones necesitan descansar!', pron:'áur áfis cálcher váliuus uork láif bálans — íven drágons níid rest!'},
      {en:'Punctuality matters, but the dress code allows wings and scales.', es:'La puntualidad importa, pero el código de vestimenta permite alas y escamas.', pron:'panctualíti máters, bat de dres cóud alóus uíngs and skéils.'},
      {en:'We love small talk and direct communication, without too much hierarchy.', es:'Nos encanta la charla informal y la comunicación directa, sin demasiada jerarquía.', pron:'uí lav smol tok and diréct camiunikéishon, uidáut tu mach jáiararki.'},
      {en:'Our feedback culture is honest — even if you breathe fire during a meeting!', es:'¡Nuestra cultura de retroalimentación es honesta — hasta si respirás fuego durante una reunión!', pron:'áur fíidbak cálcher is ánest — íven if iú bríiz fáiar dúring a míiting!'},
      {en:'We offer remote work and flexible hours — fly whenever you want!', es:'¡Ofrecemos trabajo remoto y horario flexible — volá cuando quieras!', pron:'uí áfer rimóut uork and fléxibol áuars — flái uénever iú uánt!'}
    ],
    jingle:[
      {en:'Office culture, work-life balance true!', es:'Cultura de oficina, ¡equilibrio verdadero!', pron:'áfis cálcher, uork láif bálans trú!'},
      {en:'Punctuality, dress code for you!', es:'Puntualidad, ¡código de vestimenta para ti!', pron:'panctualíti, dres cóud for iú!'},
      {en:'Small talk, direct, no hierarchy!', es:'Charla informal, directo, ¡sin jerarquía!', pron:'smol tok, diréct, nóu jáiararki!'},
      {en:'Remote work, flexible, fly free!', es:'Trabajo remoto, flexible, ¡volá libre!', pron:'rimóut uork, fléxibol, flái fríi!'}
    ]
  },
{
    day:91, unit:8, unitTitle:'Unidad 8 · Semanas 17-18', theme:'Repaso liviano de la semana 17',
    structures:[
      {id:'S103', pattern:"As a matter of fact, + [X]", examples:[
        {en:'As a matter of fact, to sum up, this project went well.', es:'De hecho, para resumir, este proyecto salió bien.', pron:'as a máter of fact, tu sam ap, dis práchect uént uél.'},
        {en:'On top of that, either way, we need to decide soon.', es:'Además de eso, de cualquier manera, necesitamos decidir pronto.', pron:'on tap of dat, íder uéi, uí níid tu disáid súun.'},
        {en:"Needless to say, all things considered, this was a good year.", es:'No hace falta decir, considerando todo, este fue un buen año.', pron:"nídles tu séi, ol zings cansíderd, dis uás a gud íar."},
        {en:"At the end of the day, for the most part, we did our best.", es:'Al final del día, en su mayor parte, hicimos lo mejor que pudimos.', pron:"at de end of de déi, for de móust part, uí did áur best."}
      ], function:'reforzar conectores de discurso avanzado', stage:2,
        transformations:{
          negative:{en:"As a matter of fact, this is not true.", es:'De hecho, esto no es verdad.'},
          question:{en:'Is this true, as a matter of fact?', es:'¿Es verdad esto, de hecho?'},
          yesAnswer:{en:'Yes, as a matter of fact.', es:'Sí, de hecho.'},
          noAnswer:{en:"No, not really.", es:'No, la verdad que no.'}
        }}
    ],
    words:[
      {en:'as a matter of fact', es:'de hecho', pron:'as a máter of fact', emoji:'💬'},
      {en:'to sum up', es:'para resumir', pron:'tu sam ap', emoji:'📝'},
      {en:'on top of that', es:'además de eso', pron:'on tap of dat', emoji:'➕'},
      {en:'either way', es:'de cualquier manera', pron:'íder uéi', emoji:'↔️'},
      {en:'needless to say', es:'no hace falta decir', pron:'nídles tu séi', emoji:'✅'},
      {en:'all things considered', es:'considerando todo', pron:'ol zings cansíderd', emoji:'🤔'},
      {en:'at the end of the day', es:'al final del día', pron:'at de end of de déi', emoji:'🌅'},
      {en:'for the most part', es:'en su mayor parte', pron:'for de móust part', emoji:'📊'}
    ],
    story:[
      {en:'As a matter of fact, to sum up, this dragon speaks perfect English now!', es:'De hecho, para resumir, ¡este dragón ahora habla inglés perfecto!', pron:'as a máter of fact, tu sam ap, dis drágon spíiks pérfect ínglish náu!'},
      {en:'On top of that, either way, needless to say, we are proud!', es:'Además de eso, de cualquier manera, no hace falta decir, ¡estamos orgullosos!', pron:'on tap of dat, íder uéi, nídles tu séi, uí ar práud!'},
      {en:'All things considered, at the end of the day, for the most part, we did it!', es:'Considerando todo, al final del día, en su mayor parte, ¡lo logramos!', pron:'ol zings cansíderd, at de end of de déi, for de móust part, uí did it!'}
    ],
    jingle:[
      {en:'As a matter of fact, to sum up!', es:'De hecho, ¡para resumir!', pron:'as a máter of fact, tu sam ap!'},
      {en:"On top of that, either way, that's enough!", es:'Además de eso, de cualquier manera, ¡suficiente!', pron:"on tap of dat, íder uéi, dats ináf!"},
      {en:'Needless to say, all things considered!', es:'No hace falta decir, ¡considerando todo!', pron:'nídles tu séi, ol zings cansíderd!'},
      {en:'At the end of the day, we delivered!', es:'Al final del día, ¡entregamos!', pron:'at de end of de déi, uí delíverd!'}
    ]
  },
{
    day:92, unit:8, unitTitle:'Unidad 8 · Semanas 19-20', theme:'Bancos y finanzas avanzado',
    structures:[
      {id:'S069', pattern:"I want to invest in + [X]", examples:[
        {en:'I want to invest in stocks.', es:'Quiero invertir en acciones.', pron:'ái uánt tu invést in staks.'},
        {en:'I want to open a savings account.', es:'Quiero abrir una cuenta de ahorros.', pron:'ái uánt tu óupen a séivings acáunt.'},
        {en:'I want to apply for a loan.', es:'Quiero solicitar un préstamo.', pron:'ái uánt tu aplái for a lóun.'},
        {en:"I don't want to take financial risks.", es:'No quiero tomar riesgos financieros.', pron:"ái dont uánt tu téik fainánshial risks."}
      ], function:'hablar de tus planes financieros', stage:2,
        transformations:{
          negative:{en:"I don't want to invest in stocks.", es:'No quiero invertir en acciones.'},
          question:{en:'Do you want to invest in stocks?', es:'¿Querés invertir en acciones?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'loan', es:'préstamo', pron:'lóun', emoji:'💰'},
      {en:'interest rate', es:'tasa de interés', pron:'ínterest réit', emoji:'📈'},
      {en:'credit score', es:'puntaje crediticio', pron:'crédit scóar', emoji:'🔢'},
      {en:'savings account', es:'cuenta de ahorros', pron:'séivings acáunt', emoji:'🏦'},
      {en:'checking account', es:'cuenta corriente', pron:'chéking acáunt', emoji:'💳'},
      {en:'to transfer funds', es:'transferir fondos', pron:'tu tránsfer fands', emoji:'🔄'},
      {en:'financial advisor', es:'asesor financiero', pron:'faináncial advaisor', emoji:'🧑‍💼'},
      {en:'to invest', es:'invertir', pron:'tu invést', emoji:'📊'},
      {en:'stock market', es:'mercado de valores', pron:'stak márket', emoji:'📉'},
      {en:'budget planning', es:'planificación de presupuesto', pron:'báchet pláning', emoji:'📋'}
    ],
    story:[
      {en:'I need a loan — what is the interest rate for a dragon with excellent credit score?', es:'Necesito un préstamo — ¿cuál es la tasa de interés para un dragón con excelente puntaje crediticio?', pron:'ái níid a lóun — uát is de ínterest réit for a drágon uid éxcelent crédit scóar?'},
      {en:'I have a savings account and a checking account, both full of gold coins!', es:'¡Tengo una cuenta de ahorros y una cuenta corriente, las dos llenas de monedas de oro!', pron:'ái jav a séivings acáunt and a chéking acáunt, bóuz ful of góuld cóins!'},
      {en:'Please transfer funds to my castle, and connect me with a financial advisor.', es:'Por favor transferí fondos a mi castillo, y conectame con un asesor financiero.', pron:'plíis tránsfer fands tu mái cásol, and canéct mi uid a faináncial advaisor.'},
      {en:'I want to invest in the stock market — specifically, dragon egg futures!', es:'Quiero invertir en el mercado de valores — específicamente, ¡en futuros de huevos de dragón!', pron:'ái uánt tu invést in de stak márket — spesífikli, drágon eg fiúchers!'},
      {en:'Good budget planning means never running out of gold!', es:'¡La buena planificación de presupuesto significa nunca quedarse sin oro!', pron:'gud báchet pláning míins néver ránning áut of góuld!'}
    ],
    jingle:[
      {en:'Loan, interest rate, credit score too!', es:'Préstamo, tasa de interés, ¡puntaje también!', pron:'lóun, ínterest réit, crédit scóar tú!'},
      {en:'Savings, checking, all for you!', es:'Ahorros, corriente, ¡todo para ti!', pron:'séivings, chéking, ol for iú!'},
      {en:'Transfer funds, advisor near!', es:'Transferí fondos, ¡asesor cerca!', pron:'tránsfer fands, advaisor níar!'},
      {en:'Invest, stock market, budget clear!', es:'Invertí, mercado de valores, ¡presupuesto claro!', pron:'invést, stak márket, báchet clíar!'}
    ]
  },
{
    day:93, unit:8, unitTitle:'Unidad 8 · Semanas 19-20', theme:'Impuestos y contabilidad básica',
    structures:[
      {id:'S104', pattern:"I need to file taxes before the + [DEADLINE]", examples:[
        {en:'I need to file taxes before the end of the fiscal year.', es:'Necesito presentar impuestos antes del fin del año fiscal.', pron:'ái níid tu fáil táxis bifór de end of de físcal íar.'},
        {en:'My accountant is reviewing our revenue and expenses.', es:'Mi contador está revisando nuestros ingresos y gastos.', pron:'mái acáuntant is riviúing áur révenu and expénsis.'},
        {en:'Our profit margin looks good this quarter.', es:'Nuestro margen de ganancia se ve bien este trimestre.', pron:'áur práfit márchin luks gud dis cuórter.'},
        {en:"Keep every receipt — some expenses are deductible, and there might be an audit.", es:'Guardá cada recibo — algunos gastos son deducibles, y podría haber una auditoría.', pron:"kíip évri risíit — sam expénsis ar dedáctibol, and der máit bi an ódit."}
      ], function:'hablar de impuestos y contabilidad', stage:2,
        transformations:{
          negative:{en:"I don't need to file taxes yet.", es:'Todavía no necesito presentar impuestos.'},
          question:{en:'Do you need to file taxes soon?', es:'¿Necesitás presentar impuestos pronto?'},
          yesAnswer:{en:'Yes, before the deadline.', es:'Sí, antes de la fecha límite.'},
          noAnswer:{en:"No, not yet.", es:'No, todavía no.'}
        }}
    ],
    words:[
      {en:'tax return', es:'declaración de impuestos', pron:'tax ritérn', emoji:'📄'},
      {en:'accountant', es:'contador', pron:'acáuntant', emoji:'🧮'},
      {en:'fiscal year', es:'año fiscal', pron:'físcal íar', emoji:'📅'},
      {en:'revenue', es:'ingresos', pron:'révenu', emoji:'💵'},
      {en:'expenses', es:'gastos', pron:'expénses', emoji:'💸'},
      {en:'profit margin', es:'margen de ganancia', pron:'práfit márchin', emoji:'📈'},
      {en:'audit', es:'auditoría', pron:'ódit', emoji:'🔍'},
      {en:'receipt', es:'recibo', pron:'risíit', emoji:'🧾'},
      {en:'deductible', es:'deducible', pron:'didáctibol', emoji:'➖'},
      {en:'to file taxes', es:'declarar impuestos', pron:'tu fáil táxes', emoji:'📁'}
    ],
    story:[
      {en:'My accountant is a wise old owl who prepares my tax return every fiscal year.', es:'Mi contador es un búho sabio que prepara mi declaración de impuestos cada año fiscal.', pron:'mái acáuntant is a uáis óuld ául jú prepérs mái tax ritérn évri físcal íar.'},
      {en:'Our revenue was a mountain of gold, but our expenses were also huge!', es:'¡Nuestros ingresos fueron una montaña de oro, pero nuestros gastos también fueron enormes!', pron:'áur révenu uas a máuntain of góuld, bat áur expénses uér ólso jiúch!'},
      {en:'The profit margin is small this year — the audit found too many snacks!', es:'El margen de ganancia es pequeño este año — ¡la auditoría encontró demasiados bocadillos!', pron:'de práfit márchin is smol dis íar — de ódit fáund tu méni snaks!'},
      {en:'Keep every receipt — some expenses are deductible!', es:'¡Guardá cada recibo — algunos gastos son deducibles!', pron:'kíip évri risíit — sam expénses ar didáctibol!'},
      {en:"It's time to file taxes — the whole kingdom is doing paperwork today!", es:'Es hora de declarar impuestos — ¡todo el reino está haciendo papeleo hoy!', pron:"its táim tu fáil táxes — de jóul kíngdom is dúing péiperuork tudéi!"}
    ],
    jingle:[
      {en:'Tax return, accountant too!', es:'Declaración de impuestos, ¡contador también!', pron:'tax ritérn, acáuntant tú!'},
      {en:'Fiscal year, revenue for you!', es:'Año fiscal, ¡ingresos para ti!', pron:'físcal íar, révenu for iú!'},
      {en:'Expenses, profit margin, audit near!', es:'Gastos, margen de ganancia, ¡auditoría cerca!', pron:'expénses, práfit márchin, ódit níar!'},
      {en:'Receipt, deductible, file it clear!', es:'Recibo, deducible, ¡declaralo claro!', pron:'risíit, didáctibol, fáil it clíar!'}
    ]
  },
{
    day:94, unit:8, unitTitle:'Unidad 8 · Semanas 19-20', theme:'Negociación avanzada',
    structures:[
      {id:'S070', pattern:"I am willing to + [VERB]", examples:[
        {en:'I am willing to compromise.', es:'Estoy dispuesto a ceder.', pron:'ái am uíling tu cámpramais.'},
        {en:'I am willing to negotiate the price.', es:'Estoy dispuesto a negociar el precio.', pron:'ái am uíling tu negóushieit de práis.'},
        {en:'I am not willing to lower the price further.', es:'No estoy dispuesto a bajar más el precio.', pron:'ái am nat uíling tu lóuer de práis férder.'},
        {en:'I am willing to meet you halfway.', es:'Estoy dispuesto a llegar a un punto medio.', pron:'ái am uíling tu míit iú jafuéi.'}
      ], function:'expresar disposición a ceder en una negociación', stage:2,
        transformations:{
          negative:{en:'I am not willing to compromise.', es:'No estoy dispuesto a ceder.'},
          question:{en:'Are you willing to compromise?', es:'¿Estás dispuesto a ceder?'},
          yesAnswer:{en:'Yes, I am.', es:'Sí.'},
          noAnswer:{en:"No, I'm not.", es:'No.'}
        }}
    ],
    words:[
      {en:'to compromise', es:'ceder, llegar a un término medio', pron:'tu cámpromais', emoji:'🤝'},
      {en:'win-win situation', es:'situación en que todos ganan', pron:'uín uín sitiuéishon', emoji:'🏆'},
      {en:'leverage', es:'influencia, ventaja', pron:'léverich', emoji:'⚙️'},
      {en:'bottom line', es:'resultado final, lo esencial', pron:'bátom láin', emoji:'📊'},
      {en:'to concede', es:'ceder un punto', pron:'tu cansíid', emoji:'🙏'},
      {en:'mutual benefit', es:'beneficio mutuo', pron:'miúchual bénefit', emoji:'🤝'},
      {en:'negotiation table', es:'mesa de negociación', pron:'nigoushiéishon téibol', emoji:'🪑'},
      {en:'to reach an agreement', es:'llegar a un acuerdo', pron:'tu ríich an agríiment', emoji:'✅'},
      {en:'counterproposal', es:'contrapropuesta', pron:'cáunterpropóusal', emoji:'🔄'}
    ],
    story:[
      {en:"Let's compromise, dragon — this can be a win-win situation for both of us!", es:'Cedamos un poco, dragón — ¡esto puede ser una situación en que todos ganan!', pron:"lets cámpromais, drágon — dis can bi a uín uín sitiuéishon for bóuz of as!"},
      {en:'I have leverage — I control the only bridge to the treasure!', es:'¡Tengo influencia — controlo el único puente hacia el tesoro!', pron:'ái jav léverich — ái cantróul de óunli brich tu de tréshur!'},
      {en:'The bottom line is, I will concede one gold coin for mutual benefit.', es:'Lo esencial es que voy a ceder una moneda de oro por beneficio mutuo.', pron:'de bátom láin is, ái uíl cansíid uán góuld cóin for miúchual bénefit.'},
      {en:"At the negotiation table, let's reach an agreement before sunset!", es:'¡En la mesa de negociación, lleguemos a un acuerdo antes del atardecer!', pron:"at de nigoushiéishon téibol, lets ríich an agríiment bifór sánset!"},
      {en:'Here is my counterproposal: two gold coins, and a dragon egg!', es:'¡Acá está mi contrapropuesta: dos monedas de oro, y un huevo de dragón!', pron:'jíar is mái cáunterpropóusal: tú góuld cóins, and a drágon eg!'}
    ],
    jingle:[
      {en:'Compromise, win-win too!', es:'Ceder, ¡ganar-ganar también!', pron:'cámpromais, uín uín tú!'},
      {en:'Leverage, bottom line for you!', es:'Influencia, ¡resultado final para ti!', pron:'léverich, bátom láin for iú!'},
      {en:'Concede, mutual benefit clear!', es:'Ceder, ¡beneficio mutuo claro!', pron:'cansíid, miúchual bénefit clíar!'},
      {en:'Negotiation table, agreement near!', es:'Mesa de negociación, ¡acuerdo cerca!', pron:'nigoushiéishon téibol, agríiment níar!'}
    ]
  },
{
    day:95, unit:8, unitTitle:'Unidad 8 · Semanas 19-20', theme:'Resolución de conflictos',
    structures:[
      {id:'S105', pattern:"Let's try to resolve this + [CONFLICT]", examples:[
        {en:"There's a conflict — let's try to resolve this together.", es:'Hay un conflicto — tratemos de resolver esto juntos.', pron:"ders a cánflict — lets trái tu risólv dis tugéder."},
        {en:'We might need a mediator to find common ground.', es:'Podríamos necesitar un mediador para encontrar un punto en común.', pron:'uí máit níid a mídieitor tu fáind cámon gráund.'},
        {en:"Let's listen actively, and use a respectful tone.", es:'Escuchemos activamente, y usemos un tono respetuoso.', pron:"lets lísen áctivli, and iús a rispéctful tóun."},
        {en:"We need to clarify things, so we can move forward.", es:'Necesitamos aclarar las cosas, para poder avanzar.', pron:"uí níid tu clárifái zings, sóu uí can múuv fórward."}
      ], function:'hablar de resolver conflictos en el trabajo', stage:2,
        transformations:{
          negative:{en:"This conflict is not resolved yet.", es:'Este conflicto todavía no está resuelto.'},
          question:{en:'Can we resolve this conflict today?', es:'¿Podemos resolver este conflicto hoy?'},
          yesAnswer:{en:'Yes, let\'s try.', es:'Sí, intentemos.'},
          noAnswer:{en:"No, we need more time.", es:'No, necesitamos más tiempo.'}
        }}
    ],
    words:[
      {en:'conflict', es:'conflicto', pron:'cánflict', emoji:'⚡'},
      {en:'to resolve', es:'resolver', pron:'tu risálv', emoji:'✅'},
      {en:'mediator', es:'mediador', pron:'míidieitor', emoji:'🧑‍⚖️'},
      {en:'common ground', es:'punto en común', pron:'cámon gráund', emoji:'🤝'},
      {en:'to listen actively', es:'escuchar activamente', pron:'tu lísen áctivli', emoji:'👂'},
      {en:'respectful tone', es:'tono respetuoso', pron:'rispéctful tóun', emoji:'🙏'},
      {en:'to clarify', es:'aclarar', pron:'tu clárifai', emoji:'💡'},
      {en:'to move forward', es:'avanzar', pron:'tu múuv fóruard', emoji:'➡️'}
    ],
    story:[
      {en:'There is a conflict between the dragons — we need to resolve it fast!', es:'Hay un conflicto entre los dragones — ¡necesitamos resolverlo rápido!', pron:'dér is a cánflict bituín de drágons — uí níid tu risálv it fast!'},
      {en:'The mediator helped us find common ground — we both love gold!', es:'¡El mediador nos ayudó a encontrar un punto en común — a los dos nos encanta el oro!', pron:'de míidieitor jelpt as fáind cámon gráund — uí bóuz lav góuld!'},
      {en:"Let's listen actively, and keep a respectful tone during this discussion.", es:'Escuchemos activamente, y mantengamos un tono respetuoso durante esta discusión.', pron:"lets lísen áctivli, and kíip a rispéctful tóun dúring dis discúshon."},
      {en:'Can you clarify what you meant by "my treasure, not yours"?', es:'¿Podés aclarar qué quisiste decir con "mi tesoro, no el tuyo"?', pron:'can iú clárifai uát iú ment bái "mái tréshur, nat iórs"?'},
      {en:"Now let's move forward together, as friends!", es:'¡Ahora avancemos juntos, como amigos!', pron:"náu lets múuv fóruard tugéder, as frends!"}
    ],
    jingle:[
      {en:'Conflict, resolve, mediator too!', es:'Conflicto, resolver, ¡mediador también!', pron:'cánflict, risálv, míidieitor tú!'},
      {en:"Common ground, listen actively, it's true!", es:'Punto en común, escuchar activamente, ¡es verdad!', pron:"cámon gráund, lísen áctivli, its trú!"},
      {en:'Respectful tone, clarify it right!', es:'Tono respetuoso, ¡aclará bien!', pron:'rispéctful tóun, clárifai it ráit!'},
      {en:'Move forward, friends, hold on tight!', es:'Avancemos, amigos, ¡agarrate fuerte!', pron:'múuv fóruard, frends, jóuld on táit!'}
    ]
  },
{
    day:96, unit:8, unitTitle:'Unidad 8 · Semanas 19-20', theme:'Repaso y cierre de la Unidad 8',
    structures:[
      {id:'S106', pattern:"This progress was well earned + [X]", examples:[
        {en:'Unit eight is done — more than half done now!', es:'La Unidad Ocho está lista — ¡ya más de la mitad hecha!', pron:'iúnit éit is dan — mor dan jaf dan náu!'},
        {en:'Keep pushing — this progress was well earned.', es:'Seguí adelante — este progreso fue bien merecido.', pron:'kíip púshing — dis prógres uás uél érnd.'},
        {en:"You're in the final stretch now.", es:'Ya estás en el tramo final ahora.', pron:"iór in de fáinal strech náu."},
        {en:'See you in unit nine, next unit!', es:'¡Nos vemos en la Unidad Nueve, la próxima unidad!', pron:'síi iú in iúnit náin, next iúnit!'}
      ], function:'cerrar la unidad reconociendo el progreso', stage:2,
        transformations:{
          negative:{en:"This unit is not finished yet.", es:'Esta unidad todavía no está terminada.'},
          question:{en:'Is unit eight finished?', es:'¿Está terminada la Unidad Ocho?'},
          yesAnswer:{en:'Yes, completely.', es:'Sí, completamente.'},
          noAnswer:{en:"Almost — just a little more.", es:'Casi — un poco más.'}
        }}
    ],
    words:[
      {en:'unit eight', es:'unidad ocho', pron:'iúnit éit', emoji:'8️⃣'},
      {en:'more than half done', es:'más de la mitad hecho', pron:'mor dan jaf dan', emoji:'📊'},
      {en:'keep pushing', es:'seguí esforzándote', pron:'kíip púshing', emoji:'💪'},
      {en:'well earned', es:'bien merecido', pron:'uél érnd', emoji:'👏'},
      {en:'final stretch', es:'recta final', pron:'fáinal strech', emoji:'🏁'},
      {en:'see you in unit nine', es:'nos vemos en la unidad nueve', pron:'síi iú in iúnit náin', emoji:'➡️'},
      {en:'next unit', es:'próxima unidad', pron:'next iúnit', emoji:'➡️'}
    ],
    story:[
      {en:"Welcome to unit eight's closing chapter — more than half done, brave hero!", es:'¡Bienvenido al capítulo de cierre de la unidad ocho — más de la mitad hecho, valiente héroe!', pron:"uélcam tu iúnit éits clóusing cháptar — mor dan jaf dan, bréiv jírou!"},
      {en:'Keep pushing — this is well earned progress!', es:'¡Seguí esforzándote — este es un progreso bien merecido!', pron:'kíip púshing — dis is uél érnd prágres!'},
      {en:'We are entering the final stretch of this legendary journey!', es:'¡Estamos entrando en la recta final de este viaje legendario!', pron:'uí ar éntering de fáinal strech of dis léyendari yérni!'},
      {en:'See you in unit nine, dragon trader!', es:'¡Nos vemos en la unidad nueve, comerciante de dragones!', pron:'síi iú in iúnit náin, drágon tréider!'}
    ],
    jingle:[
      {en:'Unit eight, more than half done!', es:'Unidad ocho, ¡más de la mitad hecho!', pron:'iúnit éit, mor dan jaf dan!'},
      {en:'Keep pushing, well earned, having fun!', es:'Seguí esforzándote, bien merecido, ¡divirtiéndote!', pron:'kíip púshing, uél érnd, jávin fan!'},
      {en:'Final stretch, almost there, my friend!', es:'Recta final, casi llegamos, ¡mi amigo!', pron:'fáinal strech, ólmoust dér, mái frend!'},
      {en:'See you in unit nine, till the end!', es:'Nos vemos en la unidad nueve, ¡hasta el final!', pron:'síi iú in iúnit náin, til de end!'}
    ]
  }
];
