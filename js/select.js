// $(document).ready(function() {
//     var breadLength = $(".popup_back .breadLength");
//     var breadSelect = $(".popup_back .breadSelect");
//     var breadWarming = $(".popup_back .breadWarming");
//     var cheeseSelect = $(".popup_back .cheeseSelect");
//     var vegeSelect = $(".popup_back .vegeSelect");
//     var sauceSelect = $(".popup_back .sauceSelect");
//     var toppingSelect = $(".popup_back .toppingSelect");
//     var doubleAdd = $(".popup_back .doubleAdd");
//     var setSelect = $(".popup_back .setSelect");


//     if(breadLength.hasClass("active")) {
//         breadLength.show();
//         breadLength.find("#ordPrgsNextBtn").click(function() {
//             breadLength.removeClass("active");
//             breadLength.hide();
//             breadSelect.show();
//             breadSelect.addClass("active");


//             if(breadSelect.hasClass("active")) {
//                 breadSelect.find("#ordPrgsNextBtn").click(function() {
//                     breadSelect.removeClass("active");
//                     breadSelect.hide();
//                     breadWarming.show();
//                     breadWarming.addClass("active");


//                     if(breadWarming.hasClass("active")) {
//                         breadWarming.find("#ordPrgsNextBtn").click(function() {
//                             breadWarming.removeClass("active");
//                             breadWarming.hide();
//                             cheeseSelect.show();
//                             cheeseSelect.addClass("active");


//                             if(cheeseSelect.hasClass("active")) {
//                                 cheeseSelect.find("#ordPrgsNextBtn").click(function() {
//                                     cheeseSelect.removeClass("active");
//                                     cheeseSelect.hide();
//                                     vegeSelect.show();
//                                     vegeSelect.addClass("active");


//                                     if(vegeSelect.hasClass("active")) {
//                                         vegeSelect.find("#ordPrgsNextBtn").click(function() {
//                                             vegeSelect.removeClass("active");
//                                             vegeSelect.hide();
//                                             sauceSelect.show();
//                                             sauceSelect.addClass("active");


//                                             if(sauceSelect.hasClass("active")) {
//                                                 sauceSelect.find("#ordPrgsNextBtn").click(function() {
//                                                     sauceSelect.removeClass("active");
//                                                     sauceSelect.hide();
//                                                     toppingSelect.show();
//                                                     toppingSelect.addClass("active");


//                                                     if(toppingSelect.hasClass("active")) {
//                                                         toppingSelect.find("#ordPrgsNextBtn").click(function() {
//                                                             toppingSelect.removeClass("active");
//                                                             toppingSelect.hide();
//                                                             toppingSelect.show();
//                                                             toppingSelect.addClass("active");


//                                                             if(toppingSelect.hasClass("active")) {
//                                                                 toppingSelect.find("#ordPrgsNextBtn").click(function() {
//                                                                     toppingSelect.removeClass("active");
//                                                                     toppingSelect.hide();
//                                                                     doubleAdd.show();
//                                                                     doubleAdd.addClass("active");


//                                                                     if(doubleAdd.hasClass("active")) {
//                                                                         doubleAdd.find("#ordPrgsNextBtn").click(function() {
//                                                                             doubleAdd.removeClass("active");
//                                                                             doubleAdd.hide();
//                                                                             setSelect.show();
//                                                                             setSelect.addClass("active");
//                                                                         });
//                                                                     };
//                                                                 });
//                                                             };
//                                                         });
//                                                     };
//                                                 });
//                                             };
//                                         });
//                                     };
//                                 });
//                             };
//                         });
//                     };
//                 });
//             };
//         });
//     };
// });

$(document).ready(function() {
    var breadLength = $(".popup_back .breadLength");
    var breadSelect = $(".popup_back .breadSelect");
    var breadWarming = $(".popup_back .breadWarming");
    var cheeseSelect = $(".popup_back .cheeseSelect");
    var vegeSelect = $(".popup_back .vegeSelect");
    var sauceSelect = $(".popup_back .sauceSelect");
    var toppingSelect = $(".popup_back .toppingSelect");
    var doubleAdd = $(".popup_back .doubleAdd");
    var setSelect = $(".popup_back .setSelect");


    if(breadLength.hasClass("active")) {
        breadLength.show();
        breadLength.find("#ordPrgsNextBtn").click(function() {
            breadLength.removeClass("active");
            breadLength.hide();
            breadSelect.show();
            breadSelect.addClass("active");
        });
    };


    if($('.pop_back').find('.breadSelect').hasClass("active")) {
        breadSelect.find("#ordPrgsNextBtn").click(function() {
            console.log('break넣었느데 과연?')
            breadSelect.removeClass("active");
            breadSelect.hide();
            breadWarming.show();
            breadWarming.addClass("active");
        
        });
    };


    if(breadWarming.hasClass("active")) {
        breadWarming.find("#ordPrgsNextBtn").click(function() {
            breadWarming.removeClass("active");
            breadWarming.hide();
            cheeseSelect.show();
            cheeseSelect.addClass("active");
        });
    };

    if(cheeseSelect.hasClass("active")) {
        cheeseSelect.find("#ordPrgsNextBtn").click(function() {
            cheeseSelect.removeClass("active");
            cheeseSelect.hide();
            vegeSelect.show();
            vegeSelect.addClass("active");
        });
    };

    if(vegeSelect.hasClass("active")) {
        vegeSelect.find("#ordPrgsNextBtn").click(function() {
            vegeSelect.removeClass("active");
            vegeSelect.hide();
            sauceSelect.show();
            sauceSelect.addClass("active");
        });
    };

    if(sauceSelect.hasClass("active")) {
        sauceSelect.find("#ordPrgsNextBtn").click(function() {
            sauceSelect.removeClass("active");
            sauceSelect.hide();
            toppingSelect.show();
            toppingSelect.addClass("active");
        });
    };

    if(toppingSelect.hasClass("active")) {
        toppingSelect.find("#ordPrgsNextBtn").click(function() {
            toppingSelect.removeClass("active");
            toppingSelect.hide();
            doubleAdd.show();
            doubleAdd.addClass("active");
        });
    };


    if(doubleAdd.hasClass("active")) {
        doubleAdd.find("#ordPrgsNextBtn").click(function() {
            doubleAdd.removeClass("active");
            doubleAdd.hide();
            setSelect.show();
            setSelect.addClass("active");
        });
    };
    
});

