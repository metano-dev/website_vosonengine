function DIBUJARinfinity()
{
    DIBUJARhub(apartados[0]);
    DIBUJARdiseñado(apartados[1]);
    DIBUJARporque(apartados[2]);
    DIBUJARtoy(apartados[3]);
    DIBUJARzombie(apartados[4]);
    DIBUJARcontacto(apartados[5]);
	DIBUJARpie(apartados[6]);
}

function DIBUJARprincipal()
{
    DIBUJARinicio(apartados[0]);
	DIBUJARproyectos(apartados[1]);
	DIBUJARtecnologia(apartados[2]);
	DIBUJARnosotros(apartados[3]);
	DIBUJARvalores(apartados[4]);
	DIBUJARcontacto(apartados[5]);
	DIBUJARpie(apartados[6]);
}
function DIBUJARproyecto()
{
    DIBUJARjuego(apartados[1]);
    DIBUJARcontacto(apartados[2]);
	DIBUJARpie(apartados[3]);
}

function DIBUJARjuego(obj)
{
    orX = 50;
    orY = obj.y + 20;
    sep = 20*compensacion;
    wCuad = (0.6 + 0.3*(compensacion>1))*window.innerWidth;
    txt1 = new texto(1000, listaProyectos[proyectoActual].nombre, colorSecundario, "left", "hanging", 40*compensacion, 25*compensacion, orX, orY + 0,    fuenteB);
    txt2 = new texto(wCuad, listaProyectos[proyectoActual].descripcion, colorFondo, "left", "hanging", 25*compensacion, 30*compensacion, 0.5*window.innerWidth-0.5*wCuad, orY + 70*compensacion,    fuenteL);
    txt3 = new texto(0.5*wCuad, "Objetivos del cliente:", colorSecundario, "left", "hanging", 25*compensacion, 25*compensacion, 0.5*window.innerWidth-0.5*wCuad, orY + 0,    fuenteB);
    txt4 = new texto(0.5*wCuad, "Soluciones implementadas:", colorSecundario, "left", "hanging", 25*compensacion, 25*compensacion, 0, orY + 0,    fuenteB);

    txt3.y = txt2.y + MEDIRtexto(txt2)[1] + 60;
    txt4.y = txt3.y;
    txt4.x = 0.5*window.innerWidth;
    DIBUJARtexto(txt1);
    DIBUJARtexto(txt2);
    DIBUJARtexto(txt3);
    DIBUJARtexto(txt4);
    sY = 0;
    for (m=0; m<listaProyectos[proyectoActual].objetivos.length; m++)
    {
        var txt5 = new texto(0.5*wCuad, "•" + listaProyectos[proyectoActual].objetivos[m], colorSecundario, "left", "hanging", 20*compensacion, 20*compensacion, txt3.x + 10, txt3.y + MEDIRtexto(txt3)[1]+ sep +sY,    fuenteR);
        sY += compensacion*MEDIRtexto(txt5)[1]+sep;
        DIBUJARtexto(txt5);
    }
    sY = 0;
    for (m=0; m<listaProyectos[proyectoActual].soluciones.length; m++)
    {
        var txt6 = new texto(0.5*wCuad, "•" + listaProyectos[proyectoActual].soluciones[m], colorSecundario, "left", "hanging", 20*compensacion, 20*compensacion, txt4.x + 10, txt4.y + MEDIRtexto(txt4)[1] +sep +sY,    fuenteR);
        sY += compensacion*MEDIRtexto(txt6)[1]+sep;
        DIBUJARtexto(txt6);
    }
    DIBUJARcliente(0, 0.5*window.innerWidth - 0.5*clientesIMG[0].width*120/clientesIMG[0].height, Math.max(txt5.y, txt6.y)+ 100, 120);

}



function DIBUJARhub(obj)
{
    if (obj.y > (deslizamiento+1)*window.innerHeight*0.5)
		return;
    orX = 50 + 0.5*obj.y;
    margen = 25*compensacion;
    sep = 5*compensacion;;
    orY = obj.y + 0.5*window.innerHeight*tamañoApartado -2*margen - 100*(horizontal!=true);
    wCuad = ejeY;
    hLogo = 106;
    
    txt1 = new texto(wCuad, TXTinfinity01, colorFondo, "left", "hanging", 35*compensacion, 40*compensacion, orX, 0,   fuenteM);
    txt2 = new texto(wCuad, TXTinfinity02, colorFondo, "left", "hanging", 35*compensacion, 30*compensacion, orX, 0,   fuenteB);
    txt3 = new texto(wCuad, TXTinfinity03, colorFondo, "left", "hanging", 25*compensacion, 26*compensacion, orX, 0,   fuenteR);

    hCuad = 0*MEDIRtexto(txt1)[1] + 0*MEDIRtexto(txt2)[1] + MEDIRtexto(txt3)[1];
    txt1.y = orY;
    txt2.y = orY + MEDIRtexto(txt1)[1] + sep;
    txt3.y = orY + hLogo;
    wCuad = Math.max(...[MEDIRtexto(txt1)[0], MEDIRtexto(txt2)[0], MEDIRtexto(txt3)[0]]);
    DIBUJARcuadro(colorSecundario, 0.6, 0, orY - margen, wCuad + orX + margen, hCuad +2*margen + 3*sep + hLogo);
    //DIBUJARtexto(txt1);
    //DIBUJARtexto(txt2);
    DIBUJARtexto(txt3);
    DIBUJARlogo(0, txt1.x, orY, hLogo);
}
function DIBUJARdiseñado(obj)
{
    if (obj.y > (deslizamiento+1)*window.innerHeight*0.5)
		return;
    sep = 15*compensacion;
    orY = obj.y + 0.0*window.innerHeight*tamañoApartado;
    wCuad = ((compensacion>1)*0.2 + 0.5)*window.innerWidth;
    orX = 0.5*window.innerWidth - 0.5*obj.y;
    
    txt1  = new texto(wCuad, "Diseñado para hoteles, campings y más.", colorSecundario, "center", "hanging", 45*compensacion, 40*compensacion, orX, orY,   fuenteB);
    txt2  = new texto(wCuad, "¡Haz que tus clientes sientan la emoción de lo real en un mundo virtual! ", colorFondo, "center", "hanging", 30*compensacion, 30*compensacion, orX, orY,   fuenteM);

    txt1.x = orX - 0*MEDIRtexto(txt1)[0];
    txt2.x = orX - 0*MEDIRtexto(txt2)[0];
	txt1.y = orY + 0.5*window.innerHeight*tamañoApartado - MEDIRtexto(txt1)[1];
    txt2.y = txt1.y + MEDIRtexto(txt1)[1] + sep;
    DIBUJARtexto(txt1);
    DIBUJARtexto(txt2);
/*
	himg = window.innerHeight*tamañoApartado - txt2.y - MEDIRtexto(txt2)[1] - 110 - 50;
    if (movil != true)
        DIBUJARfoto(0.3*window.innerWidth- 0.5*obj.y, txt2.y + MEDIRtexto(txt2)[1] + 30, 0.4*window.innerWidth/1.6);
    else DIBUJARfoto(0.5*window.innerWidth - 0.8*himg - 0.5*obj.y, txt2.y + MEDIRtexto(txt2)[1] + 40, himg);
	*/
}
function DIBUJARporque(obj)
{
    if (obj.y > (deslizamiento+2)*window.innerHeight*0.5)
		return;
    comp=compensacion;
    dist = 150;
    long = 0;
    tot = 0;
    sang = 20;
    alt = 110;
    for(k=1; k<logosIMG.length; k++)
        tot += logosIMG[k].width * alt / logosIMG[k].height + dist;
    for(m=1; m<logosIMG.length; m++)
    {
        desf = 0;
        while ( 50 +long +desf > window.innerWidth)
            desf -= tot;
        DIBUJARlogo(m, 50 +long +desf +rotacion.x, obj.y -alt - 20, alt);
        long += logosIMG[m].width * alt / logosIMG[m].height + dist;
    }

    sep = 15;
    orY = obj.y + 0.2*window.innerHeight*tamañoApartado;
    wCuad = (0.9+(compensacion > 1)*0.01)*window.innerWidth;
    orX = 0.5*window.innerWidth -0.5*wCuad + 0.5*obj.y;
    
    txt1  = new texto(wCuad, TXTporque1  , colorFondo, "left", "hanging",      45*comp, 40*comp, orX, orY,   fuenteM);
    txt2  = new texto(wCuad, TXTporque2  , colorSecundario, "left", "hanging",               30*comp, 30*comp, orX, 0,   fuenteB);
    txt3  = new texto(wCuad, TXTporque3  , colorFondo, "left", "hanging",           30*comp, 30*comp, orX, 0,   fuenteR);
    txt4  = new texto(wCuad, TXTporque4  , colorSecundario, "left", "hanging",             30*comp, 30*comp, orX, 0,   fuenteB);
    txt5  = new texto(wCuad, TXTporque5  , colorFondo, "left", "hanging",                         30*comp, 30*comp, orX, 0,   fuenteR);
    txt6  = new texto(wCuad, TXTporque6  , colorSecundario, "left", "hanging",             30*comp, 30*comp, orX, 0,   fuenteB);
    txt7  = new texto(wCuad, TXTporque7  , colorFondo, "left", "hanging",                       30*comp, 30*comp, orX, 0,   fuenteR);
    txt8  = new texto(wCuad, TXTporque8  , colorSecundario, "left", "hanging",             30*comp, 30*comp, orX, 0,   fuenteB);
    txt9  = new texto(wCuad, TXTporque9  , colorFondo, "left", "hanging",                       30*comp, 30*comp, orX, 0,   fuenteR);
    txt10 = new texto(wCuad, TXTporque10  , colorSecundario, "left", "hanging",    40*comp, 45*comp, orX, 0,   fuenteB);


    if (compensacion == 1)
    {
        txt2.y = txt1.y + MEDIRtexto(txt1)[1] +6*sep;
        txt3.y = txt2.y;
        txt3.x = txt2.x + MEDIRtexto(txt2)[0] +sep;
        txt4.y = txt3.y + MEDIRtexto(txt3)[1] +sep;
        txt5.y = txt4.y;
        txt5.x = txt4.x + MEDIRtexto(txt4)[0] +sep;
        txt6.y = txt5.y + MEDIRtexto(txt5)[1] +sep;
        txt7.y = txt6.y;
        txt7.x = txt6.x + MEDIRtexto(txt6)[0] +sep;
        txt8.y = txt7.y + MEDIRtexto(txt7)[1] +sep;
        txt9.y = txt8.y;
        txt9.x = txt8.x + MEDIRtexto(txt8)[0] +sep;
        txt10.y = txt9.y + MEDIRtexto(txt9)[1] +6*sep;
    }
    else
    {
        txt2.y = txt1.y + MEDIRtexto(txt1)[1] +6*sep;
        txt3.y = txt2.y + MEDIRtexto(txt2)[1] +sep;
        txt4.y = txt3.y + MEDIRtexto(txt3)[1] +6*sep;
        txt5.y = txt4.y + MEDIRtexto(txt4)[1] +sep;
        txt6.y = txt5.y + MEDIRtexto(txt5)[1] +6*sep;
        txt7.y = txt6.y + MEDIRtexto(txt6)[1] +sep;
        txt8.y = txt7.y + MEDIRtexto(txt7)[1] +6*sep;
        txt9.y = txt8.y + MEDIRtexto(txt8)[1] +sep;
        txt10.y = txt9.y + MEDIRtexto(txt9)[1] +6*sep;
    }
    
    DIBUJARtexto(txt1);
    DIBUJARtexto(txt2);
    DIBUJARtexto(txt3);
    DIBUJARtexto(txt4);
    DIBUJARtexto(txt5);
    DIBUJARtexto(txt6);
    DIBUJARtexto(txt7);
    DIBUJARtexto(txt8);
    DIBUJARtexto(txt9);
    DIBUJARtexto(txt10);
}
function DIBUJARtoy(obj)
{
    if (obj.y > (deslizamiento+1)*window.innerHeight*0.5)
		return;
    orX = 50 + 0.5*obj.y;
    margen = 25*compensacion;
    sep = 5*compensacion;
    orY = obj.y + 0.5*window.innerHeight*tamañoApartado -50 - 100*(horizontal!=true);
    wCuad = ejeY;
    
    txt1 = new texto(wCuad, TXTtoy01, colorFondo, "left", "hanging", 45*compensacion, 40*compensacion, orX, 0,   fuenteB);
    txt2 = new texto(wCuad, TXTtoy02, colorFondo, "left", "hanging", 25*compensacion, 30*compensacion, orX, 0,   fuenteL);

    hCuad = MEDIRtexto(txt1)[1] + MEDIRtexto(txt2)[1];
    txt1.y = orY;
    txt2.y = orY + MEDIRtexto(txt1)[1] + sep;
    wCuad = Math.max(...[MEDIRtexto(txt1)[0], MEDIRtexto(txt2)[0]]);
    DIBUJARcuadro(colorSecundario, 0.6, 0, orY - margen, wCuad + orX + margen, hCuad +2*margen + sep);
    DIBUJARtexto(txt1);
    DIBUJARtexto(txt2);
}
function DIBUJARzombie(obj)
{
    if (obj.y > (deslizamiento+1)*window.innerHeight*0.5)
		return;
    margen = 25*compensacion;
    sep = 5*compensacion;
    orY = obj.y + 0.5*window.innerHeight*tamañoApartado -50 - 100*(horizontal!=true);
    wCuad = ejeY;
    orX = window.innerWidth -wCuad - 0.5*obj.y;
    
    txt1 = new texto(wCuad, TXTzombie01, colorFondo, "left", "hanging", 45*compensacion, 40*compensacion, orX, 0,   fuenteB);
    txt2 = new texto(wCuad, TXTzombie02, colorFondo, "left", "hanging", 25*compensacion, 30*compensacion, orX, 0,   fuenteL);

    hCuad = MEDIRtexto(txt1)[1] + MEDIRtexto(txt2)[1];
    txt1.y = orY;
    txt2.y = orY + MEDIRtexto(txt1)[1] + sep;
    wCuad = Math.max(...[MEDIRtexto(txt1)[0], MEDIRtexto(txt2)[0]]);
    DIBUJARcuadro(colorSecundario, 0.6, orX-50, orY - margen, wCuad + orX + margen, hCuad +2*margen + sep);
    DIBUJARtexto(txt1);
    DIBUJARtexto(txt2);
}
//===========APARTADOS
function DIBUJARinicio(obj)
{
    if (obj.y > (deslizamiento+1)*window.innerHeight*0.5)
		return;
    orX = 50 + 0.5*obj.y;
    margen = 25*compensacion;
    sep = 5*compensacion;
    orY = obj.y + 0.5*window.innerHeight*tamañoApartado -2*margen - 100*(horizontal!=true);
    wCuad = ejeY;
    
    txt1 = new texto(wCuad, TXTinicio01, colorFondo, "left", "hanging", 45*compensacion, 40*compensacion, orX, 0,   fuenteM);
    txt2 = new texto(wCuad, TXTinicio02, colorFondo, "left", "hanging", 35*compensacion, 30*compensacion, orX, 0,   fuenteB);
    txt3 = new texto(wCuad, TXTinicio03, colorFondo, "left", "hanging", 20*compensacion, 22*compensacion, orX, 0,   fuenteR);

    hCuad = MEDIRtexto(txt1)[1] + MEDIRtexto(txt2)[1] + MEDIRtexto(txt3)[1];
    txt1.y = orY;
    txt2.y = orY + MEDIRtexto(txt1)[1] + sep;
    txt3.y = txt2.y + MEDIRtexto(txt2)[1] + sep;
    wCuad = Math.max(...[MEDIRtexto(txt1)[0], MEDIRtexto(txt2)[0], MEDIRtexto(txt3)[0]]);
    DIBUJARcuadro(colorSecundario, 0.6, 0, orY - margen, wCuad + orX + margen, hCuad +2*margen + 2*sep);
    DIBUJARtexto(txt1);
    DIBUJARtexto(txt2);
    DIBUJARtexto(txt3);

}
function DIBUJARproyectos(obj)
{
	if (obj.y > (deslizamiento+1)*window.innerHeight)
		return;
    margen = 5;
    sep = 20;
    curs = -cursor.x*300;
    wCuad = 500;
    hCuad = Math.min(500, window.innerHeight*tamañoApartado*0.5);
    orY = obj.y - 0.5*hCuad + 0.5*window.innerHeight*tamañoApartado;
    orX = -400 + 0.35*obj.y + rotacion.x + 0.5*window.innerWidth*tamañoApartado;

    const ctx = lienzo.getContext("2d");
    txt1 = new texto(2000, TXTproyectos01, colorVosonSecundario, "left", "hanging", 45*compensacion, 30, 50, obj.y + 0.125*window.innerHeight*tamañoApartado,   fuenteM);
    DIBUJARtexto(txt1);
    for(m=0; m<listaProyectos.length; m++)
    {
        desf = 0;
        while ( orX +desf + m*(sep+wCuad)> 1.5*window.innerWidth)
            desf -= listaProyectos.length*(wCuad+sep);
        txt1 = new texto(wCuad, listaProyectos[m].nombre, colorPrincipal, "center", "hanging", 20*listaProyectos[m].e*compensacion, 18*compensacion, orX +desf +curs+ m*(sep+wCuad)+0.5*wCuad, 0,   fuenteM);
        txt1.y = orY+hCuad - MEDIRtexto(txt1)[1] - margen;
        DIBUJARminiatura(m, orX+desf  +curs + m*(sep+wCuad), orY, wCuad, hCuad);
        DIBUJARcuadro(colorFondo, 1, orX+desf  +curs+ m*(sep+wCuad), orY+hCuad-2*margen-MEDIRtexto(txt1)[1], wCuad, 2*margen+MEDIRtexto(txt1)[1]);
        DIBUJARtexto(txt1);
    }
}
function DIBUJARtecnologia(obj)
{   
    if (obj.y > (deslizamiento+1)*window.innerHeight*0.5)
		return;
    orX = 50 + 0.5*obj.y;
    margen = 50*compensacion;
    sep1 = 5*compensacion;
    sep2 = 25*compensacion;
    orY = obj.y + 0.4*window.innerHeight*tamañoApartado -margen*compensacion;
    wCuad = ejeY;
    
    txt1 = new texto(wCuad, TXTtecnologia01, colorFondo, "left", "hanging", 40*compensacion, 40*compensacion, orX, 0,   fuenteM);
    txt2 = new texto(wCuad, TXTtecnologia02, colorFondo, "left", "hanging", 40*compensacion, 30*compensacion, orX, 0,   fuenteB);
    txt3 = new texto(wCuad, TXTtecnologia03, colorFondo, "left", "hanging", 25*compensacion, 26*compensacion, orX, 0,   fuenteR);

    hCuad = MEDIRtexto(txt1)[1] + MEDIRtexto(txt2)[1] + MEDIRtexto(txt3)[1];
    txt1.y = orY;
    txt2.y = orY + MEDIRtexto(txt1)[1] + sep1;
    txt3.y = txt2.y + MEDIRtexto(txt2)[1] + sep2;
    wCuad = Math.max(...[MEDIRtexto(txt1)[0], MEDIRtexto(txt2)[0], MEDIRtexto(txt3)[0]]);
    DIBUJARcuadro(colorSecundario, 0.6, 0, orY - margen, wCuad + orX + margen, hCuad +2*margen + 2*sep);
    DIBUJARtexto(txt1);
    DIBUJARtexto(txt2);
    DIBUJARtexto(txt3);

    

	
}
function DIBUJARnosotros(obj)
{   
    if (obj.y > (deslizamiento+1)*window.innerHeight*0.5)
        return;

    dist = 150;
    long = 0;
    tot = 0;
    sang = 20;
    alt = 110;
    for(k=1; k<logosIMG.length; k++)
        tot += logosIMG[k].width * alt / logosIMG[k].height + dist;
    for(m=1; m<logosIMG.length; m++)
    {
        desf = 0;
        while ( 50 +long +desf > window.innerWidth)
            desf -= tot;
        DIBUJARlogo(m, 50 +long +desf +rotacion.x, obj.y -alt - 20, alt);
        long += logosIMG[m].width * alt / logosIMG[m].height + dist;
    }
    
    margen = 120*responsividad;
    salto = 5;
    anim = 0.25*obj.y
    tam = 25/(0.75+responsividad);
    orY = 0.5*window.innerHeight + obj.y;
	if (horizontal == true)
    {
        tam = 25;
        wCuad = Math.min(600, (window.innerWidth - 4*margen)/3);
        hCuad = wCuad;
    }
    else
    {
        tam = 35;
        wCuad = window.innerWidth - 2*margen;
        hCuad = (window.innerHeight - 2*margen)/6;
    }
    txt1 = new texto(wCuad, TXTnosotros1A, colorSecundario, "left", "hanging", tam, tam, anim + margen, orY,    fuenteB);
    txt2 = new texto(wCuad, TXTnosotros2A, colorSecundario, "left", "hanging", tam, tam, anim + 2*margen+wCuad, orY,    fuenteB);
    txt3 = new texto(wCuad, TXTnosotros3A, colorSecundario, "left", "hanging", tam, tam, anim + 3*margen+2*wCuad, orY,    fuenteB);
    txt4 = new texto(wCuad, TXTnosotros1B, colorFondo, "left", "hanging", tam, tam, anim + margen, orY,    fuenteL);
    txt5 = new texto(wCuad, TXTnosotros2B, colorFondo, "left", "hanging", tam, tam, anim + 2*margen+wCuad, orY,    fuenteL);
    txt6 = new texto(wCuad, TXTnosotros3B, colorFondo, "left", "hanging", tam, tam, anim + 3*margen+2*wCuad, orY,    fuenteL);
   
    if (horizontal == true)
    {
        sep = Math.max(...[MEDIRtexto(txt1)[1], MEDIRtexto(txt2)[1], MEDIRtexto(txt3)[1]]) + salto;
        txt1.y = orY - sep;
        txt2.y = orY - sep;
        txt3.y = orY - sep;
        txt4.y = orY;
        txt5.y = orY;
        txt6.y = orY;
    }
    else
    {
        txt4.x = margen;
        txt5.x = margen;
        txt6.x = margen;
        txt1.y = hCuad + obj.y + margen;
        txt4.y = txt1.y + MEDIRtexto(txt1)[1] + salto ;
        txt2.y = txt4.y + hCuad + MEDIRtexto(txt4)[1]  ;
        txt5.y = txt2.y + MEDIRtexto(txt2)[1] + salto ;
        txt3.y = txt5.y + hCuad + MEDIRtexto(txt5)[1]  ;
        txt6.y = txt3.y + MEDIRtexto(txt3)[1] + salto ;
    }
    txt1.x = txt4.x;
    txt2.x = txt5.x;
    txt3.x = txt6.x;
    DIBUJARtexto(txt1);
    DIBUJARtexto(txt2);
    DIBUJARtexto(txt3);
    DIBUJARtexto(txt4);
    DIBUJARtexto(txt5);
    DIBUJARtexto(txt6);
    ic = Math.min(hCuad, 200);
    DIBUJARicono(0, txt1.x + 0.5*wCuad - 0.5*ic - 15, txt1.y-ic, ic, ic);
    DIBUJARicono(1, txt2.x + 0.5*wCuad - 0.5*ic - 15, txt2.y-ic, ic, ic);
    DIBUJARicono(2, txt3.x + 0.5*wCuad - 0.5*ic - 15, txt3.y-ic, ic, ic);
}
function DIBUJARvalores(obj)
{
	margen = 80;
    anim = -0.5*obj.y;
    orY = 0.5*window.innerHeight + obj.y;
	if (horizontal == true)
    {
        wCuad = (window.innerWidth - 3*margen)/2;
    }
    txt2 = new texto(1000, TXTvalores1, colorSecundario, "left", "hanging", 35*compensacion, 25*compensacion, anim + margen, orY,    fuenteB);
    txt1 = new texto(wCuad, TXTvalores2, colorPrincipal, "left", "hanging", 25*compensacion, 32*compensacion, anim + margen, orY,    fuenteM);
    txt1.y -= 0.5*MEDIRtexto(txt1)[1];
    txt2.y = txt1.y - 50*compensacion;
    txt2.x = txt1.x;
    DIBUJARtexto(txt1);
    DIBUJARtexto(txt2);
}
function DIBUJARcontacto(obj)
{
	if (obj.y > (deslizamiento+1)*window.innerHeight*0.5)
		return;
    orX = 50 + 0.5*obj.y;
    margen = 25;
    borde = 5;
    sep = 5;
    orY = obj.y + tamañoApartado*window.innerHeight -50;
    wCuad = ejeY;
    tam = 42/(0.5+responsividad);
    txt1 = new texto(wCuad, TXTcontacto01, colorFondo, "left", "hanging", tam, 0.85*tam, orX, orY,   fuenteM);
    txt2 = new texto(wCuad, TXTcontacto02, colorFondo, "left", "hanging", tam, 0.85*tam, orX+borde, orY+borde,   fuenteB);
    col = colorSecundario;
    wCuad = MEDIRtexto(txt2)[0];
    hCuad = MEDIRtexto(txt2)[1];
    txt1.y = orY - MEDIRtexto(txt1)[1] - MEDIRtexto(txt2)[1] - sep -2*borde;
    txt2.y = orY - hCuad -borde;
    DIBUJARtexto(txt1);
    obj.te = 1;
    if (	txt2.x -borde < cursor.w && cursor.w < txt2.x + wCuad  + borde	)
		if (txt2.y  -borde < cursor.h && cursor.h < txt2.y + hCuad + borde)
		{
			txt2.f = fuenteB;
            txt2.c = colorFondo;
            obj.te = 0.8;
            col = colorPrincipal;
			if (cursor.click ==  true) {
				obj.click = true;
			}
			if (cursor.click == false && obj.click == true)
			{
				window.location.href = "mailto:hola@vosonengine.com";
			}
		}
    INTERPOLACIONhiperbolicaE(obj);
    txt2.alt = tam*obj.e;
    txt2.x = orX+borde +0.5*wCuad - 0.5*obj.e*wCuad;
    txt2.y = orY - hCuad -borde +0.5*tam - 0.5*obj.e*tam;
    DIBUJARcuadro(col, 1, orX, txt2.y - borde -0.5*tam*(1-obj.e), wCuad+2*borde, hCuad+2*borde);
    DIBUJARtexto(txt2);
}
function DIBUJARpie(obj)
{
    orX = 0.5*window.innerWidth;
    orY = obj.y + 15;
    sep = 20;
    tam = 20*compensacion;
    txtPie = [
        new texto(800, TXTpie01, colorFondo,  "left", "hanging", tam, 25, orX - 100, orY, fuenteL),
        new texto(800, TXTpie02, colorFondo,  "left", "hanging", tam, 25, orX + 100, orY, fuenteR),
        new texto(800, TXTpie03, colorFondo,  "left", "hanging", tam, 25, orX + 100, orY, fuenteR)
    ];
    wCuad = (txtPie.length - 1) * sep ;
    for (m=0; m<txtPie.length; m++)
        wCuad += MEDIRtexto(txtPie[m])[0];
    txtPie[0].x = orX -0.5*wCuad;
    for (m=1; m<txtPie.length; m++)
        txtPie[m].x = txtPie[m-1].x + MEDIRtexto(txtPie[m-1])[0] + sep;
    for (m=0; m<txtPie.length; m++)
        DIBUJARtexto(txtPie[m]);
	
   
	if (orY + 3*tam > cursor.h && cursor.h > orY )
	{
		if (cursor.click ==  true) 
			obj.click = true;
		if (cursor.click == false && obj.click == true)
			window.location = urlRaiz + "/documentos/AvisoLegal.pdf";
	}
	if (cursor.click == false)
		obj.click = false;
	
    txtPie = [
        new texto(800, TXTpie04, colorSecundario, "left", "hanging", tam, 25, orX + 100, orY+tam*1.15, fuenteR),
        new texto(800, TXTpie05, colorSecundario, "left", "hanging", tam, 25, orX + 100, orY+tam*1.15, fuenteB)
    ];
    wCuad = (txtPie.length - 1) * sep ;
    for (m=0; m<txtPie.length; m++)
        wCuad += MEDIRtexto(txtPie[m])[0];
    txtPie[0].x = orX -0.5*wCuad;
    for (m=1; m<txtPie.length; m++)
        txtPie[m].x = txtPie[m-1].x + MEDIRtexto(txtPie[m-1])[0] + sep;
    for (m=0; m<txtPie.length; m++)
        DIBUJARtexto(txtPie[m]);
}
