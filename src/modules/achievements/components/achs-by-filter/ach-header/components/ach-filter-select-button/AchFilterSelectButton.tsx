import { observer } from 'mobx-react-lite'
import { StyledButton } from '@/components/buttons/StyledButton'
import { ActiveFilterIcon } from './ActiveFilterIcon'
import { cn } from '@/helpers/cn'
import { useGetAchParamsFilter } from './useGetAchParamsFilter'

export const AchFilterSelectButton: React.FC = observer(() => {
    const { isAll, isFavorite, isDeleted } = useGetAchParamsFilter()
    return (
        <StyledButton
            startIcon={<ActiveFilterIcon />}
            // onClick={ }
            className={cn(
                isAll && '!border-sky-400 hover:!bg-sky-400/20',
                isFavorite && '!border-rose-500 hover:!bg-rose-500/20',
                isDeleted && '!border-slate-500 hover:!bg-slate-500/20',
            )}
            variant='outlined'
        />
    )
})
