const { TestWatcher } = require('jest');
const { addition } = require('./addition');

test.each([
    [3, 4, 7],
    [2, 8, 10],
    [10, 5, 15],
    [5, -10, -5],
    [0, 2, 2],
])('a+b = c', (a, b, sum) => {
    expect(addition(a, b)).toBe(sum);
});