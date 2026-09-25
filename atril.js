// ================================================================
// ATRIL — reproductor para ensayar, integrado al curso
// Biblioteca automática (nada que subir), reproducción continua por
// semana, velocidad sin cambiar el tono, letra sincronizada por
// tiempo proporcional (igual que el resto del curso), y toque de
// línea para repetir esa frase en bucle. Sin tono/BPM/círculo de quintas.
// ================================================================
(function(){
  const fmt = t => { if(!isFinite(t)||t<0) t=0; const m=Math.floor(t/60), s=Math.floor(t%60); return m+':'+String(s).padStart(2,'0'); };

  let biblioteca = []; // [{ semana, dias:[{day, items:[{tipo,titulo,audio,lineas}]}] }]
  let listaPlana = []; // reproducción continua: [{day, tipo, titulo, audio, lineas}]
  let idxActual = -1;
  let sel = { a:null, b:null }; // selección de líneas para loop
  const audio = new Audio();
  audio.preload = 'auto';
  audio.preservesPitch = true; audio.mozPreservesPitch = true; audio.webkitPreservesPitch = true;

  // ---------- Construir la biblioteca desde los datos del curso ----------
  function construirBiblioteca(){
    const topeDay = (typeof ultimoDiaCompletado === 'function') ? Math.max(ultimoDiaCompletado()+1, 1) : 999;
    const porDia = {};
    (typeof curriculum !== 'undefined' ? curriculum : []).forEach(d=>{
      if(d.day > topeDay) return;
      const items = [];
      if(d.songJingle && d.songJingleLyrics && d.songJingleLyrics.length){
        items.push({ tipo:'cancion', titulo:'Canción', audio:d.songJingle, lineas:d.songJingleLyrics });
      }
      if(d.songStory && d.songStoryLyrics && d.songStoryLyrics.length){
        items.push({ tipo:'historia', titulo:'Historia', audio:d.songStory, lineas:d.songStoryLyrics });
      }
      if(items.length) porDia[d.day] = { day:d.day, theme:(d.theme||'').split('/')[0].trim(), items };
    });
    if(typeof karaoke !== 'undefined' && karaoke.canciones){
      karaoke.canciones.forEach(c=>{
        if(c.dia > topeDay) return;
        const lineasSolo = c.lineas.filter(l=>l.en);
        if(!porDia[c.dia]) porDia[c.dia] = { day:c.dia, theme:c.titulo, items:[] };
        porDia[c.dia].items.push({ tipo:'practica', titulo:'Práctica auditiva', audio:c.audio, lineas:lineasSolo });
      });
    }
    // Orden fijo dentro del día: Canción, Historia, Práctica
    const ordenTipo = { cancion:0, historia:1, practica:2 };
    Object.values(porDia).forEach(d=> d.items.sort((a,b)=>ordenTipo[a.tipo]-ordenTipo[b.tipo]));

    const dias = Object.values(porDia).sort((a,b)=>a.day-b.day);
    const semanas = {};
    dias.forEach(d=>{
      const numSemana = Math.ceil(d.day/6);
      if(!semanas[numSemana]) semanas[numSemana] = { semana:numSemana, dias:[] };
      semanas[numSemana].dias.push(d);
    });
    biblioteca = Object.values(semanas).sort((a,b)=>a.semana-b.semana);
  }

  // ---------- Navegación de pantallas ----------
  function el(id){ return document.getElementById(id); }

  function mostrarAtril(){
    el('home').style.display = 'none';
    el('atrilModulo').style.display = 'block';
    construirBiblioteca();
    renderListaSemanas();
  }

  function volverAlInicio(){
    audio.pause();
    el('atrilModulo').style.display = 'none';
    el('home').style.display = 'block';
  }

  function renderListaSemanas(){
    const box = el('atrilBox');
    box.innerHTML = '';
    const titulo = document.createElement('h2');
    titulo.textContent = '🎼 Atril — practica con las canciones del curso';
    box.appendChild(titulo);

    if(!biblioteca.length){
      const vacio = document.createElement('p');
      vacio.className = 'sub';
      vacio.textContent = 'Todavía no hay canciones con audio real disponibles en los días que llevás recorridos.';
      box.appendChild(vacio);
    }

    biblioteca.forEach(sem=>{
      const card = document.createElement('div');
      card.className = 'cg-regla-card';
      card.style.cssText = 'display:block; cursor:pointer; padding:14px; margin-bottom:10px; border:1px solid var(--border); border-radius:12px;';
      const totalItems = sem.dias.reduce((s,d)=>s+d.items.length,0);
      card.innerHTML = '<b>Semana '+sem.semana+'</b> — Días '+sem.dias[0].day+' al '+sem.dias[sem.dias.length-1].day+
        '<p style="font-size:13px; color:var(--muted); margin:4px 0 0;">'+totalItems+' de 18 audios disponibles</p>';
      card.onclick = ()=>renderSemana(sem);
      box.appendChild(card);
    });

    const volverBtn = document.createElement('button');
    volverBtn.className = 'ghost'; volverBtn.style.marginTop = '14px';
    volverBtn.textContent = '← Volver al inicio';
    volverBtn.onclick = volverAlInicio;
    box.appendChild(volverBtn);
  }

  function renderSemana(sem){
    // Armamos la lista plana de reproducción continua para esta semana
    listaPlana = [];
    sem.dias.forEach(d=>{
      d.items.forEach(it=>{ listaPlana.push({ day:d.day, theme:d.theme, tipo:it.tipo, titulo:it.titulo, audio:it.audio, lineas:it.lineas }); });
    });

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
        fila.className = 'ghost';
        fila.style.cssText = 'width:100%; margin-bottom:6px; text-align:left;';
        fila.textContent = it.titulo;
        fila.onclick = ()=>reproducirDesde(idx);
        box.appendChild(fila);
      });
    });

    const volverBtn = document.createElement('button');
    volverBtn.className = 'ghost'; volverBtn.style.marginTop = '14px';
    volverBtn.textContent = '← Volver a las semanas';
    volverBtn.onclick = renderListaSemanas;
    box.appendChild(volverBtn);
  }

  // ---------- Reproducción continua ----------
  function reproducirDesde(idx){
    idxActual = idx;
    sel = { a:null, b:null };
    cargarActual();
    renderReproductor();
    audio.play();
  }

  function cargarActual(){
    const item = listaPlana[idxActual];
    if(!item) return;
    audio.src = item.audio;
    audio.load();
  }

  audio.addEventListener('ended', ()=>{
    if(idxActual < listaPlana.length-1){
      idxActual++;
      cargarActual();
      sel = { a:null, b:null };
      renderReproductor();
      audio.play();
    }
  });

  function lineaTiempos(lineas, duracion){
    const n = lineas.length || 1;
    return lineas.map((l,i)=>({ inicio: (i/n)*duracion, fin: ((i+1)/n)*duracion }));
  }

  function renderReproductor(){
    const item = listaPlana[idxActual];
    if(!item) return;
    const box = el('atrilBox');
    box.innerHTML = '';

    const titulo = document.createElement('h2');
    titulo.textContent = 'Día '+item.day+' — '+item.titulo;
    box.appendChild(titulo);
    const sub = document.createElement('p');
    sub.className = 'sub';
    sub.textContent = item.theme;
    box.appendChild(sub);

    // Transporte
    const transporte = document.createElement('div');
    transporte.style.cssText = 'display:flex; align-items:center; gap:10px; margin:14px 0;';
    const playBtn = document.createElement('button');
    playBtn.className = 'primary';
    playBtn.textContent = audio.paused ? '▶' : '⏸';
    playBtn.onclick = ()=>{ if(audio.paused) audio.play(); else audio.pause(); playBtn.textContent = audio.paused?'▶':'⏸'; };
    const tiempoTxt = document.createElement('span');
    tiempoTxt.id = 'atrilTiempo';
    tiempoTxt.style.cssText = 'color:var(--muted); font-variant-numeric:tabular-nums;';
    tiempoTxt.textContent = fmt(audio.currentTime)+' / '+fmt(audio.duration||0);
    transporte.appendChild(playBtn); transporte.appendChild(tiempoTxt);
    box.appendChild(transporte);

    // Velocidad (sin tono)
    const velBox = document.createElement('div');
    velBox.style.cssText = 'margin-bottom:14px;';
    velBox.innerHTML = '<b>Velocidad</b> <span id="atrilVelVal" style="color:var(--muted);">1.00×</span>';
    const velInput = document.createElement('input');
    velInput.type = 'range'; velInput.min = '0.5'; velInput.max = '1.5'; velInput.step = '0.05'; velInput.value = audio.playbackRate || 1;
    velInput.style.width = '100%';
    velInput.oninput = ()=>{ audio.playbackRate = parseFloat(velInput.value); el('atrilVelVal').textContent = audio.playbackRate.toFixed(2)+'×'; };
    velBox.appendChild(velInput);
    box.appendChild(velBox);

    // Selección para bucle
    if(sel.a !== null){
      const selInfo = document.createElement('div');
      selInfo.style.cssText = 'background:var(--bg-panel-2); border-radius:10px; padding:10px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center;';
      selInfo.innerHTML = '<span>Repitiendo línea'+(sel.b!==null && sel.b!==sel.a ? 's '+(sel.a+1)+' a '+(sel.b+1) : ' '+(sel.a+1))+'</span>';
      const quitarBtn = document.createElement('button');
      quitarBtn.className = 'ghost'; quitarBtn.textContent = 'Quitar';
      quitarBtn.onclick = ()=>{ sel = {a:null,b:null}; renderReproductor(); };
      selInfo.appendChild(quitarBtn);
      box.appendChild(selInfo);
    } else {
      const hint = document.createElement('p');
      hint.style.cssText = 'font-size:12px; color:var(--muted); margin-bottom:10px;';
      hint.textContent = 'Tocá una línea para repetirla en bucle. Tocá una segunda línea para repetir todo ese tramo.';
      box.appendChild(hint);
    }

    // Letra
    const lyricsBox = document.createElement('div');
    lyricsBox.id = 'atrilLyrics';
    lyricsBox.style.cssText = 'max-height:340px; overflow-y:auto; margin-bottom:14px;';
    box.appendChild(lyricsBox);
    pintarLetra();

    // Navegación anterior/siguiente dentro de la semana
    const nav = document.createElement('div');
    nav.style.cssText = 'display:flex; gap:10px; margin-bottom:10px;';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'ghost'; prevBtn.textContent = '⏮ Anterior'; prevBtn.disabled = idxActual<=0;
    prevBtn.onclick = ()=>reproducirDesde(idxActual-1);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'ghost'; nextBtn.textContent = 'Siguiente ⏭'; nextBtn.disabled = idxActual>=listaPlana.length-1;
    nextBtn.onclick = ()=>reproducirDesde(idxActual+1);
    nav.appendChild(prevBtn); nav.appendChild(nextBtn);
    box.appendChild(nav);

    const volverBtn = document.createElement('button');
    volverBtn.className = 'ghost';
    volverBtn.textContent = '← Volver a la semana';
    volverBtn.onclick = ()=>{ audio.pause(); const semNum = Math.ceil(item.day/6); const sem = biblioteca.find(s=>s.semana===semNum); if(sem) renderSemana(sem); else renderListaSemanas(); };
    box.appendChild(volverBtn);
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
      p.innerHTML = '<b>'+l.en+'</b><br><span style="color:var(--muted); font-size:13px;">'+(l.es||'')+'</span>';
      p.onclick = ()=>tocarLinea(i);
      cont.appendChild(p);
    });
  }

  function tocarLinea(i){
    const item = listaPlana[idxActual];
    const duracion = audio.duration || 0;
    if(!duracion) return;
    if(sel.a === null || sel.b !== null){
      sel = { a:i, b:null };
    } else {
      sel = { a: Math.min(sel.a,i), b: Math.max(sel.a,i) };
    }
    const tiempos = lineaTiempos(item.lineas, duracion);
    audio.currentTime = tiempos[sel.a].inicio;
    if(audio.paused) audio.play();
    renderReproductor();
  }

  audio.addEventListener('timeupdate', ()=>{
    const tEl = el('atrilTiempo');
    if(tEl) tEl.textContent = fmt(audio.currentTime)+' / '+fmt(audio.duration||0);
    const item = listaPlana[idxActual];
    if(!item || !audio.duration) return;

    // Bucle de la selección
    if(sel.a !== null){
      const tiempos = lineaTiempos(item.lineas, audio.duration);
      const finSel = tiempos[sel.b!==null?sel.b:sel.a].fin;
      if(audio.currentTime >= finSel - 0.05){
        audio.currentTime = tiempos[sel.a].inicio;
      }
    }

    // Resaltado de línea actual
    const cont = el('atrilLyrics');
    if(cont){
      const n = item.lineas.length || 1;
      const idxLinea = Math.min(n-1, Math.floor((audio.currentTime/audio.duration)*n));
      cont.querySelectorAll('p').forEach(p=>{
        const esActual = parseInt(p.dataset.idx) === idxLinea;
        p.style.background = esActual ? 'var(--bg-panel-2)' : '';
      });
    }
  });

  window.mostrarAtril = mostrarAtril;
})();
