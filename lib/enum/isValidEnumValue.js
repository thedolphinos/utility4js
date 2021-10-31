const {InvalidArgumentsError} = require("@thedolphinos/error4js");

const _ = require("lodash");

const isExist = require("../core/isExist");
const isValidEnumDefinition = require("../enum/isValidEnumDefinition");

/**
 * Checks if the specified variable is a valid enum value of the specified enum definition.
 *
 * @param {string} enumValue
 * @param {Object} enumDefinition
 * @returns {boolean}
 * @example
 * const HACKER_TYPE = {
 *   "WHITE_HAT": "WHITE_HAT",
 *   "BLACK_HAT": "BLACK_HAT"
 * }
 *
 * // returns true
 * isValidEnumValue("WHITE_HAT", HACKER_TYPE);
 *
 * // returns false
 * isValidEnumValue("GRAY_HAT", HACKER_TYPE);
 */
function isValidEnumValue (enumValue, enumDefinition)
{
  if (!isValidEnumDefinition(enumDefinition))
  {
    throw new InvalidArgumentsError();
  }

  return isExist(enumValue) && _.isString(enumValue) && Object.keys(enumDefinition).includes(enumValue);
}

module.exports = isValidEnumValue;
