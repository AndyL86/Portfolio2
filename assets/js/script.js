/**
 * Declare constants for DOM elements
 * and possible choices
 */

 const buttons = document.getElementsByClassName("choice");
 var userWins = document.getElementById("user-score");
 var compWins = document.getElementById("comp-score");
 const userImage = document.getElementById("user-image");
 const compImage = document.getElementById("comp-image");
 
 var options = [];
 
 options[0] = 'assets/images/rock.png';
 options[1] = 'assets/images/paper.png';
 options[2] = 'assets/images/scissors.png';
 options[3] = 'assets/images/lizard.png';
 options[4] = 'assets/images/spock.png';
 
 let computerScore = 0;
 let playerScore = 0;
 let message = document.getElementById("alert");
 
 /**
  * Add event listener to buttons
  */
 for (let button of buttons) {
     button.addEventListener("click", function () {
         var userChoice = this.getAttribute("data-choice");
         playGame(userChoice);
     });
 }

 /**
  * The main game function 
  */
 function playGame(userChoice) {
 
     userHand = hands.filter((value) => value.name === userChoice)
     userImage.src = userHand[0].image;
     userImage.alt = userHand[0].name;
 
     const compChoice = Math.trunc(Math.random() * 5);
     const compHand = hands[compChoice]
     compImage.src = options[compChoice];
     compImage.alt = options[compChoice];
     
     compareChoices(userHand[0], compHand);
 }

 
 
 
 /**
  * Checks to see who the winner is and game logic
  */
function compareChoices(userChoice, compChoice) {

 let winners = userChoice.beats

 if (userChoice.name === compChoice.name) {
    message.innerHTML = "Match is a Tie!";
 } else if (winners.includes(compChoice.name)) {
    message.innerHTML = "You Win!";
         userWins.innerHTML = playerScore;
               playerScore++;
 } else {
    message.innerHTML = "You Lose!";
         compWins.innerHTML = computerScore;
               computerScore++;
 }
 }


 function resetGame() {
    computerScore = 0;
    playerScore = 0;
    userWins.innerHTML = playerScore;
    compWins.innerHTML = computerScore;
 }