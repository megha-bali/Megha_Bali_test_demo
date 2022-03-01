// the operation to get multiplication of two numbers
const { multiplication } = require('./multiplication');

test('2*5=10', () => {
    expect(multiplication(2, 5)).toBe(10);
});

test.skip('5*6=30', () => {
    expect(multiplication(5, 6)).toBe(30);
});