// Unidad 6 del curso — Días 61 a 72
// Este archivo se puede editar o reemplazar solo, sin tocar el resto del curso.
const curriculumUnidad6 = [
{
    day:61, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'Pedir direcciones / Coordinar un envío',
    structures:[
      {id:'S047', pattern:"I need to get to + [PLACE]", examples:[
        {en:'I need to get to the airport.', es:'Necesito llegar al aeropuerto.', pron:'ái níid tu guét tu de érport.'},
        {en:'I need to get to the office.', es:'Necesito llegar a la oficina.', pron:'ái níid tu guét tu de áfis.'},
        {en:'I need to get to downtown.', es:'Necesito llegar al centro.', pron:'ái níid tu guét tu dáuntaun.'},
        {en:'I need to get to the warehouse.', es:'Necesito llegar al depósito.', pron:'ái níid tu guét tu de uérjaus.'}
      ], function:'decir a dónde necesitás llegar', stage:2,
        transformations:{
          negative:{en:"I don't need to get to the airport.", es:'No necesito llegar al aeropuerto.'},
          question:{en:'How do I get to the airport?', es:'¿Cómo llego al aeropuerto?'}
        }}
    ],
    words:[
      {en:'excuse me', es:'disculpe', pron:'exquiúsmi', emoji:'🙋'},
      {en:'where is', es:'dónde está', pron:'uér is', emoji:'❓'},
      {en:'how do I get to', es:'cómo llego a', pron:'jáu du ái guét tu', emoji:'🗺️'},
      {en:'turn left', es:'doblá a la izquierda', pron:'tern left', emoji:'⬅️'},
      {en:'turn right', es:'doblá a la derecha', pron:'tern ráit', emoji:'➡️'},
      {en:'go straight', es:'seguí derecho', pron:'góu stréit', emoji:'⬆️'},
      {en:"it's near", es:'está cerca', pron:'its níar', emoji:'📍'},
      {en:"it's far", es:'está lejos', pron:'its far', emoji:'📍'},
      {en:'block', es:'cuadra', pron:'blak', emoji:'🏙️'},
      {en:'corner', es:'esquina', pron:'córner', emoji:'📐'},
      {en:'to coordinate a shipment', es:'coordinar un envío', pron:'tu cordinéit a shípment', emoji:'🚚'},
      {en:'pickup', es:'recogida', pron:'píkap', emoji:'📦'},
      {en:'carrier', es:'transportista', pron:'cárier', emoji:'🚛'}
    ],
    story:[
      {en:'Excuse me, where is the dragon post office? How do I get there?', es:'Disculpe, ¿dónde está el correo de dragones? ¿Cómo llego ahí?', pron:'exquiúsmi, uér is de drágon póust áfis? jáu du ái guét dér?'},
      {en:'Turn left at the volcano, then go straight past the rainbow!', es:'¡Doblá a la izquierda en el volcán, después seguí derecho pasando el arcoíris!', pron:'tern left at de valkéinou, den góu stréit past de réinbou!'},
      {en:"It's near the corner, one block past the giant's castle.", es:'Está cerca de la esquina, una cuadra pasando el castillo del gigante.', pron:'its níar de córner, uán blak past de yáiants cásol.'},
      {en:"Let's coordinate a shipment — pickup by dragon, please!", es:'Coordinemos un envío — ¡recogida en dragón, por favor!', pron:'lets cordinéit a shípment — píkap bái drágon, plíis!'}
    ],
    jingle:[
      {en:'Excuse me, where is the store?', es:'Disculpe, ¿dónde está la tienda?', pron:'exquiúsmi, uér is de stóar?'},
      {en:'Turn left, turn right, and more!', es:'Doblá a la izquierda, doblá a la derecha, ¡y más!', pron:'tern left, tern ráit, and mor!'},
      {en:"It's near, it's far, go straight!", es:'Está cerca, está lejos, ¡seguí derecho!', pron:'its níar, its far, góu stréit!'},
      {en:"Coordinate a shipment, don't be late!", es:'Coordiná un envío, ¡no llegues tarde!', pron:'cordinéit a shípment, dont bi léit!'}
    ]
  },
{
    day:62, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'Dar direcciones / Rastrear un pedido',
    structures:[
      {id:'S048', pattern:"It's + [PREPOSITION] + [X]", examples:[
        {en:"It's next to the bank.", es:'Está al lado del banco.', pron:"its next tu de bank."},
        {en:"It's across from the store.", es:'Está enfrente de la tienda.', pron:"its acrós fram de stor."},
        {en:"It's between the pharmacy and the bakery.", es:'Está entre la farmacia y la panadería.', pron:"its bituín de fármasi and de béikeri."},
        {en:"It's behind the building.", es:'Está detrás del edificio.', pron:"its bijáind de bílding."}
      ], function:'dar direcciones usando preposiciones', stage:2,
        transformations:{
          negative:{en:"It's not next to the bank.", es:'No está al lado del banco.'},
          question:{en:'Is it next to the bank?', es:'¿Está al lado del banco?'},
          yesAnswer:{en:'Yes, it is.', es:'Sí.'},
          noAnswer:{en:"No, it isn't.", es:'No.'}
        }}
    ],
    words:[
      {en:'straight ahead', es:'derecho adelante', pron:'stréit ajéd', emoji:'⬆️'},
      {en:'across from', es:'enfrente de', pron:'acrós fram', emoji:'↔️'},
      {en:'next to', es:'al lado de', pron:'next tu', emoji:'➡️'},
      {en:'between', es:'entre', pron:'bituín', emoji:'↔️'},
      {en:'behind', es:'detrás de', pron:'bijáind', emoji:'⬅️'},
      {en:'traffic light', es:'semáforo', pron:'tráfic láit', emoji:'🚦'},
      {en:'crosswalk', es:'cruce peatonal', pron:'crósuok', emoji:'🚶'},
      {en:'to track an order', es:'rastrear un pedido', pron:'tu trak an órder', emoji:'🔍'},
      {en:'tracking link', es:'enlace de rastreo', pron:'tráking link', emoji:'🔗'},
      {en:'in transit', es:'en tránsito', pron:'in tránsit', emoji:'🚚'},
      {en:'out for delivery', es:'en reparto', pron:'áut for delíveri', emoji:'🚛'},
      {en:'delivered', es:'entregado', pron:'delíverd', emoji:'✅'}
    ],
    story:[
      {en:'Go straight ahead, across from the talking tree.', es:'Andá derecho adelante, enfrente del árbol parlante.', pron:'góu stréit ajéd, acrós fram de tóking tríi.'},
      {en:"It's next to the traffic light, between the rainbow and the crosswalk.", es:'Está al lado del semáforo, entre el arcoíris y el cruce peatonal.', pron:'its next tu de tráfic láit, bituín de réinbou and de crósuok.'},
      {en:"Let's track an order — click the tracking link, dragon!", es:'Rastreemos un pedido — ¡hacé clic en el enlace de rastreo, dragón!', pron:'lets trak an órder — clik de tráking link, drágon!'},
      {en:"It's in transit, out for delivery, and delivered — all in one second!", es:'¡Está en tránsito, en reparto, y entregado — todo en un segundo!', pron:'its in tránsit, áut for delíveri, and delíverd — ol in uán sécond!'}
    ],
    jingle:[
      {en:'Straight ahead, across, next to!', es:'Derecho adelante, enfrente, ¡al lado!', pron:'stréit ajéd, acrós, next tu!'},
      {en:"Between, behind, I'm telling you!", es:'Entre, detrás, ¡te lo digo!', pron:'bituín, bijáind, áim téling iú!'},
      {en:'Track an order, tracking link fast!', es:'Rastreá un pedido, ¡enlace de rastreo rápido!', pron:'trak an órder, tráking link fast!'},
      {en:'In transit, delivered, home at last!', es:'En tránsito, entregado, ¡en casa por fin!', pron:'in tránsit, delíverd, jóum at last!'}
    ]
  },
{
    day:63, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'Medios de transporte / Elegir transportista',
    structures:[
      {id:'S049', pattern:"I will choose + [X]", examples:[
        {en:'I will choose this carrier.', es:'Voy a elegir este transportista.', pron:'ái uil chúus dis cárier.'},
        {en:'I will choose the fastest option.', es:'Voy a elegir la opción más rápida.', pron:'ái uil chúus de fástest ápshion.'},
        {en:'I will choose the cheapest rate.', es:'Voy a elegir la tarifa más barata.', pron:'ái uil chúus de chíipest réit.'},
        {en:'I will choose a different truck.', es:'Voy a elegir un camión distinto.', pron:'ái uil chúus a díferent trak.'}
      ], function:'decir qué opción vas a elegir', stage:2,
        transformations:{
          negative:{en:"I won't choose this carrier.", es:'No voy a elegir este transportista.'},
          question:{en:'Will you choose this carrier?', es:'¿Vas a elegir este transportista?'},
          yesAnswer:{en:'Yes, I will.', es:'Sí.'},
          noAnswer:{en:"No, I won't.", es:'No.'}
        }}
    ],
    words:[
      {en:'bus', es:'autobús', pron:'bas', emoji:'🚌'},
      {en:'taxi', es:'taxi', pron:'táxi', emoji:'🚕'},
      {en:'train', es:'tren', pron:'tréin', emoji:'🚆'},
      {en:'subway', es:'metro', pron:'sábuei', emoji:'🚇'},
      {en:'motorcycle', es:'moto', pron:'mótorsaikol', emoji:'🏍️'},
      {en:'truck', es:'camión', pron:'trak', emoji:'🚚'},
      {en:'to choose a carrier', es:'elegir un transportista', pron:'tu chúus a cárier', emoji:'✅'},
      {en:'shipping company', es:'empresa de transporte', pron:'shíping cámpani', emoji:'🏢'},
      {en:'freight', es:'carga', pron:'fréit', emoji:'📦'},
      {en:'rate', es:'tarifa', pron:'réit', emoji:'💲'},
      {en:'insurance', es:'seguro', pron:'inshúrans', emoji:'🛡️'}
    ],
    story:[
      {en:'Should we take the bus, the taxi, the train, or the subway to the castle?', es:'¿Tomamos el autobús, el taxi, el tren, o el metro hasta el castillo?', pron:'shud uí téik de bas, de táxi, de tréin, or de sábuei tu de cásol?'},
      {en:'Actually, a motorcycle made of fire is faster than any truck!', es:'En realidad, ¡una moto hecha de fuego es más rápida que cualquier camión!', pron:'ákchuali, a mótorsaikol méid of fáiar is fáster dan éni trak!'},
      {en:"Let's choose a carrier — this shipping company flies with dragons!", es:'Elijamos un transportista — ¡esta empresa de transporte vuela con dragones!', pron:'lets chúus a cárier — dis shíping cámpani fláis uid drágons!'},
      {en:'The freight rate includes dragon-fire insurance!', es:'¡La tarifa de carga incluye seguro contra fuego de dragón!', pron:'de fréit réit inclúuds drágon fáiar inshúrans!'}
    ],
    jingle:[
      {en:'Bus and taxi, train and subway!', es:'Autobús y taxi, ¡tren y metro!', pron:'bas and táxi, tréin and sábuei!'},
      {en:'Motorcycle, truck, on my way!', es:'Moto, camión, ¡en camino!', pron:'mótorsaikol, trak, on mái uéi!'},
      {en:'Choose a carrier, shipping fast!', es:'Elegí un transportista, ¡envío rápido!', pron:'chúus a cárier, shíping fast!'},
      {en:'Freight and insurance, built to last!', es:'Carga y seguro, ¡hecho para durar!', pron:'fréit and inshúrans, bilt tu last!'}
    ]
  },
{
    day:64, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'En el aeropuerto / Importación y exportación básica',
    structures:[
      {id:'S050', pattern:"I need to declare + [X]", examples:[
        {en:'I need to declare this item.', es:'Necesito declarar este artículo.', pron:'ái níid tu diclér dis áitem.'},
        {en:'I need to declare the value.', es:'Necesito declarar el valor.', pron:'ái níid tu diclér de váliu.'},
        {en:"I don't need to declare anything.", es:'No necesito declarar nada.', pron:"ái dont níid tu diclér énizin."},
        {en:'I need to declare the country of origin.', es:'Necesito declarar el país de origen.', pron:'ái níid tu diclér de cántri of óriyin.'}
      ], function:'declarar algo en aduana', stage:2,
        transformations:{
          negative:{en:"I don't need to declare this item.", es:'No necesito declarar este artículo.'},
          question:{en:'Do you need to declare this item?', es:'¿Necesitás declarar este artículo?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'airport', es:'aeropuerto', pron:'érport', emoji:'✈️'},
      {en:'flight', es:'vuelo', pron:'fláit', emoji:'🛫'},
      {en:'boarding pass', es:'pase de abordar', pron:'bórding pas', emoji:'🎫'},
      {en:'luggage', es:'equipaje', pron:'láguich', emoji:'🧳'},
      {en:'gate', es:'puerta de embarque', pron:'guéit', emoji:'🚪'},
      {en:'customs', es:'aduana', pron:'cástoms', emoji:'🛂'},
      {en:'to import', es:'importar', pron:'tu impórt', emoji:'📥'},
      {en:'to export', es:'exportar', pron:'tu expórt', emoji:'📤'},
      {en:'tariff', es:'arancel', pron:'tárif', emoji:'💲'},
      {en:'customs declaration', es:'declaración de aduana', pron:'cástoms declaréishon', emoji:'📃'},
      {en:'country of origin', es:'país de origen', pron:'cántri of óriyin', emoji:'🌍'}
    ],
    story:[
      {en:'Welcome to the dragon airport! Where is your flight, and your boarding pass?', es:'¡Bienvenido al aeropuerto de dragones! ¿Dónde está tu vuelo, y tu pase de abordar?', pron:'uélcam tu de drágon érport! uér is iór fláit, and iór bórding pas?'},
      {en:'My luggage is a thousand treasure chests — which gate, please?', es:'Mi equipaje son mil cofres del tesoro — ¿qué puerta de embarque, por favor?', pron:'mái láguich is a záusand tréshur chests — uích guéit, plíis?'},
      {en:'Customs wants to know: do you import or export magic beans?', es:'La aduana quiere saber: ¿importás o exportás frijoles mágicos?', pron:'cástoms uánts tu nóu: du iú impórt or expórt máyic bíins?'},
      {en:'The tariff and customs declaration depend on the country of origin!', es:'¡El arancel y la declaración de aduana dependen del país de origen!', pron:'de tárif and cástoms declaréishon dipénd on de cántri of óriyin!'}
    ],
    jingle:[
      {en:'Airport, flight, boarding pass too!', es:'Aeropuerto, vuelo, ¡pase de abordar también!', pron:'érport, fláit, bórding pas tú!'},
      {en:'Luggage and gate, customs for you!', es:'Equipaje y puerta, ¡aduana para vos!', pron:'láguich and guéit, cástoms for iú!'},
      {en:"Import, export, tariff's the game!", es:'Importar, exportar, ¡arancel es el juego!', pron:'impórt, expórt, tárifs de guéim!'},
      {en:'Country of origin, always the same!', es:'País de origen, ¡siempre lo mismo!', pron:'cántri of óriyin, ólueis de séim!'}
    ]
  },
{
    day:65, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'En la estación / Documentos de envío',
    structures:[
      {id:'S051', pattern:"I have the + [DOCUMENT]", examples:[
        {en:'I have the shipping guide.', es:'Tengo la guía de envío.', pron:'ái jav de shíping gáid.'},
        {en:'I have the commercial invoice.', es:'Tengo la factura comercial.', pron:'ái jav de camérshial ínvois.'},
        {en:'I have the packing list.', es:'Tengo la lista de empaque.', pron:'ái jav de páking list.'},
        {en:"I don't have the customs documents yet.", es:'Todavía no tengo los documentos de aduana.', pron:"ái dont jav de cástams dákiuments iét."}
      ], function:'decir qué documentos tenés', stage:2,
        transformations:{
          negative:{en:"I don't have the shipping guide.", es:'No tengo la guía de envío.'},
          question:{en:'Do you have the shipping guide?', es:'¿Tenés la guía de envío?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'ticket', es:'boleto', pron:'tíket', emoji:'🎫'},
      {en:'platform', es:'andén', pron:'plátform', emoji:'🚉'},
      {en:'schedule', es:'horario', pron:'squéyul', emoji:'🕐'},
      {en:'delay', es:'demora', pron:'diléi', emoji:'⏳'},
      {en:'departure', es:'salida', pron:'dipárchur', emoji:'🛫'},
      {en:'arrival', es:'llegada', pron:'aráival', emoji:'🛬'},
      {en:'shipping guide', es:'guía de envío', pron:'shíping gáid', emoji:'📄'},
      {en:'commercial invoice', es:'factura comercial', pron:'camérshal ínvois', emoji:'🧾'},
      {en:'packing list', es:'lista de empaque', pron:'páking list', emoji:'📋'},
      {en:'customs broker', es:'agente aduanal', pron:'cástoms bróuker', emoji:'🧑‍💼'}
    ],
    story:[
      {en:'My ticket says platform nine, but the schedule shows a delay!', es:'Mi boleto dice andén nueve, ¡pero el horario muestra una demora!', pron:'mái tíket séis plátform náin, bat de squéyul shóus a diléi!'},
      {en:"The dragon train's departure and arrival are both at midnight.", es:'La salida y la llegada del tren de dragones son las dos a medianoche.', pron:'de drágon tréins dipárchur and aráival ar bóuz at mídnait.'},
      {en:'Here is the shipping guide, the commercial invoice, and the packing list.', es:'Acá está la guía de envío, la factura comercial, y la lista de empaque.', pron:'jíar is de shíping gáid, de camérshal ínvois, and de páking list.'},
      {en:'The customs broker needs every document required, right now!', es:'¡El agente aduanal necesita cada documento requerido, ahora mismo!', pron:'de cástoms bróuker níids évri dókiument rikuáiard, ráit náu!'}
    ],
    jingle:[
      {en:'Ticket, platform, schedule too!', es:'Boleto, andén, ¡horario también!', pron:'tíket, plátform, squéyul tú!'},
      {en:"Delay, departure, arrival's true!", es:'Demora, salida, ¡llegada es verdad!', pron:'diléi, dipárchur, aráivals trú!'},
      {en:'Shipping guide, invoice today!', es:'Guía de envío, ¡factura hoy!', pron:'shíping gáid, ínvois tudéi!'},
      {en:'Packing list, broker on the way!', es:'Lista de empaque, ¡agente en camino!', pron:'páking list, bróuker on de uéi!'}
    ]
  },
{
    day:66, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'Puntos de referencia / Zonas de reparto',
    words:[
      {en:'landmark', es:'punto de referencia', pron:'lándmark', emoji:'📍'},
      {en:'main street', es:'calle principal', pron:'méin stríit', emoji:'🛣️'},
      {en:'avenue', es:'avenida', pron:'ávenu', emoji:'🛣️'},
      {en:'roundabout', es:'rotonda', pron:'ráundabáut', emoji:'🔄'},
      {en:'bridge', es:'puente', pron:'brich', emoji:'🌉'},
      {en:'district', es:'distrito', pron:'dístrict', emoji:'🏘️'},
      {en:'delivery zone', es:'zona de reparto', pron:'delíveri sóun', emoji:'🗺️'},
      {en:'coverage area', es:'área de cobertura', pron:'cáverich éria', emoji:'📍'},
      {en:'route', es:'ruta', pron:'rúut', emoji:'🛣️'},
      {en:'remote area', es:'zona alejada', pron:'rimóut éria', emoji:'🏞️'},
      {en:'same-day delivery', es:'entrega el mismo día', pron:'séim déi delíveri', emoji:'⚡'}
    ],
    story:[
      {en:'The landmark is a giant crystal on the main street.', es:'El punto de referencia es un cristal gigante en la calle principal.', pron:'de lándmark is a yáiant crístal on de méin stríit.'},
      {en:'Cross the roundabout, and the avenue leads to the flying bridge!', es:'Cruzá la rotonda, ¡y la avenida lleva hasta el puente volador!', pron:'cros de ráundabáut, and de ávenu líids tu de fláing brich!'},
      {en:'This whole district is our delivery zone and coverage area!', es:'¡Todo este distrito es nuestra zona de reparto y área de cobertura!', pron:'dis jóul dístrict is áur delíveri sóun and cáverich éria!'},
      {en:'Even the most remote area gets same-day delivery, by dragon!', es:'¡Hasta la zona más alejada tiene entrega el mismo día, en dragón!', pron:'íven de móust rimóut éria guéts séim déi delíveri, bái drágon!'}
    ],
    jingle:[
      {en:'Landmark, main street, avenue!', es:'Punto de referencia, calle principal, ¡avenida!', pron:'lándmark, méin stríit, ávenu!'},
      {en:'Roundabout, bridge, district too!', es:'Rotonda, puente, ¡distrito también!', pron:'ráundabáut, brich, dístrict tú!'},
      {en:'Delivery zone, coverage wide!', es:'Zona de reparto, ¡cobertura amplia!', pron:'delíveri sóun, cáverich uáid!'},
      {en:'Remote area, same-day, with pride!', es:'Zona alejada, mismo día, ¡con orgullo!', pron:'rimóut éria, séim déi, uid práid!'}
    ]
  },
{
    day:67, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'Repaso liviano de la semana 11',
    words:[
      {en:'over there', es:'por allá', pron:'óuver dér', emoji:'👉'},
      {en:'right here', es:'justo acá', pron:'ráit jíar', emoji:'📍'},
      {en:"you're close", es:'estás cerca', pron:'iór clóus', emoji:'🔥'},
      {en:'you passed it', es:'ya lo pasaste', pron:'iú past it', emoji:'↩️'},
      {en:"it takes about", es:'tarda alrededor de', pron:'it téiks abáut', emoji:'⏱️'},
      {en:'not far from here', es:'no muy lejos de acá', pron:'nat far fram jíar', emoji:'📍'},
      {en:'just around the corner', es:'a la vuelta de la esquina', pron:'yast aráund de córner', emoji:'📐'},
      {en:'follow the signs', es:'seguí las señales', pron:'fálou de sáins', emoji:'🪧'}
    ],
    story:[
      {en:"Over there, right here — you're close, but you passed it!", es:'Por allá, justo acá — ¡estás cerca, pero ya lo pasaste!', pron:'óuver dér, ráit jíar — iór clóus, bat iú past it!'},
      {en:'It takes about five minutes, not far from here, just around the corner!', es:'Tarda alrededor de cinco minutos, no muy lejos de acá, ¡a la vuelta de la esquina!', pron:'it téiks abáut fáiv mínits, nat far fram jíar, yast aráund de córner!'},
      {en:"Just follow the signs, dragon — you can't miss it!", es:'Solo seguí las señales, dragón — ¡no te lo vas a perder!', pron:'yast fálou de sáins, drágon — iú cant mis it!'}
    ],
    jingle:[
      {en:'Over there, right here, so close!', es:'Por allá, justo acá, ¡tan cerca!', pron:'óuver dér, ráit jíar, sóu clóus!'},
      {en:"You passed it, that's what I chose!", es:'Ya lo pasaste, ¡eso elegí!', pron:'iú past it, dats uát ái chóus!'},
      {en:'Not far from here, around the bend!', es:'No muy lejos de acá, ¡a la vuelta!', pron:'nat far fram jíar, aráund de bend!'},
      {en:'Follow the signs, until the end!', es:'Seguí las señales, ¡hasta el final!', pron:'fálou de sáins, antíl de end!'}
    ]
  },
{
    day:68, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'Tráfico y tiempo de viaje / Retrasos en la cadena de suministro',
    structures:[
      {id:'S052', pattern:"The shipment is + [STATUS]", examples:[
        {en:'The shipment is delayed.', es:'El envío está retrasado.', pron:'de shípment is diléid.'},
        {en:'The delivery is on time.', es:'La entrega está a tiempo.', pron:'de delíveri is on táim.'},
        {en:'This item is out of stock.', es:'Este artículo está agotado.', pron:'dis áitem is áut of stak.'},
        {en:'This order is on backorder.', es:'Este pedido está pendiente de reposición.', pron:'dis órder is on bákorder.'}
      ], function:'decir el estado de un envío', stage:2,
        transformations:{
          negative:{en:'The shipment is not delayed.', es:'El envío no está retrasado.'},
          question:{en:'Is the shipment delayed?', es:'¿El envío está retrasado?'},
          yesAnswer:{en:'Yes, it is.', es:'Sí.'},
          noAnswer:{en:"No, it isn't.", es:'No.'}
        }}
    ],
    words:[
      {en:'traffic jam', es:'embotellamiento', pron:'tráfic yam', emoji:'🚗'},
      {en:'rush hour', es:'hora pico', pron:'rash áuar', emoji:'🕐'},
      {en:'how long does it take', es:'cuánto tarda', pron:'jáu long das it téik', emoji:'❓'},
      {en:'shortcut', es:'atajo', pron:'shórtcat', emoji:'↪️'},
      {en:'detour', es:'desvío', pron:'dítur', emoji:'↩️'},
      {en:'supply chain', es:'cadena de suministro', pron:'sapláichéin', emoji:'⛓️'},
      {en:'delayed shipment', es:'envío retrasado', pron:'diléid shípment', emoji:'⚠️'},
      {en:'backorder', es:'pedido pendiente de stock', pron:'bákorder', emoji:'📦'},
      {en:'out of stock', es:'sin stock', pron:'áut of stak', emoji:'❌'},
      {en:'bottleneck', es:'cuello de botella', pron:'bátolnek', emoji:'🍾'}
    ],
    story:[
      {en:"There's a traffic jam of a thousand dragons during rush hour!", es:'¡Hay un embotellamiento de mil dragones en hora pico!', pron:'ders a tráfic yam of a záusand drágons dúring rash áuar!'},
      {en:'How long does it take to fly through the shortcut?', es:'¿Cuánto tarda en volar por el atajo?', pron:'jáu long das it téik tu flái zrú de shórtcat?'},
      {en:'The supply chain broke — this shipment is delayed!', es:'¡La cadena de suministro se rompió — este envío está retrasado!', pron:'de sapláichéin bróuk — dis shípment is diléid!'},
      {en:'We have a backorder, out of stock, and a giant bottleneck!', es:'¡Tenemos un pedido pendiente de stock, sin stock, y un cuello de botella gigante!', pron:'uí jav a bákorder, áut of stak, and a yáiant bátolnek!'}
    ],
    jingle:[
      {en:'Traffic jam, rush hour too!', es:'Embotellamiento, ¡hora pico también!', pron:'tráfic yam, rash áuar tú!'},
      {en:'Shortcut, detour, I found you!', es:'Atajo, desvío, ¡te encontré!', pron:'shórtcat, dítur, ái fáund iú!'},
      {en:"Supply chain, backorder's here!", es:'Cadena de suministro, ¡pedido pendiente está acá!', pron:'sapláichéin, bákorders jíar!'},
      {en:'Out of stock, bottleneck, no fear!', es:'Sin stock, cuello de botella, ¡sin miedo!', pron:'áut of stak, bátolnek, nóu fíar!'}
    ]
  },
{
    day:69, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'Alquilar un auto / Contratar un transportista',
    structures:[
      {id:'S053', pattern:"I want to hire + [X]", examples:[
        {en:'I want to hire this carrier.', es:'Quiero contratar este transportista.', pron:'ái uánt tu jáier dis cárier.'},
        {en:'I want to rent a car.', es:'Quiero alquilar un auto.', pron:'ái uánt tu rent a car.'},
        {en:'I want to sign a service agreement.', es:'Quiero firmar un acuerdo de servicio.', pron:'ái uánt tu sáin a sérvis agríiment.'},
        {en:'I want a driver with experience.', es:'Quiero un conductor con experiencia.', pron:'ái uánt a dráiver uid expíriens.'}
      ], function:'decir a quién querés contratar', stage:2,
        transformations:{
          negative:{en:"I don't want to hire this carrier.", es:'No quiero contratar este transportista.'},
          question:{en:'Do you want to hire this carrier?', es:'¿Querés contratar este transportista?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'to rent a car', es:'alquilar un auto', pron:'tu rent a car', emoji:'🚗'},
      {en:"driver's license", es:'licencia de conducir', pron:'dráivers láisens', emoji:'🪪'},
      {en:'deposit', es:'depósito', pron:'dipásit', emoji:'💵'},
      {en:'full tank', es:'tanque lleno', pron:'ful tank', emoji:'⛽'},
      {en:'mileage', es:'kilometraje', pron:'máilich', emoji:'🔢'},
      {en:'to hire a carrier', es:'contratar un transportista', pron:'tu jáiar a cárier', emoji:'🤝'},
      {en:'service agreement', es:'acuerdo de servicio', pron:'sérvis agríiment', emoji:'📃'},
      {en:'on-time delivery rate', es:'tasa de entregas a tiempo', pron:'on táim delíveri réit', emoji:'📊'},
      {en:'capacity', es:'capacidad', pron:'capásiti', emoji:'📦'},
      {en:'fleet', es:'flota', pron:'flíit', emoji:'🚛'}
    ],
    story:[
      {en:"I want to rent a car — do dragons need a driver's license?", es:'Quiero alquilar un auto — ¿los dragones necesitan licencia de conducir?', pron:'ái uánt tu rent a car — du drágons níid a dráivers láisens?'},
      {en:'A deposit, a full tank, and unlimited mileage, please!', es:'¡Un depósito, tanque lleno, y kilometraje ilimitado, por favor!', pron:'a dipásit, a ful tank, and anlímited máilich, plíis!'},
      {en:"Let's hire a carrier with a good on-time delivery rate!", es:'¡Contratemos un transportista con una buena tasa de entregas a tiempo!', pron:'lets jáiar a cárier uid a gud on táim delíveri réit!'},
      {en:'This dragon fleet has the biggest capacity in the kingdom!', es:'¡Esta flota de dragones tiene la mayor capacidad del reino!', pron:'dis drágon flíit jas de bíguest capásiti in de kíngdom!'}
    ],
    jingle:[
      {en:"Rent a car, driver's license too!", es:'Alquilar un auto, ¡licencia también!', pron:'rent a car, dráivers láisens tú!'},
      {en:'Deposit, full tank, mileage true!', es:'Depósito, tanque lleno, ¡kilometraje verdadero!', pron:'dipásit, ful tank, máilich trú!'},
      {en:'Hire a carrier, on time each day!', es:'Contratá un transportista, ¡a tiempo cada día!', pron:'jáiar a cárier, on táim íich déi!'},
      {en:'Capacity, fleet, on our way!', es:'Capacidad, flota, ¡en camino!', pron:'capásiti, flíit, on áur uéi!'}
    ]
  },
{
    day:70, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'Señales comunes / Normas de manejo de mercancía',
    structures:[
      {id:'S054', pattern:"This package is + [ADJECTIVE]", examples:[
        {en:'This package is fragile.', es:'Este paquete es frágil.', pron:'dis pákech is fráyail.'},
        {en:'This package is hazardous.', es:'Este paquete es peligroso.', pron:'dis pákech is jasárdas.'},
        {en:'This package is heavy.', es:'Este paquete es pesado.', pron:'dis pákech is jévi.'},
        {en:'This package is not fragile.', es:'Este paquete no es frágil.', pron:'dis pákech is nat fráyail.'}
      ], function:'describir cómo manipular un paquete', stage:2,
        transformations:{
          negative:{en:'This package is not fragile.', es:'Este paquete no es frágil.'},
          question:{en:'Is this package fragile?', es:'¿Este paquete es frágil?'},
          yesAnswer:{en:'Yes, it is.', es:'Sí.'},
          noAnswer:{en:"No, it isn't.", es:'No.'}
        }}
    ],
    words:[
      {en:'stop sign', es:'señal de pare', pron:'stap sáin', emoji:'🛑'},
      {en:'no entry', es:'prohibido el paso', pron:'nóu éntri', emoji:'🚫'},
      {en:'one way', es:'una vía', pron:'uán uéi', emoji:'➡️'},
      {en:'speed limit', es:'límite de velocidad', pron:'spíid límit', emoji:'🚗'},
      {en:'fragile', es:'frágil', pron:'fráyail', emoji:'🔍'},
      {en:'handle with care', es:'manejar con cuidado', pron:'jándol uid quér', emoji:'⚠️'},
      {en:'this side up', es:'este lado hacia arriba', pron:'dis sáid ap', emoji:'⬆️'},
      {en:'do not stack', es:'no apilar', pron:'du nat stak', emoji:'🚫'},
      {en:'hazardous', es:'peligroso', pron:'jásardos', emoji:'☣️'},
      {en:'loading dock', es:'muelle de carga', pron:'lóuding dak', emoji:'🏭'}
    ],
    story:[
      {en:'Stop sign, no entry, one way — the dragon reads every sign!', es:'¡Señal de pare, prohibido el paso, una vía — el dragón lee cada señal!', pron:'stap sáin, nóu éntri, uán uéi — de drágon ríids évri sáin!'},
      {en:'The speed limit for a flying dragon is a thousand miles per hour!', es:'¡El límite de velocidad para un dragón volador es mil millas por hora!', pron:'de spíid límit for a fláing drágon is a záusand máils per áuar!'},
      {en:'Fragile! Handle with care — this side up, do not stack!', es:'¡Frágil! Manejar con cuidado — este lado hacia arriba, ¡no apilar!', pron:'fráyail! jándol uid quér — dis sáid ap, du nat stak!'},
      {en:"Keep dry, it's hazardous, and it goes straight to the loading dock!", es:'Mantener seco, es peligroso, ¡y va directo al muelle de carga!', pron:'kíip drái, its jásardos, and it góus stréit tu de lóuding dak!'}
    ],
    jingle:[
      {en:'Stop sign, no entry, one way!', es:'Señal de pare, prohibido, ¡una vía!', pron:'stap sáin, nóu éntri, uán uéi!'},
      {en:'Speed limit, fragile today!', es:'Límite de velocidad, ¡frágil hoy!', pron:'spíid límit, fráyail tudéi!'},
      {en:'Handle with care, this side up!', es:'Manejar con cuidado, ¡este lado arriba!', pron:'jándol uid quér, dis sáid ap!'},
      {en:'Do not stack, loading dock, wake up!', es:'No apilar, muelle de carga, ¡despertate!', pron:'du nat stak, lóuding dak, uéik ap!'}
    ]
  },
{
    day:71, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'Direcciones en la ciudad / Rutas de distribución',
    words:[
      {en:'north', es:'norte', pron:'norz', emoji:'⬆️'},
      {en:'south', es:'sur', pron:'sáuz', emoji:'⬇️'},
      {en:'east', es:'este', pron:'íist', emoji:'➡️'},
      {en:'west', es:'oeste', pron:'uést', emoji:'⬅️'},
      {en:'downtown', es:'centro', pron:'dáuntaun', emoji:'🏙️'},
      {en:'outskirts', es:'las afueras', pron:'áutskerts', emoji:'🏞️'},
      {en:'delivery route', es:'ruta de distribución', pron:'delíveri rúut', emoji:'🗺️'},
      {en:'optimal route', es:'ruta óptima', pron:'áptimal rúut', emoji:'⭐'},
      {en:'multiple stops', es:'múltiples paradas', pron:'máltipol staps', emoji:'📍'},
      {en:'dispatch', es:'despacho', pron:'díspach', emoji:'📤'}
    ],
    story:[
      {en:'Fly north, south, east, or west — which way to the castle?', es:'Volá al norte, sur, este, u oeste — ¿por dónde queda el castillo?', pron:'flái norz, sáuz, íist, or uést — uích uéi tu de cásol?'},
      {en:'Downtown is full of dragons; the outskirts are full of giants!', es:'¡El centro está lleno de dragones; las afueras están llenas de gigantes!', pron:'dáuntaun is ful of drágons; de áutskerts ar ful of yáiants!'},
      {en:'This is the delivery route, and this is the optimal route!', es:'¡Esta es la ruta de distribución, y esta es la ruta óptima!', pron:'dis is de delíveri rúut, and dis is de áptimal rúut!'},
      {en:'Multiple stops, one dispatch, and we deliver to the whole kingdom!', es:'¡Múltiples paradas, un despacho, y entregamos a todo el reino!', pron:'máltipol staps, uán díspach, and uí delíver tu de jóul kíngdom!'}
    ],
    jingle:[
      {en:'North and south, east and west!', es:'Norte y sur, ¡este y oeste!', pron:'norz and sáuz, íist and uést!'},
      {en:'Downtown, outskirts, we know best!', es:'Centro, afueras, ¡lo sabemos mejor!', pron:'dáuntaun, áutskerts, uí nóu best!'},
      {en:'Delivery route, optimal too!', es:'Ruta de distribución, ¡óptima también!', pron:'delíveri rúut, áptimal tú!'},
      {en:'Multiple stops, dispatch for you!', es:'Múltiples paradas, ¡despacho para vos!', pron:'máltipol staps, díspach for iú!'}
    ]
  },
{
    day:72, unit:6, unitTitle:'Unidad 6 · Semanas 11-12', theme:'Repaso y cierre de la Unidad 6',
    words:[
      {en:'unit six', es:'unidad seis', pron:'iúnit six', emoji:'6️⃣'},
      {en:'great job so far', es:'muy buen trabajo hasta ahora', pron:'gréit yab sóu far', emoji:'👏'},
      {en:'keep pushing', es:'seguí esforzándote', pron:'kíip púshing', emoji:'💪'},
      {en:"you're doing great", es:'lo estás haciendo genial', pron:'iór dúing gréit', emoji:'🌟'},
      {en:'more than a third', es:'más de un tercio', pron:'mor dan a zerd', emoji:'📊'},
      {en:'stay consistent', es:'mantené la constancia', pron:'stéi cansístent', emoji:'🔁'},
      {en:'see you in unit seven', es:'nos vemos en la unidad siete', pron:'síi iú in iúnit séven', emoji:'➡️'},
      {en:'next unit', es:'próxima unidad', pron:'next iúnit', emoji:'➡️'}
    ],
    story:[
      {en:"Welcome to unit six's grand finale, brave hero — great job so far!", es:'¡Bienvenido al gran final de la unidad seis, valiente héroe — muy buen trabajo hasta ahora!', pron:'uélcam tu iúnit síxis grand fináli, bréiv jírou — gréit yab sóu far!'},
      {en:"Keep pushing, you're doing great — more than a third of the journey is done!", es:'¡Seguí esforzándote, lo estás haciendo genial — más de un tercio del viaje está hecho!', pron:'kíip púshing, iór dúing gréit — mor dan a zerd of de yérni is dan!'},
      {en:'Stay consistent, dragon trader — see you in the next unit!', es:'Mantené la constancia, comerciante de dragones — ¡nos vemos en la próxima unidad!', pron:'stéi cansístent, drágon tréider — síi iú in de next iúnit!'}
    ],
    jingle:[
      {en:'Unit six, great job so far!', es:'Unidad seis, ¡muy buen trabajo hasta ahora!', pron:'iúnit six, gréit yab sóu far!'},
      {en:"Keep pushing, you're a star!", es:'Seguí esforzándote, ¡sos una estrella!', pron:'kíip púshing, iór a star!'},
      {en:'More than a third, stay consistent, friend!', es:'Más de un tercio, mantené la constancia, ¡amigo!', pron:'mor dan a zerd, stéi cansístent, frend!'},
      {en:'See you in unit seven, till the end!', es:'Nos vemos en la unidad siete, ¡hasta el final!', pron:'síi iú in iúnit séven, til de end!'}
    ]
  }
];
