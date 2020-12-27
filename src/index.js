import "./styles.css";
import _ from "lodash";
import { correctData, checkCorrectAnswer } from "./correctData.js";
import { algoritms } from "./algoritms.js";
import { bigData } from "./bigData";

const testAlhorithm = (
  algorithmFunc,
  algName,
  data,
  checkCorrectAnswer,
  checkPerfomance
) => {
  let time = window.performance.now();
  let result = algorithmFunc(data);
  if (checkPerfomance) {
    console.log(algName, window.performance.now() - time);
  } else if (checkCorrectAnswer) {
    if (checkCorrectAnswer(result)) {
      console.log(`name: ${algName} - CORRECT`);
    } else {
      console.log(`name: ${algName} - INCORRECT with results:`);
      console.log(result);
    }
  }
};

_.forEach(algoritms, (alg) =>
  testAlhorithm(
    (data) => alg(data.arr1, data.arr2),
    alg.name,
    correctData,
    checkCorrectAnswer
  )
);

// _.forEach(algoritms, alg =>
//   testAlhorithm(
//     data => alg(data.arr1, data.arr2),
//     alg.name,
//     bigData,
//     undefined,
//     true
//   )
// );
