let menu = document.querySelector(".menu");
let plus = document.querySelector(".menu .plus");
let links = document.querySelector(".links");
menu.addEventListener("click", () => {
   links.classList.toggle('expand');
   plus.classList.toggle('active');

})
