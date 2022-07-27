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
 * Gets the current number of wins from the DOM and increments it by 1
 */
 function incrementScore() {

    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;

}

/**
 * Gets the current tally of losses from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("sheldon-score").innerText);
    document.getElementById("sheldon-score").innerText = ++oldScore;
}