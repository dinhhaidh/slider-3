let swiperCustomer = new Swiper('.customer__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 24,

    breakpoints:{
        440:{
            slidesPerView: '1.5'
        },

        768:{
            slidesPerView: '2'
        },

        1200:{
            slidesPerView: '3'
        },

    }
});

// ===============  SWIPER MOVIE ================//
