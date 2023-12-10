const DayNightEffect = () => {
  const BodyElement = document.querySelector(".js-body");

  BodyElement.classList.toggle("body");
  BodyElement.classList.toggle("NightBody");
};

const init = () => {
  const DayNightToggle = document.querySelector(".js-buttonToggle");
  DayNightToggle.addEventListener("click", DayNightEffect);
};
init();
