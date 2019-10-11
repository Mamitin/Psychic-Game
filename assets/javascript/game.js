// Create vars
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var usersChoice = [];
var computerGuess = "";
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = "";

computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerChoices);

function guessPl() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerChoices);
}


//userGuess
document.onkeyup = function (event) {
    userGuess = event.key;
    console.log("onkeyup works");
    console.log(event);

    if (computerGuess == userGuess) {
        wins++;
        guessesLeft;
        usersChoice;
    }

    guessPl();
    if (userGuess !== computerGuess) {
        guessesLeft--;
    }

    if (guessesLeft == 0) {
        losses++;
        usersChoice = [];
        guessesLeft = 10;
        //loses counted
        //guesses left - decrease
    }

    if (usersChoice.indexOf(userGuess) >= 0) {

    } else {
        usersChoice.push(userGuess);
        var usersGuessGuess = document.getElementById(userGuess);
        console.log(usersChoice);
        console.log(userGuess);

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeft.textContent = "Guesses left: " + guessesLeft;
        guessesSoFar.textContent = "Your guesses so far: " + userGuess;

    }
}

var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");

    //display alert
    //out of turns alert

    //set computer auto generated guess using math.random()
    //capture userGuess
    //function guessesSoFar() {
    //document.querySelector("letter").innerHTML = "Your guesses so far: " + letterUser.join();

    // function to compare userGuess and ComputerChoices
    //if computerGuess is not equal to userGuess = false //compare guesses


//function countGuessesLeft() {
  //document.querySelector("guessesLeft").innerHTML = "Guesses Left: " + letterUser.join('');
  //console.log(countGuessesLeft)

//tally wins and loses
