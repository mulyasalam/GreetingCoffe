//Toogle active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar akan menutup sidebar

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});
