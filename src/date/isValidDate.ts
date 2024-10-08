import _ from "lodash";

import isExist from "../core/isExist";
import isValidNumber from "../number/isValidNumber";

/**
 * Checks if the given value is a date object representing a valid time point.
 *
 * @param {*} x - The value to check.
 * @returns {boolean} - Returns `true` if the value is considered a valid date; otherwise, `false`.
 *
 * @example
 * isValidDate(new Date('November 10 2015')); // returns true
 * isValidDate(new Date('x')); // returns false
 */
const isValidDate = (x: any): boolean =>
{
    return isExist(x) && _.isDate(x) && isValidNumber(x.getTime());
};

export default isValidDate;
