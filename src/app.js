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

function showNavbar() {
    navbar.style.cssText = "background-color: black; position: fixed"
    navbarImg.setAttribute('src', '/images/icon-close.svg')
    navbarLinks.style.display = "flex"
    navbarText.style.display = "none"

}
function hideNavbar() {
    navbar.style.cssText = "background-color: transparent; position: static"
    navbarImg.setAttribute('src', '/images/icon-hamburger.svg')
    navbarLinks.style.display = "none"
    navbarText.style.display = "flex"
}

navbarImg.addEventListener("click", (e) => {
    console.log(navbar.style.backgroundColor)
    if (navbar.style.backgroundColor == "transparent") {
        showNavbar()

    } else if (navbar.style.backgroundColor == "black") {
        hideNavbar()

    } else {
        showNavbar()
        console.log("error")
    }

})


/* window... name it later */

window.addEventListener("resize", (win)=>{
    // console.log("window rezised",window.innerWidth)
    if ((window.innerWidth > 768)){
        navbarLinks.style.display = "flex"
        navbarText.style.display = "block"
        navbar.style.cssText = "background-color: transparent; position: static"
        navbarImg.setAttribute('src', '/images/icon-hamburger.svg')
        // navbarLinks.style.display = "flex"
    }else if ((window.innerWidth < 768) && (navbar.style.backgroundColor != "black")){
        navbarLinks.style.display = "none"
    }
})