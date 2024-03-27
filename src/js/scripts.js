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
  "use strict";

  let words = document.querySelectorAll(".word");
  words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.className = "letter";
      word.append(span);
    });
  });

  let currentWordIndex = 0;
  let maxWordIndex = words.length - 1;
  words[currentWordIndex].style.opacity = "1";

  let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord =
      currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach((letter, i) => {
      setTimeout(() => {
        letter.className = "letter out";
      }, i * 80);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
      letter.className = "letter behind";
      setTimeout(() => {
        letter.className = "letter in";
      }, 340 + i * 80);
    });
    currentWordIndex =
      currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  };

  rotateText();
  setInterval(rotateText, 4000);



  const portfolioNavItems = document.querySelectorAll('.portfolio-slider-ul li'),
    tabBlocks = document.querySelectorAll('.tabs-block'),
    textBlocks = document.querySelectorAll('.content-title'),
    portfolioSlider = document.querySelector('.portfolio-slider')

  portfolioSlider.addEventListener('wheel', function (event) {
    let maxScroll = portfolioSlider.scrollWidth - portfolioSlider.clientWidth
    let delta = event.deltaY || event.detail || (-event.wheelDelta)
    let currentScroll = portfolioSlider.scrollLeft
    if ((delta < 0 && currentScroll > 0) || (delta > 0 && currentScroll < maxScroll)) {
      event.preventDefault()
      portfolioSlider.scrollLeft = currentScroll + delta
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

  // menuBtn.addEventListener("click", function () {
  //   menuBtn.classList.toggle("menuBtnClicked")
  //   menuOpen.classList.toggle("menuOpenClicked")
  //   menuSlide.classList.toggle("menu-slide-upper")
  //   if (document.querySelector(".fixed-navigation")) {
  //     document.querySelector(".fixed-navigation").classList.toggle("slide-top")

  //   }
  // })
  // document.addEventListener("DOMContentLoaded", function () {
  // const menuBtn = document.querySelector(".menuButton"),
  //   menuSlide = document.getElementById("menu-slide"),
  //   menuOpen = document.getElementById("menuOpen")
  let body = document.querySelector("body")

  // menuBtn.addEventListener("click", function () {
  //   body.classList.toggle("hidden")
  //   menuBtn.classList.toggle("menuBtnClicked")
  //   menuOpen.classList.toggle("menuOpenClicked")
  //   menuSlide.classList.toggle("menu-slide-upper")
  //   if (document.querySelector(".fixed-navigation")) {
  //     document.querySelector(".fixed-navigation").classList.toggle("slide-top")

  //   }
  // })
  // })
})




// карусель зображень на гол сторінці
window.onload = function () {
  setTimeout(() => {

    const carouselBlock = document.querySelector(".main-project")

    if (carouselBlock) {
      let itemsImg = [...document.querySelectorAll(".down-block")],
        itemsImgRight = [...document.querySelectorAll(".down-block-right")],
        itemsImgCenter = [...document.querySelectorAll(".up-block")],
        itemsImgCenterHeight = itemsImgCenter[0].getBoundingClientRect().height + 20,
        itemsImgheight = 0,
        step = 1

      for (let i = 0; i < itemsImgCenter.length; i++) {
        let height = itemsImgCenter[i].getBoundingClientRect().height

        if (height > itemsImgCenterHeight) {
          itemsImgCenterHeight = height + 20
        }
      }

      function imgPosition(column) {
        let previousHeight = 0

        for (let i = 0; i < column.length; i++) {
          itemsImgheight = column[i].getBoundingClientRect().height + 20
          column[i].style.position = "absolute"

          if (i === 0) {
            column[0].style.top = `${0}px`
          } else {
            column[i].style.top = `${previousHeight}px`
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

          if (currentTopRight >= window.innerHeight) {
            currentTopRight -= imgBlockHeightRight
          }

          itemsImg[i].style.top = currentTop + "px"
          itemsImgRight[i].style.top = currentTopRight + "px"
          itemsImgCenter[i].style.top = currentTopCenter + "px"
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
  }, 1000)

}

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn")
  const menuSlide = document.getElementById("menu-slide")
  const menuOpen = document.getElementById("menuOpen")
  let canClick = true

  menuBtn.addEventListener("click", function () {
    if (canClick === true) {
      canClick = false

      function buttonInterval() {
        // setTimeout(function () {
        menuBtn.classList.toggle("menuBtnClicked")
        menuOpen.classList.toggle("menuOpenClicked")
        menuSlide.classList.toggle("menu-slide-upper")
        if (document.querySelector(".fixed-navigation")) {
          document.querySelector(".fixed-navigation").classList.toggle("slide-top")

        }
        // clearInterval(btnInterval)

        // }, 0)
      }
      if (menuBtn.style.animation !== "auto ease 0s 1 normal none running none") {
        menuBtn.style.animation = "none "
        buttonInterval()
      } else {
        buttonInterval()
        setTimeout(() => {
          menuBtn.style.animation = "shake 3s linear infinite"
          // clearTimeout(btnTimeout)
        }, 1000)
      }
      setTimeout(() => {
        canClick = true
        // clearTimeout(timeoutMenu)
      }, 1000)

      document.addEventListener("click", function (e) {
        let target = e.target
        if (document.querySelector(".menuBtnClicked")) {
          if (target !== document.querySelector(".cardsOverflow") && target !== menuBtn) {
            menuBtn.click()
          }

        }
      })

    }
  })

})

document.addEventListener("DOMContentLoaded", function () {
  const closePopup = document.querySelector(".popup-developer__close"),
    popup = document.querySelector(".popup-outline"),
    developerBtn = document.querySelectorAll(".team"),
    popupContent = document.querySelector(".popup-developer")

  closePopup.addEventListener("click", function () {
    popup.classList.toggle("active")
    document.body.classList.toggle("hidden")
  })

  developerBtn.forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.preventDefault()
      popup.classList.toggle("active")
      document.body.classList.toggle("hidden")

    })
  })

  popup.addEventListener("click", function (e) {
    if (!popupContent.contains(e.target)) {
      popup.classList.toggle("active")
      document.body.classList.toggle("hidden")
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
  const topRand = rand(1, 100),
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