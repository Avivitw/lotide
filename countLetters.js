const countLetters = function(sentence) {


};







const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:✅✅✅ " +  actual + "  ===  " + expected);
  } else {
    console.log(`Assertion Failed:⛔️⛔️⛔️  ${actual} !==  ${expected}`);
  }

};

const string1 = "lighthouse in the house";
assertEqual(countLetters(string1['l']),1);
assertEqual(countLetters(string1['i']),2);
assertEqual(countLetters(string1['g']),1);
assertEqual(countLetters(string1['h']),4);
assertEqual(countLetters(string1['t']),2);
assertEqual(countLetters(string1['o']),2);
assertEqual(countLetters(string1['u']),2);
assertEqual(countLetters(string1['s']),2);
assertEqual(countLetters(string1['e']),3);
assertEqual(countLetters(string1['n']),1);
