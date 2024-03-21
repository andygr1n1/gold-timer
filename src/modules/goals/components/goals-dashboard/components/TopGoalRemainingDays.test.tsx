import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { test_data_todayGoal } from '@/modules/goals/tests/testData'
import { TopGoalRemainingDays } from './TopGoalRemainingDays'
import * as optimizeActiveGoalsData from '@/modules/goals/helpers/optimizeActiveGoalsData'

describe('TopGoalRemainingDays', () => {
    it('ACtive Top Goal has a bell icon as remaining days information', () => {
        render(<TopGoalRemainingDays goal={test_data_todayGoal()} />)
        expect(screen.getByTestId('topGoal__remainingDays').innerHTML.includes('svg'))
    })
    it('it spies on calculateIsExpired', () => {
        const spy = vi.spyOn(optimizeActiveGoalsData, 'calculateIsExpired')
        render(<TopGoalRemainingDays goal={test_data_todayGoal()} />)
        expect(spy).toHaveBeenCalled()
    })
})
