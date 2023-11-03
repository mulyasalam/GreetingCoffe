//Toogle active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Toogle active search menu
const searchForm = document.querySelector(".search-form");
const searchBOx = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBOx.focus();
  e.preventDefault();
};
//Toogle active shopping cart menu
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//Klik diluar elemen akan menutup sidebar

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (event) {
  if (!hm.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(event.target) && !searchForm.contains(event.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(event.target) && !shoppingCart.contains(event.target)) {
    shoppingCart.classList.remove("active");
  }
});

//modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

//klik tombol close
document.querySelector(".close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

//klik diluar modal

window.onclick = (event) => {
  if (event.target == itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
