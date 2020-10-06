const {ObjectId} = require("mongodb");

/**
 * Checks if the specified variable is an object ID.
 *
 * @param {*} x
 * @returns {boolean}
 */
const isObjectId = (x) =>
{
  return x instanceof ObjectId;
};

module.exports = isObjectId;
