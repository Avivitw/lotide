
// - EQARRAYS & ASSERTARRAYSEQUAL IMPLEMENTATION - //

const eqArrays = function(arr1, arr2) {
  if (!arr1.length === arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    
  }
  return true;

};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`Assertion Failed:🙅⛔️⛔️  ${actual} !==  ${expected}`);
  } else {
    console.log(`Assertion Passed:🙆✅✅  ${actual}  ===  ${expected}`);
   
  }

};


// ---------- FUNCTION IMPLEMENTATION ---------- //

const takeUntil = function(array, callback) {
  //create an array results to return it at the enf of the function
  let result = [];
  for (let element of array) {
    //create an if statment to check if the item is equal to the value we passed to stop
    //if the item === value stop, if not push this value into the result array
    if (!callback(element)) {
      result.push(element);
    } else {
      return result;
    }

  }


  return result;
};

// ----------------- TEST CODE ----------------- //


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;
