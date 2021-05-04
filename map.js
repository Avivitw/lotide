const map = function(array,callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};


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
    console.log(`Assertion Failed:⛔️⛔️⛔️  ${actual} !==  ${expected}`);
  } else {
    console.log(`Assertion Passed:✅✅✅  ${actual}  ===  ${expected}`);
   
  }

};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results1,['m', 't' ]);
const nums = [1, 2, 3 ,4];
const results2 = map(nums, num => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8]);
assertArraysEqual(results2, [1, 2, 3 ,4]);

module.exports = map;