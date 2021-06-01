const _ = require("lodash");

const removeNotExistedPropertiesFromObjectDeeply = require("./removeNotExistedPropertiesFromObjectDeeply");
const removeNotExistedPropertiesFromArrayDeeply = require("./removeNotExistedPropertiesFromArrayDeeply");

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

module.exports = removeNotExistedPropertiesDeeply;
