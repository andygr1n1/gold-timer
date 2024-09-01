import { IconEdit, IconNew } from '@/assets/icons'
import { useStoryEditorDialog$ } from '../mst/provider'

const StoryEditorTitle = () => {
    const { storyId } = useStoryEditorDialog$()

    return (
        <span className='flex items-center justify-start gap-5 focus-visible:outline-none min-w-[200px]' tabIndex={0}>
            {storyId ? (
                <>
                    <IconEdit width={28} height={28} />
                    Edit Story
                </>
            ) : (
                <>
                    <IconNew width={28} height={28} />
                    New Story
                </>
            )}
        </span>
    )
}

export default StoryEditorTitle
