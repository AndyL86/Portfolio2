/**
 * Add event listener to all buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function() {
        let userChoice = this.getAttribute("data-choice");
        playGame(userChoice);
    });
}