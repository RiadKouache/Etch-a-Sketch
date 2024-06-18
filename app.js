const grid = document.querySelector(".grid");

const gridWidth = grid.getBoundingClientRect().width;

const squareWidth = gridWidth / 16;

for (let i = 0; i < 16; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.style.width = squareWidth + "px";
  squareDiv.style.height = squareWidth + "px";
  grid.appendChild(squareDiv);
}
