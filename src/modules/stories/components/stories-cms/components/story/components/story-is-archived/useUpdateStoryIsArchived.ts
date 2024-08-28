import { useMutation } from '@tanstack/react-query'
import { useInvalidateStories } from '@/modules/stories/components/story-editor-dialog/hooks/useInvalidateStories'
import { mutation_updateStoryIsArchived } from '@/modules/stories/services/insert-story/mutation_updateStoryIsArchived'

export const useUpdateStoryIsArchived = () => {
    const { onSuccess } = useInvalidateStories()

    const mutation = useMutation({
        mutationFn: ({ id, isArchived }: { id: string; isArchived: boolean }) =>
            mutation_updateStoryIsArchived({ id, isArchived }),
        onSuccess: () => {
            onSuccess()
        },
    })

    const toggleArchived = ({ id, isArchived }: { id: string; isArchived: boolean }) => {
        mutation.mutate({ id, isArchived })
    }

    return { toggleArchived }
}
