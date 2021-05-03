const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("should returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it(`should returns "Labs" for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("should returns undefined for []", () => {
    assert.strictEqual((head([]), undefined));
  });

  it("should returns undefined for (123)",  () => {
    assert.strictEqual((head(123), undefined));
  });

});