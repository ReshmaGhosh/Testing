import { addNumber } from "./addNumber";

export function checkSum(a: number, b: number): string {
  const sum = addNumber(a, b);
  if (sum > 3) {
    return "the sum is greater than 3";
  }
  if (sum === 3) {
    return "the sum is equal to 3";
  } else {
    return "the sum is smaller than 3";
  }
}
