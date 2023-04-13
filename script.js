let navbar = document.querySelector("header .navbar");
let menuBtn = document.querySelector("#menu-btn");
const active = document.querySelector(".active");

menuBtn.addEventListener("click", function () {
  console.log("click");
  navbar.classList.add("active");
});
//Projects Slider
const slider = document.querySelector(".projects__box__slider");
const prevButton = document.querySelector(".btn__slider.prev");
const nextButton = document.querySelector(".btn__slider.next");
const projectItems = document.querySelectorAll(".projects__box__item");
const projectItemWidth = projectItems[0].offsetWidth;
const sliderWidth = projectItemWidth * projectItems.length;

slider.style.width = `${sliderWidth}px`;

let currentPosition = 0;
let isAnimating = false;

function slidePrev() {
  if (isAnimating) return;
  isAnimating = true;
  currentPosition -= projectItemWidth;
  if (currentPosition < 0) {
    currentPosition = sliderWidth - projectItemWidth;
  }
  slider.style.transform = `translateX(-${currentPosition}px)`;
  toggleButtonColor();
  setTimeout(() => {
    isAnimating = false;
  }, 500);
}

function slideNext() {
  if (isAnimating) return;
  isAnimating = true;
  currentPosition += projectItemWidth;
  if (currentPosition > sliderWidth - projectItemWidth) {
    currentPosition = sliderWidth - projectItemWidth; // updated this line
    nextButton.style.color = "gray"; // added this line
    nextButton.removeEventListener("click", slideNext); // added this line
  }
  slider.style.transform = `translateX(-${currentPosition}px)`;
  toggleButtonColor();
  setTimeout(() => {
    isAnimating = false;
  }, 500);
}

function toggleButtonColor() {
  if (currentPosition === 0) {
    prevButton.style.color = "gray";
  } else {
    prevButton.style.color = "black";
  }
  if (currentPosition >= sliderWidth - projectItemWidth) {
    nextButton.style.color = "gray";
  } else {
    nextButton.style.color = "black";
  }
}

toggleButtonColor();

prevButton.addEventListener("click", slidePrev);
nextButton.addEventListener("click", slideNext);
function slideNext() {
  if (isAnimating) return;
  isAnimating = true;
  const currentItem = document.querySelector(
    ".projects__box__item:first-of-type"
  );
  currentItem.classList.add("checked");
  currentPosition += projectItemWidth;
  if (currentPosition > sliderWidth - projectItemWidth) {
    currentPosition = sliderWidth - projectItemWidth;
    nextButton.style.color = "gray";
    nextButton.removeEventListener("click", slideNext);
  }
  slider.style.transform = `translateX(-${currentPosition}px)`;
  toggleButtonColor();
  setTimeout(() => {
    isAnimating = false;
  }, 500);
}
function toggleCheckedClass() {
  projectItems.forEach((item) => {
    item.classList.remove("checked");
  });
  const firstVisibleItem = document.elementFromPoint(0, 0);
  if (firstVisibleItem.closest(".projects__box__item")) {
    firstVisibleItem.closest(".projects__box__item").classList.add("checked");
  }
}
