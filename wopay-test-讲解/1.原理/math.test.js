
const result = add(3,7);
const expected = 10;

if(result !== expected) {
    throw new Error(`3 + 7 应该等于 ${expected},但结果却是 ${result}`);
}

const result2 = minus(3,3);
const expected2 = 0;
if(result !== expected) {
    throw new Error(`3 - 3 应该等于 ${expected2},但结果却是 ${result2}`);
}
// 回归测试 
// 如果在未来增加新代码的时候 不小心改了之前的代码，会很快察觉到
// 自动化测试的例子 都是一个套路， 预期的结果是什么， 真正的结果是什么， 两者相比较 值是否相等
// 如果相等则通过，如果不相等则抛出异常



function expect(result) {
    return {
        toBe:  (actual) => {
            if(result !== actual) {
                throw new Error(`预期值和实际值不相等 预期${actual} 结果却是${result}`);
            }
    }}
}
function test(desc,fn) {
// test函数的第一个参数是对要测试的测试用例进行一个描述
    try{
        fn();
        console.log(`${desc}通过测试`);
    } catch(e) {
        console.log(`${desc}没有通过测试 ${e}`);
    }
}
test('测试加法',() => {
    expect(add(3,3)).toBe(6);
})
test('测试减法', () => {
    expect(minus(3,3)).toBe(1);
}) 

test('测试乘法法', () => {
    expect(multy(3,3)).toBe(9);
}) 

//  前端自动化测试就是 我们编写了一些额外的测试代码，测试我们预期值和实际值是否相等
//  通过测试代码我们就可以在上线前对代码进行一些测试，而这些测试并非我们人肉的去点击
//  而是通过我们预先写好的代码帮助我们执行的。
//  这就叫做前端自动化测试 


function expect(result) {
    return {
        toBe:(expect) => {
            if(result !== expect) {
                throw new Error(`测试没有通过 预期值${expect} 但结果确实${result}`)
            }
        }
    }
}
function test(desc,fn) {
    try{
        fn();
        console.log(`${desc} 通过单元测试`);
    } catch(e) {
        console.log(`${desc} 没有通过测试用例 ${e}`)
    }
}
