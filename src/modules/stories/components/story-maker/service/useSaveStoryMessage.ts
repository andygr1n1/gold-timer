import { useMutation } from '@tanstack/react-query'
import { mutation_insertStoryMessage } from './mutation_insertStoryMessage'
import { mutation_updateStoryMessage } from './mutation_updateStoryMessage'
import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { useUuidFromPath } from '@/hooks/useUuidFromPath'
import { cast } from '@/helpers'
import { formatISO } from 'date-fns'

export const useSaveStoryMessage = () => {
    const { id: storyId } = useUuidFromPath()
    const createMutation = useMutation({
        mutationFn: async ({ html, storyId, imgPath }: { html: string; storyId: string; imgPath: string[] }) => {
            return mutation_insertStoryMessage({
                html,
                storyId,
                imgPath,
                updatedAt: formatDateWithTimezone(),
            })
        },
    })

    const updateMutation = useMutation({
        mutationFn: async ({ id, description }: { description: string; id: string }) => {
            return mutation_updateStoryMessage({
                description,
                id,
                storyId: cast(storyId),
                updatedAt: formatISO(new Date()),
            })
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
        createMutation.mutate(
            { html, storyId, imgPath },
            {
                onSuccess: () => {
                    onSuccess?.()
                },
                onSettled,
            },
        )
    }

    const updateStoryMessage = ({
        description,
        id,
        onSuccess,
        onSettled,
    }: {
        description: string
        id: string
        onSuccess?: () => void
        onSettled?: () => void
    }) => {
        updateMutation.mutate(
            { description, id },
            {
                onSuccess: () => {
                    onSuccess?.()
                },
                onSettled,
            },
        )
    }

    return { saveStoryMessage, updateStoryMessage }
}
