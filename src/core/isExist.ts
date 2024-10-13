/*
 * Code Review: ✓
 * Test Cases: ✗
 * Guidelines - Imports: n/a
 * Guidelines - Comments: ✓ but work on examples
 */

/**
 * Checks if the given value is defined and initialized.
 *
 * @param {*} x - The value to check.
 * @returns {boolean} - Returns `true` if the value exists; otherwise, `false`.
 *
 * TODO: work on examples
 * @example
 * isExist(""); // returns true
 *
 * @example
 * let x;
 * isExist(x); // returns false
 */
const isExist = <T> (x: T | undefined | null): x is T =>
{
    return x !== undefined && x !== null;
};

export default isExist;
