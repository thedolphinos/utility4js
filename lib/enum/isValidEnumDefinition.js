const _ = require("lodash");

const isExist = require("../core/isExist");

/**
 * Checks if the specified variable is a valid enum definition.
 *
 * @param {Object} x
 * @returns {boolean}
 * @example
 * // returns true
 * isValidEnumDefinition({
 *   "WHITE_HAT": "WHITE_HAT",
 *   "BLACK_HAT": "BLACK_HAT"
 * });
 *
 * // returns false
 * isValidEnumDefinition({
 *   "WHITE_HAT": "WHITE_HAT",
 *   "BLACK_HAT": "BLACK"
 * });
 *
 * // returns false
 * isValidEnumDefinition({
 *   "WHITE_HAT": "WHITE_HAT",
 *   "BLACK_HAT": 2
 * });
 */
function isValidEnumDefinition (x)
{
  if (!isExist(x) ||
      !_.isPlainObject(x))
  {
    return false;
  }

  const keys = Object.keys(x);

  if (keys.length === 0)
  {
    return false;
  }

  for (const key of keys)
  {
    const value = x[key];

    if (!_.isString(value) ||
        key !== value)
    {
      return false;
    }
  }

  return true;
}

module.exports = isValidEnumDefinition;
