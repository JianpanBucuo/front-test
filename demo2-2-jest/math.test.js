const math = require('./math');
const {add, minus, multi} = math;

 
test('测试加法 3 + 5',() => {
    expect(add(3,5)).toBe(9);
})


test('测试减法 7 - 3',() => {
    expect(minus(7,3)).toBe(4)
})