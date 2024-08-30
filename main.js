const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".side-menu");
const dropdown = document.querySelector(".dropdown .link");
const dropdownMenu = dropdown.nextElementSibling;

// Toggle side menu on hamburger click
hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});

// Toggle dropdown menu on click
dropdown.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target) && dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
  }
});

