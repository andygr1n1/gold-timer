import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { IGoal$ } from '@/modules/goals/mst/types'
import { observer } from 'mobx-react-lite'

export const GoalSloganInput: React.FC<{ goal: IGoal$; hide?: boolean; view_mode?: boolean }> = observer(
    ({ goal, hide = false, view_mode = false }) => {
        const { slogan, onChangeField } = goal
        return !hide ? (
            <div>
                <FormLabel title='Slogan' />
                <XInput
                    value={slogan}
                    onChange={(e) => onChangeField('slogan', e.target.value)}
                    readOnly={view_mode}
                    disabled={view_mode}
                />
            </div>
        ) : null
    },
)
