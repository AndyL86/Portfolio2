/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("choice");
const userWins = document.getElementById("user-score");
const compWins = document.getElementById("comp-score");
const userImage = document.getElementById("user-image");
const compImage = document.getElementById("comp-image");
const alerts = document.getElementById("alert");
const options = ["rock", "paper", "scissors", "lizard", "spock"];


/**
 * Add event listener to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function() {
        let userChoice = this.getAttribute("data-choice")
        playGame(userChoice);
    });
}

/**
 * The main game function 
 */
function playGame(userChoice) {

    userImage.src = 'assets/images/${options[userChoice]}.png';
    userImage.alt = options[userChoice];

    let compChoice = options[Math.floor(Math.random() * 5)];

    compImage.src = 'assets/images/${options[compChoice]}.png';
    compImage.alt = options[compChoice];

    let result = checkWinner (options[compChoice], options[userChoice]);

    updateResults(result);
}

/**
 * Checks to see who the winner is and game logic
 */
function compareChoices(userChoice, compChoice) {
    const currentMatch = `${userChoice} vs ${compChoice}`;
    if (userChoice === compChoice) {
      alert(`Match is a Tie!`);
      return;
      updateScore();
    }

    if (userChoice === "rock") {
        if (compChoice === "scissors") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
    }

    else if (userChoice === "paper") {
        if (compChoice === "rock") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "scissors") {
        if (compChoice === "paper") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "rock") {
        if (compChoice === "lizard") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "lizard") {
        if (compChoice === "spock") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "spock") {
        if (compChoice === "scissors") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "scissors") {
        if (compChoice === "lizard") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "lizard") {
        if (compChoice === "paper") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "paper") {
        if (compChoice === "spock") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "spock") {
        if (compChoice === "rock") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }
    }

function updateScore() {
  document.getElementById("user-score").textContent = userWins;
  document.getElementById("comp-score").textContent = compWins;
}

function checkWinner() {
  if (userWins === 5 || compWins === 5) {
    const winner =
    userWins === 5
    ? "Congratulations! You won!"
    : "Sorry you lose! Better luck next time!";
    alert(winner);
    return true;
  }
  return false;
}
