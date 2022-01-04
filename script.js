
let choiceOptions = ["ROCK", "PAPER", "SCISSORS"];


for (let i = 0; i < 5; i++) {
    let game = (playerChoice, computerChoice) => {
        computerChoice = choiceOptions[Math.floor(Math.random()*choiceOptions.length)];
        playerChoice = prompt("Chose paper, rock or scissors?").toUpperCase();

        if (playerChoice === computerChoice) {
           return "Tie! Try one more time"
        } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
            return "You won! Paper beats rock";
        } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
            return "You won! Scissors beats paper";
        } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
            return "You won! Rock beats scissors";
        } else return "Unfortunately you have lost!"
    }
    console.log(game());
}

//secure big, small letters and others characters