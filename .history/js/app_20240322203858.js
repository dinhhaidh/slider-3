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
        767: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    }
});