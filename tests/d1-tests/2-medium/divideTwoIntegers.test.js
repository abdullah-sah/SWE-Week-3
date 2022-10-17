const {divideTwoIntegers} = require('../../../d1-tests/2-medium/divideTwoIntegers')

//write the following tests
describe('checking if dividTwoIntegers functions as expected', () => {
    // checks if divideTwoIntegers receiving 12 and 3 will return 4
    test('checks if divideTwoIntegers receiving 12 and 3 will return 4', () => {
        expect(divideTwoIntegers(12, 3)).toBe(4);
    });
    
    // checks if divideTwoIntegers receiving 12 and -3 will return -4
    test('checks if divideTwoIntegers receiving 12 and -3 will return -4', () => {
        expect(divideTwoIntegers(12, -3)).toBe(-4);
    });

    // checks if divideTwoIntegers receiving 12 and 0 will return "Divide by zero error."
    test('checks if divideTwoIntegers receiving 12 and 0 will return "Divide by zero error."', () => {
        expect(divideTwoIntegers(12, 0)).toBe('Divide by zero error.');
    });

    // if divideTwoIntegers is passed a value other than a number, it should return "Inputs must be a number"
    test('if divideTwoIntegers is passed a value other than a number, it should return "Inputs must be a number', () => {
        expect(divideTwoIntegers(12, 'something')).toBe('Inputs must be a number.');
    });

    // if divideTwoIntegers is passed a decimal value, it should return "Integers only."
    test('if divideTwoIntegers is passed a decimal value, it should return "Integers only"', () => {
        expect(divideTwoIntegers(12, 23.4)).toBe('Integers only.');
    });

})
    