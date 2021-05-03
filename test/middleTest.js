const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js')

const nums = [1, 2, 3, 4, 5];
let numsMiddle = middle(nums);
assertArraysEqual(numsMiddle, 3);

const nums1 = [1, 2, 3, 4, 5, 6];
let numsMiddle1 = middle(nums1);
assertArraysEqual(numsMiddle1, [3,4]);


const one = [1];
let oneMiddle = middle(one);
assertArraysEqual(oneMiddle, []);