/**
 * Declare constants for DOM elements
 * and possible choices
 */
 const buttons = document.getElementsByClassName("choice");
 var userWins = document.getElementById("user-score");
 var compWins = document.getElementById("comp-score");
 const userImage = document.getElementById("user-image");
 const compImage = document.getElementById("comp-image");
 var message = document.querySelector("#alert");
 var options = [];
 
 options[0] = 'assets/images/rock.png';
 options[1] = 'assets/images/paper.png';
 options[2] = 'assets/images/scissors.png';
 options[3] = 'assets/images/lizard.png';
 options[4] = 'assets/images/spock.png';
 
 
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
 
     userImage.src = options[userChoice];
     userImage.alt = options[userChoice];
 
     const compChoice = Math.trunc(Math.random() * 5);
     compImage.src = options[compChoice];
     compImage.alt = options[compChoice];
 
     compareChoices(userChoice, compChoice);
 
 }
 
 
 /**
  * Checks to see who the winner is and game logic
  */
 
 function compareChoices(userChoice, compChoice) {
 
     if (userChoice === compChoice) {
         message.innerHTML = "Match is a Tie!";
     } else if (userChoice === 0 && compChoice === options[compChoice]) {
         message.innerHTML = "You Win!";
     } else if (userChoice === 1 && compChoice === options[compChoice]) {
         message.innerHTML = "You Win!";
     } else if (userChoice === 2 && compChoice === options[compChoice]) {
         message.innerHTML = "You Win!";
     } else if (userChoice === 0 && compChoice === options[compChoice]) {
         message.innerHTML = "You Win!";
     } else if (userChoice === 3 && compChoice === options[compChoice]) {
         message.innerHTML = "You Win!";
     } else if (userChoice === 4 && compChoice === options[compChoice]) {
         message.innerHTML = "You Win!";
     } else if (userChoice === 2 && compChoice === options[compChoice]) {
         message.innerHTML = "You Win!";
     } else if (userChoice === 3 && compChoice === options[compChoice]) {
         message.innerHTML = "You Win!";
     } else if (userChoice === 1 && compChoice === options[compChoice]) {
         message.innerHTML = "You Win!";
     } else if (userChoice === 4 && compChoice === options[compChoice]) {
         message.innerHTML = "You Win!";
     } else {
         message.innerHTML = "You Lose!";
     }
 }