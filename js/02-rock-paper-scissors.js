let userChoice;

//Taking user rock/paper/scissor choice
do {
  userChoice = prompt("Rock, paper, or scissors?").toLowerCase();
} while (userChoice != ("rock" || "paper" || "scissors"));

//Computer RNG choice
let computerChoice = Math.floor(Math.random() * 3);
let userValue;

//Converting rock/paper/scissor to something that can be compared to with computer RNG choice
switch (userChoice) {
  case "rock":
    userValue = 0;
    break;
  case "paper":
    userValue = 1;
    break;
  case "scissors":
    userValue = 2;
    break;
}

//Comparing the user choice with computer choice and declaring winner
if (userValue == 0) {
  if (computerChoice == 1) {
    alert("Computer has chosen Paper, you lose");
  } else if (computerChoice == 2) {
    alert("Computer has chosen Scissors, you win!");
  } else alert("It's a tie");
} else if (userValue == 1) {
  if (computerChoice == 2) {
    alert("Computer has chosen Scissors, you lose");
  } else if (computerChoice == 0) {
    alert("Computer has chosen Rock, you win!");
  } else alert("It's a tie");
} else if (userValue == 2) {
  if (computerChoice == 0) {
    alert("Computer has chosen Rock, you lose");
  } else if (computerChoice == 1) {
    alert("Computer has chosen Paper, you win!");
  } else alert("It's a tie");
}
