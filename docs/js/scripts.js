const langChange=document.querySelector(".language-switch"),langChangeEng=document.querySelector(".language-switchEng");function rand(e,t){return Math.floor(Math.random()*(t-e+10))+e}langChange?(langChange.addEventListener("mouseenter",(function(){langChange.href="indexEng.html",langChange.innerText="ENG"})),langChange.addEventListener("mouseleave",(function(){langChange.href="index.html",langChange.innerText="UA"}))):langChangeEng&&(langChangeEng.addEventListener("mouseenter",(function(){langChangeEng.innerText="UA",langChangeEng.href="index.html"})),langChangeEng.addEventListener("mouseleave",(function(){langChangeEng.innerText="ENG",langChangeEng.href="indexEng.html"}))),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".portfolio-slider-ul li"),t=document.querySelectorAll(".tabs-block"),n=document.querySelectorAll(".content-title"),l=document.querySelector(".portfolio-slider");t.forEach(((e,t)=>{e.style.opacity=0===t?1:0,e.style.zIndex=0===t?2:0})),n.forEach(((e,t)=>{e.style.display=0===t?"block":"none"})),e.forEach(((o,i)=>{o.style.color="#fff",o.addEventListener("click",(()=>{const i=o.getAttribute("data-value");e.forEach((e=>{e.style.color="#fff"})),o.style.color="#24d7ff",n.forEach((e=>{e.style.display="none",e.style.transform="translateY(50px)",e.style.transition="1s",setTimeout((()=>{e.style.transform="translateY(0px)"}),0)}));const c=document.querySelector(`.content-title[data-value="${i}"]`);if(c){let e=document.querySelectorAll(`.tabs-block[data-value="${i}"] .card-slider`),t=0,n=0,o=document.querySelectorAll(".portfolio-slider .tabs-block");for(let l=0;l<e.length;l++){console.log(t);let o=Number(e[l].getBoundingClientRect().width),i=Number(e[l].getBoundingClientRect().height);t+=o+50,n+=i+20}o.forEach((e=>{window.innerWidth>450?e.style.width=t+10+"px":e.style.height=n+"px",console.log(e.getBoundingClientRect().width)})),c.style.display="block",l.style.width=c.getBoundingClientRect().width,console.log(c.getBoundingClientRect().width,l)}t.forEach((e=>{const t=e.getAttribute("data-value");e.style.opacity=t===i?1:0,e.style.zIndex=t===i?2:0}))})),0===i&&(o.style.color="#24d7ff")}))})),window.addEventListener("scroll",(function(){const e=document.querySelector(".fixed-navigation");e&&(window.scrollY>0?e.classList.add("scrolled"):e.classList.remove("scrolled"))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("menuBtn"),t=document.getElementById("menu-slide"),n=document.getElementById("menuOpen");let l;function o(){const e=document.querySelectorAll(".portfolio-img-smaller img");e&&(console.log(e),e.forEach((e=>{let t=e.getBoundingClientRect().width;e.style.transition="1s",e.style.height=.64*t+"px"})))}window.addEventListener("resize",(()=>{clearTimeout(l),l=setTimeout(o,1e3)})),e.addEventListener("click",(function(){e.classList.toggle("menuBtnClicked"),n.classList.toggle("menuOpenClicked"),t.classList.toggle("menu-slide-upper")}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".menuButton"),t=document.getElementById("menu-slide"),n=document.getElementById("menuOpen");body=document.querySelector("body"),e.addEventListener("click",(function(){body.classList.toggle("hidden"),e.classList.toggle("menuBtnClicked"),n.classList.toggle("menuOpenClicked"),t.classList.toggle("menu-slide-upper")}))})),window.onload=function(){const e=document.querySelector(".main-project");if(e){let o=[...document.querySelectorAll(".down-block")],i=[...document.querySelectorAll(".down-block-right")],c=[...document.querySelectorAll(".up-block")],s=c[0].getBoundingClientRect().height+20,a=0,d=1;for(let m=0;m<c.length;m++){let y=c[m].getBoundingClientRect().height;y>s&&(s=y+20)}function t(e){let t=0;for(let n=0;n<e.length;n++)a=e[n].getBoundingClientRect().height+20,e[n].style.position="absolute",0===n?e[0].style.top="0px":e[n].style.top=`${t}px`,t+=a;return t}let r=t(o),u=t(c),g=t(i);function n(e,t,n){for(let l=0;l<o.length||l<i.length||l<c.length;l++){let a=parseFloat(o[l].style.top),r=parseFloat(i[l].style.top),u=parseFloat(c[l].style.top);a+=d,r+=d,u-=d,a>=window.innerHeight&&(a-=e),u<=-s&&(u+=t),r>=window.innerHeight&&(r-=n),o[l].style.top=a+"px",i[l].style.top=r+"px",c[l].style.top=u+"px"}}function l(){autoScrollInterval=setInterval((()=>{n(r,u,g)}),20)}n(r,u,g),e.addEventListener("mouseenter",(()=>{clearInterval(autoScrollInterval)})),e.addEventListener("mouseleave",(()=>{l()})),l()}},document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("menuBtn"),t=document.getElementById("menu-slide"),n=document.getElementById("menuOpen");e.addEventListener("click",(function(){function l(){let l=setInterval((function(){e.classList.toggle("menuBtnClicked"),n.classList.toggle("menuOpenClicked"),t.classList.toggle("menu-slide-upper"),clearInterval(l)}),0);console.log("int2")}if("auto ease 0s 1 normal none running none"!==e.style.animation)e.style.animation="none ",l();else{console.log("in1"),l();let t=setTimeout((()=>{e.style.animation="shake 3s linear infinite",clearTimeout(t)}),1e3)}document.addEventListener("click",(function(t){let n=t.target;document.querySelector(".menuBtnClicked")&&n!==document.querySelector(".cardsOverflow")&&n!==e&&(e.click(),console.log("CLOSE"))}))}))}));const elipseBox=[...document.querySelectorAll(".elipse-box")],stepRand=.5;function updatePosition(e){const t=rand(1,100),n=rand(1,100),l=setInterval((()=>{const o=parseFloat(e.style.top)||t+20,i=parseFloat(e.style.left)||n+40;i<n?e.style.left=`${i+.5}%`:i>n&&(e.style.left=i-.5+"%"),o<t?e.style.top=`${o+.5}%`:o>t&&(e.style.top=o-.5+"%"),o===t&&i===n&&(clearInterval(l),updatePosition(e))}),100)}elipseBox.forEach((e=>{updatePosition(e)}));