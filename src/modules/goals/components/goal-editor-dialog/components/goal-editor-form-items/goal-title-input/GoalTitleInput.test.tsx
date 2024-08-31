import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GoalTitleInput } from './GoalTitleInput'
import userEvent from '@testing-library/user-event'

describe('GoalTitleInput', () => {
    it('initially has an empty value', () => {
        render(<GoalTitleInput />)
        expect(screen.getByTestId('goal-title-input')).toHaveValue('')
    })
    it('user is typing', async () => {
        const user = userEvent.setup()
        render(<GoalTitleInput />)
        await user.type(screen.getByTestId('goal-title-input'), 'test')

        // Trigger an onBlur event by tabbing away or directly with blur
        await user.tab()
    })
})
