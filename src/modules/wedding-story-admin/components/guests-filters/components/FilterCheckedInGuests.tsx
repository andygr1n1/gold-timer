import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { selectCheckedIn, updateField } from '@/modules/wedding-story-admin/services/weddingStoryFiltersSlice'
import { useAppDispatch, useAppSelector } from '@/store/useRootStore'
import { Checkbox } from 'antd'

export const FilterCheckedInGuests = () => {
    const checkedIn = useAppSelector(selectCheckedIn)
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(updateField({ field: 'checkedIn', value: !checkedIn }))
    }

    return (
        <XMenuItem className='w-fit'>
            <StyledButton className='w-fit' variant='text' size='small' onClick={onClick}>
                <Checkbox checked={checkedIn}>Checked In</Checkbox>
            </StyledButton>
        </XMenuItem>
    )
}
