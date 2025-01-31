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

function cursorFollower(){
    window.addEventListener("mouseover", () => {
        document.querySelector(".cursor").style.opacity = "1";
    })
    window.addEventListener("mousemove", function(dets){
        document.querySelector(".cursor").style.transform = `translate(${dets.clientX-8}px, ${dets.clientY-8}px)`;
    })
    window.addEventListener("mouseout", () => {
        document.querySelector(".cursor").style.opacity = "0";
    })
}
cursorFollower();