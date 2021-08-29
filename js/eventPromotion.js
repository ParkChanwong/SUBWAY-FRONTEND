$(function(){
    $('.event_slide').slick({
        slide: 'div',
        dots: true,
        slidesToShow : 1,
        slidesToScroll : 1,
        speed : 500,
        draggable : false,
        infinite : false,
    });

    TweenMax.to(".event_info", 0.3, {
        top: 0,
        opacity: 1,
        delay:0.5
    });
});


$(function(){	
		function m_navi_set_on(){
			$(".eventPromotion_cate_content").addClass("navi_scroll");
		}
		function m_navi_set_off(){
			$(".eventPromotion_cate_content").removeClass("navi_scroll");
		}
		
		if($(window).scrollTop() < 49){
			m_navi_set_on();
		}
		else{
			m_navi_set_off();
		}
        
});