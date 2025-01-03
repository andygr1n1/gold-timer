import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import type { IInvitationEditorSchema } from '@/modules/wedding-story-admin/services/types'

export const GroupNameInput = () => {
    const formikContext = useFormikContext<IInvitationEditorSchema>()

    return (
        <div>
            <FormLabel title={`Group Name *`} />
            <XInput
                data-testid={`group-name-input`}
                autoFocus
                value={formikContext.values.groupName}
                name='groupName'
                onChange={formikContext.handleChange}
                error={formikContext.touched.groupName && Boolean(formikContext.errors.groupName)}
                errorMessage={formikContext.errors.groupName}
            />
        </div>
    )
}
