jQuery(document).ready(function () {
    $('.js-open-nav').click(function () {
        if ($('.js-nav').hasClass('nav--small')) {
            $('.js-logo').removeClass('logo--imago');
            $('.js-nav').removeClass('nav--small');
        } else {
            $('.js-nav').addClass('nav--small');
            $('.js-logo').addClass('logo--imago');
        }

        $(this).toggleClass('nav__button--active');

    });
});