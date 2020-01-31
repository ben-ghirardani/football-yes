import utcDateConvert from './utcDateConvert.js'

describe('utcDateConvert tests', () => {

  it('converts a utc date', () => {
    expect(utcDateConvert("2019-08-10T11:30:00Z")).toBe("10 Aug 2019");
  });

});