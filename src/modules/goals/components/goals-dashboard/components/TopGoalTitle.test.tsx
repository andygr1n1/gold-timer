import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopGoalTitle } from './TopGoalTitle'

describe('TopGoalTitle', () => {
    it('ACtive Top Goal has title: Today Goal', () => {
        render(<TopGoalTitle title={'Today Goal'} />)

        expect(screen.getByTestId('topGoal__title').innerHTML).toBe('Today Goal')
    })
})
