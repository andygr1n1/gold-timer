import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { selectNotCheckedIn, updateField } from '@/modules/wedding-story-admin/services/weddingStoryFiltersSlice'
import { useAppDispatch, useAppSelector } from '@/store/useRootStore'
import { Checkbox } from 'antd'
import { observer } from 'mobx-react-lite'

export const FilterNotCheckedInGuests = observer(() => {
    const notCheckedIn = useAppSelector(selectNotCheckedIn)
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(updateField({ field: 'notCheckedIn', value: !notCheckedIn }))
    }

    return (
        <XMenuItem className='w-fit'>
            <StyledButton className='w-fit' variant='text' size='small' onClick={onClick}>
                <Checkbox checked={notCheckedIn}>Not Checked In</Checkbox>
            </StyledButton>
        </XMenuItem>
    )
})
