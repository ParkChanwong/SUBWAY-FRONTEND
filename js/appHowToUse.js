function fastSub(){
    $('#fast_sub').css("display", "block");
    $('#home_sub').css("display", "none");
    $('#group').css("display", "none");
    $('.tab_fast').addClass('active');
    $('.tab_home').removeClass('active');
    $('.tab_group').removeClass('active');
}

function homeSub(){
    $('#fast_sub').css("display", "none");
    $('#home_sub').css("display", "block");
    $('#group').css("display", "none");
    $('.tab_fast').removeClass('active');
    $('.tab_home').addClass('active');
    $('.tab_group').removeClass('active');
}

function groupSub(){
    $('#fast_sub').css("display", "none");
    $('#home_sub').css("display", "none");
    $('#group').css("display", "block");
    $('.tab_fast').removeClass('active');
    $('.tab_home').removeClass('active');
    $('.tab_group').addClass('active');
}