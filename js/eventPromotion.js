$(function(){
    $('.event_slide').slick({
        slide: 'div',
        dots: true,
        slidesToShow : 1,
        slidesToScroll : 1,
        speed : 500,
        draggable : false,
        infinite : false,
    });
});

TweenMax.to(".event_info", 1, {
    top: 0,
    opacity: 1
});