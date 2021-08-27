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

// var didScroll; // 스크롤시에 사용자가 스크롤했다는 것을 알림 
// $(window).scroll(function(event){ 
//     didScroll = true;
//     }); 
    
// // hasScrolled()를 실행하고 didScroll 상태를 재설정 
// setInterval(function() {
//     if (didScroll) {
//             hasScrolled();
//             didScroll = false;
//         } }, 250);

// function hasScrolled() { // 동작을 구현
//     var lastScrollTop = 0; 
//     var delta = 100; // 동작의 구현이 시작되는 위치 
//     var navbarHeight = $('.sub_header').outerHeight(); // 영향을 받을 요소를 선택

//     // 접근하기 쉽게 현재 스크롤의 위치를 저장한다. 
//     var st = $(this).scrollTop(); 
//     // 설정한 delta 값보다 더 스크롤되었는지를 확인한다. 
//     if (Math.abs(lastScrollTop - st) <= delta) return; 
//     if (st > lastScrollTop && st > navbarHeight){ 
//         // Scroll Down
//             $('.sub_header').addClass('nav-up'); 
//         } else { 
//             // Scroll Up 
//             if(st + $(window).height() <= $(document).height()) {
//                     $('.sub_header').removeClass('nav-up');
//                     } 
//                 }
//                  // lastScrollTop 에 현재 스크롤위치를 지정한다. 
//                 lastScrollTop = st;
// }

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 120;
 
$(window).scroll(function(event){
  didScroll = true;
 
});
 
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 150); 
 
function hasScrolled() {
  var st = $(this).scrollTop();
  if(Math.abs(lastScrollTop - st) <= delta)
    return;
  if (st > lastScrollTop && st > navbarHeight){
    $('.sub_header').addClass('nav-up');
  } else {
    if(st + $(window).height() < $(document).height()) {
      $('.sub_header').removeClass('nav-up');
    }
  }
 
  lastScrollTop = st;
}
