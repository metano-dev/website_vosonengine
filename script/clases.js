class proyecto
{
	constructor(titulo, nombre, descripcion, objetivos, soluciones, video)
	{
		this.titulo 		= titulo;
		this.nombre 		= nombre;
		this.descripcion	= descripcion;
		this.objetivos		= objetivos;
		this.soluciones 	= soluciones;
		this.video	= video;
		this.click	= false;
		this.e		= 1;
		this.te		= 1;
		this.g		= 0.175;
	}
}
class carrusel
{
	constructor(x)
	{
		this.x = x;
		this.tx = x;
		this.g = 0.175;
	}
}
class texto
{
	constructor(w, txt, c, a, b, alt, salt, x, y, f)
	{
		this.w		= w;
		this.txt	= txt;
		this.c		= c;
		this.a		= a;
		this.b		= b;
		this.alt	= alt;
		this.salt	= salt;
		this.x		= x;
		this.y 		= y;
		this.f		= f;
	}
}
class navegador
{
	constructor(n, d, rotulo, click)
	{
		this.n = n??0;
		this.d = d??0;
		this.rotulo	= rotulo??"definir";
		this.click	= click??false ;
	}
}
class banda
{
	constructor(y, g)
	{
		this.y  = y??60;
		this.ty = y;
		this.g  = g??0.2;
	}
}
class puntero
{
	constructor(g, x, y, tx, ty, w, h, click)
	{
		this.g  = g  ??0.2;
		this.x  = x  ??0;
		this.y  = y  ??0;
		this.tx = tx ??0;
		this.ty = ty ??0;
		this.w = w ??0;
		this.h = h ??0;
		this.click = click??false;
		this.ow = w;
		this.oh = h;
	}
}
class pagina
{
	constructor(nombre, apartados, posiciones, modelos, videos, menu, pre, tamaño, colores)
	{	
		this.nombre		= nombre;
		this.apartados	= apartados;
		this.posiciones	= posiciones;
		this.modelos	= modelos;
		this.videos		= videos;
		this.menu		= menu;
		this.pre		= pre;
		this.tamaño		= tamaño;
		this.colores	= colores;
	}
}
class origen 
{
	constructor(x, y)
	{
		this.x	= x;
		this.y	= x;
		this.tx = x;
		this.ty = y;
		this.g	= 0.2;
	}
}
class apartado
{
	constructor(f, a, g, y, ty, e)
	{
		this.f  = f  ??"#AAA"; //fondo
		this.a = a ??1;
		this.g  = g  ??0.2;
		this.y  = y  ??0;
		this.ty = ty ??0;
		this.e  = e  ??0;
		this.te = e	 ??0;
		this.click = false;
	}
}
class vertice
{
	constructor(u, v, w, x, y)
	{
		this.u = u ??0;
		this.v = v ??0;
		this.w = w ??0;
		this.x = x ??0;
		this.y = y ??0;
		this.tu = u;
		this.tv = v;
		this.tw = w;
	}
}