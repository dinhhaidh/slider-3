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

let swiperNew = new Swiper('.customer__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,

    // đoạn mã này lè căn giữa
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        
        // đoạn mã này kích dc vào đốt vẫn chạy
        clickable: true,
    },

    breakpoints:{
        440:{
            slidesPerView: 'auto',
            centeredSlides: false,
        },

        768:{
            slidesPerView: '4',
            centeredSlides: false,
        },

        1200:{
            slidesPerView: '5',
            centeredSlides: false,
        },

    }

});

// ===============  SWIPER MOVIE ================//
