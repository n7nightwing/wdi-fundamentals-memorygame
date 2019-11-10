console.log("Up and running!");

const cards = [
{
	rank: "Queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts.png"
}
];


const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1])
		//say "it's a match!"
	    alert("You found a match!");
	else
		alert("Sorry, try again.");
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank)
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
	cardsInPlay.push(cards[cardId].rank)
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


