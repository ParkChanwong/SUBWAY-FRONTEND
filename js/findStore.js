$(document).ready(function() {
<<<<<<< Updated upstream
    $('.new_store_slider_wrapper').slick({
        dots: true,
        dotsClass : "slick-dots",
    });
<<<<<<< HEAD
    $('.store_slider').slick({
        arrows: false,
        dots: true,
        dotsClass : "slick-dots",
    });
});

// 페이지가 로딩이 된 후 호출하는 함수입니다.
function initTmap(){
    // map 생성
    // Tmapv2.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
    var map = new Tmapv2.Map("map_div", { // 지도가 생성될 div
        width : "100%", // 지도의 넓이
        height: "700px", // 지도의 높이
    });

} 
=======
    $('.new_store_slider_wrapper').slick();
});
>>>>>>> Stashed changes
=======
});
>>>>>>> parent of 5155ec3 (fix findStore, findStoreDetail html,css)
