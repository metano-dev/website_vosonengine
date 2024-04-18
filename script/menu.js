function DIBUJARmenu(obj)
{
	if (movil == true)
		return;
	const ctx = lienzo.getContext("2d");
	ctx.textAlign = "center";
	ctx.textBaseline = "alphabetic";
	ctx.letterSpacing = encabezadoTextoTamaño*0.05 + "px";
	ctx.font = encabezadoTextoTamaño+"px "+fuenteR;
	ctx.fillStyle = colorFondo ;
	sep = 0;
	tol = 0.5*encabezadoTextoSeparacion*encabezadoTextoTolerancia;
	for (j = 0; j < menu.length; j++)
	{
		cuadro = ctx.measureText(menu[j].rotulo);
		sep += cuadro.width + encabezadoTextoSeparacion;
	}
	cuadro = ctx.measureText(menu[0].rotulo);
	if (  (encabezado.y-2*encabezadoMargenVertical)*5.5 + sep - 1*cuadro.width +50 > window.innerWidth ) //********* 
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
	
	if (	x - 0.5*cuadro.width  - tol	< cursor.w && cursor.w < x + 0.5*cuadro.width  + tol	)
		if (y - cuadro.hangingBaseline - tol < cursor.h && cursor.h < y + tol)
		{
			ctx.letterSpacing = "0px";
			ctx.font = encabezadoTextoTamaño+"px "+fuenteB;
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