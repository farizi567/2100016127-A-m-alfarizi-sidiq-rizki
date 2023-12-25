// capitalize.test.js (file yang berisi Test Suite untuk Capitalize)
const Capitalize = require('./Capitalize');

test('Capitalize should capitalize the first letter of a sentence', () => {
  const sentence = 'this is a test sentence';
  const capitalized = Capitalize(sentence);
  expect(capitalized).toMatch(/^This is a test sentence$/);
});

test('Capitalize should handle a mix of uppercase and lowercase letters', () => {
  const mixedCase = 'tHis Is A MixeD casE StrIng';
  const capitalized = Capitalize(mixedCase);
  expect(capitalized.toLowerCase()).toBe('this is a mixed case string');
});

test('Capitalize should return an empty string when given an empty string', () => {
  const emptyString = '';
  const capitalized = Capitalize(emptyString);
  expect(capitalized).toBe('');
});

test('Capitalize should capitalize a single-letter string', () => {
  const singleLetter = 'a';
  const capitalized = Capitalize(singleLetter);
  expect(capitalized).toBe('A');
});
