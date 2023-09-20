import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/StoreProvider'
import { onSelectUploadFile } from '@/functions/onSelectUploadFile'
import { Avatar } from 'antd'

export const ProfileAvatarIndex = observer(() => {
    const { img_cropped_src, onChangeField, avatar } = useUserStore()

    return (
        <div className='group relative m-auto flex justify-center'>
            <div
                title='upload image'
                className='flex flex-col items-center justify-center rounded-full bg-transparent duration-300'
            >
                {img_cropped_src ? (
                    <img src={img_cropped_src} className='h-[300px] w-[300px] rounded-full ' />
                ) : (
                    <>
                        <div className='group relative cursor-pointer'>
                            {avatar ? (
                                <div className='animate-opacity-5 !m-0 h-[300px] w-[300px] cursor-pointer'>
                                    <img
                                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/avatars/${avatar}`}
                                        width={300}
                                        height={300}
                                        className='animate-opacity-3 rounded-full'
                                    />
                                </div>
                            ) : (
                                <Avatar
                                    className='animate-opacity-5 !m-0 h-[300px] w-[300px] cursor-pointer'
                                    icon={
                                        <Icon
                                            icon='carbon:user-avatar-filled'
                                            className='bg-global-bg text-global-2-bg'
                                            width={300}
                                            height={300}
                                        />
                                    }
                                />
                            )}
                            <div
                                className='
                                    animate-opacity-5 absolute top-0 z-10 flex h-full w-full items-center
                                    justify-center rounded-full bg-transparent text-xl text-global-3-bg opacity-0  group-hover:opacity-50'
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
                className='absolute z-20 flex h-[300px] w-[300px] cursor-pointer opacity-0'
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
