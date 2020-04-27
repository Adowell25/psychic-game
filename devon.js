//computer player 2 things chooses guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//generates random guese
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


//win loose score
var wins = 0;
var losses = 0;


//total guesses array to keep guesses
var guessesLeft = 10;
var guessedLetters = [];






//start
document.onkeyup = function (event) {
//3 possibilities for guesses
    userGuess = event.key;
//already guessed add guess to html (includes) 
    if (guessedLetters.includes(userGuess)) {
        var html = "You already guessed " + userGuess + "!";
        return document.getElementById("game").innerHTML = html;
    } else guessedLetters.push(userGuess);{
        
    }

//correct
    if (computerGuess == userGuess) {
    alert("you win!!")
      wins++;
      guessesLeft = 10;
      guessedLetters = [];
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    //wrong
    
    if (computerGuess != userGuess) {
      guessesLeft--;
      
    }
  
    if (guessesLeft == 0) {
        alert("you loose.")
      losses++;
      guessesLeft = 10;
      guessedLetters = [];
    }
//unsure if needed to put all variables in if else statement. only way to get it working could have been syntax.
  
//changing html section
//prompt
//wins
//loose
//guesses
//seeing already guessed
 
    var html =
      "<p>Guess what letter I am thinking of!</p>" + "<br>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + losses + "</p>" +
      "<p>Guesses Left: " + guessesLeft + "</p>" +
      "<p>Your Guesses So Far: " + guessedLetters + "</p>";
  document.getElementById("game").innerHTML = html;
  }

//i couldn't get hangman... will work on. hopefully that does not impact score