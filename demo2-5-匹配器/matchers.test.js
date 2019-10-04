
 test('测试用例 toBe',() => {
    //  toBe 匹配器 matchers Object.is 全等
    // toBe 
     expect(10).toBe(10);

 })

 test('测试对象内容相等 toEqual', () => {
    //  toEqual
     const a = {one:1};
     expect(a).toEqual({one:1})
 })

 
 test('测试对象为空 toBeNull', () => {
    //  toEqual
     const a = null;
     expect(a).toBeNull();
 })

test('测试对象 toBeUndefined', () => {
    //  toEqual
     const a = undefined;
     expect(a).toBeUndefined();
 })

 test('测试对象已被定义 toBeDefined', () => {
    //  toEqual
     const a = null;
     expect(a).toBeDefined();
 })

 test('测试对象 toBeTruthy', () => {
    //  toEqual
     const a = 1;
     expect(a).toBeTruthy();
 })

 test('测试对象 toBeFalsy', () => {
    //  toEqual
     const a = 0;
     expect(a).toBeFalsy();
 })


 test('测试对象 not ', () => {
    //  toEqual
     const a = 1;
     expect(a).not.toBeFalsy();
 })


//  数字相关匹配器
describe('数字相关匹配器',() => {
    test('测试对象 toBeGreaterThan ', () => {
        //  toEqual
         const a = 10;
         expect(a).toBeGreaterThan(4);
     })
     test('测试对象 toBeLessThan ', () => {
        //  toEqual
         const a = 10;
         expect(a).toBeLessThan(11);
     })
     test('测试对象 toBeLessThanOrEqual ', () => {
        //  toEqual
         const a = 10;
         expect(a).toBeLessThanOrEqual(10);
     })
     test('测试对象 toBeCloseTo ', () => {
        //  toEqual
         const a = 0.1;
         const b = 0.2;
         expect(a + b).toBeCloseTo(0.3);
     })
})

describe('String 相关匹配器',() => {
    test('测试对象 toMatch ', () => {
        //  toEqual
        const str = '123';
        // 字符串A里是否包含 字符串 B   
        expect(str).toMatch('12');
        expect(str).toMatch(/12/);
     })  
})

describe('Array 相关匹配器', () => {
    test('测试对象 toContaine', () => {
        const arr = ['del','le'];
        const data = new Set(arr);
        expect(data).toContain('del'); 
    }) 
})

// 异常
const throwNewError = () => {
    throw new Error('This is a new Error');
}
describe('异常匹配器', () => {
    test('测试对象 toThrow',() => {
        expect(throwNewError).toThrow('This is a new Error'); 
    })
})