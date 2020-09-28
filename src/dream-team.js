const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)){
		return false;
	}
	return members.reduce((sum, item) => {
		let result = typeof(item) === "string" ? sum = sum + item.trim().slice(0, 1).toUpperCase() : sum;
		return result.split('').sort((a, b) => (a < b) ? -1: 1).join('');
	},'');
};
