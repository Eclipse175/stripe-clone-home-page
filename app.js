const navBarMobile = document.getElementById('mobile-nav');
const hamburger = document.getElementById('hamburger');
const glassCircle = document.getElementById('glass-circle');
const closeX = document.getElementById('cross');
const navBar = document.getElementById('nav-bar');
const stripeLogo = document.getElementById('stripe-logo');
const canvas = document.getElementById('gradient-canvas')


// press hamburger --> opens menu --> and it changes the width to 0 so 
hamburger.addEventListener('click', () => {
    navBarMobile.style.display = 'block';
    navBar.style.minWidth = "0vw";
    glassCircle.style.display = 'none';
})


closeX.addEventListener('click', () => {
    navBarMobile.style.display = 'none';
    navBar.style.minWidth = "100vw";
    glassCircle.style.display = 'flex';
})








