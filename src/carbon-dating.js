const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity) return false;

  let firstPoint = false;
  sampleActivity = sampleActivity.split('').filter(item => {
    return item === '.' && !firstPoint ? firstPoint = true : item !== '.' ? true : false;
  }).join('');

  if(Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) <= 0 || isNaN(Number(sampleActivity))) return false;
  
  let k = 0.693/HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k);
  
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
