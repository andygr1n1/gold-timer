import { useMutation } from '@tanstack/react-query'
import { mutation_insertStoryMessage } from './mutation_insertStoryMessage'

export const useSaveStoryMessage = () => {
    const mutation = useMutation({
        mutationFn: async ({ html, storyId, imgPath }: { html: string; storyId: string; imgPath: string[] }) => {
            return mutation_insertStoryMessage({ html, storyId, imgPath })
        },
    })

    const saveStoryMessage = ({
        html,
        storyId,
        imgPath,
        onSuccess,
        onSettled,
    }: {
        html: string
        storyId: string
        imgPath: string[]
        onSuccess?: () => void
        onSettled?: () => void
    }) => {
        mutation.mutate(
            { html, storyId, imgPath },
            {
                onSuccess: () => {
                    onSuccess?.()
                },
                onSettled,
            },
        )
    }

    return { saveStoryMessage }
}
