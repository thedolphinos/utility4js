/*
 * Code Review: ✓
 * Test Cases: ✗
 * Guidelines - Imports: ✓
 * Guidelines - Comments: ✓ but no examples
 */

import {ObjectId} from "mongodb";

import isInitialized from "../core/isInitialized";
import isObjectId from "./isObjectId";

/**
 * Converts the given value to a MongoDB ObjectId.
 *
 * @param {*} x - The value to convert to a MongoDB ObjectId.
 * @returns {ObjectId} - Returns the provided MongoDB ObjectId if the value is already an instance, or the new MongoDB ObjectId created from the given value.
 *
 * @throws {Error} - Throws an error if the given value is not initialized.
 * @throws {Error} - Throws an error if the given value cannot be cast to a valid MongoDB ObjectId.
 *
 * TODO: add examples
 */
const toObjectId = (x: any): ObjectId =>
{
    if (!isInitialized(x))
    {
        throw new Error("Invalid arguments.");
    }

    if (isObjectId(x))
    {
        return x;
    }

    try
    {
        return new ObjectId(x);
    }
    catch (error)
    {
        throw new Error(`The provided value (${x}) cannot be cast to a valid MongoDB ObjectId.`);
    }
};

export default toObjectId;
