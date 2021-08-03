function available(){
    $('#available').css("display", "block");
    $('#expired').css("display", "none");
    $('#available').addClass('active');
    $('#tab_orderTip').removeClass('active');
}

function expired(){
    $('#available').css("display", "none");
    $('#expired').css("display", "block");
    $('#expired').addClass('active');
    $('#available').removeClass('active');
}