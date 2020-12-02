const fs = require('fs');
const path = require('path');

// read input file
const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), { encoding: "UTF-8"});

// convert lines to array of numbers
const numbers = input.split("\n").map(x=>Number(x));

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

// helper to sum up given numbers array
function sum(numbers) {
  return numbers.reduce((curr,total) => total += curr);
}

// get corresponding numbers and multiply them with each other
const matchTwo = getTwoCorrespondingNumbers(numbers);
const matchThree = getThreeCorrespondingNumbers(numbers);

console.log(`These numbers: ${matchTwo.join(', ')} add up to ${sum(matchTwo)} and multiply to ${multiply(matchTwo)}`);
console.log(`These numbers: ${matchThree.join(', ')} add up to ${sum(matchThree)} and multiply to ${multiply(matchThree)}`);