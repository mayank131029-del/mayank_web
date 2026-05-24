window.addEventListener("load", ()=>{

    document.body.style.visibility = "visible";

});


const nav = document.querySelector(".mob-nav");
const button = document.querySelector(".hamburger");

function toggleMenu() {
  nav.classList.toggle("active");
  button.classList.toggle("close");
}

button.addEventListener("click", toggleMenu);


let viewportWidth = window.innerWidth;
console.log(viewportWidth);


const back2top = document.querySelector(".back2top")

window.addEventListener("scroll", ()=>{
  if (window.scrollY>300) {
    back2top.classList.add("show")
  }
  else{
    back2top.classList.remove("show")
  }
})
