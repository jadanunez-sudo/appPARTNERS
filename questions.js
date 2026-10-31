/* Banco extraído del balotario PDF adjunto: Clase A - Categoría I. */
const QUESTIONS = [
  {
    "id": 1,
    "question": "Está permitido en la vía:",
    "options": [
      "Recoger o dejar pasajeros o carga en cualquier lugar",
      "Dejar animales sueltos o situarlos de forma tal que obstaculicen solo un poco el tránsito",
      "Recoger o dejar pasajeros en lugares autorizados.",
      "Ejercer el comercio ambulatorio o estacionario"
    ],
    "answer": "c"
  },
  {
    "id": 2,
    "question": "Respecto de los dispositivos de control o regulación del tránsito:",
    "options": [
      "Solo los peatones están obligados a su obediencia",
      "Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario",
      "Solo los conductores están obligados a su obediencia.",
      "Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito pueda indicar lo contrario."
    ],
    "answer": "b"
  },
  {
    "id": 3,
    "question": "La señal vertical reglamentaria R-6 ¿prohibido voltear a la izquierda¿, significa que:",
    "options": [
      "Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U.",
      "Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.",
      "El único sentido de desplazamiento es continuar de frente.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 4,
    "question": "La señal vertical reglamentaria R-3 significa que:",
    "options": [
      "Nos acercamos a una zona restringida al tránsito.",
      "Está permitido adelantar vehículos.",
      "El único sentido de desplazamiento es continuar de frente.",
      "Ninguna de las alternativas es correcta"
    ],
    "answer": "c"
  },
  {
    "id": 5,
    "question": "En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo significan que:",
    "options": [
      "Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.",
      "No está permitido cruzar al otro carril para el adelantamiento vehicular.",
      "Se está reduciendo el ancho de la calzada de la vía por donde se circula.",
      "Se está frente a un lugar de cruce peatonal."
    ],
    "answer": "a"
  },
  {
    "id": 6,
    "question": "El color ámbar o amarillo del semáforo significa que:",
    "options": [
      "Los vehículos deben avanzar.",
      "Los vehículos deben detenerse.",
      "Los vehículos deben acelerar la marcha.",
      "Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección."
    ],
    "answer": "d"
  },
  {
    "id": 7,
    "question": "Los colores del semáforo tienen el siguiente significado: rojo: _____ ; ámbar o amarillo: _____; verde: ____.",
    "options": [
      "Detención - prevención - paso.",
      "Detención - paso con prevención - circulación rápida.",
      "Disminución de la velocidad - prevención - paso rápido.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 8,
    "question": "¿Qué indica una flecha verde en un semáforo vehicular?",
    "options": [
      "Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla.",
      "No está permitida la circulación en el sentido que indica la flecha.",
      "Se debe respetar únicamente la luz circular.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 9,
    "question": "La siguiente señal vertical reglamentaria R-53:",
    "options": [
      "Prohíbe estacionar.",
      "Prohíbe al conductor detener el vehículo dentro del área de la intersección.",
      "Prohíbe la carga y descarga.",
      "Prohíbe la circulación de vehículos motorizados"
    ],
    "answer": "b"
  },
  {
    "id": 10,
    "question": "Si llega a una intersección y visualiza el semáforo con una flecha roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:",
    "options": [
      "Avanzar en cualquier sentido, ya que la luz circular está en verde.",
      "Avanzar, pero el giro a la izquierda está prohibido por la flecha roja.",
      "Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 11,
    "question": "Si llega a una intersección donde el semáforo muestra una luz intermitente, qué afirmación es correcta:",
    "options": [
      "Si la luz intermitente es roja, ésta es equivalente a un ¿CEDA EL PASO?",
      "Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.",
      "Si la luz intermitente es verde, ésta es equivalente a un “PARE”.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 12,
    "question": "¿La luz intermitente roja es igual que una señal de PARE?",
    "options": [
      "Verdad.",
      "Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.",
      "Falso",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 13,
    "question": "Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:",
    "options": [
      "Girar desde cualquier carril.",
      "Colocarse en el carril derecho, luego girar con precaución.",
      "Colocarse en el carril más despejado de tráfico, luego girar con precaución.",
      "Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de circulación de la izquierda y girar con precaución."
    ],
    "answer": "d"
  },
  {
    "id": 14,
    "question": "Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?",
    "options": [
      "Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución.",
      "Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces direccionales para cambios de carril.",
      "Se debe advertir utilizando el claxon, identificar una brecha y realizar el cambio de carril con precaución.",
      "Está prohibido el cambio de carril en vías de un solo sentido."
    ],
    "answer": "a"
  },
  {
    "id": 15,
    "question": "Respecto a los cruces a nivel con vías férreas, señale la afirmación correcta:",
    "options": [
      "Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza.",
      "Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan por la vía férrea.",
      "El vehículo que llegue primero tiene preferencia.",
      "Tiene preferencia el conductor que viene por la derecha del otro."
    ],
    "answer": "a"
  },
  {
    "id": 16,
    "question": "Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policía Nacional del Perú asignado al control del tránsito, corresponde:",
    "options": [
      "Detenerse hasta que cambie a luz verde.",
      "Continuar la marcha.",
      "Estar prevenido.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 17,
    "question": "Está prohibido estacionar un vehículo:",
    "options": [
      "En las curvas.",
      "Dentro de una intersección.",
      "Frente a la entrada de garajes y de recintos militares o policiales.",
      "Todas las alternativas son correctas."
    ],
    "answer": "d"
  },
  {
    "id": 18,
    "question": "La siguiente señal vertical reglamentaria (R-29):",
    "options": [
      "Prohíbe el uso de la bocina en vías urbanas.",
      "Prohíbe el uso de la bocina en carreteras.",
      "Prohíbe el uso de la bocina.",
      "Prohíbe hacer ruido."
    ],
    "answer": "c"
  },
  {
    "id": 19,
    "question": "Se le impondrá el pago de una multa y no podrá obtener la licencia de conducir por 3 años a la persona que:",
    "options": [
      "Conduzca un vehículo automotor sin tener licencia de conducir.",
      "Conduzca un vehículo que no cuente con el equipamiento para brindar una máxima comodidad a sus ocupantes.",
      "Conduzca un vehículo sin contar con el SOAT.",
      "a y c son correctas"
    ],
    "answer": "a"
  },
  {
    "id": 20,
    "question": "En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?",
    "options": [
      "Debe aumentar la velocidad para no dejar que el otro vehículo lo pase.",
      "No debe aumentar la velocidad hasta que el vehículo lo sobrepase.",
      "Debe disminuir drásticamente la velocidad de su vehículo.",
      "Debe detener su vehículo."
    ],
    "answer": "b"
  },
  {
    "id": 21,
    "question": "¿Cuál de las siguientes afirmaciones es correcta?",
    "options": [
      "El conductor debe respetar los límites máximos y mínimos de velocidad establecidos.",
      "El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos.",
      "El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 22,
    "question": "¿Qué luces debe utilizar un conductor que circula en las vías públicas urbanas por la noche?",
    "options": [
      "Bajas.",
      "Altas.",
      "Luces altas en las intersecciones y bajas en las avenidas.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 23,
    "question": "En caso de accidentes, el SOAT cubre los daños que sufren:",
    "options": [
      "Solo los ocupantes del vehículo.",
      "Los ocupantes y terceros no ocupantes del vehículo.",
      "Solo terceros afectados.",
      "Solo el conductor del vehículo."
    ],
    "answer": "b"
  },
  {
    "id": 24,
    "question": "¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?",
    "options": [
      "Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro.",
      "Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un accidente de tránsito.",
      "El Seguro Obligatorio de Accidentes de Tránsito - SOAT.",
      "No es obligatorio contar con un seguro."
    ],
    "answer": "c"
  },
  {
    "id": 25,
    "question": "Cuándo es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo oficial:",
    "options": [
      "Cuando emita señales visibles.",
      "Cuando emita señales audibles.",
      "Cuando emita señales audibles y visibles.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 26,
    "question": "Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?",
    "options": [
      "Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares.",
      "Adelantar por el lado izquierdo, pero con precaución.",
      "Tocar el claxon para alertar que está pasando.",
      "Adelantar muy despacio."
    ],
    "answer": "a"
  },
  {
    "id": 27,
    "question": "¿Qué significa un triángulo rojo de seguridad colocado en la calzada?",
    "options": [
      "La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.",
      "Zona de obras por reparación en la calzada.",
      "Que el vehículo que lo enfrenta debe detenerse.",
      "a y c son correctas."
    ],
    "answer": "a"
  },
  {
    "id": 28,
    "question": "La siguiente señal vertical reglamentaria P-22C indica que:",
    "options": [
      "Está permitido adelantar.",
      "Se aproxima un carril adicional.",
      "Está permitido cambiar de carril.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 29,
    "question": "Las luces intermitentes de emergencia del vehículo deben utilizarse obligatoriamente:",
    "options": [
      "Para girar en las intersecciones y para advertir los cambios de carril.",
      "Para indicar la detención, parada o estacionamiento en zona peligrosa o la ejecución de maniobras riesgosas.",
      "Durante toda la circulación del vehículo.",
      "En cada intersección."
    ],
    "answer": "b"
  },
  {
    "id": 30,
    "question": "En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasificación?",
    "options": [
      "No.",
      "Si.",
      "Depende de la intersección.",
      "No se encuentra regulado en el reglamento."
    ],
    "answer": "b"
  },
  {
    "id": 31,
    "question": "Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:",
    "options": [
      "Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.",
      "Disminuir su velocidad y pasar con cuidado.",
      "Sobre parar y pasar rápidamente.",
      "Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución."
    ],
    "answer": "d"
  },
  {
    "id": 32,
    "question": "¿Cuál es la diferencia entre las señales P-2A y P-1A?",
    "options": [
      "No hay diferencia, se usan indistintamente.",
      "La señal P-2A se utiliza en situaciones de mayor riesgo.",
      "La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha.",
      "La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia de curva suave a la derecha."
    ],
    "answer": "c"
  },
  {
    "id": 33,
    "question": "¿Qué indica la señal R-30F?",
    "options": [
      "Tener precaución con vehículos lentos.",
      "Regula la velocidad máxima permitida en curvas.",
      "Regula la velocidad máxima en zonas rurales.",
      "No se encuentra regulada en el reglamento."
    ],
    "answer": "b"
  },
  {
    "id": 34,
    "question": "¿Qué señal debe utilizar el conductor para disminuir la velocidad o detener el vehículo cuando está en marcha?",
    "options": [
      "Luces direccionales.",
      "Solo el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo.",
      "Luces intermitentes y, en caso de fuerza mayor, utilizar el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo, haciendo ángulo recto con el brazo.",
      "Luces bajas."
    ],
    "answer": "c"
  },
  {
    "id": 35,
    "question": "Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?",
    "options": [
      "Cualquiera de los dos.",
      "El que se aproxime por la derecha del otro.",
      "El que se aproxime por la izquierda del otro.",
      "El que haga sonar la bocina primero."
    ],
    "answer": "b"
  },
  {
    "id": 36,
    "question": "En una intersección no regulada (sin señalización) tiene preferencia de paso:",
    "options": [
      "El vehículo que ingresó primero a la intersección.",
      "El vehículo que haga sonar la bocina primero.",
      "El vehículo que haga cambio de luces primero.",
      "Cualquier vehículo"
    ],
    "answer": "a"
  },
  {
    "id": 37,
    "question": "En una rotonda, tiene prioridad de paso el vehículo que:",
    "options": [
      "Quiere ingresar a la rotonda.",
      "Circula por ella.",
      "Acelera primero.",
      "Hace sonar la bocina."
    ],
    "answer": "b"
  },
  {
    "id": 38,
    "question": "El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la _________ retornando el vehículo después de la maniobra a su carril original.",
    "options": [
      "Derecha.",
      "Izquierda.",
      "Berma",
      "Por la derecha o izquierda."
    ],
    "answer": "b"
  },
  {
    "id": 39,
    "question": "Si un conductor está tomando medicamentos y por ello siente sueño ¿qué debe hacer?",
    "options": [
      "Manejar normalmente.",
      "Manejar despacio.",
      "Abstenerse de manejar.",
      "Manejar con un copiloto."
    ],
    "answer": "c"
  },
  {
    "id": 40,
    "question": "Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:",
    "options": [
      "Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular.",
      "Certificado de Inspección Técnica Vehicular y contrato de compraventa del vehículo.",
      "Contrato de compraventa del vehículo.",
      "Todas las alternativas son correctas."
    ],
    "answer": "a"
  },
  {
    "id": 41,
    "question": "En los tramos de una vía con pendiente pronunciada, que permite la circulación de un solo vehículo, se debe de tener en cuenta que el vehículo que asciende respecto al vehículo que desciende:",
    "options": [
      "No tiene preferencia de paso.",
      "Tiene preferencia de paso.",
      "Debe detenerse.",
      "Debe retroceder."
    ],
    "answer": "b"
  },
  {
    "id": 42,
    "question": "Al cambiar de dirección, un conductor debe:",
    "options": [
      "Señalizar toda la maniobra hasta su culminación.",
      "Cambiar de dirección y luego señalizar.",
      "No existe ninguna obligación.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 43,
    "question": "¿Se puede conducir un vehículo con el motor en punto neutro?",
    "options": [
      "Sí, pero solo si está bajando una pendiente.",
      "No, está prohibido.",
      "Sí, en caso de que el conductor no sea novato.",
      "No se encuentra regulado en la norma."
    ],
    "answer": "b"
  },
  {
    "id": 44,
    "question": "Para girar o cambiar de carril hacia la derecha, el conductor debe utilizar las luces direccionales y, en casos de fuerza mayor, la siguiente señal manual:",
    "options": [
      "Brazo, antebrazo izquierdo y mano extendidos hacia afuera del vehículo.",
      "Antebrazo izquierdo y mano extendidos hacia arriba fuera del vehículo, formando un ángulo recto con el brazo.",
      "Brazo, antebrazo derecho y mano extendidos hacia afuera del vehículo.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 45,
    "question": "Si la licencia de conducir no se encuentra vigente, los vehículos que autoriza a conducir dicha licencia:",
    "options": [
      "No podrán ser conducidos.",
      "Podrán ser conducidos únicamente en zonas urbanas.",
      "Podrán ser conducidos hasta por 90 días posteriores a la pérdida de vigencia de la licencia.",
      "Podrán ser conducidos con normalidad hasta que renueve su licencia."
    ],
    "answer": "a"
  },
  {
    "id": 46,
    "question": "De acuerdo con el sistema de control de licencias de conducir por puntos:",
    "options": [
      "Determinadas infracciones suman puntos.",
      "Una infracción puede sumar o disminuir puntos, a elección del infractor.",
      "Determinadas infracciones restan puntos.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 47,
    "question": "¿Cuál es la consecuencia de acumular 100 puntos en la licencia de conducir en un período de 24 meses?",
    "options": [
      "Suspensión de licencia de conducir.",
      "Anulación de la Placa Única Nacional de Rodaje.",
      "Inhabilitación definitiva para obtener una licencia de conducir.",
      "Internamiento vehicular."
    ],
    "answer": "a"
  },
  {
    "id": 48,
    "question": "Se entiende por carril a la:",
    "options": [
      "Parte de la vía destinada a la circulación de peatones.",
      "Parte de la calzada destinada al tránsito de una fila de vehículos.",
      "Vía rural destinada a la circulación de peatones y animales.",
      "Todas las alternativas son correctas."
    ],
    "answer": "b"
  },
  {
    "id": 49,
    "question": "Se entiende por línea de parada a:",
    "options": [
      "La línea transversal marcada en la calzada antes de la intersección, que indica al conductor el límite para detener el vehículo.",
      "Las líneas que se encuentran en los lugares del estacionamiento.",
      "El lugar utilizado para embarcar y desembarcar pasajeros.",
      "Todas las alternativas son correctas."
    ],
    "answer": "a"
  },
  {
    "id": 50,
    "question": "La siguiente señal vertical reglamentaria P-17A, indica:",
    "options": [
      "Reducción de la calzada al lado derecho.",
      "Reducción de la calzada al lado izquierdo.",
      "Reducción de la calzada en ambos lados.",
      "Ensanchamiento de la calzada en ambos lados."
    ],
    "answer": "c"
  },
  {
    "id": 51,
    "question": "En caso de encontrar marcación de doble línea amarilla compuesta por un trazo continuo y otro trazo discontinuo en una vía de doble sentido, ¿qué se debe hacer?",
    "options": [
      "Se puede adelantar en ambos sentidos.",
      "No está permitido adelantar en ningún sentido.",
      "Respetar la línea que está de su lado (si es continua, no adelantar; si es discontinua, está permitido adelantar).",
      "Respetar la línea que está de su lado (si es discontinua, no adelantar; si es continua, está permitido adelantar)"
    ],
    "answer": "c"
  },
  {
    "id": 52,
    "question": "Se define como zona rígida al:",
    "options": [
      "Área donde se prohíbe la circulación de vehículos.",
      "Área donde se prohíbe la circulación de peatones.",
      "Área de la vía en la que se prohíbe el estacionamiento de vehículos.",
      "Todas las alternativas son correctas."
    ],
    "answer": "c"
  },
  {
    "id": 53,
    "question": "La posición de frente o de espaldas ejecutada por el efectivo de la Policía Nacional del Perú asignado al control de tránsito significa:",
    "options": [
      "Obligación de detenerse de quien así lo enfrente.",
      "Continuar la marcha por el carril izquierdo de la calzada.",
      "Continuar la marcha.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 54,
    "question": "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en calles y jirones es de:",
    "options": [
      "30km/h.",
      "40km/h.",
      "60km/h.",
      "80km/h."
    ],
    "answer": "b"
  },
  {
    "id": 55,
    "question": "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en avenidas es de:",
    "options": [
      "30km/h.",
      "40km/h.",
      "60km/h.",
      "80km/h."
    ],
    "answer": "c"
  },
  {
    "id": 56,
    "question": "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en vías expresas es de:",
    "options": [
      "60km/h.",
      "70km/h.",
      "80km/h.",
      "100km/h."
    ],
    "answer": "c"
  },
  {
    "id": 57,
    "question": "Siempre que no exista una señal de límite de velocidad en zonas urbanas, el límite máximo de velocidad en zona escolar es de:",
    "options": [
      "20km/h.",
      "30km/h.",
      "35km/h.",
      "50km/h."
    ],
    "answer": "b"
  },
  {
    "id": 58,
    "question": "Siempre que no exista una señal de límite de velocidad en carreteras, el límite máximo de velocidad para automóviles, camionetas y motocicletas es de:",
    "options": [
      "80km/h.",
      "90km/h.",
      "100km/h.",
      "110km/h."
    ],
    "answer": "c"
  },
  {
    "id": 59,
    "question": "Siempre que no exista una señal de límite de velocidad mínima, el límite mínimo de velocidad en zona urbana y en carreteras es de:",
    "options": [
      "30km/h.",
      "La mitad de la velocidad máxima establecida para cada tipo de vía.",
      "20 km/h.",
      "15 km/h."
    ],
    "answer": "b"
  },
  {
    "id": 60,
    "question": "¿Cuál es la sanción por conducir con presencia de alcohol en la sangre en proporción mayor a lo previsto en el Código Penal, o bajo los efectos de estupefacientes, narcóticos y/o alucinógenos comprobados con el examen respectivo, o por negarse al mismo y que haya participado en un accidente de tránsito?",
    "options": [
      "Multa.",
      "Cancelación de licencia de conducir.",
      "Suspensión de la licencia de conducir.",
      "Multa, cancelación de la licencia de conducir e inhabilitación definitiva para obtener una licencia de conducir."
    ],
    "answer": "d"
  },
  {
    "id": 61,
    "question": "¿Cuál es la sanción si en un operativo de alcoholemia usted es intervenido y se comprueba que ha consumido alcohol por encima del límite legal, o está conduciendo bajo los efectos de estupefacientes, narcóticos y/o alucinógenos comprobada con el examen respectivo?",
    "options": [
      "Una multa",
      "La suspensión de la licencia de conducir.",
      "Multa y suspensión de la licencia de conducir por 3 años.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 62,
    "question": "La frecuencia de la inspección técnica de un vehículo particular es:",
    "options": [
      "Cada medio año.",
      "Cada año.",
      "Cada dos años.",
      "Cada tres años."
    ],
    "answer": "b"
  },
  {
    "id": 63,
    "question": "¿A partir de qué año de antigüedad debe realizarse la inspección técnica de un vehículo particular para transporte de personas de hasta 9 asientos incluido el conductor de la categoría M1?",
    "options": [
      "A partir del segundo año contado desde el año siguiente de su fabricación.",
      "A partir del cuarto año contado desde el año siguiente de su fabricación.",
      "A partir del quinto año contado desde el año siguiente de su fabricación.",
      "No está sujeto a inspección técnica."
    ],
    "answer": "b"
  },
  {
    "id": 64,
    "question": "¿Cuál es el plazo de vigencia del SOAT?",
    "options": [
      "1 año.",
      "6 meses.",
      "4 años.",
      "2 años."
    ],
    "answer": "a"
  },
  {
    "id": 65,
    "question": "Si ocurre un accidente de tránsito, ¿qué obligación tiene el conductor, el propietario del vehículo o el prestador del servicio de transporte?",
    "options": [
      "Dar aviso a los bomberos.",
      "Dar aviso solo a la compañía de seguros.",
      "Dar aviso a la compañía de seguros y dejar constancia en la delegación de la Policía Nacional del Perú más cercana.",
      "Dar aviso únicamente a la Policía Nacional del Perú."
    ],
    "answer": "c"
  },
  {
    "id": 66,
    "question": "Si una licencia de conducir consiga alguna restricción, es correcto afirmar que:",
    "options": [
      "Dicha restricción es meramente informativa.",
      "Es una obligación cumplir con la restricción.",
      "Incumplir la restricción no genera un riesgo para la seguridad vial.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 67,
    "question": "La señal preventiva P-33A, significa:",
    "options": [
      "Señal de curva sinuosa.",
      "Señal de proximidad a un badén.",
      "Señal de proximidad de un reductor de velocidad tipo resalto.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 68,
    "question": "Si su vehículo deja de funcionar o comienza a tener problemas y usted trata de moverlo al costado de la autopista, debe:",
    "options": [
      "Activar las luces intermitentes de emergencia.",
      "Parar en su posición actual.",
      "Salir del vehículo rápidamente.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 69,
    "question": "¿Está permitido usar la bocina de su vehículo para advertir al conductor del vehículo que circula delante, que será adelantado?",
    "options": [
      "Sí, siempre y cuando el sonido no sea estridente.",
      "Si, salvo prohibición expresa mediante la correspondiente señal.",
      "No, está prohibido.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 70,
    "question": "Si observa que se aproxima una ambulancia sin las luces especiales encendidas y sin sirena, es correcto afirmar que:",
    "options": [
      "No estamos obligados a darle preferencia de paso.",
      "Estamos obligados a darle prioridad de paso por ser una ambulancia.",
      "Está informando que está en servicio de urgencia.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 71,
    "question": "Si se encuentra en una intersección y se enciende la luz verde del semáforo y observa que en la calle transversal hay vehículos o personas despejando la intersección, ¿qué debe hacer?",
    "options": [
      "No iniciar la marcha hasta que el vehículo o las personas terminen de cruzar.",
      "Tocar el claxon para que se apuren en pasar.",
      "Bajar del vehículo y reclamar la falta al infractor.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 72,
    "question": "En señalética vial, el color __________ en el pavimento es utilizado para carriles de tráfico en sentido opuesto y el color __________ en el pavimento es utilizado como separador de carriles de tráfico en el mismo sentido.",
    "options": [
      "Amarillo - blanco.",
      "Blanco - Amarillo.",
      "Azul - rojo.",
      "Rojo - Amarillo."
    ],
    "answer": "a"
  },
  {
    "id": 73,
    "question": "Si una fila de escolares cruza la calzada fuera del crucero peatonal, ¿qué acción se debe tomar?",
    "options": [
      "Advertir con el claxon.",
      "Advertir a viva voz.",
      "Parar y ceder el paso.",
      "Continuar la marcha lentamente."
    ],
    "answer": "c"
  },
  {
    "id": 74,
    "question": "Si se aproxima a una zona escolar, ¿qué acción debe realizar?",
    "options": [
      "No tiene ninguna obligación si no hay señalización.",
      "Disminuir la velocidad a 40 Km/h.",
      "Disminuir la velocidad a 30 Km/h.",
      "Disminuir la velocidad a 35 km/h."
    ],
    "answer": "c"
  },
  {
    "id": 75,
    "question": "Tienen el objetivo de notificar a los usuarios las limitaciones, prohibiciones o restricciones en el uso de la vía.",
    "options": [
      "Señales reguladoras o de reglamentación.",
      "Señales preventivas.",
      "Señales informativas.",
      "Señales horizontales."
    ],
    "answer": "a"
  },
  {
    "id": 76,
    "question": "Tienen el propósito de advertir a los usuarios sobre la existencia y naturaleza de un peligro en la vía.",
    "options": [
      "Señales reguladoras o de reglamentación.",
      "Señales preventivas.",
      "Señales informativas.",
      "Señales horizontales."
    ],
    "answer": "b"
  },
  {
    "id": 77,
    "question": "Es una infracción de tránsito:",
    "options": [
      "No detenerse totalmente en una señal de PARE.",
      "Arrojar, depositar o abandonar objetos o sustancias en la vía pública que dificulten la circulación.",
      "Utilizar la bocina para llamar la atención en forma innecesaria.",
      "Todas las alternativas son correctas."
    ],
    "answer": "d"
  },
  {
    "id": 78,
    "question": "¿Qué debería hacer el conductor al acercarse a una señal de “CEDA EL PASO” en una intersección?",
    "options": [
      "Ceder el paso a los vehículos de emergencia.",
      "Mantener la velocidad y avanzar con cuidado.",
      "Disminuir la velocidad, parar si es necesario y ceder el paso a los peatones o vehículos que circulan por la vía transversal.",
      "Parar totalmente y luego avanzar con cuidado."
    ],
    "answer": "c"
  },
  {
    "id": 79,
    "question": "No se debe conducir un vehículo:",
    "options": [
      "Si no se cuenta con el SOAT.",
      "En retroceso, salvo las excepciones que establece la norma.",
      "Si no se tiene la licencia para el tipo de vehículo que se quiere conducir.",
      "Todas son correctas."
    ],
    "answer": "d"
  },
  {
    "id": 80,
    "question": "¿Qué debe hacer si se aproxima a una intersección sin semáforo y sin presencia de la Policía de Tránsito, y observa que un peatón está cruzando por el paso peatonal?",
    "options": [
      "Disminuir la velocidad y pasar con cuidado.",
      "Detener el vehículo y ceder el paso al peatón.",
      "Continuar porque usted tiene la prioridad.",
      "Incrementar la velocidad para adelantar el cruce el peatón."
    ],
    "answer": "b"
  },
  {
    "id": 81,
    "question": "Sobre el uso del cinturón de seguridad en los vehículos que se encuentran en circulación, es correcto afirmar que:",
    "options": [
      "El uso del cinturón de seguridad es obligatorio para las personas que ocupen los asientos delanteros.",
      "En los asientos posteriores el uso del cinturón de seguridad es obligatorio en todos los vehículos cuando los tengan incorporados de fábrica y en los casos en que, de acuerdo a las normas se encuentren obligados a tenerlos.",
      "El uso del cinturón de seguridad no solo es obligatorio para el conductor.",
      "Todas las alternativas son correctas."
    ],
    "answer": "d"
  },
  {
    "id": 82,
    "question": "Si en una vía de dos carriles con tránsito en un mismo sentido usted se desplaza lentamente en su vehículo, debe circular por el carril de la _________ y los vehículos que circulen a mayor velocidad deben hacerlo por el carril de la ___________",
    "options": [
      "Izquierda / Derecha.",
      "Derecha / Derecha.",
      "Derecha / Izquierda.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 83,
    "question": "Sobre el uso de la bocina del vehículo, es correcto afirmar que:",
    "options": [
      "El conductor debe tratar de no utilizar la bocina para llamar la atención en forma innecesaria.",
      "El uso de la bocina para llamar la atención en forma innecesaria no es una infracción al tránsito.",
      "El conductor únicamente debe utilizar la bocina para evitar situaciones peligrosas.",
      "a y b son correctas."
    ],
    "answer": "c"
  },
  {
    "id": 84,
    "question": "Una línea blanca continua en el sentido longitudinal de una vía, que se coloca en el pavimento, le indica al conductor:",
    "options": [
      "Que se puede adelantar, debido a que la línea no es amarilla continua.",
      "Que está prohibido cruzar la línea y no hay excepciones.",
      "Que está prohibido pasar al otro lado de la línea con algunas excepciones.",
      "Que es zona de peatones."
    ],
    "answer": "c"
  },
  {
    "id": 85,
    "question": "¿Cuál es el número máximo de personas que puede transportar un vehículo particular?",
    "options": [
      "Es igual al número de asientos señalados en la tarjeta de identificación vehicular, con la excepción de niños en brazos en los asientos posteriores.",
      "No existe prohibición sobre un número máximo de personas que se puede transportar.",
      "La restricción sobre un número máximo de personas que se puede transportar se aplica para los asientos delanteros, para los asientos posteriores no hay restricción.",
      "Se puede transportar a todas las personas que entren en el vehículo, sin restricción, siempre y cuando no obstaculicen la visibilidad del conductor y todos sean de la misma familia."
    ],
    "answer": "a"
  },
  {
    "id": 86,
    "question": "La acción correcta al abastecer de combustible su vehículo, es:",
    "options": [
      "Asegurarse de que todos los pasajeros permanezcan a bordo del vehículo.",
      "Abstenerse de fumar tanto el conductor como sus acompañantes.",
      "Mantener encendido el motor del vehículo.",
      "Todas las alternativas son correctas."
    ],
    "answer": "b"
  },
  {
    "id": 87,
    "question": "Mientras usted está conduciendo su vehículo automotor, ¿puede llevar sujeto a su auto al conductor de una bicicleta mientras éste la conduce?",
    "options": [
      "Sí, siempre y cuando el conductor de la bicicleta se sujete a la parte posterior del auto, pero nunca a la parte lateral de éste.",
      "Sí, siempre y cuando se prevean todas las medidas de seguridad respectivas.",
      "Sí, siempre y cuando esta acción sea realizada a una velocidad no mayor a",
      "No, es una acción prohibida y quien la cometa puede ser sancionado con una multa."
    ],
    "answer": "d"
  },
  {
    "id": 88,
    "question": "Si usted desea realizar una competencia de carreras entre su vehículo y otro vehículo motorizado; para ello puede utilizar:",
    "options": [
      "Las vías aledañas del parque del distrito en el cual reside, en el horario de 11:00 pm. a 5:00 am.",
      "Un circuito de carrera, autódromo o pista de aceleración autorizado por la autoridad competente.",
      "Las vías aledañas del parque del distrito en el cual reside, siempre y cuando tenga el permiso municipal correspondiente.",
      "Todas las alternativas son correctas."
    ],
    "answer": "b"
  },
  {
    "id": 89,
    "question": "Señale cuáles de las siguientes conductas constituye una infracción al tránsito:",
    "options": [
      "Tener la puerta, capot o maletera del vehículo abierta, cuando el vehículo está en marcha.",
      "Conducir un vehículo lentamente por el carril de la izquierda causando congestión.",
      "Conducir un vehículo con el motor en punto neutro o apagado.",
      "Todas las alternativas son correctas."
    ],
    "answer": "d"
  },
  {
    "id": 90,
    "question": "La marcas en el pavimento constituyen un elemento indispensable para la operación vehicular, pues su función es:",
    "options": [
      "Reemplazar a la señalización vertical cuando ésta no se encuentra en la vía, por tal motivo son colocadas donde no existe señales verticales.",
      "Guiar a los usuarios únicamente en las vías que presentan peligros.",
      "Reglamentar la circulación, así como advertir y guiar a los usuarios de la vía.",
      "Todas las alternativas son correctas."
    ],
    "answer": "c"
  },
  {
    "id": 91,
    "question": "Las marcas en el pavimento de color __________ complementan las señales informativas, como por ejemplo las zonas de estacionamiento para personas con movilidad reducida.",
    "options": [
      "Blanco.",
      "Azul.",
      "Rojo.",
      "Gris."
    ],
    "answer": "b"
  },
  {
    "id": 92,
    "question": "La línea central de color amarillo en el pavimento es continua cuando:",
    "options": [
      "No está permitido cruzar al otro carril.",
      "Está permitido cruzar al otro carril para el adelantamiento.",
      "Se trata de una vía de doble sentido de circulación, que permite cruzar al otro carril.",
      "Separa corrientes de tráfico en el mismo sentido."
    ],
    "answer": "a"
  },
  {
    "id": 93,
    "question": "Si un conductor que circula por el carril derecho de una vía se encuentra con las flechas inclinadas que se muestran en la figura, su conducta correcta es:",
    "options": [
      "Continuar la circulación por el carril en que se encuentra.",
      "Adelantar al vehículo que se encuentra delante de él y que circula por el carril izquierdo.",
      "No adelantar al vehículo que tiene adelante y que circula por el carril izquierdo y continuar por su carril.",
      "Cambiarse al carril izquierdo con precaución."
    ],
    "answer": "d"
  },
  {
    "id": 94,
    "question": "Si durante la conducción vehicular, un efectivo de la Policía de Tránsito le solicita al conductor someterse a una prueba de alcoholemia; la acción correcta del conductor es:",
    "options": [
      "Someterse a la prueba de alcoholemia, ya que está obligado a ello ante la solicitud del efectivo de la Policía de Tránsito.",
      "Someterse o negarse a la prueba de alcoholemia, ya que no constituye una obligación del conductor realizarse dicha prueba.",
      "Negarse a la prueba de alcoholemia, ya que únicamente es exigible si ha participado en un accidente de tránsito.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 95,
    "question": "¿Cuál de las siguientes conductas no es una infracción de tránsito?",
    "options": [
      "Llevar las placas de rodaje en el lugar que no corresponde.",
      "Seguir a los vehículos de emergencia y vehículos oficiales para avanzar más rápidamente.",
      "Arrojar objetos en la vía pública que dificulten la circulación.",
      "Detenerse totalmente en una señal de PARE cuando no hay peatones y/o vehículos circulando por la vía transversal."
    ],
    "answer": "d"
  },
  {
    "id": 96,
    "question": "Si un conductor sale de su propiedad y tiene que cruzar la acera e ingresar a una vía, la conducta correcta es:",
    "options": [
      "Dar preferencia de paso solo a los vehículos que circulan por la vía, pero no a los peatones.",
      "Dar preferencia de paso a los vehículos que circulan por la vía y a los peatones que circulan por la acera.",
      "Tocar el claxon para advertir a los peatones que circulen por la acera, que se detengan.",
      "Salir rápidamente, a fin de evitar accidentes."
    ],
    "answer": "b"
  },
  {
    "id": 97,
    "question": "¿Qué significa una línea continua blanca pintada entre el carril de la derecha y la berma de una carretera?",
    "options": [
      "Un carril para motocicletas.",
      "Una línea que divide el área peatonal y el área de vehículos.",
      "Una línea que puede cruzarse para rebasar en caso de congestión.",
      "Que no se debe conducir atravesándola, al menos que haya una situación de emergencia."
    ],
    "answer": "d"
  },
  {
    "id": 98,
    "question": "Si maneja de noche, hubiera neblina y tuviera luces rompenieblas, debe utilizar:",
    "options": [
      "Las luces bajas junto con las rompenieblas.",
      "Solo las luces altas.",
      "Solo las luces bajas.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 99,
    "question": "En el caso representado en el siguiente gráfico ¿el vehículo rojo puede rebasar al azul?",
    "options": [
      "Puede hacerlo si no viene un vehículo en el sentido contrario.",
      "Puede hacerlo solo si, el vehículo en sentido contrario está lejos y alcanza hacer la maniobra con seguridad.",
      "No puede hacerlo.",
      "Puede hacerlo por la izquierda."
    ],
    "answer": "c"
  },
  {
    "id": 100,
    "question": "La siguiente señal (R-17), significa:",
    "options": [
      "Prohibido estacionar.",
      "Prohibida la circulación de vehículos automotores.",
      "Prohibida la circulación de autos particulares.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 101,
    "question": "Si usted se encuentra conduciendo su vehículo por una vía y antes de cruzar la intersección se encuentra con la señal R-4, esta le indica:",
    "options": [
      "Que la calle está clausurada.",
      "Que está por ingresar a una vía de sentido contrario y no debe entrar.",
      "Que debe parar totalmente antes de poder ingresar.",
      "Ninguna de las alternativas es correcta"
    ],
    "answer": "b"
  },
  {
    "id": 102,
    "question": "La siguiente señal (P-36), significa:",
    "options": [
      "Proximidad de un túnel.",
      "Superficie deslizante.",
      "Prender las luces bajas.",
      "Mantener la distancia entre vehículos por seguridad."
    ],
    "answer": "b"
  },
  {
    "id": 103,
    "question": "La siguiente señal (R-14), significa:",
    "options": [
      "Circular por el carril de la derecha.",
      "Circular por el carril central.",
      "Circular solo en el sentido indicado por la flecha.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 104,
    "question": "Si usted circula por una vía y se encuentra con la señal (R-11a) , ésta le indica:",
    "options": [
      "Que es una vía de tres carriles de un solo sentido.",
      "Que es una vía de tres carriles y usted puede utilizar solo uno de ellos.",
      "Que es una vía de tres carriles y usted puede utilizar los dos de la derecha.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 105,
    "question": "La siguiente señal (R-30c) , significa:",
    "options": [
      "Que la velocidad máxima de la vía es de 50 km/h.",
      "Que la velocidad mínima de la vía es de 50 km/h.",
      "Que al salir de la vía por donde está circulando, la velocidad máxima es 50 km/h.",
      "Que al salir de la vía por donde está circulando, la velocidad mínima es 50 km/h."
    ],
    "answer": "c"
  },
  {
    "id": 106,
    "question": "La siguiente señal (R-5-4), significa:",
    "options": [
      "Que la vía no continúa y los conductores deben girar a la izquierda.",
      "Que la intersección contempla giros tangentes a la izquierda en ambos sentidos.",
      "Que la intersección está en mantenimiento y que por el momento solo se puede girar a la izquierda.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 107,
    "question": "La siguiente señal (R-9), significa:",
    "options": [
      "Que no está permitido girar en U.",
      "Que está permitido el giro en U.",
      "Que si desea puede girar a la izquierda.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 108,
    "question": "La siguiente señal (R-5-2), significa:",
    "options": [
      "Que la vía solo permite girar a la izquierda.",
      "Prevención por bifurcación de la vía.",
      "Que el carril por donde circula permite girar a la izquierda o seguir de frente.",
      "No es una señal válida en el Perú."
    ],
    "answer": "c"
  },
  {
    "id": 109,
    "question": "La siguiente señal (R-20), significa:",
    "options": [
      "Que el peatón antes de cruzar debe mirar si se acercan autos por la derecha.",
      "Que el conductor que viene por la derecha debe tener cuidado con los peatones.",
      "Que los peatones deben circular por la izquierda.",
      "Que los peatones deben circular por la derecha."
    ],
    "answer": "c"
  },
  {
    "id": 110,
    "question": "La siguiente señal (R-40), significa:",
    "options": [
      "Crucero tipo cebra.",
      "Control policial.",
      "Pavimento deslizante.",
      "Circular con luces bajas."
    ],
    "answer": "d"
  },
  {
    "id": 111,
    "question": "La siguiente señal (R-48), significa:",
    "options": [
      "Los peatones deben circular por la derecha y los camiones por la izquierda",
      "Los peatones deben tener cuidado con los camiones.",
      "Zona de carga y descarga.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 112,
    "question": "La siguiente señal (R-49), significa:",
    "options": [
      "Está permitido cambiar de carril por la izquierda y por la derecha.",
      "Se debe mantener la distancia de seguridad entre vehículos.",
      "Está permitido cambiar de carril por la izquierda para adelantar.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 113,
    "question": "La siguiente señal (R-50), significa:",
    "options": [
      "Que si solo hay un carril tiene preferencia de paso el conductor que llegó primero.",
      "Que si solo hay un carril tiene preferencia el conductor que está mirando la señal.",
      "Que si solo hay un carril no tiene preferencia el que está mirando la señal y debe darle paso al del sentido contrario.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 114,
    "question": "La señal (R-5-1), es:",
    "options": [
      "Una señal informativa.",
      "Una señal preventiva.",
      "Una señal de obligación.",
      "No es una señal válida en el Perú."
    ],
    "answer": "c"
  },
  {
    "id": 115,
    "question": "La señal (P-3a) , le indica al conductor que:",
    "options": [
      "Hay una curva y contra- curva a la izquierda.",
      "Hay una curva y contra- curva a la derecha.",
      "Hay una curva y contra- curva pronunciada a la derecha.",
      "Hay una curva y contra- curva pronunciada a la izquierda."
    ],
    "answer": "c"
  },
  {
    "id": 116,
    "question": "La siguiente señal (P-5-1a) , le advierte al conductor que:",
    "options": [
      "Se aproxima a una curva y contra-curva a la izquierda.",
      "Se aproxima a una curva y contra-curva a la derecha.",
      "Se aproxima a un camino sinuoso a la derecha.",
      "Se aproxima a un camino sinuoso a la izquierda."
    ],
    "answer": "d"
  },
  {
    "id": 117,
    "question": "La siguiente señal (P-61), le advierte al conductor que:",
    "options": [
      "El sentido del tránsito es el que indica la flecha.",
      "Se aproxima a una reducción de la vía en ambos sentidos.",
      "Está circulando por una curva horizontal.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 118,
    "question": "La siguiente señal (P-34), le advierte al conductor que:",
    "options": [
      "La vía está en mal estado y tiene baches.",
      "Se aproxima a un resalto.",
      "Se aproxima a un rompe muelles.",
      "Se aproxima a un badén."
    ],
    "answer": "d"
  },
  {
    "id": 119,
    "question": "La siguiente señal (P-60), es:",
    "options": [
      "Una señal turística.",
      "Una señal informativa.",
      "Una señal preventiva.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 120,
    "question": "La siguiente señal (P-46), indica:",
    "options": [
      "Existencia de una ciclovía.",
      "Autorización para el cruce de ciclistas.",
      "Ciclistas en la vía.",
      "Cercanía de una ciclovía."
    ],
    "answer": "c"
  },
  {
    "id": 121,
    "question": "La siguiente señal (P-46-a) , indica:",
    "options": [
      "Que los ciclistas deben usar la ciclovía.",
      "Que nos aproximamos a un cruce de ciclovía.",
      "Que la ciclovía es solo para los ciclistas.",
      "Todas las alternativas son correctas."
    ],
    "answer": "b"
  },
  {
    "id": 122,
    "question": "La siguiente señal (P-46b) , indica:",
    "options": [
      "Que los ciclistas deben detenerse en ese punto.",
      "Que nos aproximamos a un cruce de ciclovía.",
      "Que la ciclovía es solo para los ciclistas.",
      "La ubicación de un cruce de ciclistas."
    ],
    "answer": "d"
  },
  {
    "id": 123,
    "question": "La siguiente señal (P-48), indica:",
    "options": [
      "Vía es de uso exclusivo de los peatones.",
      "Zona con presencia de peatones.",
      "Ubicación de un cruce escolar.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 124,
    "question": "La siguiente señal (P-48a) , indica:",
    "options": [
      "Vía es de uso exclusivo de peatones.",
      "Proximidad a un cruce peatonal.",
      "Ubicación de un cruce escolar.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 125,
    "question": "La siguiente señal (P-48-b) , indica:",
    "options": [
      "Ubicación de un cruce escolar.",
      "Proximidad a una calzada.",
      "Ubicación de un cruce peatonal.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 126,
    "question": "La siguiente señal (P-49), indica:",
    "options": [
      "Zona escolar.",
      "Proximidad a un cruce peatonal.",
      "Zona transitada.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 127,
    "question": "La siguiente señal (P-49a) , indica:",
    "options": [
      "Zona escolar.",
      "Proximidad a un cruce escolar.",
      "Ubicación de un cruce escolar.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 128,
    "question": "La siguiente señal (P-49b) , indica:",
    "options": [
      "Zona transitada.",
      "Proximidad a un cruce peatonal.",
      "Ubicación de un cruce escolar",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 129,
    "question": "La siguiente señal (P-50), indica:",
    "options": [
      "Zona de deportes.",
      "Proximidad a campo deportivo.",
      "Proximidad a zona urbana.",
      "Niños jugando."
    ],
    "answer": "d"
  },
  {
    "id": 130,
    "question": "La siguiente señal (P-51), indica:",
    "options": [
      "Zona de parqueo de vehículos pesados.",
      "Proximidad a zona rural.",
      "Maquinaria agrícola en la vía.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 131,
    "question": "La siguiente señal (P-53), indica:",
    "options": [
      "Proximidad a un establo.",
      "Proximidad a zona agrícola.",
      "Animales en la vía.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 132,
    "question": "La siguiente señal (P-55), indica:",
    "options": [
      "Semáforo malogrado.",
      "Proximidad a un semáforo.",
      "Semáforos en ola verde.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 133,
    "question": "La siguiente señal (P-58), le indica:",
    "options": [
      "Que usted se aproxima a una señal de PARE.",
      "Que usted debe parar donde está la señal P-58.",
      "Que se trata de un PARE, pero puede seguir adelante.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 134,
    "question": "La siguiente señal (P-59), le indica:",
    "options": [
      "Que usted se aproxima a una señal de CEDA EL PASO.",
      "Que usted debe ceder el paso donde está la señal P- 59.",
      "Que se trata de un PARE, pero puede seguir adelante.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 135,
    "question": "La siguiente señal (P-41), le indica:",
    "options": [
      "Que usted se aproxima a una zona de camiones.",
      "Que usted debe encender sus luces pues se aproxima a una zona con poca visibilidad.",
      "Que usted se aproxima a un túnel.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 136,
    "question": "La siguiente señal (P-45), indica:",
    "options": [
      "Proximidad a un aeropuerto.",
      "Proximidad a una pista de aviones.",
      "Vuelo de aviones a baja altura.",
      "Aviones que generan ruido."
    ],
    "answer": "c"
  },
  {
    "id": 137,
    "question": "La siguiente señal (P-52), le indica:",
    "options": [
      "Que usted debe dar prioridad de paso a las ambulancias.",
      "Que usted debe dar prioridad de paso a los bomberos.",
      "Que se aproxima a una salida de vehículos de bomberos.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 138,
    "question": "La siguiente señal (P-66), le indica:",
    "options": [
      "Que se aproxima un desierto.",
      "Que se aproxima una zona donde hay ráfagas de viento lateral.",
      "Que se acerca a una zona de arenamiento en la vía.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 139,
    "question": "La siguiente señal (P-66a) , le indica:",
    "options": [
      "Que se aproxima una tormenta.",
      "Que está pasando por una zona donde hay ráfagas de viento lateral.",
      "Que se acerca a una zona de arenamiento en la vía.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 140,
    "question": "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
    "options": [
      "La vía está interrumpida y debe tomar el camino alternativo que muestra la señal.",
      "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe tomar el camino alternativo que muestra la señal.",
      "En la siguiente intersección está prohibido girar a la derecha y por lo tanto, si desea seguir esa ruta debe tomar el camino alternativo que muestra la señal.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 141,
    "question": "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
    "options": [
      "Si quiere girar a la izquierda debe pasar la intersección y dar la vuelta a la manzana.",
      "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe hacerlo una cuadra antes.",
      "En esa dirección hay una zona de parqueo.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 142,
    "question": "La siguiente señal (I-14), significa:",
    "options": [
      "Señal de hostal.",
      "Señal de hospedaje.",
      "Señal de hospital.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 143,
    "question": "La siguiente señal (I-31), significa:",
    "options": [
      "Proximidad de una bahía de taxis.",
      "Proximidad a un estacionamiento permitido.",
      "Proximidad de una zona de parqueo para vecinos.",
      "Proximidad de un estacionamiento para emergencias."
    ],
    "answer": "d"
  },
  {
    "id": 144,
    "question": "La siguiente señal (I-9), significa:",
    "options": [
      "Zona de control policial.",
      "Zona de control de aduanas.",
      "Zona militar.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 145,
    "question": "La siguiente señal (I-18), se utiliza para indicar:",
    "options": [
      "Cercanía a una ferretería.",
      "Cercanía a un servicio mecánico.",
      "Cercanía a un grifo.",
      "Ninguna de las alternativas es correcta"
    ],
    "answer": "b"
  },
  {
    "id": 146,
    "question": "La siguiente señal (I-19), se utiliza para indicar:",
    "options": [
      "Cercanía a un servicio mecánico.",
      "Cercanía a una tienda.",
      "Cercanía a un grifo.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 147,
    "question": "La siguiente señal (I-20), se utiliza para indicar:",
    "options": [
      "Cercanía a un servicio mecánico.",
      "Cercanía a una zona donde debe circular con cadenas en las llantas.",
      "Cercanía a un grifo.",
      "Cercanía a una llantería."
    ],
    "answer": "d"
  },
  {
    "id": 148,
    "question": "La siguiente señal (R-16a) , se utiliza para indicar:",
    "options": [
      "Fin de la restricción de circulación de automotores.",
      "Fin de la restricción de prohibido adelantar.",
      "Fin de la restricción de circulación en doble sentido.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 149,
    "question": "El comportamiento del conductor como usuario de la vía, debe estar orientado a:",
    "options": [
      "Valor por la vida.",
      "Respeto por la integridad física del resto de los usuarios.",
      "Respeto a la autoridad encargada de la vigilancia y disciplina de tráfico.",
      "Todas las alternativas son correctas."
    ],
    "answer": "d"
  },
  {
    "id": 150,
    "question": "Son considerados usuarios vulnerables de la vía y por tanto merecen especial protección:",
    "options": [
      "Peatones, niños, adultos mayores, personas con movilidad reducida, ciclistas.",
      "Únicamente los peatones y ciclistas.",
      "Únicamente los peatones y niños.",
      "Todas las alternativas son correctas, con excepción de los ciclistas."
    ],
    "answer": "a"
  },
  {
    "id": 151,
    "question": "La siguiente señal (P-61), muestra:",
    "options": [
      "Flechas retroreflectivas que indican peligro.",
      "Delineadores de curva, que guían al conductor.",
      "Advertencia al conductor sobre la proximidad de un puente.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 152,
    "question": "Si usted es titular de una licencia particular A-I, está autorizado a conducir el siguiente vehículo:",
    "options": [
      "Camión, tipo volquete.",
      "Ómnibus, tipo panorámico.",
      "Mototaxi.",
      "Automóvil, tipo sedan."
    ],
    "answer": "d"
  },
  {
    "id": 153,
    "question": "Mientras la persona conduce, le está permitido:",
    "options": [
      "Compartir su asiento con un niño, siempre y cuando éste sea menor de un año de edad.",
      "Que otra persona tome el control de la dirección del vehículo, siempre y",
      "Conducir con una mano sobre el volante de dirección, cuando es necesario accionar algún comando del vehículo, como realizar los cambios de velocidad.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 154,
    "question": "El conductor está ________ a ___________ a las pruebas que le solicite el Efectivo de la Policía Nacional del Perú, asignado al control del tránsito, para determinar su estado de intoxicación por alcohol, drogas, estupefacientes u otros tóxicos",
    "options": [
      "En su derecho - negarse.",
      "Facultado - Rechazar.",
      "Obligado - someterse.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 155,
    "question": "Ante un conductor con evidente discapacidad física, la cual no figura en el rubro de restricciones de su licencia de conducir, procede:",
    "options": [
      "Que la Policía de Tránsito intervenga a dicho conductor y que la autoridad que expidió la licencia de conducir ordene su reexaminación.",
      "Que la autoridad competente expida un permiso excepcional para dicho conductor.",
      "Que la Policía de Tránsito expida un permiso excepcional para dicho conductor.",
      "Que la Policía de Tránsito otorgue a dicho conductor un plazo prudencial para que continúe conduciendo."
    ],
    "answer": "a"
  },
  {
    "id": 156,
    "question": "¿Una persona con discapacidad física puede obtener una licencia de conducir particular?",
    "options": [
      "Sí, siempre y cuando dicha discapacidad pueda ser superada con algún corrector que establezca alguna de las restricciones que prevé la norma vigente.",
      "No, está terminantemente prohibido.",
      "Depende del criterio del centro de emisión de la licencia de conducir.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 157,
    "question": "¿Puede una persona menor de edad conducir un vehículo?",
    "options": [
      "Nunca.",
      "Sí, siempre y cuando vaya acompañada de una personas mayor de edad y titular de una licencia de conducir.",
      "No, salvo que conduzca un vehículo de dimensión reducida.",
      "Sí, siempre y cuando sea mayor de 16 años y cuente con licencia de conducir o permiso provisional, conforme a lo dispuesto en el Reglamento Nacional del Sistema de Emisión de Licencias de Conducir."
    ],
    "answer": "d"
  },
  {
    "id": 158,
    "question": "Es una obligación general de tránsito que, los ____________ circulen respetando los mensajes de _______________, las instrucciones de los Efectivos de la Policía de Tránsito y el mandato de las normas legales y reglamentarias correspondientes.",
    "options": [
      "Peatones - los letreros instalados en las vías públicas.",
      "Los usuarios de la vía pública - los dispositivos de control de tránsito.",
      "Vehículos - los medios de comunicación.",
      "Menores de edad - los adultos mayores."
    ],
    "answer": "b"
  },
  {
    "id": 159,
    "question": "Marque la afirmación incorrecta:",
    "options": [
      "Está prohibido arrojar, depositar o abandonar objetos en la vía pública, o cualquier otro obstáculo que pueda dificultar la circulación.",
      "El conductor debe mantener el vehículo que conduce con el combustible necesario para evitar detenciones en la vía.",
      "Los vehículos deben circular en vías urbanas con las luces bajas las 24 horas del día.",
      "En caso de haber agua en la calzada, el conductor de un vehículo debe tomar las precauciones, para evitar que ésta pueda mojar la acera y los peatones."
    ],
    "answer": "c"
  },
  {
    "id": 160,
    "question": "¿Si al conducir por una avenida se encuentra con una señal en la vía que indica un límite máximo de 50 km/h, sin embargo, conforme a lo dispuesto en la norma el límite máximo de velocidad en dicha vía es de 60 km/h; usted:",
    "options": [
      "Debe obedecer la señal de velocidad instalada en la vía.",
      "Puede ir a una velocidad máxima de 60 km/h.",
      "Debe ir a una velocidad máxima de 60 km/h.",
      "Debe ir a una velocidad entre 50 y 60 km/h."
    ],
    "answer": "a"
  },
  {
    "id": 161,
    "question": "Sobre la conducción en retroceso, marque la opción correcta:",
    "options": [
      "Está prohibida, salvo en casos estrictamente justificados.",
      "Nunca debe realizarse.",
      "Está permitida",
      "Está permitida, salvo en carreteras."
    ],
    "answer": "a"
  },
  {
    "id": 162,
    "question": "El uso de la luz ___________ es obligatorio en __________ , debiendo cambiar por luz ____________ momentos previos al cruce con otro vehículo que circule en sentido contrario.",
    "options": [
      "Baja - carreteras - alta.",
      "Alta - vías urbanas - baja.",
      "Rompenieblas - carreteras - baja.",
      "Alta - carretereras - baja."
    ],
    "answer": "d"
  },
  {
    "id": 163,
    "question": "Indique la conducta permitida:",
    "options": [
      "El estacionamiento de un vehículo a la salida de salas de espectáculos en funcionamiento.",
      "El estacionamiento de un vehículo de emergencia en un lugar no permitido, si ello fuera imprescindible.",
      "El estacionamiento de un vehículo después de 1 metro de un paso peatonal.",
      "El estacionamiento de un vehículo sobre las aceras."
    ],
    "answer": "b"
  },
  {
    "id": 164,
    "question": "Se considera el abandono de un vehículo cuando:",
    "options": [
      "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de 72 horas.",
      "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de 96 horas.",
      "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor y por un tiempo mayor de 48 horas.",
      "La norma de tránsito no establece nada sobre el abandono del vehículo."
    ],
    "answer": "c"
  },
  {
    "id": 165,
    "question": "Al transportar carga en su vehículo, usted debe:",
    "options": [
      "Asegurarse, en caso la carga sobresalga lateralmente de la carrocería, esté bien sujeta.",
      "Evitar todo riesgo de caída de la carga que sobresale lateralmente de la carrocería.",
      "Tratar que la carga no sea arrastrada.",
      "Asegurarse que la carga no sobrepase las dimensiones de la carrocería."
    ],
    "answer": "d"
  },
  {
    "id": 166,
    "question": "Sobre la emisión vehicular de sustancias contaminantes, marque la opción correcta:",
    "options": [
      "Está permitida.",
      "Está prohibida, en un índice superior al límite máximo que permite la norma.",
      "Está prohibida en el ámbito urbano.",
      "La norma no regula sobre ello."
    ],
    "answer": "b"
  },
  {
    "id": 167,
    "question": "La autoridad competente, ______________ puede prohibir o restringir _____________________ en determinadas vías públicas.",
    "options": [
      "Cuando la situación lo justifique - la circulación o estacionamiento de vehículos.",
      "Aun cuando la situación lo justifique no - circulación o estacionamiento de vehículos.",
      "No se encuentra facultada ni - circulación de vehículos",
      "Únicamente con el consentimiento del conductor - circulación de vehículos."
    ],
    "answer": "a"
  },
  {
    "id": 168,
    "question": "Si al conducir en una carretera de noche se aproxima un vehículo en sentido contrario; usted debe:",
    "options": [
      "Cambiar de luces bajas a luces altas",
      "Encender las luces de emergencia.",
      "Cambiar de luces altas a luces bajas.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 169,
    "question": "La detención de un vehículo debe efectuarse:",
    "options": [
      "En el sentido contrario a la circulación y en el carril izquierdo de la vía.",
      "En el sentido de la circulación y en el carril derecho de la vía, utilizando las luces altas.",
      "En el sentido de la circulación y en el carril izquierdo de la vía, utilizando las luces intermitentes.",
      "En el sentido de la circulación y en el carril derecho de la vía, utilizando las luces intermitentes."
    ],
    "answer": "d"
  },
  {
    "id": 170,
    "question": "En caso de un accidente de tránsito con daños personales y/o materiales los participantes deben:",
    "options": [
      "Acudir a la estación de bomberos.",
      "Llamar a un familiar.",
      "Solicitar la intervención de la autoridad policial.",
      "Abandonar el lugar donde ocurrió el accidente."
    ],
    "answer": "c"
  },
  {
    "id": 171,
    "question": "El conductor antes de iniciar la conducción de un vehículo no está obligado a:",
    "options": [
      "Portar la tarjeta de identificación vehicular del vehículo que conduce.",
      "Portar y exhibir la Placa Única de Rodaje.",
      "Constatar que el vehículo tiene SOAT vigente.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "d"
  },
  {
    "id": 172,
    "question": "La faculta y autoriza la circulación del vehículo por la vía pública, identifica el bien, y, por ende, al titular responsable de las acciones que deriven de su propiedad.",
    "options": [
      "Tarjeta de identificación vehicular.",
      "Municipalidad provincial.",
      "La Superintendencia Nacional de Aduanas y de Administración Tributaria - SUNAT.",
      "Placa Única Nacional de Rodaje."
    ],
    "answer": "d"
  },
  {
    "id": 173,
    "question": "A fin de determinar la presencia de alcohol o sustancias estupefacientes en el conductor, el efectivo de la Policía de Tránsito puede exigirle al momento de la intervención:",
    "options": [
      "Que realice pruebas de coordinación y equilibrio.",
      "Uso del alcoholímetro.",
      "Prueba de alcoholemia.",
      "Todas las alternativas son correctas."
    ],
    "answer": "d"
  },
  {
    "id": 174,
    "question": "¿El Reglamento Nacional de Tránsito considera la reincidencia en las infracciones de tránsito?",
    "options": [
      "No, el conductor puede cometer la misma infracción varias veces y la sanción será la misma.",
      "Si, cuando el conductor comete la misma infracción dentro de los 12 meses será sancionado con el doble de la multa.",
      "Solo en los casos en que se cometan infracciones gravísimas.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 175,
    "question": "¿Después de qué tiempo de haber cometido la misma infracción se llama reincidencia y es sancionada con el doble de la multa establecida?",
    "options": [
      "06 meses.",
      "12 meses.",
      "24 meses.",
      "35 meses."
    ],
    "answer": "b"
  },
  {
    "id": 176,
    "question": "Si a un conductor infractor le suspendieron su licencia de conducir, éste se encuentra facultado para:",
    "options": [
      "Tramitar el duplicado de su licencia de conducir.",
      "Tramitar la revalidación de su licencia de conducir.",
      "Tramitar la recategorización de su licencia de conducir.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "d"
  },
  {
    "id": 177,
    "question": "Las __________________ tienen por función informar a los usuarios sobre los servicios generales existentes próximos a la vía, tales como teléfono, hospedaje, restaurante, primeros auxilios, estación de combustibles, talleres, y otros.",
    "options": [
      "Señales de localización.",
      "Señales de salida inmediata.",
      "Señales de servicios generales.",
      "Señales ordinarias"
    ],
    "answer": "c"
  },
  {
    "id": 178,
    "question": "¿Constituye una infracción tramitar el duplicado de una licencia de conducir que se encuentra retenida?",
    "options": [
      "No constituye una infracción.",
      "Solo cuando la licencia de conducir ha sido retenida por la comisión de una infracción muy grave.",
      "Si, constituye una infracción.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "c"
  },
  {
    "id": 179,
    "question": "Las marcas en el pavimento constituyen la señalización ___________ y se emplean para _____________ la circulación.",
    "options": [
      "Horizontal - reglamentar.",
      "Vertical - reglamentar.",
      "Más importante - mejorar.",
      "Menos importante - adornar."
    ],
    "answer": "a"
  },
  {
    "id": 180,
    "question": "Ciclista es a ciclovía como:",
    "options": [
      "Conductor - acera.",
      "Conductor - calzada.",
      "Conductor - berma.",
      "Peatón - autopista."
    ],
    "answer": "b"
  },
  {
    "id": 181,
    "question": "La siguiente señal (P-15), se utiliza para advertir al conductor:",
    "options": [
      "La proximidad a una vía de tres carriles.",
      "La proximidad a un huracán.",
      "La proximidad a un camino sinuoso.",
      "La proximidad de una intersección rotatoria (óvalo o rotonda)."
    ],
    "answer": "d"
  },
  {
    "id": 182,
    "question": "La siguiente señal (P-31a) , indica:",
    "options": [
      "La proximidad del final de la vía.",
      "La proximidad de una vía asfaltada.",
      "La proximidad de una pendiente leve.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 183,
    "question": "Es una línea transversal a la calzada, que indica al conductor que debe detener completamente el vehículo, no debiendo sobrepasar el inicio de la indicada línea:",
    "options": [
      "Línea de carril.",
      "Línea de borde de calzada.",
      "Línea de pare.",
      "Todas las alternativas son correctas."
    ],
    "answer": "c"
  },
  {
    "id": 184,
    "question": "Los semáforos son:",
    "options": [
      "Dispositivos de control del tránsito que tienen por finalidad regular y controlar el tránsito vehicular, motorizado y no motorizado, y el peatonal, a través de las indicaciones de las luces respectivas.",
      "Dispositivos de control del tránsito que tienen por finalidad regular y controlar únicamente el tránsito vehicular motorizado y peatonal, a través de las indicaciones de luces.",
      "Señales de color rojo, verde y amarillo, que tienen como único fin regular la corriente vehicular.",
      "Artefactos que emiten luces de colores y cuyo único fin es regular la corriente de vehículos motorizados y peatones."
    ],
    "answer": "a"
  },
  {
    "id": 185,
    "question": "La conducción requiere un alto nivel de atención, pues existen distracciones que pueden ocasionar accidentes de tránsito, como por ejemplo:",
    "options": [
      "Preocupaciones.",
      "Uso del teléfono celular.",
      "Manipulación de la radio mientras se conduce.",
      "Todas las alternativas son correctas."
    ],
    "answer": "d"
  },
  {
    "id": 186,
    "question": "¿Influye la somnolencia en la capacidad de conducir?",
    "options": [
      "Si, pues el conductor tomará decisiones lentas que lo inducirán a cometer errores.",
      "Si, ya que el conductor está de mal genio.",
      "No, siempre que la conducción sea realizada lentamente.",
      "No, siempre y cuando la conducción sea realizada con un acompañante."
    ],
    "answer": "a"
  },
  {
    "id": 187,
    "question": "¿Cuál es la acción correcta del conductor, según las normas de tránsito, en la situación que plantea el siguiente gráfico?",
    "options": [
      "Girar rápidamente a la derecha antes que el peatón cruce la calzada.",
      "Dar preferencia de paso al peatón para que cruce la calzada.",
      "Girar lentamente a la derecha antes que el peatón cruce la calzada.",
      "Tocar el claxon para que el peatón no cruce la calzada"
    ],
    "answer": "b"
  },
  {
    "id": 188,
    "question": "¿En cuál de las siguientes opciones, los factores mencionados contribuyen a una colisión vehicular?",
    "options": [
      "Pavimento seco, somnolencia, frenos desgastados.",
      "Pavimento húmedo, neumáticos desgastados, cansancio.",
      "Reductores de velocidad, falta de atención, uso del teléfono celular.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "b"
  },
  {
    "id": 189,
    "question": "La __________ es la parte de una carretera o camino contigua a la calzada, no habilitada para la circulación de vehículos y destinada eventualmente a la detención de vehículos en emergencia y circulación de peatones.",
    "options": [
      "Berma.",
      "Autopista.",
      "Acera.",
      "Demarcación."
    ],
    "answer": "a"
  },
  {
    "id": 190,
    "question": "Es una parte de la vía destinada a la circulación de vehículos y eventualmente al cruce de peatones y animales.",
    "options": [
      "La calzada.",
      "La acera.",
      "La berma.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 191,
    "question": "Es una parte de la vía destinada al uso de peatones",
    "options": [
      "La acera.",
      "La calzada.",
      "La berma.",
      "La autopista."
    ],
    "answer": "a"
  },
  {
    "id": 192,
    "question": "Son señales que regulan el tránsito:",
    "options": [
      "Las bocinas y las marcas en la calzada o señales horizontales.",
      "Las bocinas y las señales verticales.",
      "Las señales verticales, las marcas en la calzada o señales horizontales y las bocinas.",
      "Las señales verticales y las marcas en la calzada o señales horizontales."
    ],
    "answer": "d"
  },
  {
    "id": 193,
    "question": "Los vehículos deben ser conducidos con:",
    "options": [
      "Puertas y capot cerrados, permitiéndose la maletera entreabierta para casos especiales.",
      "Puertas, capot y maletera cerrados.",
      "Puertas, capot y maletera cerrados, salvo autorización especial.",
      "Capot y maletera cerrados, permitiéndose dos puertas entreabiertas para casos especiales."
    ],
    "answer": "b"
  },
  {
    "id": 194,
    "question": "El conductor que en una vía urbana va a girar a la izquierda, a la derecha o en ¿U¿ debe hacer la señal respectiva con la luz direccional, por lo menos:",
    "options": [
      "2 segundos antes de realizar la maniobra.",
      "1 metro antes de realizar la maniobra.",
      "20 metros antes de realizar la maniobra.",
      "3 metros antes de realizar la maniobra."
    ],
    "answer": "c"
  },
  {
    "id": 195,
    "question": "Si usted está conduciendo por una carretera y va girar a la izquierda, debe realizar la señal respectiva con la luz direccional por lo menos:",
    "options": [
      "2 segundos antes de realizar la maniobra.",
      "2 metros antes de realizar la maniobra.",
      "30 metros antes de realizar la maniobra.",
      "1 metro antes de realizar la maniobra."
    ],
    "answer": "c"
  },
  {
    "id": 196,
    "question": "La licencia particular de la Clase y Categoría A-I, permite conducir motos?",
    "options": [
      "Si.",
      "No",
      "Únicamente en el ámbito urbano.",
      "Únicamente en carreteras."
    ],
    "answer": "b"
  },
  {
    "id": 197,
    "question": "El siguiente gráfico muestra:",
    "options": [
      "Señalización de tránsito vertical y horizontal en una zona escolar.",
      "Únicamente señalización de tránsito vertical en una zona escolar.",
      "Únicamente señalización de tránsito horizontal en una zona escolar.",
      "Ninguna de las alternativas es correcta."
    ],
    "answer": "a"
  },
  {
    "id": 198,
    "question": "Las __________canalizadoras, tiene por función conformar las islas canalizadoras del tránsito automotor en una _________.",
    "options": [
      "Islas canalizadoras - vía.",
      "Líneas - intersección.",
      "Vías - intersección.",
      "Todas las alternativas son correctas."
    ],
    "answer": "b"
  },
  {
    "id": 199,
    "question": "Si al conducir en una intersección se encuentra con las siguientes marcas en el pavimento (malla ortogonal de color amarillo), significa:",
    "options": [
      "Que no puede detener el vehículo dentro del área de intersección.",
      "Que se están realizando trabajos de emergencia en el área demarcada.",
      "Que únicamente puede detener el vehículo dentro del área de intersección.",
      "Que es una isla de refugio peatonal."
    ],
    "answer": "a"
  },
  {
    "id": 200,
    "question": "De acuerdo al siguiente gráfico, es correcto afirmar que:",
    "options": [
      "La zona que permite adelantar inicia con las líneas amarillas continuas.",
      "Los conductores pueden estacionarse al empezar las líneas continuas.",
      "La zona de no adelantar inicia con las líneas amarillas continuas.",
      "El conductor del camión puede estacionarse antes de empezar las líneas continuas"
    ],
    "answer": "c"
  }
];