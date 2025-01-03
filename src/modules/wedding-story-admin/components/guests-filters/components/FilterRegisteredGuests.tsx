import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { selectRegistered, updateField } from '@/modules/wedding-story-admin/services/weddingStoryFiltersSlice'
import { useAppDispatch, useAppSelector } from '@/store/useRootStore'
import { Checkbox } from 'antd'

export const FilterRegisteredGuests = () => {
    const registered = useAppSelector(selectRegistered)
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(updateField({ field: 'registered', value: !registered }))
    }
    return (
        <XMenuItem className='w-fit'>
            <StyledButton className='w-fit' variant='text' size='small' onClick={onClick}>
                <Checkbox checked={registered}>Registered</Checkbox>
            </StyledButton>
        </XMenuItem>
    )
}
