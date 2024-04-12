
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true
// });
// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("body"),
//     smooth: true
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("body", {
//     scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
// });
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

// let innercursor = document.querySelector(".inner-cursor");
// let outercursor = document.querySelector(".outer-cursor");
// document.addEventListener("mousemove",(e)=>{
//     let xCor = e.clientX;
//     let yCor = e.clientY;
//     outercursor.style.left = `${xCor}px`;
//     outercursor.style.top = `${yCor}px`;
// })


//random colours in the websites on each and every loading
function randomColor() {
    let a = Math.ceil(0 + Math.random() * 255);
    let b = Math.ceil(0 + Math.random() * 255);
    let c = Math.ceil(0 + Math.random() * 255);
    if(a<b && a<c){
        a=0;
        b=255;
    }
    else if(b<a && b<c){
        b=0;
        c=255;
    }
    else if(c<a && c<b){
        c=0;
        a=255;
    }
    return `rgb(${a},${b},${c})`
}

let documentElement = document.documentElement;
documentElement.style.setProperty("--uni-color-1",randomColor() )
document.querySelector(".cl-change").style.color = randomColor();
document.querySelector(".heading-main").style.color = randomColor();
let clrs = randomColor();
Array.from(document.querySelectorAll(".side-deco")).forEach(e =>{
    e.style.background = clrs;
});

let loadBox = document.querySelectorAll(".loader-boxs");
let loader = document.querySelector(".loader");
let loading = document.querySelector(".loading");
let width = window.innerWidth
let value, per10px, newVal;
if (width > 1100) {
    value = (width - 1100) / 10;
    per10px = .05;
    newVal = (value * per10px) + 12;
    document.querySelector(".intro").style.fontSize = `${newVal}px`;
}
else {
    value = (1100 - width) / 10;
    per10px = .107;
    console.log(value)
    newVal = 12 - (value * per10px)
    document.querySelector(".intro").style.fontSize = `${newVal}px`;
}

if (width < 800) {
    document.querySelector(".intro").remove();
    document.querySelector("main").insertAdjacentHTML("afterbegin", `<div class="intro-mobile" id="HOME">
        <div class="img-back-mobile">
       <img class="heading-logo-mobile" src="photo.jpg" alt="logo">
       </div>
       <h1 class="heading-main-mobile">
           &#128073 ABINASH DWIBEDI &#128072
       </h1>
       <p class="webd-mobile cl-change" style="text-align: center;font-size: 15px; margin:5px;"><i class="fa-brands fa-linux" style="font-size: 10px;"></i> Arch User</p>
       <p class="webd-mobile" style="text-align: center;font-size: 15px;margin:0 5px;">A Front-End Devloper</p>
       <p class="heading-para-mobile">
           Hello and welcome to my personal webpage! My name is Abinash Dwibedi, and I’m a college student. I started this website to share my life, hobbies, interests etc. I’m passionate about programming, video/photo editing, and I’m excited to share my knowledge and experiences with you. On this site, you’ll find my projects. I hope you find my content informative, useful, and engaging. Thanks for stopping by!”
       </p>
       <div class="head-links-mobile">

           <a href="https://www.facebook.com/Abinash0Dwibedi" target="_blank"><i class="fa-brands fa-facebook social-mobile"></i></a>
           <a href="https://github.com/AbinashDwibedi"target="_blank"><i class="fa-brands fa-github social-mobile"></i></a>
           <a href="https://www.youtube.com/@AbinashDwibedi"target="_blank"><i class="fa-brands fa-youtube social-mobile"></i></a>
           <a href="https://www.instagram.com/dwibedi_abinash_/" target="_blank"><i class="fa-brands fa-instagram social-mobile"></i></a>
       </div>
   </div>`)
}

//Abinash DWibedi creater
// function randomColor() {
//     let a = Math.ceil(0 + Math.random() * 255);
//     let b = Math.ceil(0 + Math.random() * 255);
//     let c = Math.ceil(0 + Math.random() * 255);
//     return `rgb(${a},${b},${c})`
// }
// setInterval(() => {
//     document.querySelectorAll(".small-circle").forEach((e)=>{
//         e.style.background = randomColor();
//     })
// }, 500);

setTimeout(() => {
    loading.innerHTML = "Loading"
}, 1200);
setInterval(() => {
    Array.from(loadBox).forEach((a) => {
        a.style.background = "white";
    })
    if (loading.textContent.endsWith("...")) {
        loading.innerHTML = loading.innerHTML.slice(0, loading.innerHTML.length - 3)
    }
    else {
        loading.append(".");
    }
}, 1000)
document.addEventListener("DOMContentLoaded", () => {
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            loader.style.opacity = 0
        }, 2000);
    })
    prom.then(() => {
        loader.remove();
        let width = window.innerWidth
        if (width > 800) {
            let tm = gsap.timeline();
            tm.from(".top-list", {
                y: -100,
                duration: .3,
                stagger: .5
            });
            tm.from(".img-back,.img-back::after", {
                opacity: 0,
                y: -1000,
                duration: 1,
            })
            tm.from(".heading-logo,.heading-main", {
                opacity: 0,
                y: 100,
                duration: .5,
                stagger: .5,
            })
            tm.from(".webd,.heading-para", {
                opacity: 0,
                y: 100,
                duration: .5,
                stagger: .5,
            })
            tm.from(".head-links,.social", {
                opacity: 0,
                y: 100,
                duration: .5,
                stagger: .2,
            })
            tm.from(".side-deco", {
                opacity: 0,
                duration: 1,
                stagger: .5,
                y: -200
            })
        }
        else {
            let tm_mob = gsap.timeline();
            tm_mob.from(".sidebaropenlabel", {
                y: -100,
                duration: .5,
                stagger: .5
            });

            tm_mob.from(".heading-logo-mobile", {
                opacity: 0,
                x: -500,
                rotateZ: "-360deg",
                duration: 2,
            })
            tm_mob.from(".heading-main-mobile,.webd-mobile,.heading-para-mobile", {
                opacity: 0,
                y: 100,
                duration: .5,
                stagger: .5,
            })
            tm_mob.from(".head-links-mobile,.social-mobile", {
                opacity: 0,
                y: 100,
                duration: .5,
                stagger: .2,
            })
        }



    })
})
document.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("nav-color")

    }
    else {
        nav.classList.remove("nav-color")
    }
})

let experienceTimeline = gsap.timeline();


experienceTimeline.from(".logo",{
    x: -100,
    stagger: 1,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".experiences",
        scroll: "body",
        start: "top 70%", end: "bottom 80%",
        scrub: true
    }
})
experienceTimeline.from(".experience-about",{
    y: 100,
    stagger:1 ,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".experiences",
        scroll: "body",
        start: "top 60%", end: "bottom 90%",
        scrub: true
    }
})
experienceTimeline.from(".experience .ex-range",{
    x: -500,
    stagger: 1,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".experiences",
        scroll: "body",
        start: "top 50%", end: "bottom 90%",
        scrub: true
    }
})


// gsap.from("", {
//     x: -1000,
//     stagger: 1,
//     duration: 1,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".experiences",
//         scroll: "body",
//         start: "top 60%", end: "bottom 90%",
//         scrub: true
//     }
// })
// gsap.from("", {
//     width: -0,
//     stagger: 1,
//     duration: 1,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".experiences",
//         scroll: "body",
//         start: "top 60%", end: "bottom 90%",
//         scrub: true
//     }
// })



gsap.from(".project", {
    y: -100,
    x: -100,
    rotateZ: "15deg",
    duration: 1,
    stagger: .5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".projec",
        scroll: "body",
        start: "top 60%", end: "bottom 90%",
        scrub: true
    }
})

