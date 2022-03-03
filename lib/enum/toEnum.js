const _ = require("lodash");

/**
 * Convert the specified variable to an enum.
 *
 * @param {Array<string>} x
 * @returns {Object}
 */
function toEnum (x)
{
  if (!_.isArray(x))
  {
    throw new Error("Invalid arguments.");
  }

  let enumX = {};

  for (const element of x)
  {
    if (!_.isString(x))
    {
      throw new Error("Invalid arguments.");
    }

    enumX[element] = element;
  }

  return enumX;
}

module.exports = toEnum;
