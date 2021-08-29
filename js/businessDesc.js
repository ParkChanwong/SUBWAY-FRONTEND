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

    $('.branch_region ul li a').on('click', (e) => {
        $('.branch_region ul li').removeClass('active');
        $(e.currentTarget).parent().addClass('active');
        if($(e.currentTarget).attr('href') == '#map1') {
            $('#map1').addClass('active');
            $('#map2').removeClass('active');
        } else {
            $('#map2').addClass('active');
            $('#map1').removeClass('active');
        }

        return false;
    });
});