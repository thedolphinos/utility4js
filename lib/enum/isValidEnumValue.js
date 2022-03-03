const {InvalidArgumentsError} = require("@thedolphinos/error4js");

const _ = require("lodash");

/**
 * Checks if the specified variable is a valid enum value of the specified enum definition.
 *
 * @param {boolean | number | string} enumValue
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
  if (_.isObjectLike(enumValue) ||
      !_.isPlainObject(enumDefinition))
  {
    throw new InvalidArgumentsError();
  }

  const allowedEnumValues = [];

  for (const enumKey in enumDefinition)
  {
    allowedEnumValues.push(enumDefinition[enumKey]);
  }

  return allowedEnumValues.includes(enumValue);
}

module.exports = isValidEnumValue;
