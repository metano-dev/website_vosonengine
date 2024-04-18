function DIBUJARencabezado(obj)
{
	const ctx = lienzo.getContext("2d");
    ctx.fillStyle = colorPrincipal;
	ctx.beginPath();
	ctx.moveTo(-desborde, -desborde);
	ctx.lineTo(window.innerWidth+desborde, -desborde);
	ctx.lineTo(window.innerWidth+desborde, obj.y);
	ctx.lineTo(-desborde, obj.y);
	ctx.fill();
}

function DIBUJARlogoVoson(x, e)
{
	y = encabezadoMargenVertical;
	l=0.04*e;
	const ctx = lienzo.getContext("2d");
    ctx.fillStyle = colorFondo;
	ctx.strokeStyle = colorFondo;
	ctx.lineWidth = l;

	ctx.beginPath();
    ctx.moveTo(x ,    			y) ;
	ctx.lineTo(x+	e*0.10642 , y+	e*0	);
	ctx.lineTo(x+	e*0.47039 , y+	e*1	);
	ctx.lineTo(x+	e*0.36397 , y+	e*1	);
    ctx.fill();
	ctx.beginPath();
	ctx.moveTo(x+	e*0.77152 , y+	e*0	);
	ctx.lineTo(x+	e*0.87794 , y+	e*0	);
	ctx.lineTo(x+	e*0.57199 , y+	e*0.84059 );
	ctx.lineTo(x+	e*0.51878 , y+	e*0.6944 );
    ctx.fill();

	ctx.beginPath();
	ctx.arc(x+	e*1.625,    	y+	e*0.5, 0.5*e, Math.PI, 0 , false);
	ctx.arc(x+	e*1.625,    	y+	e*0.5, 0.4*e, 0, Math.PI, true);
	ctx.fill();
	ctx.beginPath();
	ctx.beginPath();
	ctx.arc(x+	e*1.625,    	y+	e*0.5, 0.5*e, Math.PI	+0.02, 			-0.02 , true);
	ctx.arc(x+	e*1.625,    	y+	e*0.5, 0.4*e, 			-0.02, Math.PI	+0.02, false);
	ctx.fill();
	ctx.beginPath();
	
	ctx.beginPath();
	ctx.arc(x+	e*3.825,    	y+	e*0.5, 0.5*e, Math.PI, 0 , false);
	ctx.arc(x+	e*3.825,    	y+	e*0.5, 0.4*e, 0, Math.PI, true);
	ctx.fill();
	ctx.beginPath();
	ctx.beginPath();
	ctx.arc(x+	e*3.825,    	y+	e*0.5, 0.5*e, Math.PI	+0.02, 			-0.02 , true);
	ctx.arc(x+	e*3.825,    	y+	e*0.5, 0.4*e, 			-0.02, Math.PI	+0.02, false);
	ctx.fill();
	ctx.beginPath();

	ctx.beginPath();
    ctx.moveTo(x+	e*4.6,    	y) ;
	ctx.lineTo(x+	e*5.4 , 	y+	e*0.76584	);
	ctx.lineTo(x+	e*5.4 , 	y);
	ctx.lineTo(x+	e*5.5 , 	y);
	ctx.lineTo(x+	e*5.5 , 	y+	e*1	);
	ctx.lineTo(x+	e*4.6 , 	y+	e*0.13843	);
    ctx.fill();
	ctx.beginPath();
    ctx.moveTo(x+	e*4.6,    	y+	e*0.34609) ;
	ctx.lineTo(x+	e*4.7 , 	y+	e*0.44182	);
	ctx.lineTo(x+	e*4.7 , 	y+	e*1);
	ctx.lineTo(x+	e*4.6 , 	y+	e*1);
    ctx.fill();
	
	ctx.beginPath();
	ctx.arc(x+	e*2.775,    	y+	e*0.25, 0.15*e, -27*Math.PI/180, 110*Math.PI/180 , true);
	ctx.arc(x+	e*2.775,    	y+	e*0.25, 0.25*e, 114*Math.PI/180, -27*Math.PI/180, false);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(x+	e*2.61727,    	y+	e*0.95027, 0.55*e, -68*Math.PI/180, -55*Math.PI/180 , false);
	ctx.arc(x+	e*2.775,    	y+	e*0.725,  0.275*e, -55*Math.PI/180, 195*Math.PI/180 , false);
	ctx.arc(x+	e*2.775,    	y+	e*0.725,  0.175*e, 195*Math.PI/180, -55*Math.PI/180 , true);
	ctx.arc(x+	e*2.67462,    	y+	e*0.86835,  0.35*e, -55*Math.PI/180, -75*Math.PI/180 , true);
	ctx.fill();

	//
	ctx.beginPath();h=1.35;
	ctx.moveTo(x+	e*3.67,		y+	e*h );
	ctx.lineTo(x+	e*3.445 , 	y+	e*h );
	ctx.lineTo(x+	e*3.445 , 	y+	e*(h+0.35));
	ctx.lineTo(x+	e*3.67,		y+	e*(h+0.35));
	ctx.moveTo(x+	e*3.445,		y+	e*(h+0.175));
	ctx.lineTo(x+	e*3.62,		y+	e*(h+0.175));
	
	ctx.moveTo(x+	e*3.79,		y+	e*(h+0.35) +0.5*l);
	ctx.lineTo(x+	e*3.79 , 	y+	e*h + 0.5*l);
	ctx.lineTo(x+	e*4.14,		y+	e*(h+0.35) -0.5*l);
	ctx.lineTo(x+	e*4.14,		y+	e*h - 0.5*l);

	ctx.moveTo(x+	e*4.55,		y+	e*(h+0.35) +0.5*l);
	ctx.lineTo(x+	e*4.55,		y+	e*(h+0.175));
	ctx.lineTo(x+	e*4.45,	y+	e*(h+0.175));

	ctx.moveTo(x+	e*4.685,	y+	e*h -0.5*l);
	ctx.lineTo(x+	e*4.685,	y+	e*(h+0.35) +0.5*l);
	
	ctx.moveTo(x+	e*4.805,	y+	e*(h+0.35) +0.5*l);
	ctx.lineTo(x+	e*4.805 , 	y+	e*h + 0.5*l);
	ctx.lineTo(x+	e*5.155,	y+	e*(h+0.35) -0.5*l);
	ctx.lineTo(x+	e*5.155,	y+	e*h - 0.5*l);

	ctx.moveTo(x+	e*5.5,		y+	e*h );
	ctx.lineTo(x+	e*5.275 , 	y+	e*h );
	ctx.lineTo(x+	e*5.275 , 	y+	e*(h+0.35));
	ctx.lineTo(x+	e*5.5,		y+	e*(h+0.35));
	ctx.moveTo(x+	e*5.275,	y+	e*(h+0.175));
	ctx.lineTo(x+	e*5.45,		y+	e*(h+0.175));

	ctx.stroke();
	ctx.beginPath();
	ctx.arc(x+	e*4.415,	y+	e*(h+0.175), e*0.175, 0.698132, 5.49779);
	ctx.stroke();

}
function DIBUJARvertice(obj, frontal)
{	
	vv = obj.v;
	ww = obj.w;
	v = vv*Math.cos(cursor.y) - ww*Math.sin(cursor.y);
	w = vv*Math.sin(cursor.y) + ww*Math.cos(cursor.y);
	uu = obj.u;
	vv = v;
	u = uu*Math.cos(cursor.x) - vv*Math.sin(cursor.x);
	v = uu*Math.sin(cursor.x) + vv*Math.cos(cursor.x);
	if (v > clipFrontal)
		return;
	if (v < clipPosterior)
		return;
	if (!frontal && v < 0)
		return;
	if (frontal && v >= 0)
		return;
	x = u *responsividad;
	y = (-v -w) *responsividad;
	if (x < -centro.x - desborde)
		return;
	if (x > window.innerWidth - centro.x + desborde)
		return;
	if (y < -centro.y- desborde)
		return;
	if (y > window.innerHeight - centro.y + desborde)
		return;

	rad = (3 - v*0.005)*responsividad ; //parametrizar
	lad = 4 + Math.floor(rad*0.6);
	const ctx = lienzo.getContext("2d");
    ctx.fillStyle = colorPart;
	ctx.beginPath();
    ctx.moveTo(centro.x + x ,    centro.y + y +rad) ;
	for (let i = 1; i < lad; i++) {
		ang = 2*Math.PI* i/lad ;
		ctx.lineTo(centro.x + x + rad*Math.sin(ang),    centro.y + y + rad*Math.cos(ang)) ;
		};
    ctx.fill();
}