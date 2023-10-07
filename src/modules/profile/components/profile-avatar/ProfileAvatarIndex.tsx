import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/StoreProvider'
import { onSelectUploadFile } from '@/functions/onSelectUploadFile'
import { Avatar } from 'antd'

export const ProfileAvatarIndex = observer(() => {
    const { img_cropped_src, onChangeField, avatar } = useUserStore()

    return (
        <div className='group relative mx-auto w-fit rounded-full'>
            <div
                title='upload image'
                className='duration-280 flex flex-col items-center justify-center rounded-full bg-transparent'
            >
                {img_cropped_src ? (
                    <img src={img_cropped_src} className='h-full max-h-[280px] w-full max-w-[280px] rounded-full ' />
                ) : (
                    <>
                        <div className='group relative cursor-pointer'>
                            {avatar ? (
                                <img
                                    src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/avatars/${avatar}`}
                                    className='animate-opacity-5 h-full max-h-[280px] w-full max-w-[280px] cursor-pointer rounded-full duration-300 group-hover:shadow-md group-hover:shadow-blue-500'
                                />
                            ) : (
                                <Avatar
                                    className='animate-opacity-5 !m-0 h-full max-h-[280px] w-full max-w-[280px]  cursor-pointer'
                                    icon={
                                        <Icon
                                            icon='carbon:user-avatar-filled'
                                            className='bg-global-bg text-global-2-bg'
                                            width={280}
                                            height={280}
                                        />
                                    }
                                />
                            )}
                            <div
                                className='
                                    animate-opacity-5  text-xBlue-1 absolute top-0 z-10 flex h-full
                                    w-full items-center justify-center rounded-full bg-transparent text-xl opacity-0  group-hover:opacity-100'
                            >
                                <Icon
                                    icon='line-md:uploading-loop'
                                    className='animate-opacity-5 hidden group-hover:flex'
                                    width={50}
                                    height={50}
                                />
                            </div>
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
                    onSelectUploadFile(e, (src: string) => {
                        onChangeField('img_src', src)
                    })
                }
            />
        </div>
    )
})
