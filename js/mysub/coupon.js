function available(){
    $('.available').css("display", "block");
    $('.expired').css("display", "none");
    $('.tab_available').addClass('active');
    $('.tab_expired').removeClass('active');
}

function expired(){
    $('.available').css("display", "none");
    $('.expired').css("display", "block");
    $('.tab_expired').addClass('active');
    $('.tab_available').removeClass('active');
}