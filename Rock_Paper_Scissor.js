let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loss: 0,
  ties: 0,
};

function updater() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} | Losses: ${score.loss} | Ties: ${score.ties}`;
}

updater();

function playGame(playerMove) {
  const computerMove = computerMovePicker();
  let result = "";

  if (playerMove === "Scissor") {
    if (computerMove === "Rock") {
      score.loss++;
      result = "You lose!";
    } else if (computerMove === "Paper") {
      score.wins++;
      result = "You win!";
    } else {
      score.ties++;
      result = "It's a tie!";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Paper") {
      score.loss++;
      result = "You lose!";
    } else if (computerMove === "Scissor") {
      score.wins++;
      result = "You win!";
    } else {
      score.ties++;
      result = "It's a tie!";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Scissor") {
      score.loss++;
      result = "You lose!";
    } else if (computerMove === "Rock") {
      score.wins++;
      result = "You win!";
    } else {
      score.ties++;
      result = "It's a tie!";
    }
  }

  document.querySelector(".js-result").textContent = result;
  document.querySelector(
    ".js-moves"
  ).textContent = `You: ${playerMove} — Computer: ${computerMove}`;

  localStorage.setItem("score", JSON.stringify(score));
  updater();
}

function computerMovePicker() {
  const moves = ["Rock", "Paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return moves[randomIndex];
}
