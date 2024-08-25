import { observer } from 'mobx-react-lite'
import { StyledButton } from '@/components/buttons/StyledButton'
import { cn } from '@/helpers/cn'
import { IconFolder } from '@/assets/icons'

export const LabelFiltersSelectButton: React.FC = observer(() => {
    return (
        <StyledButton
            startIcon={<IconFolder className='w-5 h-5' />}
            className={cn('!border-blue-600/20 hover:!bg-blue-600/20')}
            variant='outlined'
        />
    )
})
