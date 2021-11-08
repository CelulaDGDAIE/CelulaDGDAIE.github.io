ajustarTamano(window.innerHeight, window.innerWidth);
window.addEventListener('resize', function(event){
		largoVentana=window.innerHeight;
		anchoVentana=window.innerWidth;
		ajustarTamano(largoVentana, anchoVentana);
	});
function ajustarTamano(largo, ancho){
	
	if(ancho>1000){
		
		ajustarModulos(largo, ancho);
	}
}
function ajustarModulos(largo, ancho){
	var apartadosModulo = document.getElementsByClassName("apartadoModulo");
	var apartadosHover = document.getElementsByClassName("apartadoHover");
	var anchoApartado = .30*ancho; //El ancho de los apartados siempre será el 30%
	for (i = 0; i < apartadosModulo.length; i++) {
		apartadosModulo[i].style.width = anchoApartado+"px";
		apartadosModulo[i].style.height = "200px";
		apartadosHover[i].style.width = anchoApartado+"px";
		apartadosHover[i].style.height = "200px";
	}
	ajustarRectangulos(largo, ancho);
	ajustarTriangulos(largo, ancho);
	ajustarTextoModulo(largo, ancho);
}

function ajustarRectangulos(largo, ancho){
	var i;
	var rectangulos = document.getElementsByClassName("rectangulo");
	var anchoRectangulos = .05*largo;
	for (i = 0; i < rectangulos.length; i++) {
		rectangulos[i].style.width = anchoRectangulos+"px";
		rectangulos[i].style.height = "200px";
	}
}
function ajustarTriangulos(largo, ancho){
	var i;
	var triangulos = document.getElementsByClassName("triangulo");
	for (i = 0; i < triangulos.length; i++) {
		triangulos[i].style.left = "50px";
		triangulos[i].style.borderLeft = "510px solid #3CA7B8";
	}
}
function ajustarTextoModulo(largo, ancho){
	var textosModulos = document.getElementsByClassName("texto");
	var nuevoTamanoTexto;
	for (i = 0; i < textosModulos.length; i++) {
		textosModulos[i].style.width = "400px";
		nuevoTamanoTexto=20;
		textosModulos[i].style.fontSize = nuevoTamanoTexto+"px";
	}
}
