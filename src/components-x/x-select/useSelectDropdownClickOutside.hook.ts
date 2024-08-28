import { type MutableRefObject, useEffect } from 'react'

export const useSelectDropdownClickOutside = (options: {
    childRef: MutableRefObject<HTMLDivElement | null>
    childAction: () => void
    inputAction: () => void
}) => {
    const { childRef, childAction, inputAction } = options

    useEffect(() => {
        function handleClickOutside(event: { target: EventTarget | null }) {
            const classNames = ['input-select', 'input-icon', 'xinput', 'x-select-icon']
            if (classNames.some((className) => (event.target as Element).classList.contains(className))) {
                inputAction()
            } else if (childRef?.current && !childRef?.current.contains(event.target as Node)) {
                childAction()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [childRef])
}
