$(function () {
    var navegadorMovil = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (navegadorMovil.Android() || navegadorMovil.BlackBerry() || navegadorMovil.iOS() || navegadorMovil.Opera() || navegadorMovil.Windows());
        }
    };

    var esMovil = navegadorMovil.any();
    var imagenesAdaptables = $('.imagen-adaptable');

    var estaEnScroll;


    var pantallaDespliegue = '';

    function evaluarCambioDeImagenes() {
        if ($(window).width() >= 768) {
            if (pantallaDespliegue !== 'escritorio') {
                pantallaDespliegue = 'escritorio';
                cambiarImagenes('movil', 'escritorio');
            }
        } else {
            if (pantallaDespliegue !== 'movil') {
                pantallaDespliegue = 'movil';
                cambiarImagenes('escritorio', 'movil');
            }
        }
    }

    function cambiarImagenes(fuentePorCambiar, fuenteDestino) {
        for (var i = 0; i < imagenesAdaptables.length; i++) {
            var fuente = $(imagenesAdaptables[i]).attr('src').replace(fuentePorCambiar, fuenteDestino);
            $(imagenesAdaptables[i]).attr('src', fuente);
        }
    }

    $(window).resize(function (event) {
        evaluarCambioDeImagenes()
    })

    evaluarCambioDeImagenes();

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });
})