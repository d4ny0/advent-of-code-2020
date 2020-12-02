const fs = require('fs');
const path = require('path');
// read input file
const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), { encoding: "UTF-8"});

// transform input lines and extract checking parameters in own object keys
const inputLines = input.split("\n").map(line => {
  const [key,value] = line.split(':');
  const [occurance,needle] = key.split(' ');
  const [start,end] = occurance.split("-");

  return {
    occurance: { start, end },
    needle,
    pw: value.trim()
  }
});

// part 1 - get valid passwordlist by checking if the needle occurance is in the range
function getValidPasswordsByRange(list) {
  return list.filter(entry => {
    const occuranceAmount = entry.pw.split(entry.needle).length - 1;
    return occuranceAmount >= entry.occurance.start && occuranceAmount <= entry.occurance.end;
  })
};

// part2 - get valid passwordlist by checking if needle occurs on the right spots
// first index is 1 and not 0!
function getValidPasswordsByPosition(list) {
  return list.filter(entry => {
    const {occurance,needle,pw} = entry;

    // -1 because js arrays start at 0
    const checkStart = pw[occurance.start-1];
    const checkEnd = pw[occurance.end-1];

    return (
      checkStart === needle && checkEnd !== needle ||
      checkStart !== needle && checkEnd === needle
    )
  })
}

// results
const validPasswordsByRange = getValidPasswordsByRange(inputLines)
const validPasswordsByPosition = getValidPasswordsByPosition(inputLines)

console.log(validPasswordsByRange.length, validPasswordsByPosition.length);
