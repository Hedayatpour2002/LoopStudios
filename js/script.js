/*
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}
*/
tailwind.config = {
  theme: {
    fontFamily: {
      Josefin: ["Josefin Sans"],
    },
  },
};
/*menu*/
var hamburgerIcon = document.getElementById("hamburger");
var closeIcon = document.getElementById("close");
var menu = document.getElementById("menu");

function openMenu() {
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  menu.style.display = "flex";
}
function closemenu() {
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  menu.style.display = "none";
}
