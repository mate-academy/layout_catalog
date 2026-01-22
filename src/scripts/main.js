'use strict';

async function loadCard() {
  const response = await fetch("card.html");
  const cardHTML = await response.text();
  document.getElementsByClassName("card-div").innerHTML = cardHTML.repeat(3); // Inserts the card 3 times
}

loadCard();
