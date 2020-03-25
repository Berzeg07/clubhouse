$(document).ready(function() {

    $(function($) {
        $('tbody tr[data-href]').addClass('clickable').click(function() {
            window.location = $(this).attr('data-href');
        });
    });

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

    // new WOW().init();

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    })
    wow.init();

    $('.burger').click(function() {
        $(this).toggleClass('is-active');
        $('.dropdown-menu').toggleClass('is-active');
        $('body').toggleClass('overflow-hidden');
    });

    var tabSlider = new Swiper('.tab-slider', {
        slidesPerView: 2,
        simulateTouch: false,
        spaceBetween: 20,

        breakpoints: {
            1365: {
                slidesPerView: 1,
                spaceBetweenSlides: 0
            }
        },
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

    var mainSlider = new Swiper('.arh-slider', {
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

    $(".plan-btn").click(function(e) {
        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("active")) {
            $(".plan-mob__item").removeClass('active');
            $(".plan-btn").removeClass("active");
        }

        $this.toggleClass("active");
        $this.next().addClass('active');
    });

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

    $('#tabsAbout a').click(function(e) {
        e.preventDefault();
        $('#tabsAbout a').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('href');
        $('.about-page__tab-block').not(tab).removeClass('show');
        $(tab).addClass('show');
    });
    if (window.matchMedia("(min-width: 992px)").matches) {
        $('#tabsAbout a:first').click();
    }

    // $('#tabsAbout a').click(function(e) {
    //     e.preventDefault();
    //     $('#tabsAbout a').removeClass('is-active');
    //     $(this).addClass('is-active');
    //     var tab = $(this).attr('href');
    //     $('.about-page__tab-block').not(tab).css({
    //         'display': 'none'
    //     });
    //     $(tab).fadeIn(400);
    // });

    // $('.js-tabs a').click(function(e) {
    //     e.preventDefault();
    //     $('.js-tabs a').each(function(i, item) {
    //         $(this).removeClass('active');
    //     });
    //     $(this).addClass('active');
    // });

    $('.js-tabs a').click(function(e) {
        e.preventDefault();
        $('.js-tabs a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        console.log(tab);
        $('.ap-tabs').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.js-tabs a:first').click();



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
        $('.js-modal').css('display', 'none');
    });

    $(".apartament-modal .phone, .inp_phone, .mortgage-form .phone").mask("+7(999)999-99-99");

    $('.js-modal-close').click(function(e) {
        e.preventDefault();
        $('.apartament-modal').fadeOut();
        $('.js-modal').css('display', 'block');
    });



    function stickyTop() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 96) {
                $('.header__bottom').addClass('stickytop');
                $('.header').addClass('header-height-fixed');
                $('.header__logo, .phone-header').addClass('sticky-el');

            } else {
                $('.header__bottom').removeClass('stickytop');
                $('.header').removeClass('header-height-fixed');
                $('.header__logo, .phone-header').removeClass('sticky-el');

            }
        });
    }

    stickyTop();
    var layoutSlider = new Swiper('.layout-slider', {
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

    var layoutSlider = new Swiper('.layout-slider', {
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

    $(window).resize(function() {
        if (window.matchMedia("(min-width: 1280px)").matches) {
            $('.about-page__tab-link a:first').click();
        }
    });

    var checkDiv = document.querySelector('#mapMain');

    if (checkDiv != null) {

        ymaps.ready(init);

        function init() {

            var center = [55.763240, 37.651825];
            var myMap = new ymaps.Map('mapMain', {
                center: center,
                controls: [],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            });

            myMap.behaviors.disable('scrollZoom');

            var myPlacemark = new ymaps.Placemark(center, {
                balloonContent: 'Москва, ул. Покровка, 43, стр 8',
                hintContent: 'Москва, ул. Покровка, 43, стр 8'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/baloon.png',
                iconImageSize: [136, 165]
            });

            myMap.geoObjects.add(myPlacemark);
        }
    }

    // var checkDiv = document.querySelector('.table-block');
    // if (checkDiv != null) {
    //     var show = $('.table-block');
    //     var showTop = show.offset().top;
    //     var newMap = document.querySelector('.new-map');
    //     $(window).bind('scroll', function() {
    //         var windowTop = $(this).scrollTop();
    //         if (windowTop > showTop) {
    //             // $(window).unbind('scroll');
    //
    //             newMap.setAttribute("src", "https://api-maps.yandex.ru/2.1/?lang=ru_RU");
    //             setTimeout(function() {
    //                 ymaps.ready(init);
    //
    //                 function init() {
    //
    //                     var center = [55.763290, 37.654817];
    //                     var myMap = new ymaps.Map('mapMain', {
    //                         center: center,
    //                         controls: [],
    //                         zoom: 16
    //                     }, {
    //                         searchControlProvider: 'yandex#search'
    //                     });
    //
    //                     myMap.behaviors.disable('scrollZoom');
    //
    //                     var myPlacemark = new ymaps.Placemark(center, {
    //                         balloonContent: 'улица Покровка, 48',
    //                         hintContent: 'улица Покровка, 48'
    //                     }, {
    //                         iconLayout: 'default#image',
    //                         iconImageHref: 'img/baloon.png',
    //                         iconImageSize: [136, 165]
    //                     });
    //
    //                     myMap.geoObjects.add(myPlacemark);
    //                 }
    //             }, 500);
    //             return;
    //         }
    //     });
    // }

    var scrollSliser = undefined;

    function initAction() {
        var screenWidth = $(window).width();
        if (screenWidth > 1279 && scrollSliser == undefined) {
            var scrollSliser = new Swiper('.scrollbar-slider', {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                mousewheel: true,
            });
        } else if (screenWidth < 1280 && scrollSliser != undefined) {
            scrollSliser.destroy();
            scrollSliser = undefined;
            $('.scrollbar-slider__wrapper').removeAttr('style');
            $('.scrollbar-slider__slide').removeAttr('style');
        }
    }

    initAction();

    $(window).on('resize', function() {
        initAction();
    });



});
