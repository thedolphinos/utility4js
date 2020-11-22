const isExist = require("./lib/core/isExist");
const isInitialized = require("./lib/core/isInitialized");

const isValidNumber = require("./lib/number/isValidNumber");

const isValidDate = require("./lib/date/isValidDate");

const toPromise = require("./lib/promise/toPromise");

const assignIfExist = require("./lib/object/assignIfExist");

const traverseRequireExecuteDeep = require("./lib/file/traverseRequireExecuteDeep");

const isObjectId = require("./lib/db/isObjectId");

const init = require("./lib/variable/init");

const Error = require("@thedolphinos/error4js"); // this is exported due to node's duplicate module imports which causes reference problems during instanceof checks.

module.exports = {
  isExist,
  isInitialized,

  isValidNumber,

  isValidDate,

  toPromise,

  assignIfExist,

  traverseRequireExecuteDeep,

  isObjectId,

  init,

  Error
};
