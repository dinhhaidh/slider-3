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

let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
});