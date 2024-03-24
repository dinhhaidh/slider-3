let swiperCustomer = new Swiper('.customer__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 24,

    breakpoints:{
        440:{
            slidesPerView: 'auto'
        },

        768:{
            slidesPerView: '4'
        },

        1200:{
            slidesPerView: '5'
        },

    }
});

// ===============  SWIPER MOVIE ================//
let swiperMovie = new Swiper('.movie__swiper', {
 
});