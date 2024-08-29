import { observer } from 'mobx-react-lite'
import { useStoryData } from '../../hooks/useStoryData'
import { XSkeleton } from '@/components-x/x-skeleton/XSkeleton'
import { NoImage } from '@/components/NoImage'

export const StoryMakerDetails: React.FC = observer(() => {
    const { story, isLoading } = useStoryData()
    if (!story) return null
    return (
        <div className='flex gap-4 animate-opacity-3 w-full h-32'>
            {isLoading && <XSkeleton length={3} />}
            <div className='h-32 w-32'>
                {story.img_path ? (
                    <img
                        src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}stories/${story.img_path}`}
                        className='animate-opacity-3 rounded-lg h-32 w-32'
                    />
                ) : (
                    <NoImage />
                )}
            </div>
            <div className='py-2 text-xl font-atkinson text-cText'>{story?.title}</div>
        </div>
    )
})
