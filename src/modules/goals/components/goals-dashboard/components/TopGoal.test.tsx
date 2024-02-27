import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { TopGoal } from './TopGoal'
import { test_data_todayGoal } from '@/modules/goals/tests/testData'
import { calculateIsExpired } from '@/modules/goals/helpers/optimizeActiveGoalsData'

describe('TopGoal', () => {
    it('Renders Active TopGoal', () => {
        expect(calculateIsExpired(test_data_todayGoal())).toBe(false)
        render(<TopGoal goal={test_data_todayGoal()} />)
    })
})
