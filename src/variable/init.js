const _ = require("lodash");

const isInitialized = require("../core/isInitialized");

/**
 * Initializes the given value `x` with a value if not already initialized.
 *
 * @param {*} x - The value to potentially initialize.
 * @param {*} value - The value to assign if `x` is not initialized.
 * @returns {*} - Returns either the original `x` if initialized or the provided `value`.
 */
const init = (x, value) =>
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

module.exports = init;
