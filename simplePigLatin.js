// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation
// marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  let strArray = str.split(" ");
  let i = 0;
  for (let elem of strArray) {
    if (!!!elem.match(/^[.,:!?]/)) {
      let elem1 = elem;
      elem1 = elem1.split("");

      elem1[elem1.length - 1] = elem1.shift();
      elem1.push("ay");
      elem1 = elem1.join("");
      strArray[i] = elem1;
    }
    i++;
  }
  return strArray.join(" ");
}
