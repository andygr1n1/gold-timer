import { useState } from 'react'

export const useTogglePopoverState = () => {
    const [popoverState, setPopoverState] = useState(false)

    return { popoverState, setPopoverState }
}
