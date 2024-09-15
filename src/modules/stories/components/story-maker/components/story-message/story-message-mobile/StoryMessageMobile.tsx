import { XTiptap } from '@/components-x/x-tiptap/XTiptap'
import type { IStoryMessage } from '@/modules/stories/services/types'
import { observer } from 'mobx-react-lite'
import { useUuidFromPath } from '@/hooks/useUuidFromPath'
import { cast } from '@/helpers'
import { useQueryClient } from '@tanstack/react-query'
import { extractTextFromHtml } from '@/helpers/extractTextFromHtml'
import { notify } from '@/helpers/processMessage'
import { format } from 'date-fns'
import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { useRef, useState } from 'react'
import { useStoryMaker$ } from '../../../mst/provider'
import { useSaveStoryMessage } from '../../../service/useSaveStoryMessage'
import { storyMakerService } from '../../../service/storyMakerService'
import { StoryMessageActionsDrawer } from './components/StoryMessageActionsDrawer'

const StoryMessageMobile: React.FC<{ message: IStoryMessage }> = observer(({ message }) => {
    const queryClient = useQueryClient()
    const { onChangeField, editSelectedMessageId } = useStoryMaker$()
    const { updateStoryMessage } = useSaveStoryMessage()
    const { id } = useUuidFromPath()
    const [openDrawer, setOpenDrawer] = useState(false)

    const timerRef = useRef<NodeJS.Timeout | undefined>(undefined)

    const onTouchStart = () => {
        if (editSelectedMessageId) return

        timerRef.current = setTimeout(() => {
            setOpenDrawer(true)
        }, 1200)
    }

    const handleMouseUpOrLeave = () => {
        if (editSelectedMessageId) return
        if (timerRef.current) {
            const guardTimeout = setTimeout(
                () => {
                    clearTimeout(timerRef.current)
                    clearTimeout(guardTimeout)
                    timerRef.current = undefined
                },
                openDrawer ? 0 : 500,
            )
        }
    }

    if (!message.description) return null

    return (
        <>
            <div
                onTouchStart={onTouchStart}
                onContextMenu={(e) => e.preventDefault()}
                onTouchEnd={handleMouseUpOrLeave}
                className='relative group px-2 py-4 duration-300 border-b-solid border-transparent hover:border-blue-500/10'
            >
                <div className='text-xs opacity-0 duration-300 group-hover:opacity-80 top-0 absolute  font-semibold font-kzen cursor-default text-cText'>
                    {format(formatDateWithTimezone(new Date(message.updated_at)), 'dd MMMM yyyy HH:mm')}
                    {message.updated_by_user?.name && ` by ${message.updated_by_user?.name}`}
                </div>
                <XTiptap
                    onSave={({ html }) => {
                        if (!extractTextFromHtml(html).trim().length) {
                            notify('Type something')
                            return
                        }
                        updateStoryMessage({
                            description: html,
                            id: cast(message.id),
                            onSuccess: () => {
                                onChangeField('editSelectedMessageId', undefined)
                                queryClient.invalidateQueries({
                                    queryKey: storyMakerService.useFetchStoryMessages(id),
                                })
                            },
                        })
                    }}
                    readonly={message.id !== editSelectedMessageId}
                    content={message.description}
                    customToolbar={message.id === editSelectedMessageId}
                />
            </div>
            <StoryMessageActionsDrawer message={message} openDrawer={openDrawer} onClose={() => setOpenDrawer(false)} />
        </>
    )
})

export default StoryMessageMobile
