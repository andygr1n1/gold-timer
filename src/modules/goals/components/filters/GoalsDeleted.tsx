import { useGoalsStore } from '@/StoreProvider'
import { StyledButton } from '@/components/buttons/StyledButton'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'

export const GoalsDeleted: React.FC = observer(() => {
    const {
        goals_filter$: { show_deleted, onChangeField },
    } = useGoalsStore()

    return (
        <StyledButton
            onClick={() => {
                onChangeField('show_deleted', !show_deleted)
            }}
            variant='text'
            className={clsx(
                'min-w-[100px] !text-pink-500 hover:opacity-100',
                show_deleted ? 'opacity-100' : 'opacity-50',
            )}
        >
            Deleted
        </StyledButton>
    )
})
