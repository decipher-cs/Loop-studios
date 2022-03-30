/* Global constants */

// Get //
// Navbar
// hamburger icon
// textbox
// navLinks

const navbar = document.querySelector(".navbar-hero");
const navbarImg = document.querySelector(".navbar-hero__img");
const navbarLinks = document.querySelector(".navbar-hero__links");
const navbarText = document.querySelector(".navbar-hero__text-content");

// const showNavbar = new CSSStyleSheet()

/* Hamburger Menu */

// showNavbar.insertRule('.navbar-hero{background: black;}')

navbarImg.addEventListener("click", (e) => {
    console.log(navbar.style.backgroundColor)
    if (navbar.style.backgroundColor == "transparent") {
        navbar.style.cssText = "background-color: black; position: fixed"
        navbarImg.setAttribute('src', '/images/icon-close.svg')
        navbarLinks.style.display = "flex"
        navbarText.style.display = "none"

    } else if (navbar.style.backgroundColor == "black") {
        navbar.style.cssText = "background-color: transparent; position: static"
        navbarImg.setAttribute('src', '/images/icon-hamburger.svg')
        navbarLinks.style.display = "none"
        navbarText.style.display = "flex"
    } else {
        navbar.style.cssText = "background-color: black; position: fixed"
        navbarImg.setAttribute('src', '/images/icon-close.svg')
        navbarLinks.style.display = "flex"
        navbarText.style.display = "none"
        console.log("error")
    }

})
console.log(window.width)