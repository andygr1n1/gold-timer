import { useGoalsStore } from '@/StoreProvider'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const UpgradeToRitualGoal: React.FC = observer(() => {
    const { new_goal, cancelGoalCreator } = useGoalsStore()
    if (!new_goal || new_goal?.isRitualGoal) return null

    return (
        <StyledButton
            size={'custom'}
            className='h-7 w-10 opacity-70 hover:opacity-100 md:h-10 md:w-14 '
            onClick={() =>
                cancelGoalCreator({
                    redirectId: new_goal.id,
                    redirectMode: 'create_ritual_mode',
                })
            }
        >
            <Icon icon='icon-park-outline:auto-focus' width={24} height={24} />
        </StyledButton>
    )
})
