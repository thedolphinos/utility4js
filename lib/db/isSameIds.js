const isValidId = require("./isValidId");

/**
 * Checks if the specified IDs are same or not.
 *
 * @param {ObjectId | string} id1, id2
 * @returns {boolean}
 */
const isSameIds = (id1, id2) =>
{
  if (!isValidId(id1) ||
      !isValidId(id2))
  {
    throw new Error("Invalid arguments.");
  }

  return id1.toString() === id2.toString();
};

module.exports = isSameIds;
