import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import type { IInvitationEditorSchema } from '@/modules/wedding-story-admin/services/types'

export const GuestSurnameInput: React.FC<{ type: 'surname1' | 'surname2' }> = ({ type }) => {
    const formikContext = useFormikContext<IInvitationEditorSchema>()

    return (
        <div>
            <FormLabel title={`${type === 'surname1' ? 'First guest surname' : 'Second guest surname'}`} />
            <XInput
                data-testid={`guest-surname-input-${type}`}
                value={formikContext.values[type]}
                name={type}
                onChange={formikContext.handleChange}
                error={formikContext.touched[type] && Boolean(formikContext.errors[type])}
                errorMessage={formikContext.errors[type]}
            />
        </div>
    )
}
