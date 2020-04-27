
//computer options array
var computeroptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//User wins
var wins = 0;
//User Losses
var losses = 0;
//Guesses remaing
var guessesleft = 9;

var guessedLetters = [];

var feedback = document.getElementById("#userGuess2");
// console.log(userguess);
//computer guess is random letter
var computerguess = computeroptions[Math.floor(Math.random() * computeroptions.length)];


//on key function that records the users guess and pushes it to lowercase,
document.onkeyup = function () {
    var userguess = event.key;
    console.log(userguess);
    if (guessedLetters.includes(userguess)) {
        var html = "You already guessed" + userguess;
        return document.getElementById("game").innerHTML = html;

    } else guessedLetters.push(userguess); {


    }

    // console.log(computerguess);



    //if user guess does not match computer guess then user will be alerted to the incorrect guess and the loss column should increment by 1
    if (userguess == computerguess) {
        wins++;
        alert("Nice Job!");
        guessesleft = 9;
        guessedLetters = [];
        computerguess = computeroptions[Math.floor(Math.random() * computeroptions.length)];
        // alert("Wins: "+ wins);

    }
    //If the user gues is correct then the user will be alerted of the win, then the will column should be incremented by 1
    if (computerguess != userguess) {
        // alert("Losses: "+ losses);
        guessesleft--;
        // console.log(guessesleft + " remaining guesses.")
    }

    if (guessesleft === 0) {
        alert("Game over");
        losses++;
        // window.location.reload(false);
        guessesleft = 9;

        //clear guessed letters if player loses 
        guessedLetters = [];

    }

    var html = "<h1>Guess what letter I'm thinking of!</h1>" +
        "<h2>Wins: " + wins + "</h2>" +
        "<h2>Losses: " + losses + "</h2>" +
        "<p>Guesses Left: " + guessesleft + "</p>" +
        "<p>Your Guesses So Far: " + guessedLetters + "</p>";

    document.querySelector('.game').innerHTML = html;



}

