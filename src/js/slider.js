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