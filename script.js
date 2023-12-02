var mobile_nav = document.querySelector(".mobile-navbar-btn")
var nav = document.querySelector("nav")

const toggleNavbar = ()=>{
    nav.classList.toggle("active")
}

mobile_nav.addEventListener("click", ()=> toggleNavbar())