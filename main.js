class Card {
    constructor(name, suit, value) {
      this.name = name;
      this.suit = suit;
      this.value = value;
    }
  }
  

  class Deck {
    constructor() {
      this.deckArray = [];

      const names = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
      for (let suit in suits) {
        for (let name in names) {
            this.deckArray.push(new Card(names[name], suits[suit], values[name]));
          }
      }

      this.deckArray.sort(() => Math.random() - 0.5);
    }
  }
  

  class Player {
    constructor(playerName) {
      this.playerName = playerName;
      this.score = 0;
      this.hand = [];
    }
   
    dealCards(halfOfDeck){
      for (let i = 0; i < 26; i++) {

        this.hand.push(halfOfDeck[i]);
      }
    }
  }
  
  function playGame() {
    let deck = new Deck();
    let player1 = new Player('Opponent 1');
    let player2 = new Player('Opponent 2');
    player1.dealCards(deck.deckArray.slice(0,26));
    player2.dealCards(deck.deckArray.slice(26));
    for (let i = 0; i < player1.hand.length; i++) {
      if (player1.hand[i].value > player2.hand[i].value) {
        player1.score += 1;
        console.log(`${player1.hand[i].name} of ${player1.hand[i].suit} > ${player2.hand[i].name} of ${player2.hand[i].suit}, ${player1.playerName} gets 1 point`);
      }
      if (player1.hand[i].value < player2.hand[i].value) {
        player2.score += 1;
        console.log(`${player2.hand[i].name} of ${player2.hand[i].suit} > ${player1.hand[i].name} of ${player1.hand[i].suit}, ${player2.playerName} gets 1 point`);
      }
      else {
        console.log(`${player1.hand[i].name} of ${player1.hand[i].suit} = ${player2.hand[i].name} of ${player2.hand[i].suit}, its a tie! No one gets a point`);
      }
    }
  
    if (player1.score > player2.score) {
      console.log(`${player1.playerName} wins! ${player1.score} points!`);
    }
    if (player2.score > player1.score) {
      console.log(`${player2.playerName} wins! ${player2.score} points!`);
    } else {
      console.log(`It\'s a tie :`)
    }
  }
  playGame(); 