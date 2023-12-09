const DayNightEffect = () => {
  const BodyElement = document.querySelector(".js-main");

  BodyElement.classList.toggle("NightMain");
};
const DayNightDescription = () => {
  const DestriptionElement = document.querySelector(".js-description");
  DestriptionElement.classList.toggle("NightJobDate");
};
const init = () => {
  const DayNightToggle = document.querySelector(".js-buttonToggle");
  DayNightToggle.addEventListener("click",  DayNightDescription);
};
init();
