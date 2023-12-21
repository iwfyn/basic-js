const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = new Object();
  let domainsArr = domains.map(el => el.split('.').reverse());
  console.log(domainsArr)
  result = domainsArr.reduce(((acc, el) => {
      // Накапливаем информацию в новом объекте
      let currDomain = new String(); // Префикс первого объекта в массиве будет пустой строкой
      for (let i = 0; i < el.length; i += 1) {
          // Проходимся по каждому из элементов первоначального массива
          currDomain = `${currDomain}.${el[i]}`; // Создаем переменную, в которую будут добавлены элементы из строчек массива. При первом проходе в строке будет только .+корневойДомен
          if (currDomain in acc) {
              acc[currDomain] = acc[currDomain] + 1;
          } else {
              acc[currDomain] = 1;
          }
      }
      return acc;
  }), {});
  return result;
}

module.exports = {
  getDNSStats
};
