 
import {add, minus, multi} from './math';
 
test('测试加法 3 + 5',() => {
    expect(add(3,5)).toBe(8);
})


test('测试减法 7 - 3',() => {
    expect(minus(7,3)).toBe(4)
})
test('测试乘法 10 * 3',() => {
    expect(multi(10,3)).toBe(30);
})