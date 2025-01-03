import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { selectVisible, updateField } from '@/modules/wedding-story-admin/services/weddingStoryFiltersSlice'
import { useAppDispatch, useAppSelector } from '@/store/useRootStore'
import { Checkbox } from 'antd'

export const FilterVisibleGuests = () => {
    const visible = useAppSelector(selectVisible)
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(updateField({ field: 'visible', value: !visible }))
    }
    return (
        <XMenuItem className='w-fit'>
            <StyledButton className='w-fit' variant='text' size='small' onClick={onClick}>
                <Checkbox checked={visible}>Visible</Checkbox>
            </StyledButton>
        </XMenuItem>
    )
}
