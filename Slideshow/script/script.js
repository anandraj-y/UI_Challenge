"use strict";
let obj = [
  { src: "./assets/blue.jpeg" },
  { src: "./assets/river.jpeg" },
  { src: "./assets/seed.jpeg" },
  { src: "./assets/solo.jpeg" },
  { src: "./assets/matrix.png" },
];

const buttonPrev = document.querySelector("#prev");
const slideButtons = document.querySelector(".slideButtons");
const buttonNext = document.querySelector("#next");
const img = document.querySelector("img");
const slideCount = document.querySelector(".slideCount");

let currentSlide = 0;

const loadSlide = (currentSlide) => {
  let slideNumber = currentSlide + 1;
  if (slideNumber > obj.length) {
    slideNumber = 1;
  }
  slideCount.textContent = slideNumber + " / " + obj.length;
  updateSlideCircles(currentSlide);
  img.setAttribute("src", obj[currentSlide].src);
};

const updateSlideCircles = (slideIndex) => {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((item) => {
    item.classList.remove("active");
  });
  slides[slideIndex].classList.add("active");
};

loadSlide(currentSlide);

buttonPrev.addEventListener("click", function () {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = obj.length - 1;
  }
  loadSlide(currentSlide);
});

buttonNext.addEventListener("click", function () {
  currentSlide++;
  if (currentSlide >= obj.length) {
    currentSlide = 0;
  }
  loadSlide(currentSlide);
});

slideButtons.addEventListener("click", function (e) {
  const slideNumber = Number(e.target.getAttribute("data-slide"));
  currentSlide = slideNumber;
  loadSlide(currentSlide);
});
