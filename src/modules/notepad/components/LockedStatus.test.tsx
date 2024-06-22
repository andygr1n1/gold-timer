import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { LockedStatus } from './LockedStatus'

// mock will be always hoisted to the top of the file
vi.mock('../service/useFetchLockedStatus', () => {
    return { useFetchLockedStatus: () => ({ isLocked: false, isLoading: false }) }
})
vi.mock('../service/useMutateLockedStatus', () => {
    return {
        useMutateLockedStatus: () => ({
            mutate: (/* variables: { locked: boolean } */) => {
                // console._('mutate->', variables.locked)
            },
        }),
    }
})

describe('LockedStatus', () => {
    it('Renders LockedStatus component', async () => {
        const user = userEvent.setup()
        const handleClick = vi.fn()
        render(<LockedStatus isLocked={false} onClick={handleClick} />)

        await user.click(screen.getByTestId('toggle-lock'))
        expect(handleClick).toHaveBeenCalledOnce()
    })
})
