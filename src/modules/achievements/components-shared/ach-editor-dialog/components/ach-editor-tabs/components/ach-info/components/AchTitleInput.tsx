import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import { IAchSchema } from '@/modules/achievements/services/types'
import { useAchEditor$ } from '@/modules/achievements/components-shared/ach-editor-dialog/stores/useAchEditor.store'

export const AchTitleInput = () => {
    const { viewMode } = useAchEditor$()
    const formikContext = useFormikContext<IAchSchema>()

    return (
        <div>
            <FormLabel title='Title *' />
            <XInput
                data-testid='ach-title-input'
                disabled={viewMode}
                readOnly={viewMode}
                autoFocus={true}
                value={formikContext.values.title}
                name='title'
                onChange={formikContext.handleChange}
                error={formikContext.touched.title && Boolean(formikContext.errors.title)}
                errorMessage={formikContext.errors.title}
            />
        </div>
    )
}
