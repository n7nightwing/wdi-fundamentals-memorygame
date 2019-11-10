console.log("Up and running!");

const cards = ["Queen", "Queen", "King", "King"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1])
		//say "it's a match!"
	    alert("You found a match!");
	else
		alert("Sorry, try again.");
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId])
	cardsInPlay.push(cards[cardId])
	if (cardsInPlay.length === 2)
		checkForMatch()

			//say "not a match :c"
}

flipCard(0);
flipCard(2);
/*
if (cardsInPlay.length === 2)
	if (cardsInPlay[0] === cardsInPlay[1])
		//say "it's a match!"
	    alert("You found a match!");
	else
		alert("Sorry, try again.");
		//say "not a match :c"
*/


