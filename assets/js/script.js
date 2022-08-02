/**
 * Declare constants for DOM elements
 * and possible choices
 */
 const buttons = document.getElementsByClassName("choice");
 var userWins = document.getElementById("user-score");
 var compWins = document.getElementById("comp-score");
 const userImage = document.getElementById("user-image");
 const compImage = document.getElementById("comp-image");
 var message = document.getElementById("alert");
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
    //  var userSel = Array.from(userChoice);
 
     const compChoice = Math.trunc(Math.random() * 5);
     compImage.src = options[compChoice];
     compImage.alt = options[compChoice];
     
    //  compareChoices(userChoice, compChoice);

    //  console.log(userChoice,compChoice);
 
 
 
 /**
  * Checks to see who the winner is and game logic
  */
 
//  function compareChoices(userChoice, compChoice) {
     if (userChoice === compChoice) {
         message.innerHTML = "Match is a Tie!";
     } else if (userChoice === '0' && compChoice === '2') {
         message.innerHTML = "You Win!";
     } else if (userChoice === '1' && compChoice === '0') {
         message.innerHTML = "You Win!";
     } else if (userChoice === '2' && compChoice === '1') {
         message.innerHTML = "You Win!";
     } else if (userChoice === '0' && compChoice === '3') {
         message.innerHTML = "You Win!";
     } else if (userChoice === '3' && compChoice === '4') {
         message.innerHTML = "You Win!";
     } else if (userChoice === '4' && compChoice === '2') {
         message.innerHTML = "You Win!";
     } else if (userChoice === '2' && compChoice === '3') {
         message.innerHTML = "You Win!";
     } else if (userChoice === '3' && compChoice === '1') {
         message.innerHTML = "You Win!";
     } else if (userChoice === '1' && compChoice === '4') {
         message.innerHTML = "You Win!";
     } else if (userChoice === '4' && compChoice === '0') {
         message.innerHTML = "You Win!";
     } else {
         message.innerHTML = "You Lose!";
     }
     console.log(userChoice,compChoice);
 }


 playGame(userChoice,compChoice);