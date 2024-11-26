import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useGuestsFilters$ } from '@/modules/wedding-story-admin/mst/guestsFilters.provider'
import { Checkbox } from 'antd'
import { observer } from 'mobx-react-lite'

export const FilterNotCheckedInGuests = observer(() => {
    const { notCheckedIn, onChangeField } = useGuestsFilters$()
    return (
        <XMenuItem className='w-fit'>
            <StyledButton
                className='w-fit'
                variant='text'
                size='small'
                onClick={() => {
                    onChangeField('notCheckedIn', !notCheckedIn)
                }}
            >
                <Checkbox checked={notCheckedIn}>Not Checked In</Checkbox>
            </StyledButton>
        </XMenuItem>
    )
})
