// Módulo de Cognados — módulo independiente, 22 reglas de conversión español-inglés.
// Este archivo es autónomo: no toca ni depende del motor del curso principal (motor.js),
// salvo por las funciones compartidas speakHidden() y practicaAnswerMatches() ya definidas ahí.
// Arrancamos con las Reglas 1-3 completas; las demás se agregan de la misma forma.

REGLA1_PALABRAS = [
      {es:"nación", en:"nation"},
      {es:"información", en:"information"},
      {es:"comunicación", en:"communication"},
      {es:"conversación", en:"conversation"},
      {es:"explicación", en:"explanation"},
      {es:"traducción", en:"translation"},
      {es:"pronunciación", en:"pronunciation"},
      {es:"declaración", en:"declaration"},
      {es:"descripción", en:"description"},
      {es:"interpretación", en:"interpretation"},
      {es:"narración", en:"narration"},
      {es:"afirmación", en:"affirmation"},
      {es:"negación", en:"negation"},
      {es:"mención", en:"mention"},
      {es:"expresión", en:"expression"},
      {es:"organización", en:"organization"},
      {es:"operación", en:"operation"},
      {es:"administración", en:"administration"},
      {es:"presentación", en:"presentation"},
      {es:"negociación", en:"negotiation"},
      {es:"confirmación", en:"confirmation"},
      {es:"evaluación", en:"evaluation"},
      {es:"cooperación", en:"cooperation"},
      {es:"invención", en:"invention"},
      {es:"cotización", en:"quotation"},
      {es:"distribución", en:"distribution"},
      {es:"producción", en:"production"},
      {es:"exportación", en:"exportation"},
      {es:"importación", en:"importation"},
      {es:"recomendación", en:"recommendation"},
      {es:"aplicación", en:"application"},
      {es:"clasificación", en:"classification"},
      {es:"compensación", en:"compensation"},
      {es:"promoción", en:"promotion"},
      {es:"regulación", en:"regulation"},
      {es:"transacción", en:"transaction"},
      {es:"suscripción", en:"subscription"},
      {es:"adquisición", en:"acquisition"},
      {es:"educación", en:"education"},
      {es:"situación", en:"situation"},
      {es:"población", en:"population"},
      {es:"preparación", en:"preparation"},
      {es:"participación", en:"participation"},
      {es:"generación", en:"generation"},
      {es:"motivación", en:"motivation"},
      {es:"publicación", en:"publication"},
      {es:"investigación", en:"investigation"},
      {es:"observación", en:"observation"},
      {es:"consideración", en:"consideration"},
      {es:"acumulación", en:"accumulation"},
      {es:"graduación", en:"graduation"},
      {es:"instrucción", en:"instruction"},
      {es:"institución", en:"institution"},
      {es:"formación", en:"formation"},
      {es:"orientación", en:"orientation"},
      {es:"calificación", en:"qualification"},
      {es:"certificación", en:"certification"},
      {es:"verificación", en:"verification"},
      {es:"determinación", en:"determination"},
      {es:"dedicación", en:"dedication"},
      {es:"innovación", en:"innovation"},
      {es:"transformación", en:"transformation"},
      {es:"configuración", en:"configuration"},
      {es:"instalación", en:"installation"},
      {es:"automatización", en:"automation"},
      {es:"digitalización", en:"digitalization"},
      {es:"codificación", en:"codification"},
      {es:"conexión", en:"connection"},
      {es:"notificación", en:"notification"},
      {es:"autenticación", en:"authentication"},
      {es:"navegación", en:"navigation"},
      {es:"simulación", en:"simulation"},
      {es:"optimización", en:"optimization"},
      {es:"integración", en:"integration"},
      {es:"celebración", en:"celebration"},
      {es:"invitación", en:"invitation"},
      {es:"reputación", en:"reputation"},
      {es:"admiración", en:"admiration"},
      {es:"inspiración", en:"inspiration"},
      {es:"frustración", en:"frustration"},
      {es:"satisfacción", en:"satisfaction"},
      {es:"adoración", en:"adoration"},
      {es:"tentación", en:"temptation"},
      {es:"emoción", en:"emotion"},
      {es:"sensación", en:"sensation"},
      {es:"imaginación", en:"imagination"},
      {es:"intención", en:"intention"},
      {es:"dirección", en:"direction"},
      {es:"atención", en:"attention"},
      {es:"relación", en:"relation"},
      {es:"condición", en:"condition"},
      {es:"posición", en:"position"},
      {es:"acción", en:"action"},
      {es:"reacción", en:"reaction"},
      {es:"interacción", en:"interaction"},
      {es:"infección", en:"infection"},
      {es:"inyección", en:"injection"},
      {es:"vacunación", en:"vaccination"},
      {es:"respiración", en:"respiration"},
      {es:"digestión", en:"digestion"},
      {es:"circulación", en:"circulation"},
      {es:"radiación", en:"radiation"},
      {es:"mutación", en:"mutation"},
      {es:"evolución", en:"evolution"},
      {es:"revolución", en:"revolution"},
      {es:"solución", en:"solution"},
      {es:"contaminación", en:"contamination"},
      {es:"purificación", en:"purification"},
      {es:"hidratación", en:"hydration"},
      {es:"estación", en:"station"},
      {es:"función", en:"function"},
      {es:"porción", en:"portion"},
      {es:"colección", en:"collection"},
      {es:"selección", en:"selection"},
      {es:"sección", en:"section"},
      {es:"fracción", en:"fraction"},
      {es:"perfección", en:"perfection"},
      {es:"protección", en:"protection"},
      {es:"corrección", en:"correction"},
      {es:"construcción", en:"construction"},
      {es:"destrucción", en:"destruction"},
      {es:"introducción", en:"introduction"},
      {es:"reducción", en:"reduction"},
      {es:"deducción", en:"deduction"},
      {es:"seducción", en:"seduction"},
      {es:"legislación", en:"legislation"},
      {es:"jurisdicción", en:"jurisdiction"},
      {es:"constitución", en:"constitution"},
      {es:"elección", en:"election"},
      {es:"delegación", en:"delegation"},
      {es:"deportación", en:"deportation"},
      {es:"extradición", en:"extradition"},
      {es:"revocación", en:"revocation"},
      {es:"ratificación", en:"ratification"},
      {es:"inauguración", en:"inauguration"},
      {es:"abolición", en:"abolition"},
      {es:"ejecución", en:"execution"},
      {es:"sanción", en:"sanction"},
      {es:"moción", en:"motion"},
      {es:"liquidación", en:"liquidation"},
      {es:"cancelación", en:"cancellation"},
      {es:"renovación", en:"renovation"},
      {es:"restauración", en:"restoration"},
      {es:"restitución", en:"restitution"},
      {es:"autorización", en:"authorization"},
      {es:"reservación", en:"reservation"},
      {es:"especulación", en:"speculation"},
      {es:"consolidación", en:"consolidation"},
      {es:"diversificación", en:"diversification"},
      {es:"capitalización", en:"capitalization"},
      {es:"especialización", en:"specialization"},
      {es:"industrialización", en:"industrialization"},
      {es:"globalización", en:"globalization"},
      {es:"urbanización", en:"urbanization"},
      {es:"personalización", en:"personalization"},
      {es:"socialización", en:"socialization"},
      {es:"civilización", en:"civilization"},
      {es:"colonización", en:"colonization"},
      {es:"realización", en:"realization"},
      {es:"utilización", en:"utilization"},
      {es:"fabricación", en:"fabrication"},
      {es:"fermentación", en:"fermentation"},
      {es:"evaporación", en:"evaporation"},
      {es:"condensación", en:"condensation"},
      {es:"cristalización", en:"crystallization"},
      {es:"oxidación", en:"oxidation"},
      {es:"fertilización", en:"fertilization"},
      {es:"germinación", en:"germination"},
      {es:"incubación", en:"incubation"},
      {es:"decoración", en:"decoration"},
      {es:"demostración", en:"demonstration"},
      {es:"conservación", en:"conservation"},
      {es:"preservación", en:"preservation"},
      {es:"alteración", en:"alteration"},
      {es:"modificación", en:"modification"},
      {es:"sustitución", en:"substitution"},
      {es:"restricción", en:"restriction"},
      {es:"discriminación", en:"discrimination"},
      {es:"migración", en:"migration"},
      {es:"inmigración", en:"immigration"},
      {es:"emigración", en:"emigration"},
      {es:"puntuación", en:"punctuation"},
      {es:"saturación", en:"saturation"},
      {es:"adaptación", en:"adaptation"},
      {es:"manifestación", en:"manifestation"},
      {es:"fijación", en:"fixation"},
      {es:"alucinación", en:"hallucination"},
      {es:"meditación", en:"meditation"},
      {es:"relajación", en:"relaxation"},
      {es:"concentración", en:"concentration"},
      {es:"indignación", en:"indignation"},
      {es:"veneración", en:"veneration"},
      {es:"contemplación", en:"contemplation"},
      {es:"separación", en:"separation"},
      {es:"reconciliación", en:"reconciliation"},
      {es:"asociación", en:"association"},
      {es:"afiliación", en:"affiliation"},
      {es:"federación", en:"federation"},
      {es:"coalición", en:"coalition"},
      {es:"elevación", en:"elevation"},
      {es:"inclinación", en:"inclination"},
      {es:"localización", en:"localization"},
      {es:"reparación", en:"reparation"},
      {es:"abdicación", en:"abdication"},
      {es:"aclamación", en:"acclamation"},
      {es:"agitación", en:"agitation"},
      {es:"aglomeración", en:"agglomeration"},
      {es:"alegación", en:"allegation"},
      {es:"animación", en:"animation"},
      {es:"anticipación", en:"anticipation"},
      {es:"asimilación", en:"assimilation"},
      {es:"colaboración", en:"collaboration"},
      {es:"combinación", en:"combination"},
      {es:"conmemoración", en:"commemoration"},
      {es:"compilación", en:"compilation"},
      {es:"condenación", en:"condemnation"},
      {es:"confiscación", en:"confiscation"},
      {es:"congregación", en:"congregation"},
      {es:"constelación", en:"constellation"},
      {es:"consternación", en:"consternation"},
      {es:"continuación", en:"continuation"},
      {es:"coronación", en:"coronation"},
      {es:"corporación", en:"corporation"},
      {es:"correlación", en:"correlation"},
      {es:"corroboración", en:"corroboration"},
      {es:"creación", en:"creation"},
      {es:"degeneración", en:"degeneration"},
      {es:"degradación", en:"degradation"},
      {es:"aviación", en:"aviation"},
      {es:"atracción", en:"attraction"},
      {es:"ficción", en:"fiction"}
    ];

REGLA1_EXCEPCIONES = [
      {es:"facturación", nota:"invoicing (no termina en -tion)"},
      {es:"programación", nota:"programming (no termina en -tion)"},
      {es:"actualización", nota:"update (no termina en -tion)"},
      {es:"conducción", nota:"driving en tránsito, o conduction en física — dos significados"},
      {es:"asesinato", nota:"assassination (NO usa -ción — el sustantivo español para \"asesinar\" es irregular)"},
      {es:"enfrentamiento", nota:"confrontation (NO usa -ción — el español prefiere \"enfrentamiento\")"},
      {es:"consuelo", nota:"consolation (NO usa -ción como palabra común — \"consolación\" existe pero es formal/religiosa)"},
      {es:"cultivo", nota:"cultivation (NO usa -ción como palabra común — \"cultivación\" casi no se usa)"},
      {es:"felicitación", nota:"congratulation (SÍ es -ción→-tion en la forma, pero la palabra común en inglés es \"congratulation\", no \"felicitation\" — esta última existe mas es rarísima)"}
    ];

REGLA2_PALABRAS = [
      {es:"universidad", en:"university"},
      {es:"actividad", en:"activity"},
      {es:"curiosidad", en:"curiosity"},
      {es:"oportunidad", en:"opportunity"},
      {es:"capacidad", en:"capacity"},
      {es:"comunidad", en:"community"},
      {es:"responsabilidad", en:"responsibility"},
      {es:"identidad", en:"identity"},
      {es:"seguridad", en:"security"},
      {es:"dificultad", en:"difficulty"},
      {es:"realidad", en:"reality"},
      {es:"personalidad", en:"personality"},
      {es:"prioridad", en:"priority"},
      {es:"diversidad", en:"diversity"},
      {es:"flexibilidad", en:"flexibility"},
      {es:"cantidad", en:"quantity"},
      {es:"calidad", en:"quality"},
      {es:"variedad", en:"variety"},
      {es:"autoridad", en:"authority"},
      {es:"mayoridad", en:"majority"},
      {es:"libertad", en:"liberty"},
      {es:"velocidad", en:"velocity"},
      {es:"sociedad", en:"society"},
      {es:"igualdad", en:"equality"},
      {es:"formalidad", en:"formality"},
      {es:"electricidad", en:"electricity"},
      {es:"humedad", en:"humidity"},
      {es:"densidad", en:"density"},
      {es:"gravedad", en:"gravity"},
      {es:"intensidad", en:"intensity"},
      {es:"elasticidad", en:"elasticity"},
      {es:"capilaridad", en:"capillarity"},
      {es:"radioactividad", en:"radioactivity"},
      {es:"conductividad", en:"conductivity"},
      {es:"visibilidad", en:"visibility"},
      {es:"estabilidad", en:"stability"},
      {es:"compatibilidad", en:"compatibility"},
      {es:"funcionalidad", en:"functionality"},
      {es:"productividad", en:"productivity"},
      {es:"creatividad", en:"creativity"},
      {es:"accesibilidad", en:"accessibility"},
      {es:"disponibilidad", en:"availability"},
      {es:"solidaridad", en:"solidarity"},
      {es:"fraternidad", en:"fraternity"},
      {es:"hospitalidad", en:"hospitality"},
      {es:"popularidad", en:"popularity"},
      {es:"celebridad", en:"celebrity"},
      {es:"nacionalidad", en:"nationality"},
      {es:"humanidad", en:"humanity"},
      {es:"municipalidad", en:"municipality"},
      {es:"honestidad", en:"honesty"},
      {es:"sinceridad", en:"sincerity"},
      {es:"generosidad", en:"generosity"},
      {es:"puntualidad", en:"punctuality"},
      {es:"vanidad", en:"vanity"},
      {es:"dignidad", en:"dignity"},
      {es:"humildad", en:"humility"},
      {es:"brevedad", en:"brevity"},
      {es:"severidad", en:"severity"},
      {es:"sensibilidad", en:"sensitivity"},
      {es:"posibilidad", en:"possibility"},
      {es:"habilidad", en:"ability"},
      {es:"necesidad", en:"necessity"},
      {es:"rentabilidad", en:"profitability"},
      {es:"viabilidad", en:"viability"},
      {es:"credibilidad", en:"credibility"},
      {es:"confidencialidad", en:"confidentiality"},
      {es:"legalidad", en:"legality"},
      {es:"propiedad", en:"property"},
      {es:"especialidad", en:"specialty"},
      {es:"modalidad", en:"modality"},
      {es:"totalidad", en:"totality"},
      {es:"finalidad", en:"finality"},
      {es:"originalidad", en:"originality"},
      {es:"normalidad", en:"normality"},
      {es:"neutralidad", en:"neutrality"},
      {es:"moralidad", en:"morality"},
      {es:"mortalidad", en:"mortality"},
      {es:"obesidad", en:"obesity"},
      {es:"discapacidad", en:"disability"},
      {es:"fertilidad", en:"fertility"},
      {es:"inmunidad", en:"immunity"},
      {es:"longevidad", en:"longevity"},
      {es:"ansiedad", en:"anxiety"},
      {es:"paternidad", en:"paternity"},
      {es:"maternidad", en:"maternity"},
      {es:"unidad", en:"unity"},
      {es:"facultad", en:"faculty"},
      {es:"lealtad", en:"loyalty"}
    ];

REGLA2_EXCEPCIONES = [
      {es:"ciudadanía", nota:"citizenship — cambia de forma"},
      {es:"vecindad", nota:"vicinity — cambia de forma"},
      {es:"amabilidad", nota:"kindness — no cognado directo"},
      {es:"madurez", nota:"maturity — cambia de forma"},
      {es:"estupidez", nota:"stupidity — cambia de forma"},
      {es:"timidez", nota:"shyness — no cognado directo"},
      {es:"cortesía", nota:"courtesy — cambia de forma"},
      {es:"natalidad", nota:"natality — rara en inglés, birth rate más común"},
      {es:"enfermedad", nota:"illness — no cognado directo"},
      {es:"ciudad", nota:"city — cambia de forma, más corta"},
      {es:"edad", nota:"age — cambia de forma"},
      {es:"verdad", nota:"truth — no cognado directo"},
      {es:"bondad", nota:"goodness — no cognado directo"},
      {es:"mitad", nota:"half — no cognado directo"},
      {es:"amistad", nota:"friendship (NO \"amity\" en el uso común — esa palabra existe en inglés pero es rarísima y formal)"},
      {es:"enemistad", nota:"enmity (SÍ es cognado, pero \"enmity\" es una palabra poco común en inglés cotidiano)"},
      {es:"voluntad", nota:"will / willpower (NO tiene cognado directo)"}
    ];

REGLA3_PALABRAS = [
      {es:"rápidamente", en:"rapidly"},
      {es:"directamente", en:"directly"},
      {es:"específicamente", en:"specifically"},
      {es:"exactamente", en:"exactly"},
      {es:"finalmente", en:"finally"},
      {es:"generalmente", en:"generally"},
      {es:"probablemente", en:"probably"},
      {es:"realmente", en:"really"},
      {es:"completamente", en:"completely"},
      {es:"normalmente", en:"normally"},
      {es:"fácilmente", en:"easily"},
      {es:"claramente", en:"clearly"},
      {es:"inmediatamente", en:"immediately"},
      {es:"personalmente", en:"personally"},
      {es:"seriamente", en:"seriously"},
      {es:"totalmente", en:"totally"},
      {es:"actualmente", en:"currently"},
      {es:"únicamente", en:"uniquely"},
      {es:"frecuentemente", en:"frequently"},
      {es:"naturalmente", en:"naturally"},
      {es:"particularmente", en:"particularly"},
      {es:"absolutamente", en:"absolutely"},
      {es:"constantemente", en:"constantly"},
      {es:"eventualmente", en:"eventually"},
      {es:"cuidadosamente", en:"carefully"},
      {es:"oficialmente", en:"officially"},
      {es:"legalmente", en:"legally"},
      {es:"financieramente", en:"financially"},
      {es:"económicamente", en:"economically"},
      {es:"profesionalmente", en:"professionally"},
      {es:"efectivamente", en:"effectively"},
      {es:"eficientemente", en:"efficiently"},
      {es:"significativamente", en:"significantly"},
      {es:"considerablemente", en:"considerably"},
      {es:"relativamente", en:"relatively"},
      {es:"aproximadamente", en:"approximately"},
      {es:"regularmente", en:"regularly"},
      {es:"ocasionalmente", en:"occasionally"},
      {es:"temporalmente", en:"temporarily"},
      {es:"permanentemente", en:"permanently"},
      {es:"gradualmente", en:"gradually"},
      {es:"progresivamente", en:"progressively"},
      {es:"amablemente", en:"kindly"},
      {es:"honestamente", en:"honestly"},
      {es:"sinceramente", en:"sincerely"},
      {es:"felizmente", en:"happily"},
      {es:"tristemente", en:"sadly"},
      {es:"pacientemente", en:"patiently"},
      {es:"calmadamente", en:"calmly"},
      {es:"nerviosamente", en:"nervously"},
      {es:"agresivamente", en:"aggressively"},
      {es:"violentamente", en:"violently"},
      {es:"dulcemente", en:"sweetly"},
      {es:"elegantemente", en:"elegantly"},
      {es:"cortésmente", en:"courteously"},
      {es:"extremadamente", en:"extremely"},
      {es:"increíblemente", en:"incredibly"},
      {es:"sorprendentemente", en:"surprisingly"},
      {es:"enormemente", en:"enormously"},
      {es:"altamente", en:"highly"},
      {es:"profundamente", en:"profoundly"},
      {es:"intensamente", en:"intensely"},
      {es:"moderadamente", en:"moderately"},
      {es:"extraordinariamente", en:"extraordinarily"},
      {es:"excepcionalmente", en:"exceptionally"},
      {es:"recientemente", en:"recently"},
      {es:"simultáneamente", en:"simultaneously"},
      {es:"automáticamente", en:"automatically"},
      {es:"instantáneamente", en:"instantly"},
      {es:"básicamente", en:"basically"},
      {es:"simplemente", en:"simply"},
      {es:"obviamente", en:"obviously"},
      {es:"evidentemente", en:"evidently"},
      {es:"aparentemente", en:"apparently"},
      {es:"supuestamente", en:"supposedly"},
      {es:"literalmente", en:"literally"},
      {es:"técnicamente", en:"technically"},
      {es:"teóricamente", en:"theoretically"},
      {es:"prácticamente", en:"practically"},
      {es:"mentalmente", en:"mentally"},
      {es:"físicamente", en:"physically"},
      {es:"emocionalmente", en:"emotionally"},
      {es:"socialmente", en:"socially"},
      {es:"culturalmente", en:"culturally"},
      {es:"políticamente", en:"politically"},
      {es:"moralmente", en:"morally"},
      {es:"espiritualmente", en:"spiritually"},
      {es:"mutuamente", en:"mutually"},
      {es:"voluntariamente", en:"voluntarily"},
      {es:"deliberadamente", en:"deliberately"},
      {es:"accidentalmente", en:"accidentally"},
      {es:"intencionalmente", en:"intentionally"},
      {es:"continuamente", en:"continuously"},
      {es:"visiblemente", en:"visibly"},
      {es:"audiblemente", en:"audibly"},
      {es:"abruptamente", en:"abruptly"}
    ];

REGLA3_EXCEPCIONES = [
      {es:"tranquilamente", nota:"calmly — comparte traducción con calmadamente"},
      {es:"suavemente", nota:"softly — no cognado directo"},
      {es:"educadamente", nota:"politely — no cognado directo"},
      {es:"levemente", nota:"slightly — no cognado directo"},
      {es:"ligeramente", nota:"slightly — no cognado directo"},
      {es:"anteriormente", nota:"previously — no cognado directo"},
      {es:"posteriormente", nota:"subsequently — no cognado directo"},
      {es:"verdaderamente", nota:"truly — cambia de forma"},
      {es:"solamente", nota:"solely — cambia de forma"},
      {es:"mayormente", nota:"mostly — no cognado directo"}
    ];

REGLA4_PALABRAS = [
      {es:"científico", en:"scientific"},
      {es:"histórico", en:"historic"},
      {es:"económico", en:"economic"},
      {es:"político", en:"political"},
      {es:"básico", en:"basic"},
      {es:"específico", en:"specific"},
      {es:"técnico", en:"technical"},
      {es:"práctico", en:"practical"},
      {es:"médico", en:"medical"},
      {es:"mágico", en:"magic"},
      {es:"romántico", en:"romantic"},
      {es:"dramático", en:"dramatic"},
      {es:"automático", en:"automatic"},
      {es:"fantástico", en:"fantastic"},
      {es:"académico", en:"academic"},
      {es:"artístico", en:"artistic"},
      {es:"atlético", en:"athletic"},
      {es:"crítico", en:"critical"},
      {es:"cínico", en:"cynical"},
      {es:"clásico", en:"classic"},
      {es:"lógico", en:"logical"},
      {es:"físico", en:"physical"},
      {es:"típico", en:"typical"},
      {es:"tropical", en:"tropical"},
      {es:"tráfico", en:"traffic"},
      {es:"gráfico", en:"graphic"},
      {es:"público", en:"public"},
      {es:"electrónico", en:"electronic"},
      {es:"orgánico", en:"organic"},
      {es:"mecánico", en:"mechanical"},
      {es:"biológico", en:"biological"},
      {es:"psicológico", en:"psychological"},
      {es:"geográfico", en:"geographic"},
      {es:"topográfico", en:"topographic"},
      {es:"tecnológico", en:"technological"},
      {es:"filosófico", en:"philosophical"},
      {es:"metódico", en:"methodical"},
      {es:"periódico", en:"periodic"},
      {es:"cómico", en:"comic"},
      {es:"heroico", en:"heroic"},
      {es:"irónico", en:"ironic"},
      {es:"nostálgico", en:"nostalgic"},
      {es:"estratégico", en:"strategic"},
      {es:"energético", en:"energetic"},
      {es:"genético", en:"genetic"},
      {es:"patético", en:"pathetic"},
      {es:"simpático", en:"nice"},
      {es:"exótico", en:"exotic"},
      {es:"caótico", en:"chaotic"},
      {es:"idéntico", en:"identical"}
    ];
REGLA4_EXCEPCIONES = [
      {es:"simpático", nota:"nice o friendly (NO 'sympathetic' — esa palabra en inglés significa 'compasivo', un falso amigo clásico)"},
      {es:"físico (la persona)", nota:"physicist (científico), pero physique (el cuerpo) — dos palabras distintas según el sentido"},
      {es:"político (la persona)", nota:"politician (persona), diferente de political (el adjetivo)"},
      {es:"cómico (la persona)", nota:"comedian (persona) vs comic (el adjetivo o la revista)"},
      {es:"cínico", nota:"a veces mejor traducido como 'cynic' (sustantivo) según contexto"}
    ];

REGLA5_PALABRAS = [
      {es:"famoso", en:"famous"},
      {es:"curioso", en:"curious"},
      {es:"generoso", en:"generous"},
      {es:"nervioso", en:"nervous"},
      {es:"peligroso", en:"dangerous"},
      {es:"delicioso", en:"delicious"},
      {es:"misterioso", en:"mysterious"},
      {es:"religioso", en:"religious"},
      {es:"serio (variante -ious)", en:"serious"},
      {es:"ambicioso", en:"ambitious"},
      {es:"contagioso", en:"contagious"},
      {es:"cauteloso", en:"cautious"},
      {es:"gracioso", en:"gracious"},
      {es:"precioso", en:"precious"},
      {es:"espacioso", en:"spacious"},
      {es:"delicioso", en:"delicious"},
      {es:"malicioso", en:"malicious"},
      {es:"vicioso", en:"vicious"},
      {es:"virtuoso", en:"virtuous"},
      {es:"tedioso", en:"tedious"},
      {es:"envidioso", en:"envious"},
      {es:"obvio (variante -ious)", en:"obvious"},
      {es:"variado (variante -ious)", en:"various"},
      {es:"tempestuoso", en:"tempestuous"},
      {es:"desastroso", en:"disastrous"},
      {es:"monstruoso", en:"monstrous"},
      {es:"numeroso", en:"numerous"},
      {es:"poroso", en:"porous"},
      {es:"fabuloso", en:"fabulous"},
      {es:"escandaloso", en:"scandalous"},
      {es:"montañoso", en:"mountainous"},
      {es:"venenoso", en:"poisonous"},
      {es:"maravilloso", en:"marvelous"},
      {es:"glorioso", en:"glorious"},
      {es:"victorioso", en:"victorious"},
      {es:"laborioso", en:"laborious"},
      {es:"lujoso", en:"luxurious"},
      {es:"furioso", en:"furious"},
      {es:"curioso", en:"curious"},
      {es:"prestigioso", en:"prestigious"},
      {es:"rigoroso", en:"rigorous"},
      {es:"vigoroso", en:"vigorous"},
      {es:"humoroso", en:"humorous"},
      {es:"amoroso", en:"amorous"},
      {es:"nauseoso", en:"nauseous"},
      {es:"ingenioso", en:"ingenious"},
      {es:"espontáneo (variante -ous)", en:"spontaneous"},
      {es:"instantáneo (variante -ous)", en:"instantaneous"},
      {es:"simultáneo (variante -ous)", en:"simultaneous"},
      {es:"cuidadoso", en:"careful"}
    ];
REGLA5_EXCEPCIONES = [
      {es:"cuidadoso", nota:"careful (NO usa -ous — es una excepción importante, sigue el patrón adjetivo+ful)"},
      {es:"hermoso", nota:"beautiful (NO usa -ous — sigue su propio patrón, sin relación directa)"},
      {es:"gracioso (el chiste)", nota:"funny (para 'gracioso' como chistoso); gracious es más bien 'cortés' o 'amable' — dos sentidos distintos"},
      {es:"serio", nota:"serious sí funciona, pero cuidado con la ortografía: se agrega -ous completo, no solo -us"},
      {es:"nauseoso", nota:"nauseous en inglés formal describe lo que provoca náuseas, no a quien las siente (para eso se dice 'nauseated')"}
    ];

REGLA6_PALABRAS = [
      {es:"comunismo", en:"communism"},
      {es:"capitalismo", en:"capitalism"},
      {es:"socialismo", en:"socialism"},
      {es:"nacionalismo", en:"nationalism"},
      {es:"terrorismo", en:"terrorism"},
      {es:"racismo", en:"racism"},
      {es:"sexismo", en:"sexism"},
      {es:"optimismo", en:"optimism"},
      {es:"pesimismo", en:"pessimism"},
      {es:"realismo", en:"realism"},
      {es:"idealismo", en:"idealism"},
      {es:"romanticismo", en:"romanticism"},
      {es:"heroísmo", en:"heroism"},
      {es:"patriotismo", en:"patriotism"},
      {es:"cristianismo", en:"christianity"},
      {es:"budismo", en:"buddhism"},
      {es:"hinduismo", en:"hinduism"},
      {es:"catolicismo", en:"catholicism"},
      {es:"protestantismo", en:"protestantism"},
      {es:"judaísmo", en:"judaism"},
      {es:"islamismo", en:"islamism"},
      {es:"ateísmo", en:"atheism"},
      {es:"mecanismo", en:"mechanism"},
      {es:"organismo", en:"organism"},
      {es:"metabolismo", en:"metabolism"},
      {es:"turismo", en:"tourism"},
      {es:"periodismo", en:"journalism"},
      {es:"activismo", en:"activism"},
      {es:"feminismo", en:"feminism"},
      {es:"egoísmo", en:"egoism"},
      {es:"altruismo", en:"altruism"},
      {es:"vandalismo", en:"vandalism"},
      {es:"favoritismo", en:"favoritism"},
      {es:"profesionalismo", en:"professionalism"},
      {es:"perfeccionismo", en:"perfectionism"},
      {es:"alcoholismo", en:"alcoholism"},
      {es:"cinismo", en:"cynicism"},
      {es:"dinamismo", en:"dynamism"},
      {es:"mecanicismo", en:"mechanicism"},
      {es:"simbolismo", en:"symbolism"},
      {es:"colonialismo", en:"colonialism"},
      {es:"imperialismo", en:"imperialism"},
      {es:"totalitarismo", en:"totalitarianism"},
      {es:"autoritarismo", en:"authoritarianism"},
      {es:"conservadurismo", en:"conservatism"},
      {es:"liberalismo", en:"liberalism"},
      {es:"populismo", en:"populism"},
      {es:"extremismo", en:"extremism"},
      {es:"fanatismo", en:"fanaticism"},
      {es:"consumismo", en:"consumerism"},
      {es:"individualismo", en:"individualism"}
    ];
REGLA6_EXCEPCIONES = [
      {es:"cristianismo", nota:"christianity (NO usa -ism — es la excepción más notable de esta familia)"},
      {es:"protestantismo", nota:"protestantism SÍ existe, pero también se usa mucho 'Protestantism' con mayúscula como nombre propio"},
      {es:"conservadurismo", nota:"conservatism (nota el cambio de raíz: se dice 'conservatism', no 'conservadurism')"}
    ];


REGLA7_PALABRAS = [
      {es:"artista", en:"artist"},
      {es:"dentista", en:"dentist"},
      {es:"pianista", en:"pianist"},
      {es:"violinista", en:"violinist"},
      {es:"guitarrista", en:"guitarist"},
      {es:"periodista", en:"journalist"},
      {es:"columnista", en:"columnist"},
      {es:"novelista", en:"novelist"},
      {es:"pesimista", en:"pessimist"},
      {es:"optimista", en:"optimist"},
      {es:"realista", en:"realist"},
      {es:"idealista", en:"idealist"},
      {es:"socialista", en:"socialist"},
      {es:"comunista", en:"communist"},
      {es:"capitalista", en:"capitalist"},
      {es:"nacionalista", en:"nationalist"},
      {es:"terrorista", en:"terrorist"},
      {es:"racista", en:"racist"},
      {es:"sexista", en:"sexist"},
      {es:"feminista", en:"feminist"},
      {es:"activista", en:"activist"},
      {es:"turista", en:"tourist"},
      {es:"especialista", en:"specialist"},
      {es:"analista", en:"analyst"},
      {es:"científico (variante -ist)", en:"scientist"},
      {es:"economista", en:"economist"},
      {es:"dietista", en:"dietitian"},
      {es:"farmacista", en:"pharmacist"},
      {es:"terapeuta (variante -ist)", en:"therapist"},
      {es:"cardiólogo (variante -ist)", en:"cardiologist"},
      {es:"biólogo (variante -ist)", en:"biologist"},
      {es:"psicólogo (variante -ist)", en:"psychologist"},
      {es:"antropólogo (variante -ist)", en:"anthropologist"},
      {es:"arqueólogo (variante -ist)", en:"archaeologist"},
      {es:"cronista", en:"chronicler"},
      {es:"humorista", en:"humorist"},
      {es:"conformista", en:"conformist"},
      {es:"perfeccionista", en:"perfectionist"},
      {es:"egoísta", en:"egoist"},
      {es:"altruista", en:"altruist"},
      {es:"extremista", en:"extremist"},
      {es:"fundamentalista", en:"fundamentalist"},
      {es:"colonialista", en:"colonialist"},
      {es:"imperialista", en:"imperialist"},
      {es:"conservador (variante -ist)", en:"conservationist"},
      {es:"individualista", en:"individualist"},
      {es:"minimalista", en:"minimalist"},
      {es:"maximalista", en:"maximalist"},
      {es:"futurista", en:"futurist"},
      {es:"purista", en:"purist"},
      {es:"ciclista", en:"cyclist"}
    ];
REGLA7_EXCEPCIONES = [
      {es:"dietista", nota:"dietitian (NO usa -ist directo — sigue su propia forma en inglés)"},
      {es:"conservador", nota:"conservationist (para 'quien protege el ambiente'), pero conservative es 'conservador' en sentido político — dos palabras distintas"},
      {es:"cronista", nota:"chronicler (no usa -ist — el inglés prefiere esta forma con -er)"},
      {es:"masajista", nota:"massage therapist (no existe 'massagist' como palabra común)"}
    ];

REGLA8_PALABRAS = [
      {es:"activo", en:"active"},
      {es:"pasivo", en:"passive"},
      {es:"positivo", en:"positive"},
      {es:"negativo", en:"negative"},
      {es:"creativo", en:"creative"},
      {es:"efectivo", en:"effective"},
      {es:"selectivo", en:"selective"},
      {es:"objetivo", en:"objective"},
      {es:"subjetivo", en:"subjective"},
      {es:"masivo", en:"massive"},
      {es:"exclusivo", en:"exclusive"},
      {es:"agresivo", en:"aggressive"},
      {es:"defensivo", en:"defensive"},
      {es:"ofensivo", en:"offensive"},
      {es:"impulsivo", en:"impulsive"},
      {es:"expresivo", en:"expressive"},
      {es:"progresivo", en:"progressive"},
      {es:"excesivo", en:"excessive"},
      {es:"decisivo", en:"decisive"},
      {es:"instintivo", en:"instinctive"},
      {es:"productivo", en:"productive"},
      {es:"constructivo", en:"constructive"},
      {es:"destructivo", en:"destructive"},
      {es:"comparativo", en:"comparative"},
      {es:"relativo", en:"relative"},
      {es:"alternativo", en:"alternative"},
      {es:"administrativo", en:"administrative"},
      {es:"informativo", en:"informative"},
      {es:"formativo", en:"formative"},
      {es:"acumulativo", en:"cumulative"},
      {es:"repetitivo", en:"repetitive"},
      {es:"competitivo", en:"competitive"},
      {es:"atractivo", en:"attractive"},
      {es:"distintivo", en:"distinctive"},
      {es:"intensivo", en:"intensive"},
      {es:"extensivo", en:"extensive"},
      {es:"nativo", en:"native"},
      {es:"innovador (variante -ive)", en:"innovative"},
      {es:"colaborativo", en:"collaborative"},
      {es:"cooperativo", en:"cooperative"},
      {es:"consultivo", en:"consultative"},
      {es:"preventivo", en:"preventive"},
      {es:"correctivo", en:"corrective"},
      {es:"cognitivo", en:"cognitive"},
      {es:"intuitivo", en:"intuitive"},
      {es:"instructivo", en:"instructive"},
      {es:"reflexivo", en:"reflexive"},
      {es:"sensitivo", en:"sensitive"},
      {es:"consecutivo", en:"consecutive"},
      {es:"vengativo", en:"vindictive"}
    ];
REGLA8_EXCEPCIONES = [
      {es:"innovador", nota:"innovative (el adjetivo español termina en -dor, no en -ivo, pero el inglés sí usa -ive)"},
      {es:"vengativo", nota:"vindictive (nota el cambio de raíz — no es una traducción letra por letra)"},
      {es:"acumulativo", nota:"cumulative (se pierde el 'a' inicial en inglés)"},
      {es:"sensitivo", nota:"en inglés cotidiano, 'sensitive' es más bien 'sensible' (emocional); para 'sensitivo' en sentido de percepción física también se usa la misma palabra, cuidado con el contexto"}
    ];

REGLA9_PALABRAS = [
      {es:"importancia", en:"importance"},
      {es:"distancia", en:"distance"},
      {es:"elegancia", en:"elegance"},
      {es:"ignorancia", en:"ignorance"},
      {es:"abundancia", en:"abundance"},
      {es:"tolerancia", en:"tolerance"},
      {es:"resistencia", en:"resistance"},
      {es:"asistencia", en:"assistance"},
      {es:"insistencia", en:"insistence"},
      {es:"persistencia", en:"persistence"},
      {es:"existencia", en:"existence"},
      {es:"experiencia", en:"experience"},
      {es:"paciencia", en:"patience"},
      {es:"presencia", en:"presence"},
      {es:"ausencia", en:"absence"},
      {es:"referencia", en:"reference"},
      {es:"diferencia", en:"difference"},
      {es:"preferencia", en:"preference"},
      {es:"conferencia", en:"conference"},
      {es:"inteligencia", en:"intelligence"},
      {es:"emergencia", en:"emergency"},
      {es:"urgencia", en:"urgency"},
      {es:"violencia", en:"violence"},
      {es:"consecuencia", en:"consequence"},
      {es:"frecuencia", en:"frequency"},
      {es:"secuencia", en:"sequence"},
      {es:"confidencia", en:"confidence"},
      {es:"evidencia", en:"evidence"},
      {es:"independencia", en:"independence"},
      {es:"dependencia", en:"dependence"},
      {es:"correspondencia", en:"correspondence"},
      {es:"coincidencia", en:"coincidence"},
      {es:"incidencia", en:"incidence"},
      {es:"residencia", en:"residence"},
      {es:"vigilancia", en:"vigilance"},
      {es:"arrogancia", en:"arrogance"},
      {es:"fragancia", en:"fragrance"},
      {es:"circunstancia", en:"circumstance"},
      {es:"sustancia", en:"substance"},
      {es:"constancia", en:"constancy"},
      {es:"elegancia", en:"elegance"},
      {es:"competencia", en:"competence"},
      {es:"conveniencia", en:"convenience"},
      {es:"obediencia", en:"obedience"},
      {es:"audiencia", en:"audience"},
      {es:"apariencia", en:"appearance"},
      {es:"tendencia", en:"tendency"},
      {es:"decadencia", en:"decadence"},
      {es:"redundancia", en:"redundancy"},
      {es:"venganza", en:"vengeance"}
    ];
REGLA9_EXCEPCIONES = [
      {es:"venganza", nota:"vengeance (la palabra española es 'venganza', no 'vengancia' — pero el inglés sigue el patrón -ance)"},
      {es:"constancia", nota:"constancy (usa -cy en vez de -ce en este caso puntual)"},
      {es:"redundancia", nota:"redundancy (usa -cy en vez de -ce)"},
      {es:"emergencia", nota:"emergency (usa -cy, no -ce — igual que 'urgencia'→'urgency')"},
      {es:"tendencia", nota:"tendency (usa -cy, no -ce)"}
    ];


REGLA10_PALABRAS = [
      {es:"actitud", en:"attitude"},
      {es:"gratitud", en:"gratitude"},
      {es:"altitud", en:"altitude"},
      {es:"latitud", en:"latitude"},
      {es:"longitud", en:"longitude"},
      {es:"magnitud", en:"magnitude"},
      {es:"aptitud", en:"aptitude"},
      {es:"multitud", en:"multitude"},
      {es:"soledad (variante -tude)", en:"solitude"},
      {es:"certeza (variante -tude)", en:"certitude"},
      {es:"exactitud", en:"exactitude"},
      {es:"servidumbre (variante -tude)", en:"servitude"},
      {es:"beatitud", en:"beatitude"},
      {es:"amplitud", en:"amplitude"},
      {es:"plenitud", en:"plentitude"},
      {es:"similitud", en:"similitude"},
      {es:"vicisitud", en:"vicissitude"},
      {es:"fortitud", en:"fortitude"},
      {es:"ineptitud", en:"ineptitude"},
      {es:"rectitud", en:"rectitude"},
      {es:"quietud", en:"quietude"},
      {es:"inquietud", en:"disquietude"}
    ];
REGLA10_EXCEPCIONES = [
      {es:"soledad", nota:"solitude (la palabra española más común es 'soledad', pero también existe 'solitud' menos usada; en inglés siempre es 'solitude')"},
      {es:"certeza", nota:"certitude existe pero es más formal/literaria; en el habla diaria se usa más 'certainty'"},
      {es:"servidumbre", nota:"servitude (palabra española distinta a la raíz -tud, pero el inglés sigue el patrón)"},
      {es:"plenitud", nota:"aunque 'plentitude' existe, en inglés cotidiano se usa mucho más 'fullness' o 'completeness'"},
      {es:"inquietud", nota:"disquietude es formal/literaria; en el habla diaria se prefiere 'unease' o 'worry'"}
    ];

REGLA11_PALABRAS = [
      {es:"paciente", en:"patient"},
      {es:"eficiente", en:"efficient"},
      {es:"inteligente", en:"intelligent"},
      {es:"diferente", en:"different"},
      {es:"presidente", en:"president"},
      {es:"independiente", en:"independent"},
      {es:"urgente", en:"urgent"},
      {es:"decente", en:"decent"},
      {es:"excelente", en:"excellent"},
      {es:"potente", en:"potent"},
      {es:"evidente", en:"evident"},
      {es:"consistente", en:"consistent"},
      {es:"persistente", en:"persistent"},
      {es:"resistente", en:"resistant"},
      {es:"insistente", en:"insistent"},
      {es:"suficiente", en:"sufficient"},
      {es:"deficiente", en:"deficient"},
      {es:"conveniente", en:"convenient"},
      {es:"permanente", en:"permanent"},
      {es:"transparente", en:"transparent"},
      {es:"aparente", en:"apparent"},
      {es:"reciente", en:"recent"},
      {es:"frecuente", en:"frequent"},
      {es:"consciente", en:"conscious"},
      {es:"prudente", en:"prudent"},
      {es:"elegante", en:"elegant"},
      {es:"importante", en:"important"},
      {es:"ignorante", en:"ignorant"},
      {es:"constante", en:"constant"},
      {es:"distante", en:"distant"},
      {es:"abundante", en:"abundant"},
      {es:"dominante", en:"dominant"},
      {es:"tolerante", en:"tolerant"},
      {es:"resonante", en:"resonant"},
      {es:"vacante", en:"vacant"},
      {es:"instante", en:"instant"},
      {es:"asistente", en:"assistant"},
      {es:"estudiante", en:"student"},
      {es:"comerciante (variante -ant)", en:"merchant"},
      {es:"emergente", en:"emergent"},
      {es:"convergente", en:"convergent"},
      {es:"divergente", en:"divergent"},
      {es:"equivalente", en:"equivalent"},
      {es:"competente", en:"competent"},
      {es:"confidente", en:"confidant"},
      {es:"vigilante", en:"vigilant"},
      {es:"arrogante", en:"arrogant"},
      {es:"brillante", en:"brilliant"},
      {es:"fragante", en:"fragrant"},
      {es:"radiante", en:"radiant"}
    ];
REGLA11_EXCEPCIONES = [
      {es:"consciente", nota:"conscious (NO usa -ent — es una de las excepciones más importantes de esta familia)"},
      {es:"estudiante", nota:"student (NO usa -ent/-ant directo — el inglés tiene su propia palabra)"},
      {es:"comerciante", nota:"merchant (la raíz cambia por completo, aunque termine igual en inglés)"},
      {es:"resistente", nota:"resistant (usa 'a' en vez de 'e' — cuidado con la ortografía)"},
      {es:"confidente", nota:"confidant/confidante (existe distinción de género en inglés, poco común para esta familia)"}
    ];

REGLA12_PALABRAS = [
      {es:"nacional", en:"national"},
      {es:"internacional", en:"international"},
      {es:"personal", en:"personal"},
      {es:"profesional", en:"professional"},
      {es:"cultural", en:"cultural"},
      {es:"natural", en:"natural"},
      {es:"normal", en:"normal"},
      {es:"formal", en:"formal"},
      {es:"legal", en:"legal"},
      {es:"total", en:"total"},
      {es:"final", en:"final"},
      {es:"especial", en:"special"},
      {es:"oficial", en:"official"},
      {es:"social", en:"social"},
      {es:"mental", en:"mental"},
      {es:"central", en:"central"},
      {es:"general", en:"general"},
      {es:"local", en:"local"},
      {es:"global", en:"global"},
      {es:"digital", en:"digital"},
      {es:"capital", en:"capital"},
      {es:"vital", en:"vital"},
      {es:"fatal", en:"fatal"},
      {es:"real", en:"real"},
      {es:"comercial", en:"commercial"},
      {es:"industrial", en:"industrial"},
      {es:"material", en:"material"},
      {es:"especial", en:"special"},
      {es:"esencial", en:"essential"},
      {es:"potencial", en:"potential"},
      {es:"emocional", en:"emotional"},
      {es:"educacional", en:"educational"},
      {es:"institucional", en:"institutional"},
      {es:"tradicional", en:"traditional"},
      {es:"adicional", en:"additional"},
      {es:"opcional", en:"optional"},
      {es:"racional", en:"rational"},
      {es:"regional", en:"regional"},
      {es:"funcional", en:"functional"},
      {es:"original", en:"original"},
      {es:"criminal", en:"criminal"},
      {es:"formal", en:"formal"},
      {es:"corporal", en:"corporal"},
      {es:"animal", en:"animal"},
      {es:"hospital", en:"hospital"},
      {es:"literal", en:"literal"},
      {es:"lateral", en:"lateral"},
      {es:"neutral", en:"neutral"},
      {es:"medieval", en:"medieval"},
      {es:"experimental", en:"experimental"}
    ];
REGLA12_EXCEPCIONES = [
      {es:"real", nota:"real en inglés significa 'verdadero, genuino' — para 'real' de la realeza (rey/reina) se dice 'royal', un falso amigo importante"},
      {es:"colegial", nota:"NO existe 'collegial' con ese sentido en inglés — se usa 'school-related' o simplemente 'school'"},
      {es:"actual", nota:"actual en inglés significa 'real, verdadero' — para 'actual' en español (de ahora) se dice 'current', uno de los falsos amigos más comunes de todo el idioma"}
    ];


REGLA13_PALABRAS = [
      {es:"necesario", en:"necessary"},
      {es:"voluntario", en:"voluntary"},
      {es:"salario", en:"salary"},
      {es:"aniversario", en:"anniversary"},
      {es:"diccionario", en:"dictionary"},
      {es:"secretario", en:"secretary"},
      {es:"literario", en:"literary"},
      {es:"legendario", en:"legendary"},
      {es:"ordinario", en:"ordinary"},
      {es:"extraordinario", en:"extraordinary"},
      {es:"contrario", en:"contrary"},
      {es:"temporario", en:"temporary"},
      {es:"imaginario", en:"imaginary"},
      {es:"solitario", en:"solitary"},
      {es:"disciplinario", en:"disciplinary"},
      {es:"vocabulario", en:"vocabulary"},
      {es:"presupuestario (variante -ary)", en:"budgetary"},
      {es:"reglamentario", en:"regulatory"},
      {es:"complementario", en:"complementary"},
      {es:"elementario", en:"elementary"},
      {es:"comentario", en:"commentary"},
      {es:"documentario (variante -ary)", en:"documentary"},
      {es:"veterinario", en:"veterinary"},
      {es:"sanitario", en:"sanitary"},
      {es:"militar (variante -ary)", en:"military"},
      {es:"monetario", en:"monetary"},
      {es:"presupuestario", en:"budgetary"},
      {es:"funcionario (variante -ary)", en:"functionary"},
      {es:"revolucionario", en:"revolutionary"},
      {es:"visionario", en:"visionary"},
      {es:"estacionario", en:"stationary"},
      {es:"honorario", en:"honorary"},
      {es:"arbitrario", en:"arbitrary"},
      {es:"involuntario", en:"involuntary"},
      {es:"hereditario", en:"hereditary"},
      {es:"sedentario", en:"sedentary"},
      {es:"itinerario", en:"itinerary"},
      {es:"beneficiario", en:"beneficiary"},
      {es:"propietario (variante -ary)", en:"proprietary"},
      {es:"adversario", en:"adversary"},
      {es:"centenario", en:"centenary"},
      {es:"escolar (variante -ary)", en:"scholarly"},
      {es:"diario", en:"daily"},
      {es:"preliminar (variante -ary)", en:"preliminary"},
      {es:"estatutario", en:"statutory"}
    ];
REGLA13_EXCEPCIONES = [
      {es:"militar", nota:"military (el adjetivo español no termina en -ario, pero el inglés sí sigue el patrón -ary)"},
      {es:"reglamentario", nota:"regulatory (cambia la raíz, no es una traducción directa letra por letra)"},
      {es:"funcionario", nota:"official es más común para 'funcionario público'; functionary existe pero es menos usada"},
      {es:"propietario", nota:"owner es la palabra más común; proprietary existe pero se usa sobre todo como adjetivo (información propietaria, software propietario)"}
    ];

REGLA14_PALABRAS = [
      {es:"obligatorio", en:"mandatory"},
      {es:"territorio", en:"territory"},
      {es:"laboratorio", en:"laboratory"},
      {es:"directorio", en:"directory"},
      {es:"repositorio", en:"repository"},
      {es:"satisfactorio", en:"satisfactory"},
      {es:"introductorio", en:"introductory"},
      {es:"preparatorio", en:"preparatory"},
      {es:"migratorio", en:"migratory"},
      {es:"transitorio", en:"transitory"},
      {es:"contradictorio", en:"contradictory"},
      {es:"discriminatorio", en:"discriminatory"},
      {es:"exploratorio", en:"exploratory"},
      {es:"regulatorio", en:"regulatory"},
      {es:"anticipatorio", en:"anticipatory"},
      {es:"declaratorio", en:"declaratory"},
      {es:"conservatorio", en:"conservatory"},
      {es:"dormitorio", en:"dormitory"},
      {es:"purgatorio", en:"purgatory"},
      {es:"categoría (variante -ory)", en:"category"},
      {es:"memoria (variante -ory)", en:"memory"},
      {es:"historia (variante -ory)", en:"history"},
      {es:"victoria (variante -ory)", en:"victory"},
      {es:"gloria (variante -ory)", en:"glory"},
      {es:"teoría (variante -ory)", en:"theory"},
      {es:"consultorio (variante -ory, en sentido de asesoría)", en:"advisory"},
      {es:"promisorio", en:"promissory"},
      {es:"acusatorio", en:"accusatory"},
      {es:"explicatorio", en:"explanatory"},
      {es:"perentorio", en:"peremptory"},
      {es:"ambulatorio", en:"ambulatory"},
      {es:"circulatorio", en:"circulatory"},
      {es:"respiratorio", en:"respiratory"},
      {es:"digestorio (variante digestivo)", en:"digestory"},
      {es:"sensorio (variante sensorial)", en:"sensory"},
      {es:"auditorio", en:"auditorium"},
      {es:"observatorio", en:"observatory"},
      {es:"promontorio", en:"promontory"},
      {es:"crematorio", en:"crematorium"},
      {es:"moratoria", en:"moratorium"},
      {es:"refectorio", en:"refectory"}
    ];
REGLA14_EXCEPCIONES = [
      {es:"obligatorio", nota:"mandatory es la palabra más común y natural; 'obligatory' existe pero suena más formal/raro"},
      {es:"auditorio", nota:"auditorium (NO usa -ory — termina distinto)"},
      {es:"crematorio", nota:"crematorium (NO usa -ory — termina distinto, igual que auditorio)"},
      {es:"moratoria", nota:"moratorium (termina en -ium, no en -ory)"},
      {es:"digestorio", nota:"la forma natural en inglés es 'digestive', no 'digestory' — palabra rara casi no usada"}
    ];

REGLA15_PALABRAS = [
      {es:"televisión", en:"television"},
      {es:"decisión", en:"decision"},
      {es:"revisión", en:"revision"},
      {es:"división", en:"division"},
      {es:"visión", en:"vision"},
      {es:"provisión", en:"provision"},
      {es:"conclusión", en:"conclusion"},
      {es:"confusión", en:"confusion"},
      {es:"ilusión", en:"illusion"},
      {es:"exclusión", en:"exclusion"},
      {es:"inclusión", en:"inclusion"},
      {es:"conversión", en:"conversion"},
      {es:"expansión", en:"expansion"},
      {es:"extensión", en:"extension"},
      {es:"tensión", en:"tension"},
      {es:"pensión", en:"pension"},
      {es:"dimensión", en:"dimension"},
      {es:"comprensión", en:"comprehension"},
      {es:"suspensión", en:"suspension"},
      {es:"invasión", en:"invasion"},
      {es:"evasión", en:"evasion"},
      {es:"persuasión", en:"persuasion"},
      {es:"ocasión", en:"occasion"},
      {es:"pasión", en:"passion"},
      {es:"misión", en:"mission"},
      {es:"comisión", en:"commission"},
      {es:"admisión", en:"admission"},
      {es:"transmisión", en:"transmission"},
      {es:"emisión", en:"emission"},
      {es:"omisión", en:"omission"},
      {es:"sumisión", en:"submission"},
      {es:"remisión", en:"remission"},
      {es:"discusión", en:"discussion"},
      {es:"percusión", en:"percussion"},
      {es:"impresión", en:"impression"},
      {es:"expresión", en:"expression"},
      {es:"depresión", en:"depression"},
      {es:"progresión", en:"progression"},
      {es:"agresión", en:"aggression"},
      {es:"posesión", en:"possession"},
      {es:"profesión", en:"profession"},
      {es:"sesión", en:"session"},
      {es:"precisión", en:"precision"},
      {es:"colisión", en:"collision"},
      {es:"explosión", en:"explosion"},
      {es:"corrosión", en:"corrosion"},
      {es:"erosión", en:"erosion"},
      {es:"fusión", en:"fusion"}
    ];
REGLA15_EXCEPCIONES = [
      {es:"comprensión", nota:"comprehension (agrega '-he-' en medio — no es letra por letra)"},
      {es:"televisión", nota:"television (en inglés se escribe con doble 'e', no con 'i' como en español)"},
      {es:"pasión", nota:"passion (nota la doble 's' en inglés, distinto de 'pasión' con una sola)"}
    ];


REGLA16_PALABRAS = [
      {es:"biología", en:"biology"},
      {es:"psicología", en:"psychology"},
      {es:"tecnología", en:"technology"},
      {es:"geología", en:"geology"},
      {es:"antropología", en:"anthropology"},
      {es:"sociología", en:"sociology"},
      {es:"cronología", en:"chronology"},
      {es:"astrología", en:"astrology"},
      {es:"metodología", en:"methodology"},
      {es:"terminología", en:"terminology"},
      {es:"mitología", en:"mythology"},
      {es:"ecología", en:"ecology"},
      {es:"arqueología", en:"archaeology"},
      {es:"radiología", en:"radiology"},
      {es:"cardiología", en:"cardiology"},
      {es:"neurología", en:"neurology"},
      {es:"dermatología", en:"dermatology"},
      {es:"oncología", en:"oncology"},
      {es:"ginecología", en:"gynecology"},
      {es:"farmacología", en:"pharmacology"},
      {es:"criminología", en:"criminology"},
      {es:"teología", en:"theology"},
      {es:"filología", en:"philology"},
      {es:"morfología", en:"morphology"},
      {es:"fonología", en:"phonology"},
      {es:"climatología", en:"climatology"},
      {es:"meteorología", en:"meteorology"},
      {es:"paleontología", en:"paleontology"},
      {es:"entomología", en:"entomology"},
      {es:"ideología", en:"ideology"},
      {es:"epistemología", en:"epistemology"},
      {es:"genealogía", en:"genealogy"},
      {es:"analogía", en:"analogy"},
      {es:"tautología", en:"tautology"},
      {es:"trilogía", en:"trilogy"},
      {es:"apología", en:"apology"},
      {es:"gemología", en:"gemology"},
      {es:"virología", en:"virology"},
      {es:"toxicología", en:"toxicology"},
      {es:"cosmología", en:"cosmology"},
      {es:"musicología", en:"musicology"},
      {es:"numerología", en:"numerology"},
      {es:"escatología", en:"scatology"},
      {es:"embriología", en:"embryology"},
      {es:"urología", en:"urology"},
      {es:"sismología", en:"seismology"}
    ];
REGLA16_EXCEPCIONES = [
      {es:"apología", nota:"apology en inglés significa simplemente 'disculpa', no un discurso de defensa formal — falso amigo parcial a tener en cuenta"},
      {es:"analogía", nota:"analogy (se pierde la tilde y una vocal, pero el patrón general se mantiene)"}
    ];

REGLA17_PALABRAS = [
      {es:"nacional", en:"national"},
      {es:"internacional", en:"international"},
      {es:"tradicional", en:"traditional"},
      {es:"educacional", en:"educational"},
      {es:"emocional", en:"emotional"},
      {es:"funcional", en:"functional"},
      {es:"opcional", en:"optional"},
      {es:"adicional", en:"additional"},
      {es:"proporcional", en:"proportional"},
      {es:"convencional", en:"conventional"},
      {es:"institucional", en:"institutional"},
      {es:"promocional", en:"promotional"},
      {es:"vocacional", en:"vocational"},
      {es:"profesional", en:"professional"},
      {es:"recreacional", en:"recreational"},
      {es:"transaccional", en:"transactional"},
      {es:"operacional", en:"operational"},
      {es:"regional", en:"regional"},
      {es:"multinacional", en:"multinational"},
      {es:"transnacional", en:"transnational"},
      {es:"generacional", en:"generational"},
      {es:"condicional", en:"conditional"},
      {es:"excepcional", en:"exceptional"},
      {es:"direccional", en:"directional"},
      {es:"transicional", en:"transitional"},
      {es:"sensacional", en:"sensational"},
      {es:"situacional", en:"situational"},
      {es:"confesional", en:"confessional"},
      {es:"devocional", en:"devotional"},
      {es:"inspiracional", en:"inspirational"},
      {es:"sesional", en:"sessional"},
      {es:"relacional", en:"relational"},
      {es:"aspiracional", en:"aspirational"}
    ];
REGLA17_EXCEPCIONES = [
      {es:"profesional / regional", nota:"estas dos ya terminan en -al simple en español ('profesión'+al no es -cional propiamente), pero el inglés también usa -al, no -tional — mejor pensarlas dentro de la Regla 12"},
      {es:"racional", nota:"rational (viene de 'razón/ratio', no sigue -cional→-tional aquí, sino -al→-al de la Regla 12)"}
    ];

REGLA18_PALABRAS = [
      {es:"crear", en:"to create"},
      {es:"generar", en:"to generate"},
      {es:"celebrar", en:"to celebrate"},
      {es:"decorar", en:"to decorate"},
      {es:"navegar", en:"to navigate"},
      {es:"comunicar", en:"to communicate"},
      {es:"educar", en:"to educate"},
      {es:"dedicar", en:"to dedicate"},
      {es:"indicar", en:"to indicate"},
      {es:"terminar", en:"to terminate"},
      {es:"originar", en:"to originate"},
      {es:"activar", en:"to activate"},
      {es:"motivar", en:"to motivate"},
      {es:"cultivar", en:"to cultivate"},
      {es:"calcular", en:"to calculate"},
      {es:"regular", en:"to regulate"},
      {es:"evaluar", en:"to evaluate"},
      {es:"graduar", en:"to graduate"},
      {es:"iniciar", en:"to initiate"},
      {es:"negociar", en:"to negotiate"},
      {es:"apreciar", en:"to appreciate"},
      {es:"asociar", en:"to associate"},
      {es:"eliminar", en:"to eliminate"},
      {es:"discriminar", en:"to discriminate"},
      {es:"contaminar", en:"to contaminate"},
      {es:"dominar", en:"to dominate"},
      {es:"estimular", en:"to stimulate"},
      {es:"simular", en:"to simulate"},
      {es:"acumular", en:"to accumulate"},
      {es:"manipular", en:"to manipulate"},
      {es:"formular", en:"to formulate"},
      {es:"especular", en:"to speculate"},
      {es:"circular", en:"to circulate"},
      {es:"articular", en:"to articulate"},
      {es:"calibrar", en:"to calibrate"},
      {es:"colaborar", en:"to collaborate"},
      {es:"cooperar", en:"to cooperate"},
      {es:"operar", en:"to operate"},
      {es:"separar", en:"to separate"},
      {es:"preparar", en:"to prepare"},
      {es:"anticipar", en:"to anticipate"},
      {es:"participar", en:"to participate"},
      {es:"integrar", en:"to integrate"},
      {es:"migrar", en:"to migrate"},
      {es:"emigrar", en:"to emigrate"},
      {es:"delegar", en:"to delegate"},
      {es:"legislar", en:"to legislate"},
      {es:"facilitar", en:"to facilitate"},
      {es:"exagerar", en:"to exaggerate"},
      {es:"investigar", en:"to investigate"}
    ];
REGLA18_EXCEPCIONES = [
      {es:"preparar", nota:"to prepare (NO usa -ate — es una excepción importante, ya que sigue el patrón simple -ar→-e)"},
      {es:"operar", nota:"to operate sí funciona para 'operar' en sentido médico/técnico; para 'operar un negocio' también se usa 'to run'"},
      {es:"legislar", nota:"to legislate es correcto y común, aunque también se usa 'to make laws' en un registro más simple"}
    ];


REGLA19_PALABRAS = [
      {es:"organizar", en:"to organize"},
      {es:"realizar", en:"to realize"},
      {es:"utilizar", en:"to utilize"},
      {es:"finalizar", en:"to finalize"},
      {es:"minimizar", en:"to minimize"},
      {es:"maximizar", en:"to maximize"},
      {es:"optimizar", en:"to optimize"},
      {es:"analizar", en:"to analyze"},
      {es:"memorizar", en:"to memorize"},
      {es:"personalizar", en:"to personalize"},
      {es:"caracterizar", en:"to characterize"},
      {es:"categorizar", en:"to categorize"},
      {es:"visualizar", en:"to visualize"},
      {es:"normalizar", en:"to normalize"},
      {es:"actualizar", en:"to update"},
      {es:"modernizar", en:"to modernize"},
      {es:"civilizar", en:"to civilize"},
      {es:"colonizar", en:"to colonize"},
      {es:"socializar", en:"to socialize"},
      {es:"globalizar", en:"to globalize"},
      {es:"legalizar", en:"to legalize"},
      {es:"idealizar", en:"to idealize"},
      {es:"simbolizar", en:"to symbolize"},
      {es:"generalizar", en:"to generalize"},
      {es:"especializar", en:"to specialize"},
      {es:"estabilizar", en:"to stabilize"},
      {es:"neutralizar", en:"to neutralize"},
      {es:"paralizar", en:"to paralyze"},
      {es:"esterilizar", en:"to sterilize"},
      {es:"fertilizar", en:"to fertilize"},
      {es:"cristalizar", en:"to crystallize"},
      {es:"monopolizar", en:"to monopolize"},
      {es:"canalizar", en:"to channel"},
      {es:"sintetizar", en:"to synthesize"},
      {es:"hipnotizar", en:"to hypnotize"},
      {es:"empatizar", en:"to empathize"},
      {es:"enfatizar", en:"to emphasize"},
      {es:"dramatizar", en:"to dramatize"},
      {es:"traumatizar", en:"to traumatize"},
      {es:"estigmatizar", en:"to stigmatize"},
      {es:"automatizar", en:"to automate"},
      {es:"digitalizar", en:"to digitize"},
      {es:"industrializar", en:"to industrialize"},
      {es:"materializar", en:"to materialize"},
      {es:"revolucionar", en:"to revolutionize"},
      {es:"popularizar", en:"to popularize"},
      {es:"formalizar", en:"to formalize"},
      {es:"centralizar", en:"to centralize"},
      {es:"descentralizar", en:"to decentralize"},
      {es:"priorizar", en:"to prioritize"}
    ];
REGLA19_EXCEPCIONES = [
      {es:"actualizar", nota:"to update (NO usa -ize — es una excepción común y muy usada en tecnología)"},
      {es:"canalizar", nota:"to channel (NO usa -ize en el uso más común)"},
      {es:"automatizar", nota:"to automate (usa -ate, no -ize, aunque comparte la misma familia de sentido)"},
      {es:"digitalizar", nota:"to digitize (pierde la sílaba 'al' en inglés)"},
      {es:"revolucionar", nota:"to revolutionize (en español no termina en -izar sino en -ionar, pero el inglés sí sigue -ize)"}
    ];

REGLA20_PALABRAS = [
      {es:"clasificar", en:"to classify"},
      {es:"identificar", en:"to identify"},
      {es:"justificar", en:"to justify"},
      {es:"verificar", en:"to verify"},
      {es:"modificar", en:"to modify"},
      {es:"calificar", en:"to qualify"},
      {es:"simplificar", en:"to simplify"},
      {es:"purificar", en:"to purify"},
      {es:"clarificar", en:"to clarify"},
      {es:"notificar", en:"to notify"},
      {es:"certificar", en:"to certify"},
      {es:"especificar", en:"to specify"},
      {es:"unificar", en:"to unify"},
      {es:"amplificar", en:"to amplify"},
      {es:"solidificar", en:"to solidify"},
      {es:"personificar", en:"to personify"},
      {es:"intensificar", en:"to intensify"},
      {es:"diversificar", en:"to diversify"},
      {es:"falsificar", en:"to falsify"},
      {es:"rectificar", en:"to rectify"},
      {es:"glorificar", en:"to glorify"},
      {es:"testificar", en:"to testify"},
      {es:"gratificar", en:"to gratify"},
      {es:"pacificar", en:"to pacify"},
      {es:"electrificar", en:"to electrify"},
      {es:"codificar", en:"to codify"},
      {es:"cuantificar", en:"to quantify"},
      {es:"dignificar", en:"to dignify"},
      {es:"beatificar", en:"to beatify"},
      {es:"mortificar", en:"to mortify"},
      {es:"fortificar", en:"to fortify"},
      {es:"significar", en:"to signify"},
      {es:"edificar", en:"to build"},
      {es:"planificar", en:"to plan"},
      {es:"santificar", en:"to sanctify"}
    ];
REGLA20_EXCEPCIONES = [
      {es:"calificar", nota:"to qualify (NO usa -ify directo desde 'calificar' — cambia la raíz)"},
      {es:"edificar", nota:"to build es lo más natural en inglés cotidiano; 'to edify' existe pero significa 'instruir moralmente', un falso amigo"},
      {es:"planificar", nota:"to plan es lo más común; 'to planify' no existe en inglés estándar"}
    ];

REGLA21_PALABRAS = [
      {es:"transformar", en:"to transform"},
      {es:"reformar", en:"to reform"},
      {es:"conformar", en:"to conform"},
      {es:"deformar", en:"to deform"},
      {es:"informar", en:"to inform"},
      {es:"reafirmar", en:"to reaffirm"},
      {es:"formatear", en:"to format"},
      {es:"reformular", en:"to reformulate"},
      {es:"preformar", en:"to preform"}
    ];
REGLA21_EXCEPCIONES = [
      {es:"confirmar", nota:"to confirm (usa 'con-' + 'firm', no 'con-' + 'form' — es de otra familia de raíz, aunque suene parecida)"},
      {es:"performar", nota:"esta palabra no existe en español estándar — 'actuar' o 'rendir' se traducen como 'to perform', pero no hay verbo español '-formar' equivalente"}
    ];

REGLA22_PALABRAS = [
      {es:"decidir", en:"to decide"},
      {es:"dividir", en:"to divide"},
      {es:"invertir", en:"to invest"},
      {es:"extender", en:"to extend"},
      {es:"comprender", en:"to understand"},
      {es:"pretender", en:"to intend"},
      {es:"ascender", en:"to ascend"},
      {es:"descender", en:"to descend"},
      {es:"expandir", en:"to expand"},
      {es:"confundir", en:"to confuse"},
      {es:"persuadir", en:"to persuade"},
      {es:"convertir", en:"to convert"},
      {es:"revertir", en:"to revert"},
      {es:"divertir", en:"to entertain"},
      {es:"discutir", en:"to discuss"},
      {es:"admitir", en:"to admit"},
      {es:"omitir", en:"to omit"},
      {es:"transmitir", en:"to transmit"},
      {es:"emitir", en:"to emit"},
      {es:"remitir", en:"to remit"},
      {es:"suprimir", en:"to suppress"},
      {es:"comprimir", en:"to compress"},
      {es:"deprimir", en:"to depress"},
      {es:"expresar", en:"to express"},
      {es:"impresionar", en:"to impress"},
      {es:"progresar", en:"to progress"},
      {es:"agredir", en:"to attack"},
      {es:"poseer", en:"to possess"},
      {es:"profesar", en:"to profess"},
      {es:"conceder", en:"to concede"},
      {es:"proceder", en:"to proceed"},
      {es:"exceder", en:"to exceed"},
      {es:"suceder", en:"to succeed"},
      {es:"invadir", en:"to invade"},
      {es:"evadir", en:"to evade"},
      {es:"colisionar", en:"to collide"},
      {es:"explotar", en:"to explode"},
      {es:"fusionar", en:"to fuse"},
      {es:"ceder", en:"to cede"},
      {es:"preceder", en:"to precede"}
    ];
REGLA22_EXCEPCIONES = [
      {es:"comprender", nota:"to understand es lo más natural; 'to comprehend' existe y es más formal, pero ambos dan 'comprensión/comprehension'"},
      {es:"pretender", nota:"to intend (falso amigo importante: pretender en español NO es 'to pretend' en inglés, que significa 'fingir')"},
      {es:"divertir", nota:"to entertain (en sentido de divertir a otros); 'to have fun' se usa para 'divertirse' en sentido reflexivo"},
      {es:"agredir", nota:"to attack (no hay un verbo inglés '-gress' de uso común aquí, aunque 'aggression' sí existe como sustantivo)"}
    ];


const cognados = {
  reglas: [
    { id:1, nombre:"Regla 1", patron:"-ción → -tion", disponible:true,
      explicacion:"Una de las reglas más fiables del inglés. Casi cualquier palabra española terminada en -ción tiene su gemela directa en inglés terminada en -tion. Se pronuncia como \"shion\", no como se lee en español.",
      palabras: REGLA1_PALABRAS, excepciones: REGLA1_EXCEPCIONES },
    { id:2, nombre:"Regla 2", patron:"-dad → -ty", disponible:true,
      explicacion:"Muy fiable, con pocas excepciones. Las palabras españolas terminadas en -dad casi siempre se convierten en -ty en inglés. Un grupo pequeño usa \"-tad\" en vez de \"-dad\" (libertad→liberty, lealtad→loyalty).",
      palabras: REGLA2_PALABRAS, excepciones: REGLA2_EXCEPCIONES },
    { id:3, nombre:"Regla 3", patron:"-mente → -ly", disponible:true,
      explicacion:"100% mecánica: se toma el adjetivo en inglés y se le agrega -ly, igual que en español se agrega -mente al adjetivo. Se agrega a la forma FEMENINA del adjetivo (claramente, no claromente).",
      palabras: REGLA3_PALABRAS, excepciones: REGLA3_EXCEPCIONES },
    { id:4, nombre:"Regla 4", patron:"-ico/-ica → -ic / -ical", disponible:true,
      explicacion:"Muy productiva en vocabulario técnico, científico y de adjetivos descriptivos. La forma \"-ic\" es la más común; \"-ical\" aparece cuando el adjetivo describe un campo de estudio o categoría más amplia (histórico→historical, técnico→technical), mientras que \"-ic\" solo se usa para casos más puntuales o cuando ya existe una forma corta establecida (básico→basic, específico→specific). Muchas palabras aceptan ambas formas con matices de uso.",
      palabras: REGLA4_PALABRAS, excepciones: REGLA4_EXCEPCIONES },
    { id:5, nombre:"Regla 5", patron:"-oso/-osa → -ous", disponible:true,
      explicacion:"Muy fiable para adjetivos que describen cualidades o características. La terminación española \"-oso/-osa\" corresponde casi siempre a \"-ous\" en inglés, sin importar el género del adjetivo en español (la forma inglesa no cambia). Es una de las familias más grandes y productivas de adjetivos cognados.",
      palabras: REGLA5_PALABRAS, excepciones: REGLA5_EXCEPCIONES },
    { id:6, nombre:"Regla 6", patron:"-ismo → -ism", disponible:true,
      explicacion:"Extremadamente fiable — casi sin excepciones. Se usa para nombrar doctrinas, movimientos, condiciones, y sistemas de creencias. La conversión es mecánica: se quita la \"o\" final de \"-ismo\" y queda \"-ism\". Es una de las familias de cognados más fáciles de todo el idioma.",
      palabras: REGLA6_PALABRAS, excepciones: REGLA6_EXCEPCIONES },
    { id:7, nombre:"Regla 7", patron:"-ista → -ist", disponible:true,
      explicacion:"Muy fiable para nombrar profesiones, seguidores de una ideología, o practicantes de una actividad. La terminación española \"-ista\" (que no cambia según género en español) se convierte en \"-ist\" en inglés, sin importar si la persona es hombre o mujer.",
      palabras: REGLA7_PALABRAS, excepciones: REGLA7_EXCEPCIONES },
    { id:8, nombre:"Regla 8", patron:"-ivo/-iva → -ive", disponible:true,
      explicacion:"Muy fiable y productiva para adjetivos que describen tendencias, capacidades o funciones. La terminación española \"-ivo/-iva\" corresponde casi siempre a \"-ive\" en inglés, sin importar el género del adjetivo en español.",
      palabras: REGLA8_PALABRAS, excepciones: REGLA8_EXCEPCIONES },
    { id:9, nombre:"Regla 9", patron:"-ancia/-encia → -ance/-ence", disponible:true,
      explicacion:"Muy productiva para sustantivos abstractos. La terminación española \"-ancia\" corresponde a \"-ance\" en inglés, y \"-encia\" corresponde a \"-ence\" — el patrón es consistente en ambos casos, solo cambia la vocal según cuál termine la palabra en español.",
      palabras: REGLA9_PALABRAS, excepciones: REGLA9_EXCEPCIONES },
    { id:10, nombre:"Regla 10", patron:"-tud → -tude", disponible:true,
      explicacion:"Familia pequeña pero muy fiable de sustantivos abstractos. La terminación española \"-tud\" corresponde directamente a \"-tude\" en inglés, sin cambios en la raíz de la palabra.",
      palabras: REGLA10_PALABRAS, excepciones: REGLA10_EXCEPCIONES },
    { id:11, nombre:"Regla 11", patron:"-ente/-ante → -ent/-ant", disponible:true,
      explicacion:"Muy productiva para adjetivos y sustantivos que describen a alguien o algo que realiza una acción. La terminación española \"-ente\" corresponde a \"-ent\" en inglés, y \"-ante\" corresponde a \"-ant\" — el patrón depende de cuál de las dos vocales use la palabra en español.",
      palabras: REGLA11_PALABRAS, excepciones: REGLA11_EXCEPCIONES },
    { id:12, nombre:"Regla 12", patron:"-al → -al (idéntica)", disponible:true,
      explicacion:"Una de las familias más grandes y sencillas: cientos de adjetivos españoles terminados en \"-al\" se escriben exactamente igual en inglés, sin ningún cambio. Solo cambia la pronunciación. Es ideal para ganar vocabulario rápido, aunque hay que tener cuidado con algunas excepciones donde el significado no coincide del todo.",
      palabras: REGLA12_PALABRAS, excepciones: REGLA12_EXCEPCIONES },
    { id:13, nombre:"Regla 13", patron:"-ario/-aria → -ary", disponible:true,
      explicacion:"Muy fiable para adjetivos y sustantivos relacionados con funciones, documentos o períodos de tiempo. La terminación española \"-ario/-aria\" corresponde a \"-ary\" en inglés, sin importar el género del sustantivo o adjetivo en español.",
      palabras: REGLA13_PALABRAS, excepciones: REGLA13_EXCEPCIONES },
    { id:14, nombre:"Regla 14", patron:"-orio/-oria → -ory", disponible:true,
      explicacion:"Familia mediana pero consistente. La terminación española \"-orio/-oria\" corresponde a \"-ory\" en inglés, usada sobre todo en adjetivos que describen función o propósito, y en algunos sustantivos de lugar.",
      palabras: REGLA14_PALABRAS, excepciones: REGLA14_EXCEPCIONES },
    { id:15, nombre:"Regla 15", patron:"-sión → -sion", disponible:true,
      explicacion:"Hermana de la Regla 1 (-ción→-tion), pero para palabras que en español terminan en \"-sión\" en vez de \"-ción\". La conversión también es directa: se quita el acento y queda \"-sion\" en inglés. Se pronuncia como \"zhon\", con sonido más suave que \"-tion\".",
      palabras: REGLA15_PALABRAS, excepciones: REGLA15_EXCEPCIONES },
    { id:16, nombre:"Regla 16", patron:"-logía → -logy", disponible:true,
      explicacion:"Extremadamente fiable — prácticamente sin excepciones. Se usa para nombrar ciencias, disciplinas y campos de estudio. La conversión es mecánica: se quita la \"í\" y la \"a\" final de \"-logía\" y queda \"-logy\".",
      palabras: REGLA16_PALABRAS, excepciones: REGLA16_EXCEPCIONES },
    { id:17, nombre:"Regla 17", patron:"-cional → -tional", disponible:true,
      explicacion:"Familia relacionada con la Regla 1, pero para adjetivos derivados de sustantivos en -ción. La terminación española \"-cional\" corresponde a \"-tional\" en inglés — se agrega \"-al\" a la palabra ya conocida en -tion.",
      palabras: REGLA17_PALABRAS, excepciones: REGLA17_EXCEPCIONES },
    { id:18, nombre:"Regla 18", patron:"-ar → to -ate (verbos)", disponible:true,
      explicacion:"Nuestra primera regla de VERBOS. Muchos verbos españoles terminados en \"-ar\" se convierten en verbos ingleses terminados en \"-ate\". Es muy común en verbos que describen procesos, cambios de estado o acciones formales.",
      palabras: REGLA18_PALABRAS, excepciones: REGLA18_EXCEPCIONES },
    { id:19, nombre:"Regla 19", patron:"-izar → to -ize (verbos)", disponible:true,
      explicacion:"Muy productiva para verbos que describen procesos de transformación o la aplicación de un concepto. La terminación española \"-izar\" corresponde a \"-ize\" en inglés — se quita \"-ar\" y queda \"-ize\".",
      palabras: REGLA19_PALABRAS, excepciones: REGLA19_EXCEPCIONES },
    { id:20, nombre:"Regla 20", patron:"-ificar → to -ify (verbos)", disponible:true,
      explicacion:"Familia de verbos que describen el proceso de convertir algo en cierto estado o cualidad. La terminación española \"-ificar\" corresponde a \"-ify\" en inglés — se quita \"-icar\" y queda \"-ify\".",
      palabras: REGLA20_PALABRAS, excepciones: REGLA20_EXCEPCIONES },
    { id:21, nombre:"Regla 21", patron:"-formar → to -form (verbos)", disponible:true,
      explicacion:"Familia más chica pero clara. La terminación española \"-formar\" corresponde a \"-form\" en inglés — se quita \"-ar\" y queda directamente el verbo en inglés.",
      palabras: REGLA21_PALABRAS, excepciones: REGLA21_EXCEPCIONES },
    { id:22, nombre:"Regla 22", patron:"-der/-dir/-tir → -sión (verbo+sustantivo)", disponible:true,
      explicacion:"Última regla, y la más avanzada: conecta el VERBO español (terminado en -der, -dir o -tir) con su sustantivo hermano en -sión que ya viste en la Regla 15. Por ejemplo, de \"decidir\" sale \"decisión\" (decision), y el verbo en inglés es \"to decide\". Aprender el verbo te da acceso inmediato al sustantivo relacionado.",
      palabras: REGLA22_PALABRAS, excepciones: REGLA22_EXCEPCIONES }
  ]
};

// ================= Controlador de pantallas (independiente del motor principal) =================
(function(){
  let currentReglaId = null;
  let practicaItems = [], practicaIdx = 0, practicaOk = 0, practicaGraded = 0;

  function el(id){ return document.getElementById(id); }

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

  // ================= Progreso de Cognados (independiente del progreso del curso principal) =================
  const CG_PROGRESO_KEY = 'cognados_progreso_v1';

  function cargarProgresoCG(){
    try{
      const raw = localStorage.getItem(CG_PROGRESO_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch(e){ return {}; }
  }
  function guardarProgresoCG(progreso){
    try{ localStorage.setItem(CG_PROGRESO_KEY, JSON.stringify(progreso)); } catch(e){}
  }
  function marcarReglaCompletada(reglaId){
    const progreso = cargarProgresoCG();
    progreso[reglaId] = true;
    guardarProgresoCG(progreso);
  }
  function reglaCompletada(reglaId){
    const progreso = cargarProgresoCG();
    return !!progreso[reglaId];
  }
  // Una regla está desbloqueada para el alumno si tiene contenido, y (es la Regla 1, o la regla anterior está completa).
  // El admin ve todo desbloqueado sin importar el progreso.
  function reglaDesbloqueada(regla){
    if(!regla.disponible) return false;
    if(typeof isAdmin === 'function' && isAdmin()) return true;
    if(regla.id === 1) return true;
    return reglaCompletada(regla.id - 1);
  }

  function openModule(){
    el('home').style.display='none';
    el('cognadosModulo').style.display='block';
    renderReglaList();
    showView('reglas');
  }
  function closeModule(){
    el('cognadosModulo').style.display='none';
    el('home').style.display='block';
  }
  function showView(view){
    el('cgReglaList').style.display = view==='reglas' ? 'block' : 'none';
    el('cgReglaDetalle').style.display = view==='detalle' ? 'block' : 'none';
    el('cgPracticaView').style.display = view==='practica' ? 'block' : 'none';
    el('cgPracticaHabladaView').style.display = view==='practicaHablada' ? 'block' : 'none';
  }

  function renderReglaList(){
    const box = el('cgReglaList');
    box.innerHTML='';
    cognados.reglas.forEach(regla=>{
      const card = document.createElement('div');
      card.className='cg-regla-card';
      const desbloqueada = reglaDesbloqueada(regla);
      let infoTxt;
      if(!regla.disponible){ infoTxt = 'Próximamente'; }
      else if(!desbloqueada){ infoTxt = 'Completa la Regla '+(regla.id-1)+' para desbloquear'; }
      else { infoTxt = regla.palabras.length+' palabras · '+regla.excepciones.length+' excepciones'; }
      card.innerHTML = '<div class="cg-regla-num">'+regla.id+(desbloqueada && regla.disponible && reglaCompletada(regla.id) ? ' ✅':'')+'</div>'
        +'<div class="cg-regla-info"><b>'+regla.nombre+' — '+regla.patron+'</b><p>'+infoTxt+'</p></div>'
        +'<div class="cg-regla-arrow">'+(desbloqueada?'▶':'🔒')+'</div>';
      if(desbloqueada){
        card.onclick=()=>{ currentReglaId=regla.id; renderReglaDetalle(regla.id); showView('detalle'); };
      } else {
        card.style.opacity='0.5'; card.style.cursor='default';
      }
      box.appendChild(card);
    });
  }

  function renderReglaDetalle(reglaId){
    const regla = cognados.reglas.find(r=>r.id===reglaId);
    el('cgDetalleTitulo').textContent = regla.nombre+' — '+regla.patron;
    el('cgDetalleExplicacion').textContent = regla.explicacion;

    let html = '<table class="cg-tabla"><tr><th>Español</th><th>Inglés</th></tr>';
    regla.palabras.forEach(p=>{
      html += '<tr><td>'+p.es+'</td><td><b>'+p.en+'</b></td></tr>';
    });
    html += '</table>';
    el('cgPalabrasBox').innerHTML = html;

    if(regla.excepciones.length){
      let excHtml = '<div class="cg-exc-titulo">Excepciones — palabras que parecen seguir la regla pero NO la siguen:</div>';
      regla.excepciones.forEach(e=>{
        excHtml += '<div class="cg-exc-item"><b>'+e.es+':</b> '+e.nota+'</div>';
      });
      el('cgExcepcionesBox').innerHTML = excHtml;
    } else {
      el('cgExcepcionesBox').innerHTML = '';
    }
  }

  // ================= Modo práctica =================
  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  function openPractica(){
    const regla = cognados.reglas.find(r=>r.id===currentReglaId);
    const pool = shuffle(regla.palabras).slice(0, Math.min(15, regla.palabras.length));
    practicaItems = pool;
    practicaIdx=0; practicaOk=0; practicaGraded=0;
    el('cgPracticaTitulo').textContent = 'Práctica — '+regla.nombre;
    el('cgPracticaHint').textContent = pool.length+' palabras de esta regla. Escribí el equivalente en inglés.';
    showView('practica');
    showPracticaItem();
  }

  function showPracticaItem(){
    if(practicaIdx>=practicaItems.length){ showPracticaResumen(); return; }
    const item = practicaItems[practicaIdx];
    el('cgPracticaInput').value='';
    el('cgPracticaFeedback').style.display='none';
    el('cgPracticaNextRow').style.display='none';
    el('cgPracticaPrompt').innerHTML = '<div class="cg-es-grande">'+item.es+'</div>';
    el('cgPracticaInput').placeholder='Escribí el equivalente en inglés...';
    el('cgPracticaInput').focus();

    // El modo admin no necesita completar cada palabra para poder seguir —
    // el botón "Siguiente" queda disponible de entrada, sin exigir respuesta.
    if(typeof isAdmin === 'function' && isAdmin()){
      mostrarNextRow('cgPracticaNextRow');
      el('cgPracticaNextBtn').textContent = (practicaIdx+1<practicaItems.length) ? 'Siguiente →' : 'Ver resultado →';
    }
  }

  function submitPracticaAnswer(){
    const said = el('cgPracticaInput').value.trim();
    if(!said) return;
    const item = practicaItems[practicaIdx];
    const box = el('cgPracticaFeedback');
    box.style.display='block';
    const isRight = practicaAnswerMatches(said, item.en, true);
    practicaGraded++; if(isRight) practicaOk++;
    box.className='cg-practica-feedback '+(isRight?'ok':'retry');
    box.textContent = (isRight?'✓ ¡Correcto! ':'✗ Casi — la respuesta correcta era: ')+'"'+item.en+'"';
    mostrarNextRow('cgPracticaNextRow');
    el('cgPracticaNextBtn').textContent = (practicaIdx+1<practicaItems.length) ? 'Siguiente →' : 'Ver resultado →';
  }

  function showPracticaResumen(){
    marcarReglaCompletada(currentReglaId);
    el('cgPracticaPrompt').innerHTML = '<b>Resultado: '+practicaOk+' de '+practicaGraded+'</b><br><span style="color:var(--muted);font-size:13px;">✅ Regla completada — puedes repetir esta práctica cuantas veces quieras.</span>';
    el('cgPracticaInput').style.display='none';
    el('cgPracticaSendBtn').style.display='none';
    el('cgPracticaFeedback').style.display='none';
    mostrarNextRow('cgPracticaNextRow');
    el('cgPracticaNextBtn').textContent='🔁 Repetir esta práctica';
    el('cgPracticaNextBtn').onclick = ()=>{
      el('cgPracticaInput').style.display='';
      el('cgPracticaSendBtn').style.display='inline-flex';
      openPractica();
    };
  }

  // ================= Práctica hablada (grabador propio, no comparte el del curso principal) =================
  let recStreamCG=null, recMediaRecorderCG=null, recChunksCG=[], recIsRecordingCG=false;

  function openPracticaHablada(){
    const regla = cognados.reglas.find(r=>r.id===currentReglaId);
    practicaItems = shuffle(regla.palabras).slice(0, Math.min(15, regla.palabras.length));
    practicaIdx=0;
    el('cgPracticaHabladaTitulo').textContent = 'Práctica hablada — '+regla.nombre;
    el('cgPracticaHabladaHint').textContent = practicaItems.length+' palabras. Escucha, grábate diciéndola, y compara.';
    showView('practicaHablada');
    showPracticaHabladaItem();
  }

  function showPracticaHabladaItem(){
    if(practicaIdx>=practicaItems.length){
      marcarReglaCompletada(currentReglaId);
      el('cgPracticaHabladaBox').innerHTML = '<b>¡Terminaste esta práctica!</b><br><span style="color:var(--muted); font-size:13px;">✅ Regla completada — puedes repetirla cuantas veces quieras.</span>';
      mostrarNextRow('cgPracticaHabladaNextRow');
      el('cgPracticaHabladaNextBtn').textContent='🔁 Repetir esta práctica';
      el('cgPracticaHabladaNextBtn').onclick = openPracticaHablada;
      return;
    }
    const item = practicaItems[practicaIdx];
    const box = el('cgPracticaHabladaBox');
    box.innerHTML = '';

    const palabraEs = document.createElement('div');
    palabraEs.style.cssText='color:var(--muted); font-size:14px; margin-bottom:4px;';
    palabraEs.textContent = item.es;
    box.appendChild(palabraEs);

    const palabra = document.createElement('div');
    palabra.className='cg-es-grande';
    palabra.textContent = item.en;
    box.appendChild(palabra);

    const listenBtn = document.createElement('button');
    listenBtn.className='mic';
    listenBtn.textContent='🔊 Escuchar pronunciación';
    listenBtn.onclick = async ()=>{
      listenBtn.disabled=true;
      await speakHidden(item.en);
      listenBtn.disabled=false;
    };
    box.appendChild(listenBtn);

    const panel = document.createElement('div'); panel.className='record-panel'; panel.style.marginTop='14px';
    const cgRecordBtn = document.createElement('button'); cgRecordBtn.className='ghost'; cgRecordBtn.textContent='🎙️ Grabame diciendo esta palabra';
    const cgPlayback = document.createElement('audio'); cgPlayback.controls=true; cgPlayback.style.display='none';
    const cgReRecordBtn = document.createElement('button'); cgReRecordBtn.className='ghost'; cgReRecordBtn.style.display='none'; cgReRecordBtn.textContent='🔁 Borrar y grabar de nuevo';
    panel.appendChild(cgRecordBtn); panel.appendChild(cgPlayback); panel.appendChild(cgReRecordBtn);
    box.appendChild(panel);

    cgRecordBtn.onclick = async ()=>{
      if(recIsRecordingCG){
        if(recMediaRecorderCG && recMediaRecorderCG.state!=='inactive') recMediaRecorderCG.stop();
        return;
      }
      try{
        if(!recStreamCG){ recStreamCG = await navigator.mediaDevices.getUserMedia({audio:true}); }
      }catch(e){
        alert('No se pudo acceder al micrófono para grabar tu voz.');
        return;
      }
      recChunksCG=[];
      recMediaRecorderCG = new MediaRecorder(recStreamCG);
      recMediaRecorderCG.ondataavailable = (e)=>{ if(e.data && e.data.size>0) recChunksCG.push(e.data); };
      recMediaRecorderCG.onstop = ()=>{
        recIsRecordingCG=false;
        cgRecordBtn.textContent='🎙️ Grabame diciendo esta palabra';
        const blob = new Blob(recChunksCG, {type: recMediaRecorderCG.mimeType || 'audio/webm'});
        const url = URL.createObjectURL(blob);
        cgPlayback.src = url;
        cgPlayback.style.display='block';
        cgReRecordBtn.style.display='inline-flex';
        cgRecordBtn.style.display='none';
      };
      recMediaRecorderCG.start();
      recIsRecordingCG=true;
      cgRecordBtn.textContent='⏹ Detener mi grabación';
    };
    cgReRecordBtn.onclick = ()=>{
      cgPlayback.style.display='none'; cgPlayback.removeAttribute('src');
      cgReRecordBtn.style.display='none';
      cgRecordBtn.style.display='inline-flex'; cgRecordBtn.textContent='🎙️ Grabame diciendo esta palabra';
    };

    mostrarNextRow('cgPracticaHabladaNextRow');
    el('cgPracticaHabladaNextBtn').textContent = (practicaIdx+1<practicaItems.length) ? 'Siguiente →' : 'Ver resultado →';
    el('cgPracticaHabladaNextBtn').onclick = ()=>{ practicaIdx++; showPracticaHabladaItem(); };
  }

  window.addEventListener('DOMContentLoaded', ()=>{
    el('cgEntryBtn').onclick = openModule;
    el('cgBackBtn').onclick = closeModule;
    el('cgBackToReglasBtn').onclick = ()=>{ showView('reglas'); renderReglaList(); };
    el('cgPracticaBtn').onclick = openPractica;
    el('cgBackFromPracticaBtn').onclick = ()=>{ showView('detalle'); };
    el('cgPracticaHabladaBtn').onclick = openPracticaHablada;
    el('cgBackFromPracticaHabladaBtn').onclick = ()=>{ showView('detalle'); };
    el('cgPracticaSendBtn').onclick = submitPracticaAnswer;
    el('cgPracticaInput').addEventListener('keydown', e=>{ if(e.key==='Enter') submitPracticaAnswer(); });
    el('cgPracticaNextBtn').onclick = ()=>{ practicaIdx++; showPracticaItem(); };
  });
})();

