import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useGuestsFilters$ } from '@/modules/wedding-story-admin/mst/guestsFilters.provider'
import { Checkbox } from 'antd'
import { observer } from 'mobx-react-lite'

export const FilterVisibleGuests = observer(() => {
    const { visible, onChangeField } = useGuestsFilters$()
    return (
        <XMenuItem className='w-fit'>
            <StyledButton
                className='w-fit'
                variant='text'
                size='small'
                onClick={() => {
                    onChangeField('visible', !visible)
                }}
            >
                <Checkbox checked={visible}>Visible</Checkbox>
            </StyledButton>
        </XMenuItem>
    )
})
