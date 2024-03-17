# Tools

1. Vitest
2. Testing library <https://testing-library.com>

    ## Packages:

-   @testing-library/jest-dom
-   @testing-library/react
-   @testing-library/user-event
-   vitest
-   jest
-   jsdom

    ## Rules:

-   Test everything in isolation

    ## Examples:

```
    import { describe, it, expect } from 'vitest'
    import { render, screen } from '@testing-library/react'
    import { AvatarContainer } from './AvatarContainer'

    describe('AvatarContainer', () => {
        it('checks that React Component is being rendered', () => {
            render(<AvatarContainer avatar='' />)
            screen.debug()
            expect(screen.getAllByTestId('icon-avatar')[0].tagName).toBe('svg')
        })
    })
```
