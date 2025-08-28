// Coins and hearts
let coins = 100;
let hearts = 0;

// Counters
let coinCounter = document.getElementById("coinCount");
let heartCounter = document.getElementById("heartCount");

// Heart icons click
let heartIcons = document.getElementsByClassName("card-heart");
for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].onclick = function () {
    hearts += 1;
    heartCounter.innerText = hearts;
  };
}

// Call buttons click
let callButtons = document.getElementsByClassName("call-button");
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].onclick = function () {

    // Get card element
    let card = this.parentNode.parentNode;

    // Get service name & number directly
    let serviceName = card.querySelector("h1").innerText;
    let serviceNumber = card.querySelector("h1 + p, h1 + h1").innerText;

    // Check coins
    if (coins < 20) {
      alert("Not enough coins!");
      return;
    }

    coins -= 20;
    coinCounter.innerText = coins;

    alert("Calling " + serviceName + " at " + serviceNumber);

    addToHistory(serviceName, serviceNumber);
  };
}






