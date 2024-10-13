/*
 * Code Review: ✓
 * Test Cases: ✗
 * Guidelines - Imports: n/a
 * Guidelines - Comments: ✓ but work on examples
 */

import _ from "lodash";

import isValidEnum from "./isValidEnum";

/**
 * Checks if the given value is a valid enum value of the `enum_`.
 * A valid enum value (to be used in Cell) means a value that is one of the values in the enum.
 *
 * @param {string} enumValue - The value to check.
 * @param {Object} enum_ - The enum which the `enumValue` is to be checked against.
 * @returns {boolean}
 *
 * TODO: work on examples
 * @example
 * const HACKER_TYPE = {
 *     "WHITE_HAT": "WHITE_HAT",
 *     "BLACK_HAT": "BLACK_HAT"
 * }
 *
 * isValidEnumValue("WHITE_HAT", HACKER_TYPE); // returns true
 * isValidEnumValue("GRAY_HAT", HACKER_TYPE); // returns false
 */
const isValidEnumValue = (enumValue: string, enum_: {[key: string]: any}): boolean =>
{
    if (!_.isString(enumValue) ||
        !isValidEnum(enum_))
    {
        throw new Error("Invalid arguments.");
    }

    const validEnumValues: string[] = [];

    for (const enumKey in enum_)
    {
        const value = enum_[enumKey];
        validEnumValues.push(value);
    }

    return validEnumValues.includes(enumValue);
};

export default isValidEnumValue;
