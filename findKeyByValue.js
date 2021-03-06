const findKeyByValue = function(object, value) {
  //create a loop and search for the key with the value help
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }

};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:✅✅✅ " +  actual + "  ===  " + expected);
  } else {
    console.log(`Assertion Failed:⛔️⛔️⛔️  ${actual} !==  ${expected}`);
  }

};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestFriends = {
  isreal: "Efrat",
  northCarolina: "Einav",
  sunnyvale: "Michal"

};

assertEqual(findKeyByValue(bestFriends,"Michal"), "sunnyvale");
assertEqual(findKeyByValue(bestFriends,"Einav"), "northCarolina");

