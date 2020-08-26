"use strict";

const isExist = require("../core/isExist");
const _ = require("lodash");

/**
 * Checks if the specified variable is a number and has a value other than Infinity, and NaN.
 *
 * @since 0.4.0
 * @param {*} x
 * @returns {boolean}
 * @example
 * // returns true
 * isValidNumber(2);
 *
 * // returns true
 * isValidNumber(new Number(2));
 *
 * // returns false
 * isValidNumber(Infinity);
 *
 * // returns false
 * isValidNumber(NaN);
 */
const isValidNumber = (x) =>
{
  return isExist(x) && _.isFinite(x);
};

module.exports = isValidNumber;
