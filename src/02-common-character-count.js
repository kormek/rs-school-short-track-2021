/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const s12 = s1.split('');
  const s22 = s2.split('');
  s12.forEach((element) => {
    if (s22.indexOf(element) !== -1) {
      result += 1;
      s22.splice(s22.indexOf(element), 1);
      console.log(s22);
    }
  });
  return result;
}

module.exports = getCommonCharacterCount;
