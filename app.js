const counterText = document.querySelector(".counter");
const higherCountButton = document.querySelector(".higher-count button");
const lowerCountButton = document.querySelector(".lower-count button");
const restartsButton = document.querySelector(".restart-button button");

let counter = 0;

higherCountButton.addEventListener("click", () => {
  counter++;
  counterText.textContent = counter;
});

lowerCountButton.addEventListener("click", () => {
  counter--;
  counterText.textContent = counter;
});

restartsButton.addEventListener("click", () => {
  counter = 0;
  counterText.textContent = counter;
});
