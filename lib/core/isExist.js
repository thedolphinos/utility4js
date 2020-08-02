"use strict";

/**
 * Checks if `x` is defined and has a value.
 *
 * @since 0.2.0
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
