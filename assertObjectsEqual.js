const assertObjectsEqual = function(actual, expected) {
  if (!eqObjects)
};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`Assertion Failed:⛔️⛔️⛔️  ${actual} !==  ${expected}`); 
  } else {
    console.log(`Assertion Passed:✅✅✅  ${actual}  ===  ${expected}`);
   
  }

};




const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  const obj1keys = Object.keys(object1);
  for (let i = 0; i < obj1keys.length; i++) {
    let key = obj1keys[i];
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};