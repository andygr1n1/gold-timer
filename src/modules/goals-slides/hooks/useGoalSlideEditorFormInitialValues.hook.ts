import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { type IGoalSlide } from '../service/types.ts'

export const useGoalSlideEditorFormInitialValues = (): { initialValues: IGoalSlide } => {
    return { initialValues: initialValues() }
}

const initialValues = (): IGoalSlide => ({
    id: crypto.randomUUID(),
    title: '',
    created_at: formatDateWithTimezone(),
    img_path: '',
    active: true,
})
