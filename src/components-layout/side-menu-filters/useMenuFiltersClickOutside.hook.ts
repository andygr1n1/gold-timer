import { useSideMenuStore } from '@/StoreProvider'
import { MutableRefObject, useEffect } from 'react'

export const useMenuFiltersClickOutside = (ref: MutableRefObject<HTMLDivElement | null>) => {
    const {
        sprints_side_menu: { visible, onChangeField },
    } = useSideMenuStore()
    useEffect(() => {
        function handleClickOutside(event: { target: EventTarget | null }) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onChangeField('visible', false)
            }
        }
        visible && document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, visible])
}
