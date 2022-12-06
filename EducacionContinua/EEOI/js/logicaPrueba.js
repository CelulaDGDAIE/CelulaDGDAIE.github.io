function ComprobarRespuestas(){
    let sumaCorrectas=0;
    let respuestaPregunta1 = document.getElementById("selectpregunta1").value;
    let respuestaPregunta2 = document.getElementById("selectpregunta2").value;
    let respuestaPregunta3 = document.getElementById("selectpregunta3").value;
    let respuestaPregunta4 = document.getElementById("selectpregunta4").value;
    let respuestaPregunta5 = document.getElementById("selectpregunta5").value;
    let respuestaPregunta6 = document.getElementById("selectpregunta6").value;
    let respuestaPregunta7 = document.getElementById("selectpregunta7").value;
    let respuestaPregunta8 = document.getElementById("selectpregunta8").value;
    let respuestaPregunta9 = document.getElementById("selectpregunta9").value;
    let respuestaPregunta10 = document.getElementById("selectpregunta10").value;
    if(respuestaPregunta1 != 8){
        document.getElementById("incorrecto1").style.display="inline";
        document.getElementById("correcto1").style.display="none";
    }else{
        document.getElementById("correcto1").style.display="inline";
        document.getElementById("incorrecto1").style.display="none";
        sumaCorrectas++;
    }
    if(respuestaPregunta2 != 4){
        document.getElementById("incorrecto2").style.display="inline";
        document.getElementById("correcto2").style.display="none";
    }else{
        document.getElementById("correcto2").style.display="inline";
        document.getElementById("incorrecto2").style.display="none";
        sumaCorrectas++;
    }
    if(respuestaPregunta3 != 6){
        document.getElementById("incorrecto3").style.display="inline";
        document.getElementById("correcto3").style.display="none";
    }else{
        document.getElementById("correcto3").style.display="inline";
        document.getElementById("incorrecto3").style.display="none";
        sumaCorrectas++;
    }
    if(respuestaPregunta4 != 2){
        document.getElementById("incorrecto4").style.display="inline";
        document.getElementById("correcto4").style.display="none";
    }else{
        document.getElementById("correcto4").style.display="inline";
        document.getElementById("incorrecto4").style.display="none";
        sumaCorrectas++;
    }
    if(respuestaPregunta5 != 5){
        document.getElementById("incorrecto5").style.display="inline";
        document.getElementById("correcto5").style.display="none";
    }else{
        document.getElementById("correcto5").style.display="inline";
        document.getElementById("incorrecto5").style.display="none";
        sumaCorrectas++;
    }
    if(respuestaPregunta6 != 10){
        document.getElementById("incorrecto6").style.display="inline";
        document.getElementById("correcto6").style.display="none";
    }else{
        document.getElementById("correcto6").style.display="inline";
        document.getElementById("incorrecto6").style.display="none";
        sumaCorrectas++;
    }
    if(respuestaPregunta7 != 7){
        document.getElementById("incorrecto7").style.display="inline";
        document.getElementById("correcto7").style.display="none";
    }else{
        document.getElementById("correcto7").style.display="inline";
        document.getElementById("incorrecto7").style.display="none";
        sumaCorrectas++;
    }
    if(respuestaPregunta8 != 1){
        document.getElementById("incorrecto8").style.display="inline";
        document.getElementById("correcto8").style.display="none";
    }else{
        document.getElementById("correcto8").style.display="inline";
        document.getElementById("incorrecto8").style.display="none";
        sumaCorrectas++;
    }
    if(respuestaPregunta9 != 3){
        document.getElementById("incorrecto9").style.display="inline";
        document.getElementById("correcto9").style.display="none";
    }else{
        document.getElementById("correcto9").style.display="inline";
        document.getElementById("incorrecto9").style.display="none";
        sumaCorrectas++;
    }
    if(respuestaPregunta10 != 9){
        document.getElementById("incorrecto10").style.display="inline";
        document.getElementById("correcto10").style.display="none";
    }else{
        document.getElementById("correcto10").style.display="inline";
        document.getElementById("incorrecto10").style.display="none";
        sumaCorrectas++;
    }
    if(sumaCorrectas == 10){
        document.getElementById("botonEvaluar").style.display="none";
        document.getElementById("mensajeFelicitacion").style.display="block";
        document.getElementById("mensajeError").style.display="none";
    }else{
        document.getElementById("mensajeFelicitacion").style.display="none";
        document.getElementById("mensajeError").style.display="block";
    }
}