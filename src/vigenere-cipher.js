const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  constructor(options) {
    this.options = options
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error(`Message or key is not defined`);
    let letters = this.letter.split('');

    let allIndexMess = this.findAllIndexes(message, key, letters).mess;
    let allIndexKey = this.findAllIndexes(message, key, letters).pass;

    let count = 0;
    let resArrInd = allIndexMess.reduce((sum, item, index, array) => {
      if (/^[0-9]$/g.test(item[0])) {
        let index2 = index;
        if (index2 - count >= allIndexKey.length) {
          for (let i = false; i === false; i) {
            index2 = index2 - allIndexKey.length;
            index2 - count < allIndexKey.length ? i = !i : i;
          }
        }
        return index === (array.length - 1) ? sum = `${sum}${Number(item) + Number(allIndexKey[Math.abs(index2 - count)])}` : sum = `${sum}${Number(item) + Number(allIndexKey[Math.abs(index2 - count)])}~~`;
      } else {
        count = count + 1;
        return sum = index === (array.length - 1) ? sum + item : sum + item + '~~';
      }
    }, '').split('~~');

    let result = resArrInd.reduce((sum, item) => /^[0-9]$/g.test(item[0]) && letters[item] ? sum = `${sum}${letters[item]}` : /^[0-9]$/g.test(item[0]) ? sum = `${sum}${letters[Math.abs(letters.length - Number(item))]}` : sum = `${sum}${item}`, '').split('').filter(item => item !== 's').join('');

    return this.options !== false ? result : result.split('').reverse().join('');
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error(`Message or key is not defined`);
    let letters = this.letter.split('');

    let allIndexMess = this.findAllIndexes(message, key, letters).mess;
    let allIndexKey = this.findAllIndexes(message, key, letters).pass;

    let count = 0;
    let resArrInd = allIndexMess.reduce((sum, item, index, array) => {
      if (/^[0-9]$/g.test(item[0])) {

        let index2 = index;
        if (index2 - count >= allIndexKey.length) {
          for (let i = false; i === false; i) {
            index2 = index2 - allIndexKey.length;
            index2 - count < allIndexKey.length ? i = !i : i;
          }
        }

        return index === (array.length - 1) ? sum = `${sum}${Number(item) - Number(allIndexKey[Math.abs(index2 - count)])}` : sum = `${sum}${Number(item) - Number(allIndexKey[Math.abs(index2 - count)])}~~`;
      } else {
        count = count + 1;
        return sum = index === (array.length - 1) ? sum + item : sum + item + '~~';
      }
    }, '').split('~~');

    let result = resArrInd.reduce((sum, item) => /^[0-9]$/g.test(item[0]) && letters[item] ? sum = `${sum}${letters[item]}` : Number(item) < 0 ? sum = `${sum}${letters[letters.length - Math.abs(Number(item))]}` : sum = `${sum}${item}`, '').split('').filter(item => item !== 's').join('');

    return this.options !== false ? result : result.split('').reverse().join('');
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
  findAllIndexes(text, pass, lett) {
    text = text.toUpperCase().split('');
    pass = pass.toUpperCase().split('');


    let TextIndexes = text.reduce((sum, item, index, array) => {
      if (index < (array.length - 1) && lett.includes(item)) {
        return sum = sum + lett.findIndex(item2 => item2 === item) + '~~';
      } else if (index === (array.length - 1) && lett.includes(item)) {
        return sum = sum + lett.findIndex(item2 => item2 === item);
      } else if (index === (array.length - 1) && !lett.includes(item)) {
        return sum = sum + 's' + item;
      } else if (index < (array.length - 1) && !lett.includes(item)) {
        return sum = sum + 's' + item + "~~";
      }
    }, '').split('~~');

    let PassIndexes = pass.reduce((sum, item, index, array) => {
      if (index < (array.length - 1)) {
        return sum = sum + lett.findIndex(item2 => item2 === item) + ',';
      } else if (index === (array.length - 1)) {
        return sum = sum + lett.findIndex(item2 => item2 === item);
      }
    }, '').split(',');
    return {
      mess: TextIndexes,
      pass: PassIndexes
    };
  }
}

module.exports = VigenereCipheringMachine;
