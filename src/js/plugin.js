;(function ($) {
    //dropdown
    var dropdownWrap = $('.dropdown-wrap');

    dropdownWrap.on('click', function (e) {
        e.preventDefault();
        var target = $(this).find('.dropdown-menu');
        target.slideToggle();
        $(this).toggleClass('open');
    })


    //sidebar menu
    var menuBtn = $('.menu-btn');
    var body = $('body');
    var mobileClass = '_mobileSlider';
    var openInMobile = '_openInMobile';
    var mobileBreakPoint = 1200;

    menuBtn.on('click', function () {
        var width = $(window).width();
        body.toggleClass(mobileClass);

        if(width < mobileBreakPoint){
            body.toggleClass(openInMobile);
        }

    })

    $(window).on('resize load', function (e) {
        var width = $(this).width();



        if(width < mobileBreakPoint && !body.hasClass(openInMobile)){
            body.addClass(mobileClass);
        }
        else if(width >= mobileBreakPoint){
            document.body.classList.remove(mobileClass);
            document.body.classList.remove(openInMobile);

            // body.removeClass(mobileClass);
            // body.removeCLass(openInMobile);
        }
    })

    //loader
    var loader = $('#loading');
    $(window).on('load', function (e) {
        loader.addClass('hide');
    })



})(jQuery);