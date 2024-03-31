import { StyledButton } from '@/components/buttons/StyledButton'
import { selectedGoalAtom, selectedGoalAtom$ } from '../../../stores/selectedGoal.store'
import { IconNew } from '@/assets/icons'

export const CreateGoalAction: React.FC = () => {
    return (
        <div className='absolute-center flex  w-full flex-col items-center justify-center gap-2 self-center text-gray-500'>
            <StyledButton
                variant='text'
                className='!h-[64px]  opacity-70'
                onClick={() =>
                    selectedGoalAtom$.set(selectedGoalAtom, {
                        id: crypto.randomUUID(),
                        is_edit: true,
                        is_new: true,
                    })
                }
                startIcon={<IconNew width={64} height={64} className=' group-hover:text-amber-500' />}
            />
            <span className='text-cText cursor-default opacity-70'>Create goal</span>
        </div>
    )
}
