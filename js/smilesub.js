TweenMax.to('#title', 1, { ease: Power2.easeInOut, top: 0, opacity: 1 });
TweenMax.to('#title_text', 1, { ease: Power2.easeOut, top: 0, opacity: 1, delay: 0.3 });
TweenMax.to('.img1',1,{ease:Power3.easeOut,top:0,opacity:1,delay:0.3})
TweenMax.to('.img2',1,{ease:Power4.easeOut,left:'-=100',opacity:1,delay:0.4})

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

// 서브헤더
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 140;

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
    if(st + $(window).height() < $(document).height()+100) {
      $('.sub_header').removeClass('nav-up');
    }
  }
  lastScrollTop = st;
}

// active 클래스 부여
//prodtab
$(function(){
  var sBtn = $(".prod_tab_list > li");    //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
  sBtn.find("a").click(function(){   // sBtn에 속해 있는  a 찾아 클릭 하면.
   sBtn.removeClass("active");     // sBtn 속에 (active) 클래스를 삭제 한다.
   $(this).parent().addClass("active"); // 클릭한 a에 (active)클래스를 넣는다.
  })
})
//menu_list
$(function(){
  var sBtn = $(".menu_list > li");    //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
  sBtn.find("a").click(function(){   // sBtn에 속해 있는  a 찾아 클릭 하면.
   sBtn.removeClass("active");     // sBtn 속에 (active) 클래스를 삭제 한다.
   $(this).parent().addClass("active"); // 클릭한 a에 (active)클래스를 넣는다.

  })
})

