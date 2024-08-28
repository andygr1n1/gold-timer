import { useMutation } from '@tanstack/react-query'
import { useInvalidateStories } from '@/modules/stories/components/story-editor-dialog/hooks/useInvalidateStories'
import { mutation_updateStoryIsFavorite } from '@/modules/stories/services/insert-story/mutation_updateStoryIsFavorite'

export const useUpdateStoryIsFavorite = () => {
    const { onSuccess } = useInvalidateStories()

    const mutation = useMutation({
        mutationFn: ({ id, isFavorite }: { id: string; isFavorite: boolean }) =>
            mutation_updateStoryIsFavorite({ id, isFavorite }),
        onSuccess: () => {
            onSuccess()
        },
    })

    const toggleFavorite = ({ id, isFavorite }: { id: string; isFavorite: boolean }) => {
        mutation.mutate({ id, isFavorite })
    }

    return { toggleFavorite }
}
