const middle = function(array) {
  //check the length of tha array if length is <2 return an empty array
  //check if the length of array is odd or even

  const arrLength = array.length;
  console.log('arrLength', arrLength);
  if (arrLength <= 2) {
    return [];
  } else if (arrLength % 2 !== 0) {
    let midd = Math.floor(arrLength / 2);
    console.log('middOdd', midd);
    return array[midd];
  } else {
    let midd = (arrLength / 2) - 1;
    console.log('middEven', midd);
    return array.slice(midd, midd + 2);

  }
};

// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2]));






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


const nums = [1, 2, 3, 4, 5];
let numsMiddle = middle(nums);
assertArraysEqual(numsMiddle, [3]);

const nums1 = [1, 2, 3, 4, 5, 6];
let numsMiddle1 = middle(nums1);
assertArraysEqual(numsMiddle1, [3,4]);


const one = [1];
let oneMiddle = middle(one);
assertArraysEqual(oneMiddle, []);
