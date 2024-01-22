const complexFunction = require('../src/complexLogic');

describe('complexFunction', () => {
    test('Branch 1', () => {
        expect(complexFunction(5, 3, 2, 1)).toBe(7); // a > b, c > d
    });
    // Add more Tests here to fullfill 80 % of Coverage
});
