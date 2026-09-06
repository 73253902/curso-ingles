// Unidad 4 del curso — Días 37 a 48
// Este archivo se puede editar o reemplazar solo, sin tocar el resto del curso.
const curriculumUnidad4 = [
{
    day:37, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'Pedir en el restaurante / Programar una reunión',
    structures:[
      {id:'S031', pattern:"I'll have the + [X]", examples:[
        {en:"I'll have the pasta.", es:'Voy a pedir la pasta.', pron:'áil jav de pasta.'},
        {en:"I'll have the soup.", es:'Voy a pedir la sopa.', pron:'áil jav de súup.'},
        {en:"I'll have the chicken.", es:'Voy a pedir el pollo.', pron:'áil jav de chíken.'},
        {en:"I'll have the dessert.", es:'Voy a pedir el postre.', pron:'áil jav de disért.'}
      ], function:'pedir comida en un restaurante', stage:2,
        transformations:{
          negative:{en:"I won't have the pasta.", es:'No voy a pedir la pasta.'},
          question:{en:'Will you have the pasta?', es:'¿Vas a pedir la pasta?'},
          yesAnswer:{en:'Yes, I will.', es:'Sí.'},
          noAnswer:{en:"No, I won't.", es:'No.'}
        }}
    ],
    words:[
      {en:'to order', es:'pedir', pron:'tu órder', emoji:'📝'},
      {en:'I would like', es:'quisiera', pron:'ái uud láik', emoji:'🙋'},
      {en:'appetizer', es:'entrada', pron:'ápetaiser', emoji:'🥟'},
      {en:'main course', es:'plato principal', pron:'méin cors', emoji:'🍛'},
      {en:'dessert', es:'postre', pron:'disért', emoji:'🍰'},
      {en:'spicy', es:'picante', pron:'spáisi', emoji:'🌶️'},
      {en:'sweet', es:'dulce', pron:'suíit', emoji:'🍯'},
      {en:'salty', es:'salado', pron:'sólti', emoji:'🧂'},
      {en:'tasty', es:'sabroso', pron:'téisti', emoji:'😋'},
      {en:'to schedule a meeting', es:'programar una reunión', pron:'tu squéyul a míiting', emoji:'📅'},
      {en:'agenda', es:'agenda', pron:'ayénda', emoji:'📋'},
      {en:'attendees', es:'asistentes', pron:'atendíis', emoji:'👥'},
      {en:'conference room', es:'sala de reuniones', pron:'cánferens rúum', emoji:'🏢'},
      {en:'to book', es:'reservar', pron:'tu buk', emoji:'📌'},
      {en:'time slot', es:'horario disponible', pron:'táim slat', emoji:'🕐'}
    ],
    story:[
      {en:'I would like to order the roasted volcano appetizer, please!', es:'¡Quisiera pedir la entrada de volcán asado, por favor!', pron:'ái uud láik tu órder de róusted valkéinou ápetaiser, plíis!'},
      {en:'For the main course, bring me a whole dragon-shaped cake, and for dessert, a cloud of sugar!', es:'¡De plato principal, traeme una torta con forma de dragón entera, y de postre, una nube de azúcar!', pron:'for de méin cors, bring mi a jóul drágon shéipt quéik, and for disért, a cláud of shúgar!'},
      {en:"Is it spicy, sweet, or salty? All three at once — it's magically tasty!", es:'¿Es picante, dulce, o salado? ¡Los tres a la vez — es mágicamente sabroso!', pron:'is it spáisi, suíit, or sólti? ol zríi at uáns — its máyicali téisti!'},
      {en:"Let's schedule a meeting with all the kingdom's attendees in the crystal conference room.", es:'Agendemos una reunión con todos los asistentes del reino en la sala de reuniones de cristal.', pron:'lets squéyul a míiting uid ol de kíngdoms atendíis in de crístal cánferens rúum.'},
      {en:'Please book the only time slot when the two moons align — check the agenda!', es:'Por favor reservá el único horario en que las dos lunas se alinean — ¡revisá la agenda!', pron:'plíis buk de óunli táim slat uén de tú múuns aláin — chek de ayénda!'}
    ],
    jingle:[
      {en:'I would like to order, please!', es:'Quisiera pedir, ¡por favor!', pron:'ái uud láik tu órder, plíis!'},
      {en:'Appetizer, main course, dessert with ease!', es:'Entrada, plato principal, ¡postre con facilidad!', pron:'ápetaiser, méin cors, disért uid íis!'},
      {en:'Spicy, sweet, salty, tasty too!', es:'Picante, dulce, salado, ¡sabroso también!', pron:'spáisi, suíit, sólti, téisti tú!'},
      {en:'Schedule a meeting, book the room for you!', es:'Programa una reunión, ¡reserva la sala para ti!', pron:'squéyul a míiting, buk de rúum for iú!'}
    ]
  },
{
    day:38, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'Sabores y preferencias / Confirmar asistencia',
    structures:[
      {id:'S032', pattern:"I like + [X]", examples:[
        {en:'I like spicy food.', es:'Me gusta la comida picante.', pron:'ái láik spáisi fúud.'},
        {en:'I like sweet desserts.', es:'Me gustan los postres dulces.', pron:'ái láik suíit disérts.'},
        {en:"I don't like salty food.", es:'No me gusta la comida salada.', pron:"ái dont láik sólti fúud."},
        {en:'I love this restaurant.', es:'Me encanta este restaurante.', pron:'ái lav dis réstorant.'}
      ], function:'decir tus gustos y preferencias', stage:2,
        transformations:{
          negative:{en:"I don't like spicy food.", es:'No me gusta la comida picante.'},
          question:{en:'Do you like spicy food?', es:'¿Te gusta la comida picante?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí, me gusta.'},
          noAnswer:{en:"No, I don't.", es:'No, no me gusta.'}
        }}
    ],
    words:[
      {en:'I like', es:'me gusta', pron:'ái láik', emoji:'👍'},
      {en:"I don't like", es:'no me gusta', pron:'ái dont láik', emoji:'👎'},
      {en:'I love', es:'me encanta', pron:'ái lav', emoji:'😍'},
      {en:'favorite', es:'favorito', pron:'féivorit', emoji:'⭐'},
      {en:'to prefer', es:'preferir', pron:'tu prifér', emoji:'🤔'},
      {en:'taste', es:'sabor', pron:'téist', emoji:'👅'},
      {en:'to try (food)', es:'probar', pron:'tu trái', emoji:'🍴'},
      {en:'I am allergic to', es:'soy alérgico a', pron:'ái am alérchic tu', emoji:'⚠️'},
      {en:'to confirm attendance', es:'confirmar asistencia', pron:'tu confírm aténdans', emoji:'✅'},
      {en:"I'll be there", es:'ahí estaré', pron:'áil bi dér', emoji:'🙋'},
      {en:"I can't attend", es:'no puedo asistir', pron:'ái cant aténd', emoji:'❌'},
      {en:'schedule conflict', es:'conflicto de horario', pron:'squéyul cánflict', emoji:'⚠️'},
      {en:'invite', es:'invitación', pron:'inváit', emoji:'✉️'},
      {en:'to accept', es:'aceptar', pron:'tu axépt', emoji:'✅'},
      {en:'to decline', es:'rechazar', pron:'tu dicláin', emoji:'❌'}
    ],
    story:[
      {en:'I love dragon eggs, but I do not like flying broccoli!', es:'¡Me encantan los huevos de dragón, pero no me gusta el brócoli volador!', pron:'ái lav drágon egs, bat ái du nat láik fláing brácoli!'},
      {en:"What's your favorite taste? I prefer to try everything, even lava soup!", es:'¿Cuál es tu sabor favorito? ¡Prefiero probar de todo, hasta la sopa de lava!', pron:'uáts iór féivorit téist? ái prifér tu trái évrizin, íven láva súup!'},
      {en:'I am allergic to moonlight, so please confirm attendance before the eclipse!', es:'¡Soy alérgico a la luz de la luna, así que confirmá tu asistencia antes del eclipse!', pron:'ái am alérchic tu múunlait, sóu plíis confírm aténdans bifór de iclíps!'},
      {en:"I'll be there, unless there's a schedule conflict with a thousand-year nap!", es:'¡Ahí estaré, a menos que haya un conflicto de horario con una siesta de mil años!', pron:'áil bi dér, anlés ders a squéyul cánflict uid a záusand íar nap!'},
      {en:'I cannot attend if the invite arrives by falling star — please accept or decline before it burns up!', es:'No puedo asistir si la invitación llega en una estrella fugaz — ¡aceptá o rechazá antes de que se queme!', pron:'ái cánat aténd if de inváit aráivs bái fóling star — plíis axépt or dicláin bifór it bérns ap!'}
    ],
    jingle:[
      {en:'I like it, I love it, my favorite too!', es:'Me gusta, me encanta, ¡mi favorito también!', pron:'ái láik it, ái lav it, mái féivorit tú!'},
      {en:'I prefer to try, taste something new!', es:'Prefiero probar, ¡algo nuevo!', pron:'ái prifér tu trái, téist sámzing niú!'},
      {en:"I'll be there, confirm attendance soon!", es:'Ahí estaré, ¡confirmo asistencia pronto!', pron:'áil bi dér, confírm aténdans súun!'},
      {en:'Accept or decline, under the moon!', es:'Aceptar o rechazar, ¡bajo la luna!', pron:'axépt or dicláin, ánder de múun!'}
    ]
  },
{
    day:39, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'En el restaurante / Agenda y temas a tratar',
    structures:[
      {id:'S033', pattern:"Let's discuss + [X]", examples:[
        {en:"Let's discuss the agenda.", es:'Discutamos la agenda.', pron:"lets discás de áyenda."},
        {en:"Let's discuss the next steps.", es:'Discutamos los próximos pasos.', pron:"lets discás de next steps."},
        {en:"Let's discuss the budget.", es:'Discutamos el presupuesto.', pron:"lets discás de báyet."},
        {en:"Let's discuss this topic later.", es:'Discutamos este tema más tarde.', pron:"lets discás dis tápic léiter."}
      ], function:'invitar a hablar de un tema', stage:2}
    ],
    words:[
      {en:'split the bill', es:'dividir la cuenta', pron:'split de bil', emoji:'🧾'},
      {en:'tip', es:'propina', pron:'tip', emoji:'💵'},
      {en:'reservation for', es:'reserva para', pron:'reservéishon for', emoji:'📅'},
      {en:'take out', es:'para llevar', pron:'téik áut', emoji:'🥡'},
      {en:'dine in', es:'para comer aquí', pron:'dáin in', emoji:'🍽️'},
      {en:'topic', es:'tema', pron:'tápic', emoji:'📌'},
      {en:'agenda item', es:'punto de la agenda', pron:'ayénda áitem', emoji:'📋'},
      {en:'to discuss', es:'discutir', pron:'tu discás', emoji:'🗣️'},
      {en:'action item', es:'tarea a realizar', pron:'ákshon áitem', emoji:'✅'},
      {en:'next steps', es:'próximos pasos', pron:'next steps', emoji:'➡️'},
      {en:'follow up', es:'seguimiento', pron:'fálou ap', emoji:'🔁'},
      {en:'meeting minutes', es:'acta de la reunión', pron:'míiting mínits', emoji:'📝'},
      {en:'to summarize', es:'resumir', pron:'tu sámaráis', emoji:'📄'},
      {en:'wrap up', es:'concluir', pron:'rap ap', emoji:'🏁'}
    ],
    story:[
      {en:'Let\'s split the bill — a giant leaves the biggest tip in history, a whole mountain of gold!', es:'Dividamos la cuenta — ¡un gigante deja la propina más grande de la historia, una montaña entera de oro!', pron:'lets split de bil — a yáiant líivs de bíguest tip in jístori, a jóul máuntain of góuld!'},
      {en:'Do you want a reservation for two dragons, take out, or dine in on a cloud?', es:'¿Quieres una reserva para dos dragones, para llevar, o comer en una nube?', pron:'du iú uánt a reservéishon for tú drágons, téik áut, or dáin in on a cláud?'},
      {en:"Today's agenda item: how to discuss with a talking volcano.", es:'El punto de la agenda de hoy: cómo discutir con un volcán parlante.', pron:'tudéis ayénda áitem: jáu tu discás uid a tóking valkéinou.'},
      {en:'The action item and next steps: follow up with the wizard council, and take meeting minutes on a floating scroll.', es:'La tarea a realizar y los próximos pasos: hacer seguimiento con el consejo de magos, y tomar minuta en un pergamino flotante.', pron:'de ákshon áitem and next steps: fálou ap uid de uísard cáunsol, and téik míiting mínits on a flóuting scról.'},
      {en:"Let's summarize and wrap up before the castle disappears!", es:'¡Resumamos y cerremos antes de que el castillo desaparezca!', pron:'lets sámaráis and rap ap bifór de cásol disapírs!'}
    ],
    jingle:[
      {en:'Split the bill, leave a tip!', es:'Dividí la cuenta, ¡dejá propina!', pron:'split de bil, líiv a tip!'},
      {en:'Reservation, take out, dine in, sip!', es:'Reserva, para llevar, comer aquí, ¡un sorbo!', pron:'reservéishon, téik áut, dáin in, sip!'},
      {en:'Topic, agenda item, discuss it well!', es:'Tema, punto de la agenda, ¡discutilo bien!', pron:'tápic, ayénda áitem, discás it uél!'},
      {en:'Follow up, minutes, wrap up, farewell!', es:'Seguimiento, minuta, cerrar, ¡adiós!', pron:'fálou ap, mínits, rap ap, féruel!'}
    ]
  },
{
    day:40, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'Cocinar en casa / Preparar una presentación',
    structures:[
      {id:'S112', pattern:"I need to prepare the + [X]", examples:[
        {en:'I need to prepare the recipe — check the ingredients first.', es:'Necesito preparar la receta — revisá los ingredientes primero.', pron:'ái níid tu pripér de résipi — chek de inguridients ferst.'},
        {en:'I need to boil, to fry, or to bake this — the oven and the stove are ready.', es:'Necesito hervir, freír, u hornear esto — el horno y la cocina están listos.', pron:'ái níid tu bóil, tu frái, or tu béik dis — de áven and de stóuv ar rédi.'},
        {en:'I need to cut the vegetables before I prepare the slides for the presentation.', es:'Necesito cortar las verduras antes de preparar las diapositivas para la presentación.', pron:'ái níid tu cat de véchtabols bifór ái pripér de sláids for de presentéishion.'},
        {en:"I need the handout ready before we rehearse.", es:'Necesito el folleto listo antes de ensayar.', pron:"ái níid de jándaut rédi bifór uí rijérs."}
      ], function:'hablar de preparar comida o una presentación', stage:2,
        transformations:{
          negative:{en:"I don't need to prepare that yet.", es:'Todavía no necesito preparar eso.'},
          question:{en:'Do you need to prepare the slides?', es:'¿Necesitás preparar las diapositivas?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, not yet.", es:'No, todavía no.'}
        }}
    ],
    words:[
      {en:'to cook', es:'cocinar', pron:'tu cuk', emoji:'👨‍🍳'},
      {en:'recipe', es:'receta', pron:'résipi', emoji:'📖'},
      {en:'ingredient', es:'ingrediente', pron:'ingrídient', emoji:'🥕'},
      {en:'to boil', es:'hervir', pron:'tu bóil', emoji:'♨️'},
      {en:'to fry', es:'freír', pron:'tu frái', emoji:'🍳'},
      {en:'to bake', es:'hornear', pron:'tu béik', emoji:'🍞'},
      {en:'to cut', es:'cortar', pron:'tu cat', emoji:'🔪'},
      {en:'oven', es:'horno', pron:'áven', emoji:'🔥'},
      {en:'stove', es:'estufa', pron:'stóuv', emoji:'🔥'},
      {en:'slide', es:'diapositiva', pron:'sláid', emoji:'🖥️'},
      {en:'presentation', es:'presentación', pron:'presentéishon', emoji:'📊'},
      {en:'to prepare', es:'preparar', pron:'tu pripér', emoji:'📋'},
      {en:'handout', es:'material impreso', pron:'jándaut', emoji:'📄'},
      {en:'to rehearse', es:'ensayar', pron:'tu rijérs', emoji:'🎭'}
    ],
    story:[
      {en:'The dragon loves to cook — its favorite recipe needs lava, stars, and one secret ingredient!', es:'Al dragón le encanta cocinar — ¡su receta favorita necesita lava, estrellas, y un ingrediente secreto!', pron:'de drágon lavs tu cuk — its féivorit résipi níids láva, stars, and uán sícret ingrídient!'},
      {en:'First, boil an ocean; then fry a thunderbolt; then bake it in a volcano oven for a thousand years!', es:'Primero, herví un océano; después, freí un rayo; después, horneálo en un horno de volcán por mil años.', pron:'ferst, bóil an óushon; den frái a zánderbóult; den béik it in a valkéinou áven for a záusand íars!'},
      {en:'Cut the giant mushroom on the magic stove, carefully!', es:'¡Cortá el hongo gigante en la estufa mágica, con cuidado!', pron:'cat de yáiant máshrum on de máyic stóuv, kérfuli!'},
      {en:'Now prepare the slides for your presentation — one slide made of gold, one handout made of clouds.', es:'Ahora preparé las diapositivas de tu presentación — una diapositiva hecha de oro, un material impreso hecho de nubes.', pron:'náu pripér de sláids for iór presentéishon — uán sláid méid of góuld, uán jándaut méid of cláuds.'},
      {en:'Rehearse it in front of a thousand dragons before the real show!', es:'¡Ensayalo frente a mil dragones antes del show real!', pron:'rijérs it in frant of a záusand drágons bifór de ríil shóu!'}
    ],
    jingle:[
      {en:'To cook, a recipe, ingredient too!', es:'Cocinar, una receta, ¡ingrediente también!', pron:'tu cuk, a résipi, ingrídient tú!'},
      {en:'Boil and fry, bake it through!', es:'Hervir y freír, ¡hornealo bien!', pron:'bóil and frái, béik it zrú!'},
      {en:'Cut on the stove, slide by slide!', es:'Cortá en la estufa, ¡diapositiva por diapositiva!', pron:'cat on de stóuv, sláid bái sláid!'},
      {en:'Prepare, rehearse, presentation with pride!', es:'Preparar, ensayar, ¡presentación con orgullo!', pron:'pripér, rijérs, presentéishon uid práid!'}
    ]
  },
{
    day:41, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'Bebidas / Videollamada y reunión virtual',
    structures:[
      {id:'S034', pattern:"I can + [VERB] + you", examples:[
        {en:'I can hear you.', es:'Te escucho.', pron:'ái can jíar iú.'},
        {en:'I can see you.', es:'Te veo.', pron:'ái can síi iú.'},
        {en:'I can share my screen.', es:'Puedo compartir mi pantalla.', pron:'ái can shér mái scríin.'},
        {en:'I can mute myself.', es:'Me puedo silenciar.', pron:'ái can miúut máiself.'}
      ], function:'confirmar que estás en la videollamada', stage:2,
        transformations:{
          negative:{en:"I can't hear you.", es:'No te escucho.'},
          question:{en:'Can you hear me?', es:'¿Me escuchas?'},
          yesAnswer:{en:'Yes, I can.', es:'Sí, te escucho.'},
          noAnswer:{en:"No, I can't.", es:'No, no te escucho.'}
        }}
    ],
    words:[
      {en:'juice', es:'jugo', pron:'yúus', emoji:'🧃'},
      {en:'soda', es:'gaseosa', pron:'sóuda', emoji:'🥤'},
      {en:'tea', es:'té', pron:'tíi', emoji:'🍵'},
      {en:'beer', es:'cerveza', pron:'bíar', emoji:'🍺'},
      {en:'wine', es:'vino', pron:'uáin', emoji:'🍷'},
      {en:'video call', es:'videollamada', pron:'vídio col', emoji:'📹'},
      {en:'link', es:'enlace', pron:'link', emoji:'🔗'},
      {en:'camera on', es:'cámara encendida', pron:'cámera on', emoji:'📷'},
      {en:'to mute', es:'silenciar', pron:'tu miút', emoji:'🔇'},
      {en:'screen share', es:'compartir pantalla', pron:'scríin shér', emoji:'🖥️'},
      {en:'can you hear me', es:'me escuchas', pron:'can iú jíar mi', emoji:'🔊'},
      {en:'connection', es:'conexión', pron:'conécshon', emoji:'📶'},
      {en:'to sign in', es:'iniciar sesión', pron:'tu sáin in', emoji:'🔑'},
      {en:'to sign off', es:'cerrar sesión', pron:'tu sáin of', emoji:'🚪'}
    ],
    story:[
      {en:'The wizard drinks moon juice, dragon soda, star tea, giant beer, and enchanted wine, all at once!', es:'¡El mago bebe jugo de luna, gaseosa de dragón, té de estrellas, cerveza de gigante, y vino encantado, todo a la vez!', pron:'de uísard drinks múun yúus, drágon sóuda, star tíi, yáiant bíar, and enchánted uáin, ol at uáns!'},
      {en:"Let's start the video call — click the magic link!", es:'¡Empecemos la videollamada — hacé clic en el enlace mágico!', pron:'lets start de vídio col — clik de máyic link!'},
      {en:'Camera on! But please mute your dragon roar.', es:'¡Cámara encendida! Pero por favor silenciá tu rugido de dragón.', pron:'cámera on! bat plíis miút iór drágon rór.'},
      {en:'Can you hear me through the storm? Let\'s screen share the treasure map.', es:'¿Me escuchas a través de la tormenta? Compartamos pantalla con el mapa del tesoro.', pron:'can iú jíar mi zrú de storm? lets scríin shér de tréshur map.'},
      {en:'The connection is weak on the moon — sign in again, and do not forget to sign off before the eclipse!', es:'La conexión es débil en la luna — ¡iniciá sesión de nuevo, y no te olvides de cerrar sesión antes del eclipse!', pron:'de conécshon is uík on de múun — sáin in aguén, and du nat forguét tu sáin of bifór de iclíps!'}
    ],
    jingle:[
      {en:'Juice and soda, tea and beer!', es:'Jugo y gaseosa, ¡té y cerveza!', pron:'yúus and sóuda, tíi and bíar!'},
      {en:'Wine and video call, loud and clear!', es:'Vino y videollamada, ¡fuerte y claro!', pron:'uáin and vídio col, láud and clíar!'},
      {en:'Camera on, mute, screen share fast!', es:'Cámara encendida, silenciar, ¡compartir pantalla rápido!', pron:'cámera on, miút, scríin shér fast!'},
      {en:'Sign in, sign off, connection to last!', es:'Iniciar sesión, cerrar sesión, ¡conexión que dure!', pron:'sáin in, sáin of, conécshon tu last!'}
    ]
  },
{
    day:42, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'Comidas del día / Reunión de seguimiento',
    structures:[
      {id:'S035', pattern:"We are + [STATUS]", examples:[
        {en:'We are on track.', es:'Vamos bien encaminados.', pron:'uí ar on trak.'},
        {en:'We are behind schedule.', es:'Vamos atrasados.', pron:'uí ar bijáind squédiul.'},
        {en:'We are almost done.', es:'Ya casi terminamos.', pron:'uí ar ólmoust dan.'},
        {en:'We are ready for the next step.', es:'Estamos listos para el próximo paso.', pron:'uí ar rédi for de next step.'}
      ], function:'decir cómo va el progreso', stage:2,
        transformations:{
          negative:{en:'We are not on track.', es:'No vamos bien encaminados.'},
          question:{en:'Are you on track?', es:'¿Van bien encaminados?'},
          yesAnswer:{en:'Yes, we are.', es:'Sí.'},
          noAnswer:{en:"No, we aren't.", es:'No.'}
        }}
    ],
    words:[
      {en:'eggs', es:'huevos', pron:'egs', emoji:'🥚'},
      {en:'toast', es:'tostada', pron:'tóust', emoji:'🍞'},
      {en:'cereal', es:'cereal', pron:'síarial', emoji:'🥣'},
      {en:'sandwich', es:'sándwich', pron:'sánduich', emoji:'🥪'},
      {en:'snack', es:'merienda', pron:'snak', emoji:'🍿'},
      {en:'to skip a meal', es:'saltarse una comida', pron:'tu skip a míil', emoji:'⏭️'},
      {en:'follow-up meeting', es:'reunión de seguimiento', pron:'fálou ap míiting', emoji:'🔁'},
      {en:'status update', es:'actualización de estado', pron:'státos apdéit', emoji:'📊'},
      {en:'progress', es:'progreso', pron:'prágres', emoji:'📈'},
      {en:'pending', es:'pendiente', pron:'péndin', emoji:'⏳'},
      {en:'on track', es:'bien encaminado', pron:'on trak', emoji:'✅'},
      {en:'behind schedule', es:'atrasado del cronograma', pron:'bijáind squéyul', emoji:'⚠️'},
      {en:'milestone', es:'hito', pron:'máilstoun', emoji:'🚩'}
    ],
    story:[
      {en:'For breakfast, the giant eats a thousand eggs, a mountain of toast, and an ocean of cereal!', es:'¡De desayuno, el gigante come mil huevos, una montaña de tostadas, y un océano de cereal!', pron:'for brékfast, de yáiant íits a záusand egs, a máuntain of tóust, and an óushon of síarial!'},
      {en:'A dragon sandwich, and a snack of stardust — never skip a meal, or you turn invisible!', es:'¡Un sándwich de dragón, y una merienda de polvo de estrellas — nunca te saltees una comida, o te volvés invisible!', pron:'a drágon sánduich, and a snak of stárdast — néver skip a míil, or iú tern invísibol!'},
      {en:"Let's have our follow-up meeting for a status update on the flying castle project.", es:'Tengamos nuestra reunión de seguimiento para una actualización de estado del proyecto del castillo volador.', pron:'lets jav áur fálou ap míiting for a státos apdéit on de fláing cásol práchect.'},
      {en:'Progress is huge, but one task is still pending!', es:'¡El progreso es enorme, pero una tarea todavía está pendiente!', pron:'prágres is jiúch, bat uán task is stil péndin!'},
      {en:'Are we on track, or behind schedule on the treasure milestone?', es:'¿Vamos bien encaminados, o atrasados en el hito del tesoro?', pron:'ar uí on trak, or bijáind squéyul on de tréshur máilstoun?'}
    ],
    jingle:[
      {en:'Eggs and toast, cereal too!', es:'Huevos y tostadas, ¡cereal también!', pron:'egs and tóust, síarial tú!'},
      {en:"Sandwich, snack, don't skip, it's true!", es:'Sándwich, merienda, ¡no te lo saltees, es verdad!', pron:'sánduich, snak, dont skip, its trú!'},
      {en:"Follow-up meeting, status update fast!", es:'Reunión de seguimiento, ¡actualización de estado rápido!', pron:'fálou ap míiting, státos apdéit fast!'},
      {en:'On track, pending, milestone at last!', es:'Bien encaminado, pendiente, ¡hito por fin!', pron:'on trak, péndin, máilstoun at last!'}
    ]
  },
{
    day:43, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'Repaso liviano de la semana 7',
    structures:[
      {id:'S113', pattern:"Can you repeat that? + [X]", examples:[
        {en:'Can you repeat that? What do you mean?', es:'¿Puedes repetir eso? ¿Qué quieres decir?', pron:'can iú ripíit dat? uát du iú míin?'},
        {en:'I see, got it — no worries, same here.', es:'Ya veo, entendido — no hay problema, lo mismo digo.', pron:'ái síi, gat it — nóu uóris, séim jíar.'},
        {en:'Either way, in that case, let\'s proceed just in case.', es:'De cualquier manera, en ese caso, sigamos adelante por las dudas.', pron:"íder uéi, in dat kéis, lets prosíid yast in kéis."},
        {en:"Let's follow up as needed — anyway, let's continue.", es:'Hagamos seguimiento según haga falta — de todos modos, sigamos.', pron:"lets fálou ap as níided — éniuei, lets cantíniu."}
      ], function:'reforzar conectores de clarificación', stage:2,
        transformations:{
          negative:{en:"I don't understand what you mean.", es:'No entiendo qué quieres decir.'},
          question:{en:'What do you mean?', es:'¿Qué quieres decir?'},
          yesAnswer:{en:'I understand now.', es:'Ahora entiendo.'},
          noAnswer:{en:"Still not clear.", es:'Todavía no está claro.'}
        }}
    ],
    words:[
      {en:'can you repeat that', es:'puedes repetir eso', pron:'can iú ripít dat', emoji:'🔁'},
      {en:'what do you mean', es:'qué quieres decir', pron:'uát du iú míin', emoji:'❓'},
      {en:'I see', es:'ya veo', pron:'ái síi', emoji:'👀'},
      {en:'got it', es:'entendido', pron:'gát it', emoji:'✅'},
      {en:'no worries', es:'no hay problema', pron:'nóu uéris', emoji:'🙂'},
      {en:'same here', es:'lo mismo digo', pron:'séim jíar', emoji:'🤝'},
      {en:'either way', es:'de cualquier forma', pron:'íder uéi', emoji:'🔀'},
      {en:'in that case', es:'en ese caso', pron:'in dat kéis', emoji:'💭'},
      {en:'just in case', es:'por si acaso', pron:'yast in kéis', emoji:'🛡️'},
      {en:'as needed', es:'según se necesite', pron:'as níided', emoji:'📌'},
      {en:'anyway', es:'de todos modos', pron:'éniuei', emoji:'➡️'}
    ],
    story:[
      {en:"Can you repeat that, giant? What do you mean by 'a mountain of gold'?", es:'¿Puedes repetir eso, gigante? ¿Qué quieres decir con "una montaña de oro"?', pron:'can iú ripít dat, yáiant? uát du iú míin bái "a máuntain of góuld"?'},
      {en:'I see! Got it — no worries, dragon, same here!', es:'¡Ya veo! Entendido — no hay problema, dragón, ¡lo mismo digo!', pron:'ái síi! gát it — nóu uéris, drágon, séim jíar!'},
      {en:"Either way, in that case, just in case, do as needed — anyway, let's fly!", es:'De cualquier forma, en ese caso, por si acaso, hacé lo que se necesite — de todos modos, ¡volemos!', pron:'íder uéi, in dat kéis, yast in kéis, du as níided — éniuei, lets flái!'}
    ],
    jingle:[
      {en:'Can you repeat that? What do you mean?', es:'¿Puedes repetir eso? ¿Qué quieres decir?', pron:'can iú ripít dat? uát du iú míin?'},
      {en:'I see, got it, on the scene!', es:'Ya veo, entendido, ¡en la escena!', pron:'ái síi, gát it, on de síin!'},
      {en:'No worries, same here, either way!', es:'No hay problema, lo mismo digo, ¡de cualquier forma!', pron:'nóu uéris, séim jíar, íder uéi!'},
      {en:'Just in case, as needed, anyway!', es:'Por si acaso, según se necesite, ¡de todos modos!', pron:'yast in kéis, as níided, éniuei!'}
    ]
  },
{
    day:44, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'Alergias e intolerancias / Notas y minutas',
    structures:[
      {id:'S036', pattern:"I am allergic to + [X]", examples:[
        {en:'I am allergic to nuts.', es:'Soy alérgico a los frutos secos.', pron:'ái am alérchic tu nats.'},
        {en:'I am allergic to shellfish.', es:'Soy alérgico a los mariscos.', pron:'ái am alérchic tu shélfish.'},
        {en:'I am not allergic to gluten.', es:'No soy alérgico al gluten.', pron:'ái am nat alérchic tu glúten.'},
        {en:'I am lactose intolerant.', es:'Soy intolerante a la lactosa.', pron:'ái am láctous intálerant.'}
      ], function:'avisar sobre alergias', stage:2,
        transformations:{
          negative:{en:'I am not allergic to nuts.', es:'No soy alérgico a los frutos secos.'},
          question:{en:'Are you allergic to nuts?', es:'¿Sos alérgico a los frutos secos?'},
          yesAnswer:{en:'Yes, I am.', es:'Sí.'},
          noAnswer:{en:"No, I'm not.", es:'No.'}
        }}
    ],
    words:[
      {en:'allergy', es:'alergia', pron:'álerchi', emoji:'⚠️'},
      {en:'gluten-free', es:'sin gluten', pron:'glúten fríi', emoji:'🚫🌾'},
      {en:'lactose intolerant', es:'intolerante a la lactosa', pron:'láctous intálerant', emoji:'🥛🚫'},
      {en:'nuts', es:'frutos secos', pron:'nats', emoji:'🥜'},
      {en:'shellfish', es:'mariscos', pron:'shélfish', emoji:'🦐'},
      {en:'to avoid', es:'evitar', pron:'tu avóid', emoji:'🚫'},
      {en:'safe to eat', es:'seguro para comer', pron:'séif tu íit', emoji:'✅'},
      {en:'to take notes', es:'tomar notas', pron:'tu téik nóuts', emoji:'📝'},
      {en:'minutes of the meeting', es:'minuta de la reunión', pron:'mínits of de míiting', emoji:'📄'},
      {en:'decision', es:'decisión', pron:'disíshon', emoji:'⚖️'},
      {en:'responsible person', es:'persona responsable', pron:'rispánsibol pérson', emoji:'🙋'},
      {en:'attachment', es:'archivo adjunto', pron:'atáchment', emoji:'📎'}
    ],
    story:[
      {en:'The wizard has an allergy to gluten spells, so his potions are always gluten-free!', es:'¡El mago tiene alergia a los hechizos con gluten, así que sus pociones siempre son sin gluten!', pron:'de uísard jas an álerchi tu glúten spels, sóu jis póushons ar ólueis glúten fríi!'},
      {en:'He is lactose intolerant too, and avoids magic nuts and enchanted shellfish!', es:'¡También es intolerante a la lactosa, y evita frutos secos mágicos y mariscos encantados!', pron:'ji is láctous intálerant tú, and avóids máyic nats and enchánted shélfish!'},
      {en:'Is this potion safe to eat? Take notes for the minutes of the meeting!', es:'¿Esta poción es segura para comer? ¡Tomá notas para la minuta de la reunión!', pron:'is dis póushon séif tu íit? téik nóuts for de mínits of de míiting!'},
      {en:'The final decision is made — the responsible person will send the attachment by dragon mail.', es:'La decisión final está tomada — la persona responsable va a enviar el archivo adjunto por correo de dragón.', pron:'de fáinal disíshon is méid — de rispánsibol pérson uíl send de atáchment bái drágon méil.'}
    ],
    jingle:[
      {en:"Allergy, gluten-free, that's the key!", es:'Alergia, sin gluten, ¡esa es la clave!', pron:'álerchi, glúten fríi, dats de kíi!'},
      {en:'Lactose, nuts, shellfish, let it be!', es:'Lactosa, frutos secos, mariscos, ¡que así sea!', pron:'láctous, nats, shélfish, let it bi!'},
      {en:'Safe to eat, take notes with care!', es:'Seguro para comer, tomá notas con cuidado.', pron:'séif tu íit, téik nóuts uid quér!'},
      {en:"Decision, attachment, we're aware!", es:'Decisión, archivo adjunto, ¡estamos al tanto!', pron:'disíshon, atáchment, uír auér!'}
    ]
  },
{
    day:45, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'Postres y dulces / Cerrar reunión y próximos pasos',
    structures:[
      {id:'S114', pattern:"Let's plan for the + [TIME]", examples:[
        {en:'Would you like some cake, a cookie, or ice cream? I have a sweet tooth.', es:'¿Quieres torta, una galleta, o helado? Soy goloso.', pron:'uud iú láik sam kéik, a cúki, or áis críim? ái jav a suíit túuz.'},
        {en:"In conclusion, thank you all for coming — before we finish, any questions?", es:'En conclusión, gracias a todos por venir — antes de terminar, ¿alguna pregunta?', pron:"in canclúshion, zenk iú ol for cáming — bifór uí fínish, éni cuéstions?"},
        {en:"Let's plan for the same time next week.", es:'Planeemos para la misma hora la próxima semana.', pron:"lets plan for de séim táim next uíik."},
        {en:"Here's our action plan for chocolate and candy orders too.", es:'Acá está nuestro plan de acción para los pedidos de chocolate y caramelos también.', pron:"jírs áur ákshion plan for chácolet and cándi órders tu."}
      ], function:'cerrar una reunión y planear el próximo encuentro', stage:2,
        transformations:{
          negative:{en:"We're not meeting next week.", es:'No nos reunimos la próxima semana.'},
          question:{en:'Are we meeting at the same time?', es:'¿Nos reunimos a la misma hora?'},
          yesAnswer:{en:'Yes, same time.', es:'Sí, a la misma hora.'},
          noAnswer:{en:"No, a different time.", es:'No, a otra hora.'}
        }}
    ],
    words:[
      {en:'cake', es:'torta', pron:'quéik', emoji:'🍰'},
      {en:'cookie', es:'galleta', pron:'cúki', emoji:'🍪'},
      {en:'ice cream', es:'helado', pron:'áis críim', emoji:'🍦'},
      {en:'chocolate', es:'chocolate', pron:'chóclet', emoji:'🍫'},
      {en:'candy', es:'dulce', pron:'kándi', emoji:'🍬'},
      {en:'sweet tooth', es:'goloso', pron:'suíit túuz', emoji:'😋'},
      {en:'in conclusion', es:'en conclusión', pron:'in canclúshon', emoji:'🏁'},
      {en:'thank you all', es:'gracias a todos', pron:'zenk iú ol', emoji:'🙏'},
      {en:'before we finish', es:'antes de terminar', pron:'bifór uí fínish', emoji:'⏳'},
      {en:'any questions', es:'alguna pregunta', pron:'éni cuéstions', emoji:'❓'},
      {en:'same time next week', es:'misma hora la próxima semana', pron:'séim táim next uíik', emoji:'📅'},
      {en:'action plan', es:'plan de acción', pron:'ákshon plan', emoji:'📋'}
    ],
    story:[
      {en:'The giant baked a cake as tall as a castle, with a cookie for every star, and ice cream made of clouds!', es:'¡El gigante horneó una torta tan alta como un castillo, con una galleta por cada estrella, y helado hecho de nubes!', pron:'de yáiant béikt a quéik as tol as a cásol, uid a cúki for évri star, and áis críim méid of cláuds!'},
      {en:'Chocolate volcanoes and candy dragons — what a sweet tooth this kingdom has!', es:'Volcanes de chocolate y dragones de caramelo — ¡qué golosos son en este reino!', pron:'chóclet valkéinous and kándi drágons — uát a suíit túuz dis kíngdom jas!'},
      {en:'In conclusion, thank you all, brave heroes, before we finish this legendary feast!', es:'En conclusión, gracias a todos, valientes héroes, ¡antes de terminar este banquete legendario!', pron:'in canclúshon, zenk iú ol, bréiv jírous, bifór uí fínish dis léyendari fíist!'},
      {en:'Any questions? Same time next week, and here is our action plan!', es:'¿Alguna pregunta? Misma hora la próxima semana, ¡y acá está nuestro plan de acción!', pron:'éni cuéstions? séim táim next uíik, and jíar is áur ákshon plan!'}
    ],
    jingle:[
      {en:'Cake and cookie, ice cream too!', es:'Torta y galleta, ¡helado también!', pron:'quéik and cúki, áis críim tú!'},
      {en:"Chocolate, candy, sweet tooth, it's true!", es:'Chocolate, dulce, goloso, ¡es verdad!', pron:'chóclet, kándi, suíit túuz, its trú!'},
      {en:"In conclusion, thank you all, we're done!", es:'En conclusión, gracias a todos, ¡terminamos!', pron:'in canclúshon, zenk iú ol, uír dan!'},
      {en:'Any questions? Next week, same time, hon!', es:'¿Alguna pregunta? Próxima semana, misma hora, ¡amigo!', pron:'éni cuéstions? next uíik, séim táim, jan!'}
    ]
  },
{
    day:46, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'Ir de compras / Reunión con proveedores',
    structures:[
      {id:'S037', pattern:"I need to buy + [X]", examples:[
        {en:'I need to buy groceries.', es:'Necesito comprar víveres.', pron:'ái níid tu bái gróuseris.'},
        {en:'I need to buy office supplies.', es:'Necesito comprar insumos de oficina.', pron:'ái níid tu bái áfis sapláis.'},
        {en:'I need to buy fresh vegetables.', es:'Necesito comprar verduras frescas.', pron:'ái níid tu bái fresh véchtabols.'},
        {en:'I need to buy a new supplier.', es:'Necesito conseguir un nuevo proveedor.', pron:'ái níid tu bái a niú sapláier.'}
      ], function:'decir qué necesitas comprar', stage:2,
        transformations:{
          negative:{en:"I don't need to buy groceries.", es:'No necesito comprar víveres.'},
          question:{en:'Do you need to buy groceries?', es:'¿Necesitás comprar víveres?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'supermarket', es:'supermercado', pron:'súpermarket', emoji:'🛒'},
      {en:'shopping list', es:'lista de compras', pron:'sháping list', emoji:'📝'},
      {en:'aisle', es:'pasillo', pron:'áil', emoji:'🏬'},
      {en:'basket', es:'canasta', pron:'básket', emoji:'🧺'},
      {en:'cashier', es:'cajero', pron:'cashír', emoji:'🧑‍💼'},
      {en:'checkout', es:'caja', pron:'chékaut', emoji:'🛒'},
      {en:'fresh', es:'fresco', pron:'fresh', emoji:'🥬'},
      {en:'frozen', es:'congelado', pron:'fróusen', emoji:'🧊'},
      {en:'supplier meeting', es:'reunión con proveedor', pron:'sapláier míiting', emoji:'🤝'},
      {en:'sample', es:'muestra', pron:'sámpol', emoji:'📦'},
      {en:'catalog', es:'catálogo', pron:'cátalog', emoji:'📖'},
      {en:'terms and conditions', es:'términos y condiciones', pron:'terms and condíshons', emoji:'📃'},
      {en:'partnership', es:'alianza', pron:'pártnership', emoji:'🤝'}
    ],
    story:[
      {en:'The giant supermarket has a shopping list a mile long, with a hundred aisles of magic food!', es:'¡El supermercado gigante tiene una lista de compras de una milla de largo, con cien pasillos de comida mágica!', pron:'de yáiant súpermarket jas a sháping list a máil long, uid a jándred áils of máyic fúud!'},
      {en:'My basket floats, the cashier is a friendly robot, and the checkout counts stars instead of coins!', es:'Mi canasta flota, el cajero es un robot amigable, y la caja cuenta estrellas en vez de monedas.', pron:'mái básket flóuts, de cashír is a fréndli róubot, and de chékaut cáunts stars instéd of cóins!'},
      {en:'Is the dragon fruit fresh, or is it frozen in time?', es:'¿La fruta de dragón está fresca, o está congelada en el tiempo?', pron:'is de drágon frúut fresh, or is it fróusen in táim?'},
      {en:'Let\'s have a supplier meeting — bring samples, the catalog of a thousand potions, and the terms and conditions!', es:'Tengamos una reunión con el proveedor — ¡traé muestras, el catálogo de mil pociones, y los términos y condiciones!', pron:'lets jav a sapláier míiting — bring sámpols, de cátalog of a záusand póushons, and de terms and condíshons!'},
      {en:'This partnership will last a thousand years!', es:'¡Esta alianza va a durar mil años!', pron:'dis pártnership uíl last a záusand íars!'}
    ],
    jingle:[
      {en:'Supermarket, shopping list, aisle so wide!', es:'Supermercado, lista de compras, ¡pasillo tan ancho!', pron:'súpermarket, sháping list, áil sóu uáid!'},
      {en:'Basket, cashier, checkout with pride!', es:'Canasta, cajero, ¡caja con orgullo!', pron:'básket, cashír, chékaut uid práid!'},
      {en:"Fresh and frozen, supplier meeting's near!", es:'Fresco y congelado, ¡la reunión con proveedor está cerca!', pron:'fresh and fróusen, sapláier míitings níar!'},
      {en:'Sample, catalog, partnership sincere!', es:'Muestra, catálogo, ¡alianza sincera!', pron:'sámpol, cátalog, pártnership sinsíar!'}
    ]
  },
{
    day:47, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'Cantidades de comida / Presupuesto y recursos',
    structures:[
      {id:'S038', pattern:"We have enough + [X]", examples:[
        {en:'We have enough budget.', es:'Tenemos suficiente presupuesto.', pron:'uí jav ináf báyet.'},
        {en:'We have enough time.', es:'Tenemos suficiente tiempo.', pron:'uí jav ináf táim.'},
        {en:'We have enough resources.', es:'Tenemos suficientes recursos.', pron:'uí jav ináf risórses.'},
        {en:'We have enough staff.', es:'Tenemos suficiente personal.', pron:'uí jav ináf staf.'}
      ], function:'decir si tienes suficiente de algo', stage:2,
        transformations:{
          negative:{en:"We don't have enough budget.", es:'No tenemos suficiente presupuesto.'},
          question:{en:'Do you have enough budget?', es:'¿Tienen suficiente presupuesto?'},
          yesAnswer:{en:'Yes, we do.', es:'Sí.'},
          noAnswer:{en:"No, we don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'a little', es:'un poco', pron:'a lítol', emoji:'🤏'},
      {en:'a lot', es:'mucho', pron:'a lat', emoji:'📈'},
      {en:'enough', es:'suficiente', pron:'ináf', emoji:'✅'},
      {en:'too much', es:'demasiado', pron:'tu mach', emoji:'⚠️'},
      {en:'some', es:'algo', pron:'sam', emoji:'➕'},
      {en:'none', es:'nada', pron:'nan', emoji:'0️⃣'},
      {en:'extra', es:'extra', pron:'éxtra', emoji:'➕'},
      {en:'resources', es:'recursos', pron:'rísorses', emoji:'🧰'},
      {en:'budget approval', es:'aprobación de presupuesto', pron:'báchet apruvol', emoji:'✅'},
      {en:'to allocate', es:'asignar', pron:'tu álokeit', emoji:'📊'},
      {en:'to cut costs', es:'reducir costos', pron:'tu cat costs', emoji:'✂️'},
      {en:'investment', es:'inversión', pron:'invéstment', emoji:'📈'}
    ],
    story:[
      {en:'The dragon wants a little water, but a lot of gold — is that enough, or too much?', es:'El dragón quiere un poco de agua, pero mucho oro — ¿es suficiente, o demasiado?', pron:'de drágon uánts a lítol uáter, bat a lat of góuld — is dat ináf, or tu mach?'},
      {en:'Some treasure here, none over there, and extra dragon eggs for everyone!', es:'¡Algo de tesoro acá, nada allá, y huevos de dragón extra para todos!', pron:'sam tréshur jíar, nan óuver dér, and éxtra drágon egs for évriuán!'},
      {en:'Our resources are unlimited, but we still need budget approval from the council of wizards!', es:'¡Nuestros recursos son ilimitados, pero igual necesitamos aprobación de presupuesto del consejo de magos!', pron:'áur rísorses ar anlímited, bat uí stil níid báchet apruvol fram de cáunsol of uísards!'},
      {en:'Let\'s allocate a mountain of gold, cut costs on invisible cloaks, and make the biggest investment in dragon history!', es:'Asignemos una montaña de oro, reduzcamos costos en capas invisibles, ¡y hagamos la inversión más grande en la historia de los dragones!', pron:'lets álokeit a máuntain of góuld, cat costs on invísibol clóuks, and méik de bíguest invéstment in drágon jístori!'}
    ],
    jingle:[
      {en:'A little, a lot, enough for me!', es:'Un poco, mucho, ¡suficiente para mí!', pron:'a lítol, a lat, ináf for mi!'},
      {en:'Too much, some, none, we shall see!', es:'Demasiado, algo, nada, ¡ya veremos!', pron:'tu mach, sam, nan, uí shal síi!'},
      {en:'Extra resources, budget approval fast!', es:'Recursos extra, ¡aprobación de presupuesto rápido!', pron:'éxtra rísorses, báchet apruvol fast!'},
      {en:'Allocate, cut costs, investment to last!', es:'Asignar, reducir costos, ¡inversión que dure!', pron:'álokeit, cat costs, invéstment tu last!'}
    ]
  },
{
    day:48, unit:4, unitTitle:'Unidad 4 · Semanas 7-8', theme:'Repaso y cierre de la Unidad 4',
    structures:[
      {id:'S115', pattern:"I'm on track to + [VERB]", examples:[
        {en:'Unit four is done — one third done already!', es:'La Unidad Cuatro está lista — ¡ya un tercio hecho!', pron:'iúnit fóar is dan — uán zerd dan olrédi!'},
        {en:'Keep learning — great effort so far.', es:'Seguí aprendiendo — gran esfuerzo hasta ahora.', pron:'kíip lérning — gréit éfort sóu far.'},
        {en:"I'm on track to finish this final review.", es:'Voy bien encaminado para terminar este repaso final.', pron:"áim on trak tu fínish dis fáinal riviú."},
        {en:'See you in unit five, next unit!', es:'¡Nos vemos en la Unidad Cinco, la próxima unidad!', pron:'síi iú in iúnit fáiv, next iúnit!'}
      ], function:'cerrar la unidad reconociendo el avance', stage:2,
        transformations:{
          negative:{en:"I'm not on track yet.", es:'Todavía no voy bien encaminado.'},
          question:{en:'Are you on track to finish?', es:'¿Vas bien encaminado para terminar?'},
          yesAnswer:{en:'Yes, on track.', es:'Sí, bien encaminado.'},
          noAnswer:{en:"Not quite yet.", es:'Todavía no.'}
        }}
    ],
    words:[
      {en:'unit four', es:'unidad cuatro', pron:'iúnit fóar', emoji:'4️⃣'},
      {en:'one third done', es:'un tercio hecho', pron:'uán zerd dan', emoji:'📊'},
      {en:'keep learning', es:'seguí aprendiendo', pron:'kíip lérning', emoji:'📚'},
      {en:'great effort', es:'gran esfuerzo', pron:'gréit éfort', emoji:'💪'},
      {en:"you're on track", es:'vas bien encaminado', pron:'iór on trak', emoji:'✅'},
      {en:'final review', es:'repaso final', pron:'fáinal riviú', emoji:'🔁'},
      {en:'see you in unit five', es:'nos vemos en la unidad cinco', pron:'síi iú in iúnit fáiv', emoji:'➡️'},
      {en:'next unit', es:'próxima unidad', pron:'next iúnit', emoji:'➡️'}
    ],
    story:[
      {en:"Welcome to unit four's review — one third of this legendary journey is done!", es:'Bienvenido al repaso de la unidad cuatro — ¡un tercio de este viaje legendario está hecho!', pron:'uélcam tu iúnit fóars riviú — uán zerd of dis léyendari yérni is dan!'},
      {en:'Keep learning, hero, with great effort — you are always on track!', es:'¡Seguí aprendiendo, héroe, con gran esfuerzo — siempre vas bien encaminado!', pron:'kíip lérning, jírou, uid gréit éfort — iú ar ólueis on trak!'},
      {en:'This is your final review of the kitchen, the meetings, and a thousand magic feasts.', es:'Este es tu repaso final de la cocina, las reuniones, y mil banquetes mágicos.', pron:'dis is iór fáinal riviú of de quítchen, de míitings, and a záusand máyic fíists.'},
      {en:'See you in unit five, where even greater treasures await!', es:'¡Nos vemos en la unidad cinco, donde te esperan tesoros aún más grandes!', pron:'síi iú in iúnit fáiv, uér íven gréiter tréshurs auéit!'}
    ],
    jingle:[
      {en:'Unit four, one third done today!', es:'Unidad cuatro, ¡un tercio hecho hoy!', pron:'iúnit fóar, uán zerd dan tudéi!'},
      {en:'Keep learning, great effort, hooray!', es:'Seguí aprendiendo, gran esfuerzo, ¡hurra!', pron:'kíip lérning, gréit éfort, juréi!'},
      {en:"You're on track, final review, my friend!", es:'Vas bien encaminado, repaso final, ¡mi amigo!', pron:'iór on trak, fáinal riviú, mái frend!'},
      {en:'See you in unit five, till we meet again!', es:'Nos vemos en la unidad cinco, ¡hasta que nos volvamos a encontrar!', pron:'síi iú in iúnit fáiv, til uí míit aguén!'}
    ]
  }
];
