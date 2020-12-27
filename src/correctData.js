import _ from "lodash";
// const arr1 = [{ key: 2, name: "Igor" }, { key: 1, name: "Vasia" }];
// const arr2 = [{ key: 3, age: 40 }, { key: 1, age: 25 }];
// should be res = [{ key: 2, name: "Igor" }, { key: 1, name: "Vasia", age: 25 }, { key: 3, age: 40 },]

const arr1 = [{ key: 2, name: "Igor" }, { key: 1, name: "Vasia" }];
const arr2 = [{ key: 3, age: 40 }, { key: 1, age: 25 }];

const correctData = {
  arr1,
  arr2
};

const checkCorrectAnswer = answer => {
  try {
    const sortedItems = _(answer)
      .sortBy(["key"])
      .value();
    let result = true;

    result = result && sortedItems.length === 3;

    result = result && sortedItems[0].key === 1;
    result = result && sortedItems[0].name === "Vasia";
    result = result && sortedItems[0].age === 25;

    result = result && sortedItems[1].key === 2;
    result = result && sortedItems[1].name === "Igor";
    result = result && sortedItems[1].age === undefined;

    result = result && sortedItems[2].key === 3;
    result = result && sortedItems[2].name === undefined;
    result = result && sortedItems[2].age === 40;

    return result;
  } catch {
    return false;
  }
};

export { correctData, checkCorrectAnswer };
