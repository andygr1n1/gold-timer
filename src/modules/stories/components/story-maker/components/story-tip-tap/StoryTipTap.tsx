import { XTiptap } from '@/components-x/x-tiptap/XTiptap'
import { observer } from 'mobx-react-lite'
import { useSaveStoryMessage } from '../../service/useSaveStoryMessage'
import { useUuidFromPath } from '@/hooks/useUuidFromPath'
import { cast } from '@/helpers'
import { storyMakerService } from '../../service/storyMakerService'
import { useQueryClient } from '@tanstack/react-query'

export const StoryTipTap: React.FC = observer(() => {
    const queryClient = useQueryClient()
    const { saveStoryMessage } = useSaveStoryMessage()
    const { id } = useUuidFromPath()
    return (
        <div className='flex flex-col w-full'>
            <XTiptap
                content=''
                customToolbar
                onSave={(html) => {
                    saveStoryMessage({
                        html,
                        imgPath: [],
                        storyId: cast(id),
                        onSuccess: () => {
                            console.log('hey there')
                            queryClient.invalidateQueries({ queryKey: storyMakerService.useFetchStoryMessages(id) })
                        },
                    })
                }}
            ></XTiptap>
        </div>
    )
})
