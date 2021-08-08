$(document).ready(function(){
    $('.card_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card_slide_list'
    });
    $('.card_slide_list').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.card_slide',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        // centerPadding: '40px',
        arrows: true,
    });
});

$(document).on('click', '.gift_money ul li', (e) => {
    $('.gift_money ul li').removeClass('check');
    $(e.currentTarget).addClass('check');
});

$(document).on('click', '.send_method ul li', (e) => {
    $('.send_method ul li').removeClass('check');
    $(e.currentTarget).addClass('check');
});