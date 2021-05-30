let menu  = document.getElementById("mobileMenu");
let menuOpen = document.getElementById("menuOpen");
let menuCloseBtn = document.getElementsByClassName("header-mobile-menu__close")[0];

menuOpen.onclick = function () {
    menu.style.display = "block";
    document.body.classList.add('non-scrolling');
}

menuCloseBtn.onclick = function () {
    menuClose();
}

 function menuClose() {
    menu.style.display = "none";
    document.body.classList.remove('non-scrolling');
 }