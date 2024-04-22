
function DIBUJARmenu(obj)
{
	comp = compensacion*compensacion;
	const ctx = lienzo.getContext("2d");
	ctx.textAlign = "center";
	ctx.textBaseline = "alphabetic";
	ctx.letterSpacing = comp*encabezadoTextoTamaño*0.05 + "px";
	ctx.font = comp*encabezadoTextoTamaño+"px "+fuenteR;
	ctx.fillStyle = colorFondo ;
	sep = 0;
	tol = 0.5*encabezadoTextoSeparacion*encabezadoTextoTolerancia*comp;
	for (j = 0; j < menu.length; j++)
	{
		cuadro = ctx.measureText(menu[j].rotulo);
		sep += cuadro.width + comp*encabezadoTextoSeparacion;
	}
	cuadro = ctx.measureText(menu[0].rotulo);
	if (  (encabezado.y-2*encabezadoMargenVertical)*5.5 + sep - 1*cuadro.width +50 > window.innerWidth ) //********* 
		if (menuMovil != true)
			return;
	sep = 0;
	for (j = obj.n; j < menu.length; j++)
	{
		cuadro = ctx.measureText(menu[j].rotulo);
		sep += cuadro.width + encabezadoTextoSeparacion;
	}
	cuadro = ctx.measureText(obj.rotulo);
	x = window.innerWidth - margH - sep - 0.5*cuadro.width;
	y = encabezado.y -encabezadoMargenVertical;
	if (menuMovil == true)
	{
		x = window.innerWidth - margH - 0.5*cuadro.width;
		y = margH + obj.n*separacionMenuMovil;
	}
	//_________
	if (	x - 0.5*cuadro.width  - tol	< cursor.w && cursor.w < x + 0.5*cuadro.width  + tol	)
		if (y - cuadro.hangingBaseline - tol < cursor.h && cursor.h < y + tol)
		{
			ctx.letterSpacing = "0px";
			ctx.font = comp*encabezadoTextoTamaño+"px "+fuenteB;
			if (cursor.click ==  true) {
				ctx.fillStyle = colorFondo;
				obj.click = true;
			}
			if (cursor.click == false && obj.click == true)
			{
				if (typeof obj.d == "number")
				{
					deslizamiento = (obj.d-1) * tamañoApartado;
					deslizar();
				}
				else window.location = urlRaiz + "?" + obj.d;
			}
		}
	if (cursor.click == false)
		obj.click = false;
	ctx.fillText(obj.rotulo, x, y);
	ctx.letterSpacing = "0px";
}