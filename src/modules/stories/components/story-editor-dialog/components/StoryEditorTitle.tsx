import { IconNew } from '@/assets/icons'

const StoryEditorTitle = () => {
    return (
        <span className='flex items-center justify-center gap-5 focus-visible:outline-none min-w-[200px]' tabIndex={0}>
            <IconNew width={28} height={28} />
            New Story
        </span>
    )
}

export default StoryEditorTitle
