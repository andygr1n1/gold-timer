import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { IGoal$ } from '@/modules/goals/mst/types'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

export const GoalTitleInput: React.FC<{ goal: IGoal$; view_mode?: boolean }> = observer(
    ({ goal, view_mode = false }) => {
        const [error, setError] = useState(false)

        const { title, onChangeField } = goal

        useEffect(() => {
            return setError(false)
        }, [goal?.id])

        return (
            <div>
                <FormLabel title='Title' />
                <XInput
                    error={error}
                    errorMessage='Required field'
                    disabled={view_mode}
                    readOnly={view_mode}
                    value={title}
                    autoFocus={true}
                    onBlur={() => {
                        setError(!!!title.length)
                    }}
                    onChange={(e) => {
                        onChangeField('title', e.target.value)
                        setError(!!!e.target.value.length)
                    }}
                />
            </div>
        )
    },
)
