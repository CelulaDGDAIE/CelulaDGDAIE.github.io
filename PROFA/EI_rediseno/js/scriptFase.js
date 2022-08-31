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
	document.getElementById("textoUnidadEscritorio").innerHTML = contenidoFase.textoSituacion;
}
function siguienteEvidencia(){
	switch (evidenciaActual) {
		case 1:
			evidenciaActual = 2;
			document.getElementById("evidencia1").style.display = "none";
			document.getElementById("evidencia2").style.display = "block";
		break;
		case 2:
			evidenciaActual = 3;
			document.getElementById("evidencia2").style.display = "none";
			document.getElementById("evidencia3").style.display = "block";
		break;
		case 3:
			evidenciaActual = 1;
			document.getElementById("evidencia3").style.display = "none";
			document.getElementById("evidencia1").style.display = "block";
		break;
		default:
			break;
	}
}
function anteriorEvidencia(){
	switch (evidenciaActual) {
		case 1:
			evidenciaActual = 3;
			document.getElementById("evidencia1").style.display = "none";
			document.getElementById("evidencia3").style.display = "block";
		break;
		case 2:
			evidenciaActual = 1;
			document.getElementById("evidencia2").style.display = "none";
			document.getElementById("evidencia1").style.display = "block";
		break;
		case 3:
			evidenciaActual = 2;
			document.getElementById("evidencia3").style.display = "none";
			document.getElementById("evidencia2").style.display = "block";
		break;
		default:
			break;
	}
}

var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
  let player
  
  const onApiChange = _ => {   
    if (typeof player.setOption === 'function') {
      player.setOption('captions', 'track', {languageCode: 'es'})
    }  
  }
  
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('existing-iframe', {events: {onApiChange}});
	player = new YT.Player('existing-iframe2', {events: {onApiChange}});
	player = new YT.Player('existing-iframe3', {events: {onApiChange}});
	player = new YT.Player('existing-iframe4', {events: {onApiChange}});
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