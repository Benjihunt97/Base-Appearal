$(document).ready(() => {

    // function for the email input and button
    function checkEmail() {
        var emailValue = $('#email').val();

        if (emailValue === '') {
            $('.error').css('display', 'block');
        } else {
            $('.error').css('display', 'none');
            $('#btn-icon').removeClass('fa-chevron-right').addClass('fa-check');
            $('.input-container').animate({
                'width': '60px'
            }, 700);

            setTimeout(() => {
                // Reload or perform other actions here
                console.log('Email checked successfully');
            }, 1500);
        }
    }

    $('.send').click(() => {
        checkEmail();
    });

    $('#email').on('input', (e) => {
        if ($(e.target).val() !== '') {
            $('.error').css('display', 'none');
        } else {
            $('.error').css('display', 'block');
        }
    });

    function updateImage() {
        let screenW = $(window).width();
        let newSrc = (screenW >= 820) ? 'https://github.com/Benjihunt97/Base-Appearal/blob/main/hero-desktop.jpg?raw=true' : 'https://github.com/Benjihunt97/Base-Appearal/blob/main/hero-mobile.jpg?raw=true';

        $('.hero-img').attr('src', newSrc);
    }

    // Initial call to set the image based on the initial screen width
    updateImage();

    // Bind the function to the window resize event
    $(window).resize(function () {
        updateImage();
    });

});
