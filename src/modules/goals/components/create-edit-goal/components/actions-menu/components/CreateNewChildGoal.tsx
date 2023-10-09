import { useGoalsStore } from '@/StoreProvider'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const CreateNewChildGoal: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null
    const { createNewChild } = new_goal

    return (
        <StyledButton
            onClick={createNewChild}
            size={'custom'}
            className='h-7 w-10  opacity-70 hover:opacity-100  md:h-10 md:w-14'
        >
            <Icon icon='bxs:layer-plus' width={24} height={24} />
        </StyledButton>
    )
})
