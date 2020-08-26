"use strict";

const {InvalidArgumentsError} = require("@thedolphinos/error4js");
const _ = require("lodash");

/**
 * Converts the specified callback-based function into a promise returning function.
 * The returned promise, resolves the arguments of the callback as an array.
 * This function has to be an arrow function to maintain scope.
 *
 * @since 0.3.0
 * @param {Function} callbackBasedFunction
 * @returns {Function}
 */
const toPromise = (callbackBasedFunction) =>
{
  if (!_.isFunction(callbackBasedFunction))
  {
    throw new InvalidArgumentsError();
  }

  return (...argsOfFunctionExceptCallback) =>
  {
    return new Promise((resolve, reject) =>
                       {
                         callbackBasedFunction(...argsOfFunctionExceptCallback, (...argsOfCallback) =>
                         {
                           resolve(argsOfCallback);
                         });
                       });
  };
};

module.exports = toPromise;
