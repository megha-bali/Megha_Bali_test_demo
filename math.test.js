// the operation to get sum of two numbers
const { addition } = require('./addition');

test('2+3=5', () => {
    expect(addition(2, 3)).toBe(5);
});

test.skip('3+7=10', () => {
    expect(addition(3, 7)).toBe(10);
});