const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const timer = document.querySelector(".timer");
const input = document.querySelector("input[type=number]");
const bulbs = document.querySelectorAll(".bulb");
const colors = document.querySelectorAll("[class^=color]");

colors.forEach((color) => {
  console.log(color);
});

start.addEventListener("click", () => {
  bulbs.forEach((bulb) => {
    bulb.classList.add("animation");
  });
});

stop.addEventListener("click", () => {
  bulbs.forEach((bulb) => {
    bulb.classList.remove("animation");
  });
});

timer.addEventListener("click", () => {
  let inputVal = input.value;
  bulbs.forEach((bulb) => {
    bulb.style.animationDuration = inputVal + "s";
  });
});
