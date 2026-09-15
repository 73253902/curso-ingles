// ================================================================
// KARAOKE — Canciones 100% en inglés para práctica auditiva y de escritura
// Una canción por día, desde el Día 15 en adelante — con audio real
// (no voz sintética). El alumno ve solo la pronunciación fonética,
// escucha la canción real, y escribe la letra en inglés que entendió
// — después puede revisar contra la letra real.
// ================================================================

const karaoke = {
  canciones: [
    { dia:15, titulo:"Check Off The List", audio:"audio/dia15_practica_auditiva.mp3",
      lineas:[
        {seccion:"Verse 1"},
        {en:"Gotta drink water and go walk", es:"Tengo que tomar agua e ir a caminar", pron:"gára drink uóter and góu uók"},
        {en:"I eat breakfast before I talk", es:"Desayuno antes de hablar", pron:"ái íit brékfast bifór ái tok"},
        {en:"Then I drive till I park", es:"Después manejo hasta que estaciono", pron:"den ái dráiv til ái park"},
        {en:"Work this shift until the dark", es:"Trabajo este turno hasta que oscurece", pron:"uork dis shift antíl de dark"},
        {seccion:"Chorus"},
        {en:"Check off the list", es:"Marca en la lista", pron:"chek of de list"},
        {en:"Deliver the goods", es:"Entrega la mercancía", pron:"dilíver de guds"},
        {en:"Check off the list", es:"Marca en la lista", pron:"chek of de list"},
        {en:"Stand where I should", es:"Quédate donde debo estar", pron:"stand uér ái shud"},
        {seccion:"Verse 2"},
        {en:"Time to read all the code", es:"Hora de leer todo el código", pron:"táim tu ríid ol de cóud"},
        {en:"Then organize my heavy load", es:"Después organizo mi carga pesada", pron:"den órganáiz mái jévi lóud"},
        {en:"Write it down so it stays", es:"Lo anoto para que quede registrado", pron:"ráit it dáun sóu it stéis"},
        {en:"Workin' through the afternoon haze", es:"Trabajando durante la neblina de la tarde", pron:"uórkin zru de áfternun jéis"},
        {seccion:"Chorus"},
        {en:"Check off the list", es:"Marca en la lista", pron:"chek of de list"},
        {en:"Deliver the goods", es:"Entrega la mercancía", pron:"dilíver de guds"},
        {en:"Check off the list", es:"Marca en la lista", pron:"chek of de list"},
        {en:"Stand where I should", es:"Quédate donde debo estar", pron:"stand uér ái shud"},
        {seccion:"Guitar Solo (instrumental)"},
        {seccion:"Chorus (final)"},
        {en:"Check off the list", es:"Marca en la lista", pron:"chek of de list"},
        {en:"Deliver the goods", es:"Entrega la mercancía", pron:"dilíver de guds"},
        {en:"Check off the list", es:"Marca en la lista", pron:"chek of de list"},
        {en:"Stand where I should", es:"Quédate donde debo estar", pron:"stand uér ái shud"},
        {seccion:"Outro"},
        {en:"Call 'em up and fix it fast", es:"Los llamo y lo arreglo rápido", pron:"col em ap and fix it fast"},
        {en:"Make that sturdy structure last", es:"Hago que esa estructura resistente dure", pron:"méik dat stérdi stráktchur last"},
        {en:"Send and receive all the day", es:"Envío y recibo todo el día", pron:"send and risíiv ol de déi"},
        {en:"Now I am finished with my pay", es:"Ahora termino con mi pago", pron:"náu ái am fínisht uid mái péi"}
      ]
    },
    { dia:16, titulo:"Learning English Is Easy", audio:"audio/dia16_practica_auditiva.mp3",
      lineas:[
        {seccion:"Verse 1"},
        {en:"I have to use the hammer to fix the wall", es:"Tengo que usar el martillo para arreglar la pared", pron:"ái jav tu iús de jámer tu fix de uol"},
        {en:"I have to find the screwdriver in the hall", es:"Tengo que encontrar el desarmador en el pasillo", pron:"ái jav tu fáind de scrúdráiver in de jol"},
        {en:"I have to climb the ladder to reach the high shelf", es:"Tengo que subir la escalera para alcanzar el estante alto", pron:"ái jav tu cláim de láder tu ríich de jái shelf"},
        {en:"I have to buy the paint to paint it by myself", es:"Tengo que comprar la pintura para pintarlo yo mismo", pron:"ái jav tu bái de péint tu péint it bái máiself"},
        {seccion:"Pedal"},
        {en:"Learning English is easy,", es:"Aprender inglés es fácil,", pron:"lérning ínglish is íisi,"},
        {en:"You're going to love it!", es:"¡Te va a encantar!", pron:"iór góing tu lav it!"},
        {seccion:"Chorus"},
        {en:"I don't have to finish this today", es:"No tengo que terminar esto hoy", pron:"ái dont jav tu fínish dis tudéi"},
        {en:"Do you have to deliver this today?", es:"¿Tienes que entregar esto hoy?", pron:"du iú jav tu dilíver dis tudéi?"},
        {en:"Yes, I do", es:"Sí", pron:"iés, ái du"},
        {en:"No, I don't", es:"No", pron:"nóu, ái dont"},
        {seccion:"Verse 2"},
        {en:"I have to grab the pen and write down the note", es:"Tengo que agarrar el lapicero y anotar la nota", pron:"ái jav tu grab de pen and ráit dáun de nóut"},
        {en:"I have to sign the paper for the quote", es:"Tengo que firmar el papel para la cotización", pron:"ái jav tu sáin de péiper for de cuóut"},
        {en:"I have to use the stapler on the file", es:"Tengo que usar la grapadora en el expediente", pron:"ái jav tu iús de stéipler on de fáil"},
        {en:"I have to organize the folder with a smile", es:"Tengo que organizar la carpeta con una sonrisa", pron:"ái jav tu órganáiz de fóulder uid a smáil"},
        {seccion:"Bridge"},
        {en:"Do you have to grab the tape and the scissors?", es:"¿Tienes que agarrar la cinta y las tijeras?", pron:"du iú jav tu grab de téip and de sísors?"},
        {en:"I don't have to use the broom, no need for misers", es:"No tengo que usar la escoba, no hace falta", pron:"ái dont jav tu iús de brum, nóu níid for máisers"},
        {en:"I have to fill the bucket and push the cart", es:"Tengo que llenar el balde y empujar el carrito", pron:"ái jav tu fil de báket and push de cart"},
        {en:"To finish up the warehouse before it gets dark", es:"Para terminar el almacén antes de que oscurezca", pron:"tu fínish ap de uérjaus bifór it guets dark"},
        {seccion:"Outro"},
        {en:"See you next week, dragon friend,", es:"Nos vemos la próxima semana, amigo dragón,", pron:"síi iú next uíik, drágon frend,"},
        {en:"Keep practicing until the end.", es:"Sigue practicando hasta el final.", pron:"kíip práctising antíl de end."}
      ]
    },
    { dia:17, titulo:"Caring Makes A Team", audio:"audio/dia17_practica_auditiva.mp3",
      lineas:[
        {seccion:"Intro"},
        {en:"Let us look at how caring for those we love builds the values that make us a team.", es:"Veamos cómo cuidar a quienes amamos construye los valores que nos hacen un equipo.", pron:"Let as luk at jáu kéring for dóus uí lav bilds de váliuus dat méik as a tíim."},
        {seccion:"Verse 1"},
        {en:"We start the morning with a joyful sound", es:"Empezamos la mañana con un sonido alegre", pron:"uí start de mórning uid a yóiful sáund"},
        {en:"I have a dog that follows me around", es:"Tengo un perro que me sigue a todos lados", pron:"ái jav a dog dat fálous mi aráund"},
        {en:"You have a cat sleeping on the chair", es:"Tienes un gato durmiendo en la silla", pron:"iú jav a cat slíiping on de cher"},
        {en:"And I have a bird singing in the air", es:"Y tengo un pájaro cantando en el aire", pron:"and ái jav a berd sínging in de er"},
        {en:"We have two pets waiting at the door", es:"Tenemos dos mascotas esperando en la puerta", pron:"uí jav tú pets uéiting at de dor"},
        {en:"And they remind us what we're working for", es:"Y nos recuerdan para qué trabajamos", pron:"and déi rimáind as uát uír uórking for"},
        {en:"Every single morning we just have to feed", es:"Cada mañana simplemente tenemos que alimentar", pron:"évri síngol mórning uí yast jav tu fíid"},
        {en:"Providing all the care and the love they need", es:"Dándoles todo el cuidado y el amor que necesitan", pron:"prováiding ol de ker and de lav déi níid"},
        {seccion:"Chorus"},
        {en:"This is our vision, this is our drive!", es:"¡Esta es nuestra visión, este es nuestro impulso!", pron:"dis is áur víshion, dis is áur dráiv!"},
        {en:"This is our mission that keeps us alive!", es:"¡Esta es nuestra misión que nos mantiene vivos!", pron:"dis is áur míshion dat kíips as aláiv!"},
        {en:"We build on teamwork, we build on trust!", es:"¡Construimos sobre el trabajo en equipo, construimos sobre la confianza!", pron:"uí bild on tíimuork, uí bild on trast!"},
        {en:"Honesty and respect are an absolute must!", es:"¡La honestidad y el respeto son totalmente indispensables!", pron:"ánesti and rispéct ar an ábsoluut mast!"},
        {en:"Growth is the mountain that we all will climb!", es:"¡El crecimiento es la montaña que todos vamos a escalar!", pron:"gróuz is de máuntan dat uí ol uil cláim!"},
        {en:"With a strong commitment every single time!", es:"¡Con un compromiso fuerte cada vez!", pron:"uid a strong camítment évri síngol táim!"},
        {en:"Yeah, this is the culture we are making here!", es:"¡Sí, esta es la cultura que estamos construyendo aquí!", pron:"iéa, dis is de cálchur uí ar méiking jíar!"},
        {en:"Where every voice is valued and every vision clear!", es:"¡Donde cada voz es valorada y cada visión es clara!", pron:"uér évri vóis is váliud and évri víshion clíar!"},
        {seccion:"Verse 2"},
        {en:"He has a dog and he walks it in the park", es:"Él tiene un perro y lo pasea en el parque", pron:"ji jas a dog and ji uóks it in de park"},
        {en:"She has a cat that meows in the dark", es:"Ella tiene un gato que maúlla en la oscuridad", pron:"shi jas a cat dat míaus in de dark"},
        {en:"They have a bird with feathers of blue", es:"Ellos tienen un pájaro con plumas azules", pron:"déi jav a berd uid féders of blú"},
        {en:"And they have to feed their little families too", es:"Y también tienen que alimentar a sus pequeñas familias", pron:"and déi jav tu fíid der lítol fámilis tu"},
        {en:"From caring for them, we can truly see", es:"Al cuidarlos, realmente podemos ver", pron:"fram kéring for dem, uí can trúli síi"},
        {en:"How responsibility makes a good company", es:"Cómo la responsabilidad hace una buena empresa", pron:"jáu rispansibíliti méiks a gud cámpani"},
        {en:"She has a heart that is ready to lead", es:"Ella tiene un corazón listo para liderar", pron:"shi jas a jart dat is rédi tu líid"},
        {en:"And he has the focus to help us succeed", es:"Y él tiene el enfoque para ayudarnos a triunfar", pron:"and ji jas de fóucas tu jelp as sakcíid"},
        {seccion:"Chorus"},
        {en:"This is our vision, this is our drive!", es:"¡Esta es nuestra visión, este es nuestro impulso!", pron:"dis is áur víshion, dis is áur dráiv!"},
        {en:"This is our mission that keeps us alive!", es:"¡Esta es nuestra misión que nos mantiene vivos!", pron:"dis is áur míshion dat kíips as aláiv!"},
        {en:"We build on teamwork, we build on trust!", es:"¡Construimos sobre el trabajo en equipo, construimos sobre la confianza!", pron:"uí bild on tíimuork, uí bild on trast!"},
        {en:"Honesty and respect are an absolute must!", es:"¡La honestidad y el respeto son totalmente indispensables!", pron:"ánesti and rispéct ar an ábsoluut mast!"},
        {en:"Growth is the mountain that we all will climb!", es:"¡El crecimiento es la montaña que todos vamos a escalar!", pron:"gróuz is de máuntan dat uí ol uil cláim!"},
        {en:"With a strong commitment every single time!", es:"¡Con un compromiso fuerte cada vez!", pron:"uid a strong camítment évri síngol táim!"},
        {en:"Yeah, this is the culture we are making here!", es:"¡Sí, esta es la cultura que estamos construyendo aquí!", pron:"iéa, dis is de cálchur uí ar méiking jíar!"},
        {en:"Where every voice is valued and every vision clear!", es:"¡Donde cada voz es valorada y cada visión es clara!", pron:"uér évri vóis is váliud and évri víshion clíar!"},
        {seccion:"Bridge"},
        {en:"Imagine a bridge that is built out of care", es:"Imagina un puente construido con cuidado", pron:"imáyin a brich dat is bild áut of ker"},
        {en:"Where everyone has a safe space to share", es:"Donde todos tienen un espacio seguro para compartir", pron:"uér évriuan jas a séif spéis tu sher"},
        {en:"From the love for our pets to the goals of our team", es:"Desde el amor por nuestras mascotas hasta las metas de nuestro equipo", pron:"fram de lav for áur pets tu de góuls of áur tíim"},
        {en:"We are turning this spark to a powerful dream", es:"Estamos convirtiendo esta chispa en un sueño poderoso", pron:"uí ar térning dis spark tu a páuerful dríim"},
        {en:"With honesty guiding the path that we make", es:"Con la honestidad guiando el camino que hacemos", pron:"uid ánesti gáiding de paz dat uí méik"},
        {en:"And trust in the steps that we willingly take", es:"Y confianza en los pasos que damos con gusto", pron:"and trast in de steps dat uí uílingli téik"},
        {seccion:"Chorus (final)"},
        {en:"This is our vision, this is our drive!", es:"¡Esta es nuestra visión, este es nuestro impulso!", pron:"dis is áur víshion, dis is áur dráiv!"},
        {en:"This is our mission that keeps us alive!", es:"¡Esta es nuestra misión que nos mantiene vivos!", pron:"dis is áur míshion dat kíips as aláiv!"},
        {en:"We build on teamwork, we build on trust!", es:"¡Construimos sobre el trabajo en equipo, construimos sobre la confianza!", pron:"uí bild on tíimuork, uí bild on trast!"},
        {en:"Honesty and respect are an absolute must!", es:"¡La honestidad y el respeto son totalmente indispensables!", pron:"ánesti and rispéct ar an ábsoluut mast!"},
        {en:"Growth is the mountain that we all will climb!", es:"¡El crecimiento es la montaña que todos vamos a escalar!", pron:"gróuz is de máuntan dat uí ol uil cláim!"},
        {en:"With a strong commitment every single time!", es:"¡Con un compromiso fuerte cada vez!", pron:"uid a strong camítment évri síngol táim!"},
        {en:"Yeah, this is the culture we are making here!", es:"¡Sí, esta es la cultura que estamos construyendo aquí!", pron:"iéa, dis is de cálchur uí ar méiking jíar!"},
        {en:"Where every voice is valued and every vision clear!", es:"¡Donde cada voz es valorada y cada visión es clara!", pron:"uér évri vóis is váliud and évri víshion clíar!"},
        {seccion:"Outro"},
        {en:"Remember that learning English is easy,", es:"Recuerda que aprender inglés es fácil,", pron:"rimémber dat lérning ínglish is íisi,"},
        {en:"you are going to love it!", es:"¡te va a encantar!", pron:"iú ar góing tu lav it!"},
        {en:"So keep practicing the words that we learned on this day,", es:"Así que sigue practicando las palabras que aprendimos hoy,", pron:"sóu kíip práctising de uords dat uí lernd on dis déi,"},
        {en:"And remember the values that show us the way.", es:"Y recuerda los valores que nos muestran el camino.", pron:"and rimémber de váliuus dat shóu as de uéi."},
        {en:"This is the Dragon signing off for now, my friend.", es:"Aquí se despide el Dragón por ahora, amigo.", pron:"dis is de drágon sáining of for náu, mái frend."},
        {en:"Keep moving, keep growing right up to the end.", es:"Sigue avanzando, sigue creciendo hasta el final.", pron:"kíip múuving, kíip gróuing ráit ap tu de end."}
      ]
    },
    { dia:18, titulo:"Captain Orion's Journey", audio:"audio/dia18_practica_auditiva.mp3",
      lineas:[
        {seccion:"Intro"},
        {en:"Count down the stars. We are ready for lift-off.", es:"Cuenta regresiva de las estrellas. Estamos listos para el despegue.", pron:"cáunt dáun de stars. uí ar rédi for lift-of."},
        {seccion:"Verse 1"},
        {en:"Captain Orion steers through the cosmic night,", es:"El Capitán Orión navega por la noche cósmica,", pron:"cáptin oráion stírs zru de cásmic náit,"},
        {en:"His loyal spaceship gleaming with silver light.", es:"Su nave leal brillando con luz plateada.", pron:"jis lóial spéiship glíiming uid sílver láit."},
        {en:"He flies past nebulae where the stardust streams,", es:"Vuela más allá de las nebulosas donde fluye el polvo estelar,", pron:"ji fláis past nébiuli uér de stárdast stríims,"},
        {en:"Living a life of wonder and endless dreams.", es:"Viviendo una vida de asombro y sueños sin fin.", pron:"líving a láif of uánder and éndles dríims."},
        {seccion:"Verse 2"},
        {en:"Down on the base station, bustling and bright,", es:"Abajo en la estación base, bulliciosa y brillante,", pron:"dáun on de béis stéishion, básling and bráit,"},
        {en:"A friendly neighbor welcomes the morning light.", es:"Un vecino amigable recibe la luz de la mañana.", pron:"a fréndli néibor uélcams de mórning láit."},
        {en:"Our space neighborhood feels like a community grand,", es:"Nuestro vecindario espacial se siente como una gran comunidad,", pron:"áur spéis néiborjud fíils láik a camiúniti grand,"},
        {en:"Where robots and wizards walk hand in hand.", es:"Donde robots y magos caminan de la mano.", pron:"uér róubats and uízards uók jand in jand."},
        {seccion:"Chorus"},
        {en:"I recommend our journey across the sky,", es:"Recomiendo nuestro viaje a través del cielo,", pron:"ái récomend áur yérni acrós de skái,"},
        {en:"I recommend the stars where the comets fly.", es:"Recomiendo las estrellas donde vuelan los cometas.", pron:"ái récomend de stars uér de cámets flái."},
        {en:"I recommend a solution to every space fear,", es:"Recomiendo una solución para cada miedo espacial,", pron:"ái récomend a solúshion tu évri spéis fíar,"},
        {en:"As loyal customers gather from far and near.", es:"Mientras clientes leales se reúnen de cerca y de lejos.", pron:"as lóial cástomers gáder fram far and níar."},
        {seccion:"Verse 3"},
        {en:"Princess Lyra meets a regular customer true,", es:"La Princesa Lyra conoce a un cliente habitual de verdad,", pron:"prínses láira míits a réguiular cástomer trú,"},
        {en:"A thousand-year phoenix of golden hue.", es:"Un fénix de mil años de color dorado.", pron:"a záuzand-íar fíniks of góulden jiú."},
        {en:"She brings her feedback with a joyful song,", es:"Ella trae sus comentarios con una canción alegre,", pron:"shi brings jer fíidbak uid a yóiful song,"},
        {en:"Helping our long-term relationship grow strong.", es:"Ayudando a que nuestra relación a largo plazo crezca fuerte.", pron:"jélping áur long-term riléishionship gróu strong."},
        {seccion:"Bridge"},
        {en:"If there is ever a complaint in the galaxy deep,", es:"Si alguna vez hay una queja en las profundidades de la galaxia,", pron:"if der is éver a campléint in de gálaxi díip,"},
        {en:"When asteroid shadows begin to creep,", es:"Cuando las sombras de los asteroides empiezan a acercarse,", pron:"uén ásteroid shádous bigín tu críip,"},
        {en:"A brave space dragon arrives on the scene,", es:"Un valiente dragón espacial llega a la escena,", pron:"a bréiv spéis drágon aráivs on de síin,"},
        {en:"Solving all troubles for our cosmic machine!", es:"¡Resolviendo todos los problemas de nuestra máquina cósmica!", pron:"sálving ol tráboles for áur cásmic mashín!"},
        {seccion:"Chorus (final)"},
        {en:"I recommend our journey across the sky,", es:"Recomiendo nuestro viaje a través del cielo,", pron:"ái récomend áur yérni acrós de skái,"},
        {en:"I recommend the stars where the comets fly.", es:"Recomiendo las estrellas donde vuelan los cometas.", pron:"ái récomend de stars uér de cámets flái."},
        {en:"I recommend a solution to every space fear,", es:"Recomiendo una solución para cada miedo espacial,", pron:"ái récomend a solúshion tu évri spéis fíar,"},
        {en:"As loyal customers gather from far and near.", es:"Mientras clientes leales se reúnen de cerca y de lejos.", pron:"as lóial cástomers gáder fram far and níar."},
        {seccion:"Outro"},
        {en:"Learning English is easy, you're going to love it!", es:"Aprender inglés es fácil, ¡te va a encantar!", pron:"lérning ínglish is íisi, iór góing tu lav it!"},
        {en:"Keep practicing until the end, my friend.", es:"Sigue practicando hasta el final, amigo.", pron:"kíip práctising antíl de end, mái frend."},
        {en:"See you next week, dragon friend.", es:"Nos vemos la próxima semana, amigo dragón.", pron:"síi iú next uíik, drágon frend."},
        {en:"This is the Dragon signing off from the stars. Peace out.", es:"Aquí se despide el Dragón desde las estrellas. Cuídate.", pron:"dis is de drágon sáining of fram de stars. píis áut."}
      ]
    },
    { dia:19, titulo:"Love Among The Stars", audio:"audio/dia19_practica_auditiva.mp3",
      lineas:[
        {seccion:"Prologue"},
        {en:"Welcome, explorers.", es:"Bienvenidos, exploradores.", pron:"uélcam, explórers."},
        {en:"Are you ready for Lesson 19?", es:"¿Están listos para la Lección 19?", pron:"ar iú rédi for léson naintíin?"},
        {en:"Let's embark on a journey through the stars with a romantic twist.", es:"Embarquémonos en un viaje por las estrellas con un toque romántico.", pron:"lets embárk on a yérni zru de stars uid a romántic tuíst."},
        {en:"By the way, take your time.", es:"A propósito, tómate tu tiempo.", pron:"bái de uéi, téik iór táim."},
        {en:"There's no rush in learning.", es:"No hay apuro al aprender.", pron:"ders nóu rash in lérning."},
        {en:"Let's practice together.", es:"Practiquemos juntos.", pron:"lets práctis tugéder."},
        {seccion:"Pedal"},
        {en:"Learning English is easy, you're going to love it!", es:"Aprender inglés es fácil, ¡te va a encantar!", pron:"lérning ínglish is íisi, iór góing tu lav it!"},
        {en:"Keep practicing until the end, my friend.", es:"Sigue practicando hasta el final, amigo.", pron:"kíip práctising antíl de end, mái frend."},
        {seccion:"Verse 1"},
        {en:"By the way, actually, I am almost there,", es:"A propósito, en realidad, ya casi llego,", pron:"bái de uéi, ákchuali, ái am ólmoust der,"},
        {en:"Searching for your heart in the galaxy's glare,", es:"Buscando tu corazón en el resplandor de la galaxia,", pron:"sérching for iór jart in de gálaxis gler,"},
        {en:"For example, in general, my love is a guide,", es:"Por ejemplo, en general, mi amor es una guía,", pron:"for exámpol, in yéneral, mái lav is a gáid,"},
        {en:"As usual, don't worry, I am here by your side.", es:"Como siempre, no te preocupes, estoy aquí a tu lado.", pron:"as iúshual, dont uóri, ái am jíar bái iór sáid."},
        {en:"It's fine, take your time, the stars can still wait,", es:"Está bien, tómate tu tiempo, las estrellas pueden esperar,", pron:"its fáin, téik iór táim, de stars can stil uéit,"},
        {en:"No rush in our journey to this heavenly gate.", es:"Sin prisa en nuestro viaje hacia esta puerta celestial.", pron:"nóu rash in áur yérni tu dis jévenli guéit."},
        {en:"We are still exploring worlds yet unknown,", es:"Todavía estamos explorando mundos desconocidos,", pron:"uí ar stil eksplóring uórlds iet annóun,"},
        {en:"But with you, my love, I am never alone.", es:"Pero contigo, mi amor, nunca estoy solo.", pron:"bat uid iú, mái lav, ái am néver alóun."},
        {seccion:"Chorus"},
        {en:"By the way, don't worry, it's fine, take your time,", es:"A propósito, no te preocupes, está bien, tómate tu tiempo,", pron:"bái de uéi, dont uóri, its fáin, téik iór táim,"},
        {en:"By the way, as usual, we keep it quite steady,", es:"A propósito, como siempre, lo mantenemos bastante estable,", pron:"bái de uéi, as iúshual, uí kíip it cuáit stédi,"},
        {en:"By the way, actually, this is almost ready,", es:"A propósito, en realidad, esto ya casi está listo,", pron:"bái de uéi, ákchuali, dis is ólmoust rédi,"},
        {en:"By the way, for example, we'll reach for the stars,", es:"A propósito, por ejemplo, alcanzaremos las estrellas,", pron:"bái de uéi, for exámpol, uíl ríich for de stars,"},
        {en:"No rush, no hurry, our love is quite vast,", es:"Sin prisa, sin apuro, nuestro amor es bastante vasto,", pron:"nóu rash, nóu jári, áur lav is cuáit vast,"},
        {en:"Leaving all worries and fears in the past.", es:"Dejando todas las preocupaciones y miedos en el pasado.", pron:"líiving ol uóris and fíars in de past."},
        {en:"Still glowing brighter than any great sun,", es:"Todavía brillando más fuerte que cualquier gran sol,", pron:"stil glóuing bráiter dan éni gréit san,"},
        {en:"Our infinite journey has only begun.", es:"Nuestro viaje infinito apenas ha comenzado.", pron:"áur ínfinit yérni jas óunli bigán."},
        {seccion:"Verse 2"},
        {en:"The nebula castle is glowing with light,", es:"El castillo de la nebulosa brilla con luz,", pron:"de nébiula cásol is glóuing uid láit,"},
        {en:"Actually, finding you made it so bright,", es:"En realidad, encontrarte lo hizo tan brillante,", pron:"ákchuali, fáinding iú méid it sóu bráit,"},
        {en:"By the way, as usual, you stole my own heart,", es:"A propósito, como siempre, te robaste mi corazón,", pron:"bái de uéi, as iúshual, iú stóul mái óun jart,"},
        {en:"Even in space, we will never grow apart.", es:"Incluso en el espacio, nunca nos separaremos.", pron:"íven in spéis, uí uil néver gróu apárt."},
        {en:"For example, I'm ready to love you for real,", es:"Por ejemplo, estoy listo para amarte de verdad,", pron:"for exámpol, áim rédi tu lav iú for ríal,"},
        {en:"A cosmic connection that both of us feel.", es:"Una conexión cósmica que ambos sentimos.", pron:"a cásmic canékshion dat bóuz of as fíil."},
        {en:"Take your time, it is fine, the universe waits,", es:"Tómate tu tiempo, está bien, el universo espera,", pron:"téik iór táim, it is fáin, de iúnivers uéits,"},
        {en:"No rush as we open these destiny gates.", es:"Sin prisa mientras abrimos estas puertas del destino.", pron:"nóu rash as uí óupen díis déstini guéits."},
        {seccion:"Pedal"},
        {en:"Learning English is easy, you're going to love it!", es:"Aprender inglés es fácil, ¡te va a encantar!", pron:"lérning ínglish is íisi, iór góing tu lav it!"},
        {en:"Keep practicing until the end, my friend.", es:"Sigue practicando hasta el final, amigo.", pron:"kíip práctising antíl de end, mái frend."},
        {seccion:"Chorus (final)"},
        {en:"By the way, don't worry, it's fine, take your time,", es:"A propósito, no te preocupes, está bien, tómate tu tiempo,", pron:"bái de uéi, dont uóri, its fáin, téik iór táim,"},
        {en:"By the way, as usual, we keep it quite steady,", es:"A propósito, como siempre, lo mantenemos bastante estable,", pron:"bái de uéi, as iúshual, uí kíip it cuáit stédi,"},
        {en:"By the way, actually, this is almost ready,", es:"A propósito, en realidad, esto ya casi está listo,", pron:"bái de uéi, ákchuali, dis is ólmoust rédi,"},
        {en:"By the way, for example, we'll reach for the stars,", es:"A propósito, por ejemplo, alcanzaremos las estrellas,", pron:"bái de uéi, for exámpol, uíl ríich for de stars,"},
        {en:"No rush, no hurry, our love is quite vast,", es:"Sin prisa, sin apuro, nuestro amor es bastante vasto,", pron:"nóu rash, nóu jári, áur lav is cuáit vast,"},
        {en:"Leaving all worries and fears in the past.", es:"Dejando todas las preocupaciones y miedos en el pasado.", pron:"líiving ol uóris and fíars in de past."},
        {en:"Still glowing brighter than any great sun,", es:"Todavía brillando más fuerte que cualquier gran sol,", pron:"stil glóuing bráiter dan éni gréit san,"},
        {en:"Our infinite journey has only begun.", es:"Nuestro viaje infinito apenas ha comenzado.", pron:"áur ínfinit yérni jas óunli bigán."},
        {seccion:"Outro"},
        {en:"Learning English is easy, you're going to love it!", es:"Aprender inglés es fácil, ¡te va a encantar!", pron:"lérning ínglish is íisi, iór góing tu lav it!"},
        {en:"Keep practicing until the end, my friend.", es:"Sigue practicando hasta el final, amigo.", pron:"kíip práctising antíl de end, mái frend."},
        {en:"See you next week, dragon friend.", es:"Nos vemos la próxima semana, amigo dragón.", pron:"síi iú next uíik, drágon frend."}
      ]
    }
  ]
};

// ================= Controlador de pantallas (independiente del motor principal) =================
(function(){
  let currentDia = null;

  function el(id){ return document.getElementById(id); }

  function openModule(){
    el('home').style.display='none';
    el('karaokeModulo').style.display='block';
    renderSongList();
    showView('lista');
  }
  function closeModule(){
    el('karaokeModulo').style.display='none';
    el('home').style.display='block';
  }
  function showView(view){
    el('kkSongList').style.display = view==='lista' ? 'block' : 'none';
    el('kkSongDetalle').style.display = view==='detalle' ? 'block' : 'none';
  }

  function renderSongList(){
    const box = el('kkSongListBox');
    box.innerHTML='';
    karaoke.canciones.forEach(cancion=>{
      const card = document.createElement('div');
      card.className='cg-regla-card';
      const numLineas = cancion.lineas.filter(l=>l.en).length;
      card.innerHTML = '<div class="cg-regla-num">'+cancion.dia+'</div>'
        +'<div class="cg-regla-info"><b>'+cancion.titulo+'</b><p>Día '+cancion.dia+' · '+numLineas+' líneas</p></div>'
        +'<div class="cg-regla-arrow">▶</div>';
      card.onclick=()=>{
        try{ currentDia=cancion.dia; renderSongDetalle(cancion.dia); showView('detalle'); }
        catch(e){ alert('Error al abrir la canción: '+e.message); console.error(e); }
      };
      box.appendChild(card);
    });
  }

  let currentLineInputs = [];

  function renderSongDetalle(dia){
    const cancion = karaoke.canciones.find(c=>c.dia===dia);
    el('kkSongTitulo').textContent = cancion.titulo+' — Día '+cancion.dia;
    el('kkResultBox').style.display='none';
    currentLineInputs = [];

    const audioBox = el('kkAudioBox');
    audioBox.innerHTML = '';
    const audioEl = document.createElement('audio');
    audioEl.controls = true;
    audioEl.style.width = '100%';
    audioEl.src = cancion.audio;
    audioBox.appendChild(audioEl);

    const pronBox = el('kkPronBox');
    pronBox.innerHTML='';
    cancion.lineas.forEach((linea)=>{
      if(linea.seccion){
        const sec = document.createElement('div');
        sec.style.cssText='color:var(--muted); font-size:12px; text-transform:uppercase; letter-spacing:.5px; margin-top:14px; margin-bottom:4px; font-weight:700;';
        sec.textContent = linea.seccion;
        pronBox.appendChild(sec);
        return;
      }
      const wrap = document.createElement('div');
      wrap.style.cssText='padding:8px 0; border-bottom:1px solid var(--border);';

      const row = document.createElement('div');
      row.style.cssText='display:flex; align-items:center; gap:10px;';
      const txt = document.createElement('span');
      txt.style.cssText='flex:1; font-size:14px; color:var(--en); font-style:italic;';
      txt.textContent = linea.pron;
      const btn = document.createElement('button');
      btn.className='mic';
      btn.style.cssText='min-height:36px; padding:6px 12px; font-size:13px;';
      btn.textContent='🔊';
      btn.onclick = async ()=>{
        btn.disabled=true;
        await speakHidden(linea.en);
        btn.disabled=false;
      };
      row.appendChild(txt);
      row.appendChild(btn);

      const inputEn = document.createElement('input');
      inputEn.type='text';
      inputEn.placeholder='Escribí acá esta línea en inglés...';
      inputEn.style.cssText='width:100%; margin-top:6px; background:var(--bg-panel-2); border:1px solid var(--border); border-radius:8px; padding:8px 10px; color:var(--ink); font-family:\'Inter\',sans-serif; font-size:14px;';

      const inputEs = document.createElement('input');
      inputEs.type='text';
      inputEs.placeholder='Escribí acá qué significa esa frase en español...';
      inputEs.style.cssText='width:100%; margin-top:6px; background:var(--bg-panel-2); border:1px solid var(--border); border-radius:8px; padding:8px 10px; color:var(--ink); font-family:\'Inter\',sans-serif; font-size:14px;';

      wrap.appendChild(row);
      wrap.appendChild(inputEn);
      wrap.appendChild(inputEs);
      pronBox.appendChild(wrap);

      currentLineInputs.push({ inputEn, inputEs, correctaEn: linea.en, correctaEs: linea.es||'' });
    });
  }

  function normalizarLinea(txt){
    return txt.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[^a-z0-9\s]/g,' ')
      .replace(/\s+/g,' ').trim();
  }

  function revisarLetra(){
    if(currentLineInputs.length===0) return;
    const algunaEscrita = currentLineInputs.some(li => li.inputEn.value.trim());
    if(!algunaEscrita){
      alert('Escribí primero al menos una línea, en inglés y en español, antes de revisar.');
      return;
    }
    let correctas = 0, intentadas = 0, faltaEspanol = 0;
    currentLineInputs.forEach(li=>{
      const escritoEn = li.inputEn.value.trim();
      const escritoEs = li.inputEs.value.trim();
      if(!escritoEn){ li.inputEn.style.borderColor='var(--border)'; li.inputEs.style.borderColor='var(--border)'; return; }
      intentadas++;
      const okEn = normalizarLinea(escritoEn) === normalizarLinea(li.correctaEn);
      li.inputEn.style.borderColor = okEn ? 'var(--ok)' : 'var(--warn)';
      if(okEn) correctas++;
      if(!escritoEs){ li.inputEs.style.borderColor='var(--warn)'; faltaEspanol++; }
      else { li.inputEs.style.borderColor='var(--border)'; }
    });
    const box = el('kkResultBox');
    box.style.display='block';
    const porcentaje = Math.round((correctas/intentadas)*100);
    box.className = 'dn-review-feedback '+(porcentaje>=70?'ok':porcentaje>=40?'neutral':'retry');
    const avisoEs = faltaEspanol>0 ? ('<br><b style="color:var(--warn);">Te falta escribir la traducción al español en '+faltaEspanol+' línea(s) (marcadas en naranja).</b>') : '';
    box.innerHTML = '<b>'+correctas+' de '+intentadas+' líneas en inglés correctas ('+porcentaje+'%)</b>'+avisoEs+'<br><span style="font-size:13px;">El inglés se revisa exacto (dictado) — el español es tu propio trabajo, no se califica como bien/mal, pero sí tienes que completarlo. Usa "Ver la letra correcta" para comparar tu traducción con una de referencia.</span>';
  }

  function revelarLetra(){
    currentLineInputs.forEach(li=>{
      li.inputEn.value = li.correctaEn;
      li.inputEn.style.borderColor = 'var(--border)';
      if(li.refEs) li.refEs.remove();
      const ref = document.createElement('div');
      ref.style.cssText='font-size:12px; color:var(--muted); margin-top:4px;';
      ref.textContent = 'Referencia: '+li.correctaEs;
      if(li.inputEs.parentNode) li.inputEs.parentNode.appendChild(ref);
      li.refEs = ref;
    });
    const box = el('kkResultBox');
    box.style.display='block';
    box.className = 'dn-review-feedback neutral';
    box.innerHTML = '<b>Te completamos el inglés, y agregamos una traducción de referencia debajo de cada campo en español.</b><br><span style="font-size:13px;">Tu traducción no se borró — compara tu propia versión con la referencia, no tiene que ser palabra por palabra igual.</span>';
  }

  async function speakHidden(text){
    return new Promise((resolve)=>{
      try{
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.onend = resolve;
        u.onerror = resolve;
        speechSynthesis.speak(u);
      } catch(e){ resolve(); }
    });
  }

  window.addEventListener('DOMContentLoaded', ()=>{
    el('kkEntryBtn').onclick = ()=>{
      try{ openModule(); }
      catch(e){ alert('Error al abrir Karaoke: '+e.message); console.error(e); }
    };
    el('kkBackBtn').onclick = closeModule;
    el('kkBackToListBtn').onclick = ()=>{ showView('lista'); renderSongList(); };
    el('kkCheckBtn').onclick = revisarLetra;
    el('kkRevealBtn').onclick = revelarLetra;
  });
})();
