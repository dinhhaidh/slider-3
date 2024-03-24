// let swiperCustomer = new Swiper('.customer__swiper', {
//     loop: true,
//     spaceBetween: 16,
//     slidesPerView: 'auto',
//     centeredSlides: 'auto',

//     breakpoints: {
//         1150: {
//             slidesPerView: 3,
//             centeredSlides: false,
//         },
//     }
// });

let swiperCustomer = new Swiper('.customer__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    centeredSlides: true,

     // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
});

