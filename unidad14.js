// Unidad 14 del curso — Días 157 a 168
// Este archivo se puede editar o reemplazar solo, sin tocar el resto del curso.
const curriculumUnidad14 = [
{
    day:157, unit:14, unitTitle:'Unidad 14 · Semanas 33-34', theme:'Industria farmacéutica',
    structures:[
      {id:'S161', pattern:"This drug needs approval before + [X]", examples:[
        {en:'This drug needs approval before entering the clinical trial phase.', es:'Este medicamento necesita aprobación antes de entrar en la fase de ensayo clínico.', pron:'dis drag níids apruúval bifór éntering de clínical tráial féis.'},
        {en:'A generic drug becomes available after patent expiration.', es:'Un medicamento genérico se vuelve disponible después del vencimiento de la patente.', pron:'a yenéric drag bicáms aveilábol áfter pátent expiréishion.'},
        {en:'Always follow dosage instructions, and watch for side effects.', es:'Siempre sigue las instrucciones de dosis, y atento a los efectos secundarios.', pron:'ólueis fálou dóusich instrákshions, and uách for sáid ifécts.'},
        {en:'Is this a prescription drug, or over-the-counter?', es:'¿Este es un medicamento con receta, o de venta libre?', pron:'is dis a priscrípshion drag, or óver-de-cáunter?'}
      ], function:'hablar de la industria farmacéutica', stage:4,
        transformations:{
          negative:{en:"This drug doesn't need approval yet.", es:'Este medicamento todavía no necesita aprobación.'},
          question:{en:'Does this drug need approval?', es:'¿Este medicamento necesita aprobación?'},
          yesAnswer:{en:'Yes, definitely.', es:'Sí, definitivamente.'},
          noAnswer:{en:"Not this one.", es:'Este no.'}
        }}
    ],
    words:[
      {en:'pharmaceutical industry', es:'industria farmacéutica', pron:'fármaséutical índastri', emoji:'💊'},
      {en:'clinical trial', es:'ensayo clínico', pron:'clínical tráial', emoji:'🧪'},
      {en:'drug approval', es:'aprobación de medicamento', pron:'drag apruvol', emoji:'✅'},
      {en:'generic drug', es:'medicamento genérico', pron:'yenéric drag', emoji:'💊'},
      {en:'patent expiration', es:'vencimiento de patente', pron:'pátent expiréishon', emoji:'📜'},
      {en:'dosage instructions', es:'instrucciones de dosificación', pron:'dóusich instrákshons', emoji:'📋'},
      {en:'side effects', es:'efectos secundarios', pron:'sáid iféccts', emoji:'⚠️'},
      {en:'prescription drug', es:'medicamento con receta', pron:'priscrípshon drag', emoji:'📄'},
      {en:'over-the-counter', es:'de venta libre', pron:'óuver de cáunter', emoji:'🏪'},
      {en:'pharmaceutical research', es:'investigación farmacéutica', pron:'fármaséutical risérch', emoji:'🔬'}
    ],
    story:[
      {en:'The pharmaceutical industry ran a clinical trial on a new dragon healing potion!', es:'¡La industria farmacéutica hizo un ensayo clínico de una nueva poción de sanación de dragones!', pron:'de fármaséutical índastri ran a clínical tráial on a niú drágon jíiling póushon!'},
      {en:'After drug approval, they launched a generic drug version too!', es:'¡Después de la aprobación del medicamento, lanzaron también una versión genérica!', pron:'áfter drag apruvol, déi lónchd a yenéric drag vérshon tú!'},
      {en:'The patent expiration means other wizards can copy the dosage instructions.', es:'El vencimiento de la patente significa que otros magos pueden copiar las instrucciones de dosificación.', pron:'de pátent expiréishon míins áder uísards can cápi de dóusich instrákshons.'},
      {en:'Watch out for side effects — this prescription drug may cause extra fire breath!', es:'¡Cuidado con los efectos secundarios — este medicamento con receta puede causar aliento de fuego extra!', pron:'uátch áut for sáid iféccts — dis priscrípshon drag méi cós éxtra fáiar bréz!'},
      {en:'Some potions are over-the-counter, thanks to years of pharmaceutical research!', es:'¡Algunas pociones son de venta libre, gracias a años de investigación farmacéutica!', pron:'sam póushons ar óuver de cáunter, zanks tu íars of fármaséutical risérch!'}
    ],
    jingle:[
      {en:'Pharmaceutical industry, clinical trial too!', es:'Industria farmacéutica, ¡ensayo clínico también!', pron:'fármaséutical índastri, clínical tráial tú!'},
      {en:'Drug approval, generic for you!', es:'Aprobación, ¡genérico para ti!', pron:'drag apruvol, yenéric for iú!'},
      {en:'Dosage instructions, side effects clear!', es:'Instrucciones de dosis, ¡efectos claros!', pron:'dóusich instrákshons, sáid iféccts clíar!'},
      {en:'Over-the-counter, research is near!', es:'De venta libre, ¡investigación cerca!', pron:'óuver de cáunter, risérch is níar!'}
    ]
  },
{
    day:158, unit:14, unitTitle:'Unidad 14 · Semanas 33-34', theme:'Industria de videojuegos',
    structures:[
      {id:'S162', pattern:"This game developer is working on + [X]", examples:[
        {en:'This game developer is working on a new video game console.', es:'Este desarrollador de videojuegos está trabajando en una nueva consola de videojuegos.', pron:'dis guéim divéloper is uórking on a niú vídio guéim cánsoul.'},
        {en:'In-game purchases are part of the game design now.', es:'Las compras dentro del juego son parte del diseño del juego ahora.', pron:'in-guéim pérchasis ar part of de guéim disáin náu.'},
        {en:'The esports scene relies on a powerful game engine.', es:'La escena de deportes electrónicos depende de un motor de juego potente.', pron:'de i-sports síin riláis on a páuerful guéim énchin.'},
        {en:'Beta testing helps the gaming community shape the downloadable content.', es:'Las pruebas beta ayudan a la comunidad de jugadores a dar forma al contenido descargable.', pron:'béita tésting jelps de guéiming camiúniti shéip de dáunlóudabol cántent.'}
      ], function:'hablar de la industria de videojuegos', stage:4,
        transformations:{
          negative:{en:"This developer isn't working on that yet.", es:'Este desarrollador todavía no está trabajando en eso.'},
          question:{en:'Is this developer working on a new game?', es:'¿Este desarrollador está trabajando en un juego nuevo?'},
          yesAnswer:{en:'Yes, right now.', es:'Sí, ahora mismo.'},
          noAnswer:{en:"Not this year.", es:'No este año.'}
        }}
    ],
    words:[
      {en:'gaming industry', es:'industria de videojuegos', pron:'guéiming índastri', emoji:'🎮'},
      {en:'game developer', es:'desarrollador de juegos', pron:'guéim divéloper', emoji:'👨‍💻'},
      {en:'video game console', es:'consola de videojuegos', pron:'vídio guéim cánsol', emoji:'🕹️'},
      {en:'in-game purchase', es:'compra dentro del juego', pron:'in guéim pérchas', emoji:'💳'},
      {en:'game design', es:'diseño de juegos', pron:'guéim disáin', emoji:'🎨'},
      {en:'esports', es:'deportes electrónicos', pron:'íisports', emoji:'🏆'},
      {en:'game engine', es:'motor de juego', pron:'guéim enyin', emoji:'⚙️'},
      {en:'beta testing', es:'pruebas beta', pron:'béita tésting', emoji:'🧪'},
      {en:'gaming community', es:'comunidad de jugadores', pron:'guéiming camiúniti', emoji:'👥'},
      {en:'downloadable content', es:'contenido descargable', pron:'daunlóudabol cántent', emoji:'⬇️'}
    ],
    story:[
      {en:"This dragon works in the gaming industry — he's a talented game developer!", es:'¡Este dragón trabaja en la industria de videojuegos — es un desarrollador con mucho talento!', pron:"dis drágon uorks in de guéiming índastri — jis a tálented guéim divéloper!"},
      {en:'He made a video game console shaped like a dragon egg, with in-game purchases!', es:'¡Hizo una consola con forma de huevo de dragón, con compras dentro del juego!', pron:'ji méid a vídio guéim cánsol shéipt láik a drágon eg, uid in guéim pérchases!'},
      {en:'His game design uses a magic game engine — everything runs perfectly!', es:'¡Su diseño de juego usa un motor mágico — todo funciona perfecto!', pron:'jis guéim disáin iúses a máyic guéim enyin — évrizin rans pérfectli!'},
      {en:'Esports tournaments happen every week — beta testing showed dragons love competing!', es:'¡Los torneos de esports pasan cada semana — las pruebas beta mostraron que a los dragones les encanta competir!', pron:'íisports túrnaments jápen évri uíik — béita tésting shóud drágons lav campíting!'},
      {en:'The gaming community grew fast after new downloadable content launched!', es:'¡La comunidad de jugadores creció rápido después de que salió contenido descargable nuevo!', pron:'de guéiming camiúniti grúu fast áfter niú daunlóudabol cántent lónchd!'}
    ],
    jingle:[
      {en:'Gaming industry, developer too!', es:'Industria de videojuegos, ¡desarrollador también!', pron:'guéiming índastri, divéloper tú!'},
      {en:'Video game console, all for you!', es:'Consola, ¡todo para ti!', pron:'vídio guéim cánsol, ol for iú!'},
      {en:'Game design, esports so bright!', es:'Diseño de juego, ¡esports tan brillante!', pron:'guéim disáin, íisports sóu bráit!'},
      {en:'Beta testing, community right!', es:'Pruebas beta, ¡comunidad correcta!', pron:'béita tésting, camiúniti ráit!'}
    ]
  },
{
    day:159, unit:14, unitTitle:'Unidad 14 · Semanas 33-34', theme:'Organizaciones sin fines de lucro',
    structures:[
      {id:'S163', pattern:"This non-profit organization runs + [X]", examples:[
        {en:'This non-profit organization runs a charity and a fundraising campaign.', es:'Esta organización sin fines de lucro dirige una obra benéfica y una campaña de recaudación de fondos.', pron:'dis nan-práfit orgánaiséishion rans a chériti and a fándréising campéin.'},
        {en:'Every volunteer and donor makes a real difference.', es:'Cada voluntario y donante hace una diferencia real.', pron:'évri váluntíar and dóunor méiks a ríal díferens.'},
        {en:'Grant funding supports our social impact goals.', es:'El financiamiento por subvención apoya nuestras metas de impacto social.', pron:'grant fánding sapórts áur sóushal ímpact góuls.'},
        {en:'Community outreach helped us keep our tax-exempt status.', es:'El alcance comunitario nos ayudó a mantener nuestro estatus exento de impuestos.', pron:'camiúniti áutrich jelpd as kíip áur tax-ixémpt stétus.'}
      ], function:'hablar de organizaciones sin fines de lucro', stage:4,
        transformations:{
          negative:{en:"This organization doesn't run that program.", es:'Esta organización no dirige ese programa.'},
          question:{en:'Does this organization run a fundraising campaign?', es:'¿Esta organización dirige una campaña de recaudación de fondos?'},
          yesAnswer:{en:'Yes, every year.', es:'Sí, cada año.'},
          noAnswer:{en:"Not this year.", es:'No este año.'}
        }}
    ],
    words:[
      {en:'non-profit organization', es:'organización sin fines de lucro', pron:'nan práfit organaiséishon', emoji:'🤲'},
      {en:'charity', es:'obra de caridad', pron:'chériti', emoji:'❤️'},
      {en:'fundraising campaign', es:'campaña de recaudación de fondos', pron:'fándréising campéin', emoji:'💰'},
      {en:'volunteer', es:'voluntario', pron:'valantíar', emoji:'🙋'},
      {en:'donor', es:'donante', pron:'dóunor', emoji:'🎁'},
      {en:'grant funding', es:'financiamiento por subvención', pron:'grant fánding', emoji:'📜'},
      {en:'social impact', es:'impacto social', pron:'sóushal ímpact', emoji:'🌍'},
      {en:'community outreach', es:'alcance comunitario', pron:'camiúniti áutrich', emoji:'🤝'},
      {en:'tax-exempt status', es:'estatus de exención de impuestos', pron:'tax exémpt stétus', emoji:'📋'}
    ],
    story:[
      {en:'This dragon runs a non-profit organization — a true charity of the heart!', es:'¡Este dragón dirige una organización sin fines de lucro — una obra de caridad de verdad!', pron:'dis drágon rans a nan práfit organaiséishon — a trú chériti of de jart!'},
      {en:'Our fundraising campaign needs more volunteers, and generous donors!', es:'¡Nuestra campaña de recaudación necesita más voluntarios, y donantes generosos!', pron:'áur fándréising campéin níids mor valantíars, and yénerus dóunors!'},
      {en:'We received grant funding to increase our social impact!', es:'¡Recibimos financiamiento por subvención para aumentar nuestro impacto social!', pron:'uí risívd grant fánding tu incríis áur sóushal ímpact!'},
      {en:'Community outreach helped every dragon family in need!', es:'¡El alcance comunitario ayudó a cada familia de dragones necesitada!', pron:'camiúniti áutrich jelpt évri drágon fámili in níid!'},
      {en:'Our tax-exempt status was approved — more gold for the mission!', es:'¡Nuestro estatus de exención de impuestos fue aprobado — más oro para la misión!', pron:'áur tax exémpt stétus uas apruvd — mor góuld for de míshon!'}
    ],
    jingle:[
      {en:'Non-profit organization, charity too!', es:'Sin fines de lucro, ¡caridad también!', pron:'nan práfit organaiséishon, chériti tú!'},
      {en:'Fundraising campaign, volunteers for you!', es:'Recaudación, ¡voluntarios para ti!', pron:'fándréising campéin, valantíars for iú!'},
      {en:'Donor, grant funding bright!', es:'Donante, ¡financiamiento brillante!', pron:'dóunor, grant fánding bráit!'},
      {en:'Social impact, outreach right!', es:'Impacto social, ¡alcance correcto!', pron:'sóushal ímpact, áutrich ráit!'}
    ]
  },
{
    day:160, unit:14, unitTitle:'Unidad 14 · Semanas 33-34', theme:'Industria editorial',
    structures:[
      {id:'S164', pattern:"This manuscript needs a literary agent before + [X]", examples:[
        {en:'This manuscript needs a literary agent before entering the publishing industry.', es:'Este manuscrito necesita un agente literario antes de entrar en la industria editorial.', pron:'dis mánuscrit níids a líterari éichent bifór éntering de páblishing índastri.'},
        {en:"We're close to signing a book deal with an editor.", es:'Estamos cerca de firmar un contrato de libro con un editor.', pron:"uír clóus tu sáining a buk díil uid an éditor."},
        {en:'The print run and ebook format launch together.', es:'La tirada impresa y el formato de libro electrónico se lanzan juntos.', pron:'de print ran and íibuk fórmat lonch tugéder.'},
        {en:'After the book launch, check your royalty statement.', es:'Después del lanzamiento del libro, revisa tu declaración de regalías.', pron:'áfter de buk lonch, chek iór róialti stéitment.'}
      ], function:'hablar de la industria editorial', stage:4,
        transformations:{
          negative:{en:"This manuscript doesn't need an agent yet.", es:'Este manuscrito todavía no necesita un agente.'},
          question:{en:'Does this manuscript need a literary agent?', es:'¿Este manuscrito necesita un agente literario?'},
          yesAnswer:{en:'Yes, definitely.', es:'Sí, definitivamente.'},
          noAnswer:{en:"Not at this stage.", es:'No en esta etapa.'}
        }}
    ],
    words:[
      {en:'publishing industry', es:'industria editorial', pron:'páblishing índastri', emoji:'📚'},
      {en:'manuscript', es:'manuscrito', pron:'mániuscript', emoji:'📝'},
      {en:'literary agent', es:'agente literario', pron:'líterari éiyent', emoji:'🧑‍💼'},
      {en:'book deal', es:'contrato editorial', pron:'buk díil', emoji:'🤝'},
      {en:'editor', es:'editor', pron:'éditor', emoji:'✏️'},
      {en:'print run', es:'tirada de impresión', pron:'print ran', emoji:'🖨️'},
      {en:'ebook format', es:'formato de libro electrónico', pron:'íibuk fórmat', emoji:'📱'},
      {en:'book launch', es:'lanzamiento de libro', pron:'buk lonch', emoji:'🚀'},
      {en:'royalty statement', es:'estado de regalías', pron:'róialti stéitment', emoji:'📄'}
    ],
    story:[
      {en:'This dragon works in the publishing industry — he wrote a manuscript about treasure hunting!', es:'¡Este dragón trabaja en la industria editorial — escribió un manuscrito sobre la caza de tesoros!', pron:'dis drágon uorks in de páblishing índastri — ji róut a mániuscript abáut tréshur jánting!'},
      {en:'His literary agent found him an amazing book deal!', es:'¡Su agente literario le consiguió un contrato editorial increíble!', pron:'jis líterari éiyent fáund jim an améising buk díil!'},
      {en:'The editor worked hard, and the first print run sold out instantly!', es:'¡El editor trabajó duro, y la primera tirada se agotó al instante!', pron:'de éditor uorkt jard, and de ferst print ran sóuld áut ínstantli!'},
      {en:"It's also available in ebook format — the book launch was a huge success!", es:'¡También está disponible en formato electrónico — el lanzamiento fue un éxito enorme!', pron:"its ólso avéilabol in íibuk fórmat — de buk lonch uas a jiúch saxés!"},
      {en:'His royalty statement shows he earned a mountain of gold!', es:'¡Su estado de regalías muestra que ganó una montaña de oro!', pron:'jis róialti stéitment shóus ji ernd a máuntain of góuld!'}
    ],
    jingle:[
      {en:'Publishing industry, manuscript too!', es:'Industria editorial, ¡manuscrito también!', pron:'páblishing índastri, mániuscript tú!'},
      {en:'Literary agent, book deal for you!', es:'Agente literario, ¡contrato para ti!', pron:'líterari éiyent, buk díil for iú!'},
      {en:'Editor, print run so bright!', es:'Editor, ¡tirada tan brillante!', pron:'éditor, print ran sóu bráit!'},
      {en:'Ebook, book launch, royalty right!', es:'Libro electrónico, lanzamiento, ¡regalías correctas!', pron:'íibuk, buk lonch, róialti ráit!'}
    ]
  },
{
    day:161, unit:14, unitTitle:'Unidad 14 · Semanas 33-34', theme:'Seguridad y defensa',
    structures:[
      {id:'S165', pattern:"The security industry relies on + [X]", examples:[
        {en:'The security industry relies on a strong surveillance system.', es:'La industria de seguridad depende de un sistema de vigilancia fuerte.', pron:'de sikiúriti índastri riláis on a strong servéilans sístem.'},
        {en:'Risk management starts with a proper background check.', es:'La gestión de riesgos empieza con una verificación de antecedentes adecuada.', pron:'risk mánechment starts uid a práper bákgráund chek.'},
        {en:'Access control and physical security work together.', es:'El control de acceso y la seguridad física trabajan juntos.', pron:'áccess cantról and fízical sikiúriti uork tugéder.'},
        {en:'A threat assessment requires the right security clearance and emergency protocol.', es:'Una evaluación de amenazas requiere la autorización de seguridad correcta y el protocolo de emergencia.', pron:'a zret asésment ricuáiars de ráit sikiúriti clírans and emérgensi próutocal.'}
      ], function:'hablar de seguridad y defensa', stage:4,
        transformations:{
          negative:{en:"This doesn't rely only on surveillance.", es:'Esto no depende solo de la vigilancia.'},
          question:{en:'Does this rely on a background check?', es:'¿Esto depende de una verificación de antecedentes?'},
          yesAnswer:{en:'Yes, always.', es:'Sí, siempre.'},
          noAnswer:{en:"Not always.", es:'No siempre.'}
        }}
    ],
    words:[
      {en:'security industry', es:'industria de la seguridad', pron:'sekiúriti índastri', emoji:'🛡️'},
      {en:'surveillance system', es:'sistema de vigilancia', pron:'servéilans sístem', emoji:'📹'},
      {en:'risk management', es:'gestión de riesgos', pron:'risk mánechment', emoji:'⚠️'},
      {en:'background check', es:'verificación de antecedentes', pron:'bákgraund chek', emoji:'🔍'},
      {en:'access control', es:'control de acceso', pron:'áxes cantróul', emoji:'🔐'},
      {en:'physical security', es:'seguridad física', pron:'físical sekiúriti', emoji:'🚪'},
      {en:'threat assessment', es:'evaluación de amenazas', pron:'zret asésment', emoji:'📊'},
      {en:'security clearance', es:'autorización de seguridad', pron:'sekiúriti clírens', emoji:'🪪'},
      {en:'emergency protocol', es:'protocolo de emergencia', pron:'imérchensi próutocol', emoji:'🚨'}
    ],
    story:[
      {en:'The security industry installed a surveillance system around the whole castle!', es:'¡La industria de la seguridad instaló un sistema de vigilancia en todo el castillo!', pron:'de sekiúriti índastri ínstold a servéilans sístem aráund de jóul cásol!'},
      {en:'Risk management starts with a background check on every visitor!', es:'¡La gestión de riesgos empieza con una verificación de antecedentes de cada visitante!', pron:'risk mánechment starts uid a bákgraund chek on évri vísitor!'},
      {en:'Access control and physical security keep the treasure safe!', es:'¡El control de acceso y la seguridad física mantienen el tesoro a salvo!', pron:'áxes cantróul and físical sekiúriti kíip de tréshur séif!'},
      {en:'Our threat assessment found no danger — dragons only need security clearance!', es:'¡Nuestra evaluación de amenazas no encontró peligro — los dragones solo necesitan autorización de seguridad!', pron:'áur zret asésment fáund nóu déinyer — drágons óunli níid sekiúriti clírens!'},
      {en:'Follow the emergency protocol if the volcano suddenly wakes up!', es:'¡Seguí el protocolo de emergencia si el volcán se despierta de repente!', pron:'fálou de imérchensi próutocol if de valkéinou sádenli uéiks ap!'}
    ],
    jingle:[
      {en:'Security industry, surveillance too!', es:'Industria de la seguridad, ¡vigilancia también!', pron:'sekiúriti índastri, servéilans tú!'},
      {en:'Risk management, background for you!', es:'Gestión de riesgos, ¡antecedentes para ti!', pron:'risk mánechment, bákgraund for iú!'},
      {en:'Access control, physical bright!', es:'Control de acceso, ¡física brillante!', pron:'áxes cantróul, físical bráit!'},
      {en:'Threat assessment, protocol right!', es:'Evaluación de amenazas, ¡protocolo correcto!', pron:'zret asésment, próutocol ráit!'}
    ]
  },
{
    day:162, unit:14, unitTitle:'Unidad 14 · Semanas 33-34', theme:'Repaso liviano de la semana 33',
    structures:[
      {id:'S166', pattern:"Let's break the ice + [X]", examples:[
        {en:"Let's break the ice — we'll cross that bridge when we come to it.", es:'Rompamos el hielo — cruzaremos ese puente cuando lleguemos a él.', pron:"lets bréik de áis — uíl cros dat brich uén uí cam tu it."},
        {en:'Keep your eye on the ball, or you might turn the tables against yourself.', es:'Mantén el ojo en la pelota, o podrías voltear la situación en tu contra.', pron:'kíip iór ái on de bol, or iú máit tern de téibols aguénst iórself.'},
        {en:"Don't pull the plug — we're not back to square one yet.", es:'No desconectes esto — todavía no estamos de vuelta al punto de partida.', pron:"dont pul de plag — uír nat bak tu scuér uán iét."},
        {en:'Give me the benefit of the doubt — this hits close to home.', es:'Dame el beneficio de la duda — esto me toca muy de cerca.', pron:'guiv mi de bénefit of de dáut — dis jits clóus tu jóum.'}
      ], function:'usar modismos avanzados de negocios en inglés', stage:4,
        transformations:{
          negative:{en:"Let's not break the ice yet.", es:'Todavía no rompamos el hielo.'},
          question:{en:'Should we break the ice now?', es:'¿Deberíamos romper el hielo ahora?'},
          yesAnswer:{en:'Yes, let\'s do it.', es:'Sí, hagámoslo.'},
          noAnswer:{en:"Not yet.", es:'Todavía no.'}
        }}
    ],
    words:[
      {en:'to break the ice', es:'romper el hielo', pron:'tu bréik de áis', emoji:'🧊'},
      {en:'to cross that bridge when we come to it', es:'resolver algo cuando llegue el momento', pron:'tu cros dat brich uén uí cam tu it', emoji:'🌉'},
      {en:'to keep your eye on the ball', es:'mantener el foco', pron:'tu kíip iór ái on de bol', emoji:'⚽'},
      {en:'to turn the tables', es:'dar vuelta la situación', pron:'tu tern de téibols', emoji:'🔄'},
      {en:'to pull the plug', es:'cancelar algo por completo', pron:'tu pul de plag', emoji:'🔌'},
      {en:'to be back to square one', es:'volver a empezar de cero', pron:'tu bi bak tu scuér uán', emoji:'🔁'},
      {en:'to give someone the benefit of the doubt', es:'dar el beneficio de la duda', pron:'tu guiv sámuan de bénefit of de dáut', emoji:'🤷'},
      {en:'to hit close to home', es:'tocar de cerca', pron:'tu jit clóus tu jóum', emoji:'🏠'}
    ],
    story:[
      {en:"Let's break the ice — we'll cross that bridge when we come to it!", es:'Rompamos el hielo — cruzaremos ese puente cuando lleguemos ahí.', pron:"lets bréik de áis — uíl cros dat brich uén uí cam tu it!"},
      {en:'Keep your eye on the ball — this dragon just turned the tables!', es:'¡Mantené el foco — este dragón acaba de dar vuelta la situación!', pron:'kíip iór ái on de bol — dis drágon yast ternd de téibols!'},
      {en:"We had to pull the plug, and go back to square one — but I'll give you the benefit of the doubt, even if this hits close to home.", es:'Tuvimos que cancelar todo, y volver a empezar de cero — pero te voy a dar el beneficio de la duda, aunque esto me toque de cerca.', pron:"uí jad tu pul de plag, and góu bak tu scuér uán — bat áil guiv iú de bénefit of de dáut, íven if dis jits clóus tu jóum."}
    ],
    jingle:[
      {en:'Break the ice, cross that bridge!', es:'Rompé el hielo, ¡cruzá ese puente!', pron:'bréik de áis, cros dat brich!'},
      {en:'Eye on the ball, turn the tables, ridge!', es:'Foco en la pelota, ¡da vuelta la situación!', pron:'ái on de bol, tern de téibols, rich!'},
      {en:'Pull the plug, back to square one!', es:'Cancelá todo, ¡volvé a empezar!', pron:'pul de plag, bak tu scuér uán!'},
      {en:'Benefit of the doubt, close to home, well done!', es:'Beneficio de la duda, cerca de casa, ¡bien hecho!', pron:'bénefit of de dáut, clóus tu jóum, uél dan!'}
    ]
  },
{
    day:163, unit:14, unitTitle:'Unidad 14 · Semanas 35-36', theme:'Planificación urbana',
    structures:[
      {id:'S167', pattern:"Urban planning depends on + [X]", examples:[
        {en:'Urban planning depends on clear zoning laws.', es:'La planificación urbana depende de leyes de zonificación claras.', pron:'érban pláning dipénds on clíar sóuning los.'},
        {en:'Infrastructure development improves public transportation.', es:'El desarrollo de infraestructura mejora el transporte público.', pron:'infraestrákchur divélopment imprúuvs páblic transportéishion.'},
        {en:'The city council decides on land use for urban development.', es:'El concejo municipal decide sobre el uso del suelo para el desarrollo urbano.', pron:'de síti cáunsil disáids on land iús for érban divélopment.'},
        {en:'Traffic management protects public space in every sustainable city.', es:'La gestión del tráfico protege el espacio público en cada ciudad sostenible.', pron:'tráfic mánechment pratécts páblic spéis in évri sastéinabol síti.'}
      ], function:'hablar de planificación urbana', stage:4,
        transformations:{
          negative:{en:"Urban planning doesn't depend only on that.", es:'La planificación urbana no depende solo de eso.'},
          question:{en:'Does urban planning depend on zoning laws?', es:'¿La planificación urbana depende de leyes de zonificación?'},
          yesAnswer:{en:'Yes, heavily.', es:'Sí, mucho.'},
          noAnswer:{en:"Partly, yes.", es:'En parte, sí.'}
        }}
    ],
    words:[
      {en:'urban planning', es:'planificación urbana', pron:'érban pláning', emoji:'🏙️'},
      {en:'zoning laws', es:'leyes de zonificación', pron:'sóuning los', emoji:'📜'},
      {en:'infrastructure development', es:'desarrollo de infraestructura', pron:'ínfrastrakcher divélopment', emoji:'🏗️'},
      {en:'public transportation', es:'transporte público', pron:'páblic transportéishon', emoji:'🚌'},
      {en:'city council', es:'concejo municipal', pron:'síti cáunsol', emoji:'🏛️'},
      {en:'land use', es:'uso del suelo', pron:'land iús', emoji:'🗺️'},
      {en:'urban development', es:'desarrollo urbano', pron:'érban divélopment', emoji:'🏢'},
      {en:'traffic management', es:'gestión del tráfico', pron:'tráfic mánechment', emoji:'🚦'},
      {en:'public space', es:'espacio público', pron:'páblic spéis', emoji:'🌳'},
      {en:'sustainable city', es:'ciudad sostenible', pron:'sastéinabol síti', emoji:'♻️'}
    ],
    story:[
      {en:'Urban planning designed a city where dragons and humans live together!', es:'¡La planificación urbana diseñó una ciudad donde dragones y humanos viven juntos!', pron:'érban pláning disáind a síti uér drágons and jiúmans liv tugéder!'},
      {en:'New zoning laws allow infrastructure development near the volcano district!', es:'¡Las nuevas leyes de zonificación permiten desarrollo de infraestructura cerca del distrito del volcán!', pron:'niú sóuning los alóu ínfrastrakcher divélopment níar de valkéinou dístrict!'},
      {en:'Public transportation now includes flying dragon buses!', es:'¡El transporte público ahora incluye autobuses dragón voladores!', pron:'páblic transportéishon náu inclúuds fláing drágon báses!'},
      {en:'The city council approved a new land use plan for urban development.', es:'El concejo municipal aprobó un nuevo plan de uso del suelo para el desarrollo urbano.', pron:'de síti cáunsol apruvd a niú land iús plan for érban divélopment.'},
      {en:'Traffic management and public space design make this a truly sustainable city!', es:'¡La gestión del tráfico y el diseño de espacios públicos hacen de esta una verdadera ciudad sostenible!', pron:'tráfic mánechment and páblic spéis disáin méik dis a trúli sastéinabol síti!'}
    ],
    jingle:[
      {en:'Urban planning, zoning laws too!', es:'Planificación urbana, ¡zonificación también!', pron:'érban pláning, sóuning los tú!'},
      {en:'Infrastructure, transportation for you!', es:'Infraestructura, ¡transporte para ti!', pron:'ínfrastrakcher, transportéishon for iú!'},
      {en:'City council, land use bright!', es:'Concejo municipal, ¡uso del suelo brillante!', pron:'síti cáunsol, land iús bráit!'},
      {en:'Traffic management, sustainable right!', es:'Gestión del tráfico, ¡sostenible correcto!', pron:'tráfic mánechment, sastéinabol ráit!'}
    ]
  },
{
    day:164, unit:14, unitTitle:'Unidad 14 · Semanas 35-36', theme:'Salud mental y bienestar',
    structures:[
      {id:'S168', pattern:"Our wellness program focuses on + [X]", examples:[
        {en:'Our wellness program focuses on mental health and stress management.', es:'Nuestro programa de bienestar se enfoca en la salud mental y el manejo del estrés.', pron:'áur uélnes prógram fóucasis on méntal jelz and stres mánechment.'},
        {en:'Work-life integration matters more than ever.', es:'La integración entre trabajo y vida importa más que nunca.', pron:'uork-láif integréishion máters mor dan éver.'},
        {en:'Our employee assistance program teaches mindfulness for burnout prevention.', es:'Nuestro programa de asistencia al empleado enseña atención plena para prevenir el agotamiento.', pron:'áur emplóii asístans prógram tíches máindfulnes for bérnáut privénshion.'},
        {en:'Mental health awareness, counseling services, and a self-care routine all help.', es:'La concientización sobre salud mental, los servicios de consejería, y una rutina de autocuidado, todo ayuda.', pron:'méntal jelz auérnes, cáunseling sérvisis, and a self-ker rutíin ol jelp.'}
      ], function:'hablar de salud mental y bienestar', stage:4,
        transformations:{
          negative:{en:"Our program doesn't focus only on that.", es:'Nuestro programa no se enfoca solo en eso.'},
          question:{en:'Does your wellness program focus on stress management?', es:'¿Tu programa de bienestar se enfoca en el manejo del estrés?'},
          yesAnswer:{en:'Yes, mainly.', es:'Sí, principalmente.'},
          noAnswer:{en:"Not primarily.", es:'No principalmente.'}
        }}
    ],
    words:[
      {en:'mental health', es:'salud mental', pron:'méntal jelz', emoji:'🧠'},
      {en:'wellness program', es:'programa de bienestar', pron:'uélnes prógram', emoji:'🌿'},
      {en:'stress management', es:'manejo del estrés', pron:'stres mánechment', emoji:'😌'},
      {en:'work-life integration', es:'integración vida-trabajo', pron:'uork láif integréishon', emoji:'⚖️'},
      {en:'employee assistance program', es:'programa de asistencia al empleado', pron:'emploí asístans prógram', emoji:'🤝'},
      {en:'mindfulness', es:'atención plena', pron:'máindfulnes', emoji:'🧘'},
      {en:'burnout prevention', es:'prevención del agotamiento', pron:'bérnaut privénshon', emoji:'🔥'},
      {en:'mental health awareness', es:'concientización sobre salud mental', pron:'méntal jelz auérnes', emoji:'💚'},
      {en:'counseling services', es:'servicios de consejería', pron:'cáunseling sérvises', emoji:'🗣️'},
      {en:'self-care routine', es:'rutina de autocuidado', pron:'self quér rutíin', emoji:'🛁'}
    ],
    story:[
      {en:'Our dragon company cares about mental health — we have a wellness program!', es:'¡Nuestra empresa dragón se preocupa por la salud mental — tenemos un programa de bienestar!', pron:'áur drágon cámpani quérs abáut méntal jelz — uí jav a uélnes prógram!'},
      {en:'Stress management and work-life integration matter, even for busy dragons!', es:'¡El manejo del estrés y la integración vida-trabajo importan, hasta para dragones ocupados!', pron:'stres mánechment and uork láif integréishon máter, íven for bísi drágons!'},
      {en:'Our employee assistance program teaches mindfulness every Friday!', es:'¡Nuestro programa de asistencia al empleado enseña atención plena todos los viernes!', pron:'áur emploí asístans prógram tíiches máindfulnes évri fráidei!'},
      {en:'Burnout prevention and mental health awareness are top priorities!', es:'¡La prevención del agotamiento y la concientización sobre salud mental son prioridades!', pron:'bérnaut privénshon and méntal jelz auérnes ar tap praióritis!'},
      {en:'Free counseling services help every dragon build a self-care routine!', es:'¡Los servicios de consejería gratuitos ayudan a cada dragón a armar una rutina de autocuidado!', pron:'fríi cáunseling sérvises jelp évri drágon bild a self quér rutíin!'}
    ],
    jingle:[
      {en:'Mental health, wellness program too!', es:'Salud mental, ¡programa de bienestar también!', pron:'méntal jelz, uélnes prógram tú!'},
      {en:'Stress management, all for you!', es:'Manejo del estrés, ¡todo para ti!', pron:'stres mánechment, ol for iú!'},
      {en:'Mindfulness, burnout prevention bright!', es:'Atención plena, ¡prevención brillante!', pron:'máindfulnes, bérnaut privénshon bráit!'},
      {en:'Counseling services, self-care right!', es:'Servicios de consejería, ¡autocuidado correcto!', pron:'cáunseling sérvises, self quér ráit!'}
    ]
  },
{
    day:165, unit:14, unitTitle:'Unidad 14 · Semanas 35-36', theme:'Cultura de trabajo remoto',
    structures:[
      {id:'S169', pattern:"Our remote team relies on + [X]", examples:[
        {en:'Our remote team relies on virtual collaboration every day.', es:'Nuestro equipo remoto depende de la colaboración virtual todos los días.', pron:'áur rimóut tíim riláis on vérchual calaboréishion évri déi.'},
        {en:'Asynchronous work suits any digital nomad well.', es:'El trabajo asincrónico le queda bien a cualquier nómada digital.', pron:'eisínkronas uork suts éni díchital nóumad uél.'},
        {en:'A good home office setup makes remote onboarding easier.', es:'Una buena configuración de oficina en casa hace más fácil la incorporación remota.', pron:'a gud jóum áfis sétap méiks rimóut anbórding íisier.'},
        {en:'Time zone coordination, and a virtual water cooler, boost remote productivity in this hybrid work model.', es:'La coordinación de zonas horarias, y un espacio virtual de charla informal, impulsan la productividad remota en este modelo de trabajo híbrido.', pron:'táim sóun coórdineishion, and a vérchual uóter cúler, bust rimóut pradáctiviti in dis jáibrid uork mádel.'}
      ], function:'hablar de la cultura de trabajo remoto', stage:4,
        transformations:{
          negative:{en:"Our team doesn't rely only on that tool.", es:'Nuestro equipo no depende solo de esa herramienta.'},
          question:{en:'Does your remote team rely on virtual collaboration?', es:'¿Tu equipo remoto depende de la colaboración virtual?'},
          yesAnswer:{en:'Yes, completely.', es:'Sí, por completo.'},
          noAnswer:{en:"Not entirely.", es:'No del todo.'}
        }}
    ],
    words:[
      {en:'remote team', es:'equipo remoto', pron:'rimóut tíim', emoji:'💻'},
      {en:'virtual collaboration', es:'colaboración virtual', pron:'vírchual calaboréishon', emoji:'🤝'},
      {en:'asynchronous work', es:'trabajo asincrónico', pron:'eisínkronos uork', emoji:'⏰'},
      {en:'digital nomad', es:'nómada digital', pron:'díchital nóumad', emoji:'🌍'},
      {en:'home office setup', es:'configuración de oficina en casa', pron:'jóum áfis sétap', emoji:'🏠'},
      {en:'remote onboarding', es:'incorporación remota', pron:'rimóut anbórding', emoji:'📋'},
      {en:'time zone coordination', es:'coordinación de husos horarios', pron:'táim sóun cordinéishon', emoji:'🕐'},
      {en:'virtual water cooler', es:'espacio virtual de charla informal', pron:'vírchual uáter cúuler', emoji:'💬'},
      {en:'remote productivity', es:'productividad remota', pron:'rimóut productíviti', emoji:'📈'},
      {en:'hybrid work model', es:'modelo de trabajo híbrido', pron:'jáibrid uork mádol', emoji:'🔀'}
    ],
    story:[
      {en:'Our remote team spans every kingdom — virtual collaboration is key!', es:'¡Nuestro equipo remoto abarca cada reino — la colaboración virtual es clave!', pron:'áur rimóut tíim spans évri kíngdom — vírchual calaboréishon is kíi!'},
      {en:'Asynchronous work lets this digital nomad dragon fly anywhere and still contribute!', es:'¡El trabajo asincrónico deja que este dragón nómada digital vuele a cualquier lado y siga aportando!', pron:'eisínkronos uork lets dis díchital nóumad drágon flái éniuér and stil cántribiut!'},
      {en:'My home office setup includes a volcano view, and remote onboarding was easy!', es:'¡Mi configuración de oficina en casa tiene vista al volcán, y la incorporación remota fue fácil!', pron:'mái jóum áfis sétap inclúuds a valkéinou viú, and rimóut anbórding uas íisi!'},
      {en:'Time zone coordination is tricky, but we have a virtual water cooler for chatting!', es:'¡La coordinación de husos horarios es complicada, pero tenemos un espacio virtual de charla!', pron:'táim sóun cordinéishon is tríki, bat uí jav a vírchual uáter cúuler for cháting!'},
      {en:'Remote productivity stayed high thanks to our new hybrid work model!', es:'¡La productividad remota se mantuvo alta gracias a nuestro nuevo modelo de trabajo híbrido!', pron:'rimóut productíviti stéid jái zanks tu áur niú jáibrid uork mádol!'}
    ],
    jingle:[
      {en:'Remote team, collaboration too!', es:'Equipo remoto, ¡colaboración también!', pron:'rimóut tíim, calaboréishon tú!'},
      {en:'Asynchronous work, digital nomad for you!', es:'Trabajo asincrónico, ¡nómada digital para ti!', pron:'eisínkronos uork, díchital nóumad for iú!'},
      {en:'Home office, onboarding bright!', es:'Oficina en casa, ¡incorporación brillante!', pron:'jóum áfis, anbórding bráit!'},
      {en:'Time zone, hybrid model, feels right!', es:'Huso horario, modelo híbrido, ¡se siente bien!', pron:'táim sóun, jáibrid mádol, fíils ráit!'}
    ]
  },
{
    day:166, unit:14, unitTitle:'Unidad 14 · Semanas 35-36', theme:'Industria de alimentos y bebidas',
    structures:[
      {id:'S170', pattern:"This restaurant chain focuses on + [X]", examples:[
        {en:'This restaurant chain focuses on menu development and food trends.', es:'Esta cadena de restaurantes se enfoca en el desarrollo del menú y las tendencias alimentarias.', pron:'dis réstorant chéin fóucasis on méniu divélopment and fud trends.'},
        {en:'Culinary innovation keeps the food and beverage industry exciting.', es:'La innovación culinaria mantiene emocionante la industria de alimentos y bebidas.', pron:'cúlineri inovéishion kíips de fud and béverich índastri exsáiting.'},
        {en:'Food distribution and a beverage company work closely together.', es:'La distribución de alimentos y una empresa de bebidas trabajan de cerca juntas.', pron:'fud distribiúshion and a béverich cámpani uork clóusli tugéder.'},
        {en:'Sustainable sourcing matters during every taste testing session.', es:'El abastecimiento sostenible importa durante cada sesión de degustación.', pron:'sastéinabol sórsing máters dúring évri téist tésting séshion.'}
      ], function:'hablar de la industria de alimentos y bebidas', stage:4,
        transformations:{
          negative:{en:"This chain doesn't focus only on that.", es:'Esta cadena no se enfoca solo en eso.'},
          question:{en:'Does this chain focus on food trends?', es:'¿Esta cadena se enfoca en las tendencias alimentarias?'},
          yesAnswer:{en:'Yes, always.', es:'Sí, siempre.'},
          noAnswer:{en:"Not exclusively.", es:'No exclusivamente.'}
        }}
    ],
    words:[
      {en:'food and beverage industry', es:'industria de alimentos y bebidas', pron:'fúud and bévrich índastri', emoji:'🍽️'},
      {en:'menu development', es:'desarrollo de menú', pron:'méniu divélopment', emoji:'📋'},
      {en:'food trends', es:'tendencias alimentarias', pron:'fúud trends', emoji:'📈'},
      {en:'culinary innovation', es:'innovación culinaria', pron:'kiúlineri inovéishon', emoji:'👨‍🍳'},
      {en:'restaurant chain', es:'cadena de restaurantes', pron:'réstront chéin', emoji:'🏪'},
      {en:'food distribution', es:'distribución de alimentos', pron:'fúud distribiúshon', emoji:'🚚'},
      {en:'beverage company', es:'empresa de bebidas', pron:'bévrich cámpani', emoji:'🥤'},
      {en:'sustainable sourcing', es:'abastecimiento sostenible', pron:'sastéinabol sórsing', emoji:'🌱'},
      {en:'taste testing', es:'prueba de sabor', pron:'téist tésting', emoji:'👅'}
    ],
    story:[
      {en:'This dragon works in the food and beverage industry, leading menu development!', es:'¡Este dragón trabaja en la industria de alimentos y bebidas, liderando el desarrollo de menú!', pron:'dis drágon uorks in de fúud and bévrich índastri, líiding méniu divélopment!'},
      {en:'He follows food trends, and loves culinary innovation — fire-roasted everything!', es:'¡Sigue las tendencias alimentarias, y ama la innovación culinaria — todo asado al fuego!', pron:'ji fálous fúud trends, and lavs kiúlineri inovéishon — fáiar róusted évrizin!'},
      {en:'His restaurant chain uses smart food distribution across every kingdom.', es:'Su cadena de restaurantes usa distribución de alimentos inteligente en cada reino.', pron:'jis réstront chéin iúses smart fúud distribiúshon acrós évri kíngdom.'},
      {en:'He also owns a beverage company focused on sustainable sourcing!', es:'¡También es dueño de una empresa de bebidas enfocada en el abastecimiento sostenible!', pron:'ji ólso óuns a bévrich cámpani fóucust on sastéinabol sórsing!'},
      {en:'Taste testing new potions is his favorite part of the job!', es:'¡Probar sabores de pociones nuevas es su parte favorita del trabajo!', pron:'téist tésting niú póushons is jis féivorit part of de yab!'}
    ],
    jingle:[
      {en:'Food and beverage, menu too!', es:'Alimentos y bebidas, ¡menú también!', pron:'fúud and bévrich, méniu tú!'},
      {en:'Food trends, innovation for you!', es:'Tendencias, ¡innovación para ti!', pron:'fúud trends, inovéishon for iú!'},
      {en:'Restaurant chain, distribution bright!', es:'Cadena de restaurantes, ¡distribución brillante!', pron:'réstront chéin, distribiúshon bráit!'},
      {en:'Sustainable sourcing, taste testing right!', es:'Abastecimiento sostenible, ¡prueba de sabor correcta!', pron:'sastéinabol sórsing, téist tésting ráit!'}
    ]
  },
{
    day:167, unit:14, unitTitle:'Unidad 14 · Semanas 35-36', theme:'Gestión de residuos y servicios públicos',
    structures:[
      {id:'S171', pattern:"Our waste management includes + [X]", examples:[
        {en:'Our waste management includes a strong recycling program.', es:'Nuestra gestión de residuos incluye un fuerte programa de reciclaje.', pron:'áur uéist mánechment inclúuds a strong risáikling prógram.'},
        {en:'The utility company oversees water treatment and the energy grid.', es:'La empresa de servicios públicos supervisa el tratamiento de agua y la red eléctrica.', pron:'de iutíliti cámpani óversíis uóter tríitment and de énerchi grid.'},
        {en:'Waste reduction depends on public utilities working well.', es:'La reducción de residuos depende de que los servicios públicos funcionen bien.', pron:'uéist ridákshion dipénds on páblic iutílitis uórking uél.'},
        {en:'Sanitation services and infrastructure maintenance follow strict environmental regulation.', es:'Los servicios de saneamiento y el mantenimiento de infraestructura siguen una regulación ambiental estricta.', pron:'sanitéishion sérvisis and infraestrákchur méintenans fálou strict environméntal reguleishion.'}
      ], function:'hablar de gestión de residuos y servicios públicos', stage:4,
        transformations:{
          negative:{en:"Our waste management doesn't include that yet.", es:'Nuestra gestión de residuos todavía no incluye eso.'},
          question:{en:'Does your waste management include recycling?', es:'¿Tu gestión de residuos incluye reciclaje?'},
          yesAnswer:{en:'Yes, it does.', es:'Sí, lo incluye.'},
          noAnswer:{en:"Not yet.", es:'Todavía no.'}
        }}
    ],
    words:[
      {en:'waste management', es:'gestión de residuos', pron:'uéist mánechment', emoji:'🗑️'},
      {en:'recycling program', es:'programa de reciclaje', pron:'risáikling prógram', emoji:'♻️'},
      {en:'utility company', es:'empresa de servicios públicos', pron:'iutíliti cámpani', emoji:'💡'},
      {en:'water treatment', es:'tratamiento de agua', pron:'uáter tríitment', emoji:'💧'},
      {en:'energy grid', es:'red eléctrica', pron:'énerchi grid', emoji:'⚡'},
      {en:'waste reduction', es:'reducción de residuos', pron:'uéist ridákshon', emoji:'📉'},
      {en:'public utilities', es:'servicios públicos', pron:'páblic iutílitis', emoji:'🏢'},
      {en:'sanitation services', es:'servicios de saneamiento', pron:'sanitéishon sérvises', emoji:'🧹'},
      {en:'infrastructure maintenance', es:'mantenimiento de infraestructura', pron:'ínfrastrakcher méintenans', emoji:'🔧'},
      {en:'environmental regulation', es:'regulación ambiental', pron:'invairónmental regiuléishon', emoji:'📜'}
    ],
    story:[
      {en:'Waste management improved with our new recycling program!', es:'¡La gestión de residuos mejoró con nuestro nuevo programa de reciclaje!', pron:'uéist mánechment imprúuvd uid áur niú risáikling prógram!'},
      {en:'Our utility company handles water treatment for the entire volcano valley!', es:'¡Nuestra empresa de servicios públicos maneja el tratamiento de agua de todo el valle del volcán!', pron:'áur iutíliti cámpani jándols uáter tríitment for de entáier valkéinou váli!'},
      {en:'The energy grid runs on dragon fire — clean, and helps with waste reduction!', es:'¡La red eléctrica funciona con fuego de dragón — limpia, y ayuda a reducir residuos!', pron:'de énerchi grid rans on drágon fáiar — clíin, and jelps uid uéist ridákshon!'},
      {en:'Public utilities and sanitation services keep the kingdom sparkling clean!', es:'¡Los servicios públicos y de saneamiento mantienen el reino reluciente!', pron:'páblic iutílitis and sanitéishon sérvises kíip de kíngdom spárkling clíin!'},
      {en:'Infrastructure maintenance follows strict environmental regulation!', es:'¡El mantenimiento de infraestructura sigue una regulación ambiental estricta!', pron:'ínfrastrakcher méintenans fálous strict invairónmental regiuléishon!'}
    ],
    jingle:[
      {en:'Waste management, recycling too!', es:'Gestión de residuos, ¡reciclaje también!', pron:'uéist mánechment, risáikling tú!'},
      {en:'Utility company, water for you!', es:'Empresa de servicios, ¡agua para ti!', pron:'iutíliti cámpani, uáter for iú!'},
      {en:'Energy grid, waste reduction bright!', es:'Red eléctrica, ¡reducción brillante!', pron:'énerchi grid, uéist ridákshon bráit!'},
      {en:'Public utilities, regulation right!', es:'Servicios públicos, ¡regulación correcta!', pron:'páblic iutílitis, regiuléishon ráit!'}
    ]
  },
{
    day:168, unit:14, unitTitle:'Unidad 14 · Semanas 35-36', theme:'Repaso y cierre de la Unidad 14',
    structures:[
      {id:'S172', pattern:"Unit fourteen is done, only + [NUMBER] days left", examples:[
        {en:'Unit fourteen is done — almost there now!', es:'La Unidad Catorce está lista — ¡ya casi llegamos!', pron:'iúnit fórtíin is dan — ólmoust der náu!'},
        {en:'Only twelve days left in the whole course.', es:'Solo faltan doce días en todo el curso.', pron:'óunli tuélv déis left in de jóul cors.'},
        {en:'The final unit ahead is the last one.', es:'La unidad final que viene es la última.', pron:'de fáinal iúnit ajéd is de last uán.'},
        {en:'So close now — see you in unit fifteen, the last unit!', es:'Tan cerca ahora — ¡nos vemos en la Unidad Quince, la última unidad!', pron:'sóu clóus náu — síi iú in iúnit fiftíin, de last iúnit!'}
      ], function:'cerrar la unidad reconociendo lo cerca que está el final', stage:4,
        transformations:{
          negative:{en:"We are not done with the course yet.", es:'Todavía no terminamos el curso.'},
          question:{en:'Are we almost done with the course?', es:'¿Ya casi terminamos el curso?'},
          yesAnswer:{en:'Yes, almost there.', es:'Sí, ya casi.'},
          noAnswer:{en:"A little more to go.", es:'Falta un poco más.'}
        }}
    ],
    words:[
      {en:'unit fourteen', es:'unidad catorce', pron:'iúnit fórtiin', emoji:'⓮'},
      {en:'almost there', es:'casi llegamos', pron:'ólmoust dér', emoji:'🏃'},
      {en:'only twelve days left', es:'solo faltan doce días', pron:'óunli tuélv déis left', emoji:'📅'},
      {en:'final unit ahead', es:'la unidad final se acerca', pron:'fáinal iúnit ajéd', emoji:'🏁'},
      {en:'so close', es:'tan cerca', pron:'sóu clóus', emoji:'✨'},
      {en:'see you in unit fifteen', es:'nos vemos en la unidad quince', pron:'síi iú in iúnit fiftíin', emoji:'➡️'},
      {en:'last unit', es:'última unidad', pron:'last iúnit', emoji:'🎯'}
    ],
    story:[
      {en:"Welcome to unit fourteen's finale — almost there, legendary hero!", es:'¡Bienvenido al final de la unidad catorce — casi llegamos, héroe legendario!', pron:"uélcam tu iúnit fórtiins fináli — ólmoust dér, léyendari jírou!"},
      {en:'Only twelve days left, and the final unit is ahead!', es:'¡Solo faltan doce días, y la unidad final se acerca!', pron:'óunli tuélv déis left, and de fáinal iúnit is ajéd!'},
      {en:'So close — you can almost taste victory, dragon trader!', es:'¡Tan cerca — casi puedes saborear la victoria, comerciante de dragones!', pron:'sóu clóus — iú can ólmoust téist víctori, drágon tréider!'},
      {en:'See you in unit fifteen, the very last unit!', es:'¡Nos vemos en la unidad quince, la última!', pron:'síi iú in iúnit fiftíin, de véri last iúnit!'}
    ],
    jingle:[
      {en:'Unit fourteen, almost there!', es:'Unidad catorce, ¡casi llegamos!', pron:'iúnit fórtiin, ólmoust dér!'},
      {en:"Twelve days left, we don't despair!", es:'Faltan doce días, ¡no desesperamos!', pron:"tuélv déis left, uí dont dispér!"},
      {en:'Final unit ahead, so close now!', es:'La unidad final se acerca, ¡tan cerca ahora!', pron:'fáinal iúnit ajéd, sóu clóus náu!'},
      {en:'See you in unit fifteen, take a bow!', es:'Nos vemos en la unidad quince, ¡hacé una reverencia!', pron:'síi iú in iúnit fiftíin, téik a báu!'}
    ]
  }
];
