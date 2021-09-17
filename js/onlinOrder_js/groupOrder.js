$(document).ready(function () {
    initTmap();

    $(".i_star").click(function(){
        if($(".i_star").hasClass("active")==false){
            alert("자주찾는 매장으로 등록 완료되었습니다.");
            $(".i_star").css({
                "background-color": "#ffc300"
            });
            $(this).addClass("active");
        }else{
            if(confirm("자주 찾는 매장에서 삭제하시겠습니까?")==true){
                $(".i_star").removeClass("active");
                $(".i_star").css({
                    "background-color": "#dddddd"
                });
            }else{
            }
        }
    });

    $(".store_status").click(function(event){
        $(".popup_back").show();
        $(".popup_back").css({
            "display": "flex"
        });
    });
    $(".btn_close").click(function(event){
        $(".popup_back").hide();
    })
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