/* ===================================================
   KRISHNA CARGO CARRIER
   script.js
=================================================== */

/* ===========================
SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ===========================
COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target/120;

const updateCounter = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target+"+";

}

}

updateCounter();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ===========================
BACK TO TOP BUTTON
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

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

/* ===========================
FAQ ACCORDION
=========================== */

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const answer=item.querySelector("p");

answer.style.display="none";

item.style.cursor="pointer";

item.addEventListener("click",()=>{

const isOpen=answer.style.display==="block";

faqItems.forEach(f=>{

f.querySelector("p").style.display="none";

});

answer.style.display=isOpen?"none":"block";

});

});

/* ===========================
NAVBAR SHADOW
=========================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 15px 30px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});

/* ===========================
SCROLL REVEAL
=========================== */

const revealElements=document.querySelectorAll(

".service-card,.why-card,.fleet-card,.review-card,.stat-card,.faq-item,.about,.process-grid div"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition="all .8s ease";

revealObserver.observe(el);

});

/* ===========================
ACTIVE MENU
=========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

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

/* ===========================
BUTTON RIPPLE EFFECT
=========================== */

const buttons=document.querySelectorAll(".primary-btn,.secondary-btn,.call-btn,.whatsapp-btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0)";

});

});

/* ===========================
LOADING ANIMATION
=========================== */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .8s ease";

/* ===========================
PREVENT EMPTY FORM
=========================== */

const forms=document.querySelectorAll("form");

forms.forEach(form=>{

form.addEventListener("submit",(e)=>{

const inputs=form.querySelectorAll("input[required],select[required]");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

input.style.border="2px solid red";

}else{

input.style.border="1px solid #ddd";

}

});

if(!valid){

e.preventDefault();

alert("Please fill all required fields.");

}

});

});

/* ===========================
CURRENT YEAR
=========================== */

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

console.log("Krishna Cargo Carrier Website Loaded Successfully 🚛");


