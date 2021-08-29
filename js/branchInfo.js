$(document).ready(function() {
    $('.branch_region ul li a').on('click', (e) => {
        $('.branch_region ul li').removeClass('active');
        $(e.currentTarget).parent().addClass('active');
        $('.branch_map_wrap').removeClass('active');

        const tabId = $(e.currentTarget).attr('href');
        if(tabId == '#map1') {
            $('#map1').addClass('active');
            // $('#map1').css('height', 'auto');
            // $('#map2').css('height', '0');
            // $('#map3').css('height', '0');
        } else if(tabId == '#map2') {
            $('#map2').addClass('active');
            // $('#map1').css('height', '0');
            // $('#map2').css('height', 'auto');
            // $('#map3').css('height', '0');
        } else {
            $('#map3').addClass('active');
            // $('#map1').css('height', '0');
            // $('#map2').css('height', '0');
            // $('#map3').css('height', 'auto');
        }
    });
});