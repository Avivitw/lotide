const flatten = function(array) {
//create a new array to store the flatten version of the array
  let flattenArray = [];

  //create a loop to check if the current valueis array
  //if it is an array - we should go inside another loop and take
  //the values from there and push them to our new flatten array
  //return the new array
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        flattenArray.push(item[i]);
        
      }

    } else {
      flattenArray.push(item);
    }

    
  }
  return flattenArray;
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


const nums = [1, 2, [3, 4], 5, [6]];
let numsFlattened = flatten(nums);
assertArraysEqual(numsFlattened, [1,2,3,4,5,6]);

const nums1 = [1, 2, 3, 4, 5, 6];
let nums1Flattened = flatten(nums1);
assertArraysEqual(nums1Flattened, [1,2,3,4,5,6]);

const words = ['a', 'b', ['c', 'd'], 'e'];
let wordsFlatten = flatten(words);
assertArraysEqual(wordsFlatten, ['a', 'b', 'c', 'd', 'e']);