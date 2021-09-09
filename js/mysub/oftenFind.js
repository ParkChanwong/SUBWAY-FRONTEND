$(document).ready(function () {
    initTmap();
});

// 페이지가 로딩이 된 후 호출하는 함수입니다.
function initTmap() {
    var map = new Tmapv2.Map("map_div", { // 지도가 생성될 div
        width: "100%", // 지도의 넓이
        height: "260px", // 지도의 높이
        zoom: 15,
        zoomControl: false
    });
}