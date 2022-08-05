/**
 * Declare constants for DOM elements
 * and possible choices
 */

 const buttons = document.getElementsByClassName("choice");
 const userWins = document.getElementById("user-score");
 const compWins = document.getElementById("comp-score");
 const userImage = document.getElementById("user-image");
 const compImage = document.getElementById("comp-image");
 
 const hands = [{
    name: "rock",
    image: "assets/images/rock.png",
    beats: ["lizard", "scissors"],
 },
 {
    name: "paper",
    image: "assets/images/paper.png",
    beats: ["rock", "spock"],
 },
 {
    name: "scissors",
    image: "assets/images/scissors.png",
    beats: ["lizard", "paper"],
 },
 {
    name: "lizard",
    image: "assets/images/lizard.png",
    beats: ["paper", "spock"],
 },
 {
    name: "spock",
    image: "assets/images/spock.png",
    beats: ["rock", "scissors"],
 },
]
 
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

 if (computerScore === 10) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'AWWWWWWWWWWWW.... you lost! I bet you are really frustrated about that...',
        showConfirmButton: false,
        timer: 3000
    }).then(() => {
        resetGame()
    })
 } else if (playerScore === 10) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'OOOOOOO... look at that! YOU WON!',
        showConfirmButton: false,
        timer: 3000
    }).then(() => {
        resetGame()
    })
 }
 }


 function resetGame() {
    computerScore = 0;
    playerScore = 0;
    userWins.innerHTML = playerScore;
    compWins.innerHTML = computerScore;
 }