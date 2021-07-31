function groupMenu() {//써브웨이 이용방법 : 단체메뉴 주문하기 slider
	$('.group_menu_wrapper .visual_slider_content').bxSlider({
		mode: 'fade',
		speed: 100,
		auto: true,
		autoStart: true,
		stopAutoOnClick: true,
		pause: 3000,
		onSliderLoad: function () {
			$('.group_menu_wrapper .visual_slider_wrapper .slider').css('opacity', '1')
		},
		pagerCustom: '.bx-pager'
	});
}