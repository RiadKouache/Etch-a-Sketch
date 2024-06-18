function createGrid(squaresNumber) {
  const grid = document.querySelector(".grid");

  let gridWidth = grid.getBoundingClientRect().width - 4;
  let gridHeight = grid.getBoundingClientRect().height - 4;
  let squareWidth = gridWidth / squaresNumber;
  let squareHeight = gridHeight / squaresNumber;

  const subheading = document.querySelector(".subheading");
  subheading.textContent = squaresNumber + "x" + squaresNumber + " Grid";

  for (let i = 0; i < squaresNumber; i++) {
    for (let j = 0; j < squaresNumber; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.style.width = squareWidth + "px";
      squareDiv.style.height = squareHeight + "px";
      squareDiv.classList.add("square");
      grid.appendChild(squareDiv);

      // const square = document.querySelector(".square");

      squareDiv.addEventListener("mouseover", (e) => {
        let rgb1 = Math.floor(Math.random() * 256);
        let rgb2 = Math.floor(Math.random() * 256);
        let rgb3 = Math.floor(Math.random() * 256);
        if (!e.target.style.backgroundColor) {
          e.target.style.backgroundColor =
            "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";
        }
      });
    }
  }
}

function sketchClear() {
  document.querySelectorAll(".square").forEach((e) => e.remove());
}

//initialize grid
defaultGrid = 16;
createGrid(defaultGrid);

//reset button
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  sketchClear();
  createGrid(defaultGrid);
});

//change grid with new size
const changeButton = document.querySelector(".changeButton");
changeButton.addEventListener("click", () => {
  let squaresNumber = -1;
  while (squaresNumber > 100 || squaresNumber < 0) {
    squaresNumber = Number(
      prompt("Enter a new number of squares per side (max=100):")
    );
  }
  defaultGrid = squaresNumber;
  sketchClear();
  createGrid(squaresNumber);
});
