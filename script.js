// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the necessary elements
    var playerImgs = document.querySelectorAll(".playerImgs img");
    var computerImgs = document.querySelectorAll(".computerImgs img");
    var playerChoice = document.querySelector(".playerChoice");
    var computerChoice = document.querySelector(".computerChoice");
    var playerScore = document.querySelector(".playerScore");
    var computerScore = document.querySelector(".computerScore");
    var winnerDiv = document.querySelector(".winnerDiv");
    var winnerText = document.querySelector(".winner");
    var resetButton = document.querySelector(".reset");
    var tiesCount = document.querySelector(".ties");
  
    var playerScoreCount = 0;
    var computerScoreCount = 0;
    var tiesCountCount = 0;
  
    // Add click event listeners to player images
    playerImgs.forEach(function (img) {
      img.addEventListener("click", function () {
        var playerSelection = img.alt;
        var computerSelection = generateComputerChoice();
        var result = determineWinner(playerSelection, computerSelection);
  
        // Update the displayed choices
        playerChoice.textContent = "You chose: " + playerSelection;
        computerChoice.textContent = "Computer chose: " + computerSelection;
  
        // Update the scores
        if (result === "player") {
          playerScoreCount++;
        } else if (result === "computer") {
          computerScoreCount++;
        } else {
          tiesCountCount++;
        }
  
        playerScore.textContent = "Your Score: " + playerScoreCount;
        computerScore.textContent = "Computer Score: " + computerScoreCount;
        tiesCount.textContent = "Ties: " + tiesCountCount;
  
        // Display the winner
        if (result === "player") {
          winnerText.textContent = "You win!";
        } else if (result === "computer") {
          winnerText.textContent = "Computer wins!";
        } else {
          winnerText.textContent = "It's a tie!";
        }
  
        winnerDiv.style.display = "block";
      });
    });
  
    // Reset the game when the reset button is clicked
    resetButton.addEventListener("click", function () {
      playerScoreCount = 0;
      computerScoreCount = 0;
      tiesCountCount = 0;
  
      playerScore.textContent = "Your Score: 0";
      computerScore.textContent = "Computer Score: 0";
      tiesCount.textContent = "Ties: 0";
  
      winnerDiv.style.display = "none";
    });
  
    // Generate a random computer choice
    function generateComputerChoice() {
      var choices = ["Rock", "Paper", "Scissors"];
      var randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    // Determine the winner based on the player and computer choices
    function determineWinner(player, computer) {
      if (player === computer) {
        return "tie";
      } else if (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper")
      ) {
        return "player";
      } else {
        return "computer";
      }
    }
  });