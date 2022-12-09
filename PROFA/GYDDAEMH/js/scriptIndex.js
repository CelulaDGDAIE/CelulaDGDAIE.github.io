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
function cambiarDiapositiva(){
	var aireSuperior = document.getElementById("aireSuperior");
	var aireInferior = document.getElementById("aireInferior");
	var cuerpoCarrusel = document.getElementById("cuerpoCarrusel");
	var contPres = document.getElementById("contenidoPresentacion");
	var contUni = document.getElementById("contenidoUnidad");
	if(carruselInformacionDiapositivaActual == "presentacion"){
		carruselInformacionDiapositivaActual = "unidad";
		aireSuperior.classList.remove("fondoVerde");
		aireInferior.classList.remove("fondoVerde");
		cuerpoCarrusel.classList.remove("fondoVerde");
		aireSuperior.classList.add("fondoAzul");
		aireInferior.classList.add("fondoAzul");
		cuerpoCarrusel.classList.add("fondoAzul");
		document.getElementById("tituloCarrusel").innerHTML = "<strong><i class='bi bi-intersect'></i> Unidad de competencia</strong>";
		document.getElementById("imagenDiapositivas").src="https://lumen.uv.mx/resources/files/images/2022/10/6/7400/859a6c65-5916-4b2b-8ebc-5d38e8d9ea92.jpg";
		document.getElementById("referenciaImagen").innerHTML= "[2]";
		contPres.style.display="none";
		contUni.style.display="block";
	}else{
		carruselInformacionDiapositivaActual = "presentacion";
		aireSuperior.classList.remove("fondoAzul");
		aireInferior.classList.remove("fondoAzul");
		cuerpoCarrusel.classList.remove("fondoAzul");
		aireSuperior.classList.add("fondoVerde");
		aireInferior.classList.add("fondoVerde");
		cuerpoCarrusel.classList.add("fondoVerde");
		document.getElementById("tituloCarrusel").innerHTML = "<strong><i class='bi bi-info-circle-fill'></i> Presentacion</strong>";
		document.getElementById("imagenDiapositivas").src="https://lumen.uv.mx/resources/files/images/2022/10/6/7396/7280b778-bee1-4afd-8c8d-196bcb656e68.jpg";
		document.getElementById("referenciaImagen").innerHTML= "[1]";
		contPres.style.display="block";
		contUni.style.display="none";
	}
}