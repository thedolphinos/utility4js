"use strict";

const fs = require("fs");
const {InvalidArgumentsError, DirectoryNotExistError} = require("@thedolphinos/error4js");
const isExist = require("../core/isExist");
const _ = require("lodash");

/**
 * Traverses `directoryPath` deeply, imports the files under, and if `func` provided executes the function with exports of imported files.
 *
 * @since 0.7.0
 * @param {string} directoryPath
 * @param {Function} func
 */
const traverseRequireExecuteDeep = (directoryPath, func = null) =>
{
  if (!_.isString(directoryPath) ||
      (isExist(func) && !_.isFunction(func)))
  {
    throw new InvalidArgumentsError();
  }

  if (!fs.existsSync(directoryPath) || !fs.lstatSync(directoryPath).isDirectory())
  {
    throw new DirectoryNotExistError();
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
