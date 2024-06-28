import { IconInfinity } from '@/assets/icons/IconInfinity'
import { useGoalRitual$ } from '../../../stores/goal-ritual-store/useGoalRitual.store'
import { cn } from '@/helpers/cn'
import { GoalRitualEditMode } from './goal-ritual-edit-mode/GoalRitualEditMode'

export const GoalRitualNewMode: React.FC = () => {
    const { toggleRitualize, ritualize } = useGoalRitual$()

    return (
        <div>
            <div className='mx-auto h-fit w-fit my-10'>
                <IconInfinity
                    className={cn(
                        'w-12 h-12 opacity-50 hover:opacity-100 duration-300 cursor-pointer text-teal-500',
                        ritualize && 'opacity-100',
                    )}
                    onClick={() => toggleRitualize()}
                />
            </div>
            {ritualize && <GoalRitualEditMode />}
        </div>
    )
}
