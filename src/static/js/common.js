$(document).ready(function() {
    $('.burger').click(function() {
        $(this).toggleClass('is-active');
        $('.dropdown-menu').toggleClass('is-active');
        $('body').toggleClass('overflow-hidden');
    });

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 96) {
                $('.header__bottom').addClass('stickytop');
                $('.header').addClass('header-height-fixed');
            } else {
                $('.header__bottom').removeClass('stickytop');
                $('.header').removeClass('header-height-fixed');
            }
        });
    });

});
