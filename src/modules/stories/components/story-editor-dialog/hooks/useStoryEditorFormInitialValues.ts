import { type INewStorySchema } from '@/modules/stories/services/types.ts'

export const useStoryEditorFormInitialValues = () => {
    const initialValues: INewStorySchema = initial()

    return { initialValues }
}

const initial = (): INewStorySchema => ({
    id: crypto.randomUUID(),
    title: '',
})
