/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("choice");
var userWins = document.getElementById("user-score");
var compWins = document.getElementById("comp-score");
var userImage = document.getElementById("user-image");
var compImage = document.getElementById("comp-image");
var message = document.getElementById("alert");
const options = ["rock", "paper", "scissors", "lizard", "spock"];


/**
 * Add event listener to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        var userChoice = this.getAttribute("data-choice")
        playGame(userChoice);
    });
}

/**
 * The main game function 
 */
function playGame(userChoice) {

    userImage.src = 'assets/${options[userChoice]}.png';
    userImage.alt = options[userChoice];

    var compChoice = Math.trunc(Math.random() * 5);
    compImage.src = 'assets/images/${options[compChoice]}.png';
    compImage.alt = options[compChoice];

    compareChoices(userChoice, compChoice);

}


/**
 * Checks to see who the winner is and game logic
 */

function compareChoices(userChoice, compChoice) {

    if (userChoice === compChoice) {
        message.innerHTML = "Match is a Tie!";
    } else if (userChoice === "rock" && compChoice === "scissors") {
        message.innerHTML = "You Win!";
    } else if (userChoice === "paper" && compChoice === "rock") {
        message.innerHTML = "You Win!";
    } else if (userChoice === "scissors" && compChoice === "paper") {
        message.innerHTML = "You Win!";
    } else if (userChoice === "rock" && compChoice === "lizard") {
        message.innerHTML = "You Win!";
    } else if (userChoice === "lizard" && compChoice === "spock") {
        message.innerHTML = "You Win!";
    } else if (userChoice === "spock" && compChoice === "scissors") {
        message.innerHTML = "You Win!";
    } else if (userChoice === "scissors" && compChoice === "lizard") {
        message.innerHTML = "You Win!";
    } else if (userChoice === "lizard" && compChoice === "paper") {
        message.innerHTML = "You Win!";
    } else if (userChoice === "paper" && compChoice === "spock") {
        message.innerHTML = "You Win!";
    } else if (userChoice === "spock" && compChoice === "rock") {
        message.innerHTML = "You Win!";
    } else {
        message.innerHTML = "You Lose!";
    }
}
