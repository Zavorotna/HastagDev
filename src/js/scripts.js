const langChange = document.querySelector('.language-switch'),
  langChangeEng = document.querySelector('.language-switchEng')
if(langChange) {
  langChange.addEventListener('mouseenter', function() {
    langChange.href = "indexEng.html"
    langChange.innerText = "ENG"
  })
  
  langChange.addEventListener('mouseleave', function() {
    langChange.href = "index.html"
    langChange.innerText = "UA"
  })
} else if(langChangeEng){
  langChangeEng.addEventListener('mouseenter', function() {
    langChangeEng.innerText = "UA"
    langChangeEng.href = "index.html"
  })
  
  langChangeEng.addEventListener('mouseleave', function() {
    langChangeEng.innerText = "ENG"
    langChangeEng.href = "indexEng.html"
  })
}


// скрипт для фіксованого хедеру на скрол
window.addEventListener('scroll', function () {
  const scrollFixed = document.querySelector(".fixed-navigation")
  if(scrollFixed) {
    if (window.scrollY > 0) {
      scrollFixed.classList.add('scrolled')
    } else {
      scrollFixed.classList.remove('scrolled')
    }

  }
})

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn"),
      menuSlide = document.getElementById("menu-slide"),
      menuOpen = document.getElementById("menuOpen")
  
    menuBtn.addEventListener("click", function() {
      menuBtn.classList.toggle("menuBtnClicked")
      menuOpen.classList.toggle("menuOpenClicked")
      menuSlide.classList.toggle("menu-slide-upper")
    })
  })

// карусель зображень на гол сторінці

const carouselVertical = document.querySelector(".left-vertical"),
  carouselVerticalRight = document.querySelector(".right-vertical"),
  carouselVerticalCenter = document.querySelector(".center")

let itemsImg = [...document.querySelectorAll(".down-block")],
  itemsImgRight = [...document.querySelectorAll(".down-block-right")],
  itemsImgCenter = [...document.querySelectorAll(".up-block")],
  itemsImgCenterHeight = itemsImgCenter[0].offsetHeight,
  itemsImgheightRight = itemsImgRight[0].offsetHeight,
  itemsImgheight = itemsImg[0].offsetHeight
  let step = 1

  for(let i = 0; i < itemsImg.length || i < itemsImgRight.length || i < itemsImgCenter.length; i++) {
    if(itemsImg) {
      const cloneImg = itemsImg[i].cloneNode(true)
      carouselVertical.appendChild(cloneImg)
    }
    if(itemsImgRight) {
      const cloneImgRight = itemsImgRight[i].cloneNode(true)
      carouselVerticalRight.appendChild(cloneImgRight)
    }
    if(itemsImgCenter) {
      const cloneImgCenter = itemsImgCenter[i].cloneNode(true)
      carouselVerticalCenter.appendChild(cloneImgCenter)
    }
  }
  itemsImg = [...document.querySelectorAll(".down-block")]
  itemsImgRight = [...document.querySelectorAll(".down-block-right")]
  itemsImgCenter = [...document.querySelectorAll(".up-block")]

  for(let i = 0; i < itemsImg.length || i < itemsImgRight.length || i < itemsImgCenter.length; i++) {
    if(itemsImg) {
      itemsImg[i].style.position = "absolute"
      itemsImg[i].style.top = `${itemsImgheight * i}rem`
    }
    if(itemsImgRight) {
      itemsImgRight[i].style.position = "absolute"
      itemsImg[i].style.top = `${itemsImgheightRight * i}rem`
    }
    if(itemsImgCenter) {
      itemsImgCenter[i].style.position = "absolute"
      itemsImgCenter[i].style.top = `${itemsImgCenterHeight * i}rem`
    }
  }
  
function updateCarouselImg() {
  for (let i = 0; i < itemsImg.length || i < itemsImgRight.length || i < itemsImgCenter.length; i++) {

    let currentTop = parseFloat(itemsImg[i].style.top),
      currentTopRight = parseFloat(itemsImgRight[i].style.top),
      currentTopCenter = parseFloat(itemsImgCenter[i].style.top)

    currentTop += step
    currentTopRight += step
    currentTopCenter -= step

    if (currentTop >= window.innerHeight) {
        currentTop = -305
    }
    if (currentTopCenter <= -605) {
      currentTopCenter = window.innerHeight;
  }

    itemsImg[i].style.top = currentTop + "rem"
    itemsImgRight[i].style.top = currentTop + "rem"
    itemsImgCenter[i].style.top = currentTopCenter + "rem"
  }
}

updateCarouselImg()

function startScroll() {
  autoScrollInterval = setInterval(() => {
    updateCarouselImg()
  }, 20)
}

function stopScroll() {
  clearInterval(autoScrollInterval)
}

carouselVertical.addEventListener("mouseenter", () => {
  stopScroll()
})

carouselVertical.addEventListener("mouseleave", () => {
  startScroll()
})

startScroll()

// let lookAll = document.getElementById("lookall");
// let lookSites = document.getElementById("lookSites");
// let lookLogo = document.getElementById("lookLogo");
// let lookCards = document.getElementById("lookCards");
// let reklamCreat = document.getElementById("reklamCreat");

// let lookAllCont = document.getElementById("contentAll");
// let lookSitesCont = document.getElementById("contentSites");
// let lookLogoCont = document.getElementById("contentLogo");
// let lookCardsCont = document.getElementById("contentCards");
// let reklamCreatCont = document.getElementById("contentReklam");
// if(lookAll) {
//   lookAll.onclick = function() {
//     lookAll.style.color = "#24D7FF"
//     lookSites.style.color = "#FFF"
//     lookLogo.style.color = "#FFF"
//     lookCards.style.color = "#FFF"
//     reklamCreat.style.color = "#FFF"
//     lookAllCont.style.display = "block";
//     lookSitesCont.style.display = "none";
//     lookLogoCont.style.display = "none";
//     lookCardsCont.style.display = "none";
//     reklamCreatCont.style.display = "none";
//   };
// } else if(lookSites) {
//   lookSites.onclick = function() {
//     lookAll.style.color = "#FFF"
//     lookSites.style.color = "#24D7FF"
//     lookLogo.style.color = "#FFF"
//     lookCards.style.color = "#FFF"
//     reklamCreat.style.color = "#FFF"
//     lookAllCont.style.display = "none";
//     lookSitesCont.style.display = "block";
//     lookLogoCont.style.display = "none";
//     lookCardsCont.style.display = "none";
//     reklamCreatCont.style.display = "none";
//   };
// } else if (lookLogo) {
//   lookLogo.onclick = function() {
//     lookAll.style.color = "#FFF"
//     lookSites.style.color = "#FFF"
//     lookLogo.style.color = "#24D7FF"
//     lookCards.style.color = "#FFF"
//     reklamCreat.style.color = "#FFF"
//     lookAllCont.style.display = "none";
//     lookSitesCont.style.display = "none";
//     lookLogoCont.style.display = "block";
//     lookCardsCont.style.display = "none";
//     reklamCreatCont.style.display = "none";
//   };
// } else if (lookCards) {
//   lookCards.onclick = function() {
//     lookAll.style.color = "#FFF"
//     lookSites.style.color = "#FFF"
//     lookLogo.style.color = "#FFF"
//     lookCards.style.color = "#24D7FF"
//     reklamCreat.style.color = "#FFF"
//     lookAllCont.style.display = "none";
//     lookSitesCont.style.display = "none";
//     lookLogoCont.style.display = "none";
//     lookCardsCont.style.display = "block";
//     reklamCreatCont.style.display = "none";
//   };
// } else if (reklamCreat){
//   reklamCreat.onclick = function() {
//     lookAll.style.color = "#FFF"
//     lookSites.style.color = "#FFF"
//     lookLogo.style.color = "#FFF"
//     lookCards.style.color = "#FFF"
//     reklamCreat.style.color = "#24D7FF"
//     lookAllCont.style.display = "none";
//     lookSitesCont.style.display = "none";
//     lookLogoCont.style.display = "none";
//     lookCardsCont.style.display = "none";
//     reklamCreatCont.style.display = "block";
//   };
// }





// // Получаем ссылки на элементы
// const lookAllLink = document.getElementById('lookall');
// const lookSitesLink = document.getElementById('lookSites');
// const lookLogoLink = document.getElementById('lookLogo');
// const lookCardsLink = document.getElementById('lookCards');
// const reklamCreatLink = document.getElementById('reklamCreat');

// // Получаем блоки с содержимым
// const slideLookAll = document.getElementById('slideLookAll');
// const slideLookSites = document.getElementById('slideLookSites');
// const slideLookLogo = document.getElementById('slideLookLogo');
// const slideLookCard = document.getElementById('slideLookCard');
// const slideLookReklam = document.getElementById('slideLookReklam');

// // Функция для скрытия всех блоков с содержимым
// function hideAllSlides() {
//   slideLookAll.style.display = 'none';
//   slideLookSites.style.display = 'none';
//   slideLookLogo.style.display = 'none';
//   slideLookCard.style.display = 'none';
//   slideLookReklam.style.display = 'none';
// }

// // Обработчики событий для ссылок
// lookAllLink.addEventListener('click', function() {
//   hideAllSlides();
//   slideLookAll.style.display = 'flex';
// });

// lookSitesLink.addEventListener('click', function() {
//   hideAllSlides();
//   slideLookSites.style.display = 'flex';
// });

// lookLogoLink.addEventListener('click', function() {
//   hideAllSlides();
//   slideLookLogo.style.display = 'flex';
// });

// lookCardsLink.addEventListener('click', function() {
//   hideAllSlides();
//   slideLookCard.style.display = 'flex';
// });

// reklamCreatLink.addEventListener('click', function() {
//   hideAllSlides();
//   slideLookReklam.style.display = 'flex';
// });
