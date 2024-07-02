import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { IGoalSlideSchema } from '../service/types.ts'

export const useGoalSlideEditorFormInitialValues = (): { initialValues: IGoalSlideSchema } => {
    return { initialValues: initialValues() }
}

const initialValues = (): IGoalSlideSchema => ({
    id: crypto.randomUUID(),
    title: '',
    created_at: formatDateWithTimezone(),
    img_path: '',
    active: true,
})
