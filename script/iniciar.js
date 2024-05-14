//INICIO
function iniciar()
{	
	const lienzo = document.getElementById("lienzo");
	const ctx = lienzo.getContext("2d");
	ctx.textRendering = "optimizeLegibility";
	dirigir();
	rotar();
	console.log("listo");
}

//REFRESCO
function iterar()
{
	requestAnimationFrame(refrescar);
}	
function rotar()
{
	if (parada != true && tocando != true && compensacion == 1)
		rotacion.tx += 300;
	setTimeout(rotar, 2000);
}

//ESCUCHAS
//window.onload		= iniciar;
window.onresize         = redimensionar;
document.onmousedown    = click;
document.onmouseup      = unclick;
document.onmousemove    = orbitar;
document.onwheel        = deslizarRueda;
document.ontouchstart   = tocarIniciar;
document.ontouchmove    = tocarMover;
document.ontouchend     = tocarTerminar;
