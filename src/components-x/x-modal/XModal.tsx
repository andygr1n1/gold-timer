import { useRef } from 'react'
import { IXModal } from './types'
import { cn } from '@/functions'
import { XModalCustomBody } from './components/XModalCustomBody'
import { XModalBody } from './components/XModalBody'
import { EventListeners } from './components/listeners/EventListeners'

export const XModal: React.FC<IXModal> = (props) => {
    const { cancelOnEscape = true } = props
    const xModalWrapper = useRef<HTMLDivElement | null>(null)

    return (
        <>
            <div
                ref={xModalWrapper}
                className={cn(
                    'x-modal-wrapper',
                    props.open ? 'fixed' : 'hidden',
                    'w-screen h-screen inset-0 bg-gray-900 bg-opacity-90',
                )}
            >
                {props.open ? props.customBody ? <XModalCustomBody {...props} /> : <XModalBody {...props} /> : null}
            </div>
            {xModalWrapper.current && props.open && (
                <EventListeners
                    xModalWrapper={xModalWrapper.current}
                    onCancel={props.onCancel}
                    cancelOnEscape={cancelOnEscape}
                />
            )}
        </>
    )
}
