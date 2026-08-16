// El Dragón Nativo — módulo independiente, 480 frases en 4 fases de 120 cada una.
// Este archivo es autónomo: no toca ni depende del motor del curso principal (motor.js).
// El audio de cada semana se agrega llenando el campo "audio" con el nombre del archivo mp3
// (por ejemplo: audio:"dn-fase1-semana1.mp3"); mientras esté en null, se muestra "Audio en camino".

const FIJAS_FASE1 = {
  precoro: [
    {en:"Here we go, let's learn some more,", es:"Vamos allá, aprendamos más,"},
    {en:"Phrase by phrase, like never before,", es:"Frase por frase, como nunca antes."}
  ],
  pedal: [
    {en:"Learning English is easy,", es:"Aprender inglés es fácil,"},
    {en:"You're going to love it!", es:"¡Te va a encantar!"}
  ],
  coro: [
    {en:"Excuse me,", es:"Disculpe,"},
    {en:"Thank you so much,", es:"Muchas gracias,"},
    {en:"I don't understand,", es:"No entiendo,"},
    {en:"Could you help me, please?", es:"¿Podría ayudarme, por favor?"}
  ],
  outro: [
    {en:"See you next week, dragon friend,", es:"Nos vemos la próxima semana, amigo dragón,"},
    {en:"Keep practicing until the end,", es:"Seguí practicando hasta el final."}
  ]
};

const FASE1_SEMANAS = [
  { numero:1, audio:"dn-fase1-semana1.mp3",
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Sorry,", es:"Perdón,"},
      {en:"I didn't catch that,", es:"no escuché bien,"},
      {en:"Can you say that again?", es:"¿Podés repetir?"},
      {en:"I need a minute...", es:"Necesito un minuto..."},
      {en:"I'll be right back!", es:"¡Ya vuelvo!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I'm back now, sorry about that,", es:"Ya volví, perdón por eso,"},
      {en:"Can you say that again, one more time?", es:"¿Podés repetir, una vez más?"},
      {en:"I didn't catch it, but now I understand,", es:"No escuché bien, pero ahora entiendo,"},
      {en:"Thank you for waiting, my friend!", es:"¡Gracias por esperar, amigo!"}
    ]}
  },
  { numero:2, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm not sure,", es:"No estoy seguro,"},
      {en:"but that's a good question,", es:"pero es buena pregunta,"},
      {en:"Let's see...", es:"Vamos a ver..."},
      {en:"Does that make sense?", es:"¿Tiene sentido?"},
      {en:"Yes, that makes sense!", es:"¡Sí, tiene sentido!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I'm still not sure, but let's see together,", es:"Todavía no estoy seguro, pero vamos a ver juntos,"},
      {en:"That's a good question, thank you for asking,", es:"Es buena pregunta, gracias por preguntar,"},
      {en:"Now it makes sense, or maybe not yet,", es:"Ahora tiene sentido, o tal vez no todavía,"},
      {en:"Let's see, let's see!", es:"¡Vamos a ver, vamos a ver!"}
    ]}
  },
  { numero:3, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I agree with you,", es:"Estoy de acuerdo con vos,"},
      {en:"but he disagrees,", es:"pero él no está de acuerdo,"},
      {en:"No worries,", es:"No hay problema,"},
      {en:"take your time to decide!", es:"¡Tomate tu tiempo para decidir!"}
    ]},
    estrofa2:{label:"Repaso Semana 1", lineas:[
      {en:"Sorry, I didn't catch that,", es:"Perdón, no escuché bien,"},
      {en:"can you say that again?", es:"¿podés repetir?"},
      {en:"I need a minute, I'll be right back!", es:"¡Necesito un minuto, ya vuelvo!"}
    ]}
  },
  { numero:4, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What do you mean?", es:"¿Qué querés decir?"},
      {en:"Oh, now I see!", es:"¡Ah, ya veo!"},
      {en:"That sounds good to me,", es:"Me suena bien eso,"},
      {en:"not right now, but soon!", es:"¡Ahora no, pero pronto!"}
    ]},
    estrofa2:{label:"Repaso Semana 2", lineas:[
      {en:"I'm not sure, but that's a good question,", es:"No estoy seguro, pero es buena pregunta,"},
      {en:"let's see if that makes sense!", es:"¡vamos a ver si tiene sentido!"}
    ]}
  },
  { numero:5, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"How does that work?", es:"¿Cómo funciona eso?"},
      {en:"I'll think about it,", es:"Lo voy a pensar,"},
      {en:"just a second...", es:"solo un segundo..."},
      {en:"Same here, my friend!", es:"¡Lo mismo digo, amigo!"}
    ]},
    estrofa2:{label:"Repaso Semana 3", lineas:[
      {en:"I agree, I disagree,", es:"Estoy de acuerdo, no estoy de acuerdo,"},
      {en:"no worries, take your time!", es:"¡no hay problema, tomate tu tiempo!"}
    ]}
  },
  { numero:6, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let me know,", es:"Avisame,"},
      {en:"I hope so,", es:"espero que sí,"},
      {en:"me too!", es:"¡yo también!"},
      {en:"Give me a second, hold that thought!", es:"¡Dame un segundo, esperá esa idea!"}
    ]},
    estrofa2:{label:"Repaso Semana 4", lineas:[
      {en:"What do you mean? Oh, now I see,", es:"¿Qué querés decir? Ah, ya veo,"},
      {en:"that sounds good to me!", es:"¡me suena bien eso!"}
    ]}
  },
  { numero:7, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What's going on?", es:"¿Qué está pasando?"},
      {en:"I have no idea!", es:"¡No tengo idea!"},
      {en:"Let me check...", es:"Déjame revisar..."},
      {en:"One moment, please!", es:"¡Un momento, por favor!"}
    ]},
    estrofa2:{label:"La escena sigue", lineas:[
      {en:"I checked, and now I know what's going on,", es:"Revisé, y ahora sé qué está pasando,"},
      {en:"I had no idea, but now I do,", es:"No tenía idea, pero ahora sí,"},
      {en:"Thank you for that one moment,", es:"Gracias por ese momento,"},
      {en:"It made all the difference!", es:"¡Hizo toda la diferencia!"}
    ]}
  },
  { numero:8, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I think so,", es:"Creo que sí,"},
      {en:"but I don't think so either,", es:"pero tampoco creo que no,"},
      {en:"That's true,", es:"Eso es verdad,"},
      {en:"or maybe that's not true!", es:"¡o tal vez no es verdad!"}
    ]},
    estrofa2:{label:"Repaso Semana 6", lineas:[
      {en:"Let me know,", es:"avisame,"},
      {en:"I hope so, give me a second!", es:"espero que sí, ¡dame un segundo!"}
    ]},
    puente:{label:"Repaso profundo — Semana 2", lineas:[
      {en:"I'm not sure, but that's a good question,", es:"No estoy seguro, pero es buena pregunta,"},
      {en:"let's see if that makes sense!", es:"¡vamos a ver si tiene sentido!"}
    ]}
  },
  { numero:9, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Could you repeat that?", es:"¿Podrías repetir eso?"},
      {en:"No problem at all!", es:"¡No hay ningún problema!"},
      {en:"It's my pleasure,", es:"Es un placer,"},
      {en:"don't worry about it!", es:"¡no te preocupes por eso!"}
    ]},
    estrofa2:{label:"Repaso Semana 7", lineas:[
      {en:"What's going on? I have no idea!", es:"¿Qué está pasando? ¡No tengo idea!"},
      {en:"Let me check, one moment, please!", es:"¡Déjame revisar, un momento, por favor!"}
    ]}
  },
  { numero:10, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I see what you mean,", es:"Entiendo lo que querés decir,"},
      {en:"that's interesting!", es:"¡eso es interesante!"},
      {en:"Tell me more,", es:"Contame más,"},
      {en:"I'd love to hear it!", es:"¡me encantaría escucharlo!"}
    ]},
    estrofa2:{label:"Repaso Semana 8", lineas:[
      {en:"I think so, but I don't think so either,", es:"Creo que sí, pero tampoco creo que no,"},
      {en:"that's true, or maybe not!", es:"¡eso es verdad, o tal vez no!"}
    ]}
  },
  { numero:11, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Excuse me for a second,", es:"Disculpame un segundo,"},
      {en:"I'll be right there!", es:"¡ya voy para allá!"},
      {en:"Thanks for waiting,", es:"Gracias por esperar,"},
      {en:"almost done!", es:"¡casi termino!"}
    ]},
    estrofa2:{label:"Repaso Semana 9", lineas:[
      {en:"Could you repeat that? No problem at all!", es:"¿Podrías repetir eso? ¡No hay problema!"},
      {en:"It's my pleasure, don't worry about it!", es:"¡Es un placer, no te preocupes!"}
    ]}
  },
  { numero:12, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Perfect, that works!", es:"¡Perfecto, eso funciona!"},
      {en:"Sounds like a plan,", es:"Suena como un plan,"},
      {en:"let's do that,", es:"hagamos eso,"},
      {en:"I'm on it!", es:"¡ya me pongo con eso!"}
    ]},
    estrofa2:{label:"Repaso Semana 10", lineas:[
      {en:"I see what you mean, that's interesting,", es:"Entiendo lo que querés decir, es interesante,"},
      {en:"tell me more, I'd love to hear it!", es:"¡contame más, me encantaría escucharlo!"}
    ]},
    puente:{label:"Repaso profundo — Semana 6", lineas:[
      {en:"What do you mean? Oh, now I see,", es:"¿Qué querés decir? Ah, ya veo,"},
      {en:"that sounds good to me!", es:"¡me suena bien eso!"}
    ]}
  },
  { numero:13, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Excuse me, is this seat taken?", es:"Disculpe, ¿este asiento está ocupado?"},
      {en:"No, go ahead!", es:"¡No, adelante!"},
      {en:"Thanks, I appreciate it,", es:"Gracias, lo aprecio,"},
      {en:"Anytime!", es:"¡Cuando quieras!"}
    ]},
    estrofa2:{label:"Repaso Semana 11", lineas:[
      {en:"Excuse me for a second, I'll be right there,", es:"Disculpame un segundo, ya voy para allá,"},
      {en:"Thanks for waiting, almost done!", es:"¡Gracias por esperar, casi termino!"}
    ]}
  },
  { numero:14, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Can I ask you something?", es:"¿Puedo preguntarte algo?"},
      {en:"Of course, go ahead!", es:"¡Por supuesto, adelante!"},
      {en:"Never mind,", es:"No importa,"},
      {en:"it's not important!", es:"¡no es importante!"}
    ]},
    estrofa2:{label:"Repaso Semana 12", lineas:[
      {en:"Perfect, that works, sounds like a plan,", es:"Perfecto, eso funciona, suena como un plan,"},
      {en:"let's do that, I'm on it!", es:"¡hagamos eso, ya me pongo con eso!"}
    ]}
  },
  { numero:15, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm on my way,", es:"Estoy en camino,"},
      {en:"almost there!", es:"¡ya casi llego!"},
      {en:"Just a moment,", es:"Un momento,"},
      {en:"here I am!", es:"¡acá estoy!"}
    ]},
    estrofa2:{label:"Repaso Semana 13", lineas:[
      {en:"Excuse me, is this seat taken? No, go ahead!", es:"Disculpe, ¿este asiento está ocupado? ¡No, adelante!"},
      {en:"Thanks, I appreciate it, anytime!", es:"¡Gracias, lo aprecio, cuando quieras!"}
    ]}
  },
  { numero:16, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That's a great idea,", es:"Esa es una gran idea,"},
      {en:"let's try it!", es:"¡intentémoslo!"},
      {en:"Why not?", es:"¿Por qué no?"},
      {en:"Sounds fun!", es:"¡Suena divertido!"}
    ]},
    estrofa2:{label:"Repaso Semana 14", lineas:[
      {en:"Can I ask you something? Of course, go ahead,", es:"¿Puedo preguntarte algo? Por supuesto, adelante,"},
      {en:"never mind, it's not important!", es:"¡no importa, no es importante!"}
    ]},
    puente:{label:"Repaso profundo — Semana 10", lineas:[
      {en:"I see what you mean, that's interesting,", es:"Entiendo lo que querés decir, es interesante,"},
      {en:"tell me more, I'd love to hear it!", es:"¡contame más, me encantaría escucharlo!"}
    ]}
  },
  { numero:17, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I'm running late,", es:"Estoy llegando tarde,"},
      {en:"I'll hurry!", es:"¡me voy a apurar!"},
      {en:"No rush,", es:"No hay apuro,"},
      {en:"take it easy!", es:"¡tomátelo con calma!"}
    ]},
    estrofa2:{label:"Repaso Semana 15", lineas:[
      {en:"I'm on my way, almost there,", es:"Estoy en camino, ya casi llego,"},
      {en:"just a moment, here I am!", es:"¡un momento, acá estoy!"}
    ]}
  },
  { numero:18, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"What's new?", es:"¿Qué hay de nuevo?"},
      {en:"Not much,", es:"No mucho,"},
      {en:"same as always,", es:"lo mismo de siempre,"},
      {en:"nice to hear!", es:"¡qué bueno escuchar eso!"}
    ]},
    estrofa2:{label:"Repaso Semana 16", lineas:[
      {en:"That's a great idea, let's try it,", es:"Esa es una gran idea, intentémoslo,"},
      {en:"why not, sounds fun!", es:"¡por qué no, suena divertido!"}
    ]}
  },
  { numero:19, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Could you slow down, please?", es:"¿Podrías ir más despacio, por favor?"},
      {en:"Sure, no problem!", es:"¡Claro, no hay problema!"},
      {en:"Is that better?", es:"¿Está mejor así?"},
      {en:"Much better, thanks!", es:"¡Mucho mejor, gracias!"}
    ]},
    estrofa2:{label:"Repaso Semana 17", lineas:[
      {en:"I'm running late, I'll hurry,", es:"Estoy llegando tarde, me voy a apurar,"},
      {en:"no rush, take it easy!", es:"¡no hay apuro, tomátelo con calma!"}
    ]}
  },
  { numero:20, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Take care!", es:"¡Cuidate!"},
      {en:"You too!", es:"¡Vos también!"},
      {en:"See you around,", es:"Nos vemos por ahí,"},
      {en:"have a good one!", es:"¡que la pases bien!"}
    ]},
    estrofa2:{label:"Repaso Semana 18", lineas:[
      {en:"What's new? Not much,", es:"¿Qué hay de nuevo? No mucho,"},
      {en:"same as always, nice to hear!", es:"¡lo mismo de siempre, qué bueno escuchar eso!"}
    ]},
    puente:{label:"Repaso profundo — Semana 14", lineas:[
      {en:"Can I ask you something? Of course, go ahead,", es:"¿Puedo preguntarte algo? Por supuesto, adelante,"},
      {en:"never mind, it's not important!", es:"¡no importa, no es importante!"}
    ]}
  },
  { numero:21, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Do you need anything?", es:"¿Necesitás algo?"},
      {en:"I'm all set,", es:"Estoy bien así,"},
      {en:"just checking,", es:"solo estaba revisando,"},
      {en:"appreciate it!", es:"¡lo aprecio!"}
    ]},
    estrofa2:{label:"Repaso Semana 19", lineas:[
      {en:"Could you slow down, please? Sure, no problem!", es:"¿Podrías ir más despacio? ¡Claro, no hay problema!"},
      {en:"Is that better? Much better, thanks!", es:"¿Está mejor así? ¡Mucho mejor, gracias!"}
    ]}
  },
  { numero:22, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Is everything okay?", es:"¿Está todo bien?"},
      {en:"Yes, all good!", es:"¡Sí, todo bien!"},
      {en:"Let me double-check,", es:"Déjame revisar de nuevo,"},
      {en:"just to be sure!", es:"¡solo para estar seguro!"}
    ]},
    estrofa2:{label:"Repaso Semana 20", lineas:[
      {en:"Take care, you too,", es:"¡Cuidate! ¡Vos también!"},
      {en:"see you around, have a good one!", es:"¡nos vemos por ahí, que la pases bien!"}
    ]}
  },
  { numero:23, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"That works for me,", es:"Eso me sirve,"},
      {en:"perfect timing!", es:"¡momento perfecto!"},
      {en:"Let's confirm it,", es:"Confirmémoslo,"},
      {en:"all set then!", es:"¡listo entonces!"}
    ]},
    estrofa2:{label:"Repaso Semana 21", lineas:[
      {en:"Do you need anything? I'm all set,", es:"¿Necesitás algo? Estoy bien así,"},
      {en:"just checking, appreciate it!", es:"¡solo estaba revisando, lo aprecio!"}
    ]}
  },
  { numero:24, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Congratulations!", es:"¡Felicitaciones!"},
      {en:"Thank you so much!", es:"¡Muchas gracias!"},
      {en:"You earned it,", es:"Te lo merecés,"},
      {en:"well deserved!", es:"¡bien merecido!"}
    ]},
    estrofa2:{label:"Repaso Semana 22", lineas:[
      {en:"Is everything okay? Yes, all good,", es:"¿Está todo bien? ¡Sí, todo bien!"},
      {en:"let me double-check, just to be sure!", es:"¡déjame revisar de nuevo, solo para estar seguro!"}
    ]},
    puente:{label:"Repaso profundo — Semana 18", lineas:[
      {en:"What's new? Not much,", es:"¿Qué hay de nuevo? No mucho,"},
      {en:"same as always, nice to hear!", es:"¡lo mismo de siempre, qué bueno escuchar eso!"}
    ]}
  },
  { numero:25, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Can we talk for a second?", es:"¿Podemos hablar un segundo?"},
      {en:"Sure, what's up?", es:"¡Claro, qué pasa!"},
      {en:"It's nothing serious,", es:"No es nada serio,"},
      {en:"just wanted to check in!", es:"¡solo quería ver cómo estabas!"}
    ]},
    estrofa2:{label:"Repaso Semana 23", lineas:[
      {en:"That works for me, perfect timing,", es:"Eso me sirve, momento perfecto,"},
      {en:"let's confirm it, all set then!", es:"¡confirmémoslo, listo entonces!"}
    ]}
  },
  { numero:26, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I really appreciate this,", es:"De verdad aprecio esto,"},
      {en:"it means a lot,", es:"significa mucho,"},
      {en:"you're very kind,", es:"sos muy amable,"},
      {en:"thank you again!", es:"¡gracias otra vez!"}
    ]},
    estrofa2:{label:"Repaso Semana 24", lineas:[
      {en:"Congratulations! Thank you so much!", es:"¡Felicitaciones! ¡Muchas gracias!"},
      {en:"You earned it, well deserved!", es:"¡Te lo merecés, bien merecido!"}
    ]}
  },
  { numero:27, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"Let's stay in touch,", es:"Mantengámonos en contacto,"},
      {en:"absolutely!", es:"¡por supuesto!"},
      {en:"I'll write to you,", es:"Te voy a escribir,"},
      {en:"looking forward to it!", es:"¡con muchas ganas!"}
    ]},
    estrofa2:{label:"Repaso Semana 25", lineas:[
      {en:"Can we talk for a second? Sure, what's up?", es:"¿Podemos hablar un segundo? ¡Claro, qué pasa!"},
      {en:"It's nothing serious, just wanted to check in!", es:"¡No es nada serio, solo quería ver cómo estabas!"}
    ]}
  },
  { numero:28, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"I couldn't have done it without you,", es:"No podría haberlo hecho sin vos,"},
      {en:"teamwork!", es:"¡trabajo en equipo!"},
      {en:"We did it together,", es:"Lo hicimos juntos,"},
      {en:"that's what counts!", es:"¡eso es lo que importa!"}
    ]},
    estrofa2:{label:"Repaso Semana 26", lineas:[
      {en:"I really appreciate this, it means a lot,", es:"De verdad aprecio esto, significa mucho,"},
      {en:"you're very kind, thank you again!", es:"¡sos muy amable, gracias otra vez!"}
    ]},
    puente:{label:"Repaso profundo — Semana 22", lineas:[
      {en:"Is everything okay? Yes, all good,", es:"¿Está todo bien? ¡Sí, todo bien!"},
      {en:"let me double-check, just to be sure!", es:"¡déjame revisar de nuevo, solo para estar seguro!"}
    ]}
  },
  { numero:29, audio:null,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"We're almost there,", es:"Ya casi llegamos,"},
      {en:"just one more step,", es:"un paso más,"},
      {en:"I can feel it,", es:"Lo puedo sentir,"},
      {en:"we're so close!", es:"¡estamos tan cerca!"}
    ]},
    estrofa2:{label:"Repaso Semana 27", lineas:[
      {en:"Let's stay in touch, absolutely!", es:"Mantengámonos en contacto, ¡por supuesto!"},
      {en:"I'll write to you, looking forward to it!", es:"¡Te voy a escribir, con muchas ganas!"}
    ]}
  },
  { numero:30, audio:null, esCierre:true,
    estrofa1:{label:"Nuevas", lineas:[
      {en:"You made it all the way,", es:"Llegaste hasta el final,"},
      {en:"one hundred twenty phrases,", es:"ciento veinte frases,"},
      {en:"every single one,", es:"cada una de ellas,"},
      {en:"now part of you!", es:"¡ahora son parte de vos!"}
    ]},
    estrofa2:{label:"Repaso Semana 29", lineas:[
      {en:"We're almost there, just one more step,", es:"Ya casi llegamos, un paso más,"},
      {en:"I can feel it, we're so close!", es:"¡Lo puedo sentir, estamos tan cerca!"}
    ]},
    puente:{label:"Cierre especial — celebración", lineas:[
      {en:"You did it, dragon friend,", es:"Lo lograste, amigo dragón,"},
      {en:"speaking with ease,", es:"hablando con soltura,"},
      {en:"Fase One complete,", es:"Fase Uno completa,"},
      {en:"and there's so much more to come!", es:"¡y hay mucho más por venir!"}
    ]},
    outroOverride: [
      {en:"See you in Phase Two, dragon friend,", es:"Nos vemos en la Fase Dos, amigo dragón,"},
      {en:"Keep practicing until the end,", es:"Seguí practicando hasta el final."}
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
    return '<div class="dn-line"><div class="dn-en">'+l.en+'</div><div class="dn-es">'+l.es+'</div></div>';
  }
  function seccionHTML(label, lineas){
    let h = '<div class="dn-section-label">'+label+'</div>';
    lineas.forEach(l=>{ h += lineaHTML(l); });
    return h;
  }

  function renderSong(faseId, weekNum){
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
    html += seccionHTML('Pre-Coro', fase.fijas.precoro);
    html += seccionHTML('Pedal', fase.fijas.pedal);
    html += seccionHTML('Estrofa 1 — '+semana.estrofa1.label, semana.estrofa1.lineas);
    html += seccionHTML('Coro', fase.fijas.coro);
    html += seccionHTML('Estrofa 2 — '+semana.estrofa2.label, semana.estrofa2.lineas);
    if(semana.puente){ html += seccionHTML('Puente — '+semana.puente.label, semana.puente.lineas); }
    html += seccionHTML('Coro', fase.fijas.coro);
    html += seccionHTML('Outro', semana.outroOverride || fase.fijas.outro);
    el('dnLyricsBox').innerHTML = html;
  }

  window.addEventListener('DOMContentLoaded', ()=>{
    el('dnEntryBtn').onclick = openModule;
    el('dnBackBtn').onclick = closeModule;
    el('dnBackToFasesBtn').onclick = ()=>{ showView('fases'); renderFaseList(); };
    el('dnBackToWeeksBtn').onclick = ()=>{ showView('semanas'); renderWeekGrid(currentFaseId); };
  });
})();
