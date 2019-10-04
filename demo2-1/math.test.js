var result = add (3,7);
var expected = 10;
// if (result !== 10) {
//     throw Error(`3 + 7 应该等于 ${expected} 但是结果却是 ${result}`);
// } else {
//     console.log('add 函数通过单元测试')
// }


function expect (result) {
    return {
        toBe: (actual) => {
            if(result !== actual) {
                throw new Error(`预期值 ${actual}和实际值${result}不相等`);
            } else {
                console.log('通过测试');
            }
        }
    }
}

function  test(desc,fn){
    try {
        fn();
        console.log(`${desc} 通过测试`)
    } catch(e) {
        console.log(`${desc} 没有通过测试 ${e}`)
    }
}

test('测试加法 3 + 5',() => {
    expect(add(3,5)).toBe(6);
})

