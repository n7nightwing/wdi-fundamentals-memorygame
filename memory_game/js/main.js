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

function flipCard() {
	var cardId = this.getAttribute('data-id')
	console.log("User flipped " + cards[cardId].rank)
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
	cardsInPlay.push(cards[cardId].rank)
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay.length === 2)
		checkForMatch()

			//say "not a match :c"
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();