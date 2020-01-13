import utcDateConvert from './utcDateConvert.js'

test('utcDateConvert converts a utc date', () => {
  expect(utcDateConvert("2019-08-10T11:30:00Z")).toBe("10 Aug 2019");
})