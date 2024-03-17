import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/StoreProvider'
import { useSelectUploadFile } from '@/functions/useSelectUploadFile'
import { useFetchAvatar } from '@/modules/profile/service/fetch-avatar/useFetchAvatar'
import { ProfileAvatar } from '@/modules/profile/components/profile-avatar/ProfileAvatar'
import { IconUpload } from '@/assets/icons'

export const ProfileAvatarIndex = observer(() => {
    const { avatar } = useFetchAvatar()
    const { onChangeField } = useUserStore()

    return (
        <div className='group relative mx-auto mb-10 w-fit rounded-full'>
            <ProfileAvatar avatar={avatar} />
            <div className='w-full h-full flex absolute opacity-0 group-hover:opacity-100 top-0 z-10 transition-all rounded-full duration-300 items-center justify-center bg-blue-100/20'>
                <IconUpload className='min-w-[50px] min-h-[50px] text-blue-600 ' />
            </div>
            <input
                title='upload'
                className='absolute left-0 top-0 z-20 flex h-full w-full cursor-pointer rounded-full opacity-0'
                accept='image/*'
                id='file_input'
                type='file'
                onChange={(e) =>
                    useSelectUploadFile(e, (src: string) => {
                        onChangeField('img_src', src)
                    })
                }
            />
        </div>
    )
})
