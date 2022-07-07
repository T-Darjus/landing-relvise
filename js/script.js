"use strict";

const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const mobMenu = document.querySelector(".header__nav-list");

btnOpen.addEventListener("click", function (e) {
  e.preventDefault;
  hiddenToggle();
});
btnClose.addEventListener("click", function (e) {
  e.preventDefault;
  hiddenToggle();
});

function hiddenToggle() {
  btnOpen.classList.toggle("hidden");
  btnClose.classList.toggle("hidden");
  mobMenu.classList.toggle("mobile-nav");
}
