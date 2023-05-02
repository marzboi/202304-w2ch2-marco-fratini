import strictEquals from "./strictEquals.js";

describe("Given the strictEquals function", () => {
  describe("when it receives the values of 1 and 1", () => {
    test("then it should return the value of true", () => {
      const valueA = 1;
      const valueB = 1;

      const valueReturned = strictEquals(valueA, valueB);
      const expectedValue = true;

      expect(valueReturned).toBe(expectedValue);
    });
  });
  describe("when it receives the values of NaN and NaN", () => {
    test("then it should return the value of false", () => {
      const valueA = NaN;
      const valueB = NaN;

      const valueReturned = strictEquals(valueA, valueB);
      const expectedValue = false;
    });
  });
});
