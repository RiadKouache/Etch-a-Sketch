// const grid = document.querySelector(".grid");

// const gridWidth = grid.getBoundingClientRect().width;
// const gridHeight = grid.getBoundingClientRect().height;

// const squareWidth = gridWidth / 16;
// const squareHeight = gridHeight / 16;

// const squareNumber = 16 * 16;
// let sum = 0;

// for (let i = 0; i < 16; i++) {
//   for (let j = 0; j < 16; j++) {
//     const squareDiv = document.createElement("div");
//     squareDiv.style.width = squareWidth + "px";
//     squareDiv.style.height = squareHeight + "px";
//     squareDiv.classList.add("square");
//     grid.appendChild(squareDiv);
//     sum++;
//   }
// }

// console.log(squareNumber, sum);

const grid = document.querySelector(".grid");

let gridWidth = grid.getBoundingClientRect().width - 4;
let gridHeight = grid.getBoundingClientRect().height - 4;

let squareWidth = gridWidth / 16;
let squareHeight = gridHeight / 16;

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
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
