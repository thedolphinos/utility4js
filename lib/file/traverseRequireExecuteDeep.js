const fs = require("fs");

const _ = require("lodash");

const isExist = require("../core/isExist");

/**
 * Traverses the specified directory path deeply, imports the files under, and if a function is provided executes the function with exports of imported files.
 *
 * @param {string} directoryPath
 * @param {Function} func
 */
const traverseRequireExecuteDeep = (directoryPath, func = null) =>
{
  if (!_.isString(directoryPath) ||
      (isExist(func) && !_.isFunction(func)))
  {
    throw new Error("Invalid arguments.");
  }

  if (!fs.existsSync(directoryPath) || !fs.lstatSync(directoryPath).isDirectory())
  {
    throw new Error("Directory is not exist.");
  }

  const directoryContents = fs.readdirSync(directoryPath);

  for (let i = 0; i < directoryContents.length; i++)
  {
    const subPath = path.join(directoryPath, directoryContents[i]);
    const subPathStat = fs.lstatSync(subPath);

    if (subPathStat.isDirectory())
    {
      traverseRequireExecuteDeep(subPath, func);
    }
    else if (subPathStat.isFile())
    {
      fs.accessSync(subPath, fs.constants.F_OK | fs.constants.R_OK);

      const fileNameWithoutExtension = subPath.split(".js")[0];
      const exports = require(fileNameWithoutExtension);

      if (isExist(func))
      {
        func(exports);
      }
    }
  }
};

module.exports = traverseRequireExecuteDeep;
