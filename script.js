// ======================================================
// MOVIE INTRO - PART 1
// ======================================================

gsap.registerPlugin();

// Elements
const moon = document.getElementById("moon");
const clouds = document.getElementById("clouds");
const stars = document.getElementById("stars");
const shootingStar = document.getElementById("shootingStar");
const particles = document.getElementById("particles");
const cakeMessage = document.getElementById("cakeMessage");

// ----------------------------
// Create Magic Particles
// ----------------------------

for (let i = 0; i < 180; i++) {

    const dot = document.createElement("div");

    dot.className = "particle";

    dot.style.left = Math.random() * window.innerWidth + "px";

    dot.style.top = Math.random() * window.innerHeight + "px";

    dot.style.animationDuration =
        (6 + Math.random() * 10) + "s";

    dot.style.animationDelay =
        (Math.random() * 10) + "s";

    dot.style.opacity = Math.random();

    particles.appendChild(dot);

}

// ----------------------------
// Moon Animation
// ----------------------------

gsap.set(moon, {
    opacity: 1,
    y: 0,
    x: 0
});

gsap.to(moon, {
    y: -20,
    repeat: -1,
    yoyo: true,
    duration: 6,
    ease: "sine.inOut"
});

gsap.to(moon,{

    y:-20,

    repeat:-1,

    yoyo:true,

    duration:6,

    ease:"sine.inOut"

});

// ----------------------------
// Clouds
// ----------------------------

gsap.to(clouds,{

    x:120,

    duration:35,

    repeat:-1,

    yoyo:true,

    ease:"none"

});

// ----------------------------
// Stars Twinkle
// ----------------------------

gsap.to(stars,{

    opacity:.6,

    repeat:-1,

    yoyo:true,

    duration:2,

    ease:"sine.inOut"

});

// ----------------------------
// Shooting Star
// ----------------------------

function shootStar(){

    gsap.set(shootingStar,{
        opacity:1,
        x:-300,
        y:0
    });

    gsap.to(shootingStar,{

        x:window.innerWidth+500,

        y:300,

        duration:1.8,

        ease:"power2.out",

        onComplete(){

            gsap.set(shootingStar,{
                opacity:0
            });

        }

    });

}

setInterval(shootStar,7000);
// ======================================
// STORY TIMELINE
// ======================================

const movie = document.getElementById("movie");
const loader = document.getElementById("loader");
const countdown = document.getElementById("countdownPage");

const music = document.getElementById("music");

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const name = document.getElementById("name");

// Hide loader after 3 seconds
setTimeout(() => {

    loader.classList.add("fadeOut");

},3000);

// For testing only
setTimeout(() => {

    countdown.classList.add("fadeOut");

    movie.style.display="block";

    startMovie();

},5000);

// =============================

function showText(element,time){

    return gsap.timeline()

    .to(element,{
        opacity:1,
        y:0,
        duration:2
    })

    .to({},{
        duration:time
    })

    .to(element,{
        opacity:0,
        duration:2
    });

}

// =============================

function startMovie(){

    music.volume=.35;

    music.play().catch(()=>{});

    const tl=gsap.timeline();

    tl.add(showText(line1,3))

    .add(showText(line2,3))

    .add(showText(line3,2))

    .fromTo(name,{

        opacity:0,

        scale:.5,

        letterSpacing:"30px"

    },{

        opacity:1,

        scale:1,

        letterSpacing:"10px",

        duration:4,

        color:"#FFD166",

        ease:"power4.out"

    })

    .to({},{

        duration:3

    })

    .to(name,{

        opacity:0,

        duration:2

    })

    // NEXT SCENE

    .call(() => {

    showGiftScene();

});

}
// ======================================
// GIFT SCENE
// ======================================

const gift = document.getElementById("gift");
const aura = document.getElementById("magicAura");
const glow = document.getElementById("giftGlow");

function showGiftScene(){

    const tl = gsap.timeline();

    tl

    // Golden aura appears

    .to(aura,{

        opacity:1,

        scale:2,

        duration:1.5

    })

    // Gift falls

    .fromTo(gift,{

        y:-700,

        rotation:-8,

        opacity:0,

        scale:.7

    },{

        y:0,

        rotation:0,

        opacity:1,

        scale:1,

        duration:2,

        ease:"power3.out"

    })

    // Small landing

    .to(gift,{

        y:-15,

        duration:.6,

        repeat:1,

        yoyo:true,

        ease:"sine.inOut"

    })

    // Glow starts

    .to(glow,{

        opacity:1,

        duration:1

    },"<")

    // Floating animation

    .to(gift,{

        y:-8,

        repeat:-1,

        yoyo:true,

        duration:2,

        ease:"sine.inOut"

    });

    setTimeout(()=>{

    openGift();

},5000);

}
function openGift(){

    gsap.timeline()

    .to(gift,{

        scale:1.15,

        duration:.5

    })

    .to(glow,{

        opacity:1,

        scale:5,

        duration:1.2

    })

    .to(aura,{

        opacity:0,

        duration:1

    },"<")

    .to(gift,{

        opacity:0,

        duration:.8

    },"<")

    .call(showCake);

}
const cake=document.getElementById("cake");
const cakeGlow=document.getElementById("cakeGlow");
const flames=document.querySelectorAll(".flame");

function showCake()


{
    
const tl=gsap.timeline();

tl

.fromTo(cake,{

opacity:0,

y:300,

scale:.7

},{

opacity:1,

y:0,

scale:1,

duration:2,

ease:"power4.out"

})

.to(cakeGlow,{

opacity:1,

duration:1

},"<")

.to(cakeMessage,{
    opacity:1,
    y:-20,
    duration:1.5
},"<")

.to(cake,{

y:-8,

repeat:-1,

yoyo:true,

duration:2,

ease:"sine.inOut"

},"<");

flames.forEach((f,i)=>{

gsap.to(f,{

opacity:1,

delay:1+i*.4,

duration:.4

.to(cakeMessage,{
    opacity:0,
    duration:1
})

});

});


setTimeout(()=>{


    
showEnvelope();

},7000);

}
function showEnvelope(){

    gsap.to("#cakeScene",{
        opacity:0,
        duration:1
    });

    gsap.to("#envelopeScene",{
        opacity:1,
        duration:1,
        pointerEvents:"auto"
    });

}
