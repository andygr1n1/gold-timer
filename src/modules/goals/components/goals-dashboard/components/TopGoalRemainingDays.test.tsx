import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { test_data_todayGoal } from '@/modules/goals/tests/testData'
import { TopGoalRemainingDays } from './TopGoalRemainingDays'

describe('TopGoalRemainingDays', () => {
    it('ACtive Top Goal has a bell icon as remaining days information', () => {
        render(<TopGoalRemainingDays goal={test_data_todayGoal()} />)
        expect(screen.getByTestId('topGoal__remainingDays').innerHTML.includes('svg'))
    })
})
