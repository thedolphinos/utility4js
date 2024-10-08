import isExist from "../core/isExist";
import isValidNumber from "../number/isValidNumber";

/**
 * Converts the `timestamp` to a UTC date string in the format "YYYY-MM-DD HH:MM:SS".
 * If the `timestamp` is not provided, the current time is used.
 *
 * @param {number} [timestamp] - The Unix timestamp in milliseconds. If not provided, the current time is used.
 * @returns {string} - A formatted UTC date string in "YYYY-MM-DD HH:MM:SS" format.
 *
 * @throws {Error} - Throws an error if the `timestamp` is provided and not a finite number primitive.
 */
const toUTCDateString = (timestamp?: number): string =>
{
    if (isExist(timestamp) && !isValidNumber(timestamp))
    {
        throw new Error("Invalid arguments.");
    }

    const date = new Date(isExist(timestamp) ? timestamp : Date.now());

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");

    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export default toUTCDateString;
