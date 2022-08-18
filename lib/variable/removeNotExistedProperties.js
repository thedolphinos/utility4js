const isExist = require("../core/isExist");
const {
  removePropertiesDeeply,
  removePropertiesFromObjectDeeply,
  removePropertiesFromArrayDeeply
} = require("./removeProperties");

/**
 * Removes the not existed properties from the specified variable deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {*} x
 */
const removeNotExistedPropertiesDeeply = (x) =>
{
  removePropertiesDeeply(x, (property) => !isExist(property));
};

/**
 * Removes the not existed properties from the specified array deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {Array} x
 */
const removeNotExistedPropertiesFromArrayDeeply = (x) =>
{
  removePropertiesFromArrayDeeply(x, (property) => !isExist(property));
};

/**
 * Removes the not existed properties from the specified object deeply.
 * Since the function works on reference, does not return a value.
 *
 * @param {Object} x
 */
const removeNotExistedPropertiesFromObjectDeeply = (x) =>
{
  removePropertiesFromObjectDeeply(x, (property) => !isExist(property));
};

module.exports = {
  removeNotExistedPropertiesDeeply,
  removeNotExistedPropertiesFromObjectDeeply,
  removeNotExistedPropertiesFromArrayDeeply
};
