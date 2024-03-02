import { useEffect } from 'react'

export const useOnClick = (xModalElement: HTMLDivElement, onCancel: () => void) => {
    useEffect(() => {
        const onClickEvent = (e: MouseEvent) => {
            if (e.target instanceof HTMLElement) {
                xModalElement.focus()
                if (!e.target?.closest('.x-modal-body')) {
                    onCancel()
                }
            }
        }

        xModalElement.addEventListener('click', onClickEvent)

        return () => {
            xModalElement.removeEventListener('click', onClickEvent)
        }
    }, [])
}
