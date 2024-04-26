let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
document.querySelector("body").classList.remove("winBg")

let turnO = true; //true = O, false = x

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const resetGame = () => {
  turnO = true;
  document.querySelector("body").classList.remove("winBg")
  enableBoxes();
  msgConatiner.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true; //disables once clicked

    checkWinner();
  });
});

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

let checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("WINNER", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

let showWinner = (winner) => {
  disableBoxes();
  document.querySelector("body").classList.add("winBg")
  msg.innerText = `Bravo! ${winner} Won`;
  msgConatiner.classList.remove("hide");
};
