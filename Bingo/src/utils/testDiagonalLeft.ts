import { CallersCard, Card, CardNumber } from "src/Types";

export const testDiagonalLeft = (
  index: CardNumber,
  arr: Card,
  callersCard: CallersCard
) => {
  let temp = index;
  let resultArr = [];
  while (
    typeof arr[temp] === "number" &&
    (callersCard.indexOf(arr[temp]) > -1 || arr[temp] === 0)
  ) {
    resultArr.push(arr[temp]);
    temp += 4;
  }

  if (resultArr.length === 5) {
    return true;
  }
  return false;
};
