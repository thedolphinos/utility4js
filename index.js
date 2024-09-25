const isExist = require("./src/core/isExist");
const isInitialized = require("./src/core/isInitialized");

const isValidNumber = require("./src/number/isValidNumber");

const isValidDate = require("./src/date/isValidDate");
const toUTCDateString = require("./src/date/toUTCDateString");

const toPromise = require("./src/promise/toPromise");

const assignIfExist = require("./src/object/assignIfExist");

const isValidEnum = require("./src/enum/isValidEnum");
const isValidEnumValue = require("./src/enum/isValidEnumValue");
const toEnum = require("./src/enum/toEnum");

const traverseRequireExecuteDeep = require("./src/file/traverseRequireExecuteDeep");

const isObjectId = require("./src/db/isObjectId");
const isValidId = require("./src/db/isValidId");
const isSameIds = require("./src/db/isSameIds");
const toObjectId = require("./src/db/toObjectId");

const init = require("./src/variable/init");
const {
    removePropertiesDeeply,
    removePropertiesFromObjectDeeply,
    removePropertiesFromArrayDeeply
} = require("./src/variable/removeProperties");
const {
    removeNotExistedPropertiesDeeply,
    removeNotExistedPropertiesFromObjectDeeply,
    removeNotExistedPropertiesFromArrayDeeply
} = require("./src/variable/removeNotExistedProperties");

module.exports = {
    isExist,
    isInitialized,

    isValidNumber,

    isValidDate,
    toUTCDateString,

    toPromise,

    assignIfExist,

    isValidEnum,
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
