$(document).ready(function() {
    let honeyCombiBtn = $('.menu_info button');
    let originBtn = $('.button_wrap').eq(0);
    let allergyBtn = $('.button_wrap').eq(1);

    let honeyCombi = $('.popup_bg .suggestion_popUp');
    let origin = $('.popup_bg .contry_popUp');
    let allergy = $('.popup_bg .allergy_popUp');

    let breadLength = $(".popup_bg .breadLength");
    let breadSelect = $(".popup_bg .breadSelect");
    let breadWarming = $(".popup_bg .breadWarming");
    let cheeseSelect = $(".popup_bg .cheeseSelect");
    let vegeSelect = $(".popup_bg .vegeSelect");
    let sauceSelect = $(".popup_bg .sauceSelect");
    let toppingSelect = $(".popup_bg .toppingSelect");
    let doubleAdd = $(".popup_bg .doubleAdd");
    let setSelect = $(".popup_bg .setSelect");
    
    let breadLengthButton = $('.step_info .breadLength');
    let breadSelectButton = $('.step_info .breadSelect');
    let cheeseSelectButton = $('.step_info .cheeseSelect');
    let vegeSelectButton = $('.step_info .vegeSelect');
    let sauceSelectButton = $('.step_info .sauceSelect');
    let toppingSelectButton = $('.step_info .toppingSelect');
    let doubleAddButton = $('.step_info .doubleAdd');
    let setSelectButton = $('.step_info .setSelect');

    honeyCombiBtn.on('click', () => {
        if($('.order_wrap').hasClass('honeyCheck')) {
            $('.suggestion_popUp .btn_area .bgc_point').css('display', 'none')
            $('.suggestion_popUp .btn_area .bgc_white').css('display', 'inline-block');
        } else {
            $('.suggestion_popUp .btn_area .bgc_point').css('display', 'inline-block');
            $('.suggestion_popUp .btn_area .bgc_white').css('display', 'none');
        }
        $('.popup_bg').css('display', 'flex');
        honeyCombi.show();
        return false;
    });

    $('.suggestion_popUp .btn_area .bgc_point').on('click', () => {
        $('.popup_bg').hide();
        honeyCombi.hide();
        $('.order_wrap').css('display', 'block');
        $('.order_wrap').addClass('honeyCheck');
        return false;
    });

    $('.suggestion_popUp .btn_area .bgc_white').on('click', () => {
        if(confirm('적용한 꿀조합을 삭제하시겠습니까?') == true) {
            $('.popup_bg').hide();
            honeyCombi.hide();
            $('.order_wrap').css('display', 'none');
            $('.order_wrap').removeClass('honeyCheck');
        } else {
            return false;
        }
    });

    originBtn.on('click', () => {
        $('.popup_bg').css('display', 'flex');
        origin.show();
        return false;
    });

    allergyBtn.on('click', () => {
        $('.popup_bg').css('display', 'flex');
        allergy.show();
        return false;
    });

    $('.popup_bg .close_btn').on('click', () => {
        $('.popup_bg').hide();
        honeyCombi.hide();
        origin.hide();
        allergy.hide();
    });

    $('.btn_area .orderStart_btn').on('click', () => {
        $('.popup_bg').css('display', 'flex');
        breadLength.show();
    });
    
    $('.popup_bg .btn_close').click(function() {
        $('.popup_bg').hide();
        breadLength.hide();
        breadSelect.hide();
        breadWarming.hide();
        cheeseSelect.hide();
        vegeSelect.hide();
        sauceSelect.hide();
        toppingSelect.hide();
        doubleAdd.hide();
        setSelect.hide();
    });

    $('.popup_bg .breadLength #ordPrgsNextBtn').click(function() {
        breadLength.hide();
        breadSelect.show();
    });

    $('.popup_bg .breadLength .bgc_white').click(function() {
        $('.popup_bg').hide();
        breadLength.hide();
        return false;
    });


    $('.popup_bg .breadSelect #ordPrgsNextBtn').click(function() {
        breadSelect.hide();
        breadWarming.show();
    });

    $('.popup_bg .breadSelect .bgc_white').click(function() {
        breadSelect.hide();
        breadLength.show();
        return false;
    });

    $('.popup_bg .breadWarming #ordPrgsNextBtn').click(function() {
        breadWarming.hide();
        cheeseSelect.show();
    });

    $('.popup_bg .breadWarming .bgc_white').click(function() {
        breadWarming.hide();
        breadSelect.show();
        return false;
    });

    $('.popup_bg .cheeseSelect #ordPrgsNextBtn').click(function() {
        cheeseSelect.hide();
        vegeSelect.show();
    });

    $('.popup_bg .cheeseSelect .bgc_white').click(function() {
        cheeseSelect.hide();
        breadWarming.show();
        return false;
    });

    $('.popup_bg .vegeSelect #ordPrgsNextBtn').click(function() {
        vegeSelect.hide();
        sauceSelect.show();
    });

    $('.popup_bg .vegeSelect .bgc_white').click(function() {
        vegeSelect.hide();
        cheeseSelect.show();
        return false;
    });

    $('.popup_bg .sauceSelect #ordPrgsNextBtn').click(function() {
        sauceSelect.hide();
        toppingSelect.show();
    });

    $('.popup_bg .sauceSelect .bgc_white').click(function() {
        sauceSelect.hide();
        vegeSelect.show();
        return false;
    });

    $('.popup_bg .toppingSelect #ordPrgsNextBtn').click(function() {
        toppingSelect.hide();
        doubleAdd.show();
    });

    $('.popup_bg .toppingSelect .bgc_white').click(function() {
        toppingSelect.hide();
        sauceSelect.show();
        return false;
    });

    $('.popup_bg .doubleAdd #ordPrgsNextBtn').click(function() {
        doubleAdd.hide();
        setSelect.show();
    });

    $('.popup_bg .doubleAdd .bgc_white').click(function() {
        doubleAdd.hide();
        toppingSelect.show();
        return false;
    });

    $('.popup_bg .setSelect #ordPrgsNextBtn').click(function() {
        $('.popup_bg').hide();
        setSelect.hide();
        $('.btn_area .orderStart_btn').css('display', 'none');
        $('.btn_area .addSide_btn').css('display', 'inline-block');
        $('.btn_area .cart_btn').css('display', 'inline-block');
        $('.btn_area .order_btn').css('display', 'inline-block');
        $('.order_wrap').css('display', 'block');
        return false;
    });

    $('.popup_bg .setSelect .bgc_white').click(function() {
        setSelect.hide();
        doubleAdd.show();
        return false;
    });

    breadLengthButton.click(function() {
        if($('.order_wrap').hasClass('honeyCheck')) {
            alert('꿀조합은 필수 선택 변경이 불가합니다.');
        } else {
            $('.popup_bg').css('display', 'flex');
            $('.popup_bg .breadLength #ordPrgsNextBtn').css('display', 'none');
            $('.popup_bg .breadLength .bgc_white').css('display', 'none');
            $('.popup_bg .breadLength #ordPrgsChecktBtn').css('display', 'inline-block');
            breadLength.show();
        }
    });

    breadSelectButton.click(function() {
        if($('.order_wrap').hasClass('honeyCheck')) {
            alert('꿀조합은 필수 선택 변경이 불가합니다.');
        } else {
            $('.popup_bg').css('display', 'flex');
            $('.popup_bg .breadSelect #ordPrgsNextBtn').css('display', 'none');
            $('.popup_bg .breadSelect .bgc_white').css('display', 'none');
            $('.popup_bg .breadSelect #ordPrgsChecktBtn').css('display', 'inline-block');
            breadSelect.show();
        }
    });

    cheeseSelectButton.click(function() {
        if($('.order_wrap').hasClass('honeyCheck')) {
            alert('꿀조합은 필수 선택 변경이 불가합니다.');
        } else {
            $('.popup_bg').css('display', 'flex');
            $('.popup_bg .cheeseSelect #ordPrgsNextBtn').css('display', 'none');
            $('.popup_bg .cheeseSelect .bgc_white').css('display', 'none');
            $('.popup_bg .cheeseSelect #ordPrgsChecktBtn').css('display', 'inline-block');
            cheeseSelect.show();
        }
    });

    vegeSelectButton.click(function() {
        if($('.order_wrap').hasClass('honeyCheck')) {
            alert('꿀조합은 필수 선택 변경이 불가합니다.');
        } else {
            $('.popup_bg').css('display', 'flex');
            $('.popup_bg .vegeSelect #ordPrgsNextBtn').css('display', 'none');
            $('.popup_bg .vegeSelect .bgc_white').css('display', 'none');
            $('.popup_bg .vegeSelect #ordPrgsChecktBtn').css('display', 'inline-block');
            vegeSelect.show();
        }
    });

    sauceSelectButton.click(function() {
        if($('.order_wrap').hasClass('honeyCheck')) {
            alert('꿀조합은 필수 선택 변경이 불가합니다.');
        } else {
            $('.popup_bg').css('display', 'flex');
            $('.popup_bg .sauceSelect #ordPrgsNextBtn').css('display', 'none');
            $('.popup_bg .sauceSelect .bgc_white').css('display', 'none');
            $('.popup_bg .sauceSelect #ordPrgsChecktBtn').css('display', 'inline-block');
            sauceSelect.show();
        }
    });

    toppingSelectButton.click(function() {
        $('.popup_bg').css('display', 'flex');
        $('.popup_bg .toppingSelect #ordPrgsNextBtn').css('display', 'none');
        $('.popup_bg .toppingSelect .bgc_white').css('display', 'none');
        $('.popup_bg .toppingSelect #ordPrgsChecktBtn').css('display', 'inline-block');
        toppingSelect.show();
    });

    doubleAddButton.click(function() {
        $('.popup_bg').css('display', 'flex');
        $('.popup_bg .doubleAdd #ordPrgsNextBtn').css('display', 'none');
        $('.popup_bg .doubleAdd .bgc_white').css('display', 'none');
        $('.popup_bg .doubleAdd #ordPrgsChecktBtn').css('display', 'inline-block');
        doubleAdd.show();
    });

    setSelectButton.click(function() {
        $('.popup_bg').css('display', 'flex');
        $('.popup_bg .setSelect #ordPrgsNextBtn').css('display', 'none');
        $('.popup_bg .setSelect .bgc_white').css('display', 'none');
        $('.popup_bg .setSelect #ordPrgsChecktBtn').css('display', 'inline-block');
        setSelect.show();
    });

    $('.popup_bg #ordPrgsChecktBtn').on('click', function() {
        $('.popup_bg').hide();
        breadLength.hide();
        breadSelect.hide();
        breadWarming.hide();
        cheeseSelect.hide();
        vegeSelect.hide();
        sauceSelect.hide();
        toppingSelect.hide();
        doubleAdd.hide();
        setSelect.hide();
    });
});