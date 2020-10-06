const _ = require("lodash");

const isExist = require("./isExist");
const isValidNumber = require("../number/isValidNumber");

/**
 * Checks if the specified variable has a non-empty value.
 * Non-empty value refers to any value other than Infinity, NaN for numbers, an empty string for strings, an empty object for objects and arrays.
 *
 * @param {*} x
 * @returns {boolean}
 * @example
 * // returns true
 * isInitialized('x');
 *
 * // returns true
 * isInitialized({'x': 'y'});
 *
 * // returns true
 * isInitialized(['x']);
 *
 * // returns false
 * isInitialized(Infinity);
 *
 * // returns false
 * isInitialized(NaN);
 *
 * // returns false
 * isInitialized('');
 *
 * // returns false
 * isInitialized({});
 *
 * // returns false
 * isInitialized([]);
 */
const isInitialized = (x) =>
{
  return isExist(x) &&
         !(_.isNumber(x) && !isValidNumber(x)) &&
         !(_.isString(x) && (x === "" || x.valueOf() === "")) &&
         !(_.isPlainObject(x) && _.isEmpty(x)) &&
         !(_.isArray(x) && _.isEmpty(x));
};

module.exports = isInitialized;
