import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import { type IAch } from '@/modules/achievements/services/types'

export const AchTitleInput = () => {
    const formikContext = useFormikContext<IAch>()

    return (
        <div>
            <FormLabel title='Title *' />
            <XInput
                data-testid='ach-title-input'
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
