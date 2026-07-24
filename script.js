/* ==========================================================
   KRISHNA CARGO CARRIER V3
========================================================== */

/* ===============================
MOBILE MENU
=============================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuOverlay = document.getElementById("menuOverlay");

if(menuToggle && navMenu){

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");
menuOverlay.classList.toggle("active");

document.body.style.overflow =
navMenu.classList.contains("active")
? "hidden"
: "";

const icon = menuToggle.querySelector("i");

icon.classList.toggle("fa-bars");
icon.classList.toggle("fa-xmark");

});

menuOverlay.addEventListener("click",()=>{

navMenu.classList.remove("active");
menuOverlay.classList.remove("active");

document.body.style.overflow="";

const icon = menuToggle.querySelector("i");

icon.classList.remove("fa-xmark");
icon.classList.add("fa-bars");

});

document.querySelectorAll("#navMenu a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");
menuOverlay.classList.remove("active");

document.body.style.overflow="";

const icon = menuToggle.querySelector("i");

icon.classList.remove("fa-xmark");
icon.classList.add("fa-bars");

});

});

}

/* ===============================
SMOOTH SCROLL
=============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ===============================
HEADER SHADOW
=============================== */

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 5px 18px rgba(0,0,0,.08)";

}

});

/* ===============================
COUNTER
=============================== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const increment=target/120;

const update=()=>{

count+=increment;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ===============================
FAQ
=============================== */

document.querySelectorAll(".faq-item").forEach(item=>{

item.addEventListener("click",()=>{

const p=item.querySelector("p");

const open=p.style.display==="block";

document.querySelectorAll(".faq-item p").forEach(answer=>{

answer.style.display="none";

});

p.style.display=open?"none":"block";

});

});

/* ===============================
SCROLL REVEAL
=============================== */

const reveal=document.querySelectorAll(

".service-card,.why-card,.fleet-card,.review-card,.stat-card,.process-card,.about-image,.about-content"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

reveal.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition=".8s";

revealObserver.observe(el);

});

/* ===============================
ACTIVE NAVIGATION
=============================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("#navMenu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ===============================
BACK TO TOP
=============================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ===============================
QUOTE FORM → WHATSAPP
=============================== */

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const data = new FormData(this);

        const templateParams = {
            name: data.get("name"),
            phone: data.get("phone"),
            pickup: data.get("pickup"),
            drop: data.get("drop"),
            vehicle: data.get("vehicle"),
            carrier: data.get("carrier"),
            date: data.get("date"),
            message: data.get("message")
        };

        emailjs.send(
            "service_5y4vws9",
            "template_5vb17q4",
            templateParams
        )
        .then(function () {

            const whatsappMessage =
`🚛 Krishna Cargo Carrier Quote Request

👤 Name: ${data.get("name")}

📞 Phone: ${data.get("phone")}

📍 Pickup: ${data.get("pickup")}

📍 Drop: ${data.get("drop")}

🚗 Vehicle: ${data.get("vehicle")}

🚚 Carrier: ${data.get("carrier")}

📅 Date: ${data.get("date")}

📝 Message: ${data.get("message")}`;

            window.open(
    `https://wa.me/919813755160?text=${encodeURIComponent(whatsappMessage)}`,
    "_blank"
);

// Reset the form
quoteForm.reset();

// Redirect after a short delay
setTimeout(() => {
    window.location.href = "thank-you.html";
}, 1500);
        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            alert("Sorry! Something went wrong while sending your request.");

        });

    });

}
/* ===============================
CURRENT YEAR
=============================== */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

console.log("✅ Krishna Cargo Carrier V3 Loaded Successfully");