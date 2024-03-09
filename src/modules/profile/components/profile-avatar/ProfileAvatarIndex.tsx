import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/StoreProvider'
import { useSelectUploadFile } from '@/functions/useSelectUploadFile'
import { IconUpload } from '@/assets/icons/IconUpload'
import { useFetchAvatar } from '@/modules/profile/service/fetch-avatar/useFetchAvatar'

export const ProfileAvatarIndex = observer(() => {
    const { isLoading, avatar } = useFetchAvatar()
    const { img_cropped_src, onChangeField } = useUserStore()

    return (
        <div className='group relative mx-auto mb-10 w-fit rounded-full'>
            <div
                title='upload image'
                className='duration-240 flex flex-col items-center justify-center rounded-full bg-transparent'
            >
                {img_cropped_src ? (
                    <img
                        src={img_cropped_src}
                        className='h-full max-h-[240px] min-h-[240px] w-full min-w-[240px] max-w-[240px] rounded-full '
                    />
                ) : (
                    <>
                        <div className='group relative cursor-pointer'>
                            {avatar ? (
                                <>
                                    <img
                                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/avatars/${avatar}`}
                                        className='animate-opacity-5 h-full max-h-[240px] min-h-[240px] w-full min-w-[240px] max-w-[240px] cursor-pointer rounded-full duration-300 group-hover:opacity-20 group-hover:shadow-md '
                                    />
                                    <div className='absolute top-0 mx-auto flex h-[240px] w-[240px] items-center justify-center rounded-full border-solid border-gray-500/10'>
                                        <IconUpload
                                            width={64}
                                            height={64}
                                            className='text-cText opacity-0 duration-300 group-hover:text-blue-600 group-hover:opacity-100'
                                        />
                                    </div>
                                    <div className='animate-ping-bg absolute left-0 top-[-3px] !z-0 h-full w-full  rounded-full bg-blue-500/30 opacity-100 transition '></div>
                                </>
                            ) : (
                                <div className='mx-auto flex h-[240px] w-[240px] items-center justify-center rounded-full border-solid border-gray-500/10'>
                                    {!isLoading && (
                                        <IconUpload
                                            width={64}
                                            height={64}
                                            className='text-cText opacity-70 duration-300 group-hover:text-blue-600 group-hover:opacity-100'
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </>
                )}
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
