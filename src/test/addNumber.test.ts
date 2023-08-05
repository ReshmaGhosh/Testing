// test here

import { addNumber } from "./../functions/addNumber";

describe("check the add number function", () => {
 
  test("check add function", () => {
    const result = addNumber(1, 2);
    expect(result).toBe(3); 
  });
  test("check add function", () => {
    const result = addNumber(1, 2);
    expect(result).toBeGreaterThan(1);
  });
});