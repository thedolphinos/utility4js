/*
 * Code Review: ✓
 * Test Cases: ✗
 * Guidelines - Imports: ✓
 * Guidelines - Comments: ✓ but no examples
 */

import _ from "lodash";

import isExist from "../core/isExist";

/**
 * Converts an array of strings into an enum.
 *
 * @param {Array<string>} x - An array of strings to convert into an enum.
 * @returns {Object} - An object where each string in the array becomes a key-value pair.
 *
 * @throws {Error} - Throws an error if the `x` is not an array of strings with at least 1 element.
 *
 * TODO: add examples
 */
const toEnum = (x: string[]): {[key: string]: string} =>
{
    if (!isExist(x) || !_.isArray(x))
    {
        throw new Error("Invalid arguments.");
    }

    for (const element of x)
    {
        if (!_.isString(element))
        {
            throw new Error("Invalid arguments.");
        }
    }

    const enum_: {[key: string]: string} = {};

    for (const element of x)
    {
        enum_[element] = element;
    }

    return enum_;
};

export default toEnum;
