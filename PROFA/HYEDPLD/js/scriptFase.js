window.onscroll = function() {scrollFunction()};
let carruselInformacionDiapositivaActual = "presentacion";
let evidenciaActual = 1;
let numeroEvidencias = document.getElementById("numeroEvidencias").value;
let anchoPantalla = window.innerWidth;
var infoActual = 1;
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
function siguienteEvidencia(){
	evidenciaActual = document.getElementById("evidenciaActual").value;
	document.getElementById("evidencia"+evidenciaActual).style.display = "none";
	evidenciaActual = Number(evidenciaActual)+1;
	if(evidenciaActual>numeroEvidencias){
		evidenciaActual=1;
	}
	document.getElementById("evidenciaActual").value = evidenciaActual;
	document.getElementById("evidencia"+evidenciaActual).style.display = "block";
}

function evidenciaAnterior(){
	evidenciaActual = document.getElementById("evidenciaActual").value;
	document.getElementById("evidencia"+evidenciaActual).style.display = "none";
	evidenciaActual = Number(evidenciaActual)-1;
	
	if(evidenciaActual==0){
		evidenciaActual=numeroEvidencias;
	}
	document.getElementById("evidenciaActual").value = evidenciaActual;
	document.getElementById("evidencia"+evidenciaActual).style.display = "block";
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

function cambiarDiapositiva(){
	if(infoActual == 1){
		infoActual = 2;
		document.getElementById("tituloCarruselInformacion").innerHTML = "<i class='bi bi-compass-fill'></i> Propósito";
		document.getElementById("contenidoSituacion").style.display = "none";
		document.getElementById("contenidoProposito").style.display = "block";
		document.getElementById("carruselInformación").classList.add('fondoVerde');
		document.getElementById("carruselInformación").classList.remove('fondoAzul');
		
	}else{
		infoActual = 1;
		document.getElementById("tituloCarruselInformacion").innerHTML = "<i class='bi bi-info-circle-fill'></i> Situación problematizadora";
		document.getElementById("contenidoProposito").style.display = "none";
		document.getElementById("contenidoSituacion").style.display = "block";
		document.getElementById("carruselInformación").classList.add('fondoAzul');
		document.getElementById("carruselInformación").classList.remove('fondoVerde');
	}
}