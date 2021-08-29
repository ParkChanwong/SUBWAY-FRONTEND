$(document).ready(function() {
    $('.faq_content li .question').on('click', (e) => {
        if($(e.currentTarget).parent().hasClass('open')) {
            $(e.currentTarget).parent().removeClass('open');
            $(e.currentTarget).next().slideUp(300);
        } else {
            $(e.currentTarget).parent().addClass('open');
            $(e.currentTarget).next().slideDown(300);
        }
    });
});