

// Create vars
var wins = 0;
var loses = 0;
var guessesLeft = 10;
var usersChoice = [];
var computerGuess = "";
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var userGuess = "";

computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//console.log(computerChoices);

function guessPl() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//console.log(computerChoices);
}


//userGuess
document.onkeyup = function (event) {
    userGuess = event.key;
    //console.log("onkeyup works")
    if (computerGuess == userGuess) {
        wins++;
        guessesLeft;
        usersChoice;
    } else {
        loses++;
        //loses counted
        //guesses left - decrease
    }




    //set computer auto generated guess using math.random()
    //capture userGuess
    function guessesSoFar() {
        document.querySelector("letter").innerHTML = "Your guesses so far: " + letterUser.join();
    }
    console.log(userGuess);
    console.log(event);
    // function to compare userGuess and ComputerChoices
    //if computerGuess is not equal to userGuess = false //compare guesses

}
function countGuessesLeft() {
    document.querySelector("guessesLeft").innerHTML = "Guesses Left: " + letterUser.join('');
    console.log(countGuessesLeft)
}



//display alert

//tally wins and loses

//out of turns alert

