const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  addLink(value) {
    let valueStr = "";
    if (arguments.length === 0) {
      valueStr = "( )";
    } else {
      valueStr = "( " + String(value) + " )";
    }
    this.chain.push(valueStr);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position < this.chain.length && position > 0) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain.length = 0;
      throw Error("You can't remove incorrect link!");
    }

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let newStr = this.chain.join("~~");
    this.chain.length = 0;
    return newStr;
  },
};

module.exports = {
  chainMaker,
};
