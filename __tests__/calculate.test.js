// const { expect } = require('_@jest_globals@27.3.1@@jest/globals')
const calculate = require('../algorithm/46.w0501-calculate')

test('1+1=2', () => {
  expect(calculate('1+1')).toBe(2)
})

test(`calculate(' 10 + 10 / 2 - 5 * 9 ')`, () => {
  expect(calculate(' 10 + 10 / 2 - 5 * 9 ')).toBe(-30)
})