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


document.addEventListener("DOMContentLoaded", function () {
  const portfolioNavItems = document.querySelectorAll('.portfolio-slider-ul li'),
    tabBlocks = document.querySelectorAll('.tabs-block'),
    textBlocks = document.querySelectorAll('.content-title')


  tabBlocks.forEach((block, index) => {
    block.style.opacity = index === 0 ? 1 : 0
    block.style.zIndex = index === 0 ? 2 : 0
  })
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


document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn"),
    menuSlide = document.getElementById("menu-slide"),
    menuOpen = document.getElementById("menuOpen")
  let resizeTimeout

  // функція для виконання коду після завершення ресайзу
  function resizeImgHeight() {
    const portfolioImages = document.querySelectorAll(".portfolio-img-smaller img")
    if (portfolioImages) {
      console.log(portfolioImages)
      portfolioImages.forEach((img) => {
        let imgWidth = img.getBoundingClientRect().width
        img.style.transition = "1s"
        img.style.height = (imgWidth * 0.64) + "px"
      })
    }
  }

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(resizeImgHeight, 1000)
  })

  menuBtn.addEventListener("click", function () {
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
document.addEventListener("DOMContentLoaded", function () {

  const carouselBlock = document.querySelector(".main-project")

  if (carouselBlock) {
    // const carouselVertical = document.querySelector(".left-vertical"),
    //   carouselVerticalRight = document.querySelector(".right-vertical"),
    //   carouselVerticalCenter = document.querySelector(".center")

    let itemsImg = [...document.querySelectorAll(".down-block")],
      itemsImgRight = [...document.querySelectorAll(".down-block-right")],
      itemsImgCenter = [...document.querySelectorAll(".up-block")],
      itemsImgCenterHeight = itemsImgCenter[0].offsetHeight + 20,
      itemsImgheightRight = itemsImgRight[0].offsetHeight + 20,
      itemsImgheight = itemsImg[0].offsetHeight + 20
    let step = 1

    console.log(itemsImgheight);
    // for (let i = 0; i < itemsImg.length || i < itemsImgRight.length || i < itemsImgCenter.length; i++) {
    //   if (itemsImg) {
    //     const cloneImg = itemsImg[i].cloneNode(true)
    //     carouselVertical.appendChild(cloneImg)
    //   }
    //   if (itemsImgRight) {
    //     const cloneImgRight = itemsImgRight[i].cloneNode(true)
    //     carouselVerticalRight.appendChild(cloneImgRight)
    //   }
    //   if (itemsImgCenter) {
    //     const cloneImgCenter = itemsImgCenter[i].cloneNode(true)
    //     carouselVerticalCenter.appendChild(cloneImgCenter)
    //   }
    // }

    // itemsImg = [...document.querySelectorAll(".down-block")]
    // itemsImgRight = [...document.querySelectorAll(".down-block-right")]
    // itemsImgCenter = [...document.querySelectorAll(".up-block")]

    for (let i = 0; i < itemsImg.length || i < itemsImgRight.length || i < itemsImgCenter.length; i++) {
      if (itemsImg) {
        itemsImg[i].style.position = "absolute"
        itemsImg[i].style.top = `${itemsImgheight * i}rem`
      }
      if (itemsImgRight) {
        itemsImgRight[i].style.position = "absolute"
        itemsImgRight[i].style.top = `${itemsImgheightRight * i}rem`
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
        // console.log(currentTop);
        currentTop += step
        currentTopRight += step
        currentTopCenter -= step

        if (currentTop >= window.innerHeight) {
          currentTop = -itemsImgheight
        }
        if(currentTopRight >= window.innerHeight) {
          currentTopRight = -itemsImgheightRight 
        }
        if (currentTopCenter <= -itemsImgCenterHeight) {
          currentTopCenter = window.innerHeight;
        }

        itemsImg[i].style.top = currentTop + "rem"
        itemsImgRight[i].style.top = currentTopRight + "rem"
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

})


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

const buttonMain = document.querySelector(".btn-href")
if (buttonMain) {
  const hrefMain = buttonMain.getAttribute("href")

  buttonMain.addEventListener("click", function () {
    window.location.href = hrefMain
  })

}
// animation elipse position
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 10)) + min
}

const elipseBox = [...document.querySelectorAll(".elipse-box")],
  stepRand = 0.5

function updatePosition(elipse) {
  const topRand = rand(1, 100),
    leftRand = rand(1, 100),
    intervalPos = setInterval(() => {
      // console.log(elipse.style.top);
      const currentTopElipse = parseFloat(elipse.style.top) || topRand + 40,
        currentLeftElipse = parseFloat(elipse.style.left) || leftRand + 40

      if (currentLeftElipse < leftRand) {
        elipse.style.left = `${currentLeftElipse + stepRand}%`
      } else if (currentLeftElipse > leftRand) {
        elipse.style.left = `${currentLeftElipse - stepRand}%`
      }

      if (currentTopElipse < topRand) {
        elipse.style.top = `${currentTopElipse + stepRand}%`
      } else if (currentTopElipse > topRand) {
        elipse.style.top = `${currentTopElipse - stepRand}%`
      }

      if (currentTopElipse === topRand && currentLeftElipse === leftRand) {
        clearInterval(intervalPos)
        updatePosition(elipse)
      }
    }, 100)
}

elipseBox.forEach((elipse) => {
  updatePosition(elipse)
})


// function updateWidthDynamically(elipseWidth) {
//   let targetWidth = rand(10, 100)
//   const currentWidth = parseFloat(window.getComputedStyle(elipseWidth).width),
//     direction = (targetWidth > currentWidth) ? 1 : -1,
//     widthinterval = setInterval(() => {
//       const newWidth = currentWidth + direction
//       if(currentWidth < targetWidth) {
//         elipseWidth.style.width = `${newWidth + 1}vw`
//       } else if (currentWidth > targetWidth) {
//         elipseWidth.style.width = `${newWidth - 1}vw`
//       }
//       if (newWidth == targetWidth) {
//         clearInterval(widthinterval)
//       }
//     }, 20)
// }

// const elipse1 = document.querySelector(".elipse1"),
//   elipse2 = document.querySelector(".elipse2"),
//   elipse3 = document.querySelector(".elipse3"),
//   elipse4 = document.querySelector(".elipse4")

// setInterval(() => {
//   updateWidthDynamically(elipse1)
//   updateWidthDynamically(elipse2)
//   updateWidthDynamically(elipse3)
//   updateWidthDynamically(elipse4)
// }, 2000)

//   // currWidthElipse5 = currentWidth5.width

//   console.log(currWidthElipse1, currWidthElipse2, currWidthElipse3, currWidthElipse4)

