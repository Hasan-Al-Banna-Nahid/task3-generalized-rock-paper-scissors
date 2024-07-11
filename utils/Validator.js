class Validator {
  static validateMoves(moves) {
    if (moves < 3 || moves.length % 2 == 0) {
      throw new Error(
        "Number Of Moves Must be odd Number and greater than or equal to 3"
      );
    }
    const uniqueMoves = new Set(moves);
    if (uniqueMoves.size !== moves.length) {
      throw new Error("Moves Must Be Unique");
    }
  }
}
module.exports = Validator;
