const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)){
    return console.error(e);
  }
  let resultArr = arr.concat();
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  
  resultArr.forEach((item, index, array) => {
    if(item === discardNext){
        if( index === (array.length - 1)){
          array.splice(index, 1);
        } else {
          (array[index+2] === doublePrev || array[index+2] === discardPrev) ? array.splice((index+2), 1) : null;
          array.splice(index, 2);
        }
        
        
      } else if (item === discardPrev){
        if( index === 0){
          array.splice(index, 1);
        } else {
          array.splice((index - 1), 2);
        }
        
      } else if (item === doubleNext){
        if( index === (array.length - 1)){
          array.splice(index, 1);
        } else {
          array.splice(index, 1, array[(index + 1)]);
        }
        
      } else if (item === doublePrev){
        if( index === 0){
          array.splice(index, 1);
        } else {
          array.splice(index, 1, array[index - 1]);
        }
        
      }
  
  });
  
  if(resultArr.length === 1){
    (resultArr[0] === discardNext || resultArr[0] === discardPrev || resultArr[0] === doubleNext ||resultArr[0] === doublePrev) ? resultArr = [] : resultArr;
  }
  
  return resultArr;
};
