import chai, { expect } from "chai";
import {
  verticalTestLoss,
  verticalTestLossCallersCard,
  verticalTestWin,
  verticalTestWinCallersCard
} from "./testCases/verticalTestCases";

import {
  freeSpaceHWinCallersCard,
  freeSpaceHWinCard,
  mixedFreeSpaceHWinCard,
  mixsedFreeSpaceHWinCallersCard,
  freeSpaceVWinCard,
  freeSpaceVWinCallersCard
} from "./testCases/freeSpaceTestCases";
import {
  horizontalLossCard,
  horizontalLossCallersCard,
  horizontalWinCallersCard,
  horizontalWinCard
} from "./testCases/horizontalTestCases";

import { testVertical, testHorizontal } from "../utils/utilsIndex";
// @ts-ignore
const should = chai.should();

describe("Win validation tests", () => {
  describe("Vertical win tests", () => {
    it("should correctly detect a vertical win", () => {
      const test = testVertical(0, verticalTestWin, verticalTestWinCallersCard);
      expect(test).to.eql(true);
    });

    it("should correctly not detect a vertical win", () => {
      const test = testVertical(0, verticalTestLoss, verticalTestLossCallersCard);
      expect(test).to.eql(false);
    });
  });

  describe("Horizontal Win Tests", () => {
    it("should correctly detect a horizontal win", () => {
      const test = testHorizontal(0, horizontalWinCard, horizontalWinCallersCard);
      expect(test).to.eql(true);
    });

    it("should correctly not detect a horizontal win", () => {
      const test = testHorizontal(0, horizontalLossCard, horizontalLossCallersCard);
      expect(test).to.eql(false);
    });
  });

  describe("Free Space Tests", () => {
    it("should regard free spaces as valid horizontally", () => {
      const test = testHorizontal(0, freeSpaceHWinCard, freeSpaceHWinCallersCard);
      expect(test).to.eql(true);

      const testTwo = testHorizontal(
        0,
        mixedFreeSpaceHWinCard,
        mixsedFreeSpaceHWinCallersCard
      );
      expect(testTwo).to.eql(true);
    });

    it("should regard free spaces as valid vertically", () => {
      const test = testVertical(0, freeSpaceVWinCard, freeSpaceVWinCallersCard);
      expect(test).to.eql(true);
    });
  });
});
