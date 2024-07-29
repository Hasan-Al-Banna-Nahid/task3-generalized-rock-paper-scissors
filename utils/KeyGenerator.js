const { randomBytes } = require("node:crypto");

class KeyGenerator {
  static generateKey(length = 64) {
    return randomBytes(length).toString("hex");
  }
}

module.exports = KeyGenerator;
