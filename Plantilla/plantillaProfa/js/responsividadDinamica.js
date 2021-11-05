ajustarTamano(screen.width, screen.height);
window.addEventListener('resize', function(event){
		largoVentana=screen.height;
		anchoVentana=screen.width;
		
		ajustarTamano(largoVentana, anchoVentana);
	});
function ajustarTamano(largo, ancho){
	if(largo>1000){
		ajustarModulos(largo, ancho);
	}
}
function ajustarModulos(largo, ancho){
	var apartadosModulo = document.getElementsByClassName("apartadoModulo");
	var anchoApartado = (55*ancho)/100;
	alert(anchoApartado);
	for (i = 0; i < apartadosModulo.length; i++) {
		apartadosModulo[i].style.width = anchoApartado+"px";
		apartadosModulo[i].style.height = "200px";
	}
	ajustarRectangulos(largo, ancho);
	ajustarTriangulos(largo, ancho);
	ajustarTextoModulo(largo, ancho);
}

function ajustarRectangulos(largo, ancho){
	var i;
	var rectangulos = document.getElementsByClassName("rectangulo");
	var anchoRectangulos = (5*largo)/100;
	for (i = 0; i < rectangulos.length; i++) {
		rectangulos[i].style.width = anchoRectangulos+"px";
		rectangulos[i].style.height = "200px";
	}
}
function ajustarTriangulos(largo, ancho){
	var i;
	var triangulos = document.getElementsByClassName("triangulo");
	for (i = 0; i < triangulos.length; i++) {
		triangulos[i].style.left = "95px";
		triangulos[i].style.borderLeft = "500px solid #3CA7B8";
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
