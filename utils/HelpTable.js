const Table = require("cli-table");

class HelpTable {
  static generateTable(moves, determineOutcome) {
    const table = new Table({
      head: ["v PC/User >", ...moves],
      colWidths: Array(moves.length + 1).fill(12),
      style: { head: ["cyan"] },
    });

    for (const move1 of moves) {
      const row = [move1];
      for (const move2 of moves) {
        row.push(determineOutcome(move1, move2));
      }
      table.push(row);
    }

    console.log("\nResults are from the user’s point of view:");
    console.log(table.toString());
    console.log(
      "Example: Rock beats Scissors, Scissors beats Paper, and Paper beats Rock."
    );
  }
}
module.exports = HelpTable;
