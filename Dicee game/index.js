// LEFT DICE
// Randomize to simulate roll of dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
// Create var for html output
var images1 = "images/dice" + randomNumber1 + ".png";
// String makes LEFT dice image change
document.querySelector(".dice .img1").setAttribute("src",images1);

// RIGHT DICE
// Randomize to simulate roll of dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Create var for html output
var images2 = "images/dice" + randomNumber2 + ".png";
// String makes RIGHT dice image change
document.querySelector(".dice .img2").setAttribute("src",images2);



// WINNER IS

if (randomNumber1 > randomNumber2) {
  // Player 1 Wins
  document.querySelector('h1').innerHTML = "Player 1 Wins! 🚩";

} else if (randomNumber1 < randomNumber2) {
  // Player 2 Wins
  document.querySelector('h1').innerHTML = "Player 2 Wins! 🚩";

} else {
  // It's A Draw
  document.querySelector('h1').innerHTML = "🤯 It's A Draw!";

}
