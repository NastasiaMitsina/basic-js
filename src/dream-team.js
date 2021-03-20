const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let names = members.filter((el) => typeof el === "string");
  names = names.map((name) => name.replace(/\s/g, ""));
  let firstLetter = names.map((name) => name.charAt(0).toUpperCase());
  return firstLetter.sort().join("");
};
