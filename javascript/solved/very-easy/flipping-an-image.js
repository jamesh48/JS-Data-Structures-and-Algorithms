// Leetcode #832
// https://leetcode.com/problems/flipping-an-image/

// 12/22/21

const flipAndInvertImage = function(image) {
  return image.map((x) => {
      return x.reverse().map((y) => {
          return !y ? 1 : 0
      })
  })
};