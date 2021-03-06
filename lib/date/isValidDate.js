const _ = require("lodash");

const isExist = require("../core/isExist");
const isValidNumber = require("../number/isValidNumber");

/**
 * Checks if the specified variable is a successfully constructed date.
 *
 * @param {*} x
 * @returns {boolean}
 * @example
 * // returns true
 * isValidDate(new Date('January 01 1970'));
 *
 * // returns false
 * isValidDate(new Date('x'));
 */
function isValidDate (x)
{
  return isExist(x) && _.isDate(x) && isValidNumber(x.getTime());
}

module.exports = isValidDate;
