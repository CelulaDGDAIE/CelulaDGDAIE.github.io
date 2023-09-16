var preguntaActual = 0;
const respuestasCorrectas = [];
respuestasCorrectas[0] = 2;
respuestasCorrectas[1] = 2;
respuestasCorrectas[2] = 2;
respuestasCorrectas[3] = 1;
respuestasCorrectas[4] = 3;
respuestasCorrectas[5] = 3;
respuestasCorrectas[6] = 3;
respuestasCorrectas[7] = 2;
respuestasCorrectas[8] = 4;
respuestasCorrectas[9] = 1;
respuestasCorrectas[10] = 4;
respuestasCorrectas[11] = 3;
respuestasCorrectas[12] = 1;
respuestasCorrectas[13] = 1;
respuestasCorrectas[14] = 2;
respuestasCorrectas[15] = 1;
respuestasCorrectas[16] = 1;
respuestasCorrectas[17] = 2;
respuestasCorrectas[18] = 1;
respuestasCorrectas[19] = 4;
respuestasCorrectas[20] = 2;
respuestasCorrectas[21] = 2;
respuestasCorrectas[22] = 1;
respuestasCorrectas[23] = 1;
respuestasCorrectas[24] = 1;
respuestasCorrectas[25] = 2;
respuestasCorrectas[26] = 1;
respuestasCorrectas[27] = 2;
respuestasCorrectas[28] = 2;
respuestasCorrectas[29] = 1;
respuestasCorrectas[30] = 1;
respuestasCorrectas[31] = 2;
respuestasCorrectas[32] = 2;
respuestasCorrectas[33] = 1;
respuestasCorrectas[34] = 3;
respuestasCorrectas[35] = 2;
respuestasCorrectas[36] = 1;
respuestasCorrectas[37] = 2;
respuestasCorrectas[38] = 3;
respuestasCorrectas[39] = 1;
respuestasCorrectas[40] = 1;
respuestasCorrectas[41] = 1;
respuestasCorrectas[42] = 1;
respuestasCorrectas[43] = 2;
respuestasCorrectas[44] = 3;
respuestasCorrectas[45] = 1;
respuestasCorrectas[46] = 2;

var respuestas = [];
function empezarEval() {
    document.getElementById("botonEmpezar").style.display = "none";
    document.getElementById("autoeval").style.backgroundColor = "#bee2d5";
    preguntaActual++;
    document.getElementById("contador").style.display = "block";
    document.getElementById("respondidas").innerHTML = preguntaActual;
    document.getElementById("botonSiguiente").style.display = "block";
    document.getElementById("pregunta" + preguntaActual).style.display = "block";
    document.getElementById("respuestas" + preguntaActual).style.display = "block";

}

function siguientePregunta() {
    var radioButtons = document.querySelectorAll('input[name="grupo' + preguntaActual + 'respuestas"]');
    let isSelected = false;
    var valorSeleccionado;
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            valorSeleccionado = radioButton.value;
            isSelected = true;
        }
    });

    if (isSelected) {
        document.getElementById("pregunta" + preguntaActual).style.display = "none";
        document.getElementById("respuestas" + preguntaActual).style.display = "none";
        respuestas[preguntaActual - 1] = valorSeleccionado;
        preguntaActual++;
        if (preguntaActual < 48) {
            document.getElementById("pregunta" + preguntaActual).style.display = "block";
            document.getElementById("respuestas" + preguntaActual).style.display = "block";
            document.getElementById("respondidas").innerHTML = preguntaActual;
        } else {
            document.getElementById("botonSiguiente").style.display = "none";
            document.getElementById("contador").style.display = "none";
            document.getElementById("mensajeFin").style.display = "block";
            document.getElementById("puntaje").innerHTML = obtenerPuntaje();
        }
    } else {
        alert("Debe seleccionar una respuesta");
    }
}

function obtenerPuntaje() {
    var puntos = 0;
    for (let i = 0; i < 47; i++) {
        if (respuestas[i] == respuestasCorrectas[i]) {
            puntos++;
        }
    }
    return puntos;
}
