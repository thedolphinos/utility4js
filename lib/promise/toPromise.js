const _ = require("lodash");

/**
 * Converts the specified callback-based function into a promise returning function.
 * The returned promise, resolves the arguments of the callback as an array.
 * This function has to be an arrow function to maintain scope.
 *
 * @param {Function} callbackBasedFunction
 * @returns {Function}
 */
const toPromise = (callbackBasedFunction) =>
{
  if (!_.isFunction(callbackBasedFunction))
  {
    throw new Error("Invalid arguments.");
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
