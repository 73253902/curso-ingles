// El Dragón Nativo — módulo independiente, 681 frases en 4 fases de 42 canciones cada una (170 / 173 / 169 / 169 frases).
// Este archivo es autónomo: no toca ni depende del motor del curso principal (motor.js).
// El audio de cada semana se agrega llenando el campo "audio" con el nombre del archivo mp3
// (por ejemplo: audio:"dn-fase1-semana1.mp3"); mientras esté en null, se muestra "Audio en camino".

const FIJAS_FASE1 = {
  precoro: [
    {en:"Here we go, let's learn some more,", es:"Vamos allá, aprendamos más,", pron:"jíar uí góu, lets lern sam mor,"},
    {en:"Phrase by phrase, like never before,", es:"Frase por frase, como nunca antes.", pron:"fréis bái fréis, láik néver bifór,"}
  ],
  pedal: [
    {en:"Learning English is easy,", es:"Aprender inglés es fácil,", pron:"lérning ínglish is ísi,"},
    {en:"You're going to love it!", es:"¡Te va a encantar!", pron:"iór góing tu lav it!"}
  ],
  coro: [
    {en:"Excuse me,", es:"Disculpe,", pron:"exquiúsmi,"},
    {en:"Thank you so much,", es:"Muchas gracias,", pron:"zenk iú sóu mach,"},
    {en:"I don't understand,", es:"No entiendo,", pron:"ái dont anderstánd,"},
    {en:"Could you help me, please?", es:"¿Podría ayudarme, por favor?", pron:"cud iú jelp mi, plíis?"}
  ],
  outro: [
    {en:"See you next week, dragon friend,", es:"Nos vemos la próxima semana, amigo dragón,", pron:"síi iú next uíik, drágon frend,"},
    {en:"Keep practicing until the end,", es:"Sigue practicando hasta el final.", pron:"kíip práctising antíl de end,"}
  ]
};

const FASE1_SEMANAS = [
  { numero:1, audio:"dn-fase1-semana1.mp3",
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Sorry,", es:"Perdón,", pron:"sóri,"},
      {en:"I didn't catch that,", es:"no escuché bien,", pron:"ái dídnt cach dat,"},
      {en:"Can you say that again?", es:"¿Puedes repetir?", pron:"can iú séi dat aguén?"},
      {en:"I need a minute...", es:"Necesito un minuto...", pron:"ái níid a mínit..."},
      {en:"I'll be right back!", es:"¡Ya vuelvo!", pron:"áil bi ráit bak!"}
    ]},
    precoro:{label:"Bienvenida", lineas:[
      {en:"Here we go, let's learn some more,", es:"Vamos allá, aprendamos más,", pron:"jíar uí góu, lets lern sam mor,"},
      {en:"Phrase by phrase, like never before,", es:"Frase por frase, como nunca antes.", pron:"fréis bái fréis, láik néver bifór,"}
    ]},
    coro:{label:"Frases base", lineas:[
      {en:"Excuse me,", es:"Disculpe,", pron:"exquiúsmi,"},
      {en:"Thank you so much,", es:"Muchas gracias,", pron:"zenk iú sóu mach,"},
      {en:"I don't understand,", es:"No entiendo,", pron:"ái dont anderstánd,"},
      {en:"Could you help me, please?", es:"¿Podría ayudarme, por favor?", pron:"cud iú jelp mi, plíis?"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Take a deep breath,", es:"Respira hondo,", pron:"téik a díip brez,"},
      {en:"you've got this!", es:"¡tú puedes!", pron:"iúv gat dis!"},
      {en:"One step at a time,", es:"Un paso a la vez,", pron:"uán step at a táim,"},
      {en:"that's how we learn.", es:"así es como aprendemos.", pron:"dats jáu uí lern."}
    ]}
  },
  { numero:2, audio:"dn-fase1-semana2.mp3",
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm not sure,", es:"No estoy seguro,", pron:"áim nat shur,"},
      {en:"but that's a good question,", es:"pero es buena pregunta,", pron:"bat dats a gud cuéschion,"},
      {en:"Let's see...", es:"Vamos a ver...", pron:"lets síi..."},
      {en:"Does that make sense?", es:"¿Tiene sentido?", pron:"das dat méik sens?"},
      {en:"Yes, that makes sense!", es:"¡Sí, tiene sentido!", pron:"iés, dat méiks sens!"}
    ]},
    precoro:{label:"Repaso Semana 1", lineas:[
      {en:"Sorry, I didn't catch that, can you say that again?", es:"Perdón, no escuché bien, ¿puedes repetir?", pron:"sóri, ái dídnt cach dat, can iú séi dat aguén?"},
      {en:"I need a minute... I'll be right back!", es:"Necesito un minuto... ¡Ya vuelvo!", pron:"ái níid a mínit... áil bi ráit bak!"}
    ]},
    coro:{label:"Repaso Semana 1", lineas:[
      {en:"Take a deep breath,", es:"Respira hondo,", pron:"téik a díip brez,"},
      {en:"you've got this!", es:"¡tú puedes!", pron:"iúv gat dis!"},
      {en:"One step at a time,", es:"Un paso a la vez,", pron:"uán step at a táim,"},
      {en:"that's how we learn.", es:"así es como aprendemos.", pron:"dats jáu uí lern."}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Nice to meet you, my name is Sam,", es:"Mucho gusto, mi nombre es Sam,", pron:"náis tu míit iú, mái néim is sam,"},
      {en:"I'm not sure of the price, let's see...", es:"No estoy seguro del precio, vamos a ver...", pron:"áim nat shur av de práis, lets síi..."},
      {en:"We sell quality products, does that make sense?", es:"Vendemos productos de calidad, ¿tiene sentido?", pron:"uí sel cuáliti pródacts, das dat méik sens?"},
      {en:"Yes, that makes sense, welcome to our team!", es:"¡Sí, tiene sentido, bienvenido a nuestro equipo!", pron:"iés, dat méiks sens, uélcam tu áuer tíim!"}
    ]}
  },
  { numero:3, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I agree with you,", es:"Estoy de acuerdo contigo,", pron:"ái agríi uid iú,"},
      {en:"but he disagrees,", es:"pero él no está de acuerdo,", pron:"bat ji disagríis,"},
      {en:"No worries,", es:"No hay problema,", pron:"nóu uóris,"},
      {en:"take your time to decide!", es:"¡Tomate tu tiempo para decidir!", pron:"téik iór táim tu disáid!"}
    ]},
    precoro:{label:"Repaso Semana 2", lineas:[
      {en:"I'm not sure, but that's a good question, let's see...", es:"No estoy seguro, pero es buena pregunta, vamos a ver...", pron:"áim nat shur, bat dats a gud cuéschion, lets síi..."},
      {en:"Does that make sense? Yes, that makes sense!", es:"¿Tiene sentido? ¡Sí, tiene sentido!", pron:"das dat méik sens? iés, dat méiks sens!"}
    ]},
    coro:{label:"Repaso Semana 1", lineas:[
      {en:"Sorry,", es:"Perdón,", pron:"sóri,"},
      {en:"I didn't catch that,", es:"no escuché bien,", pron:"ái dídnt cach dat,"},
      {en:"Can you say that again?", es:"¿Puedes repetir?", pron:"can iú séi dat aguén?"},
      {en:"I need a minute...", es:"Necesito un minuto...", pron:"ái níid a mínit..."},
      {en:"I'll be right back!", es:"¡Ya vuelvo!", pron:"áil bi ráit bak!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I'm in charge of sales, and my boss agrees with you,", es:"Estoy a cargo de ventas, y mi jefe está de acuerdo contigo,", pron:"áim in charch av séils, and mái bos agríis uid iú,"},
      {en:"My brother disagrees, but no worries, my friend,", es:"Mi hermano no está de acuerdo, pero no hay problema, amigo,", pron:"mái bráder disagríis, bat nóu uóris, mái frend,"},
      {en:"I'm the owner, and my team leader says:", es:"Yo soy el dueño, y mi líder de equipo dice:", pron:"áim di óuner, and mái tíim líder ses:"},
      {en:"Take your time to decide, colleague!", es:"¡Tómate tu tiempo para decidir, colega!", pron:"téik iór táim tu disáid, cólig!"}
    ]}
  },
  { numero:4, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What do you mean?", es:"¿Qué quieres decir?", pron:"uát du iú míin?"},
      {en:"Oh, now I see!", es:"¡Ah, ya veo!", pron:"óu, náu ái síi!"},
      {en:"That sounds good to me,", es:"Me suena bien eso,", pron:"dat sáunds gud tu mi,"},
      {en:"not right now, but soon!", es:"¡Ahora no, pero pronto!", pron:"nat ráit náu, bat súun!"}
    ]},
    precoro:{label:"Repaso Semana 3", lineas:[
      {en:"I agree with you, but he disagrees,", es:"Estoy de acuerdo contigo, pero él no está de acuerdo,", pron:"ái agríi uid iú, bat ji disagríis,"},
      {en:"No worries, take your time to decide!", es:"No hay problema, ¡tomate tu tiempo para decidir!", pron:"nóu uóris, téik iór táim tu disáid!"}
    ]},
    coro:{label:"Repaso Semana 2", lineas:[
      {en:"I'm not sure,", es:"No estoy seguro,", pron:"áim nat shur,"},
      {en:"but that's a good question,", es:"pero es buena pregunta,", pron:"bat dats a gud cuéschion,"},
      {en:"Let's see...", es:"Vamos a ver...", pron:"lets síi..."},
      {en:"Does that make sense?", es:"¿Tiene sentido?", pron:"das dat méik sens?"},
      {en:"Yes, that makes sense!", es:"¡Sí, tiene sentido!", pron:"iés, dat méiks sens!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"We have ten boxes, what do you mean?", es:"Tenemos diez cajas, ¿qué quieres decir?", pron:"uí jav ten báxes, uát du iú míin?"},
      {en:"Oh, now I see, the order is on Monday,", es:"¡Ah, ya veo, el pedido es el lunes!", pron:"óu, náu ái síi, di órder is on mándei,"},
      {en:"I'm available on Friday, that sounds good to me,", es:"Estoy disponible el viernes, me suena bien eso,", pron:"áim avéilabol on fráidei, dat sáunds gud tu mi,"},
      {en:"The invoice? Not right now, but soon!", es:"¿La factura? ¡Ahora no, pero pronto!", pron:"di ínvois? nat ráit náu, bat súun!"}
    ]}
  },
  { numero:5, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"How does that work?", es:"¿Cómo funciona eso?", pron:"jáu das dat uérk?"},
      {en:"I'll think about it,", es:"Lo voy a pensar,", pron:"áil zink abáut it,"},
      {en:"just a second...", es:"solo un segundo...", pron:"yast a sécond..."},
      {en:"Same here, my friend!", es:"¡Lo mismo digo, amigo!", pron:"séim jíar, mái frend!"}
    ]},
    precoro:{label:"Repaso Semana 4", lineas:[
      {en:"What do you mean? Oh, now I see!", es:"¿Qué quieres decir? ¡Ah, ya veo!", pron:"uát du iú míin? óu, náu ái síi!"},
      {en:"That sounds good to me, not right now, but soon!", es:"Me suena bien eso, ¡ahora no, pero pronto!", pron:"dat sáunds gud tu mi, nat ráit náu, bat súun!"}
    ]},
    coro:{label:"Repaso Semana 3", lineas:[
      {en:"I agree with you,", es:"Estoy de acuerdo contigo,", pron:"ái agríi uid iú,"},
      {en:"but he disagrees,", es:"pero él no está de acuerdo,", pron:"bat ji disagríis,"},
      {en:"No worries,", es:"No hay problema,", pron:"nóu uóris,"},
      {en:"take your time to decide!", es:"¡Tomate tu tiempo para decidir!", pron:"téik iór táim tu disáid!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"How are you doing? I'm fine, thanks, and you?", es:"¿Cómo te va? Bien, gracias, ¿y tú?", pron:"jáu ar iú dúing? áim fáin, zenks, and iú?"},
      {en:"How does that work? One moment, sure!", es:"¿Cómo funciona eso? Un momento, ¡claro!", pron:"jáu das dat uérk? uán móument, shur!"},
      {en:"I'll think about it, just a second... no problem,", es:"Lo voy a pensar, solo un segundo... no hay problema,", pron:"áil zink abáut it, dyast a sécond... nóu próblem,"},
      {en:"Same here, my friend, have a good day, take care!", es:"¡Lo mismo digo, amigo, que tengas un buen día, cuídate!", pron:"séim jíar, mái frend, jav a gud déi, téik quer!"}
    ]}
  },
  { numero:6, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let me know,", es:"Avísame,", pron:"let mi nóu,"},
      {en:"I hope so,", es:"espero que sí,", pron:"ái jóup sóu,"},
      {en:"me too!", es:"¡yo también!", pron:"mi tú!"},
      {en:"Give me a second, hold that thought!", es:"¡Dame un segundo, espera esa idea!", pron:"guiv mi a sécond, jóuld dat zot!"}
    ]},
    precoro:{label:"Repaso Semana 5", lineas:[
      {en:"How does that work? I'll think about it,", es:"¿Cómo funciona eso? Lo voy a pensar,", pron:"jáu das dat uérk? áil zink abáut it,"},
      {en:"just a second... Same here, my friend!", es:"solo un segundo... ¡Lo mismo digo, amigo!", pron:"yast a sécond... séim jíar, mái frend!"}
    ]},
    coro:{label:"Repaso Semana 4", lineas:[
      {en:"What do you mean?", es:"¿Qué quieres decir?", pron:"uát du iú míin?"},
      {en:"Oh, now I see!", es:"¡Ah, ya veo!", pron:"óu, náu ái síi!"},
      {en:"That sounds good to me,", es:"Me suena bien eso,", pron:"dat sáunds gud tu mi,"},
      {en:"not right now, but soon!", es:"¡Ahora no, pero pronto!", pron:"nat ráit náu, bat súun!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"How's business? I'm great, let me know,", es:"¿Cómo va el negocio? Estoy muy bien, avísame,", pron:"jáus bísnes? áim gréit, let mi nóu,"},
      {en:"Business is good, I hope so, me too!", es:"El negocio va bien, espero que sí, ¡yo también!", pron:"bísnes is gud, ái jóup sóu, mi tu!"},
      {en:"Give me a second, hold that thought, I'll call you back,", es:"Dame un segundo, espera esa idea, te devuelvo la llamada,", pron:"guív mi a sécond, jóuld dat zot, áil col iú bak,"},
      {en:"Thanks for your time, let's stay in touch!", es:"¡Gracias por tu tiempo, sigamos en contacto!", pron:"zenks for iór táim, lets stéi in tach!"}
    ]}
  },
  { numero:7, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What's going on?", es:"¿Qué está pasando?", pron:"uáts góing on?"},
      {en:"I have no idea!", es:"¡No tengo idea!", pron:"ái jav nóu aidía!"},
      {en:"Let me check...", es:"Déjame revisar...", pron:"let mi chek..."},
      {en:"One moment, please!", es:"¡Un momento, por favor!", pron:"uán móument, plíis!"}
    ]},
    precoro:{label:"Repaso Semana 6", lineas:[
      {en:"Let me know, I hope so,", es:"Avísame, espero que sí,", pron:"let mi nóu, ái jóup sóu,"},
      {en:"me too! Give me a second, hold that thought!", es:"¡yo también! ¡Dame un segundo, espera esa idea!", pron:"mi tú! guiv mi a sécond, jóuld dat zot!"}
    ]},
    coro:{label:"Repaso Semana 5", lineas:[
      {en:"How does that work?", es:"¿Cómo funciona eso?", pron:"jáu das dat uérk?"},
      {en:"I'll think about it,", es:"Lo voy a pensar,", pron:"áil zink abáut it,"},
      {en:"just a second...", es:"solo un segundo...", pron:"yast a sécond..."},
      {en:"Same here, my friend!", es:"¡Lo mismo digo, amigo!", pron:"séim jíar, mái frend!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"What's going on? When will it arrive?", es:"¿Qué está pasando? ¿Cuándo va a llegar?", pron:"uáts góing on? uén uíl it aráiv?"},
      {en:"I have no idea! Do you have stock?", es:"¡No tengo idea! ¿Tienes existencias?", pron:"ái jav nóu aidía! du iú jav stok?"},
      {en:"Let me check... is it ready? I can help you,", es:"Déjame revisar... ¿está listo? Puedo ayudarte,", pron:"let mi chek... is it rédi? ái can jelp iú,"},
      {en:"I have a question, one moment, please!", es:"Tengo una pregunta, ¡un momento, por favor!", pron:"ái jav a cuéschion, uán móument, plíis!"}
    ]}
  },
  { numero:8, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I think so,", es:"Creo que sí,", pron:"ái zink sóu,"},
      {en:"but I don't think so either,", es:"pero tampoco creo que no,", pron:"bat ái dont zink sóu íder,"},
      {en:"That's true,", es:"Eso es verdad,", pron:"dats trú,"},
      {en:"or maybe that's not true!", es:"¡o tal vez no es verdad!", pron:"or méibi dats nat trú!"}
    ]},
    precoro:{label:"Repaso Semana 7", lineas:[
      {en:"What's going on? I have no idea!", es:"¿Qué está pasando? ¡No tengo idea!", pron:"uáts góing on? ái jav nóu aidía!"},
      {en:"Let me check... One moment, please!", es:"Déjame revisar... ¡Un momento, por favor!", pron:"let mi chek... uán móument, plíis!"}
    ]},
    coro:{label:"Repaso Semana 6", lineas:[
      {en:"Let me know,", es:"Avísame,", pron:"let mi nóu,"},
      {en:"I hope so,", es:"espero que sí,", pron:"ái jóup sóu,"},
      {en:"me too!", es:"¡yo también!", pron:"mi tú!"},
      {en:"Give me a second, hold that thought!", es:"¡Dame un segundo, espera esa idea!", pron:"guiv mi a sécond, jóuld dat zot!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"It is red, and it is strong, I think so,", es:"Es rojo, y es fuerte, creo que sí,", pron:"it is red, and it is strong, ái zink sóu,"},
      {en:"Big or small? But I don't think so either,", es:"¿Grande o pequeño? Pero tampoco creo,", pron:"big or smol? bat ái dont zink sóu íider,"},
      {en:"It's plastic, not metal, or maybe that's not true,", es:"Es de plástico, no de metal, o tal vez eso no es verdad,", pron:"its plástic, nat métal, or méibi dats nat tru,"},
      {en:"Let's finish, well done, great job, that's true!", es:"Terminemos, bien hecho, buen trabajo, ¡es verdad!", pron:"lets fínish, uél dan, gréit dyab, dats tru!"}
    ]},
    puente:{label:"Repaso profundo — Semana 2", lineas:[
      {en:"I'm not sure, but that's a good question,", es:"No estoy seguro, pero es buena pregunta,", pron:"áim nat shur, bat dats a gud cuéschion,"},
      {en:"let's see if that makes sense!", es:"¡vamos a ver si tiene sentido!", pron:"lets síi if dat méiks sens!"}
    ]}
  },
  { numero:9, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Could you repeat that?", es:"¿Podrías repetir eso?", pron:"cud iú ripíit dat?"},
      {en:"No problem at all!", es:"¡No hay ningún problema!", pron:"nóu práblem at ol!"},
      {en:"It's my pleasure,", es:"Es un placer,", pron:"its mái pléshur,"},
      {en:"don't worry about it!", es:"¡no te preocupes por eso!", pron:"dont uóri abáut it!"}
    ]},
    precoro:{label:"Repaso Semana 8", lineas:[
      {en:"I think so, but I don't think so either,", es:"Creo que sí, pero tampoco creo que no,", pron:"ái zink sóu, bat ái dont zink sóu íder,"},
      {en:"That's true, or maybe that's not true!", es:"Eso es verdad, ¡o tal vez no es verdad!", pron:"dats trú, or méibi dats nat trú!"}
    ]},
    coro:{label:"Repaso Semana 7", lineas:[
      {en:"What's going on?", es:"¿Qué está pasando?", pron:"uáts góing on?"},
      {en:"I have no idea!", es:"¡No tengo idea!", pron:"ái jav nóu aidía!"},
      {en:"Let me check...", es:"Déjame revisar...", pron:"let mi chek..."},
      {en:"One moment, please!", es:"¡Un momento, por favor!", pron:"uán móument, plíis!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"There is a desk in my office, could you repeat that?", es:"Hay un escritorio en mi oficina, ¿podrías repetir eso?", pron:"der is a desk in mái ófis, cud iú ripíit dat?"},
      {en:"There is a printer and a chair, no problem at all!", es:"Hay una impresora y una silla, ¡no hay ningún problema!", pron:"der is a prínter and a cher, nóu próblem at ol!"},
      {en:"Here's the key to the door, it's my pleasure,", es:"Aquí está la llave de la puerta, es un placer,", pron:"jíars de kíi tu de dor, its mái pléshur,"},
      {en:"Open the window, don't worry about it!", es:"Abre la ventana, ¡no te preocupes por eso!", pron:"óupen de uíndou, dont uóri abáut it!"}
    ]}
  },
  { numero:10, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I see what you mean,", es:"Entiendo lo que quieres decir,", pron:"ái síi uát iú míin,"},
      {en:"that's interesting!", es:"¡eso es interesante!", pron:"dats íntresting!"},
      {en:"Tell me more,", es:"Contame más,", pron:"tel mi mor,"},
      {en:"I'd love to hear it!", es:"¡me encantaría escucharlo!", pron:"áid lav tu jíar it!"}
    ]},
    precoro:{label:"Repaso Semana 9", lineas:[
      {en:"Could you repeat that? No problem at all!", es:"¿Podrías repetir eso? ¡No hay ningún problema!", pron:"cud iú ripíit dat? nóu práblem at ol!"},
      {en:"It's my pleasure, don't worry about it!", es:"Es un placer, ¡no te preocupes por eso!", pron:"its mái pléshur, dont uóri abáut it!"}
    ]},
    coro:{label:"Repaso Semana 8", lineas:[
      {en:"I think so,", es:"Creo que sí,", pron:"ái zink sóu,"},
      {en:"but I don't think so either,", es:"pero tampoco creo que no,", pron:"bat ái dont zink sóu íder,"},
      {en:"That's true,", es:"Eso es verdad,", pron:"dats trú,"},
      {en:"or maybe that's not true!", es:"¡o tal vez no es verdad!", pron:"or méibi dats nat trú!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I wake up early, I go to work at eight,", es:"Me levanto temprano, voy a trabajar a las ocho,", pron:"ái uéik ap érli, ái góu tu uérk at éit,"},
      {en:"I see what you mean, that's interesting!", es:"Entiendo lo que quieres decir, ¡qué interesante!", pron:"ái síi uát iú míin, dats íntresting!"},
      {en:"I have to check the orders, tell me more,", es:"Tengo que revisar los pedidos, cuéntame más,", pron:"ái jav tu chek di órders, tel mi mor,"},
      {en:"I finish work at five, I'd love to hear it!", es:"Termino de trabajar a las cinco, ¡me encantaría oírlo!", pron:"ái fínish uérk at fáiv, áid lav tu jíar it!"}
    ]}
  },
  { numero:11, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Excuse me for a second,", es:"Disculpame un segundo,", pron:"exquiúsmi for a sécond,"},
      {en:"I'll be right there!", es:"¡ya voy para allá!", pron:"áil bi ráit dér!"},
      {en:"Thanks for waiting,", es:"Gracias por esperar,", pron:"zenks for uéiting,"},
      {en:"almost done!", es:"¡casi termino!", pron:"ólmoust dan!"}
    ]},
    precoro:{label:"Repaso Semana 10", lineas:[
      {en:"I see what you mean, that's interesting!", es:"Entiendo lo que quieres decir, ¡eso es interesante!", pron:"ái síi uát iú míin, dats íntresting!"},
      {en:"Tell me more, I'd love to hear it!", es:"Contame más, ¡me encantaría escucharlo!", pron:"tel mi mor, áid lav tu jíar it!"}
    ]},
    coro:{label:"Repaso Semana 9", lineas:[
      {en:"Could you repeat that?", es:"¿Podrías repetir eso?", pron:"cud iú ripíit dat?"},
      {en:"No problem at all!", es:"¡No hay ningún problema!", pron:"nóu práblem at ol!"},
      {en:"It's my pleasure,", es:"Es un placer,", pron:"its mái pléshur,"},
      {en:"don't worry about it!", es:"¡no te preocupes por eso!", pron:"dont uóri abáut it!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Can I borrow the hammer? Excuse me for a second,", es:"¿Me prestas el martillo? Disculpa un segundo,", pron:"can ái bórou de jámer? exquiús mi for a sécond,"},
      {en:"The ladder and the paint, I'll be right there!", es:"La escalera y la pintura, ¡ya voy para allá!", pron:"de láder and de péint, áil bi ráit der!"},
      {en:"Pen, paper, scissors, thanks for waiting,", es:"Lápiz, papel, tijeras, gracias por esperar,", pron:"pen, péiper, sísors, zenks for uéiting,"},
      {en:"The tape and the folder, almost done!", es:"La cinta y la carpeta, ¡ya casi termino!", pron:"de téip and de fóulder, ólmoust dan!"}
    ]}
  },
  { numero:12, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Perfect, that works!", es:"¡Perfecto, eso funciona!", pron:"pérfect, dat uérks!"},
      {en:"Sounds like a plan,", es:"Suena como un plan,", pron:"sáunds láik a plan,"},
      {en:"let's do that,", es:"hagamos eso,", pron:"lets du dat,"},
      {en:"I'm on it!", es:"¡ya me pongo con eso!", pron:"áim on it!"}
    ]},
    precoro:{label:"Repaso Semana 11", lineas:[
      {en:"Excuse me for a second, I'll be right there!", es:"Disculpame un segundo, ¡ya voy para allá!", pron:"exquiúsmi for a sécond, áil bi ráit dér!"},
      {en:"Thanks for waiting, almost done!", es:"Gracias por esperar, ¡casi termino!", pron:"zenks for uéiting, ólmoust dan!"}
    ]},
    coro:{label:"Repaso Semana 10", lineas:[
      {en:"I see what you mean,", es:"Entiendo lo que quieres decir,", pron:"ái síi uát iú míin,"},
      {en:"that's interesting!", es:"¡eso es interesante!", pron:"dats íntresting!"},
      {en:"Tell me more,", es:"Contame más,", pron:"tel mi mor,"},
      {en:"I'd love to hear it!", es:"¡me encantaría escucharlo!", pron:"áid lav tu jíar it!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I have a dog and a cat, perfect, that works!", es:"Tengo un perro y un gato, perfecto, ¡funciona!", pron:"ái jav a dog and a cat, pérfect, dat uérks!"},
      {en:"Teamwork and respect, sounds like a plan,", es:"Trabajo en equipo y respeto, suena como un plan,", pron:"tíimuérk and rispéct, sáunds láik a plan,"},
      {en:"Trust and honesty? Let's do that,", es:"¿Confianza y honestidad? Hagamos eso,", pron:"trast and ónesti? lets du dat,"},
      {en:"I recommend this reliable customer, I'm on it!", es:"Recomiendo a este cliente confiable, ¡me encargo!", pron:"ái recoménd dis riláiabol cástomer, áim on it!"}
    ]},
    puente:{label:"Repaso profundo — Semana 6", lineas:[
      {en:"What do you mean? Oh, now I see,", es:"¿Qué quieres decir? Ah, ya veo,", pron:"uát du iú míin? óu, náu ái síi,"},
      {en:"that sounds good to me!", es:"¡me suena bien eso!", pron:"dat sáunds gud tu mi!"}
    ]}
  },
  { numero:13, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Excuse me, is this seat taken?", es:"Disculpe, ¿este asiento está ocupado?", pron:"exquiúsmi, is dis síit téiken?"},
      {en:"No, go ahead!", es:"¡No, adelante!", pron:"nóu, góu ajéd!"},
      {en:"Thanks, I appreciate it,", es:"Gracias, lo aprecio,", pron:"zenks, ái aprísheit it,"},
      {en:"Anytime!", es:"¡Cuando quieras!", pron:"énitaim!"}
    ]},
    precoro:{label:"Repaso Semana 12", lineas:[
      {en:"Perfect, that works! Sounds like a plan,", es:"¡Perfecto, eso funciona! Suena como un plan,", pron:"pérfect, dat uérks! sáunds láik a plan,"},
      {en:"let's do that, I'm on it!", es:"hagamos eso, ¡ya me pongo con eso!", pron:"lets du dat, áim on it!"}
    ]},
    coro:{label:"Repaso Semana 11", lineas:[
      {en:"Excuse me for a second,", es:"Disculpame un segundo,", pron:"exquiúsmi for a sécond,"},
      {en:"I'll be right there!", es:"¡ya voy para allá!", pron:"áil bi ráit dér!"},
      {en:"Thanks for waiting,", es:"Gracias por esperar,", pron:"zenks for uéiting,"},
      {en:"almost done!", es:"¡casi termino!", pron:"ólmoust dan!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Excuse me, is this seat taken? By the way...", es:"Disculpa, ¿este asiento está ocupado? Por cierto...", pron:"exquiús mi, is dis síit téiken? bái de uéi..."},
      {en:"No, go ahead! Don't worry, it's fine,", es:"¡No, adelante! No te preocupes, está bien,", pron:"nóu, góu ajéd! dont uóri, its fáin,"},
      {en:"Thanks, I appreciate it, no rush, take your time,", es:"Gracias, te lo agradezco, sin prisa, tómate tu tiempo,", pron:"zenks, ái aprísieit it, nóu rash, téik iór táim,"},
      {en:"Actually, I'm almost ready... anytime!", es:"En realidad, ya casi estoy listo... ¡cuando quieras!", pron:"ákchuali, áim ólmoust rédi... énitaim!"}
    ]}
  },
  { numero:14, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Can I ask you something?", es:"¿Puedo preguntarte algo?", pron:"can ái ask iú sámzing?"},
      {en:"Of course, go ahead!", es:"¡Por supuesto, adelante!", pron:"of cors, góu ajéd!"},
      {en:"Never mind,", es:"No importa,", pron:"néver máind,"},
      {en:"it's not important!", es:"¡no es importante!", pron:"its nat impórtant!"}
    ]},
    precoro:{label:"Repaso Semana 13", lineas:[
      {en:"Excuse me, is this seat taken? No, go ahead!", es:"Disculpe, ¿este asiento está ocupado? ¡No, adelante!", pron:"exquiúsmi, is dis síit téiken? nóu, góu ajéd!"},
      {en:"Thanks, I appreciate it, anytime!", es:"Gracias, lo aprecio, ¡cuando quieras!", pron:"zenks, ái aprísheit it, énitaim!"}
    ]},
    coro:{label:"Repaso Semana 12", lineas:[
      {en:"Perfect, that works!", es:"¡Perfecto, eso funciona!", pron:"pérfect, dat uérks!"},
      {en:"Sounds like a plan,", es:"Suena como un plan,", pron:"sáunds láik a plan,"},
      {en:"let's do that,", es:"hagamos eso,", pron:"lets du dat,"},
      {en:"I'm on it!", es:"¡ya me pongo con eso!", pron:"áim on it!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Can I ask you something? I'm hungry,", es:"¿Puedo preguntarte algo? Tengo hambre,", pron:"can ái ask iú sámzing? áim jángri,"},
      {en:"Of course, go ahead! Let's have lunch,", es:"¡Claro, adelante! Almorcemos,", pron:"av cors, góu ajéd! lets jav lanch,"},
      {en:"I would like chicken, rice and salad, delicious!", es:"Quisiera pollo, arroz y ensalada, ¡delicioso!", pron:"ái uúd láik chíken, ráis and sálad, dilíshos!"},
      {en:"The inventory? Never mind, it's not important!", es:"¿El inventario? Olvídalo, ¡no es importante!", pron:"di ínventori? néver máind, its nat impórtant!"}
    ]}
  },
  { numero:15, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm on my way,", es:"Estoy en camino,", pron:"áim on mái uéi,"},
      {en:"almost there!", es:"¡ya casi llego!", pron:"ólmoust dér!"},
      {en:"Just a moment,", es:"Un momento,", pron:"yast a móument,"},
      {en:"here I am!", es:"¡acá estoy!", pron:"jíar ái am!"}
    ]},
    precoro:{label:"Repaso Semana 14", lineas:[
      {en:"Can I ask you something? Of course, go ahead!", es:"¿Puedo preguntarte algo? ¡Por supuesto, adelante!", pron:"can ái ask iú sámzing? of cors, góu ajéd!"},
      {en:"Never mind, it's not important!", es:"No importa, ¡no es importante!", pron:"néver máind, its nat impórtant!"}
    ]},
    coro:{label:"Repaso Semana 13", lineas:[
      {en:"Excuse me, is this seat taken?", es:"Disculpe, ¿este asiento está ocupado?", pron:"exquiúsmi, is dis síit téiken?"},
      {en:"No, go ahead!", es:"¡No, adelante!", pron:"nóu, góu ajéd!"},
      {en:"Thanks, I appreciate it,", es:"Gracias, lo aprecio,", pron:"zenks, ái aprísheit it,"},
      {en:"Anytime!", es:"¡Cuando quieras!", pron:"énitaim!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"This weekend I can relax, I'm on my way,", es:"Este fin de semana puedo descansar, voy en camino,", pron:"dis uíikend ái can riláx, áim on mái uéi,"},
      {en:"Vacation time, almost there!", es:"Tiempo de vacaciones, ¡ya casi llego!", pron:"vaquéishon táim, ólmoust der!"},
      {en:"I can travel next week, just a moment,", es:"Puedo viajar la próxima semana, solo un momento,", pron:"ái can trável next uíik, dyast a móument,"},
      {en:"Cover for me, please, here I am!", es:"Cúbreme, por favor, ¡aquí estoy!", pron:"cáver for mi, plíis, jíar ái am!"}
    ]}
  },
  { numero:16, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That's a great idea,", es:"Esa es una gran idea,", pron:"dats a gréit aidía,"},
      {en:"let's try it!", es:"¡intentémoslo!", pron:"lets trái it!"},
      {en:"Why not?", es:"¿Por qué no?", pron:"uái nat?"},
      {en:"Sounds fun!", es:"¡Suena divertido!", pron:"sáunds fan!"}
    ]},
    precoro:{label:"Repaso Semana 15", lineas:[
      {en:"I'm on my way, almost there!", es:"Estoy en camino, ¡ya casi llego!", pron:"áim on mái uéi, ólmoust dér!"},
      {en:"Just a moment, here I am!", es:"Un momento, ¡acá estoy!", pron:"yast a móument, jíar ái am!"}
    ]},
    coro:{label:"Repaso Semana 14", lineas:[
      {en:"Can I ask you something?", es:"¿Puedo preguntarte algo?", pron:"can ái ask iú sámzing?"},
      {en:"Of course, go ahead!", es:"¡Por supuesto, adelante!", pron:"of cors, góu ajéd!"},
      {en:"Never mind,", es:"No importa,", pron:"néver máind,"},
      {en:"it's not important!", es:"¡no es importante!", pron:"its nat impórtant!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"This offer is cheaper than that one, that's a great idea,", es:"Esta oferta es más barata que esa, es una gran idea,", pron:"dis ófer is chíiper dan dat uán, dats a gréit aidía,"},
      {en:"Let's compare the options, let's try it!", es:"Comparemos las opciones, ¡intentémoslo!", pron:"lets compér di ópshons, lets trái it!"},
      {en:"I remember the deal, why not?", es:"Recuerdo el trato, ¿por qué no?", pron:"ái rimémber de díil, uái nat?"},
      {en:"Let's negotiate the contract, sounds fun!", es:"Negociemos el contrato, ¡suena divertido!", pron:"lets nigóushieit de cóntract, sáunds fan!"}
    ]},
    puente:{label:"Repaso profundo — Semana 10", lineas:[
      {en:"I see what you mean, that's interesting,", es:"Entiendo lo que quieres decir, es interesante,", pron:"ái síi uát iú míin, dats íntresting,"},
      {en:"tell me more, I'd love to hear it!", es:"¡contame más, me encantaría escucharlo!", pron:"tel mi mor, áid lav tu jíar it!"}
    ]}
  },
  { numero:17, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm running late,", es:"Estoy llegando tarde,", pron:"áim ráning léit,"},
      {en:"I'll hurry!", es:"¡me voy a apurar!", pron:"áil jéri!"},
      {en:"No rush,", es:"No hay apuro,", pron:"nóu rash,"},
      {en:"take it easy!", es:"¡tomátelo con calma!", pron:"téik it ísi!"}
    ]},
    precoro:{label:"Repaso Semana 16", lineas:[
      {en:"That's a great idea, let's try it!", es:"Esa es una gran idea, ¡intentémoslo!", pron:"dats a gréit aidía, lets trái it!"},
      {en:"Why not? Sounds fun!", es:"¿Por qué no? ¡Suena divertido!", pron:"uái nat? sáunds fan!"}
    ]},
    coro:{label:"Repaso Semana 15", lineas:[
      {en:"I'm on my way,", es:"Estoy en camino,", pron:"áim on mái uéi,"},
      {en:"almost there!", es:"¡ya casi llego!", pron:"ólmoust dér!"},
      {en:"Just a moment,", es:"Un momento,", pron:"yast a móument,"},
      {en:"here I am!", es:"¡acá estoy!", pron:"jíar ái am!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"It costs twenty, I'm running late,", es:"Cuesta veinte, voy tarde,", pron:"it costs tuénti, áim ráning léit,"},
      {en:"The budget is fifteen, I'll hurry!", es:"El presupuesto es de quince, ¡me apuro!", pron:"de bádyet is fiftíin, áil jári!"},
      {en:"Is it expensive or cheap? No rush,", es:"¿Es caro o barato? Sin prisa,", pron:"is it expénsiv or chíip? nóu rash,"},
      {en:"The final price is twelve, take it easy!", es:"El precio final es doce, ¡tranquilo!", pron:"de fáinal práis is tuélv, téik it ísi!"}
    ]}
  },
  { numero:18, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What's new?", es:"¿Qué hay de nuevo?", pron:"uáts niú?"},
      {en:"Not much,", es:"No mucho,", pron:"nat mach,"},
      {en:"same as always,", es:"lo mismo de siempre,", pron:"séim as ólueis,"},
      {en:"nice to hear!", es:"¡qué bueno escuchar eso!", pron:"náis tu jíar!"}
    ]},
    precoro:{label:"Repaso Semana 17", lineas:[
      {en:"I'm running late, I'll hurry!", es:"Estoy llegando tarde, ¡me voy a apurar!", pron:"áim ráning léit, áil jéri!"},
      {en:"No rush, take it easy!", es:"No hay apuro, ¡tomátelo con calma!", pron:"nóu rash, téik it ísi!"}
    ]},
    coro:{label:"Repaso Semana 16", lineas:[
      {en:"That's a great idea,", es:"Esa es una gran idea,", pron:"dats a gréit aidía,"},
      {en:"let's try it!", es:"¡intentémoslo!", pron:"lets trái it!"},
      {en:"Why not?", es:"¿Por qué no?", pron:"uái nat?"},
      {en:"Sounds fun!", es:"¡Suena divertido!", pron:"sáunds fan!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"What's new? The quote is ready,", es:"¿Qué hay de nuevo? La cotización está lista,", pron:"uáts niú? de cuóut is rédi,"},
      {en:"Not much, the grand total adds up to one hundred,", es:"No mucho, el gran total suma cien,", pron:"nat mach, de grand tóutal ads ap tu uán jándred,"},
      {en:"It opens at nine o'clock, same as always,", es:"Abre a las nueve en punto, lo mismo de siempre,", pron:"it óupens at náin oclók, séim as ólueis,"},
      {en:"Delivery the next day? Nice to hear!", es:"¿Entrega al día siguiente? ¡Qué bueno oír eso!", pron:"delíveri de next déi? náis tu jíar!"}
    ]}
  },
  { numero:19, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Could you slow down, please?", es:"¿Podrías ir más despacio, por favor?", pron:"cud iú slóu dáun, plíis?"},
      {en:"Sure, no problem!", es:"¡Claro, no hay problema!", pron:"shur, nóu práblem!"},
      {en:"Is that better?", es:"¿Está mejor así?", pron:"is dat béter?"},
      {en:"Much better, thanks!", es:"¡Mucho mejor, gracias!", pron:"mach béter, zenks!"}
    ]},
    precoro:{label:"Repaso Semana 18", lineas:[
      {en:"What's new? Not much,", es:"¿Qué hay de nuevo? No mucho,", pron:"uáts niú? nat mach,"},
      {en:"same as always, nice to hear!", es:"lo mismo de siempre, ¡qué bueno escuchar eso!", pron:"séim as ólueis, náis tu jíar!"}
    ]},
    coro:{label:"Repaso Semana 17", lineas:[
      {en:"I'm running late,", es:"Estoy llegando tarde,", pron:"áim ráning léit,"},
      {en:"I'll hurry!", es:"¡me voy a apurar!", pron:"áil jéri!"},
      {en:"No rush,", es:"No hay apuro,", pron:"nóu rash,"},
      {en:"take it easy!", es:"¡tomátelo con calma!", pron:"téik it ísi!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Could you slow down, please? The tracking number...", es:"¿Podrías ir más despacio, por favor? El número de rastreo...", pron:"cud iú slóu dáun, plíis? de tráking námber..."},
      {en:"Sure, no problem! The estimated arrival is at noon,", es:"¡Claro, no hay problema! La llegada estimada es al mediodía,", pron:"shur, nóu próblem! di éstimeited aráival is at núun,"},
      {en:"It's delayed, as soon as possible, is that better?", es:"Está retrasado, lo antes posible, ¿así está mejor?", pron:"its diléid, as súun as pósibol, is dat béter?"},
      {en:"In the morning, early, much better, thanks!", es:"En la mañana, temprano, ¡mucho mejor, gracias!", pron:"in de mórning, érli, mach béter, zenks!"}
    ]}
  },
  { numero:20, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Take care!", es:"¡Cuídate!", pron:"téik quér!"},
      {en:"You too!", es:"¡Tú también!", pron:"iú tú!"},
      {en:"See you around,", es:"Nos vemos por ahí,", pron:"síi iú aráund,"},
      {en:"have a good one!", es:"¡que la pases bien!", pron:"jav a gud uán!"}
    ]},
    precoro:{label:"Repaso Semana 19", lineas:[
      {en:"Could you slow down, please? Sure, no problem!", es:"¿Podrías ir más despacio, por favor? ¡Claro, no hay problema!", pron:"cud iú slóu dáun, plíis? shur, nóu práblem!"},
      {en:"Is that better? Much better, thanks!", es:"¿Está mejor así? ¡Mucho mejor, gracias!", pron:"is dat béter? mach béter, zenks!"}
    ]},
    coro:{label:"Repaso Semana 18", lineas:[
      {en:"What's new?", es:"¿Qué hay de nuevo?", pron:"uáts niú?"},
      {en:"Not much,", es:"No mucho,", pron:"nat mach,"},
      {en:"same as always,", es:"lo mismo de siempre,", pron:"séim as ólueis,"},
      {en:"nice to hear!", es:"¡qué bueno escuchar eso!", pron:"náis tu jíar!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The due date is May tenth, take care!", es:"La fecha de vencimiento es el diez de mayo, ¡cuídate!", pron:"de diú déit is méi tenz, téik quer!"},
      {en:"You too! The payment terms are net thirty,", es:"¡Tú también! Las condiciones de pago son a treinta días,", pron:"iú tu! de péiment terms ar net zérti,"},
      {en:"It's overdue, we need an extension, see you around,", es:"Está vencido, necesitamos una prórroga, nos vemos,", pron:"its ouverdiú, uí níid an exténshon, síi iú aráund,"},
      {en:"Paid in full in June, have a good one!", es:"Pagado completo en junio, ¡que te vaya bien!", pron:"péid in ful in dyun, jav a gud uán!"}
    ]},
    puente:{label:"Repaso profundo — Semana 14", lineas:[
      {en:"Can I ask you something? Of course, go ahead,", es:"¿Puedo preguntarte algo? Por supuesto, adelante,", pron:"can ái ask iú sámzing? of cors, góu ajéd,"},
      {en:"never mind, it's not important!", es:"¡no importa, no es importante!", pron:"néver máind, its nat impórtant!"}
    ]}
  },
  { numero:21, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Do you need anything?", es:"¿Necesitas algo?", pron:"du iú níid énizing?"},
      {en:"I'm all set,", es:"Estoy bien así,", pron:"áim ol set,"},
      {en:"just checking,", es:"solo estaba revisando,", pron:"yast chéking,"},
      {en:"appreciate it!", es:"¡lo aprecio!", pron:"aprísheit it!"}
    ]},
    precoro:{label:"Repaso Semana 20", lineas:[
      {en:"Take care! You too!", es:"¡Cuídate! ¡Tú también!", pron:"téik quér! iú tú!"},
      {en:"See you around, have a good one!", es:"Nos vemos por ahí, ¡que la pases bien!", pron:"síi iú aráund, jav a gud uán!"}
    ]},
    coro:{label:"Repaso Semana 19", lineas:[
      {en:"Could you slow down, please?", es:"¿Podrías ir más despacio, por favor?", pron:"cud iú slóu dáun, plíis?"},
      {en:"Sure, no problem!", es:"¡Claro, no hay problema!", pron:"shur, nóu práblem!"},
      {en:"Is that better?", es:"¿Está mejor así?", pron:"is dat béter?"},
      {en:"Much better, thanks!", es:"¡Mucho mejor, gracias!", pron:"mach béter, zenks!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Do you need anything? Let me see,", es:"¿Necesitas algo? Déjame ver,", pron:"du iú níid énizing? let mi síi,"},
      {en:"I'm all set, that works, makes sense,", es:"Ya tengo todo, eso funciona, tiene sentido,", pron:"áim ol set, dat uérks, méiks sens,"},
      {en:"Hold on, just checking, maybe, probably,", es:"Espera, solo reviso, tal vez, probablemente,", pron:"jóuld on, dyast chéking, méibi, próbabli,"},
      {en:"Definitely, I agree, appreciate it!", es:"Definitivamente, estoy de acuerdo, ¡te lo agradezco!", pron:"définitli, ái agríi, aprísieit it!"}
    ]}
  },
  { numero:22, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Is everything okay?", es:"¿Está todo bien?", pron:"is évrizing oukéi?"},
      {en:"Yes, all good!", es:"¡Sí, todo bien!", pron:"iés, ol gud!"},
      {en:"Let me double-check,", es:"Déjame revisar de nuevo,", pron:"let mi dábol chek,"},
      {en:"just to be sure!", es:"¡solo para estar seguro!", pron:"yast tu bi shur!"}
    ]},
    precoro:{label:"Repaso Semana 21", lineas:[
      {en:"Do you need anything? I'm all set,", es:"¿Necesitas algo? Estoy bien así,", pron:"du iú níid énizing? áim ol set,"},
      {en:"just checking, appreciate it!", es:"solo estaba revisando, ¡lo aprecio!", pron:"yast chéking, aprísheit it!"}
    ]},
    coro:{label:"Repaso Semana 20", lineas:[
      {en:"Take care!", es:"¡Cuídate!", pron:"téik quér!"},
      {en:"You too!", es:"¡Tú también!", pron:"iú tú!"},
      {en:"See you around,", es:"Nos vemos por ahí,", pron:"síi iú aráund,"},
      {en:"have a good one!", es:"¡que la pases bien!", pron:"jav a gud uán!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Is everything okay? This is top priority,", es:"¿Está todo bien? Esto es máxima prioridad,", pron:"is évrizing oukéi? dis is top praióriti,"},
      {en:"Yes, all good! I will pay by bank transfer,", es:"¡Sí, todo bien! Voy a pagar por transferencia bancaria,", pron:"iés, ol gud! ái uíl péi bái bank tránsfer,"},
      {en:"Here's the receipt, let me double-check,", es:"Aquí está el recibo, déjame verificar,", pron:"jíars de risíit, let mi dábol chek,"},
      {en:"First the refund, just to be sure!", es:"Primero el reembolso, ¡solo para estar seguro!", pron:"ferst de rífand, dyast tu bi shur!"}
    ]}
  },
  { numero:23, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That works for me,", es:"Eso me sirve,", pron:"dat uérks for mi,"},
      {en:"perfect timing!", es:"¡momento perfecto!", pron:"pérfect táiming!"},
      {en:"Let's confirm it,", es:"Confirmémoslo,", pron:"lets canférm it,"},
      {en:"all set then!", es:"¡listo entonces!", pron:"ol set den!"}
    ]},
    precoro:{label:"Repaso Semana 22", lineas:[
      {en:"Is everything okay? Yes, all good!", es:"¿Está todo bien? ¡Sí, todo bien!", pron:"is évrizing oukéi? iés, ol gud!"},
      {en:"Let me double-check, just to be sure!", es:"Déjame revisar de nuevo, ¡solo para estar seguro!", pron:"let mi dábol chek, yast tu bi shur!"}
    ]},
    coro:{label:"Repaso Semana 21", lineas:[
      {en:"Do you need anything?", es:"¿Necesitas algo?", pron:"du iú níid énizing?"},
      {en:"I'm all set,", es:"Estoy bien así,", pron:"áim ol set,"},
      {en:"just checking,", es:"solo estaba revisando,", pron:"yast chéking,"},
      {en:"appreciate it!", es:"¡lo aprecio!", pron:"aprísheit it!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I need to negotiate a bulk order, that works for me,", es:"Necesito negociar un pedido al por mayor, eso me funciona,", pron:"ái níid tu nigóushieit a balk órder, dat uérks for mi,"},
      {en:"Wholesale, not retail, perfect timing!", es:"Al por mayor, no al detal, ¡en el momento perfecto!", pron:"jóulseil, nat ríteil, pérfect táiming!"},
      {en:"The lowest price and a good margin, let's confirm it,", es:"El precio más bajo y un buen margen, confirmémoslo,", pron:"de lóuest práis and a gud márdyin, lets confírm it,"},
      {en:"Final offer, deal closed, all set then!", es:"Oferta final, trato cerrado, ¡listo entonces!", pron:"fáinal ófer, díil clóusd, ol set den!"}
    ]}
  },
  { numero:24, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Congratulations!", es:"¡Felicitaciones!", pron:"congrachuléishons!"},
      {en:"Thank you so much!", es:"¡Muchas gracias!", pron:"zenk iú sóu mach!"},
      {en:"You earned it,", es:"Te lo mereces,", pron:"iú érnd it,"},
      {en:"well deserved!", es:"¡bien merecido!", pron:"uél disérvd!"}
    ]},
    precoro:{label:"Repaso Semana 23", lineas:[
      {en:"That works for me, perfect timing!", es:"Eso me sirve, ¡momento perfecto!", pron:"dat uérks for mi, pérfect táiming!"},
      {en:"Let's confirm it, all set then!", es:"Confirmémoslo, ¡listo entonces!", pron:"lets canférm it, ol set den!"}
    ]},
    coro:{label:"Repaso Semana 22", lineas:[
      {en:"Is everything okay?", es:"¿Está todo bien?", pron:"is évrizing oukéi?"},
      {en:"Yes, all good!", es:"¡Sí, todo bien!", pron:"iés, ol gud!"},
      {en:"Let me double-check,", es:"Déjame revisar de nuevo,", pron:"let mi dábol chek,"},
      {en:"just to be sure!", es:"¡solo para estar seguro!", pron:"yast tu bi shur!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"It weighs ten kilograms, congratulations!", es:"Pesa diez kilos, ¡felicitaciones!", pron:"it uéis ten kílograms, congrachuléishons!"},
      {en:"Thank you so much! One pallet, one liter,", es:"¡Muchas gracias! Una estiba, un litro,", pron:"zenk iú sóu mach! uán pálet, uán líter,"},
      {en:"Strong progress, proud of you, you earned it,", es:"Gran progreso, orgulloso de ti, te lo ganaste,", pron:"strong prógres, práud av iú, iú érnd it,"},
      {en:"See you in unit four, well deserved!", es:"Nos vemos en la unidad cuatro, ¡bien merecido!", pron:"síi iú in iúnit for, uél disérvd!"}
    ]},
    puente:{label:"Repaso profundo — Semana 18", lineas:[
      {en:"What's new? Not much,", es:"¿Qué hay de nuevo? No mucho,", pron:"uáts niú? nat mach,"},
      {en:"same as always, nice to hear!", es:"¡lo mismo de siempre, qué bueno escuchar eso!", pron:"séim as ólueis, náis tu jíar!"}
    ]}
  },
  { numero:25, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Can we talk for a second?", es:"¿Podemos hablar un segundo?", pron:"can uí tok for a sécond?"},
      {en:"Sure, what's up?", es:"¡Claro, qué pasa!", pron:"shur, uáts ap?"},
      {en:"It's nothing serious,", es:"No es nada serio,", pron:"its názing síirios,"},
      {en:"just wanted to check in!", es:"¡solo quería ver cómo estabas!", pron:"yast uánted tu chek in!"}
    ]},
    precoro:{label:"Repaso Semana 24", lineas:[
      {en:"Congratulations! Thank you so much!", es:"¡Felicitaciones! ¡Muchas gracias!", pron:"congrachuléishons! zenk iú sóu mach!"},
      {en:"You earned it, well deserved!", es:"Te lo mereces, ¡bien merecido!", pron:"iú érnd it, uél disérvd!"}
    ]},
    coro:{label:"Repaso Semana 23", lineas:[
      {en:"That works for me,", es:"Eso me sirve,", pron:"dat uérks for mi,"},
      {en:"perfect timing!", es:"¡momento perfecto!", pron:"pérfect táiming!"},
      {en:"Let's confirm it,", es:"Confirmémoslo,", pron:"lets canférm it,"},
      {en:"all set then!", es:"¡listo entonces!", pron:"ol set den!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Can we talk for a second? It costs fifteen,", es:"¿Podemos hablar un segundo? Cuesta quince,", pron:"can uí tok for a sécond? it costs fiftíin,"},
      {en:"Sure, what's up? The budget is twenty,", es:"Claro, ¿qué pasa? El presupuesto es de veinte,", pron:"shur, uáts ap? de bádyet is tuénti,"},
      {en:"It's nothing serious, approximately eighteen,", es:"No es nada serio, aproximadamente dieciocho,", pron:"its názing síirios, apróximetli eitíin,"},
      {en:"Final price: twelve, just wanted to check in!", es:"Precio final: doce, ¡solo quería saber cómo vas!", pron:"fáinal práis: tuélv, dyast uánted tu chek in!"}
    ]}
  },
  { numero:26, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I really appreciate this,", es:"De verdad aprecio esto,", pron:"ái ríli aprísheit dis,"},
      {en:"it means a lot,", es:"significa mucho,", pron:"it míins a lat,"},
      {en:"you're very kind,", es:"eres muy amable,", pron:"iór véri káind,"},
      {en:"thank you again!", es:"¡gracias otra vez!", pron:"zenk iú aguén!"}
    ]},
    precoro:{label:"Repaso Semana 25", lineas:[
      {en:"Can we talk for a second? Sure, what's up?", es:"¿Podemos hablar un segundo? ¡Claro, qué pasa!", pron:"can uí tok for a sécond? shur, uáts ap?"},
      {en:"It's nothing serious, just wanted to check in!", es:"No es nada serio, ¡solo quería ver cómo estabas!", pron:"its názing síirios, yast uánted tu chek in!"}
    ]},
    coro:{label:"Repaso Semana 24", lineas:[
      {en:"Congratulations!", es:"¡Felicitaciones!", pron:"congrachuléishons!"},
      {en:"Thank you so much!", es:"¡Muchas gracias!", pron:"zenk iú sóu mach!"},
      {en:"You earned it,", es:"Te lo mereces,", pron:"iú érnd it,"},
      {en:"well deserved!", es:"¡bien merecido!", pron:"uél disérvd!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The quote is ready, I really appreciate this,", es:"La cotización está lista, de verdad te lo agradezco,", pron:"de cuóut is rédi, ái ríli aprísieit dis,"},
      {en:"Subtotal: fifty, plus tax, it means a lot,", es:"Subtotal: cincuenta, más impuestos, significa mucho,", pron:"sábtoutal: fífti, plas tax, it míins a lot,"},
      {en:"The shipping cost is thirty, you're very kind,", es:"El costo de envío es treinta, eres muy amable,", pron:"de shíping cost is zérti, iór véri káind,"},
      {en:"The grand total adds up to ninety, thank you again!", es:"El gran total suma noventa, ¡gracias otra vez!", pron:"de grand tóutal ads ap tu náinti, zenk iú aguén!"}
    ]}
  },
  { numero:27, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let's stay in touch,", es:"Mantengámonos en contacto,", pron:"lets stéi in tach,"},
      {en:"absolutely!", es:"¡por supuesto!", pron:"ábsoliutli!"},
      {en:"I'll write to you,", es:"Te voy a escribir,", pron:"áil ráit tu iú,"},
      {en:"looking forward to it!", es:"¡con muchas ganas!", pron:"lúking fóruard tu it!"}
    ]},
    precoro:{label:"Repaso Semana 26", lineas:[
      {en:"I really appreciate this, it means a lot,", es:"De verdad aprecio esto, significa mucho,", pron:"ái ríli aprísheit dis, it míins a lat,"},
      {en:"you're very kind, thank you again!", es:"eres muy amable, ¡gracias otra vez!", pron:"iór véri káind, zenk iú aguén!"}
    ]},
    coro:{label:"Repaso Semana 25", lineas:[
      {en:"Can we talk for a second?", es:"¿Podemos hablar un segundo?", pron:"can uí tok for a sécond?"},
      {en:"Sure, what's up?", es:"¡Claro, qué pasa!", pron:"shur, uáts ap?"},
      {en:"It's nothing serious,", es:"No es nada serio,", pron:"its názing síirios,"},
      {en:"just wanted to check in!", es:"¡solo quería ver cómo estabas!", pron:"yast uánted tu chek in!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"What time is it? Half past nine, let's stay in touch,", es:"¿Qué hora es? Las nueve y media, sigamos en contacto,", pron:"uát táim is it? jaf past náin, lets stéi in tach,"},
      {en:"It opens at eight o'clock? Absolutely!", es:"¿Abre a las ocho en punto? ¡Por supuesto!", pron:"it óupens at éit oclók? ábsolutli!"},
      {en:"Delivery within 24 hours, I'll write to you,", es:"Entrega en menos de 24 horas, te escribo,", pron:"delíveri uidín tuénti-for áuers, áil ráit tu iú,"},
      {en:"Same day or next day? Looking forward to it!", es:"¿El mismo día o al día siguiente? ¡Con muchas ganas!", pron:"séim déi or next déi? lúking fóruard tu it!"}
    ]}
  },
  { numero:28, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I couldn't have done it without you,", es:"No podría haberlo hecho sin ti,", pron:"ái cúdnt jav dan it uidáut iú,"},
      {en:"teamwork!", es:"¡trabajo en equipo!", pron:"tíimuork!"},
      {en:"We did it together,", es:"Lo hicimos juntos,", pron:"uí did it tugéder,"},
      {en:"that's what counts!", es:"¡eso es lo que importa!", pron:"dats uát cáunts!"}
    ]},
    precoro:{label:"Repaso Semana 27", lineas:[
      {en:"Let's stay in touch, absolutely!", es:"Mantengámonos en contacto, ¡por supuesto!", pron:"lets stéi in tach, ábsoliutli!"},
      {en:"I'll write to you, looking forward to it!", es:"Te voy a escribir, ¡con muchas ganas!", pron:"áil ráit tu iú, lúking fóruard tu it!"}
    ]},
    coro:{label:"Repaso Semana 26", lineas:[
      {en:"I really appreciate this,", es:"De verdad aprecio esto,", pron:"ái ríli aprísheit dis,"},
      {en:"it means a lot,", es:"significa mucho,", pron:"it míins a lat,"},
      {en:"you're very kind,", es:"eres muy amable,", pron:"iór véri káind,"},
      {en:"thank you again!", es:"¡gracias otra vez!", pron:"zenk iú aguén!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The estimated arrival is at night, I couldn't have done it without you,", es:"La llegada estimada es en la noche, no lo habría logrado sin ti,", pron:"di éstimeited aráival is at náit, ái cúdnt jav dan it uidáut iú,"},
      {en:"Early, not late, teamwork!", es:"Temprano, no tarde, ¡trabajo en equipo!", pron:"érli, nat léit, tíimuérk!"},
      {en:"Here's the tracking number, we did it together,", es:"Aquí está el número de rastreo, lo hicimos juntos,", pron:"jíars de tráking námber, uí did it tugéder,"},
      {en:"As soon as possible, that's what counts!", es:"Lo antes posible, ¡eso es lo que cuenta!", pron:"as súun as pósibol, dats uát cáunts!"}
    ]},
    puente:{label:"Repaso profundo — Semana 22", lineas:[
      {en:"Is everything okay? Yes, all good,", es:"¿Está todo bien? ¡Sí, todo bien!", pron:"is évrizing oukéi? iés, ol gud,"},
      {en:"let me double-check, just to be sure!", es:"¡déjame revisar de nuevo, solo para estar seguro!", pron:"let mi dábol chek, yast tu bi shur!"}
    ]}
  },
  { numero:29, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"We're almost there,", es:"Ya casi llegamos,", pron:"uír ólmoust dér,"},
      {en:"just one more step,", es:"un paso más,", pron:"yast uán mor step,"},
      {en:"I can feel it,", es:"Lo puedo sentir,", pron:"ái can fíil it,"},
      {en:"we're so close!", es:"¡estamos tan cerca!", pron:"uír sóu clóus!"}
    ]},
    precoro:{label:"Repaso Semana 28", lineas:[
      {en:"I couldn't have done it without you, teamwork!", es:"No podría haberlo hecho sin ti, ¡trabajo en equipo!", pron:"ái cúdnt jav dan it uidáut iú, tíimuork!"},
      {en:"We did it together, that's what counts!", es:"Lo hicimos juntos, ¡eso es lo que importa!", pron:"uí did it tugéder, dats uát cáunts!"}
    ]},
    coro:{label:"Repaso Semana 27", lineas:[
      {en:"Let's stay in touch,", es:"Mantengámonos en contacto,", pron:"lets stéi in tach,"},
      {en:"absolutely!", es:"¡por supuesto!", pron:"ábsoliutli!"},
      {en:"I'll write to you,", es:"Te voy a escribir,", pron:"áil ráit tu iú,"},
      {en:"looking forward to it!", es:"¡con muchas ganas!", pron:"lúking fóruard tu it!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The due date is in March, we're almost there,", es:"La fecha de vencimiento es en marzo, ya casi llegamos,", pron:"de diú déit is in march, uír ólmoust der,"},
      {en:"January, February, just one more step,", es:"Enero, febrero, solo un paso más,", pron:"dyániueri, fébrueri, dyast uán mor step,"},
      {en:"It's not overdue, I can feel it,", es:"No está vencido, lo puedo sentir,", pron:"its nat ouverdiú, ái can fíil it,"},
      {en:"From June to December, we're so close!", es:"De junio a diciembre, ¡estamos muy cerca!", pron:"from dyun tu disémber, uír sóu clóus!"}
    ]}
  },
  { numero:30, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Where is the restroom?", es:"¿Dónde está el baño?", pron:"uér is de réstrum?"},
      {en:"It's over there,", es:"Está por allá,", pron:"its óuver der,"},
      {en:"Can I pay by card?", es:"¿Puedo pagar con tarjeta?", pron:"can ái péi bái card?"},
      {en:"Of course you can!", es:"¡Claro que sí!", pron:"av cors iú can!"}
    ]},
    precoro:{label:"Repaso Semana 29", lineas:[
      {en:"We're almost there, just one more step,", es:"Ya casi llegamos, un paso más,", pron:"uír ólmoust dér, yast uán mor step,"},
      {en:"I can feel it, we're so close!", es:"Lo puedo sentir, ¡estamos tan cerca!", pron:"ái can fíil it, uír sóu clóus!"}
    ]},
    coro:{label:"Repaso Semana 28", lineas:[
      {en:"I couldn't have done it without you,", es:"No podría haberlo hecho sin ti,", pron:"ái cúdnt jav dan it uidáut iú,"},
      {en:"teamwork!", es:"¡trabajo en equipo!", pron:"tíimuork!"},
      {en:"We did it together,", es:"Lo hicimos juntos,", pron:"uí did it tugéder,"},
      {en:"that's what counts!", es:"¡eso es lo que importa!", pron:"dats uát cáunts!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"What's the date today? Where is the restroom?", es:"¿Qué fecha es hoy? ¿Dónde está el baño?", pron:"uáts de déit tudéi? uér is de réstrum?"},
      {en:"It's over there, the payment terms are net thirty,", es:"Está por allá, las condiciones de pago son a treinta días,", pron:"its óuver der, de péiment terms ar net zérti,"},
      {en:"Can I pay by card, in installments?", es:"¿Puedo pagar con tarjeta, en cuotas?", pron:"can ái péi bái card, in instólments?"},
      {en:"Paid in full or upfront? Of course you can!", es:"¿Pagado completo o por adelantado? ¡Claro que sí!", pron:"péid in ful or ápfront? av cors iú can!"}
    ]}
  },
  { numero:31, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"How much is it?", es:"¿Cuánto cuesta?", pron:"jáu mach is it?"},
      {en:"It's too expensive,", es:"Es muy caro,", pron:"its tu expénsiv,"},
      {en:"Do you have a smaller one?", es:"¿Tienes uno más pequeño?", pron:"du iú jav a smóler uán?"},
      {en:"I'll take it!", es:"¡Me lo llevo!", pron:"áil téik it!"}
    ]},
    precoro:{label:"Repaso Semana 30", lineas:[
      {en:"Where is the restroom? It's over there,", es:"¿Dónde está el baño? Está por allá,", pron:"uér is de réstrum? its óuver der,"},
      {en:"Can I pay by card? Of course you can!", es:"¿Puedo pagar con tarjeta? ¡Claro que sí!", pron:"can ái péi bái card? av cors iú can!"}
    ]},
    coro:{label:"Repaso Semana 29", lineas:[
      {en:"We're almost there,", es:"Ya casi llegamos,", pron:"uír ólmoust dér,"},
      {en:"just one more step,", es:"un paso más,", pron:"yast uán mor step,"},
      {en:"I can feel it,", es:"Lo puedo sentir,", pron:"ái can fíil it,"},
      {en:"we're so close!", es:"¡estamos tan cerca!", pron:"uír sóu clóus!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"How much is it? Let me see, hold on,", es:"¿Cuánto cuesta? Déjame ver, espera,", pron:"jáu mach is it? let mi síi, jóuld on,"},
      {en:"It's too expensive, that doesn't work,", es:"Es muy caro, eso no funciona,", pron:"its tu expénsiv, dat dásnt uérk,"},
      {en:"Do you have a smaller one? Maybe, probably,", es:"¿Tienes uno más pequeño? Tal vez, probablemente,", pron:"du iú jav a smóler uán? méibi, próbabli,"},
      {en:"That works, makes sense, I'll take it!", es:"Eso funciona, tiene sentido, ¡me lo llevo!", pron:"dat uérks, méiks sens, áil téik it!"}
    ]}
  },
  { numero:32, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Can I get the check?", es:"¿Me trae la cuenta?", pron:"can ái get de chek?"},
      {en:"Keep the change,", es:"Quédese con el cambio,", pron:"kíip de chéinch,"},
      {en:"Is service included?", es:"¿Está incluido el servicio?", pron:"is sérvis inclúded?"},
      {en:"Thanks, that was great!", es:"¡Gracias, estuvo muy bueno!", pron:"zenks, dat uás gréit!"}
    ]},
    precoro:{label:"Repaso Semana 31", lineas:[
      {en:"How much is it? It's too expensive,", es:"¿Cuánto cuesta? Es muy caro,", pron:"jáu mach is it? its tu expénsiv,"},
      {en:"Do you have a smaller one? I'll take it!", es:"¿Tienes uno más pequeño? ¡Me lo llevo!", pron:"du iú jav a smóler uán? áil téik it!"}
    ]},
    coro:{label:"Repaso Semana 30", lineas:[
      {en:"Where is the restroom?", es:"¿Dónde está el baño?", pron:"uér is de réstrum?"},
      {en:"It's over there,", es:"Está por allá,", pron:"its óuver der,"},
      {en:"Can I pay by card?", es:"¿Puedo pagar con tarjeta?", pron:"can ái péi bái card?"},
      {en:"Of course you can!", es:"¡Claro que sí!", pron:"av cors iú can!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"First the coffee, then can I get the check?", es:"Primero el café, luego ¿me trae la cuenta?", pron:"ferst de cófi, den can ái get de chek?"},
      {en:"This is top priority, keep the change,", es:"Esto es máxima prioridad, quédese con el cambio,", pron:"dis is top praióriti, kíip de chéinch,"},
      {en:"Is service included? That is the best seller,", es:"¿Está incluido el servicio? Ese es el más vendido,", pron:"is sérvis inclúded? dat is de best séler,"},
      {en:"Second on the waiting list, thanks, that was great!", es:"Segundo en la lista de espera, ¡gracias, estuvo muy bueno!", pron:"sécond on de uéiting list, zenks, dat uás gréit!"}
    ]}
  },
  { numero:33, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Excuse me, I'm lost,", es:"Disculpe, estoy perdido,", pron:"exquiús mi, áim lost,"},
      {en:"Can you show me on the map?", es:"¿Me puede mostrar en el mapa?", pron:"can iú shóu mi on de map?"},
      {en:"Is it far from here?", es:"¿Queda lejos de aquí?", pron:"is it far from jíar?"},
      {en:"Just walk two blocks!", es:"¡Solo camine dos cuadras!", pron:"dyast uók tu bloks!"}
    ]},
    precoro:{label:"Repaso Semana 32", lineas:[
      {en:"Can I get the check? Keep the change,", es:"¿Me trae la cuenta? Quédese con el cambio,", pron:"can ái get de chek? kíip de chéinch,"},
      {en:"Is service included? Thanks, that was great!", es:"¿Está incluido el servicio? ¡Gracias, estuvo muy bueno!", pron:"is sérvis inclúded? zenks, dat uás gréit!"}
    ]},
    coro:{label:"Repaso Semana 31", lineas:[
      {en:"How much is it?", es:"¿Cuánto cuesta?", pron:"jáu mach is it?"},
      {en:"It's too expensive,", es:"Es muy caro,", pron:"its tu expénsiv,"},
      {en:"Do you have a smaller one?", es:"¿Tienes uno más pequeño?", pron:"du iú jav a smóler uán?"},
      {en:"I'll take it!", es:"¡Me lo llevo!", pron:"áil téik it!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Excuse me, I'm lost, where's the bank?", es:"Disculpe, estoy perdido, ¿dónde está el banco?", pron:"exquiús mi, áim lost, uérs de bank?"},
      {en:"I need cash, can you show me on the map?", es:"Necesito efectivo, ¿me puede mostrar en el mapa?", pron:"ái níid cash, can iú shóu mi on de map?"},
      {en:"The exchange office, is it far from here?", es:"La casa de cambio, ¿queda lejos de aquí?", pron:"di exchéinch ófis, is it far from jíar?"},
      {en:"I will pay by credit card, just walk two blocks!", es:"Voy a pagar con tarjeta de crédito, ¡solo camine dos cuadras!", pron:"ái uíl péi bái crédit card, dyast uók tu bloks!"}
    ]}
  },
  { numero:34, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm looking for this address,", es:"Estoy buscando esta dirección,", pron:"áim lúking for dis ádres,"},
      {en:"Which way is the station?", es:"¿Por dónde queda la estación?", pron:"uích uéi is de stéishon?"},
      {en:"Go straight ahead,", es:"Siga derecho,", pron:"góu stréit ajéd,"},
      {en:"You can't miss it!", es:"¡No tiene pérdida!", pron:"iú cant mis it!"}
    ]},
    precoro:{label:"Repaso Semana 33", lineas:[
      {en:"Excuse me, I'm lost, can you show me on the map?", es:"Disculpe, estoy perdido, ¿me puede mostrar en el mapa?", pron:"exquiús mi, áim lost, can iú shóu mi on de map?"},
      {en:"Is it far from here? Just walk two blocks!", es:"¿Queda lejos de aquí? ¡Solo camine dos cuadras!", pron:"is it far from jíar? dyast uók tu bloks!"}
    ]},
    coro:{label:"Repaso Semana 32", lineas:[
      {en:"Can I get the check?", es:"¿Me trae la cuenta?", pron:"can ái get de chek?"},
      {en:"Keep the change,", es:"Quédese con el cambio,", pron:"kíip de chéinch,"},
      {en:"Is service included?", es:"¿Está incluido el servicio?", pron:"is sérvis inclúded?"},
      {en:"Thanks, that was great!", es:"¡Gracias, estuvo muy bueno!", pron:"zenks, dat uás gréit!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I'm looking for this address, the wholesale store,", es:"Estoy buscando esta dirección, la tienda mayorista,", pron:"áim lúking for dis ádres, de jóulseil stor,"},
      {en:"Which way is the station? I need to buy in bulk,", es:"¿Por dónde queda la estación? Necesito comprar al por mayor,", pron:"uích uéi is de stéishon? ái níid tu bái in balk,"},
      {en:"Go straight ahead, the lowest price is there,", es:"Siga derecho, el precio más bajo está allá,", pron:"góu stréit ajéd, de lóuest práis is der,"},
      {en:"Final offer, deal closed, you can't miss it!", es:"Oferta final, trato cerrado, ¡no tiene pérdida!", pron:"fáinal ófer, díil clóusd, iú cant mis it!"}
    ]}
  },
  { numero:35, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What time does it open?", es:"¿A qué hora abre?", pron:"uát táim das it óupen?"},
      {en:"It opens at nine,", es:"Abre a las nueve,", pron:"it óupens at náin,"},
      {en:"Are you open on Sunday?", es:"¿Abren el domingo?", pron:"ar iú óupen on sándei?"},
      {en:"Sorry, we're closed!", es:"¡Lo siento, estamos cerrados!", pron:"sóri, uír clóusd!"}
    ]},
    precoro:{label:"Repaso Semana 34", lineas:[
      {en:"I'm looking for this address, which way is the station?", es:"Estoy buscando esta dirección, ¿por dónde queda la estación?", pron:"áim lúking for dis ádres, uích uéi is de stéishon?"},
      {en:"Go straight ahead, you can't miss it!", es:"Siga derecho, ¡no tiene pérdida!", pron:"góu stréit ajéd, iú cant mis it!"}
    ]},
    coro:{label:"Repaso Semana 33", lineas:[
      {en:"Excuse me, I'm lost,", es:"Disculpe, estoy perdido,", pron:"exquiús mi, áim lost,"},
      {en:"Can you show me on the map?", es:"¿Me puede mostrar en el mapa?", pron:"can iú shóu mi on de map?"},
      {en:"Is it far from here?", es:"¿Queda lejos de aquí?", pron:"is it far from jíar?"},
      {en:"Just walk two blocks!", es:"¡Solo camine dos cuadras!", pron:"dyast uók tu bloks!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"What time does it open? I need one kilogram,", es:"¿A qué hora abre? Necesito un kilo,", pron:"uát táim das it óupen? ái níid uán kílogram,"},
      {en:"It opens at nine, one liter, one meter,", es:"Abre a las nueve, un litro, un metro,", pron:"it óupens at náin, uán líter, uán míter,"},
      {en:"Are you open on Sunday? It weighs ten pounds,", es:"¿Abren el domingo? Pesa diez libras,", pron:"ar iú óupen on sándei? it uéis ten páunds,"},
      {en:"One pallet, one pack, sorry, we're closed!", es:"Una estiba, un paquete, ¡lo siento, estamos cerrados!", pron:"uán pálet, uán pak, sóri, uír clóusd!"}
    ]}
  },
  { numero:36, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'd like to make a reservation,", es:"Quisiera hacer una reservación,", pron:"áid láik tu méik a reservéishon,"},
      {en:"For how many people?", es:"¿Para cuántas personas?", pron:"for jáu méni píipol?"},
      {en:"A table for four,", es:"Una mesa para cuatro,", pron:"a téibol for for,"},
      {en:"Right this way!", es:"¡Por aquí, por favor!", pron:"ráit dis uéi!"}
    ]},
    precoro:{label:"Repaso Semana 35", lineas:[
      {en:"What time does it open? It opens at nine,", es:"¿A qué hora abre? Abre a las nueve,", pron:"uát táim das it óupen? it óupens at náin,"},
      {en:"Are you open on Sunday? Sorry, we're closed!", es:"¿Abren el domingo? ¡Lo siento, estamos cerrados!", pron:"ar iú óupen on sándei? sóri, uír clóusd!"}
    ]},
    coro:{label:"Repaso Semana 34", lineas:[
      {en:"I'm looking for this address,", es:"Estoy buscando esta dirección,", pron:"áim lúking for dis ádres,"},
      {en:"Which way is the station?", es:"¿Por dónde queda la estación?", pron:"uích uéi is de stéishon?"},
      {en:"Go straight ahead,", es:"Siga derecho,", pron:"góu stréit ajéd,"},
      {en:"You can't miss it!", es:"¡No tiene pérdida!", pron:"iú cant mis it!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Strong progress! I'd like to make a reservation,", es:"¡Gran progreso! Quisiera hacer una reservación,", pron:"strong prógres! áid láik tu méik a reservéishon,"},
      {en:"For how many people? Proud of you, team,", es:"¿Para cuántas personas? Orgulloso de ti, equipo,", pron:"for jáu méni píipol? práud av iú, tíim,"},
      {en:"A table for four, well earned,", es:"Una mesa para cuatro, bien ganada,", pron:"a téibol for for, uél érnd,"},
      {en:"See you in unit four, right this way!", es:"Nos vemos en la unidad cuatro, ¡por aquí, por favor!", pron:"síi iú in iúnit for, ráit dis uéi!"}
    ]}
  },
  { numero:37, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I don't feel well,", es:"No me siento bien,", pron:"ái dont fíil uél,"},
      {en:"I need a doctor,", es:"Necesito un médico,", pron:"ái níid a dóctor,"},
      {en:"Where is the pharmacy?", es:"¿Dónde está la farmacia?", pron:"uér is de fármasi?"},
      {en:"Get well soon!", es:"¡Que te mejores pronto!", pron:"get uél súun!"}
    ]},
    precoro:{label:"Repaso Semana 36", lineas:[
      {en:"I'd like to make a reservation, for how many people?", es:"Quisiera hacer una reservación, ¿para cuántas personas?", pron:"áid láik tu méik a reservéishon, for jáu méni píipol?"},
      {en:"A table for four, right this way!", es:"Una mesa para cuatro, ¡por aquí, por favor!", pron:"a téibol for for, ráit dis uéi!"}
    ]},
    coro:{label:"Repaso Semana 35", lineas:[
      {en:"What time does it open?", es:"¿A qué hora abre?", pron:"uát táim das it óupen?"},
      {en:"It opens at nine,", es:"Abre a las nueve,", pron:"it óupens at náin,"},
      {en:"Are you open on Sunday?", es:"¿Abren el domingo?", pron:"ar iú óupen on sándei?"},
      {en:"Sorry, we're closed!", es:"¡Lo siento, estamos cerrados!", pron:"sóri, uír clóusd!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I'll have the soup, I don't feel well,", es:"Yo quiero la sopa, no me siento bien,", pron:"áil jav de súup, ái dont fíil uél,"},
      {en:"Too spicy! I need a doctor,", es:"¡Muy picante! Necesito un médico,", pron:"tu spáisi! ái níid a dóctor,"},
      {en:"Cancel the meeting, where is the pharmacy?", es:"Cancela la reunión, ¿dónde está la farmacia?", pron:"cánsel de míiting, uér is de fármasi?"},
      {en:"Book another time slot, get well soon!", es:"Reserva otro horario, ¡que te mejores pronto!", pron:"buk anáder táim slot, get uél súun!"}
    ]}
  },
  { numero:38, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"My phone is dead,", es:"Se me descargó el celular,", pron:"mái fóun is ded,"},
      {en:"Can I charge it here?", es:"¿Lo puedo cargar aquí?", pron:"can ái chardch it jíar?"},
      {en:"Do you have wifi?", es:"¿Tienen wifi?", pron:"du iú jav uáifai?"},
      {en:"What's the password?", es:"¿Cuál es la clave?", pron:"uáts de pásuerd?"}
    ]},
    precoro:{label:"Repaso Semana 37", lineas:[
      {en:"I don't feel well, I need a doctor,", es:"No me siento bien, necesito un médico,", pron:"ái dont fíil uél, ái níid a dóctor,"},
      {en:"Where is the pharmacy? Get well soon!", es:"¿Dónde está la farmacia? ¡Que te mejores pronto!", pron:"uér is de fármasi? get uél súun!"}
    ]},
    coro:{label:"Repaso Semana 36", lineas:[
      {en:"I'd like to make a reservation,", es:"Quisiera hacer una reservación,", pron:"áid láik tu méik a reservéishon,"},
      {en:"For how many people?", es:"¿Para cuántas personas?", pron:"for jáu méni píipol?"},
      {en:"A table for four,", es:"Una mesa para cuatro,", pron:"a téibol for for,"},
      {en:"Right this way!", es:"¡Por aquí, por favor!", pron:"ráit dis uéi!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I'll be there, but my phone is dead,", es:"Allí estaré, pero se me descargó el celular,", pron:"áil bi der, bat mái fóun is ded,"},
      {en:"Can I charge it here? I love this place,", es:"¿Lo puedo cargar aquí? Me encanta este lugar,", pron:"can ái chardch it jíar? ái lav dis pléis,"},
      {en:"Do you have wifi? I need to confirm attendance,", es:"¿Tienen wifi? Necesito confirmar asistencia,", pron:"du iú jav uáifai? ái níid tu confírm aténdans,"},
      {en:"I like it here, what's the password?", es:"Me gusta aquí, ¿cuál es la clave?", pron:"ái láik it jíar, uáts de pásuerd?"}
    ]}
  },
  { numero:39, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I missed my bus,", es:"Perdí mi bus,", pron:"ái mist mái bas,"},
      {en:"When is the next one?", es:"¿Cuándo pasa el siguiente?", pron:"uén is de next uán?"},
      {en:"How long do I wait?", es:"¿Cuánto tengo que esperar?", pron:"jáu long du ái uéit?"},
      {en:"About ten minutes!", es:"¡Unos diez minutos!", pron:"abáut ten mínits!"}
    ]},
    precoro:{label:"Repaso Semana 38", lineas:[
      {en:"My phone is dead, can I charge it here?", es:"Se me descargó el celular, ¿lo puedo cargar aquí?", pron:"mái fóun is ded, can ái chardch it jíar?"},
      {en:"Do you have wifi? What's the password?", es:"¿Tienen wifi? ¿Cuál es la clave?", pron:"du iú jav uáifai? uáts de pásuerd?"}
    ]},
    coro:{label:"Repaso Semana 37", lineas:[
      {en:"I don't feel well,", es:"No me siento bien,", pron:"ái dont fíil uél,"},
      {en:"I need a doctor,", es:"Necesito un médico,", pron:"ái níid a dóctor,"},
      {en:"Where is the pharmacy?", es:"¿Dónde está la farmacia?", pron:"uér is de fármasi?"},
      {en:"Get well soon!", es:"¡Que te mejores pronto!", pron:"get uél súun!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I missed my bus, let's discuss the agenda,", es:"Perdí mi bus, hablemos de la agenda,", pron:"ái mist mái bas, lets discás di adyénda,"},
      {en:"When is the next one? Let's split the bill,", es:"¿Cuándo pasa el siguiente? Dividamos la cuenta,", pron:"uén is de next uán? lets split de bil,"},
      {en:"How long do I wait? Take out or dine in?", es:"¿Cuánto tengo que esperar? ¿Para llevar o para comer aquí?", pron:"jáu long du ái uéit? téik áut or dáin in?"},
      {en:"Next steps and wrap up, about ten minutes!", es:"Próximos pasos y cerramos, ¡unos diez minutos!", pron:"next steps and rap ap, abáut ten mínits!"}
    ]}
  },
  { numero:40, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Can you take a picture of us?", es:"¿Nos puedes tomar una foto?", pron:"can iú téik a píkchur av as?"},
      {en:"Say cheese!", es:"¡Digan whisky!", pron:"séi chíis!"},
      {en:"One more, please,", es:"Una más, por favor,", pron:"uán mor, plíis,"},
      {en:"It looks great!", es:"¡Quedó muy bien!", pron:"it luks gréit!"}
    ]},
    precoro:{label:"Repaso Semana 39", lineas:[
      {en:"I missed my bus, when is the next one?", es:"Perdí mi bus, ¿cuándo pasa el siguiente?", pron:"ái mist mái bas, uén is de next uán?"},
      {en:"How long do I wait? About ten minutes!", es:"¿Cuánto tengo que esperar? ¡Unos diez minutos!", pron:"jáu long du ái uéit? abáut ten mínits!"}
    ]},
    coro:{label:"Repaso Semana 38", lineas:[
      {en:"My phone is dead,", es:"Se me descargó el celular,", pron:"mái fóun is ded,"},
      {en:"Can I charge it here?", es:"¿Lo puedo cargar aquí?", pron:"can ái chardch it jíar?"},
      {en:"Do you have wifi?", es:"¿Tienen wifi?", pron:"du iú jav uáifai?"},
      {en:"What's the password?", es:"¿Cuál es la clave?", pron:"uáts de pásuerd?"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I cooked this recipe, can you take a picture of us?", es:"Cociné esta receta, ¿nos puedes tomar una foto?", pron:"ái cukt dis résipi, can iú téik a píkchur av as?"},
      {en:"The bread is out of the oven, say cheese!", es:"El pan salió del horno, ¡digan whisky!", pron:"de bred is áut av di óven, séi chíis!"},
      {en:"I need to prepare the slides, one more, please,", es:"Necesito preparar las diapositivas, una más, por favor,", pron:"ái níid tu pripér de sláids, uán mor, plíis,"},
      {en:"The presentation is ready, it looks great!", es:"La presentación está lista, ¡quedó muy bien!", pron:"de presentéishon is rédi, it luks gréit!"}
    ]}
  },
  { numero:41, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What do you recommend?", es:"¿Qué me recomiendas?", pron:"uát du iú recoménd?"},
      {en:"The special of the day,", es:"El especial del día,", pron:"de spéshal av de déi,"},
      {en:"I'll try it,", es:"Lo voy a probar,", pron:"áil trái it,"},
      {en:"Enjoy your meal!", es:"¡Buen provecho!", pron:"enyói iór míil!"}
    ]},
    precoro:{label:"Repaso Semana 40", lineas:[
      {en:"Can you take a picture of us? Say cheese!", es:"¿Nos puedes tomar una foto? ¡Digan whisky!", pron:"can iú téik a píkchur av as? séi chíis!"},
      {en:"One more, please, it looks great!", es:"Una más, por favor, ¡quedó muy bien!", pron:"uán mor, plíis, it luks gréit!"}
    ]},
    coro:{label:"Repaso Semana 39", lineas:[
      {en:"I missed my bus,", es:"Perdí mi bus,", pron:"ái mist mái bas,"},
      {en:"When is the next one?", es:"¿Cuándo pasa el siguiente?", pron:"uén is de next uán?"},
      {en:"How long do I wait?", es:"¿Cuánto tengo que esperar?", pron:"jáu long du ái uéit?"},
      {en:"About ten minutes!", es:"¡Unos diez minutos!", pron:"abáut ten mínits!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Juice or tea? What do you recommend?", es:"¿Jugo o té? ¿Qué me recomiendas?", pron:"dyus or tíi? uát du iú recoménd?"},
      {en:"Can you hear me? The special of the day,", es:"¿Me escuchas? El especial del día,", pron:"can iú jíar mi? de spéshal av de déi,"},
      {en:"Camera on, screen share, I'll try it,", es:"Cámara encendida, compartir pantalla, lo voy a probar,", pron:"cámera on, scríin sher, áil trái it,"},
      {en:"Send me the link, enjoy your meal!", es:"Envíame el enlace, ¡buen provecho!", pron:"send mi de link, enyói iór míil!"}
    ]}
  },
  { numero:42, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"You made it all the way,", es:"Llegaste hasta el final,", pron:"iú méid it ol de uéi,"},
      {en:"one hundred seventy phrases,", es:"ciento setenta frases,", pron:"uán jándred sevénti fréisis,"},
      {en:"every single one,", es:"cada una de ellas,", pron:"évri síngol uán,"},
      {en:"now part of you!", es:"¡ahora son parte de ti!", pron:"náu part of iú!"}
    ]},
    precoro:{label:"Repaso Semana 41", lineas:[
      {en:"What do you recommend? The special of the day,", es:"¿Qué me recomiendas? El especial del día,", pron:"uát du iú recoménd? de spéshal av de déi,"},
      {en:"I'll try it, enjoy your meal!", es:"Lo voy a probar, ¡buen provecho!", pron:"áil trái it, enyói iór míil!"}
    ]},
    coro:{label:"Repaso Semana 40", lineas:[
      {en:"Can you take a picture of us?", es:"¿Nos puedes tomar una foto?", pron:"can iú téik a píkchur av as?"},
      {en:"Say cheese!", es:"¡Digan whisky!", pron:"séi chíis!"},
      {en:"One more, please,", es:"Una más, por favor,", pron:"uán mor, plíis,"},
      {en:"It looks great!", es:"¡Quedó muy bien!", pron:"it luks gréit!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"You made it all the way, we are on track,", es:"Llegaste hasta el final, vamos al día,", pron:"iú méid it ol de uéi, uí ar on trak,"},
      {en:"One hundred seventy phrases, milestone reached,", es:"Ciento setenta frases, meta alcanzada,", pron:"uán jándred sevénti fréises, máilstoun ríicht,"},
      {en:"Every single one, a status update,", es:"Cada una de ellas, un informe de estado,", pron:"évri síngol uán, a stéitus apdéit,"},
      {en:"Eggs and toast to celebrate, now part of you!", es:"Huevos y tostadas para celebrar, ¡ahora son parte de ti!", pron:"egs and tóust tu sélebreit, náu part av iú!"}
    ]},
    puente:{label:"Cierre especial — celebración", lineas:[
      {en:"You did it, dragon friend,", es:"Lo lograste, amigo dragón,", pron:"iú did it, drágon frend,"},
      {en:"speaking with ease,", es:"hablando con soltura,", pron:"spíiking uid íis,"},
      {en:"Fase One complete,", es:"Fase Uno completa,", pron:"féis uán camplíit,"},
      {en:"and there's so much more to come!", es:"¡y hay mucho más por venir!", pron:"and ders sóu mach mor tu cam!"}
    ]},
    outroOverride: [
      {en:"See you in Phase Two, dragon friend,", es:"Nos vemos en la Fase Dos, amigo dragón,", pron:"síi iú in féis tú, drágon frend,"},
      {en:"Keep practicing until the end,", es:"Sigue practicando hasta el final.", pron:"kíip práctising antíl de end,"}
    ]
  }
];

const FIJAS_FASE2 = {
  precoro: [
    {en:"Now we're talking, flowing free,", es:"Ahora sí estamos hablando, fluyendo libre,", pron:"náu uír tóking, flóuing fríi,"},
    {en:"Fluency is calling me,", es:"La fluidez me está llamando,", pron:"flúensi is cóling mi,"}
  ],
  pedal: [
    {en:"Conversations flow with ease,", es:"Las conversaciones fluyen con facilidad,", pron:"canversáshions flóu uid íis,"},
    {en:"You're speaking naturally!", es:"¡Estás hablando naturalmente!", pron:"iór spíiking náchurali!"}
  ],
  coro: [
    {en:"By the way,", es:"Por cierto,", pron:"bái de uéi,"},
    {en:"honestly speaking,", es:"hablando honestamente,", pron:"ánestli spíiking,"},
    {en:"let's cut to the chase,", es:"vayamos al grano,", pron:"lets cat tu de chéis,"},
    {en:"that being said,", es:"dicho esto,", pron:"dat bíing sed,"}
  ],
  outro: [
    {en:"See you next week, fluent friend,", es:"Nos vemos la próxima semana, amigo fluido,", pron:"síi iú next uíik, flúent frend,"},
    {en:"Keep the conversation going till the end,", es:"Sigue la conversación hasta el final.", pron:"kíip de canverséishion góing til de end,"}
  ]
};

const FASE2_SEMANAS = [
  { numero:1, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"By the way,", es:"Por cierto,", pron:"bái de uéi,"},
      {en:"speaking of which,", es:"hablando de eso,", pron:"spíiking of uích,"},
      {en:"that reminds me,", es:"eso me recuerda,", pron:"dat rimáinds mi,"},
      {en:"anyway,", es:"de todas formas,", pron:"éniuei,"},
      {en:"moving on!", es:"¡sigamos adelante!", pron:"múuving on!"}
    ]},
    precoro:{label:"Repaso Fase 1, Semana 42", lineas:[
      {en:"You made it all the way, one hundred seventy phrases,", es:"Llegaste hasta el final, ciento setenta frases,", pron:"iú méid it ol de uéi, uán jándred sevénti fréisis,"},
      {en:"every single one, now part of you!", es:"cada una de ellas, ¡ahora son parte de ti!", pron:"évri síngol uán, náu part of iú!"}
    ]},
    coro:{label:"Repaso Fase 1, Semana 41", lineas:[
      {en:"What do you recommend?", es:"¿Qué me recomiendas?", pron:"uát du iú recoménd?"},
      {en:"The special of the day,", es:"El especial del día,", pron:"de spéshal av de déi,"},
      {en:"I'll try it,", es:"Lo voy a probar,", pron:"áil trái it,"},
      {en:"Enjoy your meal!", es:"¡Buen provecho!", pron:"enyói iór míil!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"By the way, I need to buy fresh bread,", es:"Por cierto, necesito comprar pan fresco,", pron:"bái de uéi, ái níid tu bái fresh bred,"},
      {en:"Speaking of which, the supplier meeting is today,", es:"Hablando de eso, la reunión con el proveedor es hoy,", pron:"spíiking av uích, de supláier míiting is tudéi,"},
      {en:"That reminds me, bring the catalog and a sample,", es:"Eso me recuerda, trae el catálogo y una muestra,", pron:"dat rimáinds mi, bring de cátalog and a sámpol,"},
      {en:"Anyway, moving on, see you at the checkout!", es:"En fin, sigamos, ¡nos vemos en la caja!", pron:"éniuei, múuving on, síi iú at de chékaut!"}
    ]}
  },
  { numero:2, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Honestly,", es:"Honestamente,", pron:"ánestli,"},
      {en:"to be fair,", es:"para ser justo,", pron:"tu bi fer,"},
      {en:"if you ask me,", es:"si me preguntas,", pron:"if iú ask mi,"},
      {en:"personally,", es:"personalmente,", pron:"pérsonali,"},
      {en:"I could be wrong!", es:"¡podría estar equivocado!", pron:"ái cud bi rong!"}
    ]},
    precoro:{label:"Repaso Semana 1", lineas:[
      {en:"By the way, speaking of which, that reminds me,", es:"Por cierto, hablando de eso, eso me recuerda,", pron:"bái de uéi, spíiking of uích, dat rimáinds mi,"},
      {en:"anyway, moving on!", es:"de todas formas, ¡sigamos adelante!", pron:"éniuei, múuving on!"}
    ]},
    coro:{label:"Repaso Fase 1, Semana 42", lineas:[
      {en:"You made it all the way,", es:"Llegaste hasta el final,", pron:"iú méid it ol de uéi,"},
      {en:"one hundred seventy phrases,", es:"ciento setenta frases,", pron:"uán jándred sevénti fréisis,"},
      {en:"every single one,", es:"cada una de ellas,", pron:"évri síngol uán,"},
      {en:"now part of you!", es:"¡ahora son parte de ti!", pron:"náu part of iú!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Honestly, we have enough budget for now,", es:"Honestamente, tenemos suficiente presupuesto por ahora,", pron:"ónestli, uí jav ináf bádyet for náu,"},
      {en:"To be fair, it's a lot of investment,", es:"Para ser justos, es mucha inversión,", pron:"tu bi fer, its a lot av invéstment,"},
      {en:"If you ask me, personally, let's cut costs a little,", es:"Si me preguntas, personalmente, recortemos un poco los costos,", pron:"if iú ask mi, pérsonali, lets cat costs a lítol,"},
      {en:"We're on track, but I could be wrong!", es:"Vamos bien encaminados, ¡pero podría estar equivocado!", pron:"uír on trak, bat ái cud bi rong!"}
    ]}
  },
  { numero:3, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let's face it,", es:"Seamos honestos,", pron:"lets féis it,"},
      {en:"the thing is,", es:"la cosa es que,", pron:"de zing is,"},
      {en:"here's the deal,", es:"acá está el asunto,", pron:"jírs de díil,"},
      {en:"long story short,", es:"para hacerla corta,", pron:"long stóri short,"}
    ]},
    precoro:{label:"Repaso Semana 2", lineas:[
      {en:"Honestly, to be fair, if you ask me,", es:"Honestamente, para ser justo, si me preguntas,", pron:"ánestli, tu bi fer, if iú ask mi,"},
      {en:"personally, I could be wrong!", es:"personalmente, ¡podría estar equivocado!", pron:"pérsonali, ái cud bi rong!"}
    ]},
    coro:{label:"Repaso Semana 1", lineas:[
      {en:"By the way,", es:"Por cierto,", pron:"bái de uéi,"},
      {en:"speaking of which,", es:"hablando de eso,", pron:"spíiking of uích,"},
      {en:"that reminds me,", es:"eso me recuerda,", pron:"dat rimáinds mi,"},
      {en:"anyway,", es:"de todas formas,", pron:"éniuei,"},
      {en:"moving on!", es:"¡sigamos adelante!", pron:"múuving on!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Let's face it, it's too small, does it fit?", es:"Aceptémoslo, es muy pequeño, ¿te queda bien?", pron:"lets féis it, its tu smol, das it fit?"},
      {en:"The thing is, the fitting room is full,", es:"El asunto es que el probador está lleno,", pron:"de zing is, de fíting rum is ful,"},
      {en:"Here's the deal: the formal quote is attached,", es:"Este es el trato: la cotización formal va adjunta,", pron:"jíars de díil: de fórmal cuóut is atácht,"},
      {en:"Long story short, the proposal is valid until Friday!", es:"En resumen, ¡la propuesta es válida hasta el viernes!", pron:"long stóri short, de propóusal is válid antíl fráidei!"}
    ]}
  },
  { numero:4, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I was just thinking,", es:"Justo estaba pensando,", pron:"ái uás yast zínking,"},
      {en:"come to think of it,", es:"pensándolo bien,", pron:"cam tu zink of it,"},
      {en:"now that you mention it,", es:"ahora que lo mencionas,", pron:"náu dat iú ménshion it,"},
      {en:"funny you should say that!", es:"¡qué gracioso que digas eso!", pron:"fáni iú shud séi dat!"}
    ]},
    precoro:{label:"Repaso Semana 3", lineas:[
      {en:"Let's face it, the thing is,", es:"Seamos honestos, la cosa es que,", pron:"lets féis it, de zing is,"},
      {en:"here's the deal, long story short,", es:"acá está el asunto, para hacerla corta,", pron:"jírs de díil, long stóri short,"}
    ]},
    coro:{label:"Repaso Semana 2", lineas:[
      {en:"Honestly,", es:"Honestamente,", pron:"ánestli,"},
      {en:"to be fair,", es:"para ser justo,", pron:"tu bi fer,"},
      {en:"if you ask me,", es:"si me preguntas,", pron:"if iú ask mi,"},
      {en:"personally,", es:"personalmente,", pron:"pérsonali,"},
      {en:"I could be wrong!", es:"¡podría estar equivocado!", pron:"ái cud bi rong!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I was just thinking, can you lower the price?", es:"Estaba pensando, ¿puedes bajar el precio?", pron:"ái uás dyast zínking, can iú lóuer de práis?"},
      {en:"Come to think of it, what's your best offer?", es:"Ahora que lo pienso, ¿cuál es tu mejor oferta?", pron:"cam tu zink av it, uáts iór best ófer?"},
      {en:"Now that you mention it, it's defective, I need a refund,", es:"Ahora que lo mencionas, está defectuoso, necesito un reembolso,", pron:"náu dat iú ménshon it, its diféctiv, ái níid a rífand,"},
      {en:"Here's the invoice number, funny you should say that!", es:"Aquí está el número de factura, ¡qué curioso que lo digas!", pron:"jíars di ínvois námber, fáni iú shud séi dat!"}
    ]}
  },
  { numero:5, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Not gonna lie,", es:"No voy a mentir,", pron:"nat gána lái,"},
      {en:"I hear you,", es:"te entiendo,", pron:"ái jíar iú,"},
      {en:"fair enough,", es:"justo, tiene sentido,", pron:"fer ináf,"},
      {en:"that makes two of us!", es:"¡ya somos dos!", pron:"dat méiks tú of as!"}
    ]},
    precoro:{label:"Repaso Semana 4", lineas:[
      {en:"I was just thinking, come to think of it,", es:"Justo estaba pensando, pensándolo bien,", pron:"ái uás yast zínking, cam tu zink of it,"},
      {en:"now that you mention it, funny you should say that!", es:"ahora que lo mencionas, ¡qué gracioso que digas eso!", pron:"náu dat iú ménshion it, fáni iú shud séi dat!"}
    ]},
    coro:{label:"Repaso Semana 3", lineas:[
      {en:"Let's face it,", es:"Seamos honestos,", pron:"lets féis it,"},
      {en:"the thing is,", es:"la cosa es que,", pron:"de zing is,"},
      {en:"here's the deal,", es:"acá está el asunto,", pron:"jírs de díil,"},
      {en:"long story short,", es:"para hacerla corta,", pron:"long stóri short,"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Not gonna lie, it's not covered by the warranty,", es:"No te voy a mentir, no lo cubre la garantía,", pron:"nat góna lái, its nat cáverd bái de uárranti,"},
      {en:"I hear you, but a repair costs less,", es:"Te entiendo, pero una reparación cuesta menos,", pron:"ái jíar iú, bat a ripér costs les,"},
      {en:"Fair enough, plus VAT and a late fee,", es:"Me parece justo, más IVA y un recargo por mora,", pron:"fer ináf, plas vi-ei-tí and a léit fíi,"},
      {en:"A replacement? That makes two of us!", es:"¿Un reemplazo? ¡Ya somos dos!", pron:"a ripléisment? dat méiks tu av as!"}
    ]},
    puente:{label:"Repaso profundo — Semana 1", lineas:[
      {en:"By the way, speaking of which, that reminds me,", es:"Por cierto, hablando de eso, eso me recuerda,", pron:"bái de uéi, spíiking of uích, dat rimáinds mi,"},
      {en:"anyway, let's keep moving on!", es:"¡de todas formas, sigamos adelante!", pron:"éniuei, lets kíip múuving on!"}
    ]}
  },
  { numero:6, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"No worries at all,", es:"No hay ningún problema,", pron:"nóu uóris at ol,"},
      {en:"take your time,", es:"tómate tu tiempo,", pron:"téik iór táim,"},
      {en:"whenever you're ready,", es:"cuando estés listo,", pron:"uénever iór rédi,"},
      {en:"there's no rush!", es:"¡no hay apuro!", pron:"ders nóu rash!"}
    ]},
    precoro:{label:"Repaso Semana 5", lineas:[
      {en:"Not gonna lie, I hear you,", es:"No voy a mentir, te entiendo,", pron:"nat gána lái, ái jíar iú,"},
      {en:"fair enough, that makes two of us!", es:"justo, tiene sentido, ¡ya somos dos!", pron:"fer ináf, dat méiks tú of as!"}
    ]},
    coro:{label:"Repaso Semana 4", lineas:[
      {en:"I was just thinking,", es:"Justo estaba pensando,", pron:"ái uás yast zínking,"},
      {en:"come to think of it,", es:"pensándolo bien,", pron:"cam tu zink of it,"},
      {en:"now that you mention it,", es:"ahora que lo mencionas,", pron:"náu dat iú ménshion it,"},
      {en:"funny you should say that!", es:"¡qué gracioso que digas eso!", pron:"fáni iú shud séi dat!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Do you accept cards? No worries at all,", es:"¿Aceptan tarjetas? No te preocupes para nada,", pron:"du iú aksépt cards? nóu uóris at ol,"},
      {en:"Insert the card, enter your PIN, take your time,", es:"Inserta la tarjeta, ingresa tu clave, tómate tu tiempo,", pron:"insért de card, énter iór pin, téik iór táim,"},
      {en:"Add to cart, the shipping address, whenever you're ready,", es:"Agrega al carrito, la dirección de envío, cuando estés listo,", pron:"ad tu cart, de shíping ádres, uenéver iór rédi,"},
      {en:"Payment received, secure payment, there's no rush!", es:"Pago recibido, pago seguro, ¡no hay prisa!", pron:"péiment risíivd, sekiúr péiment, ders nóu rash!"}
    ]}
  },
  { numero:7, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I couldn't agree more,", es:"No podría estar más de acuerdo,", pron:"ái cúdnt agríi mor,"},
      {en:"that's exactly it,", es:"eso es exactamente,", pron:"dats exáctli it,"},
      {en:"you took the words right out of my mouth,", es:"me quitaste las palabras de la boca,", pron:"iú tuk de uords ráit áut of mái máuz,"},
      {en:"couldn't have said it better!", es:"¡no lo podría haber dicho mejor!", pron:"cúdnt jav sed it béter!"}
    ]},
    precoro:{label:"Repaso Semana 6", lineas:[
      {en:"No worries at all, take your time,", es:"No hay ningún problema, tómate tu tiempo,", pron:"nóu uóris at ol, téik iór táim,"},
      {en:"whenever you're ready, there's no rush!", es:"cuando estés listo, ¡no hay apuro!", pron:"uénever iór rédi, ders nóu rash!"}
    ]},
    coro:{label:"Repaso Semana 5", lineas:[
      {en:"Not gonna lie,", es:"No voy a mentir,", pron:"nat gána lái,"},
      {en:"I hear you,", es:"te entiendo,", pron:"ái jíar iú,"},
      {en:"fair enough,", es:"justo, tiene sentido,", pron:"fer ináf,"},
      {en:"that makes two of us!", es:"¡ya somos dos!", pron:"dat méiks tú of as!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"As far as I know, I couldn't agree more,", es:"Hasta donde sé, no podría estar más de acuerdo,", pron:"as far as ái nóu, ái cúdnt agríi mor,"},
      {en:"To be honest, that's exactly it,", es:"Para ser honesto, eso es exactamente,", pron:"tu bi ónest, dats egsáctli it,"},
      {en:"In other words, you took the words right out of my mouth,", es:"En otras palabras, me quitaste las palabras de la boca,", pron:"in áder uérds, iú tuk de uérds ráit áut av mái máuz,"},
      {en:"Little by little, couldn't have said it better!", es:"Poco a poco, ¡no lo pudiste haber dicho mejor!", pron:"lítol bái lítol, cúdnt jav sed it béter!"}
    ]}
  },
  { numero:8, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I was about to say the same thing,", es:"Estaba a punto de decir lo mismo,", pron:"ái uás abáut tu séi de séim zing,"},
      {en:"great minds think alike,", es:"las mentes brillantes piensan igual,", pron:"gréit máinds zink aláik,"},
      {en:"exactly what I was thinking,", es:"exactamente lo que estaba pensando,", pron:"exáctli uát ái uás zínking,"},
      {en:"we're on the same page!", es:"¡estamos en la misma sintonía!", pron:"uír on de séim péich!"}
    ]},
    precoro:{label:"Repaso Semana 7", lineas:[
      {en:"I couldn't agree more, that's exactly it,", es:"No podría estar más de acuerdo, eso es exactamente,", pron:"ái cúdnt agríi mor, dats exáctli it,"},
      {en:"you took the words right out of my mouth, couldn't have said it better!", es:"me quitaste las palabras de la boca, ¡no lo podría haber dicho mejor!", pron:"iú tuk de uords ráit áut of mái máuz, cúdnt jav sed it béter!"}
    ]},
    coro:{label:"Repaso Semana 6", lineas:[
      {en:"No worries at all,", es:"No hay ningún problema,", pron:"nóu uóris at ol,"},
      {en:"take your time,", es:"tómate tu tiempo,", pron:"téik iór táim,"},
      {en:"whenever you're ready,", es:"cuando estés listo,", pron:"uénever iór rédi,"},
      {en:"there's no rush!", es:"¡no hay apuro!", pron:"ders nóu rash!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"This jacket is too large, I was about to say the same thing,", es:"Esta chaqueta es muy grande, iba a decir lo mismo,", pron:"dis dyáket is tu lardch, ái uás abáut tu séi de séim zing,"},
      {en:"Great minds think alike: shoes, belt and hat,", es:"Las grandes mentes piensan igual: zapatos, cinturón y sombrero,", pron:"gréit máinds zink aláik: shúus, belt and jat,"},
      {en:"A kind reminder: the outstanding balance, exactly what I was thinking,", es:"Un amable recordatorio: el saldo pendiente, exactamente lo que pensaba,", pron:"a káind rimáinder: di autstánding bálans, egsáctli uát ái uás zínking,"},
      {en:"I approve the quote, go ahead, we're on the same page!", es:"Apruebo la cotización, adelante, ¡estamos de acuerdo!", pron:"ái aprúuv de cuóut, góu ajéd, uír on de séim péich!"}
    ]}
  },
  { numero:9, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"To make a long story short,", es:"Para acortar la historia,", pron:"tu méik a long stóri short,"},
      {en:"let's cut to the chase,", es:"vayamos al grano,", pron:"lets cat tu de chéis,"},
      {en:"bottom line is,", es:"la conclusión es,", pron:"bátom láin is,"},
      {en:"in a nutshell...", es:"en pocas palabras...", pron:"in a nátshel..."}
    ]},
    precoro:{label:"Repaso Semana 8", lineas:[
      {en:"I was about to say the same thing, great minds think alike,", es:"Estaba a punto de decir lo mismo, las mentes brillantes piensan igual,", pron:"ái uás abáut tu séi de séim zing, gréit máinds zink aláik,"},
      {en:"exactly what I was thinking, we're on the same page!", es:"exactamente lo que estaba pensando, ¡estamos en la misma sintonía!", pron:"exáctli uát ái uás zínking, uír on de séim péich!"}
    ]},
    coro:{label:"Repaso Semana 7", lineas:[
      {en:"I couldn't agree more,", es:"No podría estar más de acuerdo,", pron:"ái cúdnt agríi mor,"},
      {en:"that's exactly it,", es:"eso es exactamente,", pron:"dats exáctli it,"},
      {en:"you took the words right out of my mouth,", es:"me quitaste las palabras de la boca,", pron:"iú tuk de uords ráit áut of mái máuz,"},
      {en:"couldn't have said it better!", es:"¡no lo podría haber dicho mejor!", pron:"cúdnt jav sed it béter!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"To make a long story short, let's shop around,", es:"Para no hacer el cuento largo, comparemos en varias tiendas,", pron:"tu méik a long stóri short, lets shop aráund,"},
      {en:"Let's cut to the chase: the cheapest or the best value?", es:"Vamos al grano: ¿el más barato o la mejor relación calidad-precio?", pron:"lets cat tu de chéis: de chíipest or de best váliu?"},
      {en:"Bottom line is, the lead time matters,", es:"En conclusión, el tiempo de entrega importa,", pron:"bótom láin is, de líid táim máters,"},
      {en:"In a nutshell, it is worth it, final decision!", es:"En pocas palabras, vale la pena, ¡decisión final!", pron:"in a nátshel, it is uérz it, fáinal disíshon!"}
    ]},
    puente:{label:"Repaso profundo — Semana 2", lineas:[
      {en:"Honestly, to be fair, if you ask me,", es:"Honestamente, para ser justo, si me preguntas,", pron:"ánestli, tu bi fer, if iú ask mi,"},
      {en:"personally, I could be wrong!", es:"¡personalmente, podría estar equivocado!", pron:"pérsonali, ái cud bi rong!"}
    ]}
  },
  { numero:10, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That being said,", es:"Dicho esto,", pron:"dat bíing sed,"},
      {en:"on second thought,", es:"pensándolo mejor,", pron:"on sécond zot,"},
      {en:"let me rephrase that,", es:"déjame reformular eso,", pron:"let mi riphréis dat,"},
      {en:"what I meant was...", es:"lo que quise decir fue...", pron:"uát ái ment uás..."}
    ]},
    precoro:{label:"Repaso Semana 9", lineas:[
      {en:"To make a long story short, let's cut to the chase,", es:"Para acortar la historia, vayamos al grano,", pron:"tu méik a long stóri short, lets cat tu de chéis,"},
      {en:"bottom line is, in a nutshell...", es:"la conclusión es, en pocas palabras...", pron:"bátom láin is, in a nátshel..."}
    ]},
    coro:{label:"Repaso Semana 8", lineas:[
      {en:"I was about to say the same thing,", es:"Estaba a punto de decir lo mismo,", pron:"ái uás abáut tu séi de séim zing,"},
      {en:"great minds think alike,", es:"las mentes brillantes piensan igual,", pron:"gréit máinds zink aláik,"},
      {en:"exactly what I was thinking,", es:"exactamente lo que estaba pensando,", pron:"exáctli uát ái uás zínking,"},
      {en:"we're on the same page!", es:"¡estamos en la misma sintonía!", pron:"uír on de séim péich!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"That being said, this doesn't work, I want a refund,", es:"Dicho esto, esto no funciona, quiero un reembolso,", pron:"dat bíing sed, dis dásnt uérk, ái uánt a rífand,"},
      {en:"On second thought, let me call customer service,", es:"Pensándolo bien, déjame llamar a servicio al cliente,", pron:"on sécond zot, let mi col cástomer sérvis,"},
      {en:"Let me rephrase that: it's a billing error,", es:"Déjame decirlo de otra forma: es un error de facturación,", pron:"let mi rifréis dat: its a bíling érror,"},
      {en:"What I meant was, here's my case number, don't give up!", es:"Lo que quise decir fue, aquí está mi número de caso, ¡no te rindas!", pron:"uát ái ment uás, jíars mái quéis námber, dont guív ap!"}
    ]}
  },
  { numero:11, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"As a matter of fact,", es:"De hecho,", pron:"as a máter of fact,"},
      {en:"believe it or not,", es:"aunque no lo creas,", pron:"bilíiv it or nat,"},
      {en:"more or less,", es:"más o menos,", pron:"mor or les,"},
      {en:"give or take,", es:"aproximadamente,", pron:"guiv or téik,"},
      {en:"who knows!", es:"¡quién sabe!", pron:"jú nóus!"}
    ]},
    precoro:{label:"Repaso Semana 10", lineas:[
      {en:"That being said, on second thought,", es:"Dicho esto, pensándolo mejor,", pron:"dat bíing sed, on sécond zot,"},
      {en:"let me rephrase that, what I meant was...", es:"déjame reformular eso, lo que quise decir fue...", pron:"let mi riphréis dat, uát ái ment uás..."}
    ]},
    coro:{label:"Repaso Semana 9", lineas:[
      {en:"To make a long story short,", es:"Para acortar la historia,", pron:"tu méik a long stóri short,"},
      {en:"let's cut to the chase,", es:"vayamos al grano,", pron:"lets cat tu de chéis,"},
      {en:"bottom line is,", es:"la conclusión es,", pron:"bátom láin is,"},
      {en:"in a nutshell...", es:"en pocas palabras...", pron:"in a nátshel..."}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Excuse me, how do I get to the corner store?", es:"Disculpa, ¿cómo llego a la tienda de la esquina?", pron:"exquiús mi, jáu du ái get tu de córner stor?"},
      {en:"As a matter of fact, turn left and go straight,", es:"De hecho, gira a la izquierda y sigue derecho,", pron:"as a máter av fact, tern left and góu stréit,"},
      {en:"Believe it or not, it's near, more or less two blocks,", es:"Aunque no lo creas, está cerca, más o menos dos cuadras,", pron:"bilíiv it or nat, its níar, mor or les tu bloks,"},
      {en:"The carrier comes at noon, give or take, who knows!", es:"El transportista viene al mediodía, más o menos, ¡quién sabe!", pron:"de cárrier cams at núun, guív or téik, júu nóus!"}
    ]}
  },
  { numero:12, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I see what you mean,", es:"Veo lo que quieres decir,", pron:"ái síi uát iú míin,"},
      {en:"that makes sense to me,", es:"eso me tiene sentido,", pron:"dat méiks sens tu mi,"},
      {en:"I wasn't aware of that,", es:"no estaba al tanto de eso,", pron:"ái uásnt auér of dat,"},
      {en:"good to know!", es:"¡bueno saberlo!", pron:"gud tu nóu!"}
    ]},
    precoro:{label:"Repaso Semana 11", lineas:[
      {en:"As a matter of fact, believe it or not, more or less,", es:"De hecho, aunque no lo creas, más o menos,", pron:"as a máter of fact, bilíiv it or nat, mor or les,"},
      {en:"give or take, who knows!", es:"aproximadamente, ¡quién sabe!", pron:"guiv or téik, jú nóus!"}
    ]},
    coro:{label:"Repaso Semana 10", lineas:[
      {en:"That being said,", es:"Dicho esto,", pron:"dat bíing sed,"},
      {en:"on second thought,", es:"pensándolo mejor,", pron:"on sécond zot,"},
      {en:"let me rephrase that,", es:"déjame reformular eso,", pron:"let mi riphréis dat,"},
      {en:"what I meant was...", es:"lo que quise decir fue...", pron:"uát ái ment uás..."}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"It's across from the bank, next to the traffic light,", es:"Queda frente al banco, al lado del semáforo,", pron:"its acrós from de bank, next tu de tráfic láit,"},
      {en:"I see what you mean, the order is in transit,", es:"Entiendo lo que dices, el pedido está en tránsito,", pron:"ái síi uát iú míin, di órder is in tránsit,"},
      {en:"Out for delivery by truck? That makes sense to me,", es:"¿En reparto en camión? Eso tiene sentido para mí,", pron:"áut for delíveri bái trak? dat méiks sens tu mi,"},
      {en:"I wasn't aware of the freight rate, good to know!", es:"No sabía la tarifa del flete, ¡bueno saberlo!", pron:"ái uásnt auér av de fréit réit, gud tu nóu!"}
    ]}
  },
  { numero:13, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let's just say,", es:"Digamos que,", pron:"lets yast séi,"},
      {en:"put it this way,", es:"pongámoslo así,", pron:"put it dis uéi,"},
      {en:"in other words,", es:"en otras palabras,", pron:"in áder uords,"},
      {en:"to put it simply,", es:"para decirlo simple,", pron:"tu put it símpli,"},
      {en:"basically...", es:"básicamente...", pron:"béisicli..."}
    ]},
    precoro:{label:"Repaso Semana 12", lineas:[
      {en:"I see what you mean, that makes sense to me,", es:"Veo lo que quieres decir, eso me tiene sentido,", pron:"ái síi uát iú míin, dat méiks sens tu mi,"},
      {en:"I wasn't aware of that, good to know!", es:"no estaba al tanto de eso, ¡bueno saberlo!", pron:"ái uásnt auér of dat, gud tu nóu!"}
    ]},
    coro:{label:"Repaso Semana 11", lineas:[
      {en:"As a matter of fact,", es:"De hecho,", pron:"as a máter of fact,"},
      {en:"believe it or not,", es:"aunque no lo creas,", pron:"bilíiv it or nat,"},
      {en:"more or less,", es:"más o menos,", pron:"mor or les,"},
      {en:"give or take,", es:"aproximadamente,", pron:"guiv or téik,"},
      {en:"who knows!", es:"¡quién sabe!", pron:"jú nóus!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Let's just say the flight was long,", es:"Digamos que el vuelo fue largo,", pron:"lets dyast séi de fláit uás long,"},
      {en:"Put it this way: my luggage is at customs,", es:"Míralo así: mi equipaje está en la aduana,", pron:"put it dis uéi: mái lágach is at cástoms,"},
      {en:"In other words, I need to declare the import,", es:"En otras palabras, necesito declarar la importación,", pron:"in áder uérds, ái níid tu diclér di ímport,"},
      {en:"To put it simply, basically, pay the tariff!", es:"Para decirlo simple, básicamente, ¡paga el arancel!", pron:"tu put it símpli, béisicli, péi de tárif!"}
    ]}
  },
  { numero:14, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm getting the hang of it,", es:"Le estoy agarrando la mano,", pron:"áim guéting de jang of it,"},
      {en:"practice makes perfect,", es:"la práctica hace al maestro,", pron:"práctis méiks pérfect,"},
      {en:"little by little,", es:"poco a poco,", pron:"lítol bái lítol,"},
      {en:"step by step!", es:"¡paso a paso!", pron:"step bái step!"}
    ]},
    precoro:{label:"Repaso Semana 13", lineas:[
      {en:"Let's just say, put it this way, in other words,", es:"Digamos que, pongámoslo así, en otras palabras,", pron:"lets yast séi, put it dis uéi, in áder uords,"},
      {en:"to put it simply, basically...", es:"para decirlo simple, básicamente...", pron:"tu put it símpli, béisicli..."}
    ]},
    coro:{label:"Repaso Semana 12", lineas:[
      {en:"I see what you mean,", es:"Veo lo que quieres decir,", pron:"ái síi uát iú míin,"},
      {en:"that makes sense to me,", es:"eso me tiene sentido,", pron:"dat méiks sens tu mi,"},
      {en:"I wasn't aware of that,", es:"no estaba al tanto de eso,", pron:"ái uásnt auér of dat,"},
      {en:"good to know!", es:"¡bueno saberlo!", pron:"gud tu nóu!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I have the packing list, I'm getting the hang of it,", es:"Tengo la lista de empaque, ya le estoy agarrando el truco,", pron:"ái jav de páking list, áim guéting de jang av it,"},
      {en:"The commercial invoice? Practice makes perfect,", es:"¿La factura comercial? La práctica hace al maestro,", pron:"de comérshal ínvois? práctis méiks pérfect,"},
      {en:"Past the bridge, the roundabout, little by little,", es:"Pasando el puente, la glorieta, poco a poco,", pron:"past de brich, de ráundabaut, lítol bái lítol,"},
      {en:"Same-day delivery in this zone, step by step!", es:"Entrega el mismo día en esta zona, ¡paso a paso!", pron:"séim déi delíveri in dis zóun, step bái step!"}
    ]}
  },
  { numero:15, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Speaking from experience,", es:"Hablando por experiencia,", pron:"spíiking fram expíriens,"},
      {en:"in my experience,", es:"en mi experiencia,", pron:"in mái expíriens,"},
      {en:"from what I've seen,", es:"por lo que he visto,", pron:"fram uát áiv síin,"},
      {en:"if I had to guess...", es:"si tuviera que adivinar...", pron:"if ái jad tu ges..."}
    ]},
    precoro:{label:"Repaso Semana 14", lineas:[
      {en:"I'm getting the hang of it, practice makes perfect,", es:"Le estoy agarrando la mano, la práctica hace al maestro,", pron:"áim guéting de jang of it, práctis méiks pérfect,"},
      {en:"little by little, step by step!", es:"poco a poco, ¡paso a paso!", pron:"lítol bái lítol, step bái step!"}
    ]},
    coro:{label:"Repaso Semana 13", lineas:[
      {en:"Let's just say,", es:"Digamos que,", pron:"lets yast séi,"},
      {en:"put it this way,", es:"pongámoslo así,", pron:"put it dis uéi,"},
      {en:"in other words,", es:"en otras palabras,", pron:"in áder uords,"},
      {en:"to put it simply,", es:"para decirlo simple,", pron:"tu put it símpli,"},
      {en:"basically...", es:"básicamente...", pron:"béisicli..."}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Speaking from experience, it's just around the corner,", es:"Hablando por experiencia, está a la vuelta de la esquina,", pron:"spíiking from expíriens, its dyast aráund de córner,"},
      {en:"In my experience, follow the signs,", es:"En mi experiencia, sigue las señales,", pron:"in mái expíriens, fólou de sáins,"},
      {en:"From what I've seen, you passed it, it's over there,", es:"Por lo que he visto, te pasaste, está por allá,", pron:"from uát áiv síin, iú past it, its óuver der,"},
      {en:"If I had to guess, it takes about ten minutes!", es:"Si tuviera que adivinar, ¡toma unos diez minutos!", pron:"if ái jad tu ges, it téiks abáut ten mínits!"}
    ]},
    puente:{label:"Repaso profundo — Semana 6", lineas:[
      {en:"No worries at all, take your time,", es:"No hay ningún problema, tómate tu tiempo,", pron:"nóu uóris at ol, téik iór táim,"},
      {en:"there's no rush, we have plenty of time!", es:"¡no hay apuro, tenemos mucho tiempo!", pron:"ders nóu rash, uí jav plénti of táim!"}
    ]}
  },
  { numero:16, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That said,", es:"Dicho eso,", pron:"dat sed,"},
      {en:"even so,", es:"aun así,", pron:"íven sóu,"},
      {en:"either way,", es:"de cualquier manera,", pron:"íder uéi,"},
      {en:"in any case,", es:"en cualquier caso,", pron:"in éni kéis,"},
      {en:"no matter what!", es:"¡pase lo que pase!", pron:"nóu máter uát!"}
    ]},
    precoro:{label:"Repaso Semana 15", lineas:[
      {en:"Speaking from experience, in my experience,", es:"Hablando por experiencia, en mi experiencia,", pron:"spíiking fram expíriens, in mái expíriens,"},
      {en:"from what I've seen, if I had to guess...", es:"por lo que he visto, si tuviera que adivinar...", pron:"fram uát áiv síin, if ái jad tu ges..."}
    ]},
    coro:{label:"Repaso Semana 14", lineas:[
      {en:"I'm getting the hang of it,", es:"Le estoy agarrando la mano,", pron:"áim guéting de jang of it,"},
      {en:"practice makes perfect,", es:"la práctica hace al maestro,", pron:"práctis méiks pérfect,"},
      {en:"little by little,", es:"poco a poco,", pron:"lítol bái lítol,"},
      {en:"step by step!", es:"¡paso a paso!", pron:"step bái step!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Rush hour, a traffic jam, that said, take the shortcut,", es:"Hora pico, un trancón, dicho esto, toma el atajo,", pron:"rash áuer, a tráfic dyam, dat sed, téik de shórtcat,"},
      {en:"Even so, the shipment is delayed,", es:"Aun así, el envío está retrasado,", pron:"íiven sóu, de shípment is diléid,"},
      {en:"Either way, it's out of stock, a bottleneck,", es:"De cualquier manera, está agotado, un cuello de botella,", pron:"íider uéi, its áut av stok, a bótolnek,"},
      {en:"In any case, I want to hire a carrier, no matter what!", es:"En todo caso, quiero contratar un transportista, ¡pase lo que pase!", pron:"in éni quéis, ái uánt tu jáier a cárrier, nóu máter uát!"}
    ]}
  },
  { numero:17, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"You know what I mean?", es:"¿Sabes a qué me refiero?", pron:"iú nóu uát ái míin?"},
      {en:"does that make sense?", es:"¿tiene sentido eso?", pron:"das dat méik sens?"},
      {en:"if that makes sense,", es:"si eso tiene sentido,", pron:"if dat méiks sens,"},
      {en:"right?", es:"¿verdad?", pron:"ráit?"}
    ]},
    precoro:{label:"Repaso Semana 16", lineas:[
      {en:"That said, even so, either way,", es:"Dicho eso, aun así, de cualquier manera,", pron:"dat sed, íven sóu, íder uéi,"},
      {en:"in any case, no matter what!", es:"en cualquier caso, ¡pase lo que pase!", pron:"in éni kéis, nóu máter uát!"}
    ]},
    coro:{label:"Repaso Semana 15", lineas:[
      {en:"Speaking from experience,", es:"Hablando por experiencia,", pron:"spíiking fram expíriens,"},
      {en:"in my experience,", es:"en mi experiencia,", pron:"in mái expíriens,"},
      {en:"from what I've seen,", es:"por lo que he visto,", pron:"fram uát áiv síin,"},
      {en:"if I had to guess...", es:"si tuviera que adivinar...", pron:"if ái jad tu ges..."}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"This package is fragile, you know what I mean?", es:"Este paquete es frágil, ¿sabes a qué me refiero?", pron:"dis páquech is frádyail, iú nóu uát ái míin?"},
      {en:"Handle with care, does that make sense?", es:"Manéjalo con cuidado, ¿tiene sentido?", pron:"jándol uid quer, das dat méik sens?"},
      {en:"This side up, do not stack, if that makes sense,", es:"Este lado arriba, no apilar, si eso tiene sentido,", pron:"dis sáid ap, du nat stak, if dat méiks sens,"},
      {en:"Leave it at the loading dock, right?", es:"Déjalo en el muelle de carga, ¿verdad?", pron:"líiv it at de lóuding dok, ráit?"}
    ]}
  },
  { numero:18, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Wait, what?", es:"Espera, ¿qué?", pron:"uéit, uát?"},
      {en:"hold on a second,", es:"espera un segundo,", pron:"jóuld on a sécond,"},
      {en:"back up,", es:"retrocede,", pron:"bak ap,"},
      {en:"say that again?", es:"¿puedes repetir eso?", pron:"séi dat aguén?"}
    ]},
    precoro:{label:"Repaso Semana 17", lineas:[
      {en:"You know what I mean? does that make sense?", es:"¿Sabes a qué me refiero? ¿tiene sentido eso?", pron:"iú nóu uát ái míin? das dat méik sens?"},
      {en:"if that makes sense, right?", es:"si eso tiene sentido, ¿verdad?", pron:"if dat méiks sens, ráit?"}
    ]},
    coro:{label:"Repaso Semana 16", lineas:[
      {en:"That said,", es:"Dicho eso,", pron:"dat sed,"},
      {en:"even so,", es:"aun así,", pron:"íven sóu,"},
      {en:"either way,", es:"de cualquier manera,", pron:"íder uéi,"},
      {en:"in any case,", es:"en cualquier caso,", pron:"in éni kéis,"},
      {en:"no matter what!", es:"¡pase lo que pase!", pron:"nóu máter uát!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The route goes north, wait, what?", es:"La ruta va hacia el norte, espera, ¿qué?", pron:"de ráut góus norz, uéit, uát?"},
      {en:"Hold on a second, downtown or the outskirts?", es:"Espera un segundo, ¿el centro o las afueras?", pron:"jóuld on a sécond, dáuntaun or di áutskerts?"},
      {en:"Back up, multiple stops before dispatch,", es:"Retrocede, varias paradas antes del despacho,", pron:"bak ap, máltipol stops bifór dispách,"},
      {en:"Stay consistent, say that again?", es:"Mantente constante, ¿puedes repetir?", pron:"stéi consístent, séi dat aguén?"}
    ]}
  },
  { numero:19, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I get what you're saying,", es:"Entiendo lo que estás diciendo,", pron:"ái guet uát iór séing,"},
      {en:"makes total sense,", es:"tiene total sentido,", pron:"méiks tóutal sens,"},
      {en:"that clears it up,", es:"eso lo aclara,", pron:"dat clíars it ap,"},
      {en:"crystal clear!", es:"¡clarísimo!", pron:"cristal clíar!"}
    ]},
    precoro:{label:"Repaso Semana 18", lineas:[
      {en:"Wait, what? hold on a second,", es:"Espera, ¿qué? espera un segundo,", pron:"uéit, uát? jóuld on a sécond,"},
      {en:"back up, say that again?", es:"retrocede, ¿puedes repetir eso?", pron:"bak ap, séi dat aguén?"}
    ]},
    coro:{label:"Repaso Semana 17", lineas:[
      {en:"You know what I mean?", es:"¿Sabes a qué me refiero?", pron:"iú nóu uát ái míin?"},
      {en:"does that make sense?", es:"¿tiene sentido eso?", pron:"das dat méik sens?"},
      {en:"if that makes sense,", es:"si eso tiene sentido,", pron:"if dat méiks sens,"},
      {en:"right?", es:"¿verdad?", pron:"ráit?"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"How do I get to the corner? I get what you're saying,", es:"¿Cómo llego a la esquina? Entiendo lo que dices,", pron:"jáu du ái get tu de córner? ái get uát iúr séing,"},
      {en:"Turn left, then turn right, makes total sense,", es:"Gira a la izquierda, luego a la derecha, tiene todo el sentido,", pron:"tern left, den tern ráit, méiks tóutal sens,"},
      {en:"It's near, two blocks, that clears it up,", es:"Está cerca, a dos cuadras, eso lo aclara,", pron:"its níar, tu bloks, dat clíars it ap,"},
      {en:"The carrier does the pickup, crystal clear!", es:"El transportista hace la recogida, ¡clarísimo!", pron:"de cárrier das de píkap, crístal clíar!"}
    ]},
    puente:{label:"Repaso profundo — Semana 9", lineas:[
      {en:"To make a long story short, let's cut to the chase,", es:"Para acortar la historia, vayamos al grano,", pron:"tu méik a long stóri short, lets cat tu de chéis,"},
      {en:"bottom line is, in a nutshell!", es:"¡la conclusión es, en pocas palabras!", pron:"bátom láin is, in a nátshel!"}
    ]}
  },
  { numero:20, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I couldn't tell you,", es:"No te sabría decir,", pron:"ái cúdnt tel iú,"},
      {en:"your guess is as good as mine,", es:"tu suposición es tan buena como la mía,", pron:"iór ges is as gud as máin,"},
      {en:"beats me!", es:"¡ni idea!", pron:"bíits mi!"},
      {en:"search me!", es:"¡no tengo ni la menor idea!", pron:"serch mi!"}
    ]},
    precoro:{label:"Repaso Semana 19", lineas:[
      {en:"I get what you're saying, makes total sense,", es:"Entiendo lo que estás diciendo, tiene total sentido,", pron:"ái guet uát iór séing, méiks tóutal sens,"},
      {en:"that clears it up, crystal clear!", es:"eso lo aclara, ¡clarísimo!", pron:"dat clíars it ap, cristal clíar!"}
    ]},
    coro:{label:"Repaso Semana 18", lineas:[
      {en:"Wait, what?", es:"Espera, ¿qué?", pron:"uéit, uát?"},
      {en:"hold on a second,", es:"espera un segundo,", pron:"jóuld on a sécond,"},
      {en:"back up,", es:"retrocede,", pron:"bak ap,"},
      {en:"say that again?", es:"¿puedes repetir eso?", pron:"séi dat aguén?"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Where's the tracking link? I couldn't tell you,", es:"¿Dónde está el enlace de rastreo? No sabría decirte,", pron:"uérs de tráking link? ái cúdnt tel iú,"},
      {en:"In transit or out for delivery? Your guess is as good as mine,", es:"¿En tránsito o en reparto? Sabes tanto como yo,", pron:"in tránsit or áut for delíveri? iór ges is as gud as máin,"},
      {en:"Next to the traffic light, behind the bank? Beats me!", es:"¿Al lado del semáforo, detrás del banco? ¡Ni idea!", pron:"next tu de tráfic láit, bijáind de bank? bíits mi!"},
      {en:"Across from the crosswalk? Delivered? Search me!", es:"¿Frente al paso peatonal? ¿Entregado? ¡Yo qué sé!", pron:"acrós from de crósuok? delíverd? serch mi!"}
    ]}
  },
  { numero:21, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Now you're talking!", es:"¡Ahora sí!", pron:"náu iór tóking!"},
      {en:"that's more like it,", es:"eso ya es más como es,", pron:"dats mor láik it,"},
      {en:"there you go,", es:"así se hace,", pron:"der iú góu,"},
      {en:"way to go!", es:"¡bien hecho!", pron:"uéi tu góu!"}
    ]},
    precoro:{label:"Repaso Semana 20", lineas:[
      {en:"I couldn't tell you, your guess is as good as mine,", es:"No te sabría decir, tu suposición es tan buena como la mía,", pron:"ái cúdnt tel iú, iór ges is as gud as máin,"},
      {en:"beats me! search me!", es:"¡ni idea! ¡no tengo ni la menor idea!", pron:"bíits mi! serch mi!"}
    ]},
    coro:{label:"Repaso Semana 19", lineas:[
      {en:"I get what you're saying,", es:"Entiendo lo que estás diciendo,", pron:"ái guet uát iór séing,"},
      {en:"makes total sense,", es:"tiene total sentido,", pron:"méiks tóutal sens,"},
      {en:"that clears it up,", es:"eso lo aclara,", pron:"dat clíars it ap,"},
      {en:"crystal clear!", es:"¡clarísimo!", pron:"cristal clíar!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Bus, taxi or train? Now you're talking!", es:"¿Bus, taxi o tren? ¡Así se habla!", pron:"bas, táxi or tréin? náu iúr tóking!"},
      {en:"A truck for the freight, that's more like it,", es:"Un camión para el flete, eso está mejor,", pron:"a trak for de fréit, dats mor láik it,"},
      {en:"I will choose this shipping company, there you go,", es:"Voy a elegir esta transportadora, ahí tienes,", pron:"ái uíl chúus dis shíping cómpani, der iú góu,"},
      {en:"A good rate and insurance, way to go!", es:"Una buena tarifa y seguro, ¡bien hecho!", pron:"a gud réit and inshúrans, uéi tu góu!"}
    ]}
  },
  { numero:22, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I hate to say it, but,", es:"Odio decirlo, pero,", pron:"ái jéit tu séi it, bat,"},
      {en:"no offense, but,", es:"sin ofender, pero,", pron:"nóu ofens, bat,"},
      {en:"don't take this the wrong way,", es:"no lo tomes a mal,", pron:"dont téik dis de rong uéi,"},
      {en:"just saying!", es:"¡solo digo!", pron:"yast séing!"}
    ]},
    precoro:{label:"Repaso Semana 21", lineas:[
      {en:"Now you're talking! that's more like it,", es:"¡Ahora sí! eso ya es más como es,", pron:"náu iór tóking! dats mor láik it,"},
      {en:"there you go, way to go!", es:"así se hace, ¡bien hecho!", pron:"der iú góu, uéi tu góu!"}
    ]},
    coro:{label:"Repaso Semana 20", lineas:[
      {en:"I couldn't tell you,", es:"No te sabría decir,", pron:"ái cúdnt tel iú,"},
      {en:"your guess is as good as mine,", es:"tu suposición es tan buena como la mía,", pron:"iór ges is as gud as máin,"},
      {en:"beats me!", es:"¡ni idea!", pron:"bíits mi!"},
      {en:"search me!", es:"¡no tengo ni la menor idea!", pron:"serch mi!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The flight is late, I hate to say it, but,", es:"El vuelo está atrasado, odio decirlo, pero,", pron:"de fláit is léit, ái jéit tu séi it, bat,"},
      {en:"No offense, but your luggage is at customs,", es:"Sin ofender, pero tu equipaje está en la aduana,", pron:"nóu oféns, bat iór lágach is at cástoms,"},
      {en:"I need to declare the import, don't take this the wrong way,", es:"Necesito declarar la importación, no lo tomes a mal,", pron:"ái níid tu diclér di ímport, dont téik dis de rong uéi,"},
      {en:"Pay the tariff at the gate, just saying!", es:"Paga el arancel en la puerta, ¡solo digo!", pron:"péi de tárif at de guéit, dyast séing!"}
    ]}
  },
  { numero:23, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Between you and me,", es:"Entre tú y yo,", pron:"bituíin iú and mi,"},
      {en:"keep this between us,", es:"que quede entre nosotros,", pron:"kíip dis bituíin as,"},
      {en:"off the record,", es:"extraoficialmente,", pron:"of de récord,"},
      {en:"just between friends!", es:"¡solo entre amigos!", pron:"yast bituíin frends!"}
    ]},
    precoro:{label:"Repaso Semana 22", lineas:[
      {en:"I hate to say it, but, no offense, but,", es:"Odio decirlo, pero, sin ofender, pero,", pron:"ái jéit tu séi it, bat, nóu ofens, bat,"},
      {en:"don't take this the wrong way, just saying!", es:"no lo tomes a mal, ¡solo digo!", pron:"dont téik dis de rong uéi, yast séing!"}
    ]},
    coro:{label:"Repaso Semana 21", lineas:[
      {en:"Now you're talking!", es:"¡Ahora sí!", pron:"náu iór tóking!"},
      {en:"that's more like it,", es:"eso ya es más como es,", pron:"dats mor láik it,"},
      {en:"there you go,", es:"así se hace,", pron:"der iú góu,"},
      {en:"way to go!", es:"¡bien hecho!", pron:"uéi tu góu!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Between you and me, the train has a delay,", es:"Entre tú y yo, el tren tiene un retraso,", pron:"bituíin iú and mi, de tréin jas a diléi,"},
      {en:"Keep this between us, I have the packing list,", es:"Que quede entre nosotros, tengo la lista de empaque,", pron:"kíip dis bituíin as, ái jav de páking list,"},
      {en:"Off the record, the customs broker is at the platform,", es:"Extraoficialmente, el agente de aduanas está en el andén,", pron:"of de récord, de cástoms bróuker is at de plátform,"},
      {en:"The commercial invoice is here, just between friends!", es:"La factura comercial está aquí, ¡solo entre amigos!", pron:"de comérshal ínvois is jíar, dyast bituíin frends!"}
    ]}
  },
  { numero:24, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Out of curiosity,", es:"Por curiosidad,", pron:"áut of curiásiti,"},
      {en:"just wondering,", es:"solo me preguntaba,", pron:"yast uándering,"},
      {en:"quick question,", es:"pregunta rápida,", pron:"cuík cuéschion,"},
      {en:"random thought...", es:"pensamiento al azar...", pron:"rándom zot..."}
    ]},
    precoro:{label:"Repaso Semana 23", lineas:[
      {en:"Between you and me, keep this between us,", es:"Entre tú y yo, que quede entre nosotros,", pron:"bituíin iú and mi, kíip dis bituíin as,"},
      {en:"off the record, just between friends!", es:"extraoficialmente, ¡solo entre amigos!", pron:"of de récord, yast bituíin frends!"}
    ]},
    coro:{label:"Repaso Semana 22", lineas:[
      {en:"I hate to say it, but,", es:"Odio decirlo, pero,", pron:"ái jéit tu séi it, bat,"},
      {en:"no offense, but,", es:"sin ofender, pero,", pron:"nóu ofens, bat,"},
      {en:"don't take this the wrong way,", es:"no lo tomes a mal,", pron:"dont téik dis de rong uéi,"},
      {en:"just saying!", es:"¡solo digo!", pron:"yast séing!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Out of curiosity, what's that landmark?", es:"Por curiosidad, ¿qué es ese punto de referencia?", pron:"áut av kiuriósiti, uáts dat lándmark?"},
      {en:"Just wondering, the main street or the avenue?", es:"Solo me preguntaba, ¿la calle principal o la avenida?", pron:"dyast uándering, de méin stríit or di áveniu?"},
      {en:"Quick question: does the delivery zone cover this district?", es:"Pregunta rápida: ¿la zona de reparto cubre este barrio?", pron:"cuík cuéschion: das de delíveri zóun cáver dis dístrict?"},
      {en:"Same-day delivery past the bridge? Random thought...", es:"¿Entrega el mismo día pasando el puente? Una idea al azar...", pron:"séim-déi delíveri past de brich? rándom zot..."}
    ]},
    puente:{label:"Repaso profundo — Semana 15", lineas:[
      {en:"Speaking from experience, in my experience,", es:"Hablando por experiencia, en mi experiencia,", pron:"spíiking fram expíriens, in mái expíriens,"},
      {en:"if I had to guess...", es:"si tuviera que adivinar...", pron:"if ái jad tu ges..."}
    ]}
  },
  { numero:25, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Not to change the subject, but,", es:"No para cambiar de tema, pero,", pron:"nat tu chéinch de sábyect, bat,"},
      {en:"on a different note,", es:"en otro tema,", pron:"on a díferent nóut,"},
      {en:"before I forget,", es:"antes de que se me olvide,", pron:"bifór ái forguét,"},
      {en:"while we're on the topic...", es:"ya que estamos en el tema...", pron:"uáil uír on de tápic..."}
    ]},
    precoro:{label:"Repaso Semana 24", lineas:[
      {en:"Out of curiosity, just wondering,", es:"Por curiosidad, solo me preguntaba,", pron:"áut of curiásiti, yast uándering,"},
      {en:"quick question, random thought...", es:"pregunta rápida, pensamiento al azar...", pron:"cuík cuéschion, rándom zot..."}
    ]},
    coro:{label:"Repaso Semana 23", lineas:[
      {en:"Between you and me,", es:"Entre tú y yo,", pron:"bituíin iú and mi,"},
      {en:"keep this between us,", es:"que quede entre nosotros,", pron:"kíip dis bituíin as,"},
      {en:"off the record,", es:"extraoficialmente,", pron:"of de récord,"},
      {en:"just between friends!", es:"¡solo entre amigos!", pron:"yast bituíin frends!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Not to change the subject, but you're close,", es:"No es por cambiar el tema, pero ya estás cerca,", pron:"nat tu chéinch de sábyect, bat iór clóus,"},
      {en:"On a different note, you passed it,", es:"Cambiando de tema, te pasaste,", pron:"on a díferent nóut, iú past it,"},
      {en:"Before I forget, it's just around the corner,", es:"Antes de que se me olvide, está a la vuelta de la esquina,", pron:"bifór ái forguét, its dyast aráund de córner,"},
      {en:"Follow the signs, while we're on the topic...", es:"Sigue las señales, ya que estamos en el tema...", pron:"fólou de sáins, uáil uír on de tópic..."}
    ]}
  },
  { numero:26, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"At the end of the day,", es:"Al final del día,", pron:"at de end of de déi,"},
      {en:"when all is said and done,", es:"cuando todo está dicho y hecho,", pron:"uén ol is sed and dan,"},
      {en:"all things considered,", es:"considerando todo,", pron:"ol zings cansíderd,"},
      {en:"in the grand scheme of things...", es:"en el gran esquema de las cosas...", pron:"in de grand skíim of zings..."}
    ]},
    precoro:{label:"Repaso Semana 25", lineas:[
      {en:"Not to change the subject, but, on a different note,", es:"No para cambiar de tema, pero, en otro tema,", pron:"nat tu chéinch de sábyect, bat, on a díferent nóut,"},
      {en:"before I forget, while we're on the topic...", es:"antes de que se me olvide, ya que estamos en el tema...", pron:"bifór ái forguét, uáil uír on de tápic..."}
    ]},
    coro:{label:"Repaso Semana 24", lineas:[
      {en:"Out of curiosity,", es:"Por curiosidad,", pron:"áut of curiásiti,"},
      {en:"just wondering,", es:"solo me preguntaba,", pron:"yast uándering,"},
      {en:"quick question,", es:"pregunta rápida,", pron:"cuík cuéschion,"},
      {en:"random thought...", es:"pensamiento al azar...", pron:"rándom zot..."}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"A traffic jam at rush hour, at the end of the day,", es:"Un trancón en hora pico, al fin y al cabo,", pron:"a tráfic dyam at rash áuer, at di end av de déi,"},
      {en:"Take the shortcut, not the detour, when all is said and done,", es:"Toma el atajo, no el desvío, a fin de cuentas,", pron:"téik de shórtcat, nat de díitur, uén ol is sed and dan,"},
      {en:"The shipment is delayed, all things considered,", es:"El envío está retrasado, considerándolo todo,", pron:"de shípment is diléid, ol zings consíderd,"},
      {en:"Out of stock? A bottleneck in the grand scheme of things...", es:"¿Agotado? Un cuello de botella en el panorama general...", pron:"áut av stok? a bótolnek in de grand skíim av zings..."}
    ]}
  },
  { numero:27, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'll let you know,", es:"Te voy a avisar,", pron:"áil let iú nóu,"},
      {en:"I'll keep you posted,", es:"te voy a mantener al tanto,", pron:"áil kíip iú póustid,"},
      {en:"stay tuned,", es:"mantente atento,", pron:"stéi tiúnd,"},
      {en:"more to come!", es:"¡más viene en camino!", pron:"mor tu cam!"}
    ]},
    precoro:{label:"Repaso Semana 26", lineas:[
      {en:"At the end of the day, when all is said and done,", es:"Al final del día, cuando todo está dicho y hecho,", pron:"at de end of de déi, uén ol is sed and dan,"},
      {en:"all things considered, in the grand scheme of things...", es:"considerando todo, en el gran esquema de las cosas...", pron:"ol zings cansíderd, in de grand skíim of zings..."}
    ]},
    coro:{label:"Repaso Semana 25", lineas:[
      {en:"Not to change the subject, but,", es:"No para cambiar de tema, pero,", pron:"nat tu chéinch de sábyect, bat,"},
      {en:"on a different note,", es:"en otro tema,", pron:"on a díferent nóut,"},
      {en:"before I forget,", es:"antes de que se me olvide,", pron:"bifór ái forguét,"},
      {en:"while we're on the topic...", es:"ya que estamos en el tema...", pron:"uáil uír on de tápic..."}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I want to rent a car, I'll let you know,", es:"Quiero alquilar un carro, te aviso,", pron:"ái uánt tu rent a car, áil let iú nóu,"},
      {en:"Driver's license and deposit, I'll keep you posted,", es:"Licencia de conducción y depósito, te mantengo al tanto,", pron:"dráivers láisens and dipósit, áil kíip iú póusted,"},
      {en:"I want to hire a carrier with a big fleet, stay tuned,", es:"Quiero contratar un transportista con una flota grande, estate atento,", pron:"ái uánt tu jáier a cárrier uid a big flíit, stéi tiúnd,"},
      {en:"A service agreement with a full tank, more to come!", es:"Un contrato de servicio con el tanque lleno, ¡se vienen más cosas!", pron:"a sérvis agríiment uid a ful tank, mor tu cam!"}
    ]}
  },
  { numero:28, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I really appreciate it,", es:"Realmente lo aprecio,", pron:"ái ríali apríishieit it,"},
      {en:"that means a lot,", es:"eso significa mucho,", pron:"dat míins a lat,"},
      {en:"you're too kind,", es:"eres muy amable,", pron:"iór tu káind,"},
      {en:"I owe you one!", es:"¡te debo una!", pron:"ái óu iú uán!"}
    ]},
    precoro:{label:"Repaso Semana 27", lineas:[
      {en:"I'll let you know, I'll keep you posted,", es:"Te voy a avisar, te voy a mantener al tanto,", pron:"áil let iú nóu, áil kíip iú póustid,"},
      {en:"stay tuned, more to come!", es:"mantente atento, ¡más viene en camino!", pron:"stéi tiúnd, mor tu cam!"}
    ]},
    coro:{label:"Repaso Semana 26", lineas:[
      {en:"At the end of the day,", es:"Al final del día,", pron:"at de end of de déi,"},
      {en:"when all is said and done,", es:"cuando todo está dicho y hecho,", pron:"uén ol is sed and dan,"},
      {en:"all things considered,", es:"considerando todo,", pron:"ol zings cansíderd,"},
      {en:"in the grand scheme of things...", es:"en el gran esquema de las cosas...", pron:"in de grand skíim of zings..."}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"This package is fragile, I really appreciate it,", es:"Este paquete es frágil, de verdad te lo agradezco,", pron:"dis páquech is frádyail, ái ríli aprísieit it,"},
      {en:"Handle with care, that means a lot,", es:"Manéjalo con cuidado, eso significa mucho,", pron:"jándol uid quer, dat míins a lot,"},
      {en:"This side up, do not stack, you're too kind,", es:"Este lado arriba, no apilar, eres muy amable,", pron:"dis sáid ap, du nat stak, iór tu káind,"},
      {en:"Leave it at the loading dock, I owe you one!", es:"Déjalo en el muelle de carga, ¡te debo una!", pron:"líiv it at de lóuding dok, ái óu iú uán!"}
    ]},
    puente:{label:"Repaso profundo — Semana 19", lineas:[
      {en:"I get what you're saying, makes total sense,", es:"Entiendo lo que estás diciendo, tiene total sentido,", pron:"ái guet uát iór séing, méiks tóutal sens,"},
      {en:"that clears it up, crystal clear!", es:"¡eso lo aclara, clarísimo!", pron:"dat clíars it ap, cristal clíar!"}
    ]}
  },
  { numero:29, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That's a good point,", es:"Ese es un buen punto,", pron:"dats a gud póint,"},
      {en:"you have a point there,", es:"tienes razón en eso,", pron:"iú jav a póint der,"},
      {en:"true, but,", es:"cierto, pero,", pron:"tru, bat,"},
      {en:"on the other hand...", es:"por otro lado...", pron:"on de áder jand..."}
    ]},
    precoro:{label:"Repaso Semana 28", lineas:[
      {en:"I really appreciate it, that means a lot,", es:"Realmente lo aprecio, eso significa mucho,", pron:"ái ríali apríishieit it, dat míins a lat,"},
      {en:"you're too kind, I owe you one!", es:"eres muy amable, ¡te debo una!", pron:"iór tu káind, ái óu iú uán!"}
    ]},
    coro:{label:"Repaso Semana 27", lineas:[
      {en:"I'll let you know,", es:"Te voy a avisar,", pron:"áil let iú nóu,"},
      {en:"I'll keep you posted,", es:"te voy a mantener al tanto,", pron:"áil kíip iú póustid,"},
      {en:"stay tuned,", es:"mantente atento,", pron:"stéi tiúnd,"},
      {en:"more to come!", es:"¡más viene en camino!", pron:"mor tu cam!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The optimal route goes north, that's a good point,", es:"La ruta óptima va hacia el norte, buen punto,", pron:"di óptimal ráut góus norz, dats a gud póint,"},
      {en:"Downtown first, you have a point there,", es:"Primero el centro, tienes razón en eso,", pron:"dáuntaun ferst, iú jav a póint der,"},
      {en:"Multiple stops, true, but,", es:"Varias paradas, cierto, pero,", pron:"máltipol stops, tru, bat,"},
      {en:"The outskirts are west, on the other hand...", es:"Las afueras están al oeste, por otro lado...", pron:"di áutskerts ar uest, on di áder jand..."}
    ]}
  },
  { numero:30, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What have you been up to?", es:"¿Qué has estado haciendo?", pron:"uát jav iú bin ap tu?"},
      {en:"Keeping busy, you know,", es:"Ocupado, ya sabes,", pron:"kíiping bísi, iú nóu,"},
      {en:"Same old, same old,", es:"Lo mismo de siempre,", pron:"séim óuld, séim óuld,"},
      {en:"Tell me about it!", es:"¡Ni me lo digas!", pron:"tel mi abáut it!"}
    ]},
    precoro:{label:"Repaso Semana 29", lineas:[
      {en:"That's a good point, you have a point there,", es:"Ese es un buen punto, tienes razón en eso,", pron:"dats a gud póint, iú jav a póint der,"},
      {en:"true, but, on the other hand...", es:"cierto, pero, por otro lado...", pron:"tru, bat, on de áder jand..."}
    ]},
    coro:{label:"Repaso Semana 28", lineas:[
      {en:"I really appreciate it,", es:"Realmente lo aprecio,", pron:"ái ríali apríishieit it,"},
      {en:"that means a lot,", es:"eso significa mucho,", pron:"dat míins a lat,"},
      {en:"you're too kind,", es:"eres muy amable,", pron:"iór tu káind,"},
      {en:"I owe you one!", es:"¡te debo una!", pron:"ái óu iú uán!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"What have you been up to? Great job so far,", es:"¿Qué has estado haciendo? Buen trabajo hasta ahora,", pron:"uát jav iú bin ap tu? gréit dyab sóu far,"},
      {en:"Keeping busy, you know, I'm staying consistent,", es:"Ocupado, ya sabes, me mantengo constante,", pron:"kíiping bísi, iú nóu, áim stéing consístent,"},
      {en:"Same old, same old, but keep pushing,", es:"Lo mismo de siempre, pero sigue empujando,", pron:"séim óuld, séim óuld, bat kíip púshing,"},
      {en:"See you in unit seven? Tell me about it!", es:"¿Nos vemos en la unidad siete? ¡Ni me lo digas!", pron:"síi iú in iúnit séven? tel mi abáut it!"}
    ]}
  },
  { numero:31, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I was wondering if,", es:"Me preguntaba si,", pron:"ái uás uándering if,"},
      {en:"would you mind if I,", es:"¿te molestaría si yo,", pron:"uúd iú máind if ái,"},
      {en:"if it's not too much trouble,", es:"si no es mucha molestia,", pron:"if its nat tu mach trábol,"},
      {en:"that would be great!", es:"¡eso sería genial!", pron:"dat uúd bi gréit!"}
    ]},
    precoro:{label:"Repaso Semana 30", lineas:[
      {en:"What have you been up to? Keeping busy, you know,", es:"¿Qué has estado haciendo? Ocupado, ya sabes,", pron:"uát jav iú bin ap tu? kíiping bísi, iú nóu,"},
      {en:"Same old, same old, tell me about it!", es:"Lo mismo de siempre, ¡ni me lo digas!", pron:"séim óuld, séim óuld, tel mi abáut it!"}
    ]},
    coro:{label:"Repaso Semana 29", lineas:[
      {en:"That's a good point,", es:"Ese es un buen punto,", pron:"dats a gud póint,"},
      {en:"you have a point there,", es:"tienes razón en eso,", pron:"iú jav a póint der,"},
      {en:"true, but,", es:"cierto, pero,", pron:"tru, bat,"},
      {en:"on the other hand...", es:"por otro lado...", pron:"on de áder jand..."}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I have a reservation, I was wondering if,", es:"Tengo una reservación, me preguntaba si,", pron:"ái jav a reservéishon, ái uás uándering if,"},
      {en:"Would you mind if I check in early,", es:"¿Te molestaría si hago el registro temprano,", pron:"uúd iú máind if ái chek in érli,"},
      {en:"A double room, if it's not too much trouble,", es:"Una habitación doble, si no es mucha molestia,", pron:"a dábol rum, if its nat tu mach trábol,"},
      {en:"The corporate rate? That would be great!", es:"¿La tarifa corporativa? ¡Eso sería genial!", pron:"de córporet réit? dat uúd bi gréit!"}
    ]}
  },
  { numero:32, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let me get back to you,", es:"Déjame responderte después,", pron:"let mi get bak tu iú,"},
      {en:"I'll look into it,", es:"Lo voy a revisar,", pron:"áil luk íntu it,"},
      {en:"I'll get right on it,", es:"Me pongo en eso ya mismo,", pron:"áil get ráit on it,"},
      {en:"consider it done!", es:"¡dalo por hecho!", pron:"consíder it dan!"}
    ]},
    precoro:{label:"Repaso Semana 31", lineas:[
      {en:"I was wondering if, would you mind if I,", es:"Me preguntaba si, ¿te molestaría si yo,", pron:"ái uás uándering if, uúd iú máind if ái,"},
      {en:"if it's not too much trouble, that would be great!", es:"si no es mucha molestia, ¡eso sería genial!", pron:"if its nat tu mach trábol, dat uúd bi gréit!"}
    ]},
    coro:{label:"Repaso Semana 30", lineas:[
      {en:"What have you been up to?", es:"¿Qué has estado haciendo?", pron:"uát jav iú bin ap tu?"},
      {en:"Keeping busy, you know,", es:"Ocupado, ya sabes,", pron:"kíiping bísi, iú nóu,"},
      {en:"Same old, same old,", es:"Lo mismo de siempre,", pron:"séim óuld, séim óuld,"},
      {en:"Tell me about it!", es:"¡Ni me lo digas!", pron:"tel mi abáut it!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I need a pillow in my room, let me get back to you,", es:"Necesito una almohada en mi habitación, te respondo después,", pron:"ái níid a pílou in mái rum, let mi get bak tu iú,"},
      {en:"The air conditioning? I'll look into it,", es:"¿El aire acondicionado? Lo voy a revisar,", pron:"di er condíshoning? áil luk íntu it,"},
      {en:"Room service and housekeeping, I'll get right on it,", es:"Servicio a la habitación y limpieza, me pongo en eso ya mismo,", pron:"rum sérvis and jáuskiiping, áil get ráit on it,"},
      {en:"Towels and laundry service? Consider it done!", es:"¿Toallas y servicio de lavandería? ¡Dalo por hecho!", pron:"táuels and lóndri sérvis? consíder it dan!"}
    ]}
  },
  { numero:33, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"It's up to you,", es:"Tú decides,", pron:"its ap tu iú,"},
      {en:"I'm easy either way,", es:"Me da igual cualquiera,", pron:"áim ísi íider uéi,"},
      {en:"whatever works best for you,", es:"lo que te funcione mejor,", pron:"uatéver uérks best for iú,"},
      {en:"your call!", es:"¡tú mandas!", pron:"iór col!"}
    ]},
    precoro:{label:"Repaso Semana 32", lineas:[
      {en:"Let me get back to you, I'll look into it,", es:"Déjame responderte después, lo voy a revisar,", pron:"let mi get bak tu iú, áil luk íntu it,"},
      {en:"I'll get right on it, consider it done!", es:"Me pongo en eso ya mismo, ¡dalo por hecho!", pron:"áil get ráit on it, consíder it dan!"}
    ]},
    coro:{label:"Repaso Semana 31", lineas:[
      {en:"I was wondering if,", es:"Me preguntaba si,", pron:"ái uás uándering if,"},
      {en:"would you mind if I,", es:"¿te molestaría si yo,", pron:"uúd iú máind if ái,"},
      {en:"if it's not too much trouble,", es:"si no es mucha molestia,", pron:"if its nat tu mach trábol,"},
      {en:"that would be great!", es:"¡eso sería genial!", pron:"dat uúd bi gréit!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Hospital or doctor? It's up to you,", es:"¿Hospital o médico? Tú decides,", pron:"jóspital or dóctor? its ap tu iú,"},
      {en:"Pain and fever, I'm easy either way,", es:"Dolor y fiebre, me da igual cualquiera,", pron:"péin and fíiver, áim ísi íider uéi,"},
      {en:"Travel insurance, whatever works best for you,", es:"Seguro de viaje, lo que te funcione mejor,", pron:"trável inshúrans, uatéver uérks best for iú,"},
      {en:"File a claim with your policy number, your call!", es:"Presenta el reclamo con tu número de póliza, ¡tú mandas!", pron:"fáil a cléim uid iór pólisi námber, iór col!"}
    ]}
  },
  { numero:34, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Correct me if I'm wrong,", es:"Corrígeme si me equivoco,", pron:"corréct mi if áim rong,"},
      {en:"if I remember correctly,", es:"si mal no recuerdo,", pron:"if ái rimémber coréctli,"},
      {en:"unless I'm mistaken,", es:"a menos que me equivoque,", pron:"anlés áim mistéiken,"},
      {en:"I stand corrected!", es:"¡Tienes razón, me equivoqué!", pron:"ái stand coréctid!"}
    ]},
    precoro:{label:"Repaso Semana 33", lineas:[
      {en:"It's up to you, I'm easy either way,", es:"Tú decides, me da igual cualquiera,", pron:"its ap tu iú, áim ísi íider uéi,"},
      {en:"whatever works best for you, your call!", es:"lo que te funcione mejor, ¡tú mandas!", pron:"uatéver uérks best for iú, iór col!"}
    ]},
    coro:{label:"Repaso Semana 32", lineas:[
      {en:"Let me get back to you,", es:"Déjame responderte después,", pron:"let mi get bak tu iú,"},
      {en:"I'll look into it,", es:"Lo voy a revisar,", pron:"áil luk íntu it,"},
      {en:"I'll get right on it,", es:"Me pongo en eso ya mismo,", pron:"áil get ráit on it,"},
      {en:"consider it done!", es:"¡dalo por hecho!", pron:"consíder it dan!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I have a headache, correct me if I'm wrong,", es:"Tengo dolor de cabeza, corrígeme si me equivoco,", pron:"ái jav a jédeik, corréct mi if áim rong,"},
      {en:"If I remember correctly, the dose is on the prescription,", es:"Si mal no recuerdo, la dosis está en la receta,", pron:"if ái rimémber coréctli, de dóus is on de prescrípshon,"},
      {en:"A cough, unless I'm mistaken,", es:"Una tos, a menos que me equivoque,", pron:"a cof, anlés áim mistéiken,"},
      {en:"Fit to travel? I stand corrected!", es:"¿Apto para viajar? ¡Tienes razón, me equivoqué!", pron:"fit tu trável? ái stand coréctid!"}
    ]}
  },
  { numero:35, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That's not what I meant,", es:"No es lo que quise decir,", pron:"dats nat uát ái ment,"},
      {en:"let me explain,", es:"déjame explicarte,", pron:"let mi expléin,"},
      {en:"what I'm trying to say is,", es:"lo que trato de decir es,", pron:"uát áim tráing tu séi is,"},
      {en:"does that clear it up?", es:"¿eso lo aclara?", pron:"das dat clíar it ap?"}
    ]},
    precoro:{label:"Repaso Semana 34", lineas:[
      {en:"Correct me if I'm wrong, if I remember correctly,", es:"Corrígeme si me equivoco, si mal no recuerdo,", pron:"corréct mi if áim rong, if ái rimémber coréctli,"},
      {en:"unless I'm mistaken, I stand corrected!", es:"a menos que me equivoque, ¡tienes razón, me equivoqué!", pron:"anlés áim mistéiken, ái stand coréctid!"}
    ]},
    coro:{label:"Repaso Semana 33", lineas:[
      {en:"It's up to you,", es:"Tú decides,", pron:"its ap tu iú,"},
      {en:"I'm easy either way,", es:"Me da igual cualquiera,", pron:"áim ísi íider uéi,"},
      {en:"whatever works best for you,", es:"lo que te funcione mejor,", pron:"uatéver uérks best for iú,"},
      {en:"your call!", es:"¡tú mandas!", pron:"iór col!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"It is rainy? That's not what I meant,", es:"¿Está lluvioso? No es lo que quise decir,", pron:"it is réini? dats nat uát ái ment,"},
      {en:"Sunny and hot, let me explain,", es:"Soleado y caliente, déjame explicarte,", pron:"sáni and jot, let mi expléin,"},
      {en:"What I'm trying to say is, check the forecast,", es:"Lo que trato de decir es, revisa el pronóstico,", pron:"uát áim tráing tu séi is, chek de fórcast,"},
      {en:"Summer or winter? Does that clear it up?", es:"¿Verano o invierno? ¿Eso lo aclara?", pron:"sámer or uínter? das dat clíar it ap?"}
    ]}
  },
  { numero:36, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm all ears,", es:"Soy todo oídos,", pron:"áim ol íars,"},
      {en:"go on,", es:"sigue,", pron:"góu on,"},
      {en:"and then what happened?", es:"¿y luego qué pasó?", pron:"and den uát jápend?"},
      {en:"no way!", es:"¡no puede ser!", pron:"nóu uéi!"}
    ]},
    precoro:{label:"Repaso Semana 35", lineas:[
      {en:"That's not what I meant, let me explain,", es:"No es lo que quise decir, déjame explicarte,", pron:"dats nat uát ái ment, let mi expléin,"},
      {en:"what I'm trying to say is, does that clear it up?", es:"lo que trato de decir es, ¿eso lo aclara?", pron:"uát áim tráing tu séi is, das dat clíar it ap?"}
    ]},
    coro:{label:"Repaso Semana 34", lineas:[
      {en:"Correct me if I'm wrong,", es:"Corrígeme si me equivoco,", pron:"corréct mi if áim rong,"},
      {en:"if I remember correctly,", es:"si mal no recuerdo,", pron:"if ái rimémber coréctli,"},
      {en:"unless I'm mistaken,", es:"a menos que me equivoque,", pron:"anlés áim mistéiken,"},
      {en:"I stand corrected!", es:"¡Tienes razón, me equivoqué!", pron:"ái stand coréctid!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Honestly, I'm all ears,", es:"Honestamente, soy todo oídos,", pron:"ónestli, áim ol íars,"},
      {en:"By all means, go on,", es:"Por supuesto, sigue,", pron:"bái ol míins, góu on,"},
      {en:"In fact, and then what happened?", es:"De hecho, ¿y luego qué pasó?", pron:"in fact, and den uát jápend?"},
      {en:"Just in time? No way!", es:"¿Justo a tiempo? ¡No puede ser!", pron:"dyast in táim? nóu uéi!"}
    ]}
  },
  { numero:37, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"It slipped my mind,", es:"Se me pasó,", pron:"it slipt mái máind,"},
      {en:"my bad,", es:"culpa mía,", pron:"mái bad,"},
      {en:"it won't happen again,", es:"no volverá a pasar,", pron:"it uóunt jápen aguén,"},
      {en:"no harm done!", es:"¡no pasó nada!", pron:"nóu jarm dan!"}
    ]},
    precoro:{label:"Repaso Semana 36", lineas:[
      {en:"I'm all ears, go on,", es:"Soy todo oídos, sigue,", pron:"áim ol íars, góu on,"},
      {en:"and then what happened? no way!", es:"¿y luego qué pasó? ¡no puede ser!", pron:"and den uát jápend? nóu uéi!"}
    ]},
    coro:{label:"Repaso Semana 35", lineas:[
      {en:"That's not what I meant,", es:"No es lo que quise decir,", pron:"dats nat uát ái ment,"},
      {en:"let me explain,", es:"déjame explicarte,", pron:"let mi expléin,"},
      {en:"what I'm trying to say is,", es:"lo que trato de decir es,", pron:"uát áim tráing tu séi is,"},
      {en:"does that clear it up?", es:"¿eso lo aclara?", pron:"das dat clíar it ap?"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Save the file? It slipped my mind,", es:"¿Guardar el archivo? Se me pasó,", pron:"séiv de fáil? it slipt mái máind,"},
      {en:"The spreadsheet is gone, my bad,", es:"La hoja de cálculo se perdió, culpa mía,", pron:"de spréadshit is gon, mái bad,"},
      {en:"I need to download the app, it won't happen again,", es:"Necesito descargar la aplicación, no volverá a pasar,", pron:"ái níid tu dáunloud di ap, it uóunt jápen aguén,"},
      {en:"It's in cloud storage, no harm done!", es:"Está en la nube, ¡no pasó nada!", pron:"its in cláud stórich, nóu jarm dan!"}
    ]}
  },
  { numero:38, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm torn between the two,", es:"No sé cuál de los dos elegir,", pron:"áim torn bituíin de tu,"},
      {en:"I can't make up my mind,", es:"No me puedo decidir,", pron:"ái cant méik ap mái máind,"},
      {en:"let me sleep on it,", es:"déjame consultarlo con la almohada,", pron:"let mi slíip on it,"},
      {en:"I'll decide tomorrow!", es:"¡Decido mañana!", pron:"áil disáid tumórou!"}
    ]},
    precoro:{label:"Repaso Semana 37", lineas:[
      {en:"It slipped my mind, my bad,", es:"Se me pasó, culpa mía,", pron:"it slipt mái máind, mái bad,"},
      {en:"it won't happen again, no harm done!", es:"no volverá a pasar, ¡no pasó nada!", pron:"it uóunt jápen aguén, nóu jarm dan!"}
    ]},
    coro:{label:"Repaso Semana 36", lineas:[
      {en:"I'm all ears,", es:"Soy todo oídos,", pron:"áim ol íars,"},
      {en:"go on,", es:"sigue,", pron:"góu on,"},
      {en:"and then what happened?", es:"¿y luego qué pasó?", pron:"and den uát jápend?"},
      {en:"no way!", es:"¡no puede ser!", pron:"nóu uéi!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Video conference or chat box? I'm torn between the two,", es:"¿Videoconferencia o chat? No sé cuál de los dos elegir,", pron:"vídio cónferens or chat box? áim torn bituíin de tu,"},
      {en:"Share screen or mute yourself? I can't make up my mind,", es:"¿Compartir pantalla o silenciarte? No me puedo decidir,", pron:"sher scríin or miút iorsélf? ái cant méik ap mái máind,"},
      {en:"The breakout room? Let me sleep on it,", es:"¿La sala de grupos? Déjame consultarlo con la almohada,", pron:"de bréikaut rum? let mi slíip on it,"},
      {en:"Log in with your username, I'll decide tomorrow!", es:"Inicia sesión con tu usuario, ¡decido mañana!", pron:"log in uid iór iúsernéim, áil disáid tumórou!"}
    ]}
  },
  { numero:39, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"How did it go?", es:"¿Cómo te fue?", pron:"jáu did it góu?"},
      {en:"better than expected,", es:"mejor de lo esperado,", pron:"béter dan expécted,"},
      {en:"it could have been worse,", es:"pudo haber sido peor,", pron:"it cud jav bin uérs,"},
      {en:"I'm glad it worked out!", es:"¡Me alegra que haya salido bien!", pron:"áim glad it uérkt áut!"}
    ]},
    precoro:{label:"Repaso Semana 38", lineas:[
      {en:"I'm torn between the two, I can't make up my mind,", es:"No sé cuál de los dos elegir, no me puedo decidir,", pron:"áim torn bituíin de tu, ái cant méik ap mái máind,"},
      {en:"let me sleep on it, I'll decide tomorrow!", es:"déjame consultarlo con la almohada, ¡decido mañana!", pron:"let mi slíip on it, áil disáid tumórou!"}
    ]},
    coro:{label:"Repaso Semana 37", lineas:[
      {en:"It slipped my mind,", es:"Se me pasó,", pron:"it slipt mái máind,"},
      {en:"my bad,", es:"culpa mía,", pron:"mái bad,"},
      {en:"it won't happen again,", es:"no volverá a pasar,", pron:"it uóunt jápen aguén,"},
      {en:"no harm done!", es:"¡no pasó nada!", pron:"nóu jarm dan!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The campaign? How did it go?", es:"¿La campaña? ¿Cómo te fue?", pron:"de campéin? jáu did it góu?"},
      {en:"More followers, better than expected,", es:"Más seguidores, mejor de lo esperado,", pron:"mor fólouers, béter dan expécted,"},
      {en:"A few comments, it could have been worse,", es:"Unos pocos comentarios, pudo haber sido peor,", pron:"a fiú cóments, it cud jav bin uérs,"},
      {en:"Post, like and share, I'm glad it worked out!", es:"Publica, dale me gusta y comparte, ¡me alegra que haya salido bien!", pron:"póust, láik and sher, áim glad it uérkt áut!"}
    ]}
  },
  { numero:40, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I didn't see that coming,", es:"No lo vi venir,", pron:"ái dídnt síi dat cáming,"},
      {en:"what a surprise,", es:"qué sorpresa,", pron:"uát a serpráis,"},
      {en:"you're kidding me,", es:"me estás tomando el pelo,", pron:"iór kíding mi,"},
      {en:"I'm speechless!", es:"¡Me dejaste sin palabras!", pron:"áim spíichles!"}
    ]},
    precoro:{label:"Repaso Semana 39", lineas:[
      {en:"How did it go? better than expected,", es:"¿Cómo te fue? mejor de lo esperado,", pron:"jáu did it góu? béter dan expécted,"},
      {en:"it could have been worse, I'm glad it worked out!", es:"pudo haber sido peor, ¡me alegra que haya salido bien!", pron:"it cud jav bin uérs, áim glad it uérkt áut!"}
    ]},
    coro:{label:"Repaso Semana 38", lineas:[
      {en:"I'm torn between the two,", es:"No sé cuál de los dos elegir,", pron:"áim torn bituíin de tu,"},
      {en:"I can't make up my mind,", es:"No me puedo decidir,", pron:"ái cant méik ap mái máind,"},
      {en:"let me sleep on it,", es:"déjame consultarlo con la almohada,", pron:"let mi slíip on it,"},
      {en:"I'll decide tomorrow!", es:"¡Decido mañana!", pron:"áil disáid tumórou!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"A new notification? I didn't see that coming,", es:"¿Una notificación nueva? No lo vi venir,", pron:"a niú notifiquéishon? ái dídnt síi dat cáming,"},
      {en:"I need to update the settings, what a surprise,", es:"Necesito actualizar la configuración, qué sorpresa,", pron:"ái níid tu apdéit de sétings, uát a serpráis,"},
      {en:"The dashboard is empty? You're kidding me,", es:"¿El panel está vacío? Me estás tomando el pelo,", pron:"de dáshbord is émpti? iór kíding mi,"},
      {en:"Generate a report now, I'm speechless!", es:"Genera un informe ya, ¡me dejaste sin palabras!", pron:"dyénereit a ripórt náu, áim spíichles!"}
    ]}
  },
  { numero:41, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"It was great catching up,", es:"Qué bueno ponernos al día,", pron:"it uás gréit káching ap,"},
      {en:"we should do this more often,", es:"deberíamos hacerlo más seguido,", pron:"uí shud du dis mor ófen,"},
      {en:"let's not wait so long,", es:"no esperemos tanto,", pron:"lets nat uéit sóu long,"},
      {en:"talk soon!", es:"¡hablamos pronto!", pron:"tok súun!"}
    ]},
    precoro:{label:"Repaso Semana 40", lineas:[
      {en:"I didn't see that coming, what a surprise,", es:"No lo vi venir, qué sorpresa,", pron:"ái dídnt síi dat cáming, uát a serpráis,"},
      {en:"you're kidding me, I'm speechless!", es:"me estás tomando el pelo, ¡me dejaste sin palabras!", pron:"iór kíding mi, áim spíichles!"}
    ]},
    coro:{label:"Repaso Semana 39", lineas:[
      {en:"How did it go?", es:"¿Cómo te fue?", pron:"jáu did it góu?"},
      {en:"better than expected,", es:"mejor de lo esperado,", pron:"béter dan expécted,"},
      {en:"it could have been worse,", es:"pudo haber sido peor,", pron:"it cud jav bin uérs,"},
      {en:"I'm glad it worked out!", es:"¡Me alegra que haya salido bien!", pron:"áim glad it uérkt áut!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"It's not working? Restart it, it was great catching up,", es:"¿No funciona? Reinícialo, qué bueno ponernos al día,", pron:"its nat uérking? ristárt it, it uás gréit káching ap,"},
      {en:"Technical support fixed the bug, we should do this more often,", es:"Soporte técnico arregló la falla, deberíamos hacerlo más seguido,", pron:"téknical supórt fixt de bag, uí shud du dis mor ófen,"},
      {en:"Send a support ticket, let's not wait so long,", es:"Envía un ticket de soporte, no esperemos tanto,", pron:"send a supórt tíket, lets nat uéit sóu long,"},
      {en:"This is working now, talk soon!", es:"Esto ya funciona, ¡hablamos pronto!", pron:"dis is uérking náu, tok súun!"}
    ]}
  },
  { numero:42, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"You've come a long way,", es:"Has recorrido un largo camino,", pron:"iúv cam a long uéi,"},
      {en:"look how far you've come,", es:"mira cuánto has avanzado,", pron:"luk jáu far iúv cam,"},
      {en:"you should be proud,", es:"deberías estar orgulloso,", pron:"iú shud bi práud,"},
      {en:"this is just the beginning!", es:"¡esto es solo el comienzo!", pron:"dis is yast de biguíning!"}
    ]},
    precoro:{label:"Repaso Semana 41", lineas:[
      {en:"It was great catching up, we should do this more often,", es:"Qué bueno ponernos al día, deberíamos hacerlo más seguido,", pron:"it uás gréit káching ap, uí shud du dis mor ófen,"},
      {en:"let's not wait so long, talk soon!", es:"no esperemos tanto, ¡hablamos pronto!", pron:"lets nat uéit sóu long, tok súun!"}
    ]},
    coro:{label:"Repaso Semana 40", lineas:[
      {en:"I didn't see that coming,", es:"No lo vi venir,", pron:"ái dídnt síi dat cáming,"},
      {en:"what a surprise,", es:"qué sorpresa,", pron:"uát a serpráis,"},
      {en:"you're kidding me,", es:"me estás tomando el pelo,", pron:"iór kíding mi,"},
      {en:"I'm speechless!", es:"¡Me dejaste sin palabras!", pron:"áim spíichles!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"You've come a long way, almost half done,", es:"Has avanzado mucho, ya casi a la mitad,", pron:"iúv cam a long uéi, ólmoust jaf dan,"},
      {en:"Look how far you've come, well done,", es:"Mira todo lo que has avanzado, bien hecho,", pron:"luk jáu far iúv cam, uél dan,"},
      {en:"You should be proud of your progress,", es:"Deberías estar orgulloso de tu progreso,", pron:"iú shud bi práud av iór prógres,"},
      {en:"Keep going, this is just the beginning!", es:"Sigue así, ¡esto es solo el comienzo!", pron:"kíip góing, dis is dyast de biguíning!"}
    ]}
  }
];

const FIJAS_FASE3 = {
  precoro: [
    {en:"Idioms color everything I say,", es:"Los modismos le dan color a todo lo que digo,", pron:"ídioms cálor évrizin ái séi,"},
    {en:"A native touch, come what may,", es:"Un toque nativo, pase lo que pase,", pron:"a néitiv tach, cam uát méi,"}
  ],
  pedal: [
    {en:"These expressions bring me alive,", es:"Estas expresiones me hacen cobrar vida,", pron:"díis expréshions bring mi aláiv,"},
    {en:"Idiomatic, and I thrive!", es:"¡Idiomático, y prospero!", pron:"idiomátic, and ái zráiv!"}
  ],
  coro: [
    {en:"It's raining cats and dogs,", es:"Está lloviendo a cántaros,", pron:"its réining cats and dogs,"},
    {en:"piece of cake,", es:"pan comido,", pron:"píis of kéik,"},
    {en:"break a leg,", es:"mucha suerte,", pron:"bréik a leg,"},
    {en:"once in a blue moon!", es:"¡una vez cada muerte de obispo!", pron:"uáns in a blú mun!"}
  ],
  outro: [
    {en:"See you next week, idiom friend,", es:"Nos vemos la próxima semana, amigo de los modismos,", pron:"síi iú next uíik, ídiom frend,"},
    {en:"These expressions never end,", es:"Estas expresiones nunca terminan.", pron:"díis expréshions néver end,"}
  ]
};

const FASE3_SEMANAS = [
  { numero:1, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"It's a piece of cake,", es:"Es pan comido,", pron:"its a píis of kéik,"},
      {en:"break a leg,", es:"mucha suerte,", pron:"bréik a leg,"},
      {en:"under the weather,", es:"medio enfermo,", pron:"ánder de uéder,"},
      {en:"cost an arm and a leg,", es:"cuesta un ojo de la cara,", pron:"cost an arm and a leg,"},
      {en:"once in a blue moon!", es:"¡una vez cada muerte de obispo!", pron:"uáns in a blú mun!"}
    ]},
    precoro:{label:"Repaso Fase 2, Semana 42", lineas:[
      {en:"You've come a long way, look how far you've come,", es:"Has recorrido un largo camino, mira cuánto has avanzado,", pron:"iúv cam a long uéi, luk jáu far iúv cam,"},
      {en:"you should be proud, this is just the beginning!", es:"deberías estar orgulloso, ¡esto es solo el comienzo!", pron:"iú shud bi práud, dis is yast de biguíning!"}
    ]},
    coro:{label:"Repaso Fase 2, Semana 41", lineas:[
      {en:"It was great catching up,", es:"Qué bueno ponernos al día,", pron:"it uás gréit káching ap,"},
      {en:"we should do this more often,", es:"deberíamos hacerlo más seguido,", pron:"uí shud du dis mor ófen,"},
      {en:"let's not wait so long,", es:"no esperemos tanto,", pron:"lets nat uéit sóu long,"},
      {en:"talk soon!", es:"¡hablamos pronto!", pron:"tok súun!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"As a matter of fact, the exam was a piece of cake,", es:"De hecho, el examen fue pan comido,", pron:"as a máter av fact, di exám uás a píis av quéik,"},
      {en:"Break a leg! I'm a little under the weather,", es:"¡Mucha suerte! Estoy un poco enfermo,", pron:"bréik a leg! áim a lítol ánder de uéder,"},
      {en:"To sum up, it cost an arm and a leg,", es:"En resumen, costó un ojo de la cara,", pron:"tu sam ap, it cost an arm and a leg,"},
      {en:"At the end of the day, it happens once in a blue moon!", es:"Al fin y al cabo, ¡pasa muy de vez en cuando!", pron:"at di end av de déi, it jápens uáns in a blu múun!"}
    ]}
  },
  { numero:2, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Spill the beans,", es:"Suelta la sopa,", pron:"spil de bíins,"},
      {en:"hit the sack,", es:"irse a dormir,", pron:"jit de sak,"},
      {en:"on the ball,", es:"despierto y atento,", pron:"on de bol,"},
      {en:"a piece of the pie!", es:"¡una parte del pastel!", pron:"a píis of de pái!"}
    ]},
    precoro:{label:"Repaso Semana 1", lineas:[
      {en:"It's a piece of cake, break a leg, under the weather,", es:"Es pan comido, mucha suerte, medio enfermo,", pron:"its a píis of kéik, bréik a leg, ánder de uéder,"},
      {en:"cost an arm and a leg, once in a blue moon!", es:"cuesta un ojo de la cara, ¡una vez cada muerte de obispo!", pron:"cost an arm and a leg, uáns in a blú mun!"}
    ]},
    coro:{label:"Repaso Fase 2, Semana 42", lineas:[
      {en:"You've come a long way,", es:"Has recorrido un largo camino,", pron:"iúv cam a long uéi,"},
      {en:"look how far you've come,", es:"mira cuánto has avanzado,", pron:"luk jáu far iúv cam,"},
      {en:"you should be proud,", es:"deberías estar orgulloso,", pron:"iú shud bi práud,"},
      {en:"this is just the beginning!", es:"¡esto es solo el comienzo!", pron:"dis is yast de biguíning!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Spill the beans: what's the interest rate on the loan?", es:"Suéltalo ya: ¿cuál es la tasa de interés del préstamo?", pron:"spil de bíins: uáts di íntrest réit on de lóun?"},
      {en:"My financial advisor is on the ball,", es:"Mi asesor financiero está muy pendiente,", pron:"mái fainánshal adváisor is on de bol,"},
      {en:"I want to invest and get a piece of the pie,", es:"Quiero invertir y tener una parte del pastel,", pron:"ái uánt tu invést and get a píis av de pái,"},
      {en:"I need to file taxes, then hit the sack!", es:"Necesito declarar impuestos, ¡y luego a dormir!", pron:"ái níid tu fáil táxes, den jit de sak!"}
    ]}
  },
  { numero:3, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let the cat out of the bag,", es:"Revelar el secreto sin querer,", pron:"let de cat áut of de bag,"},
      {en:"barking up the wrong tree,", es:"equivocarse de camino,", pron:"bárking ap de rong tríi,"},
      {en:"the ball is in your court,", es:"la decisión es tuya,", pron:"de bol is in iór cort,"},
      {en:"burn the midnight oil!", es:"¡trabajar hasta muy tarde!", pron:"bern de mídnáit óil!"}
    ]},
    precoro:{label:"Repaso Semana 2", lineas:[
      {en:"Spill the beans, hit the sack,", es:"Suelta la sopa, irse a dormir,", pron:"spil de bíins, jit de sak,"},
      {en:"on the ball, a piece of the pie!", es:"despierto y atento, ¡una parte del pastel!", pron:"on de bol, a píis of de pái!"}
    ]},
    coro:{label:"Repaso Semana 1", lineas:[
      {en:"It's a piece of cake,", es:"Es pan comido,", pron:"its a píis of kéik,"},
      {en:"break a leg,", es:"mucha suerte,", pron:"bréik a leg,"},
      {en:"under the weather,", es:"medio enfermo,", pron:"ánder de uéder,"},
      {en:"cost an arm and a leg,", es:"cuesta un ojo de la cara,", pron:"cost an arm and a leg,"},
      {en:"once in a blue moon!", es:"¡una vez cada muerte de obispo!", pron:"uáns in a blú mun!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Don't let the cat out of the bag at the negotiation table,", es:"No reveles el secreto en la mesa de negociación,", pron:"dont let de cat áut av de bag at de nigoushiéishon téibol,"},
      {en:"You're barking up the wrong tree, let's find a win-win situation,", es:"Estás buscando en el lugar equivocado, busquemos que todos ganemos,", pron:"iór bárking ap de rong trii, lets fáind a uín-uín sichuéishon,"},
      {en:"Here's my counterproposal, the ball is in your court,", es:"Aquí está mi contrapropuesta, la pelota está en tu cancha,", pron:"jíars mái cáunterpropousal, de bol is in iór cort,"},
      {en:"I'm willing to compromise, even if I burn the midnight oil!", es:"Estoy dispuesto a ceder, ¡aunque tenga que trasnochar!", pron:"áim uíling tu cómpromais, íiven if ái bern de mídnait óil!"}
    ]}
  },
  { numero:4, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Kill two birds with one stone,", es:"Matar dos pájaros de un tiro,", pron:"kil tú berds uid uán stóun,"},
      {en:"blessing in disguise,", es:"suerte disfrazada de mala,", pron:"blésing in disgáis,"},
      {en:"beat around the bush,", es:"andarse con rodeos,", pron:"bíit aráund de bush,"},
      {en:"add fuel to the fire!", es:"¡echarle leña al fuego!", pron:"ad fiúel tu de fáier!"}
    ]},
    precoro:{label:"Repaso Semana 3", lineas:[
      {en:"Let the cat out of the bag, barking up the wrong tree,", es:"Revelar el secreto sin querer, equivocarse de camino,", pron:"let de cat áut of de bag, bárking ap de rong tríi,"},
      {en:"the ball is in your court, burn the midnight oil!", es:"la decisión es tuya, ¡trabajar hasta muy tarde!", pron:"de bol is in iór cort, bern de mídnáit óil!"}
    ]},
    coro:{label:"Repaso Semana 2", lineas:[
      {en:"Spill the beans,", es:"Suelta la sopa,", pron:"spil de bíins,"},
      {en:"hit the sack,", es:"irse a dormir,", pron:"jit de sak,"},
      {en:"on the ball,", es:"despierto y atento,", pron:"on de bol,"},
      {en:"a piece of the pie!", es:"¡una parte del pastel!", pron:"a píis of de pái!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Let's find common ground and kill two birds with one stone,", es:"Busquemos un punto en común y matemos dos pájaros de un tiro,", pron:"lets fáind cómon gráund and kil tu berds uid uán stóun,"},
      {en:"This conflict was a blessing in disguise,", es:"Este conflicto fue una bendición disfrazada,", pron:"dis cónflict uás a bléssing in disgáis,"},
      {en:"Don't beat around the bush, let's clarify,", es:"No te andes con rodeos, aclaremos,", pron:"dont bíit aráund de bush, lets cláerifai,"},
      {en:"A respectful tone, don't add fuel to the fire!", es:"Un tono respetuoso, ¡no le eches leña al fuego!", pron:"a rispéctful tóun, dont ad fiúel tu de fáier!"}
    ]}
  },
  { numero:5, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Cry over spilled milk,", es:"Llorar por lo que ya no tiene remedio,", pron:"crái óver spild milk,"},
      {en:"caught red-handed,", es:"atrapado con las manos en la masa,", pron:"cot red-jánded,"},
      {en:"out of the blue,", es:"de la nada,", pron:"áut of de blú,"},
      {en:"sit on the fence!", es:"¡quedarse indeciso!", pron:"sit on de fens!"}
    ]},
    precoro:{label:"Repaso Semana 4", lineas:[
      {en:"Kill two birds with one stone, blessing in disguise,", es:"Matar dos pájaros de un tiro, suerte disfrazada de mala,", pron:"kil tú berds uid uán stóun, blésing in disgáis,"},
      {en:"beat around the bush, add fuel to the fire!", es:"andarse con rodeos, ¡echarle leña al fuego!", pron:"bíit aráund de bush, ad fiúel tu de fáier!"}
    ]},
    coro:{label:"Repaso Semana 3", lineas:[
      {en:"Let the cat out of the bag,", es:"Revelar el secreto sin querer,", pron:"let de cat áut of de bag,"},
      {en:"barking up the wrong tree,", es:"equivocarse de camino,", pron:"bárking ap de rong tríi,"},
      {en:"the ball is in your court,", es:"la decisión es tuya,", pron:"de bol is in iór cort,"},
      {en:"burn the midnight oil!", es:"¡trabajar hasta muy tarde!", pron:"bern de mídnáit óil!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I am writing to apologize, no use crying over spilled milk,", es:"Le escribo para disculparme, no sirve llorar sobre la leche derramada,", pron:"ái am ráiting tu apólodyais, nóu iús cráing óuver spild milk,"},
      {en:"Check the subject line, don't get caught red-handed,", es:"Revisa el asunto, que no te pillen con las manos en la masa,", pron:"chek de sábyect láin, dont get cot red-jánded,"},
      {en:"The attachment arrived out of the blue,", es:"El archivo adjunto llegó de la nada,", pron:"di atáchment aráivd áut av de blu,"},
      {en:"Proofread the draft, don't sit on the fence!", es:"Revisa el borrador, ¡no te quedes indeciso!", pron:"prúufriid de draft, dont sit on de fens!"}
    ]},
    puente:{label:"Repaso profundo — Semana Anterior (Fase 2, Sem. 42)", lineas:[
      {en:"You've come a long way, look how far you've come,", es:"Has recorrido un largo camino, mira cuánto has avanzado,", pron:"iúv cam a long uéi, luk jáu far iúv cam,"},
      {en:"this is just the beginning!", es:"¡esto es solo el comienzo!", pron:"dis is yast de biguíning!"}
    ]}
  },
  { numero:6, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Bite off more than you can chew,", es:"Abarcar más de lo que puedes,", pron:"báit of mor dan iú can chú,"},
      {en:"through thick and thin,", es:"en las buenas y en las malas,", pron:"zru zik and zin,"},
      {en:"the last straw,", es:"la gota que rebalsa el vaso,", pron:"de last stro,"},
      {en:"jump the gun!", es:"¡adelantarse antes de tiempo!", pron:"yamp de gan!"}
    ]},
    precoro:{label:"Repaso Semana 5", lineas:[
      {en:"Cry over spilled milk, caught red-handed,", es:"Llorar por lo que ya no tiene remedio, atrapado con las manos en la masa,", pron:"crái óver spild milk, cot red-jánded,"},
      {en:"out of the blue, sit on the fence!", es:"de la nada, ¡quedarse indeciso!", pron:"áut of de blú, sit on de fens!"}
    ]},
    coro:{label:"Repaso Semana 4", lineas:[
      {en:"Kill two birds with one stone,", es:"Matar dos pájaros de un tiro,", pron:"kil tú berds uid uán stóun,"},
      {en:"blessing in disguise,", es:"suerte disfrazada de mala,", pron:"blésing in disgáis,"},
      {en:"beat around the bush,", es:"andarse con rodeos,", pron:"bíit aráund de bush,"},
      {en:"add fuel to the fire!", es:"¡echarle leña al fuego!", pron:"ad fiúel tu de fáier!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Don't bite off more than you can chew with this scope,", es:"No abarques más de lo que puedes con este alcance,", pron:"dont báit of mor dan iú can chu uid dis scóup,"},
      {en:"Our team stays together through thick and thin,", es:"Nuestro equipo se mantiene unido en las buenas y en las malas,", pron:"áuer tíim stéis tugéder zru zik and zin,"},
      {en:"A new defect? That's the last straw,", es:"¿Otro defecto? Esa es la gota que rebosó el vaso,", pron:"a niú díifect? dats de last stro,"},
      {en:"This meets the standards, but don't jump the gun!", es:"Esto cumple los estándares, ¡pero no te adelantes!", pron:"dis míits de stándards, bat dont dyamp de gan!"}
    ]}
  },
  { numero:7, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Get cold feet,", es:"Acobardarse de último momento,", pron:"guet cóuld fíit,"},
      {en:"it's not rocket science,", es:"no es ciencia espacial,", pron:"its nat rácket sáiens,"},
      {en:"miss the boat,", es:"perder la oportunidad,", pron:"mis de bóut,"},
      {en:"go the extra mile!", es:"¡dar un esfuerzo extra!", pron:"góu de éxtra máil!"}
    ]},
    precoro:{label:"Repaso Semana 6", lineas:[
      {en:"Bite off more than you can chew, through thick and thin,", es:"Abarcar más de lo que puedes, en las buenas y en las malas,", pron:"báit of mor dan iú can chú, zru zik and zin,"},
      {en:"the last straw, jump the gun!", es:"la gota que rebalsa el vaso, ¡adelantarse antes de tiempo!", pron:"de last stro, yamp de gan!"}
    ]},
    coro:{label:"Repaso Semana 5", lineas:[
      {en:"Cry over spilled milk,", es:"Llorar por lo que ya no tiene remedio,", pron:"crái óver spild milk,"},
      {en:"caught red-handed,", es:"atrapado con las manos en la masa,", pron:"cot red-jánded,"},
      {en:"out of the blue,", es:"de la nada,", pron:"áut of de blú,"},
      {en:"sit on the fence!", es:"¡quedarse indeciso!", pron:"sit on de fens!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Don't get cold feet with a complaint,", es:"No te acobardes con una queja,", pron:"dont get cóuld fíit uid a compléint,"},
      {en:"Empathy is not rocket science,", es:"La empatía no es ciencia espacial,", pron:"émpazi is nat róket sáiens,"},
      {en:"Answer the survey or you'll miss the boat,", es:"Responde la encuesta o perderás la oportunidad,", pron:"ánser de sérvei or iúl mis de bóut,"},
      {en:"We will make this right and go the extra mile!", es:"Lo vamos a arreglar y a dar un paso más!", pron:"uí uíl méik dis ráit and góu di éxtra máil!"}
    ]}
  },
  { numero:8, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Hit the nail on the head,", es:"Darle en el clavo,", pron:"jit de néil on de jed,"},
      {en:"a dime a dozen,", es:"algo muy común,", pron:"a dáim a dázen,"},
      {en:"go back to square one,", es:"volver al punto de partida,", pron:"góu bak tu scuér uán,"},
      {en:"speak of the devil!", es:"¡hablando del rey de Roma!", pron:"spíik of de dévil!"}
    ]},
    precoro:{label:"Repaso Semana 7", lineas:[
      {en:"Get cold feet, it's not rocket science,", es:"Acobardarse de último momento, no es ciencia espacial,", pron:"guet cóuld fíit, its nat rácket sáiens,"},
      {en:"miss the boat, go the extra mile!", es:"perder la oportunidad, ¡dar un esfuerzo extra!", pron:"mis de bóut, góu de éxtra máil!"}
    ]},
    coro:{label:"Repaso Semana 6", lineas:[
      {en:"Bite off more than you can chew,", es:"Abarcar más de lo que puedes,", pron:"báit of mor dan iú can chú,"},
      {en:"through thick and thin,", es:"en las buenas y en las malas,", pron:"zru zik and zin,"},
      {en:"the last straw,", es:"la gota que rebalsa el vaso,", pron:"de last stro,"},
      {en:"jump the gun!", es:"¡adelantarse antes de tiempo!", pron:"yamp de gan!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The spokesperson hit the nail on the head,", es:"El vocero dio en el clavo,", pron:"de spóuksperson jit de néil on de jed,"},
      {en:"Excuses are a dime a dozen, we need a contingency plan,", es:"Las excusas sobran, necesitamos un plan de contingencia,", pron:"exquiúses ar a dáim a dásen, uí níid a contíndyensi plan,"},
      {en:"If it fails, go back to square one,", es:"Si falla, volvemos a empezar de cero,", pron:"if it féils, góu bak tu scuér uán,"},
      {en:"We are committed to sustainability, speak of the devil!", es:"Estamos comprometidos con la sostenibilidad, ¡hablando del rey de Roma!", pron:"uí ar comíted tu sosteinabíliti, spíik av de dévil!"}
    ]}
  },
  { numero:9, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Every cloud has a silver lining,", es:"No hay mal que por bien no venga,", pron:"évri cláud jas a sílver láining,"},
      {en:"actions speak louder than words,", es:"las acciones hablan más que las palabras,", pron:"ákshions spíik láuder dan uords,"},
      {en:"birds of a feather flock together,", es:"dios los cría y ellos se juntan,", pron:"berds of a féder flak tugéder,"},
      {en:"don't judge a book by its cover!", es:"¡no juzgues un libro por su portada!", pron:"dont yach a buk bái its cáver!"}
    ]},
    precoro:{label:"Repaso Semana 8", lineas:[
      {en:"Hit the nail on the head, a dime a dozen,", es:"Darle en el clavo, algo muy común,", pron:"jit de néil on de jed, a dáim a dázen,"},
      {en:"go back to square one, speak of the devil!", es:"volver al punto de partida, ¡hablando del rey de Roma!", pron:"góu bak tu scuér uán, spíik of de dévil!"}
    ]},
    coro:{label:"Repaso Semana 7", lineas:[
      {en:"Get cold feet,", es:"Acobardarse de último momento,", pron:"guet cóuld fíit,"},
      {en:"it's not rocket science,", es:"no es ciencia espacial,", pron:"its nat rácket sáiens,"},
      {en:"miss the boat,", es:"perder la oportunidad,", pron:"mis de bóut,"},
      {en:"go the extra mile!", es:"¡dar un esfuerzo extra!", pron:"góu de éxtra máil!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"To put it simply, every cloud has a silver lining,", es:"Para decirlo simple, no hay mal que por bien no venga,", pron:"tu put it símpli, évri cláud jas a sílver láining,"},
      {en:"First and foremost, actions speak louder than words,", es:"Ante todo, las acciones dicen más que las palabras,", pron:"ferst and fórmoust, ákshons spíik láuder dan uérds,"},
      {en:"Generally speaking, birds of a feather flock together,", es:"En general, dime con quién andas y te diré quién eres,", pron:"dyénerali spíiking, berds av a féder flok tugéder,"},
      {en:"Last but not least, don't judge a book by its cover!", es:"Por último, pero no menos importante, ¡no juzgues un libro por su portada!", pron:"last bat nat líist, dont dyadch a buk bái its cáver!"}
    ]},
    puente:{label:"Repaso profundo — Semana 3", lineas:[
      {en:"The ball is in your court now,", es:"La decisión es tuya ahora,", pron:"de bol is in iór cort náu,"},
      {en:"don't burn the midnight oil for this!", es:"¡no trabajes hasta tan tarde por esto!", pron:"dont bern de mídnáit óil for dis!"}
    ]}
  },
  { numero:10, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"When pigs fly,", es:"Cuando las ranas críen pelo,", pron:"uén pigs flái,"},
      {en:"a blessing and a curse,", es:"algo bueno y malo a la vez,", pron:"a blésing and a cers,"},
      {en:"the elephant in the room,", es:"el tema evidente que nadie menciona,", pron:"de élefant in de rum,"},
      {en:"cut corners!", es:"¡tomar atajos, hacer las cosas mal!", pron:"cat córners!"}
    ]},
    precoro:{label:"Repaso Semana 9", lineas:[
      {en:"Every cloud has a silver lining, actions speak louder than words,", es:"No hay mal que por bien no venga, las acciones hablan más que las palabras,", pron:"évri cláud jas a sílver láining, ákshions spíik láuder dan uords,"},
      {en:"birds of a feather flock together, don't judge a book by its cover!", es:"dios los cría y ellos se juntan, ¡no juzgues un libro por su portada!", pron:"berds of a féder flak tugéder, dont yach a buk bái its cáver!"}
    ]},
    coro:{label:"Repaso Semana 8", lineas:[
      {en:"Hit the nail on the head,", es:"Darle en el clavo,", pron:"jit de néil on de jed,"},
      {en:"a dime a dozen,", es:"algo muy común,", pron:"a dáim a dázen,"},
      {en:"go back to square one,", es:"volver al punto de partida,", pron:"góu bak tu scuér uán,"},
      {en:"speak of the devil!", es:"¡hablando del rey de Roma!", pron:"spíik of de dévil!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"No bill of lading? We'll ship when pigs fly,", es:"¿Sin conocimiento de embarque? Enviaremos cuando las ranas críen pelo,", pron:"nóu bil av léiding? uíl ship uén pigs flái,"},
      {en:"Automation is a blessing and a curse,", es:"La automatización es una bendición y una maldición,", pron:"otoméishon is a bléssing and a kers,"},
      {en:"The downtime is the elephant in the room,", es:"El tiempo muerto es el tema que nadie quiere tocar,", pron:"de dáuntaim is di élefant in de rum,"},
      {en:"The production line is running, don't cut corners!", es:"La línea de producción está funcionando, ¡no hagas las cosas a medias!", pron:"de prodákshon láin is ráning, dont cat córners!"}
    ]}
  },
  { numero:11, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"A taste of your own medicine,", es:"Probar tu propia medicina,", pron:"a téist of iór óun médisin,"},
      {en:"a wolf in sheep's clothing,", es:"un lobo con piel de oveja,", pron:"a uulf in shíips clóuzing,"},
      {en:"put all your eggs in one basket,", es:"apostar todo a una sola opción,", pron:"put ol iór egs in uán básket,"},
      {en:"go with the flow!", es:"¡dejarse llevar!", pron:"góu uid de flóu!"}
    ]},
    precoro:{label:"Repaso Semana 10", lineas:[
      {en:"When pigs fly, a blessing and a curse,", es:"Cuando las ranas críen pelo, algo bueno y malo a la vez,", pron:"uén pigs flái, a blésing and a cers,"},
      {en:"the elephant in the room, cut corners!", es:"el tema evidente que nadie menciona, ¡tomar atajos, hacer las cosas mal!", pron:"de élefant in de rum, cat córners!"}
    ]},
    coro:{label:"Repaso Semana 9", lineas:[
      {en:"Every cloud has a silver lining,", es:"No hay mal que por bien no venga,", pron:"évri cláud jas a sílver láining,"},
      {en:"actions speak louder than words,", es:"las acciones hablan más que las palabras,", pron:"ákshions spíik láuder dan uords,"},
      {en:"birds of a feather flock together,", es:"dios los cría y ellos se juntan,", pron:"berds of a féder flak tugéder,"},
      {en:"don't judge a book by its cover!", es:"¡no juzgues un libro por su portada!", pron:"dont yach a buk bái its cáver!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"In the performance review he got a taste of his own medicine,", es:"En la evaluación de desempeño probó de su propia medicina,", pron:"in de perfórmans riviú ji got a téist av jis óun médisin,"},
      {en:"Careful, he's a wolf in sheep's clothing,", es:"Cuidado, es un lobo con piel de oveja,", pron:"quérful, jis a uólf in shíips clóuzing,"},
      {en:"Don't put all your eggs in one basket, take the training program,", es:"No pongas todos los huevos en la misma canasta, toma el programa de capacitación,", pron:"dont put ol iór egs in uán básket, téik de tréining próugram,"},
      {en:"I'd like to apply for the promotion, I'll go with the flow!", es:"Quisiera aplicar al ascenso, ¡me dejo llevar!", pron:"áid láik tu aplái for de promóushon, áil góu uid de flóu!"}
    ]}
  },
  { numero:12, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Bite the bullet,", es:"Afrontar la situación difícil,", pron:"báit de búlet,"},
      {en:"get out of hand,", es:"salirse de control,", pron:"guet áut of jand,"},
      {en:"a piece of cake,", es:"pan comido,", pron:"a píis of kéik,"},
      {en:"drive someone up the wall!", es:"¡volver loco a alguien!", pron:"dráiv sámuan ap de uól!"}
    ]},
    precoro:{label:"Repaso Semana 11", lineas:[
      {en:"A taste of your own medicine, a wolf in sheep's clothing,", es:"Probar tu propia medicina, un lobo con piel de oveja,", pron:"a téist of iór óun médisin, a uulf in shíips clóuzing,"},
      {en:"put all your eggs in one basket, go with the flow!", es:"apostar todo a una sola opción, ¡dejarse llevar!", pron:"put ol iór egs in uán básket, góu uid de flóu!"}
    ]},
    coro:{label:"Repaso Semana 10", lineas:[
      {en:"When pigs fly,", es:"Cuando las ranas críen pelo,", pron:"uén pigs flái,"},
      {en:"a blessing and a curse,", es:"algo bueno y malo a la vez,", pron:"a blésing and a cers,"},
      {en:"the elephant in the room,", es:"el tema evidente que nadie menciona,", pron:"de élefant in de rum,"},
      {en:"cut corners!", es:"¡tomar atajos, hacer las cosas mal!", pron:"cat córners!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Bite the bullet, make the cold call,", es:"Hazlo de una vez, haz la llamada en frío,", pron:"báit de búlet, méik de cóuld col,"},
      {en:"Don't let the sales funnel get out of hand,", es:"No dejes que el embudo de ventas se salga de control,", pron:"dont let de séils fánel get áut av jand,"},
      {en:"I can close this deal, it's a piece of cake,", es:"Puedo cerrar este negocio, es pan comido,", pron:"ái can clóus dis díil, its a píis av quéik,"},
      {en:"But the quota drives me up the wall!", es:"¡Pero la cuota me saca de quicio!", pron:"bat de cuóuta dráivs mi ap de uól!"}
    ]}
  },
  { numero:13, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Have a change of heart,", es:"Cambiar de opinión,", pron:"jav a chéinch of jart,"},
      {en:"in the same boat,", es:"en la misma situación,", pron:"in de séim bóut,"},
      {en:"get the ball rolling,", es:"poner las cosas en marcha,", pron:"guet de bol róuling,"},
      {en:"hang in there!", es:"¡aguanta!", pron:"jang in der!"}
    ]},
    precoro:{label:"Repaso Semana 12", lineas:[
      {en:"Bite the bullet, get out of hand,", es:"Afrontar la situación difícil, salirse de control,", pron:"báit de búlet, guet áut of jand,"},
      {en:"a piece of cake, drive someone up the wall!", es:"pan comido, ¡volver loco a alguien!", pron:"a píis of kéik, dráiv sámuan ap de uól!"}
    ]},
    coro:{label:"Repaso Semana 11", lineas:[
      {en:"A taste of your own medicine,", es:"Probar tu propia medicina,", pron:"a téist of iór óun médisin,"},
      {en:"a wolf in sheep's clothing,", es:"un lobo con piel de oveja,", pron:"a uulf in shíips clóuzing,"},
      {en:"put all your eggs in one basket,", es:"apostar todo a una sola opción,", pron:"put ol iór egs in uán básket,"},
      {en:"go with the flow!", es:"¡dejarse llevar!", pron:"góu uid de flóu!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I am writing to say I had a change of heart,", es:"Le escribo para decirle que cambié de opinión,", pron:"ái am ráiting tu séi ái jad a chéinch av jart,"},
      {en:"CC and BCC, we're in the same boat,", es:"Con copia y copia oculta, estamos en las mismas,", pron:"si-sí and bi-si-sí, uír in de séim bóut,"},
      {en:"Draft the subject line, get the ball rolling,", es:"Redacta el asunto, pongamos esto en marcha,", pron:"draft de sábyect láin, get de bol róuling,"},
      {en:"Proofread before you reply all, hang in there!", es:"Revisa antes de responder a todos, ¡aguanta!", pron:"prúufriid bifór iú riplái ol, jang in der!"}
    ]}
  },
  { numero:14, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Straight from the horse's mouth,", es:"Directo de la fuente original,", pron:"stréit fram de jórses máuz,"},
      {en:"beat a dead horse,", es:"insistir en algo inútil,", pron:"bíit a ded jors,"},
      {en:"call it a day,", es:"darlo por terminado,", pron:"col it a déi,"},
      {en:"the tip of the iceberg!", es:"¡la punta del iceberg!", pron:"de tip of de áisberg!"}
    ]},
    precoro:{label:"Repaso Semana 13", lineas:[
      {en:"Have a change of heart, in the same boat,", es:"Cambiar de opinión, en la misma situación,", pron:"jav a chéinch of jart, in de séim bóut,"},
      {en:"get the ball rolling, hang in there!", es:"poner las cosas en marcha, ¡aguanta!", pron:"guet de bol róuling, jang in der!"}
    ]},
    coro:{label:"Repaso Semana 12", lineas:[
      {en:"Bite the bullet,", es:"Afrontar la situación difícil,", pron:"báit de búlet,"},
      {en:"get out of hand,", es:"salirse de control,", pron:"guet áut of jand,"},
      {en:"a piece of cake,", es:"pan comido,", pron:"a píis of kéik,"},
      {en:"drive someone up the wall!", es:"¡volver loco a alguien!", pron:"dráiv sámuan ap de uól!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Straight from the horse's mouth: the project is on hold,", es:"De fuente directa: el proyecto está en pausa,", pron:"stréit from de jórses máuz: de próyect is on jóuld,"},
      {en:"The scope is set, don't beat a dead horse,", es:"El alcance está definido, no le des más vueltas,", pron:"de scóup is set, dont bíit a ded jors,"},
      {en:"The kickoff meeting went well, let's call it a day,", es:"La reunión de arranque salió bien, terminemos por hoy,", pron:"de kíkof míiting uént uél, lets col it a déi,"},
      {en:"The risks on the timeline? Just the tip of the iceberg!", es:"¿Los riesgos del cronograma? ¡Solo la punta del iceberg!", pron:"de risks on de táimlain? dyast de tip av di áisberg!"}
    ]},
    puente:{label:"Repaso profundo — Semana 6", lineas:[
      {en:"Be careful not to bite off more than you can chew,", es:"Ten cuidado de no abarcar más de lo que puedes,", pron:"bi kérful nat tu báit of mor dan iú can chú,"},
      {en:"let's not jump the gun here!", es:"¡no nos adelantemos acá!", pron:"lets nat yamp de gan jíar!"}
    ]}
  },
  { numero:15, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Look before you leap,", es:"Piensa antes de actuar,", pron:"luk bifór iú líip,"},
      {en:"a stone's throw away,", es:"muy cerca, a un tiro de piedra,", pron:"a stóuns zróu auéi,"},
      {en:"food for thought,", es:"algo para reflexionar,", pron:"fud for zot,"},
      {en:"come rain or shine!", es:"¡pase lo que pase con el clima!", pron:"cam réin or sháin!"}
    ]},
    precoro:{label:"Repaso Semana 14", lineas:[
      {en:"Straight from the horse's mouth, beat a dead horse,", es:"Directo de la fuente original, insistir en algo inútil,", pron:"stréit fram de jórses máuz, bíit a ded jors,"},
      {en:"call it a day, the tip of the iceberg!", es:"darlo por terminado, ¡la punta del iceberg!", pron:"col it a déi, de tip of de áisberg!"}
    ]},
    coro:{label:"Repaso Semana 13", lineas:[
      {en:"Have a change of heart,", es:"Cambiar de opinión,", pron:"jav a chéinch of jart,"},
      {en:"in the same boat,", es:"en la misma situación,", pron:"in de séim bóut,"},
      {en:"get the ball rolling,", es:"poner las cosas en marcha,", pron:"guet de bol róuling,"},
      {en:"hang in there!", es:"¡aguanta!", pron:"jang in der!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Look before you leap, check the checklist,", es:"Piénsalo antes de lanzarte, revisa la lista de chequeo,", pron:"luk bifór iú líip, chek de chéklist,"},
      {en:"The inspection lab is a stone's throw away,", es:"El laboratorio de inspección está a un paso de aquí,", pron:"di inspékshon lab is a stóuns zróu auéi,"},
      {en:"A new defect? That's food for thought,", es:"¿Otro defecto? Eso da para pensar,", pron:"a niú díifect? dats fúud for zot,"},
      {en:"This meets the standards, come rain or shine!", es:"Esto cumple los estándares, ¡llueva o truene!", pron:"dis míits de stándards, cam réin or sháin!"}
    ]}
  },
  { numero:16, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Bark up the wrong tree,", es:"Equivocarse de camino,", pron:"bark ap de rong tríi,"},
      {en:"a slap on the wrist,", es:"un castigo muy leve,", pron:"a slap on de rist,"},
      {en:"cross that bridge later,", es:"resolver eso después,", pron:"cros dat brich léiter,"},
      {en:"go down in flames!", es:"¡fracasar estrepitosamente!", pron:"góu dáun in fléims!"}
    ]},
    precoro:{label:"Repaso Semana 15", lineas:[
      {en:"Look before you leap, a stone's throw away,", es:"Piensa antes de actuar, muy cerca, a un tiro de piedra,", pron:"luk bifór iú líip, a stóuns zróu auéi,"},
      {en:"food for thought, come rain or shine!", es:"algo para reflexionar, ¡pase lo que pase con el clima!", pron:"fud for zot, cam réin or sháin!"}
    ]},
    coro:{label:"Repaso Semana 14", lineas:[
      {en:"Straight from the horse's mouth,", es:"Directo de la fuente original,", pron:"stréit fram de jórses máuz,"},
      {en:"beat a dead horse,", es:"insistir en algo inútil,", pron:"bíit a ded jors,"},
      {en:"call it a day,", es:"darlo por terminado,", pron:"col it a déi,"},
      {en:"the tip of the iceberg!", es:"¡la punta del iceberg!", pron:"de tip of de áisberg!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Don't bark up the wrong tree with a complaint,", es:"No busques en el lugar equivocado con una queja,", pron:"dont bark ap de rong trii uid a compléint,"},
      {en:"A slap on the wrist? No, show empathy,", es:"¿Un regaño leve? No, muestra empatía,", pron:"a slap on de rist? nóu, shóu émpazi,"},
      {en:"The satisfaction survey? We'll cross that bridge later,", es:"¿La encuesta de satisfacción? Ya veremos cuando llegue,", pron:"de satisfákshon sérvei? uíl cros dat brich léiter,"},
      {en:"We will make this right, we won't go down in flames!", es:"Lo vamos a arreglar, ¡no vamos a fracasar!", pron:"uí uíl méik dis ráit, uí uóunt góu dáun in fléims!"}
    ]}
  },
  { numero:17, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Chip on your shoulder,", es:"Guardar rencor, estar resentido,", pron:"chip on iór shóulder,"},
      {en:"go the distance,", es:"llegar hasta el final,", pron:"góu de dístans,"},
      {en:"a dark horse,", es:"alguien inesperado que sorprende,", pron:"a dark jors,"},
      {en:"keep your chin up!", es:"¡mantén el ánimo!", pron:"kíip iór chin ap!"}
    ]},
    precoro:{label:"Repaso Semana 16", lineas:[
      {en:"Bark up the wrong tree, a slap on the wrist,", es:"Equivocarse de camino, un castigo muy leve,", pron:"bark ap de rong tríi, a slap on de rist,"},
      {en:"cross that bridge later, go down in flames!", es:"resolver eso después, ¡fracasar estrepitosamente!", pron:"cros dat brich léiter, góu dáun in fléims!"}
    ]},
    coro:{label:"Repaso Semana 15", lineas:[
      {en:"Look before you leap,", es:"Piensa antes de actuar,", pron:"luk bifór iú líip,"},
      {en:"a stone's throw away,", es:"muy cerca, a un tiro de piedra,", pron:"a stóuns zróu auéi,"},
      {en:"food for thought,", es:"algo para reflexionar,", pron:"fud for zot,"},
      {en:"come rain or shine!", es:"¡pase lo que pase con el clima!", pron:"cam réin or sháin!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The spokesperson has a chip on his shoulder,", es:"El vocero anda resentido,", pron:"de spóuksperson jas a chip on jis shóulder,"},
      {en:"Our contingency plan will go the distance,", es:"Nuestro plan de contingencia llegará lejos,", pron:"áuer contíndyensi plan uíl góu de dístans,"},
      {en:"The new press release is a dark horse,", es:"El nuevo comunicado de prensa es una sorpresa,", pron:"de niú pres rilíis is a dark jors,"},
      {en:"We are committed to transparency, keep your chin up!", es:"Estamos comprometidos con la transparencia, ¡no te desanimes!", pron:"uí ar comíted tu transpérensi, kíip iór chin ap!"}
    ]}
  },
  { numero:18, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Steal someone's thunder,", es:"Robarle el protagonismo a alguien,", pron:"stíil sámuans zánder,"},
      {en:"go cold turkey,", es:"dejar algo de golpe,", pron:"góu cóuld térki,"},
      {en:"tie the knot,", es:"casarse,", pron:"tái de nat,"},
      {en:"burn bridges!", es:"¡quemar los puentes con alguien!", pron:"bern brichis!"}
    ]},
    precoro:{label:"Repaso Semana 17", lineas:[
      {en:"Chip on your shoulder, go the distance,", es:"Guardar rencor, estar resentido, llegar hasta el final,", pron:"chip on iór shóulder, góu de dístans,"},
      {en:"a dark horse, keep your chin up!", es:"alguien inesperado que sorprende, ¡mantén el ánimo!", pron:"a dark jors, kíip iór chin ap!"}
    ]},
    coro:{label:"Repaso Semana 16", lineas:[
      {en:"Bark up the wrong tree,", es:"Equivocarse de camino,", pron:"bark ap de rong tríi,"},
      {en:"a slap on the wrist,", es:"un castigo muy leve,", pron:"a slap on de rist,"},
      {en:"cross that bridge later,", es:"resolver eso después,", pron:"cros dat brich léiter,"},
      {en:"go down in flames!", es:"¡fracasar estrepitosamente!", pron:"góu dáun in fléims!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Don't steal my thunder on the green initiative,", es:"No me robes el protagonismo en la iniciativa verde,", pron:"dont stíil mái zánder on de gríin iníshiativ,"},
      {en:"We quit plastic cold turkey to reduce waste,", es:"Dejamos el plástico de golpe para reducir residuos,", pron:"uí cuít plástic cóuld térki tu ridiús uéist,"},
      {en:"Innovation and sustainability tie the knot,", es:"La innovación y la sostenibilidad se unen,", pron:"inovéishon and sosteinabíliti tái de not,"},
      {en:"Lower your carbon footprint, don't burn bridges!", es:"Reduce tu huella de carbono, ¡no quemes puentes!", pron:"lóuer iór cárbon fútprint, dont bern bríches!"}
    ]},
    puente:{label:"Repaso profundo — Semana 9", lineas:[
      {en:"Every cloud has a silver lining,", es:"No hay mal que por bien no venga,", pron:"évri cláud jas a sílver láining,"},
      {en:"don't judge a book by its cover!", es:"¡no juzgues un libro por su portada!", pron:"dont yach a buk bái its cáver!"}
    ]}
  },
  { numero:19, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Fit like a glove,", es:"Quedar perfecto, a la medida,", pron:"fit láik a glav,"},
      {en:"take it easy,", es:"tomarlo con calma,", pron:"téik it íisi,"},
      {en:"read the room,", es:"captar el ambiente de un lugar,", pron:"ríid de rum,"},
      {en:"can't judge a book by its cover!", es:"¡no puedes juzgar un libro por su portada!", pron:"cant yach a buk bái its cáver!"}
    ]},
    precoro:{label:"Repaso Semana 18", lineas:[
      {en:"Steal someone's thunder, go cold turkey,", es:"Robarle el protagonismo a alguien, dejar algo de golpe,", pron:"stíil sámuans zánder, góu cóuld térki,"},
      {en:"tie the knot, burn bridges!", es:"casarse, ¡quemar los puentes con alguien!", pron:"tái de nat, bern brichis!"}
    ]},
    coro:{label:"Repaso Semana 17", lineas:[
      {en:"Chip on your shoulder,", es:"Guardar rencor, estar resentido,", pron:"chip on iór shóulder,"},
      {en:"go the distance,", es:"llegar hasta el final,", pron:"góu de dístans,"},
      {en:"a dark horse,", es:"alguien inesperado que sorprende,", pron:"a dark jors,"},
      {en:"keep your chin up!", es:"¡mantén el ánimo!", pron:"kíip iór chin ap!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"To put it simply, this plan fits like a glove,", es:"Para decirlo simple, este plan queda como anillo al dedo,", pron:"tu put it símpli, dis plan fits láik a glav,"},
      {en:"In short, take it easy,", es:"En resumen, tranquilo,", pron:"in short, téik it ísi,"},
      {en:"First and foremost, read the room,", es:"Ante todo, lee el ambiente,", pron:"ferst and fórmoust, ríid de rum,"},
      {en:"Last but not least, can't judge a book by its cover!", es:"Por último, ¡no se juzga un libro por su portada!", pron:"last bat nat líist, cant dyadch a buk bái its cáver!"}
    ]}
  },
  { numero:20, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Method to the madness,", es:"Lógica detrás de algo que parece caótico,", pron:"mézod tu de mádnes,"},
      {en:"put your foot down,", es:"tomar una postura firme,", pron:"put iór fut dáun,"},
      {en:"a piece of your mind,", es:"decirle a alguien lo que piensas sin filtro,", pron:"a píis of iór máind,"},
      {en:"back to the drawing board!", es:"¡de vuelta al principio!", pron:"bak tu de dróing bord!"}
    ]},
    precoro:{label:"Repaso Semana 19", lineas:[
      {en:"Fit like a glove, take it easy,", es:"Quedar perfecto, a la medida, tomarlo con calma,", pron:"fit láik a glav, téik it íisi,"},
      {en:"read the room, can't judge a book by its cover!", es:"captar el ambiente de un lugar, ¡no puedes juzgar un libro por su portada!", pron:"ríid de rum, cant yach a buk bái its cáver!"}
    ]},
    coro:{label:"Repaso Semana 18", lineas:[
      {en:"Steal someone's thunder,", es:"Robarle el protagonismo a alguien,", pron:"stíil sámuans zánder,"},
      {en:"go cold turkey,", es:"dejar algo de golpe,", pron:"góu cóuld térki,"},
      {en:"tie the knot,", es:"casarse,", pron:"tái de nat,"},
      {en:"burn bridges!", es:"¡quemar los puentes con alguien!", pron:"bern brichis!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"There's a method to the madness: this shipment requires a bill of lading,", es:"Hay un método en la locura: este envío requiere conocimiento de embarque,", pron:"ders a mézod tu de mádnes: dis shípment ricuáiers a bil av léiding,"},
      {en:"No export license? I put my foot down,", es:"¿Sin licencia de exportación? Me planto firme,", pron:"nóu éxport láisens? ái put mái fut dáun,"},
      {en:"The freight forwarder got a piece of my mind,", es:"El agente de carga escuchó cuatro verdades,", pron:"de fréit fóruarder got a píis av mái máind,"},
      {en:"Customs clearance failed, back to the drawing board!", es:"El despacho de aduana falló, ¡a empezar de nuevo!", pron:"cástoms clíarans féild, bak tu de dróing bord!"}
    ]}
  },
  { numero:21, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Add insult to injury,", es:"Empeorar aún más una situación mala,", pron:"ad insált tu ínyuri,"},
      {en:"in hot water,", es:"en problemas,", pron:"in jat uóter,"},
      {en:"a shot in the dark,", es:"un intento sin mucha esperanza,", pron:"a shat in de dark,"},
      {en:"stick to your guns!", es:"¡mantente firme en tu postura!", pron:"stik tu iór guns!"}
    ]},
    precoro:{label:"Repaso Semana 20", lineas:[
      {en:"Method to the madness, put your foot down,", es:"Lógica detrás de algo que parece caótico, tomar una postura firme,", pron:"mézod tu de mádnes, put iór fut dáun,"},
      {en:"a piece of your mind, back to the drawing board!", es:"decirle a alguien lo que piensas sin filtro, ¡de vuelta al principio!", pron:"a píis of iór máind, bak tu de dróing bord!"}
    ]},
    coro:{label:"Repaso Semana 19", lineas:[
      {en:"Fit like a glove,", es:"Quedar perfecto, a la medida,", pron:"fit láik a glav,"},
      {en:"take it easy,", es:"tomarlo con calma,", pron:"téik it íisi,"},
      {en:"read the room,", es:"captar el ambiente de un lugar,", pron:"ríid de rum,"},
      {en:"can't judge a book by its cover!", es:"¡no puedes juzgar un libro por su portada!", pron:"cant yach a buk bái its cáver!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The machinery broke, to add insult to injury,", es:"La maquinaria se dañó, y para colmo,", pron:"de mashíineri bróuk, tu ad ínsalt tu índyuri,"},
      {en:"Raw materials are late, we're in hot water,", es:"Las materias primas llegaron tarde, estamos en problemas,", pron:"ro matírials ar léit, uír in jot uóter,"},
      {en:"Fixing the downtime is a shot in the dark,", es:"Arreglar el tiempo muerto es un tiro al aire,", pron:"fíxing de dáuntaim is a shot in de dark,"},
      {en:"The production line is running, stick to your guns!", es:"La línea de producción está funcionando, ¡mantente firme!", pron:"de prodákshon láin is ráning, stik tu iór gans!"}
    ]}
  },
  { numero:22, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Ahead of the curve,", es:"Adelantado a su época,", pron:"ajéd of de kerv,"},
      {en:"see eye to eye,", es:"estar de acuerdo,", pron:"síi ái tu ái,"},
      {en:"a needle in a haystack,", es:"algo muy difícil de encontrar,", pron:"a nídol in a jéistak,"},
      {en:"jump on the bandwagon!", es:"¡subirse a la moda!", pron:"yamp on de bánduagon!"}
    ]},
    precoro:{label:"Repaso Semana 21", lineas:[
      {en:"Add insult to injury, in hot water,", es:"Empeorar aún más una situación mala, en problemas,", pron:"ad insált tu ínyuri, in jat uóter,"},
      {en:"a shot in the dark, stick to your guns!", es:"un intento sin mucha esperanza, ¡mantente firme en tu postura!", pron:"a shat in de dark, stik tu iór guns!"}
    ]},
    coro:{label:"Repaso Semana 20", lineas:[
      {en:"Method to the madness,", es:"Lógica detrás de algo que parece caótico,", pron:"mézod tu de mádnes,"},
      {en:"put your foot down,", es:"tomar una postura firme,", pron:"put iór fut dáun,"},
      {en:"a piece of your mind,", es:"decirle a alguien lo que piensas sin filtro,", pron:"a píis of iór máind,"},
      {en:"back to the drawing board!", es:"¡de vuelta al principio!", pron:"bak tu de dróing bord!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Human resources is ahead of the curve,", es:"Recursos humanos está a la vanguardia,", pron:"jiúman risórses is ajéd av de kerv,"},
      {en:"In the performance review we see eye to eye,", es:"En la evaluación de desempeño estamos de acuerdo,", pron:"in de perfórmans riviú uí síi ái tu ái,"},
      {en:"A good candidate is a needle in a haystack,", es:"Un buen candidato es una aguja en un pajar,", pron:"a gud cándideit is a níidol in a jéistak,"},
      {en:"I'd like to apply for the training program, I'll jump on the bandwagon!", es:"Quisiera aplicar al programa de capacitación, ¡me subo al tren!", pron:"áid láik tu aplái for de tréining próugram, áil dyamp on de bándueguen!"}
    ]}
  },
  { numero:23, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Break the ice,", es:"Romper el hielo,", pron:"bréik de áis,"},
      {en:"a piece of the action,", es:"una parte de las ganancias o beneficio,", pron:"a píis of de ákshion,"},
      {en:"go down the drain,", es:"desperdiciarse por completo,", pron:"góu dáun de dréin,"},
      {en:"turn a blind eye!", es:"¡hacer la vista gorda!", pron:"tern a bláind ái!"}
    ]},
    precoro:{label:"Repaso Semana 22", lineas:[
      {en:"Ahead of the curve, see eye to eye,", es:"Adelantado a su época, estar de acuerdo,", pron:"ajéd of de kerv, síi ái tu ái,"},
      {en:"a needle in a haystack, jump on the bandwagon!", es:"algo muy difícil de encontrar, ¡subirse a la moda!", pron:"a nídol in a jéistak, yamp on de bánduagon!"}
    ]},
    coro:{label:"Repaso Semana 21", lineas:[
      {en:"Add insult to injury,", es:"Empeorar aún más una situación mala,", pron:"ad insált tu ínyuri,"},
      {en:"in hot water,", es:"en problemas,", pron:"in jat uóter,"},
      {en:"a shot in the dark,", es:"un intento sin mucha esperanza,", pron:"a shat in de dark,"},
      {en:"stick to your guns!", es:"¡mantente firme en tu postura!", pron:"stik tu iór guns!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"A cold call? Break the ice,", es:"¿Una llamada en frío? Rompe el hielo,", pron:"a cóuld col? bréik di áis,"},
      {en:"Everyone wants a piece of the action, and a commission,", es:"Todos quieren su parte del negocio, y una comisión,", pron:"évriuan uánts a píis av di ákshon, and a comíshon,"},
      {en:"Without leads, the sales funnel goes down the drain,", es:"Sin prospectos, el embudo de ventas se va a la basura,", pron:"uidáut líids, de séils fánel góus dáun de dréin,"},
      {en:"I can close this deal, don't turn a blind eye!", es:"Puedo cerrar este negocio, ¡no te hagas el de la vista gorda!", pron:"ái can clóus dis díil, dont tern a bláind ái!"}
    ]}
  },
  { numero:24, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Curiosity killed the cat,", es:"La curiosidad mató al gato,", pron:"curiásiti kild de cat,"},
      {en:"go with your gut,", es:"seguir tu instinto,", pron:"góu uid iór gat,"},
      {en:"a fish out of water,", es:"sentirse totalmente fuera de lugar,", pron:"a fish áut of uóter,"},
      {en:"nip it in the bud!", es:"¡cortar el problema de raíz!", pron:"nip it in de bad!"}
    ]},
    precoro:{label:"Repaso Semana 23", lineas:[
      {en:"Break the ice, a piece of the action,", es:"Romper el hielo, una parte de las ganancias o beneficio,", pron:"bréik de áis, a píis of de ákshion,"},
      {en:"go down the drain, turn a blind eye!", es:"desperdiciarse por completo, ¡hacer la vista gorda!", pron:"góu dáun de dréin, tern a bláind ái!"}
    ]},
    coro:{label:"Repaso Semana 22", lineas:[
      {en:"Ahead of the curve,", es:"Adelantado a su época,", pron:"ajéd of de kerv,"},
      {en:"see eye to eye,", es:"estar de acuerdo,", pron:"síi ái tu ái,"},
      {en:"a needle in a haystack,", es:"algo muy difícil de encontrar,", pron:"a nídol in a jéistak,"},
      {en:"jump on the bandwagon!", es:"¡subirse a la moda!", pron:"yamp on de bánduagon!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Unit nine is done, curiosity killed the cat,", es:"Unidad nueve lista, la curiosidad mató al gato,", pron:"iúnit náin is dan, kiuriósiti kild de cat,"},
      {en:"Two thirds done, go with your gut,", es:"Dos terceras partes listas, sigue tu instinto,", pron:"tu zerds dan, góu uid iór gat,"},
      {en:"No more a fish out of water, staying strong,", es:"Ya no eres un pez fuera del agua, sigues firme,", pron:"nóu mor a fish áut av uóter, stéing strong,"},
      {en:"Halfway to mastery, nip doubts in the bud!", es:"A mitad de camino a la maestría, ¡corta las dudas de raíz!", pron:"jáfuei tu másteri, nip dáuts in de bad!"}
    ]},
    puente:{label:"Repaso profundo — Semana 13", lineas:[
      {en:"I had a change of heart about the plan,", es:"Cambié de opinión sobre el plan,", pron:"ái jad a chéinch of jart abáut de plan,"},
      {en:"just hang in there a bit longer!", es:"¡aguanta un poco más!", pron:"yast jang in der a bit lónguer!"}
    ]}
  },
  { numero:25, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Cut to the chase,", es:"Ir directo al grano,", pron:"cat tu de chéis,"},
      {en:"a slippery slope,", es:"una situación que se sale de control gradualmente,", pron:"a slíperi slóup,"},
      {en:"raise the bar,", es:"subir el estándar,", pron:"réis de bar,"},
      {en:"jump ship!", es:"¡abandonar algo antes de que empeore!", pron:"yamp ship!"}
    ]},
    precoro:{label:"Repaso Semana 24", lineas:[
      {en:"Curiosity killed the cat, go with your gut,", es:"La curiosidad mató al gato, seguir tu instinto,", pron:"curiásiti kild de cat, góu uid iór gat,"},
      {en:"a fish out of water, nip it in the bud!", es:"sentirse totalmente fuera de lugar, ¡cortar el problema de raíz!", pron:"a fish áut of uóter, nip it in de bad!"}
    ]},
    coro:{label:"Repaso Semana 23", lineas:[
      {en:"Break the ice,", es:"Romper el hielo,", pron:"bréik de áis,"},
      {en:"a piece of the action,", es:"una parte de las ganancias o beneficio,", pron:"a píis of de ákshion,"},
      {en:"go down the drain,", es:"desperdiciarse por completo,", pron:"góu dáun de dréin,"},
      {en:"turn a blind eye!", es:"¡hacer la vista gorda!", pron:"tern a bláind ái!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Cut to the chase: I am looking to rent,", es:"Ve al grano: estoy buscando alquilar,", pron:"cat tu de chéis: ái am lúking tu rent,"},
      {en:"A big mortgage is a slippery slope,", es:"Una hipoteca grande es un terreno resbaladizo,", pron:"a big mórgach is a slíperi slóup,"},
      {en:"The landlord wants to raise the bar,", es:"El arrendador quiere subir el nivel,", pron:"de lándlord uánts tu réis de bar,"},
      {en:"Pay the security deposit, don't jump ship!", es:"Paga el depósito de garantía, ¡no abandones el barco!", pron:"péi de sekiúriti dipósit, dont dyamp ship!"}
    ]}
  },
  { numero:26, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Don't rock the boat,", es:"No causar problemas innecesarios,", pron:"dont rak de bóut,"},
      {en:"in the nick of time,", es:"justo a tiempo, en el último momento,", pron:"in de nik of táim,"},
      {en:"a piece of cake to fix,", es:"fácil de arreglar,", pron:"a píis of kéik tu fix,"},
      {en:"go the whole nine yards!", es:"¡hacer todo el esfuerzo posible!", pron:"góu de jóul náin iards!"}
    ]},
    precoro:{label:"Repaso Semana 25", lineas:[
      {en:"Cut to the chase, a slippery slope,", es:"Ir directo al grano, una situación que se sale de control gradualmente,", pron:"cat tu de chéis, a slíperi slóup,"},
      {en:"raise the bar, jump ship!", es:"subir el estándar, ¡abandonar algo antes de que empeore!", pron:"réis de bar, yamp ship!"}
    ]},
    coro:{label:"Repaso Semana 24", lineas:[
      {en:"Curiosity killed the cat,", es:"La curiosidad mató al gato,", pron:"curiásiti kild de cat,"},
      {en:"go with your gut,", es:"seguir tu instinto,", pron:"góu uid iór gat,"},
      {en:"a fish out of water,", es:"sentirse totalmente fuera de lugar,", pron:"a fish áut of uóter,"},
      {en:"nip it in the bud!", es:"¡cortar el problema de raíz!", pron:"nip it in de bad!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"This is covered under the policy, don't rock the boat,", es:"Esto está cubierto por la póliza, no causes problemas,", pron:"dis is cáverd ánder de pólisi, dont rok de bóut,"},
      {en:"I filed the claim in the nick of time,", es:"Presenté el reclamo justo a tiempo,", pron:"ái fáild de cléim in de nik av táim,"},
      {en:"The premium payment? A piece of cake to fix,", es:"¿El pago de la prima? Pan comido de arreglar,", pron:"de príimium péiment? a píis av quéik tu fix,"},
      {en:"The insurance agent went the whole nine yards!", es:"¡El agente de seguros hizo todo lo posible!", pron:"di inshúrans éidyent uént de jóul náin iards!"}
    ]}
  },
  { numero:27, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Play devil's advocate,", es:"Defender una postura contraria por debate,", pron:"pléi dévils ádvocat,"},
      {en:"go above and beyond,", es:"hacer más de lo esperado,", pron:"góu abáv and bijánd,"},
      {en:"a leopard can't change its spots,", es:"nadie cambia su naturaleza,", pron:"a lépard cant chéinch its spats,"},
      {en:"pull yourself together!", es:"¡recomponte!", pron:"pul iórself tugéder!"}
    ]},
    precoro:{label:"Repaso Semana 26", lineas:[
      {en:"Don't rock the boat, in the nick of time,", es:"No causar problemas innecesarios, justo a tiempo, en el último momento,", pron:"dont rak de bóut, in de nik of táim,"},
      {en:"a piece of cake to fix, go the whole nine yards!", es:"fácil de arreglar, ¡hacer todo el esfuerzo posible!", pron:"a píis of kéik tu fix, góu de jóul náin iards!"}
    ]},
    coro:{label:"Repaso Semana 25", lineas:[
      {en:"Cut to the chase,", es:"Ir directo al grano,", pron:"cat tu de chéis,"},
      {en:"a slippery slope,", es:"una situación que se sale de control gradualmente,", pron:"a slíperi slóup,"},
      {en:"raise the bar,", es:"subir el estándar,", pron:"réis de bar,"},
      {en:"jump ship!", es:"¡abandonar algo antes de que empeore!", pron:"yamp ship!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I have an appointment with a specialist, let me play devil's advocate,", es:"Tengo cita con un especialista, déjame hacer de abogado del diablo,", pron:"ái jav an apóintment uid a spéshalist, let mi pléi dévils ádvoket,"},
      {en:"My doctor goes above and beyond,", es:"Mi médico va más allá de lo esperado,", pron:"mái dóctor góus abáv and biyónd,"},
      {en:"The diagnosis is the same, a leopard can't change its spots,", es:"El diagnóstico es el mismo, genio y figura hasta la sepultura,", pron:"de daiagnóusis is de séim, a lépard cant chéinch its spots,"},
      {en:"Follow the treatment plan, pull yourself together!", es:"Sigue el plan de tratamiento, ¡recupera la compostura!", pron:"fólou de tríitment plan, pul iorsélf tugéder!"}
    ]}
  },
  { numero:28, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Get your ducks in a row,", es:"Organizarse antes de actuar,", pron:"guet iór dacs in a róu,"},
      {en:"a blessing in the making,", es:"algo bueno que se está gestando,", pron:"a blésing in de méiking,"},
      {en:"let sleeping dogs lie,", es:"no remover asuntos delicados ya resueltos,", pron:"let slíiping dogs lái,"},
      {en:"seal the deal!", es:"¡cerrar el trato!", pron:"síil de díil!"}
    ]},
    precoro:{label:"Repaso Semana 27", lineas:[
      {en:"Play devil's advocate, go above and beyond,", es:"Defender una postura contraria por debate, hacer más de lo esperado,", pron:"pléi dévils ádvocat, góu abáv and bijánd,"},
      {en:"a leopard can't change its spots, pull yourself together!", es:"nadie cambia su naturaleza, ¡recomponte!", pron:"a lépard cant chéinch its spats, pul iórself tugéder!"}
    ]},
    coro:{label:"Repaso Semana 26", lineas:[
      {en:"Don't rock the boat,", es:"No causar problemas innecesarios,", pron:"dont rak de bóut,"},
      {en:"in the nick of time,", es:"justo a tiempo, en el último momento,", pron:"in de nik of táim,"},
      {en:"a piece of cake to fix,", es:"fácil de arreglar,", pron:"a píis of kéik tu fix,"},
      {en:"go the whole nine yards!", es:"¡hacer todo el esfuerzo posible!", pron:"góu de jóul náin iards!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Get your ducks in a row: tuition and enrollment,", es:"Pon todo en orden: matrícula e inscripción,", pron:"get iór daks in a róu: tiuíshon and enróulment,"},
      {en:"A scholarship is a blessing in the making,", es:"Una beca es una bendición en camino,", pron:"a scólarship is a bléssing in de méiking,"},
      {en:"Old grades? Let sleeping dogs lie,", es:"¿Notas viejas? Mejor no revolver el asunto,", pron:"óuld gréids? let slíiping dogs lái,"},
      {en:"I am enrolled in an online course, seal the deal!", es:"Estoy inscrito en un curso en línea, ¡cerremos el trato!", pron:"ái am enróuld in an ónlain cors, síil de díil!"}
    ]},
    puente:{label:"Repaso profundo — Semana 19", lineas:[
      {en:"This new job fits like a glove for me,", es:"Este trabajo nuevo me queda perfecto,", pron:"dis niú yab fits láik a glav for mi,"},
      {en:"remember, can't judge a book by its cover!", es:"¡recuerda, no puedes juzgar un libro por su portada!", pron:"rimémber, cant yach a buk bái its cáver!"}
    ]}
  },
  { numero:29, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Out of the woods,", es:"Fuera de peligro,", pron:"áut of de uuds,"},
      {en:"a grain of truth,", es:"algo de verdad en algo,", pron:"a gréin of truz,"},
      {en:"come out of your shell,", es:"volverse más sociable,", pron:"cam áut of iór shel,"},
      {en:"go all out!", es:"¡darlo todo!", pron:"góu ol áut!"}
    ]},
    precoro:{label:"Repaso Semana 28", lineas:[
      {en:"Get your ducks in a row, a blessing in the making,", es:"Organizarse antes de actuar, algo bueno que se está gestando,", pron:"guet iór dacs in a róu, a blésing in de méiking,"},
      {en:"let sleeping dogs lie, seal the deal!", es:"no remover asuntos delicados ya resueltos, ¡cerrar el trato!", pron:"let slíiping dogs lái, síil de díil!"}
    ]},
    coro:{label:"Repaso Semana 27", lineas:[
      {en:"Play devil's advocate,", es:"Defender una postura contraria por debate,", pron:"pléi dévils ádvocat,"},
      {en:"go above and beyond,", es:"hacer más de lo esperado,", pron:"góu abáv and bijánd,"},
      {en:"a leopard can't change its spots,", es:"nadie cambia su naturaleza,", pron:"a lépard cant chéinch its spats,"},
      {en:"pull yourself together!", es:"¡recomponte!", pron:"pul iórself tugéder!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I need to renew my permit, we're out of the woods,", es:"Necesito renovar mi permiso, ya salimos del apuro,", pron:"ái níid tu riniú mái pérmit, uír áut av de uúds,"},
      {en:"There's a grain of truth about the processing time,", es:"Hay algo de verdad sobre el tiempo de trámite,", pron:"ders a gréin av truz abáut de prósesing táim,"},
      {en:"At the government office, come out of your shell,", es:"En la oficina del gobierno, sal de tu caparazón,", pron:"at de gávernment ófis, cam áut av iór shel,"},
      {en:"Fill out the application form and go all out!", es:"Llena el formulario de solicitud, ¡y vamos con todo!", pron:"fil áut di aplikéishon form and góu ol áut!"}
    ]}
  },
  { numero:30, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Hit the road,", es:"Ponte en camino,", pron:"jit de róud,"},
      {en:"call it a night,", es:"dar la noche por terminada,", pron:"col it a náit,"},
      {en:"sleep like a log,", es:"dormir como un tronco,", pron:"slíip láik a log,"},
      {en:"rise and shine!", es:"¡arriba, a levantarse!", pron:"ráis and sháin!"}
    ]},
    precoro:{label:"Repaso Semana 29", lineas:[
      {en:"Out of the woods, a grain of truth,", es:"Fuera de peligro, algo de verdad en algo,", pron:"áut of de uuds, a gréin of truz,"},
      {en:"come out of your shell, go all out!", es:"volverse más sociable, ¡darlo todo!", pron:"cam áut of iór shel, góu ol áut!"}
    ]},
    coro:{label:"Repaso Semana 28", lineas:[
      {en:"Get your ducks in a row,", es:"Organizarse antes de actuar,", pron:"guet iór dacs in a róu,"},
      {en:"a blessing in the making,", es:"algo bueno que se está gestando,", pron:"a blésing in de méiking,"},
      {en:"let sleeping dogs lie,", es:"no remover asuntos delicados ya resueltos,", pron:"let slíiping dogs lái,"},
      {en:"seal the deal!", es:"¡cerrar el trato!", pron:"síil de díil!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"As far as that goes, let's hit the road,", es:"En lo que a eso respecta, pongámonos en camino,", pron:"as far as dat góus, lets jit de róud,"},
      {en:"Come to think of it, let's call it a night,", es:"Ahora que lo pienso, demos la noche por terminada,", pron:"cam tu zink av it, lets col it a náit,"},
      {en:"Mind you, I'll sleep like a log,", es:"Eso sí, voy a dormir como un tronco,", pron:"máind iú, áil slíip láik a log,"},
      {en:"At any rate, rise and shine!", es:"En todo caso, ¡arriba, a levantarse!", pron:"at éni réit, ráis and sháin!"}
    ]}
  },
  { numero:31, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Don't break the bank,", es:"No gastes una fortuna,", pron:"dont bréik de bank,"},
      {en:"save for a rainy day,", es:"ahorra para cuando haga falta,", pron:"séiv for a réini déi,"},
      {en:"money doesn't grow on trees,", es:"el dinero no crece en los árboles,", pron:"máni dásnt gróu on tríis,"},
      {en:"pinch pennies!", es:"¡cuida cada peso!", pron:"pinch pénis!"}
    ]},
    precoro:{label:"Repaso Semana 30", lineas:[
      {en:"Hit the road, call it a night,", es:"Ponte en camino, dar la noche por terminada,", pron:"jit de róud, col it a náit,"},
      {en:"sleep like a log, rise and shine!", es:"dormir como un tronco, ¡arriba, a levantarse!", pron:"slíip láik a log, ráis and sháin!"}
    ]},
    coro:{label:"Repaso Semana 29", lineas:[
      {en:"Out of the woods,", es:"Fuera de peligro,", pron:"áut of de uuds,"},
      {en:"a grain of truth,", es:"algo de verdad en algo,", pron:"a gréin of truz,"},
      {en:"come out of your shell,", es:"volverse más sociable,", pron:"cam áut of iór shel,"},
      {en:"go all out!", es:"¡darlo todo!", pron:"góu ol áut!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"I'd like to test drive it, but don't break the bank,", es:"Quisiera probarlo, pero no gastes una fortuna,", pron:"áid láik tu test dráiv it, bat dont bréik de bank,"},
      {en:"Low monthly payment, save for a rainy day,", es:"Cuota mensual baja, ahorra para cuando haga falta,", pron:"lóu mánzli péiment, séiv for a réini déi,"},
      {en:"The financing options? Money doesn't grow on trees,", es:"¿Las opciones de financiación? El dinero no crece en los árboles,", pron:"de fainánsing ópshons? máni dásnt gróu on tríis,"},
      {en:"Use the trade-in, pinch pennies!", es:"Entrega tu carro usado como parte de pago, ¡cuida cada peso!", pron:"iús de tréid-in, pinch pénis!"}
    ]}
  },
  { numero:32, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"On cloud nine,", es:"En las nubes de felicidad,", pron:"on cláud náin,"},
      {en:"over the moon,", es:"feliz de la vida,", pron:"óuver de múun,"},
      {en:"down in the dumps,", es:"con el ánimo por el piso,", pron:"dáun in de damps,"},
      {en:"keep your spirits up!", es:"¡mantén el ánimo en alto!", pron:"kíip iór spírits ap!"}
    ]},
    precoro:{label:"Repaso Semana 31", lineas:[
      {en:"Don't break the bank, save for a rainy day,", es:"No gastes una fortuna, ahorra para cuando haga falta,", pron:"dont bréik de bank, séiv for a réini déi,"},
      {en:"money doesn't grow on trees, pinch pennies!", es:"el dinero no crece en los árboles, ¡cuida cada peso!", pron:"máni dásnt gróu on tríis, pinch pénis!"}
    ]},
    coro:{label:"Repaso Semana 30", lineas:[
      {en:"Hit the road,", es:"Ponte en camino,", pron:"jit de róud,"},
      {en:"call it a night,", es:"dar la noche por terminada,", pron:"col it a náit,"},
      {en:"sleep like a log,", es:"dormir como un tronco,", pron:"slíip láik a log,"},
      {en:"rise and shine!", es:"¡arriba, a levantarse!", pron:"ráis and sháin!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"We are moving to a new city, on cloud nine,", es:"Nos mudamos a una nueva ciudad, felices,", pron:"uí ar múuving tu a niú síti, on cláud náin,"},
      {en:"The moving truck came early, I'm over the moon,", es:"El camión de mudanza llegó temprano, estoy feliz de la vida,", pron:"de múuving trak quéim érli, áim óuver de múun,"},
      {en:"Packing all day, down in the dumps,", es:"Empacando todo el día, con el ánimo por el piso,", pron:"páking ol déi, dáun in de damps,"},
      {en:"Change of address done, keep your spirits up!", es:"Cambio de dirección listo, ¡mantén el ánimo en alto!", pron:"chéinch av ádres dan, kíip iór spírits ap!"}
    ]}
  },
  { numero:33, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"The early bird catches the worm,", es:"Al que madruga, Dios lo ayuda,", pron:"di érli berd cáches de uérm,"},
      {en:"better late than never,", es:"más vale tarde que nunca,", pron:"béter léit dan néver,"},
      {en:"time flies,", es:"el tiempo vuela,", pron:"táim fláis,"},
      {en:"in the long run!", es:"¡a la larga!", pron:"in de long ran!"}
    ]},
    precoro:{label:"Repaso Semana 32", lineas:[
      {en:"On cloud nine, over the moon,", es:"En las nubes de felicidad, feliz de la vida,", pron:"on cláud náin, óuver de múun,"},
      {en:"down in the dumps, keep your spirits up!", es:"con el ánimo por el piso, ¡mantén el ánimo en alto!", pron:"dáun in de damps, kíip iór spírits ap!"}
    ]},
    coro:{label:"Repaso Semana 31", lineas:[
      {en:"Don't break the bank,", es:"No gastes una fortuna,", pron:"dont bréik de bank,"},
      {en:"save for a rainy day,", es:"ahorra para cuando haga falta,", pron:"séiv for a réini déi,"},
      {en:"money doesn't grow on trees,", es:"el dinero no crece en los árboles,", pron:"máni dásnt gróu on tríis,"},
      {en:"pinch pennies!", es:"¡cuida cada peso!", pron:"pinch pénis!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"This is a formal event, the early bird catches the worm,", es:"Este es un evento formal, al que madruga, Dios lo ayuda,", pron:"dis is a fórmal ivént, di érli berd cáches de uérm,"},
      {en:"RSVP late? Better late than never,", es:"¿Confirmaste tarde? Más vale tarde que nunca,", pron:"ar-es-vi-pí léit? béter léit dan néver,"},
      {en:"The keynote speaker talked, time flies,", es:"El orador principal habló, el tiempo vuela,", pron:"de kíinout spíiker tokt, táim fláis,"},
      {en:"A good venue and catering pay off in the long run!", es:"Un buen salón y catering valen la pena ¡a la larga!", pron:"a gud véniu and quéitering péi of in de long ran!"}
    ]}
  },
  { numero:34, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Easier said than done,", es:"Del dicho al hecho hay mucho trecho,", pron:"íisier sed dan dan,"},
      {en:"no pain, no gain,", es:"sin esfuerzo no hay recompensa,", pron:"nóu péin, nóu guéin,"},
      {en:"practice what you preach,", es:"predica con el ejemplo,", pron:"práctis uát iú príich,"},
      {en:"the sky's the limit!", es:"¡el cielo es el límite!", pron:"de skáis de límit!"}
    ]},
    precoro:{label:"Repaso Semana 33", lineas:[
      {en:"The early bird catches the worm, better late than never,", es:"Al que madruga, Dios lo ayuda, más vale tarde que nunca,", pron:"di érli berd cáches de uérm, béter léit dan néver,"},
      {en:"time flies, in the long run!", es:"el tiempo vuela, ¡a la larga!", pron:"táim fláis, in de long ran!"}
    ]},
    coro:{label:"Repaso Semana 32", lineas:[
      {en:"On cloud nine,", es:"En las nubes de felicidad,", pron:"on cláud náin,"},
      {en:"over the moon,", es:"feliz de la vida,", pron:"óuver de múun,"},
      {en:"down in the dumps,", es:"con el ánimo por el piso,", pron:"dáun in de damps,"},
      {en:"keep your spirits up!", es:"¡mantén el ánimo en alto!", pron:"kíip iór spírits ap!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Digital transformation? Easier said than done,", es:"¿Transformación digital? Del dicho al hecho hay mucho trecho,", pron:"dídyital transforméishon? íisier sed dan dan,"},
      {en:"Learning data analysis: no pain, no gain,", es:"Aprender análisis de datos: sin esfuerzo no hay recompensa,", pron:"lérning déita análisis: nóu péin, nóu guéin,"},
      {en:"Cybersecurity experts, practice what you preach,", es:"Expertos en ciberseguridad, prediquen con el ejemplo,", pron:"sáibersekiúriti éxperts, práctis uát iú príich,"},
      {en:"This is powered by artificial intelligence, the sky's the limit!", es:"Esto funciona con inteligencia artificial, ¡el cielo es el límite!", pron:"dis is páuerd bái artifíshal intélidyens, de skáis de límit!"}
    ]}
  },
  { numero:35, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"A penny for your thoughts,", es:"¿En qué estás pensando?", pron:"a péni for iór zots,"},
      {en:"it's on the tip of my tongue,", es:"lo tengo en la punta de la lengua,", pron:"its on de tip av mái tang,"},
      {en:"it rings a bell,", es:"me suena,", pron:"it rings a bel,"},
      {en:"my lips are sealed!", es:"¡soy una tumba!", pron:"mái lips ar síild!"}
    ]},
    precoro:{label:"Repaso Semana 34", lineas:[
      {en:"Easier said than done, no pain, no gain,", es:"Del dicho al hecho hay mucho trecho, sin esfuerzo no hay recompensa,", pron:"íisier sed dan dan, nóu péin, nóu guéin,"},
      {en:"practice what you preach, the sky's the limit!", es:"predica con el ejemplo, ¡el cielo es el límite!", pron:"práctis uát iú príich, de skáis de límit!"}
    ]},
    coro:{label:"Repaso Semana 33", lineas:[
      {en:"The early bird catches the worm,", es:"Al que madruga, Dios lo ayuda,", pron:"di érli berd cáches de uérm,"},
      {en:"better late than never,", es:"más vale tarde que nunca,", pron:"béter léit dan néver,"},
      {en:"time flies,", es:"el tiempo vuela,", pron:"táim fláis,"},
      {en:"in the long run!", es:"¡a la larga!", pron:"in de long ran!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"My leadership style? A penny for your thoughts,", es:"¿Mi estilo de liderazgo? ¿En qué estás pensando?", pron:"mái líidership stáil? a péni for iór zots,"},
      {en:"Delegation, it's on the tip of my tongue,", es:"Delegación, lo tengo en la punta de la lengua,", pron:"delegéishon, its on de tip av mái tang,"},
      {en:"A one-on-one meeting? It rings a bell,", es:"¿Una reunión uno a uno? Me suena,", pron:"a uán-on-uán míiting? it rings a bel,"},
      {en:"I trust my team to decide, my lips are sealed!", es:"Confío en que mi equipo decida, ¡soy una tumba!", pron:"ái trast mái tíim tu disáid, mái lips ar síild!"}
    ]}
  },
  { numero:36, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let off some steam,", es:"Desahógate,", pron:"let of sam stíim,"},
      {en:"keep a low profile,", es:"pasa desapercibido,", pron:"kíip a lóu próufail,"},
      {en:"lie low for a while,", es:"quédate quieto un tiempo,", pron:"lái lóu for a uáil,"},
      {en:"take a rain check!", es:"¡lo dejamos para otro día!", pron:"téik a réin chek!"}
    ]},
    precoro:{label:"Repaso Semana 35", lineas:[
      {en:"A penny for your thoughts, it's on the tip of my tongue,", es:"¿En qué estás pensando? lo tengo en la punta de la lengua,", pron:"a péni for iór zots, its on de tip av mái tang,"},
      {en:"it rings a bell, my lips are sealed!", es:"me suena, ¡soy una tumba!", pron:"it rings a bel, mái lips ar síild!"}
    ]},
    coro:{label:"Repaso Semana 34", lineas:[
      {en:"Easier said than done,", es:"Del dicho al hecho hay mucho trecho,", pron:"íisier sed dan dan,"},
      {en:"no pain, no gain,", es:"sin esfuerzo no hay recompensa,", pron:"nóu péin, nóu guéin,"},
      {en:"practice what you preach,", es:"predica con el ejemplo,", pron:"práctis uát iú príich,"},
      {en:"the sky's the limit!", es:"¡el cielo es el límite!", pron:"de skáis de límit!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Unit ten is done, let off some steam,", es:"Unidad diez lista, desahógate,", pron:"iúnit ten is dan, let of sam stíim,"},
      {en:"One third remaining, keep a low profile,", es:"Queda una tercera parte, pasa desapercibido,", pron:"uán zerd riméining, kíip a lóu próufail,"},
      {en:"Milestone reached, lie low for a while,", es:"Meta alcanzada, quédate quieto un tiempo,", pron:"máilstoun ríicht, lái lóu for a uáil,"},
      {en:"See you in unit eleven, take a rain check!", es:"Nos vemos en la unidad once, ¡lo dejamos para otro día!", pron:"síi iú in iúnit iléven, téik a réin chek!"}
    ]}
  },
  { numero:37, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Hold your horses,", es:"Espera un momento, no te aceleres,", pron:"jóuld iór jórses,"},
      {en:"get the show on the road,", es:"pongamos esto en marcha,", pron:"get de shóu on de róud,"},
      {en:"the wheels are turning,", es:"las cosas ya se mueven,", pron:"de uíils ar térning,"},
      {en:"full steam ahead!", es:"¡a toda máquina!", pron:"ful stíim ajéd!"}
    ]},
    precoro:{label:"Repaso Semana 36", lineas:[
      {en:"Let off some steam, keep a low profile,", es:"Desahógate, pasa desapercibido,", pron:"let of sam stíim, kíip a lóu próufail,"},
      {en:"lie low for a while, take a rain check!", es:"quédate quieto un tiempo, ¡lo dejamos para otro día!", pron:"lái lóu for a uáil, téik a réin chek!"}
    ]},
    coro:{label:"Repaso Semana 35", lineas:[
      {en:"A penny for your thoughts,", es:"¿En qué estás pensando?", pron:"a péni for iór zots,"},
      {en:"it's on the tip of my tongue,", es:"lo tengo en la punta de la lengua,", pron:"its on de tip av mái tang,"},
      {en:"it rings a bell,", es:"me suena,", pron:"it rings a bel,"},
      {en:"my lips are sealed!", es:"¡soy una tumba!", pron:"mái lips ar síild!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Hold your horses, let's touch base first,", es:"Espera un momento, hablemos primero,", pron:"jóuld iór jórses, lets tach béis ferst,"},
      {en:"Get the show on the road, think outside the box,", es:"Pongamos esto en marcha, piensa fuera de lo común,", pron:"get de shóu on de róud, zink autsáid de box,"},
      {en:"Keep me in the loop, the wheels are turning,", es:"Mantenme informado, las cosas ya se mueven,", pron:"kíip mi in de lúup, de uíils ar térning,"},
      {en:"Let's circle back later, full steam ahead!", es:"Retomemos esto luego, ¡a toda máquina!", pron:"lets sérkol bak léiter, ful stíim ajéd!"}
    ]}
  },
  { numero:38, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"In a pickle,", es:"En un aprieto,", pron:"in a píkol,"},
      {en:"up the creek,", es:"en problemas,", pron:"ap de kríik,"},
      {en:"at a crossroads,", es:"en una encrucijada,", pron:"at a crósrouds,"},
      {en:"back against the wall!", es:"¡entre la espada y la pared!", pron:"bak aguénst de uól!"}
    ]},
    precoro:{label:"Repaso Semana 37", lineas:[
      {en:"Hold your horses, get the show on the road,", es:"Espera un momento, no te aceleres, pongamos esto en marcha,", pron:"jóuld iór jórses, get de shóu on de róud,"},
      {en:"the wheels are turning, full steam ahead!", es:"las cosas ya se mueven, ¡a toda máquina!", pron:"de uíils ar térning, ful stíim ajéd!"}
    ]},
    coro:{label:"Repaso Semana 36", lineas:[
      {en:"Let off some steam,", es:"Desahógate,", pron:"let of sam stíim,"},
      {en:"keep a low profile,", es:"pasa desapercibido,", pron:"kíip a lóu próufail,"},
      {en:"lie low for a while,", es:"quédate quieto un tiempo,", pron:"lái lóu for a uáil,"},
      {en:"take a rain check!", es:"¡lo dejamos para otro día!", pron:"téik a réin chek!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"No interpreter? I'm in a pickle,", es:"¿Sin intérprete? Estoy en un aprieto,", pron:"nóu intérpreter? áim in a píkol,"},
      {en:"Wrong body language, up the creek,", es:"Lenguaje corporal equivocado, en problemas,", pron:"rong bádi lánguich, ap de kríik,"},
      {en:"Gift giving customs? I'm at a crossroads,", es:"¿Costumbres para dar regalos? Estoy en una encrucijada,", pron:"guift guíving cástoms? áim at a crósrouds,"},
      {en:"Be aware of business etiquette, back against the wall!", es:"Conoce la etiqueta de negocios, ¡entre la espada y la pared!", pron:"bi auér av bísnes étiket, bak aguénst de uól!"}
    ]}
  },
  { numero:39, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Wing it,", es:"Improvisa,", pron:"uíng it,"},
      {en:"go out on a limb,", es:"arriésgate,", pron:"góu áut on a lim,"},
      {en:"take the plunge,", es:"lánzate,", pron:"téik de plandch,"},
      {en:"fortune favors the bold!", es:"¡la fortuna favorece a los valientes!", pron:"fórchun féivors de bóuld!"}
    ]},
    precoro:{label:"Repaso Semana 38", lineas:[
      {en:"In a pickle, up the creek,", es:"En un aprieto, en problemas,", pron:"in a píkol, ap de kríik,"},
      {en:"at a crossroads, back against the wall!", es:"en una encrucijada, ¡entre la espada y la pared!", pron:"at a crósrouds, bak aguénst de uól!"}
    ]},
    coro:{label:"Repaso Semana 37", lineas:[
      {en:"Hold your horses,", es:"Espera un momento, no te aceleres,", pron:"jóuld iór jórses,"},
      {en:"get the show on the road,", es:"pongamos esto en marcha,", pron:"get de shóu on de róud,"},
      {en:"the wheels are turning,", es:"las cosas ya se mueven,", pron:"de uíils ar térning,"},
      {en:"full steam ahead!", es:"¡a toda máquina!", pron:"ful stíim ajéd!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"A merger? Don't just wing it,", es:"¿Una fusión? No improvises,", pron:"a mérdyer? dont dyast uíng it,"},
      {en:"We need due diligence before we go out on a limb,", es:"Necesitamos la debida diligencia antes de arriesgarnos,", pron:"uí níid diú díliyens bifór uí góu áut on a lim,"},
      {en:"The shareholders want to take the plunge,", es:"Los accionistas quieren lanzarse,", pron:"de shérjoulders uánt tu téik de plandch,"},
      {en:"Sign the letter of intent, fortune favors the bold!", es:"Firma la carta de intención, ¡la fortuna favorece a los valientes!", pron:"sáin de léter av inténd, fórchun féivors de bóuld!"}
    ]}
  },
  { numero:40, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Are you pulling my leg?", es:"¿Me estás tomando el pelo?", pron:"ar iú púling mái leg?"},
      {en:"keep a straight face,", es:"no te rías,", pron:"kíip a stréit féis,"},
      {en:"crack a smile,", es:"suelta una sonrisa,", pron:"crak a smáil,"},
      {en:"laugh your head off!", es:"¡muérete de la risa!", pron:"laf iór jed of!"}
    ]},
    precoro:{label:"Repaso Semana 39", lineas:[
      {en:"Wing it, go out on a limb,", es:"Improvisa, arriésgate,", pron:"uíng it, góu áut on a lim,"},
      {en:"take the plunge, fortune favors the bold!", es:"lánzate, ¡la fortuna favorece a los valientes!", pron:"téik de plandch, fórchun féivors de bóuld!"}
    ]},
    coro:{label:"Repaso Semana 38", lineas:[
      {en:"In a pickle,", es:"En un aprieto,", pron:"in a píkol,"},
      {en:"up the creek,", es:"en problemas,", pron:"ap de kríik,"},
      {en:"at a crossroads,", es:"en una encrucijada,", pron:"at a crósrouds,"},
      {en:"back against the wall!", es:"¡entre la espada y la pared!", pron:"bak aguénst de uól!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Our marketing strategy is ready, are you pulling my leg?", es:"Nuestra estrategia de marketing está lista, ¿me estás tomando el pelo?", pron:"áuer márketing strátedyi is rédi, ar iú púling mái leg?"},
      {en:"A competitive analysis? Keep a straight face,", es:"¿Un análisis de la competencia? No te rías,", pron:"a compétitiv análisis? kíip a stréit féis,"},
      {en:"Brand awareness is up, crack a smile,", es:"El reconocimiento de marca subió, suelta una sonrisa,", pron:"brand auérnes is ap, crak a smáil,"},
      {en:"That customer persona? Laugh your head off!", es:"¿Ese perfil de cliente? ¡Muérete de la risa!", pron:"dat cástomer persóuna? laf iór jed of!"}
    ]}
  },
  { numero:41, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Give the cold shoulder,", es:"Ignorar a alguien,", pron:"guív de cóuld shóulder,"},
      {en:"bury the hatchet,", es:"hacer las paces,", pron:"béri de játchet,"},
      {en:"clear the air,", es:"aclarar las cosas,", pron:"clíar di er,"},
      {en:"turn over a new leaf!", es:"¡pasar la página!", pron:"tern óuver a niú líif!"}
    ]},
    precoro:{label:"Repaso Semana 40", lineas:[
      {en:"Are you pulling my leg? keep a straight face,", es:"¿Me estás tomando el pelo? no te rías,", pron:"ar iú púling mái leg? kíip a stréit féis,"},
      {en:"crack a smile, laugh your head off!", es:"suelta una sonrisa, ¡muérete de la risa!", pron:"crak a smáil, laf iór jed of!"}
    ]},
    coro:{label:"Repaso Semana 39", lineas:[
      {en:"Wing it,", es:"Improvisa,", pron:"uíng it,"},
      {en:"go out on a limb,", es:"arriésgate,", pron:"góu áut on a lim,"},
      {en:"take the plunge,", es:"lánzate,", pron:"téik de plandch,"},
      {en:"fortune favors the bold!", es:"¡la fortuna favorece a los valientes!", pron:"fórchun féivors de bóuld!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Don't give the cold shoulder to our brand voice,", es:"No ignores la voz de nuestra marca,", pron:"dont guív de cóuld shóulder tu áuer brand vóis,"},
      {en:"Design and marketing, bury the hatchet,", es:"Diseño y marketing, hagan las paces,", pron:"disáin and márketing, béri de játchet,"},
      {en:"New brand guidelines to clear the air,", es:"Nuevas guías de marca para aclarar las cosas,", pron:"niú brand gáidlains tu clíar di er,"},
      {en:"Rebranding and a new logo, turn over a new leaf!", es:"Cambio de marca y un logo nuevo, ¡pasemos la página!", pron:"ribránding and a niú lóugo, tern óuver a niú líif!"}
    ]}
  },
  { numero:42, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"An idiom master, that's what you are,", es:"Un maestro de los modismos, eso es lo que eres,", pron:"an ídiom máster, dats uát iú ar,"},
      {en:"you've gone the extra mile,", es:"has dado un esfuerzo extra,", pron:"iúv gan de éxtra máil,"},
      {en:"speaking like a native now,", es:"hablando como nativo ahora,", pron:"spíiking láik a néitiv náu,"},
      {en:"take a bow!", es:"¡haz una reverencia, celébralo!", pron:"téik a báu!"}
    ]},
    precoro:{label:"Repaso Semana 41", lineas:[
      {en:"Give the cold shoulder, bury the hatchet,", es:"Ignorar a alguien, hacer las paces,", pron:"guív de cóuld shóulder, béri de játchet,"},
      {en:"clear the air, turn over a new leaf!", es:"aclarar las cosas, ¡pasar la página!", pron:"clíar di er, tern óuver a niú líif!"}
    ]},
    coro:{label:"Repaso Semana 40", lineas:[
      {en:"Are you pulling my leg?", es:"¿Me estás tomando el pelo?", pron:"ar iú púling mái leg?"},
      {en:"keep a straight face,", es:"no te rías,", pron:"kíip a stréit féis,"},
      {en:"crack a smile,", es:"suelta una sonrisa,", pron:"crak a smáil,"},
      {en:"laugh your head off!", es:"¡muérete de la risa!", pron:"laf iór jed of!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"An idiom master, that's what you are, on our e-commerce platform,", es:"Un maestro de los modismos, eso eres, en nuestra tienda en línea,", pron:"an ídiom máster, dats uát iú ar, on áuer í-cómers plátform,"},
      {en:"You've gone the extra mile with the checkout process,", es:"Diste un paso más con el proceso de pago,", pron:"iúv gon di éxtra máil uid de chékaut próses,"},
      {en:"Great customer reviews, speaking like a native now,", es:"Excelentes reseñas de clientes, ya hablas como nativo,", pron:"gréit cástomer riviús, spíiking láik a néitiv náu,"},
      {en:"Order fulfillment is done, take a bow!", es:"El despacho de pedidos está listo, ¡haz una reverencia!", pron:"órder fulfílment is dan, téik a báu!"}
    ]}
  }
];

const FIJAS_FASE4 = {
  precoro: [
    {en:"Refined and natural, that's my way,", es:"Refinado y natural, así es mi manera,", pron:"rifáind and náchural, dats mái uéi,"},
    {en:"Nuance and polish, come what may,", es:"Matiz y pulido, pase lo que pase,", pron:"niuáns and pálish, cam uát méi,"}
  ],
  pedal: [
    {en:"Every subtlety, I understand,", es:"Cada sutileza, la entiendo,", pron:"évri sátolti, ái anderstánd,"},
    {en:"Native fluency, close at hand!", es:"¡Fluidez nativa, al alcance de la mano!", pron:"néitiv flúensi, clóus at jand!"}
  ],
  coro: [
    {en:"With all due respect,", es:"Con todo respeto,", pron:"uid ol diú rispéct,"},
    {en:"needless to say,", es:"no hace falta decir,", pron:"nídles tu séi,"},
    {en:"more often than not,", es:"la mayoría de las veces,", pron:"mor áften dan nat,"},
    {en:"suffice it to say!", es:"¡basta con decir!", pron:"safáis it tu séi!"}
  ],
  outro: [
    {en:"See you next week, native soul,", es:"Nos vemos la próxima semana, alma nativa,", pron:"síi iú next uíik, néitiv sóul,"},
    {en:"Mastery is our final goal,", es:"El dominio es nuestra meta final.", pron:"mástri is áur fáinal góul,"}
  ]
};

const FASE4_SEMANAS = [
  { numero:1, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"With all due respect,", es:"Con todo respeto,", pron:"uid ol diú rispéct,"},
      {en:"needless to say,", es:"no hace falta decir,", pron:"nídles tu séi,"},
      {en:"more often than not,", es:"la mayoría de las veces,", pron:"mor áften dan nat,"},
      {en:"suffice it to say,", es:"basta con decir,", pron:"safáis it tu séi,"},
      {en:"if I may add...", es:"si puedo agregar...", pron:"if ái méi ad..."}
    ]},
    precoro:{label:"Repaso Fase 3, Semana 42", lineas:[
      {en:"An idiom master, that's what you are, you've gone the extra mile,", es:"Un maestro de los modismos, eso es lo que eres, has dado un esfuerzo extra,", pron:"an ídiom máster, dats uát iú ar, iúv gan de éxtra máil,"},
      {en:"speaking like a native now, take a bow!", es:"hablando como nativo ahora, ¡haz una reverencia, celébralo!", pron:"spíiking láik a néitiv náu, téik a báu!"}
    ]},
    coro:{label:"Repaso Fase 3, Semana 41", lineas:[
      {en:"Give the cold shoulder,", es:"Ignorar a alguien,", pron:"guív de cóuld shóulder,"},
      {en:"bury the hatchet,", es:"hacer las paces,", pron:"béri de játchet,"},
      {en:"clear the air,", es:"aclarar las cosas,", pron:"clíar di er,"},
      {en:"turn over a new leaf!", es:"¡pasar la página!", pron:"tern óuver a niú líif!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"With all due respect, the guest experience comes first,", es:"Con todo respeto, la experiencia del huésped va primero,", pron:"uid ol diú rispéct, de guest expíriens cams ferst,"},
      {en:"Needless to say, the concierge service is key,", es:"Sobra decir que el servicio de conserjería es clave,", pron:"níidles tu séi, de consiérch sérvis is kíi,"},
      {en:"More often than not, group bookings raise the occupancy rate,", es:"La mayoría de las veces, las reservas grupales suben la tasa de ocupación,", pron:"mor ófen dan nat, grup búkings réis di okiupánsi réit,"},
      {en:"Suffice it to say, the amenities matter, if I may add...", es:"Basta con decir que las comodidades importan, si me permites agregar...", pron:"safáis it tu séi, di ámenitis máter, if ái méi ad..."}
    ]}
  },
  { numero:2, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"By and large,", es:"En general,", pron:"bái and larch,"},
      {en:"for the most part,", es:"en su mayor parte,", pron:"for de móust part,"},
      {en:"strictly speaking,", es:"hablando estrictamente,", pron:"stríctli spíiking,"},
      {en:"loosely speaking,", es:"hablando en términos generales,", pron:"lúusli spíiking,"}
    ]},
    precoro:{label:"Repaso Semana 1", lineas:[
      {en:"With all due respect, needless to say, more often than not,", es:"Con todo respeto, no hace falta decir, la mayoría de las veces,", pron:"uid ol diú rispéct, nídles tu séi, mor áften dan nat,"},
      {en:"suffice it to say, if I may add...", es:"basta con decir, si puedo agregar...", pron:"safáis it tu séi, if ái méi ad..."}
    ]},
    coro:{label:"Repaso Fase 3, Semana 42", lineas:[
      {en:"An idiom master, that's what you are,", es:"Un maestro de los modismos, eso es lo que eres,", pron:"an ídiom máster, dats uát iú ar,"},
      {en:"you've gone the extra mile,", es:"has dado un esfuerzo extra,", pron:"iúv gan de éxtra máil,"},
      {en:"speaking like a native now,", es:"hablando como nativo ahora,", pron:"spíiking láik a néitiv náu,"},
      {en:"take a bow!", es:"¡haz una reverencia, celébralo!", pron:"téik a báu!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"By and large, the entertainment industry runs on royalties,", es:"En términos generales, la industria del entretenimiento vive de las regalías,", pron:"bái and lardch, di entertéinment índastri rans on róialtis,"},
      {en:"For the most part, streaming rights pay the bills,", es:"En su mayor parte, los derechos de streaming pagan las cuentas,", pron:"for de móust part, stríiming ráits péi de bils,"},
      {en:"Strictly speaking, lobbying shapes public policy,", es:"En sentido estricto, el cabildeo moldea la política pública,", pron:"stríctli spíiking, lóbiing shéips páblic pólisi,"},
      {en:"Loosely speaking, it's a grassroots campaign,", es:"Hablando a grandes rasgos, es una campaña de base,", pron:"lúusli spíiking, its a grásruuts campéin,"}
    ]}
  },
  { numero:3, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"To some extent,", es:"Hasta cierto punto,", pron:"tu sam exténd,"},
      {en:"to a certain degree,", es:"hasta cierto grado,", pron:"tu a cértan digríi,"},
      {en:"up to a point,", es:"hasta cierto punto,", pron:"ap tu a póint,"},
      {en:"within reason!", es:"¡dentro de lo razonable!", pron:"uidín ríizon!"}
    ]},
    precoro:{label:"Repaso Semana 2", lineas:[
      {en:"By and large, for the most part,", es:"En general, en su mayor parte,", pron:"bái and larch, for de móust part,"},
      {en:"strictly speaking, loosely speaking,", es:"hablando estrictamente, hablando en términos generales,", pron:"stríctli spíiking, lúusli spíiking,"}
    ]},
    coro:{label:"Repaso Semana 1", lineas:[
      {en:"With all due respect,", es:"Con todo respeto,", pron:"uid ol diú rispéct,"},
      {en:"needless to say,", es:"no hace falta decir,", pron:"nídles tu séi,"},
      {en:"more often than not,", es:"la mayoría de las veces,", pron:"mor áften dan nat,"},
      {en:"suffice it to say,", es:"basta con decir,", pron:"safáis it tu séi,"},
      {en:"if I may add...", es:"si puedo agregar...", pron:"if ái méi ad..."}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"To some extent, we need to bite the bullet,", es:"Hasta cierto punto, tenemos que hacer de tripas corazón,", pron:"tu sam exténd, uí níid tu báit de búlet,"},
      {en:"To a certain degree, it's a game changer,", es:"Hasta cierto grado, es algo que cambia las reglas del juego,", pron:"tu a sérten digríi, its a guéim chéindyer,"},
      {en:"Up to a point, leave no stone unturned,", es:"Hasta cierto punto, no dejes piedra sin mover,", pron:"ap tu a póint, líiv nóu stóun antérnd,"},
      {en:"Hit the ground running and call the shots, within reason!", es:"Arranca con todo y toma las decisiones, ¡dentro de lo razonable!", pron:"jit de gráund ráning and col de shots, uidín ríison!"}
    ]}
  },
  { numero:4, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"As it happens,", es:"Da la casualidad de que,", pron:"as it jápens,"},
      {en:"as luck would have it,", es:"quiso la suerte que,", pron:"as lak uud jav it,"},
      {en:"much to my surprise,", es:"para mi sorpresa,", pron:"mach tu mái serpráis,"},
      {en:"oddly enough!", es:"¡curiosamente!", pron:"ádli ináf!"}
    ]},
    precoro:{label:"Repaso Semana 3", lineas:[
      {en:"To some extent, to a certain degree,", es:"Hasta cierto punto, hasta cierto grado,", pron:"tu sam exténd, tu a cértan digríi,"},
      {en:"up to a point, within reason!", es:"hasta cierto punto, ¡dentro de lo razonable!", pron:"ap tu a póint, uidín ríizon!"}
    ]},
    coro:{label:"Repaso Semana 2", lineas:[
      {en:"By and large,", es:"En general,", pron:"bái and larch,"},
      {en:"for the most part,", es:"en su mayor parte,", pron:"for de móust part,"},
      {en:"strictly speaking,", es:"hablando estrictamente,", pron:"stríctli spíiking,"},
      {en:"loosely speaking,", es:"hablando en términos generales,", pron:"lúusli spíiking,"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"As it happens, our global supply chain relies on procurement,", es:"Resulta que nuestra cadena de suministro global depende de las compras,", pron:"as it jápens, áuer glóubal suplái chéin riláis on prociúrment,"},
      {en:"As luck would have it, just-in-time delivery worked,", es:"Por suerte, la entrega justo a tiempo funcionó,", pron:"as lak uúd jav it, dyast-in-táim delíveri uérkt,"},
      {en:"Much to my surprise, the distribution center had a disruption,", es:"Para mi sorpresa, el centro de distribución tuvo una interrupción,", pron:"mach tu mái serpráis, de distribiúshon sénter jad a disrápshon,"},
      {en:"Oddly enough, energy efficiency saved the day!", es:"Curiosamente, ¡la eficiencia energética salvó el día!", pron:"ódli ináf, énerdyi efíshensi séivd de déi!"}
    ]}
  },
  { numero:5, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"In light of this,", es:"A la luz de esto,", pron:"in láit of dis,"},
      {en:"given the circumstances,", es:"dadas las circunstancias,", pron:"guíven de sércamstánsis,"},
      {en:"under these conditions,", es:"bajo estas condiciones,", pron:"ánder díis candíshions,"},
      {en:"as things stand!", es:"¡tal como están las cosas!", pron:"as zings stand!"}
    ]},
    precoro:{label:"Repaso Semana 4", lineas:[
      {en:"As it happens, as luck would have it,", es:"Da la casualidad de que, quiso la suerte que,", pron:"as it jápens, as lak uud jav it,"},
      {en:"much to my surprise, oddly enough!", es:"para mi sorpresa, ¡curiosamente!", pron:"mach tu mái serpráis, ádli ináf!"}
    ]},
    coro:{label:"Repaso Semana 3", lineas:[
      {en:"To some extent,", es:"Hasta cierto punto,", pron:"tu sam exténd,"},
      {en:"to a certain degree,", es:"hasta cierto grado,", pron:"tu a cértan digríi,"},
      {en:"up to a point,", es:"hasta cierto punto,", pron:"ap tu a póint,"},
      {en:"within reason!", es:"¡dentro de lo razonable!", pron:"uidín ríizon!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"In light of this, our brand portfolio supports market expansion,", es:"A la luz de esto, nuestro portafolio de marcas apoya la expansión de mercado,", pron:"in láit av dis, áuer brand portfólio supórts márket expánshon,"},
      {en:"Given the circumstances, check the import regulations,", es:"Dadas las circunstancias, revisa las normas de importación,", pron:"guíven de sérkamstanses, chek di ímport reguiuléishons,"},
      {en:"Under these conditions, adapt to the local market,", es:"En estas condiciones, adáptate al mercado local,", pron:"ánder díis condíshons, adápt tu de lóucal márket,"},
      {en:"We need more shelf space, as things stand!", es:"Necesitamos más espacio en góndola, ¡tal como están las cosas!", pron:"uí níid mor shelf spéis, as zings stand!"}
    ]},
    puente:{label:"Repaso profundo — Semana 42 (Fase 3)", lineas:[
      {en:"You've gone the extra mile,", es:"Has dado un esfuerzo extra,", pron:"iúv gan de éxtra máil,"},
      {en:"speaking like a native now, take a bow!", es:"¡hablando como nativo ahora, celébralo!", pron:"spíiking láik a néitiv náu, téik a báu!"}
    ]}
  },
  { numero:6, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"On the whole,", es:"En general, considerándolo todo,", pron:"on de jóul,"},
      {en:"on balance,", es:"en balance,", pron:"on bálans,"},
      {en:"be that as it may,", es:"sea como sea,", pron:"bi dat as it méi,"},
      {en:"having said that!", es:"¡dicho esto!", pron:"jáving sed dat!"}
    ]},
    precoro:{label:"Repaso Semana 5", lineas:[
      {en:"In light of this, given the circumstances,", es:"A la luz de esto, dadas las circunstancias,", pron:"in láit of dis, guíven de sércamstánsis,"},
      {en:"under these conditions, as things stand!", es:"bajo estas condiciones, ¡tal como están las cosas!", pron:"ánder díis candíshions, as zings stand!"}
    ]},
    coro:{label:"Repaso Semana 4", lineas:[
      {en:"As it happens,", es:"Da la casualidad de que,", pron:"as it jápens,"},
      {en:"as luck would have it,", es:"quiso la suerte que,", pron:"as lak uud jav it,"},
      {en:"much to my surprise,", es:"para mi sorpresa,", pron:"mach tu mái serpráis,"},
      {en:"oddly enough!", es:"¡curiosamente!", pron:"ádli ináf!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"On the whole, our network infrastructure needs more bandwidth,", es:"En general, nuestra infraestructura de red necesita más ancho de banda,", pron:"on de jóul, áuer nétuerk ínfrastrakchur níids mor bándwidz,"},
      {en:"On balance, fiber optic beats the old signal coverage,", es:"Sopesándolo todo, la fibra óptica supera la vieja cobertura de señal,", pron:"on bálans, fáiber óptic bíits di óuld sígnal cáverich,"},
      {en:"Be that as it may, four fifths done,", es:"Sea como sea, cuatro quintas partes listas,", pron:"bi dat as it méi, for fifzs dan,"},
      {en:"One fifth remaining, unstoppable, having said that!", es:"Queda una quinta parte, imparables, ¡dicho esto!", pron:"uán fifz riméining, anstópabol, jáving sed dat!"}
    ]}
  },
  { numero:7, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Not to put too fine a point on it,", es:"Para no andarme con rodeos,", pron:"nat tu put tu fáin a póint on it,"},
      {en:"if truth be told,", es:"si he de ser sincero,", pron:"if truz bi tóuld,"},
      {en:"for what it's worth,", es:"para lo que valga,", pron:"for uát its uorz,"},
      {en:"at the risk of sounding blunt!", es:"¡a riesgo de sonar directo!", pron:"at de risk of sáunding blant!"}
    ]},
    precoro:{label:"Repaso Semana 6", lineas:[
      {en:"On the whole, on balance,", es:"En general, considerándolo todo, en balance,", pron:"on de jóul, on bálans,"},
      {en:"be that as it may, having said that!", es:"sea como sea, ¡dicho esto!", pron:"bi dat as it méi, jáving sed dat!"}
    ]},
    coro:{label:"Repaso Semana 5", lineas:[
      {en:"In light of this,", es:"A la luz de esto,", pron:"in láit of dis,"},
      {en:"given the circumstances,", es:"dadas las circunstancias,", pron:"guíven de sércamstánsis,"},
      {en:"under these conditions,", es:"bajo estas condiciones,", pron:"ánder díis candíshions,"},
      {en:"as things stand!", es:"¡tal como están las cosas!", pron:"as zings stand!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Not to put too fine a point on it, our public image needs help,", es:"Para no andarme con rodeos, nuestra imagen pública necesita ayuda,", pron:"nat tu put tu fáin a póint on it, áuer páblic ímich níids jelp,"},
      {en:"If truth be told, the press conference was weak,", es:"A decir verdad, la rueda de prensa fue floja,", pron:"if truz bi tóuld, de pres cónferens uás uíik,"},
      {en:"For what it's worth, update the talking points,", es:"Por si sirve de algo, actualiza los puntos clave,", pron:"for uát its uérz, apdéit de tóking póints,"},
      {en:"Our PR campaign needs more, at the risk of sounding blunt!", es:"Nuestra campaña de relaciones públicas necesita más, ¡a riesgo de sonar directo!", pron:"áuer pi-ár campéin níids mor, at de risk av sáunding blant!"}
    ]}
  },
  { numero:8, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"By no means,", es:"De ninguna manera,", pron:"bái nóu míins,"},
      {en:"far from it,", es:"lejos de eso,", pron:"far fram it,"},
      {en:"quite the opposite,", es:"todo lo contrario,", pron:"cuáit de ápasit,"},
      {en:"nothing could be further from the truth!", es:"¡nada podría estar más lejos de la verdad!", pron:"názin cud bi férder fram de truz!"}
    ]},
    precoro:{label:"Repaso Semana 7", lineas:[
      {en:"Not to put too fine a point on it, if truth be told,", es:"Para no andarme con rodeos, si he de ser sincero,", pron:"nat tu put tu fáin a póint on it, if truz bi tóuld,"},
      {en:"for what it's worth, at the risk of sounding blunt!", es:"para lo que valga, ¡a riesgo de sonar directo!", pron:"for uát its uorz, at de risk of sáunding blant!"}
    ]},
    coro:{label:"Repaso Semana 6", lineas:[
      {en:"On the whole,", es:"En general, considerándolo todo,", pron:"on de jóul,"},
      {en:"on balance,", es:"en balance,", pron:"on bálans,"},
      {en:"be that as it may,", es:"sea como sea,", pron:"bi dat as it méi,"},
      {en:"having said that!", es:"¡dicho esto!", pron:"jáving sed dat!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Is the event timeline late? By no means,", es:"¿El cronograma del evento está atrasado? De ninguna manera,", pron:"is di ivént táimlain léit? bái nóu míins,"},
      {en:"The budget breakdown is a mess? Far from it,", es:"¿El desglose del presupuesto es un desorden? Ni de lejos,", pron:"de bádyet bréikdaun is a mes? far from it,"},
      {en:"The event coordinator is calm, quite the opposite of stress,", es:"El coordinador del evento está tranquilo, todo lo contrario al estrés,", pron:"di ivént coórdineitor is calm, cuáit di óposit av stres,"},
      {en:"No registrations? Nothing could be further from the truth!", es:"¿Sin inscritos? ¡Nada más lejos de la realidad!", pron:"nóu redyistréishons? názing cud bi férder from de truz!"}
    ]}
  },
  { numero:9, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"It goes without saying,", es:"No hace falta decirlo,", pron:"it góus uidáut séing,"},
      {en:"as one might expect,", es:"como cabría esperar,", pron:"as uán máit expéct,"},
      {en:"predictably enough,", es:"como era de esperarse,", pron:"pridíctabli ináf,"},
      {en:"unsurprisingly!", es:"¡sin sorpresa alguna!", pron:"ansarpráisingli!"}
    ]},
    precoro:{label:"Repaso Semana 8", lineas:[
      {en:"By no means, far from it,", es:"De ninguna manera, lejos de eso,", pron:"bái nóu míins, far fram it,"},
      {en:"quite the opposite, nothing could be further from the truth!", es:"todo lo contrario, ¡nada podría estar más lejos de la verdad!", pron:"cuáit de ápasit, názin cud bi férder fram de truz!"}
    ]},
    coro:{label:"Repaso Semana 7", lineas:[
      {en:"Not to put too fine a point on it,", es:"Para no andarme con rodeos,", pron:"nat tu put tu fáin a póint on it,"},
      {en:"if truth be told,", es:"si he de ser sincero,", pron:"if truz bi tóuld,"},
      {en:"for what it's worth,", es:"para lo que valga,", pron:"for uát its uorz,"},
      {en:"at the risk of sounding blunt!", es:"¡a riesgo de sonar directo!", pron:"at de risk of sáunding blant!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"It goes without saying, foot traffic matters,", es:"Ni hace falta decirlo, la afluencia de clientes importa,", pron:"it góus uidáut séing, fut tráfic máters,"},
      {en:"As one might expect, seasonal sales are up,", es:"Como era de esperarse, las ventas de temporada subieron,", pron:"as uán máit expéct, síisonal séils ar ap,"},
      {en:"Predictably enough, a new store layout helps,", es:"Como era previsible, una nueva distribución de la tienda ayuda,", pron:"pridíctabli ináf, a niú stor léiaut jelps,"},
      {en:"Our retail management focuses on loss prevention, unsurprisingly!", es:"Nuestra gestión minorista se enfoca en prevenir pérdidas, ¡como era de esperarse!", pron:"áuer ríteil mánachment fóucuses on los privénshon, ansurpráisingli!"}
    ]},
    puente:{label:"Repaso profundo — Semana 24 (Fase 3)", lineas:[
      {en:"There's a grain of truth in what he said,", es:"Hay algo de verdad en lo que dijo,", pron:"ders a gréin of truz in uát ji sed,"},
      {en:"so let's go all out for this celebration!", es:"¡así que démoslo todo para esta celebración!", pron:"sóu lets góu ol áut for dis selebréishion!"}
    ]}
  },
  { numero:10, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Contrary to popular belief,", es:"Contrario a la creencia popular,", pron:"cántrari tu pápiular bilíif,"},
      {en:"as is often the case,", es:"como suele suceder,", pron:"as is áften de kéis,"},
      {en:"more so than usual,", es:"más de lo usual,", pron:"mor sóu dan iúshual,"},
      {en:"if nothing else!", es:"¡si nada más!", pron:"if názin els!"}
    ]},
    precoro:{label:"Repaso Semana 9", lineas:[
      {en:"It goes without saying, as one might expect,", es:"No hace falta decirlo, como cabría esperar,", pron:"it góus uidáut séing, as uán máit expéct,"},
      {en:"predictably enough, unsurprisingly!", es:"como era de esperarse, ¡sin sorpresa alguna!", pron:"pridíctabli ináf, ansarpráisingli!"}
    ]},
    coro:{label:"Repaso Semana 8", lineas:[
      {en:"By no means,", es:"De ninguna manera,", pron:"bái nóu míins,"},
      {en:"far from it,", es:"lejos de eso,", pron:"far fram it,"},
      {en:"quite the opposite,", es:"todo lo contrario,", pron:"cuáit de ápasit,"},
      {en:"nothing could be further from the truth!", es:"¡nada podría estar más lejos de la verdad!", pron:"názin cud bi férder fram de truz!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Contrary to popular belief, the guest experience comes first,", es:"Contrario a lo que se cree, la experiencia del huésped va primero,", pron:"cóntrari tu pópiular bilíif, de guest expíriens cams ferst,"},
      {en:"As is often the case, group bookings fill the hotel,", es:"Como suele pasar, las reservas grupales llenan el hotel,", pron:"as is ófen de quéis, grup búkings fil de joutél,"},
      {en:"More so than usual, the occupancy rate is high,", es:"Más de lo normal, la tasa de ocupación está alta,", pron:"mor sóu dan iúshual, di okiupánsi réit is jái,"},
      {en:"Book a travel package, if nothing else!", es:"Reserva un paquete turístico, ¡aunque sea eso!", pron:"buk a trável páquech, if názing els!"}
    ]}
  },
  { numero:11, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Granted,", es:"De acuerdo, admitiendo eso,", pron:"gránted,"},
      {en:"conceded,", es:"concedido,", pron:"cansíded,"},
      {en:"fair point,", es:"buen punto,", pron:"fer póint,"},
      {en:"I'll give you that!", es:"¡te doy eso, tienes razón en eso!", pron:"áil guiv iú dat!"}
    ]},
    precoro:{label:"Repaso Semana 10", lineas:[
      {en:"Contrary to popular belief, as is often the case,", es:"Contrario a la creencia popular, como suele suceder,", pron:"cántrari tu pápiular bilíif, as is áften de kéis,"},
      {en:"more so than usual, if nothing else!", es:"más de lo usual, ¡si nada más!", pron:"mor sóu dan iúshual, if názin els!"}
    ]},
    coro:{label:"Repaso Semana 9", lineas:[
      {en:"It goes without saying,", es:"No hace falta decirlo,", pron:"it góus uidáut séing,"},
      {en:"as one might expect,", es:"como cabría esperar,", pron:"as uán máit expéct,"},
      {en:"predictably enough,", es:"como era de esperarse,", pron:"pridíctabli ináf,"},
      {en:"unsurprisingly!", es:"¡sin sorpresa alguna!", pron:"ansarpráisingli!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Granted, the entertainment industry runs on royalties,", es:"De acuerdo, la industria del entretenimiento vive de las regalías,", pron:"gránted, di entertéinment índastri rans on róialtis,"},
      {en:"Conceded, the box office was weak,", es:"Lo admito, la taquilla estuvo floja,", pron:"consíided, de box ófis uás uíik,"},
      {en:"Fair point, streaming rights pay better,", es:"Buen punto, los derechos de streaming pagan mejor,", pron:"fer póint, stríiming ráits péi béter,"},
      {en:"The creative director was right, I'll give you that!", es:"El director creativo tenía razón, ¡eso te lo concedo!", pron:"de criéitiv dairéctor uás ráit, áil guív iú dat!"}
    ]}
  },
  { numero:12, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"For all intents and purposes,", es:"A todos los efectos prácticos,", pron:"for ol inténts and pérposis,"},
      {en:"in every sense of the word,", es:"en todo el sentido de la palabra,", pron:"in évri sens of de uord,"},
      {en:"by definition,", es:"por definición,", pron:"bái definíshion,"},
      {en:"technically speaking!", es:"¡técnicamente hablando!", pron:"técnicali spíiking!"}
    ]},
    precoro:{label:"Repaso Semana 11", lineas:[
      {en:"Granted, conceded,", es:"De acuerdo, admitiendo eso, concedido,", pron:"gránted, cansíded,"},
      {en:"fair point, I'll give you that!", es:"buen punto, ¡te doy eso, tienes razón en eso!", pron:"fer póint, áil guiv iú dat!"}
    ]},
    coro:{label:"Repaso Semana 10", lineas:[
      {en:"Contrary to popular belief,", es:"Contrario a la creencia popular,", pron:"cántrari tu pápiular bilíif,"},
      {en:"as is often the case,", es:"como suele suceder,", pron:"as is áften de kéis,"},
      {en:"more so than usual,", es:"más de lo usual,", pron:"mor sóu dan iúshual,"},
      {en:"if nothing else!", es:"¡si nada más!", pron:"if názin els!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"For all intents and purposes, lobbying shapes public policy,", es:"A todos los efectos, el cabildeo moldea la política pública,", pron:"for ol inténts and púrposes, lóbiing shéips páblic pólisi,"},
      {en:"A public hearing in every sense of the word,", es:"Una audiencia pública en todo el sentido de la palabra,", pron:"a páblic jíaring in évri sens av de uérd,"},
      {en:"By definition, legislation needs a policy maker,", es:"Por definición, la legislación necesita un legislador,", pron:"bái definíshon, ledyisléishon níids a pólisi méiker,"},
      {en:"A grassroots campaign, technically speaking!", es:"Una campaña de base, ¡técnicamente hablando!", pron:"a grásruuts campéin, téknicli spíiking!"}
    ]}
  },
  { numero:13, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Sure enough,", es:"Efectivamente,", pron:"shur ináf,"},
      {en:"as expected,", es:"como se esperaba,", pron:"as expéctid,"},
      {en:"lo and behold,", es:"y he aquí,", pron:"lóu and bijóuld,"},
      {en:"just as planned!", es:"¡justo como se planeó!", pron:"yast as plánd!"}
    ]},
    precoro:{label:"Repaso Semana 12", lineas:[
      {en:"For all intents and purposes, in every sense of the word,", es:"A todos los efectos prácticos, en todo el sentido de la palabra,", pron:"for ol inténts and pérposis, in évri sens of de uord,"},
      {en:"by definition, technically speaking!", es:"por definición, ¡técnicamente hablando!", pron:"bái definíshion, técnicali spíiking!"}
    ]},
    coro:{label:"Repaso Semana 11", lineas:[
      {en:"Granted,", es:"De acuerdo, admitiendo eso,", pron:"gránted,"},
      {en:"conceded,", es:"concedido,", pron:"cansíded,"},
      {en:"fair point,", es:"buen punto,", pron:"fer póint,"},
      {en:"I'll give you that!", es:"¡te doy eso, tienes razón en eso!", pron:"áil guiv iú dat!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Sure enough, we had to bite the bullet,", es:"Efectivamente, tuvimos que hacer de tripas corazón,", pron:"shur ináf, uí jad tu báit de búlet,"},
      {en:"As expected, it was a game changer,", es:"Como se esperaba, cambió las reglas del juego,", pron:"as expécted, it uás a guéim chéindyer,"},
      {en:"Lo and behold, we hit the ground running,", es:"Y de repente, arrancamos con todo,", pron:"lóu and bijóuld, uí jit de gráund ráning,"},
      {en:"Now we call the shots, just as planned!", es:"Ahora tomamos las decisiones, ¡tal como estaba planeado!", pron:"náu uí col de shots, dyast as pland!"}
    ]}
  },
  { numero:14, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"To no avail,", es:"Sin ningún resultado,", pron:"tu nóu avéil,"},
      {en:"in vain,", es:"en vano,", pron:"in véin,"},
      {en:"all for naught,", es:"todo para nada,", pron:"ol for not,"},
      {en:"to little effect!", es:"¡con poco efecto!", pron:"tu lítol iféct!"}
    ]},
    precoro:{label:"Repaso Semana 13", lineas:[
      {en:"Sure enough, as expected,", es:"Efectivamente, como se esperaba,", pron:"shur ináf, as expéctid,"},
      {en:"lo and behold, just as planned!", es:"y he aquí, ¡justo como se planeó!", pron:"lóu and bijóuld, yast as plánd!"}
    ]},
    coro:{label:"Repaso Semana 12", lineas:[
      {en:"For all intents and purposes,", es:"A todos los efectos prácticos,", pron:"for ol inténts and pérposis,"},
      {en:"in every sense of the word,", es:"en todo el sentido de la palabra,", pron:"in évri sens of de uord,"},
      {en:"by definition,", es:"por definición,", pron:"bái definíshion,"},
      {en:"technically speaking!", es:"¡técnicamente hablando!", pron:"técnicali spíiking!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"We tried just-in-time delivery, to no avail,", es:"Probamos la entrega justo a tiempo, sin resultado,", pron:"uí tráid dyast-in-táim delíveri, tu nóu avéil,"},
      {en:"The vendor negotiation was in vain,", es:"La negociación con el proveedor fue en vano,", pron:"de véndor nigoushiéishon uás in véin,"},
      {en:"A supply chain disruption, all for naught,", es:"Una interrupción en la cadena de suministro, todo para nada,", pron:"a suplái chéin disrápshon, ol for not,"},
      {en:"We changed the sourcing strategy, to little effect!", es:"Cambiamos la estrategia de abastecimiento, ¡con poco efecto!", pron:"uí chéindyd de sórsing strátedyi, tu lítol iféct!"}
    ]},
    puente:{label:"Repaso profundo — Semana 6", lineas:[
      {en:"On the whole, it was a good year,", es:"En general, fue un buen año,", pron:"on de jóul, it uás a gud íar,"},
      {en:"having said that, I'm optimistic!", es:"¡dicho esto, soy optimista!", pron:"jáving sed dat, áim áptimistic!"}
    ]}
  },
  { numero:15, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"With that in mind,", es:"Teniendo eso en cuenta,", pron:"uid dat in máind,"},
      {en:"bearing that in mind,", es:"tomando eso en cuenta,", pron:"béring dat in máind,"},
      {en:"keeping that in perspective,", es:"manteniendo eso en perspectiva,", pron:"kíiping dat in perspéctiv,"},
      {en:"looking at the bigger picture!", es:"¡mirando el panorama general!", pron:"lúking at de bíguer píkchur!"}
    ]},
    precoro:{label:"Repaso Semana 14", lineas:[
      {en:"To no avail, in vain,", es:"Sin ningún resultado, en vano,", pron:"tu nóu avéil, in véin,"},
      {en:"all for naught, to little effect!", es:"todo para nada, ¡con poco efecto!", pron:"ol for not, tu lítol iféct!"}
    ]},
    coro:{label:"Repaso Semana 13", lineas:[
      {en:"Sure enough,", es:"Efectivamente,", pron:"shur ináf,"},
      {en:"as expected,", es:"como se esperaba,", pron:"as expéctid,"},
      {en:"lo and behold,", es:"y he aquí,", pron:"lóu and bijóuld,"},
      {en:"just as planned!", es:"¡justo como se planeó!", pron:"yast as plánd!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"With that in mind, the energy sector depends on natural resources,", es:"Teniendo eso en cuenta, el sector energético depende de los recursos naturales,", pron:"uid dat in máind, di énerdyi séctor dipénds on náchural risórses,"},
      {en:"Bearing that in mind, choose renewable resources,", es:"Considerando eso, elige recursos renovables,", pron:"béring dat in máind, chúus riniúabol risórses,"},
      {en:"Keeping that in perspective, mind the environmental impact,", es:"Viéndolo en perspectiva, cuida el impacto ambiental,", pron:"kíiping dat in perspéctiv, máind di envaironméntal ímpact,"},
      {en:"Energy efficiency first, looking at the bigger picture!", es:"La eficiencia energética primero, ¡mirando el panorama completo!", pron:"énerdyi efíshensi ferst, lúking at de bíguer píkchur!"}
    ]}
  },
  { numero:16, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"As luck would have it,", es:"Quiso la suerte que,", pron:"as lak uud jav it,"},
      {en:"against all odds,", es:"contra todo pronóstico,", pron:"aguénst ol ads,"},
      {en:"much to everyone's relief,", es:"para alivio de todos,", pron:"mach tu évriuáns rilíif,"},
      {en:"as fate would have it!", es:"¡quiso el destino!", pron:"as féit uud jav it!"}
    ]},
    precoro:{label:"Repaso Semana 15", lineas:[
      {en:"With that in mind, bearing that in mind,", es:"Teniendo eso en cuenta, tomando eso en cuenta,", pron:"uid dat in máind, béring dat in máind,"},
      {en:"keeping that in perspective, looking at the bigger picture!", es:"manteniendo eso en perspectiva, ¡mirando el panorama general!", pron:"kíiping dat in perspéctiv, lúking at de bíguer píkchur!"}
    ]},
    coro:{label:"Repaso Semana 14", lineas:[
      {en:"To no avail,", es:"Sin ningún resultado,", pron:"tu nóu avéil,"},
      {en:"in vain,", es:"en vano,", pron:"in véin,"},
      {en:"all for naught,", es:"todo para nada,", pron:"ol for not,"},
      {en:"to little effect!", es:"¡con poco efecto!", pron:"tu lítol iféct!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"As luck would have it, our brand portfolio grew,", es:"Por suerte, nuestro portafolio de marcas creció,", pron:"as lak uúd jav it, áuer brand portfólio gru,"},
      {en:"Against all odds, the market expansion worked,", es:"Contra todo pronóstico, la expansión de mercado funcionó,", pron:"aguénst ol ods, de márket expánshon uérkt,"},
      {en:"Much to everyone's relief, we got shelf space,", es:"Para alivio de todos, conseguimos espacio en góndola,", pron:"mach tu évriuans rilíif, uí got shelf spéis,"},
      {en:"International distribution, as fate would have it!", es:"Distribución internacional, ¡como quiso el destino!", pron:"internáshonal distribiúshon, as féit uúd jav it!"}
    ]}
  },
  { numero:17, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"On top of that,", es:"Además de eso,", pron:"on tap of dat,"},
      {en:"not to mention,", es:"sin mencionar,", pron:"nat tu ménshion,"},
      {en:"let alone,", es:"ni hablar de,", pron:"let alóun,"},
      {en:"much less!", es:"¡mucho menos!", pron:"mach les!"}
    ]},
    precoro:{label:"Repaso Semana 16", lineas:[
      {en:"As luck would have it, against all odds,", es:"Quiso la suerte que, contra todo pronóstico,", pron:"as lak uud jav it, aguénst ol ads,"},
      {en:"much to everyone's relief, as fate would have it!", es:"para alivio de todos, ¡quiso el destino!", pron:"mach tu évriuáns rilíif, as féit uud jav it!"}
    ]},
    coro:{label:"Repaso Semana 15", lineas:[
      {en:"With that in mind,", es:"Teniendo eso en cuenta,", pron:"uid dat in máind,"},
      {en:"bearing that in mind,", es:"tomando eso en cuenta,", pron:"béring dat in máind,"},
      {en:"keeping that in perspective,", es:"manteniendo eso en perspectiva,", pron:"kíiping dat in perspéctiv,"},
      {en:"looking at the bigger picture!", es:"¡mirando el panorama general!", pron:"lúking at de bíguer píkchur!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Our telecommunications network needs more bandwidth,", es:"Nuestra red de telecomunicaciones necesita más ancho de banda,", pron:"áuer telecomiunikéishons nétuerk níids mor bándwidz,"},
      {en:"On top of that, the signal coverage is weak,", es:"Además de eso, la cobertura de señal es débil,", pron:"on top av dat, de sígnal cáverich is uíik,"},
      {en:"Not to mention the data plan, let alone fiber optic,", es:"Sin mencionar el plan de datos, mucho menos la fibra óptica,", pron:"nat tu ménshon de déita plan, let alóun fáiber óptic,"},
      {en:"No new service provider, much less a mobile carrier!", es:"Ningún proveedor nuevo, ¡mucho menos un operador móvil!", pron:"nóu niú sérvis prováider, mach les a móubail cárrier!"}
    ]}
  },
  { numero:18, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That said,", es:"Dicho eso,", pron:"dat sed,"},
      {en:"that being the case,", es:"siendo ese el caso,", pron:"dat bíing de kéis,"},
      {en:"such being the situation,", es:"siendo esa la situación,", pron:"sach bíing de situéishion,"},
      {en:"as things currently stand!", es:"¡tal como están las cosas actualmente!", pron:"as zings cárrentli stand!"}
    ]},
    precoro:{label:"Repaso Semana 17", lineas:[
      {en:"On top of that, not to mention,", es:"Además de eso, sin mencionar,", pron:"on tap of dat, nat tu ménshion,"},
      {en:"let alone, much less!", es:"ni hablar de, ¡mucho menos!", pron:"let alóun, mach les!"}
    ]},
    coro:{label:"Repaso Semana 16", lineas:[
      {en:"As luck would have it,", es:"Quiso la suerte que,", pron:"as lak uud jav it,"},
      {en:"against all odds,", es:"contra todo pronóstico,", pron:"aguénst ol ads,"},
      {en:"much to everyone's relief,", es:"para alivio de todos,", pron:"mach tu évriuáns rilíif,"},
      {en:"as fate would have it!", es:"¡quiso el destino!", pron:"as féit uud jav it!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"That said, unit twelve is done,", es:"Dicho esto, la unidad doce está lista,", pron:"dat sed, iúnit tuélv is dan,"},
      {en:"That being the case, four fifths done,", es:"Siendo así, cuatro quintas partes listas,", pron:"dat bíing de quéis, for fifzs dan,"},
      {en:"Such being the situation, the final stretch begins,", es:"Siendo esa la situación, empieza la recta final,", pron:"sach bíing de sichuéishon, de fáinal strech biguíns,"},
      {en:"One fifth remaining, as things currently stand!", es:"Queda una quinta parte, ¡tal como están las cosas ahora!", pron:"uán fifz riméining, as zings kérentli stand!"}
    ]},
    puente:{label:"Repaso profundo — Semana 9", lineas:[
      {en:"It goes without saying, as one might expect,", es:"No hace falta decirlo, como cabría esperar,", pron:"it góus uidáut séing, as uán máit expéct,"},
      {en:"unsurprisingly!", es:"¡sin sorpresa alguna!", pron:"ansarpráisingli!"}
    ]}
  },
  { numero:19, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"By the same token,", es:"Por la misma razón,", pron:"bái de séim tóuken,"},
      {en:"in a similar vein,", es:"en un sentido similar,", pron:"in a símilar véin,"},
      {en:"along the same lines,", es:"en la misma línea de pensamiento,", pron:"alóng de séim láins,"},
      {en:"conversely!", es:"¡a la inversa!", pron:"canvérsli!"}
    ]},
    precoro:{label:"Repaso Semana 18", lineas:[
      {en:"That said, that being the case,", es:"Dicho eso, siendo ese el caso,", pron:"dat sed, dat bíing de kéis,"},
      {en:"such being the situation, as things currently stand!", es:"siendo esa la situación, ¡tal como están las cosas actualmente!", pron:"sach bíing de situéishion, as zings cárrentli stand!"}
    ]},
    coro:{label:"Repaso Semana 17", lineas:[
      {en:"On top of that,", es:"Además de eso,", pron:"on tap of dat,"},
      {en:"not to mention,", es:"sin mencionar,", pron:"nat tu ménshion,"},
      {en:"let alone,", es:"ni hablar de,", pron:"let alóun,"},
      {en:"much less!", es:"¡mucho menos!", pron:"mach les!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"My personal trainer helped me with cardio,", es:"Mi entrenador personal me ayudó con el cardio,", pron:"mái pérsonal tréiner jelpt mi uid cárdio,"},
      {en:"By the same token, strength training,", es:"Del mismo modo, el entrenamiento de fuerza,", pron:"bái de séim tóuken, strengz tréining,"},
      {en:"In a similar vein, the sports team won the tournament,", es:"En la misma línea, el equipo ganó el torneo,", pron:"in a símilar véin, de sports tíim uán de tórnament,"},
      {en:"Along the same lines, a sponsorship deal, conversely!", es:"En ese mismo sentido, un contrato de patrocinio, ¡y a la inversa!", pron:"alóng de séim láins, a spónsorship díil, convérsli!"}
    ]}
  },
  { numero:20, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Simply put,", es:"Dicho de manera simple,", pron:"símpli put,"},
      {en:"to sum it up,", es:"para resumirlo,", pron:"tu sam it ap,"},
      {en:"all told,", es:"contando todo,", pron:"ol tóuld,"},
      {en:"the upshot is!", es:"¡el resultado final es!", pron:"de ápshat is!"}
    ]},
    precoro:{label:"Repaso Semana 19", lineas:[
      {en:"By the same token, in a similar vein,", es:"Por la misma razón, en un sentido similar,", pron:"bái de séim tóuken, in a símilar véin,"},
      {en:"along the same lines, conversely!", es:"en la misma línea de pensamiento, ¡a la inversa!", pron:"alóng de séim láins, canvérsli!"}
    ]},
    coro:{label:"Repaso Semana 18", lineas:[
      {en:"That said,", es:"Dicho eso,", pron:"dat sed,"},
      {en:"that being the case,", es:"siendo ese el caso,", pron:"dat bíing de kéis,"},
      {en:"such being the situation,", es:"siendo esa la situación,", pron:"sach bíing de situéishion,"},
      {en:"as things currently stand!", es:"¡tal como están las cosas actualmente!", pron:"as zings cárrentli stand!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Simply put, the wedding planner is organizing everything,", es:"En pocas palabras, la organizadora de la boda está organizando todo,", pron:"símpli put, de uéding plánner is órganaising évrizing,"},
      {en:"To sum it up, the bride and the groom are happy,", es:"En resumen, la novia y el novio están felices,", pron:"tu sam it ap, de bráid and de grúum ar jápi,"},
      {en:"All told, the reception stayed within the budget,", es:"A fin de cuentas, la recepción se mantuvo dentro del presupuesto,", pron:"ol tóuld, de risépshon stéid uidín de bádyet,"},
      {en:"Wedding vows and anniversaries, the upshot is: love!", es:"Votos matrimoniales y aniversarios, el resultado es: ¡amor!", pron:"uéding váus and anivérsaris, di ápshot is: lav!"}
    ]}
  },
  { numero:21, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Case in point,", es:"Un ejemplo de eso,", pron:"kéis in póint,"},
      {en:"take, for example,", es:"toma, por ejemplo,", pron:"téik, for exámpol,"},
      {en:"a prime example of this,", es:"un ejemplo perfecto de esto,", pron:"a práim exámpol of dis,"},
      {en:"to illustrate!", es:"¡para ilustrar!", pron:"tu ílastreit!"}
    ]},
    precoro:{label:"Repaso Semana 20", lineas:[
      {en:"Simply put, to sum it up,", es:"Dicho de manera simple, para resumirlo,", pron:"símpli put, tu sam it ap,"},
      {en:"all told, the upshot is!", es:"contando todo, ¡el resultado final es!", pron:"ol tóuld, de ápshat is!"}
    ]},
    coro:{label:"Repaso Semana 19", lineas:[
      {en:"By the same token,", es:"Por la misma razón,", pron:"bái de séim tóuken,"},
      {en:"in a similar vein,", es:"en un sentido similar,", pron:"in a símilar véin,"},
      {en:"along the same lines,", es:"en la misma línea de pensamiento,", pron:"alóng de séim láins,"},
      {en:"conversely!", es:"¡a la inversa!", pron:"canvérsli!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Case in point: the judge will review the lawsuit,", es:"Un buen ejemplo: el juez va a revisar la demanda,", pron:"quéis in póint: de dyadch uíl riviú de lóusuut,"},
      {en:"Take, for example, the lawyer's testimony,", es:"Toma, por ejemplo, el testimonio del abogado,", pron:"téik, for egsámpol, de lóiers téstimoni,"},
      {en:"A prime example of this is the jury's verdict,", es:"Un ejemplo perfecto de esto es el veredicto del jurado,", pron:"a práim egsámpol av dis is de dyúris vérdict,"},
      {en:"The plaintiff took a settlement, to illustrate!", es:"El demandante aceptó un acuerdo, ¡para ilustrarlo!", pron:"de pléintif tuk a sétolment, tu ílastreit!"}
    ]}
  },
  { numero:22, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"All things being equal,", es:"Siendo todo igual,", pron:"ol zings bíing íicual,"},
      {en:"other things being equal,", es:"siendo lo demás igual,", pron:"áder zings bíing íicual,"},
      {en:"as a rule of thumb,", es:"como regla general,", pron:"as a rul of zam,"},
      {en:"generally speaking!", es:"¡hablando en general!", pron:"yéneráli spíiking!"}
    ]},
    precoro:{label:"Repaso Semana 21", lineas:[
      {en:"Case in point, take, for example,", es:"Un ejemplo de eso, toma, por ejemplo,", pron:"kéis in póint, téik, for exámpol,"},
      {en:"a prime example of this, to illustrate!", es:"un ejemplo perfecto de esto, ¡para ilustrar!", pron:"a práim exámpol of dis, tu ílastreit!"}
    ]},
    coro:{label:"Repaso Semana 20", lineas:[
      {en:"Simply put,", es:"Dicho de manera simple,", pron:"símpli put,"},
      {en:"to sum it up,", es:"para resumirlo,", pron:"tu sam it ap,"},
      {en:"all told,", es:"contando todo,", pron:"ol tóuld,"},
      {en:"the upshot is!", es:"¡el resultado final es!", pron:"de ápshat is!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"All things being equal, I need to visit the bank branch,", es:"En igualdad de condiciones, necesito ir a la sucursal,", pron:"ol zings bíing íicual, ái níid tu vísit de bank branch,"},
      {en:"Other things being equal, the teller can help,", es:"Si lo demás se mantiene igual, el cajero puede ayudar,", pron:"áder zings bíing íicual, de téler can jelp,"},
      {en:"As a rule of thumb, avoid an overdraft,", es:"Como regla general, evita el sobregiro,", pron:"as a rul av zam, avóid an óuverdraft,"},
      {en:"Check your account statement online, generally speaking!", es:"Revisa tu extracto bancario en línea, ¡en términos generales!", pron:"chek iór acáunt stéitment ónlain, dyénerali spíiking!"}
    ]}
  },
  { numero:23, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Broadly speaking,", es:"En términos generales,", pron:"bródli spíiking,"},
      {en:"in the broadest sense,", es:"en el sentido más amplio,", pron:"in de bródest sens,"},
      {en:"across the board,", es:"de forma pareja para todos,", pron:"acrós de bord,"},
      {en:"without exception!", es:"¡sin excepción!", pron:"uidáut exsépshion!"}
    ]},
    precoro:{label:"Repaso Semana 22", lineas:[
      {en:"All things being equal, other things being equal,", es:"Siendo todo igual, siendo lo demás igual,", pron:"ol zings bíing íicual, áder zings bíing íicual,"},
      {en:"as a rule of thumb, generally speaking!", es:"como regla general, ¡hablando en general!", pron:"as a rul of zam, yéneráli spíiking!"}
    ]},
    coro:{label:"Repaso Semana 21", lineas:[
      {en:"Case in point,", es:"Un ejemplo de eso,", pron:"kéis in póint,"},
      {en:"take, for example,", es:"toma, por ejemplo,", pron:"téik, for exámpol,"},
      {en:"a prime example of this,", es:"un ejemplo perfecto de esto,", pron:"a práim exámpol of dis,"},
      {en:"to illustrate!", es:"¡para ilustrar!", pron:"tu ílastreit!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Broadly speaking, this farmer relies on irrigation,", es:"En líneas generales, este agricultor depende del riego,", pron:"bródli spíiking, dis fármer riláis on irriguéishon,"},
      {en:"In the broadest sense, organic farming,", es:"En el sentido más amplio, agricultura orgánica,", pron:"in de bródest sens, orgánic fárming,"},
      {en:"Across the board, food safety first,", es:"En todos los frentes, la seguridad alimentaria primero,", pron:"acrós de bord, fúud séifti ferst,"},
      {en:"A great harvest and crop yield, without exception!", es:"Una gran cosecha y buen rendimiento, ¡sin excepción!", pron:"a gréit járvest and crop iíild, uidáut eksépshon!"}
    ]}
  },
  { numero:24, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"In due course,", es:"A su debido tiempo,", pron:"in diú cors,"},
      {en:"in the fullness of time,", es:"con el paso del tiempo,", pron:"in de fúlnes of táim,"},
      {en:"sooner or later,", es:"tarde o temprano,", pron:"súuner or léiter,"},
      {en:"all in good time!", es:"¡todo a su tiempo!", pron:"ol in gud táim!"}
    ]},
    precoro:{label:"Repaso Semana 23", lineas:[
      {en:"Broadly speaking, in the broadest sense,", es:"En términos generales, en el sentido más amplio,", pron:"bródli spíiking, in de bródest sens,"},
      {en:"across the board, without exception!", es:"de forma pareja para todos, ¡sin excepción!", pron:"acrós de bord, uidáut exsépshion!"}
    ]},
    coro:{label:"Repaso Semana 22", lineas:[
      {en:"All things being equal,", es:"Siendo todo igual,", pron:"ol zings bíing íicual,"},
      {en:"other things being equal,", es:"siendo lo demás igual,", pron:"áder zings bíing íicual,"},
      {en:"as a rule of thumb,", es:"como regla general,", pron:"as a rul of zam,"},
      {en:"generally speaking!", es:"¡hablando en general!", pron:"yéneráli spíiking!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"In due course, let's keep it under wraps,", es:"A su debido tiempo, mantengámoslo en secreto,", pron:"in diú cors, lets kíip it ánder raps,"},
      {en:"In the fullness of time, let's get down to business,", es:"Con el paso del tiempo, pongámonos manos a la obra,", pron:"in de fúlnes av táim, lets get dáun tu bísnes,"},
      {en:"Sooner or later, don't be on the fence,", es:"Tarde o temprano, no te quedes indeciso,", pron:"súuner or léiter, dont bi on de fens,"},
      {en:"Let's play it by ear, all in good time!", es:"Vamos viendo sobre la marcha, ¡todo a su tiempo!", pron:"lets pléi it bái íar, ol in gud táim!"}
    ]},
    puente:{label:"Repaso profundo — Semana 15", lineas:[
      {en:"With that in mind, let's proceed,", es:"Teniendo eso en cuenta, sigamos,", pron:"uid dat in máind, lets prasíid,"},
      {en:"looking at the bigger picture always does!", es:"¡mirar el panorama general siempre ayuda!", pron:"lúking at de bíguer píkchur ólueis das!"}
    ]}
  },
  { numero:25, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"In no uncertain terms,", es:"Sin lugar a dudas, de forma clara,", pron:"in nóu ansértan terms,"},
      {en:"make no mistake,", es:"no te equivoques,", pron:"méik nóu mistéik,"},
      {en:"rest assured,", es:"quédate tranquilo,", pron:"rest ashúrd,"},
      {en:"mark my words!", es:"¡recuerda mis palabras!", pron:"mark mái uords!"}
    ]},
    precoro:{label:"Repaso Semana 24", lineas:[
      {en:"In due course, in the fullness of time,", es:"A su debido tiempo, con el paso del tiempo,", pron:"in diú cors, in de fúlnes of táim,"},
      {en:"sooner or later, all in good time!", es:"tarde o temprano, ¡todo a su tiempo!", pron:"súuner or léiter, ol in gud táim!"}
    ]},
    coro:{label:"Repaso Semana 23", lineas:[
      {en:"Broadly speaking,", es:"En términos generales,", pron:"bródli spíiking,"},
      {en:"in the broadest sense,", es:"en el sentido más amplio,", pron:"in de bródest sens,"},
      {en:"across the board,", es:"de forma pareja para todos,", pron:"acrós de bord,"},
      {en:"without exception!", es:"¡sin excepción!", pron:"uidáut exsépshion!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"In no uncertain terms, the contractor needs the blueprint,", es:"Sin rodeos, el contratista necesita el plano,", pron:"in nóu ansérten terms, de cóntractor níids de blúprint,"},
      {en:"Make no mistake, the building permit comes first,", es:"No te equivoques, el permiso de construcción va primero,", pron:"méik nóu mistéik, de bílding pérmit cams ferst,"},
      {en:"Rest assured, the safety inspection is done,", es:"Ten por seguro que la inspección de seguridad está hecha,", pron:"rest ashúrd, de séifti inspékshon is dan,"},
      {en:"We'll meet the project deadline, mark my words!", es:"Cumpliremos el plazo del proyecto, ¡acuérdate de mis palabras!", pron:"uíl míit de próyect dédlain, mark mái uérds!"}
    ]}
  },
  { numero:26, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"For the record,", es:"Para que quede constancia,", pron:"for de récord,"},
      {en:"let it be known,", es:"que quede claro,", pron:"let it bi nóun,"},
      {en:"just so we're clear,", es:"solo para que quede claro,", pron:"yast sóu uír clíar,"},
      {en:"to set the record straight!", es:"¡para aclarar las cosas de una vez!", pron:"tu set de récord stréit!"}
    ]},
    precoro:{label:"Repaso Semana 25", lineas:[
      {en:"In no uncertain terms, make no mistake,", es:"Sin lugar a dudas, de forma clara, no te equivoques,", pron:"in nóu ansértan terms, méik nóu mistéik,"},
      {en:"rest assured, mark my words!", es:"quédate tranquilo, ¡recuerda mis palabras!", pron:"rest ashúrd, mark mái uords!"}
    ]},
    coro:{label:"Repaso Semana 24", lineas:[
      {en:"In due course,", es:"A su debido tiempo,", pron:"in diú cors,"},
      {en:"in the fullness of time,", es:"con el paso del tiempo,", pron:"in de fúlnes of táim,"},
      {en:"sooner or later,", es:"tarde o temprano,", pron:"súuner or léiter,"},
      {en:"all in good time!", es:"¡todo a su tiempo!", pron:"ol in gud táim!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"For the record, the automotive industry is testing a prototype,", es:"Para que conste, la industria automotriz está probando un prototipo,", pron:"for de récord, di otomóutiv índastri is tésting a próutotaip,"},
      {en:"Let it be known, an electric vehicle,", es:"Que se sepa, un vehículo eléctrico,", pron:"let it bi nóun, an iléctric víicol,"},
      {en:"Just so we're clear, it passed the crash test,", es:"Para que quede claro, pasó la prueba de choque,", pron:"dyast sóu uír clíar, it past de crash test,"},
      {en:"No recall, to set the record straight!", es:"Sin llamado a revisión, ¡para dejar las cosas claras!", pron:"nóu ríicol, tu set de récord stréit!"}
    ]}
  },
  { numero:27, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"When push comes to shove,", es:"Cuando la situación se pone difícil de verdad,", pron:"uén push cams tu shav,"},
      {en:"if worst comes to worst,", es:"si las cosas se ponen realmente mal,", pron:"if uorst cams tu uorst,"},
      {en:"come what may,", es:"pase lo que pase,", pron:"cam uát méi,"},
      {en:"whatever it takes!", es:"¡lo que sea necesario!", pron:"uatéver it téiks!"}
    ]},
    precoro:{label:"Repaso Semana 26", lineas:[
      {en:"For the record, let it be known,", es:"Para que quede constancia, que quede claro,", pron:"for de récord, let it bi nóun,"},
      {en:"just so we're clear, to set the record straight!", es:"solo para que quede claro, ¡para aclarar las cosas de una vez!", pron:"yast sóu uír clíar, tu set de récord stréit!"}
    ]},
    coro:{label:"Repaso Semana 25", lineas:[
      {en:"In no uncertain terms,", es:"Sin lugar a dudas, de forma clara,", pron:"in nóu ansértan terms,"},
      {en:"make no mistake,", es:"no te equivoques,", pron:"méik nóu mistéik,"},
      {en:"rest assured,", es:"quédate tranquilo,", pron:"rest ashúrd,"},
      {en:"mark my words!", es:"¡recuerda mis palabras!", pron:"mark mái uords!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"When push comes to shove, the airline industry relies on safety,", es:"Cuando llega el momento de la verdad, la industria aérea depende de la seguridad,", pron:"uén push cams tu shav, di érlain índastri riláis on séifti,"},
      {en:"If worst comes to worst, a flight delay,", es:"En el peor de los casos, un retraso de vuelo,", pron:"if uérst cams tu uérst, a fláit diléi,"},
      {en:"Come what may, aircraft maintenance,", es:"Pase lo que pase, mantenimiento de aeronaves,", pron:"cam uát méi, érkraft méintenans,"},
      {en:"Pilot training and flight crew, whatever it takes!", es:"Entrenamiento de pilotos y tripulación, ¡cueste lo que cueste!", pron:"páilot tréining and fláit cru, uatéver it téiks!"}
    ]}
  },
  { numero:28, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"To cap it all off,", es:"Para rematar,", pron:"tu cap it ol of,"},
      {en:"last but not least,", es:"por último pero no menos importante,", pron:"last bat nat líist,"},
      {en:"all said and done,", es:"con todo dicho y hecho,", pron:"ol sed and dan,"},
      {en:"and that's that!", es:"¡y eso es todo!", pron:"and dats dat!"}
    ]},
    precoro:{label:"Repaso Semana 27", lineas:[
      {en:"When push comes to shove, if worst comes to worst,", es:"Cuando la situación se pone difícil de verdad, si las cosas se ponen realmente mal,", pron:"uén push cams tu shav, if uorst cams tu uorst,"},
      {en:"come what may, whatever it takes!", es:"pase lo que pase, ¡lo que sea necesario!", pron:"cam uát méi, uatéver it téiks!"}
    ]},
    coro:{label:"Repaso Semana 26", lineas:[
      {en:"For the record,", es:"Para que quede constancia,", pron:"for de récord,"},
      {en:"let it be known,", es:"que quede claro,", pron:"let it bi nóun,"},
      {en:"just so we're clear,", es:"solo para que quede claro,", pron:"yast sóu uír clíar,"},
      {en:"to set the record straight!", es:"¡para aclarar las cosas de una vez!", pron:"tu set de récord stréit!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"To cap it all off, the cargo ship arrived,", es:"Para rematar, el buque de carga llegó,", pron:"tu cap it ol of, de cárgo ship aráivd,"},
      {en:"Last but not least, the port authority checked it,", es:"Por último, pero no menos importante, la autoridad portuaria lo revisó,", pron:"last bat nat líist, de port ozóriti chekt it,"},
      {en:"All said and done, customs inspection is clear,", es:"A fin de cuentas, la inspección de aduana está en regla,", pron:"ol sed and dan, cástoms inspékshon is clíar,"},
      {en:"Marine insurance paid, and that's that!", es:"El seguro marítimo pagó, ¡y punto!", pron:"maríin inshúrans péid, and dats dat!"}
    ]},
    puente:{label:"Repaso profundo — Semana 19", lineas:[
      {en:"By the same token, we should reconsider,", es:"Por la misma razón, deberíamos reconsiderar,", pron:"bái de séim tóuken, uí shud ricansíder,"},
      {en:"but conversely, there's an upside too!", es:"¡pero a la inversa, también hay un lado positivo!", pron:"bat canvérsli, ders an ápsáid tu!"}
    ]}
  },
  { numero:29, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"You've truly mastered this,", es:"Realmente has dominado esto,", pron:"iúv trúli mástird dis,"},
      {en:"native-level fluency,", es:"fluidez de nivel nativo,", pron:"néitiv-lével flúensi,"},
      {en:"nothing left to learn,", es:"nada más que aprender,", pron:"názin left tu lern,"},
      {en:"you speak like one of us!", es:"¡hablas como uno de nosotros!", pron:"iú spíik láik uán of as!"}
    ]},
    precoro:{label:"Repaso Semana 28", lineas:[
      {en:"To cap it all off, last but not least,", es:"Para rematar, por último pero no menos importante,", pron:"tu cap it ol of, last bat nat líist,"},
      {en:"all said and done, and that's that!", es:"con todo dicho y hecho, ¡y eso es todo!", pron:"ol sed and dan, and dats dat!"}
    ]},
    coro:{label:"Repaso Semana 27", lineas:[
      {en:"When push comes to shove,", es:"Cuando la situación se pone difícil de verdad,", pron:"uén push cams tu shav,"},
      {en:"if worst comes to worst,", es:"si las cosas se ponen realmente mal,", pron:"if uorst cams tu uorst,"},
      {en:"come what may,", es:"pase lo que pase,", pron:"cam uát méi,"},
      {en:"whatever it takes!", es:"¡lo que sea necesario!", pron:"uatéver it téiks!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"The fashion designer is ready, you've truly mastered this,", es:"La diseñadora de modas está lista, realmente dominas esto,", pron:"de fáshon disáiner is rédi, iúv trúli másterd dis,"},
      {en:"Runway show and fashion week, native-level fluency,", es:"Desfile y semana de la moda, fluidez de nativo,", pron:"ránuei shóu and fáshon uíik, néitiv-lével flúensi,"},
      {en:"Textile and garment trends, nothing left to learn,", es:"Tendencias de textiles y prendas, no queda nada por aprender,", pron:"téxtail and gárment trends, názing left tu lern,"},
      {en:"The fashion industry says: you speak like one of us!", es:"La industria de la moda dice: ¡hablas como uno de nosotros!", pron:"de fáshon índastri ses: iú spíik láik uán av as!"}
    ]}
  },
  { numero:30, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"In retrospect,", es:"En retrospectiva,", pron:"in rétrospect,"},
      {en:"with the benefit of hindsight,", es:"viéndolo ahora en perspectiva,", pron:"uid de bénefit av jáindsait,"},
      {en:"looking back,", es:"mirando hacia atrás,", pron:"lúking bak,"},
      {en:"had I only known!", es:"¡si tan solo lo hubiera sabido!", pron:"jad ái óunli nóun!"}
    ]},
    precoro:{label:"Repaso Semana 29", lineas:[
      {en:"You've truly mastered this, native-level fluency,", es:"Realmente has dominado esto, fluidez de nivel nativo,", pron:"iúv trúli mástird dis, néitiv-lével flúensi,"},
      {en:"nothing left to learn, you speak like one of us!", es:"nada más que aprender, ¡hablas como uno de nosotros!", pron:"názin left tu lern, iú spíik láik uán of as!"}
    ]},
    coro:{label:"Repaso Semana 28", lineas:[
      {en:"To cap it all off,", es:"Para rematar,", pron:"tu cap it ol of,"},
      {en:"last but not least,", es:"por último pero no menos importante,", pron:"last bat nat líist,"},
      {en:"all said and done,", es:"con todo dicho y hecho,", pron:"ol sed and dan,"},
      {en:"and that's that!", es:"¡y eso es todo!", pron:"and dats dat!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Unit thirteen is done, in retrospect,", es:"La unidad trece está lista, en retrospectiva,", pron:"iúnit zertíin is dan, in rétrospect,"},
      {en:"Five sixths done, with the benefit of hindsight,", es:"Cinco sextas partes listas, viéndolo en perspectiva,", pron:"fáiv siksz dan, uid de bénefit av jáindsait,"},
      {en:"Looking back, keep the momentum,", es:"Mirando hacia atrás, mantén el impulso,", pron:"lúking bak, kíip de moméntum,"},
      {en:"One sixth to go, had I only known!", es:"Falta una sexta parte, ¡si tan solo lo hubiera sabido!", pron:"uán sixz tu góu, jad ái óunli nóun!"}
    ]}
  },
  { numero:31, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Notwithstanding,", es:"No obstante,", pron:"natuidstánding,"},
      {en:"nevertheless,", es:"sin embargo,", pron:"neverdelés,"},
      {en:"all the same,", es:"de todas formas,", pron:"ol de séim,"},
      {en:"regardless!", es:"¡a pesar de todo!", pron:"rigárdles!"}
    ]},
    precoro:{label:"Repaso Semana 30", lineas:[
      {en:"In retrospect, with the benefit of hindsight,", es:"En retrospectiva, viéndolo ahora en perspectiva,", pron:"in rétrospect, uid de bénefit av jáindsait,"},
      {en:"looking back, had I only known!", es:"mirando hacia atrás, ¡si tan solo lo hubiera sabido!", pron:"lúking bak, jad ái óunli nóun!"}
    ]},
    coro:{label:"Repaso Semana 29", lineas:[
      {en:"You've truly mastered this,", es:"Realmente has dominado esto,", pron:"iúv trúli mástird dis,"},
      {en:"native-level fluency,", es:"fluidez de nivel nativo,", pron:"néitiv-lével flúensi,"},
      {en:"nothing left to learn,", es:"nada más que aprender,", pron:"názin left tu lern,"},
      {en:"you speak like one of us!", es:"¡hablas como uno de nosotros!", pron:"iú spíik láik uán of as!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"This drug needs approval, notwithstanding the clinical trial,", es:"Este medicamento necesita aprobación, no obstante el ensayo clínico,", pron:"dis drag níids aprúuval, natuidstánding de clínical tráial,"},
      {en:"Side effects are rare, nevertheless,", es:"Los efectos secundarios son raros, sin embargo,", pron:"sáid iféts ar rer, neverdelés,"},
      {en:"Read the dosage instructions all the same,", es:"Lee las instrucciones de dosis de todas formas,", pron:"ríid de dóusich instrákshons ol de séim,"},
      {en:"Generic or prescription drug, regardless!", es:"Genérico o con receta, ¡a pesar de todo!", pron:"dyenéric or prescrípshon drag, rigárdles!"}
    ]}
  },
  { numero:32, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"It stands to reason,", es:"Es lógico,", pron:"it stands tu ríison,"},
      {en:"it follows that,", es:"de ahí se deduce que,", pron:"it fólous dat,"},
      {en:"by extension,", es:"por extensión,", pron:"bái exténshon,"},
      {en:"logically speaking!", es:"¡hablando con lógica!", pron:"lódyicli spíiking!"}
    ]},
    precoro:{label:"Repaso Semana 31", lineas:[
      {en:"Notwithstanding, nevertheless,", es:"No obstante, sin embargo,", pron:"natuidstánding, neverdelés,"},
      {en:"all the same, regardless!", es:"de todas formas, ¡a pesar de todo!", pron:"ol de séim, rigárdles!"}
    ]},
    coro:{label:"Repaso Semana 30", lineas:[
      {en:"In retrospect,", es:"En retrospectiva,", pron:"in rétrospect,"},
      {en:"with the benefit of hindsight,", es:"viéndolo ahora en perspectiva,", pron:"uid de bénefit av jáindsait,"},
      {en:"looking back,", es:"mirando hacia atrás,", pron:"lúking bak,"},
      {en:"had I only known!", es:"¡si tan solo lo hubiera sabido!", pron:"jad ái óunli nóun!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"It stands to reason, the game developer needs beta testing,", es:"Es lógico, el desarrollador del juego necesita pruebas beta,", pron:"it stands tu ríison, de guéim divéloper níids béta tésting,"},
      {en:"It follows that the gaming community grows,", es:"De ahí se deduce que la comunidad de jugadores crece,", pron:"it fólous dat de guéiming comiúniti gróus,"},
      {en:"By extension, esports and downloadable content,", es:"Por extensión, deportes electrónicos y contenido descargable,", pron:"bái exténshon, í-sports and dáunloudabol cóntent,"},
      {en:"A new game engine, logically speaking!", es:"Un nuevo motor de juego, ¡hablando con lógica!", pron:"a niú guéim éndyin, lódyicli spíiking!"}
    ]}
  },
  { numero:33, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Point taken,", es:"Entendido tu punto,", pron:"póint téiken,"},
      {en:"duly noted,", es:"debidamente anotado,", pron:"diúli nóuted,"},
      {en:"I stand by it,", es:"lo sostengo,", pron:"ái stand bái it,"},
      {en:"so be it!", es:"¡que así sea!", pron:"sóu bi it!"}
    ]},
    precoro:{label:"Repaso Semana 32", lineas:[
      {en:"It stands to reason, it follows that,", es:"Es lógico, de ahí se deduce que,", pron:"it stands tu ríison, it fólous dat,"},
      {en:"by extension, logically speaking!", es:"por extensión, ¡hablando con lógica!", pron:"bái exténshon, lódyicli spíiking!"}
    ]},
    coro:{label:"Repaso Semana 31", lineas:[
      {en:"Notwithstanding,", es:"No obstante,", pron:"natuidstánding,"},
      {en:"nevertheless,", es:"sin embargo,", pron:"neverdelés,"},
      {en:"all the same,", es:"de todas formas,", pron:"ol de séim,"},
      {en:"regardless!", es:"¡a pesar de todo!", pron:"rigárdles!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"This non-profit organization runs a charity, point taken,", es:"Esta organización sin ánimo de lucro tiene una fundación, entendido tu punto,", pron:"dis non-prófit organiséishon rans a cháriti, póint téiken,"},
      {en:"Every volunteer and donor, duly noted,", es:"Cada voluntario y donante, debidamente anotado,", pron:"évri voluntíar and dóunor, diúli nóuted,"},
      {en:"The fundraising campaign has social impact, I stand by it,", es:"La campaña de recaudación tiene impacto social, lo sostengo,", pron:"de fándreising campéin jas sóushal ímpact, ái stand bái it,"},
      {en:"More community outreach? So be it!", es:"¿Más trabajo con la comunidad? ¡Que así sea!", pron:"mor comiúniti áutriich? sóu bi it!"}
    ]}
  },
  { numero:34, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Off the top of my head,", es:"Así de memoria,", pron:"of de top av mái jed,"},
      {en:"at first glance,", es:"a primera vista,", pron:"at ferst glans,"},
      {en:"on closer inspection,", es:"al mirarlo con más cuidado,", pron:"on clóuser inspékshon,"},
      {en:"upon reflection!", es:"¡después de reflexionar!", pron:"apón rifléctshon!"}
    ]},
    precoro:{label:"Repaso Semana 33", lineas:[
      {en:"Point taken, duly noted,", es:"Entendido tu punto, debidamente anotado,", pron:"póint téiken, diúli nóuted,"},
      {en:"I stand by it, so be it!", es:"lo sostengo, ¡que así sea!", pron:"ái stand bái it, sóu bi it!"}
    ]},
    coro:{label:"Repaso Semana 32", lineas:[
      {en:"It stands to reason,", es:"Es lógico,", pron:"it stands tu ríison,"},
      {en:"it follows that,", es:"de ahí se deduce que,", pron:"it fólous dat,"},
      {en:"by extension,", es:"por extensión,", pron:"bái exténshon,"},
      {en:"logically speaking!", es:"¡hablando con lógica!", pron:"lódyicli spíiking!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Off the top of my head, the manuscript needs a literary agent,", es:"Así de memoria, el manuscrito necesita un agente literario,", pron:"of de top av mái jed, de mániuscript níids a lítereri éidyent,"},
      {en:"At first glance, a good book deal,", es:"A primera vista, un buen contrato editorial,", pron:"at ferst glans, a gud buk díil,"},
      {en:"On closer inspection, the editor wants an ebook,", es:"Al mirarlo con más cuidado, el editor quiere un libro digital,", pron:"on clóuser inspékshon, di éditor uánts an íibuk,"},
      {en:"A big print run and a book launch, upon reflection!", es:"Un gran tiraje y un lanzamiento, ¡después de reflexionar!", pron:"a big print ran and a buk lonch, apón rifléctshon!"}
    ]}
  },
  { numero:35, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"In the interim,", es:"Mientras tanto,", pron:"in di ínterim,"},
      {en:"for the time being,", es:"por ahora,", pron:"for de táim bíing,"},
      {en:"in the meantime,", es:"entretanto,", pron:"in de míintaim,"},
      {en:"until further notice!", es:"¡hasta nuevo aviso!", pron:"antíl férder nóutis!"}
    ]},
    precoro:{label:"Repaso Semana 34", lineas:[
      {en:"Off the top of my head, at first glance,", es:"Así de memoria, a primera vista,", pron:"of de top av mái jed, at ferst glans,"},
      {en:"on closer inspection, upon reflection!", es:"al mirarlo con más cuidado, ¡después de reflexionar!", pron:"on clóuser inspékshon, apón rifléctshon!"}
    ]},
    coro:{label:"Repaso Semana 33", lineas:[
      {en:"Point taken,", es:"Entendido tu punto,", pron:"póint téiken,"},
      {en:"duly noted,", es:"debidamente anotado,", pron:"diúli nóuted,"},
      {en:"I stand by it,", es:"lo sostengo,", pron:"ái stand bái it,"},
      {en:"so be it!", es:"¡que así sea!", pron:"sóu bi it!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"In the interim, the security industry relies on risk management,", es:"Mientras tanto, la industria de seguridad depende de la gestión de riesgos,", pron:"in di ínterim, de sekiúriti índastri riláis on risk mánachment,"},
      {en:"For the time being, run a background check,", es:"Por ahora, haz una verificación de antecedentes,", pron:"for de táim bíing, ran a bákgraund chek,"},
      {en:"In the meantime, the surveillance system is on,", es:"Entretanto, el sistema de vigilancia está encendido,", pron:"in de míintaim, de servéilans sístem is on,"},
      {en:"Follow the emergency protocol until further notice!", es:"Sigue el protocolo de emergencia ¡hasta nuevo aviso!", pron:"fólou di imérdyensi próutocol antíl férder nóutis!"}
    ]}
  },
  { numero:36, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"As it turns out,", es:"Resulta que,", pron:"as it terns áut,"},
      {en:"it transpires that,", es:"se ha sabido que,", pron:"it transpáiers dat,"},
      {en:"come to find out,", es:"al final resultó que,", pron:"cam tu fáind áut,"},
      {en:"who would have thought!", es:"¡quién lo hubiera pensado!", pron:"júu uúd jav zot!"}
    ]},
    precoro:{label:"Repaso Semana 35", lineas:[
      {en:"In the interim, for the time being,", es:"Mientras tanto, por ahora,", pron:"in di ínterim, for de táim bíing,"},
      {en:"in the meantime, until further notice!", es:"entretanto, ¡hasta nuevo aviso!", pron:"in de míintaim, antíl férder nóutis!"}
    ]},
    coro:{label:"Repaso Semana 34", lineas:[
      {en:"Off the top of my head,", es:"Así de memoria,", pron:"of de top av mái jed,"},
      {en:"at first glance,", es:"a primera vista,", pron:"at ferst glans,"},
      {en:"on closer inspection,", es:"al mirarlo con más cuidado,", pron:"on clóuser inspékshon,"},
      {en:"upon reflection!", es:"¡después de reflexionar!", pron:"apón rifléctshon!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"As it turns out, we had to break the ice,", es:"Resulta que tuvimos que romper el hielo,", pron:"as it terns áut, uí jad tu bréik di áis,"},
      {en:"It transpires that we turned the tables,", es:"Se ha sabido que le dimos la vuelta a la situación,", pron:"it transpáiers dat uí ternd de téibols,"},
      {en:"Come to find out, they didn't pull the plug,", es:"Al final resultó que no lo cancelaron,", pron:"cam tu fáind áut, déi dídnt pul de plag,"},
      {en:"Keep your eye on the ball, who would have thought!", es:"No pierdas de vista el objetivo, ¡quién lo hubiera pensado!", pron:"kíip iór ái on de bol, júu uúd jav zot!"}
    ]}
  },
  { numero:37, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Without further ado,", es:"Sin más preámbulos,", pron:"uidáut férder adú,"},
      {en:"let's dive in,", es:"entremos de lleno,", pron:"lets dáiv in,"},
      {en:"to kick things off,", es:"para arrancar,", pron:"tu kik zings of,"},
      {en:"first things first!", es:"¡lo primero es lo primero!", pron:"ferst zings ferst!"}
    ]},
    precoro:{label:"Repaso Semana 36", lineas:[
      {en:"As it turns out, it transpires that,", es:"Resulta que, se ha sabido que,", pron:"as it terns áut, it transpáiers dat,"},
      {en:"come to find out, who would have thought!", es:"al final resultó que, ¡quién lo hubiera pensado!", pron:"cam tu fáind áut, júu uúd jav zot!"}
    ]},
    coro:{label:"Repaso Semana 35", lineas:[
      {en:"In the interim,", es:"Mientras tanto,", pron:"in di ínterim,"},
      {en:"for the time being,", es:"por ahora,", pron:"for de táim bíing,"},
      {en:"in the meantime,", es:"entretanto,", pron:"in de míintaim,"},
      {en:"until further notice!", es:"¡hasta nuevo aviso!", pron:"antíl férder nóutis!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Without further ado, urban planning depends on zoning laws,", es:"Sin más preámbulos, la planeación urbana depende del uso del suelo,", pron:"uidáut férder adú, érban plánning dipénds on zóuning los,"},
      {en:"Let's dive in: public transportation,", es:"Entremos de lleno: transporte público,", pron:"lets dáiv in: páblic transportéishon,"},
      {en:"To kick things off, the city council meets,", es:"Para arrancar, se reúne el concejo municipal,", pron:"tu kik zings of, de síti cáunsil míits,"},
      {en:"A sustainable city, first things first!", es:"Una ciudad sostenible, ¡lo primero es lo primero!", pron:"a sostéinabol síti, ferst zings ferst!"}
    ]}
  },
  { numero:38, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"At the heart of the matter,", es:"En el fondo del asunto,", pron:"at de jart av de máter,"},
      {en:"the crux of the issue,", es:"el punto clave del problema,", pron:"de crax av di íshu,"},
      {en:"the long and short of it,", es:"en pocas palabras,", pron:"de long and short av it,"},
      {en:"that's the gist!", es:"¡esa es la idea principal!", pron:"dats de dyist!"}
    ]},
    precoro:{label:"Repaso Semana 37", lineas:[
      {en:"Without further ado, let's dive in,", es:"Sin más preámbulos, entremos de lleno,", pron:"uidáut férder adú, lets dáiv in,"},
      {en:"to kick things off, first things first!", es:"para arrancar, ¡lo primero es lo primero!", pron:"tu kik zings of, ferst zings ferst!"}
    ]},
    coro:{label:"Repaso Semana 36", lineas:[
      {en:"As it turns out,", es:"Resulta que,", pron:"as it terns áut,"},
      {en:"it transpires that,", es:"se ha sabido que,", pron:"it transpáiers dat,"},
      {en:"come to find out,", es:"al final resultó que,", pron:"cam tu fáind áut,"},
      {en:"who would have thought!", es:"¡quién lo hubiera pensado!", pron:"júu uúd jav zot!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"At the heart of the matter is mental health,", es:"En el fondo del asunto está la salud mental,", pron:"at de jart av de máter is méntal jelz,"},
      {en:"The crux of the issue: burnout prevention,", es:"El punto clave del problema: prevenir el agotamiento,", pron:"de crax av di íshu: bérnaut privénshon,"},
      {en:"The long and short of it: a self-care routine,", es:"En pocas palabras: una rutina de autocuidado,", pron:"de long and short av it: a self-quer rutíin,"},
      {en:"Our wellness program and mindfulness, that's the gist!", es:"Nuestro programa de bienestar y atención plena, ¡esa es la idea principal!", pron:"áuer uélnes próugram and máindfulnes, dats de dyist!"}
    ]}
  },
  { numero:39, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"With the utmost respect,", es:"Con el mayor de los respetos,", pron:"uid di átmoust rispéct,"},
      {en:"if you'll allow me,", es:"si me lo permite,", pron:"if iúl aláu mi,"},
      {en:"by your leave,", es:"con su permiso,", pron:"bái iór líiv,"},
      {en:"much obliged!", es:"¡muy agradecido!", pron:"mach obláidyd!"}
    ]},
    precoro:{label:"Repaso Semana 38", lineas:[
      {en:"At the heart of the matter, the crux of the issue,", es:"En el fondo del asunto, el punto clave del problema,", pron:"at de jart av de máter, de crax av di íshu,"},
      {en:"the long and short of it, that's the gist!", es:"en pocas palabras, ¡esa es la idea principal!", pron:"de long and short av it, dats de dyist!"}
    ]},
    coro:{label:"Repaso Semana 37", lineas:[
      {en:"Without further ado,", es:"Sin más preámbulos,", pron:"uidáut férder adú,"},
      {en:"let's dive in,", es:"entremos de lleno,", pron:"lets dáiv in,"},
      {en:"to kick things off,", es:"para arrancar,", pron:"tu kik zings of,"},
      {en:"first things first!", es:"¡lo primero es lo primero!", pron:"ferst zings ferst!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"With the utmost respect, our remote team relies on trust,", es:"Con el mayor de los respetos, nuestro equipo remoto depende de la confianza,", pron:"uid di átmoust rispéct, áuer rimóut tíim riláis on trast,"},
      {en:"If you'll allow me, asynchronous work,", es:"Si me lo permite, trabajo asincrónico,", pron:"if iúl aláu mi, eisínkronos uérk,"},
      {en:"By your leave, time zone coordination,", es:"Con su permiso, coordinación de zonas horarias,", pron:"bái iór líiv, táim zóun coordinéishon,"},
      {en:"A hybrid work model? Much obliged!", es:"¿Un modelo de trabajo híbrido? ¡Muy agradecido!", pron:"a jáibrid uérk módel? mach obláidyd!"}
    ]}
  },
  { numero:40, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Far be it from me,", es:"Lejos de mí,", pron:"far bi it from mi,"},
      {en:"not that it's my place,", es:"no es que me corresponda,", pron:"nat dat its mái pléis,"},
      {en:"if I may be so bold,", es:"si me permite el atrevimiento,", pron:"if ái méi bi sóu bóuld,"},
      {en:"just a thought!", es:"¡solo una idea!", pron:"dyast a zot!"}
    ]},
    precoro:{label:"Repaso Semana 39", lineas:[
      {en:"With the utmost respect, if you'll allow me,", es:"Con el mayor de los respetos, si me lo permite,", pron:"uid di átmoust rispéct, if iúl aláu mi,"},
      {en:"by your leave, much obliged!", es:"con su permiso, ¡muy agradecido!", pron:"bái iór líiv, mach obláidyd!"}
    ]},
    coro:{label:"Repaso Semana 38", lineas:[
      {en:"At the heart of the matter,", es:"En el fondo del asunto,", pron:"at de jart av de máter,"},
      {en:"the crux of the issue,", es:"el punto clave del problema,", pron:"de crax av di íshu,"},
      {en:"the long and short of it,", es:"en pocas palabras,", pron:"de long and short av it,"},
      {en:"that's the gist!", es:"¡esa es la idea principal!", pron:"dats de dyist!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Far be it from me, but this restaurant chain needs new food trends,", es:"Lejos de mí, pero esta cadena de restaurantes necesita nuevas tendencias,", pron:"far bi it from mi, bat dis réstorant chéin níids niú fúud trends,"},
      {en:"Not that it's my place, but check the menu development,", es:"No es que me corresponda, pero revisa el desarrollo del menú,", pron:"nat dat its mái pléis, bat chek de ményu divélopment,"},
      {en:"If I may be so bold, more taste testing,", es:"Si me permite el atrevimiento, más pruebas de sabor,", pron:"if ái méi bi sóu bóuld, mor téist tésting,"},
      {en:"Sustainable sourcing, just a thought!", es:"Abastecimiento sostenible, ¡solo una idea!", pron:"sostéinabol sórsing, dyast a zot!"}
    ]}
  },
  { numero:41, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Time will tell,", es:"El tiempo lo dirá,", pron:"táim uíl tel,"},
      {en:"the jury is still out,", es:"todavía no hay veredicto,", pron:"de dyúri is stil áut,"},
      {en:"it remains to be seen,", es:"está por verse,", pron:"it riméins tu bi síin,"},
      {en:"we shall see!", es:"¡ya veremos!", pron:"uí shal síi!"}
    ]},
    precoro:{label:"Repaso Semana 40", lineas:[
      {en:"Far be it from me, not that it's my place,", es:"Lejos de mí, no es que me corresponda,", pron:"far bi it from mi, nat dat its mái pléis,"},
      {en:"if I may be so bold, just a thought!", es:"si me permite el atrevimiento, ¡solo una idea!", pron:"if ái méi bi sóu bóuld, dyast a zot!"}
    ]},
    coro:{label:"Repaso Semana 39", lineas:[
      {en:"With the utmost respect,", es:"Con el mayor de los respetos,", pron:"uid di átmoust rispéct,"},
      {en:"if you'll allow me,", es:"si me lo permite,", pron:"if iúl aláu mi,"},
      {en:"by your leave,", es:"con su permiso,", pron:"bái iór líiv,"},
      {en:"much obliged!", es:"¡muy agradecido!", pron:"mach obláidyd!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Our waste management includes recycling, time will tell,", es:"Nuestra gestión de residuos incluye reciclaje, el tiempo lo dirá,", pron:"áuer uéist mánachment inclúuds risáicling, táim uíl tel,"},
      {en:"The utility company? The jury is still out,", es:"¿La empresa de servicios públicos? Todavía no hay veredicto,", pron:"de iutíliti cómpani? de dyúri is stil áut,"},
      {en:"Water treatment works? It remains to be seen,", es:"¿Funciona el tratamiento de agua? Está por verse,", pron:"uóter tríitment uérks? it riméins tu bi síin,"},
      {en:"New environmental regulation? We shall see!", es:"¿Nueva regulación ambiental? ¡Ya veremos!", pron:"niú envaironméntal reguiuléishon? uí shal síi!"}
    ]}
  },
  { numero:42, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Congratulations, dragon graduate,", es:"Felicitaciones, graduado dragón,", pron:"cangrachuléishions, drágon gráchueit,"},
      {en:"you've completed the whole journey,", es:"has completado todo el viaje,", pron:"iúv camplíitid de jóul yérni,"},
      {en:"six hundred and eighty phrases mastered,", es:"seiscientas ochenta frases dominadas,", pron:"six jándred and éiti fréisis mástird,"},
      {en:"you are truly fluent now!", es:"¡ahora eres verdaderamente fluido!", pron:"iú ar trúli flúent náu!"}
    ]},
    precoro:{label:"Repaso Semana 41", lineas:[
      {en:"Time will tell, the jury is still out,", es:"El tiempo lo dirá, todavía no hay veredicto,", pron:"táim uíl tel, de dyúri is stil áut,"},
      {en:"it remains to be seen, we shall see!", es:"está por verse, ¡ya veremos!", pron:"it riméins tu bi síin, uí shal síi!"}
    ]},
    coro:{label:"Repaso Semana 40", lineas:[
      {en:"Far be it from me,", es:"Lejos de mí,", pron:"far bi it from mi,"},
      {en:"not that it's my place,", es:"no es que me corresponda,", pron:"nat dat its mái pléis,"},
      {en:"if I may be so bold,", es:"si me permite el atrevimiento,", pron:"if ái méi bi sóu bóuld,"},
      {en:"just a thought!", es:"¡solo una idea!", pron:"dyast a zot!"}
    ]},
    estrofa2:{label:"Escena", lineas:[
      {en:"Congratulations, dragon graduate, unit fourteen is done,", es:"Felicitaciones, graduado dragón, la unidad catorce está lista,", pron:"congrachuléishons, drágon gráduet, iúnit fortíin is dan,"},
      {en:"You've completed the whole journey, so close to the end,", es:"Completaste todo el viaje, muy cerca del final,", pron:"iúv complíited de jóul dyérni, sóu clóus tu di end,"},
      {en:"Six hundred and eighty phrases mastered, the last unit is yours,", es:"Seiscientas ochenta frases dominadas, la última unidad es tuya,", pron:"six jándred and éiti fréises másterd, de last iúnit is iórs,"},
      {en:"A new chapter begins, you are truly fluent now!", es:"Empieza un nuevo capítulo, ¡ahora hablas con fluidez de verdad!", pron:"a niú chápter biguíns, iú ar trúli flúent náu!"}
    ]}
  }
];

// ================= Canciones especiales — estructuras gramaticales =================
// Canciones extra que NO cuentan dentro de las 42 por fase (no corren la canción
// nativa de cada día del Atril). Cada una trae sus propios ejercicios complementarios
// en "ejercicios" — tipos: completar, corregir, traduccion (se califican) y oracion (libre).
const CANCIONES_ESPECIALES = [
  { numero:1, titulo:"Both and, Neither nor", audio:null, bilingue:true,
    estrofa1:{label:"Nuevas — both … and", lineas:[
      {en:"Both es tanto, and es como, dos cosas a la vez,", es:"Both significa tanto, and significa como: dos cosas a la vez,", pron:"bóuz es tanto, and es como, dos cosas a la vez,"},
      {en:"I'm both the singer and the composer, soy tanto cantante como compositor,", es:"Soy tanto el cantante como el compositor,", pron:"áim bóuz de sínguer and de campóuser, soy tanto cantante como compositor,"},
      {en:"I'm both the owner and the manager, dueño y gerente también,", es:"Soy tanto el dueño como el gerente,", pron:"áim bóuz di óuner and de mánayer, dueño y gerente también,"},
      {en:"My wife is both the pianist and the choir director, excellent! Mi esposa es tanto la pianista como la directora del coro; ¡es excelente!", es:"Mi esposa es tanto la pianista como la directora del coro; ¡es excelente!", pron:"mái uáif is bóuz de píanist and de kuáier diréctor, éxelent! Mi esposa es tanto la pianista como la directora del coro; ¡es excelente!"}
    ]},
    precoro:{label:"Repaso", lineas:[
      {en:"I'm the owner, soy el dueño, and I'm in charge of sales, a cargo de ventas,", es:"Soy el dueño, y estoy a cargo de ventas,", pron:"áim di óuner, soy el dueño, and áim in charch av séils, a cargo de ventas,"},
      {en:"Does that make sense? ¿Tiene sentido? Yes, that makes sense, sí, ¡eso tiene sentido!", es:"¿Tiene sentido? Sí, ¡eso tiene sentido!", pron:"das dat méik sens? ¿tiene sentido? iés, dat méiks sens, sí, ¡eso tiene sentido!"}
    ]},
    coro:{label:"Las dos estructuras", lineas:[
      {en:"Both and, tanto como,", es:"Both … and: tanto … como,", pron:"bóuz and, tanto como,"},
      {en:"neither nor, ni … ni,", es:"Neither … nor: ni … ni,", pron:"níder nor, ni … ni,"},
      {en:"Both the singer and the composer, ¡los dos soy yo!", es:"Tanto el cantante como el compositor, ¡los dos soy yo!", pron:"bóuz de sínguer and de campóuser, ¡los dos soy yo!"},
      {en:"Neither the owner nor the manager, ¡ninguno soy yo!", es:"Ni el dueño ni el gerente, ¡ninguno soy yo!", pron:"níder di óuner nor de mánayer, ¡ninguno soy yo!"}
    ]},
    estrofa2:{label:"Escena — neither … nor más but", lineas:[
      {en:"Neither es ni, nor es ni, para decir que no,", es:"Neither significa ni, nor significa ni, para decir que no,", pron:"níder es ni, nor es ni, para decir que no,"},
      {en:"I'm neither the owner nor the manager, ni dueño ni gerente soy yo,", es:"No soy ni el dueño ni el gerente,", pron:"áim níder di óuner nor de mánayer, ni dueño ni gerente soy yo,"},
      {en:"but I'm both the singer and the composer, but es pero, pero soy el cantante y el compositor.", es:"pero soy tanto el cantante como el compositor.", pron:"bat áim bóuz de sínguer and de campóuser, bat es pero, pero soy el cantante y el compositor."},
      {en:"My son is both the drummer and the sound engineer, how exciting! ¡Mi hijo es a la vez baterista e ingeniero de sonido, qué emoción!", es:"¡Mi hijo es a la vez baterista e ingeniero de sonido, qué emoción!", pron:"mái san is bóuz de drámer and de sáund enyiníer, jáu exáiting! ¡Mi hijo es a la vez baterista e ingeniero de sonido, qué emoción!"}
    ]},
    puente:{label:"Ojo con los errores", lineas:[
      {en:"Sing es cantar, song es canción, singer es quien canta con el corazón,", es:"Sing significa cantar, song significa canción, singer es quien canta con el corazón,", pron:"sing es cantar, song es canción, sínguer es quien canta con el corazón,"},
      {en:"Choir director, director del coro, ¡sin 'of' en el medio, por favor!", es:"Choir director es director del coro, ¡sin 'of' en el medio, por favor!", pron:"kuáier diréctor, director del coro, ¡sin 'av' en el medio, por favor!"},
      {en:"Neither goes with nor, neither va con nor,", es:"Neither va con nor,", pron:"níder góus uid nor, níder va con nor,"},
      {en:"and both goes with and, ¡both va con and!", es:"¡y both va con and!", pron:"and bóuz góus uid and, ¡bóuz va con and!"}
    ]},
    ejercicios:[
      {tipo:'completar', frase:"I'm ___ the singer and the composer.", es:"Soy tanto el cantante como el compositor.", respuesta:"both"},
      {tipo:'completar', frase:"I'm both the owner ___ the manager.", es:"Soy tanto el dueño como el gerente.", respuesta:"and"},
      {tipo:'completar', frase:"I'm ___ the owner nor the manager.", es:"No soy ni el dueño ni el gerente.", respuesta:"neither"},
      {tipo:'completar', frase:"I'm neither the singer ___ the arranger.", es:"No soy ni el cantante ni el arreglista.", respuesta:"nor"},
      {tipo:'completar', frase:"I sing a ___ every day.", es:"Canto una canción todos los días.", respuesta:"song"},
      {tipo:'completar', frase:"I'm the ___ of the choir.", es:"Soy el cantante del coro.", respuesta:"singer"},
      {tipo:'corregir', frase:"My wife is both the pianist and of the choir director.", es:"Mi esposa es tanto la pianista como la directora del coro.", respuesta:"My wife is both the pianist and the choir director.", pista:"Sobra una palabra: 'choir director' ya significa 'directora del coro'."},
      {tipo:'corregir', frase:"I'm neither the owner and the manager.", es:"No soy ni el dueño ni el gerente.", respuesta:"I'm neither the owner nor the manager.", pista:"Neither nunca va con and."},
      {tipo:'corregir', frase:"I'm both the musician and compeser here.", es:"Aquí soy tanto el músico como el compositor.", respuesta:"I'm both the musician and the composer here.", pista:"Son dos errores: falta un artículo y una palabra está mal escrita."},
      {tipo:'corregir', frase:"I'm neither the singer nor the arranger of the sing.", es:"No soy ni el cantante ni el arreglista de la canción.", respuesta:"I'm neither the singer nor the arranger of the song.", pista:"Sing es cantar; la canción es otra palabra."},
      {tipo:'corregir', frase:"My soon is both the drummer and the sound engineer.", es:"Mi hijo es tanto el baterista como el ingeniero de sonido.", respuesta:"My son is both the drummer and the sound engineer.", pista:"Soon significa 'pronto'."},
      {tipo:'traduccion', es:"Soy tanto el dueño como el gerente.", en:"I'm both the owner and the manager."},
      {tipo:'traduccion', es:"Mi hijo es tanto el baterista como el ingeniero de sonido.", en:"My son is both the drummer and the sound engineer."},
      {tipo:'traduccion', es:"No soy ni el cantante ni el compositor.", en:"I'm neither the singer nor the composer."},
      {tipo:'traduccion', es:"No soy ni el dueño ni el gerente, pero soy tanto el cantante como el compositor.", en:"I'm neither the owner nor the manager, but I'm both the singer and the composer."},
      {tipo:'oracion', es:"Escribe una oración sobre ti usando both … and.", en:"I'm both the father and the teacher."},
      {tipo:'oracion', es:"Escribe una oración sobre alguien de tu familia usando neither … nor.", en:"My brother is neither the singer nor the drummer."},
      {tipo:'oracion', es:"Escribe una oración con neither … nor, but y both … and juntas.", en:"I'm neither the owner nor the manager, but I'm both the singer and the composer."}
    ]
  }
];

const FASE_ESPECIAL = { id:'esp', nombre:"⭐ Canciones especiales", subtitulo:"Estructuras con ejercicios extra", especial:true,
  frases: CANCIONES_ESPECIALES.length, disponible:true, fijas:FIJAS_FASE1, semanas:CANCIONES_ESPECIALES };

const dragonNativo = {
  especiales: FASE_ESPECIAL,
  fases: [
    { id:1, nombre:"Fase 1", subtitulo:"Supervivencia diaria", frases:170, disponible:true, fijas:FIJAS_FASE1, semanas:FASE1_SEMANAS },
    { id:2, nombre:"Fase 2", subtitulo:"Fluidez conversacional", frases:173, disponible:true, fijas:FIJAS_FASE2, semanas:FASE2_SEMANAS },
    { id:3, nombre:"Fase 3", subtitulo:"Modismos y expresiones idiomáticas", frases:169, disponible:true, fijas:FIJAS_FASE3, semanas:FASE3_SEMANAS },
    { id:4, nombre:"Fase 4", subtitulo:"Refinamiento y naturalidad nativa", frases:169, disponible:true, fijas:FIJAS_FASE4, semanas:FASE4_SEMANAS }
  ]
};

// ================= Controlador de pantallas (independiente del motor principal) =================
(function(){
  let currentFaseId = null;
  let currentWeekNum = null;

  function el(id){ return document.getElementById(id); }
  // Las canciones especiales viven fuera de las 4 fases (id 'esp').
  function getFase(id){ return id==='esp' ? dragonNativo.especiales : dragonNativo.fases.find(f=>f.id===id); }

  // Cada canción trae su propio Pre-Coro y Coro de repaso; si no, se usan los fijos de la fase.
  function preCoroDe(fase, semana){ return semana.precoro ? semana.precoro.lineas : fase.fijas.precoro; }
  function coroDe(fase, semana){ return semana.coro ? semana.coro.lineas : fase.fijas.coro; }
  function tituloSeccion(nombre, bloque){ return bloque && bloque.label ? nombre+' — '+bloque.label : nombre; }

  // Mostrar una fila de "Siguiente" y llevarla a la vista — cuando se esconde el
  // cuadro de escribir/grabar justo antes, la pantalla puede correrse y el primer
  // toque en el botón puede fallar si el usuario no lo ve bien.
  function mostrarNextRow(id){
    const row = el(id);
    row.style.display='flex';
    if(typeof row.scrollIntoView === 'function'){
      setTimeout(()=>{ row.scrollIntoView({behavior:'smooth', block:'nearest'}); }, 30);
    }
  }

  // ================= Progreso de El Dragón Nativo (independiente del progreso del curso principal) =================
  const DN_PROGRESO_KEY = 'dragon_nativo_progreso_v1';

  function cargarProgresoDN(){
    try{
      const raw = localStorage.getItem(DN_PROGRESO_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch(e){ return {}; }
  }
  function guardarProgresoDN(progreso){
    try{ localStorage.setItem(DN_PROGRESO_KEY, JSON.stringify(progreso)); } catch(e){}
  }
  function marcarSemanaCompletada(faseId, weekNum){
    const progreso = cargarProgresoDN();
    if(!progreso[faseId]) progreso[faseId] = {};
    progreso[faseId][weekNum] = true;
    guardarProgresoDN(progreso);
  }
  function semanaCompletada(faseId, weekNum){
    const progreso = cargarProgresoDN();
    return !!(progreso[faseId] && progreso[faseId][weekNum]);
  }
  function faseCompletada(faseId){
    const fase = getFase(faseId);
    if(!fase || !fase.semanas) return false;
    return fase.semanas.every(s => semanaCompletada(faseId, s.numero));
  }
  // Cada fase tiene 42 semanas — la "unidad global" de esa semana, para
  // el sistema de premios de práctica, es (fase-1)*42 + número de semana.
  function unidadGlobalDN(faseId, semanaNum){
    return (faseId - 1) * 42 + semanaNum;
  }
  // Una fase está desbloqueada para el alumno si tiene contenido, si al menos
  // su primera semana está cubierta por las unidades ganadas con prácticas
  // entre alumnos, y (es la Fase 1, o la fase anterior está completa).
  // El admin ve todo desbloqueado sin importar el progreso.
  function faseDesbloqueada(fase){
    if(!fase.disponible) return false;
    if(typeof isAdmin === 'function' && isAdmin()) return true;
    if(typeof unidadesDesbloqueadas === 'function' && unidadGlobalDN(fase.id, 1) > unidadesDesbloqueadas('dragon_nativo')) return false;
    if(fase.id === 1) return true;
    return faseCompletada(fase.id - 1);
  }

  function openModule(){
    el('home').style.display='none';
    el('dragonNativo').style.display='block';
    renderFaseList();
    showView('fases');
  }
  function closeModule(){
    el('dragonNativo').style.display='none';
    el('home').style.display='block';
  }
  function showView(view){
    el('dnFaseList').style.display = view==='fases' ? 'block' : 'none';
    el('dnWeekList').style.display = view==='semanas' ? 'block' : 'none';
    el('dnSongView').style.display = view==='cancion' ? 'block' : 'none';
    el('dnReviewView').style.display = view==='repaso' ? 'block' : 'none';
  }

  function renderFaseList(){
    const box = el('dnFaseList');
    box.innerHTML='';
    dragonNativo.fases.forEach(fase=>{
      const card = document.createElement('div');
      card.className='dn-fase-card';
      const desbloqueada = faseDesbloqueada(fase);
      const bloqueadaPorPremio = fase.disponible && typeof unidadesDesbloqueadas === 'function' && unidadGlobalDN(fase.id,1) > unidadesDesbloqueadas('dragon_nativo') && !(typeof isAdmin === 'function' && isAdmin());
      let progresoTxt;
      if(!fase.disponible){ progresoTxt = 'Próximamente'; }
      else if(bloqueadaPorPremio){ progresoTxt = 'Se desbloquea practicando con otros alumnos'; }
      else if(!desbloqueada){ progresoTxt = 'Completa la Fase '+(fase.id-1)+' para desbloquear'; }
      else { progresoTxt = fase.semanas.length+' semanas · '+fase.frases+' frases'; }
      card.innerHTML = '<div class="dn-fase-num">'+fase.id+'</div>'
        +'<div class="dn-fase-info"><b>'+fase.nombre+' — '+fase.subtitulo+'</b><p>'+progresoTxt+'</p></div>'
        +'<div class="dn-fase-progress">'+(desbloqueada?'▶':'🔒')+'</div>';
      if(desbloqueada){
        card.onclick=()=>{ currentFaseId=fase.id; renderWeekGrid(fase.id); showView('semanas'); };
      } else {
        card.style.opacity='0.5'; card.style.cursor='default';
      }
      box.appendChild(card);
    });

    // Canciones especiales: se abren junto con la Fase 1 y no gastan desbloqueos de premio.
    const esp = dragonNativo.especiales;
    if(esp && esp.semanas.length){
      const abierta = faseDesbloqueada(dragonNativo.fases[0]);
      const card = document.createElement('div');
      card.className='dn-fase-card';
      card.innerHTML = '<div class="dn-fase-num">⭐</div>'
        +'<div class="dn-fase-info"><b>Canciones especiales — '+esp.subtitulo+'</b><p>'
        +(abierta ? esp.semanas.length+' '+(esp.semanas.length===1?'canción':'canciones')+' · con ejercicios complementarios' : 'Se abre junto con la Fase 1')+'</p></div>'
        +'<div class="dn-fase-progress">'+(abierta?'▶':'🔒')+'</div>';
      if(abierta){
        card.onclick=()=>{ currentFaseId='esp'; renderWeekGrid('esp'); showView('semanas'); };
      } else {
        card.style.opacity='0.5'; card.style.cursor='default';
      }
      box.appendChild(card);
    }
  }

  function renderWeekGrid(faseId){
    const fase = getFase(faseId);
    const grid = el('dnWeekGrid');
    grid.innerHTML='';
    const esAdmin = typeof isAdmin === 'function' && isAdmin();
    fase.semanas.forEach(semana=>{
      const btn = document.createElement('div');
      const completada = semanaCompletada(faseId, semana.numero);
      const desbloqueadaPorPremio = esAdmin || fase.especial || (typeof unidadesDesbloqueadas !== 'function') || (unidadGlobalDN(faseId, semana.numero) <= unidadesDesbloqueadas('dragon_nativo'));
      btn.className='dn-week-btn'+(completada?' dn-week-done':'')+(desbloqueadaPorPremio?'':' dn-week-locked');
      if(!desbloqueadaPorPremio){
        btn.innerHTML = '<span class="wk-num">'+semana.numero+' 🔒</span><span class="wk-audio">Se desbloquea practicando con otros alumnos</span>';
        btn.style.opacity = '0.5';
      } else {
        btn.innerHTML = '<span class="wk-num">'+semana.numero+(completada?' ✅':'')+'</span><span class="wk-audio">'+(semana.titulo?semana.titulo+' · ':'')+(semana.audio?'🔊 con audio':'📝 solo letra')+'</span>';
        btn.onclick=()=>{ renderSong(faseId, semana.numero); showView('cancion'); };
      }
      grid.appendChild(btn);
    });
  }

  function lineaHTML(l){
    const pronHTML = l.pron ? '<div class="dn-pron">'+l.pron+'</div>' : '';
    return '<div class="dn-line"><div class="dn-en">'+l.en+'</div>'+pronHTML+'<div class="dn-es">'+l.es+'</div></div>';
  }
  function seccionHTML(label, lineas){
    let h = '<div class="dn-section-label">'+label+'</div>';
    lineas.forEach(l=>{ h += lineaHTML(l); });
    return h;
  }

  // ================= Guía vocal automática — linking, pausas y tipo de voz =================
  const DN_REDUCCIONES = {
    'going to':'gonna', 'want to':'wanna', 'got to':'gotta', 'have to':'hafta',
    'kind of':'kinda', 'sort of':'sorta', 'let me':'lemme', 'give me':'gimme',
    'out of':'outta', 'a lot of':'a lotta', 'trying to':'tryna'
  };

  function dnSonidoAproximado(la, lb){
    const base = la.slice(0,-1).toLowerCase();
    const consonante = la.slice(-1).toLowerCase();
    return base+'-'+consonante+lb.toLowerCase();
  }

  function dnDetectarLinking(textoEn){
    const palabras = textoEn.replace(/[.,!?…]/g,'').split(/\s+/).filter(Boolean);
    const sugerencias = [];
    for(let i=0;i<palabras.length-1;i++){
      const a = palabras[i], b = palabras[i+1];
      const parClave = (a+' '+b).toLowerCase();
      if(DN_REDUCCIONES[parClave]){
        sugerencias.push(a+'_'+b+' -> suena como "'+DN_REDUCCIONES[parClave]+'"');
        continue;
      }
      const soloLetrasA = a.replace(/[^a-zA-Z]/g,'');
      const soloLetrasB = b.replace(/[^a-zA-Z]/g,'');
      if(!soloLetrasA || !soloLetrasB) continue;
      const ultimaA = soloLetrasA.slice(-1).toLowerCase();
      const primeraB = soloLetrasB.charAt(0).toLowerCase();
      const esVocal = c => 'aeiou'.includes(c);
      if(!esVocal(ultimaA) && esVocal(primeraB)){
        sugerencias.push(a+'_'+b+' -> suena como "'+dnSonidoAproximado(soloLetrasA,soloLetrasB)+'"');
      }
    }
    return sugerencias;
  }

  function dnTipoDeVoz(nombreSeccion){
    const n = nombreSeccion.toLowerCase();
    if(n.includes('estrofa 1')) return 'Voz de pecho relajada, con pausas breves — presentá el vocabulario nuevo con calma.';
    if(n.includes('pre-coro')) return 'Empezá a subir la energía — es la rampa hacia el coro.';
    if(n.includes('coro')) return 'Voz mixta, con apoyo abdominal — abrí bien las vocales y sostenelas.';
    if(n.includes('estrofa 2')) return 'Energía media, la escena avanza — mantené el ritmo constante.';
    if(n.includes('puente')) return 'Un quiebre — bajá el volumen un momento, después volvé con fuerza.';
    if(n.includes('outro')) return 'Cerrá con calidez, bajando la intensidad de a poco.';
    if(n.includes('pedal')) return 'Frase ancla — decila con confianza, como una afirmación.';
    return 'Cantalo con naturalidad, conectando las palabras.';
  }

  function descargarGuiaVocal(fase, semana){
    if(!window.jspdf){
      alert('No se pudo generar la guía. Intenta de nuevo en un momento.');
      return;
    }
    const secciones = [
      { nombre:'Estrofa 1 — '+semana.estrofa1.label, lineas:semana.estrofa1.lineas },
      { nombre:'Pedal', lineas:fase.fijas.pedal },
      { nombre:tituloSeccion('Pre-Coro', semana.precoro), lineas:preCoroDe(fase, semana) },
      { nombre:tituloSeccion('Coro', semana.coro), lineas:coroDe(fase, semana) },
      { nombre:'Estrofa 2 — '+semana.estrofa2.label, lineas:semana.estrofa2.lineas }
    ];
    if(semana.puente) secciones.push({ nombre:'Puente — '+semana.puente.label, lineas:semana.puente.lineas });
    secciones.push({ nombre:'Outro', lineas: semana.outroOverride || fase.fijas.outro });

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit:'mm', format:'letter' });
    const margenX = 18;
    const anchoUtil = 216 - margenX*2;
    let y = 20;

    function nuevaPaginaSiHaceFalta(alturaNecesaria){
      if(y + alturaNecesaria > 265){ doc.addPage(); y = 20; }
    }

    doc.setFont('helvetica','bold'); doc.setFontSize(20); doc.setTextColor(27,31,42);
    doc.text('Guía Vocal', 108, y, {align:'center'}); y += 7;
    doc.setFont('helvetica','italic'); doc.setFontSize(11); doc.setTextColor(107,86,44);
    doc.text(fase.especial ? 'Canción especial — '+semana.titulo : fase.nombre+' — Semana '+semana.numero, 108, y, {align:'center'}); y += 6;
    doc.setDrawColor(232,163,61); doc.setLineWidth(0.8);
    doc.line(margenX, y, 216-margenX, y); y += 8;

    secciones.forEach(sec=>{
      nuevaPaginaSiHaceFalta(20);
      doc.setFont('helvetica','bold'); doc.setFontSize(12); doc.setTextColor(41,80,107);
      doc.text(sec.nombre, margenX, y); y += 5;
      doc.setFont('helvetica','italic'); doc.setFontSize(9.5); doc.setTextColor(138,90,30);
      const tipoLineas = doc.splitTextToSize(dnTipoDeVoz(sec.nombre), anchoUtil);
      doc.text(tipoLineas, margenX, y); y += tipoLineas.length*4 + 3;

      sec.lineas.forEach(l=>{
        nuevaPaginaSiHaceFalta(14);
        doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(20,20,30);
        const lineaTexto = doc.splitTextToSize(l.en, anchoUtil-4);
        doc.text(lineaTexto, margenX, y); y += lineaTexto.length*4.3;

        const linking = dnDetectarLinking(l.en);
        if(linking.length){
          doc.setFont('courier','normal'); doc.setFontSize(8); doc.setTextColor(90,98,112);
          linking.forEach(sug=>{
            nuevaPaginaSiHaceFalta(6);
            const linkTexto = doc.splitTextToSize('- '+sug, anchoUtil-10);
            doc.text(linkTexto, margenX+4, y); y += linkTexto.length*3.4;
          });
        }
        y += 2.5;
      });
      y += 3;
    });

    doc.save('guia-vocal-'+fase.id+'-semana'+semana.numero+'.pdf');
  }

  function renderSong(faseId, weekNum){
    currentFaseId = faseId; currentWeekNum = weekNum;
    const fase = getFase(faseId);
    const semana = fase.semanas.find(s=>s.numero===weekNum);
    el('dnSongTitle').textContent = fase.especial ? '⭐ '+semana.titulo : fase.nombre+' — Semana '+semana.numero;
    el('dnReviewBtn').textContent = (semana.ejercicios && semana.ejercicios.length)
      ? '✍️ Hacer los ejercicios ('+semana.ejercicios.length+')' : '✍️ Repasar esta semana (escrito)';

    const audioBox = el('dnAudioBox');
    if(semana.audio){
      audioBox.innerHTML = '<audio controls src="'+semana.audio+'"></audio>';
    } else {
      audioBox.innerHTML = '<div class="dn-audio-pending">🎵 Audio en camino — por ahora, practica con la letra y la pronunciación del curso.</div>';
    }

    let html = '';
    html += seccionHTML('Estrofa 1 — '+semana.estrofa1.label, semana.estrofa1.lineas);
    html += seccionHTML('Pedal', fase.fijas.pedal);
    html += seccionHTML(tituloSeccion('Pre-Coro', semana.precoro), preCoroDe(fase, semana));
    html += seccionHTML(tituloSeccion('Coro', semana.coro), coroDe(fase, semana));
    html += seccionHTML('Estrofa 2 — '+semana.estrofa2.label, semana.estrofa2.lineas);
    if(semana.puente){ html += seccionHTML('Puente — '+semana.puente.label, semana.puente.lineas); }
    html += seccionHTML('Pre-Coro (2ª vez)', preCoroDe(fase, semana));
    html += seccionHTML('Coro (2ª vez)', coroDe(fase, semana));
    html += seccionHTML('Outro', semana.outroOverride || fase.fijas.outro);
    el('dnLyricsBox').innerHTML = html;
    el('dnLyricsBox').innerHTML += '<button class="ghost" id="dnGuiaVocalBtn" style="width:100%; margin-top:14px;">🎤 Descargar guía vocal de esta canción</button>';
    document.getElementById('dnGuiaVocalBtn').onclick = ()=>descargarGuiaVocal(fase, semana);
  }

  // ================= Repaso escrito (ventana móvil de las últimas 4 canciones) =================
  function buildReviewPool(faseId, weekNum){
    const fase = getFase(faseId);
    const startWeek = Math.max(1, weekNum-3);
    const seen = new Set();
    const pool = [];
    for(let w=startWeek; w<=weekNum; w++){
      const semana = fase.semanas.find(s=>s.numero===w);
      if(!semana) continue;
      const todas = []
        .concat(preCoroDe(fase, semana), fase.fijas.pedal, semana.estrofa1.lineas, coroDe(fase, semana),
                semana.estrofa2.lineas, semana.puente ? semana.puente.lineas : [],
                semana.outroOverride || fase.fijas.outro);
      todas.forEach(l=>{
        const key = l.en.toLowerCase();
        if(!seen.has(key)){ seen.add(key); pool.push(l); }
      });
    }
    return pool;
  }

  let reviewItems=[], reviewIdx=0, reviewOk=0, reviewGraded=0;

  function openReview(){
    const fase = getFase(currentFaseId);
    const semana = fase.semanas.find(s=>s.numero===currentWeekNum);
    if(semana && semana.ejercicios && semana.ejercicios.length){
      // Ejercicios complementarios propios de la canción
      reviewItems = semana.ejercicios.map(e=>({
        propio:true, tipo:e.tipo, es:e.es, pista:e.pista||'', frase:e.frase||'',
        en: e.tipo==='traduccion' || e.tipo==='oracion' ? e.en : (e.tipo==='completar' ? e.frase.replace('___', e.respuesta) : e.respuesta),
        respuesta: e.tipo==='traduccion' ? e.en : e.respuesta
      }));
      reviewIdx=0; reviewOk=0; reviewGraded=0;
      el('dnReviewTitle').textContent = 'Ejercicios — '+(semana.titulo || 'Semana '+currentWeekNum);
      el('dnReviewHint').textContent = reviewItems.length+' ejercicios: completar, corregir el error, traducir y escribir tus propias frases. Repítelos cuantas veces quieras.';
      el('dnReviewNextBtn').onclick = ()=>{ reviewIdx++; showReviewItem(); };
      showView('repaso');
      showReviewItem();
      return;
    }
    const pool = buildReviewPool(currentFaseId, currentWeekNum);
    reviewItems = pool.map((l,n)=>({ en:l.en, es:l.es, pron:l.pron, tipo: (n>0 && n%5===0) ? 'oracion' : 'traduccion' }));
    reviewIdx=0; reviewOk=0; reviewGraded=0;
    el('dnReviewTitle').textContent = 'Repaso escrito — hasta Semana '+currentWeekNum;
    el('dnReviewHint').textContent = 'Frases de las últimas '+Math.min(4,currentWeekNum)+' canciones ('+reviewItems.length+' en total). Repetilo cuantas veces quieras.';
    el('dnReviewNextBtn').onclick = ()=>{ reviewIdx++; showReviewItem(); };
    showView('repaso');
    showReviewItem();
  }

  function showReviewItem(){
    if(reviewIdx>=reviewItems.length){ showReviewSummary(); return; }
    const item = reviewItems[reviewIdx];
    el('dnReviewInput').value='';
    el('dnReviewFeedback').style.display='none';
    el('dnReviewNextRow').style.display='none';
    const pronHTML = item.pron ? ' <span class="pron-hint">· se pronuncia: "'+item.pron+'"</span>' : '';
    const num = '<div style="font-size:12px;color:var(--muted);margin-bottom:6px;">Ejercicio '+(reviewIdx+1)+' de '+reviewItems.length+'</div>';
    if(item.tipo==='completar'){
      el('dnReviewPrompt').innerHTML = num+'✏️ <b>Completa la palabra que falta:</b><div class="dn-en" style="font-size:19px;margin-top:6px;">'+item.frase+'</div><span style="color:var(--muted);font-size:13px;">('+item.es+')</span>';
      el('dnReviewInput').placeholder='Escribe solo la palabra que falta...';
    } else if(item.tipo==='corregir'){
      el('dnReviewPrompt').innerHTML = num+'🔍 <b>Esta frase tiene un error. Escríbela corregida:</b><div class="dn-en" style="font-size:19px;margin-top:6px;">❌ '+item.frase+'</div><span style="color:var(--muted);font-size:13px;">('+item.es+')</span>'
        +(item.pista?'<div style="font-size:13px;margin-top:6px;">💡 Pista: '+item.pista+'</div>':'');
      el('dnReviewInput').placeholder='Escribe la frase corregida...';
    } else if(item.tipo==='oracion' && item.propio){
      el('dnReviewPrompt').innerHTML = num+'🎤 <b>'+item.es+'</b><br><span style="color:var(--muted);font-size:13px;">Ejemplo: "'+item.en+'"</span>';
      el('dnReviewInput').placeholder='Escribe tu propia oración en inglés...';
    } else if(item.tipo==='oracion'){
      el('dnReviewPrompt').innerHTML = 'Escribí una oración real usando esta frase: <br><b>"'+item.en+'"</b>'+pronHTML+' <span style="color:var(--muted);font-size:13px;">('+item.es+')</span>';
      el('dnReviewInput').placeholder='Escribí tu propia oración en inglés...';
    } else {
      el('dnReviewPrompt').innerHTML = '<div class="dn-en" style="font-size:19px;">'+item.es+pronHTML+'</div>';
      el('dnReviewInput').placeholder='Traduce al inglés...';
    }
    el('dnReviewListenBtn').onclick = async ()=>{
      el('dnReviewListenBtn').disabled=true;
      await speakHidden(item.en);
      el('dnReviewListenBtn').disabled=false;
    };
    el('dnReviewInput').focus();

    // El modo admin no necesita completar cada frase para poder seguir —
    // el botón "Siguiente" queda disponible de entrada, sin exigir respuesta.
    if(typeof isAdmin === 'function' && isAdmin()){
      mostrarNextRow('dnReviewNextRow');
      el('dnReviewNextBtn').textContent = (reviewIdx+1<reviewItems.length) ? 'Siguiente →' : 'Ver resultado →';
    }
  }

  function submitReviewAnswer(){
    const said = el('dnReviewInput').value.trim();
    if(!said) return;
    const item = reviewItems[reviewIdx];
    const box = el('dnReviewFeedback');
    box.style.display='block';
    if(item.tipo==='oracion'){
      box.className='dn-review-feedback neutral';
      box.textContent='✓ Registrado — esta parte no se califica, es para practicar el uso real. Frase de referencia: "'+item.en+'"';
    } else if(item.propio){
      // completar, corregir y traducción de los ejercicios complementarios
      const isRight = practicaAnswerMatches(said, item.respuesta, true);
      reviewGraded++; if(isRight) reviewOk++;
      box.className='dn-review-feedback '+(isRight?'ok':'retry');
      if(isRight){ box.textContent = '✓ ¡Correcto! "'+item.en+'"'; }
      else { box.innerHTML = '<b>✗ Casi — compara tu respuesta con la correcta:</b>'+(typeof compararRespuestaHTML==='function' ? compararRespuestaHTML(said, item.respuesta) : '')
        +(item.tipo==='completar' ? '<div style="margin-top:6px;">Frase completa: "'+item.en+'"</div>' : ''); }
    } else {
      const isRight = practicaAnswerMatches(said, item.en, true);
      reviewGraded++; if(isRight) reviewOk++;
      box.className='dn-review-feedback '+(isRight?'ok':'retry');
      if(isRight){ box.textContent = '✓ ¡Correcto! "'+item.en+'"'; }
      else { box.innerHTML = '<b>✗ Casi — compara tu respuesta con la correcta:</b>'+(typeof compararRespuestaHTML==='function' ? compararRespuestaHTML(said, item.en) : ''); }
    }
    mostrarNextRow('dnReviewNextRow');
    el('dnReviewNextBtn').textContent = (reviewIdx+1<reviewItems.length) ? 'Siguiente →' : 'Ver resultado →';
  }

  function showReviewSummary(){
    marcarSemanaCompletada(currentFaseId, currentWeekNum);
    el('dnReviewPrompt').innerHTML = '<b>Resultado: '+reviewOk+' de '+reviewGraded+'</b><br><span style="color:var(--muted);font-size:13px;">✅ Semana completada — puedes repetir este repaso cuantas veces quieras.</span>';
    el('dnReviewListenBtn').style.display='none';
    el('dnReviewInput').style.display='none';
    el('dnReviewSendBtn').style.display='none';
    el('dnReviewFeedback').style.display='none';
    mostrarNextRow('dnReviewNextRow');
    el('dnReviewNextBtn').textContent='🔁 Repetir este repaso';
    el('dnReviewNextBtn').onclick = ()=>{
      el('dnReviewListenBtn').style.display='inline-flex';
      el('dnReviewInput').style.display='';
      el('dnReviewSendBtn').style.display='inline-flex';
      openReview();
    };
  }

  window.addEventListener('DOMContentLoaded', ()=>{
    el('dnEntryBtn').onclick = openModule;
    el('dnBackBtn').onclick = closeModule;
    el('dnBackToFasesBtn').onclick = ()=>{ showView('fases'); renderFaseList(); };
    el('dnBackToWeeksBtn').onclick = ()=>{ showView('semanas'); renderWeekGrid(currentFaseId); };
    el('dnReviewBtn').onclick = openReview;
    el('dnBackFromReviewBtn').onclick = ()=>{ showView('cancion'); };
    el('dnReviewSendBtn').onclick = submitReviewAnswer;
    el('dnReviewInput').addEventListener('keydown', e=>{ if(e.key==='Enter') submitReviewAnswer(); });
  });
})();
