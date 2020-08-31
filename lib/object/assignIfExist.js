"use strict";

const {InvalidArgumentsError} = require("@thedolphinos/error4js");
const _ = require("lodash");

const isExist = require("../core/isExist");

/**
 * Assigns the specified properties from one object to another.
 * Since the function works on reference, does not return a value.
 *
 * @since 0.9.0
 * @param {Object} oldObject
 * @param {Object} newObject
 * @param {Array<string>} properties
 */
const assignIfExist = (oldObject, newObject, properties) =>
{
  if (!_.isPlainObject(oldObject) ||
      !_.isPlainObject(newObject) ||
      !_.isArray(properties))
  {
    throw new InvalidArgumentsError();
  }

  for (let i = 0; i < properties.length; i++)
  {
    const key = properties[i];

    if (!_.isString(key))
    {
      throw new InvalidArgumentsError();
    }

    const value = oldObject[key];

    if (isExist(value))
    {
      newObject[key] = _.cloneDeep(value);
    }
  }
};

module.exports = assignIfExist;
