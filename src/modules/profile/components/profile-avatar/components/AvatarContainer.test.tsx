import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AvatarContainer } from './AvatarContainer'

describe('AvatarContainer', () => {
    it('checks that React Component is being rendered', () => {
        render(<AvatarContainer avatar='' />)
        expect(screen.getAllByTestId('icon-avatar')[0]?.tagName).toBe('svg')
    })
})
