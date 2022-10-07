console.log("Guess the Number Between 1 and 100");
let ran = Math.floor((Math.random() * 100) + 1);
let chances = 0;
let guess;
while (ran != guess) {
  guess = prompt("Enter a Number");
  guess = Number.parseInt(guess);
  if (guess == ran) {
    console.log("Hooray! You have entered the correct Number");
    console.log(`your final score is ${100 - chances} out of 100`);
  }
  else if (guess != ran && guess < ran) {
    console.log("The Correct Number is Greater than the Number you entered, Please try again!");
    chances++;
  }
  else if (guess != ran && guess > ran) {
    console.log("The Correct Number is less than the Number you entered, Please try again!");
    chances++;
  }
}