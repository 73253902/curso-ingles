// ================================================================
// ATRIL — reproductor para ensayar, integrado al curso
// Biblioteca automática (nada que subir), reproducción continua por
// semana, velocidad sin cambiar el tono, letra sincronizada por
// tiempo proporcional (igual que el resto del curso), y toque de
// línea para repetir esa frase en bucle. Sin tono/BPM/círculo de quintas.
// Reproductor nativo del navegador (igual que en las lecciones), con
// barra de progreso tocable para escuchar todo o saltar a un punto.
// ================================================================
(function(){
  let biblioteca = []; // Días de estudio: [{ semana, dias:[{day, theme, items:[{tipo,titulo,audio,lineas}]}] }]
  const DIA_INICIO_NATIVO = 13; // desde este día entran la Canción nativa y el Karaoke
  let listaPlana = []; // reproducción continua: [{grupo, day, tipo, titulo, audio, lineas}]
  let idxActual = -1;
  let sel = { a:null, b:null }; // selección de líneas para loop
  let contextoActual = null; // referencia para volver ("semana" o "nativo") con su objeto

  function el(id){ return document.getElementById(id); }
  function audioEl(){ return el('atrilAudio'); }

  // ---------- Canción nativa del día ----------
  // Una canción del Dragón Nativo por día desde el Día 13: el Día 13 suena la canción 1,
  // el Día 14 la 2… hasta el Día 180 (42 canciones por fase, 4 fases = 168 canciones).
  function seccionesDeSemana(fase, semana){
    const pre = semana.precoro ? semana.precoro.lineas : fase.fijas.precoro;
    const coro = semana.coro ? semana.coro.lineas : fase.fijas.coro;
    const secciones = [
      { nombre:'Estrofa 1', lineas:semana.estrofa1.lineas },
      { nombre:'Pedal', lineas:fase.fijas.pedal },
      { nombre:'Pre-Coro', lineas:pre },
      { nombre:'Coro', lineas:coro },
      { nombre:'Estrofa 2', lineas:semana.estrofa2.lineas }
    ];
    if(semana.puente) secciones.push({ nombre:'Puente', lineas:semana.puente.lineas });
    // El Pre-Coro y el Coro se cantan dos veces: se muestran en el orden real de la canción
    secciones.push({ nombre:'Pre-Coro', lineas:pre }, { nombre:'Coro', lineas:coro });
    secciones.push({ nombre:'Outro', lineas: semana.outroOverride || fase.fijas.outro });
    return secciones;
  }

  function cancionNativaDelDia(day){
    if(typeof dragonNativo === 'undefined' || day < DIA_INICIO_NATIVO) return null;
    let resto = day - DIA_INICIO_NATIVO + 1; // número de canción global (1, 2, 3…)
    for(const fase of dragonNativo.fases){
      if(resto <= fase.semanas.length){
        const sem = fase.semanas.find(s=>s.numero===resto);
        if(!sem || !sem.audio) return null; // sin audio real todavía, no se ofrece en el Atril
        return { tipo:'nativa', titulo:'🐉 Canción nativa', audio:sem.audio,
                 detalle: fase.nombre+' · Canción '+sem.numero,
                 lineas: seccionesDeSemana(fase, sem).flatMap(s=>s.lineas) };
      }
      resto -= fase.semanas.length;
    }
    return null;
  }

  // ---------- Construir la biblioteca "Días de estudio" ----------
  function construirBiblioteca(){
    // Se abre la SEMANA COMPLETA en la que va el alumno (no solo hasta su día),
    // para que escuche todo el repertorio de la semana antes de llegar a la práctica.
    // El administrador ve todas las semanas.
    const esAdmin = typeof isAdmin === 'function' && isAdmin();
    const diaActual = (typeof window.ultimoDiaCompletado === 'function') ? Math.max(window.ultimoDiaCompletado()+1, 1) : 999;
    const topeDay = esAdmin ? 999 : Math.ceil(diaActual/6)*6;
    const porDia = {};
    const diaDe = (day, theme)=> porDia[day] || (porDia[day] = { day, theme, items:[] });
    (typeof curriculum !== 'undefined' ? curriculum : []).forEach(d=>{
      if(d.day > topeDay) return;
      const tema = (d.theme||'').split('/')[0].trim();
      if(d.songJingle && d.songJingleLyrics && d.songJingleLyrics.length){
        diaDe(d.day, tema).items.push({ tipo:'vocabulario', titulo:'🎵 Vocabulario', audio:d.songJingle, lineas:d.songJingleLyrics });
      }
      if(d.songStory && d.songStoryLyrics && d.songStoryLyrics.length){
        diaDe(d.day, tema).items.push({ tipo:'historia', titulo:'📖 Historia', audio:d.songStory, lineas:d.songStoryLyrics });
      }
      const nativa = cancionNativaDelDia(d.day);
      if(nativa) diaDe(d.day, tema).items.push(nativa);
    });
    if(typeof karaoke !== 'undefined' && karaoke.canciones){
      karaoke.canciones.forEach(c=>{
        if(c.dia > topeDay || c.dia < DIA_INICIO_NATIVO) return;
        diaDe(c.dia, c.titulo).items.push({ tipo:'karaoke', titulo:'🎤 Karaoke', audio:c.audio, lineas:c.lineas.filter(l=>l.en) });
      });
    }
    const ordenTipo = { vocabulario:0, historia:1, nativa:2, karaoke:3 };
    Object.values(porDia).forEach(d=> d.items.sort((a,b)=>ordenTipo[a.tipo]-ordenTipo[b.tipo]));

    const dias = Object.values(porDia).filter(d=>d.items.length).sort((a,b)=>a.day-b.day);
    const semanas = {};
    dias.forEach(d=>{
      const numSemana = Math.ceil(d.day/6);
      if(!semanas[numSemana]) semanas[numSemana] = { semana:numSemana, dias:[] };
      semanas[numSemana].dias.push(d);
    });
    biblioteca = Object.values(semanas).sort((a,b)=>a.semana-b.semana);
  }

  // ---------- Navegación de pantallas ----------
  function mostrarAtril(){
    el('home').style.display = 'none';
    el('atrilModulo').style.display = 'block';
    construirBiblioteca();
    renderInicio();
  }

  function volverAlInicio(){
    audioEl().pause();
    el('atrilPlayerBox').style.display = 'none';
    el('atrilModulo').style.display = 'none';
    el('home').style.display = 'block';
  }

  function renderInicio(){
    const box = el('atrilBox');
    box.innerHTML = '';
    const titulo = document.createElement('h2');
    titulo.textContent = '🎼 Atril — practica con las canciones del curso';
    box.appendChild(titulo);

    const subtituloDias = document.createElement('p');
    subtituloDias.style.cssText = 'font-weight:600; margin-top:16px;';
    subtituloDias.textContent = '📅 Días de estudio';
    box.appendChild(subtituloDias);

    if(!biblioteca.length){
      const vacio = document.createElement('p');
      vacio.className = 'sub';
      vacio.textContent = 'Todavía no hay canciones con audio real en los días que llevas recorridos.';
      box.appendChild(vacio);
    }
    biblioteca.forEach(sem=>{
      const card = document.createElement('div');
      card.className = 'cg-regla-card';
      card.style.cssText = 'display:block; cursor:pointer; padding:14px; margin-bottom:10px; border:1px solid var(--border); border-radius:12px;';
      const totalItems = sem.dias.reduce((s,d)=>s+d.items.length,0);
      card.innerHTML = '<b>Semana '+sem.semana+'</b> — Días '+sem.dias[0].day+' al '+sem.dias[sem.dias.length-1].day+
        '<p style="font-size:13px; color:var(--muted); margin:4px 0 0;">'+totalItems+' '+(totalItems===1?'audio':'audios')+' para escuchar</p>';
      card.onclick = ()=>renderSemana(sem);
      box.appendChild(card);
    });

  }

  function renderSemana(sem){
    listaPlana = [];
    sem.dias.forEach(d=>{
      d.items.forEach(it=>{ listaPlana.push({ grupo:'dia', day:d.day, theme:it.detalle || d.theme, tipo:it.tipo, titulo:it.titulo, audio:it.audio, lineas:it.lineas }); });
    });
    contextoActual = { tipo:'semana', obj:sem };

    const box = el('atrilBox');
    box.innerHTML = '';
    const titulo = document.createElement('h2');
    titulo.textContent = 'Semana '+sem.semana;
    box.appendChild(titulo);

    sem.dias.forEach(d=>{
      const encabezado = document.createElement('p');
      encabezado.style.cssText = 'font-weight:600; margin:14px 0 4px;';
      encabezado.textContent = 'Día '+d.day+' — '+d.theme;
      box.appendChild(encabezado);
      d.items.forEach(it=>{
        const idx = listaPlana.findIndex(x=>x.day===d.day && x.tipo===it.tipo);
        const fila = document.createElement('button');
        fila.className = 'ghost atril-fila';
        fila.dataset.idx = idx;
        fila.dataset.titulo = it.titulo;
        fila.style.cssText = 'width:100%; margin-bottom:6px; text-align:left;';
        fila.textContent = it.titulo;
        fila.onclick = ()=>reproducirDesde(idx);
        box.appendChild(fila);
      });
    });
    marcarFilas();

    const volverBtn = document.createElement('button');
    volverBtn.className = 'ghost'; volverBtn.style.marginTop = '14px';
    volverBtn.textContent = '← Volver al inicio de Atril';
    volverBtn.onclick = renderInicio;
    box.appendChild(volverBtn);
  }

  // ---------- Reproducción continua ----------
  // El alumno toca cualquier canción de la semana y, desde ahí, suenan todas
  // las siguientes una tras otra hasta terminar la semana. Si un audio no
  // carga (archivo que todavía no existe), se salta solo y sigue con el próximo.
  let velocidad = 1; // se mantiene al pasar de una canción a otra
  let finDeSemana = false;
  let saltados = 0; // evita un bucle infinito si ningún audio carga

  function marcarFilas(){
    document.querySelectorAll('.atril-fila').forEach(f=>{
      const actual = parseInt(f.dataset.idx) === idxActual && !finDeSemana;
      f.textContent = (actual ? '▶ ' : '') + f.dataset.titulo;
      f.style.fontWeight = actual ? '700' : '';
      f.style.borderColor = actual ? 'var(--en)' : '';
    });
  }

  function reproducirDesde(idx){
    if(idx < 0 || idx >= listaPlana.length) return;
    idxActual = idx;
    finDeSemana = false;
    saltados = 0;
    sel = { a:null, b:null };
    cargarActual();
    el('atrilPlayerBox').style.display = 'block';
    renderReproductor();
    tocar();
  }

  function tocar(){
    const p = audioEl().play();
    if(p && p.catch) p.catch(()=>{}); // si el navegador lo bloquea, el alumno da play y la cadena sigue igual
  }

  function cargarActual(){
    const item = listaPlana[idxActual];
    if(!item) return;
    const a = audioEl();
    a.src = item.audio;
    a.defaultPlaybackRate = velocidad;
    a.load();
    a.playbackRate = velocidad;
  }

  function avanzar(){
    if(idxActual < listaPlana.length-1){
      idxActual++;
      sel = { a:null, b:null };
      cargarActual();
      renderReproductor();
      tocar();
    } else {
      finDeSemana = true;
      renderReproductor();
    }
    marcarFilas();
  }

  function alTerminar(){
    saltados = 0;
    avanzar();
  }

  function alFallarAudio(){
    if(!audioEl().getAttribute('src')) return;
    saltados++;
    if(saltados > listaPlana.length) return;
    avanzar();
  }

  function lineaTiempos(lineas, duracion){
    const n = lineas.length || 1;
    return lineas.map((l,i)=>({ inicio: (i/n)*duracion, fin: ((i+1)/n)*duracion }));
  }

  function renderReproductor(){
    const item = listaPlana[idxActual];
    if(!item) return;
    const infoBox = el('atrilPlayerInfo');
    infoBox.innerHTML = '';
    marcarFilas();

    if(finDeSemana){
      const fin = document.createElement('div');
      fin.style.cssText = 'background:var(--bg-panel-2); border-radius:10px; padding:12px; margin-bottom:12px; text-align:center;';
      fin.innerHTML = '<b>🎉 Terminaste las canciones de la semana</b>';
      const otraVez = document.createElement('button');
      otraVez.className = 'ghost'; otraVez.style.marginTop = '8px';
      otraVez.textContent = '🔁 Escuchar la semana otra vez';
      otraVez.onclick = ()=>reproducirDesde(0);
      fin.appendChild(document.createElement('br'));
      fin.appendChild(otraVez);
      infoBox.appendChild(fin);
    }

    const progreso = document.createElement('p');
    progreso.style.cssText = 'font-size:12px; color:var(--muted); margin:0 0 4px;';
    progreso.textContent = '▶ Reproducción continua · audio '+(idxActual+1)+' de '+listaPlana.length+' de la semana';
    infoBox.appendChild(progreso);

    const titulo = document.createElement('h3');
    titulo.textContent = (item.day?'Día '+item.day+' — ':'')+item.titulo;
    infoBox.appendChild(titulo);
    const sub = document.createElement('p');
    sub.className = 'sub';
    sub.textContent = item.theme;
    infoBox.appendChild(sub);

    // Velocidad (sin tono) — se conserva para las canciones siguientes
    const velBox = document.createElement('div');
    velBox.style.cssText = 'margin:10px 0;';
    velBox.innerHTML = '<b>Velocidad</b> <span id="atrilVelVal" style="color:var(--muted);">'+velocidad.toFixed(2)+'×</span>';
    const velInput = document.createElement('input');
    velInput.type = 'range'; velInput.id = 'atrilVel'; velInput.min = '0.5'; velInput.max = '1.5'; velInput.step = '0.05'; velInput.value = velocidad;
    velInput.style.width = '100%';
    velInput.oninput = ()=>{
      velocidad = parseFloat(velInput.value);
      audioEl().defaultPlaybackRate = velocidad;
      audioEl().playbackRate = velocidad;
      el('atrilVelVal').textContent = velocidad.toFixed(2)+'×';
    };
    velBox.appendChild(velInput);
    infoBox.appendChild(velBox);

    if(sel.a !== null){
      const selInfo = document.createElement('div');
      selInfo.style.cssText = 'background:var(--bg-panel-2); border-radius:10px; padding:10px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center;';
      selInfo.innerHTML = '<span>Repitiendo línea'+(sel.b!==null && sel.b!==sel.a ? 's '+(sel.a+1)+' a '+(sel.b+1) : ' '+(sel.a+1))+'</span>';
      const quitarBtn = document.createElement('button');
      quitarBtn.className = 'ghost'; quitarBtn.textContent = 'Quitar';
      quitarBtn.onclick = ()=>{ sel = {a:null,b:null}; renderReproductor(); };
      selInfo.appendChild(quitarBtn);
      infoBox.appendChild(selInfo);
    } else {
      const hint = document.createElement('p');
      hint.style.cssText = 'font-size:12px; color:var(--muted); margin-bottom:10px;';
      hint.textContent = 'Toca una línea para repetirla en bucle. Toca una segunda línea para repetir todo ese tramo. La barra del reproductor también se puede arrastrar para escuchar todo o saltar a cualquier punto.';
      infoBox.appendChild(hint);
    }

    const lyricsBox = document.createElement('div');
    lyricsBox.id = 'atrilLyrics';
    lyricsBox.style.cssText = 'max-height:340px; overflow-y:auto; margin-bottom:14px;';
    infoBox.appendChild(lyricsBox);
    pintarLetra();

    const nav = document.createElement('div');
    nav.style.cssText = 'display:flex; gap:10px; margin-bottom:10px;';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'ghost'; prevBtn.textContent = '⏮ Anterior'; prevBtn.disabled = idxActual<=0;
    prevBtn.onclick = ()=>reproducirDesde(idxActual-1);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'ghost'; nextBtn.textContent = 'Siguiente ⏭'; nextBtn.disabled = idxActual>=listaPlana.length-1;
    nextBtn.onclick = ()=>reproducirDesde(idxActual+1);
    nav.appendChild(prevBtn); nav.appendChild(nextBtn);
    infoBox.appendChild(nav);

    const volverBtn = document.createElement('button');
    volverBtn.className = 'ghost';
    volverBtn.textContent = '← Volver a la lista';
    volverBtn.onclick = ()=>{
      audioEl().pause();
      el('atrilPlayerBox').style.display = 'none';
      if(contextoActual && contextoActual.tipo==='semana') renderSemana(contextoActual.obj);
      else renderInicio();
    };
    infoBox.appendChild(volverBtn);
  }

  function pintarLetra(){
    const item = listaPlana[idxActual];
    const cont = el('atrilLyrics');
    if(!item || !cont) return;
    cont.innerHTML = '';
    item.lineas.forEach((l,i)=>{
      const p = document.createElement('p');
      p.style.cssText = 'padding:8px 10px; border-radius:8px; cursor:pointer; margin:2px 0;';
      p.dataset.idx = i;
      // Inglés, cómo suena y español (las líneas solo en español se muestran tal cual)
      const pron = l.pron ? '<span style="display:block; color:var(--en); opacity:.75; font-size:13px; font-style:italic;">'+l.pron+'</span>' : '';
      p.innerHTML = (l.en ? '<b>'+l.en+'</b>' : '') + pron + '<span style="display:block; color:var(--muted); font-size:13px;">'+(l.es||'')+'</span>';
      p.onclick = ()=>tocarLinea(i);
      cont.appendChild(p);
    });
  }

  function tocarLinea(i){
    const item = listaPlana[idxActual];
    const a = audioEl();
    const duracion = a.duration || 0;
    if(!duracion) return;
    if(sel.a === null || sel.b !== null){
      sel = { a:i, b:null };
    } else {
      sel = { a: Math.min(sel.a,i), b: Math.max(sel.a,i) };
    }
    const tiempos = lineaTiempos(item.lineas, duracion);
    a.currentTime = tiempos[sel.a].inicio;
    if(a.paused) a.play();
    renderReproductor();
  }

  function alAvanzarTiempo(){
    const item = listaPlana[idxActual];
    const a = audioEl();
    if(!item || !a.duration) return;

    if(sel.a !== null){
      const tiempos = lineaTiempos(item.lineas, a.duration);
      const finSel = tiempos[sel.b!==null?sel.b:sel.a].fin;
      if(a.currentTime >= finSel - 0.05){
        a.currentTime = tiempos[sel.a].inicio;
      }
    }

    const cont = el('atrilLyrics');
    if(cont){
      const n = item.lineas.length || 1;
      const idxLinea = Math.min(n-1, Math.floor((a.currentTime/a.duration)*n));
      cont.querySelectorAll('p').forEach(p=>{
        const esActual = parseInt(p.dataset.idx) === idxLinea;
        p.style.background = esActual ? 'var(--bg-panel-2)' : '';
      });
    }
  }

  function inicializarAudio(){
    const a = audioEl();
    if(!a || a._atrilInit) return;
    a._atrilInit = true;
    a.preservesPitch = true; a.mozPreservesPitch = true; a.webkitPreservesPitch = true;
    a.addEventListener('ended', alTerminar);
    a.addEventListener('error', alFallarAudio);
    a.addEventListener('timeupdate', alAvanzarTiempo);
  }

  function mostrarAtrilInit(){
    inicializarAudio();
    mostrarAtril();
  }

  window.mostrarAtril = mostrarAtrilInit;
})();
