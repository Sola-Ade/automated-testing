"use strict";

/**
 * Find the shortest string in an array.
 * In the case of a tie, returns the earlier string in the array.
 *
 * @param {string[]} stringArr - array of strings
 * @returns {string} - the shortest string
 */
function findShortestString(stringArr) {
  const shortestString = stringArr[0];
  for (let str of stringArr) {
    if (str.length < shortestString.length) {
      /* const shortestString = str;*/
    }
  }
  return shortestString.length;
}

// export function so it can be used in test file
module.exports = findShortestString;
