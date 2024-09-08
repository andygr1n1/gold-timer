import { AchCreatedAt } from './components/AchCreatedAt'
import { AchCreatedAtInput } from './components/AchCreatedAtInput'
import { AchDescriptionRichInput } from './components/AchDescriptionRichInput'
import { AchImgCropDialog } from './components/ach-img-crop-dialog/AchImgCropDialog'
import { AchImgCropDialogTrigger } from './components/ach-img-crop-dialog/AchImgCropDialogTrigger'
import { AchTitleInput } from './components/AchTitleInput'

export const AchInfo: React.FC = () => {
    return (
        <>
            <AchCreatedAt />
            <div className='flex flex-col gap-5'>
                <AchTitleInput />
                <AchDescriptionRichInput />
                <AchCreatedAtInput />
                <AchImgCropDialogTrigger />
                {/* * */}
                {/* D I A L O G S */}
                <AchImgCropDialog />
            </div>
        </>
    )
}
