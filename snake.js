
let playArea = document.getElementById("game");
const rows = 23;
const columns = 35;
const pixelSize = 21.6;

let pixels = new Map();

function createPlayArea() {
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      let pixel = document.createElement("div");
      pixel.style.position = "absolute";
      pixel.style.border = "1px solid #101010";
      pixel.style.left = j * pixelSize + "px";
      pixel.style.top = i * pixelSize + "px";
      pixel.style.width = pixelSize + "px";
      pixel.style.height = pixelSize + "px";
      pixel.style.backgroundColor = "#e7e4e0";
      let position = i + "_" + j;
      playArea.appendChild(pixel);
    }
  }
}

createPlayArea();

drawSnake([
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0]
]
)

function drawSnake(snake) {
  let position = i + "_" + j;

}