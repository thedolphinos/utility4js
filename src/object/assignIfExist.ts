import _ from "lodash";

import isExist from "../core/isExist";

/**
 * Copies properties from the `sourceObject` to the `targetObject` if the `properties` exist in the `sourceObject`.
 * Copy means a deep clone.
 * This function modifies the `sourceObject` in place and does not return a value.
 *
 * @param {Object} sourceObject - The source object from which the `properties` are copied.
 * @param {Object} targetObject - The target object to which the `properties` are copied.
 * @param {Array<string>} properties - An array of property names to check in the `sourceObject` and assign to the `targetObject` if they exist.
 * @returns {void}
 *
 * @throws {Error} - Throws an error if:
 *                     * The `sourceObject` or `targetObject` is not a plain object.
 *                     * The `properties` is not an array.
 *                     * Any item in the `properties` is not a string.
 */
const assignIfExist = (sourceObject: {[key: string]: any}, targetObject: {[key: string]: any}, properties: string[]): void =>
{
    if (!_.isPlainObject(sourceObject) ||
        !_.isPlainObject(targetObject) ||
        !_.isArray(properties))
    {
        throw new Error("Invalid arguments.");
    }

    for (const key of properties)
    {
        if (!_.isString(key))
        {
            throw new Error("Invalid arguments.");
        }
    }

    for (const key of properties)
    {
        const value = sourceObject[key];

        if (isExist(value))
        {
            targetObject[key] = _.cloneDeep(value);
        }
    }
};

export default assignIfExist;
