//............................//
//....████..██..██............//
//....██....██████..██........//
//....██....██..██..██..██....//
//....████..██..██..██████....//
//......................██....//
//METANO.dev..................//
//----------IMAGEN.CORPORATIVA//
function DIBUJARfueled()
{
    e = compensacion;
	marg = 5*e;
	txt1 = new texto (1000, "fueled by ",   "#FFF", "left", "hanging", 15*e, 15*e, 0, 0, fuenteL);
	txt2 = new texto (1000, "METANO",       "#FFF", "left", "hanging", 15*e, 15*e, 0, 0, fuenteB);
	txt1.x = window.innerWidth  - MEDIRtexto(txt1)[0] - MEDIRtexto(txt2)[0]-marg;
	txt2.x = window.innerWidth  - MEDIRtexto(txt2)[0]-marg;
	txt1.y = window.innerHeight - MEDIRtexto(txt1)[1] -marg;
	txt2.y = txt1.y;
	w = MEDIRtexto(txt1)[0] + MEDIRtexto(txt2)[0]+ 2*marg + desborde;
	h = MEDIRtexto(txt1)[1] + 2*marg + desborde;
	DIBUJARcuadro("rgb(0,0,0)", 1, txt1.x - marg, txt1.y - marg, w, h);
	DIBUJARtexto(txt1);
	DIBUJARtexto(txt2);
}