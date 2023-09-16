import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { Buffer } from 'buffer'
import { processError } from '@/helpers/processError.helper'
import { useSprintsStore } from '@/StoreProvider'

export const NewSprintImage = observer(() => {
    const { new_sprint } = useSprintsStore()
    if (!new_sprint) return null
    const { img_cropped_src, onChangeField } = new_sprint

    const onSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = e.target.files?.[0]
            if (!file) return
            const buf = await file.arrayBuffer()
            const base64 = Buffer.from(buf).toString('base64')
            const src = `data:${file.type};base64, ${base64}`
            onChangeField('img_src', src)

            // this hack is to enforce file upload on selecting one artifact multiple times
            e.target.value = ''
        } catch (e) {
            processError(e)
        }
    }

    return (
        <div className='h-46 w-46 group relative m-auto flex justify-center'>
            <div
                title='create new sprint'
                className='flex h-40 w-40 flex-col items-center justify-center rounded-md bg-cyan-600 text-white shadow-xl shadow-slate-900/50 duration-300 group-hover:bg-cyan-700'
            >
                {img_cropped_src ? (
                    <img src={img_cropped_src} className='h-40 w-40 rounded-md shadow-slate-900/50' />
                ) : (
                    <Icon icon='game-icons:sprint' width={25} height={25} className='' />
                )}
            </div>
            <input
                title='click and upload'
                className='absolute flex h-48 w-48 cursor-pointer opacity-0'
                accept='image/*'
                id='file_input'
                type='file'
                onChange={onSelectFile}
            />
        </div>
    )
})
