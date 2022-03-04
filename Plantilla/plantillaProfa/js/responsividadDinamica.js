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
	ajustarRectangulos(largo, ancho, anchoApartado);
	ajustarTriangulos(largo, ancho, anchoApartado);
	ajustarTextoModulo(largo, ancho, anchoApartado);
}

function ajustarRectangulos(largo, ancho, anchoApartado){
	var i;
	var rectangulos = document.getElementsByClassName("rectangulo");
	var anchoRectangulos = anchoApartado*.09;
	for (i = 0; i < rectangulos.length; i++) {
		rectangulos[i].style.width = anchoRectangulos+"px";
		rectangulos[i].style.height = "200px";
	}
}
function ajustarTriangulos(largo, ancho, anchoApartado){
	var i;
	var triangulos = document.getElementsByClassName("triangulo");
	var anchoRectangulos = anchoApartado*.09;
	var anchoTriangulo = anchoApartado-anchoRectangulos;
	for (i = 0; i < triangulos.length; i++) {
		triangulos[i].style.left = anchoRectangulos+"px";
		triangulos[i].style.borderLeft = anchoTriangulo+"px solid #3CA7B8";
	}
}
function ajustarTextoModulo(largo, ancho, anchoApartado){
	var textosModulos = document.getElementsByClassName("texto");
	var nuevoTamanoTexto;
	var tamanoCampo = anchoApartado*.72;
	var caracteresTexto;
	//var areaText=tamanoCampo*
	//alert(textoModulos[0].lenght);
	for (i = 0; i < textosModulos.length; i++) {
		textosModulos[i].style.width = tamanoCampo+"px";
		//alert(tamanoCampo);
		nuevoTamanoTexto=18;
		caracteresTexto=textosModulos[i].innerText.length;
		//alert(caracteresTexto);
		textosModulos[i].style.fontSize = nuevoTamanoTexto+"px";
	}
}
