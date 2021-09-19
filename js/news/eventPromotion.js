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

    $(window).scroll(function(e) {
        if($(window).scrollTop() < 49){
            m_navi_set_on();
        }
        else{
            m_navi_set_off();
        }
    });
    if($(".eventPromotion_cate_wrap").hasClass("navi_scroll")){
        $(".tab_logo").hide();
        $(".tab_top").hide();
    }else{
        $(".tab_logo").fadeIn();
        $(".eventPromotion_cate_wrap").css({
            "background-color": "white"
        });
        $(".tab_top").fadeIn();
        $(".eventPromotion_cate_wrap").css({
            "background-color": "white"
        });
    }
});

$(function(){
    let sBtn = $("ul > li");
    sBtn.find("a").click(function(){
        sBtn.removeClass("active");
        $(this).parent().addClass("active");
    });
});
