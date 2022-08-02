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
var options = [];

options[0].push = ('assets/images/rock.png');
options[1].push = ('assets/images/paper.png');
options[2].push = ('assets/images/scissors.png');
options[3].push = ('assets/images/lizard.png');
options[4].push = ('assets/images/spock.png');


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

    userImage.src = 'assets/images/${options[userChoice]}.png';
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
    } else if (userChoice === options[0] && compChoice === options[2]) {
        message.innerHTML = "You Win!";
    } else if (userChoice === options[1] && compChoice === options[0]) {
        message.innerHTML = "You Win!";
    } else if (userChoice === options[2] && compChoice === options[1]) {
        message.innerHTML = "You Win!";
    } else if (userChoice === options[0] && compChoice === options[3]) {
        message.innerHTML = "You Win!";
    } else if (userChoice === options[3] && compChoice === options[4]) {
        message.innerHTML = "You Win!";
    } else if (userChoice === options[4] && compChoice === options[2]) {
        message.innerHTML = "You Win!";
    } else if (userChoice === options[2] && compChoice === options[3]) {
        message.innerHTML = "You Win!";
    } else if (userChoice === options[3] && compChoice === options[1]) {
        message.innerHTML = "You Win!";
    } else if (userChoice === options[1] && compChoice === options[4]) {
        message.innerHTML = "You Win!";
    } else if (userChoice === options[4] && compChoice === options[0]) {
        message.innerHTML = "You Win!";
    } else {
        message.innerHTML = "You Lose!";
    }
}
