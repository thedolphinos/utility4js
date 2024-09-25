const _ = require("lodash");

const isExist = require("../core/isExist");

/**
 * Checks if the given value is a finite number primitive.
 *
 * @param {*} x - The value to check.
 * @returns {boolean} - Returns `true` if the value is considered a valid number; otherwise, `false`.
 *
 * @example
 * isValidNumber(7); // returns true
 * isValidNumber(new Number(2)); // returns true
 * isValidNumber(7 / 0); // returns false
 * isValidNumber(Infinity); // returns false
 * isValidNumber(NaN); // returns false
 */
const isValidNumber = (x) =>
{
    return isExist(x) && _.isFinite(x);
};

module.exports = isValidNumber;
