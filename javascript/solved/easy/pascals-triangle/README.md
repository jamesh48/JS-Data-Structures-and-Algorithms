## Pascals Triangle

<!-- https://leetcode.com/problems/pascals-triangle/ -->
<!-- 118 -->

###### O - Number Representing (Num Rows)

###### I - Array of Number Arrays

###### C - `1 <= numRows <= 30`

###### E - None forseeable

###### Intuition

- The first two rows are hardcoded, since the second row is not derived from the first.
- Always start with 1 for the first and last number.
- The previous numbers added can be expressed as previous array index (i - 1), sliced from the current j index - 1 to j + 1
- Adding these numbers together gives the correct entry at the given index.
