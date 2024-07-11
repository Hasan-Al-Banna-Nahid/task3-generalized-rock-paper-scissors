const { randomInt } = require("crypto");
const Validator = require("../utils/Validator");
const KeyGenerator = require("../utils/KeyGenerator");
const GenerateHMAC = require("../utils/HMAC");
const HelpTable = require("../utils/HelpTable");

class Game {
  constructor(moves) {
    Validator.validateMoves(moves);
    this.moves = moves;
    this.key = KeyGenerator.generateKey();
    this.computerMove = this.generateComputerMove();
    this.hmac = GenerateHMAC.HmacKey(this.key, this.computerMove);
  }

  generateComputerMove() {
    const index = randomInt(0, this.moves.length);
    return this.moves[index];
  }

  determineGameResult(move1, move2) {
    const index1 = this.moves.indexOf(move1);
    const index2 = this.moves.indexOf(move2);
    const half = Math.floor(this.moves.length / 2);

    if (index1 === index2) {
      return "Draw";
    } else if (
      (index1 > index2 && index1 - index2 <= half) ||
      (index1 < index2 && index2 - index1 > half)
    ) {
      return "Win";
    } else {
      return "Lose";
    }
  }

  play() {
    console.log(`HMAC: ${this.hmac}`);
    console.log("Available moves:");
    this.moves.forEach((move, index) => console.log(`${index + 1} - ${move}`));
    console.log("0 - Exit\n? - Help");

    process.stdin.on("data", (data) => {
      const input = data.toString().trim();
      if (input === "0") {
        process.exit();
      } else if (input === "?") {
        this.displayHelp();
      } else {
        const userIndex = parseInt(input, 10) - 1;
        if (userIndex >= 0 && userIndex < this.moves.length) {
          const userMove = this.moves[userIndex];
          console.log(`Your move: ${userMove}`);
          console.log(`Computer move: ${this.computerMove}`);
          console.log(
            `Result: ${this.determineGameResult(userMove, this.computerMove)}`
          );
          console.log(`HMAC key: ${this.key}`);
          process.exit();
        } else {
          console.log("Invalid input. Try again.");
        }
      }
    });
  }

  displayHelp() {
    HelpTable.generateTable(this.moves, this.determineGameResult.bind(this));
  }
}

module.exports = Game;
