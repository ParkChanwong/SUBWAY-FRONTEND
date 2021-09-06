TweenMax.to('#title', 1, { ease: Power2.easeInOut, top: 0, opacity: 1 });
TweenMax.to('#title_text', 1, { ease: Power2.easeOut, top: 0, opacity: 1, delay: 0.3 });
TweenMax.to('.img2', 1, { ease: Power4.easeOut, left: '-=100', opacity: 1, delay: 0.4 });
TweenMax.to('.img1', 1, { ease: Power4.easeOut, top: 0, opacity: 1, delay: 0.2 });


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
$(document).ready(function() {
  let stickyOffset = $('.sub_header').offset();
  $(window).scroll(function() {
      if($(document).scrollTop() > stickyOffset.top) {
          $('.content .logo').fadeIn();
          $('.content .top').fadeIn();
          $('.sub_header').css('background-color', '#ffffff');
          $('.menu_list li a').css('color', '#999');
      } else {
          $('.content .logo').fadeOut();
          $('.content .top').fadeOut();
          $('.sub_header').css('background-color', 'transparent');
          $('.menu_list li a').css('color', '#fff');
      }
  });

  $(".content .top").click(function() {
      $('html').animate({ scrollTop : 0 }, 400);
      return false;
  });
});

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
