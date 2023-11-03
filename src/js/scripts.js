const langChange = document.querySelector('.language-switch'),
  langChangeEng = document.querySelector('.language-switchEng')
if (langChange) {
  langChange.addEventListener('mouseenter', function () {
    langChange.href = "indexEng.html"
    langChange.innerText = "ENG"
  })

  langChange.addEventListener('mouseleave', function () {
    langChange.href = "index.html"
    langChange.innerText = "UA"
  })
} else if (langChangeEng) {
  langChangeEng.addEventListener('mouseenter', function () {
    langChangeEng.innerText = "UA"
    langChangeEng.href = "index.html"
  })

  langChangeEng.addEventListener('mouseleave', function () {
    langChangeEng.innerText = "ENG"
    langChangeEng.href = "indexEng.html"
  })
}


document.addEventListener("DOMContentLoaded", function() {
  console.log(1);
  const portfolioNavItems = document.querySelectorAll('.portfolio-slider-ul li'),
    tabBlocks = document.querySelectorAll('.tabs-block'),
    textBlocks = document.querySelectorAll('.content-title')
  
  console.log(portfolioNavItems);
  
  tabBlocks.forEach((block, index) => {
    block.style.opacity = index === 0 ? 1 : 0
    block.style.zIndex = index === 0 ? 2 : 0
  })
  console.log("hi");
  textBlocks.forEach((block, index) => {
  
    block.style.display = index === 0 ? 'block' : 'none'
  })
  
  portfolioNavItems.forEach((item, index) => {
    item.style.color = '#fff'
    item.addEventListener('click', () => {
      const dataValue = item.getAttribute('data-value')
  
      portfolioNavItems.forEach((navItem) => {
        navItem.style.color = '#fff'
      })
  
      item.style.color = '#24d7ff'
  
      textBlocks.forEach((block) => {
        block.style.display = "none"
        block.style.transform = "translateY(50px)"
        block.style.transition = "1s"
        setTimeout(() => {
          block.style.transform = "translateY(0px)"
  
        }, 0)
      })
  
      const selectedTextBlock = document.querySelector(`.content-title[data-value="${dataValue}"]`)
      if (selectedTextBlock) {
        selectedTextBlock.style.display = 'block'
      }
  
      tabBlocks.forEach((block) => {
        const blockDataValue = block.getAttribute('data-value')
        block.style.opacity = blockDataValue === dataValue ? 1 : 0
        block.style.zIndex = blockDataValue === dataValue ? 2 : 0
      })
    })
  
    if (index === 0) {
      item.style.color = '#24d7ff'
    }
  })
})

// скрипт для фіксованого хедеру на скрол
window.addEventListener('scroll', function () {
  const scrollFixed = document.querySelector(".fixed-navigation")
  if (scrollFixed) {
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

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menuButton"),
    menuSlide = document.getElementById("menu-slide"),
    menuOpen = document.getElementById("menuOpen")
    body = document.querySelector("body")

  menuBtn.addEventListener("click", function () {
    body.classList.toggle("hidden")
    menuBtn.classList.toggle("menuBtnClicked")
    menuOpen.classList.toggle("menuOpenClicked")
    menuSlide.classList.toggle("menu-slide-upper")
  })
})


// карусель зображень на гол сторінці

const carouselBlock = document.querySelector(".main-project")

if(carouselBlock) {
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

  
  for (let i = 0; i < itemsImg.length || i < itemsImgRight.length || i < itemsImgCenter.length; i++) {
    if (itemsImg) {
      const cloneImg = itemsImg[i].cloneNode(true)
      carouselVertical.appendChild(cloneImg)
    }
    if (itemsImgRight) {
      const cloneImgRight = itemsImgRight[i].cloneNode(true)
      carouselVerticalRight.appendChild(cloneImgRight)
    }
    if (itemsImgCenter) {
      const cloneImgCenter = itemsImgCenter[i].cloneNode(true)
      carouselVerticalCenter.appendChild(cloneImgCenter)
    }
  }
  itemsImg = [...document.querySelectorAll(".down-block")]
  itemsImgRight = [...document.querySelectorAll(".down-block-right")]
  itemsImgCenter = [...document.querySelectorAll(".up-block")]
  
  for (let i = 0; i < itemsImg.length || i < itemsImgRight.length || i < itemsImgCenter.length; i++) {
    if (itemsImg) {
      itemsImg[i].style.position = "absolute"
      itemsImg[i].style.top = `${itemsImgheight * i}rem`
    }
    if (itemsImgRight) {
      itemsImgRight[i].style.position = "absolute"
      itemsImg[i].style.top = `${itemsImgheightRight * i}rem`
    }
    if (itemsImgCenter) {
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

carouselBlock.addEventListener("mouseenter", () => {
  stopScroll()
})

carouselBlock.addEventListener("mouseleave", () => {
  startScroll()
})

startScroll()
}


// document.addEventListener("DOMContentLoaded", function () {
//   var menuBtn = document.getElementById("menuBtn")
//   var menuSlide = document.getElementById("menu-slide")
//   var menuOpen = document.getElementById("menuOpen")


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

document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.getElementById("menuBtn")
  var menuSlide = document.getElementById("menu-slide")
  var menuOpen = document.getElementById("menuOpen")

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("menuBtnClicked")
    menuOpen.classList.toggle("menuOpenClicked")
    menuSlide.classList.toggle("menu-slide-upper")
  })

  
})

const buttonMain = document.querySelector(".btn-href"),
  hrefMain = buttonMain.getAttribute("href"),
  arrowMain = document.querySelector("#arrow-main")
    
buttonMain.addEventListener("click", function() {
    window.location.href = hrefMain
})

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const elipseBox = document.querySelectorAll(".elipse-box")

console.log(elipseBox);
function updatePosition() {
  intervalPos = setInterval(() => {
    elipseBox.forEach((item) => {
      stepPos = 1

      item.style.left = `${rand(1,100)}%`
    })
  }, 5000)
}
updatePosition()

//   menuBtn.addEventListener("click", function () {
//     menuBtn.classList.toggle("menuBtnClicked")
//     menuOpen.classList.toggle("menuOpenClicked")
//     menuSlide.classList.toggle("menu-slide-upper")
//   })



// })


