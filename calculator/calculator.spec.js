const calculator = require('./calculator')

describe('calculator unit tests', () => {

    it('adds', () => {
        expect(calculator.sum(2, 2)).toBe(4)
        expect(calculator.sum(5, -2)).toBe(3)
        expect(calculator.sum(1, 0)).toBe(1)
        expect(calculator.sum(1)).toBe(1)
        //refractor to support more parameters
        expect(calculator.sum(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45)
    })

    it('subtracts', () => {
        expect(calculator.subtract(2, 2)).toBe(0)
        expect(calculator.subtract(5, -2)).toBe(7)
        expect(calculator.subtract(-1)).toBe(-1)
        expect(calculator.subtract(1)).toBe(1)
    })
    
    it('multiplies', () => {
        expect(calculator.multiply(3, 3)).toBe(9)
        expect(calculator.multiply(4)).toBe(4)
        expect(calculator.multiply(2, 3.5)).toBe(7)
        expect(calculator.multiply(1, 2)).toBe(2)
    })

    it('divides', () => {
        expect(calculator.divide(3, 3)).toBe(1)
        expect(calculator.divide(4, 2)).toBe(2)
        expect(() => {(calculator.divide(2, 0)).toThrow()}) //we are expecting this function to throw an error
        expect(calculator.divide(0)).toBe(0)
    })

    it('parses', () => {
        expect(calculator.parse({
            sum: [1, 2, 3],
            subtract: [3, 2, 1],
            multiply: [1, 2, 3],
            divide: [2, 2, 2]
            // we can no longer use the toBe, since we're doing a deep equallity check
            //with an object rather than a primitive value [number, string, etc]
        })).toEqual({
            sum: 6,
            subtract: 0,
            multiply: 6,
            divide: .5,
        })
    })

})

