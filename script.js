const elts = {
  Text1: document.getElementById("text1"),
  Text2: document.getElementById("text2"),
};

const texts = [
  "Disabled People",
  "Orphans",
  "Homeless People",
  "Widows",
];

const morphTime = 1;
const cooldownTime = 2;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.Text1.textContent = texts[textIndex % texts.length];
elts.Text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.Text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.Text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.Text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.Text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.Text1.textContent = texts[textIndex % texts.length];
  elts.Text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.Text2.style.filter = "";
  elts.Text2.style.opacity = "100%";

  elts.Text1.style.filter = "";
  elts.Text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;
  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }
      doMorph();
  } else {
      doCooldown();
  }
}

animate();

const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);

      tabContent.forEach(tabContents => {
          tabContents.classList.remove("skill__active");
      });

      target.classList.add("skill__active");

      tabs.forEach(tab => {
          tab.classList.remove("skill__active");
      });

      tab.classList.add("skill__active");
  });
});




















































var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});