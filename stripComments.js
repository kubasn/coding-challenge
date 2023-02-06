// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  let string = input;

  string = string.split("\n");
  let final = "";

  for (let i = 0; i < string.length; i++) {
    for (marker of markers) {
      string[i] = string[i].split(marker)[0];
    }
    string[i] = string[i].trim();
  }

  for (let i = 0; i < string.length; i++) {
    final = final.concat(string[i], "\n");
  }
  return final.trim();
}
