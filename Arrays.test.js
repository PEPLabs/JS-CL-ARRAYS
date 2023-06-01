
/**
 * @jest-environment jsdom
 */
const {arr, arrLength, arrPop, arrPush} = require('./Arrays')


test ('find array length', () =>{
    expect(arrLength()).toBe(0)
})

test ('add to Array', () =>{
    arrPush(1)
    expect(arr).toEqual(expect.arrayContaining([1]))
})