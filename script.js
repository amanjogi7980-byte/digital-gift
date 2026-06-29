/* ==========================================================
   A SMALL SURPRISE 🌸
   J1.1
========================================================== */

const loader = document.getElementById("loader");

const splash = document.getElementById("splash");

const welcome = document.getElementById("welcome");

const mainWebsite = document.getElementById("mainWebsite");

const startBtn = document.getElementById("startBtn");

const enterBtn = document.getElementById("enterBtn");

const username = document.getElementById("username");

const errorMessage = document.getElementById("errorMessage");

const welcomeText = document.getElementById("welcomeText");

const bgMusic = document.getElementById("bgMusic");
/* ==========================================
   LOADER
========================================== */
const allowedNames = [
    "avni",
    "Avni",
    "prachi",
    "Prachi",
];
/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2500);

});

/* ==========================================
   SPLASH
========================================== */

startBtn.addEventListener("click", () => {

    splash.style.display = "none";

    welcome.style.display = "flex";

});

/* ==========================================
   ENTER KEY
========================================== */

username.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        openWebsite();

    }

});

enterBtn.addEventListener("click", openWebsite);

/* ==========================================
   OPEN WEBSITE
========================================== */

function openWebsite() {

    const value = username.value.trim();

    if (value === "") {

        errorMessage.innerHTML = "Please apna naam enter karo 😊";

        return;

    }

    const ok = allowedNames.some(

        name =>

        name.toLowerCase() === value.toLowerCase()

    );
   if (!ok) {

        errorMessage.innerHTML =

            "Oops 😅 Ye surprise kisi aur ke liye hai.";

        username.value = "";

        return;

   }

    errorMessage.innerHTML = "";

    welcome.style.display = "none";

    mainWebsite.style.display = "block";
    const musicPlayer = document.getElementById("musicPlayer");

musicPlayer.style.opacity = "1";

musicPlayer.style.visibility = "visible";

musicPlayer.style.transform = "translateY(0)";
    welcomeText.innerHTML =

        "Hello " +

        capitalize(value) +

        " 🌸";

    playMusic();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

/* ==========================================
   CAPITALIZE
========================================== */

function capitalize(text) {

    return text.charAt(0).toUpperCase()

        + text.slice(1);

}

/* ==========================================
   MUSIC
========================================== */

function playMusic() {

    if (!bgMusic) return;

    bgMusic.volume = .35;

    bgMusic.play().catch(() => { });

}
/* ==========================================================
   J1.2
   HERO + FLOWERS + EXPLORE + MUSIC
========================================================== */

const exploreBtn = document.getElementById("exploreBtn");

const flowerContainer = document.getElementById("flowers");

/* ==========================================
   EXPLORE BUTTON
========================================== */

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        document.getElementById("quotes").scrollIntoView({

            behavior: "smooth"

        });

    });

}

/* ==========================================
   FLOWERS
========================================== */

const flowerList = [

    "🌸",
    "🌺",
    "🌷",
    "💮",
    "🌼"

];

function createFlower() {

    if (!flowerContainer) return;

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = flowerList[
        Math.floor(Math.random() * flowerList.length)
    ];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize =
        18 + Math.random() * 20 + "px";

    flower.style.animationDuration =
        6 + Math.random() * 6 + "s";

    flower.style.opacity =
        .5 + Math.random() * .5;

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 12000);

}

setInterval(createFlower, 350);

/* ==========================================
   SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: .15

    }

);

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

/* ==========================================
   HERO FLOAT
========================================== */

const heroCircle = document.querySelector(".hero-circle");

window.addEventListener("mousemove", e => {

    if (!heroCircle) return;

    const x = (e.clientX / window.innerWidth - .5) * 15;

    const y = (e.clientY / window.innerHeight - .5) * 15;

    heroCircle.style.transform =

        `translate(${x}px,${y}px)`;

});

/* ==========================================
   PREVENT DRAG
========================================== */

document.querySelectorAll("img").forEach(img => {

    img.draggable = false;

});

/* ==========================================
   DISABLE RIGHT CLICK (OPTIONAL)
========================================== */

// document.addEventListener("contextmenu", e => {
//     e.preventDefault();
// });

/* ==========================================
   END OF J1.2
========================================== */
/* ==========================================================
   J1.3
   GIFT + LETTER + CELEBRATION
========================================================== */

const giftBox = document.getElementById("giftBox");

const openGift = document.getElementById("openGift");

const readLetter = document.getElementById("readLetter");

const secretMessage = document.getElementById("secretMessage");

const celebrate = document.getElementById("celebrate");

/* ==========================================
   GIFT
========================================== */

function openGiftAnimation() {

    if (!giftBox) return;

    giftBox.style.transform = "scale(.85) rotate(25deg)";

    giftBox.innerHTML = "💖";

    setTimeout(() => {

        giftBox.style.transform = "scale(1) rotate(0deg)";

    }, 350);

}

if (giftBox) {

    giftBox.addEventListener("click", openGiftAnimation);

}

if (openGift) {

    openGift.addEventListener("click", () => {

        openGiftAnimation();

        document.getElementById("letter").scrollIntoView({

            behavior: "smooth"

        });

    });

}

/* ==========================================
   LETTER
========================================== */

if (readLetter) {

    readLetter.addEventListener("click", () => {

        secretMessage.style.display = "block";

        secretMessage.classList.add("fade-up");

        readLetter.innerHTML = "💖 Thank You";

        readLetter.disabled = true;

    });

}

/* ==========================================
   CELEBRATION
========================================== */

if (celebrate) {

    celebrate.addEventListener("click", () => {

        celebrate.innerHTML = "🎉 Yay! 🎉";

        celebrate.style.background =

            "linear-gradient(135deg,#00c853,#00e676)";

        launchHearts();

    });

}

/* ==========================================
   HEART EFFECT
========================================== */

function launchHearts() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =

            Math.random() > .5 ? "💖" : "🌸";

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =

            20 + Math.random() * 20 + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "999999";

        heart.style.transition =

            "transform 3s linear, opacity 3s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =

                `translateY(-${window.innerHeight + 200}px)
                 rotate(${Math.random()*720}deg)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 3200);

    }

}

/* ==========================================
   SMALL TYPE EFFECT
========================================== */

const title = document.getElementById("welcomeText");

if (title) {

    const original = title.innerHTML;

    title.innerHTML = "";

    let i = 0;

    function typeWriter() {

        if (i < original.length) {

            title.innerHTML += original.charAt(i);

            i++;

            setTimeout(typeWriter, 70);

        }

    }

    setTimeout(typeWriter, 600);

}

/* ==========================================
   END J1.3
========================================== */
/* ==========================================================
   J1.4
   FINAL EFFECTS + BUG FIXES
========================================================== */

/* ==========================================
   PARALLAX ORBS
========================================== */

const orbs = document.querySelectorAll(".orb");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {

        const speed = (index + 1) * 12;

        orb.style.transform =

            `translate(${x * speed}px, ${y * speed}px)`;

    });

});

/* ==========================================
   RIPPLE EFFECT
========================================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top =
            (e.clientY - rect.top - size / 2) + "px";

        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.35)";
        ripple.style.transform = "scale(0)";
        ripple.style.pointerEvents = "none";
        ripple.style.animation = "ripple .7s linear";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 700);

    });

});

/* ==========================================
   RIPPLE KEYFRAME
========================================== */

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

@keyframes ripple{

0%{

transform:scale(0);

opacity:1;

}

100%{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);

/* ==========================================
   NAVIGATION HIGHLIGHT
========================================== */

window.addEventListener("scroll", () => {

    document.querySelectorAll("section").forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            section.classList.add("show");

        }

    });

});

/* ==========================================
   AUTO SCROLL TOP
========================================== */

window.addEventListener("beforeunload", () => {

    window.scrollTo(0, 0);

});

/* ==========================================
   PRELOAD MUSIC
========================================== */

if (bgMusic) {

    bgMusic.load();

}

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.clear();

console.log(

"%c🌸 A Small Surprise 🌸",

"color:#ff4fa3;font-size:22px;font-weight:bold;"

);

console.log(

"%cMade with ❤️",

"color:#7b61ff;font-size:14px;"

);
/*==========================================
 Premium Music Player
==========================================*/

const musicBtn=document.getElementById("musicBtn");

const musicStatus=document.getElementById("musicStatus");

const musicIcon=document.getElementById("musicIcon");

musicBtn.addEventListener("click",()=>{

if(bgMusic.paused){

bgMusic.play();

musicStatus.innerHTML="Music ON";

musicIcon.innerHTML="🎵";

musicIcon.style.animation="spinDisc 4s linear infinite";

}

else{

bgMusic.pause();

musicStatus.innerHTML="Music OFF";

musicIcon.innerHTML="🔇";

musicIcon.style.animation="none";

}

});

/* ==========================================
   END
========================================== */
