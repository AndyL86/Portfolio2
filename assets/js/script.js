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

    let compChoice = Math.floor(Math.random() * 5);

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
    }

    if (userChoice === "Rock") {
        if (compChoice === "Scissors") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
    }

    else if (userChoice === "Paper") {
        if (compChoice === "Rock") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "Scissors") {
        if (compChoice === "Paper") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "Rock") {
        if (compChoice === "Lizard") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "Lizard") {
        if (compChoice === "Spock") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "Spock") {
        if (compChoice === "Scissors") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "Scissors") {
        if (compChoice === "Lizard") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "Lizard") {
        if (compChoice === "Paper") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "Paper") {
        if (compChoice === "Spock") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }

      else if (userChoice === "Spock") {
        if (compChoice === "Rock") {
          alert(`You Win!`);
          userWins++;
        } else {
          alert(`You Lose!`);
          compWins++;
        }
      }
    }


