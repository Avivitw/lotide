const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
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


// const nums = [1, 2, [3, 4], 5, [6]];
// let numsFlattened = flatten(nums);
// assertArraysEqual(numsFlattened, [1,2,3,4,5,6]);

