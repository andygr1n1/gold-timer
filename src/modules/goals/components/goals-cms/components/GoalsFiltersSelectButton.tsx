import { observer } from 'mobx-react-lite'
import { StyledButton } from '@/components/buttons/StyledButton'
import { ActiveFilterIcon } from './ActiveFilterIcon'
import { useGetGoalsParamsFilter } from '../../../shared-hooks/useGetGoalsParamsFilter'
import { cn } from '@/helpers/cn'

export const GoalsFiltersSelectButton: React.FC = observer(() => {
    const { isExpired, isFavorite, isDeleted, isCompleted, isRitualized } = useGetGoalsParamsFilter()
    return (
        <StyledButton
            startIcon={<ActiveFilterIcon />}
            // onClick={ }
            className={cn(
                isExpired && '!border-amber-500 hover:!bg-amber-500/20',
                isFavorite && '!border-rose-500 hover:!bg-rose-500/20',
                isRitualized && '!border-teal-500 hover:!bg-teal-500/20',
                isCompleted && '!border-violet-500 hover:!bg-violet-500/20',
                isDeleted && '!border-slate-500 hover:!bg-slate-500/20',
            )}
            variant='outlined'
        />
    )
})
