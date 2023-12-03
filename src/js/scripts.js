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
    textBlocks = document.querySelectorAll('.content-title'),
    portfolioSlider = document.querySelector('.portfolio-slider')
  


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
        
        let selectedBlocks = document.querySelectorAll(`.tabs-block[data-value="${dataValue}"] .card-slider`),
          allBlocksWidth = 0,
          allBlocksHeight = 0,
          selectedBlock = document.querySelectorAll(`.portfolio-slider .tabs-block`)
        for (let i = 0; i < selectedBlocks.length; i++) {
          console.log(allBlocksWidth);
          let blocksToSum = Number(selectedBlocks[i].getBoundingClientRect().width),
            blocksHeightToSum = Number(selectedBlocks[i].getBoundingClientRect().height)
          allBlocksWidth += (blocksToSum + 50) 
          allBlocksHeight += (blocksHeightToSum + 20)
        }
        selectedBlock.forEach((e) => {
          if(window.innerWidth > 450) {
            e.style.width = allBlocksWidth + 10 + "px"

          } else {
            e.style.height = allBlocksHeight + "px"
          }
          console.log(e.getBoundingClientRect().width);
        })



        // console.log("width " + allBlocksWidth)

        selectedTextBlock.style.display = 'block'
        portfolioSlider.style.width = selectedTextBlock.getBoundingClientRect().width
        
        console.log(selectedTextBlock.getBoundingClientRect().width, portfolioSlider );
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

let resizePortfolio

window.addEventListener("resize", () => {
  clearTimeout(resizePortfolio)

  resizePortfolio = setTimeout(() => {
    if (window.innerWidth <= 450) {
      document.location.reload()
      console.log(1)
    }
  }, 1000) 
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
window.onload = function () {
  const carouselBlock = document.querySelector(".main-project")

  if (carouselBlock) {
    let itemsImg = [...document.querySelectorAll(".down-block")],
      itemsImgRight = [...document.querySelectorAll(".down-block-right")],
      itemsImgCenter = [...document.querySelectorAll(".up-block")],
      itemsImgCenterHeight = itemsImgCenter[0].getBoundingClientRect().height + 20,
      itemsImgheight = 0,
      step = 1

    for(let i = 0; i < itemsImgCenter.length; i++) {
      let height = itemsImgCenter[i].getBoundingClientRect().height

      if (height > itemsImgCenterHeight) {
        itemsImgCenterHeight = height + 20
      }
    }

    function imgPosition (column) {
      let previousHeight = 0
      
      for (let i = 0; i < column.length; i++) {
        itemsImgheight = column[i].getBoundingClientRect().height + 20
        column[i].style.position = "absolute"

        if (i === 0) {
          column[0].style.top = `${0}rem`
        } else {
          column[i].style.top = `${previousHeight}rem`
        }

        previousHeight += itemsImgheight
      }
      
      return previousHeight
    }

    let leftImgHeight = imgPosition(itemsImg),
      centerImgHeight = imgPosition(itemsImgCenter),
      rightImgHeight = imgPosition(itemsImgRight)
    
    function updateCarouselImg(imgBlockHeightLeft, imgBlockHeightCenter, imgBlockHeightRight) {
      for (let i = 0; i < itemsImg.length || i < itemsImgRight.length || i < itemsImgCenter.length; i++) {
        let currentTop = parseFloat(itemsImg[i].style.top),
          currentTopRight = parseFloat(itemsImgRight[i].style.top),
          currentTopCenter = parseFloat(itemsImgCenter[i].style.top)

        currentTop += step
        currentTopRight += step
        currentTopCenter -= step

        if (currentTop >= window.innerHeight) {
          currentTop -= imgBlockHeightLeft
        }

        if (currentTopCenter <= -itemsImgCenterHeight) {
          currentTopCenter += imgBlockHeightCenter
        }

        if(currentTopRight >= window.innerHeight) {
          currentTopRight -= imgBlockHeightRight
        }

        itemsImg[i].style.top = currentTop + "rem"
        itemsImgRight[i].style.top = currentTopRight + "rem"
        itemsImgCenter[i].style.top = currentTopCenter + "rem"
      }
    }
    
    updateCarouselImg(leftImgHeight, centerImgHeight, rightImgHeight)
    
    function startScroll() {
      autoScrollInterval = setInterval(() => {
        updateCarouselImg(leftImgHeight, centerImgHeight, rightImgHeight)
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

}



document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn")
  const menuSlide = document.getElementById("menu-slide")
  const menuOpen = document.getElementById("menuOpen")

  menuBtn.addEventListener("click", function () {
    function buttonInterval () {
      let btnInterval = setInterval(function() {
        menuBtn.classList.toggle("menuBtnClicked")
        menuOpen.classList.toggle("menuOpenClicked")
        menuSlide.classList.toggle("menu-slide-upper")
        clearInterval(btnInterval)
      }, 0)
    }
    if (menuBtn.style.animation !== "auto ease 0s 1 normal none running none")  {
      menuBtn.style.animation = "none "
      buttonInterval ()
    } else {
      buttonInterval ()
      let btnTimeout = setTimeout(() => {
        menuBtn.style.animation = "shake 3s linear infinite"
        clearTimeout(btnTimeout)
      }, 1000)
    }
    
  })

})


// animation elipse position
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 10)) + min
}

const elipseBox = [...document.querySelectorAll(".elipse-box")],
  stepRand = 0.5

function updatePosition(elipse) {
  const topRand = rand(1, 50),
    leftRand = rand(1, 100),
    intervalPos = setInterval(() => {
      const currentTopElipse = parseFloat(elipse.style.top) || topRand + 20,
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








