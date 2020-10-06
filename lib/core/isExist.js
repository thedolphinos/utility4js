/**
 * Checks if the specified variable is defined and has a value.
 *
 * @param {*} x
 * @returns {boolean}
 * @example
 * // returns true
 * isExist('');
 *
 * // returns false
 * let x;
 * isExist(x);
 */
const isExist = (x) =>
{
  return x !== undefined &&
         x !== null;
};

module.exports = isExist;
