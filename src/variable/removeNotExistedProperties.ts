import isExist from "../core/isExist";
import {
    removePropertiesDeeply,
    removePropertiesFromObjectDeeply,
    removePropertiesFromArrayDeeply
} from "./removeProperties";

/**
 * Removes properties that do not exist from the given value deeply.
 * This function modifies the given value in place and does not return a value.
 *
 * @param {*} x - The value from which non-existent properties should be removed.
 * @returns {void}
 */
const removeNotExistedPropertiesDeeply = (x: any): void =>
{
    removePropertiesDeeply(x, (property) => !isExist(property));
};

/**
 * Removes properties that do not exist from the given array deeply.
 * This function modifies the given value in place and does not return a value.
 *
 * @param {Array} x - The array from which non-existent properties should be removed.
 */
const removeNotExistedPropertiesFromArrayDeeply = (x: any[]): void =>
{
    removePropertiesFromArrayDeeply(x, (property) => !isExist(property));
};

/**
 * Removes properties that do not exist from the given object deeply.
 * This function modifies the given value in place and does not return a value.
 *
 * @param {Object} x - The object from which non-existent properties should be removed.
 * @returns {void}
 */
const removeNotExistedPropertiesFromObjectDeeply = (x: {[key: string]: any}): void =>
{
    removePropertiesFromObjectDeeply(x, (property) => !isExist(property));
};

export {
    removeNotExistedPropertiesDeeply,
    removeNotExistedPropertiesFromObjectDeeply,
    removeNotExistedPropertiesFromArrayDeeply
};
