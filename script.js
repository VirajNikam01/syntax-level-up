var mobile_nav = document.querySelector(".mobile-navbar-btn")
var nav = document.querySelector("nav")
var navLi = document.querySelector("#frame169")

//Code for responsive navbar
const responsiveNavbar= ()=>{
    const toggleNavbar = ()=>{
        nav.classList.toggle("active")
    }
    
    mobile_nav.addEventListener("click", ()=> toggleNavbar())
    
    navLi.addEventListener("click", ()=>{
        nav.classList.remove("active")
    })
}
responsiveNavbar()