import { observer } from 'mobx-react-lite'
import { StyledButton } from '@/components/buttons/StyledButton'
import { ActiveFilterIcon } from './ActiveFilterIcon'
import { cn } from '@/helpers/cn'
import { useGetNotesParamsFilter } from '../../hooks/useGetNotesParamsFilter'

export const NotesFiltersSelectButton: React.FC = observer(() => {
    const { isFavorite, isDeleted, isArchived } = useGetNotesParamsFilter()
    return (
        <StyledButton
            startIcon={<ActiveFilterIcon />}
            // onClick={ }
            className={cn(
                isFavorite && '!border-rose-500 hover:!bg-rose-500/20',
                isArchived && '!border-violet-500 hover:!bg-violet-500/20',
                isDeleted && '!border-slate-500 hover:!bg-slate-500/20',
            )}
            variant='outlined'
        />
    )
})
