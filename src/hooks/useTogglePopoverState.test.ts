import { describe, expect, it } from 'vitest'
import { renderHook, act } from '@testing-library/react-hooks'
import { useTogglePopoverState } from './useTogglePopoverState.hook'

describe('useTogglePopoverState', () => {
    it('should initialize with false', () => {
        const { result } = renderHook(() => useTogglePopoverState())

        expect(result.current.popoverState).toBe(false)
    })

    it('should toggle the state', () => {
        const { result } = renderHook(() => useTogglePopoverState())

        act(() => {
            result.current.setPopoverState(!result.current.popoverState)
        })

        expect(result.current.popoverState).toBe(true)

        act(() => {
            result.current.setPopoverState(!result.current.popoverState)
        })

        expect(result.current.popoverState).toBe(false)
    })
})
