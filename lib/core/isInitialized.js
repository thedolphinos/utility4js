"use strict";

const isExist = require("./isExist");
const isValidNumber = require("../number/isValidNumber");
const _ = require("lodash");

/**
 * Checks if `x` has a non-empty value.
 * Non-empty value: It refers to any value other than Infinity, NaN for numbers, an empty string for strings, an empty object for objects and arrays.
 *
 * @since 0.5.0
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