function dirigir()
{
	if (window.innerWidth/window.innerHeight < 9/16)
	{
			compensacion = 1.5;
			movil = true;
			verticesMaximos = 1000;
			optimizarModelos();
	}
    urlRaiz  = String(window.location).split("?")[0];
    urlExtra = String(window.location).split("?")[1];
	
	if (urlExtra == "InfinityRoom")
	{
		iniciarPagina(paginaInfinity);
		redimensionar();
		cargarMedios();
		deslizar();
		return;
	}
	if (!urlExtra)
	{
		iniciarPagina(paginaPrincipal);
		cargarMedios();
		deslizar();
		return;
	}
	for (i=0; i<listaProyectos.length; i++)
		if (listaProyectos[i].titulo == urlExtra)
		{
			proyectoActual = i;
			var cli1 = new Image();
			cli1.src = "proyectos/" + urlExtra + "/" + urlExtra+ "_cliente.png";
			clientesIMG.push(cli1);
			const ctx = lienzo.getContext("2d");
			cli1.onload = () => {
				clientesPAT.push(ctx.createPattern(cli1, 'no-repeat'));
				cargarFuentes(0);
				paginaProyecto.videos = ["proyectos/" + urlExtra + "/" + urlExtra+ "_video.mp4", "proyectos/" + urlExtra + "/" + urlExtra+ "_video.mp4"];
				iniciarPagina(paginaProyecto);
				redimensionar();
				iterar();
				deslizar();
				return;
			}
		}
	console.log("404");
}

function iniciarPagina(pag)
{	
	menu = pag.menu;
	apartados = pag.apartados;
	vertices = modelo00;
	modelos = pag.modelos;
	numeroApartados = apartados.length;
	videos = pag.videos;
	posiciones = pag.posiciones;
	popup(videos[0]);
	console.log("página iniciada");
	paginaActual = pag.nombre;
	predeslizamiento = pag.pre;
	deslizamiento = -predeslizamiento;
	deslizamientoMaximo = (numeroApartados-1)*tamañoApartado - 1 + 0.1 ;
	tamañoApartado = pag.tamaño;
	doX = pag.posiciones[0];
	definirColores(pag);
	deslizar(); 
}

function definirColores(pag)
{
	colorPrincipal = pag.colores[0];
	colorSecundario = pag.colores[1];
	colorVertA = pag.colores[2];
	colorVertB = pag.colores[3];
	colorFondo = pag.colores[4];
	colorPartR = parseInt(colorVertA.split("(")[1].split(")")[0].split(",")[0]);
	colorPartG = parseInt(colorVertA.split("(")[1].split(")")[0].split(",")[1]);
	colorPartB = parseInt(colorVertA.split("(")[1].split(")")[0].split(",")[2]);
	dPartR = parseInt(colorVertB.split("(")[1].split(")")[0].split(",")[0]) - parseInt(colorVertA.split("(")[1].split(")")[0].split(",")[0]);
	dPartG = parseInt(colorVertB.split("(")[1].split(")")[0].split(",")[1]) - parseInt(colorVertA.split("(")[1].split(")")[0].split(",")[1]);
	dPartB = parseInt(colorVertB.split("(")[1].split(")")[0].split(",")[2]) - parseInt(colorVertA.split("(")[1].split(")")[0].split(",")[2]);
	colorPart = colorVertA;
}