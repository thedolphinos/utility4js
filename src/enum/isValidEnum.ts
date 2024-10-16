/*
 * Code Review: ✓
 * Test Cases: ✗
 * Guidelines - Imports: ✓
 * Guidelines - Comments: ✓ but work on examples
 */

import _ from "lodash";

import isExist from "../core/isExist";

/**
 * Checks if the given value is a valid enum definition.
 * A valid enum definition means each value is a string that is equal to its own corresponding key.
 *
 * @param {Object} x - The value to check.
 * @returns {boolean} - Returns `true` if the value is considered a valid enum definition; otherwise, `false`.
 *
 * @example
 * // returns true
 * isValidEnum({
 *     "WHITE_HAT": "WHITE_HAT",
 *     "BLACK_HAT": "BLACK_HAT"
 * });
 *
 * @example
 * // returns false
 * isValidEnum({
 *     "WHITE_HAT": "WHITE_HAT",
 *     "BLACK_HAT": "BLACK"
 * });
 *
 * @example
 * // returns false
 * isValidEnum({
 *     "WHITE_HAT": "WHITE_HAT",
 *     "BLACK_HAT": 2
 * });
 *
 * TODO: work on examples
 */
const isValidEnum = (x: {[key: string]: any}): boolean =>
{
    if (!isExist(x) || !_.isPlainObject(x))
    {
        return false;
    }

    const keys = Object.keys(x);

    if (keys.length === 0)
    {
        return false;
    }

    for (const key of keys)
    {
        const value = x[key];

        if (!_.isString(value))
        {
            return false;
        }

        if (key !== value)
        {
            return false;
        }
    }

    return true;
};

export default isValidEnum;
