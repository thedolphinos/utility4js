/*
 * Code Review: ✓
 * Test Cases: ✗
 * Guidelines - Imports: ✓
 * Guidelines - Comments: ✓ but no examples
 */

import _ from "lodash";

import isExist from "../core/isExist";

/**
 * Recursively removes properties from the given value deeply based on the provided check function.
 * This function modifies the given value in place and does not return a value.
 *
 * @param {*} x - The value to modify by removing properties.
 * @param {Function} checkIsRemovable - A function that checks whether a property should be removed. It must return a boolean value (`true` for removable).
 * @param {*} [parent] - The parent property of the current property used for recursive calls.
 * @returns {void}
 *
 * @throws {Error} - Throws an error if `checkIsRemovable` is not a function.
 *
 * TODO: add examples
 */
const removePropertiesDeeply = (x: any, checkIsRemovable: (property: any) => boolean, parent?: any): void =>
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
 * Recursively removes properties from the given array deeply based on the provided check function.
 * This function modifies the given value in place and does not return a value.
 *
 * @param {Array} x - The array to modify by removing elements.
 * @param {Function} checkIsRemovable - A function that checks whether a property should be removed. It must return a boolean value (`true` for removable).
 * @param {*} [parent] - The parent property of the current property used for recursive calls.
 * @returns {void}
 *
 * @throws {Error} - Throws an error if `x` is not an array or `checkIsRemovable` is not a function.
 *
 * TODO: add examples
 */
const removePropertiesFromArrayDeeply = (x: any[], checkIsRemovable: (property: any) => boolean, parent?: any): void =>
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
 * Recursively removes properties from the given object deeply based on the provided check function.
 * This function modifies the given value in place and does not return a value.
 *
 * @param {Object} x - The object to modify by removing elements.
 * @param {Function} checkIsRemovable - A function that checks whether a property should be removed. It must return a boolean value (`true` for removable).
 * @param {*} [parent] - The parent property of the current property used for recursive calls.
 * @returns {void}
 *
 * @throws {Error} - Throws an error if `x` is not a plain object or `checkIsRemovable` is not a function.
 *
 * TODO: add examples
 */
const removePropertiesFromObjectDeeply = (x: {[key: string]: any}, checkIsRemovable: (property: any) => boolean, parent?: any): void =>
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

export {
    removePropertiesDeeply,
    removePropertiesFromObjectDeeply,
    removePropertiesFromArrayDeeply
};
