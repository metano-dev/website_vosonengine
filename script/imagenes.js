function cargarMedios()
{
	cargarFuentes(0);
	cargarIconos(0);
	cargarMiniaturas(0);
	cargarPrevisualizaciones(0);
	cargarClientes(0);
	cargarLogos(0);
	cargarFotos();
	comprobarCarga();
}

function comprobarCarga()
{
	if (	cargaClientes			== true
	&&		cargaPrevisualizaciones	== true
	&&		cargaPrevisualizaciones	== true
	&&		cargaLogos				== true
	&&		cargaFotos				== true
	&& 		cargaMiniaturas			== true
	&& 		cargaIconos				== true)
	{
		refrescar();
		popup(videos[0]);
		console.log("todos los medios cargados");
		deslizar();
	}
	else setTimeout(comprobarCarga, 100);
}


function cargarClientes(i)
{
	clientesSRC.push("proyectos/"+listaProyectos[i].titulo+"/"+listaProyectos[i].titulo+"_cliente.png");
	const ctx = lienzo.getContext("2d");
	eval("var clie"+ i +"= new Image();");
	eval("clie" + i + ".src = clientesSRC["+ i +"];");
	eval("clie" + i + ".onload = () => {clientesPAT.push(ctx.createPattern(clie"+i+", 'no-repeat'));"
	+"clientesIMG.push(clie"+i+");"
	+"if ("+i+"< listaProyectos.length-1) {cargarClientes("+(i+1)+")} else cargaClientes = true;"
	+"}");
}
function cargarPrevisualizaciones(i)
{
	previsualizacionesSRC.push("proyectos/"+listaProyectos[i].titulo+"/"+listaProyectos[i].titulo+"_previsualizacion.png");
	const ctx = lienzo.getContext("2d");
	eval("var prev"+ i +"= new Image();");
	eval("prev" + i + ".src = previsualizacionesSRC["+ i +"];");
	eval("prev" + i + ".onload = () => {previsualizacionesPAT.push(ctx.createPattern(prev"+i+", 'no-repeat'));"
	+"previsualizacionesIMG.push(prev"+i+");"
	+"if ("+i+"< listaProyectos.length-1) {cargarPrevisualizaciones("+(i+1)+")} else cargaPrevisualizaciones = true;"
	+"}");
}
function cargarMiniaturas(i)
{
	miniaturasSRC.push("proyectos/"+listaProyectos[i].titulo+"/"+listaProyectos[i].titulo+"_miniatura.png");
	const ctx = lienzo.getContext("2d");
	eval("var mini"+ i +"= new Image();");
	eval("mini" + i + ".src = miniaturasSRC["+ i +"];");
	eval("mini" + i + ".onload = () => {miniaturasPAT.push(ctx.createPattern(mini"+i+", 'no-repeat'));"
	+"miniaturasIMG.push(mini"+i+");"
	+"if ("+i+"< listaProyectos.length-1) {cargarMiniaturas("+(i+1)+")} else cargaMiniaturas = true;"
	+"}");
}
function cargarIconos (i)
{
	const ctx = lienzo.getContext("2d");
	eval("var ico"+ i +"= new Image();");
	eval("ico" + i + ".src = 'iconos/' + iconosSRC["+ i +"];");
	eval("ico" + i + ".onload = () => {iconosPAT.push(ctx.createPattern(ico"+i+", 'no-repeat'));"
	+"iconosIMG.push(ico"+i+");"
	+"if ("+i+"< iconosSRC.length-1) {cargarIconos("+(i+1)+")} else cargaIconos = true;"
	+"}");
}
function cargarLogos (i)
{
	const ctx = lienzo.getContext("2d");
	eval("var log"+ i +"= new Image();");
	eval("log" + i + ".src = 'logos/' + logosSRC["+ i +"];");
	eval("log" + i + ".onload = () => {logosPAT.push(ctx.createPattern(log"+i+", 'no-repeat'));"
	+"logosIMG.push(log"+i+");"
	+"if ("+i+"< logosSRC.length-1) {cargarLogos("+(i+1)+")} else cargaLogos = true;"
	+"}");
}

function DIBUJARicono (i, x, y, w, h)
{
	const ctx = lienzo.getContext("2d");
	orW = iconosIMG[i].width;
	orH = iconosIMG[i].height;
	if (w/h < orW/orH)
		e = h/orH;
	else e = w/orW;
	dX = x/e - 0.5*e*orW + 0.5*w;
	dY = y/e - 0.5*e*orH + 0.5*h;
	matrix = new DOMMatrixReadOnly().scale(e).translate(dX,dY);
	iconosPAT[i].setTransform(matrix);
	ctx.fillStyle = iconosPAT[i];
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x+w, y);
	ctx.lineTo(x+w, y+h);
	ctx.lineTo(x, y+h);
	ctx.closePath();
	ctx.fill();
}
function DIBUJARcliente (i, x, y, h)
{
	const ctx = lienzo.getContext("2d");
	orW = clientesIMG[i].width;
	orH = clientesIMG[i].height;
	e = h/orH;
	matrix = new DOMMatrixReadOnly().scale(e).translate(x/e,y/e);
	clientesPAT[i].setTransform(matrix);
	ctx.fillStyle = clientesPAT[i];
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x+orW*e, y);
	ctx.lineTo(x+orW*e, y+h);
	ctx.lineTo(x, y+h);
	ctx.closePath();
	ctx.fill();
}
function DIBUJARminiatura (i, x, y, w, h)
{
	obj = listaProyectos[i];
	sobre = false;
	obj.te = 1;
	if (	x + w > cursor.w && cursor.w > x )
		if (y + h > cursor.h && cursor.h > y )
		{
			obj.te = escalaMiniaturas;
			parada = true;
			sobre = true;
			if (x+w > window.innerWidth && compensacion == 1)
				rotacion.tx -= 20;
			
			if (x < 0 && compensacion == 1)
				rotacion.tx += 20;
			if (cursor.click ==  true) {
				obj.click = true;
			}
			if (cursor.click == false && obj.click == true)
				window.location = urlRaiz + "?" + obj.titulo;
		}
	if (cursor.click == false)
		obj.click = false;
	
	INTERPOLACIONhiperbolicaE(obj);
	//==============
	const ctx = lienzo.getContext("2d");
	orW = miniaturasIMG[i].width;
	orH = miniaturasIMG[i].height;
	if (w/h < orW/orH)
		s = obj.e*h/orH;
	else s = obj.e*w/orW;
	dX = x/s - 0.5*s*orW + 0.5*w*s;
	dY = y/s - 0.5*s*orH + 0.5*h*s;
	matrix = new DOMMatrixReadOnly().scale(s).translate(dX,dY);
	previsualizacionesPAT[i].setTransform(matrix);
	miniaturasPAT[i].setTransform(matrix);
	ctx.fillStyle = miniaturasPAT[i];
	if (sobre == true)
		ctx.fillStyle = previsualizacionesPAT[i];
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x+w, y);
	ctx.lineTo(x+w, y+h);
	ctx.lineTo(x, y+h);
	ctx.closePath();
	ctx.fill();
}

function DIBUJARlogo (i, x, y, h)
{
	const ctx = lienzo.getContext("2d");
	orW = logosIMG[i].width;
	orH = logosIMG[i].height;
	e = h/orH;
	matrix = new DOMMatrixReadOnly().scale(e).translate(x/e,y/e);
	logosPAT[i].setTransform(matrix);
	ctx.fillStyle = logosPAT[i];
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x+orW*e, y);
	ctx.lineTo(x+orW*e, y+h);
	ctx.lineTo(x, y+h);
	ctx.closePath();
	ctx.fill();
}

function DIBUJARfoto(x, y, h)
{
	const ctx = lienzo.getContext("2d");
	orW = fotoM1.width;
	orH = fotoM1.height;
	e = h/orH;
	matrix = new DOMMatrixReadOnly().scale(e).translate(x/e,y/e);
	fotoN1.setTransform(matrix);
	ctx.fillStyle = fotoN1;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x+orW*e, y);
	ctx.lineTo(x+orW*e, y+h);
	ctx.lineTo(x, y+h);
	ctx.closePath();
	ctx.fill();

}

function cargarFotos ()
{
	const ctx = lienzo.getContext("2d");
	foto1 = new Image();
	fotoM1 = new Image();
	fotoM1.src = "fotos/3.jpg";
	foto1.src = "fotos/3.jpg";
	foto1.onload = () => {fotoN1 = ctx.createPattern(foto1, 'no-repeat'); cargaFotos = true;};
}
