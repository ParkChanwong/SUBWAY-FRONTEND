TweenMax.to('#title', 1, { ease: Power2.easeInOut, top: 0, opacity: 1 });
TweenMax.to('#title_text', 1, { ease: Power2.easeOut, top: 0, opacity: 1, delay: 0.3 });
TweenMax.to('.img1', 0.6, { ease: Power3.easeOut, top: 74, opacity: 1, delay: 0.5 });
TweenMax.to('.img2', 0.6, { ease: Power3.easeOut, top: 168, opacity: 1, delay: 0.6 });
TweenMax.to('.img3', 0.5, { ease: Power3.easeInOut, top: 0, opacity: 1, delay: 0.3 });

function allergyPopup(){
    $('.popUp_back').css("display", "block");
    $('.allergy_popUp').css("display", "block");
}

function closePopup(){
    $('.popUp_back').css("display", "none");
    $('.allergy_popUp').css("display", "none");
}

