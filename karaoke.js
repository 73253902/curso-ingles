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
        {en:"Gotta drink water and go walk", pron:"gára drink uóter and góu uók"},
        {en:"I eat breakfast before I talk", pron:"ái íit brékfast bifór ái tok"},
        {en:"Then I drive till I park", pron:"den ái dráiv til ái park"},
        {en:"Work this shift until the dark", pron:"uork dis shift antíl de dark"},
        {seccion:"Chorus"},
        {en:"Check off the list", pron:"chek of de list"},
        {en:"Deliver the goods", pron:"dilíver de guds"},
        {en:"Check off the list", pron:"chek of de list"},
        {en:"Stand where I should", pron:"stand uér ái shud"},
        {seccion:"Verse 2"},
        {en:"Time to read all the code", pron:"táim tu ríid ol de cóud"},
        {en:"Then organize my heavy load", pron:"den órganáiz mái jévi lóud"},
        {en:"Write it down so it stays", pron:"ráit it dáun sóu it stéis"},
        {en:"Workin' through the afternoon haze", pron:"uórkin zru de áfternun jéis"},
        {seccion:"Chorus"},
        {en:"Check off the list", pron:"chek of de list"},
        {en:"Deliver the goods", pron:"dilíver de guds"},
        {en:"Check off the list", pron:"chek of de list"},
        {en:"Stand where I should", pron:"stand uér ái shud"},
        {seccion:"Guitar Solo (instrumental)"},
        {seccion:"Chorus (final)"},
        {en:"Check off the list", pron:"chek of de list"},
        {en:"Deliver the goods", pron:"dilíver de guds"},
        {en:"Check off the list", pron:"chek of de list"},
        {en:"Stand where I should", pron:"stand uér ái shud"},
        {seccion:"Outro"},
        {en:"Call 'em up and fix it fast", pron:"col em ap and fix it fast"},
        {en:"Make that sturdy structure last", pron:"méik dat stérdi stráktchur last"},
        {en:"Send and receive all the day", pron:"send and risíiv ol de déi"},
        {en:"Now I am finished with my pay", pron:"náu ái am fínisht uid mái péi"}
      ]
    },
    { dia:16, titulo:"Learning English Is Easy", audio:"audio/dia16_practica_auditiva.mp3",
      lineas:[
        {seccion:"Verse 1"},
        {en:"I have to use the hammer to fix the wall", pron:"ái jav tu iús de jámer tu fix de uol"},
        {en:"I have to find the screwdriver in the hall", pron:"ái jav tu fáind de scrúdráiver in de jol"},
        {en:"I have to climb the ladder to reach the high shelf", pron:"ái jav tu cláim de láder tu ríich de jái shelf"},
        {en:"I have to buy the paint to paint it by myself", pron:"ái jav tu bái de péint tu péint it bái máiself"},
        {seccion:"Pedal"},
        {en:"Learning English is easy,", pron:"lérning ínglish is íisi,"},
        {en:"You're going to love it!", pron:"iór góing tu lav it!"},
        {seccion:"Chorus"},
        {en:"I don't have to finish this today", pron:"ái dont jav tu fínish dis tudéi"},
        {en:"Do you have to deliver this today?", pron:"du iú jav tu dilíver dis tudéi?"},
        {en:"Yes, I do", pron:"iés, ái du"},
        {en:"No, I don't", pron:"nóu, ái dont"},
        {seccion:"Verse 2"},
        {en:"I have to grab the pen and write down the note", pron:"ái jav tu grab de pen and ráit dáun de nóut"},
        {en:"I have to sign the paper for the quote", pron:"ái jav tu sáin de péiper for de cuóut"},
        {en:"I have to use the stapler on the file", pron:"ái jav tu iús de stéipler on de fáil"},
        {en:"I have to organize the folder with a smile", pron:"ái jav tu órganáiz de fóulder uid a smáil"},
        {seccion:"Bridge"},
        {en:"Do you have to grab the tape and the scissors?", pron:"du iú jav tu grab de téip and de sísors?"},
        {en:"I don't have to use the broom, no need for misers", pron:"ái dont jav tu iús de brum, nóu níid for máisers"},
        {en:"I have to fill the bucket and push the cart", pron:"ái jav tu fil de báket and push de cart"},
        {en:"To finish up the warehouse before it gets dark", pron:"tu fínish ap de uérjaus bifór it guets dark"},
        {seccion:"Outro"},
        {en:"See you next week, dragon friend,", pron:"síi iú next uíik, drágon frend,"},
        {en:"Keep practicing until the end.", pron:"kíip práctising antíl de end."}
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

  function renderSongDetalle(dia){
    const cancion = karaoke.canciones.find(c=>c.dia===dia);
    el('kkSongTitulo').textContent = cancion.titulo+' — Día '+cancion.dia;
    el('kkLyricsInput').value = '';
    el('kkResultBox').style.display='none';

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
      const row = document.createElement('div');
      row.style.cssText='display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid var(--border);';
      const txt = document.createElement('span');
      txt.style.cssText='flex:1; font-size:14px;';
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
      pronBox.appendChild(row);
    });
  }

  function normalizar(txt){
    return txt.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[^a-z0-9\s]/g,' ')
      .split(/\s+/).filter(Boolean);
  }

  function revisarLetra(){
    const cancion = karaoke.canciones.find(c=>c.dia===currentDia);
    const correcta = cancion.lineas.filter(l=>l.en).map(l=>l.en).join(' ');
    const escrito = el('kkLyricsInput').value;
    if(!escrito.trim()){
      alert('Escribí primero la letra que entendiste antes de revisar.');
      return;
    }
    const palabrasCorrectas = normalizar(correcta);
    const palabrasEscritas = new Set(normalizar(escrito));
    let aciertos = 0;
    palabrasCorrectas.forEach(p => { if(palabrasEscritas.has(p)) aciertos++; });
    const porcentaje = Math.round((aciertos/palabrasCorrectas.length)*100);
    const box = el('kkResultBox');
    box.style.display='block';
    box.className = 'dn-review-feedback '+(porcentaje>=70?'ok':porcentaje>=40?'neutral':'retry');
    box.innerHTML = '<b>Coincidencia aproximada: '+porcentaje+'%</b><br><span style="font-size:13px;">Esta es una revisión orientativa por palabras — usá "Ver la letra correcta" para comparar de verdad, línea por línea.</span>';
  }

  function revelarLetra(){
    const cancion = karaoke.canciones.find(c=>c.dia===currentDia);
    const box = el('kkResultBox');
    box.style.display='block';
    box.className = 'dn-review-feedback neutral';
    const html = cancion.lineas.map(l=>{
      if(l.seccion) return '<br><b style="color:var(--muted); font-size:12px; text-transform:uppercase;">'+l.seccion+'</b>';
      return l.en;
    }).join('<br>');
    box.innerHTML = '<b>Letra correcta:</b><br>'+html;
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
