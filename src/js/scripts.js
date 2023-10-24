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


// скрипт для фіксованого хедеру на скрол
window.addEventListener('scroll', function () {
  const scrollFixed = document.querySelector(".fixed-navigation")
  if (window.scrollY > 0) {
    scrollFixed.classList.add('scrolled')
  } else {
    scrollFixed.classList.remove('scrolled')
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
