import { MutableRefObject, useEffect } from 'react'
import { MEDIA_QUERY_VALUES_ENUM } from './useMatchMedia.hook'

export const useOutsideAlerter = (
    ref: MutableRefObject<HTMLDivElement | null>,
    callback: () => void,
    isLargeDesktop?: MEDIA_QUERY_VALUES_ENUM,
) => {
    useEffect(() => {
        function handleClickOutside(event: { target: EventTarget | null }) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback()
            }
        }
        !isLargeDesktop && document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, isLargeDesktop])
}

export const useClickOutside = (
    ref: MutableRefObject<HTMLDivElement | null>,
    action: (outsideClick: boolean) => void,
) => {
    useEffect(() => {
        function handleClickOutside(event: { target: EventTarget | null }) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                action(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
}
