const _ = require("lodash");

const isExist = require("../core/isExist");
const removeNotExistedPropertiesDeeply = require("./removeNotExistedPropertiesDeeply");

/**
 * Removes the not existed properties from the the specified array deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {Array} x
 */
const removeNotExistedPropertiesFromArrayDeeply = (x) =>
{
  if (!_.isArray(x))
  {
    throw new Error("Invalid arguments.");
  }

  for (let i = 0; i < x.length; i++)
  {
    if (!isExist(x[i]))
    {
      x.splice(i, 1);
    }
    else
    {
      removeNotExistedPropertiesDeeply(x[i]);
    }
  }
};

module.exports = removeNotExistedPropertiesFromArrayDeeply;
