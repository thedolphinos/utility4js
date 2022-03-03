const isExist = require("./lib/core/isExist");
const isInitialized = require("./lib/core/isInitialized");

const isValidNumber = require("./lib/number/isValidNumber");

const isValidDate = require("./lib/date/isValidDate");

const toPromise = require("./lib/promise/toPromise");

const assignIfExist = require("./lib/object/assignIfExist");

const isValidEnumDefinition = require("./lib/enum/isValidEnumDefinition");
const isValidEnumValue = require("./lib/enum/isValidEnumValue");
const toEnum = require("./lib/enum/toEnum");

const traverseRequireExecuteDeep = require("./lib/file/traverseRequireExecuteDeep");

const isObjectId = require("./lib/db/isObjectId");
const isValidId = require("./lib/db/isValidId");
const isSameIds = require("./lib/db/isSameIds");
const toObjectId = require("./lib/db/toObjectId");

const init = require("./lib/variable/init");
const {
  removePropertiesDeeply,
  removePropertiesFromObjectDeeply,
  removePropertiesFromArrayDeeply
} = require("./lib/variable/removeProperties");
const {
  removeNotExistedPropertiesDeeply,
  removeNotExistedPropertiesFromObjectDeeply,
  removeNotExistedPropertiesFromArrayDeeply
} = require("./lib/variable/removeNotExistedProperties");

module.exports = {
  isExist,
  isInitialized,

  isValidNumber,

  isValidDate,

  toPromise,

  assignIfExist,

  isValidEnumDefinition,
  isValidEnumValue,
  toEnum,

  traverseRequireExecuteDeep,

  isObjectId,
  isValidId,
  isSameIds,
  toObjectId,

  init,
  removePropertiesDeeply,
  removePropertiesFromObjectDeeply,
  removePropertiesFromArrayDeeply,
  removeNotExistedPropertiesDeeply,
  removeNotExistedPropertiesFromObjectDeeply,
  removeNotExistedPropertiesFromArrayDeeply
};
