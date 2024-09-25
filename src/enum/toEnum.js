const _ = require("lodash");

const {isExist} = require("../core/isExist");

/**
 * Converts an array of strings into an enum.
 *
 * @param {Array<string>} x - An array of strings to convert into an enum.
 * @returns {Object} - An object where each string in the array becomes a key-value pair.
 *
 * @throws {Error} - Throws an error if the `x` is not an array of strings with at least 1 element.
 */
const toEnum = (x) =>
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

    const enum_ = {};

    for (const element of x)
    {
        enum_[element] = element;
    }

    return enum_;
};

module.exports = toEnum;
