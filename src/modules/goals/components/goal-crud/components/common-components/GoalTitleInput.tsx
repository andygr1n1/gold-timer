import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

export const GoalTitleInput: React.FC<{ value?: string; view_mode?: boolean; onChange?: (value: string) => void }> =
    observer(({ view_mode = false, onChange, value = '' }) => {
        const [error, setError] = useState(false)

        return (
            <div>
                <FormLabel title='Title' />
                <XInput
                    data-testid='goal-title-input'
                    error={error}
                    errorMessage='Required field'
                    disabled={view_mode}
                    readOnly={view_mode}
                    value={value}
                    autoFocus={true}
                    onBlur={() => {
                        setError(!!!value.length)
                    }}
                    onChange={(e) => {
                        onChange?.(e.target.value)
                        setError(!!!e.target.value.length)
                    }}
                />
            </div>
        )
    })
