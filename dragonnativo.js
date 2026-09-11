// El Dragón Nativo — módulo independiente, 480 frases en 4 fases de 120 cada una.
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I'm back now, sorry about that,", es:"Ya volví, perdón por eso,", pron:"áim bak náu, sóri abáut dat,"},
      {en:"Can you say that again, one more time?", es:"¿Puedes repetir, una vez más?", pron:"can iú séi dat aguén, uán mor táim?"},
      {en:"I didn't catch it, but now I understand,", es:"No escuché bien, pero ahora entiendo,", pron:"ái dídnt cach it, bat náu ái anderstánd,"},
      {en:"Thank you for waiting, my friend!", es:"¡Gracias por esperar, amigo!", pron:"zenk iú for uéiting, mái frend!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I'm still not sure, but let's see together,", es:"Todavía no estoy seguro, pero vamos a ver juntos,", pron:"áim stil nat shur, bat lets síi tugéder,"},
      {en:"That's a good question, thank you for asking,", es:"Es buena pregunta, gracias por preguntar,", pron:"dats a gud cuéschion, zenk iú for ásking,"},
      {en:"Now it makes sense, or maybe not yet,", es:"Ahora tiene sentido, o tal vez no todavía,", pron:"náu it méiks sens, or méibi nat iét,"},
      {en:"Let's see, let's see!", es:"¡Vamos a ver, vamos a ver!", pron:"lets síi, lets síi!"}
    ]}
  },
  { numero:3, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I agree with you,", es:"Estoy de acuerdo contigo,", pron:"ái agríi uid iú,"},
      {en:"but he disagrees,", es:"pero él no está de acuerdo,", pron:"bat ji disagríis,"},
      {en:"No worries,", es:"No hay problema,", pron:"nóu uóris,"},
      {en:"take your time to decide!", es:"¡Tomate tu tiempo para decidir!", pron:"téik iór táim tu disáid!"}
    ]},
    estrofa2:{label:"Repaso Semana 1", lineas:[
      {en:"Sorry, I didn't catch that,", es:"Perdón, no escuché bien,", pron:"sóri, ái dídnt cach dat,"},
      {en:"can you say that again?", es:"¿puedes repetir?", pron:"can iú séi dat aguén?"},
      {en:"I need a minute, I'll be right back!", es:"¡Necesito un minuto, ya vuelvo!", pron:"ái níid a mínit, áil bi ráit bak!"}
    ]}
  },
  { numero:4, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What do you mean?", es:"¿Qué quieres decir?", pron:"uát du iú míin?"},
      {en:"Oh, now I see!", es:"¡Ah, ya veo!", pron:"óu, náu ái síi!"},
      {en:"That sounds good to me,", es:"Me suena bien eso,", pron:"dat sáunds gud tu mi,"},
      {en:"not right now, but soon!", es:"¡Ahora no, pero pronto!", pron:"nat ráit náu, bat súun!"}
    ]},
    estrofa2:{label:"Repaso Semana 2", lineas:[
      {en:"I'm not sure, but that's a good question,", es:"No estoy seguro, pero es buena pregunta,", pron:"áim nat shur, bat dats a gud cuéschion,"},
      {en:"let's see if that makes sense!", es:"¡vamos a ver si tiene sentido!", pron:"lets síi if dat méiks sens!"}
    ]}
  },
  { numero:5, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"How does that work?", es:"¿Cómo funciona eso?", pron:"jáu das dat uérk?"},
      {en:"I'll think about it,", es:"Lo voy a pensar,", pron:"áil zink abáut it,"},
      {en:"just a second...", es:"solo un segundo...", pron:"yast a sécond..."},
      {en:"Same here, my friend!", es:"¡Lo mismo digo, amigo!", pron:"séim jíar, mái frend!"}
    ]},
    estrofa2:{label:"Repaso Semana 3", lineas:[
      {en:"I agree, I disagree,", es:"Estoy de acuerdo, no estoy de acuerdo,", pron:"ái agríi, ái disagríi,"},
      {en:"no worries, take your time!", es:"¡no hay problema, tomate tu tiempo!", pron:"nóu uóris, téik iór táim!"}
    ]}
  },
  { numero:6, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let me know,", es:"Avísame,", pron:"let mi nóu,"},
      {en:"I hope so,", es:"espero que sí,", pron:"ái jóup sóu,"},
      {en:"me too!", es:"¡yo también!", pron:"mi tú!"},
      {en:"Give me a second, hold that thought!", es:"¡Dame un segundo, esperá esa idea!", pron:"guiv mi a sécond, jóuld dat zot!"}
    ]},
    estrofa2:{label:"Repaso Semana 4", lineas:[
      {en:"What do you mean? Oh, now I see,", es:"¿Qué quieres decir? Ah, ya veo,", pron:"uát du iú míin? óu, náu ái síi,"},
      {en:"that sounds good to me!", es:"¡me suena bien eso!", pron:"dat sáunds gud tu mi!"}
    ]}
  },
  { numero:7, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What's going on?", es:"¿Qué está pasando?", pron:"uáts góing on?"},
      {en:"I have no idea!", es:"¡No tengo idea!", pron:"ái jav nóu aidía!"},
      {en:"Let me check...", es:"Déjame revisar...", pron:"let mi chek..."},
      {en:"One moment, please!", es:"¡Un momento, por favor!", pron:"uán móument, plíis!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I checked, and now I know what's going on,", es:"Revisé, y ahora sé qué está pasando,", pron:"ái chekt, and náu ái nóu uáts góing on,"},
      {en:"I had no idea, but now I do,", es:"No tenía idea, pero ahora sí,", pron:"ái jad nóu aidía, bat náu ái du,"},
      {en:"Thank you for that one moment,", es:"Gracias por ese momento,", pron:"zenk iú for dat uán móument,"},
      {en:"It made all the difference!", es:"¡Hizo toda la diferencia!", pron:"it méid ol de dífrens!"}
    ]}
  },
  { numero:8, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I think so,", es:"Creo que sí,", pron:"ái zink sóu,"},
      {en:"but I don't think so either,", es:"pero tampoco creo que no,", pron:"bat ái dont zink sóu íder,"},
      {en:"That's true,", es:"Eso es verdad,", pron:"dats trú,"},
      {en:"or maybe that's not true!", es:"¡o tal vez no es verdad!", pron:"or méibi dats nat trú!"}
    ]},
    estrofa2:{label:"Repaso Semana 6", lineas:[
      {en:"Let me know,", es:"avísame,", pron:"let mi nóu,"},
      {en:"I hope so, give me a second!", es:"espero que sí, ¡dame un segundo!", pron:"ái jóup sóu, guiv mi a sécond!"}
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
    estrofa2:{label:"Repaso Semana 7", lineas:[
      {en:"What's going on? I have no idea!", es:"¿Qué está pasando? ¡No tengo idea!", pron:"uáts góing on? ái jav nóu aidía!"},
      {en:"Let me check, one moment, please!", es:"¡Déjame revisar, un momento, por favor!", pron:"let mi chek, uán móument, plíis!"}
    ]}
  },
  { numero:10, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I see what you mean,", es:"Entiendo lo que quieres decir,", pron:"ái síi uát iú míin,"},
      {en:"that's interesting!", es:"¡eso es interesante!", pron:"dats íntresting!"},
      {en:"Tell me more,", es:"Contame más,", pron:"tel mi mor,"},
      {en:"I'd love to hear it!", es:"¡me encantaría escucharlo!", pron:"áid lav tu jíar it!"}
    ]},
    estrofa2:{label:"Repaso Semana 8", lineas:[
      {en:"I think so, but I don't think so either,", es:"Creo que sí, pero tampoco creo que no,", pron:"ái zink sóu, bat ái dont zink sóu íder,"},
      {en:"that's true, or maybe not!", es:"¡eso es verdad, o tal vez no!", pron:"dats trú, or méibi nat!"}
    ]}
  },
  { numero:11, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Excuse me for a second,", es:"Disculpame un segundo,", pron:"exquiúsmi for a sécond,"},
      {en:"I'll be right there!", es:"¡ya voy para allá!", pron:"áil bi ráit dér!"},
      {en:"Thanks for waiting,", es:"Gracias por esperar,", pron:"zenks for uéiting,"},
      {en:"almost done!", es:"¡casi termino!", pron:"ólmoust dan!"}
    ]},
    estrofa2:{label:"Repaso Semana 9", lineas:[
      {en:"Could you repeat that? No problem at all!", es:"¿Podrías repetir eso? ¡No hay problema!", pron:"cud iú ripíit dat? nóu práblem at ol!"},
      {en:"It's my pleasure, don't worry about it!", es:"¡Es un placer, no te preocupes!", pron:"its mái pléshur, dont uóri abáut it!"}
    ]}
  },
  { numero:12, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Perfect, that works!", es:"¡Perfecto, eso funciona!", pron:"pérfect, dat uérks!"},
      {en:"Sounds like a plan,", es:"Suena como un plan,", pron:"sáunds láik a plan,"},
      {en:"let's do that,", es:"hagamos eso,", pron:"lets du dat,"},
      {en:"I'm on it!", es:"¡ya me pongo con eso!", pron:"áim on it!"}
    ]},
    estrofa2:{label:"Repaso Semana 10", lineas:[
      {en:"I see what you mean, that's interesting,", es:"Entiendo lo que quieres decir, es interesante,", pron:"ái síi uát iú míin, dats íntresting,"},
      {en:"tell me more, I'd love to hear it!", es:"¡contame más, me encantaría escucharlo!", pron:"tel mi mor, áid lav tu jíar it!"}
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
    estrofa2:{label:"Repaso Semana 11", lineas:[
      {en:"Excuse me for a second, I'll be right there,", es:"Disculpame un segundo, ya voy para allá,", pron:"exquiúsmi for a sécond, áil bi ráit dér,"},
      {en:"Thanks for waiting, almost done!", es:"¡Gracias por esperar, casi termino!", pron:"zenks for uéiting, ólmoust dan!"}
    ]}
  },
  { numero:14, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Can I ask you something?", es:"¿Puedo preguntarte algo?", pron:"can ái ask iú sámzing?"},
      {en:"Of course, go ahead!", es:"¡Por supuesto, adelante!", pron:"of cors, góu ajéd!"},
      {en:"Never mind,", es:"No importa,", pron:"néver máind,"},
      {en:"it's not important!", es:"¡no es importante!", pron:"its nat impórtant!"}
    ]},
    estrofa2:{label:"Repaso Semana 12", lineas:[
      {en:"Perfect, that works, sounds like a plan,", es:"Perfecto, eso funciona, suena como un plan,", pron:"pérfect, dat uérks, sáunds láik a plan,"},
      {en:"let's do that, I'm on it!", es:"¡hagamos eso, ya me pongo con eso!", pron:"lets du dat, áim on it!"}
    ]}
  },
  { numero:15, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm on my way,", es:"Estoy en camino,", pron:"áim on mái uéi,"},
      {en:"almost there!", es:"¡ya casi llego!", pron:"ólmoust dér!"},
      {en:"Just a moment,", es:"Un momento,", pron:"yast a móument,"},
      {en:"here I am!", es:"¡acá estoy!", pron:"jíar ái am!"}
    ]},
    estrofa2:{label:"Repaso Semana 13", lineas:[
      {en:"Excuse me, is this seat taken? No, go ahead!", es:"Disculpe, ¿este asiento está ocupado? ¡No, adelante!", pron:"exquiúsmi, is dis síit téiken? nóu, góu ajéd!"},
      {en:"Thanks, I appreciate it, anytime!", es:"¡Gracias, lo aprecio, cuando quieras!", pron:"zenks, ái aprísheit it, énitaim!"}
    ]}
  },
  { numero:16, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That's a great idea,", es:"Esa es una gran idea,", pron:"dats a gréit aidía,"},
      {en:"let's try it!", es:"¡intentémoslo!", pron:"lets trái it!"},
      {en:"Why not?", es:"¿Por qué no?", pron:"uái nat?"},
      {en:"Sounds fun!", es:"¡Suena divertido!", pron:"sáunds fan!"}
    ]},
    estrofa2:{label:"Repaso Semana 14", lineas:[
      {en:"Can I ask you something? Of course, go ahead,", es:"¿Puedo preguntarte algo? Por supuesto, adelante,", pron:"can ái ask iú sámzing? of cors, góu ajéd,"},
      {en:"never mind, it's not important!", es:"¡no importa, no es importante!", pron:"néver máind, its nat impórtant!"}
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
    estrofa2:{label:"Repaso Semana 15", lineas:[
      {en:"I'm on my way, almost there,", es:"Estoy en camino, ya casi llego,", pron:"áim on mái uéi, ólmoust dér,"},
      {en:"just a moment, here I am!", es:"¡un momento, acá estoy!", pron:"yast a móument, jíar ái am!"}
    ]}
  },
  { numero:18, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What's new?", es:"¿Qué hay de nuevo?", pron:"uáts niú?"},
      {en:"Not much,", es:"No mucho,", pron:"nat mach,"},
      {en:"same as always,", es:"lo mismo de siempre,", pron:"séim as ólueis,"},
      {en:"nice to hear!", es:"¡qué bueno escuchar eso!", pron:"náis tu jíar!"}
    ]},
    estrofa2:{label:"Repaso Semana 16", lineas:[
      {en:"That's a great idea, let's try it,", es:"Esa es una gran idea, intentémoslo,", pron:"dats a gréit aidía, lets trái it,"},
      {en:"why not, sounds fun!", es:"¡por qué no, suena divertido!", pron:"uái nat, sáunds fan!"}
    ]}
  },
  { numero:19, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Could you slow down, please?", es:"¿Podrías ir más despacio, por favor?", pron:"cud iú slóu dáun, plíis?"},
      {en:"Sure, no problem!", es:"¡Claro, no hay problema!", pron:"shur, nóu práblem!"},
      {en:"Is that better?", es:"¿Está mejor así?", pron:"is dat béter?"},
      {en:"Much better, thanks!", es:"¡Mucho mejor, gracias!", pron:"mach béter, zenks!"}
    ]},
    estrofa2:{label:"Repaso Semana 17", lineas:[
      {en:"I'm running late, I'll hurry,", es:"Estoy llegando tarde, me voy a apurar,", pron:"áim ráning léit, áil jéri,"},
      {en:"no rush, take it easy!", es:"¡no hay apuro, tomátelo con calma!", pron:"nóu rash, téik it ísi!"}
    ]}
  },
  { numero:20, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Take care!", es:"¡Cuídate!", pron:"téik quér!"},
      {en:"You too!", es:"¡Tú también!", pron:"iú tú!"},
      {en:"See you around,", es:"Nos vemos por ahí,", pron:"síi iú aráund,"},
      {en:"have a good one!", es:"¡que la pases bien!", pron:"jav a gud uán!"}
    ]},
    estrofa2:{label:"Repaso Semana 18", lineas:[
      {en:"What's new? Not much,", es:"¿Qué hay de nuevo? No mucho,", pron:"uáts niú? nat mach,"},
      {en:"same as always, nice to hear!", es:"¡lo mismo de siempre, qué bueno escuchar eso!", pron:"séim as ólueis, náis tu jíar!"}
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
    estrofa2:{label:"Repaso Semana 19", lineas:[
      {en:"Could you slow down, please? Sure, no problem!", es:"¿Podrías ir más despacio? ¡Claro, no hay problema!", pron:"cud iú slóu dáun, plíis? shur, nóu práblem!"},
      {en:"Is that better? Much better, thanks!", es:"¿Está mejor así? ¡Mucho mejor, gracias!", pron:"is dat béter? mach béter, zenks!"}
    ]}
  },
  { numero:22, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Is everything okay?", es:"¿Está todo bien?", pron:"is évrizing oukéi?"},
      {en:"Yes, all good!", es:"¡Sí, todo bien!", pron:"iés, ol gud!"},
      {en:"Let me double-check,", es:"Déjame revisar de nuevo,", pron:"let mi dábol chek,"},
      {en:"just to be sure!", es:"¡solo para estar seguro!", pron:"yast tu bi shur!"}
    ]},
    estrofa2:{label:"Repaso Semana 20", lineas:[
      {en:"Take care, you too,", es:"¡Cuídate! ¡Tú también!", pron:"téik quér, iú tú,"},
      {en:"see you around, have a good one!", es:"¡nos vemos por ahí, que la pases bien!", pron:"síi iú aráund, jav a gud uán!"}
    ]}
  },
  { numero:23, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That works for me,", es:"Eso me sirve,", pron:"dat uérks for mi,"},
      {en:"perfect timing!", es:"¡momento perfecto!", pron:"pérfect táiming!"},
      {en:"Let's confirm it,", es:"Confirmémoslo,", pron:"lets canférm it,"},
      {en:"all set then!", es:"¡listo entonces!", pron:"ol set den!"}
    ]},
    estrofa2:{label:"Repaso Semana 21", lineas:[
      {en:"Do you need anything? I'm all set,", es:"¿Necesitas algo? Estoy bien así,", pron:"du iú níid énizing? áim ol set,"},
      {en:"just checking, appreciate it!", es:"¡solo estaba revisando, lo aprecio!", pron:"yast chéking, aprísheit it!"}
    ]}
  },
  { numero:24, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Congratulations!", es:"¡Felicitaciones!", pron:"congrachuléishons!"},
      {en:"Thank you so much!", es:"¡Muchas gracias!", pron:"zenk iú sóu mach!"},
      {en:"You earned it,", es:"Te lo mereces,", pron:"iú érnd it,"},
      {en:"well deserved!", es:"¡bien merecido!", pron:"uél disérvd!"}
    ]},
    estrofa2:{label:"Repaso Semana 22", lineas:[
      {en:"Is everything okay? Yes, all good,", es:"¿Está todo bien? ¡Sí, todo bien!", pron:"is évrizing oukéi? iés, ol gud,"},
      {en:"let me double-check, just to be sure!", es:"¡déjame revisar de nuevo, solo para estar seguro!", pron:"let mi dábol chek, yast tu bi shur!"}
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
    estrofa2:{label:"Repaso Semana 23", lineas:[
      {en:"That works for me, perfect timing,", es:"Eso me sirve, momento perfecto,", pron:"dat uérks for mi, pérfect táiming,"},
      {en:"let's confirm it, all set then!", es:"¡confirmémoslo, listo entonces!", pron:"lets canférm it, ol set den!"}
    ]}
  },
  { numero:26, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I really appreciate this,", es:"De verdad aprecio esto,", pron:"ái ríli aprísheit dis,"},
      {en:"it means a lot,", es:"significa mucho,", pron:"it míins a lat,"},
      {en:"you're very kind,", es:"eres muy amable,", pron:"iór véri káind,"},
      {en:"thank you again!", es:"¡gracias otra vez!", pron:"zenk iú aguén!"}
    ]},
    estrofa2:{label:"Repaso Semana 24", lineas:[
      {en:"Congratulations! Thank you so much!", es:"¡Felicitaciones! ¡Muchas gracias!", pron:"congrachuléishons! zenk iú sóu mach!"},
      {en:"You earned it, well deserved!", es:"¡Te lo mereces, bien merecido!", pron:"iú érnd it, uél disérvd!"}
    ]}
  },
  { numero:27, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let's stay in touch,", es:"Mantengámonos en contacto,", pron:"lets stéi in tach,"},
      {en:"absolutely!", es:"¡por supuesto!", pron:"ábsoliutli!"},
      {en:"I'll write to you,", es:"Te voy a escribir,", pron:"áil ráit tu iú,"},
      {en:"looking forward to it!", es:"¡con muchas ganas!", pron:"lúking fóruard tu it!"}
    ]},
    estrofa2:{label:"Repaso Semana 25", lineas:[
      {en:"Can we talk for a second? Sure, what's up?", es:"¿Podemos hablar un segundo? ¡Claro, qué pasa!", pron:"can uí tok for a sécond? shur, uáts ap?"},
      {en:"It's nothing serious, just wanted to check in!", es:"¡No es nada serio, solo quería ver cómo estabas!", pron:"its názing síirios, yast uánted tu chek in!"}
    ]}
  },
  { numero:28, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I couldn't have done it without you,", es:"No podría haberlo hecho sin ti,", pron:"ái cúdnt jav dan it uidáut iú,"},
      {en:"teamwork!", es:"¡trabajo en equipo!", pron:"tíimuork!"},
      {en:"We did it together,", es:"Lo hicimos juntos,", pron:"uí did it tugéder,"},
      {en:"that's what counts!", es:"¡eso es lo que importa!", pron:"dats uát cáunts!"}
    ]},
    estrofa2:{label:"Repaso Semana 26", lineas:[
      {en:"I really appreciate this, it means a lot,", es:"De verdad aprecio esto, significa mucho,", pron:"ái ríli aprísheit dis, it míins a lat,"},
      {en:"you're very kind, thank you again!", es:"¡eres muy amable, gracias otra vez!", pron:"iór véri káind, zenk iú aguén!"}
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
    estrofa2:{label:"Repaso Semana 27", lineas:[
      {en:"Let's stay in touch, absolutely!", es:"Mantengámonos en contacto, ¡por supuesto!", pron:"lets stéi in tach, ábsoliutli!"},
      {en:"I'll write to you, looking forward to it!", es:"¡Te voy a escribir, con muchas ganas!", pron:"áil ráit tu iú, lúking fóruard tu it!"}
    ]}
  },
  { numero:30, audio:null, esCierre:true,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"You made it all the way,", es:"Llegaste hasta el final,", pron:"iú méid it ol de uéi,"},
      {en:"one hundred twenty phrases,", es:"ciento veinte frases,", pron:"uán jándred tuénti fréisis,"},
      {en:"every single one,", es:"cada una de ellas,", pron:"évri síngol uán,"},
      {en:"now part of you!", es:"¡ahora son parte de ti!", pron:"náu part of iú!"}
    ]},
    estrofa2:{label:"Repaso Semana 29", lineas:[
      {en:"We're almost there, just one more step,", es:"Ya casi llegamos, un paso más,", pron:"uír ólmoust dér, yast uán mor step,"},
      {en:"I can feel it, we're so close!", es:"¡Lo puedo sentir, estamos tan cerca!", pron:"ái can fíil it, uír sóu clóus!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"By the way, speaking of which, I forgot to tell you,", es:"Por cierto, hablando de eso, me olvidé de contarte,", pron:"bái de uéi, spíiking of uích, ái forgát tu tel iú,"},
      {en:"that reminds me of something funny too,", es:"eso también me recuerda algo gracioso,", pron:"dat rimáinds mi of sámzin fáni tu,"},
      {en:"anyway, we can talk about that later,", es:"de todas formas, podemos hablar de eso después,", pron:"éniuei, uí can tok abáut dat léiter,"},
      {en:"let's keep moving on for now!", es:"¡sigamos adelante por ahora!", pron:"lets kíip múuving on for náu!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Honestly, to be fair, I hadn't thought about it that way,", es:"Honestamente, para ser justo, no lo había pensado así,", pron:"ánestli, tu bi fer, ái jádnt zot abáut it dat uéi,"},
      {en:"if you ask me, it makes sense now,", es:"si me preguntas, ahora tiene sentido,", pron:"if iú ask mi, it méiks sens náu,"},
      {en:"personally, I agree with you,", es:"personalmente, estoy de acuerdo contigo,", pron:"pérsonali, ái agríi uid iú,"},
      {en:"but of course, I could be wrong!", es:"¡pero claro, podría estar equivocado!", pron:"bat of cors, ái cud bi rong!"}
    ]}
  },
  { numero:3, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let's face it,", es:"Seamos honestos,", pron:"lets féis it,"},
      {en:"the thing is,", es:"la cosa es que,", pron:"de zing is,"},
      {en:"here's the deal,", es:"acá está el asunto,", pron:"jírs de díil,"},
      {en:"long story short,", es:"para hacerla corta,", pron:"long stóri short,"}
    ]},
    estrofa2:{label:"Repaso Semana 1", lineas:[
      {en:"By the way, that reminds me,", es:"Por cierto, eso me recuerda,", pron:"bái de uéi, dat rimáinds mi,"},
      {en:"anyway, moving on!", es:"¡de todas formas, sigamos adelante!", pron:"éniuei, múuving on!"}
    ]}
  },
  { numero:4, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I was just thinking,", es:"Justo estaba pensando,", pron:"ái uás yast zínking,"},
      {en:"come to think of it,", es:"pensándolo bien,", pron:"cam tu zink of it,"},
      {en:"now that you mention it,", es:"ahora que lo mencionas,", pron:"náu dat iú ménshion it,"},
      {en:"funny you should say that!", es:"¡qué gracioso que digas eso!", pron:"fáni iú shud séi dat!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I was just thinking about that, come to think of it,", es:"Justo estaba pensando en eso, pensándolo bien,", pron:"ái uás yast zínking abáut dat, cam tu zink of it,"},
      {en:"now that you mention it, it makes more sense,", es:"ahora que lo mencionas, tiene más sentido,", pron:"náu dat iú ménshion it, it méiks mor sens,"},
      {en:"funny you should say that,", es:"qué gracioso que digas eso,", pron:"fáni iú shud séi dat,"},
      {en:"I was thinking the same thing!", es:"¡yo estaba pensando lo mismo!", pron:"ái uás zínking de séim zing!"}
    ]}
  },
  { numero:5, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Not gonna lie,", es:"No voy a mentir,", pron:"nat gána lái,"},
      {en:"I hear you,", es:"te entiendo,", pron:"ái jíar iú,"},
      {en:"fair enough,", es:"justo, tiene sentido,", pron:"fer ináf,"},
      {en:"that makes two of us!", es:"¡ya somos dos!", pron:"dat méiks tú of as!"}
    ]},
    estrofa2:{label:"Repaso Semana 2", lineas:[
      {en:"Honestly, if you ask me,", es:"Honestamente, si me preguntas,", pron:"ánestli, if iú ask mi,"},
      {en:"personally, I could be wrong!", es:"¡personalmente, podría estar equivocado!", pron:"pérsonali, ái cud bi rong!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"No worries at all, take your time,", es:"No hay ningún problema, tómate tu tiempo,", pron:"nóu uóris at ol, téik iór táim,"},
      {en:"whenever you're ready, just let me know,", es:"cuando estés listo, solo avísame,", pron:"uénever iór rédi, yast let mi nóu,"},
      {en:"there's no rush at all,", es:"no hay apuro para nada,", pron:"ders nóu rash at ol,"},
      {en:"we have plenty of time!", es:"¡tenemos mucho tiempo!", pron:"uí jav plénti of táim!"}
    ]}
  },
  { numero:7, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I couldn't agree more,", es:"No podría estar más de acuerdo,", pron:"ái cúdnt agríi mor,"},
      {en:"that's exactly it,", es:"eso es exactamente,", pron:"dats exáctli it,"},
      {en:"you took the words right out of my mouth,", es:"me quitaste las palabras de la boca,", pron:"iú tuk de uords ráit áut of mái máuz,"},
      {en:"couldn't have said it better!", es:"¡no lo podría haber dicho mejor!", pron:"cúdnt jav sed it béter!"}
    ]},
    estrofa2:{label:"Repaso Semana 3", lineas:[
      {en:"Let's face it, here's the deal,", es:"Seamos honestos, acá está el asunto,", pron:"lets féis it, jírs de díil,"},
      {en:"long story short, that's the thing!", es:"¡para hacerla corta, esa es la cosa!", pron:"long stóri short, dats de zing!"}
    ]}
  },
  { numero:8, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I was about to say the same thing,", es:"Estaba a punto de decir lo mismo,", pron:"ái uás abáut tu séi de séim zing,"},
      {en:"great minds think alike,", es:"las mentes brillantes piensan igual,", pron:"gréit máinds zink aláik,"},
      {en:"exactly what I was thinking,", es:"exactamente lo que estaba pensando,", pron:"exáctli uát ái uás zínking,"},
      {en:"we're on the same page!", es:"¡estamos en la misma sintonía!", pron:"uír on de séim péich!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I was about to say the same thing, great minds think alike,", es:"Estaba a punto de decir lo mismo, las mentes brillantes piensan igual,", pron:"ái uás abáut tu séi de séim zing, gréit máinds zink aláik,"},
      {en:"that's exactly what I was thinking,", es:"eso es exactamente lo que estaba pensando,", pron:"dats exáctli uát ái uás zínking,"},
      {en:"we're on the same page today,", es:"estamos en la misma sintonía hoy,", pron:"uír on de séim péich tudéi,"},
      {en:"that hardly ever happens!", es:"¡eso casi nunca pasa!", pron:"dat járdli éver jápens!"}
    ]}
  },
  { numero:9, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"To make a long story short,", es:"Para acortar la historia,", pron:"tu méik a long stóri short,"},
      {en:"let's cut to the chase,", es:"vayamos al grano,", pron:"lets cat tu de chéis,"},
      {en:"bottom line is,", es:"la conclusión es,", pron:"bátom láin is,"},
      {en:"in a nutshell...", es:"en pocas palabras...", pron:"in a nátshel..."}
    ]},
    estrofa2:{label:"Repaso Semana 4", lineas:[
      {en:"I was just thinking, now that you mention it,", es:"Justo estaba pensando, ahora que lo mencionas,", pron:"ái uás yast zínking, náu dat iú ménshion it,"},
      {en:"funny you should say that!", es:"¡qué gracioso que digas eso!", pron:"fáni iú shud séi dat!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"That being said, on second thought,", es:"Dicho esto, pensándolo mejor,", pron:"dat bíing sed, on sécond zot,"},
      {en:"let me rephrase that a little,", es:"déjame reformular eso un poco,", pron:"let mi riphréis dat a lítol,"},
      {en:"what I meant was something different,", es:"lo que quise decir fue algo distinto,", pron:"uát ái ment uás sámzin díferent,"},
      {en:"does that make more sense now?", es:"¿eso tiene más sentido ahora?", pron:"das dat méik mor sens náu?"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"As a matter of fact, believe it or not,", es:"De hecho, aunque no lo creas,", pron:"as a máter of fact, bilíiv it or nat,"},
      {en:"it took more or less two hours,", es:"tomó más o menos dos horas,", pron:"it tuk mor or les tú áuars,"},
      {en:"give or take a few minutes,", es:"aproximadamente unos minutos más o menos,", pron:"guiv or téik a fiú mínits,"},
      {en:"but who knows what happens next!", es:"¡pero quién sabe qué pasa después!", pron:"bat jú nóus uát jápens next!"}
    ]}
  },
  { numero:12, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I see what you mean,", es:"Veo lo que quieres decir,", pron:"ái síi uát iú míin,"},
      {en:"that makes sense to me,", es:"eso me tiene sentido,", pron:"dat méiks sens tu mi,"},
      {en:"I wasn't aware of that,", es:"no estaba al tanto de eso,", pron:"ái uásnt auér of dat,"},
      {en:"good to know!", es:"¡bueno saberlo!", pron:"gud tu nóu!"}
    ]},
    estrofa2:{label:"Repaso Semana 10", lineas:[
      {en:"That being said, on second thought,", es:"Dicho esto, pensándolo mejor,", pron:"dat bíing sed, on sécond zot,"},
      {en:"what I meant was something different!", es:"¡lo que quise decir fue algo distinto!", pron:"uát ái ment uás sámzin díferent!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Let's just say it wasn't easy, put it this way,", es:"Digamos que no fue fácil, pongámoslo así,", pron:"lets yast séi it uásnt íisi, put it dis uéi,"},
      {en:"in other words, we struggled a bit,", es:"en otras palabras, luchamos un poco,", pron:"in áder uords, uí strágold a bit,"},
      {en:"to put it simply, it worked out fine,", es:"para decirlo simple, salió bien,", pron:"tu put it símpli, it uorkt áut fáin,"},
      {en:"basically, we made it!", es:"¡básicamente, lo logramos!", pron:"béisicli, uí méid it!"}
    ]}
  },
  { numero:14, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm getting the hang of it,", es:"Le estoy agarrando la mano,", pron:"áim guéting de jang of it,"},
      {en:"practice makes perfect,", es:"la práctica hace al maestro,", pron:"práctis méiks pérfect,"},
      {en:"little by little,", es:"poco a poco,", pron:"lítol bái lítol,"},
      {en:"step by step!", es:"¡paso a paso!", pron:"step bái step!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I'm getting the hang of it now,", es:"Ya le estoy agarrando la mano,", pron:"áim guéting de jang of it náu,"},
      {en:"practice makes perfect, after all,", es:"la práctica hace al maestro, después de todo,", pron:"práctis méiks pérfect, áfter ol,"},
      {en:"little by little, day by day,", es:"poco a poco, día a día,", pron:"lítol bái lítol, déi bái déi,"},
      {en:"step by step, I'm getting there!", es:"¡paso a paso, ya casi llego!", pron:"step bái step, áim guéting der!"}
    ]}
  },
  { numero:15, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Speaking from experience,", es:"Hablando por experiencia,", pron:"spíiking fram expíriens,"},
      {en:"in my experience,", es:"en mi experiencia,", pron:"in mái expíriens,"},
      {en:"from what I've seen,", es:"por lo que he visto,", pron:"fram uát áiv síin,"},
      {en:"if I had to guess...", es:"si tuviera que adivinar...", pron:"if ái jad tu ges..."}
    ]},
    estrofa2:{label:"Repaso Semana 11", lineas:[
      {en:"As a matter of fact, more or less,", es:"De hecho, más o menos,", pron:"as a máter of fact, mor or les,"},
      {en:"give or take, who knows!", es:"¡aproximadamente, quién sabe!", pron:"guiv or téik, jú nóus!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"That said, even so, we should try,", es:"Dicho eso, aun así, deberíamos intentar,", pron:"dat sed, íven sóu, uí shud trái,"},
      {en:"either way, it's worth a shot,", es:"de cualquier manera, vale la pena intentarlo,", pron:"íder uéi, its uorz a shat,"},
      {en:"in any case, let's give it a try,", es:"en cualquier caso, intentémoslo,", pron:"in éni kéis, lets guiv it a trái,"},
      {en:"no matter what happens!", es:"¡pase lo que pase!", pron:"nóu máter uát jápens!"}
    ]}
  },
  { numero:17, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"You know what I mean?", es:"¿Sabes a qué me refiero?", pron:"iú nóu uát ái míin?"},
      {en:"does that make sense?", es:"¿tiene sentido eso?", pron:"das dat méik sens?"},
      {en:"if that makes sense,", es:"si eso tiene sentido,", pron:"if dat méiks sens,"},
      {en:"right?", es:"¿verdad?", pron:"ráit?"}
    ]},
    estrofa2:{label:"Repaso Semana 13", lineas:[
      {en:"Let's just say, in other words,", es:"Digamos que, en otras palabras,", pron:"lets yast séi, in áder uords,"},
      {en:"basically, we made it!", es:"¡básicamente, lo logramos!", pron:"béisicli, uí méid it!"}
    ]}
  },
  { numero:18, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Wait, what?", es:"Espera, ¿qué?", pron:"uéit, uát?"},
      {en:"hold on a second,", es:"espera un segundo,", pron:"jóuld on a sécond,"},
      {en:"back up,", es:"retrocede,", pron:"bak ap,"},
      {en:"say that again?", es:"¿puedes repetir eso?", pron:"séi dat aguén?"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Wait, what? Hold on a second,", es:"Espera, ¿qué? Espera un segundo,", pron:"uéit, uát? jóuld on a sécond,"},
      {en:"can we back up a little?", es:"¿podemos retroceder un poco?", pron:"can uí bak ap a lítol?"},
      {en:"say that again, please,", es:"repite eso, por favor,", pron:"séi dat aguén, plíis,"},
      {en:"I want to make sure I understand!", es:"¡quiero asegurarme de entender!", pron:"ái uánt tu méik shur ái anderstánd!"}
    ]}
  },
  { numero:19, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I get what you're saying,", es:"Entiendo lo que estás diciendo,", pron:"ái guet uát iór séing,"},
      {en:"makes total sense,", es:"tiene total sentido,", pron:"méiks tóutal sens,"},
      {en:"that clears it up,", es:"eso lo aclara,", pron:"dat clíars it ap,"},
      {en:"crystal clear!", es:"¡clarísimo!", pron:"cristal clíar!"}
    ]},
    estrofa2:{label:"Repaso Semana 16", lineas:[
      {en:"That said, even so, either way,", es:"Dicho eso, aun así, de cualquier manera,", pron:"dat sed, íven sóu, íder uéi,"},
      {en:"no matter what happens!", es:"¡pase lo que pase!", pron:"nóu máter uát jápens!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I couldn't tell you, honestly,", es:"No te sabría decir, honestamente,", pron:"ái cúdnt tel iú, ánestli,"},
      {en:"your guess is as good as mine,", es:"tu suposición es tan buena como la mía,", pron:"iór ges is as gud as máin,"},
      {en:"it beats me completely,", es:"no tengo ni idea para nada,", pron:"it bíits mi camplíitli,"},
      {en:"search me, I really don't know!", es:"¡no tengo la menor idea, de verdad no sé!", pron:"serch mi, ái ríali dont nóu!"}
    ]}
  },
  { numero:21, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Now you're talking!", es:"¡Ahora sí!", pron:"náu iór tóking!"},
      {en:"that's more like it,", es:"eso ya es más como es,", pron:"dats mor láik it,"},
      {en:"there you go,", es:"así se hace,", pron:"der iú góu,"},
      {en:"way to go!", es:"¡bien hecho!", pron:"uéi tu góu!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Now you're talking! That's more like it,", es:"¡Ahora sí! Eso ya es más como es,", pron:"náu iór tóking! dats mor láik it,"},
      {en:"there you go, exactly right,", es:"así se hace, exactamente,", pron:"der iú góu, exáctli ráit,"},
      {en:"way to go, you nailed it,", es:"bien hecho, le diste en el clavo,", pron:"uéi tu góu, iú néild it,"},
      {en:"I'm impressed!", es:"¡estoy impresionado!", pron:"áim imprésd!"}
    ]}
  },
  { numero:22, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I hate to say it, but,", es:"Odio decirlo, pero,", pron:"ái jéit tu séi it, bat,"},
      {en:"no offense, but,", es:"sin ofender, pero,", pron:"nóu ofens, bat,"},
      {en:"don't take this the wrong way,", es:"no lo tomes a mal,", pron:"dont téik dis de rong uéi,"},
      {en:"just saying!", es:"¡solo digo!", pron:"yast séing!"}
    ]},
    estrofa2:{label:"Repaso Semana 20", lineas:[
      {en:"I couldn't tell you, your guess is as good as mine,", es:"No te sabría decir, tu suposición es tan buena como la mía,", pron:"ái cúdnt tel iú, iór ges is as gud as máin,"},
      {en:"search me, I really don't know!", es:"¡no tengo la menor idea, de verdad no sé!", pron:"serch mi, ái ríali dont nóu!"}
    ]}
  },
  { numero:23, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Between you and me,", es:"Entre tú y yo,", pron:"bituíin iú and mi,"},
      {en:"keep this between us,", es:"que quede entre nosotros,", pron:"kíip dis bituíin as,"},
      {en:"off the record,", es:"extraoficialmente,", pron:"of de récord,"},
      {en:"just between friends!", es:"¡solo entre amigos!", pron:"yast bituíin frends!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Between you and me, keep this between us,", es:"Entre tú y yo, que quede entre nosotros,", pron:"bituíin iú and mi, kíip dis bituíin as,"},
      {en:"this is completely off the record,", es:"esto es totalmente extraoficial,", pron:"dis is camplíitli of de récord,"},
      {en:"just between friends, right?", es:"¿solo entre amigos, verdad?", pron:"yast bituíin frends, ráit?"},
      {en:"you can trust me!", es:"¡puedes confiar en mí!", pron:"iú can trast mi!"}
    ]}
  },
  { numero:24, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Out of curiosity,", es:"Por curiosidad,", pron:"áut of curiásiti,"},
      {en:"just wondering,", es:"solo me preguntaba,", pron:"yast uándering,"},
      {en:"quick question,", es:"pregunta rápida,", pron:"cuík cuéschion,"},
      {en:"random thought...", es:"pensamiento al azar...", pron:"rándom zot..."}
    ]},
    estrofa2:{label:"Repaso Semana 21", lineas:[
      {en:"Now you're talking! There you go,", es:"¡Ahora sí! Así se hace,", pron:"náu iór tóking! der iú góu,"},
      {en:"way to go, I'm impressed!", es:"¡bien hecho, estoy impresionado!", pron:"uéi tu góu, áim imprésd!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Not to change the subject, but, on a different note,", es:"No para cambiar de tema, pero, en otro tema,", pron:"nat tu chéinch de sábyect, bat, on a díferent nóut,"},
      {en:"before I forget, did you call them back?", es:"antes de que se me olvide, ¿les devolviste la llamada?", pron:"bifór ái forguét, did iú col dem bak?"},
      {en:"while we're on the topic, I meant to ask,", es:"ya que estamos en el tema, quería preguntar,", pron:"uáil uír on de tápic, ái ment tu ask,"},
      {en:"how did that go?", es:"¿cómo salió eso?", pron:"jáu did dat góu?"}
    ]}
  },
  { numero:26, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"At the end of the day,", es:"Al final del día,", pron:"at de end of de déi,"},
      {en:"when all is said and done,", es:"cuando todo está dicho y hecho,", pron:"uén ol is sed and dan,"},
      {en:"all things considered,", es:"considerando todo,", pron:"ol zings cansíderd,"},
      {en:"in the grand scheme of things...", es:"en el gran esquema de las cosas...", pron:"in de grand skíim of zings..."}
    ]},
    estrofa2:{label:"Repaso Semana 23", lineas:[
      {en:"Between you and me, off the record,", es:"Entre tú y yo, extraoficialmente,", pron:"bituíin iú and mi, of de récord,"},
      {en:"just between friends, you can trust me!", es:"¡solo entre amigos, puedes confiar en mí!", pron:"yast bituíin frends, iú can trast mi!"}
    ]}
  },
  { numero:27, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'll let you know,", es:"Te voy a avisar,", pron:"áil let iú nóu,"},
      {en:"I'll keep you posted,", es:"te voy a mantener al tanto,", pron:"áil kíip iú póustid,"},
      {en:"stay tuned,", es:"mantente atento,", pron:"stéi tiúnd,"},
      {en:"more to come!", es:"¡más viene en camino!", pron:"mor tu cam!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I'll let you know as soon as I hear anything,", es:"Te voy a avisar en cuanto sepa algo,", pron:"áil let iú nóu as súun as ái jíar énizin,"},
      {en:"I'll keep you posted, don't worry,", es:"te voy a mantener al tanto, no te preocupes,", pron:"áil kíip iú póustid, dont uóri,"},
      {en:"stay tuned for updates,", es:"mantente atento a las novedades,", pron:"stéi tiúnd for apdéits,"},
      {en:"there's more to come!", es:"¡hay más en camino!", pron:"ders mor tu cam!"}
    ]}
  },
  { numero:28, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I really appreciate it,", es:"Realmente lo aprecio,", pron:"ái ríali apríishieit it,"},
      {en:"that means a lot,", es:"eso significa mucho,", pron:"dat míins a lat,"},
      {en:"you're too kind,", es:"eres muy amable,", pron:"iór tu káind,"},
      {en:"I owe you one!", es:"¡te debo una!", pron:"ái óu iú uán!"}
    ]},
    estrofa2:{label:"Repaso Semana 26", lineas:[
      {en:"At the end of the day, when all is said and done,", es:"Al final del día, cuando todo está dicho y hecho,", pron:"at de end of de déi, uén ol is sed and dan,"},
      {en:"all things considered, it was worth it!", es:"¡considerando todo, valió la pena!", pron:"ol zings cansíderd, it uás uorz it!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"That's a good point, you have a point there,", es:"Ese es un buen punto, tienes razón en eso,", pron:"dats a gud póint, iú jav a póint der,"},
      {en:"true, but have you considered this?", es:"cierto, pero ¿consideraste esto?", pron:"tru, bat jav iú cansíderd dis?"},
      {en:"on the other hand, there's another way to see it,", es:"por otro lado, hay otra forma de verlo,", pron:"on de áder jand, ders anáder uéi tu síi it,"},
      {en:"it's worth thinking about!", es:"¡vale la pena pensarlo!", pron:"its uorz zínking abáut!"}
    ]}
  },
  { numero:30, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"You've come a long way,", es:"Has recorrido un largo camino,", pron:"iúv cam a long uéi,"},
      {en:"look how far you've come,", es:"mira cuánto has avanzado,", pron:"luk jáu far iúv cam,"},
      {en:"you should be proud,", es:"deberías estar orgulloso,", pron:"iú shud bi práud,"},
      {en:"this is just the beginning!", es:"¡esto es solo el comienzo!", pron:"dis is yast de biguíning!"}
    ]},
    estrofa2:{label:"Repaso Semana 27", lineas:[
      {en:"I'll let you know, I'll keep you posted,", es:"Te voy a avisar, te voy a mantener al tanto,", pron:"áil let iú nóu, áil kíip iú póustid,"},
      {en:"stay tuned, more to come!", es:"¡mantente atento, más viene en camino!", pron:"stéi tiúnd, mor tu cam!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"This exam is a piece of cake, honestly,", es:"Este examen es pan comido, honestamente,", pron:"dis exám is a píis of kéik, ánestli,"},
      {en:"break a leg tomorrow, you'll do great,", es:"mucha suerte mañana, lo vas a hacer genial,", pron:"bréik a leg tumórou, iúl du gréit,"},
      {en:"I'm a bit under the weather today,", es:"estoy medio enfermo hoy,", pron:"áim a bit ánder de uéder tudéi,"},
      {en:"but this only happens once in a blue moon!", es:"¡pero esto solo pasa una vez cada muerte de obispo!", pron:"bat dis óunli jápens uáns in a blú mun!"}
    ]}
  },
  { numero:2, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Spill the beans,", es:"Suelta la sopa,", pron:"spil de bíins,"},
      {en:"hit the sack,", es:"irse a dormir,", pron:"jit de sak,"},
      {en:"on the ball,", es:"despierto y atento,", pron:"on de bol,"},
      {en:"a piece of the pie!", es:"¡una parte del pastel!", pron:"a píis of de pái!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Come on, spill the beans already,", es:"Vamos, suelta la sopa de una vez,", pron:"cam on, spil de bíins olrédi,"},
      {en:"I'm exhausted, I need to hit the sack,", es:"estoy agotado, necesito irme a dormir,", pron:"áim exóstid, ái níid tu jit de sak,"},
      {en:"she's really on the ball at work,", es:"ella está muy despierta y atenta en el trabajo,", pron:"shis ríali on de bol at uork,"},
      {en:"and she wants a piece of the pie too!", es:"¡y también quiere una parte del pastel!", pron:"and shi uánts a píis of de pái tu!"}
    ]}
  },
  { numero:3, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let the cat out of the bag,", es:"Revelar el secreto sin querer,", pron:"let de cat áut of de bag,"},
      {en:"barking up the wrong tree,", es:"equivocarse de camino,", pron:"bárking ap de rong tríi,"},
      {en:"the ball is in your court,", es:"la decisión es tuya,", pron:"de bol is in iór cort,"},
      {en:"burn the midnight oil!", es:"¡trabajar hasta muy tarde!", pron:"bern de mídnáit óil!"}
    ]},
    estrofa2:{label:"Repaso Semana 1", lineas:[
      {en:"It's a piece of cake, break a leg,", es:"Es pan comido, mucha suerte,", pron:"its a píis of kéik, bréik a leg,"},
      {en:"once in a blue moon!", es:"¡una vez cada muerte de obispo!", pron:"uáns in a blú mun!"}
    ]}
  },
  { numero:4, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Kill two birds with one stone,", es:"Matar dos pájaros de un tiro,", pron:"kil tú berds uid uán stóun,"},
      {en:"blessing in disguise,", es:"suerte disfrazada de mala,", pron:"blésing in disgáis,"},
      {en:"beat around the bush,", es:"andarse con rodeos,", pron:"bíit aráund de bush,"},
      {en:"add fuel to the fire!", es:"¡echarle leña al fuego!", pron:"ad fiúel tu de fáier!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"This way we kill two birds with one stone,", es:"Así matamos dos pájaros de un tiro,", pron:"dis uéi uí kil tú berds uid uán stóun,"},
      {en:"losing that job was a blessing in disguise,", es:"perder ese trabajo fue suerte disfrazada de mala,", pron:"lúusing dat yab uás a blésing in disgáis,"},
      {en:"stop beating around the bush,", es:"deja de andarte con rodeos,", pron:"stap bíiting aráund de bush,"},
      {en:"and don't add fuel to the fire!", es:"¡y no le eches leña al fuego!", pron:"and dont ad fiúel tu de fáier!"}
    ]}
  },
  { numero:5, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Cry over spilled milk,", es:"Llorar por lo que ya no tiene remedio,", pron:"crái óver spild milk,"},
      {en:"caught red-handed,", es:"atrapado con las manos en la masa,", pron:"cot red-jánded,"},
      {en:"out of the blue,", es:"de la nada,", pron:"áut of de blú,"},
      {en:"sit on the fence!", es:"¡quedarse indeciso!", pron:"sit on de fens!"}
    ]},
    estrofa2:{label:"Repaso Semana 2", lineas:[
      {en:"Spill the beans, hit the sack,", es:"Suelta la sopa, irse a dormir,", pron:"spil de bíins, jit de sak,"},
      {en:"a piece of the pie!", es:"¡una parte del pastel!", pron:"a píis of de pái!"}
    ]},
    puente:{label:"Repaso profundo — Semana Anterior (Fase 2, Sem. 30)", lineas:[
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Be careful not to bite off more than you can chew,", es:"Ten cuidado de no abarcar más de lo que puedes,", pron:"bi kérful nat tu báit of mor dan iú can chú,"},
      {en:"we've been together through thick and thin,", es:"hemos estado juntos en las buenas y en las malas,", pron:"uív bin tugéder zru zik and zin,"},
      {en:"this was the last straw for me,", es:"esta fue la gota que rebalsó el vaso para mí,", pron:"dis uás de last stro for mi,"},
      {en:"let's not jump the gun here!", es:"¡no nos adelantemos acá!", pron:"lets nat yamp de gan jíar!"}
    ]}
  },
  { numero:7, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Get cold feet,", es:"Acobardarse de último momento,", pron:"guet cóuld fíit,"},
      {en:"it's not rocket science,", es:"no es ciencia espacial,", pron:"its nat rácket sáiens,"},
      {en:"miss the boat,", es:"perder la oportunidad,", pron:"mis de bóut,"},
      {en:"go the extra mile!", es:"¡dar un esfuerzo extra!", pron:"góu de éxtra máil!"}
    ]},
    estrofa2:{label:"Repaso Semana 4", lineas:[
      {en:"Kill two birds with one stone, blessing in disguise,", es:"Matar dos pájaros de un tiro, suerte disfrazada de mala,", pron:"kil tú berds uid uán stóun, blésing in disgáis,"},
      {en:"don't add fuel to the fire!", es:"¡no le eches leña al fuego!", pron:"dont ad fiúel tu de fáier!"}
    ]}
  },
  { numero:8, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Hit the nail on the head,", es:"Darle en el clavo,", pron:"jit de néil on de jed,"},
      {en:"a dime a dozen,", es:"algo muy común,", pron:"a dáim a dázen,"},
      {en:"go back to square one,", es:"volver al punto de partida,", pron:"góu bak tu scuér uán,"},
      {en:"speak of the devil!", es:"¡hablando del rey de Roma!", pron:"spíik of de dévil!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"You really hit the nail on the head there,", es:"Realmente le diste en el clavo ahí,", pron:"iú ríali jit de néil on de jed der,"},
      {en:"these mistakes are a dime a dozen,", es:"estos errores son algo muy común,", pron:"díis mistéiks ar a dáim a dázen,"},
      {en:"we had to go back to square one,", es:"tuvimos que volver al punto de partida,", pron:"uí jad tu góu bak tu scuér uán,"},
      {en:"and speak of the devil, here he is!", es:"¡y hablando del rey de Roma, aquí está!", pron:"and spíik of de dévil, jíar ji is!"}
    ]}
  },
  { numero:9, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Every cloud has a silver lining,", es:"No hay mal que por bien no venga,", pron:"évri cláud jas a sílver láining,"},
      {en:"actions speak louder than words,", es:"las acciones hablan más que las palabras,", pron:"ákshions spíik láuder dan uords,"},
      {en:"birds of a feather flock together,", es:"dios los cría y ellos se juntan,", pron:"berds of a féder flak tugéder,"},
      {en:"don't judge a book by its cover!", es:"¡no juzgues un libro por su portada!", pron:"dont yach a buk bái its cáver!"}
    ]},
    estrofa2:{label:"Repaso Semana 7", lineas:[
      {en:"Get cold feet, it's not rocket science,", es:"Acobardarse de último momento, no es ciencia espacial,", pron:"guet cóuld fíit, its nat rácket sáiens,"},
      {en:"go the extra mile!", es:"¡dar un esfuerzo extra!", pron:"góu de éxtra máil!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"He'll apologize when pigs fly,", es:"Él va a disculparse cuando las ranas críen pelo,", pron:"jíl apáloyáis uén pigs flái,"},
      {en:"this promotion is a blessing and a curse,", es:"este ascenso es algo bueno y malo a la vez,", pron:"dis pramóushion is a blésing and a cers,"},
      {en:"let's talk about the elephant in the room,", es:"hablemos del tema evidente que nadie menciona,", pron:"lets tok abáut de élefant in de rum,"},
      {en:"we can't keep cutting corners!", es:"¡no podemos seguir tomando atajos!", pron:"uí cant kíip cáting córners!"}
    ]}
  },
  { numero:11, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"A taste of your own medicine,", es:"Probar tu propia medicina,", pron:"a téist of iór óun médisin,"},
      {en:"a wolf in sheep's clothing,", es:"un lobo con piel de oveja,", pron:"a uulf in shíips clóuzing,"},
      {en:"put all your eggs in one basket,", es:"apostar todo a una sola opción,", pron:"put ol iór egs in uán básket,"},
      {en:"go with the flow!", es:"¡dejarse llevar!", pron:"góu uid de flóu!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Now he's getting a taste of his own medicine,", es:"Ahora está probando su propia medicina,", pron:"náu jis guéting a téist of jis óun médisin,"},
      {en:"turns out he was a wolf in sheep's clothing,", es:"resulta que era un lobo con piel de oveja,", pron:"terns áut ji uás a uulf in shíips clóuzing,"},
      {en:"don't put all your eggs in one basket,", es:"no apuestes todo a una sola opción,", pron:"dont put ol iór egs in uán básket,"},
      {en:"just relax and go with the flow!", es:"¡solo relájate y déjate llevar!", pron:"yast riláx and góu uid de flóu!"}
    ]}
  },
  { numero:12, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Bite the bullet,", es:"Afrontar la situación difícil,", pron:"báit de búlet,"},
      {en:"get out of hand,", es:"salirse de control,", pron:"guet áut of jand,"},
      {en:"a piece of cake,", es:"pan comido,", pron:"a píis of kéik,"},
      {en:"drive someone up the wall!", es:"¡volver loco a alguien!", pron:"dráiv sámuan ap de uól!"}
    ]},
    estrofa2:{label:"Repaso Semana 10", lineas:[
      {en:"He'll apologize when pigs fly,", es:"Él va a disculparse cuando las ranas críen pelo,", pron:"jíl apáloyáis uén pigs flái,"},
      {en:"we can't keep cutting corners!", es:"¡no podemos seguir tomando atajos!", pron:"uí cant kíip cáting córners!"}
    ]}
  },
  { numero:13, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Have a change of heart,", es:"Cambiar de opinión,", pron:"jav a chéinch of jart,"},
      {en:"in the same boat,", es:"en la misma situación,", pron:"in de séim bóut,"},
      {en:"get the ball rolling,", es:"poner las cosas en marcha,", pron:"guet de bol róuling,"},
      {en:"hang in there!", es:"¡aguanta!", pron:"jang in der!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I had a change of heart about the plan,", es:"Cambié de opinión sobre el plan,", pron:"ái jad a chéinch of jart abáut de plan,"},
      {en:"we're all in the same boat here,", es:"todos estamos en la misma situación acá,", pron:"uír ol in de séim bóut jíar,"},
      {en:"let's get the ball rolling then,", es:"pongamos las cosas en marcha entonces,", pron:"lets guet de bol róuling den,"},
      {en:"just hang in there a bit longer!", es:"¡aguanta un poco más!", pron:"yast jang in der a bit lónguer!"}
    ]}
  },
  { numero:14, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Straight from the horse's mouth,", es:"Directo de la fuente original,", pron:"stréit fram de jórses máuz,"},
      {en:"beat a dead horse,", es:"insistir en algo inútil,", pron:"bíit a ded jors,"},
      {en:"call it a day,", es:"darlo por terminado,", pron:"col it a déi,"},
      {en:"the tip of the iceberg!", es:"¡la punta del iceberg!", pron:"de tip of de áisberg!"}
    ]},
    estrofa2:{label:"Repaso Semana 12", lineas:[
      {en:"You need to bite the bullet on this,", es:"Necesitas afrontar esta situación,", pron:"iú níid tu báit de búlet on dis,"},
      {en:"don't drive everyone up the wall!", es:"¡no vuelvas loco a todos!", pron:"dont dráiv évriuan ap de uól!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Remember to look before you leap,", es:"Recuerda pensar antes de actuar,", pron:"rimémber tu luk bifór iú líip,"},
      {en:"the store is just a stone's throw away,", es:"la tienda está a un tiro de piedra,", pron:"de stor is yast a stóuns zróu auéi,"},
      {en:"that's some real food for thought,", es:"eso es algo real para reflexionar,", pron:"dats sam ríal fud for zot,"},
      {en:"we'll be there, come rain or shine!", es:"¡ahí vamos a estar, pase lo que pase!", pron:"uíl bi der, cam réin or sháin!"}
    ]}
  },
  { numero:16, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Bark up the wrong tree,", es:"Equivocarse de camino,", pron:"bark ap de rong tríi,"},
      {en:"a slap on the wrist,", es:"un castigo muy leve,", pron:"a slap on de rist,"},
      {en:"cross that bridge later,", es:"resolver eso después,", pron:"cros dat brich léiter,"},
      {en:"go down in flames!", es:"¡fracasar estrepitosamente!", pron:"góu dáun in fléims!"}
    ]},
    estrofa2:{label:"Repaso Semana 14", lineas:[
      {en:"That's straight from the horse's mouth,", es:"Eso es directo de la fuente original,", pron:"dats stréit fram de jórses máuz,"},
      {en:"but this is only the tip of the iceberg!", es:"¡pero esto es solo la punta del iceberg!", pron:"bat dis is óunli de tip of de áisberg!"}
    ]}
  },
  { numero:17, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Chip on your shoulder,", es:"Guardar rencor, estar resentido,", pron:"chip on iór shóulder,"},
      {en:"go the distance,", es:"llegar hasta el final,", pron:"góu de dístans,"},
      {en:"a dark horse,", es:"alguien inesperado que sorprende,", pron:"a dark jors,"},
      {en:"keep your chin up!", es:"¡mantén el ánimo!", pron:"kíip iór chin ap!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"You seem to have a chip on your shoulder,", es:"Pareces tener resentimiento guardado,", pron:"iú síim tu jav a chip on iór shóulder,"},
      {en:"but you always go the distance,", es:"pero siempre llegas hasta el final,", pron:"bat iú ólueis góu de dístans,"},
      {en:"you're a real dark horse in this race,", es:"eres una verdadera sorpresa en esta carrera,", pron:"iór a ríal dark jors in dis réis,"},
      {en:"so keep your chin up!", es:"¡así que mantén el ánimo!", pron:"sóu kíip iór chin ap!"}
    ]}
  },
  { numero:18, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Steal someone's thunder,", es:"Robarle el protagonismo a alguien,", pron:"stíil sámuans zánder,"},
      {en:"go cold turkey,", es:"dejar algo de golpe,", pron:"góu cóuld térki,"},
      {en:"tie the knot,", es:"casarse,", pron:"tái de nat,"},
      {en:"burn bridges!", es:"¡quemar los puentes con alguien!", pron:"bern brichis!"}
    ]},
    estrofa2:{label:"Repaso Semana 17", lineas:[
      {en:"He always has a chip on his shoulder,", es:"Él siempre tiene resentimiento guardado,", pron:"ji ólueis jas a chip on jis shóulder,"},
      {en:"but keep your chin up regardless!", es:"¡pero mantén el ánimo de todas formas!", pron:"bat kíip iór chin ap rigárdles!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"This new job fits like a glove for me,", es:"Este trabajo nuevo me queda perfecto,", pron:"dis niú yab fits láik a glav for mi,"},
      {en:"just take it easy for now,", es:"solo tómalo con calma por ahora,", pron:"yast téik it íisi for náu,"},
      {en:"you always know how to read the room,", es:"siempre sabes captar el ambiente,", pron:"iú ólueis nóu jáu tu ríid de rum,"},
      {en:"remember, can't judge a book by its cover!", es:"¡recuerda, no puedes juzgar un libro por su portada!", pron:"rimémber, cant yach a buk bái its cáver!"}
    ]}
  },
  { numero:20, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Method to the madness,", es:"Lógica detrás de algo que parece caótico,", pron:"mézod tu de mádnes,"},
      {en:"put your foot down,", es:"tomar una postura firme,", pron:"put iór fut dáun,"},
      {en:"a piece of your mind,", es:"decirle a alguien lo que piensas sin filtro,", pron:"a píis of iór máind,"},
      {en:"back to the drawing board!", es:"¡de vuelta al principio!", pron:"bak tu de dróing bord!"}
    ]},
    estrofa2:{label:"Repaso Semana 15", lineas:[
      {en:"Look before you leap, that's food for thought,", es:"Piensa antes de actuar, eso es algo para reflexionar,", pron:"luk bifór iú líip, dats fud for zot,"},
      {en:"we'll be there, come rain or shine!", es:"¡ahí vamos a estar, pase lo que pase!", pron:"uíl bi der, cam réin or sháin!"}
    ]}
  },
  { numero:21, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Add insult to injury,", es:"Empeorar aún más una situación mala,", pron:"ad insált tu ínyuri,"},
      {en:"in hot water,", es:"en problemas,", pron:"in jat uóter,"},
      {en:"a shot in the dark,", es:"un intento sin mucha esperanza,", pron:"a shat in de dark,"},
      {en:"stick to your guns!", es:"¡mantente firme en tu postura!", pron:"stik tu iór guns!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"That comment just added insult to injury,", es:"Ese comentario solo empeoró la situación,", pron:"dat cáment yast ádid insált tu ínyuri,"},
      {en:"now he's really in hot water,", es:"ahora él realmente está en problemas,", pron:"náu jis ríali in jat uóter,"},
      {en:"it was just a shot in the dark,", es:"fue solo un intento sin mucha esperanza,", pron:"it uás yast a shat in de dark,"},
      {en:"but you should stick to your guns!", es:"¡pero deberías mantenerte firme en tu postura!", pron:"bat iú shud stik tu iór guns!"}
    ]}
  },
  { numero:22, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Ahead of the curve,", es:"Adelantado a su época,", pron:"ajéd of de kerv,"},
      {en:"see eye to eye,", es:"estar de acuerdo,", pron:"síi ái tu ái,"},
      {en:"a needle in a haystack,", es:"algo muy difícil de encontrar,", pron:"a nídol in a jéistak,"},
      {en:"jump on the bandwagon!", es:"¡subirse a la moda!", pron:"yamp on de bánduagon!"}
    ]},
    estrofa2:{label:"Repaso Semana 20", lineas:[
      {en:"There's method to the madness here,", es:"Hay lógica detrás de esto que parece caótico,", pron:"ders mézod tu de mádnes jíar,"},
      {en:"or we go back to the drawing board!", es:"¡o volvemos al principio!", pron:"or uí góu bak tu de dróing bord!"}
    ]}
  },
  { numero:23, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Break the ice,", es:"Romper el hielo,", pron:"bréik de áis,"},
      {en:"a piece of the action,", es:"una parte de las ganancias o beneficio,", pron:"a píis of de ákshion,"},
      {en:"go down the drain,", es:"desperdiciarse por completo,", pron:"góu dáun de dréin,"},
      {en:"turn a blind eye!", es:"¡hacer la vista gorda!", pron:"tern a bláind ái!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"That joke really helped break the ice,", es:"Ese chiste realmente ayudó a romper el hielo,", pron:"dat yóuk ríali jelpd bréik de áis,"},
      {en:"everyone wants a piece of the action,", es:"todos quieren una parte de las ganancias,", pron:"évriuan uánts a píis of de ákshion,"},
      {en:"all that work went down the drain,", es:"todo ese trabajo se desperdició por completo,", pron:"ol dat uork uént dáun de dréin,"},
      {en:"but management chose to turn a blind eye!", es:"¡pero la gerencia decidió hacer la vista gorda!", pron:"bat mánechment chóus tu tern a bláind ái!"}
    ]}
  },
  { numero:24, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Curiosity killed the cat,", es:"La curiosidad mató al gato,", pron:"curiásiti kild de cat,"},
      {en:"go with your gut,", es:"seguir tu instinto,", pron:"góu uid iór gat,"},
      {en:"a fish out of water,", es:"sentirse totalmente fuera de lugar,", pron:"a fish áut of uóter,"},
      {en:"nip it in the bud!", es:"¡cortar el problema de raíz!", pron:"nip it in de bad!"}
    ]},
    estrofa2:{label:"Repaso Semana 22", lineas:[
      {en:"You've always been ahead of the curve,", es:"Siempre has estado adelantado a tu época,", pron:"iúv ólueis bin ajéd of de kerv,"},
      {en:"but don't just jump on the bandwagon!", es:"¡pero no te subas solo a la moda!", pron:"bat dont yast yamp on de bánduagon!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Let's just cut to the chase here,", es:"Vayamos directo al grano acá,", pron:"lets yast cat tu de chéis jíar,"},
      {en:"this is becoming a slippery slope,", es:"esto se está convirtiendo en algo fuera de control,", pron:"dis is bicáming a slíperi slóup,"},
      {en:"we need to raise the bar for next time,", es:"necesitamos subir el estándar para la próxima vez,", pron:"uí níid tu réis de bar for next táim,"},
      {en:"or people will start to jump ship!", es:"¡o la gente va a empezar a abandonar el barco!", pron:"or píipol uil start tu yamp ship!"}
    ]}
  },
  { numero:26, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Don't rock the boat,", es:"No causar problemas innecesarios,", pron:"dont rak de bóut,"},
      {en:"in the nick of time,", es:"justo a tiempo, en el último momento,", pron:"in de nik of táim,"},
      {en:"a piece of cake to fix,", es:"fácil de arreglar,", pron:"a píis of kéik tu fix,"},
      {en:"go the whole nine yards!", es:"¡hacer todo el esfuerzo posible!", pron:"góu de jóul náin iards!"}
    ]},
    estrofa2:{label:"Repaso Semana 24", lineas:[
      {en:"Curiosity killed the cat, they say,", es:"La curiosidad mató al gato, dicen,", pron:"curiásiti kild de cat, déi séi,"},
      {en:"but sometimes you have to nip it in the bud!", es:"¡pero a veces tienes que cortarlo de raíz!", pron:"bat sámtaims iú jav tu nip it in de bad!"}
    ]}
  },
  { numero:27, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Play devil's advocate,", es:"Defender una postura contraria por debate,", pron:"pléi dévils ádvocat,"},
      {en:"go above and beyond,", es:"hacer más de lo esperado,", pron:"góu abáv and bijánd,"},
      {en:"a leopard can't change its spots,", es:"nadie cambia su naturaleza,", pron:"a lépard cant chéinch its spats,"},
      {en:"pull yourself together!", es:"¡recomponte!", pron:"pul iórself tugéder!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Let me play devil's advocate for a second,", es:"Déjame defender la postura contraria un segundo,", pron:"let mi pléi dévils ádvocat for a sécond,"},
      {en:"she always goes above and beyond,", es:"ella siempre hace más de lo esperado,", pron:"shi ólueis góus abáv and bijánd,"},
      {en:"but a leopard can't change its spots,", es:"pero nadie cambia su naturaleza,", pron:"bat a lépard cant chéinch its spats,"},
      {en:"so pull yourself together and try again!", es:"¡así que recomponte e intenta de nuevo!", pron:"sóu pul iórself tugéder and trái aguén!"}
    ]}
  },
  { numero:28, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Get your ducks in a row,", es:"Organizarse antes de actuar,", pron:"guet iór dacs in a róu,"},
      {en:"a blessing in the making,", es:"algo bueno que se está gestando,", pron:"a blésing in de méiking,"},
      {en:"let sleeping dogs lie,", es:"no remover asuntos delicados ya resueltos,", pron:"let slíiping dogs lái,"},
      {en:"seal the deal!", es:"¡cerrar el trato!", pron:"síil de díil!"}
    ]},
    estrofa2:{label:"Repaso Semana 27", lineas:[
      {en:"Let me play devil's advocate here,", es:"Déjame defender la postura contraria acá,", pron:"let mi pléi dévils ádvocat jíar,"},
      {en:"but pull yourself together and try again!", es:"¡pero recomponte e intenta de nuevo!", pron:"bat pul iórself tugéder and trái aguén!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"We're finally out of the woods now,", es:"Finalmente estamos fuera de peligro ahora,", pron:"uír fáinali áut of de uuds náu,"},
      {en:"there's a grain of truth in what he said,", es:"hay algo de verdad en lo que dijo,", pron:"ders a gréin of truz in uát ji sed,"},
      {en:"she really came out of her shell this year,", es:"ella realmente se volvió más sociable este año,", pron:"shi ríali kéim áut of jer shel dis íar,"},
      {en:"so let's go all out for this celebration!", es:"¡así que démoslo todo para esta celebración!", pron:"sóu lets góu ol áut for dis selebréishion!"}
    ]}
  },
  { numero:30, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"An idiom master, that's what you are,", es:"Un maestro de los modismos, eso es lo que eres,", pron:"an ídiom máster, dats uát iú ar,"},
      {en:"you've gone the extra mile,", es:"has dado un esfuerzo extra,", pron:"iúv gan de éxtra máil,"},
      {en:"speaking like a native now,", es:"hablando como nativo ahora,", pron:"spíiking láik a néitiv náu,"},
      {en:"take a bow!", es:"¡haz una reverencia, celébralo!", pron:"téik a báu!"}
    ]},
    estrofa2:{label:"Repaso Semana 25", lineas:[
      {en:"Let's just cut to the chase here,", es:"Vayamos directo al grano acá,", pron:"lets yast cat tu de chéis jíar,"},
      {en:"or people will start to jump ship!", es:"¡o la gente va a empezar a abandonar el barco!", pron:"or píipol uil start tu yamp ship!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"With all due respect, I disagree slightly,", es:"Con todo respeto, discrepo un poco,", pron:"uid ol diú rispéct, ái disagríi sláitli,"},
      {en:"needless to say, this changes things,", es:"no hace falta decir, esto cambia las cosas,", pron:"nídles tu séi, dis chéinyis zings,"},
      {en:"more often than not, we find a way,", es:"la mayoría de las veces, encontramos una manera,", pron:"mor áften dan nat, uí fáind a uéi,"},
      {en:"suffice it to say, if I may add, we'll manage!", es:"basta con decir, si puedo agregar, ¡nos las arreglaremos!", pron:"safáis it tu séi, if ái méi ad, uíl mánach!"}
    ]}
  },
  { numero:2, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"By and large,", es:"En general,", pron:"bái and larch,"},
      {en:"for the most part,", es:"en su mayor parte,", pron:"for de móust part,"},
      {en:"strictly speaking,", es:"hablando estrictamente,", pron:"stríctli spíiking,"},
      {en:"loosely speaking,", es:"hablando en términos generales,", pron:"lúusli spíiking,"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"By and large, the project succeeded,", es:"En general, el proyecto tuvo éxito,", pron:"bái and larch, de práchect saksídid,"},
      {en:"for the most part, everyone agreed,", es:"en su mayor parte, todos estuvieron de acuerdo,", pron:"for de móust part, évriuan agríid,"},
      {en:"strictly speaking, it wasn't perfect,", es:"hablando estrictamente, no fue perfecto,", pron:"stríctli spíiking, it uásnt pérfect,"},
      {en:"but loosely speaking, we're satisfied!", es:"¡pero hablando en general, estamos satisfechos!", pron:"bat lúusli spíiking, uír sátisfáid!"}
    ]}
  },
  { numero:3, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"To some extent,", es:"Hasta cierto punto,", pron:"tu sam exténd,"},
      {en:"to a certain degree,", es:"hasta cierto grado,", pron:"tu a cértan digríi,"},
      {en:"up to a point,", es:"hasta cierto punto,", pron:"ap tu a póint,"},
      {en:"within reason!", es:"¡dentro de lo razonable!", pron:"uidín ríizon!"}
    ]},
    estrofa2:{label:"Repaso Semana 1", lineas:[
      {en:"With all due respect, needless to say,", es:"Con todo respeto, no hace falta decir,", pron:"uid ol diú rispéct, nídles tu séi,"},
      {en:"suffice it to say, if I may add!", es:"¡basta con decir, si puedo agregar!", pron:"safáis it tu séi, if ái méi ad!"}
    ]}
  },
  { numero:4, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"As it happens,", es:"Da la casualidad de que,", pron:"as it jápens,"},
      {en:"as luck would have it,", es:"quiso la suerte que,", pron:"as lak uud jav it,"},
      {en:"much to my surprise,", es:"para mi sorpresa,", pron:"mach tu mái serpráis,"},
      {en:"oddly enough!", es:"¡curiosamente!", pron:"ádli ináf!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"As it happens, I was already there,", es:"Da la casualidad de que ya estaba ahí,", pron:"as it jápens, ái uás olrédi der,"},
      {en:"as luck would have it, everything worked out,", es:"quiso la suerte que todo saliera bien,", pron:"as lak uud jav it, évrizin uorkt áut,"},
      {en:"much to my surprise, they agreed right away,", es:"para mi sorpresa, estuvieron de acuerdo enseguida,", pron:"mach tu mái serpráis, déi agríid ráit auéi,"},
      {en:"oddly enough, it all made sense!", es:"¡curiosamente, todo tuvo sentido!", pron:"ádli ináf, it ol méid sens!"}
    ]}
  },
  { numero:5, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"In light of this,", es:"A la luz de esto,", pron:"in láit of dis,"},
      {en:"given the circumstances,", es:"dadas las circunstancias,", pron:"guíven de sércamstánsis,"},
      {en:"under these conditions,", es:"bajo estas condiciones,", pron:"ánder díis candíshions,"},
      {en:"as things stand!", es:"¡tal como están las cosas!", pron:"as zings stand!"}
    ]},
    estrofa2:{label:"Repaso Semana 3", lineas:[
      {en:"To some extent, to a certain degree,", es:"Hasta cierto punto, hasta cierto grado,", pron:"tu sam exténd, tu a cértan digríi,"},
      {en:"up to a point, within reason!", es:"¡hasta cierto punto, dentro de lo razonable!", pron:"ap tu a póint, uidín ríizon!"}
    ]},
    puente:{label:"Repaso profundo — Semana 30 (Fase 3)", lineas:[
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"On the whole, it was a good year,", es:"En general, fue un buen año,", pron:"on de jóul, it uás a gud íar,"},
      {en:"on balance, the gains outweighed the losses,", es:"en balance, las ganancias superaron las pérdidas,", pron:"on bálans, de géins áutuéid de lásis,"},
      {en:"be that as it may, we must improve,", es:"sea como sea, debemos mejorar,", pron:"bi dat as it méi, uí mast imprúuv,"},
      {en:"having said that, I'm optimistic!", es:"¡dicho esto, soy optimista!", pron:"jáving sed dat, áim áptimistic!"}
    ]}
  },
  { numero:7, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Not to put too fine a point on it,", es:"Para no andarme con rodeos,", pron:"nat tu put tu fáin a póint on it,"},
      {en:"if truth be told,", es:"si he de ser sincero,", pron:"if truz bi tóuld,"},
      {en:"for what it's worth,", es:"para lo que valga,", pron:"for uát its uorz,"},
      {en:"at the risk of sounding blunt!", es:"¡a riesgo de sonar directo!", pron:"at de risk of sáunding blant!"}
    ]},
    estrofa2:{label:"Repaso Semana 5", lineas:[
      {en:"In light of this, given the circumstances,", es:"A la luz de esto, dadas las circunstancias,", pron:"in láit of dis, guíven de sércamstánsis,"},
      {en:"as things stand!", es:"¡tal como están las cosas!", pron:"as zings stand!"}
    ]}
  },
  { numero:8, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"By no means,", es:"De ninguna manera,", pron:"bái nóu míins,"},
      {en:"far from it,", es:"lejos de eso,", pron:"far fram it,"},
      {en:"quite the opposite,", es:"todo lo contrario,", pron:"cuáit de ápasit,"},
      {en:"nothing could be further from the truth!", es:"¡nada podría estar más lejos de la verdad!", pron:"názin cud bi férder fram de truz!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"By no means was that intentional,", es:"De ninguna manera fue intencional,", pron:"bái nóu míins uás dat inténshional,"},
      {en:"far from it, actually,", es:"lejos de eso, en realidad,", pron:"far fram it, áctiuali,"},
      {en:"quite the opposite happened,", es:"pasó todo lo contrario,", pron:"cuáit de ápasit jápend,"},
      {en:"nothing could be further from the truth!", es:"¡nada podría estar más lejos de la verdad!", pron:"názin cud bi férder fram de truz!"}
    ]}
  },
  { numero:9, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"It goes without saying,", es:"No hace falta decirlo,", pron:"it góus uidáut séing,"},
      {en:"as one might expect,", es:"como cabría esperar,", pron:"as uán máit expéct,"},
      {en:"predictably enough,", es:"como era de esperarse,", pron:"pridíctabli ináf,"},
      {en:"unsurprisingly!", es:"¡sin sorpresa alguna!", pron:"ansarpráisingli!"}
    ]},
    estrofa2:{label:"Repaso Semana 7", lineas:[
      {en:"Not to put too fine a point on it, if truth be told,", es:"Para no andarme con rodeos, si he de ser sincero,", pron:"nat tu put tu fáin a póint on it, if truz bi tóuld,"},
      {en:"at the risk of sounding blunt!", es:"¡a riesgo de sonar directo!", pron:"at de risk of sáunding blant!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Contrary to popular belief, it works,", es:"Contrario a la creencia popular, funciona,", pron:"cántrari tu pápiular bilíif, it uorks,"},
      {en:"as is often the case with these things,", es:"como suele suceder con estas cosas,", pron:"as is áften de kéis uid díis zings,"},
      {en:"we tried harder, more so than usual,", es:"nos esforzamos más, más de lo usual,", pron:"uí tráid járder, mor sóu dan iúshual,"},
      {en:"and it paid off, if nothing else!", es:"¡y valió la pena, si nada más!", pron:"and it péid of, if názin els!"}
    ]}
  },
  { numero:11, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Granted,", es:"De acuerdo, admitiendo eso,", pron:"gránted,"},
      {en:"conceded,", es:"concedido,", pron:"cansíded,"},
      {en:"fair point,", es:"buen punto,", pron:"fer póint,"},
      {en:"I'll give you that!", es:"¡te doy eso, tienes razón en eso!", pron:"áil guiv iú dat!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Granted, the plan wasn't perfect,", es:"De acuerdo, el plan no fue perfecto,", pron:"gránted, de plan uásnt pérfect,"},
      {en:"conceded, we could have done better,", es:"concedido, podríamos haberlo hecho mejor,", pron:"cansíded, uí cud jav dan béter,"},
      {en:"fair point, that makes sense,", es:"buen punto, eso tiene sentido,", pron:"fer póint, dat méiks sens,"},
      {en:"I'll give you that one!", es:"¡te doy razón en eso!", pron:"áil guiv iú dat uán!"}
    ]}
  },
  { numero:12, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"For all intents and purposes,", es:"A todos los efectos prácticos,", pron:"for ol inténts and pérposis,"},
      {en:"in every sense of the word,", es:"en todo el sentido de la palabra,", pron:"in évri sens of de uord,"},
      {en:"by definition,", es:"por definición,", pron:"bái definíshion,"},
      {en:"technically speaking!", es:"¡técnicamente hablando!", pron:"técnicali spíiking!"}
    ]},
    estrofa2:{label:"Repaso Semana 10", lineas:[
      {en:"Contrary to popular belief, it works,", es:"Contrario a la creencia popular, funciona,", pron:"cántrari tu pápiular bilíif, it uorks,"},
      {en:"and it paid off, if nothing else!", es:"¡y valió la pena, si nada más!", pron:"and it péid of, if názin els!"}
    ]}
  },
  { numero:13, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Sure enough,", es:"Efectivamente,", pron:"shur ináf,"},
      {en:"as expected,", es:"como se esperaba,", pron:"as expéctid,"},
      {en:"lo and behold,", es:"y he aquí,", pron:"lóu and bijóuld,"},
      {en:"just as planned!", es:"¡justo como se planeó!", pron:"yast as plánd!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Sure enough, it happened again,", es:"Efectivamente, pasó de nuevo,", pron:"shur ináf, it jápend aguén,"},
      {en:"as expected, the results came in,", es:"como se esperaba, llegaron los resultados,", pron:"as expéctid, de risálts kéim in,"},
      {en:"lo and behold, we were right,", es:"y he aquí, teníamos razón,", pron:"lóu and bijóuld, uí uér ráit,"},
      {en:"everything went just as planned!", es:"¡todo salió justo como se planeó!", pron:"évrizin uént yast as plánd!"}
    ]}
  },
  { numero:14, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"To no avail,", es:"Sin ningún resultado,", pron:"tu nóu avéil,"},
      {en:"in vain,", es:"en vano,", pron:"in véin,"},
      {en:"all for naught,", es:"todo para nada,", pron:"ol for not,"},
      {en:"to little effect!", es:"¡con poco efecto!", pron:"tu lítol iféct!"}
    ]},
    estrofa2:{label:"Repaso Semana 12", lineas:[
      {en:"For all intents and purposes, it's done,", es:"A todos los efectos prácticos, está hecho,", pron:"for ol inténts and pérposis, its dan,"},
      {en:"technically speaking, we succeeded!", es:"¡técnicamente hablando, tuvimos éxito!", pron:"técnicali spíiking, uí saksídid!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"With that in mind, let's proceed,", es:"Teniendo eso en cuenta, sigamos,", pron:"uid dat in máind, lets prasíid,"},
      {en:"bearing that in mind, we'll adjust,", es:"tomando eso en cuenta, vamos a ajustar,", pron:"béring dat in máind, uíl adyást,"},
      {en:"keeping that in perspective helps,", es:"mantener eso en perspectiva ayuda,", pron:"kíiping dat in perspéctiv jelps,"},
      {en:"looking at the bigger picture always does!", es:"¡mirar el panorama general siempre ayuda!", pron:"lúking at de bíguer píkchur ólueis das!"}
    ]}
  },
  { numero:16, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"As luck would have it,", es:"Quiso la suerte que,", pron:"as lak uud jav it,"},
      {en:"against all odds,", es:"contra todo pronóstico,", pron:"aguénst ol ads,"},
      {en:"much to everyone's relief,", es:"para alivio de todos,", pron:"mach tu évriuáns rilíif,"},
      {en:"as fate would have it!", es:"¡quiso el destino!", pron:"as féit uud jav it!"}
    ]},
    estrofa2:{label:"Repaso Semana 13", lineas:[
      {en:"Sure enough, as expected,", es:"Efectivamente, como se esperaba,", pron:"shur ináf, as expéctid,"},
      {en:"everything went just as planned!", es:"¡todo salió justo como se planeó!", pron:"évrizin uént yast as plánd!"}
    ]}
  },
  { numero:17, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"On top of that,", es:"Además de eso,", pron:"on tap of dat,"},
      {en:"not to mention,", es:"sin mencionar,", pron:"nat tu ménshion,"},
      {en:"let alone,", es:"ni hablar de,", pron:"let alóun,"},
      {en:"much less!", es:"¡mucho menos!", pron:"mach les!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"On top of that, we're behind schedule,", es:"Además de eso, estamos atrasados,", pron:"on tap of dat, uír bijáind squédiul,"},
      {en:"not to mention the budget issues,", es:"sin mencionar los problemas de presupuesto,", pron:"nat tu ménshion de báchet íshus,"},
      {en:"we can't finish today, let alone tomorrow,", es:"no podemos terminar hoy, ni hablar de mañana,", pron:"uí cant fínish tudéi, let alóun tumórou,"},
      {en:"much less by next week!", es:"¡mucho menos para la próxima semana!", pron:"mach les bái next uíik!"}
    ]}
  },
  { numero:18, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That said,", es:"Dicho eso,", pron:"dat sed,"},
      {en:"that being the case,", es:"siendo ese el caso,", pron:"dat bíing de kéis,"},
      {en:"such being the situation,", es:"siendo esa la situación,", pron:"sach bíing de situéishion,"},
      {en:"as things currently stand!", es:"¡tal como están las cosas actualmente!", pron:"as zings cárrentli stand!"}
    ]},
    estrofa2:{label:"Repaso Semana 17", lineas:[
      {en:"On top of that, not to mention the budget,", es:"Además de eso, sin mencionar el presupuesto,", pron:"on tap of dat, nat tu ménshion de báchet,"},
      {en:"much less by next week!", es:"¡mucho menos para la próxima semana!", pron:"mach les bái next uíik!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"By the same token, we should reconsider,", es:"Por la misma razón, deberíamos reconsiderar,", pron:"bái de séim tóuken, uí shud ricansíder,"},
      {en:"in a similar vein, this also applies,", es:"en un sentido similar, esto también aplica,", pron:"in a símilar véin, dis ólsou apláis,"},
      {en:"along the same lines, we found another issue,", es:"en la misma línea, encontramos otro problema,", pron:"alóng de séim láins, uí fáund anáder íshu,"},
      {en:"but conversely, there's an upside too!", es:"¡pero a la inversa, también hay un lado positivo!", pron:"bat canvérsli, ders an ápsáid tu!"}
    ]}
  },
  { numero:20, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Simply put,", es:"Dicho de manera simple,", pron:"símpli put,"},
      {en:"to sum it up,", es:"para resumirlo,", pron:"tu sam it ap,"},
      {en:"all told,", es:"contando todo,", pron:"ol tóuld,"},
      {en:"the upshot is!", es:"¡el resultado final es!", pron:"de ápshat is!"}
    ]},
    estrofa2:{label:"Repaso Semana 15", lineas:[
      {en:"With that in mind, let's proceed,", es:"Teniendo eso en cuenta, sigamos,", pron:"uid dat in máind, lets prasíid,"},
      {en:"looking at the bigger picture always does!", es:"¡mirar el panorama general siempre ayuda!", pron:"lúking at de bíguer píkchur ólueis das!"}
    ]}
  },
  { numero:21, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Case in point,", es:"Un ejemplo de eso,", pron:"kéis in póint,"},
      {en:"take, for example,", es:"toma, por ejemplo,", pron:"téik, for exámpol,"},
      {en:"a prime example of this,", es:"un ejemplo perfecto de esto,", pron:"a práim exámpol of dis,"},
      {en:"to illustrate!", es:"¡para ilustrar!", pron:"tu ílastreit!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Case in point, look at last quarter,", es:"Un ejemplo de eso, mira el trimestre pasado,", pron:"kéis in póint, luk at last cuórter,"},
      {en:"take, for example, our top client,", es:"toma, por ejemplo, nuestro cliente principal,", pron:"téik, for exámpol, áur tap cláient,"},
      {en:"that's a prime example of this trend,", es:"ese es un ejemplo perfecto de esta tendencia,", pron:"dats a práim exámpol of dis trend,"},
      {en:"to illustrate exactly what I mean!", es:"¡para ilustrar exactamente lo que quiero decir!", pron:"tu ílastreit exáctli uát ái míin!"}
    ]}
  },
  { numero:22, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"All things being equal,", es:"Siendo todo igual,", pron:"ol zings bíing íicual,"},
      {en:"other things being equal,", es:"siendo lo demás igual,", pron:"áder zings bíing íicual,"},
      {en:"as a rule of thumb,", es:"como regla general,", pron:"as a rul of zam,"},
      {en:"generally speaking!", es:"¡hablando en general!", pron:"yéneráli spíiking!"}
    ]},
    estrofa2:{label:"Repaso Semana 20", lineas:[
      {en:"Simply put, to sum it up,", es:"Dicho de manera simple, para resumirlo,", pron:"símpli put, tu sam it ap,"},
      {en:"all told, the upshot is positive!", es:"¡contando todo, el resultado final es positivo!", pron:"ol tóuld, de ápshat is pázitiv!"}
    ]}
  },
  { numero:23, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Broadly speaking,", es:"En términos generales,", pron:"bródli spíiking,"},
      {en:"in the broadest sense,", es:"en el sentido más amplio,", pron:"in de bródest sens,"},
      {en:"across the board,", es:"de forma pareja para todos,", pron:"acrós de bord,"},
      {en:"without exception!", es:"¡sin excepción!", pron:"uidáut exsépshion!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"Broadly speaking, we're on track,", es:"En términos generales, vamos bien encaminados,", pron:"bródli spíiking, uír on trak,"},
      {en:"in the broadest sense, this applies to everyone,", es:"en el sentido más amplio, esto aplica a todos,", pron:"in de bródest sens, dis apláis tu évriuan,"},
      {en:"the rule applies across the board,", es:"la regla aplica de forma pareja para todos,", pron:"de rul apláis acrós de bord,"},
      {en:"without exception, no matter who!", es:"¡sin excepción, sin importar quién!", pron:"uidáut exsépshion, nóu máter jú!"}
    ]}
  },
  { numero:24, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"In due course,", es:"A su debido tiempo,", pron:"in diú cors,"},
      {en:"in the fullness of time,", es:"con el paso del tiempo,", pron:"in de fúlnes of táim,"},
      {en:"sooner or later,", es:"tarde o temprano,", pron:"súuner or léiter,"},
      {en:"all in good time!", es:"¡todo a su tiempo!", pron:"ol in gud táim!"}
    ]},
    estrofa2:{label:"Repaso Semana 22", lineas:[
      {en:"All things being equal, as a rule of thumb,", es:"Siendo todo igual, como regla general,", pron:"ol zings bíing íicual, as a rul of zam,"},
      {en:"generally speaking, it works!", es:"¡hablando en general, funciona!", pron:"yéneráli spíiking, it uorks!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I told her, in no uncertain terms,", es:"Le dije, sin lugar a dudas,", pron:"ái tóuld jer, in nóu ansértan terms,"},
      {en:"make no mistake, this is serious,", es:"no te equivoques, esto es serio,", pron:"méik nóu mistéik, dis is síirias,"},
      {en:"rest assured, we'll handle it,", es:"quédate tranquilo, lo vamos a manejar,", pron:"rest ashúrd, uíl jándol it,"},
      {en:"and mark my words, it'll work out!", es:"¡y recuerda mis palabras, va a salir bien!", pron:"and mark mái uords, itl uork áut!"}
    ]}
  },
  { numero:26, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"For the record,", es:"Para que quede constancia,", pron:"for de récord,"},
      {en:"let it be known,", es:"que quede claro,", pron:"let it bi nóun,"},
      {en:"just so we're clear,", es:"solo para que quede claro,", pron:"yast sóu uír clíar,"},
      {en:"to set the record straight!", es:"¡para aclarar las cosas de una vez!", pron:"tu set de récord stréit!"}
    ]},
    estrofa2:{label:"Repaso Semana 25", lineas:[
      {en:"In no uncertain terms, make no mistake,", es:"Sin lugar a dudas, no te equivoques,", pron:"in nóu ansértan terms, méik nóu mistéik,"},
      {en:"mark my words, it'll work out!", es:"¡recuerda mis palabras, va a salir bien!", pron:"mark mái uords, itl uork áut!"}
    ]}
  },
  { numero:27, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"When push comes to shove,", es:"Cuando la situación se pone difícil de verdad,", pron:"uén push cams tu shav,"},
      {en:"if worst comes to worst,", es:"si las cosas se ponen realmente mal,", pron:"if uorst cams tu uorst,"},
      {en:"come what may,", es:"pase lo que pase,", pron:"cam uát méi,"},
      {en:"whatever it takes!", es:"¡lo que sea necesario!", pron:"uatéver it téiks!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"When push comes to shove, I'll be there,", es:"Cuando la situación se ponga difícil, voy a estar ahí,", pron:"uén push cams tu shav, áil bi der,"},
      {en:"if worst comes to worst, we'll adapt,", es:"si las cosas se ponen realmente mal, nos vamos a adaptar,", pron:"if uorst cams tu uorst, uíl adápt,"},
      {en:"come what may, we'll face it together,", es:"pase lo que pase, lo vamos a enfrentar juntos,", pron:"cam uát méi, uíl féis it tugéder,"},
      {en:"whatever it takes, I'm all in!", es:"¡lo que sea necesario, estoy comprometido al cien por ciento!", pron:"uatéver it téiks, áim ol in!"}
    ]}
  },
  { numero:28, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"To cap it all off,", es:"Para rematar,", pron:"tu cap it ol of,"},
      {en:"last but not least,", es:"por último pero no menos importante,", pron:"last bat nat líist,"},
      {en:"all said and done,", es:"con todo dicho y hecho,", pron:"ol sed and dan,"},
      {en:"and that's that!", es:"¡y eso es todo!", pron:"and dats dat!"}
    ]},
    estrofa2:{label:"Repaso Semana 27", lineas:[
      {en:"When push comes to shove, come what may,", es:"Cuando la situación se ponga difícil, pase lo que pase,", pron:"uén push cams tu shav, cam uát méi,"},
      {en:"whatever it takes, I'm all in!", es:"¡lo que sea necesario, estoy comprometido al cien por ciento!", pron:"uatéver it téiks, áim ol in!"}
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
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"You've truly mastered this language,", es:"Realmente has dominado este idioma,", pron:"iúv trúli mástird dis lánguich,"},
      {en:"with native-level fluency now,", es:"con fluidez de nivel nativo ahora,", pron:"uid néitiv-lével flúensi náu,"},
      {en:"there's nothing left to learn here,", es:"no hay nada más que aprender acá,", pron:"ders názin left tu lern jíar,"},
      {en:"honestly, you speak like one of us!", es:"¡honestamente, hablas como uno de nosotros!", pron:"ánestli, iú spíik láik uán of as!"}
    ]}
  },
  { numero:30, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Congratulations, dragon graduate,", es:"Felicitaciones, graduado dragón,", pron:"cangrachuléishions, drágon gráchueit,"},
      {en:"you've completed the whole journey,", es:"has completado todo el viaje,", pron:"iúv camplíitid de jóul yérni,"},
      {en:"four hundred and eighty phrases mastered,", es:"cuatrocientas ochenta frases dominadas,", pron:"for jándred and éiti fréisis mástird,"},
      {en:"you are truly fluent now!", es:"¡ahora eres verdaderamente fluido!", pron:"iú ar trúli flúent náu!"}
    ]},
    estrofa2:{label:"Repaso Semana 24", lineas:[
      {en:"In due course, sooner or later,", es:"A su debido tiempo, tarde o temprano,", pron:"in diú cors, súuner or léiter,"},
      {en:"all in good time!", es:"¡todo a su tiempo!", pron:"ol in gud táim!"}
    ]}
  }
];

const dragonNativo = {
  fases: [
    { id:1, nombre:"Fase 1", subtitulo:"Supervivencia diaria", frases:120, disponible:true, fijas:FIJAS_FASE1, semanas:FASE1_SEMANAS },
    { id:2, nombre:"Fase 2", subtitulo:"Fluidez conversacional", frases:120, disponible:true, fijas:FIJAS_FASE2, semanas:FASE2_SEMANAS },
    { id:3, nombre:"Fase 3", subtitulo:"Modismos y expresiones idiomáticas", frases:120, disponible:true, fijas:FIJAS_FASE3, semanas:FASE3_SEMANAS },
    { id:4, nombre:"Fase 4", subtitulo:"Refinamiento y naturalidad nativa", frases:120, disponible:true, fijas:FIJAS_FASE4, semanas:FASE4_SEMANAS }
  ]
};

// ================= Controlador de pantallas (independiente del motor principal) =================
(function(){
  let currentFaseId = null;
  let currentWeekNum = null;

  function el(id){ return document.getElementById(id); }

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
      const progresoTxt = fase.disponible ? (fase.semanas.length+' semanas · '+fase.frases+' frases') : 'Próximamente';
      card.innerHTML = '<div class="dn-fase-num">'+fase.id+'</div>'
        +'<div class="dn-fase-info"><b>'+fase.nombre+' — '+fase.subtitulo+'</b><p>'+progresoTxt+'</p></div>'
        +'<div class="dn-fase-progress">'+(fase.disponible?'▶':'🔒')+'</div>';
      if(fase.disponible){
        card.onclick=()=>{ currentFaseId=fase.id; renderWeekGrid(fase.id); showView('semanas'); };
      } else {
        card.style.opacity='0.5'; card.style.cursor='default';
      }
      box.appendChild(card);
    });
  }

  function renderWeekGrid(faseId){
    const fase = dragonNativo.fases.find(f=>f.id===faseId);
    const grid = el('dnWeekGrid');
    grid.innerHTML='';
    fase.semanas.forEach(semana=>{
      const btn = document.createElement('div');
      btn.className='dn-week-btn';
      btn.innerHTML = '<span class="wk-num">'+semana.numero+'</span><span class="wk-audio">'+(semana.audio?'🔊 con audio':'📝 solo letra')+'</span>';
      btn.onclick=()=>{ renderSong(faseId, semana.numero); showView('cancion'); };
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

  function renderSong(faseId, weekNum){
    currentFaseId = faseId; currentWeekNum = weekNum;
    const fase = dragonNativo.fases.find(f=>f.id===faseId);
    const semana = fase.semanas.find(s=>s.numero===weekNum);
    el('dnSongTitle').textContent = fase.nombre+' — Semana '+semana.numero;

    const audioBox = el('dnAudioBox');
    if(semana.audio){
      audioBox.innerHTML = '<audio controls src="'+semana.audio+'"></audio>';
    } else {
      audioBox.innerHTML = '<div class="dn-audio-pending">🎵 Audio en camino — por ahora, practicá con la letra y la pronunciación del curso.</div>';
    }

    let html = '';
    html += seccionHTML('Estrofa 1 — '+semana.estrofa1.label, semana.estrofa1.lineas);
    html += seccionHTML('Pedal', fase.fijas.pedal);
    html += seccionHTML('Pre-Coro', fase.fijas.precoro);
    html += seccionHTML('Coro', fase.fijas.coro);
    html += seccionHTML('Estrofa 2 — '+semana.estrofa2.label, semana.estrofa2.lineas);
    if(semana.puente){ html += seccionHTML('Puente — '+semana.puente.label, semana.puente.lineas); }
    html += seccionHTML('Pre-Coro', fase.fijas.precoro);
    html += seccionHTML('Coro', fase.fijas.coro);
    html += seccionHTML('Outro', semana.outroOverride || fase.fijas.outro);
    el('dnLyricsBox').innerHTML = html;
  }

  // ================= Repaso escrito (ventana móvil de las últimas 4 canciones) =================
  function buildReviewPool(faseId, weekNum){
    const fase = dragonNativo.fases.find(f=>f.id===faseId);
    const startWeek = Math.max(1, weekNum-3);
    const seen = new Set();
    const pool = [];
    for(let w=startWeek; w<=weekNum; w++){
      const semana = fase.semanas.find(s=>s.numero===w);
      if(!semana) continue;
      const todas = []
        .concat(fase.fijas.precoro, fase.fijas.pedal, semana.estrofa1.lineas, fase.fijas.coro,
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
    if(item.tipo==='oracion'){
      el('dnReviewPrompt').innerHTML = 'Escribí una oración real usando esta frase: <br><b>"'+item.en+'"</b>'+pronHTML+' <span style="color:var(--muted);font-size:13px;">('+item.es+')</span>';
      el('dnReviewInput').placeholder='Escribí tu propia oración en inglés...';
    } else {
      el('dnReviewPrompt').innerHTML = '<div class="dn-en" style="font-size:19px;">'+item.es+pronHTML+'</div>';
      el('dnReviewInput').placeholder='Traducí al inglés...';
    }
    el('dnReviewListenBtn').onclick = async ()=>{
      el('dnReviewListenBtn').disabled=true;
      await speakHidden(item.en);
      el('dnReviewListenBtn').disabled=false;
    };
    el('dnReviewInput').focus();
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
    } else {
      const isRight = practicaAnswerMatches(said, item.en, true);
      reviewGraded++; if(isRight) reviewOk++;
      box.className='dn-review-feedback '+(isRight?'ok':'retry');
      box.textContent = (isRight?'✓ ¡Correcto! ':'✗ Casi — la frase correcta era: ')+'"'+item.en+'"';
    }
    el('dnReviewNextRow').style.display='flex';
    el('dnReviewNextBtn').textContent = (reviewIdx+1<reviewItems.length) ? 'Siguiente →' : 'Ver resultado →';
  }

  function showReviewSummary(){
    el('dnReviewPrompt').innerHTML = '<b>Resultado: '+reviewOk+' de '+reviewGraded+'</b><br><span style="color:var(--muted);font-size:13px;">Puedes repetir este repaso cuantas veces quieras.</span>';
    el('dnReviewListenBtn').style.display='none';
    el('dnReviewInput').style.display='none';
    el('dnReviewSendBtn').style.display='none';
    el('dnReviewFeedback').style.display='none';
    el('dnReviewNextRow').style.display='flex';
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
