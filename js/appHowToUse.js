function fastSub(){
    $('#fast_sub').css("display", "block");
    $('#home_sub').css("display", "none");
    $('#group').css("display", "none");
    $('.tab_fast').addClass('active');
    $('.tab_home').removeClass('active');
    $('.tab_group').removeClass('active');
}

function homeSub(){
    $('#fast_sub').css("display", "none");
    $('#home_sub').css("display", "block");
    $('#group').css("display", "none");
    $('.tab_fast').removeClass('active');
    $('.tab_home').addClass('active');
    $('.tab_group').removeClass('active');
}

function groupSub(){
    $('#fast_sub').css("display", "none");
    $('#home_sub').css("display", "none");
    $('#group').css("display", "block");
    $('.tab_fast').removeClass('active');
    $('.tab_home').removeClass('active');
    $('.tab_group').addClass('active');
}

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