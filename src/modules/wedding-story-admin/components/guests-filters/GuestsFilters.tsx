import { IconFilterBolt } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'

export const GuestsFilters: React.FC = () => {
    return (
        <div>
            <StyledButton
                size='small'
                variant='outlined'
                startIcon={<IconFilterBolt className='w-5 h-5' />}
                title='Filters'
            />
        </div>
    )
}
