const alimageSlider = new Swiper('.alimages-swiper', {
   loop: true,
   slidesPerView: 3,
   slidesPerGroup: 3,
   spaceBetween: 30,
       
   navigation: {
    nextEl: '.alimages-top__button__next',
    prevEl: '.alimages-top__button__prev',
    
  },
});
const testSlider = new Swiper('.test-swiper', {
   loop: true,
       
   navigation: {
    nextEl: '.test__button__next',
    prevEl: '.test__button__prev',
    
  },
});