/*
 * Code Review: ✓
 * Test Cases: ✗
 * Guidelines - Imports: ✓
 * Guidelines - Comments: ✓ but no examples
 */

import {ObjectId} from "mongodb";

import isObjectId from "./isObjectId";

/**
 * Checks if the given value is a successfully constructed MongoDB ObjectId or can be cast to one.
 *
 * @param {*} x - The value to check.
 * @returns {boolean} - Returns `true` if the value is considered a valid MongoDB ObjectId; otherwise, `false`.
 *
 * TODO: add examples
 */
const isValidId = (x: any): boolean =>
{
    if (!isObjectId(x))
    {
        try
        {
            new ObjectId(x);
        }
        catch (error)
        {
            return false;
        }
    }
    return true;
};

export default isValidId;
