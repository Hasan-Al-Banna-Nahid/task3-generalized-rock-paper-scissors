const { createHmac } = require("node:crypto");
class GenerateHMAC {
  static HmacKey(key, message) {
    return createHmac("sha3-512", key).update(message).digest("hex");
  }
}
module.exports = GenerateHMAC;
