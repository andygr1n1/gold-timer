import { useEffect } from 'react'
import { last } from 'lodash-es'

export const useEscape = (xModalWrapper: HTMLDivElement, onCancel: () => void, cancelOnEscape: boolean) => {
    useEffect(() => {
        if (!cancelOnEscape) return
        const onKeyDownEvent = (e: KeyboardEvent) => {
            const layerLevel = xModalWrapper.getAttribute('layer')
            const highestLayerLevel = last(
                document.getElementById('root')!.querySelectorAll('.x-modal-wrapper-root'),
            )?.getAttribute('layer')

            if (layerLevel === highestLayerLevel && e?.key === 'Escape') {
                e?.key === 'Escape' && onCancel()
            }
        }

        document.addEventListener('keyup', onKeyDownEvent)

        return () => {
            document.getElementById('root')!.querySelectorAll('.x-modal-wrapper-root').length <= 1 &&
                document.removeEventListener('keyup', onKeyDownEvent)
        }
    }, [])
}
