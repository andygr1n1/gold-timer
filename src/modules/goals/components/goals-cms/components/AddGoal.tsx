import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { observer } from 'mobx-react-lite'

export const AddGoal: React.FC = observer(() => {
    return (
        <div className='opacity-70'>
            <StyledButton
                startIcon={<IconNew width={24} height={24} />}
                onClick={() =>
                    selectedGoalAtom$.set(selectedGoalAtom, {
                        id: crypto.randomUUID(),
                        is_edit: true,
                        is_new: true,
                    })
                }
                className=''
                variant='text'
            >
                Add goal
            </StyledButton>
        </div>
    )
})
