const {subtractTwoNumbers} = require('../../../d1-tests/1-easy/subtractTwoNumbers')

//write the following tests
describe('checking to see if subtractTwoNumbers functions as expected', () => { 
    // checks if subtractTwoNumbers takes 4 from 10 and returns 6
    test('checks if subtractTwoNumbers takes 4 from 10 and returns 6', () => {
        expect(subtractTwoNumbers(10, 4)).toBe(6);
    });

    // checks if subtractTwoNumbers takes 0 from 4 and returns 0
    test('checks if subtractTwoNumbers takes 0 from 4 and returns 4', () => {
        expect(subtractTwoNumbers(4, 0)).toBe(4);
    });

    // checks if subtractTwoNumbers takes 5 from 3 and returns -2
    test('checks if subtractTwoNumbers takes 5 from 3 and returns -2', () => {
        expect(subtractTwoNumbers(3, 5)).toBe(-2);
    });

    // checks if subtractTwoNumbers takes -6 from -4 and returns 2
    test('checks if subtractTwoNumbers takes -6 from -4 and returns 2', () => {
        expect(subtractTwoNumbers(-4, -6)).toBe(2);
    });

 })

 

