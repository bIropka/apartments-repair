// placeholder IE<=9
$('input, textarea').placeholder();

/* init */
$( document ).ready(function() {
    setInterval(function(){
        $('.slider').animate({opacity: 1});
    }, 500)
});

//  ----- new js -----


$('.decor-slider__slider').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.main__slider').slick({
    infinite: false,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
});


$( document ).ready(function() {
    $('.step--1__slider').slick({
        infinite: false,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".step--1__selection__item").click(function(e){
        e.preventDefault();
        var slideIndex = $(this).index()-1;
        $( ".step--1__slider" ).slick('slickGoTo', parseInt(slideIndex));
        $( ".step--1__selection__item").removeClass('active');
        $(this).addClass('active');
    });
});




$( document ).ready(function() {
    $('.bathroom-step__slider').slick({
        infinite: false,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".bathroom-step__slider-dot").click(function(e){
        e.preventDefault();
        var slideIndex = $(this).index();
        $( ".bathroom-step__slider" ).slick('slickGoTo', parseInt(slideIndex));
        $( ".bathroom-step__slider-dot").removeClass('active');
        $(this).addClass('active');
    });
});


$( document ).ready(function() {
    $('.bathroom-step__slider-big').slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


$( document ).ready(function() {
    $(".bathroom-step__size button").click(function(){
        $( ".bathroom-step__size button").removeClass('active');
        $(this).addClass('active');
    });
});

$('.header__mobile-menu').on("click", function (event, slick, direction) {
    $('.header__menu').toggle();
});


$( document ).ready(function() {
    $(".step--1__small-item").on("click", function(e){
        e.preventDefault();
        var tabIndex = $(this).index();
        $(".step--1__small-item").addClass('active').eq(tabIndex).removeClass('active');
        $(".step--1__big-item").removeClass('active').eq(tabIndex).addClass('active');
    });
});

$( document ).ready(function() {

    $('.style-tabs-control').click(function() {

        if (!$(this).hasClass('active')) {
            var items = $(this).parents('.style-tabs-wrap').find('.style-tabs-item');
            var index = $(this).index();
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            items.fadeOut(0);
            items.eq(index).fadeIn(500);
        }

    });

    $('.tab-inner-control').click(function() {

        if (!$(this).hasClass('active')) {
            var items = $(this).parents('.tab-inner').find('.tab-inner-item');
            var index = $(this).index();
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            items.fadeOut(0);
            items.eq(index).fadeIn(200);
        }

    });

});

$('.style-main-slider-inner-1').slick({
    dots: true,
    infinite: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                dots: false
            }
        }
    ]
});
$('.style-main-slider-inner-2').slick({
    infinite: false,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                dots: false
            }
        }
    ]
});
$('.style-main-slider-inner-3').slick({
    infinite: false,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                dots: false
            }
        }
    ]
});
$(".style-main-slider-control").click(function(){
    if(!$(this).hasClass('active')) {
        var index = $(this).index() - 1;
        var items = $(".style-main-slider .slider-wrap");
        var dots = $(".style-main-slider-control");
        dots.removeClass('active');
        items.removeClass('active');
        items.eq(index).addClass('active');
        $(this).addClass('active');

        var innerControls = $('.tab-inner-controls');
        for (var i = 0; i < innerControls.length; i++) {
            var controls = $(innerControls[i]).find('.tab-inner-control');
            controls.removeClass('active');
            controls.eq(index).addClass('active');
            $(innerControls[i]).siblings('.tab-inner-items').find('.tab-inner-item').fadeOut(0);
            $(innerControls[i]).siblings('.tab-inner-items').find('.tab-inner-item').eq(index).fadeIn(200);
        }
    }
});

$(".qa ul li").on("click", function () {
    $(".qa ul li").removeClass('active');
    $(this).addClass('active');
});


$(".calculator-filter__item h3").on("click", function () {
    $(this).toggleClass('close');
    $(this).next().toggleClass('active');
});


$('.calculator-slider').slick({
    infinite: false,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
});


$(".calculator-form__check span").on( "click", function(){
    // e.preventDefault();
    // var tabIndex = $(this).index()-1;
    $(".calculator-form__check span").removeClass('active');
    $(this).addClass('active');
});


$("input[type='radio'], input[type='checkbox']").ionCheckRadio();

$(".style-check").each(function(){
    var $check = $(this);
    var $checkItem = $(".style-check__item", $check);
    $checkItem.on( "click", function(e){
        e.preventDefault();
        var tabIndex = $(this).index();
        $(".style-check__item", $check).removeClass('active').eq(tabIndex).addClass('active');
    });
});
