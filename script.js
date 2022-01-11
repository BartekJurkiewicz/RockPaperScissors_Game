let choiceOptions = ["ROCK", "PAPER", "SCISSORS"];
let buttons = document.querySelectorAll('button');
let playerChoice, computerChoice, playerPoints = 0, computerPoints = 0;



let setPlayerChoice = (choice) => {
  playerChoice = choice;  
  return playerChoice; 
}

let setComputerChoice = (choice) => {
  computerChoice = choice;  
  return computerChoice; 
}

    
buttons.forEach(button => {
    button.addEventListener('click', () => {
        setPlayerChoice(button.id.toUpperCase());
        setComputerChoice(choiceOptions[Math.floor(Math.random() * choiceOptions.length)]);
        if (playerChoice === computerChoice) {
          playerPoints += 1;
          computerPoints += 1;
          console.log(`Player points: ${playerPoints}`);
          console.log(`Computer points: ${computerPoints}`);
        } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
          playerPoints += 1;
          console.log(`Player points: ${playerPoints}`)
          console.log(`Computer points: ${computerPoints}`);;
        } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
            playerPoints += 1;
            console.log(`Player points: ${playerPoints}`);
            console.log(`Computer points: ${computerPoints}`);
        } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
          playerPoints += 1;
          console.log(`Player points: ${playerPoints}`);
          console.log(`Computer points: ${computerPoints}`);
        } else { 
          computerPoints += 1;
          console.log(`Player points: ${playerPoints}`);
          console.log(`Computer points: ${computerPoints}`);
        } if (playerPoints === 5) {
          console.log(`You won the game! ${playerPoints}:${computerPoints}`)
          playerPoints = 0;
          computerPoints = 0;
          return;          
        } else if (computerPoints === 5) {
          console.log(`You lost the game! ${playerPoints}:${computerPoints}`)
          playerPoints = 0;
          computerPoints = 0;
          return;
        }

    });
});

// for (let i = 0; i < 5; i++) {
    
// }

//secure big, small letters and others characters


// let game = (playerChoice, computerChoice) => {
//     computerChoice = choiceOptions[Math.floor(Math.random()*choiceOptions.length)];
//     playerChoice = prompt("Chose paper, rock or scissors?").toUpperCase();

//     if (playerChoice === computerChoice) {
//        return "Tie! Try one more time"
//     } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
//         return "You won! Paper beats rock";
//     } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
//         return "You won! Scissors beats paper";
//     } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
//         return "You won! Rock beats scissors";
//     } else return "Unfortunately you have lost!"
// }
// console.log(game());






// for (let i = 0; i < 5; i++) {
    
// }

//secure big, small letters and others characters


// let game = (playerChoice, computerChoice) => {
//     computerChoice = choiceOptions[Math.floor(Math.random()*choiceOptions.length)];
//     playerChoice = prompt("Chose paper, rock or scissors?").toUpperCase();

//     if (playerChoice === computerChoice) {
//        console.log("Tie! Try one more time"
//     } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
//         console.log("You won! Paper beats rock";
//     } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
//         console.log("You won! Scissors beats paper";
//     } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
//         console.log("You won! Rock beats scissors";
//     } else console.log("Unfortunately you have lost!")
// }
// console.log(game());