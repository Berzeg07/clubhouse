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

    var swiper = new Swiper('.main-slider', {
        spaceBetween: 0,
        effect: 'fade',
        loop: 'true',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});
