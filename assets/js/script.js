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
];

let computerScore = 0;
let playerScore = 0;
let message = document.getElementById("alert");

/**
 * Add event listener to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        const userChoice = this.getAttribute("data-choice");
        playGame(userChoice);
    });
}

/**
 * The main game function 
 */
function playGame(userChoice) {

    const userHand = hands.filter((value) => value.name === userChoice);
    userImage.src = userHand[0].image;
    userImage.alt = userHand[0].name;

    const compChoice = Math.trunc(Math.random() * 5);
    const compHand = hands[compChoice];
    compImage.src = compHand.image;
    compImage.alt = compHand.name;

    compareChoices(userHand[0], compHand);
}




/**
 * Checks to see who the winner is and game logic
 */
function compareChoices(userChoice, compChoice) {

    let winners = userChoice.beats;

    if (userChoice.name === compChoice.name) {
        message.innerHTML = "Match is a Tie!";
        message.style.color = '#EAA362';
    } else if (winners.includes(compChoice.name)) {
        message.innerHTML = "You Win!";
        message.style.color = '#8CDE96';
        playerScore++;
        userWins.innerHTML = playerScore;
        userWins.style.color = '#8CDE96';
    } else {
        message.innerHTML = "You Lose!";
        message.style.color = '#F99595';
        computerScore++;
        compWins.innerHTML = computerScore;
        compWins.style.color = '#F99595';
    }

    if (computerScore === 10) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'You Lost! Sucks to be you',
            showConfirmButton: false,
            timer: 3500
        }).then(() => {
            resetGame();
        });
    } else if (playerScore === 10) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'OOOOO... look at that! YOU WON!',
            showConfirmButton: false,
            timer: 3500
        }).then(() => {
            resetGame();
        });
    }
}


function resetGame() {
    let computerScore = 0;
    let playerScore = 0;
    let messageReset = '';
    userWins.innerHTML = playerScore;
    compWins.innerHTML = computerScore;
    message.innerHTML = messageReset;
}