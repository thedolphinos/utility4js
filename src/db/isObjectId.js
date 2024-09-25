const {ObjectId} = require("mongodb");

/**
 * Checks if the given value is a MongoDB ObjectId.
 *
 * @param {*} x - The value to check.
 * @returns {boolean} - Returns `true` if the value is an instance of ObjectId; otherwise, `false`.
 */
const isObjectId = (x) =>
{
    return x instanceof ObjectId;
};

module.exports = isObjectId;
