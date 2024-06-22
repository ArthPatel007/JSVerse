// generate a random color funcation
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingcolor = function () {
  if (!intervalId) {
    intervalId = setInterval(changBgcolor, 1000);
  }

  function changBgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingcolor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document
  .querySelector("#startButton")
  .addEventListener("click", startChangingcolor);

document
  .querySelector("#stopButton")
  .addEventListener("click", stopChangingcolor);
