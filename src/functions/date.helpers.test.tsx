import { describe, expect, it } from 'vitest'
import { setMidnightTime } from './date.helpers'

describe('Converting date and time with helpers', () => {
    it('should convert to 23.59.59 not depending on UTC', async () => {
        const testStringUTCTest1 = '2024-05-12T22:59:59.059+00:00'
        const testStringUTCTest2 = '2024-05-12'
        const testStringUTCTest3 = 'Sun May 12 2024 23:59:59 GMT+0100 (Western European Summer Time)'
        const testStringUTCTest4 = 'Sun May 12 2024 12:34:07 GMT-0100'
        const testStringUTCTest5 = 'May 12 2024 17:53:02 GMT+0100 (Western European Summer Time)'
        const testStringUTCTest6 = '2024-05-11T18:22:37+01:00'
        expect(setMidnightTime(testStringUTCTest1)).toStrictEqual(new Date('2024-05-12T23:59:59.059Z'))
        expect(setMidnightTime(testStringUTCTest2)).toStrictEqual(new Date('2024-05-12T23:59:59.059Z'))
        expect(setMidnightTime(testStringUTCTest3)).toStrictEqual(new Date('2024-05-12T23:59:59.059Z'))
        expect(setMidnightTime(testStringUTCTest4)).toStrictEqual(new Date('2024-05-12T23:59:59.059Z'))
        expect(setMidnightTime(testStringUTCTest5)).toStrictEqual(new Date('2024-05-12T23:59:59.059Z'))
        expect(setMidnightTime(testStringUTCTest6)).toStrictEqual(new Date('2024-05-11T23:59:59.059Z'))
    })
})
