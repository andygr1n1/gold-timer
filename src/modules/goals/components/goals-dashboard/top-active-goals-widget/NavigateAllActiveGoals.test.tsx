import { describe, it, vi } from 'vitest'
import { render /* , screen  */ } from '@testing-library/react'
import { NavigateAllActiveGoals } from './NavigateAllActiveGoals'
import { afterEach, beforeEach } from 'node:test'

describe('NavigateAllActiveGoals Icon', () => {
    beforeEach(() => {
        vi.mock('react-router-dom', () => {
            return { useNavigate: () => vi.fn() }
        })
    })

    afterEach(() => {
        vi.clearAllMocks()
    })

    it('Render NavigateAllActiveGoals ', () => {
        render(<NavigateAllActiveGoals />)
        // screen.debug()
    })
})
