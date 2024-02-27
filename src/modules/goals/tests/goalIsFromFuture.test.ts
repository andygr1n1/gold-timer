import { describe, expect, it } from 'vitest'
import { calculateIsFromFuture } from '../helpers/optimizeActiveGoalsData'
import { test_data_expiredGoal, test_data_futureGoal, test_data_todayGoal } from './testData'

describe('#GoalIsFromFuture', () => {
    it('Returns true because the date is tomorrow', () => {
        expect(calculateIsFromFuture(test_data_futureGoal())).toBe(true)
    })
    it('Returns false because the date is yesterday', () => {
        expect(calculateIsFromFuture(test_data_expiredGoal())).toBe(false)
    })
    it('Returns false because the date is today', () => {
        expect(calculateIsFromFuture(test_data_todayGoal())).toBe(false)
    })
})
