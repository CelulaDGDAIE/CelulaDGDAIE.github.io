cargarContenido();
window.onscroll = function() {scrollFunction()};
let carruselInformacionDiapositivaActual = "presentacion";
let anchoPantalla = window.innerWidth;
if (anchoPantalla>1000){
	let alturaPantalla = window.innerHeight;
	let encabezado = document.getElementById("encabezadoEscritorio");
	let encabezadoScroll = document.getElementById("encabezadoScroll");
	encabezadoScroll.style.display = "none";
	let alturaEncabezado = encabezado.clientHeight;;
	document.getElementById("compensacionEncabezadoEscritorio").style.height = alturaEncabezado + "px";
	let altoModulos = (.15 *alturaPantalla);
	const modulos = document.getElementsByClassName("moduloContenido");
	for (let i = 0; i < modulos.length; i++) {
	  modulos[i].style.height = altoModulos + "px";
	}
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
	document.getElementById("tituloModulo1Movil").innerHTML = contenidoIndex.tituloModulo1;
	document.getElementById("tituloModulo2Movil").innerHTML = contenidoIndex.tituloModulo2;
	document.getElementById("textoCreditos").innerHTML = contenidoIndex.textoCreditos;
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
		document.getElementById("tituloCarrusel").innerHTML = "<strong><i class='bi bi-intersect'></i> Unidad de competencia</strong>";
		document.getElementById("imagenDiapositivas").src="imagenes/unidad.jpg";
	}else{
		carruselInformacionDiapositivaActual = "presentacion";
		aireSuperior.classList.remove("fondoAzul");
		aireInferior.classList.remove("fondoAzul");
		cuerpoCarrusel.classList.remove("fondoAzul");
		aireSuperior.classList.add("fondoVerde");
		aireInferior.classList.add("fondoVerde");
		cuerpoCarrusel.classList.add("fondoVerde");
		document.getElementById("textoCarrusel").innerHTML = contenidoIndex.textoPresentacion;
		document.getElementById("tituloCarrusel").innerHTML = "<strong><i class='bi bi-info-circle-fill'></i> Presentacion</strong>";
		document.getElementById("imagenDiapositivas").src="imagenes/presentacion.jpg";
	}
}