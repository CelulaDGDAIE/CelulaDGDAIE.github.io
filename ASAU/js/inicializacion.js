(function (app) {

    //Declaración de Variables
    var $botonMenu = $('[data-target="#menu-indice"]');
    var $enlaceNavegacion = $('.indice');
    var $botonUp = $('#button-up');
    var $navEncabezado = $('#encabezado');

    //Declaración de Eventos    
    app.inicializarApp = inicializarApp;

    //Implementación de las funciones
    function toggleDropdownMenu() {
        var $elementoBoton = $(this);
        var selectorElementoDropdown = $elementoBoton.data('target');
        var $elementoDropdown = $(selectorElementoDropdown)

        if ($elementoDropdown.hasClass('show')) {

            setTimeout(function () {
                $elementoDropdown.removeClass('show');
                $elementoBoton.attr('aria-expanded', false);
            }, 10);

        }
        else {
            $elementoDropdown.attr('class');
        }
    }


    function navegarSitio(e) {
        e.preventDefault();        
        var elementoEnlace = $(this);
        var referencia = elementoEnlace.attr('href').replace('#','');
        scrollIndiClicked(referencia);
    }

    

    function scrollFunction() {
        if ($botonUp) {            
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                $botonUp.css('display', 'block');
                $navEncabezado.addClass('scrolled');
            } else {
                $botonUp.css('display', 'none');
                $navEncabezado.removeClass('scrolled');
            }
        }
    }


    function inicializarApp() {        
        
        $(window).on('scroll', scrollFunction);
        $botonMenu.on('click', toggleDropdownMenu);
        $enlaceNavegacion.on('click', navegarSitio);               
        easyScrollDots({
            'fixedNav': true, // Set to true if you have a fixed nav.
            'fixedNavId': 'encabezado', // Set to the id of your navigation element (easyScrollDots will measure the height of the element).
            'fixedNavUpward': true // Set to true if your nav is only sticky when the user is scrolling up.
        });
        $('[data-toggle=tooltip]').tooltip({
            boundary: 'window',
            placement: 'right',
            template: '<div class="tooltip tooltip-custom" role="tooltip" ><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        });

        

    }

    $(function () {
        app.inicializarApp();        
    });


}(window.app));