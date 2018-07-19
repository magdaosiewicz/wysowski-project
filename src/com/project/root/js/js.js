$(window).load(function () {


    $('.slider').each(function () {              // Dla każdej grupy slajdów.
        var $this = $(this);                    // Pobranie bieżącej grupy slajdów.
        var $group = $this.find('.slide-group'); // Pobranie elementu o klasie slide-group (kontener).
        var $slides = $this.find('.slide');       // Obiekt jQuery przechowujący wszystkie slajdy.
        var buttonArray = [];                    // Utworzenie tablicy na przyciski nawigacyjne.
        var currentIndex = 0;                     // Numer indeksu bieżącego slajdu.
        var timeout;                              // Zmienna do przechowywania licznika czasu.

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        function move(newIndex) {          // Przejście ze starego do nowego slajdu.

            var animate;     // Deklaracja zmiennych.
            advance();                       // Podczas przejścia slajdów należy ponownie wywołać funkcję advance().
            if ($group.is(':animated') || currentIndex === newIndex) {
                return;             // Jeżeli wyświetlany jest bieżący slajd lub odtwarzana jest animacja slajdu, to nie podejmujemy żadnych działań.
            }

            buttonArray[currentIndex].removeClass('active'); // Usunięcie klasy z elementu.
            buttonArray[newIndex].addClass('active');        // Dodanie klasy do nowego elementu.
            animate = '0%';                                      // Animacja bieżącej grupy.
            $slides.eq(newIndex).fadeIn(400);                     // pojawianie

            $group.animate({left: animate}, function () {    // Animacja slajdu
                $slides.eq(currentIndex).fadeOut(500);       // zanikanie

                currentIndex = newIndex;               // Ustawienie zmiennej currentIndex wartości nowego obrazu.
            });
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        function advance() {                     // Ustawienie czasu wyświetlania slajdu.
            clearTimeout(timeout);                 // Wyzerowanie licznika czasu w zmiennej timeout.
            timeout = setTimeout(function () {      // Ustawienie nowego licznika.
                if (currentIndex < ($slides.length - 1)) { // Jeżeli to nie jest ostatni slajd.
                    move(currentIndex + 1);            // Przejście do następnego slajdu.
                } else {                             // W przeciwnym razie.
                    move(0);                           // Przejście do pierwszego slajdu.
                }
            }, 3500);                              // Czas oczekiwania wyrażony w milisekundach
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $.each($slides, function (index) {
            // Utworzenie elementu <button> dla przycisku.
            var $button = $('<button type="button" class="slide-btn">&bull;</button>');
            if (index === currentIndex) {    // Jeżeli indeks wskazuje na element bieżący.
                $button.addClass('active');    // Dodanie klasy active.
            }
            $button.on('click', function () { // Utworzenie procedury obsługi zdarzeń dla przycisku.
                move(index);                   // Wywołanie funkcji move().
            }).appendTo('.slide-buttons');   // Dodanie do elementu zawierającego przyciski.
            buttonArray.push($button);       // Dodanie przycisków do tablicy.
        });

        advance();                          // Skrypt jest już skonfigurowany, można wywołać funkcję advance().

    });
/////////////////////////////////////////////////////////////////////////////////////

    var mainPriceValue = 2500;
    var mainPrice = document.getElementById('value');
    var msg = mainPriceValue;
    mainPrice.textContent = msg;

    var navBar = document.getElementById('navbar');
    var allCost = navBar.getElementsByTagName('span')[0];
    allCost.textContent = msg;


    function getTarget(e) {
        if (!e) {
            e = window.event;
        }
        return e.target || e.srcElement;
    }

    function buttonPress(e) {
        var target = getTarget(e);
        if (target.hasAttribute('type')) {

            var videoUrl = $(target).attr('id');
            $('#mainVideo').attr('src', videoUrl);

            var spanId = target.getElementsByTagName('span')[1].getAttribute('id');
            var price = document.getElementById(spanId).textContent;

            var priceNum = Number(price);
            var sumNum = Number(allCost.textContent);
            allCost.textContent = calculateCost(priceNum, sumNum, spanId);
            changeVisibility(spanId);

            // document.getElementById("processor__dummy_z0tk_065_c5md_1").setAttribute("checked", "checked");

        }

        // Uniemożliwienie zachowania domyślnego łącza, czyli przeniesienia użytkownika na inną stronę.
        if (e.preventDefault) {                        // Czy metoda preventDefault() jest obsługiwana?
            e.preventDefault();                          // Użycie metody preventDefault().
        } else {                                       // W przeciwnym razie.
            e.returnValue = false;                       // Użycie starszej wersji IE.
        }
    }


    var el = document.getElementById('buttons');
    if (el.addEventListener) {                       // Jeżeli obserwator zdarzeń jest obsługiwany.
        el.addEventListener('click', function (e) {
                buttonPress(e);
            },
            false);                                     /// / Użycie propagacji zdarzenia.
    } else {                                         // W przeciwnym razie.
        el.attachEvent('onclick', function (e) {         // Użycie starego modelu IE: onclick.
            buttonPress(e);                                 // Wywołanie itemDone().
        });
    }


    function calculateCost(extraCost, currentCost, spanId) {

        var attr2 = document.getElementById(spanId).getAttribute('class').slice(6, 13);
        if (((spanId == 'dron' && attr2 === 'visible') || (spanId == 'operator' && attr2 === 'visible') )) {
            return currentCost + extraCost;
        }
        else if (((spanId == 'withoutDron' && attr2 === 'visible') || (spanId == 'withoutOperator' && attr2 === 'visible'))) {
            return currentCost - extraCost;
        } else {
            return currentCost;
        }

    }

    function changeVisibility(spanId) {
        var thisB;
        if (spanId == 'dron' || spanId == 'operator') {

            $(document.getElementById(spanId)).removeClass('visible').addClass('hidden');
            $(document.getElementById(spanId).previousElementSibling).removeClass('visible').addClass('hidden');
            $(document.getElementById(spanId).nextElementSibling).removeClass('visible').addClass('hidden');
            // $(document.getElementById(spanId).nextElementSibling).hide();

            thisB = document.getElementById(spanId).parentNode;

            var prevB = thisB.previousSibling.previousSibling;
            var fEl = prevB.childNodes;
            $(fEl).removeClass('hidden').addClass('visible');
        }
        if (spanId == 'withoutDron' || spanId == 'withoutOperator') {

            thisB = document.getElementById(spanId).parentNode;

            $(document.getElementById(spanId)).removeClass('visible').addClass('hidden');
            $(document.getElementById(spanId).previousElementSibling).removeClass('visible').addClass('hidden');
            $(document.getElementById(spanId).nextElementSibling).removeClass('visible').addClass('hidden');
            //allCost.textContent = 'kupa kaszy';

            var nextB = thisB.nextSibling.nextSibling;
            var fuEl = nextB.childNodes;
            $(fuEl).removeClass('hidden').addClass('visible');


        }
    }


});


