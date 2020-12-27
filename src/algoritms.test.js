import _ from "lodash";
import { algoritms } from "./algoritms.js";

test("adds 1 + 2 to equal 3", () => {
  expect(true).toBe(true);
});

const arr1 = [
  { key: 2, name: "Igor" },
  { key: 1, name: "Vasia" }
];
const arr2 = [
  { key: 3, age: 40 },
  { key: 1, age: 25 }
];

const rest = new Set([
  { key: 1, name: "Vasia", age: 25 },
  { key: 2, name: "Igor" },
  { key: 3, age: 40 }
]);

_.forEach(algoritms, (alg, key) => {
  test(key, () => {
    expect(new Set(alg(arr1, arr2))).toEqual(rest);
  });
});
