const CustomError = require("../extensions/custom-error");

module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;

  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    !Number(sampleActivity)
  ) {
    return false;
  }
  sampleActivity = Number(sampleActivity);
  if (sampleActivity < 0 || sampleActivity > 15) {
    return false;
  }
  let result = Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
  );
  return result;
};
