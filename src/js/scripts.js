document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menuBtn");
    var menuOpen = document.getElementById("menuOpen");
  
    menuBtn.addEventListener("click", function() {
      menuBtn.classList.toggle("menuBtnClicked");
      menuOpen.classList.toggle("menuOpenClicked");
    });
  });
  
// Функція для додавання класу
function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ' ' + className;
  }
}

// Функція для видалення класу
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

// Отримуємо посилання на елементи кнопок
var lookAllBtn = document.querySelector("#lookall");
var lookSitesBtn = document.querySelector("#lookSites");
var lookLogoBtn = document.querySelector("#lookLogo");
var lookCardsBtn = document.querySelector("#lookCards");
var lookReklamBtn = document.querySelector("#lookReklam");
// Отримуємо посилання на елемент кнопки #reklamCreat
var lookReklamCreatBtn = document.querySelector("#reklamCreat");

// Отримуємо посилання на елемент блоку .portfolio-slider-look-reklam-creatives
var lookReklamCreatBlock = document.querySelector(".portfolio-slider-look-reklam-creatives");

// Додаємо подію кліку до кнопки #reklamCreat
lookReklamCreatBtn.addEventListener("click", function() {
  addClass(lookReklamCreatBlock, "display");
  removeClass(lookAllBlock, "display");
  removeClass(lookSitesBlock, "display");
  removeClass(lookLogoBlock, "display");
  removeClass(lookCardsBlock, "display");
});

// Отримуємо посилання на елементи блоків
var lookAllBlock = document.querySelector(".portfolio-slider-look-all");
var lookSitesBlock = document.querySelector(".portfolio-slider-look-sites");
var lookLogoBlock = document.querySelector(".portfolio-slider-look-logo");
var lookCardsBlock = document.querySelector(".portfolio-slider-look-card");
var lookReklamBlock = document.querySelector(".portfolio-slider-look-reklam-creatives");

// Додаємо подію кліку до кнопок
lookAllBtn.addEventListener("click", function() {
  addClass(lookAllBlock, "display");
  removeClass(lookSitesBlock, "display");
  removeClass(lookLogoBlock, "display");
  removeClass(lookCardsBlock, "display");
  removeClass(lookReklamBlock, "display");
});

lookSitesBtn.addEventListener("click", function() {
  addClass(lookSitesBlock, "display");
  removeClass(lookAllBlock, "display");
  removeClass(lookLogoBlock, "display");
  removeClass(lookCardsBlock, "display");
  removeClass(lookReklamBlock, "display");
});

lookLogoBtn.addEventListener("click", function() {
  addClass(lookLogoBlock, "display");
  removeClass(lookAllBlock, "display");
  removeClass(lookSitesBlock, "display");
  removeClass(lookCardsBlock, "display");
  removeClass(lookReklamBlock, "display");
});

lookCardsBtn.addEventListener("click", function() {
  addClass(lookCardsBlock, "display");
  removeClass(lookAllBlock, "display");
  removeClass(lookSitesBlock, "display");
  removeClass(lookLogoBlock, "display");
  removeClass(lookReklamBlock, "display");
});

lookReklamBtn.addEventListener("click", function() {
  addClass(lookReklamBlock, "display");
  removeClass(lookAllBlock, "display");
  removeClass(lookSitesBlock, "display");
  removeClass(lookLogoBlock, "display");
  removeClass(lookCardsBlock, "display");
});

