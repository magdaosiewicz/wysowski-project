// var cache = {},                      // Obiekt cache.
//     request,                           // Ostatnio żądany obraz.
//     $current,                          // Aktualnie wyświetlany obraz.
//     $frame = $('#photo-viewer');       // Kontener dla obrazu.
// $thumbs = $('.thumb');             // Kontener dla miniatur.
//
// function crossfade($video) {           // Funkcja realizująca przejście między obrazami.
//
//     if ($current) {                    // Jeżeli aktualnie jest wyświetlany obraz.
//         $current.stop().fadeOut(); // Zatrzymanie animacji i ukrycie obrazu.
//     }
//
//     $video.stop().fadeTo('slow', 1);     // Zatrzymanie animacji nowego obrazu i jego pojawienie się.
//     $current = $video;                   // Nowy obraz staje się bieżącym.
//
// }
//
// $(document).on('click', '.thumb', function(e){ // Po kliknięciu miniatury.
//     var $video,                               // Utworzenie zmiennej lokalnej o nazwie $video.
//         src = this.href;                    // Przechowywanie ścieżki dostępu do obrazu.
//     request = src;                      // Ponownie przechowywanie ścieżki dostępu do obrazu.
//
//     e.preventDefault();                     // Uniemożliwienie domyślnej akcji łącza.
//
//     $thumbs.removeClass('active');          // Usunięcie klasy active ze wszystkich miniatur.
//     $(this).addClass('active');             // Dodanie klasy active do klikniętej miniatury.
//
//     if (cache.hasOwnProperty(src)) {        // Jeżeli obiekt cache zawiera ten obraz,
//         if (cache[src].isLoading === false) { // a wartością właściwości isLoading jest false,
//             crossfade(cache[src].$video);         // to wywoływana jest funkcja crossfade().
//         }
//     } else {                                // Natomiast jeżeli obraz nie znajduje się w buforze.
//         $video = $('<video> </video>');                   // Przechowywanie pustego elementu <img/> w zmiennej $video.
//         cache[src] = {                        // Umieszczenie tego obrazu w buforze.
//             $video: $video,                         // Dodanie ścieżki dostępu do obrazu.
//             isLoading: true                     // Przypisanie właściwości isLoading wartości true.
//         };
//
//         // Następne kilka wierszy zostanie wykonanych po wczytaniu obrazu, ale najpierw trzeba poczynić przygotowania.
//         $video.on('load', function(){           // Kiedy obraz zostanie wczytany,
//             $video.hide();                        // należy go ukryć.
//             // Usunięcie klasy is-loading z ramki i dołączenie do niej nowego obrazu.
//             $frame.removeClass('is-loading').append($video);
//             cache[src].isLoading = false;       // Uaktualnienie właściwości isLoading w obiekcie cache.
//             // Jeżeli to nadal jest ostatnio żądany obraz.
//             if (request === src) {
//                 crossfade($video);                  // Wywołanie funkcji crossfade().
//             }                                   // Rozwiązanie problemów z asynchronicznym wczytywaniem.
//         });
//
//         $frame.addClass('is-loading');        // Dodanie klasy is-loading do ramki.
//
//         $video.attr({                           // Ustawienie atrybutów w elemencie <img>.
//
//             'src': src,
//             'preload': true,
//             'width' : 400,
//             'height': 300 ,
//             'poster' : "image/puppy.jpg"});  // Dodanie tytułu, o ile został podany w łączu.
//
//
//     }
//
// });
//
// // Ostatni wiersz jest wykonywany raz (po wczytaniu pozostałej części skryptu) i ma na celu wyświetlenie pierwszego obrazu.
// $('.thumb').eq(0).click();                // Symulacja kliknięcia pierwszej miniatury.
//
//
//
//
// /**
//  * Created by Magda on 02.06.2018.
//  */
