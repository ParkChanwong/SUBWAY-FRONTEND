$(document).ready(function() {
    $(".categori_li").mouseover(function() {
        $(".categori_li").children(".drop_menu").stop().slideDown(350);
        $(".bg_w").stop().slideDown(350);
        $(this).children("p").css("color", "#009223");
    });
    
    $(".drop_li").mouseover(function() {
        $(this).children("a").css("color", "#009223").css("text-decoration", "underline");
    });
    
    $(".categori_li").mouseleave(function() {
        $(".categori_li").children(".drop_menu").stop().slideUp(350);
        $(".bg_w").stop().slideUp(350);
        $(this).children("p").css("color", "#666666");
    });

    $(".drop_li").mouseleave(function() {
        $(this).children("a").css("color", "#666666").css("text-decoration", "none");
    });


    $('.imglist').slick({
        slide: 'li',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots : "true",
        dotsClass : "slick-dots",
    });
});