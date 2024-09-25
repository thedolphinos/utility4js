const isExist = require("../core/isExist");
const {
    removePropertiesDeeply,
    removePropertiesFromObjectDeeply,
    removePropertiesFromArrayDeeply
} = require("./removeProperties");

/**
 * Removes properties that do not exist from the given value deeply.
 * This function modifies the given value in place and does not return a value.
 *
 * @param {*} x - The value from which non-existent properties should be removed.
 */
const removeNotExistedPropertiesDeeply = (x) =>
{
    removePropertiesDeeply(x, (property) => !isExist(property));
};

/**
 * Removes properties that do not exist from the given array deeply.
 * This function modifies the given value in place and does not return a value.
 *
 * @param {Array} x - The array from which non-existent properties should be removed.
 */
const removeNotExistedPropertiesFromArrayDeeply = (x) =>
{
    removePropertiesFromArrayDeeply(x, (property) => !isExist(property));
};

/**
 * Removes properties that do not exist from the given object deeply.
 * This function modifies the given value in place and does not return a value.
 *
 * @param {Array} x - The object from which non-existent properties should be removed.
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
