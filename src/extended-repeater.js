const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  }
) {
  let additStr = "";
  let mainStr = "";

  let mainArr = [];
  let additArr = [];

  let timeMain = repeatTimes;
  let timeAddit = additionRepeatTimes;

  if (typeof timeMain == "undefined") {
    timeMain = 1;
  }

  if (typeof timeAddit == "undefined") {
    timeAddit = 1;
  }

  for (let i = 1; i <= timeAddit; i++) {
    additArr.push(String(addition));
  }

  additStr = additArr.join(String(additionSeparator) || "|");

  for (let i = 1; i <= timeMain; i++) {
    mainArr.push(str + additStr);
  }

  mainStr = mainArr.join(String(separator) || "+");

  return mainStr;
}

module.exports = {
  repeater,
};
