import { StoryImgCropDialog } from './components/story-img-crop-dialog/StoryImgCropDialog'
import { StoryImgCropDialogTrigger } from './components/story-img-crop-dialog/StoryImgCropDialogTrigger'
import { StoryTitleInput } from './components/StoryTitleInput'

export const NewStoryInfo: React.FC = () => {
    return (
        <div className='flex flex-col gap-5'>
            <StoryTitleInput />
            <StoryImgCropDialogTrigger />
            {/* * */}
            {/* D I A L O G S */}
            <StoryImgCropDialog />
        </div>
    )
}
