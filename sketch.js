var inputBox;
var inputButton;
var playerName;
var gameMessage;
var showMessage = false;
var guessBox;
var guessButton;
var playerGuess;
var secretNumber;
var numberOfTries = 3;



function setup() {
  createCanvas(400, 400);
  inputBox = createInput();
  inputBox.position(50,100);
  inputButton = createButton("Submit");
  inputButton.position(200,100);
  inputButton.mouseClicked(getName);
  
  guessBox = createInput();
  guessBox.position(50, 250);
  guessBox.hide();
  guessButton = createButton("Submit");
  guessButton.position(200, 250);
  guessButton.mouseClicked(getGuess);
  guessButton.hide();
  
  secretNumber = random(1,10);
  secretNumber = round(secretNumber);
}

function getName() {
  inputBox.hide();
  inputButton.hide();
 // console.log(inputBox.value());
  playerName = inputBox.value();
  gameMessage = "Hello " + playerName + "! I'm thinking of a number between 1 and 10. You get three tries. What is your guess?";

  //console.log(secretNumber);
  
  showMessage = true;
  guessBox.show();
  guessButton.show();
} 

function getGuess() {
  
  playerGuess = guessBox.value();
  
  if (playerName == "Stacey" || playerName == "Mom") {
    secretNumber = Infinity;
  }
  if (playerName == "Veronica") {
   secretNumber = playerGuess;
  }
  if (playerName == "Simon") {
    secretNumber = playerGuess;
  }
  
  if (playerGuess != secretNumber) {
    numberOfTries = numberOfTries - 1;
  }
  if (playerGuess == secretNumber && numberOfTries > 0) {
    gameMessage = "Congratulations " + playerName + "! You guessed it! (Press the yellow Play button in the top left corner to play again).";
  }
  else if (numberOfTries <= 0) {
  gameMessage = "Sorry " + playerName + ", you lose. Better luck next time! (Press the yellow Play button in the top left corner to play again).";
  }
  else if (playerGuess > secretNumber) {
    gameMessage = "Your guess, " + playerGuess + ", is too high. Try a little lower.";
  }
  else if (playerGuess < secretNumber) {
    gameMessage = "Your guess, " + playerGuess + ", is too low. Try a little higher.";
  }
  
  guessBox.value("");
  
}



function draw() {
  
  background(0);
  
  
  if (showMessage == false) {
    fill(0,255,200);
    stroke(255,0,0);
    strokeWeight(5);
    textSize(25);
    text("Let's play a guessing game!", 50,50);
    
    fill(0,0,255);
    stroke(0,255,0);
    strokeWeight(4);
    textSize(22);
    text("Enter your name here", 50,90);
  }
  
  if (showMessage == true) {
    fill(255,255,255);
    noStroke();
    textSize(18);
    text(gameMessage, 50,150, 350, 300);
  }
  
}