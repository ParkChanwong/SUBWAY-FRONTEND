/*$(document).ready(function(){
    $('.slider_wrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});
*/

function storeOrder(){
    $('#store_order').css("display", "block");
    $('#order_tip').css("display", "none");
    $('.tab_storeOrder').addClass('active');
    $('.tab_orderTip').removeClass('active');
}

function orderTip(){
    $('#store_order').css("display", "none");
    $('#order_tip').css("display", "block");
    $('.tab_orderTip').addClass('active');
    $('.tab_storeOrder').removeClass('active');
}