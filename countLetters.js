const countLetters = function(sentence) {
  let result = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
    
  }

  return result;

};







const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:✅✅✅ " +  actual + "  ===  " + expected);
  } else {
    console.log(`Assertion Failed:⛔️⛔️⛔️  ${actual} !==  ${expected}`);
  }

};

const string1 = countLetters("lighthouse in the house");
assertEqual(string1['l'],1);
assertEqual(string1['i'],2);
assertEqual(string1['g'],1);
assertEqual(string1['h'],4);
assertEqual(string1['t'],2);
assertEqual(string1['o'],2);
assertEqual(string1['u'],2);
assertEqual(string1['s'],2);
assertEqual(string1['e'],3);
assertEqual(string1['n'],1);

const string2 = countLetters('avivit');
assertEqual(string2['a'], 1);
assertEqual(string2['v'], 2);
assertEqual(string2['i'], 2);
assertEqual(string2['t'], 1);
