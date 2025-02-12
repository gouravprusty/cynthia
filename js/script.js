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

const cursor = document.querySelector(".cursor");

function cursorFollower(){
    window.addEventListener("mouseover", () => {
        cursor.style.opacity = "1";
    })
    window.addEventListener("mousemove", function(dets){
        const cursorSize = cursor.offsetWidth / 1.5;
        cursor.style.transform = `translate(${dets.clientX-cursorSize}px, ${dets.clientY-cursorSize}px)`;
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
    });
    let larger2 = document.querySelectorAll(".works_list li");
    larger2.forEach((el) => {
        el.addEventListener("mouseover", () => {
            cursor.style.width = "70px";
            cursor.style.height = "70px";
            cursor.style.mixBlendMode = "normal";
        });
        el.addEventListener("mouseout", () => {
            cursor.style.width = "12px";
            cursor.style.height = "12px";
            cursor.style.mixBlendMode = "difference";
        });
    })
};

document.querySelectorAll(".works_list li").forEach((el) => {
    const imgWidth = document.querySelector(".work_image").offsetWidth / 2;
    const imgHeight = document.querySelector(".work_image").offsetHeight / 2;

    let rotate = 0;
    let rotDiff = 0;

    el.addEventListener("mouseover", () => {
        document.querySelector(".cursor p").style.display = "block";
    })
    el.addEventListener("mousemove", (dtls) => {
        let yDiff = dtls.clientY - el.getBoundingClientRect().top;
        let xDiff = dtls.clientX - el.getBoundingClientRect().left;

        rotDiff = dtls.clientX - rotate;
        rotate = dtls.clientX;

        gsap.to(el.querySelector(".work_image"), {
            opacity: 1,
            ease: Power3,
            top: yDiff - imgHeight,
            left: xDiff - imgWidth,
            rotate: gsap.utils.clamp(-20, 20, rotDiff * 0.8)
        })
    });
    el.addEventListener("mouseout", () => {
        document.querySelector(".cursor p").style.display = "none";
        gsap.to(el.querySelector(".work_image"), {
            opacity: 0,
        })
    });
});

cursorFollower();
firstPageAnim();