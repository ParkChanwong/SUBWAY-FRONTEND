$(document).ready(function() {
    var breadLengthButton = $('.step_info .breadLength');
    var breadSelectButton = $('.step_info .breadSelect');
    var cheeseSelectButton = $('.step_info .cheeseSelect');
    var vegeSelectButton = $('.step_info .vegeSelect');
    var sauceSelectButton = $('.step_info .sauceSelect');
    var toppingSelectButton = $('.step_info .toppingSelect');
    var doubleAddButton = $('.step_info .doubleAdd');
    var setSelectButton = $('.step_info .setSelect');

    var breadLength = $(".popup_back .breadLength");
    var breadSelect = $(".popup_back .breadSelect");
    var cheeseSelect = $(".popup_back .cheeseSelect");
    var vegeSelect = $(".popup_back .vegeSelect");
    var sauceSelect = $(".popup_back .sauceSelect");
    var toppingSelect = $(".popup_back .toppingSelect");
    var doubleAdd = $(".popup_back .doubleAdd");
    var setSelect = $(".popup_back .setSelect");

    breadLengthButton.click(function() {
        $('.popup_back').css('position', 'fixed');
        $('.popup_back').css('background-color', 'rgba(0,0,0,0.6)');
        $('.popup_back').css('left', '0');
        $('.popup_back').css('right', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('top', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('display', 'flex');
        $('.popup_back').css('justify-content', 'center');
        $('.popup_back').css('align-items', 'center');
        $('.popup_back').css('z-index', '999');
        breadLength.show();
    });

    $('.popup_back .breadLength .btn_close').click(function() {
        $('.popup_back').css('position', '');
        $('.popup_back').css('background-color', '');
        $('.popup_back').css('left', '');
        $('.popup_back').css('right', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('top', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('display', '');
        $('.popup_back').css('justify-content', '');
        $('.popup_back').css('align-items', '');
        $('.popup_back').css('z-index', '');
        breadLength.hide();
    });

    breadSelectButton.click(function() {
        $('.popup_back').css('position', 'fixed');
        $('.popup_back').css('background-color', 'rgba(0,0,0,0.6)');
        $('.popup_back').css('left', '0');
        $('.popup_back').css('right', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('top', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('display', 'flex');
        $('.popup_back').css('justify-content', 'center');
        $('.popup_back').css('align-items', 'center');
        $('.popup_back').css('z-index', '999');
        breadSelect.show();
    });

    $('.popup_back .breadSelect .btn_close').click(function() {
        $('.popup_back').css('position', '');
        $('.popup_back').css('background-color', '');
        $('.popup_back').css('left', '');
        $('.popup_back').css('right', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('top', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('display', '');
        $('.popup_back').css('justify-content', '');
        $('.popup_back').css('align-items', '');
        $('.popup_back').css('z-index', '');
        breadSelect.hide();
    });

    cheeseSelectButton.click(function() {
        $('.popup_back').css('position', 'fixed');
        $('.popup_back').css('background-color', 'rgba(0,0,0,0.6)');
        $('.popup_back').css('left', '0');
        $('.popup_back').css('right', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('top', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('display', 'flex');
        $('.popup_back').css('justify-content', 'center');
        $('.popup_back').css('align-items', 'center');
        $('.popup_back').css('z-index', '999');
        cheeseSelect.show();
    });

    $('.popup_back .cheeseSelect .btn_close').click(function() {
        $('.popup_back').css('position', '');
        $('.popup_back').css('background-color', '');
        $('.popup_back').css('left', '');
        $('.popup_back').css('right', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('top', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('display', '');
        $('.popup_back').css('justify-content', '');
        $('.popup_back').css('align-items', '');
        $('.popup_back').css('z-index', '');
        cheeseSelect.hide();
    });

    vegeSelectButton.click(function() {
        $('.popup_back').css('position', 'fixed');
        $('.popup_back').css('background-color', 'rgba(0,0,0,0.6)');
        $('.popup_back').css('left', '0');
        $('.popup_back').css('right', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('top', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('display', 'flex');
        $('.popup_back').css('justify-content', 'center');
        $('.popup_back').css('align-items', 'center');
        $('.popup_back').css('z-index', '999');
        vegeSelect.show();
    });

    $('.popup_back .vegeSelect .btn_close').click(function() {
        $('.popup_back').css('position', '');
        $('.popup_back').css('background-color', '');
        $('.popup_back').css('left', '');
        $('.popup_back').css('right', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('top', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('display', '');
        $('.popup_back').css('justify-content', '');
        $('.popup_back').css('align-items', '');
        $('.popup_back').css('z-index', '');
        vegeSelect.hide();
    });

    sauceSelectButton.click(function() {
        $('.popup_back').css('position', 'fixed');
        $('.popup_back').css('background-color', 'rgba(0,0,0,0.6)');
        $('.popup_back').css('left', '0');
        $('.popup_back').css('right', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('top', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('display', 'flex');
        $('.popup_back').css('justify-content', 'center');
        $('.popup_back').css('align-items', 'center');
        $('.popup_back').css('z-index', '999');
        sauceSelect.show();
    });

    $('.popup_back .sauceSelect .btn_close').click(function() {
        $('.popup_back').css('position', '');
        $('.popup_back').css('background-color', '');
        $('.popup_back').css('left', '');
        $('.popup_back').css('right', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('top', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('display', '');
        $('.popup_back').css('justify-content', '');
        $('.popup_back').css('align-items', '');
        $('.popup_back').css('z-index', '');
        sauceSelect.hide();
    });

    toppingSelectButton.click(function() {
        $('.popup_back').css('position', 'fixed');
        $('.popup_back').css('background-color', 'rgba(0,0,0,0.6)');
        $('.popup_back').css('left', '0');
        $('.popup_back').css('right', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('top', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('display', 'flex');
        $('.popup_back').css('justify-content', 'center');
        $('.popup_back').css('align-items', 'center');
        $('.popup_back').css('z-index', '999');
        toppingSelect.show();
    });

    $('.popup_back .toppingSelect .btn_close').click(function() {
        $('.popup_back').css('position', '');
        $('.popup_back').css('background-color', '');
        $('.popup_back').css('left', '');
        $('.popup_back').css('right', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('top', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('display', '');
        $('.popup_back').css('justify-content', '');
        $('.popup_back').css('align-items', '');
        $('.popup_back').css('z-index', '');
        toppingSelect.hide();
    });

    doubleAddButton.click(function() {
        $('.popup_back').css('position', 'fixed');
        $('.popup_back').css('background-color', 'rgba(0,0,0,0.6)');
        $('.popup_back').css('left', '0');
        $('.popup_back').css('right', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('top', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('display', 'flex');
        $('.popup_back').css('justify-content', 'center');
        $('.popup_back').css('align-items', 'center');
        $('.popup_back').css('z-index', '999');
        doubleAdd.show();
    });

    $('.popup_back .doubleAdd .btn_close').click(function() {
        $('.popup_back').css('position', '');
        $('.popup_back').css('background-color', '');
        $('.popup_back').css('left', '');
        $('.popup_back').css('right', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('top', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('display', '');
        $('.popup_back').css('justify-content', '');
        $('.popup_back').css('align-items', '');
        $('.popup_back').css('z-index', '');
        doubleAdd.hide();
    });

    setSelectButton.click(function() {
        $('.popup_back').css('position', 'fixed');
        $('.popup_back').css('background-color', 'rgba(0,0,0,0.6)');
        $('.popup_back').css('left', '0');
        $('.popup_back').css('right', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('top', '0');
        $('.popup_back').css('bottom', '0');
        $('.popup_back').css('display', 'flex');
        $('.popup_back').css('justify-content', 'center');
        $('.popup_back').css('align-items', 'center');
        $('.popup_back').css('z-index', '999');
        setSelect.show();
    });

    $('.popup_back .setSelect .btn_close').click(function() {
        $('.popup_back').css('position', '');
        $('.popup_back').css('background-color', '');
        $('.popup_back').css('left', '');
        $('.popup_back').css('right', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('top', '');
        $('.popup_back').css('bottom', '');
        $('.popup_back').css('display', '');
        $('.popup_back').css('justify-content', '');
        $('.popup_back').css('align-items', '');
        $('.popup_back').css('z-index', '');
        setSelect.hide();
    });

});

