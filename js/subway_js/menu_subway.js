$(document).ready(function() {
    let stickyOffset = $('.sub_header').offset();
    $(window).scroll(function() {
        if($(document).scrollTop() > stickyOffset.top) {
            $('.content .logo').fadeIn();
            $('.content .top').fadeIn();
        } else {
			$('.content .logo').css('opacity', 0);
            $('.content .top').hide();
            $('.content .logo').fadeOut();
            $('.content .top').fadeOut();
        }
    });

    $(".content .top").click(function() {
        $('html').animate({ scrollTop : 0 }, 400);
        return false;
    });
});

$(document).ready(function() { // artistSupport 슬라이더
	$('.career_path ol li .view p').on('mouseenter', function () {
		$(this).parent().next('.layer_view').css('display', 'table').stop(true, false).animate({
			'top': '36px'
		}, 500, 'easeOutBack')
	})

	$('.career_path ol li .layer_view').on('mouseleave', function () {
		$(this).stop(true, false).attr('style', '')
	})

	$('.slider_content .bxslider').bxSlider({
		slideWidth: 770,
		maxSlides: 3,
		moveSlides: 1,
		slideMargin: 130,
		touchEnabled: false,
		onSliderLoad: function (currentIndex) {
			$('.slider_content ul li').eq(currentIndex + 3).find('.img').css('opacity', '1')
			$('.slider_content ul li').eq(currentIndex + 3).find('.info').css({ 'opacity': '1', 'top': '0' })
		},
		onSlideBefore: function ($slideElement, oldIndex, newIndex) {
			$('.slider_content ul li div').attr('style', '')
			$('.slider_content ul li').eq(oldIndex + 3).removeClass('view')
			$('.slider_content ul li').eq(newIndex + 3).addClass('view')
		}
	});
});

// subwayhistory jquery
$(document).ready(function(){
	AOS.init({
		once:true,
		duration:600,
		offset: 200,
		easing: 'ease-out-ease'
	});
});


