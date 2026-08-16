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
    {en:"Keep practicing until the end,", es:"Seguí practicando hasta el final.", pron:"kíip práctising antíl de end,"}
  ]
};

const FASE1_SEMANAS = [
  { numero:1, audio:"dn-fase1-semana1.mp3",
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Sorry,", es:"Perdón,", pron:"sóri,"},
      {en:"I didn't catch that,", es:"no escuché bien,", pron:"ái dídnt cach dat,"},
      {en:"Can you say that again?", es:"¿Podés repetir?", pron:"can iú séi dat aguén?"},
      {en:"I need a minute...", es:"Necesito un minuto...", pron:"ái níid a mínit..."},
      {en:"I'll be right back!", es:"¡Ya vuelvo!", pron:"áil bi ráit bak!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I'm back now, sorry about that,", es:"Ya volví, perdón por eso,", pron:"áim bak náu, sóri abáut dat,"},
      {en:"Can you say that again, one more time?", es:"¿Podés repetir, una vez más?", pron:"can iú séi dat aguén, uán mor táim?"},
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
      {en:"I agree with you,", es:"Estoy de acuerdo con vos,", pron:"ái agríi uid iú,"},
      {en:"but he disagrees,", es:"pero él no está de acuerdo,", pron:"bat ji disagríis,"},
      {en:"No worries,", es:"No hay problema,", pron:"nóu uóris,"},
      {en:"take your time to decide!", es:"¡Tomate tu tiempo para decidir!", pron:"téik iór táim tu disáid!"}
    ]},
    estrofa2:{label:"Repaso Semana 1", lineas:[
      {en:"Sorry, I didn't catch that,", es:"Perdón, no escuché bien,", pron:"sóri, ái dídnt cach dat,"},
      {en:"can you say that again?", es:"¿podés repetir?", pron:"can iú séi dat aguén?"},
      {en:"I need a minute, I'll be right back!", es:"¡Necesito un minuto, ya vuelvo!", pron:"ái níid a mínit, áil bi ráit bak!"}
    ]}
  },
  { numero:4, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What do you mean?", es:"¿Qué querés decir?", pron:"uát du iú míin?"},
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
      {en:"Let me know,", es:"Avisame,", pron:"let mi nóu,"},
      {en:"I hope so,", es:"espero que sí,", pron:"ái jóup sóu,"},
      {en:"me too!", es:"¡yo también!", pron:"mi tú!"},
      {en:"Give me a second, hold that thought!", es:"¡Dame un segundo, esperá esa idea!", pron:"guiv mi a sécond, jóuld dat zot!"}
    ]},
    estrofa2:{label:"Repaso Semana 4", lineas:[
      {en:"What do you mean? Oh, now I see,", es:"¿Qué querés decir? Ah, ya veo,", pron:"uát du iú míin? óu, náu ái síi,"},
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
      {en:"Let me know,", es:"avisame,", pron:"let mi nóu,"},
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
      {en:"I see what you mean,", es:"Entiendo lo que querés decir,", pron:"ái síi uát iú míin,"},
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
      {en:"I see what you mean, that's interesting,", es:"Entiendo lo que querés decir, es interesante,", pron:"ái síi uát iú míin, dats íntresting,"},
      {en:"tell me more, I'd love to hear it!", es:"¡contame más, me encantaría escucharlo!", pron:"tel mi mor, áid lav tu jíar it!"}
    ]},
    puente:{label:"Repaso profundo — Semana 6", lineas:[
      {en:"What do you mean? Oh, now I see,", es:"¿Qué querés decir? Ah, ya veo,", pron:"uát du iú míin? óu, náu ái síi,"},
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
      {en:"I see what you mean, that's interesting,", es:"Entiendo lo que querés decir, es interesante,", pron:"ái síi uát iú míin, dats íntresting,"},
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
      {en:"Take care!", es:"¡Cuidate!", pron:"téik quér!"},
      {en:"You too!", es:"¡Vos también!", pron:"iú tú!"},
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
      {en:"Do you need anything?", es:"¿Necesitás algo?", pron:"du iú níid énizing?"},
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
      {en:"Take care, you too,", es:"¡Cuidate! ¡Vos también!", pron:"téik quér, iú tú,"},
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
      {en:"Do you need anything? I'm all set,", es:"¿Necesitás algo? Estoy bien así,", pron:"du iú níid énizing? áim ol set,"},
      {en:"just checking, appreciate it!", es:"¡solo estaba revisando, lo aprecio!", pron:"yast chéking, aprísheit it!"}
    ]}
  },
  { numero:24, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Congratulations!", es:"¡Felicitaciones!", pron:"congrachuléishons!"},
      {en:"Thank you so much!", es:"¡Muchas gracias!", pron:"zenk iú sóu mach!"},
      {en:"You earned it,", es:"Te lo merecés,", pron:"iú érnd it,"},
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
      {en:"you're very kind,", es:"sos muy amable,", pron:"iór véri káind,"},
      {en:"thank you again!", es:"¡gracias otra vez!", pron:"zenk iú aguén!"}
    ]},
    estrofa2:{label:"Repaso Semana 24", lineas:[
      {en:"Congratulations! Thank you so much!", es:"¡Felicitaciones! ¡Muchas gracias!", pron:"congrachuléishons! zenk iú sóu mach!"},
      {en:"You earned it, well deserved!", es:"¡Te lo merecés, bien merecido!", pron:"iú érnd it, uél disérvd!"}
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
      {en:"I couldn't have done it without you,", es:"No podría haberlo hecho sin vos,", pron:"ái cúdnt jav dan it uidáut iú,"},
      {en:"teamwork!", es:"¡trabajo en equipo!", pron:"tíimuork!"},
      {en:"We did it together,", es:"Lo hicimos juntos,", pron:"uí did it tugéder,"},
      {en:"that's what counts!", es:"¡eso es lo que importa!", pron:"dats uát cáunts!"}
    ]},
    estrofa2:{label:"Repaso Semana 26", lineas:[
      {en:"I really appreciate this, it means a lot,", es:"De verdad aprecio esto, significa mucho,", pron:"ái ríli aprísheit dis, it míins a lat,"},
      {en:"you're very kind, thank you again!", es:"¡sos muy amable, gracias otra vez!", pron:"iór véri káind, zenk iú aguén!"}
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
      {en:"now part of you!", es:"¡ahora son parte de vos!", pron:"náu part of iú!"}
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
      {en:"Keep practicing until the end,", es:"Seguí practicando hasta el final.", pron:"kíip práctising antíl de end,"}
    ]
  }
];

const dragonNativo = {
  fases: [
    { id:1, nombre:"Fase 1", subtitulo:"Supervivencia diaria", frases:120, disponible:true, fijas:FIJAS_FASE1, semanas:FASE1_SEMANAS },
    { id:2, nombre:"Fase 2", subtitulo:"Fluidez conversacional", frases:120, disponible:false },
    { id:3, nombre:"Fase 3", subtitulo:"Modismos y expresiones idiomáticas", frases:120, disponible:false },
    { id:4, nombre:"Fase 4", subtitulo:"Refinamiento y naturalidad nativa", frases:120, disponible:false }
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
    const pronHTML = l.pron ? ' <span class="pron-hint">· se pronuncia: "'+l.pron+'"</span>' : '';
    return '<div class="dn-line"><div class="dn-en">'+l.en+pronHTML+'</div><div class="dn-es">'+l.es+'</div></div>';
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
    el('dnReviewPrompt').innerHTML = '<b>Resultado: '+reviewOk+' de '+reviewGraded+'</b><br><span style="color:var(--muted);font-size:13px;">Podés repetir este repaso cuantas veces quieras.</span>';
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
