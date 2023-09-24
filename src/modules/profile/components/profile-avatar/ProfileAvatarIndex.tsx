import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/StoreProvider'
import { onSelectUploadFile } from '@/functions/onSelectUploadFile'
import { Avatar } from 'antd'

export const ProfileAvatarIndex = observer(() => {
    const { img_cropped_src, onChangeField, avatar } = useUserStore()

    return (
        <div className='outline-xBlue-1 group relative mx-auto flex justify-center rounded-full bg-transparent outline-2 duration-300 hover:shadow-md hover:shadow-blue-500 hover:outline-dotted'>
            <div
                title='upload image'
                className='duration-280 flex flex-col items-center justify-center rounded-full bg-transparent'
            >
                {img_cropped_src ? (
                    <img src={img_cropped_src} className='h-[280px] w-[280px] rounded-full ' />
                ) : (
                    <>
                        <div className='group relative cursor-pointer'>
                            {avatar ? (
                                <div className='animate-opacity-5 !m-0 h-[280px] w-[280px] cursor-pointer'>
                                    <img
                                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/avatars/${avatar}`}
                                        width={280}
                                        height={280}
                                        className='animate-opacity-3 rounded-full'
                                    />
                                </div>
                            ) : (
                                <Avatar
                                    className='animate-opacity-5 !m-0 h-[280px] w-[280px] cursor-pointer'
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
                className='absolute z-20 flex h-[280px] w-[280px] cursor-pointer opacity-0'
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
