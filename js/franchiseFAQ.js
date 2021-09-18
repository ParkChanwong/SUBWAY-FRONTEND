$(document).ready(function() {
    let stickyOffset = $('.content').offset();
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

    $('.faq_content li .question').on('click', (e) => {
        if($(e.currentTarget).parent().hasClass('open')) {
            $(e.currentTarget).parent().removeClass('open');
            $(e.currentTarget).next().slideUp(300);
        } else {
            $(e.currentTarget).parent().addClass('open');
            $(e.currentTarget).next().slideDown(300);
        }
    });
});