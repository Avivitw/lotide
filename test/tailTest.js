const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("should returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("should returns [] for [1] ", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("should returns [] for () ", () => {
    assert.deepEqual(tail(), []);
  });

  it(`should returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it(`should returns ['b', 'c']   for ['a', 'b', 'c']`, () => {
    assert.deepEqual(tail(['a', 'b', 'c']), ['b', 'c']);
  });

});


