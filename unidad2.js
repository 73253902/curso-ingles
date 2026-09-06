// Unidad 2 del curso — Días 13 a 24
// Este archivo se puede editar o reemplazar solo, sin tocar el resto del curso.
const curriculumUnidad2 = [
{
    day:13, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'La casa / Tu oficina y espacio de trabajo',
    structures:[
      {id:'S017', pattern:"There is a + [X]", examples:[
        {en:'There is a desk in my office.', es:'Hay un escritorio en mi oficina.', pron:'der is a desk in mái áfis.'},
        {en:'There is a computer on the table.', es:'Hay una computadora en la mesa.', pron:'der is a campiúter on de téibol.'},
        {en:'There is a window in the kitchen.', es:'Hay una ventana en la cocina.', pron:'der is a uíndou in de kíchen.'},
        {en:'There is a key in the drawer.', es:'Hay una llave en el cajón.', pron:'der is a kíi in de dróer.'}
      ], function:'decir que algo existe en un lugar', stage:1,
        transformations:{
          negative:{en:"There isn't a desk in my office.", es:'No hay un escritorio en mi oficina.'},
          question:{en:'Is there a desk in your office?', es:'¿Hay un escritorio en tu oficina?'},
          yesAnswer:{en:'Yes, there is.', es:'Sí, lo hay.'},
          noAnswer:{en:"No, there isn't.", es:'No, no lo hay.'}
        }}
    ],
    words:[
      {en:'house', es:'casa', pron:'jáus', emoji:'🏠'},
      {en:'kitchen', es:'cocina', pron:'quítchen', emoji:'🍳'},
      {en:'living room', es:'sala', pron:'lívin rúum', emoji:'🛋️'},
      {en:'bedroom', es:'dormitorio', pron:'bédrum', emoji:'🛏️'},
      {en:'garden', es:'jardín', pron:'gárden', emoji:'🌳'},
      {en:'door', es:'puerta', pron:'dóar', emoji:'🚪'},
      {en:'window', es:'ventana', pron:'uíndou', emoji:'🪟'},
      {en:'table', es:'mesa', pron:'téibol', emoji:'🪑'},
      {en:'chair', es:'silla', pron:'chér', emoji:'💺'},
      {en:'desk', es:'escritorio', pron:'desk', emoji:'🖥️'},
      {en:'office', es:'oficina', pron:'áfis', emoji:'🏢'},
      {en:'computer', es:'computadora', pron:'campiúter', emoji:'💻'},
      {en:'printer', es:'impresora', pron:'prínter', emoji:'🖨️'},
      {en:'shelf', es:'estante', pron:'shelf', emoji:'📚'},
      {en:'key', es:'llave', pron:'kíi', emoji:'🔑'},
      {en:'roof', es:'techo', pron:'rúuf', emoji:'🏚️'}
    ],
    story:[
      {en:'Welcome to my house — it floats above the clouds!', es:'¡Bienvenido a mi casa — flota sobre las nubes!', pron:'uélcam tu mái jáus — it flóuts abáv de cláuds!'},
      {en:'The kitchen is inside a volcano, and the living room has a pool full of stars.', es:'La cocina está dentro de un volcán, y la sala tiene una piscina llena de estrellas.', pron:'de quítchen is insáid a valkéinou, and de lívin rúum jas a púul ful of stars.'},
      {en:'My bedroom has no roof — I sleep looking at the whole galaxy!', es:'Mi dormitorio no tiene techo — ¡duermo mirando toda la galaxia!', pron:'mái bédrum jas nóu rúuf — ái slíip lúking at de jóul gálaxi!'},
      {en:'Go through the door, past the garden of singing flowers, to my office.', es:'Andá por la puerta, pasando el jardín de flores cantoras, hasta mi oficina.', pron:'góu zrú de dóar, past de gárden of sínging fláuers, tu mái áfis.'},
      {en:'My desk floats next to the window, with a computer made of crystal and a printer that prints rainbows!', es:'Mi escritorio flota al lado de la ventana, ¡con una computadora hecha de cristal y una impresora que imprime arcoíris!', pron:'mái desk flóuts next tu de uíndou, uid a campiúter méid of crístal and a prínter dat prints réinbous!'},
      {en:'The shelf holds a thousand magic keys, one for every table and chair in the kingdom.', es:'El estante tiene mil llaves mágicas, una para cada mesa y silla del reino.', pron:'de shelf jóulds a záusand máyic kíis, uán for évri téibol and chér in de kíngdom.'}
    ],
    jingle:[
      {en:'House and kitchen, living room too!', es:'Casa y cocina, ¡sala también!', pron:'jáus and quítchen, lívin rúum tú!'},
      {en:'Bedroom, garden, door and window!', es:'Dormitorio, jardín, ¡puerta y ventana!', pron:'bédrum, gárden, dóar and uíndou!'},
      {en:'Table, chair, desk in my office!', es:'Mesa, silla, ¡escritorio en mi oficina!', pron:'téibol, chér, desk in mái áfis!'},
      {en:'Computer, printer, key, and roof!', es:'Computadora, impresora, llave, ¡y techo!', pron:'campiúter, prínter, kíi, and rúuf!'}
    ]
  },
{
    day:14, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'Rutina diaria / Tu jornada laboral y horarios',
    structures:[
      {id:'S018', pattern:"I + [VERB] + at + [TIME]", examples:[
        {en:'I wake up at seven.', es:'Me despierto a las siete.', pron:'ái uéik ap at séven.'},
        {en:'I start work at eight.', es:'Empiezo a trabajar a las ocho.', pron:'ái start uork at éit.'},
        {en:'I finish work at five.', es:'Termino de trabajar a las cinco.', pron:'ái fínish uork at fáiv.'},
        {en:'I have lunch at noon.', es:'Almuerzo al mediodía.', pron:'ái jav lanch at núun.'}
      ], function:'contar tu rutina y horarios', stage:1,
        transformations:{
          negative:{en:"I don't wake up at seven.", es:'No me despierto a las siete.'},
          question:{en:'Do you wake up at seven?', es:'¿Te despiertas a las siete?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'},
          future:{en:'I will wake up at seven.', es:'Me voy a despertar a las siete.'}
        }}
    ],
    words:[
      {en:'wake up', es:'despertarse', pron:'uéik ap', emoji:'⏰'},
      {en:'get up', es:'levantarse', pron:'guét ap', emoji:'🧍'},
      {en:'breakfast', es:'desayuno', pron:'brékfast', emoji:'🍳'},
      {en:'lunch', es:'almuerzo', pron:'lanch', emoji:'🍽️'},
      {en:'dinner', es:'cena', pron:'díner', emoji:'🍽️'},
      {en:'go to work', es:'ir al trabajo', pron:'góu tu uork', emoji:'🚗'},
      {en:'start work', es:'empezar a trabajar', pron:'start uork', emoji:'▶️'},
      {en:'finish work', es:'terminar de trabajar', pron:'fínish uork', emoji:'⏹️'},
      {en:'break', es:'descanso', pron:'bréik', emoji:'☕'},
      {en:'shift', es:'turno', pron:'shift', emoji:'🕐'},
      {en:'overtime', es:'horas extra', pron:'óvertaim', emoji:'⏱️'},
      {en:'day off', es:'día libre', pron:'déi of', emoji:'🌴'},
      {en:'punctual', es:'puntual', pron:'pánchual', emoji:'✅'},
      {en:'tired', es:'cansado', pron:'táiard', emoji:'😴'},
      {en:'rest', es:'descansar', pron:'rest', emoji:'🛌'}
    ],
    songJingle:'cancion-dia14-vocabulario.mp3',
    songStory:'cancion-dia14-historia.mp3',
    songJingleLyrics:[
            {en:'', es:'El sol galáctico se levanta y el dragón inicia su jornada...', pron:''},
            {en:'Wake up, get up, breakfast!', es:'¡Despertar, levantarse, desayuno!', pron:'uéik ap, guét ap, brékfast!'},
            {en:'I wake up at seven.', es:'¡Me despierto a las siete!', pron:'ái uéik ap at séven.'},
            {en:'I start work at eight.', es:'¡Empiezo a trabajar a las ocho!', pron:'ái start uork at éit.'},
            {en:'Go to work, start work, break!', es:'¡Ir a trabajar, empezar a trabajar, descanso!', pron:'góu tu uork, start uork, bréik!'},
            {en:'', es:'El robot detective revisa el cajón del escritorio en la oficina...', pron:''},
            {en:'Lunch, drawer, shift, overtime!', es:'¡Almuerzo, cajón, turno, horas extra!', pron:'lanch, dror, shift, óvertaim!'},
            {en:'I have lunch at noon.', es:'¡Almuerzo al mediodía!', pron:'ái jav lanch at núun.'},
            {en:'Look inside the drawer during your break!', es:'¡Mira dentro del cajón durante tu descanso!', pron:'luk insáid de dror diúring iór bréik!'},
            {en:'Punctual, tired, day off!', es:'¡Puntual, cansado, día libre!', pron:'pánchual, táiard, déi of!'},
            {en:'Step by step you win,', es:'paso a paso avanzarás,', pron:'step bái step iú uín,'},
            {en:'Speak it out loud,', es:'¡muy pronto lo hablarás!', pron:'spíik it áut láud,'},
            {en:'I wake up at seven, I start work at eight!', es:'¡Me despierto a las siete, empiezo a trabajar a las ocho!', pron:'ái uéik ap at séven, ái start uork at éit!'},
            {en:'Breakfast, lunch, dinner, rest!', es:'Desayuno, almuerzo, cena, descanso.', pron:'brékfast, lanch, díner, rest!'},
            {en:'I finish work at five!', es:'¡Termino de trabajar a las cinco!', pron:'ái fínish uork at fáiv!'},
            {en:'', es:'Termina el turno espacial y preparamos una cena reconfortante...', pron:''},
            {en:'Dinner, finish work, rest!', es:'¡Cena, terminar de trabajar, descanso!', pron:'díner, fínish uork, rest!'},
            {en:'I finish work at five, now it is time to rest!', es:'¡Termino de trabajar a las cinco, ahora es tiempo de descansar!', pron:'ái fínish uork at fáiv, náu it is táim tu rest!'},
            {en:'Always punctual for the shift, no overtime on my day off!', es:'¡Siempre puntual para el turno, sin horas extra en mi día libre!', pron:'ólueis pánchual for de shift, nóu óvertaim on mái déi of!'},
            {en:'Step by step you win,', es:'paso a paso avanzarás,', pron:'step bái step iú uín,'},
            {en:'Speak it out loud,', es:'¡muy pronto lo hablarás!', pron:'spíik it áut láud,'},
            {en:'I wake up at seven, I start work at eight!', es:'¡Me despierto a las siete, empiezo a trabajar a las ocho!', pron:'ái uéik ap at séven, ái start uork at éit!'},
            {en:'Breakfast, lunch, dinner, rest!', es:'Desayuno, almuerzo, cena, descanso.', pron:'brékfast, lanch, díner, rest!'},
            {en:'I finish work at five!', es:'¡Termino de trabajar a las cinco!', pron:'ái fínish uork at fáiv!'},
            {en:'Learning English is easy,', es:'Aprender inglés es fácil,', pron:'lérning ínglish is ísi,'},
            {en:'You\'re going to love it!', es:'¡Te va a encantar!', pron:'iór góing tu lav it!'},
            {en:'See you next week, dragon friend,', es:'Nos vemos la próxima semana, amigo dragón,', pron:'síi iú next uíik, drágon frend,'},
            {en:'Keep practicing until the end.', es:'Sigue practicando hasta el final.', pron:'kíip práctising antíl de end.'}
    ],
    songStoryLyrics:[
            {en:'I wake up when the sun explodes,', es:'¡Me despierto cuando el sol explota,', pron:'ái uéik ap uén de san explóuds,'},
            {en:'and I get up before the rooster crows across three time zones!', es:'y me levanto antes de que el gallo cante en tres husos horarios!', pron:'and ái guét ap bifór de rúuster cróus acrós zríi táim sóuns!'},
            {en:'I wake up at seven.', es:'¡Me despierto a las siete!', pron:'ái uéik ap at séven.'},
            {en:'For breakfast I eat a mountain, for lunch an ocean,', es:'¡De desayuno como una montaña, de almuerzo un océano,', pron:'for brékfast ái íit a máuntain, for lanch an óushon,'},
            {en:'and for dinner, the moon.', es:'y de cena, la luna!', pron:'and for díner, de múun.'},
            {en:'I have lunch at noon.', es:'¡Almuerzo al mediodía!', pron:'ái jav lanch at núun.'},
            {en:'I go to work by teleporting,', es:'¡Voy al trabajo teletransportándome,', pron:'ái góu tu uork bái télipórting,'},
            {en:'and I start work exactly at midnight.', es:'y empiezo a trabajar exactamente a medianoche!', pron:'and ái start uork exáctli at mídnait.'},
            {en:'I start work at eight.', es:'¡Empiezo a trabajar a las ocho!', pron:'ái start uork at éit.'},
            {en:'My shift lasts a hundred years, but I take one tiny break.', es:'¡Mi turno dura cien años, pero tomo un pequeño descanso!', pron:'mái shift lasts a jándred íars, bat ái téik uán táini bréik.'},
            {en:'Check the drawer during your break!', es:'¡Revisa el cajón durante tu descanso!', pron:'chek de dror diúring iór bréik!'},
            {en:'Step by step you win,', es:'paso a paso avanzarás,', pron:'step bái step iú uín,'},
            {en:'Speak it out loud,', es:'¡muy pronto lo hablarás!', pron:'spíik it áut láud,'},
            {en:'No overtime, no day off', es:'¡Sin horas extra, sin día libre', pron:'nóu óvertaim, nóu déi of'},
            {en:'I am always punctual, even though I never get tired!', es:'siempre soy puntual, aunque nunca me canso!', pron:'ái am ólueis pánchual, íven dóu ái néver guét táiard!'},
            {en:'Finally, I finish work and rest inside a cloud.', es:'¡Finalmente, termino de trabajar y descanso dentro de una nube!', pron:'fáinali, ái fínish uork and rest insáid a cláud.'},
            {en:'I finish work at five.', es:'¡Termino de trabajar a las cinco!', pron:'ái fínish uork at fáiv.'},
            {en:'Drawer, shift, overtime, day off, rest!', es:'¡Cajón, turno, horas extra, día libre, descanso!', pron:'dror, shift, óvertaim, déi of, rest!'},
            {en:'Always punctual, never tired,', es:'¡Siempre puntual, nunca cansado,', pron:'ólueis pánchual, néver táiard,'},
            {en:'ready to rest inside a cloud!', es:'listo para descansar dentro de una nube!', pron:'rédi tu rest insáid a cláud!'},
            {en:'Everything is complete in our daily routine!', es:'¡Todo está completo en nuestra rutina diaria!', pron:'évrizin is camplíit in áur déili rutíin!'},
            {en:'Step by step you win,', es:'paso a paso avanzarás,', pron:'step bái step iú uín,'},
            {en:'Speak it out loud,', es:'¡muy pronto lo hablarás!', pron:'spíik it áut láud,'},
            {en:'No overtime, no day off', es:'¡Sin horas extra, sin día libre', pron:'nóu óvertaim, nóu déi of'},
            {en:'I am always punctual, even though I never get tired!', es:'siempre soy puntual, aunque nunca me canso!', pron:'ái am ólueis pánchual, íven dóu ái néver guét táiard!'},
            {en:'Finally, I finish work and rest inside a cloud.', es:'¡Finalmente, termino de trabajar y descanso dentro de una nube!', pron:'fáinali, ái fínish uork and rest insáid a cláud.'},
            {en:'I finish work at five.', es:'¡Termino de trabajar a las cinco!', pron:'ái fínish uork at fáiv.'},
            {en:'Learning English is easy,', es:'Aprender inglés es fácil,', pron:'lérning ínglish is ísi,'},
            {en:'You\'re going to love it!', es:'¡Te va a encantar!', pron:'iór góing tu lav it!'},
            {en:'See you next week, dragon friend,', es:'Nos vemos la próxima semana, amigo dragón,', pron:'síi iú next uíik, drágon frend,'},
            {en:'Keep practicing until the end.', es:'Sigue practicando hasta el final.', pron:'kíip práctising antíl de end.'}
    ],
    story:[
            {en:'I wake up when the sun explodes,', es:'¡Me despierto cuando el sol explota,', pron:'ái uéik ap uén de san explóuds,'},
            {en:'and I get up before the rooster crows across three time zones!', es:'y me levanto antes de que el gallo cante en tres husos horarios!', pron:'and ái guét ap bifór de rúuster cróus acrós zríi táim sóuns!'},
            {en:'I wake up at seven.', es:'¡Me despierto a las siete!', pron:'ái uéik ap at séven.'},
            {en:'For breakfast I eat a mountain, for lunch an ocean,', es:'¡De desayuno como una montaña, de almuerzo un océano,', pron:'for brékfast ái íit a máuntain, for lanch an óushon,'},
            {en:'and for dinner, the moon.', es:'y de cena, la luna!', pron:'and for díner, de múun.'},
            {en:'I have lunch at noon.', es:'¡Almuerzo al mediodía!', pron:'ái jav lanch at núun.'},
            {en:'I go to work by teleporting,', es:'¡Voy al trabajo teletransportándome,', pron:'ái góu tu uork bái télipórting,'},
            {en:'and I start work exactly at midnight.', es:'y empiezo a trabajar exactamente a medianoche!', pron:'and ái start uork exáctli at mídnait.'},
            {en:'I start work at eight.', es:'¡Empiezo a trabajar a las ocho!', pron:'ái start uork at éit.'},
            {en:'My shift lasts a hundred years, but I take one tiny break.', es:'¡Mi turno dura cien años, pero tomo un pequeño descanso!', pron:'mái shift lasts a jándred íars, bat ái téik uán táini bréik.'},
            {en:'Check the drawer during your break!', es:'¡Revisa el cajón durante tu descanso!', pron:'chek de dror diúring iór bréik!'},
            {en:'Step by step you win,', es:'paso a paso avanzarás,', pron:'step bái step iú uín,'},
            {en:'Speak it out loud,', es:'¡muy pronto lo hablarás!', pron:'spíik it áut láud,'},
            {en:'No overtime, no day off', es:'¡Sin horas extra, sin día libre', pron:'nóu óvertaim, nóu déi of'},
            {en:'I am always punctual, even though I never get tired!', es:'siempre soy puntual, aunque nunca me canso!', pron:'ái am ólueis pánchual, íven dóu ái néver guét táiard!'},
            {en:'Finally, I finish work and rest inside a cloud.', es:'¡Finalmente, termino de trabajar y descanso dentro de una nube!', pron:'fáinali, ái fínish uork and rest insáid a cláud.'},
            {en:'I finish work at five.', es:'¡Termino de trabajar a las cinco!', pron:'ái fínish uork at fáiv.'},
            {en:'Drawer, shift, overtime, day off, rest!', es:'¡Cajón, turno, horas extra, día libre, descanso!', pron:'dror, shift, óvertaim, déi of, rest!'},
            {en:'Always punctual, never tired,', es:'¡Siempre puntual, nunca cansado,', pron:'ólueis pánchual, néver táiard,'},
            {en:'ready to rest inside a cloud!', es:'listo para descansar dentro de una nube!', pron:'rédi tu rest insáid a cláud!'},
            {en:'Everything is complete in our daily routine!', es:'¡Todo está completo en nuestra rutina diaria!', pron:'évrizin is camplíit in áur déili rutíin!'},
            {en:'Step by step you win,', es:'paso a paso avanzarás,', pron:'step bái step iú uín,'},
            {en:'Speak it out loud,', es:'¡muy pronto lo hablarás!', pron:'spíik it áut láud,'},
            {en:'No overtime, no day off', es:'¡Sin horas extra, sin día libre', pron:'nóu óvertaim, nóu déi of'},
            {en:'I am always punctual, even though I never get tired!', es:'siempre soy puntual, aunque nunca me canso!', pron:'ái am ólueis pánchual, íven dóu ái néver guét táiard!'},
            {en:'Finally, I finish work and rest inside a cloud.', es:'¡Finalmente, termino de trabajar y descanso dentro de una nube!', pron:'fáinali, ái fínish uork and rest insáid a cláud.'},
            {en:'I finish work at five.', es:'¡Termino de trabajar a las cinco!', pron:'ái fínish uork at fáiv.'},
            {en:'Learning English is easy,', es:'Aprender inglés es fácil,', pron:'lérning ínglish is ísi,'},
            {en:'You\'re going to love it!', es:'¡Te va a encantar!', pron:'iór góing tu lav it!'},
            {en:'See you next week, dragon friend,', es:'Nos vemos la próxima semana, amigo dragón,', pron:'síi iú next uíik, drágon frend,'},
            {en:'Keep practicing until the end.', es:'Sigue practicando hasta el final.', pron:'kíip práctising antíl de end.'}
    ],
    jingle:[
            {en:'Wake up, get up, breakfast!', es:'¡Despertar, levantarse, desayuno!', pron:'uéik ap, guét ap, brékfast!'},
            {en:'I wake up at seven.', es:'¡Me despierto a las siete!', pron:'ái uéik ap at séven.'},
            {en:'I start work at eight.', es:'¡Empiezo a trabajar a las ocho!', pron:'ái start uork at éit.'},
            {en:'Go to work, start work, break!', es:'¡Ir a trabajar, empezar a trabajar, descanso!', pron:'góu tu uork, start uork, bréik!'},
            {en:'Lunch, drawer, shift, overtime!', es:'¡Almuerzo, cajón, turno, horas extra!', pron:'lanch, dror, shift, óvertaim!'},
            {en:'I have lunch at noon.', es:'¡Almuerzo al mediodía!', pron:'ái jav lanch at núun.'},
            {en:'Look inside the drawer during your break!', es:'¡Mira dentro del cajón durante tu descanso!', pron:'luk insáid de dror diúring iór bréik!'},
            {en:'Punctual, tired, day off!', es:'¡Puntual, cansado, día libre!', pron:'pánchual, táiard, déi of!'},
            {en:'Step by step you win,', es:'paso a paso avanzarás,', pron:'step bái step iú uín,'},
            {en:'Speak it out loud,', es:'¡muy pronto lo hablarás!', pron:'spíik it áut láud,'},
            {en:'I wake up at seven, I start work at eight!', es:'¡Me despierto a las siete, empiezo a trabajar a las ocho!', pron:'ái uéik ap at séven, ái start uork at éit!'},
            {en:'Breakfast, lunch, dinner, rest!', es:'Desayuno, almuerzo, cena, descanso.', pron:'brékfast, lanch, díner, rest!'},
            {en:'I finish work at five!', es:'¡Termino de trabajar a las cinco!', pron:'ái fínish uork at fáiv!'},
            {en:'Dinner, finish work, rest!', es:'¡Cena, terminar de trabajar, descanso!', pron:'díner, fínish uork, rest!'},
            {en:'I finish work at five, now it is time to rest!', es:'¡Termino de trabajar a las cinco, ahora es tiempo de descansar!', pron:'ái fínish uork at fáiv, náu it is táim tu rest!'},
            {en:'Always punctual for the shift, no overtime on my day off!', es:'¡Siempre puntual para el turno, sin horas extra en mi día libre!', pron:'ólueis pánchual for de shift, nóu óvertaim on mái déi of!'},
            {en:'Learning English is easy,', es:'Aprender inglés es fácil,', pron:'lérning ínglish is ísi,'},
            {en:'You\'re going to love it!', es:'¡Te va a encantar!', pron:'iór góing tu lav it!'},
            {en:'See you next week, dragon friend,', es:'Nos vemos la próxima semana, amigo dragón,', pron:'síi iú next uíik, drágon frend,'},
            {en:'Keep practicing until the end.', es:'Sigue practicando hasta el final.', pron:'kíip práctising antíl de end.'}
    ]
  },
{
    day:15, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'Verbos de acción diarios / Tareas y responsabilidades',
    structures:[
      {id:'S089', pattern:"I have to + [VERB]", examples:[
        {en:'I have to write this report today.', es:'Tengo que escribir este reporte hoy.', pron:'ái jav tu ráit dis ripórt tudéi.'},
        {en:'I have to call my supplier.', es:'Tengo que llamar a mi proveedor.', pron:'ái jav tu col mái sapláier.'},
        {en:'I have to check the numbers before I send this.', es:'Tengo que revisar los números antes de enviar esto.', pron:'ái jav tu chek de námbers bifór ái send dis.'},
        {en:"I don't have to fix it myself — I can call someone.", es:'No tengo que arreglarlo yo mismo — puedo llamar a alguien.', pron:"ái dont jav tu fix it máiself — ái can col sámuan."}
      ], function:'hablar de obligaciones diarias', stage:1,
        transformations:{
          negative:{en:"I don't have to finish this today.", es:'No tengo que terminar esto hoy.'},
          question:{en:'Do you have to deliver this today?', es:'¿Tienes que entregar esto hoy?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'to eat', es:'comer', pron:'tu íit', emoji:'🍴'},
      {en:'to drink', es:'beber', pron:'tu drink', emoji:'🥤'},
      {en:'to walk', es:'caminar', pron:'tu uók', emoji:'🚶'},
      {en:'to drive', es:'manejar', pron:'tu dráiv', emoji:'🚗'},
      {en:'to talk', es:'hablar', pron:'tu tók', emoji:'🗣️'},
      {en:'to write', es:'escribir', pron:'tu ráit', emoji:'✍️'},
      {en:'to read', es:'leer', pron:'tu ríid', emoji:'📖'},
      {en:'to send', es:'enviar', pron:'tu send', emoji:'📤'},
      {en:'to receive', es:'recibir', pron:'tu risív', emoji:'📥'},
      {en:'to call', es:'llamar', pron:'tu col', emoji:'📞'},
      {en:'to organize', es:'organizar', pron:'tu órganais', emoji:'🗂️'},
      {en:'to check', es:'revisar', pron:'tu chek', emoji:'🔍'},
      {en:'to finish', es:'terminar', pron:'tu fínish', emoji:'🏁'},
      {en:'to fix', es:'arreglar', pron:'tu fix', emoji:'🔧'},
      {en:'to deliver', es:'entregar', pron:'tu delíver', emoji:'📦'}
    ],
    story:[
      {en:'The giant robot loves to eat lightning and drink liquid fire.', es:'Al robot gigante le encanta comer rayos y beber fuego líquido.', pron:'de yáiant róubot lavs tu íit láitning and drink líquid fáiar.'},
      {en:'It can walk across oceans and drive a rocket with one metal finger.', es:'Puede caminar por océanos y manejar un cohete con un dedo de metal.', pron:'it can uók acrós óushons and dráiv a rácket uid uán métal fínguer.'},
      {en:'It talks to dolphins, writes with lasers, and reads minds like a book.', es:'Habla con delfines, escribe con láseres, y lee mentes como si fueran un libro.', pron:'it tóks tu dálfins, ráits uid léisers, and ríids máinds láik a buk.'},
      {en:'It sends messages by shooting stars and receives replies from the moon.', es:'Envía mensajes disparando estrellas y recibe respuestas de la luna.', pron:'it sends mésaches bái shúuting stars and risívs rimpláis fram de múun.'},
      {en:'Every day, it organizes a thousand planets, checks every galaxy, and finishes before breakfast.', es:'Cada día, organiza mil planetas, revisa cada galaxia, y termina antes del desayuno.', pron:'évri déi, it órganaises a záusand plánets, cheks évri gálaxi, and fínishes bifór brékfast.'},
      {en:'If something breaks, it fixes it instantly and delivers the fix by dragon mail!', es:'¡Si algo se rompe, lo arregla al instante y entrega la solución por correo de dragón!', pron:'if sámzing bréiks, it fíxes it ínstantli and delívers de fix bái drágon méil!'}
    ],
    jingle:[
      {en:'Eat and drink, walk and drive!', es:'Comer y beber, ¡caminar y manejar!', pron:'íit and drink, uók and dráiv!'},
      {en:'Talk and write, read to thrive!', es:'Hablar y escribir, ¡leer para crecer!', pron:'tók and ráit, ríid tu zráiv!'},
      {en:'Send, receive, call, organize!', es:'Enviar, recibir, llamar, ¡organizar!', pron:'send, risív, col, órganais!'},
      {en:'Check and finish, fix and deliver, wise!', es:'Revisar y terminar, arreglar y entregar, ¡sabio!', pron:'chek and fínish, fix and delíver, uáis!'}
    ]
  },
{
    day:16, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'Objetos de la casa / Herramientas y equipo de oficina',
    structures:[
      {id:'S090', pattern:"Can I borrow the + [TOOL]?", examples:[
        {en:'Can I borrow the hammer?', es:'¿Me prestas el martillo?', pron:'can ái bárou de jámer?'},
        {en:'Can I borrow the ladder for a moment?', es:'¿Me prestas la escalera por un momento?', pron:'can ái bárou de láder for a móument?'},
        {en:'Can I borrow the stapler?', es:'¿Me prestas la engrapadora?', pron:'can ái bárou de stéipler?'},
        {en:"Sorry, I can't — I'm using the cart right now.", es:'Perdón, no puedo — estoy usando el carrito ahora mismo.', pron:"sári, ái cant — áim iúsing de cart ráit náu."}
      ], function:'pedir prestada una herramienta', stage:1,
        transformations:{
          negative:{en:"I can't borrow the hammer right now.", es:'No puedo pedir prestado el martillo ahora mismo.'},
          question:{en:'Can I borrow the hammer?', es:'¿Me prestas el martillo?'},
          yesAnswer:{en:'Yes, of course.', es:'Sí, claro.'},
          noAnswer:{en:"No, sorry, I need it.", es:'No, perdón, lo necesito.'}
        }}
    ],
    words:[
      {en:'tool', es:'herramienta', pron:'túul', emoji:'🛠️'},
      {en:'hammer', es:'martillo', pron:'jámer', emoji:'🔨'},
      {en:'screwdriver', es:'destornillador', pron:'scrúdraiver', emoji:'🪛'},
      {en:'ladder', es:'escalera', pron:'láder', emoji:'🪜'},
      {en:'paint', es:'pintura', pron:'péint', emoji:'🎨'},
      {en:'lamp', es:'lámpara', pron:'lamp', emoji:'💡'},
      {en:'broom', es:'escoba', pron:'brúm', emoji:'🧹'},
      {en:'bucket', es:'balde', pron:'báket', emoji:'🪣'},
      {en:'pen', es:'lapicera', pron:'pen', emoji:'🖊️'},
      {en:'paper', es:'papel', pron:'péiper', emoji:'📄'},
      {en:'stapler', es:'engrapadora', pron:'stéipler', emoji:'📎'},
      {en:'folder', es:'carpeta', pron:'fólder', emoji:'📁'},
      {en:'tape', es:'cinta', pron:'téip', emoji:'📏'},
      {en:'scissors', es:'tijeras', pron:'sísors', emoji:'✂️'},
      {en:'cart', es:'carrito', pron:'cárt', emoji:'🛒'}
    ],
    story:[
      {en:'In my magic toolbox, there is a hammer big enough to crack open the moon!', es:'En mi caja de herramientas mágica, ¡hay un martillo suficientemente grande para partir la luna!', pron:'in mái máyic túulbax, dér is a jámer big ináf tu crak óupen de múun!'},
      {en:'The screwdriver spins so fast it opens portals, and the ladder reaches the top of the sky.', es:'El destornillador gira tan rápido que abre portales, y la escalera llega hasta la cima del cielo.', pron:'de scrúdraiver spins sóu fast it óupens pórtals, and de láder ríiches de tap of de skái.'},
      {en:'I paint entire castles with one drop, and my lamp lights up a whole galaxy.', es:'Pinto castillos enteros con una gota, y mi lámpara ilumina toda una galaxia.', pron:'ái péint entáier cásols uid uán drap, and mái lamp láits ap a jóul gálaxi.'},
      {en:'The broom sweeps away storms, and the bucket holds an entire river.', es:'La escoba barre tormentas, y el balde contiene un río entero.', pron:'de brúm suíips auéi storms, and de báket jóulds an entáier ríver.'},
      {en:'My magic pen writes on paper made of clouds; the stapler joins mountains together.', es:'Mi lapicera mágica escribe en papel hecho de nubes; la engrapadora une montañas.', pron:'mái máyic pen ráits on péiper méid of cláuds; de stéipler yóins máuntains tugéder.'},
      {en:'The folder holds a thousand secrets, and the tape fixes broken planets. I carry it all in my flying cart!', es:'La carpeta guarda mil secretos, y la cinta arregla planetas rotos. ¡Llevo todo en mi carrito volador!', pron:'de fólder jóulds a záusand sícrets, and de téip fíxes bróuken plánets. ái cári it ol in mái fláing cart!'}
    ],
    jingle:[
      {en:'Tool and hammer, screwdriver bright!', es:'Herramienta y martillo, ¡destornillador brillante!', pron:'túul and jámer, scrúdraiver bráit!'},
      {en:'Ladder, paint, and lamp so light!', es:'Escalera, pintura, y lámpara tan liviana.', pron:'láder, péint, and lamp sóu láit!'},
      {en:'Broom and bucket, pen and paper!', es:'Escoba y balde, ¡lapicera y papel!', pron:'brúm and báket, pen and péiper!'},
      {en:'Stapler, folder, tape, scissors, cart!', es:'Engrapadora, carpeta, cinta, tijeras, ¡carrito!', pron:'stéipler, fólder, téip, sísors, cart!'}
    ]
  },
{
    day:17, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'Mascotas y familia / Cultura de la empresa',
    structures:[
      {id:'S019', pattern:"I have a + [X]", examples:[
        {en:'I have a dog.', es:'Tengo un perro.', pron:'ái jav a dog.'},
        {en:'I have a cat.', es:'Tengo un gato.', pron:'ái jav a cat.'},
        {en:'I have a bird.', es:'Tengo un pájaro.', pron:'ái jav a berd.'},
        {en:'I have two pets.', es:'Tengo dos mascotas.', pron:'ái jav tú pets.'}
      ], function:'decir qué tienes', stage:1,
        transformations:{
          negative:{en:"I don't have a dog.", es:'No tengo un perro.'},
          question:{en:'Do you have a dog?', es:'¿Tienes un perro?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí, lo tengo.'},
          noAnswer:{en:"No, I don't.", es:'No, no lo tengo.'},
          future:{en:'I will have a dog.', es:'Voy a tener un perro.'}
        }}
    ],
    auxiliaryTeaching:[
      {
        title:'Have se vuelve Has',
        intro:'Ojo con esto: "have" es un verbo irregular. Con I, you, we, they se queda "have" — pero con he, she, it, cambia a "has". Es la misma trampa que ya viste con "do/does", pero un caso nuevo:',
        examples:[
          {en:'I have a dog.', es:'Tengo un perro.', pron:'ái jav a dog.'},
          {en:'You have a dog.', es:'Tú tienes un perro.', pron:'iú jav a dog.'},
          {en:'He has a dog.', es:'Él tiene un perro.', pron:'ji jas a dog.'},
          {en:'She has a cat.', es:'Ella tiene un gato.', pron:'shi jas a cat.'}
        ]
      }
    ],
    words:[
      {en:'pet', es:'mascota', pron:'pet', emoji:'🐾'},
      {en:'dog', es:'perro', pron:'dog', emoji:'🐶'},
      {en:'cat', es:'gato', pron:'cat', emoji:'🐱'},
      {en:'bird', es:'pájaro', pron:'bérd', emoji:'🐦'},
      {en:'to feed', es:'alimentar', pron:'tu fíid', emoji:'🍖'},
      {en:'values', es:'valores', pron:'váliuus', emoji:'⭐'},
      {en:'mission', es:'misión', pron:'míshon', emoji:'🎯'},
      {en:'vision', es:'visión', pron:'víyon', emoji:'🔭'},
      {en:'teamwork', es:'trabajo en equipo', pron:'tíimuork', emoji:'🤝'},
      {en:'respect', es:'respeto', pron:'rispéct', emoji:'🙏'},
      {en:'honesty', es:'honestidad', pron:'ánesti', emoji:'💎'},
      {en:'commitment', es:'compromiso', pron:'camítment', emoji:'🤞'},
      {en:'trust', es:'confianza', pron:'trast', emoji:'🔒'},
      {en:'growth', es:'crecimiento', pron:'gróuz', emoji:'📈'}
    ],
    story:[
      {en:'My pet is a baby dragon, and I also have a cat as big as a horse and a bird that breathes ice!', es:'Mi mascota es un dragoncito bebé, ¡y también tengo un gato tan grande como un caballo y un pájaro que respira hielo!', pron:'mái pet is a béibi drágon, and ái ólsou jav a cat as big as a jors and a berd dat bríizs áis!'},
      {en:'I feed them clouds of cotton candy every morning.', es:'Les doy de comer nubes de algodón de azúcar cada mañana.', pron:'ái fíid dem cláuds of cátan kándi évri mórning.'},
      {en:"Our company's values are honesty, respect, and teamwork — even between dragons and robots!", es:'Los valores de nuestra empresa son honestidad, respeto y trabajo en equipo — ¡hasta entre dragones y robots!', pron:'áur cámpanis váliuus ar ánesti, rispéct, and tíimuork — íven bituín drágons and róubots!'},
      {en:'Our mission is to save every kingdom, and our vision is a universe full of trust and growth.', es:'Nuestra misión es salvar cada reino, y nuestra visión es un universo lleno de confianza y crecimiento.', pron:'áur míshon is tu séiv évri kíngdom, and áur víyon is a iúnivers ful of trast and gróuz.'},
      {en:'Commitment is our superpower!', es:'¡El compromiso es nuestro superpoder!', pron:'camítment is áur súperpauer!'}
    ],
    jingle:[
      {en:'Pet and dog, cat and bird!', es:'Mascota y perro, ¡gato y pájaro!', pron:'pet and dog, cat and berd!'},
      {en:"Feed them well, that's our word!", es:'Alimentalos bien, ¡esa es nuestra palabra!', pron:'fíid dem uél, dats áur uérd!'},
      {en:'Values, mission, vision so true!', es:'Valores, misión, visión tan verdadera.', pron:'váliuus, míshon, víyon sóu trú!'},
      {en:'Teamwork, honesty, trust, and growth too!', es:'Trabajo en equipo, honestidad, confianza, ¡y crecimiento también!', pron:'tíimuork, ánesti, trast, and gróuz tú!'}
    ]
  },
{
    day:18, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'Vecinos y comunidad / Clientes frecuentes',
    structures:[
      {id:'S020', pattern:"I recommend + [X]", examples:[
        {en:'I recommend this product.', es:'Recomiendo este producto.', pron:'ái récomend dis prádact.'},
        {en:'I recommend our service.', es:'Recomiendo nuestro servicio.', pron:'ái récomend áur sérvis.'},
        {en:'I recommend this supplier.', es:'Recomiendo este proveedor.', pron:'ái récomend dis sapláier.'},
        {en:'I recommend a solution.', es:'Recomiendo una solución.', pron:'ái récomend a solúshion.'}
      ], function:'recomendar algo a un cliente', stage:1,
        transformations:{
          negative:{en:"I don't recommend this product.", es:'No recomiendo este producto.'},
          question:{en:'Do you recommend this product?', es:'¿Recomiendas este producto?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí, lo recomiendo.'},
          noAnswer:{en:"No, I don't.", es:'No, no lo recomiendo.'},
          future:{en:'I will recommend this product.', es:'Voy a recomendar este producto.'}
        }}
    ],
    words:[
      {en:'neighbor', es:'vecino', pron:'néibor', emoji:'🏘️'},
      {en:'neighborhood', es:'barrio', pron:'néiborjud', emoji:'🏘️'},
      {en:'community', es:'comunidad', pron:'camiúniti', emoji:'👥'},
      {en:'friendly', es:'amigable', pron:'fréndli', emoji:'😊'},
      {en:'loyal customer', es:'cliente fiel', pron:'lóial cástomer', emoji:'💛'},
      {en:'regular customer', es:'cliente frecuente', pron:'réguiular cástomer', emoji:'🔁'},
      {en:'long-term', es:'a largo plazo', pron:'long term', emoji:'⏳'},
      {en:'relationship', es:'relación', pron:'riléishonship', emoji:'🤝'},
      {en:'reliable', es:'confiable', pron:'riláiabol', emoji:'✅'},
      {en:'to recommend', es:'recomendar', pron:'tu recomend', emoji:'👍'},
      {en:'referral', es:'referido', pron:'riférral', emoji:'➡️'},
      {en:'loyalty', es:'lealtad', pron:'lóialti', emoji:'💛'},
      {en:'feedback', es:'comentarios', pron:'fíidbak', emoji:'💬'},
      {en:'satisfied', es:'satisfecho', pron:'sátisfaid', emoji:'😊'},
      {en:'complaint', es:'queja', pron:'compléint', emoji:'⚠️'},
      {en:'solution', es:'solución', pron:'salúshon', emoji:'💡'}
    ],
    story:[
      {en:'My neighbor is a friendly giant who lives in the mountain next door.', es:'Mi vecino es un gigante amigable que vive en la montaña de al lado.', pron:'mái néibor is a fréndli yáiant jú livs in de máuntain next dóar.'},
      {en:'Our whole neighborhood is one big community of wizards, robots, and talking animals.', es:'Todo nuestro barrio es una gran comunidad de magos, robots y animales parlantes.', pron:'áur jóul néiborjud is uán big camiúniti of uísards, róubots, and tóking ánimals.'},
      {en:'We have a loyal customer — a thousand-year-old turtle who always returns, a truly reliable regular customer!', es:'Tenemos una clienta fiel — ¡una tortuga de mil años que siempre vuelve, una clienta frecuente muy confiable!', pron:'uí jav a lóial cástomer — a záusand íar óuld tértol jú ólueis ritérns, a trúli riláiabol réguiular cástomer!'},
      {en:'She always recommends us with a referral to the whole ocean, and her loyalty and feedback keep us satisfied.', es:'Siempre nos recomienda con un referido a todo el océano, y su lealtad y sus comentarios nos mantienen satisfechos.', pron:'shi ólueis recoménds as uid a riférral tu de jóul óushon, and jer lóialti and fíidbak kíip as sátisfaid.'},
      {en:"If there's ever a complaint, dragons always find a solution!", es:'¡Si alguna vez hay una queja, los dragones siempre encuentran una solución!', pron:'if ders éver a compléint, drágons ólueis fáind a salúshon!'}
    ],
    jingle:[
      {en:'Neighbor, neighborhood, community!', es:'Vecino, barrio, ¡comunidad!', pron:'néibor, néiborjud, camiúniti!'},
      {en:"Friendly and loyal, that's the key!", es:'Amigable y fiel, ¡esa es la clave!', pron:'fréndli and lóial, dats de kíi!'},
      {en:'Reliable, recommend, referral too!', es:'Confiable, recomendar, ¡referido también!', pron:'riláiabol, recomend, riférral tú!'},
      {en:"Feedback, satisfied, solution's true!", es:'Comentarios, satisfecho, ¡la solución es verdadera!', pron:'fíidbak, sátisfaid, salúshons trú!'}
    ]
  },
{
    day:19, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'Repaso liviano de la semana 3',
    structures:[
      {id:'S091', pattern:"By the way, + [X]", examples:[
        {en:"By the way, actually, this is almost ready.", es:'Por cierto, en realidad, esto está casi listo.', pron:'bái de uéi, áctiuali, dis is ólmoust rédi.'},
        {en:"By the way, for example, we could try this in general.", es:'Por cierto, por ejemplo, podríamos probar esto en general.', pron:'bái de uéi, for exámpol, uí cud trái dis in yéneral.'},
        {en:"By the way, don't worry — it's fine, take your time.", es:'Por cierto, no te preocupes — está bien, tomate tu tiempo.', pron:"bái de uéi, dont uóri — its fáin, téik iór táim."},
        {en:"By the way, as usual, there's no rush — it's still early.", es:'Por cierto, como siempre, no hay apuro — todavía es temprano.', pron:"bái de uéi, as iúshual, ders nóu rash — its stil érli."}
      ], function:'introducir un comentario nuevo', stage:1,
        transformations:{
          negative:{en:"This is not ready yet.", es:'Esto todavía no está listo.'},
          question:{en:'Is this almost ready?', es:'¿Esto está casi listo?'},
          yesAnswer:{en:'Yes, almost.', es:'Sí, casi.'},
          noAnswer:{en:'No, not yet.', es:'No, todavía no.'}
        }}
    ],
    words:[
      {en:'by the way', es:'a propósito', pron:'bái de uéi', emoji:'💭'},
      {en:'actually', es:'en realidad', pron:'ákchuali', emoji:'🤔'},
      {en:'for example', es:'por ejemplo', pron:'for exámpol', emoji:'📌'},
      {en:'in general', es:'en general', pron:'in yéneral', emoji:'🗂️'},
      {en:'as usual', es:'como siempre', pron:'as iúshual', emoji:'🔁'},
      {en:"don't worry", es:'no te preocupes', pron:'dont uéri', emoji:'🙂'},
      {en:"it's fine", es:'está bien', pron:'its fáin', emoji:'👌'},
      {en:'no rush', es:'sin apuro', pron:'nóu rash', emoji:'🐢'},
      {en:'take your time', es:'tomate tu tiempo', pron:'téik iór táim', emoji:'⏳'},
      {en:'almost', es:'casi', pron:'ólmoust', emoji:'🔜'},
      {en:'still', es:'todavía', pron:'stil', emoji:'⏱️'},
      {en:'already', es:'ya', pron:'olrédi', emoji:'✅'}
    ],
    story:[
      {en:"By the way, actually, this castle is bigger than it looks!", es:'A propósito, en realidad, ¡este castillo es más grande de lo que parece!', pron:'bái de uéi, ákchuali, dis cásol is bíguer dan it luks!'},
      {en:"For example, in general, dragons don't rush — as usual, don't worry, it's fine, no rush.", es:'Por ejemplo, en general, los dragones no se apuran — como siempre, no te preocupes, está bien, sin apuro.', pron:'for exámpol, in yéneral, drágons dont rash — as iúshual, dont uéri, its fáin, nóu rash.'},
      {en:"Take your time — we're almost there, but still, the treasure hasn't arrived yet!", es:'Tomate tu tiempo — ya casi llegamos, pero todavía, ¡el tesoro no llegó!', pron:'téik iór táim — uír ólmoust dér, bat stil, de tréshur jásent aráivd iét!'}
    ],
    jingle:[
      {en:'By the way, actually, for example!', es:'A propósito, en realidad, ¡por ejemplo!', pron:'bái de uéi, ákchuali, for exámpol!'},
      {en:'In general, as usual, ample!', es:'En general, como siempre, ¡amplio!', pron:'in yéneral, as iúshual, ámpol!'},
      {en:"Don't worry, it's fine, no rush!", es:'No te preocupes, está bien, ¡sin apuro!', pron:'dont uéri, its fáin, nóu rash!'},
      {en:'Take your time, almost done, no rush!', es:'Tomate tu tiempo, casi terminado, ¡sin apuro!', pron:'téik iór táim, ólmoust dan, nóu rash!'}
    ]
  },
{
    day:20, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'Cocina y comidas / Almuerzos de trabajo',
    structures:[
      {id:'S021', pattern:"I would like + [X]", examples:[
        {en:'I would like the check, please.', es:'Quisiera la cuenta, por favor.', pron:'ái uud láik de chek, plíis.'},
        {en:'I would like a table for two.', es:'Quisiera una mesa para dos.', pron:'ái uud láik a téibol for tú.'},
        {en:'I would like some rice.', es:'Quisiera un poco de arroz.', pron:'ái uud láik sam ráis.'},
        {en:'I would like to make a reservation.', es:'Quisiera hacer una reserva.', pron:'ái uud láik tu méik a reservéishon.'}
      ], function:'pedir algo de forma educada', stage:1,
        transformations:{
          question:{en:'Would you like some rice?', es:'¿Quieres un poco de arroz?'},
          yesAnswer:{en:'Yes, I would.', es:'Sí, quisiera.'},
          noAnswer:{en:'No, thank you.', es:'No, gracias.'}
        }}
    ],
    words:[
      {en:'rice', es:'arroz', pron:'ráis', emoji:'🍚'},
      {en:'chicken', es:'pollo', pron:'chíquen', emoji:'🍗'},
      {en:'meat', es:'carne', pron:'míit', emoji:'🥩'},
      {en:'vegetables', es:'verduras', pron:'véchtabols', emoji:'🥦'},
      {en:'fruit', es:'fruta', pron:'frúut', emoji:'🍎'},
      {en:'bread', es:'pan', pron:'bred', emoji:'🍞'},
      {en:'soup', es:'sopa', pron:'súup', emoji:'🍲'},
      {en:'salad', es:'ensalada', pron:'sálad', emoji:'🥗'},
      {en:"let's have lunch", es:'almorcemos', pron:'lets jav lanch', emoji:'🍽️'},
      {en:"I'm hungry", es:'tengo hambre', pron:'áim jángri', emoji:'😋'},
      {en:'delicious', es:'delicioso', pron:'dilíshos', emoji:'😋'},
      {en:'the check please', es:'la cuenta por favor', pron:'de chek plíis', emoji:'🧾'},
      {en:'reservation', es:'reserva', pron:'reservéishon', emoji:'📅'},
      {en:'table for two', es:'mesa para dos', pron:'téibol for tú', emoji:'🪑'},
      {en:'menu', es:'menú', pron:'méniu', emoji:'📋'},
      {en:'waiter', es:'mesero', pron:'uéiter', emoji:'🧑‍🍳'}
    ],
    story:[
      {en:"The giant's table has a mountain of rice, a herd of chicken, and an ocean of meat!", es:'La mesa del gigante tiene una montaña de arroz, una manada de pollo, ¡y un océano de carne!', pron:'de yáiants téibol jas a máuntain of ráis, a jerd of chíquen, and an óushon of míit!'},
      {en:'There are vegetables as tall as trees, fruit as big as planets, and bread that never ends.', es:'Hay verduras tan altas como árboles, fruta tan grande como planetas, y pan que nunca se termina.', pron:'dér ar véchtabols as tol as tríis, frúut as big as plánets, and bred dat néver ends.'},
      {en:'Bring the soup in a lake, and the salad in a whole forest!', es:'¡Traé la sopa en un lago, y la ensalada en todo un bosque!', pron:'bring de súup in a léik, and de sálad in a jóul fórest!'},
      {en:"Let's have lunch! I'm hungry enough to eat a mountain — it's delicious!", es:'¡Almorcemos! Tengo tanta hambre que como una montaña — ¡está delicioso!', pron:'lets jav lanch! áim jángri ináf tu íit a máuntain — its dilíshos!'},
      {en:'Waiter! A table for two giants, please, and the check — write it on a mountain, please!', es:'¡Mesero! Una mesa para dos gigantes, por favor, y la cuenta — ¡escribila en una montaña, por favor!', pron:'uéiter! a téibol for tú yáiants, plíis, and de chek — ráit it on a máuntain, plíis!'},
      {en:'Where is the menu? I hope it has a thousand pages, with a reservation for the whole kingdom.', es:'¿Dónde está el menú? Espero que tenga mil páginas, con una reserva para todo el reino.', pron:'uér is de méniu? ái jóup it jas a záusand péiches, uid a reservéishon for de jóul kíngdom.'}
    ],
    jingle:[
      {en:'Rice and chicken, meat so fine!', es:'Arroz y pollo, ¡carne tan buena!', pron:'ráis and chíquen, míit sóu fáin!'},
      {en:'Vegetables, fruit, and bread that shine!', es:'Verduras, fruta, y pan que brilla.', pron:'véchtabols, frúut, and bred dat sháin!'},
      {en:"Soup and salad, I'm so hungry!", es:'Sopa y ensalada, ¡tengo tanta hambre!', pron:'súup and sálad, áim sóu jángri!'},
      {en:'Waiter, table for two, the check for me!', es:'Mesero, mesa para dos, ¡la cuenta para mí!', pron:'uéiter, téibol for tú, de chek for mi!'}
    ]
  },
{
    day:21, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'Limpieza y tareas / Organización de bodega',
    structures:[
      {id:'S092', pattern:"I need to update the + [X]", examples:[
        {en:'I need to update the inventory.', es:'Necesito actualizar el inventario.', pron:'ái níid tu apdéit de ínventori.'},
        {en:'I need to update the label on this box.', es:'Necesito actualizar la etiqueta de esta caja.', pron:'ái níid tu apdéit de léibol on dis box.'},
        {en:'I need to update the storage count.', es:'Necesito actualizar el conteo del depósito.', pron:'ái níid tu apdéit de stórich cáunt.'},
        {en:"I don't need to update it — nothing is missing or damaged.", es:'No necesito actualizarlo — no falta ni está dañado nada.', pron:"ái dont níid tu apdéit it — názin is mísing or dámachd."}
      ], function:'hablar de actualizar el inventario o registros', stage:1,
        transformations:{
          negative:{en:"I don't need to update the inventory.", es:'No necesito actualizar el inventario.'},
          question:{en:'Do you need to update the inventory?', es:'¿Necesitas actualizar el inventario?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'to clean', es:'limpiar', pron:'tu clíin', emoji:'🧽'},
      {en:'to wash', es:'lavar', pron:'tu uásh', emoji:'🧼'},
      {en:'to sweep', es:'barrer', pron:'tu suíip', emoji:'🧹'},
      {en:'order', es:'orden', pron:'órder', emoji:'📐'},
      {en:'trash', es:'basura', pron:'trash', emoji:'🗑️'},
      {en:'dirty', es:'sucio', pron:'dérti', emoji:'🟤'},
      {en:'clean', es:'limpio', pron:'clíin', emoji:'✨'},
      {en:'inventory', es:'inventario', pron:'ínventori', emoji:'📋'},
      {en:'storage', es:'almacenamiento', pron:'stóridch', emoji:'📦'},
      {en:'label', es:'etiqueta', pron:'léibol', emoji:'🏷️'},
      {en:'to count', es:'contar', pron:'tu cáunt', emoji:'🔢'},
      {en:'missing', es:'faltante', pron:'mísing', emoji:'❓'},
      {en:'damaged', es:'dañado', pron:'dámichd', emoji:'⚠️'},
      {en:'return', es:'devolución', pron:'ritérn', emoji:'↩️'},
      {en:'to update', es:'actualizar', pron:'tu apdéit', emoji:'🔄'}
    ],
    story:[
      {en:'The cleaning robot can clean an entire ocean in one second!', es:'¡El robot de limpieza puede limpiar un océano entero en un segundo!', pron:'de clíining róubot can clíin an entáier óushon in uán sécond!'},
      {en:'It washes mountains, sweeps deserts, and keeps perfect order across a thousand galaxies.', es:'Lava montañas, barre desiertos, y mantiene un orden perfecto en mil galaxias.', pron:'it uáshes máuntains, suíips désers, and kíips pérfect órder acrós a záusand gálaxis.'},
      {en:"No trash is too dirty, and nothing stays clean for long in a dragon's warehouse!", es:'¡Ninguna basura es demasiado sucia, y nada queda limpio por mucho tiempo en la bodega de un dragón!', pron:'nóu trash is tu dérti, and názing stéis clíin for long in a drágons uérjaus!'},
      {en:'It checks the inventory of a million stars in storage, labels each one, and counts them all before breakfast.', es:'Revisa el inventario de un millón de estrellas en el almacén, etiqueta cada una, y las cuenta todas antes del desayuno.', pron:'it cheks de ínventori of a mílion stars in stóridch, léibols íich uán, and cáunts dem ol bifór brékfast.'},
      {en:'If one is missing or damaged, it demands a return and updates the list instantly!', es:'¡Si falta una o está dañada, exige una devolución y actualiza la lista al instante!', pron:'if uán is mísing or dámichd, it dimánds a ritérn and apdéits de list ínstantli!'}
    ],
    jingle:[
      {en:'Clean and wash, sweep away!', es:'Limpiar y lavar, ¡barrer!', pron:'clíin and uásh, suíip auéi!'},
      {en:"Order, no trash, dirty's not okay!", es:'Orden, sin basura, ¡sucio no está bien!', pron:'órder, nóu trash, dértis nat oquéi!'},
      {en:'Inventory, storage, label with care!', es:'Inventario, almacenamiento, ¡etiquetar con cuidado!', pron:'ínventori, stóridch, léibol uid quér!'},
      {en:'Count what\'s missing, damaged, and update there!', es:'Contá lo que falta, dañado, ¡y actualizá ahí!', pron:'cáunt uáts mísing, dámichd, and apdéit dér!'}
    ]
  },
{
    day:22, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'Fin de semana / Vacaciones y días libres',
    structures:[
      {id:'S022', pattern:"I can + [VERB]", examples:[
        {en:'I can take a day off.', es:'Puedo tomarme un día libre.', pron:'ái can téik a déi of.'},
        {en:'I can request vacation.', es:'Puedo pedir vacaciones.', pron:'ái can riquést vakéishion.'},
        {en:'I can leave early.', es:'Puedo salir temprano.', pron:'ái can líiv érli.'},
        {en:'I can have a break.', es:'Puedo tomar un descanso.', pron:'ái can jav a bréik.'}
      ], function:'pedir permiso', stage:1,
        transformations:{
          negative:{en:"I can't take a day off.", es:'No puedo tomarme un día libre.'},
          question:{en:'Can I take a day off?', es:'¿Puedo tomarme un día libre?'},
          yesAnswer:{en:'Yes, you can.', es:'Sí, puedes.'},
          noAnswer:{en:"No, you can't.", es:'No, no puedes.'}
        }}
    ],
    words:[
      {en:'weekend', es:'fin de semana', pron:'uíikend', emoji:'🎉'},
      {en:'to relax', es:'relajarse', pron:'tu riláx', emoji:'🧘'},
      {en:'vacation', es:'vacaciones', pron:'veiquéishon', emoji:'🏖️'},
      {en:'holiday', es:'día festivo', pron:'jálidei', emoji:'🎊'},
      {en:'free time', es:'tiempo libre', pron:'fríi táim', emoji:'⏳'},
      {en:'to travel', es:'viajar', pron:'tu trável', emoji:'✈️'},
      {en:'sick leave', es:'licencia médica', pron:'sik líiv', emoji:'🤒'},
      {en:'permission', es:'permiso', pron:'permíshon', emoji:'📝'},
      {en:'to request', es:'solicitar', pron:'tu rikuést', emoji:'🙋'},
      {en:'to approve', es:'aprobar', pron:'tu apróuv', emoji:'✅'},
      {en:'to return to work', es:'volver al trabajo', pron:'tu ritérn tu uork', emoji:'🔙'},
      {en:'cover for me', es:'cubrime', pron:'cáver for mi', emoji:'🤝'},
      {en:'to plan', es:'planear', pron:'tu plan', emoji:'📅'},
      {en:'to enjoy', es:'disfrutar', pron:'tu enyói', emoji:'😄'},
      {en:'next week', es:'próxima semana', pron:'next uíik', emoji:'➡️'}
    ],
    story:[
      {en:'On the weekend, even dragons need to relax!', es:'¡El fin de semana, hasta los dragones necesitan relajarse!', pron:'on de uíikend, íven drágons níid tu riláx!'},
      {en:"I'm going on vacation to a floating island for the whole holiday, with unlimited free time!", es:'¡Me voy de vacaciones a una isla flotante todo el feriado, con tiempo libre ilimitado!', pron:'áim góing on veiquéishon tu a flóuting áiland for de jóul jálidei, uid anlímited fríi táim!'},
      {en:'I love to travel by shooting star.', es:'Me encanta viajar en estrella fugaz.', pron:'ái lav tu trável bái shúuting star.'},
      {en:'If a dragon takes sick leave, another dragon must request permission to approve covering for me!', es:'¡Si un dragón toma licencia médica, otro dragón debe solicitar permiso para aprobar cubrirme!', pron:'if a drágon téiks sik líiv, anáder drágon mast rikuést permíshon tu apruv cávering for mi!'},
      {en:'I plan to enjoy every single moment before I return to work next week!', es:'¡Planeo disfrutar cada momento antes de volver al trabajo la próxima semana!', pron:'ái plan tu enyói évri síngol móument bifór ái ritérn tu uork next uíik!'}
    ],
    jingle:[
      {en:'Weekend, relax, vacation too!', es:'Fin de semana, relajarse, ¡vacaciones también!', pron:'uíikend, riláx, veiquéishon tú!'},
      {en:'Holiday, free time, travel through!', es:'Feriado, tiempo libre, ¡viajar por ahí!', pron:'jálidei, fríi táim, trável zrú!'},
      {en:'Request permission, approve it fast!', es:'Pedí permiso, ¡aprobalo rápido!', pron:'rikuést permíshon, apruv it fast!'},
      {en:'Cover for me, plan and enjoy, at last!', es:'Cubrime, planeá y disfrutá, ¡por fin!', pron:'cáver for mi, plan and enyói, at last!'}
    ]
  },
{
    day:23, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'Comparar y elegir / Comparar proveedores y precios',
    structures:[
      {id:'S023', pattern:"This is + [COMPARATIVE] + than + [X]", examples:[
        {en:'This is cheaper than that one.', es:'Este es más barato que ese.', pron:'dis is chíiper dan dat uán.'},
        {en:'This is more expensive than the other.', es:'Este es más caro que el otro.', pron:'dis is mor expénsiv dan de áder.'},
        {en:'This is better than before.', es:'Este es mejor que antes.', pron:'dis is béter dan bifór.'},
        {en:'This is different than the last offer.', es:'Este es diferente a la última oferta.', pron:'dis is díferent dan de last áfer.'}
      ], function:'comparar dos opciones', stage:1,
        transformations:{
          negative:{en:'This is not cheaper than that one.', es:'Este no es más barato que ese.'},
          question:{en:'Is this cheaper than that one?', es:'¿Este es más barato que ese?'},
          yesAnswer:{en:'Yes, it is.', es:'Sí, lo es.'},
          noAnswer:{en:"No, it isn't.", es:'No, no lo es.'}
        }}
    ],
    words:[
      {en:'more expensive', es:'más caro', pron:'mor expénsiv', emoji:'💰'},
      {en:'cheaper', es:'más barato', pron:'chíiper', emoji:'💸'},
      {en:'better', es:'mejor', pron:'béter', emoji:'👍'},
      {en:'worse', es:'peor', pron:'uérs', emoji:'👎'},
      {en:'the best', es:'el mejor', pron:'de best', emoji:'🏆'},
      {en:'the same', es:'lo mismo', pron:'de séim', emoji:'🟰'},
      {en:'different', es:'diferente', pron:'díferent', emoji:'🔀'},
      {en:'to compare', es:'comparar', pron:'tu campér', emoji:'⚖️'},
      {en:'option', es:'opción', pron:'ápshon', emoji:'🔘'},
      {en:'to choose', es:'elegir', pron:'tu chúus', emoji:'✅'},
      {en:'to decide', es:'decidir', pron:'tu disáid', emoji:'🧠'},
      {en:'offer', es:'oferta', pron:'áfer', emoji:'🏷️'},
      {en:'deal', es:'trato', pron:'díil', emoji:'🤝'},
      {en:'to negotiate', es:'negociar', pron:'tu nigóushieit', emoji:'💬'},
      {en:'contract', es:'contrato', pron:'cántract', emoji:'📃'},
      {en:'agreement', es:'acuerdo', pron:'agríiment', emoji:'🤝'}
    ],
    story:[
      {en:'This dragon egg is more expensive, but that one is cheaper — which is better?', es:'Este huevo de dragón es más caro, pero aquel es más barato — ¿cuál es mejor?', pron:'dis drágon eg is mor expénsiv, bat dat uán is chíiper — uích is béter?'},
      {en:"Actually, they're the same, though this treasure chest looks completely different!", es:'En realidad, son lo mismo, ¡aunque este cofre del tesoro se ve completamente diferente!', pron:'ákchuali, déir de séim, dóu dis tréshur chest luks camplítli díferent!'},
      {en:'Let\'s compare every option before I choose and decide.', es:'Comparemos cada opción antes de que elija y decida.', pron:'lets campér évri ápshon bifór ái chúus and disáid.'},
      {en:"The wizard's offer is the best deal — let's negotiate a magical contract and sign the agreement!", es:'¡La oferta del mago es el mejor trato — negociemos un contrato mágico y firmemos el acuerdo!', pron:'de uísards áfer is de best díil — lets nigóushieit a máyical cántract and sáin de agríiment!'}
    ],
    jingle:[
      {en:'More expensive, cheaper too!', es:'Más caro, ¡más barato también!', pron:'mor expénsiv, chíiper tú!'},
      {en:'Better, worse, the best for you!', es:'Mejor, peor, ¡el mejor para ti!', pron:'béter, uérs, de best for iú!'},
      {en:'Compare, choose, decide with care!', es:'Comparar, elegir, ¡decidir con cuidado!', pron:'campér, chúus, disáid uid quér!'},
      {en:"Negotiate the deal, contract's fair!", es:'Negociá el trato, ¡el contrato es justo!', pron:'nigóushieit de díil, cántracts fér!'}
    ]
  },
{
    day:24, unit:2, unitTitle:'Unidad 2 · Semanas 3-4', theme:'Repaso y cierre de la Unidad 2',
    structures:[
      {id:'S093', pattern:"I remember + [X]", examples:[
        {en:'I remember everything about this unit.', es:'Recuerdo todo sobre esta unidad.', pron:'ái rimémber évrizin abáut dis iúnit.'},
        {en:'I remember the vocabulary well.', es:'Recuerdo bien el vocabulario.', pron:'ái rimémber de vocábiuleri uél.'},
        {en:"I remember what we practiced last week.", es:'Recuerdo lo que practicamos la semana pasada.', pron:"ái rimémber uát uí práctist last uíik."},
        {en:"I forgot one thing, but let's practice one more time.", es:'Me olvidé una cosa, pero practiquemos una vez más.', pron:"ái forgát uán zing, bat lets práctis uán mor táim."}
      ], function:'repasar lo aprendido en la unidad', stage:1,
        transformations:{
          negative:{en:"I don't remember everything yet.", es:'Todavía no recuerdo todo.'},
          question:{en:'Do you remember everything?', es:'¿Recuerdas todo?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, not yet.", es:'No, todavía no.'}
        }}
    ],
    words:[
      {en:'unit two', es:'unidad dos', pron:'iúnit tú', emoji:'2️⃣'},
      {en:'review', es:'repaso', pron:'riviú', emoji:'🔁'},
      {en:'what did you learn', es:'qué aprendiste', pron:'uát did iú lern', emoji:'🧠'},
      {en:'I remember', es:'me acuerdo', pron:'ái rimémber', emoji:'💭'},
      {en:'I forgot', es:'se me olvidó', pron:'ái forgát', emoji:'😅'},
      {en:"let's practice", es:'practiquemos', pron:'lets práctis', emoji:'💪'},
      {en:'one more time', es:'una vez más', pron:'uán mor táim', emoji:'🔂'},
      {en:"you're improving", es:'estás mejorando', pron:'iór imprúving', emoji:'📈'},
      {en:'halfway there', es:'vamos a mitad de camino', pron:'jáfuei dér', emoji:'🏁'},
      {en:'next unit', es:'próxima unidad', pron:'next iúnit', emoji:'➡️'}
    ],
    story:[
      {en:"Welcome to unit two's final review — what did you learn on this legendary journey?", es:'Bienvenido al repaso final de la unidad dos — ¿qué aprendiste en este viaje legendario?', pron:'uélcam tu iúnit túus fáinal riviú — uát did iú lern on dis léyendari yérni?'},
      {en:'I remember the dragon, the alien, and the flying castle! But I forgot the wizard\'s name...', es:'¡Me acuerdo del dragón, el alienígena, y el castillo volador! Pero se me olvidó el nombre del mago...', pron:'ái rimémber de drágon, de éilien, and de fláing cásol! bat ái forgát de uísards néim...'},
      {en:"Let's practice one more time — you're improving every single day!", es:'Practiquemos una vez más — ¡estás mejorando cada día!', pron:'lets práctis uán mor táim — iór imprúving évri síngol déi!'},
      {en:'We are halfway there, brave hero. Get ready for the next unit!', es:'Vamos a mitad de camino, valiente héroe. ¡Prepárate para la próxima unidad!', pron:'uí ar jáfuei dér, bréiv jírou. guét rédi for de next iúnit!'}
    ],
    jingle:[
      {en:'Unit two, review, what did you learn?', es:'Unidad dos, repaso, ¿qué aprendiste?', pron:'iúnit tú, riviú, uát did iú lern?'},
      {en:"I remember, forgot, but I'll return!", es:'Me acuerdo, se me olvidó, ¡pero voy a volver!', pron:'ái rimémber, forgát, bat áil ritérn!'},
      {en:"Let's practice one more time, improving fast!", es:'Practiquemos una vez más, ¡mejorando rápido!', pron:'lets práctis uán mor táim, imprúving fast!'},
      {en:'Halfway there, next unit, having a blast!', es:'A mitad de camino, próxima unidad, ¡divirtiéndonos!', pron:'jáfuei dér, next iúnit, jáving a blast!'}
    ]
  }
];
