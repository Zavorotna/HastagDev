function changeText(element, newText) { //function for change lang Ua to Eng, and Eng to Ua on header
  if (element.innerText !== newText) {
    element.style.opacity = 0
    setTimeout(() => {
      element.innerText = newText;
      element.href = (newText === 'ENG') ? 'indexEng.html' : 'index.html';
    }, 500)
    element.style.opacity = 1
  }
} 

document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menuBtn");
    var menuSlide = document.getElementById("menu-slide");
    var menuOpen = document.getElementById("menuOpen");
  
    menuBtn.addEventListener("click", function() {
      menuBtn.classList.toggle("menuBtnClicked");
      menuOpen.classList.toggle("menuOpenClicked");
      menuSlide.classList.toggle("menu-slide-upper");
    });
  });

let lookAll = document.getElementById("lookall");
let lookSites = document.getElementById("lookSites");
let lookLogo = document.getElementById("lookLogo");
let lookCards = document.getElementById("lookCards");
let reklamCreat = document.getElementById("reklamCreat");

let lookAllCont = document.getElementById("contentAll");
let lookSitesCont = document.getElementById("contentSites");
let lookLogoCont = document.getElementById("contentLogo");
let lookCardsCont = document.getElementById("contentCards");
let reklamCreatCont = document.getElementById("contentReklam");

lookAll.onclick = function() {
  lookAll.style.color = "#24D7FF"
  lookSites.style.color = "#FFF"
  lookLogo.style.color = "#FFF"
  lookCards.style.color = "#FFF"
  reklamCreat.style.color = "#FFF"
  lookAllCont.style.display = "block";
  lookSitesCont.style.display = "none";
  lookLogoCont.style.display = "none";
  lookCardsCont.style.display = "none";
  reklamCreatCont.style.display = "none";
};

lookSites.onclick = function() {
  lookAll.style.color = "#FFF"
  lookSites.style.color = "#24D7FF"
  lookLogo.style.color = "#FFF"
  lookCards.style.color = "#FFF"
  reklamCreat.style.color = "#FFF"
  lookAllCont.style.display = "none";
  lookSitesCont.style.display = "block";
  lookLogoCont.style.display = "none";
  lookCardsCont.style.display = "none";
  reklamCreatCont.style.display = "none";
};

lookLogo.onclick = function() {
  lookAll.style.color = "#FFF"
  lookSites.style.color = "#FFF"
  lookLogo.style.color = "#24D7FF"
  lookCards.style.color = "#FFF"
  reklamCreat.style.color = "#FFF"
  lookAllCont.style.display = "none";
  lookSitesCont.style.display = "none";
  lookLogoCont.style.display = "block";
  lookCardsCont.style.display = "none";
  reklamCreatCont.style.display = "none";
};

lookCards.onclick = function() {
  lookAll.style.color = "#FFF"
  lookSites.style.color = "#FFF"
  lookLogo.style.color = "#FFF"
  lookCards.style.color = "#24D7FF"
  reklamCreat.style.color = "#FFF"
  lookAllCont.style.display = "none";
  lookSitesCont.style.display = "none";
  lookLogoCont.style.display = "none";
  lookCardsCont.style.display = "block";
  reklamCreatCont.style.display = "none";
};

reklamCreat.onclick = function() {
  lookAll.style.color = "#FFF"
  lookSites.style.color = "#FFF"
  lookLogo.style.color = "#FFF"
  lookCards.style.color = "#FFF"
  reklamCreat.style.color = "#24D7FF"
  lookAllCont.style.display = "none";
  lookSitesCont.style.display = "none";
  lookLogoCont.style.display = "none";
  lookCardsCont.style.display = "none";
  reklamCreatCont.style.display = "block";
};

// Получаем ссылки на элементы
const lookAllLink = document.getElementById('lookall');
const lookSitesLink = document.getElementById('lookSites');
const lookLogoLink = document.getElementById('lookLogo');
const lookCardsLink = document.getElementById('lookCards');
const reklamCreatLink = document.getElementById('reklamCreat');

// Получаем блоки с содержимым
const slideLookAll = document.getElementById('slideLookAll');
const slideLookSites = document.getElementById('slideLookSites');
const slideLookLogo = document.getElementById('slideLookLogo');
const slideLookCard = document.getElementById('slideLookCard');
const slideLookReklam = document.getElementById('slideLookReklam');

// Функция для скрытия всех блоков с содержимым
function hideAllSlides() {
  slideLookAll.style.display = 'none';
  slideLookSites.style.display = 'none';
  slideLookLogo.style.display = 'none';
  slideLookCard.style.display = 'none';
  slideLookReklam.style.display = 'none';
}

// Обработчики событий для ссылок
lookAllLink.addEventListener('click', function() {
  hideAllSlides();
  slideLookAll.style.display = 'flex';
});

lookSitesLink.addEventListener('click', function() {
  hideAllSlides();
  slideLookSites.style.display = 'flex';
});

lookLogoLink.addEventListener('click', function() {
  hideAllSlides();
  slideLookLogo.style.display = 'flex';
});

lookCardsLink.addEventListener('click', function() {
  hideAllSlides();
  slideLookCard.style.display = 'flex';
});

reklamCreatLink.addEventListener('click', function() {
  hideAllSlides();
  slideLookReklam.style.display = 'flex';
});
