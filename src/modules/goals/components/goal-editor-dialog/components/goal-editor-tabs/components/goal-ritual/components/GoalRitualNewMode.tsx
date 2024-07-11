import { useGoalRitual$ } from '../../../../../stores/goal-ritual-store/useGoalRitual.store'
import { GoalRitualEditMode } from './goal-ritual-edit-mode/GoalRitualEditMode'
import { Switch } from 'antd'
import { FormLabel } from '@/components/form/FormLabel'

export const GoalRitualNewMode: React.FC = () => {
    const { toggleRitualize, ritualize } = useGoalRitual$()

    return (
        <div className='flex flex-col gap-5'>
            <div className='h-fit w-fit flex gap-2 justify-center'>
                <Switch checked={ritualize} onChange={toggleRitualize} />
                <FormLabel title='Ritualize' />
            </div>
            {ritualize && <GoalRitualEditMode />}
        </div>
    )
}
