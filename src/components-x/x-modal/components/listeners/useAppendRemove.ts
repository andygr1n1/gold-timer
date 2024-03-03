import { useEffect } from 'react'

export const useAppendRemove = (xModalElement: HTMLDivElement) => {
    useEffect(() => {
        const allActiveDialogsLength = document
            .getElementById('root')!
            .getElementsByClassName('x-modal-wrapper-root').length
        // *
        // setup z-Index
        xModalElement.classList.add('x-modal-wrapper-root')
        xModalElement.style.zIndex = `100${allActiveDialogsLength + 1}`
        // *
        // setup layer
        xModalElement.setAttribute('layer', String(allActiveDialogsLength + 1))

        const legacyParent = xModalElement.parentNode

        document.getElementById('root')?.appendChild(xModalElement)

        return () => {
            // document.getElementById('root')?.removeChild(xModalElement)
            xModalElement.classList.remove('x-modal-wrapper-root')
            legacyParent?.appendChild(xModalElement)
        }
    }, [])
}
