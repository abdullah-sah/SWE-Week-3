const {addTwoNumbers} = require('../../../d1-tests/1-easy/addTwoNumbers')

//write the following tests

describe('Checking to see if addTwoNumbers functions as expected', () => {
	// checks if addTwoNumbers takes 4 and 6 and returns 10
	test('checks if addTwoNumbers takes 4 and 6 and returns 10', () => {
		expect(addTwoNumbers(4, 6)).toBe(10);
	});
		
	// checks if addTwoNumbers takes 2 and 0 and returns 2
	test('checks if addTwoNumbers takes 2 and 0 and returns 2', () => {
		expect(addTwoNumbers(2, 0)).toBe(2);
	});
	
	// checks if addTwoNumbers takes -4 and -6 and returns -10
	test('check if addTwoNumbers takes -4 and -6 and returns -10', () => {
		expect(addTwoNumbers(-4, -6)).toBe(-10);
	});
});

