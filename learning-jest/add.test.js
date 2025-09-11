const { add } = require('./add');

describe('add', () => {
    test('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('adds negative and positive number', () => {
        expect(add(-2, 3)).toBe(1);
    });

    test('adds zeros', () => {
        expect(add(0, 0)).toBe(0);
    });
});
