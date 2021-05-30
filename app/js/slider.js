let sliderDots = document.querySelectorAll('.page-reviews-slider-dots__item'); //кружочки
let sliderItems=document.querySelectorAll('.page-reviews-slider-item');
let sliderIndex=0;
let sliderScroll=document.querySelector('.page-reviews-slider-scroll');
let Width=0;
let currentIndex = 0;
let slideInterval = setInterval(function(){
        dotMove(currentIndex);
        currentIndex++;
    },4000);




function sliderMove(up) {
    sliderDots[sliderIndex].classList.remove('page-reviews-slider-dots__item_active');
    sliderIndex=(sliderIndex + up + sliderItems.length)% sliderItems.length;
    currentIndex =  sliderIndex;
    sliderDots[sliderIndex].classList.add('page-reviews-slider-dots__item_active');
    Width=0;
    for(var i=0;i < sliderIndex;i++) {
        Width +=sliderItems[i].offsetWidth + 60
    }
    sliderScroll.style.transform='translateX(-' + Width + 'px)';
}
function dotMove(i) {
    sliderMove(i - sliderIndex);
}
  

[...sliderDots].forEach((dot, i) => dot.addEventListener('click', dotMove.bind(dot, i)));