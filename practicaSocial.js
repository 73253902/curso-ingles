// ================================================================
// PRÁCTICA SOCIAL ENTRE ALUMNOS — El Dragón del Lenguaje
// Empareja al azar a 2 alumnos de nivel similar para practicar el
// mini-diálogo del día. Sin texto libre, sin elegir con quién se
// practica, con verificación de voz y límite de 7 días por pareja.
// Requiere: practica_social_schema.sql ya corrido en Supabase.
// ================================================================
(function(){
  let pairState = null; // { id, partnerName, dialogue, dayNumber, soyUserA, expiresAt }
  let turnosDichos = 0; // cuántas líneas del diálogo ya se dijeron
  let realtimeChannel = null;
  let buscandoInterval = null;

  function el(id){ return document.getElementById(id); }

  // Último día que el alumno realmente completó (no el próximo que le falta) —
  // así se empareja según lo que de verdad ya sabe, y practica contenido
  // repasado, no algo que todavía no vio.
  function ultimoDiaCompletado(){
    const progress = loadProgress();
    let ultimo = 0;
    for(let d=1; d<=curriculum.length; d++){
      if(progress[d] && progress[d].completed) ultimo = d;
    }
    return ultimo;
  }

  // Elige al azar uno de los últimos 7 días que el alumno ya completó
  // (o menos, si todavía no lleva 7).
  function diaAlAzarDeLosUltimos7(ultimoCompletado){
    const piso = Math.max(1, ultimoCompletado - 6);
    return piso + Math.floor(Math.random() * (ultimoCompletado - piso + 1));
  }

  function mostrarPracticaSocial(){
    el('home').style.display='none';
    el('practicaSocialModulo').style.display='block';
    revisarParejaActiva();
  }

  function volverAlInicio(){
    if(realtimeChannel){ supabaseClient.removeChannel(realtimeChannel); realtimeChannel=null; }
    el('practicaSocialModulo').style.display='none';
    el('home').style.display='block';
  }

  // ---------- Revisar si ya tiene una pareja activa al entrar ----------
  async function revisarParejaActiva(){
    if(!currentUser){ renderOptIn(); return; }
    const { data, error } = await supabaseClient
      .from('practice_pairs')
      .select('*')
      .or('user_a.eq.'+currentUser.id+',user_b.eq.'+currentUser.id)
      .eq('status','active')
      .gt('expires_at', new Date().toISOString())
      .limit(1)
      .maybeSingle();
    if(error){ console.error('Error revisando pareja activa:', error); renderOptIn(); return; }
    if(data){
      await cargarPareja(data);
      renderSesion();
      return;
    }
    // Todavía no hay pareja — ¿ya estaba buscando de antes? Si es así, seguimos
    // buscando con esos mismos datos, en vez de preguntarle todo de nuevo.
    const { data: disponibilidad } = await supabaseClient
      .from('practice_availability').select('*').eq('user_id', currentUser.id).eq('available', true).maybeSingle();
    if(disponibilidad){
      buscarCompanero(disponibilidad.day_number, disponibilidad.first_name, disponibilidad.time_slots || []);
    } else {
      renderOptIn();
    }
  }

  // ---------- Pantalla: activar disponibilidad ----------
  async function renderOptIn(){
    const dayNum = ultimoDiaCompletado();
    const box = el('practicaSocialBox');
    box.innerHTML = '';

    if(dayNum < 1){
      box.innerHTML = '<h2>🤝 Practicar con otro alumno</h2><p class="sub">Todavía no completaste ningún día del curso — completá al menos el Día 1 antes de buscar un compañero de práctica, así tenés contenido real para practicar.</p>';
      const volverBtn = document.createElement('button');
      volverBtn.className='ghost'; volverBtn.textContent='← Volver al inicio'; volverBtn.onclick=volverAlInicio;
      box.appendChild(volverBtn);
      return;
    }

    const titulo = document.createElement('h2');
    titulo.textContent = '🤝 Practicar con otro alumno';
    box.appendChild(titulo);

    if(currentUser){
      const { data: calificacionesRecibidas } = await supabaseClient
        .from('practice_ratings').select('score').eq('rated_id', currentUser.id).order('created_at',{ascending:false}).limit(3);
      if(calificacionesRecibidas && calificacionesRecibidas.length>=2){
        const promedio = calificacionesRecibidas.reduce((s,r)=>s+r.score,0) / calificacionesRecibidas.length;
        if(promedio <= 2.5){
          const aviso = document.createElement('div');
          aviso.style.cssText='background:rgba(230,160,60,.12); border:1px solid var(--warn); border-radius:10px; padding:12px 14px; margin-bottom:14px;';
          aviso.innerHTML = '<b style="font-size:14px;">¿Te está costando un poco?</b><p style="font-size:13px; margin:4px 0 8px;">Notamos que tus últimas prácticas tuvieron calificaciones bajas — no pasa nada, le puede pasar a cualquiera. Podés pedir una asesoría personalizada.</p>';
          const pedirBtn = document.createElement('button');
          pedirBtn.className = 'primary'; pedirBtn.style.width = '100%';
          pedirBtn.textContent = '📋 Pedir asesoría personalizada';
          pedirBtn.onclick = renderAsesoria;
          aviso.appendChild(pedirBtn);
          box.appendChild(aviso);
        }
      }
    }

    const asesoriaLink = document.createElement('p');
    asesoriaLink.style.cssText = 'text-align:right; font-size:12px; margin-bottom:10px;';
    asesoriaLink.innerHTML = '<a href="#" id="psAsesoriaLink" style="color:var(--en);">📋 Mi asesoría personalizada</a>';
    box.appendChild(asesoriaLink);
    el('psAsesoriaLink').onclick = (e)=>{ e.preventDefault(); renderAsesoria(); };

    const intro = document.createElement('p');
    intro.className = 'sub';
    intro.textContent = 'Te conectamos al azar con otro alumno de nivel parecido, para practicar juntos el diálogo del día. Solo pueden usarse las líneas del guion — no hay chat libre.';
    box.appendChild(intro);

    const nombreLabel = document.createElement('label');
    nombreLabel.style.cssText='display:block; margin-top:16px; font-size:13px; color:var(--muted);';
    nombreLabel.textContent = 'Tu nombre (solo el nombre, se ve así para otros alumnos):';
    box.appendChild(nombreLabel);
    const nombreInput = document.createElement('input');
    nombreInput.id = 'psNombreInput';
    nombreInput.type = 'text';
    nombreInput.maxLength = 20;
    nombreInput.placeholder = 'Ej: Robinson';
    nombreInput.style.cssText='width:100%; padding:10px; border-radius:10px; border:1px solid var(--border); background:var(--bg-panel-2); color:var(--ink); margin-top:6px;';
    box.appendChild(nombreInput);

    const horarioLabel = document.createElement('p');
    horarioLabel.style.cssText='margin-top:16px; font-size:13px; color:var(--muted);';
    horarioLabel.textContent = '¿En qué horarios solés estar disponible?';
    box.appendChild(horarioLabel);

    const horarios = ['Mañana','Tarde','Noche'];
    const horarioBox = document.createElement('div');
    horarioBox.style.cssText='display:flex; gap:10px; margin-top:8px; flex-wrap:wrap;';
    horarios.forEach(h=>{
      const chip = document.createElement('label');
      chip.style.cssText='display:flex; align-items:center; gap:6px; padding:8px 12px; border-radius:10px; border:1px solid var(--border); cursor:pointer;';
      const chk = document.createElement('input');
      chk.type = 'checkbox'; chk.value = h; chk.className = 'psHorarioChk';
      chip.appendChild(chk);
      chip.appendChild(document.createTextNode(h));
      horarioBox.appendChild(chip);
    });
    box.appendChild(horarioBox);

    const buscarBtn = document.createElement('button');
    buscarBtn.className = 'primary';
    buscarBtn.style.marginTop = '20px';
    buscarBtn.textContent = '🔎 Buscar compañero de práctica';
    buscarBtn.onclick = ()=>{
      const nombre = nombreInput.value.trim();
      if(!nombre){ nombreInput.style.borderColor='var(--warn)'; return; }
      const slots = Array.from(document.querySelectorAll('.psHorarioChk:checked')).map(c=>c.value);
      buscarCompanero(dayNum, nombre, slots);
    };
    box.appendChild(buscarBtn);

    const volverBtn = document.createElement('button');
    volverBtn.className = 'ghost';
    volverBtn.style.marginTop = '10px';
    volverBtn.textContent = '← Volver al inicio';
    volverBtn.onclick = volverAlInicio;
    box.appendChild(volverBtn);
  }

  // ---------- Buscar compañero (llama a la función RPC) ----------
  async function buscarCompanero(dayNum, nombre, slots){
    const box = el('practicaSocialBox');
    box.innerHTML = '<h2>🔎 Buscando un compañero...</h2><p class="sub">Esto puede tardar un momento si nadie está disponible ahora mismo. No cierres esta pantalla.</p>';

    const { data, error } = await supabaseClient.rpc('buscar_companero_practica', {
      p_day_number: dayNum,
      p_first_name: nombre,
      p_time_slots: slots
    });

    if(error){
      box.innerHTML += '<p style="color:var(--warn);">Hubo un problema buscando un compañero. Intenta de nuevo en un momento.</p>';
      const volverBtn = document.createElement('button');
      volverBtn.className='ghost'; volverBtn.textContent='← Volver'; volverBtn.onclick=renderOptIn;
      box.appendChild(volverBtn);
      return;
    }

    const resultado = data && data[0];
    if(!resultado || !resultado.pair_id){
      // Nadie disponible todavía — reintenta cada 8 segundos, hasta que salga
      box.innerHTML += '<p style="font-size:13px; color:var(--muted); margin-top:10px;">Nadie disponible de tu nivel en este momento. Vamos a seguir buscando automáticamente...</p>';
      if(buscandoInterval) clearInterval(buscandoInterval);
      buscandoInterval = setInterval(()=>buscarCompanero(dayNum, nombre, slots), 8000);
      const cancelarBtn = document.createElement('button');
      cancelarBtn.className='ghost'; cancelarBtn.style.marginTop='14px';
      cancelarBtn.textContent='Cancelar búsqueda';
      cancelarBtn.onclick = async ()=>{
        if(buscandoInterval) clearInterval(buscandoInterval);
        if(currentUser){
          await supabaseClient.from('practice_availability').update({ available:false }).eq('user_id', currentUser.id);
        }
        renderOptIn();
      };
      box.appendChild(cancelarBtn);
      return;
    }

    if(buscandoInterval){ clearInterval(buscandoInterval); buscandoInterval=null; }

    // Encontró pareja — si el diálogo todavía no se llenó, elegimos al azar
    // uno de los últimos 7 días que ambos ya completaron, y lo guardamos.
    if(!resultado.dialogue || resultado.dialogue.length===0){
      const diaElegido = diaAlAzarDeLosUltimos7(resultado.day_number || dayNum);
      const lineas = dailyMiniDialogue[diaElegido] || dailyMiniDialogue[dayNum] || [];
      await supabaseClient.from('practice_pairs')
        .update({ dialogue: lineas, day_number: diaElegido })
        .eq('id', resultado.pair_id)
        .eq('dialogue', '[]');
    }

    const { data: parejaCompleta } = await supabaseClient
      .from('practice_pairs').select('*').eq('id', resultado.pair_id).single();

    if(parejaCompleta){
      await cargarPareja(parejaCompleta);
      renderSesion();
    }
  }

  // ---------- Cargar el estado de una pareja + turnos ya dichos ----------
  async function cargarPareja(pareja){
    const { data: turnos } = await supabaseClient
      .from('practice_turns').select('*').eq('pair_id', pareja.id).eq('ronda', pareja.ronda).order('line_index',{ascending:true});
    pairState = {
      id: pareja.id,
      dayNumber: pareja.day_number,
      dialogue: pareja.dialogue || [],
      soyMaestro: currentUser.id === pareja.maestro_actual,
      userA: pareja.user_a,
      ronda: pareja.ronda,
      expiresAt: pareja.expires_at,
      status: pareja.status
    };
    turnosDichos = turnos ? turnos.length : 0;
    suscribirseARealtime(pareja.id);

    // Traemos el nombre del compañero
    const otroId = (currentUser.id === pareja.user_a) ? pareja.user_b : pareja.user_a;
    pairState.partnerId = otroId;
    const { data: otroPerfil } = await supabaseClient
      .from('practice_availability').select('first_name').eq('user_id', otroId).maybeSingle();
    pairState.partnerName = (otroPerfil && otroPerfil.first_name) || 'tu compañero';

    // ¿Ya calificó esta ronda?
    const { data: calificacionPrevia } = await supabaseClient
      .from('practice_ratings').select('id').eq('pair_id', pareja.id).eq('ronda', pareja.ronda).eq('rater_id', currentUser.id).maybeSingle();
    pairState.yaCalifique = !!calificacionPrevia;
    pairState.completionRegistrada = false;
  }

  function suscribirseARealtime(pairId){
    if(realtimeChannel) supabaseClient.removeChannel(realtimeChannel);
    realtimeChannel = supabaseClient.channel('practica_'+pairId)
      .on('postgres_changes', { event:'INSERT', schema:'public', table:'practice_turns', filter:'pair_id=eq.'+pairId }, (payload)=>{
        if(!pairState || payload.new.ronda !== pairState.ronda) return;
        turnosDichos = Math.max(turnosDichos, payload.new.line_index+1);
        renderSesion();
      })
      .on('postgres_changes', { event:'UPDATE', schema:'public', table:'practice_pairs', filter:'id=eq.'+pairId }, async (payload)=>{
        if(payload.new.status !== 'active'){ if(pairState) pairState.status = payload.new.status; renderCerrada(payload.new.status); return; }
        if(pairState && payload.new.ronda !== pairState.ronda){
          // El otro alumno ya avanzó de ronda — nos ponemos al día
          if(!payload.new.dialogue || payload.new.dialogue.length===0){
            const lineas = dailyMiniDialogue[payload.new.day_number] || [];
            if(lineas.length){
              await supabaseClient.from('practice_pairs').update({ dialogue: lineas }).eq('id', pairId).eq('ronda', payload.new.ronda);
            }
          }
          const { data: parejaActualizada } = await supabaseClient.from('practice_pairs').select('*').eq('id', pairId).single();
          if(parejaActualizada){ await cargarPareja(parejaActualizada); renderSesion(); }
        }
      })
      .subscribe();
  }

  // ---------- Pantalla: sesión de práctica en curso ----------
  function renderSesion(){
    if(!pairState) return;
    const diasRestantes = Math.max(0, Math.ceil((new Date(pairState.expiresAt) - new Date())/(1000*60*60*24)));
    const box = el('practicaSocialBox');
    box.innerHTML = '';

    const header = document.createElement('div');
    header.style.cssText='display:flex; align-items:center; justify-content:space-between; padding-bottom:12px; border-bottom:1px solid var(--border); margin-bottom:14px;';
    const infoDiv = document.createElement('div');
    infoDiv.innerHTML = '<b>'+pairState.partnerName+'</b><br><span style="font-size:12px; color:var(--muted);">Día '+pairState.dayNumber+' · practicando juntos: '+(8-diasRestantes)+' de 7 días</span>';
    header.appendChild(infoDiv);
    const seguridadBtn = document.createElement('button');
    seguridadBtn.className='ghost'; seguridadBtn.style.cssText='min-height:36px; padding:6px 10px;';
    seguridadBtn.textContent='🛡️';
    seguridadBtn.title='Reportar o salir';
    seguridadBtn.onclick = mostrarOpcionesSeguridad;
    header.appendChild(seguridadBtn);
    box.appendChild(header);

    const hint = document.createElement('p');
    hint.style.cssText='font-size:12px; color:var(--muted); text-align:center; margin-bottom:12px;';
    hint.textContent = 'Solo pueden usarse las líneas del diálogo de hoy — no hay campo de texto libre.';
    box.appendChild(hint);

    const hilo = document.createElement('div');
    hilo.style.cssText='display:flex; flex-direction:column; gap:10px; margin-bottom:16px;';
    pairState.dialogue.slice(0, turnosDichos).forEach(linea=>{
      const soyYoElQueHabla = (linea.speaker==='maestro') === pairState.soyMaestro;
      const fila = document.createElement('div');
      fila.style.cssText='align-self:'+(soyYoElQueHabla?'flex-end':'flex-start')+'; max-width:78%;';
      fila.innerHTML = '<div style="background:'+(soyYoElQueHabla?'rgba(79,182,232,.18)':'var(--bg-panel-2)')+'; border-radius:12px; padding:8px 12px; font-size:14px;">'+linea.en+'</div>';
      hilo.appendChild(fila);
    });
    box.appendChild(hilo);

    if(turnosDichos >= pairState.dialogue.length){
      const fin = document.createElement('p');
      fin.style.cssText='text-align:center; color:var(--ok); font-size:14px;';
      fin.textContent = '✓ ¡Terminaron el diálogo de hoy! ¿Practicamos de nuevo, con el diálogo del día siguiente?';
      box.appendChild(fin);

      if(!pairState.completionRegistrada){
        pairState.completionRegistrada = true;
        registrarCompletadoYRevisarPremio(box);
      }

      if(!pairState.yaCalifique){
        renderCalificacion(box);
      } else {
        const gracias = document.createElement('p');
        gracias.style.cssText='text-align:center; font-size:12px; color:var(--muted); margin-bottom:10px;';
        gracias.textContent = '✓ Ya calificaste esta práctica';
        box.appendChild(gracias);
      }

      const nuevoRolTexto = pairState.soyMaestro ? 'ahora te toca ser alumno' : 'ahora te toca ser maestro';
      const cambiarBtn = document.createElement('button');
      cambiarBtn.className = 'primary';
      cambiarBtn.style.width = '100%';
      cambiarBtn.textContent = '🔄 Practicar de nuevo — '+nuevoRolTexto;
      cambiarBtn.onclick = ()=>siguienteRonda();
      box.appendChild(cambiarBtn);
    } else {
      const lineaActual = pairState.dialogue[turnosDichos];
      const esMiTurno = (lineaActual.speaker==='maestro') === pairState.soyMaestro;
      const turnoBtn = document.createElement('button');
      turnoBtn.className = 'primary';
      turnoBtn.style.width = '100%';
      if(esMiTurno){
        turnoBtn.textContent = '🎙 Decir mi línea';
        turnoBtn.onclick = ()=>escucharYVerificar(lineaActual);
      } else {
        turnoBtn.textContent = 'Esperando a '+pairState.partnerName+'...';
        turnoBtn.disabled = true;
      }
      box.appendChild(turnoBtn);
      if(!esMiTurno){
        const inactivoBtn = document.createElement('button');
        inactivoBtn.className = 'ghost';
        inactivoBtn.style.cssText = 'width:100%; margin-top:8px; font-size:13px;';
        inactivoBtn.textContent = 'Mi compañero no responde — terminar esta práctica';
        inactivoBtn.onclick = ()=>{
          if(confirm('¿Terminar esta práctica porque tu compañero no responde?')){
            supabaseClient.rpc('salir_practica', { p_pair_id: pairState.id }).then(volverAlInicio);
          }
        };
        box.appendChild(inactivoBtn);
      }
    }

    const salirBtn = document.createElement('button');
    salirBtn.className = 'ghost';
    salirBtn.style.marginTop = '14px';
    salirBtn.textContent = '← Volver al inicio (sin salir de la práctica)';
    salirBtn.onclick = volverAlInicio;
    box.appendChild(salirBtn);
  }

  // ---------- Escuchar por voz y verificar contra la línea esperada ----------
  function escucharYVerificar(lineaEsperada){
    if(!micSupported || !recognition){
      alert('Tu navegador no soporta reconocimiento de voz.');
      return;
    }
    recognition.onresult = null; recognition.onend = null; recognition.onerror = null;
    try{ recognition.abort(); }catch(e){}
    recognition.continuous = false;
    recognition.onresult = async (e)=>{
      const dicho = e.results[0][0].transcript;
      if(saidMatches(lineaEsperada.en, dicho)){
        await supabaseClient.from('practice_turns').insert({
          pair_id: pairState.id, line_index: turnosDichos, spoken_by: currentUser.id, ronda: pairState.ronda
        });
        turnosDichos++;
        renderSesion();
      } else {
        mostrarAlertaNoCoincide();
      }
    };
    recognition.onerror = ()=>{ mostrarAlertaNoCoincide(); };
    try{ recognition.start(); }catch(e){}
  }

  function mostrarAlertaNoCoincide(){
    const box = el('practicaSocialBox');
    const alerta = document.createElement('div');
    alerta.style.cssText='background:rgba(230,106,92,.12); border:1px solid var(--warn); border-radius:10px; padding:10px 14px; margin-top:10px; font-size:13px; color:var(--warn);';
    alerta.textContent = 'Eso no es parte del diálogo — no se envió. Repite la línea que estás practicando.';
    box.appendChild(alerta);
  }

  // ---------- Calificar al compañero (1 a 5) al terminar la ronda ----------
  function renderCalificacion(box){
    const contenedor = document.createElement('div');
    contenedor.style.cssText='text-align:center; margin-bottom:14px;';
    const etiqueta = document.createElement('p');
    etiqueta.style.cssText='font-size:13px; color:var(--muted); margin-bottom:6px;';
    etiqueta.textContent = 'Califica a '+pairState.partnerName+' en esta práctica:';
    contenedor.appendChild(etiqueta);

    const estrellasBox = document.createElement('div');
    estrellasBox.style.cssText='display:flex; justify-content:center; gap:8px;';
    for(let i=1; i<=5; i++){
      const estrella = document.createElement('button');
      estrella.className = 'ghost';
      estrella.style.cssText='min-height:40px; min-width:40px; padding:0; font-size:20px;';
      estrella.textContent = '☆';
      estrella.dataset.valor = i;
      estrella.onclick = ()=>enviarCalificacion(i);
      estrellasBox.appendChild(estrella);
    }
    contenedor.appendChild(estrellasBox);
    box.appendChild(contenedor);
  }

  async function enviarCalificacion(score){
    await supabaseClient.from('practice_ratings').insert({
      pair_id: pairState.id, ronda: pairState.ronda,
      rater_id: currentUser.id, rated_id: pairState.partnerId, score: score
    });
    pairState.yaCalifique = true;
    renderSesion();
  }

  // ---------- Registrar práctica completada, y ver si desbloqueó un premio ----------
  const MODULOS_PREMIO = [
    { slug:'dragon_nativo', nombre:'🐉 El Dragón Nativo' },
    { slug:'cognados', nombre:'🔑 Diccionario de Cognados' },
    { slug:'fonetica', nombre:'🗣️ Fonética' },
    { slug:'karaoke', nombre:'🎤 Karaoke' }
  ];

  async function registrarCompletadoYRevisarPremio(box){
    try{
      await supabaseClient.from('practice_completions').insert({
        user_id: currentUser.id, pair_id: pairState.id, ronda: pairState.ronda
      });
    } catch(e){ /* ya estaba registrada — no pasa nada */ }

    const { count: totalCompletadas } = await supabaseClient
      .from('practice_completions').select('*', {count:'exact', head:true}).eq('user_id', currentUser.id);
    const { data: progresoModulos } = await supabaseClient
      .from('practice_reward_progress').select('module_slug, unidades').eq('user_id', currentUser.id);
    const unidadesTotalesYaCanjeadas = (progresoModulos||[]).reduce((s,p)=>s+p.unidades, 0);

    const metasAlcanzadas = Math.floor((totalCompletadas||0) / 10);
    if(unidadesTotalesYaCanjeadas >= metasAlcanzadas) return; // todavía no hay una nueva unidad para canjear

    const premioBox = document.createElement('div');
    premioBox.style.cssText = 'background:rgba(111,207,151,.12); border:1px solid var(--ok); border-radius:12px; padding:14px; margin:14px 0; text-align:center;';
    premioBox.innerHTML = '<b style="font-size:14px;">🎁 ¡Desbloqueaste una recompensa!</b><p style="font-size:13px; margin:6px 0 10px;">Ya completaste '+totalCompletadas+' prácticas colaborando con otros alumnos.</p>';

    const reclamarBtn = document.createElement('button');
    reclamarBtn.className = 'primary'; reclamarBtn.style.width = '100%';
    reclamarBtn.textContent = '🎁 Reclamar recompensa';
    reclamarBtn.onclick = ()=>{
      premioBox.innerHTML = '<p style="font-size:13px; margin-bottom:10px;">Elegí en cuál módulo querés avanzar un paso más:</p>';
      MODULOS_PREMIO.forEach(m=>{
        const btn = document.createElement('button');
        btn.className = 'ghost'; btn.style.cssText = 'width:100%; margin-bottom:6px;';
        btn.textContent = m.nombre;
        btn.onclick = async ()=>{
          const { data: nuevasUnidades } = await supabaseClient.rpc('avanzar_unidad_modulo', { p_module_slug: m.slug });
          premioBox.innerHTML = '<p style="text-align:center; color:var(--ok);">✓ ¡Avanzaste en '+m.nombre+'! Ahora tenés '+nuevasUnidades+' unidad(es) desbloqueada(s) ahí. Ya lo podés ver desde la pantalla principal.</p>';
        };
        premioBox.appendChild(btn);
      });
    };
    premioBox.appendChild(reclamarBtn);

    box.insertBefore(premioBox, box.firstChild.nextSibling);
  }

  // ---------- Pasar a la siguiente ronda: día siguiente, con o sin cambio de roles ----------
  async function siguienteRonda(){
    const box = el('practicaSocialBox');
    box.innerHTML = '<h2>Preparando la siguiente práctica...</h2>';
    const { data, error } = await supabaseClient.rpc('siguiente_ronda_practica', {
      p_pair_id: pairState.id, p_cambiar_roles: true
    });
    if(error){
      alert('No se pudo avanzar a la siguiente ronda. Puede que la práctica ya haya vencido.');
      volverAlInicio();
      return;
    }
    const resultado = data && data[0];
    if(resultado){
      const diaElegido = diaAlAzarDeLosUltimos7(resultado.nuevo_dia);
      const lineas = dailyMiniDialogue[diaElegido] || [];
      await supabaseClient.from('practice_pairs')
        .update({ dialogue: lineas, day_number: diaElegido })
        .eq('id', pairState.id)
        .eq('ronda', resultado.nueva_ronda);
    }
    const { data: parejaActualizada } = await supabaseClient.from('practice_pairs').select('*').eq('id', pairState.id).single();
    if(parejaActualizada){
      await cargarPareja(parejaActualizada);
      renderSesion();
    }
  }

  // ---------- Seguridad: reportar o salir ----------
  function mostrarOpcionesSeguridad(){
    const salir = confirm('¿Querés salir de esta práctica? Aceptar = salir. Cancelar = seguir practicando.');
    if(salir){
      supabaseClient.rpc('salir_practica', { p_pair_id: pairState.id }).then(()=>{
        volverAlInicio();
      });
      return;
    }
    const reportar = confirm('¿Querés reportar a este compañero por comportamiento inapropiado?');
    if(reportar){
      const motivo = prompt('Contanos brevemente qué pasó (esto queda registrado):') || 'Sin detalle';
      supabaseClient.rpc('reportar_companero_practica', { p_pair_id: pairState.id, p_reason: motivo }).then(()=>{
        alert('Gracias — el reporte quedó registrado y esta práctica se cerró.');
        volverAlInicio();
      });
    }
  }

  function renderCerrada(status){
    const box = el('practicaSocialBox');
    box.innerHTML = '<h2>Esta práctica se cerró</h2><p class="sub">'+(status==='reported' ? 'Se cerró por un reporte de seguridad.' : 'Ya no está activa.')+'</p>';
    const volverBtn = document.createElement('button');
    volverBtn.className='primary'; volverBtn.textContent='← Volver al inicio';
    volverBtn.onclick = volverAlInicio;
    box.appendChild(volverBtn);
  }

  // ---------- Pantalla: mi asesoría personalizada con Robinson ----------
  async function renderAsesoria(){
    const box = el('practicaSocialBox');
    box.innerHTML = '<h2>📋 Cargando tu asesoría...</h2>';

    const { data: asesoriaAbierta } = await supabaseClient
      .from('asesorias').select('*').eq('user_id', currentUser.id).eq('estado','abierta').order('created_at',{ascending:false}).maybeSingle();

    if(asesoriaAbierta){
      renderHiloAsesoria(asesoriaAbierta);
    } else {
      renderNuevaAsesoria();
    }
  }

  async function renderNuevaAsesoria(){
    const box = el('practicaSocialBox');
    box.innerHTML = '';

    const titulo = document.createElement('h2');
    titulo.textContent = '📋 Pedir asesoría personalizada';
    box.appendChild(titulo);

    const intro = document.createElement('p');
    intro.className = 'sub';
    intro.textContent = 'Contale a Robinson qué se te está dificultando. Esto es una conversación directa con él, no con otro alumno — no hay límites de tiempo ni de formato.';
    box.appendChild(intro);

    const { data: calificacionesBajas } = await supabaseClient
      .from('practice_ratings').select('score, ronda, pair_id, practice_pairs(day_number)').eq('rated_id', currentUser.id).lte('score', 3).order('created_at',{ascending:false}).limit(5);
    const diasBajos = (calificacionesBajas || []).map(r => r.practice_pairs ? r.practice_pairs.day_number : null).filter(Boolean);

    if(diasBajos.length){
      const diasInfo = document.createElement('p');
      diasInfo.style.cssText = 'font-size:13px; color:var(--muted); margin-bottom:10px;';
      diasInfo.textContent = 'Días donde tuviste calificación baja en prácticas: '+diasBajos.join(', ');
      box.appendChild(diasInfo);
    }

    const textarea = document.createElement('textarea');
    textarea.id = 'psAsesoriaTexto';
    textarea.placeholder = 'Contame qué se te dificulta...';
    textarea.style.cssText = 'width:100%; min-height:100px; padding:12px; border-radius:10px; border:1px solid var(--border); background:var(--bg-panel-2); color:var(--ink); font-family:inherit;';
    box.appendChild(textarea);

    const enviarBtn = document.createElement('button');
    enviarBtn.className = 'primary'; enviarBtn.style.cssText = 'width:100%; margin-top:12px;';
    enviarBtn.textContent = 'Enviar';
    enviarBtn.onclick = async ()=>{
      const mensaje = textarea.value.trim();
      if(!mensaje) return;
      const { data: nuevaAsesoria } = await supabaseClient.from('asesorias')
        .insert({ user_id: currentUser.id, dias_bajos: diasBajos }).select().single();
      if(nuevaAsesoria){
        await supabaseClient.from('asesoria_mensajes').insert({
          asesoria_id: nuevaAsesoria.id, autor_id: currentUser.id, es_admin: false, mensaje: mensaje
        });
        renderHiloAsesoria(nuevaAsesoria);
      }
    };
    box.appendChild(enviarBtn);

    const volverBtn = document.createElement('button');
    volverBtn.className = 'ghost'; volverBtn.style.marginTop = '10px';
    volverBtn.textContent = '← Volver';
    volverBtn.onclick = renderOptIn;
    box.appendChild(volverBtn);
  }

  async function renderHiloAsesoria(asesoria){
    const box = el('practicaSocialBox');
    box.innerHTML = '<h2>📋 Tu asesoría con Robinson</h2>';

    const { data: mensajes } = await supabaseClient
      .from('asesoria_mensajes').select('*').eq('asesoria_id', asesoria.id).order('created_at',{ascending:true});

    const hilo = document.createElement('div');
    hilo.style.cssText = 'display:flex; flex-direction:column; gap:10px; margin:14px 0;';
    (mensajes||[]).forEach(m=>{
      const fila = document.createElement('div');
      fila.style.cssText = 'align-self:'+(m.es_admin?'flex-start':'flex-end')+'; max-width:82%;';
      fila.innerHTML = '<p style="font-size:11px; color:var(--muted); margin:0 0 2px;">'+(m.es_admin?'Robinson':'Vos')+'</p><div style="background:'+(m.es_admin?'var(--bg-panel-2)':'rgba(79,182,232,.18)')+'; border-radius:12px; padding:8px 12px; font-size:14px;">'+m.mensaje+'</div>';
      hilo.appendChild(fila);
    });
    box.appendChild(hilo);

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Escribir otro mensaje...';
    textarea.style.cssText = 'width:100%; min-height:70px; padding:10px; border-radius:10px; border:1px solid var(--border); background:var(--bg-panel-2); color:var(--ink); font-family:inherit;';
    box.appendChild(textarea);

    const enviarBtn = document.createElement('button');
    enviarBtn.className = 'primary'; enviarBtn.style.cssText = 'width:100%; margin-top:10px;';
    enviarBtn.textContent = 'Enviar mensaje';
    enviarBtn.onclick = async ()=>{
      const mensaje = textarea.value.trim();
      if(!mensaje) return;
      await supabaseClient.from('asesoria_mensajes').insert({
        asesoria_id: asesoria.id, autor_id: currentUser.id, es_admin: false, mensaje: mensaje
      });
      renderHiloAsesoria(asesoria);
    };
    box.appendChild(enviarBtn);

    const volverBtn = document.createElement('button');
    volverBtn.className = 'ghost'; volverBtn.style.marginTop = '10px';
    volverBtn.textContent = '← Volver';
    volverBtn.onclick = renderOptIn;
    box.appendChild(volverBtn);
  }

  // ---------- Bloquear/desbloquear los 4 módulos según premios ganados ----------
  // Karaoke suma un requisito extra (Día 15+) al mismo sistema de unidades.
  const TARJETAS_PREMIO = {
    dragon_nativo: { card:'dnEntryCard', btn:'dnEntryBtn' },
    cognados: { card:'cgEntryCard', btn:'cgEntryBtn' },
    fonetica: { card:'fnEntryCard', btn:'fnEntryBtn' },
    karaoke: { card:'kkEntryCard', btn:'kkEntryBtn' }
  };

  async function aplicarBloqueosPremios(){
    if(!currentUser) return;

    // Traemos y cacheamos cuántas unidades tiene desbloqueadas en cada
    // módulo — cognados.js, fonetica.js, dragonnativo.js y karaoke.js leen
    // este caché (window.premiosModulos) para decidir qué mostrar bloqueado.
    const { data: progresoModulos } = await supabaseClient
      .from('practice_reward_progress').select('module_slug, unidades').eq('user_id', currentUser.id);
    window.premiosModulos = {};
    (progresoModulos||[]).forEach(p=>{ window.premiosModulos[p.module_slug] = p.unidades; });

    if(typeof isAdmin==='function' && isAdmin()) return; // el admin ve todo sin bloqueo visual

    Object.keys(TARJETAS_PREMIO).forEach(slug=>{
      const info = TARJETAS_PREMIO[slug];
      const card = document.getElementById(info.card);
      const btn = document.getElementById(info.btn);
      if(!card || !btn) return;
      const unidades = window.premiosModulos[slug] || 0;

      // Karaoke tiene un requisito extra: además de tener unidades ganadas
      // por colaboración, el alumno debe haber llegado al Día 15.
      if(slug === 'karaoke' && ultimoDiaCompletado() < 14){
        card.style.opacity = '0.6';
        btn.textContent = '🔒 Se abre desde el Día 15';
        btn.onclick = (e)=>{
          e.preventDefault();
          alert('Karaoke se desbloquea a partir del Día 15 del curso, cuando empiezan las canciones reales.');
        };
        return;
      }

      if(unidades > 0){
        card.style.opacity = '';
        btn.disabled = false;
      } else {
        card.style.opacity = '0.6';
        btn.textContent = '🔒 Bloqueado';
        btn.disabled = false; // lo dejamos clickeable para mostrar el mensaje
        btn.onclick = (e)=>{
          e.preventDefault();
          alert('Este módulo se desbloquea de a un paso por vez, completando prácticas con otros alumnos. Andá a "Practicar con otro alumno" para ir sumando.');
        };
      }
    });
  }

  // Los demás módulos (cognados.js, fonetica.js, dragonnativo.js) llaman a
  // esto para saber cuántas unidades tienen desbloqueadas por premios.
  function unidadesDesbloqueadas(moduleSlug){
    return (window.premiosModulos && window.premiosModulos[moduleSlug]) || 0;
  }
  window.unidadesDesbloqueadas = unidadesDesbloqueadas;

  window.mostrarPracticaSocial = mostrarPracticaSocial;
  // ---------- Clase con profesor — cada 48 días completados ----------
  async function mostrarClaseProfesor(){
    document.getElementById('home').style.display='none';
    document.getElementById('claseProfesorModulo').style.display='block';
    const box = document.getElementById('claseProfesorBox');
    box.innerHTML = '<h2>👨‍🏫 Clase con un profesor</h2><p class="sub">Cargando...</p>';

    if(!currentUser){
      box.innerHTML = '<h2>👨‍🏫 Clase con un profesor</h2><p class="sub">Necesitas iniciar sesión.</p>';
      const volverBtnError = document.createElement('button');
      volverBtnError.className='ghost'; volverBtnError.style.marginTop='16px';
      volverBtnError.textContent='← Volver al inicio';
      volverBtnError.onclick = ()=>{ document.getElementById('claseProfesorModulo').style.display='none'; document.getElementById('home').style.display='block'; };
      box.appendChild(volverBtnError);
      return;
    }

    try{
      const diasCompletados = ultimoDiaCompletado();
      const metasAlcanzadas = Math.floor(diasCompletados / 48);

      const { data: misClases } = await supabaseClient
        .from('teacher_bookings').select('*, teacher_availability(fecha_hora, duracion_minutos, profesor_nombre)').eq('user_id', currentUser.id).order('created_at',{ascending:false});
      const creditosUsados = misClases ? misClases.length : 0;
      const creditosDisponibles = metasAlcanzadas - creditosUsados;

      box.innerHTML = '<h2>👨‍🏫 Clase con un profesor</h2><p class="sub">Cada 48 días completados del curso, tenés derecho a una clase de 1 hora en vivo con un profesor real — no estás solo en esto.</p>';

      const progresoBox = document.createElement('div');
      progresoBox.style.cssText='background:var(--bg-panel-2); border-radius:10px; padding:12px; margin-bottom:14px; font-size:13px;';
      progresoBox.textContent = 'Llevás '+diasCompletados+' días completados. '+(metasAlcanzadas>0 ? 'Ya alcanzaste '+metasAlcanzadas+' meta(s) de 48.' : 'Te faltan '+(48-diasCompletados)+' días para tu primera clase.');
      box.appendChild(progresoBox);

      if(misClases && misClases.length){
        const tituloProx = document.createElement('h3');
        tituloProx.style.fontSize='15px';
        tituloProx.textContent = 'Tus clases programadas:';
        box.appendChild(tituloProx);
        misClases.forEach(c=>{
          const fila = document.createElement('p');
          fila.style.cssText='font-size:13px; margin:4px 0;';
          const info = c.teacher_availability;
          fila.textContent = info ? ('📅 '+new Date(info.fecha_hora).toLocaleString('es-CO')+' — con '+info.profesor_nombre) : 'Clase programada';
          box.appendChild(fila);
        });
      }

      if(creditosDisponibles > 0){
        const disp = document.createElement('p');
        disp.style.cssText='color:var(--ok); font-size:14px; margin-top:14px;';
        disp.textContent = 'Tenés '+creditosDisponibles+' clase(s) disponible(s) para programar. Elegí un horario:';
        box.appendChild(disp);

        const { data: horarios } = await supabaseClient
          .from('teacher_availability').select('*').eq('booked', false).gt('fecha_hora', new Date().toISOString()).order('fecha_hora',{ascending:true});

        if(!horarios || horarios.length===0){
          const sinHorarios = document.createElement('p');
          sinHorarios.style.cssText='font-size:13px; color:var(--muted);';
          sinHorarios.textContent = 'No hay horarios abiertos todavía — volvé a revisar más tarde.';
          box.appendChild(sinHorarios);
        } else {
          horarios.forEach(h=>{
            const btn = document.createElement('button');
            btn.className = 'ghost'; btn.style.cssText = 'width:100%; margin-bottom:6px; text-align:left;';
            btn.textContent = '📅 '+new Date(h.fecha_hora).toLocaleString('es-CO')+' ('+h.duracion_minutos+' min, con '+h.profesor_nombre+')';
            btn.onclick = async ()=>{
              const { error } = await supabaseClient.rpc('programar_clase_profesor', {
                p_availability_id: h.id, p_meta_alcanzada: metasAlcanzadas
              });
              if(error){ alert('Ese horario ya no está disponible — elegí otro.'); mostrarClaseProfesor(); return; }
              alert('¡Clase programada! Te esperamos ese día.');
              mostrarClaseProfesor();
            };
            box.appendChild(btn);
          });
        }
      }

    } catch(e){
      box.innerHTML = '<h2>👨‍🏫 Clase con un profesor</h2><p class="sub">Hubo un problema cargando tus datos. Probá de nuevo en un momento.</p>';
    }

    const volverBtn = document.createElement('button');
    volverBtn.className='ghost'; volverBtn.style.marginTop='16px';
    volverBtn.textContent='← Volver al inicio';
    volverBtn.onclick = ()=>{ document.getElementById('claseProfesorModulo').style.display='none'; document.getElementById('home').style.display='block'; };
    box.appendChild(volverBtn);
  }

  window.mostrarClaseProfesor = mostrarClaseProfesor;
  window.aplicarBloqueosPremios = aplicarBloqueosPremios;
  window.ultimoDiaCompletado = ultimoDiaCompletado;
})();
