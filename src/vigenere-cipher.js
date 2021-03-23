const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message && !key) {
      throw new Error();
    }

    let result = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;

    for (let index in message) {
      if (message.charCodeAt(index) < 65 || message.charCodeAt(index) > 90)
        result += message[index];
      else {
        result += String.fromCharCode(
          ((message.charCodeAt(index) +
            key.charCodeAt(keyIndex % key.length) -
            130) %
            26) +
            65
        );
        keyIndex++;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (!message && !key) {
      throw new Error();
    }
    let result = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;

    for (let index in message) {
      if (message.charCodeAt(index) < 65 || message.charCodeAt(index) > 90)
        result += message[index];
      else {
        result += String.fromCharCode(
          ((message.charCodeAt(index) -
            key.charCodeAt(keyIndex % key.length) +
            26) %
            26) +
            65
        );
        keyIndex++;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
