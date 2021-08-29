/*$(document).ready(function(){
    $('.slider_wrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});
*/

function storeOrder(){
    $('#store_order').css("display", "block");
    $('#order_tip').css("display", "none");
    $('.tab_storeOrder').addClass('active');
    $('.tab_orderTip').removeClass('active');
}

function orderTip(){
    $('#store_order').css("display", "none");
    $('#order_tip').css("display", "block");
    $('.tab_orderTip').addClass('active');
    $('.tab_storeOrder').removeClass('active');
}

$(document).ready(function(){
  $('.center').slick({
				slide: 'div',	
				infinite : true, 	//무한 반복 옵션
				slidesToShow : 3,		// 한 화면에 보여질 컨텐츠 개수
				slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
				speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
				arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
				dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
				autoplay : true,			// 자동 스크롤 사용 여부
				autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
				pauseOnHover : true,		// 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정
				vertical : false,		// 세로 방향 슬라이드 옵션
				prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이거 버튼임 css에다가 속성 박아놈
				nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 이거 버튼임 css에다가 속성 박아
				dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
				draggable : true, 	//드래그 가능 여부
				responsive: [ // 반응형 웹 구현 옵션
					{
						breakpoint: 960, //화면 사이즈 960px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:3
						}
					},
					{
						breakpoint: 768, //화면 사이즈 768px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:2
						}
					}
				]

			});
});
