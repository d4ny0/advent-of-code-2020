const fs = require('fs');
const path = require('path');

function readInput(inputFile="input.txt") {
  // read input file
  const file = fs.readFileSync(path.resolve(__dirname, `./${inputFile}`), { encoding: "UTF-8"});

  return file.split('\n');
}

const inputLines = readInput();

/**
 * step 1
 * take input and move down a given slope (right: 3, down: 1)
 * add all '#' as trees
 */

function countTrees(input) {
  return input.reduce((totalTrees,currentLine,idx) => {
    // the lines repeat themselves when we hit a line end, so we can check for the rest amount
    // all lines have the same length
    const offset = (idx * 3) % currentLine.length;
    return currentLine[offset] === '#' ? totalTrees + 1 : totalTrees;
  }, 0);
}

/**
 * step 2
 * multiply amount of found trees '#' by using multiple slopes as input
 */

const slopes = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 }
];
/**
  * because our input doesn't always go down for 1 step we shouldn't use reduce anymore
  * a classic for loop grants us access to the correct line without running through every line
  */
function countTreesWithSlopes(input, slope) {
  let trees = 0;
  // we start at 0, but our position might not increase like the loop index
  let position = 0;
  // because we don't always move only 1 down we can't use the loop index
  for (let row = 0; row < input.length; row += slope.down) {
    const offset = (position * slope.right) % input[row].length;

    if (input[row][offset] === '#') {
      trees++;
    }
    position+=1;
  }
  return trees;
}



  // loop over all slopes and multiply each result
function multiplyTrees(input, slopes) {
  return slopes.reduce((totalTrees,currentSlope) => (
    totalTrees * countTreesWithSlopes(input, currentSlope)
  ),1);
}

// results
const treeAmount = countTrees(inputLines);
const multipliedTrees = multiplyTrees(inputLines, slopes);

module.exports = {
  readInput,
  countTrees,
  countTreesWithSlopes,
  multiplyTrees,
  slopes
}
