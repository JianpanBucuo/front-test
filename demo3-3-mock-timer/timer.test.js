import timer from './timer';

jest.useFakeTimers();

test('timer 测试', () => {
    const fn = jest.fn();
    timer(fn);
    jest.advanceTimersByTime(3000);  //快进三秒
    // jest.runAllTimers();// 避免等待的时间
    // jest.runOnlyPendingTimers(); //调用只在队列中的定时器
    expect(fn).toHaveBeenCalledTimes(1);
})
