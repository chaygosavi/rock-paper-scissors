const buttons = document.querySelectorAll(".pick");
const scoreEle = document.getElementById("score");
const main = document.getElementById("main");
const selection = document.getElementById("selection");
const reset = document.getElementById("reset");
const user_select = document.getElementById("user_select");
const computer_select = document.getElementById("computer_select");
const winner = document.querySelector("#winner");
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

open.addEventListener("click", () => {
  modal.style.display = 'flex'
});

close.addEventListener("click", () => {
  modal.style.display = 'none'
});

reset.addEventListener("click", () => {
  main.style.display = "flex";
  selection.style.display = "none";
});

const choices = ["paper", "rock", "scissors"];

let score = 0;
let userChoice;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    userChoice = btn.getAttribute("data-choice");
    checkWinner();
  });
});

function checkWinner() {
  const computerChoice = pickRandomChoice();
  updateSelection(user_select, userChoice);
  updateSelection(computer_select, computerChoice);

  if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    updateScore(1);
    winner.innerText = `you win`;
  } else if (computerChoice === userChoice) {
    winner.innerText = `draw`;
  } else {
    updateScore(-1);
    winner.innerText = `you lost`;
  }
  main.style.display = "none";
  selection.style.display = "flex";
}

function updateScore(value) {
  score += value;
  scoreEle.innerText = score;
}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEle, choice) {
  selectionEle.classList.remove("paper");
  selectionEle.classList.remove("rock");
  selectionEle.classList.remove("scissors");

  selectionEle.classList.add(`${choice}`);
  selectionEle.querySelector("img").src = `./images/icon-${choice}.svg`;
  selectionEle.querySelector("img").alt = choice;
}
