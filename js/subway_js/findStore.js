var $jq = jQuery.noConflict();
$jq(document).ready(function() {
    $jq('.new_store_slider_wrapper').slick({
        dots: true,
        dotsClass : "slick-dots"
    });
    
    $jq('.store_slider').slick({
        dots: true,
        dotsClass : "slick-dots"
    });

    let stickyOffset = $('.sub_header').offset();
    $(window).scroll(function() {
        if($(document).scrollTop() > stickyOffset.top) {
            $('.sub_location .logo').fadeIn();
            $('.sub_location .top').fadeIn();
        } else {
            $('.sub_location .logo').fadeOut();
            $('.sub_location .top').fadeOut();
        }
    });

    $(".sub_location .top").click(function() {
        $('html').animate({ scrollTop : 0 }, 400);
        return false;
    });
});

// 페이지가 로딩이 된 후 호출하는 함수입니다.
function initTmap(){
    // map 생성
    // Tmapv2.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
    var map = new Tmapv2.Map("map_div", { // 지도가 생성될 div
        width : "100%", // 지도의 넓이
        height: "700px", // 지도의 높이
        zoom : 15,
        zoomControl : false
    });
    var marker = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(37.564901622537940,126.97892302169841), //Marker의 중심좌표 설정.
        map: map //Marker가 표시될 Map 설정..
    });

} 
