let navbar = document.querySelector(".header .navbar")
const botaoNav = document.getElementById("menu-btn")

botaoNav.addEventListener("click", () => {

    navbar.classList.toggle('active')
})

window.addEventListener("scroll", () => {

    navbar.classList.remove('active')
})
