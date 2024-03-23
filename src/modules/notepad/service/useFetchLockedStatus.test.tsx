import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import { useFetchLockedStatus } from './useFetchLockedStatus'
import { waitFor } from '@testing-library/dom'
import { createWrapper } from 'tests/utils'

vi.mock('./query_fetchNotepadLockedStatus', () => ({
    query_fetchNotepadLockedStatus: vi.fn(() => Promise.resolve(true)), // Simulate resolving to `true` for `isLocked`
}))

describe('useFetchLockedStatus', async () => {
    it('returns isLoading as true when data is being loaded', async () => {
        const { result } = renderHook(() => useFetchLockedStatus(), {
            wrapper: createWrapper(),
        })

        // Initially, the query might be in the loading state.
        // This check might be redundant if you're immediately waiting for a change.
        expect(result.current.isLoading).toBe(true)

        // Wait for the query to succeed.
        await waitFor(() => expect(result.current.isLocked).toBeDefined())

        // After the query succeeds, you can check the expected outcome.
        await waitFor(() => expect(result.current.isLocked).toBe(true))
    })
})

// https://github.com/TkDodo/testing-react-query/blob/main/src/tests/hooks.test.tsx
// https://tanstack.com/query/latest/docs/framework/react/guides/testing
