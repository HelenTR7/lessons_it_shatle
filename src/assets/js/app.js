'use strict';

// WINDOW WIDTH DETECT
let currentWidth = $(window).width();
$(window).on('resize', function () {
    currentWidth = $(window).width();
});

//App
const Application = {
    init: function() {
        this.events();
    },
    events: function() {
        !window.reinit && (window.reinit = {});

        //main events
        this.eventList.lazyImgs();
        this.eventList.svgPolifill();
        this.eventList.mask();

        //app events
        //this.eventList.sliders();
        this.eventList.nav();
    },
    eventList: {
        nav: function(){
            let openBtn = $('.burger');
            openBtn.on('click touch', function () {
                openBtn.addClass('active');
                $('.nav').addClass('active');
                $('body').addClass('fixed');
            });
            $('.nav__close').on('click touch', function () {
                openBtn.removeClass('active');
                $('.nav').removeClass('active');
                $('body').removeClass('fixed');
            });
            $(document).on('click touch', function(event){
                let _target = $(event.target);
                if(_target.hasClass('burger') || 
                _target.closest('.nav').length) {
                    return;
                } else {
                    openBtn.removeClass('active');
                    $('.nav').removeClass('active');
                    $('body').removeClass('fixed'); 
                }
            });

            // const logo = document.querySelectorAll("#logo path");
            
            // for (let i = 0; i < logo.length; i++) {
            //     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
            // }
        },
        lazyImgs: function(){

            let callback_loaded = function(el) {
                const $img = $(el),
                      $img_wrap = $img.closest('.lazy-img-wrap');
                $img_wrap.addClass('loaded');
            };

            new LazyLoad({
                elements_selector: ".lazy-img",
                threshold: 0,
                callback_loaded: callback_loaded,
            });
        },
        svgPolifill: function () {
            // svg sprites
            svg4everybody && svg4everybody();
        },
        mask: function() {
            $("[type=tel]").inputmask({
                mask: '+7 (999) 99-99-99',
                "clearIncomplete": false,
                "showMaskOnHover": false,
                "showMaskOnFocus": true,
                "clearMaskOnLostFocus": true
            });
        },

        sliders: function(){
            $('.js-swiper-banner').each(function(i){
                let bannerSwiper = new Swiper($('.js-swiper-banner .swiper-container')[i], {
                    // Disable preloading of all images
                    //preloadImages: false,
                    // Enable lazy loading
                    //lazy: {
                    //    loadPrevNext: true,
                    //},
                    autoplay: {
                        delay: 5000,
                    },
                    loop: true,
                    spaceBetween: 15,

                    // Navigation arrows
                    navigation: {
                        nextEl: $('.js-swiper-banner .swiper-button-next')[i],
                        prevEl: $('.js-swiper-banner .swiper-button-prev')[i],
                    },
                });
            });
            
        },
    }
};
$(function () {
    Application.init();
});
