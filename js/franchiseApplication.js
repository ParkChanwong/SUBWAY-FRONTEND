$(document).ready(function() {
    let stickyOffset = $('.franchiseApplication_header').offset();
    $(window).scroll(function() {
        if($(document).scrollTop() > stickyOffset.top) {
            $('.content .logo').fadeIn();
            $('.content .top').fadeIn();
            $('.franchiseApplication_header').css('background-color', '#ffffff');
        } else {
            $('.content .logo').fadeOut();
            $('.content .top').fadeOut();
            $('.franchiseApplication_header').css('background-color', 'transparent')
        }
    });

    $(".content .top").click(function() {
        $('html').animate({ scrollTop : 0 }, 400);
        return false;
    });

    $('.form_file input[type=file]').change(function() {
        if(window.FileReader) {
            var fileName = $(this)[0].files[0].name;
        } else {
            var fileName = $(this).val().split('/').pop().split('\\').pop();
        }
        $('.from_file input[type=text]').val('');
        $('.form_file input[type=text]').val(fileName);
    });
});

function showCal(){
    let sort2 = document.getElementsByClassName("sort2")[0];
    let sort2Option = sort2.options[sort2.selectedIndex].innerText;
    let calRow = document.getElementsByClassName("calRow")[0];
    let region1 = document.getElementsByClassName('region1')[0];
    if(sort2Option == 'Fast-Sub_주문/결제' || sort2Option == 'Home-Sub_주문/결제'){
        calRow.style.display='';
        region1.style.display='';
    }else{
        calRow.style.display='none';
    }
}

function changeSort2() {
    let calRow = document.getElementsByClassName("calRow")[0];
    calRow.style.display='none';
    let sort1 = document.querySelector('.sort1');
    let sort2 = document.querySelector('.sort2');
    let sort1Option;
    sort1Option = sort1.options[sort1.selectedIndex].innerText;

    let sort2Option;
    sort2Option = sort2.options[sort2.selectedIndex].innerText;

    let subOptions = {
        customerContact: ['칭찬하기', '개선하기'],
        app: [ 'Fast-Sub_주문/결제', 'Home-Sub_주문/결제', 'Subcard', '포인트', 'e-Gift', '기타'],
        store: ['가맹개설 신청']
    }
    
    let subOption=0;
    document.getElementsByClassName('form_select')[2].style.display = 'inline-block';
    switch (sort1Option) {
        case '고객문의':
            subOption = subOptions.customerContact;
            break;
        case '앱 관련 문의':
            subOption = subOptions.app;
            break;
        case '가맹 개설 문의':
            subOption = subOptions.store;
            break;
    }
                
    let option;
    if(subOption!=0){
        sort2.options.length=1;
        for (let i = 0; i < subOption.length; i++) {
            option = document.createElement('option');
            option.innerText = subOption[i];
            sort2.append(option);
        }
    }
    switch(sort1Option){
        case "메뉴":
            document.getElementsByClassName('form_select')[2].style.display = 'none';
        case "고객문의":
            document.getElementsByClassName('region1')[0].style.display='';
            break;                
        case "마케팅 제휴/제안":
            document.getElementsByClassName('form_select')[2].style.display = 'none';
        default:
            document.getElementsByClassName('region1')[0].style.display='none';
    }
}


function changeRegion(){
    let region1_sort = document.querySelector('.region1_sort');
    let region2_sort = document.querySelector('.region2_sort');
    let region1Option;
    region1Option = region1_sort.options[region1_sort.selectedIndex].innerText;

    let subOptions = {
        gyeonggi: ['고양원당', '고양원흥역'],
        busan: ['부산대역','해운대'],
        seoul: ['가산디지털단지', '가양역']
    }
    
    let subOption=0;
    switch (region1Option) {
        case '경기도':
            subOption = subOptions.gyeonggi;
            break;
        case '부산광역시':
            subOption = subOptions.busan;
            break;
        case '서울특별시':
            subOption = subOptions.seoul;
            break;
    }
                
    let option;
    if(subOption!=0){
        region2_sort.options.length=1;
        for (let i = 0; i < subOption.length; i++) {
            option = document.createElement('option');
            option.innerText = subOption[i];
            region2_sort.append(option);
        }
    }
}
