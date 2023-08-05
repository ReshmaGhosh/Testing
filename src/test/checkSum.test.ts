import { checkSum } from "./../functions/checkSum";
import { addNumber } from "../functions/addNumber";

describe("check sum returns the correct message", () => {
  test("should return the sum is greater than 3", () => {
    const mockAddNumber = jest.requireMock("./../functions/addNumber")
      .addNumber as jest.Mock;
    mockAddNumber.mockReturnValue(7);

    const result = checkSum(3, 4);
    expect(result).toMatch("the sum is greater than 3");
  });

  test("should return the sum is smaller than 3", () => {
    const mockAddNumber = jest.requireMock("./../functions/addNumber")
      .addNumber as jest.Mock;
    mockAddNumber.mockReturnValue(2);

    const result = checkSum(1, 1);
    expect(result).toMatch("the sum is smaller than 3");
  });

  test("should return the sum is equal to 3", () => {
    const mockAddNumber = jest.requireMock("./../functions/addNumber")
      .addNumber as jest.Mock;
    mockAddNumber.mockReturnValue(3);

    const result = checkSum(1, 2);
    expect(result).toMatch("the sum is equal to 3");
  });
});
