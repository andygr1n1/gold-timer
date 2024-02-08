import { StyledButton } from '@/components/buttons/StyledButton'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { IconInfinity } from '@/assets/icons/IconInfinity'

export const NewRitualGoal: React.FC<{ goalId?: string }> = ({ goalId }) => {
    if (!goalId) return null
    return (
        <>
            <StyledButton
                id='create-ritual'
                variant={'text'}
                size={'custom'}
                className='group absolute -right-4 bottom-[5px] scale-90 cursor-pointer !text-teal-600 hover:scale-100 hover:!text-teal-500'
                startIcon={
                    <IconInfinity
                        width={34}
                        height={34}
                        className='group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'
                    />
                }
                onClick={() => {
                    selectedGoalAtom$.set(selectedGoalAtom, {
                        id: goalId,
                        is_edit: true,
                        is_new: false,
                        is_new_ritual: true,
                        is_redirect_from_view_mode: true,
                    })
                }}
            />
        </>
    )
}
