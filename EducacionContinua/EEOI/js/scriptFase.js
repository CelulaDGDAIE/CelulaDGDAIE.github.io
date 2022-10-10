cargarContenido();
window.onscroll = function() {scrollFunction()};
let carruselInformacionDiapositivaActual = "presentacion";
let evidenciaActual = 1;
let anchoPantalla = window.innerWidth;
if (anchoPantalla>1000){
	let alturaPantalla = window.innerHeight;
	let encabezado = document.getElementById("encabezadoEscritorio");
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
	const contenidoFase = JSON.parse(contenidoEE);
	document.getElementById("tituloPresentacion").innerHTML = contenidoFase.tituloPresentacion;
	document.getElementById("tituloPresentacionScroll").innerHTML = contenidoFase.tituloPresentacion;
    document.getElementById("subtituloPresentacion").innerHTML = contenidoFase.tituloModulo1;
    document.getElementById("subtituloPresentacionMovil").innerHTML = contenidoFase.tituloModulo1;
    document.getElementById("subtituloPresentacionScroll").innerHTML = contenidoFase.tituloModulo1;
	document.getElementById("tituloEscritorio").innerHTML = contenidoFase.tituloPresentacion;
	document.getElementById("textoPresentacion").innerHTML = contenidoFase.textoProposito;
	document.getElementById("textoCarrusel").innerHTML = contenidoFase.textoProposito;
	document.getElementById("textoUnidad").innerHTML = contenidoFase.textoSituacion;
}
function cambiarEvidencia(){
	
	if(evidenciaActual == 1){
		evidenciaActual = 2;
		document.getElementById("evidencia1").style.display = "none";
		document.getElementById("evidencia2").style.display = "block";
	}else{
		evidenciaActual = 1;
		document.getElementById("evidencia2").style.display = "none";
		document.getElementById("evidencia1").style.display = "block";
	}
}
function cambiarDiapositiva(){
	var aireSuperior = document.getElementById("aireSuperior");
	var aireInferior = document.getElementById("aireInferior");
	var cuerpoCarrusel = document.getElementById("cuerpoCarrusel");
	const contenidoFase = JSON.parse(contenidoEE);
	if(carruselInformacionDiapositivaActual == "presentacion"){
		carruselInformacionDiapositivaActual = "unidad";
        document.getElementById("columnaImagen").style.display = "none";
		aireSuperior.classList.remove("fondoVerde");
		aireInferior.classList.remove("fondoVerde");
		cuerpoCarrusel.classList.remove("fondoVerde");
		aireSuperior.classList.add("fondoAzul");
		aireInferior.classList.add("fondoAzul");
		cuerpoCarrusel.classList.add("fondoAzul");
		document.getElementById("textoCarrusel").innerHTML = contenidoFase.textoSituacion;
		document.getElementById("tituloCarrusel").innerHTML = "<strong><i class='bi bi-intersect'></i> Generating ideas</strong>";
	}else{
		carruselInformacionDiapositivaActual = "presentacion";
		aireSuperior.classList.remove("fondoAzul");
		aireInferior.classList.remove("fondoAzul");
		cuerpoCarrusel.classList.remove("fondoAzul");
		aireSuperior.classList.add("fondoVerde");
		aireInferior.classList.add("fondoVerde");
        document.getElementById("columnaImagen").style.display = "block";
		cuerpoCarrusel.classList.add("fondoVerde");
		document.getElementById("textoCarrusel").innerHTML = contenidoFase.textoProposito;
		document.getElementById("tituloCarrusel").innerHTML = "<strong><i class='bi bi-info-circle-fill'></i> Purpose</strong>";
		document.getElementById("imagenDiapositivas").src="https://lumen.uv.mx/resources/files/images/2022/10/7/7405/01af4971-e109-4e13-bbc2-4b55b6d10e8a.jpg";
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