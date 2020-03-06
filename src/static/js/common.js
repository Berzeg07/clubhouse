$(document).ready(function() {

    $(".plan-btn").click(function(e){
            e.preventDefault();
            var $this = $(this);

            if( !$this.hasClass("active")){
               $(".plan-mob__item").slideUp();
               $(".plan-btn").removeClass("active");
           }

           $this.toggleClass("active");
           $this.next().slideToggle();

        });
        // $(".plan-btn:first").click();

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

    var tabSlider = new Swiper('.tab-slider', {
        simulateTouch: false,
        pagination: {
            el: '.swiper-pagination_main',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next_main',
            prevEl: '.swiper-button-prev_main',
        },
    });

    var mainSlider = new Swiper('.main-slider', {
        spaceBetween: 0,
        effect: 'fade',
        loop: 'true',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var planSlider = new Swiper('.plan-slider', {
        spaceBetween: 0,
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

    $('.plan-tabs__links a').click(function(e) {
        e.preventDefault();
        $('.plan-tabs__links a').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('href');
        $('.tab-cont').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.plan-tabs__links a:first').click();

});
