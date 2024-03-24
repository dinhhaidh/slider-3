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
            slidesPerView: '2'
        },

      

    }
});

// ===============  SWIPER MOVIE ================//