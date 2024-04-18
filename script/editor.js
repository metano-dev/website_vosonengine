const colorVosonPrincipal   = "rgb(14, 16, 34)";
const colorVosonParticula   = "rgb(45, 55, 95)";
const colorVosonSecundario  = "rgb(255,111,0)";
const colorVosonFondo       = "rgb(255,255,255)";
const colorIRPrincipal      = "rgb(14, 16, 34)";
const colorIRParticula      = "rgb(45, 55, 95)";
const colorIRSecundario     = "rgb(255,111,0)";
const colorIRFondo          = "rgb(255,255,255)"; 
const encabezadoTextoSeparacion = 30;
const encabezadoTextoTamaño = 20;
const encabezadoMargenHorizontal = 100;
const encabezadoMargenVertical = 15;
const encabezadoContendio = 60;
const encabezadoBienvenida = 0.15;
const escalaMiniaturas = 1.75;

const pieContenido = 60 ;
var arrastreDeslizamiento = 1;

//==================PÁGINA PRINCIPAL========================
////MENÚ ARRIBA
const TXTinicio     = "Inicio";
const TXTinifinity  = "InfinityRoom";
const TXTnosotros   = "Nosotros";
const TXTproyectos  = "Proyectos";
const TXTcontacto   = "Contacto";


//APARTADO DE INICIO
const TXTinicio01 = "EL ORIGEN DE TU PROPIO";
const TXTinicio02 = "MUNDO VIRTUAL";
const TXTinicio03 = "Creamos experiencias en realidad virtual en la que puedes interactuar física y virtualmente con las personas, igual que en el mundo real";

//APARTADO PROYECTOS
const TXTproyectos01 = "Proyectos";

//APARTADO TECNOLOGÍA
const TXTtecnologia01 = "Tecnología free room para lograr";
const TXTtecnologia02 = "mayor realismo e inmersión";
const TXTtecnologia03 = "Creamos entornos dónde las personas pueden interactuar entre ellas en el mismo espacio físico pero en un mundo totalmente virtual";
const videoPrincipal1 = "https://player.vimeo.com/video/905125026";

//APARTADO NOSOTROS
const TXTnosotros1A = "Siempre con la última tecnología";
const TXTnosotros1B = "Trabajamos con la última tecnología en creación de experiencias inmersivas e interactivas en mundos virtuales";
const TXTnosotros2A = "Comunicación y seguimiento";
const TXTnosotros2B = "Establecemos y gestionamos los KPI's, garantizando la máxima calidad en el desarrollo y el control de los proyectos";
const TXTnosotros3A = "Cuidado en los detalles";
const TXTnosotros3B = "Evaluamos las necesidades de nuestros clientes y aseguramos que cada detalle sea diseñado para ofrecer experiencias inolvidables";

//APARTADO VALORES
const TXTvalores1 = "Aquí todo es posible";
const TXTvalores2 = "Desarrollamos experiencias de realidad virtual personalizadas. Creamos y simulamos entornos virtuales. Tu éxito es nuestro éxito. En Voson Engine siempre aportamos valor a nuestros clientes";

//APARTADO CONTACTO
const videoPrincipal2 = "https://player.vimeo.com/video/890986261";
const TXTcontacto01 = "Buscamos empresas que quieran innovar de la mano de soluciones únicas";
const TXTcontacto02 = "¿Hablamos?";

//APARTADO PIE DE PÁGINA
const TXTpie01 = "Copyright Voson Engine 2024 ©";
const TXTpie02 = "Aviso legal";
const TXTpie03 = "Política de privacidad";
const TXTpie04 = "+34 690 216 542";
const TXTpie05 = "hola@vosonengine.com";

//==================PÁGINA INFINITY ROOM========================
////APARTADOS
const TXTvoson      = "Sobre Voson";
const TXTproy1      = "Toy Park";
const TXTproy2      = "Zombie Survival";
const TXTcontactar  = "Contacto";

const TXTinfinity01 = "INFINITAS EXPERIENCIAS";
const TXTinfinity02 = "EN UN ÚNICO LUGAR";
const TXTinfinity03 = "Hacemos experiencias en realidad virtual para que hasta 6 personas jueguen a la vez, interactuando en el mismo espacio físico.";


//==================PÁGINA PRINCIPAL========================
/*
new proyecto("NOMBRE DEL JUEGO SIN ESPACIOS",
        "NOMBRE DEL JUEGO TAL Y COMO QUIERES QUE SE VEA",
        "DESCRIPCIÓN"
        ["objetivo 1", "objetivo 2", "objetivo 3", "...."],
        ["solución1", "solución 2", "..."],
        "https://player.vimeo.com/video/890986261"
    ),
*/
//==========================================================
const listaProyectos = [
    new proyecto("ZombieSurvival",
        "Zombie Survival",
        "Este videojuego reúne hasta 6 jugadores que se sumergirán en una emocionante apocalipsis zombi. Esta experiencia despierta el el instinto de equipo y la acción comenzará en una iglesia desolada. Una puerta se abre, revelando un gigantesco zombie con hacha. Tras él, hordas de zombies invaden el espacio desde todas las direcciones. Los jugadores deberán repara barricadas, coordinar estrategias y sobrevivir al caos. ¿Los equipos resistirán el asedio? ¡La cuenta regresiva para la supervivencia ha comenzado!",
        ["Inmersión total", "Interacción en grupo", "Variedad de entornos"],
        ["Gráficos realistas", "Cooperación en tiempo real", "Escenarios dinámicos", "Modo multijugador competitivo"],
        "https://player.vimeo.com/video/890986261"
    ),
    new proyecto("FridaKahlo",
        "Los Sueños de Frida",
        "Los sueños de Frida Kahlo es una experiencia que recrea un museo virtual y muestra la arrolladora personalidad e indiscutible talento a través de los dibujos de una de las grandes figuras del siglo XX. La exposición incluye obras inéditas donde se exploran los secretos, las pasiones, los temores y las fantasías de la artista. La experiencia concluye en una recreación del libro inédito de Artika, mientras lo lee e interactúa con él.",
        ["Inmersión total", "Acercar la cultura a un público amplio", "Inclusión y educación"],
        ["Museo virtual accesible", "Portabilidad de la experiencia", "Realismo visual y táctil"],
        "https://player.vimeo.com/video/890986261"
    ),
    new proyecto("DaiichiSankyo",
        "Daiichi Sankyo",
        "Experiencia interactiva diseñada con estética low poly para un solo jugador, el cual puede explorar la caja de pastillas de Nilemdo y Nustendi, reconocidos por sus propiedades para contrarrestar el colesterol alto. Dentro de esta experiencia, el usuario puede interactuar con el producto, abriendo la caja de pastillas y seleccionando una para colocarla en un contenedor. A través de esta interacción, se puede observar visualmente cómo estas pastillas afectan una arteria con colesterol, proporcionando una comprensión más profunda de su función y beneficios para la salud.",
        ["Promoción del producto", "Educación del consumidor", "Generación de interés"],
        ["Experiencia inmersiva", "Comprensión visual del producto y educación al consumidor", "Simulación de impacto"],
        "https://player.vimeo.com/video/890986261"
    ),
    new proyecto("Cotec",
        "Cotec",
        "Experiencia única de presentación de la empresa Cotec, que comienza con la visualización de un vídeo en formato 360 grados, ofreciendo una completa inmersión en las instalaciones de la empresa. Posteriormente, los asistentes son guiados a una sala exclusiva donde se proyectan vídeos detallados sobre una selección de proyectos realizados por Cotec. Esta experiencia proporciona una visión integral de su filosofía empresarial y logros destacados, permitiendo a los participantes explorar su trabajo de manera interactiva e inmersiva.",
        ["Presentación de la empresa", "Generación de interés", "Transmisión de valores y filosofía"],
        ["Inmersión interactiva en el mundo de la empresa", "Sala de proyección de vídeos de diferentes proyectos", "Transmisión mediante la integración de elementos visuales y narrativos"],
        "https://player.vimeo.com/video/890986261"
    ),
    new proyecto("Lyhla",
        "Lyhla",
        "En esta experiencia experiencia los usuarios son transportados a un entorno virtual sereno y pacífico, con paisajes naturales y atmósferas tranquilas. Lyhla proporciona guías de meditación con voces calmantes, música relajante y efectos visuales que fomentan la concentración. Los usuarios pueden personalizar su experiencia eligiendo la duración de las sesiones, ajustando la iluminación y seleccionando entre una variedad de paisajes. Proporciona un refugio virtual donde los usuarios puedan practicar la meditación, mejorar su bienestar y encontrar momentos de paz.",
        ["Ofrecer un espacio tranquilo", "Accesibilidad para todos", "Personalización de la experiencia"],
        ["Creación de paisajes naturales realistas", "Programas adaptativos según la dificultad", "Creación de menú interactivo con diferentes opciones"],
        "https://player.vimeo.com/video/890986261"
    ),
    new proyecto("MetaPolo",
        "MetaPolo",
        "Los participantes se sumergen en una experiencia única con los que interactuar, donde la frontera entre lo virtual y lo real se desdibuja gracias a la revolucionaria tecnología FreeRoom. Este proyecto redefine la manera en que los jugadores interactúan, permitiéndoles verse entre sí y moverse libremente en una sala virtual que se sincroniza con el mundo real. En esta experiencia, se muestra la recepción del Polo de Contenidos Digitales de Málaga y aparecen elementos como un corazón, un molino eólico, trenes, tractor…",
        ["Promoción del Polo Digital", "Capacidad de adoptar tecnologías avanzadas", "Diseño inmersivo"],
        ["Diseño 3D detallado", "Interacción con los elementos", "Implementación de tecnología free room"],
        "https://player.vimeo.com/video/890986261"
    ),
    new proyecto("PlazadelObispo",
        "Plaza del Obispo",
        "Esta experiencia cautivadora se basa en un modelado 3D, que ha permitido la recreación detallada y realista de la Plaza del Obispo y la majestuosa Catedral de la Encarnación. El usuario puede viajar a Málaga desde cualquier parte del mundo y sumergirse en este entorno virtual, explorando cada rincón de la plaza y maravillándose ante la grandiosidad arquitectónica de la catedral.",
        ["Educación Cultural", "Accesibilidad para todos", "Interactividad"],
        ["Escaneado y modelado detallado", "Rutas virtuales guiadas", "Integración de elementos culturales"],
        "https://player.vimeo.com/video/890986261"
    ),
    new proyecto("ToyPark",
        "Toy Park",
        "¡Sobrevive al mundo mágico de Toy Park! En este emocionante juego de supervivencia, unos adorables juguetes  se han convertido en feroces zombies. Los  jugadores deberán unir sus fuerzas para desmontarlos y devolverles su encanto perdido. A lo largo de tu aventura, te enfrentarás a una variedad de desafíos y enemigos cada vez más peligrosos. Toy Park te sumergirá en un mundo vibrante y lleno de acción donde la supervivencia depende de tu habilidad para trabajar en equipo y enfrentarte a lo desconocido. Pero la aventura no termina ahí. En la última etapa del juego, te enfrentarás a tu mayor desafío hasta ahora: una emocionante batalla en una habitación contra un robot gigante. ¿Tendréis tú y tu equipo la valentía suficiente para derrotarlo?",
        ["Experiencia inmersiva y divertida", "Interacción en grupo", "Atractivo para todas las edades"],
        ["Gráficos realistas", "Cooperación en tiempo real", "Compromiso en equipo"],
        "https://player.vimeo.com/video/890986261"
    ),
];
