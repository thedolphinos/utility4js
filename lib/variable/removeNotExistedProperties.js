const isExist = require("../core/isExist");
const {
  removePropertiesDeeply,
  removePropertiesFromObjectDeeply,
  removePropertiesFromArrayDeeply
} = require("./removeProperties");

/**
 * Removes the not existed properties from the the specified variable deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {*} x
 */
const removeNotExistedPropertiesDeeply = (x) =>
{
  removePropertiesDeeply(x, isExist);
};

/**
 * Removes the not existed properties from the the specified array deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {Array} x
 */
const removeNotExistedPropertiesFromArrayDeeply = (x) =>
{
  removePropertiesFromArrayDeeply(x, isExist);
};

/**
 * Removes the not existed properties from the the specified object deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {Object} x
 */
const removeNotExistedPropertiesFromObjectDeeply = (x) =>
{
  removePropertiesFromObjectDeeply(x, isExist);
};

module.exports = {
  removeNotExistedPropertiesDeeply,
  removeNotExistedPropertiesFromObjectDeeply,
  removeNotExistedPropertiesFromArrayDeeply
};
