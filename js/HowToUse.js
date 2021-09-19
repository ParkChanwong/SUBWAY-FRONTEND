$(document).ready(function(){
    $('.visual_slider_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade:  true,
        asNavFor: '.bx-pager'
    });
    $('.bx-pager').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.visual_slider_content',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        // centerPadding: '40px',
        arrows: false,
    });


var pager = document.getElementsByClassName("pager");

function handleClick(event) {
  if (event.target.classList[1] === "active") {
    event.target.classList.remove("active");
  } else {
    for (var i = 0; i < pager.length; i++) {
        pager[i].classList.remove("active");
    }
    event.target.classList.add("active");
  }
}

function init() {
  for (var i = 0; i < pager.length; i++) {
    pager[i].addEventListener("click", handleClick);
  }
}

init();

let stickyOffset = $('.sub_header').offset();
    $(window).scroll(function() {
        if($(document).scrollTop() > stickyOffset.top) {
            $('.content .logo').fadeIn();
            $('.content .top').fadeIn();
        } else {
            $('.content .logo').fadeOut();
            $('.content .top').fadeOut();
        }
    });

    $(".content .top").click(function() {
        $('html').animate({ scrollTop : 0 }, 400);
        return false;
    });


});



