$(document).ready(function(){
    $('.visual_slider_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.bx-pager'
    });
    $('.bx-pager').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.visual_slider_content',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        // centerPadding: '40px',
        arrows: false,
    });
});