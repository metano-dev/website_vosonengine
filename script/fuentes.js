
const fuentes = [
	['fuenteB', './fuentes/OpenSans-Bold.ttf'		],
	['fuenteM', './fuentes/OpenSans-Medium.ttf'		],
	['fuenteL', './fuentes/OpenSans-Light.ttf'		],
	['fuenteR', './fuentes/OpenSans-Regular.ttf'	],
	['fuenteE', './fuentes/OpenSans-ExtraBold.ttf'	]
];

function cargarFuentes(m)
{
	if (m >= fuentes.length)
	{
		cargaFuentes = true;
		return;
	}
	eval(
	fuentes[m][0]+" = '"+fuentes[m][0]+"';"
	+"var cargarFuente = new FontFace("+fuentes[m][0]+", 'url("+fuentes[m][1]+")');"
	+"cargarFuente.load().then(añadirFuente).then(cargarFuentes(m+1));"
	);
}

function añadirFuente(fuente)
{
	document.fonts.add(fuente);
}