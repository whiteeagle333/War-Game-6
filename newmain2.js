// Defines the Player class, which has a constructor function that sets up the player's name, deck, and points
/* The class has a constructor function  takes a name parameter and sets up the player's properties.
The constructor function initializes three properties for each player: name, deck, and points. 
The name property is set to the value of the name parameter that was passed in.
The deck property is an empty array that will later hold the player's cards.
The points property is initialized to zero and will later be used to keep track of the player's score.
This Player class serves as a blueprint for creating new player objects with the specified properties. 
Once a new player object is created using this class, the properties can be accessed and updated using dot notation.
*/
class Player {
  constructor(name) {
    this.name = name;
    this.deck = [];
    this.points = 0;
  }
}

// Defines two arrays: one for the four suits in a deck of cards, and one for the 13 possible card values
const suits = ["♣", "♦", "♥", "♠"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
// Declare an empty array for the deck of cards
/* it will is used by multiple functions in the program.
 Specifically, resetGame() uses the deck array to initialize a full deck of playing cards, while startWarGame() 
uses deck to assign half of the deck to each player at the start of the game. */

let deck = [];
// the shuffleDeck function, which takes a deck parameter and shuffles the deck using the Fisher-Yates algorithm
/*works by iterating over the array from the last element to the first,
 and for each element, it selects a random element before it and swaps their positions. 
This process is repeated until all elements in the array have been processed.
--------------------------------------------------------------------------------------------------------
The for loop iterates over each element of the deck array from the last element to the first 
(i starts at deck.length - 1 and decrements by 1 each time).
For each element, a random index j is generated using Math.floor(Math.random() * (i + 1)),
which is a random integer between 0 and i, inclusive. 
The current element at index i is then swapped with the element at 
index j using destructuring assignment: [deck[i], deck[j]] = [deck[j], deck[i]]. 
This process is repeated until all elements in the array have been processed, resulting in a shuffled deck array. */

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}
/* the resetGame function, which resets the deck array and populates it with all possible card combinations
The resetGame function in this code is used to reset the game and populate the deck array with all possible card 
combinations. It first sets the deck array to an empty array [].
Then, it uses two for loops to iterate through the suits and values arrays, respectively. 
In each iteration of the for loops, it combines the current suit and value to create a card string ("Ace of ♣"). 
It pushes this string to the deck array using the push method.
By the end of the function, the deck array should contain all possible combinations of suits and values
representing a complete deck of cards. 
The shuffleDeck function is then called to shuffle the deck array so that the game is ready to be played.
*/
//-----------------------------------------------------------------------------------------------------------
/*/ the resetGame function, which resets the deck array and populates it with all possible card combinations
first, it resets the deck array by setting it to an empty array using deck = [];.
Next, it populates the deck array by iterating over each possible combination of suits and values using nested for loops. 
For each combination, it constructs a card string in the format of "value of suit"
and adds it to the deck array using deck.push(${values[j]} of ${suits[i]});.
After all possible card combinations have been added to the deck array, 
the function calls the shuffleDeck function to shuffle the deck using the Fisher-Yates algorithm.
Overall, the resetGame function is a crucial part of the game logic as it prepares the deck of cards for the start 
of a new game
*/
function resetGame() {
  deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(`${values[j]} of ${suits[i]}`);
    }
  }
  /* Shuffle the deck using the shuffleDeck is function to the code line that calls the shuffleDeck() 
function to randomize the order of the cards in the deck array.*/
  shuffleDeck(deck);
}
/* the startWarGame function, sets up the game between two players. 
First, the function prompts the user to enter the names of the two players using prompt.
Then, it clears the console using console.clear.
Then resetGame function is called, which resets the deck array and shuffles it using the shuffleDeck function.
Then deck array is split in half, with one half going to each player's deck array.

Then function then enters a while loop that continues as long as both players have cards in their decks.
Within the loop, the first card from each player's deck is drawn and stored in a variable.

These cards are then compared to determine which player wins the round. 
If one player's card has a higher value than the other player's card, 
that player gets a point. If the cards are of equal value, it's a tie.

The point totals for each player are displayed on the console.

The while loop continues until one player has no cards left in their deck.

Once the game is over, the function determines the winner based on who has the most points,
and displays the winner's name and point total on the console.

the startWarGame function sets up the game of War between two players,
plays through the game, and determines the winner
*/
//Define a function to start the game
function startWarGame() {
  const player1Name = prompt("Enter Player 1's name:");
  const player1 = new Player(player1Name);

  const player2Name = prompt("Enter Player 2's name:");
  const player2 = new Player(player2Name);

  //Clear the console and reset the deck
  console.clear("game start");

  /* calling resetGame, The game starts by prompting the user to enter the names of two players.
 using the prompt function which displays a dialog box with a message in this case ""end of game reset""
The deck of cards is then reset calling it here after the clearing to re start fresh game*/
  resetGame("end of game reset");

  /* Split the deck in half and give each player their half 
The deck.length / 2 calculates the half length of the deck, and stores it in halfDeckLength. 
The .slice() method is then used on the deck array to create two new arrays representing 
the first half and second half of the deck.
player1.deck is then assigned to the first half of the deck, 
from the beginning of the deck array up to the halfDeckLength index. 
player2.deck is assigned to the second half of the deck, from the halfDeckLength index to the end of the deck array.
By splitting the deck in half and assigning each player their own half, 
the game can begin with each player having their own set of cards to play with. */

  const halfDeckLength = deck.length / 2;

  player1.deck = deck.slice(0, halfDeckLength);
  player2.deck = deck.slice(halfDeckLength);

  // Display the first cards of each player below
  /*After the deck has been reset and shuffled, the startWarGame function assigns 
the first half of the deck to player1 and the second half of the deck to player2. 
Then, the first card of each player's deck is displayed on the console using console.log().
The deck array is split into two halves using the slice() method. 
The first half of the deck, from index 0 to halfDeckLength, is assigned to player1.deck. 
The second half of the deck, from halfDeckLength to the end, is assigned to player2.deck.
Then, the first card of each player's deck is displayed on the console using console.log().
The player's name is displayed along with their first card by accessing the name property 
of each player object and the first element of their deck array, which contains the card string.

The line of code console.log(${player1Name}'s first card: ${player1.deck[0]}); 
and console.log(${player2Name}'s first card: ${player2.deck[0]}); 
is used to display the first card of each player on the console.
The $ sign is used here to interpolate variables in a string literal,
which means that the variables player1Name and player2Name are being inserted into the string 
along with the first card of each player's deck. 
This line of code is executed after the deck has been split in half and each player has been given their half.
  */
  console.log(`${player1Name}'s first card: ${player1.deck[0]}`);
  console.log(`${player2Name}'s first card: ${player2.deck[0]}`);
  // Play the game until one player has no cards left

  while (player1.deck.length > 0 && player2.deck.length > 0) {
    const player1Card = player1.deck.shift();
    const player2Card = player2.deck.shift();
    // Draw cards from each player's deck

    console.log(`${player1.name} plays: ${player1Card}`);
    console.log(`${player2.name} plays: ${player2Card}`);

    // to determine the winner of the round and update points accordingly
    /*here we are checking if the numerical value of the card played by 
player 1 is greater than the numerical value of the card played by player 2.
If it is, then player 1 wins the round.
It uses the indexOf() method to find the index position of the card value in the values array,
 which contains all the possible card values in the game.

If the value of player1Card is higher than player2Card, the code inside the if block will be executed.
This block updates the score of player1 by incrementing their points property by 1 and displays a message 
indicating that player1 has won the round.
If the value of player1Card is lower than player2Card, the code inside the else-if block will be executed.
This block updates the score of player2 by incrementing their points property by 1 and displays a message 
indicating that player2 has won the round.
If the values are equal, the code inside the else block will be executed, 
which displays a message indicating that the round is a tie.
*/
    if (
      values.indexOf(player1Card.split(" ")[0]) >
      values.indexOf(player2Card.split(" ")[0])
    ) {
      console.log(`${player1.name} wins this round!`);
      player1.points++;
    } else if (
      values.indexOf(player1Card.split(" ")[0]) <
      values.indexOf(player2Card.split(" ")[0])
    ) {
      console.log(`${player2.name} wins this round!`);
      player2.points++;
    } else {
      console.log("It's a tie!");
    }
    /* This code prints out the current scores of each player in the console.
It shows how many points each player has accumulated so far in the game.
The code is logging the points of each player after a round of the game.
It is using string interpolation to display the player's name and their current points.
For example, the first line console.log(${player1.name}: ${player1.points} points); 
will log a message to the console with the player1's name and their current points.
The second line console.log(${player2.name}: ${player2.points} points); 
will log a message to the console with the player2's name and their current points.
This allows the players to see how many points they have accumulated and 
keeps track of the score throughout the game.
*/
    console.log(`${player1.name}: ${player1.points} points`);
    console.log(`${player2.name}: ${player2.points} points`);
  }
  // printing out a message to the console indicating that the game has ended.
  console.log("===== GAME OVER =====");
  /*
This section of the code is determining the winner of the game based on the number of points each player has accumulated.
 It checks if player1 has more points than player2, and if so, it logs a message saying that player1 is the winner with their total points. 
 If player2 has more points than player1, it logs a message saying that player2 is the winner with their total points.
 If both players have the same number of points, it logs a message saying that the game is a tie.

here we use the if statement to check whether player1's points are greater than player2's points.
If so, it means that player1 has won the game, and the code will display a message indicating that player1 is the winner 
along with their total points. 
If player2's points are greater than player1's points, the else if statement will execute,
and a message will be displayed indicating that player2 is the winner along with their total points.
If neither player has more points than the other, the else statement will execute and a message indicating
that it's a tie will be displayed.


*/
  if (player1.points > player2.points) {
    console.log(`${player1.name} wins with ${player1.points} points!`);
  } else if (player2.points > player1.points) {
    console.log(`${player2.name} wins with ${player2.points} points!`);
  } else {
    // Display each player's current point total
    console.log("It's a tie!");
  }
}
/* We set up at end the startWarGame function that initiates and sets up the game all over again
The function uses a while loop to keep the game running until one of the players has all the cards or until 
a certain number of indicated rounds has been played. 
*/
startWarGame();
