const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw Error('Param is not array')
  let flagDiscard = false
  return arr.map((item, index, array) => {
    if (flagDiscard) {
      flagDiscard = false
      return '';
    }
    if (index > 0) {
      if (array[index] === '--double-prev') {
        if (index > 1 && array[index - 2] === '--discard-next') return ''
        return array[index - 1]
      }
    }
    if (index < array.length - 1) {

      if (array[index + 1] === '--discard-prev') {
        return '';
      }
      if (array[index] === '--discard-next') {
        flagDiscard = true;
      }
      if (array[index] === '--double-next') {
        return array[index + 1]
      }
    }
    if (item === '--double-prev' || item === '--discard-prev' || item === '--discard-next') {
      return '';
    }
    if (item === '--double-next') {
      return ''
    }
    return item
  }).filter(item => item !== '')
};

