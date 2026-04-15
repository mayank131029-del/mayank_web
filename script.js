







const nav = document.querySelector(".mob-nav");
const button = document.querySelector(".hamburger");

function toggleMenu() {
  nav.classList.toggle("active");
  button.classList.toggle("close");
}

button.addEventListener("click", toggleMenu)


