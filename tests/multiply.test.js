import { multiply } from "../src/multiply.js";

test("multiplies correctly", () => {
  expect(multiply(2, 3)).toBe(6);
});
