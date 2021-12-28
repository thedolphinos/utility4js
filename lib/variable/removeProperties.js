const _ = require("lodash");

/**
 * Removes if the properties are removable according to the provided function from the the specified variable deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {*} x
 */
const removePropertiesDeeply = (x, checkIsRemovable) =>
{
  if (!_.isFunction(checkIsRemovable))
  {
    throw new Error("Invalid arguments.");
  }

  if (_.isPlainObject(x))
  {
    removePropertiesFromObjectDeeply(x, checkIsRemovable);
  }
  else if (_.isArray(x))
  {
    removePropertiesFromArrayDeeply(x, checkIsRemovable);
  }
};

/**
 * Removes if the properties are removable according to the provided function from the the specified array deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {Array} x
 */
const removePropertiesFromArrayDeeply = (x, checkIsRemovable) =>
{
  if (!_.isArray(x) ||
      !_.isFunction(checkIsRemovable))
  {
    throw new Error("Invalid arguments.");
  }

  for (let i = 0; i < x.length; i++)
  {
    if (checkIsRemovable(x[i]))
    {
      removePropertiesDeeply(x[i]);
    }
    else
    {
      x.splice(i, 1);
    }
  }
};

/**
 * Removes if the properties are removable according to the provided function from the the specified object deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {Object} x
 */
const removePropertiesFromObjectDeeply = (x, checkIsRemovable) =>
{
  if (!_.isPlainObject(x) ||
      !_.isFunction(checkIsRemovable))
  {
    throw new Error("Invalid arguments.");
  }

  const keys = Object.keys(x);

  for (let i = 0; i < keys.length; i++)
  {
    const key = keys[i];

    if (checkIsRemovable(x[key]))
    {
      removePropertiesDeeply(x[key]);
    }
    else
    {
      delete x[key];
    }
  }
};

module.exports = {
  removePropertiesDeeply,
  removePropertiesFromObjectDeeply,
  removePropertiesFromArrayDeeply
};
