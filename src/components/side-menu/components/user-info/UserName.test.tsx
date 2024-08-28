import { describe, expect, it } from 'vitest'
import { UserName } from './UserName'
import { render, screen } from '@testing-library/react'

describe('UserName', () => {
    it('Renders UserName component', () => {
        render(<UserName name='Test' />)
        // *
        // To see how the component is rendered
        // screen.debug()
        expect(screen.getAllByTestId('userName')[0]?.innerHTML).toBe('Test')
        expect(screen.getAllByTestId('userName')[0]?.innerHTML).toHaveLength(4)
        expect(screen.getAllByTestId('userName')[0]?.innerHTML).toEqual('Test')
    })
})
