$(document).ready(function() {
    var breadLength = $(".popup_back .breadLength");
    var breadSelect = $(".popup_back .breadSelect");
    var breadWarming = $(".popup_back .breadWarming");
    var cheeseSelect = $(".popup_back .cheeseSelect");
    var vegeSelect = $(".popup_back .vegeSelect");
    var sauceSelect = $(".popup_back .sauceSelect");
    var toppingSelect = $(".popup_back .toppingSelect");
    var doubleAdd = $(".popup_back .doubleAdd");
    var setSelect = $(".popup_back .setSelect");

    $('.btn_area .order_btn').click(function() {
        breadLength.show();
    });
    
    $('.popup_back .breadLength .bgc_point').click(function() {
        breadLength.hide();
        breadSelect.show();
    });

    $('.popup_back .breadLength .bgc_white').click(function() {
        breadLength.hide();
        //주문 시작하기 페이지로
    });

    $('.popup_back .breadLength .btn_close').click(function() {
        breadLength.hide();
        //주문 시작하기 페이지로
    });


    $('.popup_back .breadSelect .bgc_point').click(function() {
        breadSelect.hide();
        breadWarming.show();
    });

    $('.popup_back .breadSelect .bgc_white').click(function() {
        breadSelect.hide();
        breadLength.show();
    });

    $('.popup_back .breadSelect .btn_close').click(function() {
        breadSelect.hide();
        breadLength.show();
        breadLength.hide();
    });
    

    $('.popup_back .breadWarming .bgc_point').click(function() {
        breadWarming.hide();
        cheeseSelect.show();
    });

    $('.popup_back .breadWarming .bgc_white').click(function() {
        breadWarming.hide();
        breadSelect.show();
    });

    $('.popup_back .breadWarming .btn_close').click(function() {
        breadWarming.hide();
        breadLength.show();
        breadLength.hide();
    });


    $('.popup_back .cheeseSelect .bgc_point').click(function() {
        cheeseSelect.hide();
        vegeSelect.show();
    });

    $('.popup_back .cheeseSelect .bgc_white').click(function() {
        cheeseSelect.hide();
        breadWarming.show();
    });

    $('.popup_back .cheeseSelect .btn_close').click(function() {
        cheeseSelect.hide();
        breadLength.show();
        breadLength.hide();
    });


    $('.popup_back .vegeSelect .bgc_point').click(function() {
        vegeSelect.hide();
        sauceSelect.show();
    });

    $('.popup_back .vegeSelect .bgc_white').click(function() {
        vegeSelect.hide();
        cheeseSelect.show();
    });

    $('.popup_back .vegeSelect .btn_close').click(function() {
        vegeSelect.hide();
        breadLength.show();
        breadLength.hide();
    });


    $('.popup_back .sauceSelect .bgc_point').click(function() {
        sauceSelect.hide();
        toppingSelect.show();
    });

    $('.popup_back .sauceSelect .bgc_white').click(function() {
        sauceSelect.hide();
        vegeSelect.show();
    });

    $('.popup_back .sauceSelect .btn_close').click(function() {
        sauceSelect.hide();
        breadLength.show();
        breadLength.hide();
    });


    $('.popup_back .toppingSelect .bgc_point').click(function() {
        toppingSelect.hide();
        doubleAdd.show();
    });

    $('.popup_back .toppingSelect .bgc_white').click(function() {
        toppingSelect.hide();
        sauceSelect.show();
    });

    $('.popup_back .toppingSelect .btn_close').click(function() {
        toppingSelect.hide();
        breadLength.show();
        breadLength.hide();
    });


    $('.popup_back .doubleAdd .bgc_point').click(function() {
        doubleAdd.hide();
        setSelect.show();
    });

    $('.popup_back .doubleAdd .bgc_white').click(function() {
        doubleAdd.hide();
        toppingSelect.show();
    });

    $('.popup_back .doubleAdd .btn_close').click(function() {
        doubleAdd.hide();
        breadLength.show();
        breadLength.hide();
    });


    $('.popup_back .setSelect .bgc_point').click(function() {
        setSelect.hide();
        //go step3
    });

    $('.popup_back .setSelect .bgc_white').click(function() {
        setSelect.hide();
        doubleAdd.show();
    });

    $('.popup_back .setSelect .btn_close').click(function() {
        setSelect.hide();
        breadLength.show();
        breadLength.hide();
    });

});

