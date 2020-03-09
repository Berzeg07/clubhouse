$(document).ready(function() {

    $('.flat-info__btn').click(function() {
        var $this = $(this);
        $('.flat-info__front, .flat-info__back').removeAttr('style');
        $('.flat-info__front').addClass('hide');
        $('.flat-info__back').fadeIn();
        $('.flat-info__back').removeClass('hide');
        if (!$this.hasClass("active")) {
            $('.flat-info__front, .flat-info__back').removeAttr('style');
            $('.flat-info__front').fadeIn();
            $('.flat-info__front').removeClass('hide');
            $('.flat-info__back').addClass('hide');
        }
        $($this).toggleClass('active');
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

    // var accordSlider = null;
    // var settings = {
    //     spaceBetween: 0,
    //     loop: 'true',
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    // },
    // planSliderMobile = new Swiper('.plan-slider_mob', settings);

        // var planSliderMobile = new Swiper('.plan-slider_mob', {
        //     spaceBetween: 0,
        //     loop: 'true',
        //     pagination: {
        //         el: '.swiper-pagination',
        //         clickable: true,
        //     },
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     },
        // });

        // $(".plan-btn").click(function(e) {
        //     e.preventDefault();
        //     var $this = $(this);
        //     var planSliderMobile = new Swiper('.plan-slider_mob', settings)
        //
        //     planSliderMobile.destroy();
        //
        //     if (!$this.hasClass("active")) {
        //         $(".plan-mob__item").slideUp();
        //         $(".plan-btn").removeClass("active");
        //     }
        //
        //     $this.toggleClass("active");
        //     $this.next().slideToggle();
        //
        // });




    // $(".plan-btn").click(function(e) {
    //     e.preventDefault();
    //     var $this = $(this);
    //
    //     if (!$this.hasClass("active")) {
    //         $(".plan-mob__item").slideUp();
    //         $(".plan-btn").removeClass("active");
    //     }
    //
    //     $this.toggleClass("active");
    //     $this.next().slideToggle();
    //
    // });

    $('#tabsLink a').click(function(e) {
        e.preventDefault();
        $('#tabsLink a').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('href');
        $('.tab-cont').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('#tabsLink a:first').click();

    /*partners carousel*/
    if ($(window).width() < 768) {
        $('.owl-carousel2').removeClass('owl-carousel').removeClass('owl-carousel2');
    }

    $('.owl-carousel3').owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    $('.owl-carousel2').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1630: {
                items: 5
            },
            1920: {
                items: 7
            }
        }
    });

    $('.js-modal').click(function(e) {
        e.preventDefault();

        $('.apartament-modal').fadeIn();
        if ($(window).width() < 1280) {
            $('body').css({
                'overflow': 'hidden'
            });
            $('.overlay').css('display', 'block');
        }
    });

    $(".apartament-modal .phone").mask("+7(999)999-99-99");

    $('.js-modal-close').click(function() {
        $('.apartament-modal').fadeOut();

        if ($(window).width() < 1280) {
            $('body').css({
                'overflow': 'scroll'
            });
            $('.overlay').css('display', 'none');
        }
    });

    $('.js-tabs a').click(function(e) {
        e.preventDefault();
        $('.js-tabs a').each(function(i, item) {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });

    // Area maps *
    var checkDiv = document.querySelector('.table-block');
    if (checkDiv != null) {
        var show = $('.table-block');
        var showTop = show.offset().top;
        var newMap = document.querySelector('.new-map');
        $(window).bind('scroll', function() {
            var windowTop = $(this).scrollTop();
            if (windowTop > showTop) {
                $(window).unbind('scroll');
                newMap.setAttribute("src", "https://api-maps.yandex.ru/2.1/?lang=ru_RU");
                setTimeout(function() {
                    ymaps.ready(init);

                    function init() {

                        var center = [55.763290, 37.654817];
                        var myMap = new ymaps.Map('mapMain', {
                            center: center,
                            controls: [],
                            zoom: 16
                        }, {
                            searchControlProvider: 'yandex#search'
                        });

                        myMap.behaviors.disable('scrollZoom');

                        var myPlacemark = new ymaps.Placemark(center, {
                            // Свойства.
                            // Содержимое иконки, балуна и хинта.
                            balloonContent: 'улица Покровка, 48',
                            hintContent: 'улица Покровка, 48'
                        }, {
                            // Опции.
                            iconLayout: 'default#image',
                            iconImageHref: '../img/baloon.png',
                            iconImageSize: [136, 165]
                            // preset: 'twirl#violetIcon'
                        });

                        // myMap.controls.add('zoomControl', {
                        //     float: 'none',
                        //     position: {
                        //         right: 40,
                        //         top: 5
                        //     }
                        // });

                        myMap.geoObjects.add(myPlacemark);
                    }
                }, 500);
                return;
            }

        });
    }

});
