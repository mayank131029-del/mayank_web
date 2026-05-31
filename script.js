const favicon = document.createElement("link");

favicon.rel = "icon";
favicon.type = "image/png";
favicon.href = "images/favicon.ico";

document.head.appendChild(favicon);


let header = document.getElementsByTagName("header")[0]
header.setAttribute("id", "top")
header.innerHTML = `<nav>
      <a href="index.html">
        <div class="logo">
          <h2>Mayank.</h2>
        </div>
      </a>
      <ol class="nav-bar">
        <a id="index" href="index.html"> Home </a>
        <a class="my-work" href="#hero-2"> My Work </a>
        <a id="index_project" href="projects.html"> Projects </a>
        <a id="contact" href="contact.html"> Contact </a>

      </ol>
      <div class="hamburger"></div>

    </nav>
    <div class="mob-nav">
      <ol class="nav-bar">
        <a href="index.html"> Home </a>
        <a class="my-work" href="#hero-2"> My Work </a>
        <a href="projects.html"> Projects </a>
        <a href="contact.html"> Contact </a>

      </ol>
    </div>`

let footer = document.getElementsByTagName("footer")[0]
footer.classList.add("flex")
footer.innerHTML = `<div class="footer1 flex">
		<a href="index.html">
			<div class="logo">
				<h2>mayank.</h2>
			</div>
		</a>
		<div class="socialicon flex
	">
			<a id="behance" href="https://www.behance.net/digital_artx" target="_blank"></a>
			<a id="instagram" href="https://www.instagram.com/digital_artx__1/" target="_blank"></a>
			<a id="whatsapp" href="https://wa.me/918708189664" target="_blank"></a>
			<a id="pinterest" href="https://in.pinterest.com/Digital_artx__1/" target="_blank"></a>
		</div>

	</div>
	<div class="footer-nav">
		<ol class="nav-bar">
			<a href="index.html"> Home </a>
			<a class="my-work" href="#hero-2"> My Work </a>
			<a href="projects.html"> Projects </a>
			<a href="contact.html"> Contact </a>

		</ol>
	</div>
	<div class="footer2">All Right Reserved 2026</div>`


let my_work = document.querySelectorAll(".my-work")

my_work.forEach(item => {
  item.addEventListener("click", () => {
    location.href = "index.html#hero-2"
  })
})


// my_work.addEventListener("click", () => {
//   location.href = "index.html#hero-2"

// })



console.log(localStorage.getItem("activePage"))

window.addEventListener("load", () => {

  document.body.style.visibility = "visible";

});


const nav = document.querySelector(".mob-nav");
let hambutton = document.querySelector(".hamburger");


hambutton.addEventListener("click", () => {
  nav.classList.toggle("active");
  hambutton.classList.toggle("close");
})





const back2top = document.querySelector(".back2top")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    back2top.classList.add("show")
  }
  else {
    back2top.classList.remove("show")
  }
})





