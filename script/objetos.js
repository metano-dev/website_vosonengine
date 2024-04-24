//CURSORES
var cursor = new puntero();
var centro = new origen(0,0);
var rotacion = new carrusel(0);
var encabezado = new banda(encabezadoBienvenida*window.innerHeight);

//VÉRTICES
var modelo00 = [];
var modeloInvisible = [];
for (i=0; i < verticesMaximos; i++)
{
	modeloInvisible.push(new vertice(Math.floor(Math.random()*1)*2*espacio - espacio, Math.floor(Math.random()*1)*2*espacio - espacio, Math.floor(Math.random()*1)*2*espacio - espacio));
	modelo00.push(new vertice(2*Math.random()*espacio-espacio, 2*Math.random()*espacio-espacio, 2*Math.random()*espacio-espacio));
}
var modeloEspacio = [];
for (i=0; i < verticesMaximos; i++)
	modeloEspacio.push(new vertice(2*Math.random()*espacio-espacio, 2*Math.random()*espacio-espacio, 2*Math.random()*espacio-espacio));

var modeloAleatorio = [];
for (i=0; i < verticesMaximos; i++)
	modeloAleatorio.push(new vertice(2*Math.random()*espacio-espacio, 2*Math.random()*espacio-espacio, 2*Math.random()*espacio-espacio));

var menuPrincipal = [
	new navegador(1, 1, 			TXTinicio),
	new navegador(2, "InfinityRoom",	TXTinifinity),
	new navegador(3, 2, 			TXTproyectos),
	new navegador(4, 4, 			TXTnosotros),
	new navegador(5, 6, 			TXTcontacto)
];
var menuInfinity = [
	new navegador(1, "", 	TXTvoson),
	new navegador(2, 4,		TXTproy1),
	new navegador(3, 6,		TXTcontactar)
];	
var menuProyecto = [
	new navegador(1, "",			TXTvoson),
	new navegador(2, "InfinityRoom",TXTinifinity),
	new navegador(3, 3, 			TXTcontacto)
];
var modelosTodos = [	modeloVoson,	modeloInfinity, modeloEspacio,	modeloAleatorio,	modeloOculus, modeloOndas,		modeloDinosaurio, modeloRobot];
var modelosPrincipal = [modeloOculus,	modeloVoson,	modeloEspacio,		modeloInvisible,	modeloInvisible,	modeloInvisible, 	modeloInvisible, 	modeloInvisible, modeloInvisible];
var modelosInfinity =  [modeloInfinity, modeloVoson,	modeloInvisible,	modeloInvisible,	modeloInvisible,	modeloInvisible,	modeloInvisible,	modeloInvisible];
var modelosProyecto =  [modeloRobot,	modeloEspacio,	modeloInvisible,	modeloInvisible,	modeloInvisible,	modeloInvisible,	modeloInvisible,	modeloInvisible];
//FONDOS
var paginaPrincipal = new pagina(
	"principal",
	[
		new apartado(colorVosonPrincipal,	0.3, 0.24),	//(oculus -> logo)
		new apartado(colorVosonPrincipal,		1,0.24),	//proyecto (partículas)
		new apartado(false,		1,0.20),	//freeroom (partículas2)
		new apartado(colorVosonPrincipal,		1,0.12),	//nosotros (onditas)
		new apartado(colorVosonFondo,	0.3,0.12),	//valores (dinosaurio)
		new apartado(false,		1,0.2),	//contacto (partículas)
		new apartado(colorVosonPrincipal,		1,0.2)	//pie 
	],
	[0.7, 0.5, 0.5, 0.5, 0.5, 0.8, 0.5, 0.5, 0.5],
	modelosPrincipal,
	[videoPrincipal1, videoPrincipal2],
	menuPrincipal,
	1,
	0.9,
	[colorVosonPrincipal, colorVosonSecundario, colorVosonParticulaA, colorVosonParticulaB, colorVosonFondo]
);

var paginaInfinity = new pagina(
	"infinity",
	[
		new apartado(colorIRPrincipal,		0.6, 0.24),	// vídeo (logo infinity -> partículas)
		new apartado(colorIRPrincipal, 0.8,		0.24),	//diseñado
		new apartado(colorIRPrincipal,		1,0.24),	//por que
		new apartado(false,		1,0.24),	//toypark (modelo robot)
		new apartado(false,	1,0.24),	//survival zombie (modelo zombie)
		new apartado(false,		1,0.24),	//contacto (partículas)
		new apartado(colorIRPrincipal,		1,0.24)	//pie
	],
	[0.8, 0.6, 0.2, 0.2, 0.8, 0.2, 0.8, 0.1, 0.9, 0.1, 0.9],
	modelosInfinity,
	["videos/InfinityRoom_video.mp4", "proyectos/ZombieSurvival/ZombieSurvival_video.mp4"],
	menuInfinity,
	1,
	0.9,
	[colorIRPrincipal, colorIRSecundario, colorIRParticulaA, colorIRParticulaB, colorIRFondo]
);

var paginaProyecto = new pagina(
	"proyecto",
	[
		new apartado(false,		1,0.24),	// vídeo (partículas)
		new apartado(colorVosonPrincipal,		1,0.24),	//descripción (modelo del proyecto ej robot)
		new apartado(colorVosonPrincipal,		0.2, 0.20),	//contacto (partículas)
		new apartado(colorVosonPrincipal,		1,0.2)	//pie
	],
	[0.6, 0.5, 0.75, 0.75, 2, 2.5, 3, 3.5, 4, 4.5, 5],
	modelosProyecto,
	[videoPrincipal1, videoPrincipal1],
	menuProyecto,
	0,
	0.7,
	[colorVosonPrincipal, colorVosonSecundario, colorProyectoParticulaA, colorProyectoParticulaB, colorVosonFondo]
);



