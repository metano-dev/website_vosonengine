function INTERPOLACIONhiperbolicaX (obj) {
	//if (typeof obj.tx == "number") {
		if (obj.x >  obj.tx + tolerancia || obj.x < obj.tx - tolerancia )
			obj.x -= obj.x*obj.g - obj.tx*obj.g;
		else obj.x = obj.tx;
	//};
}
function INTERPOLACIONhiperbolicaY (obj) {
	//if (typeof obj.ty == "number") {
		if (obj.y >  obj.ty + tolerancia || obj.y < obj.ty - tolerancia )
			obj.y -= obj.y*obj.g - obj.ty*obj.g;
		else obj.y = obj.ty;
	//};
}
function INTERPOLACIONhiperbolicaE (obj) {
	//if (typeof obj.ty == "number") {
		if (obj.e >  obj.te + tolerancia || obj.e < obj.te - tolerancia )
			obj.e -= obj.e*obj.g - obj.te*obj.g;
		else obj.e = obj.te;
	//};
}
function INTERPOLACIONhiperbolicaUVW (obj) {
		if (obj.u >  obj.tu + tolerancia || obj.u < obj.tu - tolerancia )
			obj.u -= obj.u*deceleracion - obj.tu*deceleracion;
		else obj.u = obj.tu;
		if (obj.v >  obj.tv + tolerancia || obj.v < obj.tv - tolerancia )
			obj.v -= obj.v*deceleracion - obj.tv*deceleracion;
		else obj.v = obj.tv;
		if (obj.w >  obj.tw + tolerancia || obj.w < obj.tw - tolerancia )
			obj.w -= obj.w*deceleracion - obj.tw*deceleracion;
		else obj.w = obj.tw;
}