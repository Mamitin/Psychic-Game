

// Create vars
var usersChoice = [];
var wins = 0;
var guessesLeft = 10;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = "";
var userGuess = "";
var loses = 0;

//userGuess
document.onkeyup = function (event) {
    console.log("onkeyup works")
    //set computer auto generated guess using math.random()
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    //capture userGuess
    function guessesSoFar() {
        document.querySelector("letter").innerHTML = "Your guesses so far: " + letterUser.join();
    }
    userGuess = event.key;
    console.log(userGuess);
    console.log(event);
    // function to compare userGuess and ComputerChoices
    //if computerGuess is not equal to userGuess = false //compare guesses
    if (computerGuess == userGuess) {
        wins++;
    } else {
        loses++;
        //loses counted
        //guesses left - decrease
        function countGuessesLeft() {
            document.querySelector("guessesLeft").innerHTML = "Guesses Left: " + letterUser.join('');
            console.log(countGuessesLeft)
        }

    }
}



//display alert

//tally wins and loses

//out of turns alert

