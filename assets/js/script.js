/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("choice");
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("comp-score");
const alert = document.getElementById("result");
const options = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * Add event listener to all buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function() {
        let userChoice = this.getAttribute("data-choice");
        playGame(userChoice);
    });
}

/**
 * Function to start playing game
 */

 const choiceNumber = Math.floor(Math.random()*5);
 const computerChoice = options[choiceNumber];

/**
 * Gets the current number of wins from the DOM and increments it by 1
 */
 function incrementWins() {

    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;

}

/**
 * Gets the current tally of losses from the DOM and increments it by 1
 */
function incrementLosses() {

    let oldScore = parseInt(document.getElementById("comp-score").innerText);
    document.getElementById("comp-score").innerText = ++oldScore;
}

