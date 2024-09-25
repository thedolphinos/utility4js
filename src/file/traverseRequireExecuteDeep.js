const path = require("node:path");
const fs = require("node:fs");

const _ = require("lodash");

const isExist = require("../core/isExist");

/**
 * Recursively traverses the given directory path deeply, imports JavaScript files found within, and if a function is provided, executes it with the exports of each imported file.
 *
 * @param {string} directoryPath - The path to the directory that will be traversed.
 * @param {Function} [function_] - A function to execute with the exports of each imported file. If not provided, the files will be imported without any further action.
 *
 * @throws {Error} - Throws an error if the `directoryPath` is not a string or if `function_` is provided but is not a function.
 * @throws {Error} - Throws an error if a directory does not exist on the `directoryPath`.
 * @throws {Error} - Throws an error if any file in the directory or its subdirectories cannot be accessed due to insufficient permissions.
 */
const traverseRequireExecuteDeep = (directoryPath, function_ = undefined) =>
{
    if (!_.isString(directoryPath) ||
        (isExist(function_) && !_.isFunction(function_)))
    {
        throw new Error("Invalid arguments.");
    }

    const directoryPathStat = fs.lstatSync(directoryPath);

    if (!fs.existsSync(directoryPath) || !directoryPathStat.isDirectory())
    {
        throw new Error(`Directory does not exist: ${directoryPath}`);
    }

    const directoryContents = fs.readdirSync(directoryPath);

    for (const directoryContent of directoryContents)
    {
        const subPath = path.join(directoryPath, directoryContent);
        const subPathStat = fs.lstatSync(subPath);

        if (subPathStat.isDirectory())
        {
            traverseRequireExecuteDeep(subPath, function_);
        }
        else if (subPathStat.isFile())
        {
            try
            {
                fs.accessSync(subPath, fs.constants.F_OK | fs.constants.R_OK);
            }
            catch (error)
            {
                throw new Error(`Permission denied: ${subPath}`);
            }

            const fileNameWithoutExtension = subPath.split(".js")[0];
            const exports = require(fileNameWithoutExtension);

            if (isExist(function_))
            {
                function_(exports);
            }
        }
    }
};

module.exports = traverseRequireExecuteDeep;
