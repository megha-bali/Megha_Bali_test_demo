// the operation to divide two numbers
const { division } = require('./division');

test('10/2=5', () => {
    expect(division(10, 2)).toBe(5);
});
//skipped test
test.skip('30/6=5', () => {
    expect(division(30, 6)).toBe(5);
});