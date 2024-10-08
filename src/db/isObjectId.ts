import {ObjectId} from "mongodb";

/**
 * Checks if the given value is a MongoDB ObjectId.
 *
 * @param {*} x - The value to check.
 * @returns {boolean} - Returns `true` if the value is an instance of ObjectId; otherwise, `false`.
 */
const isObjectId = (x: any): boolean =>
{
    return x instanceof ObjectId;
};

export default isObjectId;
