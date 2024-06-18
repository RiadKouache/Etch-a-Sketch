const grid = document.querySelector(".grid");

const gridWidth = grid.getBoundingClientRect().width;
const gridHeight = grid.getBoundingClientRect().height;

const squareWidth = gridWidth / 16;
const squareHeight = gridHeight / 16;

const squareNumber = 16 * 16;
let sum = 0;

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const squareDiv = document.createElement("div");
    squareDiv.style.width = squareWidth + "px";
    squareDiv.style.height = squareHeight + "px";
    squareDiv.classList.add("square");
    grid.appendChild(squareDiv);
    sum++;
  }
}

console.log(squareNumber, sum);
