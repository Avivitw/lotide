const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([]), []);
assertEqual(tail([1]), []);
assertEqual(tail(), []);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
const result2 = tail(['a', 'b', 'c']);
assertEqual(result2.length, 2);
assertEqual(result2[0], "b");
assertEqual(result2[1], "c");