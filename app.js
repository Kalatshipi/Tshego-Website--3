// change the nav style on scroll
window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("window-scrolled",window.scrollY > 0);
})


// ====== nav ======//
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}