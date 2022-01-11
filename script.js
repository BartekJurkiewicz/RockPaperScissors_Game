let choiceOptions = ["ROCK", "PAPER", "SCISSORS"];
let buttons = document.querySelectorAll('button');
let score = document.querySelector('.score')
let results = document.querySelector('.results')
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
          score.innerHTML = `Player points: ${playerPoints} <br> Computer points: ${computerPoints}`
        } else if ((playerChoice === "PAPER" && computerChoice === "ROCK") || 
          (playerChoice === "SCISSORS" && computerChoice === "PAPER") || 
          (playerChoice === "ROCK" &&  computerChoice === "SCISSORS")) {
          playerPoints += 1;
          score.innerHTML = `Player points: ${playerPoints} <br> Computer points: ${computerPoints}`
        } else { 
          computerPoints += 1;
          score.innerHTML = `Player points: ${playerPoints} <br> Computer points: ${computerPoints}`
        }if (playerPoints === 5) {
          results.textContent =`You won the game!` 
          score.innerHTML = `Score: ${playerPoints} : ${computerPoints}`
          playerPoints = 0;
          computerPoints = 0;
          return;          
        } else if (computerPoints === 5) {
          results.textContent =`You lost the game! :()` 
          score.innerHTML = `Score: ${playerPoints} : ${computerPoints}`
          playerPoints = 0;
          computerPoints = 0;
          return;
        }
        results.textContent =``
    });
});

