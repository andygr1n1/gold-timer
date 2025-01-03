import { XInput } from '@/components-x/x-input/XInput'
import { selectTextValue, updateField } from '@/modules/wedding-story-admin/services/weddingStoryFiltersSlice'
import { useAppDispatch, useAppSelector } from '@/store/useRootStore'
import { observer } from 'mobx-react-lite'

export const FilterByText = observer(() => {
    const value = useAppSelector(selectTextValue)
    const dispatch = useAppDispatch()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateField({ field: 'textValue', value: e.target.value }))
    }

    return (
        <div className='w-full md:max-w-xs'>
            <XInput value={value} onChange={onChange} placeholder='Search' />
        </div>
    )
})
