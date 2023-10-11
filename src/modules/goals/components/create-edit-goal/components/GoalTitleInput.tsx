import { useGoalsStore } from '@/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

export const GoalTitleInput: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    const [error, setError] = useState(false)
    if (!new_goal) return null

    const { title, onChangeField, view_mode } = new_goal

    useEffect(() => {
        return setError(false)
    }, [new_goal?.id])

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
})
