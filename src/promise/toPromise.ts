import _ from "lodash";

/**
 * Converts a callback-based function into a promise-based function.
 * The returned function, when called, returns a promise that resolves with the arguments passed to the callback as an array.
 *
 * @param {Function} callbackBasedFunction - A function that uses a callback to handle asynchronous logic.
 * @returns {Function} - A new function that returns a promise resolving with the callback's arguments.
 *
 * @throws {Error} - Throws an error if the `callbackBasedFunction` is not a function.
 */
const toPromise = (callbackBasedFunction: (...args: any[]) => void): (...argsOfFunctionExceptCallback: any[]) => Promise<any[]> =>
{
    if (!_.isFunction(callbackBasedFunction))
    {
        throw new Error("Invalid arguments.");
    }

    // This function must be an arrow function to maintain the correct scope of the `callbackBasedFunction` passed.
    return (...argsOfFunctionExceptCallback: any[]): Promise<any[]> =>
    {
        return new Promise((resolve, reject) =>
                           {
                               callbackBasedFunction(...argsOfFunctionExceptCallback, (...argsOfCallback: any[]) =>
                               {
                                   resolve(argsOfCallback);
                               });
                           });
    };
};

export default toPromise;
