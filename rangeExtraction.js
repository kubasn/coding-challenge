// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list) {
  let result = "";
  for (let i = 0; i < list.length; i++) {
    let current = list[i];
    let next = list[i + 1];
    if (next === current + 1) {
      // current and next are consecutive, so this might be part of a range
      let j = i + 1;
      while (list[j] === list[j + 1] - 1) {
        j++;
      }
      if (j > i + 1) {
        // there is a range of at least 3 numbers, so we add it to the result
        result += `${current}-${list[j]}`;
        i = j;
      } else {
        // there is only a range of 2 numbers, so we add them separately
        result += `${current},${next}`;
      }
    } else {
      // current and next are not consecutive, so we add current to the result
      result += `${current}`;
    }
    if (next) {
      result += ",";
    }
  }
  return result.slice(0, -1);
}
