import { type INewStorySchema, type IStory } from '@/modules/stories/services/types.ts'
import { useStoryEditorDialog$ } from '../mst/provider'
import { useFetchStory } from '@/modules/stories/services/fetch-story/useFetchStory'

export const useStoryEditorFormInitialValues = () => {
    const { storyId } = useStoryEditorDialog$()
    const { story } = useFetchStory({ storyId })
    const initialValues: INewStorySchema = initial(story)

    return { initialValues }
}

const initial = (story: IStory | undefined | null): INewStorySchema => ({
    id: story?.id || '',
    title: story?.title || '',
    img_path: story?.img_path || '',
})
