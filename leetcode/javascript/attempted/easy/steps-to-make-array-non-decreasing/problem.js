/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function (nums) {
  let count = 0;
  const recurseNums = (theseNums) => {
    const exitCondition = theseNums.every((num, index, array) => {
      if (array[index + 1] === undefined || array[index + 1] >= num) {
        return true;
      }
      return false;
    });

    if (exitCondition) {
      console.log('EXIT CONDITION');
      return;
    }
    console.log('REDUCING');
    count = count + 1;
    for (let i = 0; i < theseNums.length; i++) {
      let removalCount = 0;
      const currentItem = theseNums[i];
      let pointer = i + 1;
      let resultIndices = [];
      let prevItem = currentItem;
      while (
        theseNums[pointer] < currentItem &&
        prevItem > theseNums[pointer]
      ) {
        prevItem = theseNums[pointer];
        resultIndices.push(pointer);
        pointer = pointer + 1;
      }
      theseNums.splice(resultIndices[0], resultIndices.length);
    }
    console.log(theseNums);
    return recurseNums(theseNums);
  };

  recurseNums(nums);
  return count;
};
