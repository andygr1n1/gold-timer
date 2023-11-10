import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import clsx from 'clsx'

import { StyledButton } from '@/components/buttons/StyledButton'
import { GoalsFavorites } from './GoalsFavorites'
import { GoalsDeleted } from './GoalsDeleted'
export const GoalsFilters: React.FC = observer(() => {
    const {
        goals_filter$: { addStatusFilter, isStatusActive, goalsStatusRender },
    } = useGoalsStore()

    return (
        <div className='-ml-8 flex flex-col flex-wrap gap-5 md:flex-row'>
            {goalsStatusRender.map((status) => (
                <StyledButton
                    variant='text'
                    onClick={() => {
                        addStatusFilter(status)
                    }}
                    key={status}
                    className={clsx(
                        `text-cText min-w-[100px] cursor-pointer capitalize duration-300 hover:text-blue-600`,
                        isStatusActive(status) && '!text-blue-600',
                    )}
                >
                    {status}
                </StyledButton>
            ))}
            <GoalsFavorites />
            <GoalsDeleted />
        </div>
    )
})
