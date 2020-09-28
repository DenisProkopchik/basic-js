const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let minSteps = 2 ** disksNumber - 1;
  let minSeconds = Math.floor(minSteps * (3600 / turnsSpeed));
  
  let result = {
    turns : minSteps,
    seconds : minSeconds
  };

  return result;
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
