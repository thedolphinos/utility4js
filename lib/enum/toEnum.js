const _ = require("lodash");

/**
 * Convert the specified variable to an enum.
 *
 * @param {Object || Array<string>} x
 * @returns {Object}
 */
function toEnum (x)
{
  let enumedX = {};

  if (_.isPlainObject(x))
  {
    for (const key in x)
    {
      enumedX[key] = toEnum(x[key]);
    }
  }
  else if (_.isArray(x))
  {
    for (const element of x)
    {
      if (!_.isString(element))
      {
        throw new Error("Invalid arguments.");
      }

      enumedX[element] = element;
    }
  }
  else
  {
    throw new Error("Invalid arguments.");
  }

  return enumedX;
}

module.exports = toEnum;
