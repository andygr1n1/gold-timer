import { describe, expect, it } from 'vitest'
import { calculateIsFromFuture } from '../helpers/optimizeActiveGoalsData'
import { expiredGoal, futureGoal, todayGoal } from './testData'

describe('#GoalIsFromFuture', () => {
    it('Returns true because the date is tomorrow', () => {
        expect(calculateIsFromFuture(futureGoal())).toBe(true)
    })
    it('Returns false because the date is yesterday', () => {
        expect(calculateIsFromFuture(expiredGoal())).toBe(false)
    })
    it('Returns false because the date is today', () => {
        expect(calculateIsFromFuture(todayGoal())).toBe(false)
    })
})
