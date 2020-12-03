const {
  readInput,
  countTrees,
  countTreesWithSlopes,
  multiplyTrees,
  slopes
} = require('./day3.js');

describe('day 3 - run through grid with directions and count all #', () => {
  test('counts all trees in example input, by following directions {right:3, down: 1}', () => {
    const input = readInput('exampleInput.txt');

    expect(countTrees(input)).toBe(7);
  });

  test('can handle array of directions and multiply trees for each direction', () => {
    const input = readInput('exampleInput.txt');
    expect(multiplyTrees(input,slopes)).toBe(336)

  })

  test('counting works with given input', () => {
    const input = readInput('input.txt');
    expect(countTrees(input)).toBe(286);
  });

  test('multiple directions and multiplication works with given input', () => {
    const input = readInput('input.txt');

    expect(multiplyTrees(input,slopes)).toBe(3638606400)

  })

});
