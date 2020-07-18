var randomNumber1 = Math.floor(Math.random() * 6) + 1;
 var randomImage = "dice" +  randomNumber1 + ".png";
 var randomSorse = "images/" + randomImage;
document.querySelectorAll("img")[0].setAttribute("src", randomSorse);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 var randomImage = "dice" +  randomNumber2 + ".png";
 var randomSorse = "images/" + randomImage;
document.querySelectorAll("img")[1].setAttribute("src", randomSorse);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 wins!🚩";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
}
