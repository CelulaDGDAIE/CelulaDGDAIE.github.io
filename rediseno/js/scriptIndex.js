cargarContenido();
window.onscroll = function() {scrollFunction()};
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
	document.getElementById("textoPresentacion").innerHTML = contenidoIndex.textoPresentacion;
	document.getElementById("textoUnidad").innerHTML = contenidoIndex.textoUnidad;
	document.getElementById("tituloModulo1").innerHTML = contenidoIndex.tituloModulo1;
	document.getElementById("tituloModulo2").innerHTML = contenidoIndex.tituloModulo2;
	document.getElementById("tituloModulo3").innerHTML = contenidoIndex.tituloModulo3;
}