/*
 * Code Review: ✓
 * Test Cases: ✗
 * Guidelines - Imports: ✓
 * Guidelines - Comments: ✓ but no examples
 */

import {ObjectId} from "mongodb";

import isValidId from "./isValidId";

/**
 * Compares two MongoDB ObjectIds and checks if they are the same.
 *
 * @param {ObjectId | string} id1 - The first value to compare.
 * @param {ObjectId | string} id2 - The second value to compare.
 * @returns {boolean} - Returns `true` if the two MongoDB ObjectIds are the same; otherwise, `false`.
 *
 * @throws {Error} - Throws an error if the provided values are not a valid MongoDB ObjectId.
 *
 * TODO: add examples
 */
const isSameIds = (id1: ObjectId | string, id2: ObjectId | string): boolean =>
{
    if (!isValidId(id1) ||
        !isValidId(id2))
    {
        throw new Error("Invalid arguments.");
    }

    return id1.toString() === id2.toString();
};

export default isSameIds;
