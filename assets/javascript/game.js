

// Create vars

// var for users guess
var usersChoice = [];
// var for wins
var wins = 0;
// var for guesses left
var guessesLeft = 10;
//var for computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = "";
var userGuess = "";
var loses = 0;

    //userGuess
    document.onkeyup = function (event) {
        console.log("onkeyup works")
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
        //capture userGuess
        userGuess = event.key;
        console.log(userGuess);
        console.log(event);
        // function to compare userGuess and ComputerChoices

        //if computerGuess is not equal to userGuess = false //compare guesses
       if (computerGuess == userGuess) {
          wins++;
       } else {
          loses++;
            //guesses left - decrease
            //loses counted
    }
    } 
//register user's guess

//set computer auto generated guess using math.random()

//console.log(computerGuess);



//guesses left
// minus guesses left
function countGuessesLeft() {
    document.querySelector("guessesLeft").innerHTML = "Guesses Left: " + letterUser.join('');
}

//guessesSoFar
function guessesSoFar() {
    document.querySelector("letter").innerHTML = "Your guesses so far: " + letterUser.join();
}

//guessesLeft
//countGuessesLeft();

//display alert

//tally wins and loses

//out of turns alert

