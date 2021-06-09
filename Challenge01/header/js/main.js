console.log("All good here!")

const hamburger = document.querySelector(".hamburger-icon")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", mobileNav);

function mobileNav() {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
}