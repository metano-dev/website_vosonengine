function optimizarModelos()
{
    modelo00        = optimizarModelo(modelo00);
    modeloVoson     = optimizarModelo(modeloVoson);
    modeloInfinity  = optimizarModelo(modeloInfinity);
    modeloOculus    = optimizarModelo(modeloOculus);
    modeloOndas     = optimizarModelo(modeloOndas);
    modeloAleatorio = optimizarModelo(modeloAleatorio);
    modeloEspacio   = optimizarModelo(modeloEspacio);
    
}
function optimizarModelo (mod)
{
    var temp = mod;
    while (temp.length > 2000)
    {
        indice = Math.floor(Math.random()*temp.length);
        temp = temp.slice(0, indice).concat(temp.slice(indice+1));
    }
    return temp;
}
function importarModelo (fbx, mod)
{
    while (fbx.length > verticesMaximos*3)
    {
        indice = 3*Math.floor(Math.random()*fbx.length/3);
        var fbx = fbx.slice(0, indice).concat(fbx.slice(indice+3));
    }
    for (i = 0; i < verticesMaximos; i++)
        mod.push(new vertice(fbx[i*3], fbx[i*3+1], fbx[i*3+2]));
}
function generarFbx (fbx, mod)
{
    factor = 1;
    while (fbx.length > factor*verticesMaximos*3)
    {
        indice = 3*Math.floor(Math.random()*fbx.length/3);
        var fbx = fbx.slice(0, indice).concat(fbx.slice(indice+3));
    }
    for (i = 0; i < factor*verticesMaximos*3; i++)
        mod.push(fbx[i]);
    console.log(mod);
}
/*
var tempImportar = [];
generarFbx(fbx___, tempImportar);

var modeloVoson = [];
importarModelo(fbxVoson, modeloVoson);
var modeloInfinity = [];
importarModelo(fbxInfinity, modeloInfinity);
var modeloOculus = [];
importarModelo(fbxOculus, modeloOculus);


var modeloRobot = [];
importarModelo(fbxRobot, modeloRobot);

var modeloDinosaurio = [];
importarModelo(fbxDinosaurio, modeloDinosaurio);

var modeloOndas= [];
importarModelo(fbxOndas, modeloOndas);
console.log(modeloOndas);
*/