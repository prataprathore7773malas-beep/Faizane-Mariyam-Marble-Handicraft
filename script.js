// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {

    navbar.style.background = "rgba(15,23,42,.98)";
    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,.25)";

  } else {

    navbar.style.background =
      "rgba(15,23,42,.90)";

    navbar.style.boxShadow = "none";
  }

});

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (scrollY >= sectionTop) {

      current =
        section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {

      link.classList.add("active");

    }

  });

});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters =
document.querySelectorAll(".stat-box h3");

let started = false;

function runCounter() {

  counters.forEach(counter => {

    const target =
      counter.innerText;

    const number =
      parseInt(target.replace(/\D/g,""));

    let count = 0;

    const speed =
      number / 80;

    const update = () => {

      count += speed;

      if (count < number) {

        if(target.includes("%")){

          counter.innerText =
          Math.floor(count) + "%";

        } else {

          counter.innerText =
          Math.floor(count) + "+";

        }

        requestAnimationFrame(update);

      } else {

        counter.innerText =
        target;
      }

    };

    update();

  });

}

window.addEventListener("scroll", () => {

  const stats =
  document.querySelector(".stats");

  if(!stats) return;

  const top =
  stats.offsetTop - 500;

  if(window.scrollY > top && !started){

    runCounter();

    started = true;
  }

});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealItems =
document.querySelectorAll(
".category-card,.product-card,.why-card,.process-card,.gallery-box"
);

const reveal = () => {

  revealItems.forEach(item => {

    const top =
    item.getBoundingClientRect().top;

    if(top < window.innerHeight - 80){

      item.style.opacity = "1";
      item.style.transform =
      "translateY(0)";
    }

  });

};

revealItems.forEach(item => {

  item.style.opacity = "0";

  item.style.transform =
  "translateY(40px)";

  item.style.transition =
  ".8s ease";

});

window.addEventListener(
"scroll",
reveal
);

reveal();

// ==========================
// CONTACT FORM
// ==========================

const form =
document.querySelector("form");

if(form){

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
form.querySelector(
'input[type="text"]'
).value;

const phone =
form.querySelector(
'input[type="tel"]'
).value;

const requirement =
form.querySelector(
'select'
).value;

const message =
form.querySelector(
'textarea'
).value;

const whatsappMessage =

`Hello Faizane Mariyam Marble Handicraft,

Name: ${name}

Phone: ${phone}

Requirement: ${requirement}

Message: ${message}`;

const url =

`https://wa.me/919664462522?text=${encodeURIComponent(whatsappMessage)}`;

window.open(
url,
"_blank"
);

form.reset();

});

}

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});
