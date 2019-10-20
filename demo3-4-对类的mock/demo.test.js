jest.mock('./utils',() => {
    const Util = jest.fn(() => {
        console.log('Util');
    })
    Util.prototype.a = jest.fn(() => {
        console.log('aa')
    })
    Util.prototype.b = jest.fn(() => {
        console.log('vv');
    })
    return Util;
});
// jest.mock 发现 util 是一个类 会自动把类的构造函数和方法变成 jest.fn()
// let Util = jest.fn();
// Util.a = jest.fn();
// Util.b = jest.fn();
import Util from './utils';
import demoFunction from './demo';


test('测试 demoFunction', () => {
    demoFunction();
    // 如何证明 demoFunction 正确运行了， 需要判断 utils.a utils.b 是否执行过
    expect(Util).toHaveBeenCalled();
    expect(Util.mock.instances[0].a).toHaveBeenCalled();
    console.log(Util.mock.instances)
})