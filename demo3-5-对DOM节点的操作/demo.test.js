import $ from 'jquery';
import addDivToBody from './demo';

test('测试 addDivToBody', () => {
    addDivToBody();
    console.log() ;
    expect($('body').find('div').length).toBe(1);
})