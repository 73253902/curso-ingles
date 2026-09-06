// Unidad 3 del curso — Días 25 a 36
// Este archivo se puede editar o reemplazar solo, sin tocar el resto del curso.
const curriculumUnidad3 = [
{
    day:25, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'Números 11-20 / Precios y presupuestos',
    structures:[
      {id:'S024', pattern:"It costs + [PRICE]", examples:[
        {en:'It costs twenty dollars.', es:'Cuesta veinte dólares.', pron:'it casts tuénti dálars.'},
        {en:'It costs fifteen pesos.', es:'Cuesta quince pesos.', pron:'it casts fiftíin pésos.'},
        {en:'It costs approximately fifty dollars.', es:'Cuesta aproximadamente cincuenta dólares.', pron:'it casts apráximatli fífti dálars.'},
        {en:'It costs a lot.', es:'Cuesta mucho.', pron:'it casts a lat.'}
      ], function:'decir el precio de algo', stage:1,
        transformations:{
          negative:{en:"It doesn't cost twenty dollars.", es:'No cuesta veinte dólares.'},
          question:{en:'Does it cost twenty dollars?', es:'¿Cuesta veinte dólares?'},
          yesAnswer:{en:'Yes, it does.', es:'Sí, cuesta eso.'},
          noAnswer:{en:"No, it doesn't.", es:'No, no cuesta eso.'},
          future:{en:'It will cost twenty dollars.', es:'Va a costar veinte dólares.'}
        }}
    ],
    words:[
      {en:'eleven', es:'once', pron:'iléven', emoji:'1️⃣'},
      {en:'twelve', es:'doce', pron:'tuélv', emoji:'1️⃣'},
      {en:'thirteen', es:'trece', pron:'zértiin', emoji:'1️⃣'},
      {en:'fourteen', es:'catorce', pron:'fórtiin', emoji:'1️⃣'},
      {en:'fifteen', es:'quince', pron:'fíftiin', emoji:'1️⃣'},
      {en:'sixteen', es:'dieciséis', pron:'síxtiin', emoji:'1️⃣'},
      {en:'seventeen', es:'diecisiete', pron:'séventiin', emoji:'1️⃣'},
      {en:'eighteen', es:'dieciocho', pron:'éitiin', emoji:'1️⃣'},
      {en:'nineteen', es:'diecinueve', pron:'náintiin', emoji:'1️⃣'},
      {en:'twenty', es:'veinte', pron:'tuénti', emoji:'2️⃣'},
      {en:'budget', es:'presupuesto', pron:'báchet', emoji:'💰'},
      {en:'to cost', es:'costar', pron:'tu cost', emoji:'💲'},
      {en:'expensive', es:'caro', pron:'expénsiv', emoji:'💸'},
      {en:'cheap', es:'barato', pron:'chíip', emoji:'🪙'},
      {en:'approximately', es:'aproximadamente', pron:'apráximetli', emoji:'≈'},
      {en:'final price', es:'precio final', pron:'fáinal práis', emoji:'🏷️'}
    ],
    story:[
      {en:'The dragon market has eleven floating shops, twelve flying carts, and thirteen giant coin piles!', es:'El mercado del dragón tiene once tiendas flotantes, doce carritos voladores, ¡y trece pilas gigantes de monedas!', pron:'de drágon márket jas iléven flóuting shaps, tuélv fláing carts, and zértiin yáiant cóin páils!'},
      {en:'Our budget today is fourteen mountains of gold, fifteen rivers of silver, and sixteen, seventeen, eighteen, nineteen, twenty treasure chests!', es:'Nuestro presupuesto de hoy es catorce montañas de oro, quince ríos de plata, ¡y dieciséis, diecisiete, dieciocho, diecinueve, veinte cofres del tesoro!', pron:'áur báchet tudéi is fórtiin máuntains of góuld, fíftiin rívers of sílver, and síxtiin, séventiin, éitiin, náintiin, tuénti tréshur chests!'},
      {en:'How much does a flying castle cost? It is expensive, but that tiny dragon egg is cheap!', es:'¿Cuánto cuesta un castillo volador? Es caro, ¡pero ese huevito de dragón es barato!', pron:'jáu mach das a fláing cásol cost? it is expénsiv, bat dat táini drágon eg is chíip!'},
      {en:'Approximately, the final price is one million stars.', es:'Aproximadamente, el precio final es un millón de estrellas.', pron:'apráximetli, de fáinal práis is uán mílion stars.'}
    ],
    jingle:[
      {en:'Eleven, twelve, thirteen too!', es:'Once, doce, ¡trece también!', pron:'iléven, tuélv, zértiin tú!'},
      {en:'Fourteen, fifteen, sixteen, who?', es:'Catorce, quince, dieciséis, ¿quién?', pron:'fórtiin, fíftiin, síxtiin, jú!'},
      {en:'Budget, cost, expensive, cheap!', es:'Presupuesto, costar, caro, ¡barato!', pron:'báchet, cost, expénsiv, chíip!'},
      {en:'Final price, approximately steep!', es:'Precio final, aproximadamente alto.', pron:'fáinal práis, apráximetli stíip!'}
    ]
  },
{
    day:26, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'Números redondos / Cotizaciones y totales',
    structures:[
      {id:'S107', pattern:"The grand total adds up to + [NUMBER]", examples:[
        {en:'The grand total adds up to ninety dollars.', es:'El total general suma noventa dólares.', pron:'de grand tóutal ads ap tu náinti dálars.'},
        {en:'The grand total adds up to one hundred units.', es:'El total general suma cien unidades.', pron:'de grand tóutal ads ap tu uán jándred iúnits.'},
        {en:'Check the subtotal, the tax, and the shipping cost before the grand total.', es:'Revisá el subtotal, el impuesto, y el costo de envío antes del total general.', pron:'chek de sábtoutal, de tax, and de shíping cost bifór de grand tóutal.'},
        {en:"The grand total doesn't add up to a thousand yet.", es:'El total general todavía no suma mil.', pron:"de grand tóutal dásnt ad ap tu a záusand iét."}
      ], function:'hablar de totales y cotizaciones con números redondos', stage:1,
        transformations:{
          negative:{en:"It doesn't add up to that.", es:'No suma eso.'},
          question:{en:'Does it add up to the grand total?', es:'¿Suma el total general?'},
          yesAnswer:{en:'Yes, it does.', es:'Sí.'},
          noAnswer:{en:"No, it doesn't.", es:'No.'}
        }}
    ],
    words:[
      {en:'thirty', es:'treinta', pron:'zérti', emoji:'3️⃣'},
      {en:'forty', es:'cuarenta', pron:'fórti', emoji:'4️⃣'},
      {en:'fifty', es:'cincuenta', pron:'fífti', emoji:'5️⃣'},
      {en:'sixty', es:'sesenta', pron:'síxti', emoji:'6️⃣'},
      {en:'seventy', es:'setenta', pron:'séventi', emoji:'7️⃣'},
      {en:'eighty', es:'ochenta', pron:'éiti', emoji:'8️⃣'},
      {en:'ninety', es:'noventa', pron:'náinti', emoji:'9️⃣'},
      {en:'hundred', es:'cien', pron:'jándred', emoji:'💯'},
      {en:'thousand', es:'mil', pron:'záusand', emoji:'🔢'},
      {en:'quote', es:'cotización', pron:'cuóut', emoji:'📄'},
      {en:'subtotal', es:'subtotal', pron:'sabtóutal', emoji:'➕'},
      {en:'tax', es:'impuesto', pron:'tax', emoji:'🧾'},
      {en:'shipping cost', es:'costo de envío', pron:'shíping cost', emoji:'🚚'},
      {en:'grand total', es:'total general', pron:'grand tóutal', emoji:'💰'},
      {en:'to add up', es:'sumar', pron:'tu ad ap', emoji:'➕'}
    ],
    story:[
      {en:'There are thirty dragons, forty wizards, fifty robots, sixty giants, seventy fairies, eighty ghosts, ninety aliens, and a hundred talking cats at the market!', es:'¡Hay treinta dragones, cuarenta magos, cincuenta robots, sesenta gigantes, setenta hadas, ochenta fantasmas, noventa alienígenas, y cien gatos parlantes en el mercado!', pron:'dér ar zérti drágons, fórti uísards, fífti róubots, síxti yáiants, séventi féris, éiti góusts, náinti éiliens, and a jándred tóking cats at de márket!'},
      {en:'A thousand golden coins is our quote for the flying castle.', es:'Mil monedas de oro es nuestra cotización por el castillo volador.', pron:'a záusand góulden cóins is áur cuóut for de fláing cásol.'},
      {en:'The subtotal is huge, plus a magic tax, plus the shipping cost by dragon.', es:'El subtotal es enorme, más un impuesto mágico, más el costo de envío en dragón.', pron:'de sabtóutal is jiúch, plas a máyic tax, plas de shíping cost bái drágon.'},
      {en:"Let's add it all up: the grand total is bigger than the moon!", es:'Sumemos todo: ¡el total general es más grande que la luna!', pron:'lets ad it ol ap: de grand tóutal is bíguer dan de múun!'}
    ],
    jingle:[
      {en:'Thirty, forty, fifty, hundred!', es:'Treinta, cuarenta, cincuenta, ¡cien!', pron:'zérti, fórti, fífti, jándred!'},
      {en:"A thousand quotes, that's not blundered!", es:'Mil cotizaciones, ¡eso no está mal!', pron:'a záusand cuóuts, dats nat blándard!'},
      {en:'Subtotal, tax, and shipping cost!', es:'Subtotal, impuesto, y costo de envío.', pron:'sabtóutal, tax, and shíping cost!'},
      {en:"Add it up, grand total, don't get lost!", es:'Sumalo, total general, ¡no te pierdas!', pron:'ad it ap, grand tóutal, dont guét lost!'}
    ]
  },
{
    day:27, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'La hora / Horarios de entrega',
    structures:[
      {id:'S025', pattern:"It opens/closes at + [TIME]", examples:[
        {en:'It opens at nine.', es:'Abre a las nueve.', pron:'it óupens at náin.'},
        {en:'It closes at six.', es:'Cierra a las seis.', pron:'it clóuses at siks.'},
        {en:'It opens at half past eight.', es:'Abre a las ocho y media.', pron:'it óupens at jaf past éit.'},
        {en:'It closes at quarter to five.', es:'Cierra a las cinco menos cuarto.', pron:'it clóuses at cuárter tu fáiv.'}
      ], function:'decir horarios de apertura y cierre', stage:1,
        transformations:{
          negative:{en:"It doesn't open at nine.", es:'No abre a las nueve.'},
          question:{en:'Does it open at nine?', es:'¿Abre a las nueve?'},
          yesAnswer:{en:'Yes, it does.', es:'Sí, abre.'},
          noAnswer:{en:"No, it doesn't.", es:'No, no abre.'}
        }}
    ],
    words:[
      {en:"what time is it", es:'qué hora es', pron:'uát táim is it', emoji:'🕐'},
      {en:"o'clock", es:'en punto', pron:'oclák', emoji:'🕐'},
      {en:'half past', es:'y media', pron:'jaf past', emoji:'🕜'},
      {en:'quarter past', es:'y cuarto', pron:'cuárter past', emoji:'🕒'},
      {en:'quarter to', es:'menos cuarto', pron:'cuárter tu', emoji:'🕓'},
      {en:'hour', es:'hora', pron:'áuar', emoji:'⏰'},
      {en:'minute', es:'minuto', pron:'mínit', emoji:'⏱️'},
      {en:'delivery time', es:'horario de entrega', pron:'delíveri táim', emoji:'🚚'},
      {en:'business hours', es:'horario de atención', pron:'bísnes áuars', emoji:'🏢'},
      {en:'it opens', es:'abre', pron:'it óupens', emoji:'🔓'},
      {en:'it closes', es:'cierra', pron:'it clóuses', emoji:'🔒'},
      {en:'within 24 hours', es:'dentro de 24 horas', pron:'uidín tuenti fóar áuars', emoji:'⏳'},
      {en:'same day', es:'mismo día', pron:'séim déi', emoji:'📆'},
      {en:'next day', es:'día siguiente', pron:'next déi', emoji:'⏭️'}
    ],
    story:[
      {en:'What time is it in the Kingdom of Clouds? It is midnight o clock, forever!', es:'¿Qué hora es en el Reino de las Nubes? ¡Es medianoche en punto, para siempre!', pron:'uát táim is it in de kíngdom of cláuds? it is mídnait oclák, foréver!'},
      {en:'At half past the dragon hour, or a quarter past the star hour, magic happens.', es:'A la media hora del dragón, o al cuarto de la hora de las estrellas, pasa la magia.', pron:'at jaf past de drágon áuar, or a cuárter past de star áuar, máyic jápens.'},
      {en:'The delivery time is one blink, and our business hours never close!', es:'¡El horario de entrega es un parpadeo, y nuestro horario de atención nunca cierra!', pron:'de delíveri táim is uán blink, and áur bísnes áuars néver clóus!'},
      {en:'This shop opens when the volcano erupts and closes when the moon disappears.', es:'Esta tienda abre cuando el volcán hace erupción y cierra cuando la luna desaparece.', pron:'dis shap óupens uén de valkéinou irápts and clóuses uén de múun disapírs.'},
      {en:'Your dragon egg arrives within 24 hours — actually, the same day, or maybe the next day, through a wormhole!', es:'Tu huevo de dragón llega dentro de 24 horas — en realidad, el mismo día, ¡o tal vez al día siguiente, a través de un agujero de gusano!', pron:'iór drágon eg aráivs uidín tuenti fóar áuars — ákchuali, de séim déi, or méibi de next déi, zrú a uérmjoul!'}
    ],
    jingle:[
      {en:"What time is it? O'clock, my friend!", es:'¿Qué hora es? En punto, ¡mi amigo!', pron:"uát táim is it? oclák, mái frend!"},
      {en:'Half past, quarter past, till the end!', es:'Y media, y cuarto, ¡hasta el final!', pron:'jaf past, cuárter past, til de end!'},
      {en:'Business hours, it opens and closes!', es:'Horario de atención, abre y cierra.', pron:'bísnes áuars, it óupens and clóuses!'},
      {en:'Within 24 hours, same day, who knows?', es:'Dentro de 24 horas, mismo día, ¡quién sabe!', pron:'uidín tuenti fóar áuars, séim déi, jú nóus!'}
    ]
  },
{
    day:28, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'Más sobre la hora / Puntualidad en entregas',
    structures:[
      {id:'S108', pattern:"The estimated arrival is + [TIME]", examples:[
        {en:'The estimated arrival is in the morning.', es:'La llegada estimada es en la mañana.', pron:'de éstimeited aráival is in de mórning.'},
        {en:'The estimated arrival is in the afternoon, not the evening.', es:'La llegada estimada es en la tarde, no en la noche.', pron:'de éstimeited aráival is in de áfternúun, nat de ívning.'},
        {en:"It's a little delayed, but the tracking number shows it's coming as soon as possible.", es:'Está un poco demorado, pero el número de rastreo muestra que viene lo antes posible.', pron:"its a lítol diléid, bat de tráking námber shóus its cáming as súun as pásibol."},
        {en:"It's not early, and it's not late either — right around the estimated time.", es:'No es temprano, y tampoco es tarde — justo alrededor de la hora estimada.', pron:"its nat érli, and its nat léit áider — ráit aráund de éstimeited táim."}
      ], function:'hablar de horarios de entrega y puntualidad', stage:1,
        transformations:{
          negative:{en:"The estimated arrival is not delayed.", es:'La llegada estimada no está demorada.'},
          question:{en:'Is the estimated arrival delayed?', es:'¿Está demorada la llegada estimada?'},
          yesAnswer:{en:'Yes, a little.', es:'Sí, un poco.'},
          noAnswer:{en:"No, it's on time.", es:'No, está a tiempo.'}
        }}
    ],
    words:[
      {en:'in the morning', es:'de la mañana', pron:'in de mórning', emoji:'🌅'},
      {en:'in the afternoon', es:'de la tarde', pron:'in de afternúun', emoji:'🌇'},
      {en:'in the evening', es:'de la noche', pron:'in de ívning', emoji:'🌆'},
      {en:'at night', es:'a la noche', pron:'at náit', emoji:'🌙'},
      {en:'early', es:'temprano', pron:'érli', emoji:'⏰'},
      {en:'late', es:'tarde', pron:'léit', emoji:'⏰'},
      {en:'delayed', es:'retrasado', pron:'diléid', emoji:'⚠️'},
      {en:'around (time)', es:'alrededor de', pron:'aráund', emoji:'🕐'},
      {en:'before', es:'antes', pron:'bifór', emoji:'⏮️'},
      {en:'after', es:'después', pron:'áfter', emoji:'⏭️'},
      {en:'as soon as possible', es:'lo antes posible', pron:'as súun as pásibol', emoji:'⚡'},
      {en:'estimated arrival', es:'llegada estimada', pron:'éstimeited aráival', emoji:'🚛'},
      {en:'tracking number', es:'número de rastreo', pron:'tráking námber', emoji:'🔍'}
    ],
    story:[
      {en:'In the morning, dragons breathe fire; in the afternoon, they nap on clouds; in the evening, they fly to the stars; at night, they turn invisible.', es:'De mañana, los dragones respiran fuego; de tarde, duermen la siesta en las nubes; de noche, vuelan a las estrellas; a la noche, se vuelven invisibles.', pron:'in de mórning, drágons bríiz fáiar; in de afternúun, déi nap on cláuds; in de ívning, déi flái tu de stars; at náit, déi tern invísibol.'},
      {en:'The package is never early or late — it teleports, delayed only by a black hole!', es:'¡El paquete nunca llega temprano ni tarde — se teletransporta, retrasado solo por un agujero negro!', pron:'de páckich is néver érli or léit — it télipórts, diléid óunli bái a blak jóul!'},
      {en:'Around midnight, before the storm, and after the eclipse, it arrives, as soon as possible.', es:'Alrededor de medianoche, antes de la tormenta, y después del eclipse, llega, lo antes posible.', pron:'aráund mídnait, bifór de storm, and áfter de iclíps, it aráivs, as súun as pásibol.'},
      {en:'The estimated arrival and tracking number are written in stardust.', es:'La llegada estimada y el número de rastreo están escritos en polvo de estrellas.', pron:'de éstimeited aráival and tráking námber arríten in stárdast.'}
    ],
    jingle:[
      {en:'Morning, afternoon, evening, night!', es:'Mañana, tarde, noche, ¡anochecer!', pron:'mórning, afternúun, ívning, náit!'},
      {en:'Early or late, hold on tight!', es:'Temprano o tarde, ¡agarrate fuerte!', pron:'érli or léit, jóuld on táit!'},
      {en:'Before and after, around the bend!', es:'Antes y después, alrededor de la curva.', pron:'bifór and áfter, aráund de bend!'},
      {en:'As soon as possible, tracking to the end!', es:'Lo antes posible, ¡rastreo hasta el final!', pron:'as súun as pásibol, tráking tu de end!'}
    ]
  },
{
    day:29, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'Meses del año / Fechas de vencimiento',
    structures:[
      {id:'S026', pattern:"The due date is + [DATE]", examples:[
        {en:'The due date is January fifth.', es:'La fecha de vencimiento es el cinco de enero.', pron:'de diú déit is chánuari fifz.'},
        {en:'The due date is next Monday.', es:'La fecha de vencimiento es el próximo lunes.', pron:'de diú déit is next mándei.'},
        {en:'The due date is March first.', es:'La fecha de vencimiento es el primero de marzo.', pron:'de diú déit is march ferst.'},
        {en:'The due date is overdue.', es:'La fecha de vencimiento ya pasó.', pron:'de diú déit is óuverdiú.'}
      ], function:'decir cuándo vence un pago', stage:1,
        transformations:{
          negative:{en:'The due date is not January fifth.', es:'La fecha de vencimiento no es el cinco de enero.'},
          question:{en:'Is the due date January fifth?', es:'¿La fecha de vencimiento es el cinco de enero?'},
          yesAnswer:{en:'Yes, it is.', es:'Sí, lo es.'},
          noAnswer:{en:"No, it isn't.", es:'No, no lo es.'}
        }}
    ],
    words:[
      {en:'January', es:'enero', pron:'yánueri', emoji:'📅'},
      {en:'February', es:'febrero', pron:'fébrueri', emoji:'📅'},
      {en:'March', es:'marzo', pron:'march', emoji:'📅'},
      {en:'April', es:'abril', pron:'éiprol', emoji:'📅'},
      {en:'May', es:'mayo', pron:'méi', emoji:'📅'},
      {en:'June', es:'junio', pron:'yúun', emoji:'📅'},
      {en:'July', es:'julio', pron:'yulái', emoji:'📅'},
      {en:'August', es:'agosto', pron:'ógost', emoji:'📅'},
      {en:'September', es:'septiembre', pron:'septémber', emoji:'📅'},
      {en:'October', es:'octubre', pron:'octóuber', emoji:'📅'},
      {en:'November', es:'noviembre', pron:'novémber', emoji:'📅'},
      {en:'December', es:'diciembre', pron:'disémber', emoji:'📅'},
      {en:'due date', es:'fecha de vencimiento', pron:'diú déit', emoji:'⏳'},
      {en:'overdue', es:'vencido', pron:'overdiú', emoji:'⚠️'}
    ],
    story:[
      {en:'In January, dragons hatch; in February, wizards fly; in March, giants dance; in April, robots sing.', es:'En enero, nacen los dragones; en febrero, vuelan los magos; en marzo, bailan los gigantes; en abril, cantan los robots.', pron:'in yánueri, drágons jach; in fébrueri, uísards flái; in march, yáiants dans; in éiprol, róubots sing.'},
      {en:'In May, June, and July, the castle floats higher; in August, September, and October, it spins backward!', es:'En mayo, junio y julio, el castillo flota más alto; ¡en agosto, septiembre y octubre, gira al revés!', pron:'in méi, yúun, and yulái, de cásol flóuts jáier; in ógost, septémber, and octóuber, it spins bákuard!'},
      {en:'In November and December, the treasure\'s due date arrives — if it is overdue, the dragon gets very, very hungry!', es:'En noviembre y diciembre, llega la fecha de vencimiento del tesoro — ¡si está vencido, el dragón se pone muy, muy hambriento!', pron:'in novémber and disémber, de tréshurs diú déit aráivs — if it is overdiú, de drágon guéts véri, véri jángri!'}
    ],
    jingle:[
      {en:'January, February, March, and May!', es:'Enero, febrero, marzo, ¡y mayo!', pron:'yánueri, fébrueri, march, and méi!'},
      {en:'June, July, August, hip hooray!', es:'Junio, julio, agosto, ¡hurra!', pron:'yúun, yulái, ógost, jip juréi!'},
      {en:'September, October, November too!', es:'Septiembre, octubre, ¡noviembre también!', pron:'septémber, octóuber, novémber tú!'},
      {en:'December, due date, overdue!', es:'Diciembre, fecha de vencimiento, ¡vencido!', pron:'disémber, diú déit, overdiú!'}
    ]
  },
{
    day:30, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'Fechas / Plazos de pago',
    structures:[
      {id:'S109', pattern:"The payment terms are + [X]", examples:[
        {en:"What's today's date? The payment terms are net 30.", es:'¿Cuál es la fecha de hoy? Las condiciones de pago son treinta días netos.', pron:"uáts tudéis déit? de péiment terms ar net zérti."},
        {en:'The payment terms are an upfront payment, or an installment plan.', es:'Las condiciones de pago son un pago adelantado, o un plan de cuotas.', pron:'de péiment terms ar an apfránt péiment, or an instólment plan.'},
        {en:'The balance due must be paid in full by the end of the month.', es:'El saldo pendiente debe pagarse por completo para fin de mes.', pron:'de bálans diú mast bi péid in fúl bái de end of de manz.'},
        {en:"If you need more time, we can offer an extension or a grace period.", es:'Si necesitás más tiempo, podemos ofrecer una extensión o un período de gracia.', pron:"if iú níid mor táim, uí can áfer an exténshion or a gréis píriod."}
      ], function:'hablar de plazos y condiciones de pago', stage:1,
        transformations:{
          negative:{en:"The payment terms are not net 30.", es:'Las condiciones de pago no son treinta días netos.'},
          question:{en:'What are the payment terms?', es:'¿Cuáles son las condiciones de pago?'},
          yesAnswer:{en:'Net 30, yes.', es:'Treinta días netos, sí.'},
          noAnswer:{en:"No, it's different.", es:'No, es distinto.'}
        }}
    ],
    words:[
      {en:"what's the date", es:'qué fecha es', pron:'uáts de déit', emoji:'📅'},
      {en:"today's date", es:'la fecha de hoy', pron:'tudéis déit', emoji:'📆'},
      {en:'year', es:'año', pron:'íar', emoji:'🗓️'},
      {en:'month', es:'mes', pron:'manz', emoji:'📅'},
      {en:'payment terms', es:'condiciones de pago', pron:'péiment terms', emoji:'📃'},
      {en:'net 30', es:'a 30 días', pron:'net zérti', emoji:'📆'},
      {en:'upfront payment', es:'pago por adelantado', pron:'apfrónt péiment', emoji:'💵'},
      {en:'installment', es:'cuota', pron:'instólment', emoji:'🧾'},
      {en:'balance due', es:'saldo pendiente', pron:'bálans diú', emoji:'⚠️'},
      {en:'paid in full', es:'pagado en su totalidad', pron:'péid in ful', emoji:'✅'},
      {en:'extension', es:'prórroga', pron:'exténshon', emoji:'⏳'},
      {en:'grace period', es:'período de gracia', pron:'gréis píriod', emoji:'🕊️'}
    ],
    story:[
      {en:"What's the date today? Today's date is written in the stars, in the year of the flying dragons!", es:'¿Qué fecha es hoy? ¡La fecha de hoy está escrita en las estrellas, en el año de los dragones voladores!', pron:'uáts de déit tudéi? tudéis déit is ríten in de stars, in de íar of de fláing drágons!'},
      {en:'This magic month, and this legendary year, we agree on payment terms: net 30 dragon days.', es:'Este mes mágico, y este año legendario, acordamos condiciones de pago: a 30 días de dragón.', pron:'dis máyic manz, and dis léyendari íar, uí agríi on péiment terms: net zérti drágon déis.'},
      {en:'An upfront payment of one golden egg, then an installment every full moon, until the balance due is paid in full!', es:'¡Un pago por adelantado de un huevo dorado, luego una cuota en cada luna llena, hasta que el saldo pendiente esté pagado en su totalidad!', pron:'an apfrónt péiment of uán góulden eg, den an instólment évri ful múun, antíl de bálans diú is péid in ful!'},
      {en:'If the dragon needs more time, we grant an extension — a grace period of one thousand years!', es:'Si el dragón necesita más tiempo, le damos una prórroga — ¡un período de gracia de mil años!', pron:'if de drágon níids mor táim, uí grant an exténshon — a gréis píriod of uán záusand íars!'}
    ],
    jingle:[
      {en:"What's the date? Today's the day!", es:'¿Qué fecha es? ¡Hoy es el día!', pron:'uáts de déit? tudéis de déi!'},
      {en:'Year and month, come what may!', es:'Año y mes, ¡pase lo que pase!', pron:'íar and manz, cam uát méi!'},
      {en:'Payment terms, net 30, upfront!', es:'Condiciones de pago, a 30 días, ¡por adelantado!', pron:'péiment terms, net zérti, apfrónt!'},
      {en:"Balance due, paid in full, that's what I want!", es:'Saldo pendiente, pagado en su totalidad, ¡eso quiero!', pron:'bálans diú, péid in ful, dats uát ái uánt!'}
    ]
  },
{
    day:31, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'Repaso liviano de la semana 5',
    structures:[
      {id:'S110', pattern:"Let me see, + [X]", examples:[
        {en:'Let me see — hold on, give me a second to think.', es:'Déjame ver — esperá, dame un segundo para pensar.', pron:'let mi síi — jóuld on, guiv mi a sécond tu zink.'},
        {en:'That works for me — it makes sense.', es:'Eso me funciona — tiene sentido.', pron:'dat uorks for mi — it méiks sens.'},
        {en:"I agree with most of it, but I disagree with one part.", es:'Estoy de acuerdo con la mayoría, pero no estoy de acuerdo con una parte.', pron:"ái agríi uid móust of it, bat ái disagríi uid uán part."},
        {en:"Maybe, or probably — I'm not completely sure yet.", es:'Tal vez, o probablemente — todavía no estoy completamente seguro.', pron:"méibi, or prábabli — áim nat camplíitli shur iét."}
      ], function:'reforzar conectores de acuerdo y duda', stage:1,
        transformations:{
          negative:{en:"That doesn't work for me.", es:'Eso no me funciona.'},
          question:{en:'Does that work for you?', es:'¿Eso te funciona?'},
          yesAnswer:{en:'Yes, it works.', es:'Sí, funciona.'},
          noAnswer:{en:"No, it doesn't.", es:'No.'}
        }}
    ],
    words:[
      {en:'let me see', es:'déjame ver', pron:'let mi síi', emoji:'👀'},
      {en:'hold on', es:'esperá', pron:'jóuld on', emoji:'✋'},
      {en:'give me a second', es:'dame un segundo', pron:'guiv mi a sécond', emoji:'⏱️'},
      {en:'that works', es:'eso funciona', pron:'dat uorks', emoji:'✅'},
      {en:"that doesn't work", es:'eso no funciona', pron:'dat dásent uork', emoji:'❌'},
      {en:'makes sense', es:'tiene sentido', pron:'méiks sens', emoji:'💡'},
      {en:'I agree', es:'estoy de acuerdo', pron:'ái agríi', emoji:'🤝'},
      {en:'I disagree', es:'no estoy de acuerdo', pron:'ái disagríi', emoji:'🙅'},
      {en:'maybe', es:'tal vez', pron:'méibi', emoji:'🤷'},
      {en:'definitely', es:'definitivamente', pron:'défenitli', emoji:'💯'},
      {en:'probably', es:'probablemente', pron:'prábabli', emoji:'🤔'}
    ],
    story:[
      {en:'Let me see... hold on, give me a second, dragon!', es:'Déjame ver... esperá, dame un segundo, ¡dragón!', pron:'let mi síi... jóuld on, guiv mi a sécond, drágon!'},
      {en:'That works! But that does not work — it makes sense to a wizard, though.', es:'¡Eso funciona! Pero eso no funciona — aunque tiene sentido para un mago.', pron:'dat uorks! bat dat das nat uork — it méiks sens tu a uísard, dóu.'},
      {en:'I agree with the giant, but I disagree with the robot. Maybe, definitely, probably — who knows!', es:'Estoy de acuerdo con el gigante, pero no estoy de acuerdo con el robot. Tal vez, definitivamente, probablemente — ¡quién sabe!', pron:'ái agríi uid de yáiant, bat ái disagríi uid de róubot. méibi, défenitli, prábabli — jú nóus!'}
    ],
    jingle:[
      {en:'Let me see, hold on, give me a sec!', es:'Déjame ver, esperá, ¡dame un segundo!', pron:'let mi síi, jóuld on, guiv mi a sek!'},
      {en:"That works, or maybe that's a wreck!", es:'Eso funciona, o tal vez ¡es un desastre!', pron:'dat uorks, or méibi dats a rek!'},
      {en:'I agree, I disagree, makes sense to me!', es:'Estoy de acuerdo, no estoy de acuerdo, ¡tiene sentido para mí!', pron:'ái agríi, ái disagríi, méiks sens tu mi!'},
      {en:"Maybe, definitely, probably we'll see!", es:'Tal vez, definitivamente, probablemente ¡veremos!', pron:'méibi, défenitli, prábabli uíl síi!'}
    ]
  },
{
    day:32, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'Números ordinales / Ranking y prioridad',
    structures:[
      {id:'S027', pattern:"This/That is + [X] — These/Those are + [X]", examples:[
        {en:'This is the first option.', es:'Esta es la primera opción.', pron:'dis is de ferst ápshion.'},
        {en:'That is the second option.', es:'Esa es la segunda opción.', pron:'dat is de sécond ápshion.'},
        {en:'These are the top priorities.', es:'Estas son las prioridades principales.', pron:'díis ar de tap práiorities.'},
        {en:'Those are the last items.', es:'Esos son los últimos artículos.', pron:'dóus ar de last áitems.'}
      ], function:'señalar algo cerca o lejos, uno o varios', stage:1,
        transformations:{
          negative:{en:'This is not the first option.', es:'Esta no es la primera opción.'},
          question:{en:'Is this the first option?', es:'¿Esta es la primera opción?'},
          yesAnswer:{en:'Yes, it is.', es:'Sí, lo es.'},
          noAnswer:{en:"No, it isn't.", es:'No, no lo es.'}
        }}
    ],
    words:[
      {en:'first', es:'primero', pron:'ferst', emoji:'🥇'},
      {en:'second', es:'segundo', pron:'sécond', emoji:'🥈'},
      {en:'third', es:'tercero', pron:'zerd', emoji:'🥉'},
      {en:'fourth', es:'cuarto', pron:'forz', emoji:'4️⃣'},
      {en:'fifth', es:'quinto', pron:'fifz', emoji:'5️⃣'},
      {en:'next', es:'siguiente', pron:'next', emoji:'➡️'},
      {en:'last', es:'último', pron:'last', emoji:'🔚'},
      {en:'priority', es:'prioridad', pron:'praióriti', emoji:'⭐'},
      {en:'urgent', es:'urgente', pron:'érchent', emoji:'🚨'},
      {en:'top priority', es:'máxima prioridad', pron:'tap praióriti', emoji:'🔝'},
      {en:'ranking', es:'clasificación', pron:'ránking', emoji:'📊'},
      {en:'best seller', es:'más vendido', pron:'best séler', emoji:'🏆'},
      {en:'preferred supplier', es:'proveedor preferido', pron:'priférd sapláier', emoji:'🤝'},
      {en:'waiting list', es:'lista de espera', pron:'uéiting list', emoji:'📋'}
    ],
    story:[
      {en:'The first dragon won the race, the second was a flying whale, and the third, a giant snail!', es:'¡El primer dragón ganó la carrera, el segundo fue una ballena voladora, y el tercero, un caracol gigante!', pron:'de ferst drágon uán de réis, de sécond uas a fláing uéil, and de zerd, a yáiant snéil!'},
      {en:'The fourth and fifth place went to invisible ninjas. Who is next? Who is last?', es:'El cuarto y quinto lugar fueron para ninjas invisibles. ¿Quién sigue? ¿Quién es el último?', pron:'de forz and fifz pléis uént tu invísibol ninchas. jú is next? jú is last?'},
      {en:'This order is top priority — urgent, urgent, urgent! Check the ranking of our best seller!', es:'¡Este pedido es máxima prioridad — urgente, urgente, urgente! ¡Revisá la clasificación de nuestro más vendido!', pron:'dis órder is tap praióriti — érchent, érchent, érchent! chek de ránking of áur best séler!'},
      {en:'Our preferred supplier is a thousand-year-old wizard, and the waiting list has thirty thousand dragons!', es:'Nuestro proveedor preferido es un mago de mil años, ¡y la lista de espera tiene treinta mil dragones!', pron:'áur priférd sapláier is a záusand íar óuld uísard, and de uéiting list jas zérti záusand drágons!'}
    ],
    jingle:[
      {en:'First, second, third in line!', es:'Primero, segundo, tercero en la fila.', pron:'ferst, sécond, zerd in láin!'},
      {en:'Fourth and fifth, all so fine!', es:'Cuarto y quinto, ¡todos tan bien!', pron:'forz and fifz, ol sóu fáin!'},
      {en:'Top priority, urgent today!', es:'Máxima prioridad, ¡urgente hoy!', pron:'tap praióriti, érchent tudéi!'},
      {en:'Best seller, waiting list, hooray!', es:'Más vendido, lista de espera, ¡hurra!', pron:'best séler, uéiting list, juréi!'}
    ]
  },
{
    day:33, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'Dinero y monedas / Formas de pago',
    structures:[
      {id:'S028', pattern:"I will pay by + [METHOD]", examples:[
        {en:'I will pay by credit card.', es:'Voy a pagar con tarjeta de crédito.', pron:'ái uil péi bái crédit card.'},
        {en:'I will pay by bank transfer.', es:'Voy a pagar por transferencia bancaria.', pron:'ái uil péi bái bank tránsfer.'},
        {en:'I will pay in cash.', es:'Voy a pagar en efectivo.', pron:'ái uil péi in cash.'},
        {en:'I will pay by check.', es:'Voy a pagar con cheque.', pron:'ái uil péi bái chek.'}
      ], function:'decir cómo vas a pagar', stage:1,
        transformations:{
          negative:{en:"I won't pay by credit card.", es:'No voy a pagar con tarjeta de crédito.'},
          question:{en:'Will you pay by credit card?', es:'¿Vas a pagar con tarjeta de crédito?'},
          yesAnswer:{en:'Yes, I will.', es:'Sí, así voy a pagar.'},
          noAnswer:{en:"No, I won't.", es:'No, no voy a pagar así.'}
        }}
    ],
    auxiliaryTeaching:[
      {
        title:'Will para el futuro',
        intro:'"Will" es fácil: a diferencia de "do/does" o "have/has", no cambia según quién habla — I will, you will, he will, she will, siempre igual. Solo agregás "will" antes del verbo:',
        examples:[
          {en:'I will call you.', es:'Te voy a llamar.', pron:'ái uil col iú.'},
          {en:'She will call you.', es:'Ella te va a llamar.', pron:'shi uil col iú.'},
          {en:"I won't call you.", es:'No te voy a llamar.', pron:"ái uóunt col iú."},
          {en:'Will you call me?', es:'¿Me vas a llamar?', pron:'uil iú col mi?'}
        ]
      }
    ],
    words:[
      {en:'money', es:'dinero', pron:'máni', emoji:'💵'},
      {en:'cash', es:'efectivo', pron:'cash', emoji:'💵'},
      {en:'bank transfer', es:'transferencia bancaria', pron:'bank tránsfer', emoji:'🏦'},
      {en:'credit card', es:'tarjeta de crédito', pron:'crédit card', emoji:'💳'},
      {en:'debit card', es:'tarjeta de débito', pron:'débit card', emoji:'💳'},
      {en:'check', es:'cheque', pron:'chek', emoji:'🧾'},
      {en:'receipt', es:'recibo', pron:'risíit', emoji:'🧾'},
      {en:'change (money)', es:'vuelto', pron:'chéinch', emoji:'🪙'},
      {en:'currency', es:'moneda', pron:'kárensi', emoji:'💱'},
      {en:'exchange rate', es:'tipo de cambio', pron:'exchéinch réit', emoji:'💱'},
      {en:'to pay', es:'pagar', pron:'tu péi', emoji:'💸'},
      {en:'to charge', es:'cobrar', pron:'tu charch', emoji:'💰'},
      {en:'refund', es:'reembolso', pron:'rífand', emoji:'↩️'},
      {en:'wire transfer', es:'transferencia electrónica', pron:'uáier tránsfer', emoji:'💻'}
    ],
    story:[
      {en:'Dragons do not carry money — they hoard mountains of cash instead!', es:'¡Los dragones no llevan dinero — en cambio, acumulan montañas de efectivo!', pron:'drágons du nat cári máni — déi jord máuntains of cash instéd!'},
      {en:'Do you accept bank transfer, credit card, debit card, or only ancient magic checks?', es:'¿Aceptan transferencia bancaria, tarjeta de crédito, tarjeta de débito, o solo cheques mágicos antiguos?', pron:'du iú axépt bank tránsfer, crédit card, débit card, or óunli éinshent máyic cheks?'},
      {en:'Here is your receipt, and here is your change — one shiny star coin!', es:'Aquí tienes tu recibo, y aquí tu vuelto — ¡una moneda de estrella brillante!', pron:'jíar is iór risíit, and jíar is iór chéinch — uán sháini star cóin!'},
      {en:'The currency exchange rate between dragon gold and wizard silver changes every full moon.', es:'El tipo de cambio entre el oro de dragón y la plata de mago cambia con cada luna llena.', pron:'de kárensi exchéinch réit bituín drágon góuld and uísard sílver chéinches évri ful múun.'},
      {en:'To pay, to charge, or to request a refund — the flying bank handles it all by wire transfer!', es:'¡Pagar, cobrar, o pedir un reembolso — el banco volador se encarga de todo por transferencia electrónica!', pron:'tu péi, tu charch, or tu rikuést a rífand — de fláing bank jándols it ol bái uáier tránsfer!'}
    ],
    jingle:[
      {en:'Money, cash, bank transfer too!', es:'Dinero, efectivo, ¡transferencia también!', pron:'máni, cash, bank tránsfer tú!'},
      {en:"Credit card, debit card, it's true!", es:'Tarjeta de crédito, tarjeta de débito, ¡es verdad!', pron:'crédit card, débit card, its trú!'},
      {en:'Check, receipt, and my change!', es:'Cheque, recibo, ¡y mi vuelto!', pron:'chek, risíit, and mái chéinch!'},
      {en:"To pay, to charge, refund's the range!", es:'Pagar, cobrar, ¡reembolso es el rango!', pron:'tu péi, tu charch, rífands de réinch!'}
    ]
  },
{
    day:34, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'Comprar y vender / Negociar precio y condiciones',
    structures:[
      {id:'S029', pattern:"I need to negotiate + [X]", examples:[
        {en:'I need to negotiate the price.', es:'Necesito negociar el precio.', pron:'ái níid tu negóushieit de práis.'},
        {en:'I need to negotiate the terms.', es:'Necesito negociar las condiciones.', pron:'ái níid tu negóushieit de terms.'},
        {en:'I need to negotiate a discount.', es:'Necesito negociar un descuento.', pron:'ái níid tu negóushieit a díscaunt.'},
        {en:'I need to negotiate the deal.', es:'Necesito negociar el trato.', pron:'ái níid tu negóushieit de díil.'}
      ], function:'pedir espacio para negociar', stage:1,
        transformations:{
          negative:{en:"I don't need to negotiate the price.", es:'No necesito negociar el precio.'},
          question:{en:'Do you need to negotiate the price?', es:'¿Necesitás negociar el precio?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'to buy', es:'comprar', pron:'tu bái', emoji:'🛒'},
      {en:'to sell', es:'vender', pron:'tu sel', emoji:'🏷️'},
      {en:'to purchase', es:'adquirir', pron:'tu pérchas', emoji:'🛍️'},
      {en:'lowest price', es:'precio más bajo', pron:'lóuest práis', emoji:'⬇️'},
      {en:'bulk order', es:'pedido al por mayor', pron:'balk órder', emoji:'📦'},
      {en:'wholesale', es:'al por mayor', pron:'jóulseil', emoji:'🏭'},
      {en:'retail', es:'al por menor', pron:'ríiteil', emoji:'🏬'},
      {en:'margin', es:'margen', pron:'márchin', emoji:'📊'},
      {en:'profit', es:'ganancia', pron:'práfit', emoji:'📈'},
      {en:'loss', es:'pérdida', pron:'los', emoji:'📉'},
      {en:'break even', es:'punto de equilibrio', pron:'bréik íven', emoji:'⚖️'},
      {en:'final offer', es:'oferta final', pron:'fáinal áfer', emoji:'🤝'},
      {en:'deal closed', es:'trato cerrado', pron:'díil clóusd', emoji:'✅'}
    ],
    story:[
      {en:'I want to buy a thousand dragon eggs, and you want to sell a million!', es:'¡Quiero comprar mil huevos de dragón, y tú quieres vender un millón!', pron:'ái uánt tu bái a záusand drágon egs, and iú uánt tu sel a mílion!'},
      {en:"Let's purchase in bulk — a bulk order gets the lowest price, wholesale, not retail!", es:'¡Compremos al por mayor — un pedido al por mayor consigue el precio más bajo, mayorista, no minorista!', pron:'lets pérchas in balk — a balk órder guéts de lóuest práis, jóulseil, nat ríiteil!'},
      {en:'Our margin is huge, our profit is a mountain of gold, and our loss is zero — we always win!', es:'Nuestro margen es enorme, nuestra ganancia es una montaña de oro, ¡y nuestra pérdida es cero — siempre ganamos!', pron:'áur márchin is jiúch, áur práfit is a máuntain of góuld, and áur los is zírou — uí ólueis uín!'},
      {en:'This is my final offer, dragon — deal closed!', es:'Esta es mi oferta final, dragón — ¡trato cerrado!', pron:'dis is mái fáinal áfer, drágon — díil clóusd!'}
    ],
    jingle:[
      {en:'To buy, to sell, to purchase too!', es:'Comprar, vender, ¡adquirir también!', pron:'tu bái, tu sel, tu pérchas tú!'},
      {en:'Lowest price, wholesale for you!', es:'Precio más bajo, ¡al por mayor para ti!', pron:'lóuest práis, jóulseil for iú!'},
      {en:'Margin, profit, never a loss!', es:'Margen, ganancia, ¡nunca una pérdida!', pron:'márchin, práfit, néver a los!'},
      {en:"Final offer, deal closed, I'm the boss!", es:'Oferta final, trato cerrado, ¡soy el jefe!', pron:'fáinal áfer, díil clóusd, áim de bos!'}
    ]
  },
{
    day:35, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'Medidas y cantidades / Unidades de medida',
    structures:[
      {id:'S030', pattern:"It weighs + [NUMBER] + [UNIT]", examples:[
        {en:'It weighs five kilograms.', es:'Pesa cinco kilogramos.', pron:'it uéis fáiv kílograms.'},
        {en:'It weighs two pounds.', es:'Pesa dos libras.', pron:'it uéis tú páunds.'},
        {en:'It weighs one ton.', es:'Pesa una tonelada.', pron:'it uéis uán tan.'},
        {en:'It weighs almost nothing.', es:'Casi no pesa nada.', pron:'it uéis ólmoust názing.'}
      ], function:'decir cuánto pesa algo', stage:1,
        transformations:{
          negative:{en:"It doesn't weigh five kilograms.", es:'No pesa cinco kilogramos.'},
          question:{en:'Does it weigh five kilograms?', es:'¿Pesa cinco kilogramos?'},
          yesAnswer:{en:'Yes, it does.', es:'Sí, pesa eso.'},
          noAnswer:{en:"No, it doesn't.", es:'No, no pesa eso.'}
        }}
    ],
    words:[
      {en:'kilogram', es:'kilogramo', pron:'kílogram', emoji:'⚖️'},
      {en:'gram', es:'gramo', pron:'gram', emoji:'⚖️'},
      {en:'liter', es:'litro', pron:'líiter', emoji:'🧴'},
      {en:'meter', es:'metro', pron:'míiter', emoji:'📏'},
      {en:'centimeter', es:'centímetro', pron:'séntimiter', emoji:'📏'},
      {en:'inch', es:'pulgada', pron:'inch', emoji:'📏'},
      {en:'pound', es:'libra', pron:'páund', emoji:'⚖️'},
      {en:'weight', es:'peso', pron:'uéit', emoji:'⚖️'},
      {en:'length', es:'longitud', pron:'lenz', emoji:'📏'},
      {en:'width', es:'ancho', pron:'uídz', emoji:'↔️'},
      {en:'height', es:'altura', pron:'jáit', emoji:'↕️'},
      {en:'volume', es:'volumen', pron:'váliuum', emoji:'📦'},
      {en:'pack', es:'paquete', pron:'pak', emoji:'📦'},
      {en:'pallet', es:'tarima', pron:'pálet', emoji:'🪵'}
    ],
    story:[
      {en:'This dragon egg weighs a hundred kilograms, but that tiny one is only one gram!', es:'¡Este huevo de dragón pesa cien kilogramos, pero ese pequeñito pesa solo un gramo!', pron:'dis drágon eg uéis a jándred kílograms, bat dat táini uán is óunli uán gram!'},
      {en:"The wizard's potion needs a thousand liters of moonlight, poured across a meter of stardust!", es:'¡La poción del mago necesita mil litros de luz de luna, vertida a lo largo de un metro de polvo de estrellas!', pron:'de uísards póushon níids a záusand líiters of múunlait, pórd acrós a míiter of stárdast!'},
      {en:'Every centimeter and every inch of this castle is made of solid gold.', es:'Cada centímetro y cada pulgada de este castillo está hecho de oro sólido.', pron:'évri séntimiter and évri inch of dis cásol is méid of sálid góuld.'},
      {en:'The giant\'s weight is impossible to measure, but his length, width, and height reach the clouds!', es:'¡El peso del gigante es imposible de medir, pero su longitud, ancho y altura llegan hasta las nubes!', pron:'de yáiants uéit is impásibol tu méshur, bat jis lenz, uídz, and jáit ríich de cláuds!'},
      {en:'We need one pack of dragon scales, and an entire pallet of magic feathers!', es:'Necesitamos un paquete de escamas de dragón, ¡y una tarima entera de plumas mágicas!', pron:'uí níid uán pak of drágon skéils, and an entáier pálet of máyic féders!'}
    ],
    jingle:[
      {en:'Kilogram, gram, liter too!', es:'Kilogramo, gramo, ¡litro también!', pron:'kílogram, gram, líiter tú!'},
      {en:"Meter, centimeter, inch, it's true!", es:'Metro, centímetro, pulgada, ¡es verdad!', pron:'míiter, séntimiter, inch, its trú!'},
      {en:'Weight and length, width and height!', es:'Peso y longitud, ancho y altura.', pron:'uéit and lenz, uídz and jáit!'},
      {en:'Pack and pallet, feeling light!', es:'Paquete y tarima, ¡sintiéndome liviano!', pron:'pak and pálet, fíiling láit!'}
    ]
  },
{
    day:36, unit:3, unitTitle:'Unidad 3 · Semanas 5-6', theme:'Repaso y cierre de la Unidad 3',
    structures:[
      {id:'S111', pattern:"I made strong progress + [X]", examples:[
        {en:'Unit three is done — I made strong progress this time.', es:'La Unidad Tres está lista — hice un progreso fuerte esta vez.', pron:'iúnit zríi is dan — ái méid strong prógres dis táim.'},
        {en:"It's review time — this was a final challenge.", es:'Es hora de repaso — este fue un desafío final.', pron:"its riviú táim — dis uás a fáinal chálench."},
        {en:"That was well earned — I'm proud of you.", es:'Eso fue bien merecido — estoy orgulloso de ti.', pron:"dat uás uél érnd — áim práud of iú."},
        {en:'See you in unit four, next unit!', es:'¡Nos vemos en la Unidad Cuatro, la próxima unidad!', pron:'síi iú in iúnit fóar, next iúnit!'}
      ], function:'cerrar la unidad reconociendo el progreso', stage:1,
        transformations:{
          negative:{en:"I didn't make much progress today.", es:'Hoy no hice mucho progreso.'},
          question:{en:'Did you make strong progress?', es:'¿Hiciste un progreso fuerte?'},
          yesAnswer:{en:'Yes, I did.', es:'Sí.'},
          noAnswer:{en:"Not as much as I wanted.", es:'No tanto como quería.'}
        }}
    ],
    words:[
      {en:'unit three', es:'unidad tres', pron:'iúnit zríi', emoji:'3️⃣'},
      {en:'strong progress', es:'buen progreso', pron:'strong prágres', emoji:'📈'},
      {en:'review time', es:'hora de repasar', pron:'riviú táim', emoji:'🔁'},
      {en:'final challenge', es:'desafío final', pron:'fáinal chálench', emoji:'🏆'},
      {en:'well earned', es:'bien merecido', pron:'uél érnd', emoji:'🎖️'},
      {en:'proud of you', es:'orgulloso de ti', pron:'práud of iú', emoji:'😊'},
      {en:'see you in unit four', es:'nos vemos en la unidad cuatro', pron:'síi iú in iúnit fóar', emoji:'➡️'},
      {en:'next unit', es:'próxima unidad', pron:'next iúnit', emoji:'➡️'}
    ],
    story:[
      {en:"Welcome to unit three's final challenge! It costs a lot of effort, but your progress has been strong.", es:'¡Bienvenido al desafío final de la unidad tres! Cuesta mucho esfuerzo, pero tu progreso fue sólido.', pron:'uélcam tu iúnit zríis fáinal chálench! it casts a lat of éfort, bat iór prágres jas bíin strong.'},
      {en:'It is review time! This is the first step of your final test today.', es:'¡Es hora de repasar! Este es el primer paso de tu prueba final de hoy.', pron:'it is riviú táim! dis is de ferst step of iór fáinal test tudéi.'},
      {en:"Well earned, champion — I am so proud of you for everything you've learned!", es:'Bien merecido, campeón — ¡estoy muy orgulloso de ti por todo lo que aprendiste!', pron:"uél érnd, chámpion — ái am sóu práud of iú for évrizin iúv lernd!"},
      {en:'See you in unit four — the next unit is ready and waiting for you!', es:'¡Nos vemos en la unidad cuatro — la próxima unidad está lista y te espera!', pron:'síi iú in iúnit fóar — de next iúnit is rédi and uéiting for iú!'}
    ],
    jingle:[
      {en:'Unit three, strong progress today!', es:'Unidad tres, ¡buen progreso hoy!', pron:'iúnit zríi, strong prágres tudéi!'},
      {en:'Review time, final challenge, hooray!', es:'Hora de repasar, desafío final, ¡hurra!', pron:'riviú táim, fáinal chálench, juréi!'},
      {en:'Well earned, proud of you, my friend!', es:'Bien merecido, orgulloso de ti, ¡mi amigo!', pron:'uél érnd, práud of iú, mái frend!'},
      {en:'See you in unit four, till we meet again!', es:'Nos vemos en la unidad cuatro, ¡hasta que nos volvamos a encontrar!', pron:'síi iú in iúnit fóar, til uí míit aguén!'}
    ]
  }
];
