const Game = require("./game/game");
try {
  const moves = process.argv.slice(2);
  const game = new Game(moves);
  game.play();
} catch (error) {
  console.log(`Error : ${error.message}`);
}
