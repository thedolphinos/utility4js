# Guidelines

## Naming

### File

* camelCase (since they represent function(s))

### Directory

* kebab-case

## Imports

* Imports should be ordered by category.
* Separate modules with a new line.

### Import Order by Package Category

1. Node.js Core Modules:
    * path
    * fs
2. Third-Party Packages:
    * lodash as _
    * mongodb
        * ObjectId
3. Project-Specific Modules:
    * isExist
    * isInitialized
    * isValidNumber
    * isValidDate
    * toUTCDateString
    * toPromise
    * assignIfExist
    * isValidEnum
    * isValidEnumValue
    * toEnum
    * traverseRequireExecuteDeep
    * isObjectId
    * isValidId
    * isSameIds
    * toObjectId
    * init
    * removePropertiesDeeply
    * removePropertiesFromObjectDeeply
    * removePropertiesFromArrayDeeply
    * removeNotExistedPropertiesDeeply
    * removeNotExistedPropertiesFromObjectDeeply
    * removeNotExistedPropertiesFromArrayDeeply

## Comments

* When something that requires further attention is encounter but don’t have time to address it immediately, leave a TODO comment.

### Function Description

* Explains the function.
    * Starts with a verb in the third-person singular.

(Empty line)

* @param (0 or n):
    * Specify the type.
    * Specify if optional.
    * Explain the parameter, starting with a dash.
* @returns (1):
    * Specify the type.
    * If nothing is returned, specify void.
    * Explain the return value, starting with a dash.

(Empty line)

* @throws (0 or n):
    * Explain the error, starting with a dash.
    * Separate different errors with a new entry.
    * If the same error is thrown in different places, it is counted as one entry.

(Empty line)

* @example (0 or n):
    * No explanation before examples.
    * Examples can span multiple lines.
    * Separate different examples with a new entry.
    * If there are multiple examples, separate each with an empty line.
