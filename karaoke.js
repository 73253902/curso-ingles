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
