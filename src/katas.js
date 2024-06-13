function copyArrayContent(sourceArr, destArr) {
  for (let element of sourceArr) {
    destArr.push(element);
  }
  return destArr;
}

// export function so it can be used in test file
module.exports = copyArrayContent;
