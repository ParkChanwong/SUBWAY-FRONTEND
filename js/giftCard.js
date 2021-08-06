$(document).on('click', '.giftCard_tap ul li', (e) => {
    $('.giftCard_tap ul li').removeClass('active');
    $(e.currentTarget).addClass('active');
    if($(e.currentTarget).hasClass('gift')) {
        $('.history_wrap').css('display', 'none');
        $('.gift_wrap').css('display', 'block');
    } else {
        $('.gift_wrap').css('display', 'none');
        $('.history_wrap').css('display', 'block');
    }
});

$(document).on('click', '.gift_money ul li', (e) => {
    $('.gift_money ul li').removeClass('check');
    $(e.currentTarget).addClass('check');
});

$(document).on('click', '.send_method ul li', (e) => {
    $('.send_method ul li').removeClass('check');
    $(e.currentTarget).addClass('check');
});