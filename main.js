const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".side-menu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});
