const assert = require('assert');
const calculateTotalPoints = require('./index');

describe('calculateTotalPoints', () => {
  describe('normal hill', () => {
    it('should return if distance is bigger than kPoint', () => {
      const actual = calculateTotalPoints(
        106.5,
        'normal',
        98,
        [18.5, 18.5, 18.5, 19.0, 19.0],
        6.4,
        -13.5
      );

      const expected = 125.9;

      assert.equal(actual, expected);
    });

    it('should return if distance is smaller than kPoint', () => {
      const actual = calculateTotalPoints(
        94.5,
        'normal',
        98,
        [17.0, 17.0, 17.0, 17.0, 16.5],
        0,
        -11.9
      );

      const expected = 92.1;

      assert.equal(actual, expected);
    });
  });

  describe('big hill', () => {
    it('should return if distance is bigger than kPoint', () => {
      const actual = calculateTotalPoints(
        134.0,
        'big',
        120,
        [19.0, 20.0, 19.5, 19.0, 18.5],
        0,
        -5.4
      );

      const expected = 137.3;

      assert.equal(actual, expected);
    });

    it('should return if distance is smaller than kPoint', () => {
      const actual = calculateTotalPoints(
        117.0,
        'big',
        120,
        [17.5, 18.5, 17.5, 17.0, 17.5],
        0,
        -1.4
      );

      const expected = 105.7;

      assert.equal(actual, expected);
    });
  });

  describe('mamut hill', () => {
    it('should return if distance is bigger than kPoint', () => {
      const actual = calculateTotalPoints(
        227.5,
        'mamut',
        200,
        [18.0, 18.5, 17.5, 18.5, 18.5],
        8.7,
        -8.4
      );

      const expected = 208.3;

      assert.equal(actual, expected);
    });

    it('should return if distance is smaller than kPoint', () => {
      const actual = calculateTotalPoints(
        183.0,
        'mamut',
        200,
        [16.5, 16.5, 16.0, 16.5, 16.5],
        0,
        -2.9
      );

      const expected = 146.2;

      assert.equal(actual, expected);
    });
  });
});
