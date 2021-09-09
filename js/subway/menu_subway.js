$(document).ready(function () {
	gnb();//gnb
	if ($('.sub_header').length > 0) {
		bodyScroll();//body scroll
	}

	if ($('div').hasClass('store_list')) {
		$('.store_list ul').mCustomScrollbar();
	}

	if ($('div').hasClass('scroll_wrap')) {
		$('.scroll_wrap').mCustomScrollbar({
			scrollInertia: 800,
		});
	}

	// if(location.hostname.indexOf("www") < 0 && location.hostname.indexOf("local") < 0) location.href = "https://www.subway.co.kr" + location.pathname;
})

function bodyScroll() {//body scroll
	var header = $('#header');
	var subHeader = $('.sub_header')
	var subLogo = subHeader.find('.logo')
	var subTop = subHeader.find('.top')
	var spd = 0.5;
	var eft = Power3.easeOut;
	var subHeaderTop = subHeader.offset().top

	scrollBarTo();
	$(window).on('scroll touchmove', function () {//window scrollto
		scrollBarTo();
	})

	function scrollBarTo() {
		if ($(window).scrollTop() > subHeaderTop) {
			TweenLite.to(subHeader.css('position', 'fixed'), 0.5, { ease: Power4.easeOut, backgroundColor: '#fff' })
			subHeader.addClass('fixed');
			TweenLite.to(subLogo, spd, { ease: eft, opacity: 1 })
			TweenLite.to(subTop, spd, { ease: eft, opacity: 1 })
		} else {
			TweenLite.to(subHeader.css('position', 'absolute'), 0.5, { ease: Power4.easeOut, backgroundColor: 'transparent' })
			subHeader.removeClass('fixed');
			TweenLite.to(subLogo, spd, { ease: eft, opacity: 0 })
			TweenLite.to(subTop, spd, { ease: eft, opacity: 0 })
		}
	}

	subTop.on('click', function () {//top button
		$('html,body').stop(true, false).animate({
			scrollTop: 0
		}, 1000, 'easeInOutQuint')
		return false;
	})
}


function gnb() {//gnb
	var spd = 0.5,
		eft = Power4.easeOut;
	$('#gnb >ul >li >.dp1').on('mouseenter', function () {
		TweenLite.to($('#header').css('overflow', 'inherit').addClass('open'), spd, { ease: eft, height: 425 })
		TweenLite.to($('.dp2'), spd, { ease: eft, top: 0, opacity: 1 })
	})

	$('#gnb').on('mouseleave', function () {
		TweenLite.to($('#header').css('overflow', 'hidden'), spd, {
			ease: eft, height: 165, onComplete: function () {
				$('#header').removeClass('open')
			}
		})
		TweenLite.to($('.dp2'), spd, { ease: eft, top: -20, opacity: 0 })
	});
}

$(document).ready(function() {
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

$(document).ready(function(){
	AOS.init({
		once:true,
		duration:600,
		offset: 200,
		easing: 'ease-out-ease'
	});
});


