TweenMax.to('#title', 1, { ease: Power2.easeInOut, top: 0, opacity: 1 });
TweenMax.to('#title_text', 1, { ease: Power2.easeOut, top: 0, opacity: 1, delay: 0.3 });
TweenMax.to('.img', 1, { ease: Power4.easeOut, top: 0, opacity: 1, delay: 0.3 });

function plusClick(){
    let btn = document.getElementById('plus_btn');
    if(btn.className == 'open'){
        $('.category_list').css("display", "none");
        $('#plus_btn').removeClass('open');
    }else{
        $('.category_list').css("display", "inline-block");
        $('#plus_btn').addClass('open');
    }
}

function addActive(){
    
}

function contryPopup(){
    $('.popUp_back').css("display", "block");
    $('.contry_popUp').css("display", "block");
}
function allergyPopup(){
    $('.popUp_back').css("display", "block");
    $('.allergy_popUp').css("display", "block");
}

function closePopup(){
    $('.popUp_back').css("display", "none");
    $('.contry_popUp').css("display", "none");
    $('.allergy_popUp').css("display", "none");
}



// $(document).ready(function () {
// 	gnb();//gnb
// 	if ($('.sub_header').length > 0) {
// 		bodyScroll();//body scroll
// 	}

// 	if ($('div').hasClass('store_list')) {
// 		$('.store_list ul').mCustomScrollbar();
// 	}

// 	if ($('div').hasClass('scroll_wrap')) {
// 		$('.scroll_wrap').mCustomScrollbar({
// 			scrollInertia: 800,
// 		});
// 	}
// })

// function bodyScroll() {//body scroll
// 	var subHeader = $('.sub_header')
// 	var subLogo = subHeader.find('.logo')
// 	var subTop = subHeader.find('.top')
// 	var spd = 0.5;
// 	var eft = Power3.easeOut;
// 	var subHeaderTop = subHeader.offset().top

// 	scrollBarTo();
// 	$(window).on('scroll touchmove', function () {//window scrollto
// 		scrollBarTo();
// 	})

// 	function scrollBarTo() {
// 		if ($(window).scrollTop() > subHeaderTop) {
// 			TweenLite.to(subHeader.css('position', 'fixed'), 0.5, { ease: Power4.easeOut, backgroundColor: '#fff' })
// 			subHeader.addClass('fixed');
// 			TweenLite.to(subLogo, spd, { ease: eft, opacity: 1 })
// 			TweenLite.to(subTop, spd, { ease: eft, opacity: 1 })
// 		} else {
// 			TweenLite.to(subHeader.css('position', 'absolute'), 0.5, { ease: Power4.easeOut, backgroundColor: 'transparent' })
// 			subHeader.removeClass('fixed');
// 			TweenLite.to(subLogo, spd, { ease: eft, opacity: 0 })
// 			TweenLite.to(subTop, spd, { ease: eft, opacity: 0 })
// 		}
// 	}

// 	subTop.on('click', function () {//top button
// 		$('html,body').stop(true, false).animate({
// 			scrollTop: 0
// 		}, 1000, 'easeInOutQuint')
// 		return false;
// 	})
// }
