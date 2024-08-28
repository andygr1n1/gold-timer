import { useRef } from 'react'
import { type IXModal } from './types'
import { cn } from '@/helpers/cn'
import { XModalCustomBody } from './components/XModalCustomBody'
import { XModalBody } from './components/XModalBody'
import { EventListeners } from './components/listeners/EventListeners'

export const XModal: React.FC<IXModal> = ({ cancelOnEscape = true, onCancel, ...props }) => {
    const xModalWrapper = useRef<HTMLDivElement | null>(null)
    const xModalBody = useRef<HTMLDivElement | null>(null)

    const onClose = () => {
        xModalWrapper.current?.classList.add('animate-opacity-reverse-sm')
        xModalBody.current?.classList.add('animate-opacity-reverse-xs', 'opacity-0')
        setTimeout(() => {
            onCancel()
            xModalWrapper.current?.classList.remove('animate-opacity-reverse-sm')
            xModalBody.current?.classList.remove('animate-opacity-reverse-xs', 'opacity-0')
        }, 300)
    }

    return (
        <div className={cn('x-modal-wrapper', 'absolute')} ref={xModalWrapper}>
            {props.open && xModalWrapper?.current && (
                <div ref={xModalBody} className={cn('fixed inset-0 animate-opacity-3 bg-gray-900/50 bg-opacity-90')}>
                    {props.open ? (
                        props.customBody ? (
                            <XModalCustomBody {...props} onCancel={onClose} />
                        ) : (
                            <XModalBody {...props} onCancel={onClose} />
                        )
                    ) : null}
                    <EventListeners
                        xModalWrapper={xModalWrapper.current}
                        onCancel={onClose}
                        cancelOnEscape={cancelOnEscape}
                    />
                </div>
            )}
        </div>
    )
}
