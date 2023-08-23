import { MutableRefObject, useEffect } from 'react'
import { MEDIA_QUERY_VALUES_ENUM } from './useMatchMedia.hook.'

export const useOutsideAlerter = (
    ref: MutableRefObject<HTMLDivElement | null>,
    callback: () => void,
    isDesktop?: MEDIA_QUERY_VALUES_ENUM,
) => {
    useEffect(() => {
        function handleClickOutside(event: { target: EventTarget | null }) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback()
            }
        }
        !isDesktop && document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, isDesktop])
}
