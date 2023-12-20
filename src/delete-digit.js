const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = '0';
  for (i = 0; i < String(n).length; i += 1) {
    let slicedStringNumber = String(n).substring(0, i) + String(n).substring(i + 1);
    if (Number(slicedStringNumber) > Number(maxNumber)) {
      maxNumber = slicedStringNumber;
    }
  }
  return Number(maxNumber);
}

module.exports = {
  deleteDigit
};
