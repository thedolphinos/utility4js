const {ObjectId} = require("mongodb");

const isObjectId = require("./isObjectId");

/**
 * Convert the specified variable to an object ID.
 *
 * @param {*} x
 * @returns {ObjectId}
 */
const toObjectId = (x) =>
{
  if (isObjectId(x))
  {
    return x;
  }

  return new ObjectId(x);
};

module.exports = toObjectId;
