

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length === 2){
		cardID (cardsInPlay[0] === cardsInPlay[1])
			alert("You found a match");
		}else {
			alert("Sorry, try again");
		}
	}


var flipCard = function(cardID) {}
		checkForMatch();
		console.log("User flipped " + cards[cardID]);
		cardsInPlay.push(cards[cardID]);
	

}

flipCard(0);
flipCard(2);

