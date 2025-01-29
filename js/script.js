const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type   : 'loop',
        drag   : 'free',
        autoWidth: true,
        arrows : false,
        pagination: false,
        autoScroll: {
            speed: 1,
        },
    }).mount( window.splide.Extensions );
});