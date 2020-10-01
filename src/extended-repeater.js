const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  !options.repeatTimes ? options.repeatTimes = 1 : null;
  !options.separator ? options.separator = "+" : null;
  options.addition === undefined ? options.addition = "" : null;
  !options.additionRepeatTimes ? options.additionRepeatTimes = 1 : null;
  !options.additionSeparator ? options.additionSeparator = "|" : null;

  str = String(str);
  options.addition = String(options.addition);

  let result = "";
  for (let i = 0; i < options.repeatTimes; ++i) {
    let allAddit = '';
    for (let j = 0; j < options.additionRepeatTimes; ++j) {
      j < (options.additionRepeatTimes - 1) ? allAddit = allAddit + options.addition + options.additionSeparator : j < options.additionRepeatTimes ? allAddit = allAddit + options.addition : null;
    }
    i < (options.repeatTimes - 1) ? result = result + str + allAddit + options.separator : i < options.repeatTimes ? result = result + str + allAddit : null;
  }
  return result;
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
