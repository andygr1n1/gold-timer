import { getUserId } from '@/helpers/getUserId'
import { processError } from '@/helpers/processError.helper'
import { Icon } from '@iconify/react'
import { Avatar, Upload } from 'antd'
import { RcFile } from 'antd/es/upload'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { cleanAvatar } from '../../service/cleanAvatars.service'
import { useUserStore } from '@/StoreProvider'

const beforeUpload = (file: RcFile) => {
    const isFormatValid =
        file.type === 'image/jpeg' ||
        file.type === 'image/png' ||
        file.type === 'image/svg' ||
        file.type === 'image/svg+xml'

    if (!isFormatValid) {
        processError('You can only upload JPG/PNG/SVG file!')
    }
    const isLt1M = file.size / 1024 / 1024 < 0.4
    if (!isLt1M) {
        processError('Image must smaller than 400KB!')
    }

    return isFormatValid && isLt1M
}

export const ProfileAvatar: React.FC = observer(() => {
    const { avatar, onChangeField } = useUserStore()
    const [activeAvatar, setActiveAvatar] = useState('')

    useEffect(() => {
        setActiveAvatar(avatar || '')
    }, [avatar])

    const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
    const xapikey = import.meta.env.VITE_X_API_KEY

    return (
        <div>
            <div className='relative flex  w-[250px] flex-col rounded-md bg-global-bg p-5'>
                <h4 className='mb-4'>Avatar</h4>
                <div className='items-top flex h-full w-full justify-center  '>
                    <Upload
                        showUploadList={false}
                        name={getUserId()}
                        beforeUpload={beforeUpload}
                        maxCount={1}
                        accept='image/*'
                        className='relative cursor-pointer'
                        action={`${endpoint}file-upload-avatar`}
                        headers={{ 'x-api-key': xapikey }}
                        listType='picture'
                        onChange={({ file }) => {
                            if (file.status === 'done') {
                                const fileName = file.response.fileName
                                if (!fileName) return
                                const avatarToDelete = avatar
                                onChangeField('avatar', fileName)
                                avatarToDelete && cleanAvatar(avatar)
                            }
                        }}
                    >
                        {activeAvatar ? (
                            <div className='group relative'>
                                <img
                                    src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/avatars/${activeAvatar}`}
                                    width={200}
                                    height={200}
                                    className='animate-opacity-3 rounded-full'
                                />
                                <div
                                    className='
                                    absolute top-0 z-10 flex h-full w-full animate-opacity-5 items-center
                                    justify-center rounded-full bg-transparent text-xl text-white opacity-0  group-hover:opacity-50'
                                >
                                    <Icon
                                        icon='line-md:uploading-loop'
                                        className='hidden animate-opacity-5 group-hover:flex'
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            </div>
                        ) : (
                            <Avatar
                                className='!m-0 h-[200px] w-[200px] animate-opacity-5 cursor-pointer'
                                icon={<Icon icon='carbon:user-avatar-filled' width={200} height={200} />}
                            />
                        )}
                    </Upload>
                </div>
            </div>
        </div>
    )
})
