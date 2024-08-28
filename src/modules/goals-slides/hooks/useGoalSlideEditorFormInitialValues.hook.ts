import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { type IGoalSlideSchema } from '../service/types.ts'

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
