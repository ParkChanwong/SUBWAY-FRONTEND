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
