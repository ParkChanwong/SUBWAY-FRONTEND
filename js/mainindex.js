function classic(){
    $('#classic').css("left", "0");
    $('#fresh_light').css("left", "");
    $('#premium').css("left", "");
    $('#breakfast').css("left", "");
    $('.classic').addClass('active');
    $('.fresh_light').removeClass('active');
    $('.premium').removeClass('active');
    $('.breakfast').removeClass('active');
}

function fresh_light(){
    $('#classic').css("left", "");
    $('#fresh_light').css("left", "0");
    $('#premium').css("left", "");
    $('#breakfast').css("left", "");
    $('.classic').removeClass('active');
    $('.fresh_light').addClass('active');
    $('.premium').removeClass('active');
    $('.breakfast').removeClass('active');
}

function premium(){
    $('#classic').css("left", "");
    $('#fresh_light').css("left", "");
    $('#premium').css("left", "0");
    $('#breakfast').css("left", "");
    $('.classic').removeClass('active');
    $('.fresh_light').removeClass('active');
    $('.premium').addClass('active');
    $('.breakfast').removeClass('active');
}

function breakfast(){
    $('#classic').css("left", "");
    $('#fresh_light').css("left", "");
    $('#premium').css("left", "");
    $('#breakfast').css("left", "0");
    $('.classic').removeClass('active');
    $('.fresh_light').removeClass('active');
    $('.premium').removeClass('active');
    $('.breakfast').addClass('active');
}