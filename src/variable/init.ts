/*
 * Code Review: ✓
 * Test Cases: ✗
 * Guidelines - Imports: ✓
 * Guidelines - Comments: ✓ but no examples
 */

import _ from "lodash";

import isInitialized from "../core/isInitialized";

/**
 * Initializes the given value `x` with a value if not already initialized.
 *
 * @param {*} x - The value to potentially initialize.
 * @param {*} value - The value to assign if `x` is not initialized.
 * @returns {*} - Returns either the original `x` if initialized or the provided `value`.
 *
 * TODO: add examples
 */

const init = <T> (x: T | undefined, value: T): T =>
{
    if (!isInitialized(x))
    {
        if (_.isObjectLike(x))
        {
            x = _.cloneDeep(value); // remove references to external objects.
        }
        else
        {
            x = value;
        }
    }

    return x;
};

export default init;
