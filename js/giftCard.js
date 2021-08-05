$(document).on('click', '.gift_money ul li', (e) => {
    $('.gift_money ul li').removeClass('check');
    $(e.currentTarget).addClass('check');
});