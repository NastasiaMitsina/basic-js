const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let steps = 2 ** disksNumber - 1;
  let time = Math.floor((steps * 3600) / turnsSpeed);
  return { turns: steps, seconds: time };
};
