const {addingArrays} = require('../../../d1-tests/3-hard/addingArrays')

//addingArrays takes two arrays of numbers and adds the corresponding elements together.
//example [1,1,1], [2,2,2]  => [3,3,3]
//example [1,2,3,4], [4,3,2,1] => [5,5,5,5]

/*
Write tests for the following:
    - Arrays with different lengths should return "Arrays are different lengths."
    - Arrays with non-numbers should return "Not all elements are numbers."
    - two arrays of numbers and the expected result

*/

expect.extend({
    toReturnTheArray(received, expected) {
        const message = `Expecting ${received} to equal ${expected}.`;
        if (JSON.stringify(received) === JSON.stringify(expected)) {
            return {
                pass: true,
                message
            }
        } else {
            return {
                pass: false,
                message
            }
        }
    }
})

describe('testing to make sure addingArrays functions as expected', () => {
    test('Arrays with different lengths should return "Arrays are different lengths."', () => {
        expect(addingArrays([1, 2, 3], [1, 2, 3, 4])).toEqual('Arrays are different lengths.');
    });

    test('Arrays with non-numbers should return "Not all elements are numbers."', () => {
        expect(addingArrays([1, '2', 3], [1, 2, 3])).toBe('Not all elements are numbers.');
    });

    test('Given arrays [10, 11, 12] and [10, 11, 12], the result should be [20, 22, 24].', () => {
        expect(addingArrays([10, 11, 12], [10, 11, 12])).toReturnTheArray(addingArrays([10, 11, 12], [10, 11, 12]), [20, 22, 24]);
    });
})