/*
 * Code Review: ✓
 * Test Cases: ✗
 * Guidelines - Imports: ✓
 * Guidelines - Comments: ✓ but work on examples
 */

import _ from "lodash";

import isExist from "./isExist";
import isValidNumber from "../number/isValidNumber";

/**
 * Checks if the given value has a non-empty value.
 * A non-empty value means:
 *     1) A finite number primitive.
 *     2) A string primitive or object with at least 1 character.
 *     3) A plain object (an object created by the Object constructor or one with a [[Prototype]] of null) with at least 1 enumerable string keyed property.
 *     4) An array with at least 1 item.
 *
 * @param {*} x - The value to check.
 * @returns {boolean} - Returns `true` if the value is considered initialized; otherwise, `false`.
 *
 * TODO: work on examples
 * @example
 * isInitialized(NaN); // returns false
 * isInitialized(Infinity); // returns false
 * isInitialized(7); // returns true
 *
 * @example
 * isInitialized(""); // returns false
 * isInitialized("x"); // returns true
 *
 * @example
 * isInitialized({"x": "y"}); // returns true
 * isInitialized({}); // returns false
 *
 * @example
 * isInitialized([]); // returns false
 * isInitialized(["x"]); // returns true
 */
const isInitialized = <T> (x: T | undefined | null): x is T =>
{
    return isExist(x) &&
           (
               (_.isNumber(x) && isValidNumber(x)) ||
               (_.isString(x) && (x as string).length > 0) ||
               (_.isPlainObject(x) && !_.isEmpty(x)) ||
               (_.isArray(x) && !_.isEmpty(x))
           );
};

export default isInitialized;
