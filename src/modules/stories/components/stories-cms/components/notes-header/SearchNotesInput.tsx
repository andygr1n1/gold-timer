import { XInput } from '@/components-x/x-input/XInput'
import { IconSearch } from '@/assets/icons/IconSearch'
import { useEffect, useMemo } from 'react'
import { debounce } from 'lodash-es'
import { useNotes$ } from '../../mst/provider'
import { observer } from 'mobx-react-lite'

export const SearchNotesInput = observer(() => {
    const { onChangeSSI, searchInput, onChangeInput } = useNotes$()

    const onChangeServerSearchInput = useMemo(() => {
        return debounce((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            onChangeSSI({ value: e.target.value })
        }, 1000)
    }, [])

    useEffect(() => {
        return () => {
            onChangeServerSearchInput.cancel()
        }
    }, [])

    return (
        <XInput
            type='text'
            autoFocus={false}
            value={searchInput}
            onChange={(e) => {
                onChangeInput({ value: e.target.value })
                onChangeServerSearchInput(e)
            }}
            startIcon={<IconSearch className='text-slate-500/50' width={20} height={20} />}
            placeholder='Search'
            width='!max-w-[600px] !w-full'
        />
    )
})
