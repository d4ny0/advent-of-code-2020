const fs = require('fs');
const path = require('path');

function readInput(inputFile="input.txt") {
  // read input file
  const file = fs.readFileSync(path.resolve(__dirname, `./${inputFile}`), { encoding: "UTF-8"});
  // convert lines to array of numbers
  return file.split("\n").map(x=>Number(x));
}

const inputLines = readInput();


// step 1 - find  2 numbers that add up to 2020
function getTwoCorrespondingNumbers(numList, target = 2020) {
  let matchingNumbers = [];

  for (let num1 of numList) {
    const meetsTarget = numList.find((num2) => num1 + num2 === target);

    if (meetsTarget) {
      matchingNumbers.push(num1,meetsTarget);
      break;
    }
  }

  return matchingNumbers;
}

// step 2 - find 3 numbers that add up to 2020
function getThreeCorrespondingNumbers(numList, target=2020) {
  let matchingNumbers = [];

  for (let num1 of numList) {
    const meetsTargetMinusCurr = getTwoCorrespondingNumbers(numList, target-num1);

    if (meetsTargetMinusCurr.length) {
      matchingNumbers.push(...meetsTargetMinusCurr,num1)
      break;
    }
  }

  return matchingNumbers;
}

// helper to multiply numbers array
function multiply(numbers) {
  return numbers.reduce((curr,total) => total *= curr);
}

// results
const matchTwo = multiply(getTwoCorrespondingNumbers(inputLines));
const matchThree = multiply(getThreeCorrespondingNumbers(inputLines));

module.exports = {
  readInput,
  multiply,
  getTwoCorrespondingNumbers,
  getThreeCorrespondingNumbers
}

