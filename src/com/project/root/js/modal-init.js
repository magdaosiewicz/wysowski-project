(function () {

    var $content = $('#share-options').detach();   // Usunięcie ze strony zawartości okna modalnego.
    var $contentService = $('#containerService').detach();

    $('#share').on('click', function () {           // Procedura obsługi zdarzeń wyświetlająca okno modalne.

        document.getElementById('container').setAttribute('class', 'modal-active');
        // $('ul#lista').addClass('modal-active');
        // $('button.buy').addClass('modal-active');

        // $('#navbar').addClass('modal-active');
        $('#navbar').hide()
        modal.open({content: $content, width: 530, height: 700});
        modal.update();
    });



    var dron = document.getElementsByClassName('service_description').item(0);
    dron.addEventListener('click', function () {
            document.getElementById('container').setAttribute('class', 'modal-active');
            modalService.open({content: $contentService, width: 530, height: 530});


        },
        false);

    var operator = document.getElementsByClassName('service_description').item(1);
    operator.addEventListener('click', function () {
            document.getElementById('container').setAttribute('class', 'modal-active');
            modalService.open({content: $contentService, width: 530, height: 530});
        },
        false);


}());

$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        var name = document.getElementById('inputName');
        var surname = document.getElementById('inputSurname');
        var email = document.getElementById('inputEmail');
        var date = document.getElementById('inputDate');
        var message = document.getElementById('inputMessage');
        var info  = document.getElementById('hiddenArea');

        if (!name.value || !email.value || !message.value || !surname.value || !date.value || !info.value)  {
            alertify.error("Please check your entries");
            return false;
        } else {
            $.ajax({
                method: 'POST',
                url: 'magdalenaosiewicz@wp.pl',
                data: $('#contact-form').serialize(),
                datatype: 'json'
            });
            e.preventDefault();
            $(this).get(0).reset();
            alertify.success("Message sent");
        }
    });
});