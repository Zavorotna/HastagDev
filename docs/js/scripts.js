const langChange=document.querySelector(".language-switch"),langChangeEng=document.querySelector(".language-switchEng");langChange?(langChange.addEventListener("mouseenter",(function(){langChange.href="indexEng.html",langChange.innerText="ENG"})),langChange.addEventListener("mouseleave",(function(){langChange.href="index.html",langChange.innerText="UA"}))):langChangeEng&&(langChangeEng.addEventListener("mouseenter",(function(){langChangeEng.innerText="UA",langChangeEng.href="index.html"})),langChangeEng.addEventListener("mouseleave",(function(){langChangeEng.innerText="ENG",langChangeEng.href="indexEng.html"}))),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".portfolio-slider-ul li"),t=document.querySelectorAll(".tabs-block"),n=document.querySelectorAll(".content-title");t.forEach(((e,t)=>{e.style.opacity=0===t?1:0,e.style.zIndex=0===t?2:0})),n.forEach(((e,t)=>{e.style.display=0===t?"block":"none"})),e.forEach(((l,o)=>{l.style.color="#fff",l.addEventListener("click",(()=>{const o=l.getAttribute("data-value");e.forEach((e=>{e.style.color="#fff"})),l.style.color="#24d7ff",n.forEach((e=>{e.style.display="none",e.style.transform="translateY(50px)",e.style.transition="1s",setTimeout((()=>{e.style.transform="translateY(0px)"}),0)}));const c=document.querySelector(`.content-title[data-value="${o}"]`);c&&(c.style.display="block"),t.forEach((e=>{const t=e.getAttribute("data-value");e.style.opacity=t===o?1:0,e.style.zIndex=t===o?2:0}))})),0===o&&(l.style.color="#24d7ff")}))})),window.addEventListener("scroll",(function(){const e=document.querySelector(".fixed-navigation");e&&(window.scrollY>0?e.classList.add("scrolled"):e.classList.remove("scrolled"))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("menuBtn"),t=document.getElementById("menu-slide"),n=document.getElementById("menuOpen");let l;function o(){const e=document.querySelectorAll(".portfolio-img-smaller img");e&&(console.log(e),e.forEach((e=>{let t=e.getBoundingClientRect().width;e.style.transition="1s",e.style.height=.64*t+"px"})))}window.addEventListener("resize",(()=>{clearTimeout(l),l=setTimeout(o,1e3)})),e.addEventListener("click",(function(){e.classList.toggle("menuBtnClicked"),n.classList.toggle("menuOpenClicked"),t.classList.toggle("menu-slide-upper")}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".menuButton"),t=document.getElementById("menu-slide"),n=document.getElementById("menuOpen");body=document.querySelector("body"),e.addEventListener("click",(function(){body.classList.toggle("hidden"),e.classList.toggle("menuBtnClicked"),n.classList.toggle("menuOpenClicked"),t.classList.toggle("menu-slide-upper")}))}));const carouselBlock=document.querySelector(".main-project");if(carouselBlock){const e=document.querySelector(".left-vertical"),t=document.querySelector(".right-vertical"),n=document.querySelector(".center");let l=[...document.querySelectorAll(".down-block")],o=[...document.querySelectorAll(".down-block-right")],c=[...document.querySelectorAll(".up-block")],s=c[0].offsetHeight,r=o[0].offsetHeight,a=l[0].offsetHeight,i=1;for(let d=0;d<l.length||d<o.length||d<c.length;d++){if(l){const u=l[d].cloneNode(!0);e.appendChild(u)}if(o){const g=o[d].cloneNode(!0);t.appendChild(g)}if(c){const m=c[d].cloneNode(!0);n.appendChild(m)}}l=[...document.querySelectorAll(".down-block")],o=[...document.querySelectorAll(".down-block-right")],c=[...document.querySelectorAll(".up-block")];for(let y=0;y<l.length||y<o.length||y<c.length;y++)l&&(l[y].style.position="absolute",l[y].style.top=a*y+"rem"),o&&(o[y].style.position="absolute",l[y].style.top=r*y+"rem"),c&&(c[y].style.position="absolute",c[y].style.top=s*y+"rem");function updateCarouselImg(){for(let e=0;e<l.length||e<o.length||e<c.length;e++){let t=parseFloat(l[e].style.top),n=parseFloat(o[e].style.top),s=parseFloat(c[e].style.top);t+=i,n+=i,s-=i,t>=window.innerHeight&&(t=-305),s<=-605&&(s=window.innerHeight),l[e].style.top=t+"rem",o[e].style.top=t+"rem",c[e].style.top=s+"rem"}}function startScroll(){autoScrollInterval=setInterval((()=>{updateCarouselImg()}),20)}function stopScroll(){clearInterval(autoScrollInterval)}updateCarouselImg(),carouselBlock.addEventListener("mouseenter",(()=>{stopScroll()})),carouselBlock.addEventListener("mouseleave",(()=>{startScroll()})),startScroll()}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("menuBtn"),t=document.getElementById("menu-slide"),n=document.getElementById("menuOpen");e.addEventListener("click",(function(){e.classList.toggle("menuBtnClicked"),n.classList.toggle("menuOpenClicked"),t.classList.toggle("menu-slide-upper")}))}));const buttonMain=document.querySelector(".btn-href");if(buttonMain){const f=buttonMain.getAttribute("href");buttonMain.addEventListener("click",(function(){window.location.href=f}))}function rand(e,t){return Math.floor(Math.random()*(t-e+1))+e}const elipseBox=[...document.querySelectorAll(".elipse-box")],stepRand=.1;function updatePosition(e){const t=rand(1,100),n=rand(1,100),l=setInterval((()=>{const o=parseFloat(e.style.top)||t+20,c=parseFloat(e.style.left)||n+20;c<n?e.style.left=`${c+.1}%`:c>n&&(e.style.left=c-.1+"%"),o<t?e.style.top=`${o+.1}%`:o>t&&(e.style.top=o-.1+"%"),o===t&&c===n&&(clearInterval(l),updatePosition(e))}),100)}elipseBox.forEach((e=>{updatePosition(e)}));