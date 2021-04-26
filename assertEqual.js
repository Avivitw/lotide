const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:✅✅✅ " +  actual + "  ===  " + expected);
  } else {
    console.log("Assertion Failed:⛔️⛔️⛔️ " + actual + " !==  " + expected);
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("vivi", "vivi");
assertEqual("abc", "def");
assertEqual(123, 123);
assertEqual(123, 456);