const {
  readInput,
  getValidPasswordsByRange,
  getValidPasswordsByPosition
} = require('./day2.js');

describe('day 2 - find amount of valid passwords based on range of wanted character', () => {
  test('finds valid passwords by range based on example input', () => {
    const input = readInput('exampleInput.txt');
    const validPasswords = getValidPasswordsByRange(input);

    expect(validPasswords.length).toBe(2);
  });

  test('finds valid passwords by position based on example input', () => {
    const input = readInput('exampleInput.txt');
    const validPasswords = getValidPasswordsByPosition(input);

    expect(validPasswords.length).toBe(1);
  });

  test('finds valied passwords by range rule', () =>{
    const input = readInput('input.txt');
    const validPasswords = getValidPasswordsByRange(input);

    expect(validPasswords.length).toBe(556);
  });

  test('finds valied passwords by position rule', () => {
    const input = readInput('input.txt');
    const validPasswords = getValidPasswordsByPosition(input);

    expect(validPasswords.length).toBe(605);
  })
})