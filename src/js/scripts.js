document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menuBtn");
    var menuOpen = document.getElementById("menuOpen");
  
    menuBtn.addEventListener("click", function() {
      menuBtn.classList.toggle("menuBtnClicked");
      menuOpen.classList.toggle("menuOpenClicked");
    });
  });
  

