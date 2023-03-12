const chai = require("chai");
const expect = chai.expect;

const { Game } = require("./newmain2.js");

describe("Game", function () {
  describe("dealCards()", function () {
    it("should deal 26 cards to each player", function () {
      const game = new Game("Player 1", "Player 2");
      game.dealCards();

      expect(game.player1.cards.length).to.equal(26);
      expect(game.player2.cards.length).to.equal(26);
    });

    it("should throw an error if number of players is not 2", function () {
      expect(() => new Game("Player 1")).to.throw(Error);
      expect(() => new Game("Player 1", "Player 2", "Player 3")).to.throw(
        Error
      );
    });
  });
});
