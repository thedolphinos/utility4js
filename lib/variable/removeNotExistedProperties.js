const _ = require("lodash");

const isExist = require("../core/isExist");

/**
 * Removes the not existed properties from the the specified variable deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {*} x
 */
const removeNotExistedPropertiesDeeply = (x) =>
{
  if (_.isPlainObject(x))
  {
    removeNotExistedPropertiesFromObjectDeeply(x);
  }
  else if (_.isArray(x))
  {
    removeNotExistedPropertiesFromArrayDeeply(x);
  }
};

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

module.exports = {
  removeNotExistedPropertiesDeeply,
  removeNotExistedPropertiesFromObjectDeeply,
  removeNotExistedPropertiesFromArrayDeeply
};
