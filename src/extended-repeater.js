const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let res = [];
  !options.repeatTimes ? options.repeatTimes = 1 : options.repeatTimes;
  !options.additionRepeatTimes && options.addition ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
  for (let i = 0; i < options.repeatTimes; i += 1) {
      res.push(String(str));
      for (let j = 0; j < options.additionRepeatTimes; j += 1) {
        !options.additionSeparator ? options.additionSeparator = '|' : options.additionSeparator;
          res[i] += String(options.addition) + `${j === options.additionRepeatTimes - 1 ? `` : options.additionSeparator}`;
      }
  }
  
  return !options.separator ? res.join(`+`) : res.join(`${options.separator}`);;
}

module.exports = {
  repeater
};
