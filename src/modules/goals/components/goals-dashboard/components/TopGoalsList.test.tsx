import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopGoalsList } from './TopGoalsList'
import { test_data_TodayGoals } from '../../../tests/testData'

describe('TopGoalsList', () => {
    it('Renders TopGoalsList of 4 goals', () => {
        render(<TopGoalsList goals={test_data_TodayGoals()} />)
        expect(screen.getAllByTestId('topGoal').length).toBe(4)
    })
})
