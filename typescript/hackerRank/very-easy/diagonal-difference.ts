"use strict";
// Hacker Rank
// https://www.hackerrank.com/challenges/diagonal-difference/problem
// 1/7/22

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
  let a = 0;
  let b = 0;
  const rightDiagonalIndicator = arr[0].length + 1;
  const leftDiagonalIndicator = arr[0].length - 1;
  const flatArr = arr.reduce((total, item) => {
    total.push(...item);
    return total;
  }, []);
  for (let i = 0; i < flatArr.length; i += rightDiagonalIndicator) {
    a += flatArr[i];
  }

  let count = 0;
  for (let i = leftDiagonalIndicator; i < flatArr.length; i += leftDiagonalIndicator) {
    if (count < arr[0].length) {
      b += flatArr[i];
      count++;
    }
  }
  return Math.abs(a - b);
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const n: number = parseInt(readLine().trim(), 10);

  let arr: number[][] = Array(n);

  for (let i: number = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result: number = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
