const {
  readInput,
  multiply,
  getTwoCorrespondingNumbers,
  getThreeCorrespondingNumbers
} = require('./day1.js');

describe('day 1 - find numbers that add add up 2020 and multiply them', () => {
  test('finds and multiplies 2 numbers in example input', () => {
    const input = readInput('exampleInput.txt');
    const numbers = getTwoCorrespondingNumbers(input);
    const sum = numbers.reduce((n,total) => total+=n);

    expect(sum).toBe(2020);
    expect(multiply(numbers)).toBe(514579);
  });

  test('finds and multiplies 2 numbers from given input and multiplies', () =>{
    const input = readInput('input.txt');
    const numbers = getTwoCorrespondingNumbers(input);
    const sum = numbers.reduce((n,total) => total+=n);

    expect(sum).toBe(2020);
    expect(multiply(numbers)).toBe(211899);
  });

  test('finds and multiplies 3 numbers from given input and multiplies', () => {
    const input = readInput('input.txt');
    const numbers = getThreeCorrespondingNumbers(input);
    const sum = numbers.reduce((n,total) => total+=n);

    expect(sum).toBe(2020);
    expect(multiply(numbers)).toBe(275765682);
  })
})