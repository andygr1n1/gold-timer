import { useInvalidateStories } from '@/modules/stories/components/story-editor-dialog/hooks/useInvalidateStories'
import { mutation_updateStoryDeletedAt } from '@/modules/stories/services/insert-story/mutation_updateStoryDeletedAt'
import { useMutation } from '@tanstack/react-query'

export const useUpdateStoryDeletedAt = () => {
    const { onSuccess } = useInvalidateStories()

    const mutation = useMutation({
        mutationFn: ({ id, deletedAt }: { id: string; deletedAt: null | string }) =>
            mutation_updateStoryDeletedAt({ id, deletedAt }),
        onSuccess: () => {
            onSuccess()
        },
    })

    const updateStoryDeletedAt = ({ id, deletedAt }: { id: string; deletedAt: null | string }) => {
        mutation.mutate({ id, deletedAt })
    }

    return { updateStoryDeletedAt }
}
