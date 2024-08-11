import { XInput } from '@/components-x/x-input/XInput'
import { IconSearch } from '@/assets/icons/IconSearch'
import { useEffect } from 'react'
import { useGoalsFilters } from '../stores/useGoalsFilters.store'

export const SearchGoalsInput = () => {
    const { store, onChange, onChangeServerSearchInput } = useGoalsFilters()

    useEffect(() => {
        return () => {
            onChangeServerSearchInput.cancel()
        }
    }, [])

    return (
        <XInput
            type='text'
            autoFocus={false}
            value={store.searchInput}
            onChange={onChange}
            startIcon={<IconSearch className='text-slate-500/50' width={20} height={20} />}
            placeholder='Search'
            width='!max-w-[600px] !w-full'
        />
    )
}
