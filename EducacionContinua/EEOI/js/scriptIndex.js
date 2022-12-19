cargarContenido();
window.onscroll = function() {scrollFunction()};
var carruselInformacionDiapositivaActual = "presentacion";
var anchoPantalla = window.innerWidth;
if (anchoPantalla>1000){
	var alturaPantalla = window.innerHeight;
	var encabezado = document.getElementById("encabezadoEscritorio");
	var encabezadoScroll = document.getElementById("encabezadoScroll");
	encabezadoScroll.style.display = "none";
	var alturaEncabezado = encabezado.clientHeight;;
	document.getElementById("compensacionEncabezadoEscritorio").style.height = alturaEncabezado + "px";
}
function mostrarDatos(){
	const numerosModulos = document.getElementsByClassName("numeroModulo");
	for (let i = 0; i < numerosModulos.length; i++) {
	  numerosModulos[i].style.display="block";
	}
}
function scrollFunction(){
	let anchoPantalla = window.innerWidth;
	if(anchoPantalla<1000){
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			document.getElementById("cuadroPresentacion").style.display = "none";
			document.getElementById("encabezadoScroll").style.display = "block";
		}else{
			document.getElementById("cuadroPresentacion").style.display = "block";
			document.getElementById("encabezadoScroll").style.display = "none";
		}
	}
}
function abrir_menu_lateral() {
  document.getElementById("menuLateral").style.display = "block";
}
function cerrar_menu_lateral() {
  document.getElementById("menuLateral").style.display = "none";
}
function cargarContenido(){
	const contenidoIndex = JSON.parse(contenidoEE);
	document.getElementById("tituloPresentacion").innerHTML = contenidoIndex.tituloPresentacion;
	document.getElementById("tituloPresentacionScroll").innerHTML = contenidoIndex.tituloPresentacion;
	document.getElementById("tituloEscritorio").innerHTML = contenidoIndex.tituloPresentacion;
	document.getElementById("textoPresentacion").innerHTML = contenidoIndex.textoPresentacion;
	document.getElementById("textoCarrusel").innerHTML = contenidoIndex.textoPresentacion;
	document.getElementById("textoUnidad").innerHTML = contenidoIndex.textoUnidad;
	document.getElementById("tituloModulo1").innerHTML = contenidoIndex.tituloModulo1;
	document.getElementById("tituloModulo2").innerHTML = contenidoIndex.tituloModulo2;
	document.getElementById("tituloModulo3").innerHTML = contenidoIndex.tituloModulo3;
	document.getElementById("tituloModulo1Movil").innerHTML = contenidoIndex.tituloModulo1;
	document.getElementById("tituloModulo2Movil").innerHTML = contenidoIndex.tituloModulo2;
	document.getElementById("tituloModulo3Movil").innerHTML = contenidoIndex.tituloModulo3;
	//document.getElementById("textoCreditos").innerHTML = contenidoIndex.textoCreditos;
}
function cambiarDiapositiva(){
	var aireSuperior = document.getElementById("aireSuperior");
	var aireInferior = document.getElementById("aireInferior");
	var cuerpoCarrusel = document.getElementById("cuerpoCarrusel");
	const contenidoIndex = JSON.parse(contenidoEE);
	if(carruselInformacionDiapositivaActual == "presentacion"){
		carruselInformacionDiapositivaActual = "unidad";
		aireSuperior.classList.remove("fondoVerde");
		aireInferior.classList.remove("fondoVerde");
		cuerpoCarrusel.classList.remove("fondoVerde");
		aireSuperior.classList.add("fondoAzul");
		aireInferior.classList.add("fondoAzul");
		cuerpoCarrusel.classList.add("fondoAzul");
		document.getElementById("textoCarrusel").innerHTML = contenidoIndex.textoUnidad;
		document.getElementById("tituloCarrusel").innerHTML = "<strong><i class='bi bi-intersect'></i> Purpose</strong>";
		document.getElementById("imagenDiapositivas").src="https://lumen.uv.mx/resources/files/images/2022/10/7/7404/1834017f-ce0f-46d4-a761-736bf2fda7ce.jpg";
		document.getElementById("referenciaImagen").innerHTML= "[2]";
	}else{
		carruselInformacionDiapositivaActual = "presentacion";
		aireSuperior.classList.remove("fondoAzul");
		aireInferior.classList.remove("fondoAzul");
		cuerpoCarrusel.classList.remove("fondoAzul");
		aireSuperior.classList.add("fondoVerde");
		aireInferior.classList.add("fondoVerde");
		cuerpoCarrusel.classList.add("fondoVerde");
		document.getElementById("textoCarrusel").innerHTML = contenidoIndex.textoPresentacion;
		document.getElementById("tituloCarrusel").innerHTML = "<strong><i class='bi bi-info-circle-fill'></i> Presentation</strong>";
		document.getElementById("imagenDiapositivas").src="https://lumen.uv.mx/resources/files/images/2022/10/7/7403/4742765a-4bf3-41ec-8137-d0be6afa686e.jpg";
		document.getElementById("referenciaImagen").innerHTML= "[1]";
	}
}
function reducirLetra(){
	var fSize = document.getElementsByTagName('p');
	for(let i = 0; i < fSize.length; i++) {
		let currentSize = window.getComputedStyle(fSize[i], null).getPropertyValue('font-size');
		fSize[i].style.fontSize = `${Number(currentSize.replace('px','')) - 1}px`
	  }
	  var liSize = document.getElementsByTagName('li');
	for(let i = 0; i < fSize.length; i++) {
		let currentSize = window.getComputedStyle(liSize[i], null).getPropertyValue('font-size');
		liSize[i].style.fontSize = `${Number(currentSize.replace('px','')) - 1}px`
	  }
}

function aumentarLetra(){
	var fSize = document.getElementsByTagName('p');
	for(let i = 0; i < fSize.length; i++) {
		let currentSize = window.getComputedStyle(fSize[i], null).getPropertyValue('font-size');
		fSize[i].style.fontSize = `${Number(currentSize.replace('px','')) + 1}px`
	  }
	  var liSize = document.getElementsByTagName('li');
	for(let i = 0; i < fSize.length; i++) {
		let currentSize = window.getComputedStyle(liSize[i], null).getPropertyValue('font-size');
		liSize[i].style.fontSize = `${Number(currentSize.replace('px','')) + 1}px`
	  }
}