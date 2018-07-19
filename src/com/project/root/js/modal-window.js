var modal = (function () {                         // Zadeklarowanie obiektu modal.

    var $window = $(window),
        $modal = $('<div class="modal" />'),         // Przygotowanie kodu znaczników dla okna modalnego.
        $content = $('<div id="kupa"/> '),
        $close = $('button#zamknij');


    $modal.append($content);                // Dodanie przycisku zamykającego do okna modalnego.

    $close.on('click', function (e) {                 // Jeżeli użytkownik kliknie przycisk zamykający okno.
        e.preventDefault();                           // Uniemożliwienie standardowego działania łącza.
        modal.close();                                // Zamknięcie okna modalnego.
        $('#navbar').show();
    });


    
    
    if (document.addEventListener) {                       // Jeżeli obserwator zdarzeń jest obsługiwany.
        document.addEventListener('keydown', function (event) {
            const key = event.key; // const {key} = event; in ES6+
            if (key === "Escape") {
                modal.close();
                $('#navbar').show();
            }
        });
    }

    $(document).keyup(function(e) {
        if (e.keyCode === 27) { // escape key maps to keycode `27`
            // <DO YOUR WORK HERE>
            modal.close();
            $('#navbar').show();
        }
    });
    
    

    var sharp = document.getElementById('cancel');
    if (sharp.addEventListener) {                       // Jeżeli obserwator zdarzeń jest obsługiwany.
        sharp.addEventListener('click', function (event) {
            event.preventDefault();
            modal.close();
            $('#navbar').show();
        });
    }
    else {                                         // W przeciwnym razie.
        sharp.attachEvent('onclick', function (event) {         // Użycie starego modelu IE: onclick.
            event.preventDefault();
            modal.close();
            $('#navbar').show();                                 // Wywołanie itemDone().
        });
    }


    return {                                        // Dodanie kodu do obiektu modal.
        center: function () {                          // Zdefiniowanie metody center().
            // Obliczenie odległości od górnej i lewej krawędzi okna, aby wyśrodkować okno modalne.
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2,
                left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
            $modal.css({                                // Style CSS dla okna modalnego.
                top: top + $window.scrollTop(),            // Wyśrodkowanie w pionie.
                left: left + $window.scrollLeft()          // Wyśrodkowanie w poziomie.
            });
        },
        open: function (settings) {
            // Zdefiniowanie metody open().
            $content.css({
                background: 'white'
            });
            $content.empty().append(settings.content);   // Zdefiniowanie nowej zawartości dla okna modalnego.
            // $content.append('kweufhk');

            $modal.css({                                 // Określenie wymiarów okna modalnego.
                width: settings.width || 'auto',           // Szerokość.
                height: settings.height || 'auto'        // Wysokość.

            }).appendTo('body');                         // Umieszczenie okna modalnego na stronie.

            modal.center();                              // Wywołanie metody center().
            $(window).on('resize', modal.center);        // Wywołanie metody po zmianie wielkości okna przeglądarki internetowej.

        },
        update: function () {

            var allCost = document.getElementById('navbar').getElementsByTagName('li').item(3).childNodes.item(1).textContent;
            $(document.getElementById('descriptionOfPackage').getElementsByTagName('span')[1]).html(allCost);
            $(document.getElementById('hiddenArea')).val(allCost);

        },
        close: function () {                            // Zdefiniowanie metody close().
            $content.empty();                            // Usunięcie zawartości z okna modalnego.
            $modal.detach();                             // Usunięcie okna modalnego ze strony.
            document.getElementById('container').removeAttribute('class', 'modal-active');
            $('ul#lista').removeClass('modal-active');
            $('button.buy').removeClass('modal-active');
            // $(window).off('resize', modal.center);       // Usunięcie procedury obsługi zdarzeń.
        }
    };


}());

var modalService = (function () {

    var $windowService = $(window),
        $modalService = $('<div class="modal" />'),         // Przygotowanie kodu znaczników dla okna modalnego.
        $contentService = $('<div class=" modalService"> </div>   '),
        $close = $('button#zamknij');


    $modalService.append($contentService);

    document.addEventListener('keydown', function (event) {
        const key = event.key; // const {key} = event; in ES6+
        if (key === "Escape") {
            modalService.close();
        }
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) { // escape key maps to keycode `27`
            // <DO YOUR WORK HERE>
            modalService.close();
            $('#navbar').show();
        }
    });

    return {                                        // Dodanie kodu do obiektu modal.
        center: function () {                          // Zdefiniowanie metody center().
            // Obliczenie odległości od górnej i lewej krawędzi okna, aby wyśrodkować okno modalne.
            var top = Math.max($windowService.height() - $modalService.outerHeight(), 0) / 2,
                left = Math.max($windowService.width() - $modalService.outerWidth(), 0) / 2;
            $modalService.css({                                // Style CSS dla okna modalnego.
                top: top + $windowService.scrollTop(),            // Wyśrodkowanie w pionie.
                left: left + $windowService.scrollLeft()          // Wyśrodkowanie w poziomie.
            });
        },
        open: function (settings) {
            $contentService.css({
                background: 'white'
            });
            $contentService.empty().append(settings.content);   // Zdefiniowanie nowej zawartości dla okna modalnego.

            $modalService.css({                                 // Określenie wymiarów okna modalnego.
                width: settings.width || 'auto',           // Szerokość.
                height: settings.height || 'auto'        // Wysokość.

            }).appendTo('body');                         // Umieszczenie okna modalnego na stronie.

            modalService.center();                              // Wywołanie metody center().
            $(window).on('resize', modalService.center);        // Wywołanie metody po zmianie wielkości okna przeglądarki internetowej.

        },
        close: function () {                            // Zdefiniowanie metody close().
            $contentService.empty();                            // Usunięcie zawartości z okna modalnego.
            $modalService.detach();                             // Usunięcie okna modalnego ze strony.
            document.getElementById('container').removeAttribute('class', 'modal-active');
            $('ul#lista').removeClass('modal-active');
            $('button.buy').removeClass('modal-active');
            // $(window).off('resize', $modalService.center);       // Usunięcie procedury obsługi zdarzeń.
        }
    };


}());