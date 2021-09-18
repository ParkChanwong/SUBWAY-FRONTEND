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
        $('.branch_map_wrap').removeClass('active');

        const tabId = $(e.currentTarget).attr('href');
        if(tabId == '#map1') {
            $('#map1').addClass('active');
        } else if(tabId == '#map2') {
            $('#map2').addClass('active');
        } else {
            $('#map3').addClass('active');
        }
        return false;
    });
});