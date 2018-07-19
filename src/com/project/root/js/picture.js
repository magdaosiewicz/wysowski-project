//
// $(function () {
//
//     var cache = {},                      // Obiekt cache.
//         request,                           // Ostatnio żądany obraz.
//         $current,                          // Aktualnie wyświetlany obraz.
//         $frame = $('#photo-viewer');       // Kontener dla obrazu.
//     $thumbs = $('.thumb');             // Kontener dla miniatur.
//
//     function crossfade($img) {           // Funkcja realizująca przejście między obrazami.
//         // Nowy obraz jest podawany jako parametr.
//         if ($current) {                    // Jeżeli aktualnie jest wyświetlany obraz.
//             $current.fadeOut('slow'); // Zatrzymanie animacji i ukrycie obrazu.
//         }
//
//         $img.css({                         // Zdefiniowanie marginesów CSS dla obrazu.
//             marginLeft: -$img.width() / 2,   // Margines ujemny o wielkości połowy szerokości obrazu.
//             marginTop: -$img.height() / 2    // Margines ujemny o wielkości połowy wysokości obrazu.
//         });
//
//         $img.fadeTo('slow', 1);     // Zatrzymanie animacji nowego obrazu i jego pojawienie się.
//
//         $current = $img;                   // Nowy obraz staje się bieżącym.
//
//     }
//
//     $(document).on('click', '.thumb', function(e){ // Po kliknięciu miniatury.
//         var $img,                               // Utworzenie zmiennej lokalnej o nazwie $img.
//             src = this.href;                    // Przechowywanie ścieżki dostępu do obrazu.
//         request = src;                      // Ponownie przechowywanie ścieżki dostępu do obrazu.
//
//         e.preventDefault();                     // Uniemożliwienie domyślnej akcji łącza.
//
//         $thumbs.removeClass('active');          // Usunięcie klasy active ze wszystkich miniatur.
//         $(this).addClass('active');             // Dodanie klasy active do klikniętej miniatury.
//
//         if (cache.hasOwnProperty(src)) {        // Jeżeli obiekt cache zawiera ten obraz,
//             if (cache[src].isLoading === false) { // a wartością właściwości isLoading jest false,
//                 crossfade(cache[src].$img);         // to wywoływana jest funkcja crossfade().
//             }
//         } else {                                // Natomiast jeżeli obraz nie znajduje się w buforze.
//             $img = $('<source> </source>');                   // Przechowywanie pustego elementu <img/> w zmiennej $img.
//             cache[src] = {                        // Umieszczenie tego obrazu w buforze.
//                 $img: $img,                         // Dodanie ścieżki dostępu do obrazu.
//                 isLoading: true                     // Przypisanie właściwości isLoading wartości true.
//             };
//
//             // Następne kilka wierszy zostanie wykonanych po wczytaniu obrazu, ale najpierw trzeba poczynić przygotowania.
//             $img.on('load', function(){           // Kiedy obraz zostanie wczytany,
//                 $img.hide();                        // należy go ukryć.
//                 // Usunięcie klasy is-loading z ramki i dołączenie do niej nowego obrazu.
//                 $frame.removeClass('is-loading').append($img);
//                 cache[src].isLoading = false;       // Uaktualnienie właściwości isLoading w obiekcie cache.
//                 // Jeżeli to nadal jest ostatnio żądany obraz.
//                 if (request === src) {
//                     crossfade($img);                  // Wywołanie funkcji crossfade().
//                 }                                   // Rozwiązanie problemów z asynchronicznym wczytywaniem.
//             });
//
//             $frame.addClass('is-loading');        // Dodanie klasy is-loading do ramki.
//
//             $img.attr({                           // Ustawienie atrybutów w elemencie <img>.
//                 'src': src,
//                 //'preload': true,
//                 // 'width' : 400,
//                 // 'height': 300 ,
//                 'poster' : "image/puppy.jpg"});  // Dodanie tytułu, o ile został podany w łączu.
//         }
//
//     });
//
// // Ostatni wiersz jest wykonywany raz (po wczytaniu pozostałej części skryptu) i ma na celu wyświetlenie pierwszego obrazu.
//   //  $('.thumb').eq(0).click();                // Symulacja kliknięcia pierwszej miniatury.
//
//
//
// });
// $(function () {
//
//     $("#thumbnails").find('img').on({
//         click: function () {
//
//             var videoUrl = $(this).attr('alt');
//             $('#mainVideo').attr('src', videoUrl);
//
//
//         }
//     })
//
//
// });