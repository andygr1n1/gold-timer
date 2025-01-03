import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import type { IInvitationEditorSchema } from '@/modules/wedding-story-admin/services/types'

export const GuestNameInput: React.FC<{ type: 'name1' | 'name2' }> = ({ type }) => {
    const formikContext = useFormikContext<IInvitationEditorSchema>()

    return (
        <div>
            <FormLabel title={`${type === 'name1' ? 'First guest name *' : 'Second guest name'}`} />
            <XInput
                data-testid={`guest-name-input-${type}`}
                autoFocus={type === 'name1'}
                value={formikContext.values[type]}
                name={type}
                onChange={formikContext.handleChange}
                error={formikContext.touched[type] && Boolean(formikContext.errors[type])}
                errorMessage={formikContext.errors[type]}
            />
        </div>
    )
}
