function getComputerChoice() {

    let num = Math.floor(Math.random() * 3);
    
    if (num === 1) {
        return "rock";
    }
        else if (num===2) {
            return "paper";
        }
            else {
                return "scissors";
            }
  }
  


  function getHumanChoice() {

    let choice = prompt ("Rock, paper or scissors?");
    
    if (choice.toLowerCase() === "rock") {
        return "rock";
    }
        else if (choice.toLowerCase() === "paper") {
            return "paper";
        }
            else if(choice.toLowerCase()==="scissors"){
                return "scissors";
            }
                else {
                    return "Invalid input!";
                }
  }

  

 



  function playGame() {

        let humanScore = 0;
        let computerScore = 0;
        let rounds = 0;

        function playRound(humanChoice, computerChoice) {

            if (humanChoice === computerChoice) {
                console.log("It's a tie. No winners.");

            } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
                humanScore = humanScore + 1;
                console.log("You win! Rock beats scissors");
            
            } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
                computerScore = computerScore + 1;
                console.log("You lose! Rock beats scissors");

            } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
                computerScore = computerScore + 1;
                console.log("You lose! Paper beats rock");

            } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
                humanScore = humanScore + 1;
                console.log("You win! Paper beats rock");

            } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
                computerScore = computerScore + 1;
                console.log("You lose! Scissors beat paper")  

            } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
                humanScore = humanScore + 1;
                console.log("You win! Paper beats rock");
            }   
        
        }

        while(rounds < 5) {

            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);
            rounds = rounds + 1;
        }

        
        


        return console.log(`Final scores: Human-${humanScore} Computer-${computerScore}`);


    }

    playGame();

  