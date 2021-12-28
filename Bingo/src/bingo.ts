import { allCards, callersCard } from "./test/testCases/testOne";
import {
  testDiagonalLeft,
  testDiagonalRight,
  testHorizontal,
  testVertical
} from "./utils/utilsIndex";

const possibleResults = allCards.map((cardArr) =>
  cardArr.map((_num, index, arr) => {
    if (index <= 4) {
      const result = testVertical(index, arr, callersCard);
      if (result) return true;
    }

    if (index % 5 === 0) {
      const result = testHorizontal(index, arr, callersCard);
      if (result) return true;
    }

    if (index === 0) {
      const result = testDiagonalRight(index, arr, callersCard);
      if (result) return true;
    }

    if (index === 4) {
      const result = testDiagonalLeft(index, arr, callersCard);
      if (result) return true;
    }

    return false;
  })
);

possibleResults.forEach((cardResultArr, index) => {
  if (!!cardResultArr.filter((x) => x).length) {
    console.log("Winner! Card #", index);
  }
  console.log("Not a winner...");
});
