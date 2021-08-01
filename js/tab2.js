function tab_fastsub(){
    $('.tab_fastsub').addClass('active');
    $('.tab_homesub').removeClass('active');
    $('.fast_sub_container').css("display", "block");
    $('.home_sub_container').css("display", "none");
}

function tab_homesub(){
    $('.tab_fastsub').removeClass('active');
    $('.tab_homesub').addClass('active');
    $('.fast_sub_container').css("display", "none");
    $('.home_sub_container').css("display", "block");
}