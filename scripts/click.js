const audio = new Audio("/sound/stone.mp3");
const buttons = document.querySelectorAll(".btn");
const buttonsback = document.querySelectorAll(".btnback");

buttons.forEach(button => {
  button.addEventListener("click", () => {
  audio.play();
  });
});
buttonsback.forEach(button => {
  button.addEventListener("click", () => {
  audio.play();
  });
});