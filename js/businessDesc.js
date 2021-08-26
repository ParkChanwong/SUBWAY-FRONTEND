$(document).ready(function() {
    $('.branch_region ul li a').on('click', (e) => {
        $('.branch_region ul li').removeClass('active');
        $(e.currentTarget).parent().addClass('active');
        if($(e.currentTarget).attr('href') == '#map1') {
            $('#map1').addClass('active');
            $('#map2').removeClass('active');
        } else {
            $('#map2').addClass('active');
            $('#map1').removeClass('active');
        }
    });
});