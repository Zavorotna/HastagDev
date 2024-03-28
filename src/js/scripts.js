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
  const portfolioSlider = document.querySelector('.portfolio-slider')

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
})



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