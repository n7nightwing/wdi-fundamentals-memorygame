console.log("Up and running!");

const cards = ["Queen", "Queen", "King", "King"];

const cardsInPlay = [];

var cardOne = cards[3];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2)
	if (cardsInPlay[0] === cardsInPlay[1])
		//say "it's a match!"
	    alert("You found a match!");
	else
		alert("Sorry, try again.");
		//say "not a match :c"