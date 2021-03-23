const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Error");

  let copyArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (copyArr.length !== 0 && arr[i - 2] !== "--discard-next") {
          copyArr.pop();
        }
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          copyArr.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i !== 0 && arr[i - 2] !== "--discard-next") {
          copyArr.push(arr[i - 1]);
        }
        break;
      default:
        copyArr.push(arr[i]);
    }
  }
  return copyArr;
};
