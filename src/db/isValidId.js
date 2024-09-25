const {ObjectId} = require("mongodb");

const isObjectId = require("./isObjectId");

/**
 * Checks if the given value is a successfully constructed MongoDB ObjectId or can be cast to one.
 *
 * @param {*} x - The value to check.
 * @returns {boolean} - Returns `true` if the value is considered a valid MongoDB ObjectId; otherwise, `false`.
 */
const isValidId = (x) =>
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

module.exports = isValidId;
