function refrescar()
{
	actualizar();
	dibujar();
	iterar();
}

function actualizar()
{
	h = window.innerHeight*tamañoApartado;
	w = window.innerWidth - margH;
	for (i = 0; i < apartados.length; i++)
	{
		if (deslizamiento >= 0)
			apartados[i].ty = -deslizamiento*window.innerHeight*arrastreDeslizamiento + i*h;
		else apartados[i].ty = i*h;
	}
	
	INTERPOLACIONhiperbolicaX(rotacion);
    INTERPOLACIONhiperbolicaX(centro);
    INTERPOLACIONhiperbolicaY(centro);
	INTERPOLACIONhiperbolicaX(cursor);
	INTERPOLACIONhiperbolicaY(cursor);
	INTERPOLACIONhiperbolicaY(encabezado);
	for (i = 0; i < apartados.length; i++)
		INTERPOLACIONhiperbolicaY(apartados[i]);
	for (i = 0; i < vertices.length; i++)
		INTERPOLACIONhiperbolicaUVW(vertices[i]);

}

function dibujar ()
{
	const ctx = lienzo.getContext("2d");
	ctx.clearRect(0, 0, lienzo.width, lienzo.height);

	//FONDO:
	for (i = 0; i < apartados.length; i++)
		DIBUJARfondo(i);

	//VÉRTICES EN SEGUNDO PLANO:
	for (i = 0; i < vertices.length; i++)
		DIBUJARvertice(vertices[i], false);

	//CONTENIDO:
	if (paginaActual == "principal")
		DIBUJARprincipal();
	if (paginaActual == "proyecto")
		DIBUJARproyecto();
	if (paginaActual == "infinity")
		DIBUJARinfinity();

	//ENCABEZADO:
	DIBUJARencabezado(encabezado);
	for (i = 0; i < menu.length; i++)
		DIBUJARmenu(menu[i]);
	DIBUJARlogoVoson(margH, (encabezado.y-2*encabezadoMargenVertical)/1.7);

	//VÉRTICES EN PRIMER PLANO:
	for (i = 0; i < vertices.length; i++)
		DIBUJARvertice(vertices[i], true);
	
	//METANO:
	DIBUJARfueled();

    if(carga!=true) {carga = true};
}