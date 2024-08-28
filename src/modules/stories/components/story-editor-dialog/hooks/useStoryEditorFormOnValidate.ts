import { type INewStorySchema } from '@/modules/stories/services/types'

export const useStoryEditorFormOnValidate = () => {
    const validate = (values: INewStorySchema) => {
        const errors: Partial<Record<keyof INewStorySchema, string>> = {}

        if (!values.title.length) {
            errors.title = 'Required field'
        }

        return errors
    }

    return { validate }
}
