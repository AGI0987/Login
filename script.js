const header = document.querySelector("header");
const menubtn = document.querySelector("#menu-btn");
const closeMenubtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener("click", () => {
  header.classList.toggle("show-mobile-menu");
});

closeMenubtn.addEventListener("click", () => {
  menubtn.click();
});
