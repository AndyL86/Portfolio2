/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("choice");
const userWins = document.getElementById("user-score");
const compWins = document.getElementById("comp-score");
const userImage = document.getElementById("user-image");
const compImage = document.getElementById("comp-image");
const alert = document.getElementById("alert");
let options = ["rock", "paper", "scissors", "lizard", "spock"];


/**
 * Add event listener to buttons
 */
for (let button of buttons) {
  button.addEventListener("click", function () {
    let userChoice = this.getAttribute("data-choice")
    playGame(userChoice);
  });
}

/**
 * The main game function 
 */
function playGame(userChoice) {

  userImage.src = ''
  userImage.alt = options[userChoice];

  let compChoice = Math.floor(Math.random() * 5);

  compImage.src = 'assets/images/${options[compChoice]}.png';
  compImage.alt = options[compChoice];

  compareChoices(userChoice, compChoice);

}


/**
 * Checks to see who the winner is and game logic
 */
function compareChoices(userChoice, compChoice) {
  if (userChoice === compChoice) {
    alert(`Match is a Tie!`);
  }
  if (userChoice === "rock") {
    if (compChoice === "scissors") {
      alert(`You Win!`);
      userWins.innerHTML++;
    } else {
      alert(`You Lose!`);
      compWins.innerHTML++;
    }
  } else if (userChoice === "paper") {
    if (compChoice === "rock") {
      alert(`You Win!`);
      userWins++;
    } else {
      alert(`You Lose!`);
      compWins++;
    }
  } else if (userChoice === "scissors") {
    if (compChoice === "paper") {
      alert(`You Win!`);
      userWins++;
    } else {
      alert(`You Lose!`);
      compWins++;
    }
  } else if (userChoice === "rock") {
    if (compChoice === "lizard") {
      alert(`You Win!`);
      userWins++;
    } else {
      alert(`You Lose!`);
      compWins++;
    }
  } else if (userChoice === "lizard") {
    if (compChoice === "spock") {
      alert(`You Win!`);
      userWins++;
    } else {
      alert(`You Lose!`);
      compWins++;
    }
  } else if (userChoice === "spock") {
    if (compChoice === "scissors") {
      alert(`You Win!`);
      userWins++;
    } else {
      alert(`You Lose!`);
      compWins++;
    }
  } else if (userChoice === "scissors") {
    if (compChoice === "lizard") {
      alert(`You Win!`);
      userWins++;
    } else {
      alert(`You Lose!`);
      compWins++;
    }
  } else if (userChoice === "lizard") {
    if (compChoice === "paper") {
      alert(`You Win!`);
      userWins++;
    } else {
      alert(`You Lose!`);
      compWins++;
    }
  } else if (userChoice === "paper") {
    if (compChoice === "spock") {
      alert(`You Win!`);
      userWins++;
    } else {
      alert(`You Lose!`);
      compWins++;
    }
  } else if (userChoice === "spock") {
    if (compChoice === "rock") {
      alert(`You Win!`);
      userWins++;
    } else {
      alert(`You Lose!`);
      compWins++;
    }
  }  
}

function incrementScore() {

  let oldWins = parseInt(document.getElementById("user-score").innerText);
  document.getElementById("user-score").innerText = ++oldWins;
}

function incrementWrongAnswer() {

  let oldWins = parseInt(document.getElementById("comp-score").innerText);
  document.getElementById("comp-score").innerText = ++oldWins;
}

