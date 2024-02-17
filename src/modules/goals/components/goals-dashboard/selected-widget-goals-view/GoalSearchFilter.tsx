import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { filterGoalAtom_search } from '@/modules/goals/stores/filterGoal.store'
import { useAtom } from 'jotai'

export const GoalSearchFilter: React.FC = () => {
    const [_filterGoalAtom_search, _setFilterGoalAtom_search] = useAtom(filterGoalAtom_search)
    return (
        <div className='mx-auto mb-10 w-full max-w-sm'>
            <FormLabel title='Search:' />
            <XInput
                type='text'
                autoFocus={false}
                value={_filterGoalAtom_search}
                onChange={(e) => _setFilterGoalAtom_search(e.target.value)}
                className='max-w-md'
            />
        </div>
    )
}
