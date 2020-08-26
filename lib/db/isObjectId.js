"use strict";

const {ObjectId} = require("mongodb");

/**
 * Checks if the specified variable is an object ID.
 *
 * @since 0.8.0
 * @param {*} x
 * @returns {boolean}
 */
const isObjectId = (x) =>
{
  return x instanceof ObjectId;
};

module.exports = isObjectId;
