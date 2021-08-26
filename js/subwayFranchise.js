$(document).ready(function() {
    $('.store').mouseover(function() {
        $('.store').addClass('hover');
        $('.nation').removeClass('hover');
    });

    $('.nation').mouseover(function() {
        $('.nation').addClass('hover');
        $('.store').removeClass('hover');
    });
});
