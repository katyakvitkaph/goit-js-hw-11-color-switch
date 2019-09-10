const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  bodyChange: document.body
};

refs.startBtn.addEventListener("click", () => {
  refs.startBtn.setAttribute("disabled", true);

  const active = (timerId = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length)];
    refs.bodyChange.style.backgroundColor = randomColor;
    console.log(randomColor);
  }, 1000));
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

refs.stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log("setInterval stopped!");
});
