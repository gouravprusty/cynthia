const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

const loader = document.querySelector(".loader");
setTimeout(() => {
    loader.style.top = "-100%";
}, 2000);

function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("nav", {
        y: '-100%',
        opacity: 0,
        delay: 1.8,
        duration: 2,
        ease: Expo.easeInOut
    })
    .to(".hero_head span", {
        y: '0',
        duration: 3,
        delay: -2,
        stagger: 0.2,
        ease: Expo.easeInOut
    })
    .to(".available p .anim_el", {
        y: '0',
        duration: 3,
        delay: -3,
        stagger: 0.2,
        ease: Expo.easeInOut
    })
    .to(".hero .links", {
        opacity: 1,
        duration: 2,
        delay: -2,
    })

};

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
    let cursor = document.querySelector(".cursor");
    window.addEventListener("mouseover", () => {
        cursor.style.opacity = "1";
    })
    window.addEventListener("mousemove", function(dets){
        const cursorSize = cursor.offsetWidth / 1.5;
        cursor.style.transform = `translate(${dets.clientX-cursorSize}px, ${dets.clientY-cursorSize}px)`;
        // cursor.style.transform = `translate(${dets.clientX-8}px, ${dets.clientY-8}px)`;
    })
    window.addEventListener("mouseout", () => {
        cursor.style.opacity = "0";
    })
    let larger = document.querySelectorAll(".large_cursor");
    larger.forEach((el) => {
        el.addEventListener("mouseover", () => {
            cursor.style.width = "30px";
            cursor.style.height = "30px";
        });
        el.addEventListener("mouseout", () => {
            cursor.style.width = "12px";
            cursor.style.height = "12px";
        });
    })
}
cursorFollower();
firstPageAnim();