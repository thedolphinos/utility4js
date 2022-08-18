const _ = require("lodash");

const isExist = require("../core/isExist");

/**
 * Removes if the properties are removable according to the provided function from the specified variable deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {*}  x
 * @param {Function} checkIsRemovable - Checks if an element should be removed or not. It must return a boolean value.
 * @param {*} [parent]
 */
const removePropertiesDeeply = (x, checkIsRemovable, parent = undefined) =>
{
  if (!_.isFunction(checkIsRemovable))
  {
    throw new Error("Invalid arguments.");
  }

  if (_.isPlainObject(x))
  {
    removePropertiesFromObjectDeeply(x, checkIsRemovable, parent);
  }
  else if (_.isArray(x))
  {
    removePropertiesFromArrayDeeply(x, checkIsRemovable, parent);
  }

  if (isExist(parent) && checkIsRemovable(x))
  {
    removePropertiesDeeply(parent, checkIsRemovable);
  }
};

/**
 * Removes if the properties are removable according to the provided function from the specified array deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {Array} x
 * @param {Function} checkIsRemovable - Checks each element of the array whether it should be removed or not. It must return a boolean value.
 * @param {*} [parent]
 */
const removePropertiesFromArrayDeeply = (x, checkIsRemovable, parent = undefined) =>
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
      x.splice(i, 1);
      i--;

      if (isExist(parent) && checkIsRemovable(x))
      {
        removePropertiesDeeply(parent, checkIsRemovable);
      }
    }
    else
    {
      removePropertiesDeeply(x[i], checkIsRemovable, x);
    }
  }
};

/**
 * Removes if the properties are removable according to the provided function from the specified object deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {Object} x
 * @param {Function} checkIsRemovable - Checks each key of the object whether it should be removed or not. It must return a boolean value.
 * @param {*} [parent]
 */
const removePropertiesFromObjectDeeply = (x, checkIsRemovable, parent) =>
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
      delete x[key];

      if (isExist(parent) && checkIsRemovable(x))
      {
        removePropertiesDeeply(parent, checkIsRemovable);
      }
    }
    else
    {
      removePropertiesDeeply(x[key], checkIsRemovable, x);
    }
  }
};

module.exports = {
  removePropertiesDeeply,
  removePropertiesFromObjectDeeply,
  removePropertiesFromArrayDeeply
};
