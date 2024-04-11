import { rootStore$ } from '@/app/StoreProvider'
import { useSelectUploadFile } from '@/functions/useSelectUploadFile'
import { ProfileAvatar } from '@/modules/profile/components/profile-avatar/components/ProfileAvatar'
import { ProfileImageCropDialog } from './ProfileImageCropDialog'
import { UploadInput } from '@/components/UploadInput'
import { UploadHoverAnimation } from './components/UploadHoverAnimation'

export const ProfileAvatarIndex = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        useSelectUploadFile(e, (src: string) => {
            rootStore$.user$.onChangeField('img_src', src)
        })
    }

    return (
        <>
            <div data-testid='profile-avatar-index' className='group relative mx-auto mb-10 w-fit rounded-full'>
                <ProfileAvatar />
                <UploadHoverAnimation />
                <UploadInput onChange={onChange} />
            </div>
            {/* * */}
            {/* D I A L O G S */}
            <ProfileImageCropDialog />
        </>
    )
}
