/* Push the source array to the end of the destination array.
 *
 * @param {sourceArr[]} sourceArr - array of all
 * @param {destArr[]} destArr -  array of all
 * @returns {destArr} - the new string with sourceArr attached to the end of destArr*/

function copyArrayContent(sourceArr, destArr) {
  for (let element of sourceArr) {
    destArr.push(element);
  }
  return destArr;
}

// export function so it can be used in test file
module.exports = copyArrayContent;
