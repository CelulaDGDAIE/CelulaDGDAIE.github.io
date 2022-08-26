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
    document.getElementById("subtituloPresentacion").innerHTML = contenidoFase.tituloModulo3;
    document.getElementById("subtituloPresentacionMovil").innerHTML = contenidoFase.tituloModulo3;
    document.getElementById("subtituloPresentacionScroll").innerHTML = contenidoFase.tituloModulo3;
	document.getElementById("tituloEscritorio").innerHTML = contenidoFase.tituloPresentacion;
	document.getElementById("textoPresentacion").innerHTML = contenidoFase.textoProposito;
	document.getElementById("textoCarrusel").innerHTML = contenidoFase.textoProposito;
	document.getElementById("textoUnidad").innerHTML = contenidoFase.textoSituacion;
	document.getElementById("textoUnidadEscritorio").innerHTML = contenidoFase.textoSituacion;
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

function mostrarMensajePredial(){
	Swal.fire({
		html: '<p style="font-size: 25px;">El <span style="color: blue;"><b>predial</b></span> es un impuesto que cobra un gobierno municipal al ciudadano due&ntilde;o de un inmueble registrado a su nombre en el Registro P&uacute;blico de la Propiedad de ese municipio. Un inmueble es una propiedad que no puede trasladarse, como un terreno, casa, departamento, edificio o f&aacute;brica. Los recursos obtenidos mediante el cobro del impuesto predial son utilizados por los gobiernos municipales para financiar obras de infraestructura que beneficien a los habitantes como calles, banquetas, alumbrado, parques p&uacute;blicos, etc&eacute;tera.</p>'
	})
}

function mostrarMensajeTenencia(){
	Swal.fire({
		html: '<p style="font-size: 25px;">La <span style="color: blue;"><b>tenencia vehicular</b></span> es un tipo de impuesto directo que se cobra al ciudadano por poseer un veh&iacute;culo automotor, independiente del uso que le d&eacute;.</p> <p style="font-size: 25px;">Para obtener m&aacute;s informaci&oacute;n puedes consultar los siguientes links:</p><p><a href="https://www.bbva.mx/educacion-financiera/blog/que-es-la-tenencia-vehicular.html" target="_blank">https://www.bbva.mx/educacion-financiera/blog/que-es-la-tenencia-vehicular.html</a></p><p><a href="https://www.crabi.com/blog/tramites-vehiculares-tenencia-vehicular" target="_blank">https://www.crabi.com/blog/tramites-vehiculares-tenencia-vehicular</a></p>'
	})
}