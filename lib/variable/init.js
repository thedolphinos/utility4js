const _ = require("lodash");

const isInitialized = require("../core/isInitialized");

/**
 * If the specified variable is not initialized, initializes it with the specified default value.
 *
 * @param {*} x
 * @param {*} defaultValue
 * @returns {*}
 */
const init = (x, defaultValue) =>
{
  if (!isInitialized(x))
  {
    if (_.isObjectLike(x))
    {
      x = _.cloneDeep(defaultValue); // remove references to external objects.
    }
    else
    {
      x = defaultValue;
    }
  }

  return x;
};

module.exports = init;
