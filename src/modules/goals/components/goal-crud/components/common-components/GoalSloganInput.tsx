import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'

export const GoalSloganInput: React.FC<{
    value?: string
    hide?: boolean
    view_mode?: boolean
    onChange?: (value: string) => void
}> = ({ value = '', hide = false, view_mode = false, onChange }) => {
    return !hide ? (
        <div>
            <FormLabel title='Slogan' />
            <XInput
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                readOnly={view_mode}
                disabled={view_mode}
            />
        </div>
    ) : null
}
