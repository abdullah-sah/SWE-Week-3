const {multiplyTwoNumbers} = require('../../../d1-tests/1-easy/multiplyTwoNumbers')

//write the following tests
describe('Checking if multiplyTwoNumbers functions as expected', () => {
    // checks if multiplyTwoNumbers multiplies 3 and 4 and returns 12
    test('checks if multiplyTwoNumbers multiplies 3 and 4 and returns 12', () => {
        expect(multiplyTwoNumbers(3, 4)).toBe(12);
    });

    // checks if multiplyTwoNumbers multiplies 0 and 3 and returns 0
    test('checks if multiplyTwoNumbers multiplies 0 and 3 and returns 0', () => {
        expect(multiplyTwoNumbers(0, 3)).toBe(0);
    });

    // checks if multiplyTwoNumbers multiplies 5 and -6 and returns -30
    test('checks if multiplyTwoNumbers multiplies 5 and -6 and returns -30', () => { 
        expect(multiplyTwoNumbers(5, -6)).toBe(-30);
     });

    // checks if multiplyTwoNumbers multiplies -6 and -4 and returns 24
    test('checks if multiplyTwoNumbers multiplies -6 and  -4 and returns 24', () => {
        expect(multiplyTwoNumbers(-6, -4)).toBe(24);
    });

});

