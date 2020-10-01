const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, result = 1) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let checkArr = arr.findIndex(item => Array.isArray(item) === true);
    if (checkArr >= 0) {
      ++result;
      arr = arr.flat();
      return this.calculateDepth(arr, result);
    } else {
      return result;
    }
  }
};