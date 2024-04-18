function dirigir()
{
    urlRaiz  = String(window.location).split("?")[0];
    urlExtra = String(window.location).split("?")[1];
	
	if (urlExtra == "InfinityRoom")
	{
		cargarFuentes(0);
		iniciarPagina(paginaInfinity);
		redimensionar();
		iterar();
		return;
	}
	if (!urlExtra)
	{
		iniciarPagina(paginaPrincipal);
		cargarMedios();
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
	colorVert = pag.colores[1];
	colorSecundario = pag.colores[2];
	colorFondo = pag.colores[3];
	colorPartR = parseInt(colorVert.split("(")[1].split(")")[0].split(",")[0]);
	colorPartG = parseInt(colorVert.split("(")[1].split(")")[0].split(",")[1]);
	colorPartB = parseInt(colorVert.split("(")[1].split(")")[0].split(",")[2]);
	dPartR = parseInt(colorSecundario.split("(")[1].split(")")[0].split(",")[0]) - parseInt(colorVert.split("(")[1].split(")")[0].split(",")[0]);
	dPartG = parseInt(colorSecundario.split("(")[1].split(")")[0].split(",")[1]) - parseInt(colorVert.split("(")[1].split(")")[0].split(",")[1]);
	dPartB = parseInt(colorSecundario.split("(")[1].split(")")[0].split(",")[2]) - parseInt(colorVert.split("(")[1].split(")")[0].split(",")[2]);
	colorPart = colorVert;
}