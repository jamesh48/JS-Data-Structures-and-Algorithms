"use strict";
// HackerRank
// https://www.hackerrank.com/challenges/solve-me-first
// 1/7/22
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
  main(inputLines);
});

function readLine(): string {
  return inputLines[currentLine++];
}

function main(inputLines: string[]) {
  let result = 0;
  inputLines.forEach(() => {
    result += Number(readLine());
  });
  console.log(result);
}
