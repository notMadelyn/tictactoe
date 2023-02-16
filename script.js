const squares = document.querySelectorAll(".square");
let player = "X";

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winConditions) {
    if (
      squares[condition[0]].textContent === player &&
      squares[condition[1]].textContent === player &&
      squares[condition[2]].textContent === player
    ) {
      return true;
    }
  }

  return false;
}

function handleClick(e) {
  if (e.target.textContent === "") {
    e.target.textContent = player;
    if (checkWin()) {
      alert("Player " + player + " wins!");
      reset();
    } else if (document.querySelectorAll(".square:not(:empty)").length === 9) {
      alert("Tie game!");
      reset();
    } else {
      player = player === "X" ? "O" : "X";
    }
  }
}

function reset() {
  for (let square of squares) {
    square.textContent = "";
  }
  player = "X";
}

for (let square of squares) {
  square.addEventListener("click", handleClick);
}
