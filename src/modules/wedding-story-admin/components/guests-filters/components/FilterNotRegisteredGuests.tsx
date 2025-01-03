import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { selectNotRegistered, updateField } from '@/modules/wedding-story-admin/services/weddingStoryFiltersSlice'
import { useAppDispatch, useAppSelector } from '@/store/useRootStore'
import { Checkbox } from 'antd'

export const FilterNotRegisteredGuests = () => {
    const notRegistered = useAppSelector(selectNotRegistered)
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(updateField({ field: 'notRegistered', value: !notRegistered }))
    }
    return (
        <XMenuItem className='w-fit'>
            <StyledButton className='w-fit' variant='text' size='small' onClick={onClick}>
                <Checkbox checked={notRegistered}>Not Registered</Checkbox>
            </StyledButton>
        </XMenuItem>
    )
}
