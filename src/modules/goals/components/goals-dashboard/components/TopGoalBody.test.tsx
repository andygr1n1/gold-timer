import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TopGoalBody } from './TopGoalBody'
import { test_data_todayGoal } from '@/modules/goals/tests/testData'

describe('TopGoal', () => {
    it('ACtive Top Goal has blue body: bg-blue-700', () => {
        const handleClick = vi.fn()
        render(<TopGoalBody goal={test_data_todayGoal()} onRightClick={handleClick} selectGoal={handleClick} />)
        expect(screen.getByTestId('topGoal__body').classList.contains('bg-blue-700')).toBe(true)
    })
    it('It should emit selecting', () => {
        const handleClick = vi.fn()
        render(<TopGoalBody goal={test_data_todayGoal()} onRightClick={handleClick} selectGoal={handleClick} />)
        fireEvent.click(screen.getByTestId('topGoal__body'))
        expect(handleClick).toHaveBeenCalledOnce()
        // screen.debug()
    })
})
