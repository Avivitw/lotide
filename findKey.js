// - ASSERTEQUAL IMPLEMENTATION - //

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:🙆✅✅ " +  actual + "  ===  " + expected);
  } else {
    console.log(`Assertion Failed:🙅⛔️⛔️  ${actual} !==  ${expected}`);
  }
};

// ---------- FUNCTION IMPLEMENTATION ---------- //
const findKey = function(object, callback) {
  //create a loop and search for the key with the value help
  for (const key in object) {
  //get the value by invoking the callback function
    if (callback(object[key])) {
      return key;
    }
  }

};

// ----------------- TEST CODE ----------------- //

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  'a': {val: 3},
  'b': {val: 4},
  'c': {val: 5},
  'd': {val: 6},
  'e': {val: 7},
}, x => x.val === 6), "d");