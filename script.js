function getComputerChoice() {
    const pickOption = Math.floor(Math.random() * 3);

    if (pickOption >= 3) {
        return 'Rock'
    } else if (pickOption === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function getHumanChoice() {

    let choice = prompt("Rock, Paper, Scissors?").toLowerCase()
    
        if (choice === "rock") {
            return 'Rock'
        } else if (choice === "paper") {
            return 'Paper'
        } else if (choice === "scissors") {
            return 'Scissors'
        } else {
            return 'Invalid Selection. Try Again.'
        }
} 

function playGame() {

let humanScore = 0
let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

        if (humanChoice === computerChoice) {
            console.log("It's a draw! Play Again!")
        } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
            computerScore++
            console.log("Computer Wins. Paper beats Rock")
        } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
            humanScore++
            console.log("You win! Rock beats Scissors")
        } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
            humanScore++
            console.log("You win! Paper beats Rock")
        } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
            computerScore++
            console.log("Computer wins. Scissors beats Paper")
        } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
            humanScore++
            console.log("You win! Scissors beats Paper")
        } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
            computerScore++
            console.log("Computer wins. Rock beats Scissors")
        }
    }

    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)
    }

    if(humanScore === computerScore) {
        console.log("Tie")
    } else if (humanScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("Computer Wins.")
    }

    console.log(`Final Score: Player: ${humanScore} Computer: ${computerScore}`)
}

playGame()