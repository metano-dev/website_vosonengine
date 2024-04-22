//VARIABLES INDEPENDIENTES
const fps = 24 ;
var fotoM1;
var fotoN1;
var compensacion = 1;
var cargaClientes           = false;
var cargaPrevisualizaciones = false;
var cargaMiniaturas         = false;
var cargaIconos             = false;
var cargaFuentes            = false;
var colorPrincipal;
var colorVert;
var colorSecundario;
var colorPartR ;
var colorPartG;
var colorPartB;
var dPartR;
var dPartG;
var dPartB;
var colorPart = colorVert;
var icono;
var tocando = false;
var parada = false;
var videoN = "";
var videos = [];
var iconosIMG = [];
var iconosPAT = [];
var iconosSRC = ["icono1.png", "icono2.png", "icono3.png"];
var logosIMG = [];
var logosPAT = [];
var logosSRC = ["InfinityRoom_logo.png", "Guitart_logo.png", "LaBallenaAlegre_logo.png", "Melia_logo.png", "PiramideSalou_logo.png", "PoloDigital_logo.png", "PortAventura_logo.png", "Tamarit_logo.png"];
var miniaturasIMG = [];
var miniaturasPAT = [];
var miniaturasSRC = [];
var previsualizacionesSRC = [];
var previsualizacionesIMG = [];
var previsualizacionesPAT = [];
var clientesSRC = [];
var clientesIMG = [];
var clientesPAT = [];
var horizontal = true;
var fInterpol = 0;
var modelos = [];
var posiciones = [];
var t = 0;
var h = 0;
var w = 0;
var mX = 0;
var mY = 0;
var proyectoActual = undefined;
var deslizamiento = -1;
var interpolacion = 0;
var interpolacionClave = 0;
var apartados;
var vertices;
var numeroApartados;
var deslizamientoMaximo;
var responsividad = 1;
var verticesMaximos = 4000;
var espacio = 5000;
var ratO = window.innerWidth/window.innerHeight;
var ratio = 1 ;
var movil = false;
var carga = false;
var margH = encabezadoMargenHorizontal;
var ejeY;

var predeslizamiento = 1;
var urlRaiz;
var encabezadoInicio;

//APARIENCIA
var deceleracion = 0.2;
var doX = 0.65;
var doY = 0.5;
var tamañoApartado = 0.9;
var arrastreDeslizamiento = 1;

const encabezadoTextoTolerancia = 0.5; //entre 0 y 1

//CONSTANTES INDEPENDIENTES
const previsMaxima = 500;
const clipFrontal = 3000;
const clipPosterior = -3000;
const ratW = 1920 ;
const ratH = 1080 ;
const ratT = ratW/ratH ; //ratio del video
const bzf = 0.5*0.5522; //0.5*0.552284749831;
const tolerancia = 0.001;
const desborde = 50;
const vimeoVars = "?h=c757cc5d1c&controls=0&sidedock=0&autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0&portrait=0";


//CONSTANTES DEPENDIENTES
const encabezadoReducido = 2*encabezadoMargenVertical + encabezadoContendio;
const transicion = 0.25;
const rojo = "#F00";

//AJUSTES
if (encabezadoTextoTolerancia > 1 ) {encabezadoTextoTolerancia = 1;}
if (encabezadoTextoTolerancia < 0 ) {encabezadoTextoTolerancia = 0;}
const pieTamaño = 0.1;
const animGiro = Math.PI*0.3;
const seno      = Math.sin(animGiro);
const coseno    = Math.cos(animGiro);
const interpolaciones = [
    (-1.0-transicion)*tamañoApartado,
    -0.5*tamañoApartado,
    (0.0-transicion)*tamañoApartado,
    0.5*tamañoApartado,
    (1.0-transicion)*tamañoApartado,
    1.5*tamañoApartado,
    (2.0-transicion)*tamañoApartado,
    2.5*tamañoApartado,
    (3.0-transicion)*tamañoApartado,
    3.5*tamañoApartado,
    (4.0-transicion)*tamañoApartado,
    4.5*tamañoApartado,
    (5.0-transicion)*tamañoApartado,
    5.5*tamañoApartado,
    (6.0-transicion)*tamañoApartado,
    6.5*tamañoApartado,
    (7.0-transicion)*tamañoApartado,
    7.5*tamañoApartado,
];