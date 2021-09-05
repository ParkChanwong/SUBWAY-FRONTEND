$(document).ready(function(){
    $('.card_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card_slide_list'
    });
    $('.card_slide_list').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.card_slide',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        // centerPadding: '40px',
        arrows: true,
    });
});

$(document).on('click', '.gift_money ul li', (e) => {
    $('.gift_money ul li').removeClass('check');
    $(e.currentTarget).addClass('check');
});

$(document).on('click', '.send_method ul li', (e) => {
    $('.send_method ul li').removeClass('check');
    $(e.currentTarget).addClass('check');
});

function dateReserve() {// e-gift카드 예약 전송 날짜 선택
	$.datepicker.setDefaults({//date picker setting
		closeText: "닫기",
		prevText: "이전달",
		nextText: "다음달",
		buttonImageOnly: true,
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		showOn: "both",
		buttonImage: "../../images/common/icon_select_arr.png",
		yearSuffix: ".",
		currentText: "오늘",
		monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
		monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
		dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
		dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
		weekHeader: "주",
		dateFormat: "yy. m. d",
	});

	$("#reserve_date").datepicker({minDate: 0});
}