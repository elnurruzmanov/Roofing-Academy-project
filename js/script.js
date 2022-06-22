"use strict";

const phoneLink = document.querySelector(".phone_link");
const exit = document.querySelector(".exit");
const callInfo = document.querySelector(".call_info");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

const main = document.querySelector(".main");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const close1 = document.querySelector(".close");
const active = document.querySelector(".active");

phoneLink.addEventListener("click", function () {
  callInfo.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

exit.addEventListener("click", function () {
  callInfo.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Responsive

menu.addEventListener("click", function () {
  close1.style.display = "block";
  menu.style.display = "none";
  active.style.display = "block";
});

close1.addEventListener("click", function () {
  menu.style.display = "block";
  close1.style.display = "none";
});
