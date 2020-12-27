import _ from "lodash";
let i = 1;
const arr1 = _.range(30000).map(() => ({
  key: i++,
  name: _.sample(["Vasia", "Petia"])
}));
//const arr2 = [{ key: 1, age: 25 }, { key: 3, age: 40 }];
const arr2 = _.range(60000)
  .map(key => _.random(60000))
  .map(key => {
    return { key, age: _.sample([10, 20]) };
  });

const bigData = {
  arr1,
  arr2
};

export { bigData };
