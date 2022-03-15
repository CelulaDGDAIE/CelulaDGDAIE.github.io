cargarContenido();
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("cuadroPresentacion").style.display = "none";
		document.getElementById("encabezadoScroll").style.display = "block";
	  } else {
		document.getElementById("cuadroPresentacion").style.display = "block";
		document.getElementById("encabezadoScroll").style.display = "none";
	  }
}
function abrir_menu_lateral() {
  document.getElementById("menuLateral").style.display = "block";
}

function cerrar_menu_lateral() {
  document.getElementById("menuLateral").style.display = "none";
}
function cargarContenido(){
	const contenidoIndex = JSON.parse(contenido);
	document.getElementById("tituloPresentacion").innerHTML = contenidoIndex.tituloPresentacion;
	document.getElementById("tituloPresentacionScroll").innerHTML = contenidoIndex.tituloPresentacion;
	document.getElementById("textoPresentacion").innerHTML = contenidoIndex.textoPresentacion;
	document.getElementById("textoUnidad").innerHTML = contenidoIndex.textoUnidad;
}