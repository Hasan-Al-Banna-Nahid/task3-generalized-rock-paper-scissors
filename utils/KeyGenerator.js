const { randomInt } = require("node:crypto");

class KeyGenerator {
  static generateKey(length = 64) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$%#@!*&^";
    let key = "";
    for (let i = 0; i < length; i++) {
      key += characters[randomInt(0, characters.length)];
    }
    return key;
  }
}
module.exports = KeyGenerator;
