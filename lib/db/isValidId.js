const _ = require("lodash");
const {ObjectId} = require("mongodb");

const isObjectId = require("./isObjectId");

/**
 * Checks if the specified variable is a successfully constructed object ID or a successfully constructable object ID candidate.
 *
 * @param {*} x
 * @returns {boolean}
 */
const isValidId = (x) =>
{
  let isValid = true;

  if (!isObjectId(x))
  {
    try
    {
      new ObjectId(x);
    }
    catch (error)
    {
      isValid = false;
    }
  }

  return isValid;
};

module.exports = isValidId;
