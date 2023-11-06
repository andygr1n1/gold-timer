import { useGoalsStore } from '@/StoreProvider'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IGoal$ } from '@/modules/goals/mst/types'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const CreateChildGoal: React.FC<{ goal: IGoal$; hide?: boolean }> = observer(({ goal, hide = false }) => {
    const { openCreateMode } = useGoalsStore()

    return !hide ? (
        <>
            <StyledButton
                id='createNewChild'
                onClick={() => openCreateMode({ parentGoalId: goal.id })}
                size={'custom'}
                className='h-7 w-10 opacity-70 hover:opacity-100  md:h-10 md:w-14'
                variant='text'
            >
                <Icon icon='bxs:layer-plus' width={34} height={34} />
            </StyledButton>
            <XTooltip anchorSelect='#createNewChild'>Create a new goal based on current one</XTooltip>
        </>
    ) : null
})
