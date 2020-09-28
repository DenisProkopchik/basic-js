const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  return backyard.reduce((sum, item) => {
		return item.includes("^^") ? sum = sum + item.filter(item2 => item2 === "^^").length : sum;
	},0);
};
