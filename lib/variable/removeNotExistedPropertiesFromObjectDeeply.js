const _ = require("lodash");

const isExist = require("../core/isExist");
const removeNotExistedPropertiesDeeply = require("./removeNotExistedPropertiesDeeply");

/**
 * Removes the not existed properties from the the specified object deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {Object} x
 */
const removeNotExistedPropertiesFromObjectDeeply = (x) =>
{
  if (!_.isPlainObject(x))
  {
    throw new Error("Invalid arguments.");
  }

  const keys = Object.keys(x);

  for (let i = 0; i < keys.length; i++)
  {
    const key = keys[i];

    if (!isExist(x[key]))
    {
      delete x[key];
    }
    else
    {
      removeNotExistedPropertiesDeeply(x[key]);
    }
  }
};

module.exports = removeNotExistedPropertiesFromObjectDeeply;
