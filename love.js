
var n = Math.floor(Math.random()*100)+1;

if (n === 100) {
  document.querySelector("h2").textContent = "🔥🔥🔥 Your score is " + n +"%." + "Your love sooooo hot!😍";
}

else if (n >= 70) {
  document.querySelector("h2").textContent = "🔥 Your score is " + n +"%." + " It's awesome!";
}
else if (55 <= n && n < 70) {
  document.querySelector("h2").textContent = "Your score is " + n +"%.😊";
}
else {
  document.querySelector("h2").textContent = "Your score is " + n +"%. Try again!";
}