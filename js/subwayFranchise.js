$(document).ready(function() {
    let stickyOffset = $('.content_wrap').offset();
    $(window).scroll(function() {
        if($(document).scrollTop() > stickyOffset.top) {
            $('.content .logo').fadeIn();
            $('.content .top').fadeIn();
        } else {
            $('.content .logo').fadeOut();
            $('.content .top').fadeOut();
        }
    });

    $(".content .top").click(function() {
        $('html').animate({ scrollTop : 0 }, 400);
        return false;
    });
    
    $('.store').mouseover(function() {
        $('.store').addClass('hover');
        $('.nation').removeClass('hover');
    });

    $('.nation').mouseover(function() {
        $('.nation').addClass('hover');
        $('.store').removeClass('hover');
    });
});
