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
  let biblioNativo = []; // Dragón Nativo: [{ fase, nombre, semanas:[{numero, audio, lineas}] }]
  let listaPlana = []; // reproducción continua: [{grupo, day, tipo, titulo, audio, lineas}]
  let idxActual = -1;
  let sel = { a:null, b:null }; // selección de líneas para loop
  let contextoActual = null; // referencia para volver ("semana" o "nativo") con su objeto

  function el(id){ return document.getElementById(id); }
  function audioEl(){ return el('atrilAudio'); }

  // ---------- Construir la biblioteca "Días de estudio" ----------
  function construirBiblioteca(){
    const topeDay = (typeof window.ultimoDiaCompletado === 'function') ? Math.max(window.ultimoDiaCompletado()+1, 1) : 999;
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

  // ---------- Construir la biblioteca "Dragón Nativo" ----------
  function seccionesDeSemana(fase, semana){
    const secciones = [
      { nombre:'Estrofa 1', lineas:semana.estrofa1.lineas },
      { nombre:'Pedal', lineas:fase.fijas.pedal },
      { nombre:'Pre-Coro', lineas:fase.fijas.precoro },
      { nombre:'Coro', lineas:fase.fijas.coro },
      { nombre:'Estrofa 2', lineas:semana.estrofa2.lineas }
    ];
    if(semana.puente) secciones.push({ nombre:'Puente', lineas:semana.puente.lineas });
    secciones.push({ nombre:'Outro', lineas: semana.outroOverride || fase.fijas.outro });
    return secciones;
  }

  function construirBiblioNativo(){
    biblioNativo = [];
    if(typeof dragonNativo === 'undefined') return;
    const esAdmin = typeof isAdmin === 'function' && isAdmin();
    dragonNativo.fases.forEach(fase=>{
      if(!fase.disponible) return;
      const semanasDisponibles = fase.semanas.filter(sem=>{
        if(!sem.audio) return false; // sin audio real todavía, no se ofrece en Atril
        if(esAdmin) return true;
        if(typeof window.unidadesDesbloqueadas !== 'function') return false;
        const unidadGlobal = (fase.id-1)*30 + sem.numero;
        return unidadGlobal <= window.unidadesDesbloqueadas('dragon_nativo');
      });
      if(!semanasDisponibles.length) return;
      biblioNativo.push({
        fase: fase.id, nombre: fase.nombre,
        semanas: semanasDisponibles.map(sem=>({
          numero: sem.numero, audio: sem.audio,
          lineas: seccionesDeSemana(fase, sem).flatMap(s=>s.lineas)
        }))
      });
    });
  }

  // ---------- Navegación de pantallas ----------
  function mostrarAtril(){
    el('home').style.display = 'none';
    el('atrilModulo').style.display = 'block';
    construirBiblioteca();
    construirBiblioNativo();
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
      vacio.textContent = 'Todavía no hay canciones con audio real en los días que llevás recorridos.';
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

    const subtituloNativo = document.createElement('p');
    subtituloNativo.style.cssText = 'font-weight:600; margin-top:20px;';
    subtituloNativo.textContent = '🐉 Dragón Nativo';
    box.appendChild(subtituloNativo);

    if(!biblioNativo.length){
      const vacio = document.createElement('p');
      vacio.className = 'sub';
      vacio.textContent = 'Todavía no desbloqueaste ninguna semana de Dragón Nativo con tus premios de colaboración.';
      box.appendChild(vacio);
    }
    biblioNativo.forEach(fase=>{
      const card = document.createElement('div');
      card.className = 'cg-regla-card';
      card.style.cssText = 'display:block; cursor:pointer; padding:14px; margin-bottom:10px; border:1px solid var(--border); border-radius:12px;';
      card.innerHTML = '<b>'+fase.nombre+'</b><p style="font-size:13px; color:var(--muted); margin:4px 0 0;">'+fase.semanas.length+' semana(s) desbloqueada(s)</p>';
      card.onclick = ()=>renderFaseNativo(fase);
      box.appendChild(card);
    });
  }

  function renderSemana(sem){
    listaPlana = [];
    sem.dias.forEach(d=>{
      d.items.forEach(it=>{ listaPlana.push({ grupo:'dia', day:d.day, theme:d.theme, tipo:it.tipo, titulo:it.titulo, audio:it.audio, lineas:it.lineas }); });
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
        fila.className = 'ghost';
        fila.style.cssText = 'width:100%; margin-bottom:6px; text-align:left;';
        fila.textContent = it.titulo;
        fila.onclick = ()=>reproducirDesde(idx);
        box.appendChild(fila);
      });
    });

    const volverBtn = document.createElement('button');
    volverBtn.className = 'ghost'; volverBtn.style.marginTop = '14px';
    volverBtn.textContent = '← Volver al inicio de Atril';
    volverBtn.onclick = renderInicio;
    box.appendChild(volverBtn);
  }

  function renderFaseNativo(fase){
    listaPlana = [];
    fase.semanas.forEach(sem=>{
      listaPlana.push({ grupo:'nativo', day:null, theme:fase.nombre+' — Semana '+sem.numero, tipo:'nativo', titulo:'Semana '+sem.numero, audio:sem.audio, lineas:sem.lineas });
    });
    contextoActual = { tipo:'nativo', obj:fase };

    const box = el('atrilBox');
    box.innerHTML = '';
    const titulo = document.createElement('h2');
    titulo.textContent = fase.nombre;
    box.appendChild(titulo);

    fase.semanas.forEach((sem,i)=>{
      const fila = document.createElement('button');
      fila.className = 'ghost';
      fila.style.cssText = 'width:100%; margin-bottom:6px; text-align:left;';
      fila.textContent = 'Semana '+sem.numero;
      fila.onclick = ()=>reproducirDesde(i);
      box.appendChild(fila);
    });

    const volverBtn = document.createElement('button');
    volverBtn.className = 'ghost'; volverBtn.style.marginTop = '14px';
    volverBtn.textContent = '← Volver al inicio de Atril';
    volverBtn.onclick = renderInicio;
    box.appendChild(volverBtn);
  }

  // ---------- Reproducción continua ----------
  function reproducirDesde(idx){
    idxActual = idx;
    sel = { a:null, b:null };
    cargarActual();
    el('atrilPlayerBox').style.display = 'block';
    renderReproductor();
    audioEl().play();
  }

  function cargarActual(){
    const item = listaPlana[idxActual];
    if(!item) return;
    const a = audioEl();
    a.src = item.audio;
    a.load();
  }

  function alTerminar(){
    if(idxActual < listaPlana.length-1){
      idxActual++;
      cargarActual();
      sel = { a:null, b:null };
      renderReproductor();
      audioEl().play();
    }
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

    const titulo = document.createElement('h3');
    titulo.textContent = (item.day?'Día '+item.day+' — ':'')+item.titulo;
    infoBox.appendChild(titulo);
    const sub = document.createElement('p');
    sub.className = 'sub';
    sub.textContent = item.theme;
    infoBox.appendChild(sub);

    // Velocidad (sin tono)
    const velBox = document.createElement('div');
    velBox.style.cssText = 'margin:10px 0;';
    velBox.innerHTML = '<b>Velocidad</b> <span id="atrilVelVal" style="color:var(--muted);">'+(audioEl().playbackRate||1).toFixed(2)+'×</span>';
    const velInput = document.createElement('input');
    velInput.type = 'range'; velInput.id = 'atrilVel'; velInput.min = '0.5'; velInput.max = '1.5'; velInput.step = '0.05'; velInput.value = audioEl().playbackRate || 1;
    velInput.style.width = '100%';
    velInput.oninput = ()=>{ audioEl().playbackRate = parseFloat(velInput.value); el('atrilVelVal').textContent = audioEl().playbackRate.toFixed(2)+'×'; };
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
      hint.textContent = 'Tocá una línea para repetirla en bucle. Tocá una segunda línea para repetir todo ese tramo. La barra del reproductor también se puede arrastrar para escuchar todo o saltar a cualquier punto.';
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
      else if(contextoActual && contextoActual.tipo==='nativo') renderFaseNativo(contextoActual.obj);
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
      p.innerHTML = '<b>'+l.en+'</b><br><span style="color:var(--muted); font-size:13px;">'+(l.es||'')+'</span>';
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
    a.addEventListener('timeupdate', alAvanzarTiempo);
  }

  function mostrarAtrilInit(){
    inicializarAudio();
    mostrarAtril();
  }

  window.mostrarAtril = mostrarAtrilInit;
})();
