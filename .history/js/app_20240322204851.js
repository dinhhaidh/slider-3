let swiperCustomer = new Swiper('.customer__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
            centeredSlides: false,
        },
    }
});

// ===============  SWIPER MOVIE ================//
let swiperMovie = new Swiper('.movie__swiper', {
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