import { XTiptap } from '@/components-x/x-tiptap/XTiptap'
import type { IStoryMessage } from '@/modules/stories/services/types'
import { useStoryMaker$ } from '../../mst/provider'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { StoryMessageDropdownRender } from './StoryMessageDropdownRender'
import { observer } from 'mobx-react-lite'
import { useSaveStoryMessage } from '../../service/useSaveStoryMessage'
import { useUuidFromPath } from '@/hooks/useUuidFromPath'
import { cast } from '@/helpers'
import { storyMakerService } from '../../service/storyMakerService'
import { useQueryClient } from '@tanstack/react-query'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import type { MEDIA_QUERY_VALUES_ENUM } from '@/hooks/useMatchMedia.hook'
import { extractTextFromHtml } from '@/helpers/extractTextFromHtml'
import { notify } from '@/helpers/processMessage'

export const StoryMessage: React.FC<{ message: IStoryMessage; isMobile: MEDIA_QUERY_VALUES_ENUM }> = observer(
    ({ message, isMobile }) => {
        const { popoverState, setPopoverState } = useTogglePopoverState()
        const queryClient = useQueryClient()
        const { onChangeField, editSelectedMessageId } = useStoryMaker$()
        const { updateStoryMessage } = useSaveStoryMessage()
        const { id } = useUuidFromPath()

        if (!message.description) return null

        const onClose = () => {
            setPopoverState(false)
        }

        return (
            <XDropdown
                open={popoverState}
                onOpenChange={() => {
                    setPopoverState(!popoverState)
                }}
                trigger={['contextMenu', isMobile && 'click']}
                dropdownRender={() => <StoryMessageDropdownRender message={message} onClose={onClose} />}
            >
                <div className='relative group p-2 duration-300 border-b-solid border-transparent hover:border-blue-500/10'>
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
            </XDropdown>
        )
    },
)
