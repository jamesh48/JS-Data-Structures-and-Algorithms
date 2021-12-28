import { CallersCard, Card, CardNumber } from "src/Types";

export const testHorizontal = (
  index: CardNumber,
  arr: Card,
  callersCard: CallersCard
) => {
  let resultArr = [];
  let temp = index;
  while (
    typeof arr[temp] === "number" &&
    (callersCard.indexOf(arr[temp]) > -1 || arr[temp] === 0)
  ) {
    resultArr.push(arr[temp]);
    temp++;
  }

  if (resultArr.length === 5) {
    return true;
  }
  return false;
};
