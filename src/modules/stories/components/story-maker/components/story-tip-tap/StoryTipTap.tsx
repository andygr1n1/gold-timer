import { XTiptap } from '@/components-x/x-tiptap/XTiptap'
import { observer } from 'mobx-react-lite'
import { useSaveStoryMessage } from '../../service/useSaveStoryMessage'
import { useUuidFromPath } from '@/hooks/useUuidFromPath'
import { cast } from '@/helpers'
import { storyMakerService } from '../../service/storyMakerService'
import { useQueryClient } from '@tanstack/react-query'
import { extractTextFromHtml } from '@/helpers/extractTextFromHtml'
import { notify } from '@/helpers/processMessage'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'

export const StoryTipTap: React.FC = observer(() => {
    const queryClient = useQueryClient()
    const { saveStoryMessage } = useSaveStoryMessage()
    const { id } = useUuidFromPath()
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    return (
        <div className='flex flex-col w-full'>
            <XTiptap
                showSaveButtonTooltip={!isMobile}
                content=''
                customToolbar
                onSave={({ html, clearEditor }) => {
                    if (!extractTextFromHtml(html).trim().length) {
                        notify('Type something')
                        return
                    }
                    saveStoryMessage({
                        html,
                        imgPath: [],
                        storyId: cast(id),
                        onSuccess: () => {
                            queryClient.invalidateQueries({ queryKey: storyMakerService.useFetchStoryMessages(id) })
                        },
                    })
                    clearEditor()
                }}
            ></XTiptap>
        </div>
    )
})
