import { describe, expect, it } from 'vitest'
import { test_data_todayGoal } from '@/modules/goals/tests/testData'
import { calculateIsExpired } from '@/modules/goals/helpers/optimizeActiveGoalsData'

describe('TopGoal', () => {
    it('Renders Active TopGoal', () => {
        expect(calculateIsExpired(test_data_todayGoal())).toBe(false)
    })
})
