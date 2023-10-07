import { useGoalsStore } from '@/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { observer } from 'mobx-react-lite'

export const GoalSloganInput: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    if (!new_goal) return null

    const { slogan, onChangeField, view_mode } = new_goal
    if (view_mode && !slogan.length) return null
    return (
        <div>
            <FormLabel title='Slogan' />
            <XInput
                readOnly={view_mode}
                disabled={view_mode}
                value={slogan}
                onChange={(e) => onChangeField('slogan', e.target.value)}
            />
        </div>
    )
})
