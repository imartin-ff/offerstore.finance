document.querySelector('.logo').addEventListener('click', function(){
    document.querySelector('.page-container').classList.toggle('dark-theme');
})

document.querySelector('.burger-menu').addEventListener('click', function(){
    this.classList.toggle('opened');
    document.querySelector('.header-btns').classList.toggle('show');
})

const swiper = new Swiper('.reviews-slider-right', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    wrapperClass: 'reviews-slider-wrapper',
    slideClass: 'reviews-slider-slide',
    loop: true,
    autoplay: {
        delay: 2000,
        reverseDirection: false
    },

    
})


const swiper2 = new Swiper('.reviews-slider-left', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    wrapperClass: 'reviews-slider-wrapper',
    slideClass: 'reviews-slider-slide',
    loop: true,
    autoplay: {
        delay: 2000,
        reverseDirection: true
    },
})