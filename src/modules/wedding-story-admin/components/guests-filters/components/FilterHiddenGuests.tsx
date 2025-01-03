import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { selectHidden } from '@/modules/wedding-story-admin/services/weddingStoryFiltersSlice'
import { useAppDispatch } from '@/store/useRootStore'
import { updateField } from '@/modules/wedding-story-admin/services/weddingStoryFiltersSlice'
import { useAppSelector } from '@/store/useRootStore'
import { Checkbox } from 'antd'
import { observer } from 'mobx-react-lite'

export const FilterHiddenGuests = observer(() => {
    const hidden = useAppSelector(selectHidden)
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(updateField({ field: 'hidden', value: !hidden }))
    }
    return (
        <XMenuItem className='w-fit'>
            <StyledButton className='w-fit' variant='text' size='small' onClick={onClick}>
                <Checkbox checked={hidden}>Hidden</Checkbox>
            </StyledButton>
        </XMenuItem>
    )
})
