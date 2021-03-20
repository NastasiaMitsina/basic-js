const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  cats = [].concat(...cats);
  let check = cats.filter((el) => typeof el === "string");
  let catsNumber = check.filter((el) => el == "^^");
  return catsNumber.length;
};
