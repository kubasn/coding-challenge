// Given an array of ones and zeroes,
// convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary
// representation of 1.

const binaryArrayToNumber = (arr) => {
  // your code
  let newArray = arr;
  let decimal = 0;
  newArray.reverse();
  let i = 0;

  for (num of arr) {
    decimal += num * Math.pow(2, i);
    i++;
  }
  return decimal;
};
