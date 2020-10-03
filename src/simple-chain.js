const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.split('~~').length;
  },
  addLink(value = '') {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain = this.chain ? this.chain + `~~( ${value} )` : `( ${value} )`;
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (position < 1 || position > this.chain.split('~~').length || !position || position % 1 !== 0) {
      this.chain = '';
      throw new Error('error');
    };

    this.chain = this.chain.split('~~');
    this.chain.splice((position - 1), 1);
    this.chain = this.chain.join('~~');
    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.result = this.chain;
    this.chain = '';
    return this.result;
  }
};

module.exports = chainMaker;
