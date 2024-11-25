function handleMenu(){
    const navdialog = document.getElementById('dialog');
    navdialog.classList.toggle("hidden")
    };
gsap.registerPlugin(ScrollTrigger);
gsap.to("#line01",{
        xPercent: 10,
        scrollTrigger:{
            trigger: "#line01",
            scroller: "body",
            start: "top 95%",
            end: "top 10%",
            scrub: 2,
            // markers: true,
        },
    });
    gsap.from("#line02",{
        xPercent: 10,
        scrollTrigger:{
            trigger: "#line02",
            scroller: "body",
            start: "top 95%",
            end: "top 10%",
            scrub: 2,
            // markers: true,
        },
    });
    gsap.to("#line03",{
        xPercent: 10,
        scrollTrigger:{
            trigger: "#line03",
            scroller: "body",
            start: "top 95%",
            end: "top 10%",
            scrub: 2,
            // markers: true,
        },
    });
gsap.from(".video",{
    yPercent:5,
    scrollTrigger:{
    trigger: ".video",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
    // markers: true,
    }
})
gsap.from(".videobutton",{
    yPercent: -22,
    scrollTrigger:{
    trigger: ".videobutton",
    scroller: "body",
    start: "top 90%",
    end: "top 30%",
    scrub: 2,
    // markers: true,
    }
})
gsap.from(".names",{
    xPercent: -10,
    scrollTrigger:{
    trigger: ".names",
    scroller: "body",
    start: "top 90%",
    end: "top 10%",
    scrub: 2,
    // markers: true,
    }
})
const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
});