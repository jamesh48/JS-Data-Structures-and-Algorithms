// o - arr of strs
// i - two strs = source- string, target- string.
// c - 5000ms, length at least 2 and at most 12
// e - !emptyStrings, different length of strs, least edits possible?

// "ABCDEFG", "ABDFFGH"

function diffBetweenTwoStrings(source, target) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (source[i] === target[j]) {
        result.push(source[i]);
      } else {
        result.push("-" + source[i]);
      }
    }
  }
  return result;
}

const test = diffBetweenTwoStrings("ABCDEFG", "ABDFFGH");
console.log(test);
