import { useOnClick } from './useOnClick'
import { useAppendRemove } from './useAppendRemove'
import { useEscape } from './useEscape'

export const EventListeners: React.FC<{
    xModalWrapper: HTMLDivElement
    onCancel: () => void
    cancelOnEscape: boolean
}> = ({ xModalWrapper, onCancel, cancelOnEscape }) => {
    useAppendRemove(xModalWrapper)
    useOnClick(xModalWrapper, onCancel)
    useEscape(xModalWrapper, onCancel, cancelOnEscape)
    return null
}
