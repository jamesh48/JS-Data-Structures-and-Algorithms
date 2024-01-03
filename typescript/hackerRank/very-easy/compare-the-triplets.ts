"use strict";
// Hacker Rank
// https://www.hackerrank.com/challenges/compare-the-triplets/problem
// 1/7/21
import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a: number[], b: number[]): number[] {
  let resultArr = [0, 0];
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      resultArr[0]++;
    }

    if (b[i] > a[i]) {
      resultArr[1]++;
    }
  }
  return resultArr;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const a: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const b: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((bTemp) => parseInt(bTemp, 10));

  const result: number[] = compareTriplets(a, b);

  ws.write(result.join(" ") + "\n");

  ws.end();
}