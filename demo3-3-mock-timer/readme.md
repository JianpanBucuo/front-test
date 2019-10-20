3-3 mock-timer

jest.useFakeTimers(); 对定时器的模拟 对 定时器重新初始化

----------------------------------------------------------
jest.runAllTimers(); //立即调用定时器， 避免定时器的等待时间

jest.advanceTimersByTime(3000);  //快进三秒 可以任意快进时间

jest.runOnlyPendingTimers(); //调用只在队列中的定时器