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