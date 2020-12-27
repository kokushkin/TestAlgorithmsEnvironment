import _ from "lodash";

const algoritms = {
  simpleJoinByTretiak: (arr1, arr2) => {
    return _([...arr1, ...arr2])
      .groupBy("key")
      .map((group) =>
        _.reduce(group, (merged, value) => ({ ...value, ...merged }), {})
      )
      .value();
  },
  simpleJoinByBuzanov: (arr1, arr2) => {
    const keys = new Set();
    const array1ByKeys = arr1.reduce((acc, curr) => {
      acc[curr.key] = curr;
      keys.add(curr.key);
      return acc;
    }, {});
    const array2ByKeys = arr2.reduce((acc, curr) => {
      acc[curr.key] = curr;
      keys.add(curr.key);
      return acc;
    }, {});

    return Array.from(keys).map((key) =>
      Object.assign({}, array1ByKeys[key], array2ByKeys[key])
    );
  },
  joinByBogdan: (arr1, arr2) => {
    const dataHash = {};
    arr1.forEach((item) => {
      dataHash[item.key] = { ...dataHash[item.key], item };
    });
    arr2.forEach((item) => {
      dataHash[item.key] = { ...dataHash[item.key], item };
    });

    return Object.values(dataHash);
  },
  simpleJoinWithLoosingKeysInSecondArray: (arr1, arr2) => {
    const sortedArr2 = _.sortBy(arr2, (el) => el.key);
    const sortedArrKeys = sortedArr2.map((el) => el.key);
    return arr1.map((el1) => {
      return _.assign(el1, sortedArr2[_.sortedIndexOf(sortedArrKeys, el1.key)]);
    });
  },
  // verySimpleJoinWithoutSortingAndBinarySearch: (arr1, arr2) => {
  //   return arr1.map(el1 => {
  //     return _.assign(el1, _.find(arr2, el2 => el2.key === el1.key));
  //   });
  // }
  joinFromGitterLodashForum: (arr1, arr2) => {
    const groupedArr2 = _.groupBy(arr2, "key");
    console.log(groupedArr2);
    return _.map(arr1, (arr1El, id) => ({ ...arr1El, ...groupedArr2[id] }));
  }
};

export { algoritms };
