// Unidad 1 del curso — Días 1 a 12
// Este archivo se puede editar o reemplazar solo, sin tocar el resto del curso.
const curriculumUnidad1 = [
{
    day:1, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'Saludos y presentarte / Saludar clientes',
    structures:[
      {id:'S001', pattern:"I need + [X]", examples:[
        {en:'I need help.', es:'Necesito ayuda.', pron:'ái níid jelp.'},
        {en:'I need water.', es:'Necesito agua.', pron:'ái níid uáter.'},
        {en:'I need coffee.', es:'Necesito café.', pron:'ái níid cófi.'},
        {en:'I need money.', es:'Necesito dinero.', pron:'ái níid máni.'}
      ], function:'pedir algo que necesitás', stage:1,
        transformations:{
          negative:{en:"I don't need help.", es:'No necesito ayuda.'},
          question:{en:'Do you need help?', es:'¿Necesitás ayuda?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí, la necesito.'},
          noAnswer:{en:"No, I don't.", es:'No, no la necesito.'},
          future:{en:'I will need help.', es:'Voy a necesitar ayuda.'}
        }}
    ],
    auxiliaryTeaching:[
      {
        title:'El contraste',
        intro:'Fijate en este contraste: cuando la frase tiene "am" (I am...), para decir "no" solo agregás "not". Pero cuando la frase tiene una acción (necesitar, trabajar, vender...), hace falta un ayudante: "don\'t". Mirá la diferencia:',
        examples:[
          {en:'I am happy.', es:'Estoy feliz.', pron:'ái am jápi.'},
          {en:'I am not happy.', es:'No estoy feliz.', pron:'ái am nat jápi.'},
          {en:'I need help.', es:'Necesito ayuda.', pron:'ái níid jelp.'},
          {en:"I don't need help.", es:'No necesito ayuda.', pron:'ái dont níid jelp.'}
        ]
      },
      {
        title:'Negativa con I / you / we / they',
        intro:'Practiquemos el ayudante "don\'t" con distintos protagonistas — se usa igual con I, you, we, they:',
        examples:[
          {en:"I don't need help.", es:'No necesito ayuda.', pron:'ái dont níid jelp.'},
          {en:"You don't need help.", es:'Vos no necesitás ayuda.', pron:'iú dont níid jelp.'},
          {en:"We don't need help.", es:'Nosotros no necesitamos ayuda.', pron:'uí dont níid jelp.'},
          {en:"They don't need help.", es:'Ellos no necesitan ayuda.', pron:'déi dont níid jelp.'}
        ]
      },
      {
        title:'Negativa con he / she / it',
        intro:'Ahora un cambio importante: cuando el protagonista es he, she, o it, el ayudante "don\'t" se convierte en "doesn\'t":',
        examples:[
          {en:"He doesn't need help.", es:'Él no necesita ayuda.', pron:'ji dásnt níid jelp.'},
          {en:"She doesn't need help.", es:'Ella no necesita ayuda.', pron:'shi dásnt níid jelp.'},
          {en:"It doesn't need help.", es:'Eso no necesita ayuda.', pron:'it dásnt níid jelp.'},
          {en:"He doesn't need water.", es:'Él no necesita agua.', pron:'ji dásnt níid uáter.'}
        ]
      },
      {
        title:'La pregunta: Do / Does',
        intro:'El mismo ayudante sirve para preguntar — solo que va al principio de la frase, sin "not". Con I/you/we/they usás "Do", y con he/she/it usás "Does":',
        examples:[
          {en:'Do you need help?', es:'¿Necesitás ayuda?', pron:'du iú níid jelp?'},
          {en:'Do they need help?', es:'¿Ellos necesitan ayuda?', pron:'du déi níid jelp?'},
          {en:'Does he need help?', es:'¿Él necesita ayuda?', pron:'das ji níid jelp?'},
          {en:'Does she need help?', es:'¿Ella necesita ayuda?', pron:'das shi níid jelp?'}
        ]
      }
    ],
    songJingle:'cancion-dia1-vocabulario.mp3',
    songStory:'cancion-dia1-historia.mp3',
    songJingleLyrics:[
      {en:"", es:"¡Aprende inglés! ¡Fácil y genial! El vocabulario básico para hablar.", pron:""},
      {en:"Hello", es:"es hola", pron:"jelóu"},
      {en:"Good morning", es:"buenos días", pron:"gud mórnin"},
      {en:"Good afternoon", es:"es buenas tardes en el día", pron:"gud afternún"},
      {en:"Good night", es:"buenas noches... ¡vamos a cantar!", pron:"gud náit"},
      {en:"", es:"Aprender inglés es fácil, ¡te va a encantar!", pron:""},
      {en:"Please", es:"por favor", pron:"plíis"},
      {en:"Thank you", es:"es gracias", pron:"zenk iú"},
      {en:"Yes", es:"es un sí", pron:"iés"},
      {en:"No", es:"se destaca", pron:"nóu"},
      {en:"Sorry", es:"es perdón cuando algo pasa", pron:"sórri"},
      {en:"Water", es:"y si tienes sed, en la casa", pron:"uáter"},
      {en:"Hello", es:"es hola", pron:"jelóu"},
      {en:"Good morning", es:"buenos días", pron:"gud mórnin"},
      {en:"Good afternoon", es:"es buenas tardes en el día", pron:"gud afternún"},
      {en:"Good night", es:"buenas noches... ¡vamos a cantar!", pron:"gud náit"},
      {en:"", es:"Aprender inglés es fácil, ¡te va a encantar!", pron:""},
      {en:"Coffee", es:"es café", pron:"cófi"},
      {en:"Bathroom", es:"es baño", pron:"báazrum"},
      {en:"Help", es:"es ayuda cuando hay un engaño", pron:"jelp"},
      {en:"Meeting", es:"reunión", pron:"míiting"},
      {en:"Email", es:"correo", pron:"íimeil"},
      {en:"Today", es:"es hoy", pron:"tudéi"},
      {en:"Tomorrow", es:"es mañana", pron:"tumórou"},
      {en:"Now", es:"es ahora", pron:"náu"},
      {en:"Later", es:"más tarde", pron:"léiter"},
      {en:"Good", es:"es bueno, ¡que el ritmo no pare!", pron:"gud"},
      {en:"Bad", es:"es malo", pron:"baad"},
      {en:"How much", es:"cuánto cuesta", pron:"jáu mach"},
      {en:"Goodbye", es:"adiós...", pron:"gudbái"},
      {en:"See you", es:"nos vemos en la fiesta!", pron:"síi iú"},
      {en:"Hello, Goodbye", es:"¡el inglés ya está aquí! ¡Apréndelo cantando y sé feliz!", pron:"jelóu, gudbái"}
    ],
    songStoryLyrics:[
      {en:"Hello! Good morning, dragon!", es:"¡Hola! ¡Buenos días, dragón!", pron:"jelóu! gud mórnin, drágon!"},
      {en:"I need help right now!", es:"¡Necesito ayuda ahora mismo —", pron:"ái níid jelp ráit náu!"},
      {en:"I have a meeting with a thousand robots today!", es:"— tengo una reunión con mil robots hoy!", pron:"ái jav a míiting uid a záusand róubots tudéi!"},
      {en:"Sorry, but first, where is the bathroom? A dragon this big needs a very big bathroom!", es:"Perdón, pero primero, ¿dónde está el baño? ¡Un dragón tan grande necesita un inmenso baño!", pron:"sórri, bat ferst, uér is de báazrum? a drágon dis big níids a véri big báazrum!"},
      {en:"Thank you! Now bring me an ocean of water and a mountain of coffee, please!", es:"¡Gracias! Ahora tráeme un océano de agua y una montaña de café, por favor.", pron:"zenk iú! náu bring mi an óushon of uáter and a máuntain of cófi, plíis!"},
      {en:"Yes! Is the news good or bad?", es:"¡Sí! ¿La noticia es buena o mala?", pron:"iés! is de niús gud or bad?"},
      {en:"I ate the email by mistake!", es:"¡Me comí el correo por error!", pron:"ái éit de íimeil bái mistéik!"},
      {en:"No problem, we can talk later —", es:"No hay problema, podemos hablar más tarde —", pron:"nóu práblem, uí can tók léiter —"},
      {en:"tomorrow, or even next year!", es:"mañana, o hasta el año que viene.", pron:"tumórou, or íven next íar!"},
      {en:"How much treasure do you want? A million gold coins?", es:"¿Cuánto tesoro querés? ¿Un millón de monedas de oro?", pron:"jáu mach tréshur du iú uánt? a mílion góuld cóins?"},
      {en:"Good afternoon, tiny humans!", es:"¡Buenas tardes, humanitos!", pron:"gud afternúun, táini jiúmans!"},
      {en:"Goodbye, and good night, my friends!", es:"¡Adiós, y buenas noches, amigos!", pron:"gudbái, and gud náit, mái frends!"}
    ],
    words:[
      {en:'hello', es:'hola', pron:'jelóu', emoji:'👋'},
      {en:'good morning', es:'buenos días', pron:'gud mórnin', emoji:'🌅'},
      {en:'good afternoon', es:'buenas tardes', pron:'gud afternún', emoji:'🌇'},
      {en:'good night', es:'buenas noches', pron:'gud náit', emoji:'🌙'},
      {en:'please', es:'por favor', pron:'plíis', emoji:'🙏'},
      {en:'thank you', es:'gracias', pron:'zenk iú', emoji:'🙌'},
      {en:'yes', es:'sí', pron:'iés', emoji:'✅'},
      {en:'no', es:'no', pron:'nóu', emoji:'❌'},
      {en:'sorry', es:'perdón', pron:'sórri', emoji:'😳'},
      {en:'water', es:'agua', pron:'uáter', emoji:'💧'},
      {en:'coffee', es:'café', pron:'cófi', emoji:'☕'},
      {en:'bathroom', es:'baño', pron:'báazrum', emoji:'🚻'},
      {en:'help', es:'ayuda', pron:'jelp', emoji:'🆘'},
      {en:'meeting', es:'reunión', pron:'míiting', emoji:'🗓️'},
      {en:'email', es:'correo', pron:'íimeil', emoji:'📧'},
      {en:'today', es:'hoy', pron:'tudéi', emoji:'📆'},
      {en:'tomorrow', es:'mañana', pron:'tumórou', emoji:'⏭️'},
      {en:'now', es:'ahora', pron:'náu', emoji:'⏰'},
      {en:'later', es:'más tarde', pron:'léiter', emoji:'⏳'},
      {en:'good', es:'bueno', pron:'gud', emoji:'👍'},
      {en:'bad', es:'malo', pron:'baad', emoji:'👎'},
      {en:'how much', es:'cuánto cuesta', pron:'jáu mach', emoji:'💲'},
      {en:'goodbye', es:'adiós', pron:'gudbái', emoji:'👋'},
      {en:'see you', es:'nos vemos', pron:'síi iú', emoji:'🤝'}
    ],
    story:[
      {en:'Hello! Good morning, dragon!', es:'¡Hola! ¡Buenos días, dragón!', pron:'jelóu! gud mórnin, drágon!'},
      {en:'I need help right now!', es:'¡Necesito ayuda ahora mismo —', pron:'ái níid jelp ráit náu!'},
      {en:'I have a meeting with a thousand robots today!', es:'— tengo una reunión con mil robots hoy!', pron:'ái jav a míiting uid a záusand róubots tudéi!'},
      {en:'Sorry, but first, where is the bathroom? A dragon this big needs a very big bathroom!', es:'Perdón, pero primero, ¿dónde está el baño? ¡Un dragón tan grande necesita un inmenso baño!', pron:'sórri, bat ferst, uér is de báazrum? a drágon dis big níids a véri big báazrum!'},
      {en:'Thank you! Now bring me an ocean of water and a mountain of coffee, please!', es:'¡Gracias! Ahora tráeme un océano de agua y una montaña de café, por favor.', pron:'zenk iú! náu bring mi an óushon of uáter and a máuntain of cófi, plíis!'},
      {en:'Yes! Is the news good or bad?', es:'¡Sí! ¿La noticia es buena o mala?', pron:'iés! is de niús gud or bad?'},
      {en:'I ate the email by mistake!', es:'¡Me comí el correo por error!', pron:'ái éit de íimeil bái mistéik!'},
      {en:'No problem, we can talk later —', es:'No hay problema, podemos hablar más tarde —', pron:'nóu práblem, uí can tók léiter —'},
      {en:'tomorrow, or even next year!', es:'mañana, o hasta el año que viene.', pron:'tumórou, or íven next íar!'},
      {en:'How much treasure do you want? A million gold coins?', es:'¿Cuánto tesoro querés? ¿Un millón de monedas de oro?', pron:'jáu mach tréshur du iú uánt? a mílion góuld cóins?'},
      {en:'Good afternoon, tiny humans!', es:'¡Buenas tardes, humanitos!', pron:'gud afternúun, táini jiúmans!'},
      {en:'Goodbye, and good night, my friends!', es:'¡Adiós, y buenas noches, amigos!', pron:'gudbái, and gud náit, mái frends!'}
    ],
    jingle:[
      {en:'Hello', es:'es hola', pron:'jelóu'},
      {en:'Good morning', es:'buenos días', pron:'gud mórnin'},
      {en:'Good afternoon', es:'es buenas tardes en el día', pron:'gud afternún'},
      {en:'Good night', es:'buenas noches... ¡vamos a cantar!', pron:'gud náit'},
      {en:'Please', es:'por favor', pron:'plíis'},
      {en:'Thank you', es:'es gracias', pron:'zenk iú'},
      {en:'Yes', es:'es un sí', pron:'iés'},
      {en:'No', es:'se destaca', pron:'nóu'},
      {en:'Sorry', es:'es perdón cuando algo pasa', pron:'sórri'},
      {en:'Water', es:'y si tienes sed, en la casa', pron:'uáter'},
      {en:'Coffee', es:'es café', pron:'cófi'},
      {en:'Bathroom', es:'es baño', pron:'báazrum'},
      {en:'Help', es:'es ayuda cuando hay un engaño', pron:'jelp'},
      {en:'Meeting', es:'reunión', pron:'míiting'},
      {en:'Email', es:'correo', pron:'íimeil'},
      {en:'Today', es:'es hoy', pron:'tudéi'},
      {en:'Tomorrow', es:'es mañana', pron:'tumórou'},
      {en:'Now', es:'es ahora', pron:'náu'},
      {en:'Later', es:'más tarde', pron:'léiter'},
      {en:'Good', es:'es bueno, ¡que el ritmo no pare!', pron:'gud'},
      {en:'Bad', es:'es malo', pron:'baad'},
      {en:'How much', es:'cuánto cuesta', pron:'jáu mach'},
      {en:'Goodbye', es:'adiós...', pron:'gudbái'},
      {en:'See you', es:'nos vemos en la fiesta!', pron:'síi iú'}
    ]
  },
{
    day:2, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'Presentarte / Presentarte a un cliente',
    structures:[
      {id:'S002', pattern:"My name is + [NAME]", examples:[
        {en:'My name is Robinson.', es:'Me llamo Robinson.', pron:'mai néim is Robinson.'},
        {en:'My name is Sarah.', es:'Me llamo Sarah.', pron:'mai néim is Sara.'},
        {en:'My name is Zorblax.', es:'Me llamo Zorblax.', pron:'mai néim is Zorblax.'},
        {en:'My name is David.', es:'Me llamo David.', pron:'mai néim is Déivid.'}
      ], function:'presentarte', stage:1,
        transformations:{
          negative:{en:'My name is not Robinson.', es:'Mi nombre no es Robinson.'},
          question:{en:'Is your name Robinson?', es:'¿Tu nombre es Robinson?'},
          yesAnswer:{en:'Yes, it is.', es:'Sí, lo es.'},
          noAnswer:{en:"No, it isn't.", es:'No, no lo es.'}
        }},
      {id:'S003', pattern:"I am from + [PLACE]", examples:[
        {en:'I am from Colombia.', es:'Soy de Colombia.', pron:'ái am fram Colómbia.'},
        {en:'I am from Medellín.', es:'Soy de Medellín.', pron:'ái am fram Medeyín.'},
        {en:'I am from the planet Neptune.', es:'Soy del planeta Neptuno.', pron:'ái am fram de plánet Neptiún.'},
        {en:'I am from Mexico.', es:'Soy de México.', pron:'ái am fram Méxicou.'}
      ], function:'decir de dónde sos', stage:1,
        transformations:{
          negative:{en:'I am not from Colombia.', es:'No soy de Colombia.'},
          question:{en:'Are you from Colombia?', es:'¿Sos de Colombia?'},
          yesAnswer:{en:'Yes, I am.', es:'Sí, lo soy.'},
          noAnswer:{en:"No, I'm not.", es:'No, no lo soy.'}
        }},
      {id:'S004', pattern:"I work at + [PLACE]", examples:[
        {en:'I work at Dosting Toys.', es:'Trabajo en Dosting Toys.', pron:'ái uork at Dosting Tois.'},
        {en:'I work at a bank.', es:'Trabajo en un banco.', pron:'ái uork at a bank.'},
        {en:'I work at the Interstellar Bank.', es:'Trabajo en el Banco Interestelar.', pron:'ái uork at de ínterstelar bank.'},
        {en:'I work at a hospital.', es:'Trabajo en un hospital.', pron:'ái uork at a jáspital.'}
      ], function:'decir dónde trabajás', stage:1,
        transformations:{
          negative:{en:"I don't work at Dosting Toys.", es:'No trabajo en Dosting Toys.'},
          question:{en:'Do you work at Dosting Toys?', es:'¿Trabajás en Dosting Toys?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí, trabajo ahí.'},
          noAnswer:{en:"No, I don't.", es:'No, no trabajo ahí.'},
          future:{en:'I will work at Dosting Toys.', es:'Voy a trabajar en Dosting Toys.'}
        }}
    ],
    songJingle:'cancion-dia2-vocabulario.mp3',
    songStory:'cancion-dia2-historia.mp3',
    songJingleLyrics:[
      {en:"", es:"¡Aprende inglés! ¡Fácil y genial! Día número dos, vamos a presentar.", pron:""},
      {en:"My name is", es:"me llamo", pron:"mai néim is"},
      {en:"What's your name?", es:"¿quién eres tú?", pron:"uáts iór néim?"},
      {en:"Nice to meet you", es:"mucho gusto, ¡qué gran actitud!", pron:"náis tu míit iú"},
      {en:"Welcome", es:"bienvenido", pron:"uélcam"},
      {en:"Come in", es:"pasa ya...", pron:"cam in"},
      {en:"", es:"Aprender inglés es fácil, ¡te va a encantar!", pron:""},
      {en:"I am from", es:"soy de un lugar especial", pron:"ái am fram"},
      {en:"I work at", es:"trabajo en un sitio genial", pron:"ái uork at"},
      {en:"Manager", es:"es gerente", pron:"mánayer"},
      {en:"Owner", es:"es el dueño", pron:"óuner"},
      {en:"This is", es:"te presento a quien cumple su sueño", pron:"dis is"},
      {en:"My name is", es:"me llamo", pron:"mai néim is"},
      {en:"What's your name?", es:"¿quién eres tú?", pron:"uáts iór néim?"},
      {en:"Nice to meet you", es:"mucho gusto, ¡qué gran actitud!", pron:"náis tu míit iú"},
      {en:"Welcome", es:"bienvenido", pron:"uélcam"},
      {en:"Come in", es:"pasa ya...", pron:"cam in"},
      {en:"", es:"Aprender inglés es fácil, ¡te va a encantar!", pron:""},
      {en:"Have a seat", es:"toma asiento", pron:"jav a síit"},
      {en:"Our team", es:"nuestro equipo", pron:"áur tíim"},
      {en:"Contact", es:"contacto", pron:"cóntact"},
      {en:"Phone number", es:"llamo a mi amigo", pron:"fóun námber"},
      {en:"Address", es:"es dirección", pron:"adrés"},
      {en:"Website", es:"sitio web", pron:"uébsait"},
      {en:"Business card", es:"la tarjeta que te entregaré", pron:"bísnes card"},
      {en:"", es:"Las frases de negocio ya te las sabrás,", pron:""},
      {en:"The pleasure is mine,", es:"¡el placer me darás!", pron:"de pléyer is máin,"},
      {en:"", es:"Presentarte en inglés ahora es muy sencillo, ¡canta esta canción con mucho brillo!", pron:""},
      {en:"Nice to meet you, Welcome", es:"¡el inglés ya está aquí! ¡Apréndelo cantando y sé feliz!", pron:"náis tu míit iú, uélcam"}
    ],
    songStoryLyrics:[
      {en:"Welcome to Earth! Come in, please!", es:"¡Bienvenido a la Tierra! ¡Pasá, por favor!", pron:"uélcam tu erz! cam in, plíis!"},
      {en:"What's your name?", es:"¿Cómo te llamás?", pron:"uáts iór néim?"},
      {en:"My name is Zorblax, and I am from the planet Neptune!", es:"¡Me llamo Zorblax, y soy del planeta Neptuno!", pron:"mái néim is Zorblax, and ái am fram de plánet Neptiún!"},
      {en:"Nice to meet you. Have a seat — if you can find a chair big enough!", es:"Mucho gusto. Tomá asiento — ¡si encontrás una silla suficientemente grande!", pron:"náis tu míit iú. jav a síit — if iú can fáind a chér big ináf!"},
      {en:"I work at the Interstellar Bank. I am the owner of a thousand galaxies!", es:"Trabajo en el Banco Interestelar. ¡Soy el dueño de mil galaxias!", pron:"ái uork at de ínterstelar bank. ái am de óuner of a záusand gálaxis!"},
      {en:"This is our team: five robots and a talking cat, our manager.", es:"Este es nuestro equipo: cinco robots y un gato parlante, nuestro gerente.", pron:"dis is áur tíim: fáiv róubots and a tóking cat, áur mánayer."},
      {en:"Here is my business card — my contact is a laser beam, and my phone number has forty digits!", es:"Acá tenés mi tarjeta — mi contacto es un rayo láser, ¡y mi número de teléfono tiene cuarenta dígitos!", pron:"jíar is mái bísnes card — mái cóntact is a léiser bíim, and mái fóun námber jas fórti díyits!"},
      {en:"The pleasure is mine, human.", es:"El placer es mío, humano.", pron:"de pléyer is máin, jiúman."}
    ],
    words:[
      {en:'my name is', es:'me llamo', pron:'mai néim is', emoji:'🙋'},
      {en:"what's your name", es:'cómo te llamas', pron:'uáts iór néim', emoji:'❓'},
      {en:'nice to meet you', es:'mucho gusto', pron:'náis tu míit iú', emoji:'🤝'},
      {en:'I am from', es:'soy de', pron:'ái am fram', emoji:'🌎'},
      {en:'I work at', es:'trabajo en', pron:'ái uork at', emoji:'🏢'},
      {en:'manager', es:'gerente', pron:'mánayer', emoji:'👔'},
      {en:'owner', es:'dueño', pron:'óuner', emoji:'🔑'},
      {en:'this is', es:'te presento a', pron:'dis is', emoji:'👉'},
      {en:'welcome', es:'bienvenido', pron:'uélcam', emoji:'🎉'},
      {en:'come in', es:'pasá', pron:'cam in', emoji:'🚪'},
      {en:'have a seat', es:'tomá asiento', pron:'jav a síit', emoji:'🪑'},
      {en:'our team', es:'nuestro equipo', pron:'áur tíim', emoji:'👥'},
      {en:'contact', es:'contacto', pron:'cóntact', emoji:'📇'},
      {en:'phone number', es:'número de teléfono', pron:'fóun námber', emoji:'📱'},
      {en:'address', es:'dirección', pron:'adrés', emoji:'🏠'},
      {en:'website', es:'sitio web', pron:'uébsait', emoji:'🌐'},
      {en:'business card', es:'tarjeta de presentación', pron:'bísnes card', emoji:'💳'},
      {en:'the pleasure is mine', es:'el placer es mío', pron:'de pléyer is máin', emoji:'😊'}
    ],
    story:[
      {en:'Welcome to Earth! Come in, please!', es:'¡Bienvenido a la Tierra! ¡Pasá, por favor!', pron:'uélcam tu erz! cam in, plíis!'},
      {en:"What's your name?", es:'¿Cómo te llamás?', pron:'uáts iór néim?'},
      {en:'My name is Zorblax, and I am from the planet Neptune!', es:'¡Me llamo Zorblax, y soy del planeta Neptuno!', pron:'mái néim is Zorblax, and ái am fram de plánet Neptiún!'},
      {en:'Nice to meet you. Have a seat — if you can find a chair big enough!', es:'Mucho gusto. Tomá asiento — ¡si encontrás una silla suficientemente grande!', pron:'náis tu míit iú. jav a síit — if iú can fáind a chér big ináf!'},
      {en:'I work at the Interstellar Bank. I am the owner of a thousand galaxies!', es:'Trabajo en el Banco Interestelar. ¡Soy el dueño de mil galaxias!', pron:'ái uork at de ínterstelar bank. ái am de óuner of a záusand gálaxis!'},
      {en:'This is our team: five robots and a talking cat, our manager.', es:'Este es nuestro equipo: cinco robots y un gato parlante, nuestro gerente.', pron:'dis is áur tíim: fáiv róubots and a tóking cat, áur mánayer.'},
      {en:"Here is my business card — my contact is a laser beam, and my phone number has forty digits!", es:'Acá tenés mi tarjeta — mi contacto es un rayo láser, ¡y mi número de teléfono tiene cuarenta dígitos!', pron:'jíar is mái bísnes card — mái cóntact is a léiser bíim, and mái fóun námber jas fórti díyits!'},
      {en:'The pleasure is mine, human.', es:'El placer es mío, humano.', pron:'de pléyer is máin, jiúman.'}
    ],
    jingle:[
      {en:'My name is', es:'me llamo', pron:'mai néim is'},
      {en:"What's your name?", es:'¿quién eres tú?', pron:'uáts iór néim?'},
      {en:'Nice to meet you', es:'mucho gusto, ¡qué gran actitud!', pron:'náis tu míit iú'},
      {en:'Welcome', es:'bienvenido', pron:'uélcam'},
      {en:'Come in', es:'pasa ya...', pron:'cam in'},
      {en:'I am from', es:'soy de un lugar especial', pron:'ái am fram'},
      {en:'I work at', es:'trabajo en un sitio genial', pron:'ái uork at'},
      {en:'Manager', es:'es gerente', pron:'mánayer'},
      {en:'Owner', es:'es el dueño', pron:'óuner'},
      {en:'This is', es:'te presento a quien cumple su sueño', pron:'dis is'},
      {en:'Have a seat', es:'toma asiento', pron:'jav a síit'},
      {en:'Our team', es:'nuestro equipo', pron:'áur tíim'},
      {en:'Contact', es:'contacto', pron:'cóntact'},
      {en:'Phone number', es:'llamo a mi amigo', pron:'fóun námber'},
      {en:'Address', es:'es dirección', pron:'adrés'},
      {en:'Website', es:'sitio web', pron:'uébsait'},
      {en:'Business card', es:'la tarjeta que te entregaré', pron:'bísnes card'},
      {en:'The pleasure is mine,', es:'¡el placer me darás!', pron:'de pléyer is máin,'}
    ]
  },
{
    day:3, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'De dónde eres / Presentar tu empresa',
    structures:[
      {id:'S005', pattern:"We sell + [X]", examples:[
        {en:'We sell toys.', es:'Vendemos juguetes.', pron:'uí sel tóis.'},
        {en:'We sell flying products.', es:'Vendemos productos voladores.', pron:'uí sel fláing prádacts.'},
        {en:'We sell quality tools.', es:'Vendemos herramientas de calidad.', pron:'uí sel cuáliti túuls.'},
        {en:'We sell books.', es:'Vendemos libros.', pron:'uí sel búks.'}
      ], function:'describir qué vende tu empresa', stage:1,
        transformations:{
          negative:{en:"We don't sell toys.", es:'No vendemos juguetes.'},
          question:{en:'Do you sell toys?', es:'¿Venden juguetes?'},
          yesAnswer:{en:'Yes, we do.', es:'Sí, los vendemos.'},
          noAnswer:{en:"No, we don't.", es:'No, no los vendemos.'},
          future:{en:'We will sell toys.', es:'Vamos a vender juguetes.'}
        }},
      {id:'S006', pattern:"We provide + [X]", examples:[
        {en:'We provide services.', es:'Ofrecemos servicios.', pron:'uí prováid sérvises.'},
        {en:'We provide invisible services.', es:'Ofrecemos servicios invisibles.', pron:'uí prováid invísibol sérvises.'},
        {en:'We provide the best delivery.', es:'Ofrecemos la mejor entrega.', pron:'uí prováid de best delíveri.'},
        {en:'We provide support.', es:'Ofrecemos soporte.', pron:'uí prováid sapórt.'}
      ], function:'describir qué ofrece tu empresa', stage:1,
        transformations:{
          negative:{en:"We don't provide services.", es:'No ofrecemos servicios.'},
          question:{en:'Do you provide services?', es:'¿Ofrecen servicios?'},
          yesAnswer:{en:'Yes, we do.', es:'Sí, los ofrecemos.'},
          noAnswer:{en:"No, we don't.", es:'No, no los ofrecemos.'},
          future:{en:'We will provide services.', es:'Vamos a ofrecer servicios.'}
        }}
    ],
    songJingle:'cancion-dia3-vocabulario.mp3',
    songStory:'cancion-dia3-historia.mp3',
    songJingleLyrics:[
      {en:"Country", es:"es país", pron:"cántri"},
      {en:"city", es:"es ciudad", pron:"síti"},
      {en:"Company name", es:"es el nombre de tu empresa en verdad", pron:"cámpani néim"},
      {en:"Since", es:"es desde", pron:"sins"},
      {en:"we sell", es:"es vendemos", pron:"uí sel"},
      {en:"We provide", es:"ofrecemos todo lo que hacemos", pron:"uí prováid"},
      {en:"Products", es:"son productos", pron:"prádacts"},
      {en:"services", es:"servicios también", pron:"sérvises"},
      {en:"Customers", es:"son clientes que atendemos muy bien", pron:"cástomers"},
      {en:"Learning English is easy,", es:"Aprender inglés es fácil,", pron:"lérning ínglish is ísi,"},
      {en:"You're going to love it!", es:"¡Te va a encantar!", pron:"iór góing tu lav it!"},
      {en:"Here we go, let's learn some more,", es:"Vamos allá, aprendamos más,", pron:"jíar uí góu, lets lern sam mor,"},
      {en:"Phrase by phrase, like never before,", es:"Frase por frase, como nunca antes.", pron:"fréis bái fréis, láik néver bifór,"},
      {en:"Excuse me,", es:"Disculpe,", pron:"exquiúsmi,"},
      {en:"Thank you so much,", es:"Muchas gracias,", pron:"zenk iú sóu mach,"},
      {en:"I don't understand,", es:"No entiendo,", pron:"ái dont anderstánd,"},
      {en:"Could you help me, please?", es:"¿Podría ayudarme, por favor?", pron:"cud iú jelp mi, plíis?"},
      {en:"Suppliers", es:"son proveedores de gran valor", pron:"sapláiers"},
      {en:"Market", es:"es mercado con el mejor color", pron:"márket"},
      {en:"Quality", es:"es calidad", pron:"cuáliti"},
      {en:"price", es:"es el precio ideal", pron:"práis"},
      {en:"Discount", es:"es descuento para una oferta especial", pron:"díscaunt"},
      {en:"Delivery", es:"es la entrega", pron:"delíveri"},
      {en:"warehouse", es:"la bodega hoy", pron:"uérjaus"},
      {en:"Brand", es:"es la marca que te dice quién soy", pron:"brand"},
      {en:"Here we go, let's learn some more,", es:"Vamos allá, aprendamos más,", pron:"jíar uí góu, lets lern sam mor,"},
      {en:"Phrase by phrase, like never before,", es:"Frase por frase, como nunca antes.", pron:"fréis bái fréis, láik néver bifór,"},
      {en:"Excuse me,", es:"Disculpe,", pron:"exquiúsmi,"},
      {en:"Thank you so much,", es:"Muchas gracias,", pron:"zenk iú sóu mach,"},
      {en:"I don't understand,", es:"No entiendo,", pron:"ái dont anderstánd,"},
      {en:"Could you help me, please?", es:"¿Podría ayudarme, por favor?", pron:"cud iú jelp mi, plíis?"},
      {en:"See you next week, dragon friend,", es:"Nos vemos la próxima semana, amigo dragón,", pron:"síi iú next uíik, drágon frend,"},
      {en:"Keep practicing until the end,", es:"Seguí practicando hasta el final.", pron:"kíip práctising antíl de end,"}
    ],
    songStoryLyrics:[
      {en:"What country and city do wizards come from? I'm from the Floating City, in the Kingdom of Clouds!", es:"¿De qué país y ciudad vienen los magos? ¡Soy de la Ciudad Flotante, en el Reino de las Nubes!", pron:"uát cántri and síti du uísards cam fram? áim fram de flóuting síti, in de kíngdom of cláuds!"},
      {en:"Our company name is Dragon's Brew, since the year one thousand!", es:"¡El nombre de nuestra empresa es Cerveza de Dragón, desde el año mil!", pron:"áur cámpani néim is drágons brú, sins de íar uán záusand!"},
      {en:"We sell flying products and we provide invisible services to a thousand customers.", es:"Vendemos productos voladores y ofrecemos servicios invisibles a mil clientes.", pron:"uí sel fláing prádacts and uí prováid invísibol sérvises tu a záusand cástomers."},
      {en:"Our suppliers are giants who bring us the highest quality for the lowest price!", es:"Nuestros proveedores son gigantes que nos traen la mejor calidad al precio más bajo!", pron:"áur sapláiers ar yáiants jú bring as de jáiest cuáliti for de lóuest práis!"},
      {en:"Today only: a magic discount, and free delivery by dragon, straight from our floating warehouse!", es:"¡Solo hoy: un descuento mágico, y entrega gratis en dragón, directo desde nuestra bodega flotante!", pron:"tudéi óunli: a máyic díscaunt, and fríi delíveri bái drágon, stréit fram áur flóuting uérjaus!"},
      {en:"We are the most powerful brand in the entire market of ten thousand kingdoms!", es:"Somos la marca más poderosa en todo el mercado de diez mil reinos!", pron:"uí ar de móust páuerful brand in de entáier márket of ten záusand kíngdoms!"},
      {en:"Learning English is easy,", es:"Aprender inglés es fácil,", pron:"lérning ínglish is ísi,"},
      {en:"You're going to love it!", es:"¡Te va a encantar!", pron:"iór góing tu lav it!"},
      {en:"See you next week, dragon friend,", es:"Nos vemos la próxima semana, amigo dragón,", pron:"síi iú next uíik, drágon frend,"},
      {en:"Keep practicing until the end,", es:"Seguí practicando hasta el final.", pron:"kíip práctising antíl de end,"}
    ],
    words:[
      {en:'country', es:'país', pron:'cántri', emoji:'🌍'},
      {en:'city', es:'ciudad', pron:'síti', emoji:'🏙️'},
      {en:'company name', es:'nombre de la empresa', pron:'cámpani néim', emoji:'🏷️'},
      {en:'since', es:'desde', pron:'sins', emoji:'📅'},
      {en:'we sell', es:'vendemos', pron:'uí sel', emoji:'🛒'},
      {en:'we provide', es:'ofrecemos', pron:'uí prováid', emoji:'📦'},
      {en:'products', es:'productos', pron:'prádacts', emoji:'📦'},
      {en:'services', es:'servicios', pron:'sérvises', emoji:'🛠️'},
      {en:'customers', es:'clientes', pron:'cástomers', emoji:'🙋'},
      {en:'suppliers', es:'proveedores', pron:'sapláiers', emoji:'🚚'},
      {en:'market', es:'mercado', pron:'márket', emoji:'📊'},
      {en:'quality', es:'calidad', pron:'cuáliti', emoji:'⭐'},
      {en:'price', es:'precio', pron:'práis', emoji:'💲'},
      {en:'discount', es:'descuento', pron:'díscaunt', emoji:'🏷️'},
      {en:'delivery', es:'entrega', pron:'delíveri', emoji:'🚛'},
      {en:'warehouse', es:'bodega', pron:'uérjaus', emoji:'🏭'},
      {en:'brand', es:'marca', pron:'brand', emoji:'🔖'}
    ],
    story:[
      {en:"What country and city do wizards come from? I'm from the Floating City, in the Kingdom of Clouds!", es:'¿De qué país y ciudad vienen los magos? ¡Soy de la Ciudad Flotante, en el Reino de las Nubes!', pron:'uát cántri and síti du uísards cam fram? áim fram de flóuting síti, in de kíngdom of cláuds!'},
      {en:"Our company name is Dragon's Brew, since the year one thousand!", es:'¡El nombre de nuestra empresa es Cerveza de Dragón, desde el año mil!', pron:'áur cámpani néim is drágons brú, sins de íar uán záusand!'},
      {en:'We sell flying products and we provide invisible services to a thousand customers.', es:'Vendemos productos voladores y ofrecemos servicios invisibles a mil clientes.', pron:'uí sel fláing prádacts and uí prováid invísibol sérvises tu a záusand cástomers.'},
      {en:'Our suppliers are giants who bring us the highest quality for the lowest price!', es:'Nuestros proveedores son gigantes que nos traen la mejor calidad al precio más bajo!', pron:'áur sapláiers ar yáiants jú bring as de jáiest cuáliti for de lóuest práis!'},
      {en:'Today only: a magic discount, and free delivery by dragon, straight from our floating warehouse!', es:'¡Solo hoy: un descuento mágico, y entrega gratis en dragón, directo desde nuestra bodega flotante!', pron:'tudéi óunli: a máyic díscaunt, and fríi delíveri bái drágon, stréit fram áur flóuting uérjaus!'},
      {en:'We are the most powerful brand in the entire market of ten thousand kingdoms!', es:'Somos la marca más poderosa en todo el mercado de diez mil reinos!', pron:'uí ar de móust páuerful brand in de entáier márket of ten záusand kíngdoms!'},
      {en:'Learning English is easy,', es:'Aprender inglés es fácil,', pron:'lérning ínglish is ísi,'},
      {en:"You're going to love it!", es:'¡Te va a encantar!', pron:'iór góing tu lav it!'},
      {en:'See you next week, dragon friend,', es:'Nos vemos la próxima semana, amigo dragón,', pron:'síi iú next uíik, drágon frend,'},
      {en:'Keep practicing until the end,', es:'Seguí practicando hasta el final.', pron:'kíip práctising antíl de end,'}
    ],
    jingle:[
      {en:'Country', es:'es país', pron:'cántri'},
      {en:'city', es:'es ciudad', pron:'síti'},
      {en:'Company name', es:'es el nombre de tu empresa en verdad', pron:'cámpani néim'},
      {en:'Since', es:'es desde', pron:'sins'},
      {en:'we sell', es:'es vendemos', pron:'uí sel'},
      {en:'We provide', es:'ofrecemos todo lo que hacemos', pron:'uí prováid'},
      {en:'Products', es:'son productos', pron:'prádacts'},
      {en:'services', es:'servicios también', pron:'sérvises'},
      {en:'Customers', es:'son clientes que atendemos muy bien', pron:'cástomers'},
      {en:'Learning English is easy,', es:'Aprender inglés es fácil,', pron:'lérning ínglish is ísi,'},
      {en:"You're going to love it!", es:'¡Te va a encantar!', pron:'iór góing tu lav it!'},
      {en:"Here we go, let's learn some more,", es:'Vamos allá, aprendamos más,', pron:'jíar uí góu, lets lern sam mor,'},
      {en:'Phrase by phrase, like never before,', es:'Frase por frase, como nunca antes.', pron:'fréis bái fréis, láik néver bifór,'},
      {en:'Excuse me,', es:'Disculpe,', pron:'exquiúsmi,'},
      {en:'Thank you so much,', es:'Muchas gracias,', pron:'zenk iú sóu mach,'},
      {en:"I don't understand,", es:'No entiendo,', pron:'ái dont anderstánd,'},
      {en:'Could you help me, please?', es:'¿Podría ayudarme, por favor?', pron:'cud iú jelp mi, plíis?'},
      {en:'Suppliers', es:'son proveedores de gran valor', pron:'sapláiers'},
      {en:'Market', es:'es mercado con el mejor color', pron:'márket'},
      {en:'Quality', es:'es calidad', pron:'cuáliti'},
      {en:'price', es:'es el precio ideal', pron:'práis'},
      {en:'Discount', es:'es descuento para una oferta especial', pron:'díscaunt'},
      {en:'Delivery', es:'es la entrega', pron:'delíveri'},
      {en:'warehouse', es:'la bodega hoy', pron:'uérjaus'},
      {en:'Brand', es:'es la marca que te dice quién soy', pron:'brand'},
      {en:'See you next week, dragon friend,', es:'Nos vemos la próxima semana, amigo dragón,', pron:'síi iú next uíik, drágon frend,'},
      {en:'Keep practicing until the end,', es:'Seguí practicando hasta el final.', pron:'kíip práctising antíl de end,'}
    ]
  },
{
    day:4, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'Familia básica / Tu rol en la empresa',
    structures:[
      {id:'S007', pattern:"I am the owner of + [X]", examples:[
        {en:'I am the owner of this company.', es:'Soy el dueño de esta empresa.', pron:'ái am de óuner of dis cámpani.'},
        {en:'I am the owner of a small store.', es:'Soy el dueño de una tienda pequeña.', pron:'ái am de óuner of a smol stor.'},
        {en:'I am the owner of a thousand galaxies.', es:'Soy el dueño de mil galaxias.', pron:'ái am de óuner of a záusand gálaxis.'},
        {en:'I am the owner of a restaurant.', es:'Soy el dueño de un restaurante.', pron:'ái am de óuner of a réstorant.'}
      ], function:'decir que sos dueño de algo', stage:1,
        transformations:{
          negative:{en:'I am not the owner of this company.', es:'No soy el dueño de esta empresa.'},
          question:{en:'Are you the owner of this company?', es:'¿Sos el dueño de esta empresa?'},
          yesAnswer:{en:'Yes, I am.', es:'Sí, lo soy.'},
          noAnswer:{en:"No, I'm not.", es:'No, no lo soy.'},
          future:{en:'I will be the owner of this company.', es:'Voy a ser el dueño de esta empresa.'}
        }},
      {id:'S008', pattern:"I am in charge of + [X]", examples:[
        {en:'I am in charge of sales.', es:'Estoy a cargo de ventas.', pron:'ái am in chárch of séils.'},
        {en:'I am in charge of the team.', es:'Estoy a cargo del equipo.', pron:'ái am in chárch of de tíim.'},
        {en:'I am in charge of logistics.', es:'Estoy a cargo de logística.', pron:'ái am in chárch of loyístics.'},
        {en:'I am in charge of marketing.', es:'Estoy a cargo de marketing.', pron:'ái am in chárch of márketing.'}
      ], function:'decir que estás a cargo de algo', stage:1,
        transformations:{
          negative:{en:'I am not in charge of sales.', es:'No estoy a cargo de ventas.'},
          question:{en:'Are you in charge of sales?', es:'¿Estás a cargo de ventas?'},
          yesAnswer:{en:'Yes, I am.', es:'Sí, lo estoy.'},
          noAnswer:{en:"No, I'm not.", es:'No, no lo estoy.'},
          future:{en:'I will be in charge of sales.', es:'Voy a estar a cargo de ventas.'}
        }}
    ],
    songJingle:'cancion-dia4-vocabulario.mp3',
    songStory:'cancion-dia4-historia.mp3',
    songJingleLyrics:[
      {en:"Wife", es:"es esposa", pron:"uáif"},
      {en:"husband", es:"es esposo", pron:"jásband"},
      {en:"Son", es:"es hijo", pron:"san"},
      {en:"daughter", es:"es hija, ¡qué hermoso!", pron:"dóter"},
      {en:"Children", es:"son hijos", pron:"chíldren"},
      {en:"brother", es:"hermano", pron:"bráder"},
      {en:"Sister", es:"hermana que me da la mano", pron:"síster"},
      {en:"I am the owner,", es:"soy el dueño aquí,", pron:"ái am de óuner,"},
      {en:"I am in charge of,", es:"a cargo me sentí.", pron:"ái am in chárch of,"},
      {en:"Learning English is easy,", es:"Aprender inglés es fácil,", pron:"lérning ínglish is ísi,"},
      {en:"You're going to love it!", es:"¡Te va a encantar!", pron:"iór góing tu lav it!"},
      {en:"Here we go, let's learn some more,", es:"Vamos allá, aprendamos más,", pron:"jíar uí góu, lets lern sam mor,"},
      {en:"Phrase by phrase, like never before,", es:"Frase por frase, como nunca antes.", pron:"fréis bái fréis, láik néver bifór,"},
      {en:"Family and work,", es:"familia y trabajo hoy,", pron:"fámili and uork,"},
      {en:"In this great team,", es:"te digo quién soy.", pron:"in dis gréit tíim,"},
      {en:"My boss and my colleagues working with pride,", es:"con mi líder de equipo siempre a mi lado.", pron:"mái bos and mái cólígs uórking uid práid,"},
      {en:"Department", es:"es departamento empresarial", pron:"dipártment"},
      {en:"Sales", es:"son ventas,", pron:"séils"},
      {en:"logistics", es:"es logística vital.", pron:"loyístics"},
      {en:"Accounting", es:"contabilidad,", pron:"acáunting"},
      {en:"boss", es:"es el jefe hoy,", pron:"bos"},
      {en:"Employee", es:"es empleado,", pron:"emploí-i"},
      {en:"colleague", es:"colega donde voy.", pron:"cólig"},
      {en:"Team leader", es:"es el líder de equipo en acción", pron:"tíim líider"},
      {en:"Here we go, let's learn some more,", es:"Vamos allá, aprendamos más,", pron:"jíar uí góu, lets lern sam mor,"},
      {en:"Phrase by phrase, like never before,", es:"Frase por frase, como nunca antes.", pron:"fréis bái fréis, láik néver bifór,"},
      {en:"Family and work,", es:"familia y trabajo hoy,", pron:"fámili and uork,"},
      {en:"In this great team,", es:"te digo quién soy.", pron:"in dis gréit tíim,"},
      {en:"My boss and my colleagues working with pride,", es:"con mi líder de equipo siempre a mi lado.", pron:"mái bos and mái cólígs uórking uid práid,"},
      {en:"See you next week, dragon friend,", es:"Nos vemos la próxima semana, amigo dragón,", pron:"síi iú next uíik, drágon frend,"},
      {en:"Keep practicing until the end,", es:"Seguí practicando hasta el final.", pron:"kíip práctising antíl de end,"}
    ],
    songStoryLyrics:[
      {en:"I am the owner of this superhero company!", es:"¡Soy el dueño de esta empresa de superhéroes!", pron:"ái am de óuner of dis súperjírou cámpani!"},
      {en:"My wife can fly, and my husband breathes fire — together we have five children who can read minds!", es:"Mi esposa puede volar, y mi esposo respira fuego — juntos tenemos cinco hijos que pueden leer mentes.", pron:"mái uáif can flái, and mái jásband bríizes fáiar — tugéder uí jav fáiv chíldren jú can ríid máinds!"},
      {en:"My brother is a giant robot in charge of sales, and my sister, an invisible ninja, works in accounting!", es:"Mi hermano es un robot gigante a cargo de ventas, y mi hermana, una ninja invisible, ¡trabaja en contabilidad!", pron:"mái bráder is a yáiant róubot in chárch of séils, and mái síster, an invísibol níndya, uorks in acáunting!"},
      {en:"Our team leader is a talking gorilla who manages the logistics department.", es:"Nuestro líder de equipo es un gorila parlante que maneja el departamento de logística.", pron:"áur tíim líider is a tóking goríla jú mánayes de loyístics dipártment."},
      {en:"Every boss, employee, and colleague here has a superpower!", es:"¡Todo jefe, empleado y colega acá tiene un superpoder!", pron:"évri bos, emploí-i, and cólig jíar jas a súperpáuer!"},
      {en:"Learning English is easy,", es:"Aprender inglés es fácil,", pron:"lérning ínglish is ísi,"},
      {en:"You're going to love it!", es:"¡Te va a encantar!", pron:"iór góing tu lav it!"},
      {en:"See you next week, dragon friend,", es:"Nos vemos la próxima semana, amigo dragón,", pron:"síi iú next uíik, drágon frend,"},
      {en:"Keep practicing until the end,", es:"Seguí practicando hasta el final.", pron:"kíip práctising antíl de end,"}
    ],
    words:[
      {en:'wife', es:'esposa', pron:'uáif', emoji:'👩'},
      {en:'husband', es:'esposo', pron:'jásband', emoji:'👨'},
      {en:'son', es:'hijo', pron:'san', emoji:'👦'},
      {en:'daughter', es:'hija', pron:'dóter', emoji:'👧'},
      {en:'children', es:'hijos', pron:'chíldren', emoji:'👨‍👩‍👧‍👦'},
      {en:'brother', es:'hermano', pron:'bráder', emoji:'👬'},
      {en:'sister', es:'hermana', pron:'síster', emoji:'👭'},
      {en:'I am the owner', es:'soy el dueño', pron:'ái am de óuner', emoji:'🔑'},
      {en:'I am in charge of', es:'estoy a cargo de', pron:'ái am in chárch of', emoji:'📋'},
      {en:'department', es:'departamento', pron:'dipártment', emoji:'🏢'},
      {en:'sales', es:'ventas', pron:'séils', emoji:'💰'},
      {en:'logistics', es:'logística', pron:'loyístics', emoji:'🚚'},
      {en:'accounting', es:'contabilidad', pron:'acáunting', emoji:'🧾'},
      {en:'boss', es:'jefe', pron:'bos', emoji:'👔'},
      {en:'employee', es:'empleado', pron:'emploí-i', emoji:'🧑‍💼'},
      {en:'colleague', es:'colega', pron:'cólig', emoji:'🤝'},
      {en:'team leader', es:'líder de equipo', pron:'tíim líider', emoji:'🧭'}
    ],
    story:[
      {en:'I am the owner of this superhero company!', es:'¡Soy el dueño de esta empresa de superhéroes!', pron:'ái am de óuner of dis súperjírou cámpani!'},
      {en:'My wife can fly, and my husband breathes fire — together we have five children who can read minds!', es:'Mi esposa puede volar, y mi esposo respira fuego — juntos tenemos cinco hijos que pueden leer mentes.', pron:'mái uáif can flái, and mái jásband bríizes fáiar — tugéder uí jav fáiv chíldren jú can ríid máinds!'},
      {en:'My brother is a giant robot in charge of sales, and my sister, an invisible ninja, works in accounting!', es:'Mi hermano es un robot gigante a cargo de ventas, y mi hermana, una ninja invisible, ¡trabaja en contabilidad!', pron:'mái bráder is a yáiant róubot in chárch of séils, and mái síster, an invísibol níndya, uorks in acáunting!'},
      {en:'Our team leader is a talking gorilla who manages the logistics department.', es:'Nuestro líder de equipo es un gorila parlante que maneja el departamento de logística.', pron:'áur tíim líider is a tóking goríla jú mánayes de loyístics dipártment.'},
      {en:'Every boss, employee, and colleague here has a superpower!', es:'¡Todo jefe, empleado y colega acá tiene un superpoder!', pron:'évri bos, emploí-i, and cólig jíar jas a súperpáuer!'},
      {en:'Learning English is easy,', es:'Aprender inglés es fácil,', pron:'lérning ínglish is ísi,'},
      {en:"You're going to love it!", es:'¡Te va a encantar!', pron:'iór góing tu lav it!'},
      {en:'See you next week, dragon friend,', es:'Nos vemos la próxima semana, amigo dragón,', pron:'síi iú next uíik, drágon frend,'},
      {en:'Keep practicing until the end,', es:'Seguí practicando hasta el final.', pron:'kíip práctising antíl de end,'}
    ],
    jingle:[
      {en:'Wife', es:'es esposa', pron:'uáif'},
      {en:'husband', es:'es esposo', pron:'jásband'},
      {en:'Son', es:'es hijo', pron:'san'},
      {en:'daughter', es:'es hija, ¡qué hermoso!', pron:'dóter'},
      {en:'Children', es:'son hijos', pron:'chíldren'},
      {en:'brother', es:'hermano', pron:'bráder'},
      {en:'Sister', es:'hermana que me da la mano', pron:'síster'},
      {en:'I am the owner,', es:'soy el dueño aquí,', pron:'ái am de óuner,'},
      {en:'I am in charge of,', es:'a cargo me sentí.', pron:'ái am in chárch of,'},
      {en:'Learning English is easy,', es:'Aprender inglés es fácil,', pron:'lérning ínglish is ísi,'},
      {en:"You're going to love it!", es:'¡Te va a encantar!', pron:'iór góing tu lav it!'},
      {en:"Here we go, let's learn some more,", es:'Vamos allá, aprendamos más,', pron:'jíar uí góu, lets lern sam mor,'},
      {en:'Phrase by phrase, like never before,', es:'Frase por frase, como nunca antes.', pron:'fréis bái fréis, láik néver bifór,'},
      {en:'Family and work,', es:'familia y trabajo hoy,', pron:'fámili and uork,'},
      {en:'In this great team,', es:'te digo quién soy.', pron:'in dis gréit tíim,'},
      {en:'My boss and my colleagues working with pride,', es:'con mi líder de equipo siempre a mi lado.', pron:'mái bos and mái cólígs uórking uid práid,'},
      {en:'Department', es:'es departamento empresarial', pron:'dipártment'},
      {en:'Sales', es:'son ventas,', pron:'séils'},
      {en:'logistics', es:'es logística vital.', pron:'loyístics'},
      {en:'Accounting', es:'contabilidad,', pron:'acáunting'},
      {en:'boss', es:'es el jefe hoy,', pron:'bos'},
      {en:'Employee', es:'es empleado,', pron:'emploí-i'},
      {en:'colleague', es:'colega donde voy.', pron:'cólig'},
      {en:'Team leader', es:'es el líder de equipo en acción', pron:'tíim líider'},
      {en:'See you next week, dragon friend,', es:'Nos vemos la próxima semana, amigo dragón,', pron:'síi iú next uíik, drágon frend,'},
      {en:'Keep practicing until the end,', es:'Seguí practicando hasta el final.', pron:'kíip práctising antíl de end,'}
    ]
  },
{
    day:5, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'Números 1-10 / Cantidades en pedidos',
    words:[
      {en:'one', es:'uno', pron:'uán', emoji:'1️⃣'},
      {en:'two', es:'dos', pron:'tú', emoji:'2️⃣'},
      {en:'three', es:'tres', pron:'zríi', emoji:'3️⃣'},
      {en:'four', es:'cuatro', pron:'fóar', emoji:'4️⃣'},
      {en:'five', es:'cinco', pron:'fáiv', emoji:'5️⃣'},
      {en:'six', es:'seis', pron:'six', emoji:'6️⃣'},
      {en:'seven', es:'siete', pron:'séven', emoji:'7️⃣'},
      {en:'eight', es:'ocho', pron:'éit', emoji:'8️⃣'},
      {en:'nine', es:'nueve', pron:'náin', emoji:'9️⃣'},
      {en:'ten', es:'diez', pron:'ten', emoji:'🔟'},
      {en:'how many', es:'cuántos', pron:'jáu méni', emoji:'❓'},
      {en:'units', es:'unidades', pron:'iúnits', emoji:'📦'},
      {en:'box', es:'caja', pron:'bax', emoji:'📦'},
      {en:'dozen', es:'docena', pron:'dázen', emoji:'🧺'},
      {en:'total', es:'total', pron:'tóutal', emoji:'➕'},
      {en:'quantity', es:'cantidad', pron:'cuántiti', emoji:'🔢'},
      {en:'order', es:'pedido', pron:'órder', emoji:'📝'},
      {en:'invoice', es:'factura', pron:'ínvois', emoji:'🧾'}
    ],
    story:[
      {en:'How many dragon eggs do we have? One, two, three... a hundred?', es:'¿Cuántos huevos de dragón tenemos? ¿Uno, dos, tres... cien?', pron:'jáu méni drágon egs du uí jav? uán, tú, zríi... a jándred?'},
      {en:'We have four, five, six, seven, eight, nine, and ten boxes exploding with magic eggs!', es:'Tenemos cuatro, cinco, seis, siete, ocho, nueve, y diez cajas explotando de huevos mágicos.', pron:'uí jav fóar, fáiv, six, séven, éit, náin, and ten báxes explóuding uid máyic egs!'},
      {en:'A dozen eggs just hatched into flying elephants!', es:'¡Una docena de huevos acaba de nacer en elefantes voladores!', pron:'a dázen egs yast jácht íntu fláing élefants!'},
      {en:"What's the total quantity? A million, I think!", es:'¿Cuál es la cantidad total? ¡Un millón, creo!', pron:'uáts de tóutal cuántiti? a mílion, ái zink!'},
      {en:"Send the invoice to the moon — that's where this order is going!", es:'¡Enviá la factura a la luna — ahí es donde va este pedido!', pron:'send de ínvois tu de múun — dats uér dis órder is góing!'}
    ],
    jingle:[
      {en:'One, two, three, how many boxes?', es:'Uno, dos, tres, ¿cuántas cajas?', pron:'uán, tú, zríi, jáu méni báxes?'},
      {en:'Four, five, six, a dozen of roses!', es:'Cuatro, cinco, seis, ¡una docena de rosas!', pron:'fóar, fáiv, six, a dázen of róuses!'},
      {en:"Seven, eight, nine, ten, what's the total?", es:'Siete, ocho, nueve, diez, ¿cuál es el total?', pron:'séven, éit, náin, ten, uáts de tóutal?'},
      {en:"Order and invoice, that's my quota!", es:'Pedido y factura, ¡esa es mi cuota!', pron:'órder and ínvois, dats mái cuóuta!'}
    ]
  },
{
    day:6, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'Días de la semana / Agendar una reunión',
    words:[
      {en:'Monday', es:'lunes', pron:'mándei', emoji:'📅'},
      {en:'Tuesday', es:'martes', pron:'tiúsdei', emoji:'📅'},
      {en:'Wednesday', es:'miércoles', pron:'uénsdei', emoji:'📅'},
      {en:'Thursday', es:'jueves', pron:'zérsdei', emoji:'📅'},
      {en:'Friday', es:'viernes', pron:'fráidei', emoji:'📅'},
      {en:'Saturday', es:'sábado', pron:'sáterdei', emoji:'📅'},
      {en:'Sunday', es:'domingo', pron:'sándei', emoji:'📅'},
      {en:'week', es:'semana', pron:'uíik', emoji:'🗓️'},
      {en:'schedule', es:'agendar', pron:'squéyul', emoji:'📌'},
      {en:'available', es:'disponible', pron:'avéilabol', emoji:'✅'},
      {en:'busy', es:'ocupado', pron:'bísi', emoji:'⛔'},
      {en:'calendar', es:'calendario', pron:'cálendar', emoji:'📆'},
      {en:'appointment', es:'cita', pron:'apóintment', emoji:'🕑'},
      {en:'confirm', es:'confirmar', pron:'conférm', emoji:'✔️'},
      {en:'reschedule', es:'reprogramar', pron:'risquéyul', emoji:'🔄'},
      {en:'on time', es:'a tiempo', pron:'on táim', emoji:'⏱️'},
      {en:'deadline', es:'fecha límite', pron:'dédlain', emoji:'⏳'}
    ],
    story:[
      {en:"Are you available on Monday... in the year 3000?", es:'¿Estás disponible el lunes... en el año 3000?', pron:'ar iú avéilabol on mándei... in de íar zríi záusand?'},
      {en:"I'm busy this whole week, traveling through Tuesday, Wednesday, and Thursday at the same time!", es:'¡Estoy ocupado toda esta semana, viajando por martes, miércoles y jueves al mismo tiempo!', pron:'áim bísi dis jóul uíik, trávaling zrú tiúsdei, uénsdei, and zérsdei at de séim táim!'},
      {en:"Let's schedule an appointment and confirm it on a calendar made of stars.", es:'Agendemos una cita y confirmémosla en un calendario hecho de estrellas.', pron:'lets squéyul an apóintment and conférm it on a cálendar méid of stars.'},
      {en:'If dinosaurs need to reschedule, that is fine too!', es:'¡Si los dinosaurios necesitan reprogramar, también está bien!', pron:'if dáinosors níid tu risquéyul, dat is fáin tú!'},
      {en:"The deadline is Friday... or was it a thousand years ago? Let's be on time anyway!", es:'La fecha límite es el viernes... ¿o fue hace mil años? ¡Seamos puntuales de todos modos!', pron:'de dédlain is fráidei... or uás it a záusand íars agóu? lets bi on táim éniuei!'}
    ],
    jingle:[
      {en:'Monday, Tuesday, are you free?', es:'Lunes, martes, ¿estás libre?', pron:'mándei, tiúsdei, ar iú fríi?'},
      {en:'Wednesday, Thursday, wait for me!', es:'Miércoles, jueves, ¡esperame!', pron:'uénsdei, zérsdei, uéit for mi!'},
      {en:'Friday, Saturday, Sunday too!', es:'Viernes, sábado, ¡domingo también!', pron:'fráidei, sáterdei, sándei tú!'},
      {en:"Confirm the deadline, on time, it's true!", es:'Confirmá la fecha límite, ¡a tiempo, es verdad!', pron:'conférm de dédlain, on táim, its trú!'}
    ]
  },
{
    day:7, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'Repaso liviano de la semana 1',
    words:[
      {en:'how are you doing', es:'cómo te va', pron:'jáu ar iú dúing', emoji:'🙂'},
      {en:"I'm fine, thanks", es:'estoy bien, gracias', pron:'áim fáin zenks', emoji:'😊'},
      {en:'and you', es:'y vos', pron:'and iú', emoji:'❓'},
      {en:'have a good day', es:'que tengas buen día', pron:'jav a gud déi', emoji:'☀️'},
      {en:'take care', es:'cuídate', pron:'téik quér', emoji:'🤗'},
      {en:'no problem', es:'no hay problema', pron:'nóu práblem', emoji:'👌'},
      {en:'of course', es:'por supuesto', pron:'of córs', emoji:'💯'},
      {en:'sure', es:'claro', pron:'shúr', emoji:'👍'},
      {en:"let's go", es:'vamos', pron:'lets góu', emoji:'🚶'},
      {en:'right now', es:'ahora mismo', pron:'ráit náu', emoji:'⚡'},
      {en:'one moment', es:'un momento', pron:'uán móument', emoji:'✋'},
      {en:'see you Monday', es:'nos vemos el lunes', pron:'síi iú mándei', emoji:'👋'}
    ],
    story:[
      {en:'How are you doing today, giant blue elephant?', es:'¿Cómo te va hoy, elefante azul gigante?', pron:'jáu ar iú dúing tudéi, yáiant blú élefant?'},
      {en:"I'm fine, thanks. And you, purple monkey?", es:'Estoy bien, gracias. ¿Y vos, mono morado?', pron:'áim fáin, zenks. and iú, pérpol mánki?'},
      {en:"Of course! No problem, let's fly to the moon right now!", es:'¡Por supuesto! No hay problema, ¡volemos a la luna ahora mismo!', pron:'of córs! nóu práblem, lets flái tu de múun ráit náu!'},
      {en:'One moment — I forgot my magic hat!', es:'¡Un momento — me olvidé mi sombrero mágico!', pron:'uán móument — ái forgát mái máyic jat!'},
      {en:'Have a good day, take care, and see you Monday on Mars!', es:'¡Que tengas buen día, cuidate, y nos vemos el lunes en Marte!', pron:'jav a gud déi, téik quér, and síi iú mándei on Mars!'}
    ],
    jingle:[
      {en:"How are you doing? I'm fine, thanks!", es:'¿Cómo te va? ¡Estoy bien, gracias!', pron:'jáu ar iú dúing? áim fáin, zenks!'},
      {en:"No problem, of course, let's go!", es:'No hay problema, por supuesto, ¡vamos!', pron:'nóu práblem, of córs, lets góu!'},
      {en:"One moment, right now, don't be slow!", es:'Un momento, ahora mismo, ¡no seas lento!', pron:'uán móument, ráit náu, dont bi slóu!'},
      {en:'Take care, take care, see you Monday, oh!', es:'Cuidate, cuidate, ¡nos vemos el lunes, oh!', pron:'téik quér, téik quér, síi iú mándei, óu!'}
    ]
  },
{
    day:8, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'Cómo estás (variantes) / Preguntar cómo va el negocio',
    words:[
      {en:"I'm great", es:'estoy genial', pron:'áim gréit', emoji:'😄'},
      {en:'so-so', es:'más o menos', pron:'sóu sóu', emoji:'😐'},
      {en:"how's business", es:'cómo va el negocio', pron:'jáus bísnes', emoji:'📈'},
      {en:'everything ok', es:'todo bien', pron:'évrizin oquéi', emoji:'✅'},
      {en:'glad to hear that', es:'qué bueno escuchar eso', pron:'glad tu jíar dat', emoji:'😊'},
      {en:'I understand', es:'entiendo', pron:'ái anderstánd', emoji:'🧠'},
      {en:'sounds good', es:'suena bien', pron:'sáunds gud', emoji:'👍'},
      {en:'perfect', es:'perfecto', pron:'pérfect', emoji:'💯'},
      {en:'exactly', es:'exactamente', pron:'exáctli', emoji:'🎯'},
      {en:'let me check', es:'déjame revisar', pron:'let mi chek', emoji:'🔍'},
      {en:'right away', es:'enseguida', pron:'ráit auéi', emoji:'⚡'},
      {en:'as always', es:'como siempre', pron:'as ólueis', emoji:'🔁'}
    ],
    story:[
      {en:"How's business today, Robot King?", es:'¿Cómo va el negocio hoy, Rey Robot?', pron:'jáus bísnes tudéi, róubot kíng?'},
      {en:"I'm great, thanks! We sold ten thousand rockets!", es:'¡Estoy genial, gracias! ¡Vendimos diez mil cohetes!', pron:'áim gréit, zenks! uí sóuld ten záusand ráckets!'},
      {en:'Is everything ok in the volcano factory?', es:'¿Todo bien en la fábrica del volcán?', pron:'is évrizin oquéi in de valkéinou fáctori?'},
      {en:'So-so, but I understand — volcanoes are unpredictable!', es:'Más o menos, ¡pero entiendo — los volcanes son impredecibles!', pron:'sóu sóu, bat ái anderstánd — valkéinous ar anpridíctabol!'},
      {en:'Glad to hear that. Sounds good!', es:'¡Qué bueno escuchar eso. Suena bien!', pron:'glad tu jíar dat. sáunds gud!'},
      {en:'Exactly! Let me check right away, as always, my metal friend.', es:'¡Exactamente! Déjame revisar enseguida, como siempre, mi amigo de metal.', pron:'exáctli! let mi chek ráit auéi, as ólueis, mái métal frend.'}
    ],
    jingle:[
      {en:"I'm great, I'm great, how's business today?", es:'Estoy genial, estoy genial, ¿cómo va el negocio hoy?', pron:'áim gréit, áim gréit, jáus bísnes tudéi?'},
      {en:'Sounds good, perfect, exactly, hey!', es:'Suena bien, perfecto, exactamente, ¡ey!', pron:'sáunds gud, pérfect, exáctli, jéi!'},
      {en:'Let me check right away, as always I say!', es:'Déjame revisar enseguida, ¡como siempre digo!', pron:'let mi chek ráit auéi, as ólueis ái séi!'},
      {en:"Glad to hear that, everything's ok!", es:'Qué bueno escuchar eso, ¡todo está bien!', pron:'glad tu jíar dat, évrizins oquéi!'}
    ]
  },
{
    day:9, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'Despedidas variadas / Cerrar una llamada de negocios',
    words:[
      {en:'see you soon', es:'nos vemos pronto', pron:'síi iú súun', emoji:'👋'},
      {en:'see you next week', es:'nos vemos la próxima semana', pron:'síi iú next uíik', emoji:'📅'},
      {en:'talk to you later', es:'hablamos después', pron:'tók tu iú léiter', emoji:'💬'},
      {en:'thanks for calling', es:'gracias por llamar', pron:'zenks for cóling', emoji:'📞'},
      {en:'thanks for your time', es:'gracias por tu tiempo', pron:'zenks for iór táim', emoji:'🙏'},
      {en:'it was a pleasure', es:'fue un placer', pron:'it uas a pléyer', emoji:'😊'},
      {en:"let's stay in touch", es:'mantengamos contacto', pron:'lets stéi in tach', emoji:'🤝'},
      {en:"I'll email you", es:'te voy a escribir un correo', pron:'áil íimeil iú', emoji:'📧'},
      {en:"I'll call you back", es:'te devuelvo la llamada', pron:'áil col iú bak', emoji:'📲'},
      {en:'best regards', es:'saludos cordiales', pron:'best rigárds', emoji:'✉️'},
      {en:'looking forward to it', es:'con muchas ganas de eso', pron:'lúking fóruard tu it', emoji:'🤞'},
      {en:'until next time', es:'hasta la próxima', pron:'antíl next táim', emoji:'🔜'}
    ],
    story:[
      {en:'Thanks for calling through the crystal ball, and thanks for your time, great wizard!', es:'¡Gracias por llamar a través de la bola de cristal, y gracias por tu tiempo, gran mago!', pron:'zenks for cóling zrú de crístal bol, and zenks for iór táim, gréit uísard!'},
      {en:"It was a pleasure. Let's stay in touch across a thousand dimensions.", es:'Fue un placer. Mantengamos el contacto a través de mil dimensiones.', pron:'it uas a pléyer. lets stéi in tach acrós a záusand diménshons.'},
      {en:"I'll email you a flying letter, and I'll call you back with a thunderstorm!", es:'¡Te voy a enviar una carta voladora, y te devuelvo la llamada con una tormenta de truenos!', pron:'áil íimeil iú a fláing léter, and áil col iú bak uid a zánderstorm!'},
      {en:'See you soon, or see you next week, whichever comes first through time!', es:'¡Nos vemos pronto, o nos vemos la próxima semana, lo que llegue primero a través del tiempo!', pron:'síi iú súun, or síi iú next uíik, uíchever cams ferst zrú táim!'},
      {en:'Best regards, looking forward to it. Until next time, brave traveler!', es:'Saludos cordiales, con muchas ganas de eso. ¡Hasta la próxima, valiente viajero!', pron:'best rigárds, lúking fóruard tu it. antíl next táim, bréiv trávaler!'}
    ],
    jingle:[
      {en:'See you soon, see you next week!', es:'Nos vemos pronto, ¡nos vemos la próxima semana!', pron:'síi iú súun, síi iú next uíik!'},
      {en:"Thanks for calling, it's you I seek!", es:'Gracias por llamar, ¡a vos busco!', pron:'zenks for cóling, its iú ái síik!'},
      {en:"I'll email you, I'll call you back!", es:'Te escribo un correo, ¡te devuelvo la llamada!', pron:'áil íimeil iú, áil col iú bak!'},
      {en:'Best regards, until next time, on track!', es:'Saludos, ¡hasta la próxima, en marcha!', pron:'best rigárds, antíl next táim, on trak!'}
    ]
  },
{
    day:10, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'Preguntas básicas / Preguntas de un cliente sobre el pedido',
    words:[
      {en:'what', es:'qué', pron:'uát', emoji:'❓'},
      {en:'who', es:'quién', pron:'jú', emoji:'❓'},
      {en:'where', es:'dónde', pron:'uér', emoji:'❓'},
      {en:'when', es:'cuándo', pron:'uén', emoji:'❓'},
      {en:'why', es:'por qué', pron:'uái', emoji:'❓'},
      {en:'how', es:'cómo', pron:'jáu', emoji:'❓'},
      {en:'which one', es:'cuál', pron:'uích uán', emoji:'❓'},
      {en:'is it ready', es:'ya está listo', pron:'is it rédi', emoji:'📦'},
      {en:'when will it arrive', es:'cuándo llega', pron:'uén uíl it aráiv', emoji:'🚚'},
      {en:'do you have stock', es:'tienen stock', pron:'du iú jav stak', emoji:'📦'},
      {en:"what's the price", es:'cuál es el precio', pron:'uáts de práis', emoji:'💲'},
      {en:'can you help me', es:'me podés ayudar', pron:'can iú jelp mi', emoji:'🙋'},
      {en:'I have a question', es:'tengo una pregunta', pron:'ái jav a cuéstion', emoji:'❓'},
      {en:'can you explain', es:'podés explicar', pron:'can iú expléin', emoji:'🗣️'}
    ],
    story:[
      {en:'I have a question, dragon: what, who, where, when, why, and how did the treasure disappear?', es:'Tengo una pregunta, dragón: ¿qué, quién, dónde, cuándo, por qué y cómo desapareció el tesoro?', pron:'ái jav a cuéstion, drágon: uát, jú, uér, uén, uái, and jáu did de tréshur disapír?'},
      {en:'Which one is ready — the gold coins or the diamond eggs? And when will the pirates arrive?', es:'¿Cuál está listo — las monedas de oro o los huevos de diamante? ¿Y cuándo llegan los piratas?', pron:'uích uán is rédi — de góuld cóins or de dáiamond egs? and uén uíl de páirats aráiv?'},
      {en:"Do you have stock of magic beans, and what's the price for a thousand?", es:'¿Tenés stock de frijoles mágicos, y cuál es el precio por mil?', pron:'du iú jav stak of máyic bíins, and uáts de práis for a záusand?'},
      {en:'Can you help me, robot detective? Can you explain this mystery?', es:'¿Me podés ayudar, robot detective? ¿Podés explicar este misterio?', pron:'can iú jelp mi, róubot ditéctiv? can iú expléin dis místeri?'}
    ],
    jingle:[
      {en:'What, who, where, when, why, how?', es:'¿Qué, quién, dónde, cuándo, por qué, cómo?', pron:'uát, jú, uér, uén, uái, jáu?'},
      {en:'Which one is ready right now?', es:'¿Cuál está listo ahora mismo?', pron:'uích uán is rédi ráit náu?'},
      {en:"What's the price, do you have stock?", es:'¿Cuál es el precio, tienen stock?', pron:'uáts de práis, du iú jav stak?'},
      {en:'Can you help, explain, unlock?', es:'¿Podés ayudar, explicar, desbloquear?', pron:'can iú jelp, expléin, anlák?'}
    ]
  },
{
    day:11, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'Colores y objetos / Describir un producto',
    words:[
      {en:'red', es:'rojo', pron:'red', emoji:'🔴'},
      {en:'blue', es:'azul', pron:'blú', emoji:'🔵'},
      {en:'green', es:'verde', pron:'gríin', emoji:'🟢'},
      {en:'yellow', es:'amarillo', pron:'iélou', emoji:'🟡'},
      {en:'black', es:'negro', pron:'blak', emoji:'⚫'},
      {en:'white', es:'blanco', pron:'uáit', emoji:'⚪'},
      {en:'big', es:'grande', pron:'big', emoji:'📏'},
      {en:'small', es:'pequeño', pron:'smol', emoji:'🤏'},
      {en:'new', es:'nuevo', pron:'niú', emoji:'✨'},
      {en:'strong', es:'resistente', pron:'strong', emoji:'💪'},
      {en:'heavy', es:'pesado', pron:'jévi', emoji:'⚖️'},
      {en:'size', es:'tamaño', pron:'sáis', emoji:'📐'},
      {en:'material', es:'material', pron:'matírial', emoji:'🧱'},
      {en:'plastic', es:'plástico', pron:'plástic', emoji:'♻️'},
      {en:'metal', es:'metal', pron:'métal', emoji:'🔩'},
      {en:'durable', es:'duradero', pron:'diúrabol', emoji:'🛡️'}
    ],
    story:[
      {en:'Do you want your castle in red, blue, green, or yellow, dragon?', es:'¿Querés tu castillo en rojo, azul, verde, o amarillo, dragón?', pron:'du iú uánt iór cásol in red, blú, gríin, or iélou, drágon?'},
      {en:'We also have black and white castles, in a size as big as a mountain or as small as a pebble!', es:'También tenemos castillos negros y blancos, ¡en un tamaño tan grande como una montaña o tan pequeño como una piedrita!', pron:'uí ólsou jav blak and uáit cásols, in a sáis as big as a máuntain or as smol as a pébol!'},
      {en:'This new castle material is stronger than a thousand elephants and it will last forever!', es:'¡Este nuevo material de castillo es más fuerte que mil elefantes y va a durar para siempre!', pron:'dis niú cásol matírial is strónger dan a záusand élefants and it uíl last foréver!'},
      {en:"It's incredibly heavy because it's made of solid metal, not paper-thin plastic!", es:'Es increíblemente pesado porque está hecho de metal sólido, ¡no de plástico delgado como el papel!', pron:'its incrédibli jévi bicós its méid of sálid métal, nat péiper zin plástic!'}
    ],
    jingle:[
      {en:'Red and blue, green and yellow!', es:'Rojo y azul, ¡verde y amarillo!', pron:'red and blú, gríin and iélou!'},
      {en:'Black and white, big and mellow!', es:'Negro y blanco, grande y suave.', pron:'blak and uáit, big and mélou!'},
      {en:'New and strong, heavy in size!', es:'Nuevo y fuerte, ¡pesado en tamaño!', pron:'niú and strong, jévi in sáis!'},
      {en:'Metal, plastic, durable, wise!', es:'Metal, plástico, ¡duradero y sabio!', pron:'métal, plástic, diúrabol, uáis!'}
    ]
  },
{
    day:12, unit:1, unitTitle:'Unidad 1 · Semanas 1-2', theme:'Repaso y cierre de la Unidad 1',
    words:[
      {en:"let's begin", es:'empecemos', pron:'lets bigín', emoji:'🚀'},
      {en:"let's finish", es:'terminemos', pron:'lets fínish', emoji:'🏁'},
      {en:'well done', es:'bien hecho', pron:'uél dan', emoji:'👏'},
      {en:'great job', es:'muy buen trabajo', pron:'gréit yab', emoji:'🌟'},
      {en:'you did it', es:'lo lograste', pron:'iú did it', emoji:'🎉'},
      {en:'practice makes perfect', es:'la práctica hace al maestro', pron:'práctis méiks pérfect', emoji:'📈'},
      {en:'keep going', es:'seguí así', pron:'kíip góing', emoji:'💪'},
      {en:'almost done', es:'casi terminamos', pron:'ólmoust dan', emoji:'⏳'},
      {en:'congratulations', es:'felicitaciones', pron:'congrachuléishons', emoji:'🎊'},
      {en:'next unit', es:'próxima unidad', pron:'next iúnit', emoji:'➡️'}
    ],
    story:[
      {en:"Let's begin the final spell! And now, let's finish this magical quest!", es:'¡Empecemos el hechizo final! Y ahora, ¡terminemos esta misión mágica!', pron:'lets bigín de fáinal spel! and náu, lets fínish dis máyical cuést!'},
      {en:'Well done, brave hero, great job — you defeated the vocabulary dragon and you did it!', es:'¡Bien hecho, valiente héroe, muy buen trabajo — venciste al dragón del vocabulario y lo lograste!', pron:'uél dan, bréiv jírou, gréit yab — iú difíited de vocábiuleri drágon and iú did it!'},
      {en:"Practice makes perfect, so keep going on your legendary journey!", es:'La práctica hace al maestro, ¡así que seguí en tu viaje legendario!', pron:'práctis méiks pérfect, sóu kíip góing on iór léyendari yérni!'},
      {en:"We're almost done with this level. Congratulations on finishing Unit 1, Champion!", es:'Ya casi terminamos este nivel. ¡Felicitaciones por terminar la Unidad 1, campeón!', pron:'uír ólmoust dan uid dis lével. congrachuléishons on fínishing iúnit uán, chámpion!'},
      {en:'See you in the next unit, where even bigger adventures await!', es:'¡Nos vemos en la próxima unidad, donde te esperan aventuras aún más grandes!', pron:'síi iú in de next iúnit, uér íven bíguer advénchurs auéit!'}
    ],
    jingle:[
      {en:"Let's begin, let's finish strong!", es:'Empecemos, ¡terminemos fuerte!', pron:'lets bigín, lets fínish strong!'},
      {en:'Well done, great job, sing along!', es:'Bien hecho, muy buen trabajo, ¡cantá conmigo!', pron:'uél dan, gréit yab, sing alóng!'},
      {en:'Practice makes perfect, keep on going!', es:'La práctica hace al maestro, ¡seguí adelante!', pron:'práctis méiks pérfect, kíip on góing!'},
      {en:"Congratulations, next unit's showing!", es:'Felicitaciones, ¡la próxima unidad está por venir!', pron:'congrachuléishons, next iúnits shóuing!'}
    ]
  }
];
