const _ = require("lodash");

/**
 * Converts a callback-based function into a promise-based function.
 * The returned function, when called, returns a promise that resolves with the arguments passed to the callback as an array.
 *
 * @param {Function} callbackBasedFunction - A function that uses a callback to handle asynchronous logic.
 * @returns {Function} - A new function that returns a promise resolving with the callback's arguments.
 *
 * @throws {Error} - Throws an error if the `callbackBasedFunction` is not a function.
 */
const toPromise = (callbackBasedFunction) =>
{
    if (!_.isFunction(callbackBasedFunction))
    {
        throw new Error("Invalid arguments.");
    }

    // This function must be an arrow function to maintain the correct scope of the `callbackBasedFunction` passed.
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
