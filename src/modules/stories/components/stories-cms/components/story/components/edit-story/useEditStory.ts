import { useStoryEditorDialog$ } from '@/modules/stories/components/story-editor-dialog/mst/provider'

export const useEditStory = () => {
    const { onChangeField } = useStoryEditorDialog$()

    const editStory = ({ id }: { id: string }) => {
        onChangeField('storyId', id)
        onChangeField('open', true)
    }

    return { editStory }
}
