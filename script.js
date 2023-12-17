const sidenav = document.querySelector(".sidenav");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");

function openNav() {
  sidenav.classList.add("active");
}
function closeNav() {
  sidenav.classList.remove("active");
}

ScrollReveal().reveal('.scrollreveal', {
  duration: 600,
  reset: true
});