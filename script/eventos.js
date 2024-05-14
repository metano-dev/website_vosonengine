function tocarMovil ()
{
	vidobj = document.getElementById("video");
	if (vidobj.currentTime < 1)
		vidobj.play();
}
function tocarIniciar(e)
{
	if (e.touches.length == 1)
	{
		cursor.click = true;
		tou = e.touches[0];
		cursor.ow = rotacion.tx - tou.clientX;
		cursor.oh = deslizamiento +tou.clientY/window.innerHeight;
		parada = true;
		
	}
	if (movil != true) {movil = true;}
	//tocarMovil();
}
function tocarMover(e)
{
	if (e.touches.length == 1)
	{
		//console.log("evento: moviendo");
		tou = e.touches[0];
		cursor.tx = 0.6 * (tou.clientX/window.innerWidth  -0.5);
		cursor.ty = 0.6 * (tou.clientY/window.innerHeight -0.5);
		cursor.x = cursor.tx;
		cursor.y = cursor.ty;
		rotacion.tx = cursor.ow +tou.clientX;
		deslizamiento = cursor.oh - tou.clientY/window.innerHeight;
		parada = true;
		deslizar();
	}
	
	e.preventDefault();
    	return false;
}
function tocarTerminar(e)
{
	if (e.touches.length == 1)
	{
		cursor.click = false;
		parada = false;
	}
}

function click (event)
{
	cursor.click = true;
}

function unclick (event)
{
	cursor.click = false;
	//deslizar();
}

function orbitar (event)
{
	event =  event || window.event;
	cursor.tx = 0.6 * (event.pageX/window.innerWidth  -0.5);
	cursor.ty = 0.6 * (event.pageY/window.innerHeight -0.5);
	cursor.w = event.pageX;
	cursor.h = event.pageY;
	parada = false;
}

function redimensionar ()
{
	document.getElementById("lienzo").width = window.innerWidth ;
	document.getElementById("lienzo").height = window.innerHeight ;
	centro.tx = doX*window.innerWidth;
	centro.ty = doY*window.innerHeight;
	desfaseFondo = 0.1*window.innerHeight;
	encabezadoInicio = Math.max(encabezadoBienvenida*(1- 0.5*(horizontal != true)),   1.5*(horizontal != true)*encabezadoReducido/window.innerHeight);
	compensacion = 1;
	if (window.innerWidth < window.innerHeight)
	{ //VERTICAL
		movil = true;
		responsividad = 0.75*window.innerWidth/1920;
		horizontal = false;
		doY = 0.6;
		margH = 0.2*encabezadoMargenHorizontal;
		ejeY = 0.65*window.innerWidth;
		if (window.innerWidth/window.innerHeight < 9/16)
			compensacion = 1.5;
	}
	else 
	{ //HORIZONTAL	
		responsividad = window.innerHeight/1920;
		horizontal = true;
		doY = 0.5;
		margH = encabezadoMargenHorizontal;
		ejeY = 0.5*window.innerWidth - 50 ;
		if (window.innerWidth/window.innerHeight > 16/9)
			ejeY = 0.3*window.innerWidth;
	}
	if (deslizamiento < predeslizamiento)
		encabezado.ty = encabezadoInicio*window.innerHeight;
	redimensionarVideo();
	
	if (carga == true) {dibujar();};
}

function deslizarRueda (event)
{
	//event.preventDefault(); gestionar
	deslizamiento += event.deltaY*0.001;
	deslizar();
}

function deslizar()
{
	//console.log("evento: deslizando");
	if (deslizamiento < -predeslizamiento)
		deslizamiento = -predeslizamiento;
	if (deslizamiento > deslizamientoMaximo)
		deslizamiento = deslizamientoMaximo;
	
	if (menuMovil == true)
	{
		encabezado.ty = (menu.length+1)*separacionMenuMovil;
	}
	else if (deslizamiento < 0)
		encabezado.ty = encabezadoInicio*window.innerHeight*compensacion;
	else encabezado.ty = encabezadoReducido;
	
	interpolacion = 0;
	for (i = 0; i < interpolaciones.length - 1; i++)
		if (deslizamiento > interpolaciones[i])
			interpolacion = i;
	
	fInterpol = (deslizamiento - interpolaciones[interpolacion]) / (interpolaciones[interpolacion + 1] - interpolaciones[interpolacion]);
	actualizarVertices(Math.floor(interpolacion*0.5), interpolacion);
	
	if (deslizamiento > 0.6*deslizamientoMaximo)
	{
		if (videoN != videos[1])
		{	
			videoN = videos[1];
			popup(videos[1]);
		}
	}
	if (deslizamiento < 0.6*deslizamientoMaximo)
	{
		if (videoN != videos[0])
		{	
			videoN = videos[0];
			popup(videos[0]);
		}
	}
	if (deslizamiento > 0.6*deslizamientoMaximo)
		colorPart = colorVertB;
	else if (deslizamiento < 0.4*deslizamientoMaximo)
		colorPart = colorVertA;
	else
	{
		cR = colorPartR + Math.floor(dPartR*(deslizamiento-0.4*deslizamientoMaximo)/0.2/deslizamientoMaximo);
		cG = colorPartG + Math.floor(dPartG*(deslizamiento-0.4*deslizamientoMaximo)/0.2/deslizamientoMaximo);
		cB = colorPartB + Math.floor(dPartB*(deslizamiento-0.4*deslizamientoMaximo)/0.2/deslizamientoMaximo);
		colorPart = "rgb("+cR+","+cG+","+cB+")";
	}
}

function actualizarVertices(j, k)
{	
	if (k%2 != 0)
	{
		//doX = posiciones[Math.floor(interpolacion*0.5)] + fInterpol*(posiciones[Math.floor(interpolacion*0.5)+1]- posiciones[Math.floor(interpolacion*0.5)]);
		
		for (i = 0; i < vertices.length; i++)
		{	
			vertices[i].tu = coseno*modelos[j][i].u - seno*modelos[j][i].v + fInterpol*(modelos[j+1][i].u - modelos[j][i].u);
			vertices[i].tv = seno*modelos[j][i].u + coseno*modelos[j][i].v + fInterpol*(modelos[j+1][i].v - modelos[j][i].v);
			vertices[i].tw = modelos[j][i].w + fInterpol*(modelos[j+1][i].w - modelos[j][i].w);
		}
	}
	else
	{
		for (i = 0; i < vertices.length; i++)
		{	
			vertices[i].tu = Math.cos(fInterpol*animGiro)*modelos[j][i].u - Math.sin(fInterpol*animGiro)*modelos[j][i].v ;
			vertices[i].tv = Math.sin(fInterpol*animGiro)*modelos[j][i].u + Math.cos(fInterpol*animGiro)*modelos[j][i].v ;
			vertices[i].tw = modelos[j][i].w;
		}
	}
	doX = posiciones[Math.floor(interpolacion*0.5)];
	centro.tx = doX*window.innerWidth;
}

function redimensionarVideo () {
	ratO = window.innerWidth/window.innerHeight;
	const ventana = document.getElementById("ventana");
	const fondo = document.getElementById("fondo");
	
	if (ratO > ratT) { 	// HORIZONTAL
		ratio = window.innerHeight/ratH;
		ventana.width  = window.innerWidth +10;
		ventana.height = window.innerWidth/ratT + 10/ratT;
		ventana.style.top 		= -0.5*window.innerWidth/ratT -5/ratT +0.5*window.innerHeight +"px";
		ventana.style.left 		= -5 +"px";
		ventana.style.bottom 	= -0.5*window.innerWidth/ratT -5/ratT +0.5*window.innerHeight +"px";
		ventana.style.right 	= -5 +"px";
	} else {			// VERTICAL
		ratio = window.innerWidth/ratW;
		ventana.width  = window.innerHeight*ratT + 10*ratT;
		ventana.height = window.innerHeight +10;
		ventana.style.top 		= -5 +"px";
		ventana.style.left 		= -0.5*window.innerHeight*ratT -5*ratT +0.5*window.innerWidth +"px";
		ventana.style.bottom 	= -5 +"px";
		ventana.style.right 	= -0.5*window.innerHeight*ratT -5*ratT +0.5*window.innerWidth +"px";
	}
	if (document.getElementById("video")) {
		document.getElementById("video").width    = ventana.width;
		document.getElementById("video").height   = ventana.height;
		}
	fondo.width  = ventana.width;
	fondo.height = ventana.height;
	fondo.style.top = ventana.style.top ;
	fondo.style.left = ventana.style.left ;
	fondo.style.bottom = ventana.style.bottom ;
	fondo.style.right = ventana.style.right ;
}

function popup (dir) {
	redimensionar();
	var ventana = document.getElementById("ventana");
	formato = dir.slice(dir.lastIndexOf("."));
	if ( formato == ".jpg" || formato == ".png")
	{
		ventana.style.backgroundImage = "url("+dir+")" ;
		ventana.src = "";
		//console.log("imagen");
		return;
	}
	if (formato == ".mp4")
	{	
		const fondo = document.getElementById("fondo");
		if (document.getElementById("video")) {fondo.removeChild(document.getElementById("video"));};
		if (movil != true)
		{
			const videoM = document.createElement('video');
			videoM.src = dir ;
			videoM.id = "video" ;
			videoM.controls = false;
			videoM.muted    = true;
			//videoM.playsinline = true;
			videoM.autoplay = true;
			videoM.loop = true;
			videoM.width    = fondo.width;
			videoM.height   = fondo.height;
			fondo.appendChild(videoM);
		}
		//fondo.style.backgroundImage = dir.split("video")[0] + "espera.jpg";
		//fondo.style.backgroundImage = "https://upload.wikimedia.org/wikipedia/commons/f/f2/Philip_I_of_Taranto_statue.png";
		fondo.style.backgroundColor = "#F00";
		//console.log("video");
		return;
	}
	ventana.style.backgroundImage = "" ;
	ventana.src = dir + vimeoVars;
	//console.log("vimeo");
	return;
}

function popout () {
	//console.log("fin");
	var ventana = document.getElementById("ventana");
	if (document.getElementById("video")) {ventana.removeChild(document.getElementById("video"));};
}
