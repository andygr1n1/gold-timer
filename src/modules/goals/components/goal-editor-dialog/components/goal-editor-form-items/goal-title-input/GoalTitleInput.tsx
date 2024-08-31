import { XInput, type XInputProps } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { cn } from '@/helpers/cn'

export const GoalTitleInput: React.FC<XInputProps> = ({ readOnly, value, onChange, error, errorMessage }) => {
    return (
        <div>
            <FormLabel title={cn('Title', !readOnly && ' *')} />
            <XInput
                data-testid='goal-title-input'
                disabled={readOnly}
                readOnly={readOnly}
                autoFocus={true}
                value={value}
                name='title'
                onChange={onChange}
                error={error}
                errorMessage={errorMessage}
            />
        </div>
    )
}
