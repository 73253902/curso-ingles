// Unidad 10 del curso — Días 109 a 120
// Este archivo se puede editar o reemplazar solo, sin tocar el resto del curso.
const curriculumUnidad10 = [
{
    day:109, unit:10, unitTitle:'Unidad 10 · Semanas 23-24', theme:'Bienes raíces / Alquilar o comprar propiedad',
    structures:[
      {id:'S081', pattern:"I am looking to rent + [X]", examples:[
        {en:'I am looking to rent an apartment.', es:'Estoy buscando alquilar un departamento.', pron:'ái am lúking tu rent an apártment.'},
        {en:'I am looking to buy a house.', es:'Estoy buscando comprar una casa.', pron:'ái am lúking tu bái a jáus.'},
        {en:'I am looking to lease office space.', es:'Estoy buscando arrendar un espacio de oficina.', pron:'ái am lúking tu líis áfis spéis.'},
        {en:'I am not looking to sell right now.', es:'No estoy buscando vender ahora mismo.', pron:'ái am nat lúking tu sel ráit náu.'}
      ], function:'decir qué tipo de propiedad buscás', stage:3,
        transformations:{
          negative:{en:'I am not looking to rent an apartment.', es:'No estoy buscando alquilar un departamento.'},
          question:{en:'Are you looking to rent an apartment?', es:'¿Estás buscando alquilar un departamento?'},
          yesAnswer:{en:'Yes, I am.', es:'Sí.'},
          noAnswer:{en:"No, I'm not.", es:'No.'}
        }}
    ],
    words:[
      {en:'real estate', es:'bienes raíces', pron:'ríil estéit', emoji:'🏠'},
      {en:'to rent', es:'alquilar', pron:'tu rent', emoji:'🔑'},
      {en:'to lease', es:'arrendar', pron:'tu líis', emoji:'📝'},
      {en:'landlord', es:'propietario', pron:'lándlord', emoji:'🧑‍💼'},
      {en:'tenant', es:'inquilino', pron:'ténant', emoji:'🏘️'},
      {en:'security deposit', es:'depósito de garantía', pron:'sekiúriti dipásit', emoji:'💰'},
      {en:'property value', es:'valor de la propiedad', pron:'práperti váliu', emoji:'📈'},
      {en:'mortgage', es:'hipoteca', pron:'mórguich', emoji:'🏦'},
      {en:'down payment', es:'pago inicial', pron:'dáun péiment', emoji:'💵'},
      {en:'real estate agent', es:'agente inmobiliario', pron:'ríil estéit éiyent', emoji:'🧑‍💼'}
    ],
    story:[
      {en:'I want to rent, or maybe lease, a castle in the sky — is the landlord a dragon?', es:'Quiero alquilar, o tal vez arrendar, un castillo en el cielo — ¿el propietario es un dragón?', pron:'ái uánt tu rent, or méibi líis, a cásol in de skái — is de lándlord a drágon?'},
      {en:'As a tenant, I need to pay a security deposit of one thousand gold coins.', es:'Como inquilino, necesito pagar un depósito de garantía de mil monedas de oro.', pron:'as a ténant, ái níid tu péi a sekiúriti dipásit of uán záusand góuld cóins.'},
      {en:'The property value went up because a dragon lives here now!', es:'¡El valor de la propiedad subió porque ahora vive un dragón acá!', pron:'de práperti váliu uént ap bicós a drágon livs jíar náu!'},
      {en:'I need a mortgage, and a down payment of half the treasure.', es:'Necesito una hipoteca, y un pago inicial de la mitad del tesoro.', pron:'ái níid a mórguich, and a dáun péiment of jaf de tréshur.'},
      {en:'My real estate agent found me the perfect volcano — with a view!', es:'¡Mi agente inmobiliario me encontró el volcán perfecto — con vista!', pron:'mái ríil estéit éiyent fáund mi de pérfect valkéinou — uid a viú!'}
    ],
    jingle:[
      {en:'Real estate, to rent, to lease!', es:'Bienes raíces, alquilar, ¡arrendar!', pron:'ríil estéit, tu rent, tu líis!'},
      {en:'Landlord, tenant, if you please!', es:'Propietario, inquilino, ¡por favor!', pron:'lándlord, ténant, if iú plíis!'},
      {en:'Security deposit, property value bright!', es:'Depósito de garantía, ¡valor de propiedad brillante!', pron:'sekiúriti dipásit, práperti váliu bráit!'},
      {en:'Mortgage, down payment, agent in sight!', es:'Hipoteca, pago inicial, ¡agente a la vista!', pron:'mórguich, dáun péiment, éiyent in sáit!'}
    ]
  },
{
    day:110, unit:10, unitTitle:'Unidad 10 · Semanas 23-24', theme:'Seguros / Pólizas y reclamos',
    structures:[
      {id:'S082', pattern:"This is covered under + [X]", examples:[
        {en:'This is covered under my policy.', es:'Esto está cubierto por mi póliza.', pron:'dis is cávard ánder mái pálisi.'},
        {en:'This is covered under the warranty.', es:'Esto está cubierto por la garantía.', pron:'dis is cávard ánder de uáranti.'},
        {en:'This is not covered under my insurance.', es:'Esto no está cubierto por mi seguro.', pron:'dis is nat cávard ánder mái inshúrans.'},
        {en:'This is covered under the new policy.', es:'Esto está cubierto por la nueva póliza.', pron:'dis is cávard ánder de niú pálisi.'}
      ], function:'decir qué cubre una póliza', stage:3,
        transformations:{
          negative:{en:'This is not covered under my policy.', es:'Esto no está cubierto por mi póliza.'},
          question:{en:'Is this covered under my policy?', es:'¿Esto está cubierto por mi póliza?'},
          yesAnswer:{en:'Yes, it is.', es:'Sí.'},
          noAnswer:{en:"No, it isn't.", es:'No.'}
        }}
    ],
    words:[
      {en:'insurance policy', es:'póliza de seguro', pron:'inshúrans pálisi', emoji:'📜'},
      {en:'premium', es:'prima del seguro', pron:'príimium', emoji:'💲'},
      {en:'coverage limit', es:'límite de cobertura', pron:'cáverich límit', emoji:'📏'},
      {en:'to file a claim', es:'presentar un reclamo', pron:'tu fáil a kléim', emoji:'📋'},
      {en:'beneficiary', es:'beneficiario', pron:'benefíshari', emoji:'🧑'},
      {en:'insurance agent', es:'agente de seguros', pron:'inshúrans éiyent', emoji:'🧑‍💼'},
      {en:'risk assessment', es:'evaluación de riesgo', pron:'risk asésment', emoji:'⚠️'},
      {en:'policyholder', es:'titular de la póliza', pron:'pálisijóulder', emoji:'🪪'},
      {en:'exclusion', es:'exclusión', pron:'exclúshon', emoji:'🚫'},
      {en:'premium payment', es:'pago de la prima', pron:'príimium péiment', emoji:'💵'}
    ],
    story:[
      {en:'This insurance policy covers fire damage — very useful for a dragon!', es:'¡Esta póliza de seguro cubre daños por fuego — muy útil para un dragón!', pron:'dis inshúrans pálisi cávers fáiar dámich — véri iúsful for a drágon!'},
      {en:'My premium is high, but the coverage limit is a whole mountain of gold!', es:'Mi prima es alta, ¡pero el límite de cobertura es una montaña entera de oro!', pron:'mái príimium is jái, bat de cáverich límit is a jóul máuntain of góuld!'},
      {en:'I need to file a claim — my castle burned down, ironically, by my own fire!', es:'Necesito presentar un reclamo — mi castillo se quemó, irónicamente, ¡con mi propio fuego!', pron:'ái níid tu fáil a kléim — mái cásol bernd dáun, aironicáli, bái mái óun fáiar!'},
      {en:'The beneficiary of this policy is my youngest dragon egg.', es:'El beneficiario de esta póliza es mi huevo de dragón más joven.', pron:'de benefíshari of dis pálisi is mái iángest drágon eg.'},
      {en:'My insurance agent did a risk assessment, and found one exclusion: volcano eruptions!', es:'Mi agente de seguros hizo una evaluación de riesgo, ¡y encontró una exclusión: erupciones de volcán!', pron:'mái inshúrans éiyent did a risk asésment, and fáund uán exclúshon: valkéinou irápshons!'}
    ],
    jingle:[
      {en:'Insurance policy, premium too!', es:'Póliza de seguro, ¡prima también!', pron:'inshúrans pálisi, príimium tú!'},
      {en:'Coverage limit, all for you!', es:'Límite de cobertura, ¡todo para ti!', pron:'cáverich límit, ol for iú!'},
      {en:'File a claim, beneficiary clear!', es:'Presentá un reclamo, ¡beneficiario claro!', pron:'fáil a kléim, benefíshari clíar!'},
      {en:'Insurance agent, risk assessment near!', es:'Agente de seguros, ¡evaluación de riesgo cerca!', pron:'inshúrans éiyent, risk asésment níar!'}
    ]
  },
{
    day:111, unit:10, unitTitle:'Unidad 10 · Semanas 23-24', theme:'Sistema de salud / Consultas médicas',
    structures:[
      {id:'S083', pattern:"I have an appointment with + [X]", examples:[
        {en:'I have an appointment with a specialist.', es:'Tengo una cita con un especialista.', pron:'ái jav an apóintment uid a spéshalist.'},
        {en:'I have an appointment with my doctor.', es:'Tengo una cita con mi médico.', pron:'ái jav an apóintment uid mái dáctor.'},
        {en:'I need a referral for this.', es:'Necesito una remisión para esto.', pron:'ái níid a riférol for dis.'},
        {en:"I don't have an appointment today.", es:'No tengo una cita hoy.', pron:"ái dont jav an apóintment tudéi."}
      ], function:'hablar de citas médicas', stage:3,
        transformations:{
          negative:{en:"I don't have an appointment with a specialist.", es:'No tengo una cita con un especialista.'},
          question:{en:'Do you have an appointment with a specialist?', es:'¿Tienes una cita con un especialista?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'health insurance', es:'seguro de salud', pron:'jelz inshúrans', emoji:'🏥'},
      {en:'copay', es:'copago', pron:'cóupei', emoji:'💵'},
      {en:'specialist', es:'especialista', pron:'spéshalist', emoji:'🩺'},
      {en:'referral', es:'derivación médica', pron:'riférral', emoji:'📄'},
      {en:'diagnosis', es:'diagnóstico', pron:'daiagnóusis', emoji:'📋'},
      {en:'treatment plan', es:'plan de tratamiento', pron:'tríitment plan', emoji:'📝'},
      {en:'follow-up visit', es:'visita de seguimiento', pron:'fálou ap vísit', emoji:'🔁'},
      {en:'urgent care', es:'atención de urgencia', pron:'érchent quér', emoji:'🚨'},
      {en:'primary care physician', es:'médico de cabecera', pron:'práimeri quér fisíshan', emoji:'👨‍⚕️'},
      {en:'appointment', es:'cita', pron:'apóintment', emoji:'📅'}
    ],
    story:[
      {en:'My health insurance covers the specialist, but I need a referral first!', es:'¡Mi seguro de salud cubre al especialista, pero primero necesito una derivación!', pron:'mái jelz inshúrans cávers de spéshalist, bat ái níid a riférral ferst!'},
      {en:'The doctor gave me a diagnosis, and now we need a treatment plan.', es:'El doctor me dio un diagnóstico, y ahora necesitamos un plan de tratamiento.', pron:'de dáctor géiv mi a daiagnóusis, and náu uí níid a tríitment plan.'},
      {en:"Don't forget the follow-up visit, and just the copay this time!", es:'¡No te olvides de la visita de seguimiento, y solo el copago esta vez!', pron:"dont forguét de fálou ap vísit, and yast de cóupei dis táim!"},
      {en:'Is this urgent care, or can I wait to see my primary care physician?', es:'¿Es esto atención de urgencia, o puedo esperar a ver a mi médico de cabecera?', pron:'is dis érchent quér, or can ái uéit tu síi mái práimeri quér fisíshan?'},
      {en:'I have an appointment tomorrow — hopefully the dragon flu is gone by then!', es:'Tengo una cita mañana — ¡espero que la gripe de dragón se haya ido para entonces!', pron:'ái jav an apóintment tumórou — jóupfuli de drágon flú is gan bái den!'}
    ],
    jingle:[
      {en:'Health insurance, copay too!', es:'Seguro de salud, ¡copago también!', pron:'jelz inshúrans, cóupei tú!'},
      {en:'Specialist, referral for you!', es:'Especialista, ¡derivación para ti!', pron:'spéshalist, riférral for iú!'},
      {en:'Diagnosis, treatment plan clear!', es:'Diagnóstico, ¡plan de tratamiento claro!', pron:'daiagnóusis, tríitment plan clíar!'},
      {en:'Follow-up visit, physician near!', es:'Visita de seguimiento, ¡médico cerca!', pron:'fálou ap vísit, fisíshan níar!'}
    ]
  },
{
    day:112, unit:10, unitTitle:'Unidad 10 · Semanas 23-24', theme:'Educación y capacitación',
    structures:[
      {id:'S084', pattern:"I am enrolled in + [X]", examples:[
        {en:'I am enrolled in an online course.', es:'Estoy inscrito en un curso en línea.', pron:'ái am inróuld in an ánlain cors.'},
        {en:'I am enrolled in a certificate program.', es:'Estoy inscrito en un programa de certificación.', pron:'ái am inróuld in a certíficat prógram.'},
        {en:'I am not enrolled yet.', es:'Todavía no estoy inscrito.', pron:'ái am nat inróuld iét.'},
        {en:'I am enrolled in continuing education.', es:'Estoy inscrito en educación continua.', pron:'ái am inróuld in cantíniuing edyukéishion.'}
      ], function:'decir en qué programa estás inscrito', stage:3,
        transformations:{
          negative:{en:'I am not enrolled in an online course.', es:'No estoy inscrito en un curso en línea.'},
          question:{en:'Are you enrolled in an online course?', es:'¿Estás inscrito en un curso en línea?'},
          yesAnswer:{en:'Yes, I am.', es:'Sí.'},
          noAnswer:{en:"No, I'm not.", es:'No.'}
        }}
    ],
    words:[
      {en:'degree', es:'título universitario', pron:'digríi', emoji:'🎓'},
      {en:'certificate program', es:'programa de certificación', pron:'sertífiket prógram', emoji:'📜'},
      {en:'tuition', es:'matrícula', pron:'tuíshon', emoji:'💲'},
      {en:'scholarship', es:'beca', pron:'skálarship', emoji:'🏆'},
      {en:'curriculum', es:'plan de estudios', pron:'curículum', emoji:'📚'},
      {en:'online course', es:'curso en línea', pron:'anláin cors', emoji:'💻'},
      {en:'continuing education', es:'educación continua', pron:'cantíniuing eyukéishon', emoji:'🔁'},
      {en:'professional development', es:'desarrollo profesional', pron:'proféshonal divélopment', emoji:'📈'},
      {en:'certificate of completion', es:'certificado de finalización', pron:'sertífiket of camplíshon', emoji:'✅'},
      {en:'enrollment', es:'inscripción', pron:'inrólment', emoji:'📝'}
    ],
    story:[
      {en:'This dragon has a degree in Fire Studies, and a certificate program in Treasure Management!', es:'¡Este dragón tiene un título en Estudios del Fuego, y un programa de certificación en Gestión de Tesoros!', pron:'dis drágon jas a digríi in fáiar stádis, and a sertífiket prógram in tréshur mánechment!'},
      {en:'The tuition was expensive, but I got a scholarship for excellent grades!', es:'¡La matrícula fue cara, pero conseguí una beca por excelentes calificaciones!', pron:'de tuíshon uas expénsiv, bat ái gat a skálarship for éxcelent gréids!'},
      {en:'The curriculum includes an online course on continuing education.', es:'El plan de estudios incluye un curso en línea sobre educación continua.', pron:'de curículum inclúuds an anláin cors on cantíniuing eyukéishon.'},
      {en:'Professional development matters — even dragons need new skills!', es:'¡El desarrollo profesional importa — hasta los dragones necesitan nuevas habilidades!', pron:'proféshonal divélopment máters — íven drágons níid niú skils!'},
      {en:'I finished, and got my certificate of completion — enrollment for the next class starts tomorrow!', es:'Terminé, y conseguí mi certificado de finalización — ¡la inscripción para la próxima clase empieza mañana!', pron:'ái fínisht, and gat mái sertífiket of camplíshon — inrólment for de next clas starts tumórou!'}
    ],
    jingle:[
      {en:'Degree, certificate program too!', es:'Título, ¡programa de certificación también!', pron:'digríi, sertífiket prógram tú!'},
      {en:'Tuition, scholarship for you!', es:'Matrícula, ¡beca para ti!', pron:'tuíshon, skálarship for iú!'},
      {en:'Curriculum, online course bright!', es:'Plan de estudios, ¡curso en línea brillante!', pron:'curículum, anláin cors bráit!'},
      {en:'Enrollment, completion, feels so right!', es:'Inscripción, finalización, ¡se siente tan bien!', pron:'inrólment, camplíshon, fíils sóu ráit!'}
    ]
  },
{
    day:113, unit:10, unitTitle:'Unidad 10 · Semanas 23-24', theme:'Trámites gubernamentales',
    structures:[
      {id:'S085', pattern:"I need to renew my + [X]", examples:[
        {en:'I need to renew my license.', es:'Necesito renovar mi licencia.', pron:'ái níid tu riniú mái láisens.'},
        {en:'I need to renew my permit.', es:'Necesito renovar mi permiso.', pron:'ái níid tu riniú mái pérmit.'},
        {en:'I need to submit this application form.', es:'Necesito enviar este formulario de solicitud.', pron:'ái níid tu sabmít dis aplikéishion form.'},
        {en:"I don't need to renew it yet.", es:'Todavía no necesito renovarlo.', pron:"ái dont níid tu riniú it iét."}
      ], function:'hablar de trámites gubernamentales', stage:3,
        transformations:{
          negative:{en:"I don't need to renew my license.", es:'No necesito renovar mi licencia.'},
          question:{en:'Do you need to renew your license?', es:'¿Necesitas renovar tu licencia?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'government office', es:'oficina gubernamental', pron:'gávernment áfis', emoji:'🏛️'},
      {en:'permit', es:'permiso', pron:'pérmit', emoji:'📜'},
      {en:'license renewal', es:'renovación de licencia', pron:'láisens riniúal', emoji:'🔄'},
      {en:'application form', es:'formulario de solicitud', pron:'aplikéishon form', emoji:'📝'},
      {en:'processing time', es:'tiempo de trámite', pron:'prásesing táim', emoji:'⏳'},
      {en:'in-person appointment', es:'cita presencial', pron:'in pérson apóintment', emoji:'🧑‍💼'},
      {en:'online portal', es:'portal en línea', pron:'anláin pórtal', emoji:'💻'},
      {en:'identification document', es:'documento de identidad', pron:'aidentifikéishon dókiument', emoji:'🪪'},
      {en:'fee payment', es:'pago de tasa', pron:'fíi péiment', emoji:'💵'},
      {en:'approval letter', es:'carta de aprobación', pron:'apruvol léter', emoji:'✅'}
    ],
    story:[
      {en:'I went to the government office to get a permit for my flying castle!', es:'¡Fui a la oficina gubernamental a sacar un permiso para mi castillo volador!', pron:'ái uént tu de gávernment áfis tu guét a pérmit for mái fláing cásol!'},
      {en:'My license renewal needs an application form, filled out in dragon ink.', es:'Mi renovación de licencia necesita un formulario de solicitud, completado con tinta de dragón.', pron:'mái láisens riniúal níids an aplikéishon form, fild áut in drágon ink.'},
      {en:'The processing time is long — bring snacks to your in-person appointment!', es:'¡El tiempo de trámite es largo — llevá bocadillos a tu cita presencial!', pron:'de prásesing táim is long — bring snaks tu iór in pérson apóintment!'},
      {en:'You can also use the online portal, with your identification document.', es:'También puedes usar el portal en línea, con tu documento de identidad.', pron:'iú can ólso iús de anláin pórtal, uid iór aidentifikéishon dókiument.'},
      {en:'After the fee payment, I received my approval letter — finally, official!', es:'Después del pago de la tasa, recibí mi carta de aprobación — ¡por fin, oficial!', pron:'áfter de fíi péiment, ái risívd mái apruvol léter — fáinali, ofíshal!'}
    ],
    jingle:[
      {en:'Government office, permit too!', es:'Oficina gubernamental, ¡permiso también!', pron:'gávernment áfis, pérmit tú!'},
      {en:'License renewal, form for you!', es:'Renovación de licencia, ¡formulario para ti!', pron:'láisens riniúal, form for iú!'},
      {en:'Processing time, online portal bright!', es:'Tiempo de trámite, ¡portal en línea brillante!', pron:'prásesing táim, anláin pórtal bráit!'},
      {en:'Fee payment, approval letter right!', es:'Pago de tasa, ¡carta de aprobación correcta!', pron:'fíi péiment, apruvol léter ráit!'}
    ]
  },
{
    day:114, unit:10, unitTitle:'Unidad 10 · Semanas 23-24', theme:'Repaso liviano de la semana 23',
    words:[
      {en:'as far as that goes', es:'en cuanto a eso', pron:'as far as dat góus', emoji:'💬'},
      {en:'come to think of it', es:'pensándolo bien', pron:'cam tu zink of it', emoji:'🤔'},
      {en:'mind you', es:'ojo, ten en cuenta', pron:'máind iú', emoji:'👀'},
      {en:'that being said', es:'dicho eso', pron:'dat bíing sed', emoji:'💭'},
      {en:'at any rate', es:'de todos modos', pron:'at éni réit', emoji:'➡️'},
      {en:"for what it's worth", es:'para lo que valga', pron:"for uát its uérz", emoji:'🤷'},
      {en:'to make matters worse', es:'para colmo', pron:'tu méik máters uérs', emoji:'😬'},
      {en:'if anything', es:'si acaso', pron:'if énizin', emoji:'❓'}
    ],
    story:[
      {en:'As far as that goes, come to think of it, this dragon speaks great English!', es:'En cuanto a eso, pensándolo bien, ¡este dragón habla muy buen inglés!', pron:'as far as dat góus, cam tu zink of it, dis drágon spíiks gréit ínglish!'},
      {en:'Mind you, that being said, at any rate, we should celebrate!', es:'Ojo, dicho eso, de todos modos, ¡deberíamos celebrar!', pron:'máind iú, dat bíing sed, at éni réit, uí shud sélebreit!'},
      {en:"For what it's worth, to make matters worse, if anything, this was fun!", es:'Para lo que valga, y para colmo, si acaso, ¡esto fue divertido!', pron:"for uát its uérz, tu méik máters uérs, if énizin, dis uas fan!"}
    ],
    jingle:[
      {en:'As far as that goes, come to think of it!', es:'En cuanto a eso, ¡pensándolo bien!', pron:'as far as dat góus, cam tu zink of it!'},
      {en:"Mind you, that being said, that's it!", es:'Ojo, dicho eso, ¡eso es!', pron:"máind iú, dat bíing sed, dats it!"},
      {en:"At any rate, for what it's worth!", es:'De todos modos, ¡para lo que valga!', pron:"at éni réit, for uát its uérz!"},
      {en:'To make matters worse, if anything, on this earth!', es:'Para colmo, si acaso, ¡en esta tierra!', pron:'tu méik máters uérs, if énizin, on dis erz!'}
    ]
  },
{
    day:115, unit:10, unitTitle:'Unidad 10 · Semanas 25-26', theme:'Concesionaria de autos / Comprar un vehículo',
    words:[
      {en:'car dealership', es:'concesionaria de autos', pron:'car díilership', emoji:'🚗'},
      {en:'test drive', es:'prueba de manejo', pron:'test dráiv', emoji:'🛣️'},
      {en:'trade-in', es:'vehículo de parte de pago', pron:'tréid in', emoji:'🔄'},
      {en:'financing options', es:'opciones de financiamiento', pron:'fainánsing ápshons', emoji:'💳'},
      {en:'warranty', es:'garantía', pron:'uáranti', emoji:'📜'},
      {en:'mileage', es:'kilometraje', pron:'máilich', emoji:'🔢'},
      {en:'monthly payment', es:'cuota mensual', pron:'mánzli péiment', emoji:'💵'},
      {en:'vehicle inspection', es:'inspección del vehículo', pron:'víjicol inspécshon', emoji:'🔍'},
      {en:'sales representative', es:'representante de ventas', pron:'séils reprisénativ', emoji:'🧑‍💼'}
    ],
    story:[
      {en:'Welcome to the dragon car dealership! Would you like a test drive?', es:'¡Bienvenido a la concesionaria de autos dragón! ¿Quieres una prueba de manejo?', pron:'uélcam tu de drágon car díilership! uud iú láik a test dráiv?'},
      {en:'I have a trade-in — my old flying carpet, plus financing options please!', es:'Tengo un vehículo de parte de pago — mi vieja alfombra voladora, ¡más opciones de financiamiento por favor!', pron:'ái jav a tréid in — mái óuld fláing cárpet, plas fainánsing ápshons plíis!'},
      {en:'Does it come with a warranty? And what is the mileage on this dragon-mobile?', es:'¿Viene con garantía? ¿Y cuál es el kilometraje de este dragón-móvil?', pron:'das it cam uid a uáranti? and uát is de máilich on dis drágon móbail?'},
      {en:"The monthly payment works for me — let's do a vehicle inspection first.", es:'La cuota mensual me sirve — hagamos primero una inspección del vehículo.', pron:"de mánzli péiment uorks for mi — lets du a víjicol inspécshon ferst."},
      {en:"Thank you, sales representative — I'll take the one with fire-breathing exhaust!", es:'¡Gracias, representante de ventas — me llevo el que tiene escape que respira fuego!', pron:"zenk iú, séils reprisénativ — áil téik de uán uid fáiar bríizing exóst!"}
    ],
    jingle:[
      {en:'Car dealership, test drive too!', es:'Concesionaria de autos, ¡prueba de manejo también!', pron:'car díilership, test dráiv tú!'},
      {en:'Trade-in, financing for you!', es:'Vehículo de parte de pago, ¡financiamiento para ti!', pron:'tréid in, fainánsing for iú!'},
      {en:'Warranty, mileage, all so clear!', es:'Garantía, kilometraje, ¡todo tan claro!', pron:'uáranti, máilich, ol sóu clíar!'},
      {en:'Monthly payment, sales rep is here!', es:'Cuota mensual, ¡el representante está acá!', pron:'mánzli péiment, séils rep is jíar!'}
    ]
  },
{
    day:116, unit:10, unitTitle:'Unidad 10 · Semanas 25-26', theme:'Mudanza y logística personal',
    structures:[
      {id:'S086', pattern:"We are moving to + [X]", examples:[
        {en:'We are moving to a new house.', es:'Nos estamos mudando a una casa nueva.', pron:'uí ar múving tu a niú jáus.'},
        {en:'We are moving to a bigger office.', es:'Nos estamos mudando a una oficina más grande.', pron:'uí ar múving tu a bíguer áfis.'},
        {en:'We are moving next month.', es:'Nos mudamos el próximo mes.', pron:'uí ar múving next manz.'},
        {en:'We are not moving this year.', es:'No nos vamos a mudar este año.', pron:'uí ar nat múving dis íar.'}
      ], function:'hablar de una mudanza', stage:3,
        transformations:{
          negative:{en:'We are not moving to a new house.', es:'No nos estamos mudando a una casa nueva.'},
          question:{en:'Are you moving to a new house?', es:'¿Se están mudando a una casa nueva?'},
          yesAnswer:{en:'Yes, we are.', es:'Sí.'},
          noAnswer:{en:"No, we aren't.", es:'No.'}
        }}
    ],
    words:[
      {en:'moving company', es:'empresa de mudanzas', pron:'múuving cámpani', emoji:'🚚'},
      {en:'packing', es:'embalaje', pron:'páking', emoji:'📦'},
      {en:'moving truck', es:'camión de mudanza', pron:'múuving trak', emoji:'🚛'},
      {en:'storage unit', es:'unidad de almacenamiento', pron:'stóridch iúnit', emoji:'🏭'},
      {en:'change of address', es:'cambio de dirección', pron:'chéinch of adrés', emoji:'📮'},
      {en:'utility setup', es:'configuración de servicios', pron:'iutíliti sétap', emoji:'💡'},
      {en:'moving date', es:'fecha de mudanza', pron:'múuving déit', emoji:'📅'},
      {en:'inventory list', es:'lista de inventario', pron:'ínventori list', emoji:'📋'},
      {en:'delivery window', es:'ventana de entrega', pron:'delíveri uíndou', emoji:'🕐'}
    ],
    story:[
      {en:'The moving company sent a giant to help with packing my treasure!', es:'¡La empresa de mudanzas mandó a un gigante para ayudar a embalar mi tesoro!', pron:'de múuving cámpani sent a yáiant tu jelp uid páking mái tréshur!'},
      {en:'The moving truck was too small — we needed a whole storage unit for the gold!', es:'¡El camión de mudanza era muy chico — necesitamos una unidad de almacenamiento entera para el oro!', pron:'de múuving trak uas tu smol — uí níided a jóul stóridch iúnit for de góuld!'},
      {en:'I filed a change of address, and finished the utility setup for my new volcano.', es:'Presenté un cambio de dirección, y terminé la configuración de servicios para mi volcán nuevo.', pron:'ái fáild a chéinch of adrés, and fínisht de iutíliti sétap for mái niú valkéinou.'},
      {en:'The moving date is next Friday — I made an inventory list of everything!', es:'¡La fecha de mudanza es el próximo viernes — hice una lista de inventario de todo!', pron:'de múuving déit is next fráidei — ái méid an ínventori list of évrizin!'},
      {en:'What is the delivery window for my dragon eggs?', es:'¿Cuál es la ventana de entrega para mis huevos de dragón?', pron:'uát is de delíveri uíndou for mái drágon egs?'}
    ],
    jingle:[
      {en:'Moving company, packing too!', es:'Empresa de mudanzas, ¡embalaje también!', pron:'múuving cámpani, páking tú!'},
      {en:'Moving truck, storage for you!', es:'Camión de mudanza, ¡almacenamiento para ti!', pron:'múuving trak, stóridch for iú!'},
      {en:'Change of address, utility bright!', es:'Cambio de dirección, ¡servicios brillantes!', pron:'chéinch of adrés, iutíliti bráit!'},
      {en:'Moving date, inventory right!', es:'Fecha de mudanza, ¡inventario correcto!', pron:'múuving déit, ínventori ráit!'}
    ]
  },
{
    day:117, unit:10, unitTitle:'Unidad 10 · Semanas 25-26', theme:'Restaurantes de alta gama / Eventos corporativos',
    words:[
      {en:'fine dining', es:'restaurante de alta gama', pron:'fáin dáining', emoji:'🍽️'},
      {en:'formal event', es:'evento formal', pron:'fórmal ivént', emoji:'🎩'},
      {en:'catering', es:'servicio de banquetes', pron:'kéitering', emoji:'🍱'},
      {en:'guest list', es:'lista de invitados', pron:'guest list', emoji:'📋'},
      {en:'seating arrangement', es:'distribución de asientos', pron:'síiting aréinchment', emoji:'🪑'},
      {en:'keynote speaker', es:'orador principal', pron:'kíinóut spíiker', emoji:'🎤'},
      {en:'corporate dinner', es:'cena corporativa', pron:'córporeit díner', emoji:'🍷'},
      {en:'RSVP', es:'confirmar asistencia', pron:'ar es víi píi', emoji:'✉️'},
      {en:'venue', es:'lugar del evento', pron:'véniu', emoji:'🏛️'},
      {en:'dress code', es:'código de vestimenta', pron:'dres cóud', emoji:'👔'}
    ],
    story:[
      {en:"Tonight we celebrate at a fine dining castle — it's a formal event!", es:'¡Esta noche celebramos en un castillo de alta gama — es un evento formal!', pron:"tunáit uí sélebreit at a fáin dáining cásol — its a fórmal ivént!"},
      {en:'The catering includes roasted volcano vegetables, and the guest list has a thousand dragons.', es:'El servicio de banquetes incluye vegetales de volcán asado, y la lista de invitados tiene mil dragones.', pron:'de kéitering inclúuds róusted valkéinou véchtabols, and de guest list jas a záusand drágons.'},
      {en:'Check the seating arrangement — the keynote speaker sits at the front!', es:'¡Revisá la distribución de asientos — el orador principal se sienta adelante!', pron:'chek de síiting aréinchment — de kíinóut spíiker sits at de frant!'},
      {en:'This corporate dinner requires an RSVP by tomorrow.', es:'Esta cena corporativa requiere confirmar asistencia para mañana.', pron:'dis córporeit díner rikuáiars an ar es víi píi bái tumórou.'},
      {en:'The venue is beautiful, but check the dress code before you arrive!', es:'¡El lugar es hermoso, pero revisá el código de vestimenta antes de llegar!', pron:'de véniu is biútiful, bat chek de dres cóud bifór iú aráiv!'}
    ],
    jingle:[
      {en:'Fine dining, formal event too!', es:'Restaurante de alta gama, ¡evento formal también!', pron:'fáin dáining, fórmal ivént tú!'},
      {en:'Catering, guest list for you!', es:'Servicio de banquetes, ¡lista de invitados para ti!', pron:'kéitering, guest list for iú!'},
      {en:'Seating, keynote speaker bright!', es:'Asientos, ¡orador principal brillante!', pron:'síiting, kíinóut spíiker bráit!'},
      {en:'Corporate dinner, RSVP tonight!', es:'Cena corporativa, ¡confirmá esta noche!', pron:'córporeit díner, ar es víi píi tunáit!'}
    ]
  },
{
    day:118, unit:10, unitTitle:'Unidad 10 · Semanas 25-26', theme:'Tecnología emergente / Inteligencia artificial',
    structures:[
      {id:'S087', pattern:"This is powered by + [X]", examples:[
        {en:'This is powered by artificial intelligence.', es:'Esto funciona con inteligencia artificial.', pron:'dis is páuerd bái ártifíshal intéliyens.'},
        {en:'This is powered by machine learning.', es:'Esto funciona con aprendizaje automático.', pron:'dis is páuerd bái machín lérning.'},
        {en:'This is not powered by AI.', es:'Esto no funciona con IA.', pron:'dis is nat páuerd bái éi-ái.'},
        {en:'This chatbot is powered by an algorithm.', es:'Este chatbot funciona con un algoritmo.', pron:'dis chátbat is páuerd bái an álgoritm.'}
      ], function:'explicar qué tecnología usa algo', stage:3,
        transformations:{
          negative:{en:'This is not powered by artificial intelligence.', es:'Esto no funciona con inteligencia artificial.'},
          question:{en:'Is this powered by artificial intelligence?', es:'¿Esto funciona con inteligencia artificial?'},
          yesAnswer:{en:'Yes, it is.', es:'Sí.'},
          noAnswer:{en:"No, it isn't.", es:'No.'}
        }}
    ],
    words:[
      {en:'artificial intelligence', es:'inteligencia artificial', pron:'artifíshal intélichens', emoji:'🤖'},
      {en:'machine learning', es:'aprendizaje automático', pron:'mashíin lérning', emoji:'🧠'},
      {en:'data analysis', es:'análisis de datos', pron:'déita análisis', emoji:'📊'},
      {en:'algorithm', es:'algoritmo', pron:'álgoridm', emoji:'🔢'},
      {en:'digital transformation', es:'transformación digital', pron:'díchital transforméishon', emoji:'💻'},
      {en:'chatbot', es:'chatbot', pron:'chátbat', emoji:'💬'},
      {en:'cybersecurity', es:'ciberseguridad', pron:'sáiber sekiúriti', emoji:'🔐'},
      {en:'cloud computing', es:'computación en la nube', pron:'cláud campiúting', emoji:'☁️'},
      {en:'tech trend', es:'tendencia tecnológica', pron:'tek trend', emoji:'📈'},
      {en:'automation', es:'automatización', pron:'otoméishon', emoji:'⚙️'}
    ],
    story:[
      {en:'Even dragons use artificial intelligence and machine learning now!', es:'¡Hasta los dragones usan inteligencia artificial y aprendizaje automático ahora!', pron:'íven drágons iús artifíshal intélichens and mashíin lérning náu!'},
      {en:'Data analysis showed our algorithm predicts treasure locations perfectly!', es:'¡El análisis de datos mostró que nuestro algoritmo predice ubicaciones de tesoro perfectamente!', pron:'déita análisis shóud áur álgoridm pridícts tréshur loukéishons pérfectli!'},
      {en:'Our digital transformation includes a chatbot that answers questions in dragon language!', es:'¡Nuestra transformación digital incluye un chatbot que responde preguntas en idioma dragón!', pron:'áur díchital transforméishon inclúuds a chátbat dat ánsers cuéstions in drágon lángüich!'},
      {en:'Cybersecurity protects our castle from digital thieves, using cloud computing!', es:'¡La ciberseguridad protege nuestro castillo de ladrones digitales, usando computación en la nube!', pron:'sáiber sekiúriti protécts áur cásol fram díchital zíivs, iúsing cláud campiúting!'},
      {en:'The latest tech trend is automation — even dragons can automate fire-breathing!', es:'¡La última tendencia tecnológica es la automatización — hasta los dragones pueden automatizar el respirar fuego!', pron:'de léitest tek trend is otoméishon — íven drágons can ótomeit fáiar bríizing!'}
    ],
    jingle:[
      {en:'Artificial intelligence, learning too!', es:'Inteligencia artificial, ¡aprendizaje también!', pron:'artifíshal intélichens, lérning tú!'},
      {en:'Data analysis, algorithm for you!', es:'Análisis de datos, ¡algoritmo para ti!', pron:'déita análisis, álgoridm for iú!'},
      {en:'Digital transformation, chatbot bright!', es:'Transformación digital, ¡chatbot brillante!', pron:'díchital transforméishon, chátbat bráit!'},
      {en:'Cybersecurity, cloud, automation right!', es:'Ciberseguridad, nube, ¡automatización correcta!', pron:'sáiber sekiúriti, cláud, otoméishon ráit!'}
    ]
  },
{
    day:119, unit:10, unitTitle:'Unidad 10 · Semanas 25-26', theme:'Liderazgo y gestión de equipos',
    structures:[
      {id:'S088', pattern:"I trust my team to + [VERB]", examples:[
        {en:'I trust my team to make good decisions.', es:'Confío en que mi equipo tome buenas decisiones.', pron:'ái trast mái tíim tu méik gud disíshions.'},
        {en:'I trust my team to deliver on time.', es:'Confío en que mi equipo entregue a tiempo.', pron:'ái trast mái tíim tu delíver on táim.'},
        {en:"I don't trust this decision yet.", es:'Todavía no confío en esta decisión.', pron:"ái dont trast dis disíshion iét."},
        {en:'I trust my team completely.', es:'Confío completamente en mi equipo.', pron:'ái trast mái tíim camplíitli.'}
      ], function:'hablar de confianza en tu equipo', stage:3,
        transformations:{
          negative:{en:"I don't trust my team to make this decision.", es:'No confío en que mi equipo tome esta decisión.'},
          question:{en:'Do you trust your team to make good decisions?', es:'¿Confías en que tu equipo tome buenas decisiones?'},
          yesAnswer:{en:'Yes, I do.', es:'Sí.'},
          noAnswer:{en:"No, I don't.", es:'No.'}
        }}
    ],
    words:[
      {en:'leadership style', es:'estilo de liderazgo', pron:'líidership stáil', emoji:'🧭'},
      {en:'delegation', es:'delegación', pron:'delegéishon', emoji:'🤲'},
      {en:'team motivation', es:'motivación del equipo', pron:'tíim moutivéishon', emoji:'🔥'},
      {en:'performance metrics', es:'métricas de desempeño', pron:'perfórmans métrics', emoji:'📊'},
      {en:'one-on-one meeting', es:'reunión individual', pron:'uán on uán míiting', emoji:'🧑‍🤝‍🧑'},
      {en:'employee engagement', es:'compromiso del empleado', pron:'emploí ingéichment', emoji:'💪'},
      {en:'mentorship', es:'mentoría', pron:'méntorship', emoji:'🧑‍🏫'},
      {en:'succession planning', es:'planificación de sucesión', pron:'saséshon pláning', emoji:'📋'},
      {en:'work culture', es:'cultura de trabajo', pron:'uork cálcher', emoji:'🏢'},
      {en:'decision-making', es:'toma de decisiones', pron:'disíshon méiking', emoji:'⚖️'}
    ],
    story:[
      {en:'Every dragon leader needs their own leadership style, and to master delegation!', es:'¡Cada líder dragón necesita su propio estilo de liderazgo, y dominar la delegación!', pron:'évri drágon líider níids déar óun líidership stáil, and tu máster delegéishon!'},
      {en:'Team motivation improved after we started tracking performance metrics.', es:'La motivación del equipo mejoró después de que empezamos a seguir las métricas de desempeño.', pron:'tíim moutivéishon imprúuvd áfter uí stárted tráking perfórmans métrics.'},
      {en:"Let's schedule a one-on-one meeting to talk about employee engagement.", es:'Agendemos una reunión individual para hablar sobre el compromiso del empleado.', pron:"lets squéyul a uán on uán míiting tu tok abáut emploí ingéichment."},
      {en:'Mentorship and succession planning ensure the kingdom never runs out of leaders!', es:'¡La mentoría y la planificación de sucesión aseguran que el reino nunca se quede sin líderes!', pron:'méntorship and saséshon pláning ensiúr de kíngdom néver rans áut of líiders!'},
      {en:'Our work culture values fast decision-making, even during a fire drill!', es:'¡Nuestra cultura de trabajo valora la toma de decisiones rápida, hasta durante un simulacro de incendio!', pron:'áur uork cálcher váliuus fast disíshon méiking, íven dúring a fáiar dril!'}
    ],
    jingle:[
      {en:'Leadership style, delegation too!', es:'Estilo de liderazgo, ¡delegación también!', pron:'líidership stáil, delegéishon tú!'},
      {en:'Team motivation, metrics for you!', es:'Motivación del equipo, ¡métricas para ti!', pron:'tíim moutivéishon, métrics for iú!'},
      {en:'One-on-one, engagement bright!', es:'Reunión individual, ¡compromiso brillante!', pron:'uán on uán, ingéichment bráit!'},
      {en:'Mentorship, decision-making right!', es:'Mentoría, ¡toma de decisiones correcta!', pron:'méntorship, disíshon méiking ráit!'}
    ]
  },
{
    day:120, unit:10, unitTitle:'Unidad 10 · Semanas 25-26', theme:'Repaso y cierre de la Unidad 10',
    words:[
      {en:'unit ten', es:'unidad diez', pron:'iúnit ten', emoji:'🔟'},
      {en:'two thirds done', es:'dos tercios hecho', pron:'tú zerds dan', emoji:'📊'},
      {en:'one third remaining', es:'un tercio restante', pron:'uán zerd riméining', emoji:'⏳'},
      {en:'keep going', es:'sigue adelante', pron:'kíip góing', emoji:'💪'},
      {en:'milestone reached', es:'hito alcanzado', pron:'máilstoun ríicht', emoji:'🏆'},
      {en:'see you in unit eleven', es:'nos vemos en la unidad once', pron:'síi iú in iúnit iléven', emoji:'➡️'},
      {en:'next unit', es:'próxima unidad', pron:'next iúnit', emoji:'➡️'}
    ],
    story:[
      {en:"Welcome to unit ten's grand closing — two thirds done, legendary hero!", es:'¡Bienvenido al gran cierre de la unidad diez — dos tercios hecho, héroe legendario!', pron:"uélcam tu iúnit tens grand clóusing — tú zerds dan, léyendari jírou!"},
      {en:"Only one third remaining — keep going, you're almost there!", es:'¡Solo un tercio restante — sigue adelante, ya casi llegas!', pron:"óunli uán zerd riméining — kíip góing, iór ólmoust dér!"},
      {en:'This is a real milestone reached — one hundred twenty days of dragon adventures!', es:'¡Este es un hito real alcanzado — ciento veinte días de aventuras de dragones!', pron:'dis is a ríil máilstoun ríicht — uán jándred tuénti déis of drágon advénchurs!'},
      {en:'See you in unit eleven, dragon trader!', es:'¡Nos vemos en la unidad once, comerciante de dragones!', pron:'síi iú in iúnit iléven, drágon tréider!'}
    ],
    jingle:[
      {en:'Unit ten, two thirds done!', es:'Unidad diez, ¡dos tercios hecho!', pron:'iúnit ten, tú zerds dan!'},
      {en:'One third remaining, having fun!', es:'Un tercio restante, ¡divirtiéndote!', pron:'uán zerd riméining, jávin fan!'},
      {en:'Milestone reached, keep going strong!', es:'Hito alcanzado, ¡sigue adelante fuerte!', pron:'máilstoun ríicht, kíip góing strong!'},
      {en:'See you in unit eleven, before too long!', es:'Nos vemos en la unidad once, ¡antes de lo que piensas!', pron:'síi iú in iúnit iléven, bifór tu long!'}
    ]
  }
];
