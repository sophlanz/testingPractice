
const capitalize = require ('./fun');
test('capitalizes first letter', () => {
    expect(capitalize("sophie")).toBe('Sophie');
});

const reverseString = require('./fun');
test('reverse string', ()=> {
    expect(reverseString("hello")).toBe("olleh");
});

const calculator = require ('./fun');
test('adds, subtrats, multiplies, and divives', () => {
    expect(calculator.addition.add(2,2)).toBe(4);
    expect(calculator.subtraction.subtract(2,2)).toBe(0);
    expect(calculator.multiplication.multiply(2,3)).toBe(6);
    expect(calculator.division.divide(10,5)).toBe(2);
});

const caesarCipher = require('./fun');
test("caesar cipher", () => {
    expect(caesarCipher('defend the east wall of the castle',1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
});

const analyzeArray = require('./fun');
test('average,min,max,lenth', () => {
    expect(JSON.stringify(analyzeArray([1,8,3,4,2,6]))).toBe(JSON.stringify({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    }))
});