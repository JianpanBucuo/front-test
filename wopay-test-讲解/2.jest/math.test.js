
// const {add, minus, multy} = require('./math');
import {add, minus, multy} from './math'
test('测试加法',() => {
    expect(add(3,3)).toBe(6);
})
test('测试减法', () => {
    expect(minus(3,3)).toBe(0);
}) 

test('测试乘法法', () => {
    expect(multy(3,3)).toBe(9);
}) 

 


 