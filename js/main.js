$(function () {
    $('.button').click(function () {
        $('.nav__menu').toggleClass('active');
    })
    $('.button_menu').click(function () {
        $('.menu_nav').toggleClass('active');
    })
    $('.menu_nav_button').click(function () {
        $('.menu_nav').toggleClass('active');
    })
    $('.header__menu_open').click(function () {
        $('.header__menu_nav').toggleClass('active');
    })
    $('.menu__last_open').click(function () {
        $('.menu__last_nav').toggleClass('active');
    })
    $('.menu__last_close').click(function () {
        $('.menu__last_nav').toggleClass('active');
    })
    $(window).resize(function () {
        if ($(window).width() < 600) {
            $('.nav__menu').removeClass('active');
            $('.menu_nav').removeClass('active');
            $('.header__menu_nav').removeClass('active');
            $('.menu__last_nav').removeClass('active')
        }
    })

})