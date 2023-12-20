const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // remove line with error and write your code here
  let res = 0;
  matrix.map((el) => {
      el.map((item) => {
          item === '^^' ? res += 1 : res += 0;
      })
  })
  return res;
}

module.exports = {
  countCats
};
