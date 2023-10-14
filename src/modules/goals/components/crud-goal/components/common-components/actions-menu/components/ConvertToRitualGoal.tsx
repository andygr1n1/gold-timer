import { useGoalsStore } from '@/StoreProvider'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IGoal$ } from '@/modules/goals/mst/types'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const ConvertToRitualGoal: React.FC<{ goal: IGoal$; hide?: boolean }> = observer(({ goal, hide = false }) => {
    const { openCreateRitualMode } = useGoalsStore()

    return !hide ? (
        <>
            <StyledButton
                id='createNewRitual'
                size={'custom'}
                className='h-7 w-10 opacity-70 hover:opacity-100 md:h-10 md:w-14 '
                onClick={() => openCreateRitualMode(goal.id)}
            >
                <Icon icon='icon-park-outline:auto-focus' width={24} height={24} />
            </StyledButton>
            <XTooltip anchorSelect='#createNewRitual'>Convert this goal to a ritual</XTooltip>
        </>
    ) : null
})
