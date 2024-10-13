/*
 * Code Review: ✓
 * Test Cases: ✗
 * Guidelines - Imports: ✓
 * Guidelines - Comments: ✓ but work on examples
 */

import _ from "lodash";

import isExist from "../core/isExist";

/**
 * Checks if the given value is a finite number.
 *
 * @param {*} x - The value to check.
 * @returns {boolean} - Returns `true` if the value is considered a valid number; otherwise, `false`.
 *
 * TODO: work on examples
 * @example
 * isValidNumber(7); // returns true
 * isValidNumber(new Number(2)); // returns true
 * isValidNumber(7 / 0); // returns false
 * isValidNumber(Infinity); // returns false
 * isValidNumber(NaN); // returns false
 */
const isValidNumber = (x: any): boolean =>
{
    return isExist(x) && _.isFinite(x);
};

export default isValidNumber;
