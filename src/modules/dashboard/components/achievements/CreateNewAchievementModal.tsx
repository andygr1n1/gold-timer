import { RdModal } from '@/components-rd/rdmodal/RdModal'
import { RdInput } from '@/components-rd/rdinput/RdInput'
import { useRootStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { Divider, Upload } from 'antd'
import axios from 'axios'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import TextArea from 'antd/lib/input/TextArea'
import { XButton } from '@/components-x/xbutton/XButton'

export const CreateNewAchievement: React.FC = observer(() => {
    const [openedModal, setOpenModal] = useState(false)
    const {
        achievements$: {
            new_achievement: { title, description, onChangeField, onCreateAchievementDisabled },
        },
    } = useRootStore()

    const onCreate = () => {
        setOpenModal(true)
    }
    const onOpen = () => {
        setOpenModal(true)
    }
    const onClose = () => {
        setOpenModal(false)
    }

    return (
        <>
            <div
                className='
                        group flex cursor-pointer items-center justify-center rounded-full
                        bg-sky-200 p-2 text-sky-600 duration-300
                        hover:text-sky-700
                        '
            >
                <Icon icon='ic:round-plus' width={50} onClick={onOpen} />
            </div>
            <RdModal
                title={<h3 className='font-mono font-semibold text-gray-700'>Create Achievement</h3>}
                open={openedModal}
                footer={null}
                onOk={onCreate}
                onCancel={onClose}
                width={'70vw'}
            >
                <div className='flex flex-auto flex-col'>
                    <div className='relative flex h-full w-full flex-col overflow-auto'>
                        <div>
                            <h3 className='py-2'>Title: </h3>
                            <RdInput
                                status={!!title.length ? undefined : 'error'}
                                value={title}
                                autoFocus={true}
                                onChange={(e) => onChangeField('title', e.target.value)}
                            />
                        </div>
                        <Divider />
                        <div>
                            <h3 className='py-2'>Description: </h3>
                            <TextArea
                                value={description}
                                autoFocus={true}
                                onChange={(e) => onChangeField('description', e.target.value)}
                            />
                        </div>
                        <Divider />
                        {/*                         <form
                            action='http://localhost:4554/kzen/file-upload'
                            method='post'
                            encType='multipart/form-data'
                        >
                            <input type='file' name='image' />
                            <button type='submit'>send</button>
                        </form> */}
                        <Upload
                            method='POST'
                            action='http://localhost:4554/kzen/file-upload'
                            listType='picture-card'
                            accept='image/png, image/jpeg, image/jpg, image/svg'
                            headers={{ encType: 'multipart/form-data' }}
                            maxCount={1}
                            name='image'
                            onChange={(res) => {
                                if (res.file.response && res.file.status === 'done') {
                                    onChangeField('img_path', res.file.response.image)
                                }
                            }}
                            onRemove={(res) => {
                                if (!res.response.image) return

                                onChangeField('img_path', '')

                                axios.delete('http://localhost:4554/kzen/file-remove', {
                                    headers: {
                                        // Authorization: authorizationToken,
                                    },
                                    data: {
                                        data: res.response.image,
                                    },
                                })
                            }}
                        >
                            <XButton>Upload</XButton>
                        </Upload>
                    </div>
                </div>
                <div className='flex h-[40px] w-full items-center justify-center gap-5'>
                    <XButton disabled={onCreateAchievementDisabled} className='w-[200px]' onClick={() => onCreate()}>
                        Create Achievement
                    </XButton>
                </div>
            </RdModal>
        </>
    )
})
