const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;

  if (typeof str !== "string") str = String(str);

  if (str.includes(" ")) str = str.replace(/\s/g, "*");

  if (options.hasOwnProperty("addition") && typeof addition !== "string")
    addition = String(addition);

  let arr = str.split(" ");

  if (options.hasOwnProperty("repeatTimes")) arr.length = repeatTimes;

  for (let i = 0; i < arr.length; i++) {
    arr[0] = str.replace(/\*/g, " ");
    if (typeof arr[i] === "undefined") arr[i] = arr[0];
  }

  if (options.hasOwnProperty("addition")) {
    if (options.hasOwnProperty("additionRepeatTimes")) {
      if (addition.includes(" ")) addition = addition.replace(/\s/g, "*");

      let additionArr = addition.split(" ");
      additionArr.length = additionRepeatTimes;

      for (let i = 0; i < additionArr.length; i++) {
        additionArr[0] = addition.replace(/\*/g, " ");
        if (typeof additionArr[i] === "undefined")
          additionArr[i] = additionArr[0];
      }

      let additionResult = additionArr.join(`${additionSeparator}`);

      arr = arr.map((el) => el + additionResult);
    } else {
      arr = arr.map((el) => el + addition);
    }
  }

  let result = arr.join(`${separator}`);
  return result;
};
