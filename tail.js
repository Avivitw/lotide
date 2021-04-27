const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:✅✅✅  ${actual} ===  ${expected}`);
  } else {
    console.log(`Assertion Failed:⛔️⛔️⛔️  ${actual} !==  ${expected}`);
  }

};


const tail = function(array) {

  if (Array.isArray(array) && array.length > 0) {
    let arrayTail = array.slice(1);
    return arrayTail;
  }

  return [];
};

assertEqual(tail([]), []);
assertEqual(tail([1]), []);
assertEqual(tail(), []);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
const result2 = tail(['a', 'b', 'c']);
assertEqual(result2.length, 2);
assertEqual(result2[0], "b");
assertEqual(result2[1], "c");